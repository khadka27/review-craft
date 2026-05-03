"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <h1 className="text-[10rem] md:text-[14rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 leading-none opacity-20 select-none">
          ERR
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            We encountered an error while trying to generate your mockup. 
            Don't worry, your ratings are still safe!
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
        >
          Return Home
        </Link>
      </div>

      <div className="mt-20 p-4 bg-red-50 border border-red-100 rounded-lg max-w-lg mx-auto text-left">
        <p className="text-sm font-mono text-red-800 break-all">
          {error.message || "An unexpected error occurred."}
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-red-600 font-mono">Digest: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
