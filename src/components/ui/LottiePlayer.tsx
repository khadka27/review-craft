"use client";

import { useEffect, useState } from "react";

// Register custom element for TypeScript JSX compiler
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any;
    }
  }
}

interface LottiePlayerProps {
  src: string;
  background?: string;
  speed?: string | number;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottiePlayer({
  src,
  background = "transparent",
  speed = 1,
  style = { width: "200px", height: "200px" },
  loop = true,
  autoplay = true,
  className = "",
}: LottiePlayerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only import the custom element on the client side to avoid SSR errors
    import("@lottiefiles/lottie-player")
      .then(() => {
        setMounted(true);
      })
      .catch((err) => {
        console.error("Failed to load @lottiefiles/lottie-player", err);
      });
  }, []);

  if (!mounted) {
    // Return a loading placeholder to prevent layout shifts and SSR errors
    return (
      <div 
        className={`flex items-center justify-center ${className}`} 
        style={style}
      >
        <div className="w-10 h-10 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
      </div>
    );
  }

  return (
    <lottie-player
      src={src}
      background={background}
      speed={speed.toString()}
      style={style}
      loop={loop ? true : undefined}
      autoplay={autoplay ? true : undefined}
      className={className}
    />
  );
}
