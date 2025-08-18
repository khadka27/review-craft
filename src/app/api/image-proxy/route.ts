import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return new Response("Missing url parameter", { status: 400 });
    }

    // Basic safety: allow only http/https
    if (!/^https?:\/\//i.test(targetUrl)) {
      return new Response("Invalid url", { status: 400 });
    }

    const upstream = await fetch(targetUrl, {
      // Send minimal headers; do not forward cookies
      headers: {
        "User-Agent": "review-craft-image-proxy",
        Accept: "image/*,*/*;q=0.8",
      },
      // Revalidate frequently but allow caching by the edge/CDN
      cache: "no-store",
    });

    if (!upstream.ok) {
      return new Response(`Upstream error: ${upstream.statusText}`, {
        status: upstream.status,
      });
    }

    // Pass-through content-type if present
    const contentType = upstream.headers.get("content-type") || "image/jpeg";

    // Stream the body back to the client
    const body = upstream.body;
    if (!body) {
      return new Response("Empty upstream body", { status: 502 });
    }

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        // Allow use in canvas on same-origin
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err: any) {
    return new Response(`Proxy error: ${err?.message || "unknown"}`, {
      status: 500,
    });
  }
}
