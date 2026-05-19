"use client";

import { useState } from "react";
import {
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
  Smile,
  ChevronRight,
  Utensils,
  MapPin,
} from "lucide-react";

export function YelpReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Is This Fake Yelp Review Generator Actually Used For?",
      a: "This tool is used to create Yelp review-style mockups for demos, landing pages, presentations, prototypes, and design previews. It is most useful when you need realistic-looking review content to show how a screen or layout may look before real customer feedback exists.",
    },
    {
      q: "What Parts of the Review Can I Customize?",
      a: "You can customize important details such as the review text, star rating, reviewer name, date, business details, photos, and supporting profile information. This gives you enough flexibility to shape the mockup for restaurant previews, local business concepts, landing pages, and client presentations.",
    },
    {
      q: "How Do I Make the Mockup Look More Realistic?",
      a: "The most believable mockups use natural wording, a rating that matches the tone of the review, and dates or photo counts that feel reasonable for the situation. It also helps to use extra visual elements only when they improve the layout instead of making it feel crowded.",
    },
    {
      q: "Can I Create a Fake Yelp Review Funny Enough for a Presentation or Concept?",
      a: "Yes, but it usually works best when the humor feels subtle and still matches the tone of a real review. If the wording becomes too exaggerated or meme-like, the mockup may stop feeling believable and become less useful in design or client-facing contexts.",
    },
    {
      q: "Is This Useful for Restaurant and Local Business Mockups?",
      a: "Yes. It works especially well for restaurant listings, cafe previews, salon concepts, repair services, clinics, and other local business layouts where review content is part of the overall experience.",
    },
    {
      q: "Is This for Posting Real Reviews on Yelp?",
      a: "No, the page is positioned for simulated, educational, internal, and presentation-focused use rather than deceptive publishing. Any generated content should be treated as mockup material, not as authentic customer feedback to be presented as real.",
    },
  ];

  const useCases = [
    {
      title: "Restaurant and Cafe Previews",
      desc: "Show how ratings, customer comments, and photos may appear inside a polished Yelp-style listing before real reviews are available. Crucial for hospitality mockups.",
      badge: "Food & Drinks",
      color: "border-red-200 bg-red-50 text-red-800",
    },
    {
      title: "Local Business Concepts",
      desc: "Add realistic review content for salons, repair shops, clinics, service providers, and neighborhood brands to make listing components look fully styled.",
      badge: "Local Service",
      color: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
      title: "Landing Pages",
      desc: "Use review screenshots to make social-proof layout sections feel completed and complete instead of visually empty.",
      badge: "Conversions",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      title: "Client Presentations",
      desc: "Show clients a realistic, fully formatted version of the final UI concept instead of asking them to imagine how reviews will render.",
      badge: "Presentations",
      color: "border-indigo-200 bg-indigo-50 text-indigo-800",
    },
    {
      title: "UI and UX Testing",
      desc: "Evaluate font spacing, layout alignments, review bubble responsiveness, and element flow using real-size Yelp review blocks.",
      badge: "UX Testing",
      color: "border-sky-200 bg-sky-50 text-sky-800",
    },
    {
      title: "Portfolio Case Studies",
      desc: "Render design case studies with polished placeholder listings that have believable ratings, specific names, and customer details.",
      badge: "Case Studies",
      color: "border-slate-200 bg-slate-50 text-slate-800",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Yelp Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950 via-slate-900 to-rose-950 p-8 sm:p-12 shadow-2xl border border-red-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,35,35,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D32323]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-300 border border-red-500/20 mb-6 uppercase tracking-wider">
            <Utensils size={13} className="text-[#D32323]" /> Visual Yelp Review Builder
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Fake Yelp Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Create realistic Yelp-style review mockups in seconds. Customize every detail including star ratings, reviewer names, customer feedback, business information, review dates, profile photos, uploaded images, and owner responses to generate professional-looking Yelp previews that feel authentic and presentation-ready.
          </p>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Whether you’re building a product demo, designing a restaurant landing page, testing social proof sections, or showcasing a concept to clients, this tool helps you create clean, realistic review layouts without using real customer data.
          </p>
        </div>
      </div>

      {/* Grid: 2 columns for Features & Customizations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Card: Features */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 rounded-xl text-[#D32323]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Designed for agencies, mockups, and local listings design concepts where review formatting determines component aesthetics.
            </p>
            
            <div className="space-y-3 pt-2">
              {[
                "Generate realistic Yelp-style review mockups",
                "Customize ratings, reviews, names, and profile photos",
                "Add business details, dates, and customer images",
                "Create mobile and desktop-style screenshots",
                "Perfect for UI/UX design, marketing, and prototyping",
                "Fast, simple, and presentation-ready output",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Customization Controls & Stands Out */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
                <Sliders size={20} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What You Can Customize</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              You can edit the review text, star rating, reviewer name, posting date, business details, photo count, and visual layout to match the exact scenario you want to present. This makes the tool useful for flexible Yelp-style review screenshots in prototypes, mockups, landing pages, and visual presentations.
            </p>
            
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest block">Flexible Editing Controls</span>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Realistic mockups often need more than one-click output, especially when you want the screenshot to match a specific business, layout, tone, or presentation goal. This page gives you room to shape the review text, rating, reviewer details, business context, dates, and supporting elements so the final result feels more intentional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stands Out Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <h4 className="text-lg font-bold text-slate-900">Why This Yelp Review Generator Stands Out</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This page is built around the details that make a Yelp review mockup feel more complete, including ratings, customer feedback, reviewer names, business context, photo indicators, and supporting profile details. Unlike a basic fixed template, it gives you enough control to shape the screenshot for restaurant previews, local business concepts, landing pages, client presentations, and UI demos.
          </p>
        </div>
        <div className="bg-red-50 text-[#D32323] px-4 py-3 rounded-2xl border border-red-100 text-center shrink-0 w-full md:w-auto font-bold text-xs uppercase tracking-wider">
          Mockups & Presentations Framed
        </div>
      </div>

      {/* Visual Guidelines & Tips */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What Makes a Good Yelp Review Mockup
          </h3>
          <p className="text-slate-500 text-sm">
            A good Yelp review mockup should feel believable, readable, and visually balanced. Learn the core principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Keep the Tone Platform-Appropriate",
              desc: "Write the review the way a real Yelp user might speak, using specific and natural wording instead of exaggerated praise or stiff promotional copy.",
              color: "border-red-100 bg-red-50/50 text-[#D32323]",
            },
            {
              title: "Match the Rating to the Message",
              desc: "The star rating and the written feedback should support each other so the mockup feels consistent at a glance.",
              color: "border-amber-100 bg-amber-50/50 text-amber-600",
            },
            {
              title: "Use Believable Details",
              desc: "Dates, photo counts, and profile details should feel reasonable for the business type and scenario you are presenting.",
              color: "border-emerald-100 bg-emerald-50/50 text-emerald-600",
            },
            {
              title: "Keep the Business Context Clear",
              desc: "The review should feel connected to the type of place being shown, whether that is a restaurant, salon, repair shop, clinic, or local service business.",
              color: "border-indigo-100 bg-indigo-50/50 text-indigo-600",
            },
            {
              title: "Prioritize Readability",
              desc: "A cleaner screenshot usually works better than a dense one, especially when the mockup is being used in a presentation, preview, or review flow.",
              color: "border-slate-200 bg-slate-50 text-slate-600",
            },
          ].map((tip, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-6 border ${tip.color} shadow-sm hover:shadow-md transition-all`}>
              <h4 className="text-base font-bold text-slate-900 mb-2">{tip.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Funny Yelp Mockups section */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="flex items-center gap-2 text-red-400">
            <Smile size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Playful Contexts</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Funny Yelp Review Mockups That Still Look Realistic</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A fake Yelp review funny enough to add personality can still work in a mockup, as long as the humor feels subtle and believable. The best approach is to use a small, specific detail or a lightly playful line rather than turning the review into a joke that breaks the realism of the screenshot.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            This works best for concept work, creative presentations, and playful brand previews where a little personality helps the design feel more memorable without making the content feel exaggerated.
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Best Use Cases for Yelp Review Mockups
          </h3>
          <p className="text-slate-500 text-sm">
            Simulated Yelp reviews fit best across local business platforms, listings, and responsive UI previews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
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

      {/* Responsible Use */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-red-50 text-[#D32323] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Responsible Use and Limitations</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is designed for mockups, prototypes, internal demos, educational work, design previews, and presentation materials. Generated review content should be treated as simulated material and clearly identified as mockup content rather than real customer feedback. It should not be used to mislead customers, impersonate real people, or publish deceptive review content as if it were genuine.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything you need to know about the Yelp review mockup builder.
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,35,35,0.1),transparent_70%)]" />
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#D32323] block relative z-10">Final Thought</span>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10">
          A strong Yelp review mockup should make a design feel clearer, more complete, and easier to understand before real customer feedback is available. With editable details such as ratings, reviewer information, dates, business context, and photos, this tool helps create polished review-style screenshots for demos, prototypes, landing pages, presentations, and internal reviews.
        </p>
        <p className="text-[#34A853] text-xs sm:text-sm font-semibold relative z-10">
          Use responsibly to mock up your visual creations and local search features without using real client data.
        </p>
      </div>

    </div>
  );
}
