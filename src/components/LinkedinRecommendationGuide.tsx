"use client";

import { useState } from "react";
import {
  Linkedin,
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

export function LinkedinRecommendationGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Open the LinkedIn Recommendation Tool",
      desc: "Visit the LinkedIn section of the generator to access the live recommendation preview area.",
    },
    {
      step: "02",
      title: "Generate a Recommendation Mockup",
      desc: "Click the generate or refresh button to instantly create a new fake LinkedIn testimonial with random professional profile information.",
    },
    {
      step: "03",
      title: "Capture Your Mockup",
      desc: "When you find a recommendation design you like, take a screenshot of the card and add it to Figma, Canva, or slide presentations.",
    },
  ];

  const features = [
    "Instant fake LinkedIn testimonial generation",
    "Professional LinkedIn review mockup layouts",
    "Natural-looking business and career feedback",
    "Realistic recommendation formatting",
    "Mobile-friendly LinkedIn testimonial previews",
    "Unlimited refresh options for varied recommendations",
    "Perfect for Figma, Adobe XD, Sketch, Canva, and presentations",
  ];

  const useCases = [
    {
      title: "UI and UX Design Projects",
      desc: "Fill profile pages and recommendation sections with realistic professional testimonials to create complete LinkedIn-inspired interfaces.",
      badge: "UI Design",
      color: "border-blue-200 bg-blue-50 text-blue-900",
    },
    {
      title: "Client and Business Presentations",
      desc: "Show how endorsements, testimonials, and recommendation sections may appear in a finished professional platform.",
      badge: "Pitches",
      color: "border-indigo-200 bg-indigo-50 text-indigo-800",
    },
    {
      title: "Front-End Development Testing",
      desc: "Test responsive layouts, typography, and content spacing using realistic LinkedIn recommendation mockups.",
      badge: "Testing",
      color: "border-slate-200 bg-slate-50 text-slate-805",
    },
    {
      title: "Educational and Training Projects",
      desc: "Use fake LinkedIn testimonials in workshops, tutorials, classroom projects, and professional networking demos.",
      badge: "Education",
      color: "border-sky-200 bg-sky-50 text-sky-800",
    },
  ];

  const faqs = [
    {
      q: "Is this tool connected to LinkedIn?",
      a: "No. This is an independent mockup and educational tool and is not affiliated with or endorsed by LinkedIn.",
    },
    {
      q: "Are these LinkedIn recommendations real?",
      a: "No. All generated recommendations and testimonials are fictional and created only for mockups, demos, and learning purposes.",
    },
    {
      q: "Can I use these recommendation mockups in my portfolio?",
      a: "Yes. You can use them in case studies, presentations, and design showcases as sample or fictional content.",
    },
    {
      q: "Can I use this tool for real professional endorsements?",
      a: "No. This tool should not be used to create misleading recommendations or fake professional credibility on real platforms.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with LinkedIn Brand Blue Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#004182] via-[#0A66C2] to-sky-950 p-8 sm:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0A66C2]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <Linkedin size={13} className="text-white animate-pulse" /> Professional Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            LinkedIn Recommendation Generator
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            LinkedIn is one of the most trusted professional networking platforms for showcasing skills, experience, endorsements, and recommendations. This generator helps you instantly create believable LinkedIn-style recommendation and testimonial mockups for demos, prototypes, educational projects, and design showcases.
          </p>
        </div>
      </div>

      {/* Grid: What This LinkedIn Recommendation Tool Does & Why Use LinkedIn Review Mockups */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What This LinkedIn Recommendation Tool Does */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#0A66C2]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What This Tool Does</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              This tool creates realistic LinkedIn-style recommendation cards and testimonial mockups that look similar to professional feedback shared on career and networking platforms.
            </p>
            <p className="text-slate-500 text-xs font-semibold block uppercase tracking-wider text-slate-400">Included Mockup Details:</p>
            <div className="grid grid-cols-2 gap-3 text-slate-700 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#0A66C2]" /> Profile name and avatar
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#0A66C2]" /> Job title and company
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#0A66C2]" /> Recommendation formatting
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#0A66C2]" /> Professional testimonial text
              </div>
              <div className="flex items-center gap-2 text-wrap">
                <CheckCircle size={14} className="text-[#0A66C2]" /> Connection & time labels
              </div>
            </div>
          </div>
        </div>

        {/* Why Use LinkedIn Review Mockups? */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why Use LinkedIn Review Mockups?</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fake LinkedIn testimonials are useful because they help professional and business-focused projects look polished and realistic instead of unfinished:
            </p>
            <div className="space-y-3 pt-1">
              {[
                "Test professional profile layouts with believable text",
                "Preview spacing and alignment in recommendation sections",
                "Create polished portfolio and client presentations",
                "Replace placeholder content with realistic LinkedIn-style feedback",
                "Showcase complete networking and career platform concepts",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-[#0A66C2] mt-0.5 shrink-0" />
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
            How to Use the Fake LinkedIn Recommendation Generator
          </h3>
          <p className="text-slate-500 text-sm">
            Follow this simple guide to generate and use realistic career recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#0A66C2] uppercase tracking-widest block mb-4">Step {s.step}</span>
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
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#0A66C2]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Features Of This Generator</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-[#0A66C2] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Who This Generator Is For</h3>
            </div>
            
            <div className="space-y-4 pt-1">
              {[
                { title: "UI and UX Designers", desc: "Create professional networking platform mockups with believable recommendations." },
                { title: "Front-End Developers", desc: "Populate profile cards and components with realistic professional feedback." },
                { title: "Students and Learners", desc: "Build portfolio projects and final presentations faster with instant mockups." },
                { title: "Content Creators & Educators", desc: "Add professional-looking LinkedIn testimonials to blog posts and videos." },
              ].map((user, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-50 text-[#0A66C2] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
            Practical Ways to Use Fake LinkedIn Testimonials
          </h3>
          <p className="text-slate-500 text-sm">
            LinkedIn recommendation visuals fit perfectly across corporate, educational, and design development paths.
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-[#0A66C2]">
            <TrendingUp size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Tips for Better LinkedIn Review Mockups</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#0A66C2] shrink-0 mt-0.5" />
              <span>Use different recommendation lengths to test profile layouts.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#0A66C2] shrink-0 mt-0.5" />
              <span>Generate several testimonials for realistic networking screens.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#0A66C2] shrink-0 mt-0.5" />
              <span>Keep typography and spacing professional and clean.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#0A66C2] shrink-0 mt-0.5" />
              <span>Mix short endorsements with detailed recommendations for realism.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#0A66C2] shrink-0 mt-0.5" />
              <span>Clearly label exported designs as “Mockup” or “Demo” when sharing publicly.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical warning */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-blue-50 text-[#0A66C2] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Honest and Responsible Use</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This fake LinkedIn recommendation generator is intended for educational, design, and development purposes only. You can use it for UI mockups, case studies, and tutorials. It should never be used for posting fake recommendations on real profiles or misleading employers, recruiters, or clients.
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
            Everything you need to know about our fake LinkedIn recommendation generator tool.
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
