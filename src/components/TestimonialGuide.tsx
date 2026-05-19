"use client";

import { useState } from "react";
import {
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  TrendingUp,
  UserCheck,
  HeartHandshake,
  ArrowRight,
  Info,
  ShieldAlert,
  MessageSquare,
  ChevronRight,
  Zap,
} from "lucide-react";

export function TestimonialGuide() {
  const [activeTab, setActiveTab] = useState<"saas" | "ecommerce" | "freelancer" | "neutral">("saas");

  const examples = {
    saas: {
      title: "SaaS Platform",
      text: "“Before using this platform, our team was tracking support requests manually and constantly missing follow-ups. After switching, communication became much easier to organize and response times improved noticeably within the first week.”",
      author: "Alex Rivera",
      role: "Operations Lead",
      company: "SaaSFlow Inc.",
      avatar: "AR",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50/70 border-blue-200 text-blue-900",
      pill: "bg-blue-100 text-blue-800",
    },
    ecommerce: {
      title: "Ecommerce Shop",
      text: "“The packaging looked much more premium than expected and the product quality felt solid right out of the box.”",
      author: "Sarah Jenkins",
      role: "Verified Buyer",
      company: "LuxeDecor Store",
      avatar: "SJ",
      color: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50/70 border-rose-200 text-rose-900",
      pill: "bg-rose-100 text-rose-800",
    },
    freelancer: {
      title: "Freelancer Work",
      text: "“I needed placeholder testimonials for a client mockup and this saved me hours of writing during the design phase.”",
      author: "Marcus Chen",
      role: "UX/UI Designer",
      company: "Chen Design Studio",
      avatar: "MC",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/70 border-amber-200 text-amber-900",
      pill: "bg-amber-100 text-amber-800",
    },
    neutral: {
      title: "Neutral / Balanced",
      text: "“Good overall starting point, although we still adjusted parts of the workflow to better fit our process.”",
      author: "Elena Rostova",
      role: "Product Manager",
      company: "SyncCorp",
      avatar: "ER",
      color: "from-slate-600 to-slate-800",
      bgLight: "bg-slate-50/70 border-slate-200 text-slate-900",
      pill: "bg-slate-100 text-slate-800",
    },
  };

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Main Header Card with Glassmorphism and vibrant gradient */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 shadow-2xl border border-indigo-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_40%)]" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-6 uppercase tracking-wider">
            <BookOpen size={13} className="animate-pulse" /> Ultimate Content Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Fake Testimonials Generator: How to Create Realistic Testimonials <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-sky-300 font-extrabold">(and Use Them Properly)</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Master the art of creating mock feedback that makes prototypes, mockups, and early-stage development designs look experienced, believable, and visually balanced.
          </p>
        </div>
      </div>

      {/* Grid: 1. Introduction & 2. What Is a Testimonial? */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Intro */}
        <div className="lg:col-span-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Introduction</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A landing page without testimonials usually feels incomplete, even when everything else looks polished. You can have strong visuals, clean copy, and a solid product, but empty testimonial sections still reduce trust. Without social proof, products often feel newer, less proven, and less convincing.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              That’s why designers, developers, marketers, and founders often use a fake testimonials generator during early-stage work. Not to fake credibility, but to make prototypes, mockups, demos, and drafts feel realistic enough to evaluate properly.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The problem is that most generated testimonials sound artificial. Not because the writing is bad, but because they lack the detail, context, and natural phrasing that make feedback feel genuine.
            </p>
          </div>
          
          <div className="mt-6 border-l-4 border-indigo-600 bg-indigo-50/50 p-4 rounded-r-xl">
            <p className="text-xs uppercase tracking-wider font-semibold text-indigo-600 mb-1">The Golden Rule</p>
            <p className="text-slate-950 font-bold italic text-sm sm:text-base leading-relaxed">
              "Weak testimonials sound written. Strong testimonials sound experienced."
            </p>
          </div>
        </div>

        {/* What is a testimonial */}
        <div className="lg:col-span-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">2. What Is a Testimonial?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A testimonial is more than a positive comment. It’s a short first-person explanation of someone’s experience with a product or service.
            </p>
            <p className="text-slate-700 font-semibold text-sm sm:text-base">
              Unlike a basic review, a testimonial usually includes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                <span className="block text-xs uppercase tracking-wide font-semibold text-slate-500 mb-1">Step 1</span>
                <span className="text-slate-900 font-bold text-sm">Original Problem</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                <span className="block text-xs uppercase tracking-wide font-semibold text-slate-500 mb-1">Step 2</span>
                <span className="text-slate-900 font-bold text-sm">Actual Experience</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                <span className="block text-xs uppercase tracking-wide font-semibold text-slate-500 mb-1">Step 3</span>
                <span className="text-slate-900 font-bold text-sm">Result Afterward</span>
              </div>
            </div>
            <div className="space-y-3 bg-emerald-50/40 border border-emerald-100 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700">Contrast Comparison</p>
              <div className="space-y-2">
                <p className="text-xs text-slate-500 font-medium">Basic Comment (Less effective):</p>
                <p className="text-slate-700 italic text-xs sm:text-sm">“Works well, no issues.”</p>
                <div className="h-px bg-emerald-100" />
                <p className="text-xs text-emerald-800 font-bold">Contextual Testimonial (Highly realistic):</p>
                <p className="text-emerald-950 italic text-xs sm:text-sm font-medium">
                  “We were struggling to organize customer requests across multiple spreadsheets. Within a few days of switching to this tool, everything became easier to track and our workflow felt significantly less chaotic.”
                </p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm mt-4 italic leading-relaxed">
            Strong testimonials usually focus on practical improvements (workflows, manual work, organization) and realistic stories feel much more believable than dramatic success stories.
          </p>
        </div>
      </div>

      {/* Guide Content Box: What Guide Explains */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Info size={18} className="text-indigo-600" /> What This Detailed Guide Explains:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "What fake testimonial generators actually do",
            "Why some testimonials feel believable while others feel generic",
            "How realistic testimonials are usually structured",
            "Common mistakes that reduce authenticity",
            "How to make generated testimonials sound more natural",
            "Designing testimonial drafts for real creative workflows",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
              <div className="h-6 w-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">
                {idx + 1}
              </div>
              <span className="text-slate-700 text-sm font-medium leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Quick Example: Weak vs Strong Testimonials */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            3. Quick Example: Weak vs Strong Testimonials
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">
            See the direct structural differences between placeholder text that sounds obviously fake and copy that feels genuine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Weak Testimonial */}
          <div className="bg-gradient-to-b from-rose-50/50 to-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2.5 bg-rose-500 text-white rounded-bl-xl text-xs font-bold uppercase tracking-wider">
              Weak Testimonial
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-600 mb-2">
                <XCircle size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Generic Structure</span>
              </div>
              <blockquote className="text-slate-800 text-lg font-bold italic leading-relaxed pt-2">
                “Amazing product. Highly recommend.”
              </blockquote>
              <p className="text-slate-600 text-sm leading-relaxed">
                There’s nothing technically wrong with this sentence, but it could apply to almost anything.
              </p>
            </div>

            <div className="mt-6 space-y-2 border-t border-rose-100 pt-4">
              <p className="text-xs font-bold uppercase text-rose-700 tracking-wide">Why It Fails:</p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                  No recognizable situation or context
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                  No practical detail about actual usage
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                  No clear outcome or improvement
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                  No personality or specificity
                </li>
              </ul>
            </div>
          </div>

          {/* Strong Testimonial */}
          <div className="bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2.5 bg-emerald-500 text-white rounded-bl-xl text-xs font-bold uppercase tracking-wider">
              Stronger Testimonial
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 mb-2">
                <CheckCircle2 size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Experienced Structure</span>
              </div>
              <blockquote className="text-slate-900 text-lg font-bold italic leading-relaxed pt-2">
                “Before using this tool, we were manually organizing support requests in spreadsheets and constantly losing track of conversations. After switching, everything became easier to manage and response times improved within the first week.”
              </blockquote>
              <p className="text-slate-600 text-sm leading-relaxed">
                This works much better because it sounds connected to a real workflow.
              </p>
            </div>

            <div className="mt-6 space-y-2 border-t border-emerald-100 pt-4">
              <p className="text-xs font-bold uppercase text-emerald-700 tracking-wide">Why It Succeeds:</p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  A recognizable problem people can relate to
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  A believable day-to-day situation
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  A specific improvement after using the product
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  More natural, conversational wording
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structure Diagram */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="space-y-2 max-w-sm">
            <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Natural Workflow</span>
            <h4 className="text-lg font-bold">Natural Description Formula</h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Most realistic testimonials follow a simple structure because that’s naturally how people describe useful experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="bg-slate-800/80 border border-slate-700 px-4 py-3 rounded-xl text-center w-full sm:w-28 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-1">Step 1</span>
              <span className="font-extrabold text-sm block text-slate-100">Problem</span>
            </div>
            <ChevronRight className="hidden sm:block text-slate-500 shrink-0" size={18} />
            <div className="bg-slate-800/80 border border-slate-700 px-4 py-3 rounded-xl text-center w-full sm:w-28 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">Step 2</span>
              <span className="font-extrabold text-sm block text-slate-100">Experience</span>
            </div>
            <ChevronRight className="hidden sm:block text-slate-500 shrink-0" size={18} />
            <div className="bg-slate-800/80 border border-slate-700 px-4 py-3 rounded-xl text-center w-full sm:w-28 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">Step 3</span>
              <span className="font-extrabold text-sm block text-slate-100">Result</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. What Is a Fake Testimonials Generator? & Use Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">4. What Is a Fake Testimonials Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A fake testimonials generator is a tool that creates simulated testimonial content based on user input. Instead of writing everything manually, users usually provide the type of product or service, the situation the testimonial should describe, the tone or writing style, and the level of detail or enthusiasm.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The tool then generates structured testimonial drafts designed to resemble real customer feedback. These tools are also commonly called <strong>fake review generators</strong>, <strong>AI testimonial generators</strong>, or <strong>customer review generators</strong>.
            </p>
          </div>
          
          <div className="mt-6 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Workflow Pro Tip</p>
              <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                “The generator creates the structure. Editing creates realism.”
              </p>
            </div>
            <Zap size={28} className="text-indigo-400 shrink-0 animate-bounce" />
          </div>
        </div>

        {/* Use Cases */}
        <div className="lg:col-span-5 bg-gradient-to-b from-indigo-50/30 to-indigo-100/10 rounded-2xl p-6 sm:p-8 border border-indigo-100 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 block">Where to Apply</span>
            <h4 className="text-lg font-bold text-slate-900">Highly Useful Workflows</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Placeholder simulated content helps simulate final experiences before collecting genuine user testimonials.
            </p>
            
            <div className="space-y-3">
              {[
                { title: "Landing Page Design & UI Prototyping", desc: "Test layout responsiveness and font alignments." },
                { title: "SaaS Demos & Investor Presentations", desc: "Provide high-fidelity product demonstrations." },
                { title: "Client Mockups & Internal Previews", desc: "Help stakeholders visualize complete text containers." },
                { title: "Early-stage Product Development", desc: "Build placeholder database records and schemas." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-3 rounded-xl border border-slate-200/50 shadow-sm">
                  <ChevronRight size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-800">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Why Some Testimonials Feel Real */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            5. Why Some Testimonials Feel Real
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">
            Most generated testimonials fail because they sound like written copy rather than direct experience. Here is why authentic testimonials succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Specific Details",
              desc: "Vague praise feels empty because it lacks evidence. Compare: 'This improved our workflow.' vs. 'This reduced the amount of manual tracking we were doing every day.' The second version feels more believable.",
              icon: Sparkles,
              color: "bg-indigo-50 text-indigo-600",
            },
            {
              title: "Natural Language",
              desc: "Real people rarely sound like polished advertisements. Slightly uneven phrasing, conversational wording, or colloquial terms often feel significantly more authentic than perfect marketing copy.",
              icon: UserCheck,
              color: "bg-emerald-50 text-emerald-600",
            },
            {
              title: "Clear Before-and-After Context",
              desc: "Strong testimonials explain three vital variables: what the situation looked like before, what changed after adopting the product, and why that specific improvement mattered to the workflow.",
              icon: TrendingUp,
              color: "bg-blue-50 text-blue-600",
            },
            {
              title: "Variation in Tone & Structure",
              desc: "When every testimonial follows the same rhythm and length, readers notice. Real reviews naturally vary in sentence length, pacing, enthusiasm, vocabulary, and level of details.",
              icon: MessageSquare,
              color: "bg-amber-50 text-amber-600",
            },
            {
              title: "Balanced Positivity",
              desc: "Moderate positivity creates more trust. 'Good overall experience, although we still customized parts of the workflow' is far more authentic than 'This completely revolutionized our business overnight.'",
              icon: HeartHandshake,
              color: "bg-rose-50 text-rose-600",
            },
            {
              title: "Subtlety Over Exaggeration",
              desc: "Avoiding sensational terms. Trust is established when feedback sounds practical, small, grounded, and representative of everyday customer experiences rather than absolute perfection.",
              icon: CheckCircle2,
              color: "bg-teal-50 text-teal-600",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className={`p-3 rounded-xl inline-block ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Testimonial Examples (Interactive Tab Box) */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            6. Testimonial Examples
          </h3>
          <p className="text-slate-500 text-sm">
            Select one of the preview tabs below to review realistic testimonial layout examples varying in tone, specificity, and sentence structure.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
          {(Object.keys(examples) as Array<keyof typeof examples>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === key
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {examples[key].title}
            </button>
          ))}
        </div>

        {/* Testimonial Render */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden transition-all duration-300">
          <div className={`absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r ${examples[activeTab].color}`} />
          <div className="space-y-6">
            <span className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${examples[activeTab].pill}`}>
              {examples[activeTab].title} Example
            </span>
            <p className="text-slate-900 font-medium italic text-sm sm:text-base md:text-lg leading-relaxed">
              {examples[activeTab].text}
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <div className={`h-11 w-11 rounded-full bg-gradient-to-r ${examples[activeTab].color} flex items-center justify-center font-extrabold text-white text-sm shadow-sm`}>
                {examples[activeTab].avatar}
              </div>
              <div>
                <h5 className="font-extrabold text-slate-900 text-sm">{examples[activeTab].author}</h5>
                <p className="text-xs text-slate-500">{examples[activeTab].role} at {examples[activeTab].company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Common Mistakes When Generating Testimonials */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            7. Common Mistakes When Generating Testimonials
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">
            Avoid these critical mistakes to maintain realism and avoid creating obvious placeholder rhythm patterns that lower user trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Generic Praise",
              desc: "Statements like 'Amazing product.' or 'Highly recommend.' rarely feel convincing on their own because they contain no context or evidence of real experience.",
            },
            {
              title: "Repetitive Structure",
              desc: "When every testimonial follows the exact same rhythm, vocabulary, and sentence ordering, readers notice the pattern instantly and trust the content less.",
            },
            {
              title: "Overly Promotional Language",
              desc: "Phrases like 'revolutionary platform', 'life-changing solution', or 'game-changing product' reduce realism since most people don't naturally speak that way.",
            },
            {
              title: "No Clear Outcome",
              desc: "Good testimonials explain what actually improved after using the product, even if the improvement is small, rather than leaving the outcome completely blank.",
            },
            {
              title: "Using Text Without Editing",
              desc: "Generated output works best as a draft. Small edits often make the entire difference between obviously artificial AI text and highly believable placeholder feedback.",
            },
          ].map((mistake, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
              <div className="p-2.5 bg-rose-50 rounded-xl text-rose-600 shrink-0 h-10 w-10 flex items-center justify-center">
                <AlertTriangle size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">{mistake.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{mistake.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. How to Make Generated Testimonials Sound More Human */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            8. How to Make Generated Testimonials Sound More Human
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">
            The difference between an obviously fake testimonial and a believable one is often a few small edits.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md max-w-4xl mx-auto space-y-6">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Generated testimonials usually improve significantly when you shorten overly polished or dramatic sentences, remove exaggerated marketing claims, add practical details connected to real situations, vary sentence structure, and use conversational wording.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            {/* Before */}
            <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-5 space-y-3">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-rose-700">
                <XCircle size={14} /> Generated Version
              </span>
              <p className="text-slate-800 text-sm sm:text-base font-medium italic leading-relaxed">
                “This revolutionary platform completely transformed our business operations.”
              </p>
              <p className="text-[11px] text-slate-500 leading-normal">
                Sounds like highly polished marketing copy or AI-generated advertisement instead of real feedback.
              </p>
            </div>

            {/* After */}
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5 space-y-3">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-emerald-700">
                <CheckCircle2 size={14} /> Edited Version
              </span>
              <p className="text-slate-950 text-sm sm:text-base font-bold italic leading-relaxed">
                “This made our workflow easier to manage and reduced a lot of manual organization.”
              </p>
              <p className="text-[11px] text-emerald-800 font-medium leading-normal">
                Believable because it sounds grounded in a real, relatable day-to-day experience instead of copy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Ethical Considerations */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-300 border border-indigo-500/20">
              <ShieldAlert size={20} className="animate-pulse" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">9. Ethical Considerations</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                There’s an important difference between:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
                  <span className="block text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Acceptable</span>
                  <p className="text-xs sm:text-sm text-slate-100 font-bold leading-snug">
                    Using generated testimonials as placeholders during creative design work.
                  </p>
                </div>
                <div className="bg-rose-500/10 border border-rose-500/25 rounded-xl p-4 space-y-1">
                  <span className="block text-[10px] font-bold text-rose-400 uppercase tracking-widest">Unacceptable</span>
                  <p className="text-xs sm:text-sm text-rose-100 font-bold leading-snug">
                    Presenting fictional testimonials as genuine customer experiences.
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-2">
                The first is a practical workflow decision. The second can damage trust if discovered. Real testimonials carry weight because they reflect actual experiences. Generated ones work best as temporary structure, inspiration, or placeholder material.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">Perfect Use Cases:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                  Mockup creation & UI design layouts
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                  Investor or client visual presentations
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                  Early-stage prototype development
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                  Internal previews before real feedback exists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 10. Conclusion */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">10. Conclusion</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          A fake testimonials generator is highly useful because it helps teams quickly create realistic placeholder content during design and development work. Instead of leaving sections empty or writing everything manually, teams can generate testimonial drafts that make mockups, demos, and prototypes feel more complete.
        </p>
        <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
          But realistic testimonials don’t come from generation alone. They come from believable situations, natural wording, specific details, and thoughtful editing.
        </p>
        <div className="pt-4 max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200/80 px-4 py-2 rounded-xl">
            <span>The strongest testimonials sound familiar, grounded, and connected.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
