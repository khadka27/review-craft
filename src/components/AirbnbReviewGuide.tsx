"use client";

import { useState } from "react";
import {
  Compass,
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
} from "lucide-react";

export function AirbnbReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Open the Airbnb Platform Page",
      desc: "Visit the Airbnb section of the tool to access the live preview area which uses an Airbnb-style layout.",
    },
    {
      step: "02",
      title: "Generate or Refresh a Review",
      desc: "Click the generate or refresh button to instantly create a new fake rental review with random guest identity, rating, and feedback text.",
    },
    {
      step: "03",
      title: "Capture Your Review Mockup",
      desc: "When you find a result you like, take a screenshot of the review card and paste it directly into Figma, Sketch, Adobe XD, or presentations.",
    },
  ];

  const features = [
    {
      title: "Instant Review Generation",
      desc: "Create Airbnb-style review cards in one click with guest names, avatars, ratings, and detailed feedback text.",
    },
    {
      title: "Multiple Layout Options",
      desc: "Preview reviews as single cards, stacked lists, grid layouts, or carousel-style displays for different mockup needs.",
    },
    {
      title: "Customizable Review Length",
      desc: "Generate short, medium, or long fake rental reviews to test how text wraps and spacing works across devices.",
    },
    {
      title: "Realistic Guest Details",
      desc: "Each Airbnb host review mockup includes a random guest name, profile picture, star rating, and time label.",
    },
    {
      title: "Rating Variety",
      desc: "Mix 5-star, 4-star, and neutral ratings to make your fake Airbnb review generator output look natural.",
    },
    {
      title: "Mobile and Desktop Preview",
      desc: "Test how review cards look on phone screens and desktop layouts before exporting your mockups.",
    },
    {
      title: "Quick Export Options",
      desc: "Download review screenshots or copy sample data for use in Figma, Storybook, and presentation projects.",
    },
    {
      title: "Educational Use Labels",
      desc: "Add automatic 'Mockup,' 'Demo,' or 'Fictional Review' badges to keep usage transparent.",
    },
  ];

  const useCases = [
    {
      title: "Portfolio 'Airbnb Clone' Designs",
      desc: "Fill guest review sections so your UI feels like a real product instead of a bare layout.",
      badge: "Airbnb Clones",
      color: "border-rose-200 bg-rose-50 text-rose-800",
    },
    {
      title: "Client Presentations",
      desc: "Help clients imagine how guests might rate and describe their listings visually.",
      badge: "Presentations",
      color: "border-amber-250 bg-amber-50 text-amber-800",
    },
    {
      title: "Classroom Demos",
      desc: "Focus feedback on layout and hierarchy while the generator handles sample content.",
      badge: "Education",
      color: "border-sky-200 bg-sky-50 text-sky-800",
    },
    {
      title: "Component Showcases",
      desc: "Display card, list, and rating components with realistic data instead of lorem ipsum.",
      badge: "UI Libraries",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
  ];

  const faqs = [
    {
      q: "Is this generator connected to Airbnb?",
      a: "No. It is an independent design and educational tool and is not affiliated with, endorsed by, or connected to Airbnb.",
    },
    {
      q: "Are these reviews based on real guests?",
      a: "No. All reviews are automatically generated and fully fictional. They exist only for use in mockups, demos, and learning.",
    },
    {
      q: "Can I use these reviews in my portfolio?",
      a: "Yes. You can use them in case studies, mockups, and presentations as long as you present them clearly as concepts or sample designs.",
    },
    {
      q: "Can I use this for real commercial reviews?",
      a: "No. This tool is not meant for publishing fake rental reviews or misleading people on real platforms. Use it only for visuals, design work, and education.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Airbnb Rose/Coral Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-950 via-slate-900 to-red-950 p-8 sm:p-12 shadow-2xl border border-rose-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,56,92,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF385C]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20 mb-6 uppercase tracking-wider">
            <Compass size={13} className="text-[#FF385C] animate-spin-slow" /> Rental & Lodging Mockups
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Airbnb Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Airbnb is one of the largest lodging platforms that lets customers book unique homes and experiences around the world. This fake Airbnb review generator helps you instantly create believable review cards you can use in mockups, demos, and study projects.
          </p>
        </div>
      </div>

      {/* Grid: What This Tool Does & Why Use Airbnb Host Review Mockups */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What This Airbnb Review Tool Does */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-50 rounded-xl text-[#FF385C]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What This Airbnb Review Tool Does</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              This tool creates Airbnb-style review cards that look like real guest feedback inside a rental interface. Each generated card can include:
            </p>
            <div className="grid grid-cols-2 gap-3 text-slate-700 text-xs font-semibold pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF385C]" /> Guest name & avatar
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF385C]" /> Star rating & score
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF385C]" /> Short review title
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF385C]" /> Detailed review paragraph
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF385C]" /> Time label (e.g. “2 weeks ago”)
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#FF385C]" /> Host or property name
              </div>
            </div>
          </div>
        </div>

        {/* Why Use Airbnb Host Review Mockups? */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-50 rounded-xl text-[#FF385C]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why Use Host Review Mockups?</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fake rental reviews are useful in design because they behave more like real content than placeholder text. With realistic guest language and varied lengths, you can:
            </p>
            <div className="space-y-3 pt-1">
              {[
                "See how review text wraps on mobile and desktop layouts",
                "Check spacing when several reviews appear in a list",
                "Test how short and long reviews affect your layout",
                "Show finished-feeling screens instead of empty shells",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-[#FF385C] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Steps: How to Use */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Use Airbnb Testimonial Generator
          </h3>
          <p className="text-slate-500 text-sm">
            Everything happens in the browser: choose the Airbnb layout, generate, and capture the mockup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#FF385C] uppercase tracking-widest block mb-4">Step {s.step}</span>
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
        
        {/* Features */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-50 rounded-xl text-[#FF385C]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Features Of This Generator</h3>
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

        {/* Target Audience */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-50 rounded-xl text-[#FF385C]">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Who This Fake Airbnb Review Generator Is For</h3>
            </div>
            
            <div className="space-y-4 pt-1">
              {[
                { title: "UI and UX Designers", desc: "Make rental and travel app screens feel complete with believable guest reviews." },
                { title: "Front-End Developers", desc: "Test responsive layouts and demo list views using natural, human-sounding reviews." },
                { title: "Students and Learners", desc: "Build final-year and portfolio projects faster with instant fake Airbnb review examples." },
                { title: "Content Creators and Educators", desc: "Add clean, relevant visuals and Airbnb-style review layouts to tutorials." },
              ].map((user, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-5 w-5 rounded-full bg-rose-50 text-[#FF385C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
            Practical Ways to Use Fake Rental Reviews
          </h3>
          <p className="text-slate-500 text-sm">
            Rental reviews fit perfectly across hospitality design concepts and UI components.
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

      {/* Tips for better mockups */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-[#FF385C]">
            <TrendingUp size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Tips for Getting the Best Results</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#FF385C] shrink-0 mt-0.5" />
              <span>Generate several different reviews and spread them across multiple screens.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#FF385C] shrink-0 mt-0.5" />
              <span>Use a mix of high and mid-range ratings so the UI feels natural, not perfect.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#FF385C] shrink-0 mt-0.5" />
              <span>Test both very short and very long reviews to catch layout problems early.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#FF385C] shrink-0 mt-0.5" />
              <span>Keep headings, labels, and button text consistent with Airbnb-style language.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical warning */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-rose-50 text-[#FF385C] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Honest and Responsible Use</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is made for design, development, and education—not for manipulating real platforms. You should not use it for posting rental fake reviews on Airbnb or any booking site, misleading guests, or pretending real people wrote the generated reviews.
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
            Everything you need to know about our fake Airbnb review generator tool.
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
