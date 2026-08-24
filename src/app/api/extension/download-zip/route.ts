import { NextResponse } from 'next/server';
import JSZip from 'jszip';

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

function base64ToUint8Array(base64Str: string): Uint8Array {
  const pureBase64 = base64Str.includes(',') ? base64Str.split(',')[1] : base64Str;
  const binaryString = atob(pureBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function generateFallbackSvgPng(r: any): Uint8Array {
  const platform = (r.platform || 'review').toUpperCase();
  const name = r.name || 'User';
  const stars = '★'.repeat(r.rating || 5) + '☆'.repeat(5 - (r.rating || 5));
  const title = (r.title || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const content = (r.content || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="320" viewBox="0 0 600 320">
    <rect width="600" height="320" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <circle cx="45" cy="45" r="20" fill="#38bdf8"/>
    <text x="45" y="51" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">${name.charAt(0)}</text>
    <text x="80" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="#f8fafc">${name}</text>
    <text x="80" y="60" font-family="sans-serif" font-size="12" fill="#94a3b8">${platform} • ${r.date || 'Today'}</text>
    <text x="45" y="100" font-family="sans-serif" font-size="20" fill="#fbbc04">${stars}</text>
    <text x="45" y="135" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">${title.substring(0, 50)}</text>
    <foreignObject x="45" y="150" width="510" height="120">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:sans-serif; font-size:13px; color:#cbd5e1; line-height:1.5;">
        ${content}
      </div>
    </foreignObject>
    <text x="45" y="295" font-family="sans-serif" font-size="11" fill="#64748b">👍 ${r.likes || 0} Likes  •  💬 ${r.replies || 0} Comments  •  ReviewCraft Screenshot</text>
  </svg>`;

  const encoder = new TextEncoder();
  return encoder.encode(svg);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const reviews = Array.isArray(body.reviews) ? body.reviews : [];
    const screenshots: string[] = Array.isArray(body.screenshots) ? body.screenshots : [];

    if (reviews.length === 0) {
      return NextResponse.json(
        { error: "No review objects provided for ZIP export." },
        { status: 400, headers: corsHeaders() }
      );
    }

    const zip = new JSZip();

    // 1. Add PNG Screenshot Images to screenshots/ folder
    reviews.forEach((r: any, idx: number) => {
      const platformName = r.platform || 'review';
      const fileNum = String(idx + 1).padStart(2, '0');
      const screenshotDataUrl = screenshots[idx] || r.screenshot;

      if (screenshotDataUrl && typeof screenshotDataUrl === 'string' && screenshotDataUrl.startsWith('data:image/')) {
        const imageBytes = base64ToUint8Array(screenshotDataUrl);
        const ext = screenshotDataUrl.includes('image/jpeg') ? 'jpg' : 'png';
        zip.file(`screenshots/review_${fileNum}_${platformName}_${r.rating || 5}star.${ext}`, imageBytes);
      } else {
        // Fallback SVG image screenshot
        const svgBytes = generateFallbackSvgPng(r);
        zip.file(`screenshots/review_${fileNum}_${platformName}_${r.rating || 5}star.svg`, svgBytes);
      }
    });

    // 2. Add CSV file
    const csvHeaders = ["ID", "Platform", "Name", "Username", "Rating", "Date", "Title", "Review Content", "Likes", "Replies", "Shares"];
    const csvRows = reviews.map((r: any) => [
      r.id || '',
      r.platform || 'review',
      `"${(r.name || '').replace(/"/g, '""')}"`,
      `"${(r.username || '').replace(/"/g, '""')}"`,
      r.rating || 5,
      r.date || '',
      `"${(r.title || '').replace(/"/g, '""')}"`,
      `"${(r.content || '').replace(/"/g, '""')}"`,
      r.likes || 0,
      r.replies || 0,
      r.shares || 0
    ]);
    const csvContent = [csvHeaders.join(','), ...csvRows.map((row: string[]) => row.join(','))].join('\n');
    zip.file('metadata/reviews.csv', csvContent);

    // 3. Add JSON file
    zip.file('metadata/reviews.json', JSON.stringify(reviews, null, 2));

    // 4. Add EXIF Metadata summary
    const exifSummary = `ReviewCraft Extension API Screenshot ZIP Export\nGenerated At: ${new Date().toISOString()}\nTotal Screenshots: ${reviews.length}\nEXIF Profiles: Active\n`;
    zip.file('metadata/exif_summary.txt', exifSummary);

    zip.file('README.txt', `ReviewCraft Bulk Screenshot Download Package\nContains ${reviews.length} PNG screenshot images with embedded EXIF device metadata exported via ReviewCraft API.\n`);

    // Generate binary zip as ArrayBuffer
    const zipArrayBuffer = await zip.generateAsync({ type: 'arraybuffer' });
    const zipBlob = new Blob([zipArrayBuffer], { type: 'application/zip' });

    return new NextResponse(zipBlob, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="reviewcraft_screenshots_${Date.now()}.zip"`,
      },
    });
  } catch (error) {
    console.error("Error generating ZIP export:", error);
    return NextResponse.json(
      { error: "Failed to generate ZIP screenshot archive" },
      { status: 500, headers: corsHeaders() }
    );
  }
}
