"use client";

import { useState } from "react";
import {
  TrendingUp,
  Sliders,
  Sparkles,
  Smartphone,
  Eye,
  Info,
  ShieldCheck,
  CheckCircle,
  XCircle,
  HelpCircle,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight,
  PlusCircle,
  MinusCircle,
  MessageSquare,
  Users,
  Grid,
  FileText,
  UserCheck,
  Zap,
} from "lucide-react";

export function TrustpilotReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pros = [
    "Generate reviews instantly without waiting for organic customers.",
    "Avoid the expensive cost of paid advertising or marketing campaigns.",
    "Fully customize the message to perfectly fit your brand voice and tone.",
    "Create visually attractive mockups for use in marketing materials.",
    "Quickly establish a positive reputation to outshine competitors.",
  ];

  const cons = [
    "Algorithms may flag and remove fake reviews if they look too similar.",
    "Over-reliance can make the business appear insincere to savvy users.",
    "Doesn't provide actual insights into real customer satisfaction.",
    "Benefits are temporary and disappear if reviews are removed.",
    "If discovered, it can permanently damage the brand's reputation.",
  ];

  const steps = [
    { title: "Invite Promptly", desc: "Invite customers shortly after purchase or support resolution." },
    { title: "Friendly Reach-out", desc: "Send a direct review link with a short, friendly request." },
    { title: "Smart Prompts", desc: "Provide optional prompts (e.g., “What did you like most?”)." },
    { title: "Active Response", desc: "Monitor incoming reviews and respond—thank positives, address negatives." },
    { title: "Feedback Loop", desc: "Use feedback to improve your offering and keep the cycle going." },
  ];

  const toolSteps = [
    { step: "01", title: "Open the tool", desc: "You’ll see a Trustpilot-style review card ready to load sample content." },
    { step: "02", title: "Generate a review", desc: "Click the generate/refresh button to instantly create a new random review." },
    { step: "03", title: "Capture your mockup", desc: "Take a screenshot and paste it into Figma, Sketch, XD, slides, or documentation." },
  ];

  const faqs = [
    {
      q: "Is this generator connected to Trustpilot?",
      a: "No. This is an independent design and educational tool. It is not affiliated with Trustpilot.",
    },
    {
      q: "Are the reviews real?",
      a: "No. All reviews are fictional and created automatically for mockups and demos only.",
    },
    {
      q: "Can I use these reviews in my portfolio?",
      a: "Yes, as long as you present them as mockups or concepts.",
    },
    {
      q: "Can I use this for real customer reviews?",
      a: "No. This is for visuals only, not for publishing on real review platforms.",
    },
    {
      q: "What Is a Fake Trustpilot Review Generator Actually Used For?",
      a: "This tool is used to create Trustpilot review-style mockups for demos, landing pages, presentations, prototypes, and design previews. It is most useful when you need realistic-looking review content to show how a screen or layout may look before real customer feedback exists.",
    },
    {
      q: "What Parts of the Review Can I Customize?",
      a: "You can customize important details such as the review text, star rating, reviewer information, date, verified purchase badge, and owner response options to match your exact mockup scenario.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Trustpilot Green Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-8 sm:p-12 shadow-2xl border border-emerald-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,182,122,0.15),transparent_45%)]" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00B67A]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-6 uppercase tracking-wider">
            <Award size={13} className="text-[#00B67A] animate-pulse" /> Verified Trustpilot Visuals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Fake Trustpilot Review Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            If you are designing a business app, testimonial section, or marketing mockup, empty layouts never tell the full story. What makes a screen feel “real” is the content inside it—names, ratings, and opinions. This generator is built exactly to give you fast, realistic reviews for mockups, demos, and educational projects.
          </p>
        </div>
      </div>

      {/* Grid: What is a Fake Trustpilot Review Generator? & Why Use a Trustpilot Review Mockup? */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What is a Fake Trustpilot Review Generator? */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00B67A]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What Is a Fake Trustpilot Review Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              This tool creates fictional reviews styled like real Trustpilot feedback. Instead of designing review cards by hand, you can generate a complete Trustpilot-style mockup and drop it directly into your design file or prototype.
            </p>
            <p className="text-slate-500 text-xs font-semibold block uppercase tracking-wider text-slate-400">Included Mockup Details:</p>
            <div className="grid grid-cols-2 gap-3 text-slate-700 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#00B67A]" /> A username and avatar
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#00B67A]" /> A star rating (1-5 stars)
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#00B67A]" /> A review title
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#00B67A]" /> Detailed review paragraph
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#00B67A]" /> Timestamp (e.g. “2 days ago”)
              </div>
            </div>
          </div>
        </div>

        {/* Why Use a Trustpilot Review Mockup? */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00B67A]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why Use a Trustpilot Review Mockup?</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Generated reviews help you quickly check spacing, wrapper responsiveness, font hierarchy, and layout density before real reviews are available:
            </p>
            <div className="space-y-3 pt-2">
              {[
                "How text wraps on different screen sizes",
                "Whether names and ratings fit nicely in your layout",
                "How long review paragraphs affect spacing and readability",
                "How your design feels with real-looking content instead of blank space",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-[#00B67A] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who This Tool Is For & How the Trustpilot Review Generator Works */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Who This Tool Is For */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00B67A]">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Who This Tool Is For</h3>
            </div>
            <div className="space-y-4">
              {[
                { title: "UI/UX Designers", desc: "Make portfolio projects and client presentations look finished and professional." },
                { title: "Front-End Developers", desc: "Test responsive layouts and fill component libraries with realistic data." },
                { title: "Students", desc: "Build polished prototypes and assignments without copying real reviews." },
                { title: "Content Creators & Educators", desc: "Add better visuals to tutorials, articles, and slides." },
              ].map((user, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">{user.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{user.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How the Trustpilot Review Generator Works */}
        <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-[#00B67A]">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">How the Trustpilot Review Generator Works</h3>
            </div>
            
            <div className="space-y-4">
              {toolSteps.map((ts, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-200/40">
                  <span className="text-xl font-extrabold text-[#00B67A] shrink-0 mt-0.5">{ts.step}</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">{ts.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{ts.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-slate-500 text-xs italic mt-2">
              If you don’t like the current review, simply refresh again until it fits your project’s mood.
            </p>
          </div>
        </div>
      </div>

      {/* Honest and Responsible Use */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-[#00B67A]">
            <ShieldCheck size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Honest & Responsible Use</span>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            This tool is designed for mockups, prototypes, internal demos, educational work, design previews, and presentation materials. Generated review content should be treated as simulated material and clearly identified as mockup content rather than real customer feedback. It should not be used to mislead customers, impersonate real people, or publish deceptive review content as if it were genuine.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <span className="text-emerald-400 font-extrabold text-xs block mb-2 uppercase">Is Meant For:</span>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                <li>Design mockups and UI demos</li>
                <li>Presentations and portfolios</li>
                <li>Educational projects</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <span className="text-rose-400 font-extrabold text-xs block mb-2 uppercase">Is NOT Meant For:</span>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                <li>Posting fake reviews on Trustpilot or real sites</li>
                <li>Misleading customers or clients</li>
              </ul>
            </div>
          </div>
          
          <p className="text-[#00B67A] text-xs font-semibold">
            Whenever you share a mockup publicly, label it clearly as “Mockup,” “Demo,” or “Fictional review.”
          </p>
        </div>
      </div>

      {/* --- Second Phase Content: Deep Dive & Builder Mechanisms --- */}
      
      {/* 2. Pros vs Cons of Fake Trustpilot Reviews Maker */}
      <div className="space-y-8 border-t border-slate-150 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#00B67A] uppercase tracking-widest block">Deep Dive</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Use a Fake Trustpilot Reviews Maker?
          </h3>
          <p className="text-slate-500 text-sm">
            Using a fake Trustpilot review maker allows businesses to rapidly build perceived trust and authority by instantly inflating online reputation metrics. Compare the factors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Pros */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-150 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 mb-2">
                <PlusCircle size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Pros & Benefits</span>
              </div>
              
              <div className="space-y-3">
                {pros.map((pro, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle size={15} className="text-[#00B67A] shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-normal">{pro}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cons */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-600 mb-2">
                <MinusCircle size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Cons & Risks</span>
              </div>

              <div className="space-y-3">
                {cons.map((con, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <XCircle size={15} className="text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-normal">{con}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Steps: How to Generate Fake Reviews for Trustpilot */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Generate Reviews for Trustpilot
          </h3>
          <p className="text-slate-500 text-sm">
            Building a trustworthy review profile doesn’t require shortcuts—it requires a simple, repeatable system. 
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
            By collecting feedback at the right moment, making it easy for customers to respond, and guiding them with clear prompts, you can steadily grow genuine reviews that reflect real experiences. The goal is consistency and transparency, so your ratings improve naturally while giving you insights to strengthen your product. Here is the step-by-step framework:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] font-bold text-[#00B67A] uppercase tracking-widest block mb-2">Step 0{idx + 1}</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">{step.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Visual Mockups Influence */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-[#00B67A]">
            <TrendingUp size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">The Halo Effect</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">The Power of Trustpilot Fake Reviews Mockups</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Trustpilot isn't just text; it's visual. When people see a profile with a bright, glowing 5-star badge and hundreds of reviews, it triggers a psychological response. That’s the power of mockups—they sell the idea of trust before the customer even reads a single word.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            A fake reviews mockup is essentially a screenshot of a perfect profile. It’s evidence that your business is legitimate. Even if someone doubts the specific reviews, seeing a screenshot of a high-ranking, verified business makes them subconsciously trust your brand more. It’s all about the "halo effect."
          </p>
        </div>
      </div>

      {/* 5. Tips for Using Fake Reviews Effectively */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tips for Using Reviews Effectively
          </h3>
          <p className="text-slate-500 text-sm">
            Avoid spamming reviews all at once. Space them out, vary length, and keep visual alignment organic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Use Realistic Language",
              desc: "Ensure reviews feel genuine by using realistic language and avoiding repetitive phrasing.",
            },
            {
              title: "Combine with Real Feedback",
              desc: "Combine fake reviews with real feedback to create a more credible overall profile.",
            },
            {
              title: "Test Different Star Scenarios",
              desc: "Test different scenarios by experimenting with varying star ratings and comments.",
            },
            {
              title: "Cohesive Branding Mockup",
              desc: "Use mockups for design to align your branding and ensure a cohesive look.",
            },
            {
              title: "Avoid Review Overloading",
              desc: "Avoid overloading the page, as a mix of positive and realistic reviews looks more trustworthy to new visitors.",
            },
          ].map((tip, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
              <div className="h-6 w-6 rounded-full bg-emerald-50 text-[#00B67A] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
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

      {/* Frequently Asked Questions Accordions */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything you need to know about our fake Trustpilot review generator tool.
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

      {/* 6. Conclusion */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Conclusion</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Fake reviews are a cheap, high-reward marketing hack in a world where trust is everything. They allow you to manipulate perception, boost your SEO visibility, and dominate your competitors. While Trustpilot tries to fight them with AI detection, the game is still winnable. If you want to stand out, you have to control the narrative—and sometimes, that means controlling the reviews.
        </p>
      </div>

    </div>
  );
}
