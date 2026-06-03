"use client";

import LottiePlayer from "@/components/ui/LottiePlayer";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      
      <div className="relative flex flex-col items-center justify-center">
        <LottiePlayer
          src="/9fbeb5fe-1178-11ee-be3f-8ff4cb4e23c2.json"
          background="transparent"
          speed="1"
          style={{ width: "220px", height: "220px" }}
          loop
          autoplay
        />
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900 animate-pulse">
          Crafting your mockup...
        </h3>
        <p className="text-gray-500 mt-2">
          Generating pixel-perfect review layouts
        </p>
      </div>

      <div className="mt-8 w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 w-1/2 animate-[loading_2s_ease-in-out_infinite] origin-left"></div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: scaleX(0); transform-origin: left; }
          45% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
}
