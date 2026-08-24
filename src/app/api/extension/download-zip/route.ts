import { NextResponse } from 'next/server';
import puppeteer, { Browser } from 'puppeteer-core';
import JSZip from 'jszip';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

const maleNames = ["David Miller","James Wilson","Alex Johnson","Michael Brown","Chris Taylor","Daniel Smith","Ethan Harris","Lucas Martin","Matthew Anderson","Robert Thomas","William Davis"];
const femaleNames = ["Emily Davis","Sarah Jenkins","Jessica Taylor","Amanda Martinez","Laura White","Sophia Clark","Olivia Lewis","Emma Walker","Hannah Hall","Chloe Allen"];
const neutralNames = ["Sam Taylor","Jordan Lee","Taylor Morgan","Alex Avery","Morgan Reed","Riley Jordan","Dakota Smith"];

const sampleReviews = [
  { title: "Game changer for our daily workflow!", content: "We integrated this into our product team's process last month and saw an immediate 35% boost in productivity. The interface is slick, intuitive, and lightning fast." },
  { title: "Exceptional platform & outstanding customer support", content: "I ran into a minor setup issue on day one and their support team responded in under 4 minutes with a personalized solution. Unbelievable service!" },
  { title: "Replaced 3 separate subscriptions with this single tool", content: "Clean UX, great API stability, and constant updates. Saves us over $400/month compared to our previous software stack." },
  { title: "Exceptional build quality and super fast shipping!", content: "Ordered on Tuesday and received it by Thursday morning. Packaging was eco-friendly and premium. The item looks even better in person than in product photos." },
  { title: "Best purchase I've made all year", content: "The attention to detail and material texture are top notch. Fits perfectly and feels durable enough to last for years." },
  { title: "First-class service from start to finish", content: "The specialists were punctual, professional, and went above and beyond to make sure everything was set up cleanly. Will definitely hire again." }
];

function getRandomItem<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
function getRandomInt(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1)) + min; }

function getUserAvatarUrl(gender: string, index: number): string {
  const imgId = (index % 90) + 1;
  if (gender === "male") return `https://randomuser.me/api/portraits/men/${imgId}.jpg`;
  if (gender === "female") return `https://randomuser.me/api/portraits/women/${imgId}.jpg`;
  return `https://i.pravatar.cc/150?img=${imgId}`;
}

function generateReviewData(platform: string, category: string, sentiment: string, index: number, customFields?: any) {
  const gender = customFields?.gender || getRandomItem(["male", "female", "neutral"]);
  let nameList = neutralNames;
  if (gender === "male") nameList = maleNames;
  if (gender === "female") nameList = femaleNames;

  const defaultName = getRandomItem(nameList);
  const name = customFields?.name?.trim() || defaultName;
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const username = customFields?.username?.trim() || `${cleanName}_${getRandomInt(10, 99)}`;

  let rating = customFields?.rating !== undefined ? Number(customFields.rating) : getRandomInt(4, 5);
  if (sentiment === "5star") rating = 5;
  else if (sentiment === "critical") rating = getRandomInt(1, 3);

  const tmpl = getRandomItem(sampleReviews);
  const avatarUrl = customFields?.avatar || getUserAvatarUrl(gender, index + getRandomInt(1, 20));

  return {
    id: `rev_${Math.random().toString(36).substring(2, 10)}`,
    platform,
    name,
    username: username.startsWith('@') ? username.slice(1) : username,
    avatar: avatarUrl,
    gender,
    rating,
    date: customFields?.date ? new Date(customFields.date).toISOString() : new Date(Date.now() - getRandomInt(1, 30) * 86400000).toISOString(),
    title: customFields?.title?.trim() || tmpl.title,
    content: customFields?.content?.trim() || tmpl.content,
    likes: customFields?.likes !== undefined ? Number(customFields.likes) : getRandomInt(25, 650),
    replies: customFields?.replies !== undefined ? Number(customFields.replies) : getRandomInt(3, 45),
    shares: customFields?.shares !== undefined ? Number(customFields.shares) : getRandomInt(1, 30),
    verified: customFields?.verified !== undefined ? Boolean(customFields.verified) : true,
    images: customFields?.images && Array.isArray(customFields.images) ? customFields.images : (customFields?.attachedImage ? [customFields.attachedImage] : []),
    deviceViewMode: "desktop",
    facebookContentType: "post",
    facebookViewMode: "desktop",
    instagramContentType: "post",
    appstoreTemplate: "editorial",
  };
}

async function captureRealScreenshot(reviewData: any, browser: Browser): Promise<ArrayBuffer> {
  const page = await browser.newPage();

  try {
    await page.setViewport({ width: 1200, height: 1000, deviceScaleFactor: 2 });

    // Open render-card
    await page.goto('http://localhost:3000/render-card', {
      waitUntil: 'domcontentloaded',
      timeout: 10000,
    });

    // Inject data and trigger re-render
    await page.evaluate((data) => {
      (window as any).__REVIEW_DATA__ = data;
      window.postMessage({ type: 'SET_REVIEW_DATA', data }, '*');
    }, reviewData);

    // Wait until #screenshot-target has rendered content with non-zero height
    await page.waitForFunction(() => {
      const el = document.querySelector('#screenshot-target');
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.height > 40 && rect.width > 100;
    }, { timeout: 8000 });

    // Small delay to allow fonts and layout to settle
    await new Promise((r) => setTimeout(r, 200));

    // Get the rendered card element
    const cardHandle = (await page.$('#screenshot-target > *')) || (await page.$('#screenshot-target'));

    if (!cardHandle) {
      throw new Error('Screenshot card element not found');
    }

    const rawScreenshot = await cardHandle.screenshot({
      type: 'png',
      omitBackground: true,
    });

    if (rawScreenshot instanceof Uint8Array) {
      return rawScreenshot.buffer.slice(
        rawScreenshot.byteOffset,
        rawScreenshot.byteOffset + rawScreenshot.byteLength
      ) as ArrayBuffer;
    }

    const b = Buffer.from(rawScreenshot as string, 'base64');
    return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;
  } finally {
    await page.close().catch(() => {});
  }
}

export async function POST(req: Request) {
  let browser: Browser | null = null;

  try {
    const body = await req.json().catch(() => ({}));
    const platforms: string[] = Array.isArray(body.platforms) && body.platforms.length > 0
      ? body.platforms
      : ['google', 'amazon', 'trustpilot'];

    const category = body.category || 'saas';
    const sentiment = body.sentiment || 'mixed';
    const customReview = body.customReview || body.reviewData || null;

    const reviewsToRender = Array.isArray(body.reviews) && body.reviews.length > 0
      ? body.reviews
      : platforms.map((p, idx) => generateReviewData(p, category, sentiment, idx, customReview));

    browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--window-size=1200,1000',
        '--font-render-hinting=medium',
      ],
    });

    // SINGLE PLATFORM: Return direct PNG screenshot file
    if (reviewsToRender.length === 1) {
      const review = reviewsToRender[0];
      const pngBuffer = await captureRealScreenshot(review, browser);
      const platformName = (review.platform || 'review').toLowerCase();

      return new NextResponse(pngBuffer, {
        status: 200,
        headers: {
          ...corsHeaders(),
          'Content-Type': 'image/png',
          'Content-Disposition': `attachment; filename="review_${platformName}_${review.rating || 5}star.png"`,
        },
      });
    }

    // MULTIPLE PLATFORMS: Package all screenshots into root-level ZIP
    const zip = new JSZip();

    for (let i = 0; i < reviewsToRender.length; i++) {
      const review = reviewsToRender[i];
      const platformName = (review.platform || 'review').toLowerCase();
      const num = String(i + 1).padStart(2, '0');
      const filename = `review_${num}_${platformName}_${review.rating || 5}star.png`;

      const pngBuffer = await captureRealScreenshot(review, browser);
      zip.file(filename, pngBuffer);
    }

    const zipArrayBuffer = await zip.generateAsync({ type: 'arraybuffer' });

    return new NextResponse(zipArrayBuffer, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="reviewcraft_${reviewsToRender.length}_platforms_screenshots_${Date.now()}.zip"`,
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Screenshot download error:', msg);
    return NextResponse.json(
      { error: 'Screenshot generation failed: ' + msg },
      { status: 500, headers: corsHeaders() }
    );
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}
