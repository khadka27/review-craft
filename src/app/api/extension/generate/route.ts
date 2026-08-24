import { NextResponse } from 'next/server';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

const maleNames = ["David Miller", "James Wilson", "Alex Johnson", "Michael Brown", "Chris Taylor", "Daniel Smith", "Ethan Harris", "Lucas Martin", "Matthew Anderson", "Robert Thomas", "William Davis", "Joseph White"];
const femaleNames = ["Emily Davis", "Sarah Jenkins", "Jessica Taylor", "Amanda Martinez", "Laura White", "Sophia Clark", "Olivia Lewis", "Emma Walker", "Hannah Hall", "Chloe Allen", "Mia Hernandez", "Harper Scott"];
const neutralNames = ["Sam Taylor", "Jordan Lee", "Taylor Morgan", "Alex Avery", "Morgan Reed", "Riley Jordan", "Dakota Smith", "Casey Wright"];

const sampleReviews = [
  { title: "Game changer for our daily workflow!", content: "We integrated this into our product team's process last month and saw an immediate 35% boost in productivity. The interface is slick, intuitive, and lightning fast." },
  { title: "Exceptional platform & outstanding customer support", content: "I ran into a minor setup issue on day one and their support team responded in under 4 minutes with a personalized solution. Unbelievable service!" },
  { title: "Replaced 3 separate subscriptions with this single tool", content: "Clean UX, great API stability, and constant updates. Saves us over $400/month compared to our previous software stack." },
  { title: "Exceptional build quality and super fast shipping!", content: "Ordered on Tuesday and received it by Thursday morning. Packaging was eco-friendly and premium. The item looks even better in person than in product photos." },
  { title: "Best purchase I've made all year", content: "The attention to detail and material texture are top notch. Fits perfectly and feels durable enough to last for years." },
  { title: "First-class service from start to finish", content: "The specialists were punctual, professional, and went above and beyond to make sure everything was set up cleanly. Will definitely hire again." }
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const count = Math.min(Math.max(parseInt(body.count) || 10, 1), 100);
    const selectedPlatforms: string[] = Array.isArray(body.platforms) && body.platforms.length > 0
      ? body.platforms
      : ["google", "amazon", "trustpilot", "reddit", "twitter", "instagram", "facebook", "yelp", "g2", "youtube", "linkedin", "tiktok", "playstore", "appstore", "airbnb", "shopify", "ebay", "etsy"];

    const category = body.category || "saas";
    const sentiment = body.sentiment || "mixed";

    const reviews = [];

    for (let i = 0; i < count; i++) {
      const platform = selectedPlatforms[i % selectedPlatforms.length];
      const gender = getRandomItem(["male", "female", "neutral"]);
      
      let nameList = neutralNames;
      if (gender === "male") nameList = maleNames;
      if (gender === "female") nameList = femaleNames;
      
      const name = getRandomItem(nameList);
      const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const username = `${cleanName}_${getRandomInt(10, 99)}`;
      
      let rating = getRandomInt(4, 5);
      if (sentiment === "5star") rating = 5;
      else if (sentiment === "positive") rating = getRandomInt(4, 5);
      else if (sentiment === "critical") rating = getRandomInt(1, 3);
      else if (sentiment === "mixed") rating = getRandomInt(2, 5);

      const template = getRandomItem(sampleReviews);
      const avatarSeed = getRandomInt(1, 70);
      const avatarUrl = `https://i.pravatar.cc/150?img=${avatarSeed}`;

      const now = new Date();
      const daysAgo = getRandomInt(0, 30);
      const dateObj = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
      const dateStr = `${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}/${dateObj.getFullYear()}`;

      reviews.push({
        id: `api_rev_${Math.random().toString(36).substring(2, 10)}`,
        platform,
        name,
        username,
        gender,
        avatarUrl,
        rating,
        date: dateStr,
        title: template.title,
        content: template.content,
        likes: getRandomInt(15, 450),
        replies: getRandomInt(2, 50),
        shares: getRandomInt(1, 25),
        verified: true,
        category,
        subreddit: `r/${category === 'saas' ? 'SaaS' : category === 'ecommerce' ? 'BuyItForLife' : 'reviews'}`
      });
    }

    return NextResponse.json(
      {
        success: true,
        count: reviews.length,
        platforms: selectedPlatforms,
        reviews
      },
      {
        headers: corsHeaders()
      }
    );
  } catch (error) {
    console.error("Error in extension generate API:", error);
    return NextResponse.json(
      { error: "Failed to generate reviews" },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      status: "active",
      message: "ReviewCraft Extension Multi-Platform API is running",
      supportedPlatforms: ["google", "amazon", "trustpilot", "reddit", "twitter", "instagram", "facebook", "yelp", "g2", "youtube", "linkedin", "tiktok", "playstore", "appstore", "airbnb", "shopify", "ebay", "etsy"]
    },
    { headers: corsHeaders() }
  );
}
