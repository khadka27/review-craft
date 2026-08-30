import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";
import sitemap from "@/app/sitemap";

export const dynamic = "force-dynamic";

/**
 * GET /api/indexnow
 * Check IndexNow status and configuration information.
 */
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fakereviewgenerator.com";
  const apiKey = process.env.INDEXNOW_KEY || "38aa8c7cc8ef47458e867463400dcc6e";
  const host = new URL(siteUrl).hostname;
  const keyLocation = `${siteUrl.replace(/\/+$/, "")}/${apiKey}.txt`;

  return NextResponse.json({
    status: "active",
    host,
    keyLocation,
    keyConfigured: Boolean(apiKey),
    instructions: {
      submitCustomUrls: "POST /api/indexnow with JSON body { 'urls': ['https://...'] }",
      submitAllPages: "POST /api/indexnow with JSON body { 'all': true }",
    },
  });
}

/**
 * POST /api/indexnow
 * Submit specific URLs or all sitemap URLs to IndexNow.
 *
 * Header: Authorization: Bearer <INDEXNOW_SECRET_TOKEN> (optional if not set)
 * Body: { urls?: string[], all?: boolean }
 */
export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const searchParams = req.nextUrl.searchParams;
    const tokenQuery = searchParams.get("token");
    const expectedSecret = process.env.INDEXNOW_SECRET_TOKEN;

    // Optional token protection if INDEXNOW_SECRET_TOKEN is set
    if (expectedSecret) {
      const bearerToken = authHeader?.replace(/^Bearer\s+/i, "");
      if (bearerToken !== expectedSecret && tokenQuery !== expectedSecret) {
        return NextResponse.json(
          { error: "Unauthorized. Provide a valid Bearer token or ?token= query parameter." },
          { status: 401 }
        );
      }
    }

    let body: { urls?: string[]; all?: boolean } = {};
    try {
      body = await req.json();
    } catch {
      // Allow empty body if ?all=true is in query
      if (searchParams.get("all") === "true") {
        body = { all: true };
      } else {
        return NextResponse.json(
          { error: "Invalid JSON request body. Expected { 'urls': [...] } or { 'all': true }." },
          { status: 400 }
        );
      }
    }

    let urlsToSubmit: string[] = [];

    if (body.all || searchParams.get("all") === "true") {
      const siteEntries = sitemap();
      urlsToSubmit = siteEntries.map((entry) => entry.url);
    } else if (Array.isArray(body.urls) && body.urls.length > 0) {
      urlsToSubmit = body.urls;
    } else {
      return NextResponse.json(
        { error: "Please provide an array of URLs in 'urls' or set 'all': true." },
        { status: 400 }
      );
    }

    const result = await submitToIndexNow(urlsToSubmit);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Internal Server Error";
    console.error("IndexNow Submission Error:", error);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
