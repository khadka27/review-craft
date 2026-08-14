"use client";

import {
  Facebook,
  Info,
  ShieldCheck,
  ChevronRight,
  Zap,
  Layout,
  Code2,
} from "lucide-react";

export function FacebookReviewGuide() {
  const steps = [
    { title: "Select Layout Component", desc: "Choose the Facebook-inspired post or comment component style in the mockup generator." },
    { title: "Input Prototype Details", desc: "Enter your test profile name, avatar image, and simulated timestamp parameters." },
    { title: "Customize Feedback Content", desc: "Set star ratings, recommendation text, and reaction counts for design testing." },
    { title: "Preview Layout Ergonomics", desc: "Verify line wrapping, font sizes, and container padding across desktop and mobile screens." },
    { title: "Export Visual Prototype", desc: "Download high-resolution image assets with embedded simulation disclaimers for pitch decks." },
  ];

  const tips = [
    { title: "Maintain Realistic Line Lengths", desc: "Format test copy with natural paragraph lengths (2-4 sentences) to reflect authentic user comment density." },
    { title: "Test Edge Case Text Sizes", desc: "Evaluate how long names and multi-line feedback wrap inside Facebook card containers." },
    { title: "Simulate Diverse Rating States", desc: "Test 5-star positive feedback alongside critical 3-star feedback to evaluate layout resilience." },
    { title: "Incorporate Watermarked Exports", desc: "Always use watermarked visual assets in client presentations to distinguish prototypes from live data." },
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
            <Facebook size={13} className="text-[#1877F2]" /> UI/UX Design & Prototyping
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Facebook-Style Social Review Interface Prototype Guide
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Learn how to structure, customize, and integrate Facebook-inspired review cards and social post mockups into website wireframes, mobile app prototypes, and client pitch decks.
          </p>
        </div>
      </div>

      {/* Grid: Overview & Prototyping Use Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What is a Facebook Review Prototype */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#1877F2]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What Is a Facebook-Style Review Prototype?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A Facebook-style review prototype is a visual UI component designed to simulate social feedback cards, recommendations, and comment threads. It mirrors standard platform typography, avatar frames, and engagement counters for design testing.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              UX researchers and web designers use these simulated components in wireframes and client presentations to demonstrate social proof placement before live user data is aggregated.
            </p>
          </div>
        </div>

        {/* Why Use Review Mockups */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#1877F2]">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Benefits for UI Designers & Product Teams</h3>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex gap-2.5 items-start">
                <ChevronRight size={16} className="text-[#1877F2] mt-0.5 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                  <strong>Rapid Wireframing:</strong> Generate realistic visual cards in seconds without building complex component libraries from scratch.
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <ChevronRight size={16} className="text-[#1877F2] mt-0.5 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                  <strong>Responsive Testing:</strong> Evaluate how text wraps and scales across desktop web and mobile viewport breakpoints.
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <ChevronRight size={16} className="text-[#1877F2] mt-0.5 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm leading-normal">
                  <strong>Clear Stakeholder Demos:</strong> Provide clients with realistic visual comps during early design reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Build a Facebook Review Mockup
          </h3>
          <p className="text-slate-500 text-sm">
            Follow these five steps to create clean, watermarked review UI components for your prototypes.
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

      {/* Tips Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Design Best Practices
          </h3>
          <p className="text-slate-500 text-sm">
            Guidelines for ensuring your mockups remain readable, clear, and ethical.
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

      {/* Responsible Prototyping Notice */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm">
          <ShieldCheck size={18} /> Responsible Prototyping Notice
        </div>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          ReviewCraft is an independent design tool and is not affiliated with or endorsed by Meta or Facebook. All generated visual assets are simulated mockups intended exclusively for UI/UX wireframing, client presentations, and educational projects. Do not present simulated content as authentic customer feedback.
        </p>
      </div>

    </div>
  );
}
