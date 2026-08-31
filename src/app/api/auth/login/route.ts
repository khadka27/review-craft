import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdminCredentials,
  createSessionToken,
  SESSION_COOKIE_NAME,
  AD_FREE_COOKIE_NAME,
  SESSION_DURATION_DAYS,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    const result = verifyAdminCredentials(username, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error || "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = createSessionToken(username);
    const maxAge = SESSION_DURATION_DAYS * 24 * 60 * 60; // in seconds
    const isProduction = process.env.NODE_ENV === "production";

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        username,
        isAdFree: true,
      },
    });

    // Set secure HttpOnly session cookie
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: maxAge,
      path: "/",
    });

    // Set client-accessible ad-free indicator cookie
    response.cookies.set({
      name: AD_FREE_COOKIE_NAME,
      value: "1",
      httpOnly: false,
      secure: isProduction,
      sameSite: "lax",
      maxAge: maxAge,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
