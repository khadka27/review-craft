import Link from "next/link";
import { constructMetadata } from "@/components/SEO";

export const metadata = constructMetadata({
  title: "404 - Page Not Found | ReviewCraft",
  description: "Sorry, the page you are looking for doesn't exist. Return to ReviewCraft to generate realistic review mockups.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600 leading-none opacity-20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Oops! The review page you're looking for seems to have been deleted or never existed. 
            Maybe it's a 1-star experience?
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
        >
          Return Home
        </Link>
        <Link
          href="/platform/amazon"
          className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
        >
          Generate a Review
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale pointer-events-none">
        <div className="text-2xl font-bold">Amazon</div>
        <div className="text-2xl font-bold">Google</div>
        <div className="text-2xl font-bold">Instagram</div>
        <div className="text-2xl font-bold">Reddit</div>
      </div>
    </div>
  );
}
