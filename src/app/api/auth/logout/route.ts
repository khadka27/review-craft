import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, AD_FREE_COOKIE_NAME } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  // Clear session cookies
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  response.cookies.set({
    name: AD_FREE_COOKIE_NAME,
    value: "",
    httpOnly: false,
    expires: new Date(0),
    path: "/",
  });

  return response;
}
