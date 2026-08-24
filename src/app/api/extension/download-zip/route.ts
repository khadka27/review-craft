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

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const reviews = Array.isArray(body.reviews) ? body.reviews : [];

    if (reviews.length === 0) {
      return NextResponse.json(
        { error: "No review objects provided for ZIP export." },
        { status: 400, headers: corsHeaders() }
      );
    }

    const zip = new JSZip();

    // 1. Add CSV file
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

    // 2. Add JSON file
    zip.file('metadata/reviews.json', JSON.stringify(reviews, null, 2));

    // 3. Add EXIF Metadata summary
    const exifSummary = `ReviewCraft Extension API Export\nGenerated At: ${new Date().toISOString()}\nTotal Reviews: ${reviews.length}\nEXIF Profiles: Active\n`;
    zip.file('metadata/exif_summary.txt', exifSummary);

    // 4. Add HTML mockup cards for each review
    reviews.forEach((r: any, idx: number) => {
      const cardHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Review #${idx + 1} - ${r.platform || 'Review'}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; max-width: 550px; margin: 0 auto; }
    .user { font-weight: 700; color: #38bdf8; }
    .rating { color: #fbbc04; font-size: 18px; margin: 8px 0; }
    .title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
    .body { line-height: 1.5; color: #cbd5e1; font-size: 14px; }
    .footer { margin-top: 14px; font-size: 11px; color: #64748b; border-top: 1px solid #334155; padding-top: 10px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="user">${r.name || 'User'} (@${r.username || 'user'})</div>
    <div class="rating">${'★'.repeat(r.rating || 5)}${'☆'.repeat(5 - (r.rating || 5))}</div>
    <div class="title">${r.title || ''}</div>
    <div class="body">${r.content || ''}</div>
    <div class="footer">${(r.platform || 'review').toUpperCase()} • ${r.date || ''} • 👍 ${r.likes || 0}</div>
  </div>
</body>
</html>`;
      zip.file(`cards/review_${String(idx + 1).padStart(2, '0')}_${r.platform || 'review'}.html`, cardHtml);
    });

    zip.file('README.txt', `ReviewCraft Bulk Download Package\nGenerated ${reviews.length} reviews from the ReviewCraft Extension API.\n`);

    // Generate binary zip as ArrayBuffer
    const zipArrayBuffer = await zip.generateAsync({ type: 'arraybuffer' });
    const zipBlob = new Blob([zipArrayBuffer], { type: 'application/zip' });

    return new NextResponse(zipBlob, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="reviewcraft_export_${Date.now()}.zip"`,
      },
    });
  } catch (error) {
    console.error("Error generating ZIP export:", error);
    return NextResponse.json(
      { error: "Failed to generate ZIP archive" },
      { status: 500, headers: corsHeaders() }
    );
  }
}
