"use client";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="relative flex items-center justify-center">
        {/* Animated outer ring */}
        <div className="absolute w-24 h-24 border-4 border-indigo-100 rounded-full"></div>
        <div className="absolute w-24 h-24 border-4 border-t-indigo-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Animated inner dots */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-violet-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce"></div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 animate-pulse">
          Crafting your mockup...
        </h3>
        <p className="text-gray-500 mt-2">
          Generating pixel-perfect review layouts
        </p>
      </div>

      <div className="mt-12 w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
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
