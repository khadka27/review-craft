"use client";

import { useState } from "react";
import {
  Search,
  Star,
  CheckCircle,
  XCircle,
  HelpCircle,
  MapPin,
  TrendingUp,
  Sliders,
  Sparkles,
  Smartphone,
  Eye,
  BookOpen,
  Info,
  ShieldCheck,
  MessageSquare,
  Award,
} from "lucide-react";

export function GoogleReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Is This Fake Google Review Generator Actually Used For?",
      a: "This tool is used to create Google review-style mockups for demos, landing pages, presentations, prototypes, and design previews. It is most useful when you need realistic-looking review content to show how a screen or layout may look before real customer feedback exists.",
    },
    {
      q: "What Parts of the Review Can I Customize?",
      a: "You can customize important details such as the review text, star rating, reviewer name, date, Local Guides label, photos, and owner reply. This gives you enough flexibility to shape the mockup for business listing previews, UI concepts, landing pages, and client presentations.",
    },
    {
      q: "How Do I Make the Mockup Look More Realistic?",
      a: "The most believable mockups use natural wording, a rating that matches the tone of the review, and dates or helpful counts that feel reasonable for the situation. It also helps to use extra elements like photos, badges, and owner replies only when they improve the layout instead of making it feel crowded.",
    },
    {
      q: "Is This Useful for Client Work or Internal Presentations?",
      a: "Yes, this type of mockup is useful for agencies, designers, marketers, and product teams who need polished visuals for pitch decks, design reviews, and stakeholder presentations. Instead of showing empty placeholders, you can present a more complete and believable interface that is easier for others to understand.",
    },
    {
      q: "Can I Use This for Google Business Profile or Google Maps-Style Mockups?",
      a: "Yes, this page is especially useful for Google Business profile concepts, local business listings, restaurant or hotel previews, and Google Maps-style interface demos. These use cases fit well because the tool focuses on Google-style review elements such as ratings, review text, owner responses, photos, and other familiar visual details.",
    },
    {
      q: "Is This for Posting Real Reviews on Google?",
      a: "No, the page is positioned for simulated, educational, internal, and presentation-focused use rather than deceptive publishing. Any generated content should be treated as mockup material, not as authentic customer feedback to be presented as real.",
    },
    {
      q: "What Makes This Better Than Using a Static Template?",
      a: "A static template gives you one fixed design, but this tool lets you edit the details that shape realism, such as the review content, rating, date, photos, and owner reply. That makes it more practical when you need different versions for presentations, case studies, landing pages, or interface testing.",
    },
    {
      q: "Who Is This Tool Best Suited For?",
      a: "This tool is best suited for designers, marketers, agencies, founders, students, and product teams who need review-style visuals for mockups and presentations. It is especially useful when a page, app screen, or business listing design feels incomplete without realistic review content.",
    },
  ];

  const useCases = [
    {
      title: "Google Business Profile Previews",
      desc: "Show ratings, customer comments, photos, and owner replies inside a listing before real reviews exist. Perfect for local restaurants, clinics, and hotels.",
      badge: "Local SEO",
      color: "border-blue-200 bg-blue-50 text-blue-800",
    },
    {
      title: "Landing Pages",
      desc: "Add realistic review-style content so testimonial or social-proof sections feel complete. Helps stakeholders evaluate structural layout.",
      badge: "Conversion",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      title: "Google Maps-Style Demos",
      desc: "Use review mockups in map-based search interface concepts where reviews are part of the core experience to help flows feel real.",
      badge: "UX Mapping",
      color: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
      title: "Client Presentations",
      desc: "Show clients a polished mockup instead of asking them to imagine content. Speed up feedback loops with presentation-ready templates.",
      badge: "Agencies",
      color: "border-purple-200 bg-purple-50 text-purple-800",
    },
    {
      title: "Pitch Decks",
      desc: "Support product ideas, local business concepts, or software ideas with visible trust signals. Explains the vision instantly.",
      badge: "Startups",
      color: "border-pink-200 bg-pink-50 text-pink-800",
    },
    {
      title: "UI and UX Testing",
      desc: "Evaluate layout, spacing, element density, and typography alignment before actual customer reviews are connected.",
      badge: "Product Dev",
      color: "border-sky-200 bg-sky-50 text-sky-800",
    },
    {
      title: "Portfolio Case Studies",
      desc: "Present your design portfolio with completed screens using believable placeholder reviews that look professional.",
      badge: "Designers",
      color: "border-slate-200 bg-slate-50 text-slate-800",
    },
    {
      title: "Internal Design Reviews",
      desc: "Discuss alignment, component behavior, responsive sizing, and layouts using complete visuals instead of blank blocks.",
      badge: "Teams",
      color: "border-rose-200 bg-rose-50 text-rose-800",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 1. Header Hero Panel with Google styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-12 shadow-2xl border border-blue-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(66,133,244,0.15),transparent_45%)]" />
        
        {/* Decorative corner Google color bars */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex">
          <div className="w-1/4 h-full bg-[#4285F4]" />
          <div className="w-1/4 h-full bg-[#EA4335]" />
          <div className="w-1/4 h-full bg-[#FBBC05]" />
          <div className="w-1/4 h-full bg-[#34A853]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-6 uppercase tracking-wider">
            <Search size={13} className="text-[#4285F4]" /> Professional Google Review Mockups
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Fake Google Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Create realistic Google review-style mockups in seconds. Customize star ratings, reviewer names, profile photos, review text, business details, review dates, uploaded images, and owner responses to generate polished Google-style screenshots for demos, landing pages, UI testing, client presentations, marketing creatives, and educational projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">Educational Use Only</span>
            <span className="bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">UI Testing</span>
            <span className="bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">Presentation Ready</span>
          </div>
        </div>
      </div>

      {/* Grid: Overview & What You Can Customize */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Card: Features */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-150 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                <Sparkles size={20} className="text-[#4285F4]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Perfect for designers, marketers, agencies, developers, and SaaS teams who need clean, presentation-ready review mockups without using real customer data.
            </p>
            
            <div className="space-y-3 pt-2">
              {[
                "Generate realistic Google review-style mockups",
                "Customize ratings, reviewer profiles, and review text",
                "Add business information, dates, photos, and owner replies",
                "Create mobile and desktop-style review screenshots",
                "Ideal for UI/UX design, marketing, and product demos",
                "Fast, easy-to-use, and presentation-ready",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-[#34A853] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Customize & Stands Out */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
                <Sliders size={20} className="text-[#FBBC05]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What You Can Customize</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              You can edit the review text, star rating, reviewer name, posting date, Local Guides label, image layout, and owner response to match the exact scenario you want to present. This makes the tool useful for flexible review screenshots in prototypes, mockups, landing pages, and visual presentations.
            </p>

            <div className="border-t border-slate-200 pt-4 space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 block">Why It Stands Out</span>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                This page is built around the details that make a Google review mockup feel more complete, including ratings, reviewer names, dates, Local Guides labels, photos, helpful counts, and owner replies. Unlike a basic fixed template, it gives you enough control to shape the screenshot for different scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segment: What Makes a Good Google Review Mockup */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-[#34A853]">
            <CheckCircle size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Visual Guidelines</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">What Makes a Good Google Review Mockup</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A good Google review mockup should feel believable, readable, and visually balanced. The strongest results use natural review language, a rating that matches the tone of the message, and supporting details like dates, photos, badges, and owner replies only when they improve the context. The goal is not to add every possible element, but to make the layout feel realistic and easy to scan.
          </p>
        </div>
      </div>

      {/* 5 Tips for Realistic Mockups */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tips for More Realistic Mockups
          </h3>
          <p className="text-slate-500 text-sm">
            Follow these practical tips to ensure your generated Google reviews blend realistically into your prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Keep the Language Natural",
              desc: "Write the review the way a real user might speak, using clear and specific wording instead of exaggerated praise or overly polished copy.",
              icon: Info,
              color: "bg-blue-50 text-blue-600 border-blue-100",
            },
            {
              title: "Match the Rating to the Message",
              desc: "The star rating and the written feedback should support each other so the mockup feels consistent at a glance.",
              icon: Star,
              color: "bg-amber-50 text-amber-600 border-amber-100",
            },
            {
              title: "Use Believable Details",
              desc: "Dates, helpful counts, and owner replies should feel reasonable for the business type and scenario you are presenting.",
              icon: MapPin,
              color: "bg-emerald-50 text-emerald-600 border-emerald-100",
            },
            {
              title: "Add Extra Elements With Restraint",
              desc: "Photos, badges, and other visual details can improve realism, but too many at once can make the layout feel crowded.",
              icon: Sliders,
              color: "bg-purple-50 text-purple-600 border-purple-100",
            },
            {
              title: "Prioritize Readability",
              desc: "A cleaner screenshot usually works better than a dense one, especially when the mockup is being used in a presentation, preview, or review flow.",
              icon: Eye,
              color: "bg-slate-50 text-slate-600 border-slate-200/60",
            },
          ].map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div key={idx} className={`bg-white rounded-2xl p-6 border ${tip.color} shadow-sm hover:shadow-md transition-all`}>
                <div className="space-y-3">
                  <div className="p-2.5 bg-white/80 rounded-xl inline-block shadow-sm">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{tip.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Best Use Cases Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Best Use Cases for Google Review Mockups
          </h3>
          <p className="text-slate-500 text-sm">
            Understand how professional designers and marketers leverage simulated review content across workflows.
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

      {/* Responsible Use and Limitations */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
          <ShieldCheck size={24} className="text-[#4285F4]" />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Responsible Use and Limitations</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is designed for mockups, prototypes, internal demos, educational work, design previews, and presentation materials. Generated review content should be treated as simulated material and should not be presented as real customer feedback. It should not be used to mislead customers, impersonate real people, or publish deceptive review content as if it were genuine.
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
            Everything you need to know about the Google review mockup generator tool.
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
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-500/20 shadow-xl text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.1),transparent_70%)]" />
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#4285F4] block relative z-10">Final Thought</span>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10">
          A strong Google review mockup should make a design feel clearer, more complete, and easier to understand before real customer feedback is available. With editable details such as ratings, reviewer information, dates, photos, and owner replies, this tool helps create polished review-style screenshots for demos, prototypes, landing pages, presentations, and internal reviews.
        </p>
        <p className="text-[#34A853] text-xs sm:text-sm font-semibold relative z-10">
          Use responsibly to mock up your visual creations and local search features without using real client data.
        </p>
      </div>

    </div>
  );
}
