"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";
import {
  Search,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle2,
  SlidersHorizontal,
  Layers,
  BookOpen,
  X,
} from "lucide-react";

interface Props {
  posts: BlogPost[];
}

const CATEGORY_COLORS: Record<string, string> = {
  "UI/UX": "bg-violet-100 text-violet-700 border-violet-200",
  "Design": "bg-sky-100 text-sky-700 border-sky-200",
  "E-Commerce": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Marketing": "bg-amber-100 text-amber-700 border-amber-200",
};

export default function BlogClientList({ posts }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "UI/UX", "Design", "E-Commerce", "Marketing"];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => posts.find((p) => p.featured) ?? posts[0], [posts]);
  const gridPosts = filteredPosts.filter((p) =>
    selectedCategory !== "All" || searchQuery.trim() !== "" ? true : p.slug !== featuredPost.slug
  );

  return (
    <div className="space-y-14">

      {/* ── Search & Filter Bar ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        {/* Category tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-0.5 scrollbar-none flex-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72 ml-auto">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search guides & topics…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* ── Featured Hero ── */}
      {selectedCategory === "All" && searchQuery.trim() === "" && featuredPost && (
        <section>
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-2 min-h-[380px]">
              {/* Image */}
              <div className="relative min-h-[240px] lg:min-h-0 bg-slate-900 overflow-hidden">
                {featuredPost.coverImage ? (
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-violet-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/60 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent lg:hidden" />
                <span className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow">
                  <Sparkles size={12} /> Featured
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between p-7 sm:p-10 text-white space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-indigo-300">
                    <span className="px-2.5 py-0.5 bg-indigo-500/20 border border-indigo-500/30 rounded-md">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-indigo-200 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>

                  {featuredPost.keyTakeaways?.[0] && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Key Takeaway</p>
                      <p className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        {featuredPost.keyTakeaways[0]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={24}
                        height={24}
                        className="brightness-0 invert filter object-contain w-full h-auto"
                      />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">{featuredPost.author.name}</p>
                      <p className="text-slate-500 text-[11px]">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/30">
                    Read Guide <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Article Grid ── */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-extrabold text-gray-950 flex items-center gap-2">
            <BookOpen className="text-indigo-600" size={20} />
            {selectedCategory === "All" ? "All Guides" : `${selectedCategory} Articles`}
            <span className="text-sm font-normal text-gray-400 ml-1">
              ({filteredPosts.length})
            </span>
          </h3>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-14 text-center space-y-4">
            <SlidersHorizontal size={36} className="mx-auto text-gray-300" />
            <h4 className="text-lg font-bold text-gray-900">No articles matched</h4>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              Try adjusting your search or clearing category filters.
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === "All" && searchQuery.trim() === ""
              ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
              : filteredPosts
            ).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Cover */}
                <div className="relative h-44 bg-slate-900 overflow-hidden shrink-0">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900 flex items-center justify-center">
                      <Layers size={32} className="text-indigo-400/50" />
                    </div>
                  )}
                  {/* Category Badge */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-lg border backdrop-blur-sm bg-white/90 ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}>
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1 space-y-2.5">
                  <div className="text-[11px] font-medium text-gray-400 flex items-center gap-1.5">
                    <Clock size={11} /> {post.readTime} · {post.publishedAt}
                  </div>
                  <h4 className="text-base font-bold text-gray-950 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[10px] font-medium"
                      >
                        <Tag size={9} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={18}
                        height={18}
                        className="brightness-0 invert filter object-contain w-full h-auto"
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Trust / E-E-A-T Banner ── */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl">
        <div className="max-w-2xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
            <Sparkles size={12} /> Why Designers Trust Our Guides
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Authoritative Insights for Product Designers & Marketers
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Written by experienced UI/UX product specialists and CRO researchers. Our mission is to educate teams on social proof psychology, visual wireframe hierarchy, and ethical compliance standards.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-8">
          {[
            { label: "30+ UI Templates", desc: "Detailed breakdown of e-commerce, social, and chat mockup cards.", color: "text-indigo-300" },
            { label: "100% Ethical Focus", desc: "Guidelines on FTC compliance & legal boundaries for design assets.", color: "text-emerald-300" },
            { label: "CRO Prototyping", desc: "Tactics for rapid A/B testing review layouts before engineering.", color: "text-amber-300" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5">
              <h4 className={`font-bold text-sm ${item.color}`}>{item.label}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
