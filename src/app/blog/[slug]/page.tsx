import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-data";
import {
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  ChevronRight,
  Layers,
  ArrowLeft,
  Tag,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | ReviewCraft" };
  return {
    title: `${post.title} | ReviewCraft Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

/** Parse one raw content line into a ReactNode */
function renderLine(line: string, key: number) {
  // inline bold replacement: **text** → <strong>
  const parsedLine = line.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // italic: *text*
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
  return parsedLine;
}

/** Full markdown-to-JSX block renderer */
function renderContent(content: string) {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // h3
    if (line.startsWith("### ")) {
      const text = line.slice(4);
      blocks.push(
        <h3
          key={i}
          className="text-2xl font-extrabold text-gray-950 mt-10 mb-4 tracking-tight scroll-mt-24 border-l-4 border-indigo-500 pl-4"
        >
          {text}
        </h3>
      );
      i++;
      continue;
    }

    // h4
    if (line.startsWith("#### ")) {
      const text = line.slice(5);
      blocks.push(
        <h4 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {text}
        </h4>
      );
      i++;
      continue;
    }

    // bullet list — collect consecutive "- " lines
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={i} className="space-y-2.5 my-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-gray-700 leading-relaxed">
              <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-base">{renderLine(item, idx)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // ordered list — collect consecutive "N. " lines
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ""));
        i++;
      }
      blocks.push(
        <ol key={i} className="space-y-3 my-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs mt-0.5">
                {idx + 1}
              </span>
              <span className="text-base">{renderLine(item, idx)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // italic/disclaimer line starting with *
    if (line.startsWith("*") && line.endsWith("*") && line.length > 2) {
      blocks.push(
        <p key={i} className="text-sm italic text-gray-500 border-l-2 border-gray-300 pl-3 my-3">
          {line.slice(1, -1)}
        </p>
      );
      i++;
      continue;
    }

    // blank line — skip
    if (line.trim() === "") {
      i++;
      continue;
    }

    // regular paragraph
    blocks.push(
      <p key={i} className="text-gray-700 leading-[1.9] text-base sm:text-lg my-4">
        {renderLine(line, i)}
      </p>
    );
    i++;
  }

  return blocks;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Build TOC from h3 headings
  const headings = post.content
    .split("\n")
    .filter((l) => l.startsWith("### "))
    .map((l) => l.slice(4));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage
      ? `https://www.fakereviewgenerator.com${post.coverImage}`
      : undefined,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "ReviewCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fakereviewgenerator.com/logo/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.fakereviewgenerator.com/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fakereviewgenerator.com" },
      { "@type": "ListItem", position: 2, name: "Blog & Guides", item: "https://www.fakereviewgenerator.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.fakereviewgenerator.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-[#F8F9FC]">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
              <ChevronRight size={12} />
              <span className="text-slate-300 font-medium truncate max-w-[220px] sm:max-w-xs">{post.title}</span>
            </nav>

            {/* Category + Meta row */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 text-xs flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 text-xs flex items-center gap-1.5">
                <Calendar size={13} /> {post.publishedAt}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {post.description}
            </p>

            {/* Author row */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={28}
                  height={28}
                  className="brightness-0 invert filter object-contain w-full h-auto"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{post.author.name}</p>
                <p className="text-slate-400 text-xs">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1">
            <div className="relative h-56 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* LEFT: Main Article */}
            <main className="lg:col-span-8 space-y-6">

              {/* Key Takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-base font-extrabold text-emerald-900 flex items-center gap-2 mb-4">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {post.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-emerald-900 leading-relaxed">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 font-bold text-[11px] flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* TOC */}
              {headings.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 mb-3">
                    <BookOpen size={14} /> In This Guide
                  </p>
                  <ul className="space-y-2">
                    {headings.map((h, i) => (
                      <li key={i}>
                        <a
                          href={`#heading-${i}`}
                          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1.5 transition-colors"
                        >
                          <ChevronRight size={14} className="text-indigo-400" /> {h}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Content */}
              <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
                {renderContent(post.content)}

                {/* Ethical Disclosure */}
                <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2">
                  <p className="font-bold text-amber-900 flex items-center gap-1.5 text-sm">
                    <ShieldCheck size={16} /> Ethical Design Disclosure
                  </p>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    ReviewCraft is intended strictly for <strong>wireframing, client pitches, UI prototypes, and educational demos</strong>. Never publish simulated reviews as real customer feedback on live commercial storefronts.
                  </p>
                </div>
              </article>

              {/* Tags row */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={14} className="text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to All Guides
              </Link>
            </main>

            {/* RIGHT: Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

              {/* Related Generator Tools */}
              {post.relatedTools && post.relatedTools.length > 0 && (
                <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-lg border border-indigo-800/50">
                  <div className="flex items-center gap-2 text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles size={13} /> Relevant Generators
                  </div>
                  <h4 className="font-extrabold text-white text-lg leading-snug mb-2">
                    Try Related Review Tools
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Generate pixel-perfect mockup templates for your design prototypes:
                  </p>
                  <div className="space-y-2">
                    {post.relatedTools.map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold text-white transition-all border border-white/5 hover:border-white/20"
                      >
                        <span>{tool.name}</span>
                        <ChevronRight size={15} className="text-indigo-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Banner */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto border border-indigo-100">
                  <Layers size={22} className="text-indigo-600" />
                </div>
                <h4 className="font-extrabold text-gray-950 text-base">
                  30+ Review Templates
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Instantly generate Amazon, Google, Yelp, Trustpilot, and chat screenshots for your design prototypes.
                </p>
                <Link
                  href="/"
                  className="block py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                >
                  Open Generator
                </Link>
              </div>
            </aside>
          </div>

          {/* Related Articles */}
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight mb-8">
              More Design &amp; UI Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {rPost.coverImage && (
                    <div className="relative h-36 bg-slate-900 overflow-hidden">
                      <Image
                        src={rPost.coverImage}
                        alt={rPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                      {rPost.category}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1">
                      <Clock size={11} /> {rPost.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
