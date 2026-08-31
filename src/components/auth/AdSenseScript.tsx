"use client";

import Script from "next/script";
import { useAuth } from "./AuthProvider";

interface AdSenseScriptProps {
  clientId?: string;
}

export default function AdSenseScript({
  clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-5286253567075688",
}: AdSenseScriptProps) {
  const { isAuthenticated } = useAuth();

  // If user is authenticated in personal mode, completely suppress loading Google AdSense script
  if (isAuthenticated) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
      id="adsense-init"
    />
  );
}
