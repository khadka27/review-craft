import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GUIDES } from "@/lib/guides-data";
import { Clock, ArrowLeft, BookOpen, ShieldCheck, UserCheck } from "lucide-react";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | ReviewCraft Guides`,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.date,
      authors: [guide.author.name],
    },
  };
}

export default async function GuideSinglePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  // Related guides (other guides from same list)
  const relatedGuides = GUIDES.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen text-slate-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Design Guides
          </Link>
        </div>

        {/* Article Meta Header */}
        <header className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-mono">
              <Clock size={14} /> {guide.readTime}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Published: {guide.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-6">
            {guide.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {guide.description}
          </p>

          <div className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-100">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              <UserCheck size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{guide.author.name}</p>
              <p className="text-xs text-slate-500">{guide.author.role}</p>
            </div>
          </div>
        </header>

        {/* Responsible Design Callout */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Educational & Design Notice:</strong> This article is published for educational, prototyping, and WCAG accessibility purposes. Simulated visual components should be used responsibly for wireframes and design systems.
          </div>
        </div>

        {/* Article Content Render */}
        <main className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-950 prose-a:text-indigo-600 prose-pre:bg-slate-900 prose-pre:text-slate-100">
          <div className="whitespace-pre-line leading-relaxed">
            {guide.content}
          </div>
        </main>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            Build Review UI Components for Your Design Mockups
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Try ReviewCraft's visual prototyping tool to test layout wrapping, star rating scale alignment, and responsiveness across 30+ platform styles.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-colors"
          >
            <BookOpen size={16} /> Open Review Mockup Tool
          </Link>
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-950 mb-8">
              Related Design & Prototyping Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedGuides.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/guides/${rel.slug}`}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 line-clamp-2">
                      {rel.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 mt-4 block">
                    Read Guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
