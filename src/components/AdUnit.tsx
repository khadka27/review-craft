"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "./auth/AuthProvider";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdUnitProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
  client?: string;
}

export default function AdUnit({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
  className = "",
  client,
}: AdUnitProps) {
  const initializedRef = useRef(false);
  const { isAuthenticated } = useAuth();

  const publisherId =
    client ||
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT ||
    "ca-pub-5286253567075688";

  useEffect(() => {
    // If user is authenticated in personal mode, do not execute AdSense
    if (isAuthenticated) return;

    // Guard against duplicate execution in React strict mode
    if (initializedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        initializedRef.current = true;
      }
    } catch (err) {
      console.error("AdSense execution error:", err);
    }
  }, [isAuthenticated]);

  // If user is authenticated in personal mode, do not render ad container or ins tag
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className={`ad-unit-wrapper my-4 overflow-hidden text-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}

