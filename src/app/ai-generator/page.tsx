"use client";

import React, { useState, useEffect } from "react";
import ISO6391 from "iso-639-1";
import { 
  Trash2, 
  Copy, 
  FileJson, 
  Table, 
  Download, 
  Star, 
  ChevronDown, 
  AlertCircle, 
  LayoutGrid,
  Clock,
  FileText
} from "lucide-react";

interface GeneratedReview {
  id: string;
  rating: number;
  review: string;
  generatedAt: Date;
}

const REVIEWER_NAMES = [
  "Alexander Wright", "Sophia Jenkins", "Liam Carter", "Olivia Vance",
  "Noah Brooks", "Emma Higgins", "Ethan Vance", "Ava Caldwell",
  "Mason Graves", "Isabella Vance", "William Thorne", "Mia Sterling",
  "Jameson Blake", "Charlotte Finch", "Lucas Thorne", "Amelia Vance",
  "Benjamin Hayes", "Harper Sterling", "Oliver Vance", "Evelyn Graves",
  "Marcus Vance", "Elena Rostova", "Klaus Fischer", "Chloe Sterling",
  "Nikhil Sharma", "Aisha Rahman", "Yuki Tanaka", "Carlos Santana"
];

const AVATAR_COLORS = [
  "from-emerald-400 to-teal-500",
  "from-cyan-400 to-sky-500",
  "from-teal-500 to-cyan-500",
  "from-emerald-500 to-cyan-400",
  "from-sky-400 to-teal-400",
];

const getReviewerDetails = (id: string, index: number) => {
  const codeSum = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const nameIdx = (index + codeSum) % REVIEWER_NAMES.length;
  const colorIdx = (index + codeSum) % AVATAR_COLORS.length;
  
  const name = REVIEWER_NAMES[nameIdx];
  const color = AVATAR_COLORS[colorIdx];
  const initials = name.split(" ").map(n => n[0]).join("");
  return { name, color, initials };
};

export default function AIReviewGeneratorPage() {
  const [targetType, setTargetType] = useState("Service");
  const [reviewType, setReviewType] = useState("Positive Review");
  const [reviewCountPreset, setReviewCountPreset] = useState("3");
  const [customReviewCount, setCustomReviewCount] = useState(1);
  const [reviewLength, setReviewLength] = useState("Medium (100-200 words)");
  const [language, setLanguage] = useState("English");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews] = useState<GeneratedReview[]>([]);
  const [viewMode, setViewMode] = useState<"cards" | "table" | "json">("cards");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedBulk, setCopiedBulk] = useState<string | null>(null);
  const [loadingStepIdx, setLoadingStepIdx] = useState(0);

  const actualReviewCount = reviewCountPreset === "Custom Number" ? customReviewCount : parseInt(reviewCountPreset, 10);

  const LOADING_STEPS = [
    "Connecting to DeepSeek AI...",
    "Analyzing specifications & target audience...",
    "Structuring narrative tone patterns...",
    "Generating realistic variations...",
    "Refining translation structures...",
    "Injecting diverse ratings profiles...",
    "Formatting JSON completions..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setLoadingStepIdx(0);
      interval = setInterval(() => {
        setLoadingStepIdx((prev) => (prev + 1) % LOADING_STEPS.length);
      }, 1800);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const getReviewTypeOptions = () => {
    const options = [
      "Positive Review",
      "Neutral Review",
      "Critical Review",
      "Professional Review",
      "Detailed Analysis",
      "Expert Perspective"
    ];
    if (targetType === "Service") {
      options.push("Customer Perspective");
    }
    if (targetType === "Post") {
      options.push("SEO Review");
    }
    return options;
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (actualReviewCount < 1 || actualReviewCount > 100) {
      setError("Number of reviews must be between 1 and 100.");
      return;
    }
    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          targetType,
          reviewType,
          reviewCount: actualReviewCount,
          reviewLength,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate reviews");
      }

      if (!data.reviews || !Array.isArray(data.reviews)) {
        throw new Error("Invalid response format received.");
      }

      const newReviews: GeneratedReview[] = data.reviews.map((r: any) => ({
        id: Math.random().toString(36).substring(7),
        rating: r.rating,
        review: r.review,
        generatedAt: new Date(),
      }));

      setReviews((prev) => [...newReviews, ...prev]);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id?: string) => {
    navigator.clipboard.writeText(text);
    if (id) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } else {
      setCopiedBulk("all");
      setTimeout(() => setCopiedBulk(null), 1500);
    }
  };

  const handleDelete = (id: string) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleCopyAll = () => {
    const text = reviews.map((r) => `Rating: ${r.rating}/5\n${r.review}`).join("\n\n");
    copyToClipboard(text);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ reviews }, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `ai-reviews-${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleExportCSV = () => {
    const headers = ["Rating", "Review", "Generated At"];
    const csvRows = [headers.join(",")];
    
    reviews.forEach(r => {
      const escapedReview = `"${r.review.replace(/"/g, '""')}"`;
      csvRows.push(`${r.rating},${escapedReview},${r.generatedAt.toISOString()}`);
    });
    
    const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvRows.join("\n"));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `ai-reviews-${Date.now()}.csv`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Metrics Calculations
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";
  const totalWords = totalReviews > 0
    ? reviews.reduce((acc, r) => acc + r.review.split(/\s+/).filter(Boolean).length, 0)
    : 0;
  
  const toneCounts = reviews.reduce((acc: any, r) => {
    const tone = r.rating >= 4 ? "Positive" : r.rating === 3 ? "Neutral" : "Critical";
    acc[tone] = (acc[tone] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 relative overflow-hidden">
      {/* Background radial glow using brand colors */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Hero Section */}
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
            AI Content Studio
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-1">
            AI Review <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Generator</span>
          </h1>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Generate highly realistic, platform-agnostic feedback mockups and content variations. Driven by advanced DeepSeek models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Settings Panel */}
          <div className="lg:col-span-4 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 shadow-2xl relative">
            
            <form onSubmit={handleGenerate} className="space-y-6">
              
              {/* Review Target */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Review Target</label>
                <div className="grid grid-cols-2 gap-2 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      setTargetType("Service");
                      setReviewType("Positive Review");
                    }}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${
                      targetType === "Service"
                        ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-md shadow-emerald-950/50"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Service
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTargetType("Post");
                      setReviewType("Positive Review");
                    }}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${
                      targetType === "Post"
                        ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-md shadow-emerald-950/50"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Post
                  </button>
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Target Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 text-white rounded-xl py-2.5 px-4 text-sm placeholder-slate-700 transition-all outline-none"
                  placeholder="e.g. Premium Gym Membership"
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Description / Context</label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 text-white rounded-xl py-2.5 px-4 text-sm placeholder-slate-700 transition-all outline-none resize-none"
                  placeholder="Describe your service/post context for the AI reviews..."
                />
              </div>

              {/* Review Type & Preset */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Review Tone / Style</label>
                  <div className="relative group">
                    <select
                      value={reviewType}
                      onChange={(e) => setReviewType(e.target.value)}
                      className="w-full appearance-none bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 text-white rounded-xl py-2.5 pl-4 pr-10 text-sm placeholder-slate-700 transition-all outline-none cursor-pointer"
                    >
                      {getReviewTypeOptions().map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-950 text-slate-200">{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none group-hover:text-slate-300 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Review Count Preset */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Number of Reviews</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-2">
                  {["1", "3", "5", "10", "20", "Custom"].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setReviewCountPreset(preset === "Custom" ? "Custom Number" : preset)}
                      className={`py-2 px-1 text-[11px] font-bold rounded-lg transition-all border ${
                        (reviewCountPreset === preset || (preset === "Custom" && reviewCountPreset === "Custom Number"))
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-sm"
                          : "bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
                
                {reviewCountPreset === "Custom Number" && (
                  <div className="relative mt-3 animate-fadeIn">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={customReviewCount}
                      onChange={(e) => setCustomReviewCount(parseInt(e.target.value) || 1)}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 text-white rounded-xl py-2.5 px-4 text-sm placeholder-slate-700 transition-all outline-none"
                      placeholder="Enter a custom count (1-100)"
                    />
                    <span className="absolute right-4 top-2.5 text-xs text-slate-500 font-semibold font-mono">reviews</span>
                  </div>
                )}
              </div>

              {/* Length & Language */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Length</label>
                  <div className="relative group">
                    <select
                      value={reviewLength}
                      onChange={(e) => setReviewLength(e.target.value)}
                      className="w-full appearance-none bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 text-white rounded-xl py-2.5 pl-4 pr-10 text-sm placeholder-slate-700 transition-all outline-none cursor-pointer"
                    >
                      <option value="Short (50-100 words)" className="bg-slate-950 text-slate-200">Short</option>
                      <option value="Medium (100-200 words)" className="bg-slate-950 text-slate-200">Medium</option>
                      <option value="Long (200-500 words)" className="bg-slate-950 text-slate-200">Long</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none group-hover:text-slate-300 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Language</label>
                  <div className="relative group">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full appearance-none bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 text-white rounded-xl py-2.5 pl-4 pr-10 text-sm placeholder-slate-700 transition-all outline-none cursor-pointer"
                    >
                      {ISO6391.getAllNames().sort().map((lang) => (
                        <option key={lang} value={lang} className="bg-slate-950 text-slate-200">{lang}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none group-hover:text-slate-300 transition-colors" />
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-3 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-2 animate-pulse">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-emerald-500/15"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin"></div>
                    <span>Processing AI Content...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    <span>Generate Reviews</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 shadow-2xl flex flex-col min-h-[640px]">
            
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Generated Output
                  {reviews.length > 0 && (
                    <span className="px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-mono">
                      {reviews.length}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Toggle display formats and manage bulk exports</p>
              </div>
              
              {reviews.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  
                  {/* View Mode Selectors */}
                  <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 mr-2">
                    <button
                      onClick={() => setViewMode("cards")}
                      className={`p-1.5 rounded-lg transition-all ${
                        viewMode === "cards" ? "bg-slate-800 text-emerald-400" : "text-slate-500 hover:text-slate-300"
                      }`}
                      title="Cards View"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("table")}
                      className={`p-1.5 rounded-lg transition-all ${
                        viewMode === "table" ? "bg-slate-800 text-emerald-400" : "text-slate-500 hover:text-slate-300"
                      }`}
                      title="Table View"
                    >
                      <Table className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("json")}
                      className={`p-1.5 rounded-lg transition-all ${
                        viewMode === "json" ? "bg-slate-800 text-emerald-400" : "text-slate-500 hover:text-slate-300"
                      }`}
                      title="Raw JSON View"
                    >
                      <FileJson className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bulk Actions */}
                  <button
                    onClick={handleCopyAll}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedBulk === "all" ? "Copied!" : "Copy All"}</span>
                  </button>
                  <button
                    onClick={handleExportJSON}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all"
                  >
                    <FileJson className="w-3.5 h-3.5" />
                    <span>JSON</span>
                  </button>
                  <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all"
                  >
                    <Table className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                  <button
                    onClick={handleExportJSON}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90 rounded-xl transition-all shadow-md shadow-emerald-600/10"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save All</span>
                  </button>
                </div>
              )}
            </div>

            {/* Metrics Dashboard */}
            {reviews.length > 0 && !isLoading && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Output</span>
                  <span className="text-xl font-extrabold text-white mt-1">{totalReviews} reviews</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Average Rating</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-xl font-extrabold text-white">{averageRating}</span>
                    <div className="flex text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Word Count</span>
                  <span className="text-xl font-extrabold text-white mt-1">{totalWords} words</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Tone Profile</span>
                  <span className="text-sm font-bold text-emerald-400 mt-1 truncate">
                    {totalReviews > 0 ? (
                      `${Math.round(((toneCounts.Positive || 0) / totalReviews) * 100)}% Positive`
                    ) : (
                      "N/A"
                    )}
                  </span>
                </div>
              </div>
            )}

            {/* Active Output Section */}
            {isLoading ? (
              
              /* Skeleton Loader */
              <div className="space-y-6">
                <div className="flex items-center gap-3 bg-slate-900 border border-slate-800/80 p-4 rounded-2xl">
                  <div className="w-4 h-4 rounded-full border-2 border-emerald-450 border-t-transparent animate-spin animate-duration-1000"></div>
                  <span className="text-sm font-bold text-emerald-300 animate-pulse">{LOADING_STEPS[loadingStepIdx]}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.from({ length: Math.min(actualReviewCount, 4) }).map((_, i) => (
                    <div key={i} className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 space-y-4 animate-pulse">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-800 animate-pulse"></div>
                          <div className="space-y-2">
                            <div className="h-3 w-24 bg-slate-800 rounded"></div>
                            <div className="h-2 w-16 bg-slate-800 rounded"></div>
                          </div>
                        </div>
                        <div className="h-3 w-16 bg-slate-800 rounded"></div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <div key={j} className="w-3.5 h-3.5 bg-slate-800 rounded-full"></div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-slate-800 rounded"></div>
                        <div className="h-3 w-5/6 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            ) : reviews.length === 0 ? (
              
              /* Empty State */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-slate-800/60 rounded-3xl bg-slate-950/20 my-auto min-h-[360px]">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
                  <FileText className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Generate Realistic Reviews</h4>
                <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-6">
                  Select your options in the configuration panel and hit generate. Realistic mockup profiles and context-aware responses will appear here.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md w-full text-left text-xs text-slate-400 bg-slate-905/40 p-4 border border-slate-800/80 rounded-2xl">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[10px] text-emerald-400 font-bold shrink-0">1</div>
                    <span>Define target specifications and select post or service templates.</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[10px] text-emerald-400 font-bold shrink-0">2</div>
                    <span>Generate reviews in over 100 global languages dynamically.</span>
                  </div>
                </div>
              </div>

            ) : (
              
              /* Actual Content Output Views */
              <div className="flex-1 overflow-visible">
                
                {/* Cards Grid Mode */}
                {viewMode === "cards" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reviews.map((review, index) => {
                      const { name, color, initials } = getReviewerDetails(review.id, index);
                      return (
                        <div 
                          key={review.id} 
                          className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-5 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all flex flex-col justify-between group relative overflow-hidden"
                        >
                          <div>
                            {/* Card Header */}
                            <div className="flex items-center justify-between gap-3 mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${color} flex items-center justify-center text-xs font-black text-white shadow-inner uppercase`}>
                                  {initials}
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors leading-snug">{name}</h4>
                                  <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                                      <Clock className="w-2.5 h-2.5" />
                                      {review.generatedAt.toLocaleTimeString()}
                                    </span>
                                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                    <span className="text-[10px] text-emerald-400 font-medium">{targetType}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Stars */}
                              <div className="flex items-center text-amber-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-800'}`} 
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Card Body */}
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap break-words">
                              {review.review}
                            </p>
                          </div>

                          {/* Card Footer Actions */}
                          <div className="flex justify-end items-center gap-2 mt-4 pt-3 border-t border-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                            <button
                              onClick={() => copyToClipboard(`Rating: ${review.rating}/5\n${review.review}`, review.id)}
                              className={`flex items-center gap-1 text-[11px] font-bold ${copiedId === review.id ? 'text-emerald-400 border-emerald-500/30' : 'text-slate-400 border-slate-800'} hover:text-white bg-slate-900 hover:bg-slate-800 border hover:border-slate-700 py-1.5 px-2.5 rounded-lg transition-all`}
                              title="Copy Review"
                            >
                              <Copy className="w-3 h-3" />
                              <span>{copiedId === review.id ? "Copied!" : "Copy"}</span>
                            </button>
                            <button
                              onClick={() => handleDelete(review.id)}
                              className="flex items-center gap-1 text-[11px] font-bold text-rose-400 hover:text-rose-300 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/30 hover:border-rose-800 py-1.5 px-2.5 rounded-lg transition-all"
                              title="Delete Review"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Table Layout Mode */}
                {viewMode === "table" && (
                  <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/40">
                    <table className="min-w-full divide-y divide-slate-800">
                      <thead className="bg-slate-900/80">
                        <tr>
                          <th scope="col" className="px-5 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-28">
                            Rating
                          </th>
                          <th scope="col" className="px-5 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Review Text
                          </th>
                          <th scope="col" className="px-5 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-32">
                            Generated At
                          </th>
                          <th scope="col" className="px-5 py-3.5 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider w-24">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-900">
                        {reviews.map((review) => (
                          <tr key={review.id} className="hover:bg-slate-900/40 transition-colors">
                            <td className="px-5 py-4 whitespace-nowrap align-top pt-5">
                              <div className="flex text-amber-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-800'}`} />
                                ))}
                              </div>
                            </td>
                            <td className="px-5 py-4 text-sm text-slate-300">
                              <div className="whitespace-pre-wrap max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {review.review}
                              </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap text-xs text-slate-500 align-top pt-5 font-mono">
                              {review.generatedAt.toLocaleTimeString()}
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap text-right text-sm font-medium align-top pt-4">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => copyToClipboard(`Rating: ${review.rating}/5\n${review.review}`, review.id)}
                                  className="text-slate-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                                  title="Copy"
                                >
                                  <Copy className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDelete(review.id)}
                                  className="text-rose-400 hover:text-rose-300 p-2 rounded-lg hover:bg-rose-950/30 transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Raw JSON Layout Mode */}
                {viewMode === "json" && (
                  <div className="relative group rounded-2xl border border-slate-800 bg-slate-950 p-5 overflow-hidden">
                    <div className="absolute right-4 top-4">
                      <button
                        onClick={() => copyToClipboard(JSON.stringify({ reviews }, null, 2))}
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 bg-slate-900 border border-slate-800 hover:border-slate-700 py-1.5 px-3 rounded-lg transition-all"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy JSON</span>
                      </button>
                    </div>
                    <pre className="text-xs text-emerald-300 font-mono overflow-x-auto whitespace-pre max-h-[600px] custom-scrollbar">
                      {JSON.stringify({
                        targetType,
                        reviewType,
                        language,
                        reviewsCount: reviews.length,
                        reviews: reviews.map(r => ({
                          rating: r.rating,
                          review: r.review
                        }))
                      }, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
