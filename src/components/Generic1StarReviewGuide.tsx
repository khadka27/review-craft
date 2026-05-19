"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Star,
  CheckCircle,
  XCircle,
  HelpCircle,
  TrendingUp,
  Sliders,
  Sparkles,
  Smartphone,
  Eye,
  Info,
  ShieldCheck,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight,
  MessageSquare,
  Users,
  Terminal,
  Skull,
} from "lucide-react";

export function Generic1StarReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Choose a negative layout",
      desc: "Select the review style that best matches the platform where you need to display critical feedback or error states.",
    },
    {
      step: "02",
      title: "Auto-fill frustration details",
      desc: "The tool populates realistic timestamps and user avatars so the fake negative review generator output doesn’t look empty or artificial.",
    },
    {
      step: "03",
      title: "Add the core complaints",
      desc: "Enter the specific issues or generate typical customer grievances to visualize worst-case scenarios accurately.",
    },
    {
      step: "04",
      title: "Generate and download",
      desc: "Preview the harsh rating, make quick edits to the text, and export the screenshot for immediate use in your UX testing workflow.",
    },
  ];

  const features = [
    {
      title: "Authentic negative styling",
      desc: "Choose from layouts that mimic how 1-star reviews appear on major apps and marketplaces.",
    },
    {
      title: "Rapid mockup creation",
      desc: "Build convincing complaint screenshots in seconds instead of designing each angry element by hand.",
    },
    {
      title: "Fully editable content",
      desc: "Adjust the reviewer’s name, date, and specific complaints to fit your testing scenario.",
    },
    {
      title: "Built for stress-testing",
      desc: "Use these layouts in support training decks, UI error states, and reputation management demos.",
    },
  ];

  const targetUsers = [
    { title: "UX/UI Designers", desc: "Testing error states & low rating UI cards." },
    { title: "Customer Support Teams", desc: "For training agents on agent ticket stress handling." },
    { title: "Reputation Managers", desc: "Pitches to clients on response workflow previews." },
    { title: "Product Managers", desc: "Running risk assessments & mixed sentiment research." },
  ];

  const useCases = [
    {
      title: "Support Training Decks",
      desc: "Show agents what difficult tickets look like before they go live so they are fully prepared.",
      badge: "Training",
      color: "border-red-200 bg-red-50 text-red-800",
    },
    {
      title: "UI Error State Mockups",
      desc: "Design how your app handles and displays low ratings gracefully in terms of layouts and color gradients.",
      badge: "UX Design",
      color: "border-slate-200 bg-slate-50 text-slate-800",
    },
    {
      title: "Reputation Management Pitches",
      desc: "Demonstrate to clients how negative feedback appears across different platforms and search previews.",
      badge: "Pitches",
      color: "border-amber-250 bg-amber-50 text-amber-800",
    },
    {
      title: "A/B Testing Responses",
      desc: "Compare how different reply and response strategies look next to a harsh, detailed review.",
      badge: "Marketing",
      color: "border-rose-200 bg-rose-50 text-rose-800",
    },
  ];

  const faqs = [
    {
      q: "Is this 1 star review generator free to use?",
      a: "Yes, the basic features of this 1 star rating maker are available online for free, allowing you to create unlimited mockups for design and testing purposes without a subscription.",
    },
    {
      q: "Can I customize the text in the fake negative review generator?",
      a: "Absolutely. You have full control over the reviewer’s name, the date, and the comment body. This ensures your bad review generator output matches the specific scenario you are trying to prototype.",
    },
    {
      q: "Is it ethical to use a bad review generator?",
      a: "These tools are designed strictly for UI/UX design, educational purposes, and internal training. They should never be used to post fraudulent reviews on live platforms to harm competitors or deceive consumers.",
    },
    {
      q: "Which platforms does the 1 star rating maker support?",
      a: "The tool supports various generic and platform-specific layouts, ensuring your mockups look authentic whether you are designing for mobile apps, e-commerce sites, or service directories.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Red Styling for 1-Star reviews */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-rose-950 p-8 sm:p-12 shadow-2xl border border-red-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#EF4444]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-300 border border-red-500/20 mb-6 uppercase tracking-wider">
            <AlertTriangle size={13} className="text-[#EF4444] animate-bounce" /> Critique UI Testing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            1 Star Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Designing for crisis management or testing low-rating UI? This 1 star review generator is built for speed. Quickly create authentic mockups for UI/UX testing, customer support training, and reputation assessment.
          </p>
        </div>
      </div>

      {/* Steps: How to Use */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Use for Realistic Mockups
          </h3>
          <p className="text-slate-500 text-sm">
            Create high-fidelity critical feedback cards in under a minute with these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#EF4444] uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Features & Target Audience */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Features list */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 rounded-xl text-[#EF4444]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Features That Make It Faster</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{feat.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-6">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-200 rounded-xl text-slate-700">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Who This Rating Maker Is For</h3>
            </div>
            
            <div className="space-y-4 pt-1">
              {targetUsers.map((user, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-5 w-5 rounded-full bg-red-50 text-[#EF4444] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{user.title}</h4>
                    <p className="text-slate-500 text-xs">{user.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Use cases */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Use Cases Across Workflows
          </h3>
          <p className="text-slate-500 text-sm">
            Critical feedback visual mockups fit into more professional scenarios than most teams expect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-2">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${uc.color}`}>
                  {uc.badge}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">{uc.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethical warning */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-red-50 text-[#EF4444] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Responsible Use and Limitations</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is designed strictly for UI/UX design, internal training, and mockups. Generated review content should never be presented as actual competitor reviews or used to mislead consumers on real listings. Keep layouts clearly labeled as concepts during public previews.
          </p>
        </div>
      </div>

      {/* FAQ accordion */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything you need to know about the 1-star critique review generator.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200/60 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{faq.q}</span>
                <HelpCircle size={18} className="text-slate-400 shrink-0 ml-2" />
              </button>
              
              {activeFaq === idx && (
                <div className="p-4 border-t border-slate-100 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Thought Section */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 border border-red-500/20 shadow-xl text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]" />
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF4444] block relative z-10">Final Thought</span>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10">
          This 1 star review generator helps you move faster when your design, training material, or presentation needs realistic negative feedback visuals. Instead of manually designing every angry comment, you can generate polished screenshots for multiple platforms, edit the specific complaints, and rely on auto-filled elements to complete the layout.
        </p>
        <p className="text-[#34A853] text-xs sm:text-sm font-semibold relative z-10">
          Use responsibly to mock up your visual creations and local search features without using real client data.
        </p>
      </div>

    </div>
  );
}
