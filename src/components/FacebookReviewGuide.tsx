"use client";

import {
  Facebook,
  Star,
  CheckCircle,
  TrendingUp,
  Sliders,
  Sparkles,
  Eye,
  Info,
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  BookOpen,
  Zap,
} from "lucide-react";

export function FacebookReviewGuide() {
  const steps = [
    { title: "Choose a Generator", desc: "Select a reliable facebook review generator that offers templates or AI-driven content creation." },
    { title: "Input Details", desc: "Enter your business name, page URL, and any specific keywords you want to include in the reviews." },
    { title: "Customize", desc: "Customize the tone, star rating, and content to match your desired outcome." },
    { title: "Generate & Copy", desc: "Click “Create” to produce the review and copy the text directly." },
    { title: "Publish", desc: "Paste the generated review into your Facebook page’s reviews section to publish it." },
  ];

  const tips = [
    { title: "Keep Content Realistic", desc: "Even though the reviews are fake, use realistic language and avoid repetitive phrases." },
    { title: "Mix with Authentic Reviews", desc: "Combine fake reviews with real feedback to create a more credible overall profile." },
    { title: "Simulate Diverse Ratings", desc: "Test different scenarios with varying star ratings to see how they affect your page's performance." },
    { title: "Cohesive Mockups Integration", desc: "Use mockups for design to align your branding and ensure a cohesive look across your social media." },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Facebook Blue Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-sky-950 p-8 sm:p-12 shadow-2xl border border-blue-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,119,242,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1877F2]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-6 uppercase tracking-wider">
            <Facebook size={13} className="text-[#1877F2] animate-pulse" /> Social Proof Visualizer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            How to Use a Fake Facebook Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Facebook has evolved into a critical platform for local businesses and brands to connect with customers. However, building a strong reputation through genuine reviews can be a slow process. A fake facebook review generator offers a quick shortcut to boost your online presence and attract more clients instantly.
          </p>
        </div>
      </div>

      {/* Grid: Overview & Why Use a Facebook Review Maker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What is a Facebook Review Generator */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#1877F2]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What is a Facebook Review Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              It is software or a tool designed to produce realistic-looking reviews specifically for Facebook. These reviews mimic genuine customer feedback, complete with star ratings, user profiles, and text comments.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Users often rely on a fake review facebook maker to create these mockups for competitive analysis or profile enhancement.
            </p>
          </div>
        </div>

        {/* Why Use a Fake Facebook Reviews Maker */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#1877F2]">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why Use a Fake Facebook Reviews Maker?</h3>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex gap-2.5 items-start">
                <ChevronRight size={16} className="text-[#1877F2] mt-0.5 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                  <strong>Time-saver:</strong> Generate reviews instantly rather than waiting for organic engagement.
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <ChevronRight size={16} className="text-[#1877F2] mt-0.5 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                  <strong>Testing Scenarios:</strong> Test how your business page looks under different scenarios, such as a surge in positive feedback.
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <ChevronRight size={16} className="text-[#1877F2] mt-0.5 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                  <strong>Refining Strategy:</strong> Helps visualize how your reviews might appear on your profile, helping you refine your content strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps: How to Generate Fake Reviews for Facebook */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Generate Fake Reviews for Facebook
          </h3>
          <p className="text-slate-500 text-sm">
            A simple, repeatable step-by-step layout for generating Facebook reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-[10px] font-bold text-[#1877F2] uppercase tracking-widest block mb-2">Step 0{idx + 1}</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">{step.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Power of Facebook Fake Reviews Mockups */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-[#1877F2]">
            <TrendingUp size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Strategic Previews</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">The Power of Facebook Fake Reviews Mockups</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mockups are essential for visual planning and previewing reviews before they go live. They allow you to tweak formatting and adjust the review structure to ensure consistency with your branding. Businesses can understand how their ratings might influence potential customers through these visual previews.
          </p>
        </div>
      </div>

      {/* Tips for Using Fake Reviews Effectively */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tips for Using Reviews Effectively
          </h3>
          <p className="text-slate-500 text-sm">
            Keep review copy realistic, integrate placeholder details carefully, and maintain cohesive layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
              <div className="h-6 w-6 rounded-full bg-blue-50 text-[#1877F2] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">{tip.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Conclusion</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          In conclusion, a facebook review generator is an essential asset for any business aiming to dominate the social media landscape. By creating convincing reviews quickly, you can bypass the long grind of organic growth and establish an immediate presence. To maximize results, always combine these generated insights with authentic customer interactions to maintain a trustworthy profile.
        </p>
      </div>

    </div>
  );
}
