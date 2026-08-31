import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    const { valid, username } = verifySessionToken(sessionCookie);

    if (valid && username) {
      return NextResponse.json({
        authenticated: true,
        username,
        isAdFree: true,
      });
    }

    return NextResponse.json({
      authenticated: false,
      isAdFree: false,
    });
  } catch (error) {
    console.error("Session check error:", error);
    return NextResponse.json({
      authenticated: false,
      isAdFree: false,
    });
  }
}
