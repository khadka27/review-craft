"use client";

import { useState } from "react";
import {
  Instagram,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Sliders,
  Sparkles,
  Info,
  ShieldCheck,
  ChevronRight,
  Users,
} from "lucide-react";

export function InstagramReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Enter details",
      desc: "Open the fake Instagram comment generator and add usernames, profile images, and layout preferences.",
    },
    {
      step: "02",
      title: "Customize comments",
      desc: "Write comments, replies, and adjust the structure to match real social media interactions.",
    },
    {
      step: "03",
      title: "Download screenshot",
      desc: "Export your design to create an Instagram comment screenshot instantly for use anywhere.",
    },
  ];

  const features = [
    {
      title: "Custom comment messages",
      desc: "Add, edit, reorder, and structure comments to reflect real conversations.",
    },
    {
      title: "Username & profile editing",
      desc: "Modify names, handles, and avatars for brands, influencers, or fictional users.",
    },
    {
      title: "Timestamp control",
      desc: "Adjust dates and times to create natural engagement flow.",
    },
    {
      title: "Instagram-style UI",
      desc: "The realistic Instagram comment preview generator mirrors actual layouts and spacing.",
    },
    {
      title: "Screenshot export",
      desc: "Instantly download high-quality images for use in campaigns or presentations.",
    },
  ];

  const useCases = [
    {
      title: "Landing pages",
      desc: "Display comment engagement near call-to-action sections to boost conversions.",
      badge: "Landing Pages",
      color: "border-pink-200 bg-pink-50 text-pink-800",
    },
    {
      title: "Testimonials",
      desc: "Turn standard text feedback into conversational comment threads that feel organic.",
      badge: "Testimonials",
      color: "border-purple-200 bg-purple-50 text-purple-800",
    },
    {
      title: "Affiliate funnels",
      desc: "Show audience reactions and discussions around promotional offers.",
      badge: "Funnels",
      color: "border-amber-250 bg-amber-50 text-amber-800",
    },
    {
      title: "Social proof visuals",
      desc: "Use comment screenshots in ads, marketing emails, and product case studies.",
      badge: "Social Proof",
      color: "border-[#ee2a7b]/20 bg-[#ee2a7b]/5 text-[#ee2a7b]",
    },
  ];

  const faqs = [
    {
      q: "Is the fake instagram comment generator free to use?",
      a: "Most tools offer a free version with basic features, while advanced options such as high-resolution exports or additional templates may require payment. Always review pricing details before using it for commercial or professional projects.",
    },
    {
      q: "Do I need a real Instagram account to use it?",
      a: "No, the fake instagram comment generator works independently without requiring login access. You manually input usernames, comments, and images, ensuring privacy and allowing full control over the generated content.",
    },
    {
      q: "Is using a fake instagram comment generator safe?",
      a: "Yes, it is safe when used for mockups, testing, and design purposes. Risks only arise if the generated content is used to deceive users or violate platform policies or ethical guidelines.",
    },
    {
      q: "How can I identify fake Instagram comment screenshots?",
      a: "Fake screenshots often contain overly perfect language, unrealistic engagement timing, or repetitive structures. If comments appear too promotional or lack natural variation, they are likely generated rather than real.",
    },
    {
      q: "Can I download the generated comment screenshots?",
      a: "Yes, most tools allow quick export in formats like PNG or JPG. Once generated, you can download and use the images in websites, presentations, or marketing materials without additional editing.",
    },
    {
      q: "How customizable is the comment generator?",
      a: "You can usually customize usernames, profile images, comment text, replies, and timestamps. This flexibility helps tailor the output to match your specific campaign, audience, or design scenario.",
    },
    {
      q: "Is it legal to use comment mockups?",
      a: "Using mockups is legal for design, testing, and demonstration purposes. Legal issues arise if they are used to mislead users or present fake engagement as real feedback.",
    },
    {
      q: "Where can I use these comment screenshots?",
      a: "You can use them on landing pages, ads, presentations, social media previews, and websites. Many marketers combine them with other platform visuals to create consistent social proof content.",
    },
    {
      q: "What makes this tool better than manual design?",
      a: "It automates layout, spacing, and styling, saving time and ensuring consistency. Compared to manual design tools, it is faster and easier, especially for users without design experience.",
    },
    {
      q: "Will comment mockups improve conversions?",
      a: "They can improve engagement and clarity, but results depend on your overall strategy and messaging. Mockups should support real value and not replace genuine customer feedback.",
    },
    {
      q: "What are the limitations of a fake instagram comment generator?",
      a: "Limitations include static images, limited layout variations, and potential misuse. It cannot generate real engagement or replace authentic user interaction, making it best suited for mockups and visual demonstrations only.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Instagram Vibrant Gradient Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-8 sm:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-black/15 mix-blend-overlay" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ee2a7b]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <Instagram size={13} className="text-white animate-pulse" /> Comment Simulator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Instagram Comment Generator
          </h2>
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-normal">
            In 2026, creators, marketers, and designers rely on realistic engagement visuals to showcase audience reactions, feedback, and social proof. A fake instagram comment generator allows you to build lifelike Instagram comment screenshots for mockups, demos, and marketing content without needing design skills.
          </p>
        </div>
      </div>

      {/* Grid: What is it & Instagram Comment Mockup Use */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What is Fake Instagram Comment Generator? */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-pink-50 rounded-xl text-[#ee2a7b]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What is this Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The Fake Instagram Comment Generator is a simple web-based Instagram comment UI generator online tool that helps you create realistic comment sections in just a few clicks. You can customize usernames, profile images, timestamps, and comment threads to match your scenario.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Because this easy Instagram comment design generator runs directly in your browser, there is no need to install software or connect a real account.
            </p>
          </div>
        </div>

        {/* Instagram Comment Mockup Use */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 rounded-xl text-[#6228d7]">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Instagram Comment Mockup Use</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              One of the most powerful uses of a fake instagram comment generator is building Instagram comment mockup visuals that act as social proof. Instead of static testimonials, comment-style layouts feel more natural and relatable.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {["Landing pages", "Testimonials", "Affiliate funnels", "Social proof visuals"].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <CheckCircle size={14} className="text-[#ee2a7b] shrink-0" />
                  <span className="text-slate-700 text-xs sm:text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Steps: How It Works */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How It Works
          </h3>
          <p className="text-slate-500 text-sm">
            Using an instant Instagram comment mockup creator is simple:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#ee2a7b] uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Features & Target Use Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Features */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-pink-50 rounded-xl text-[#ee2a7b]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {features.map((feat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{feat.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-6">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Use Cases */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 rounded-xl text-[#6228d7]">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Workflow Use Cases</h3>
            </div>
            
            <div className="space-y-4 pt-1">
              {[
                { title: "Marketing Campaigns", desc: "Show engagement and reactions in ad mockups." },
                { title: "Affiliate Funnels", desc: "Highlight audience discussions surrounding your product." },
                { title: "UI/UX Design", desc: "Test responsive comment threads in interfaces." },
                { title: "Client Presentations", desc: "Visualize and pitch organic brand engagement scenarios." },
                { title: "Product Demos", desc: "Simulate user interaction inside application dashboards." },
              ].map((user, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-5 w-5 rounded-full bg-pink-50 text-[#ee2a7b] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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

      {/* Practical Ways grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Practical Ways to Use Fake Instagram Comments
          </h3>
          <p className="text-slate-500 text-sm">
            Leverage simulated social media threads across your sales and product workflows.
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

      {/* Grid: Why This Tool Is Useful & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Why This Tool Is Useful</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            The fake instagram comment generator simplifies the creation of high-quality visuals:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <li className="flex items-center gap-2">
              <ChevronRight size={14} className="text-[#ee2a7b]" /> Saves time compared to manual design
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} className="text-[#ee2a7b]" /> Improves consistency with built-in layouts
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} className="text-[#ee2a7b]" /> Creates realistic engagement mockups
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={14} className="text-[#ee2a7b]" /> Requires no design or technical skills
            </li>
          </ul>
        </div>

        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl space-y-4">
          <h3 className="text-lg font-bold text-white">Benefits</h3>
          <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#ee2a7b]" /> <span className="font-bold text-white">Fast generation:</span> Instantly create comments.
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#ee2a7b]" /> <span className="font-bold text-white">Realistic visuals:</span> Precise spacing and UI styling.
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#ee2a7b]" /> <span className="font-bold text-white">Easy to use:</span> Works fully within your web browser.
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#ee2a7b]" /> <span className="font-bold text-white">Consistent output:</span> Follows standardized design layouts.
            </li>
          </ul>
        </div>
      </div>

      {/* Tips for realistic reviews */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
        <h4 className="font-bold text-slate-900 text-base">Tips for Realistic Comment Mockups</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
          <div className="flex gap-2">
            <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>Keep comment tones natural, conversational, and casual.</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>Avoid overly promotional or exaggerated text strings.</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>Use realistic timestamps to simulate chronological flow.</span>
          </div>
          <div className="flex gap-2">
            <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span>Use emojis sparingly but where appropriate to copy real user habits.</span>
          </div>
        </div>
      </div>

      {/* Ethical warning / disclaimer */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-white text-[#ee2a7b] rounded-xl shadow-sm shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-rose-900 text-base">Important Disclaimer</h4>
          <p className="text-rose-800 text-xs sm:text-sm leading-relaxed">
            This fake instagram comment generator is provided strictly for mockups, prototypes, internal demos, design previews, testing environments, and marketing drafts such as Instagram comment mockup visuals. It must not be used to mislead customers, impersonate real users, fabricate engagement, or present generated comments as genuine feedback.
          </p>
          <p className="text-rose-700 text-xs font-semibold">
            Any misuse may result in legal exposure, platform enforcement actions, and reputational damage.
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
            Everything you need to know about our fake Instagram comment generator tool.
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

    </div>
  );
}
