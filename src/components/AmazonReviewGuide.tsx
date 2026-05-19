"use client";

import { useState } from "react";
import {
  ShoppingBag,
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
  AlertTriangle,
  BadgePercent,
  CheckSquare,
} from "lucide-react";

export function AmazonReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Is This Fake Amazon Review Generator Actually Used For?",
      a: "This tool is used to create Amazon review-style mockups for demos, product pages, presentations, prototypes, and design previews. It is most useful when you need realistic-looking buyer feedback to show how a screen or layout may look before real customer reviews exist.",
    },
    {
      q: "What Parts of the Review Can I Customize?",
      a: "You can customize important details such as the review text, star rating, reviewer information, date, verified purchase badge, helpful vote counts, review images, and other supporting elements. This gives you enough flexibility to shape the mockup for product page previews, ecommerce concepts, landing pages, and client presentations.",
    },
    {
      q: "How Do I Make the Mockup Look More Realistic?",
      a: "The most believable mockups use natural wording, a rating that matches the tone of the review, and dates or helpful vote counts that feel reasonable for the situation. It also helps to use extra visual elements only when they improve the layout instead of making it feel crowded.",
    },
    {
      q: "Can I Create Lower-Rated or Mixed Amazon Review Mockups?",
      a: "Yes, and that can be useful when you want to show more realistic customer sentiment in a product page concept, case study, or presentation. The best results come from specific, believable criticism that sounds like normal buyer feedback rather than exaggerated negative wording.",
    },
    {
      q: "What Makes This Better Than a Fake Amazon Review Template?",
      a: "A fake Amazon review template is usually static, while this tool gives you more control over the details that shape realism, such as the review content, rating, date, badges, votes, and images. That makes it more practical when you need different versions for presentations, case studies, landing pages, or interface testing.",
    },
    {
      q: "Is This for Posting Real Reviews on Amazon?",
      a: "No, the page is positioned for simulated, educational, internal, and presentation-focused use rather than deceptive publishing. Any generated content should be treated as mockup material, not as authentic customer feedback to be presented as real.",
    },
  ];

  const useCases = [
    {
      title: "Product Detail Page Mockups",
      desc: "Show how ratings, buyer comments, verified badges, helpful votes, and images may appear inside an Amazon-style detail page before real reviews are available.",
      badge: "PDP Design",
      color: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
      title: "Ecommerce Website Design",
      desc: "Add realistic Amazon-style review content to product layouts, landing pages, and comparison sections so the interface feels fully completed.",
      badge: "Storefront",
      color: "border-orange-200 bg-orange-50 text-orange-800",
    },
    {
      title: "Client Presentations",
      desc: "Show clients a polished, fully formatted layout of reviews instead of asking them to imagine how it will look. Speeds up review cycles.",
      badge: "Agencies",
      color: "border-blue-200 bg-blue-50 text-blue-800",
    },
    {
      title: "Investor Pitch Decks",
      desc: "Support product concepts, storefront ideas, or marketplace demos using highly realistic trust signals. Explains the vision visually in seconds.",
      badge: "Pitch Deck",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      title: "UI and UX Testing",
      desc: "Evaluate font spacing, element padding, and review layout responsiveness using standard sizes and elements.",
      badge: "Testing",
      color: "border-indigo-200 bg-indigo-50 text-indigo-800",
    },
    {
      title: "Portfolio Case Studies",
      desc: "Present your design portfolio with completed screens using believable placeholder reviews that look fully resolved.",
      badge: "Portfolio",
      color: "border-slate-200 bg-slate-50 text-slate-800",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Amazon Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 p-8 sm:p-12 shadow-2xl border border-amber-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,153,0,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF9900]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-6 uppercase tracking-wider">
            <ShoppingBag size={13} className="text-[#FF9900]" /> High-Fidelity Amazon Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Fake Amazon Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Create realistic Amazon review-style mockups in seconds. Customize star ratings, buyer feedback, reviewer names, verified purchase badges, helpful votes, review dates, and product images to generate polished Amazon-style screenshots for product pages, landing pages, demos, client presentations, UI testing, marketing creatives, and educational projects.
          </p>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Perfect for designers, marketers, ecommerce brands, agencies, and developers who need clean, presentation-ready review mockups without using real customer data.
          </p>
        </div>
      </div>

      {/* Grid: 2 columns for Features & Customizations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Card: Features */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-50 rounded-xl text-[#FF9900]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tailored controls for ecommerce listings, marketplaces, and detail page layouts where verified purchase badges and helpful votes are essential visual cues.
            </p>
            
            <div className="space-y-3 pt-2">
              {[
                "Generate realistic Amazon review-style mockups",
                "Customize ratings, review text, and reviewer profiles",
                "Add verified purchase badges and helpful vote counts",
                "Include product images and customer-uploaded photos",
                "Create mobile and desktop-style review screenshots",
                "Ideal for ecommerce design, marketing, and prototyping",
                "Fast, easy-to-use, and presentation-ready",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Customization Controls & Flexible Controls */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-50 rounded-xl text-[#FF9900]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What You Can Customize</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              You can edit the review text, star rating, reviewer information, posting date, verified purchase badge, helpful vote counts, review images, and visual layout to match the exact scenario you want to present. This makes the tool useful for flexible Amazon-style review screenshots in prototypes, mockups, product pages, and visual presentations.
            </p>
            
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">Flexible Editing Controls</span>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Realistic mockups often need more than one-click output, especially when you want the screenshot to match a specific product, layout, tone, or presentation goal. This page gives you room to shape the review text, rating, reviewer details, date, badges, helpful vote counts, and supporting visual elements so the final result feels more intentional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stands Out Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <h4 className="text-lg font-bold text-slate-900">Why This Amazon Review Generator Stands Out</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This page is built around the details that make an Amazon review mockup feel more complete, including ratings, buyer feedback, reviewer names, verified purchase badges, helpful vote counts, certified reviewer labels, top reviewer options, and review images. Unlike a basic fixed template, it gives you enough control to shape the screenshot for product detail page mockups, ecommerce website design, investor pitch decks, and UI demos.
          </p>
        </div>
        <div className="bg-amber-50 text-[#FF9900] px-4 py-3 rounded-2xl border border-amber-100 text-center shrink-0 w-full md:w-auto font-bold text-xs uppercase tracking-wider">
          Presentation Focused
        </div>
      </div>

      {/* Guidelines & Tips */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What Makes a Good Amazon Review Mockup
          </h3>
          <p className="text-slate-500 text-sm">
            A good Amazon review mockup should feel believable, readable, and visually balanced. Use these tips to improve your content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Keep the Tone Buyer-Focused",
              desc: "Write the review the way a real Amazon buyer might speak, using specific and natural wording instead of exaggerated praise or stiff promotional copy.",
              color: "border-amber-100 bg-amber-50/50 text-[#FF9900]",
            },
            {
              title: "Match the Rating to the Message",
              desc: "The star rating and the written feedback should support each other so the mockup feels consistent at a glance.",
              color: "border-orange-100 bg-orange-50/50 text-orange-600",
            },
            {
              title: "Use Believable Details",
              desc: "Dates, helpful vote counts, and badge combinations should feel reasonable for the product type and scenario you are presenting.",
              color: "border-emerald-100 bg-emerald-50/50 text-emerald-600",
            },
            {
              title: "Keep the Product Context Clear",
              desc: "The review should feel connected to the type of product being shown, whether that is electronics, beauty, home goods, clothing, or another category.",
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

      {/* Bad Reviews Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="flex items-center gap-2 text-amber-400">
            <AlertTriangle size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Critical Mockups</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Bad Amazon Review Mockups That Still Feel Realistic</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A bad reviews generator for Amazon-style mockups can still be useful when the goal is to show mixed customer sentiment, product issues, or more realistic review distribution in a presentation or concept. The best approach is to keep the criticism specific and believable, using a tone that sounds like normal buyer feedback instead of exaggerated complaints that make the screenshot feel artificial.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            This works well for UI concepts, case studies, customer experience presentations, and product page mockups where showing only perfect reviews would feel unrealistic. The key is to keep the language clear, platform-appropriate, and visually consistent so the mockup still looks like something a real Amazon buyer might post.
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Best Use Cases for Amazon Review Mockups
          </h3>
          <p className="text-slate-500 text-sm">
            Understand where simulated Amazon review elements fit best across product interfaces and marketing.
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
        <div className="p-3 bg-amber-50 text-[#FF9900] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Responsible Use and Limitations</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is designed for mockups, prototypes, internal demos, educational work, design previews, and presentation materials. Generated review content should be treated as simulated material and clearly identified as mockup content rather than real customer feedback. It should not be used to mislead customers, impersonate real buyers, or publish deceptive review content as if it were genuine.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions Accordions */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything you need to know about our high-fidelity Amazon review mockup generator.
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
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white rounded-3xl p-6 sm:p-10 border border-amber-500/20 shadow-xl text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,0,0.1),transparent_70%)]" />
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF9900] block relative z-10">Final Thought</span>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10">
          A strong Amazon review mockup should make a design feel clearer, more complete, and easier to understand before real customer feedback is available. With editable details such as ratings, reviewer information, dates, verified badges, helpful votes, and review images, this tool helps create polished review-style screenshots for demos, prototypes, product pages, presentations, and internal reviews.
        </p>
        <p className="text-[#34A853] text-xs sm:text-sm font-semibold relative z-10">
          Use responsibly to mock up your visual creations and local search features without using real client data.
        </p>
      </div>

    </div>
  );
}
