import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import BlogClientList from "./BlogClientList";
import { BookOpen, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "UI Design & Social Proof Blog — CRO Insights & Component Anatomy",
  description:
    "Explore actionable guides on customer review component design, e-commerce trust signals, landing page wireframes, and social proof optimization.",
  openGraph: {
    title: "UI Design & Social Proof Blog — CRO Insights & Component Anatomy | ReviewCraft",
    description:
      "Explore actionable guides on customer review component design, e-commerce trust signals, landing page wireframes, and social proof optimization.",
    url: "/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50/80 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 font-semibold text-xs uppercase tracking-wider border border-indigo-200 shadow-sm">
            <BookOpen size={14} /> ReviewCraft Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            UI/UX Design, Social Proof & CRO Guides
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Practical insights on designing high-converting review cards, wireframe visual hierarchy, e-commerce trust signals, and ethical mockup practices.
          </p>
        </header>

        {/* Interactive Client Article List */}
        <BlogClientList posts={BLOG_POSTS} />
      </div>
    </div>
  );
}
