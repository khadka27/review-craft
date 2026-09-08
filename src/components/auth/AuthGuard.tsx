"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

interface AuthGuardProps {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
  adSense: React.ReactNode;
}

export function AuthGuard({
  children,
  navbar,
  footer,
  adSense,
}: AuthGuardProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  // Root "/" and "/login" are the login portals when unauthenticated
  const isAuthPortal = pathname === "/" || pathname === "/login";

  useEffect(() => {
    // If auth state is verified, user is not authenticated, and trying to access a protected route
    if (!isLoading && !isAuthenticated && !isAuthPortal) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isLoading, isAuthenticated, isAuthPortal, pathname, router]);

  // Loading indicator for direct protected route access before auth resolves or during redirect
  if (!isLoading && !isAuthenticated && !isAuthPortal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#03346E] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 border-3 border-white border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-blue-100 tracking-wide uppercase">
            Office Portal • Redirecting to Login...
          </p>
        </div>
      </div>
    );
  }

  // When unauthenticated on the login portal, render pure login interface without public Navbar and Footer
  if (!isAuthenticated && isAuthPortal) {
    return (
      <main className="min-h-screen flex flex-col justify-center">
        {children}
      </main>
    );
  }

  // When authenticated, render full application with Navbar, active workspace, and Footer
  return (
    <>
      {navbar}
      <div className="flex-1">{children}</div>
      {adSense}
      {footer}
    </>
  );
}
