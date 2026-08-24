import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides-data";
import { BookOpen, Clock, ArrowRight, ShieldCheck, Sparkles, Layout, Code2, Users, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Review & Social Proof Design Guides - How to Write & Format Reviews | ReviewCraft",
  description:
    "Explore guides on creating review mockups, writing customer reviews, social proof design strategies, and UI prototyping best practices.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesHubPage() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "UI/UX Prototyping": <Layout className="w-4 h-4 text-indigo-600" />,
    "Design Strategy": <Eye className="w-4 h-4 text-emerald-600" />,
    "UI/UX Design": <Code2 className="w-4 h-4 text-purple-600" />,
    "Product Management": <Users className="w-4 h-4 text-amber-600" />,
    "Ethics & Compliance": <ShieldCheck className="w-4 h-4 text-blue-600" />,
    "Accessibility": <Sparkles className="w-4 h-4 text-teal-600" />,
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200">
            <BookOpen size={14} /> Design Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            UI/UX Prototyping & Review Design Guides
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed">
            In-depth technical guides, component anatomy breakdowns, accessibility standards, and ethical design guidelines for building realistic social proof interfaces.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                    {categoryIcons[guide.category] || <BookOpen className="w-4 h-4 text-slate-500" />}
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Clock size={12} />
                    {guide.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
                  <Link href={`/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">{guide.author.name}</span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform"
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Prototyping Disclaimer Box */}
        <div className="mt-16 bg-white rounded-2xl border border-indigo-100 p-6 sm:p-8 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Responsible Prototyping Pledge
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            All educational resources published on ReviewCraft advocate for transparent visual design and responsible UI/UX testing. Generated visual components should be used for wireframes, internal demos, and educational research, and must never be published to misrepresent genuine customer feedback.
          </p>
        </div>
      </div>
    </div>
  );
}
