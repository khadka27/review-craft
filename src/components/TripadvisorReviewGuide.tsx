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

export function TripadvisorReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Select the TripAdvisor layout",
      desc: "Choose the iconic green owl branding and layout that users recognize instantly, ensuring your TripAdvisor review mockup looks authentic to platform standards.",
    },
    {
      step: "02",
      title: "Auto-fill traveler details",
      desc: "The tool populates realistic traveler types (e.g., 'Family,' 'Couple') and dates so the fake TripAdvisor reviews maker output feels complete and organic.",
    },
    {
      step: "03",
      title: "Add the core experience",
      desc: "Enter stay details, room tips, or ratings. Whether you need a glowing endorsement or a critical note, tailor the review content to your design scenario.",
    },
    {
      step: "04",
      title: "Generate and download",
      desc: "Preview the final screenshot, adjust any text for clarity, and export the high-resolution image for use in pitch decks, landing pages, or prototypes.",
    },
  ];

  const features = [
    {
      title: "Platform-accurate styling",
      desc: "Mimics the exact font, spacing, bubble ratings, and badge styles of real TripAdvisor listings.",
    },
    {
      title: "Instant mockup creation",
      desc: "Skip manual design work; generate convincing travel reviews in under a minute.",
    },
    {
      title: "Customizable traveler profiles",
      desc: "Adjust user avatars, contribution counts, and traveler types to match your target audience.",
    },
    {
      title: "Built for hospitality pitches",
      desc: "Perfect for showing hotels, tours, and restaurants how their social proof will look on digital channels.",
    },
  ];

  const useCases = [
    {
      title: "Hotel Landing Page Prototypes",
      desc: "Visualize how guest testimonials enhance conversion rates before development begins.",
      badge: "Landing Pages",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      title: "Travel App Onboarding Screens",
      desc: "Show potential users what real feedback looks like within your travel app interface.",
      badge: "App Design",
      color: "border-sky-200 bg-sky-50 text-sky-800",
    },
    {
      title: "Agency Pitch Decks",
      desc: "Demonstrate to hotel clients how their reputation management strategy will appear visually.",
      badge: "Pitches",
      color: "border-amber-250 bg-amber-50 text-amber-800",
    },
    {
      title: "UX Testing for Review Systems",
      desc: "Test how different rating layouts impact user attention in travel booking flows.",
      badge: "UX Testing",
      color: "border-rose-200 bg-rose-50 text-rose-800",
    },
  ];

  const faqs = [
    {
      q: "Is this fake TripAdvisor review generator free?",
      a: "Yes, our fake TripAdvisor reviews maker offers free basic usage, allowing you to create unlimited mockups for design and presentation purposes without cost.",
    },
    {
      q: "Can I customize the traveler type and date?",
      a: "Absolutely. You can select specific traveler types (like 'Business' or 'Solo') and adjust dates to ensure your TripAdvisor review mockup fits the specific context of your project.",
    },
    {
      q: "Is it ethical to create fake TripAdvisor reviews?",
      a: "This tool is intended strictly for design mockups, internal training, and marketing presentations. It should never be used to post fraudulent reviews on live platforms to deceive consumers or manipulate rankings.",
    },
    {
      q: "Does the tool support multiple languages?",
      a: "While the interface is primarily in English, you can manually input text in other languages to create fake TripAdvisor review screenshots that match international markets for global brand presentations.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with TripAdvisor Green Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-8 sm:p-12 shadow-2xl border border-emerald-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,175,135,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00AF87]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-6 uppercase tracking-wider">
            <Compass size={13} className="text-[#00AF87] animate-spin-slow" /> Hospitality Mockups
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Fake TripAdvisor Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            When designing hotel sites or travel apps, empty testimonial sections make layouts feel unfinished. This fake TripAdvisor review generator helps you create realistic, platform-specific screenshots that make mockups and presentations look polished instantly.
          </p>
        </div>
      </div>

      {/* Grid: Why TripAdvisor Generator is Useful & Bullet Points */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Why it is useful */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00AF87]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why This Generator Is Useful</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Instead of manually rebuilding complex UI elements in design tools, this tool offers a faster way to build authentic visuals for your hospitality workflow. Select the iconic layout, add guest details, let the generator auto-fill traveler badges, and create a finished screenshot in seconds.
            </p>
          </div>
        </div>

        {/* Dynamic highlights */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00AF87]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Highlights</h3>
            </div>
            
            <div className="space-y-3 pt-1">
              {[
                "Create realistic TripAdvisor review mockups quickly for travel app demos and prototypes.",
                "Maintain visual consistency with official TripAdvisor branding across marketing assets.",
                "Auto-fill secondary details like traveler types (e.g., 'Family') so designs feel authentic.",
                "Export polished visuals ready to present to hotel clients or test with users immediately.",
              ].map((highlight, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle size={15} className="text-[#00AF87] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{highlight}</span>
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
            How to Use for Travel Mockups
          </h3>
          <p className="text-slate-500 text-sm">
            Visualizing social proof for travel brands requires authenticity. Follow this step-by-step layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#00AF87] uppercase tracking-widest block mb-4">Step {s.step}</span>
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
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00AF87]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Essential Features</h3>
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
              <h3 className="text-xl font-bold text-slate-900">Who This Fake TripAdvisor Reviews Maker Is For</h3>
            </div>
            
            <div className="space-y-4 pt-1">
              {[
                { title: "Hotel & Resort Marketing Teams", desc: "Design social proof highlights for guest landing pages." },
                { title: "Travel App UI/UX Designers", desc: "Make fully completed onboarding slides and search listing profiles." },
                { title: "Tourism Boards & Agencies", desc: "Create travel collateral mockups for investor presentations." },
                { title: "Restaurant Owners & Consultants", desc: "Visualize review platforms before connecting local directories." },
              ].map((user, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-5 w-5 rounded-full bg-emerald-50 text-[#00AF87] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
            Use Cases Across Hospitality & Design
          </h3>
          <p className="text-slate-500 text-sm">
            TripAdvisor visuals are critical for building trust in the travel sector.
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
        <div className="p-3 bg-emerald-50 text-[#00AF87] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Responsible Use and Limitations</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is intended strictly for design mockups, internal training, and marketing presentations. It should never be used to post fraudulent reviews on live platforms to deceive consumers or manipulate rankings.
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
            Everything you need to know about the travel-focused TripAdvisor mockup builder.
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
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/20 shadow-xl text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,175,135,0.1),transparent_70%)]" />
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#00AF87] block relative z-10">Final Thought</span>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10">
          This fake TripAdvisor review generator streamlines the creation of travel-specific social proof visuals. Instead of manually recreating complex TripAdvisor UI elements, you can generate polished, realistic screenshots that highlight the power of guest feedback.
        </p>
        <p className="text-[#34A853] text-xs sm:text-sm font-semibold relative z-10">
          Use responsibly to mock up your visual creations and travel directory designs without using real customer data.
        </p>
      </div>

    </div>
  );
}
