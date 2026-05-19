"use client";

import { useState } from "react";
import {
  Twitter,
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

export function TwitterChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Enter Details",
      desc: "Input usernames, profile names, and message content.",
    },
    {
      step: "02",
      title: "Customize Comments",
      desc: "Edit timestamps, profile images, chat bubbles, and conversation settings.",
    },
    {
      step: "03",
      title: "Generate Preview",
      desc: "The realistic Twitter chat preview generator instantly creates a live messaging simulation.",
    },
    {
      step: "04",
      title: "Download Screenshot",
      desc: "Export the completed Twitter chat mockup as a high-quality screenshot or design template.",
    },
  ];

  const features = [
    "Custom message creation",
    "Username and profile editing",
    "Timestamp controls",
    "Twitter-style messaging UI",
    "Screenshot export functionality",
    "Editable chat layouts",
    "Light and dark mode previews",
    "Instant rendering system",
    "Mobile-responsive design",
    "Realistic inbox simulation",
  ];

  const useCases = [
    {
      title: "Landing Pages",
      desc: "Marketers use Twitter review mockup visuals to improve storytelling and increase engagement on promotional pages.",
      badge: "Landing Pages",
      color: "border-sky-200 bg-sky-50 text-sky-850",
    },
    {
      title: "Testimonials",
      desc: "Businesses display simulated Twitter conversations as visual examples of communication experiences and customer interactions.",
      badge: "Testimonials",
      color: "border-blue-200 bg-blue-50 text-blue-805",
    },
    {
      title: "Affiliate Funnels",
      desc: "Affiliate marketers frequently use fake Twitter conversation generator tools to create compelling promotional visuals.",
      badge: "Funnels",
      color: "border-cyan-200 bg-cyan-50 text-cyan-800",
    },
    {
      title: "Social Proof Visuals",
      desc: "A Twitter conversation screenshot maker helps agencies produce polished mockups for presentations and demonstrations.",
      badge: "Social Proof",
      color: "border-slate-200 bg-slate-50 text-slate-805",
    },
  ];

  const faqs = [
    {
      q: "Is a fake Twitter chat generator free to use?",
      a: "Many platforms provide a free Twitter chat generator online with basic features available at no cost. Some advanced platforms may include premium export settings, additional templates, or enhanced customization options through paid plans designed for professional users.",
    },
    {
      q: "Can I create Twitter DM screenshots without signing up?",
      a: "Yes. Most no signup Twitter chat generator platforms allow users to create and download messaging mockups instantly without creating an account, making the process faster and more convenient for marketers, designers, and casual users alike.",
    },
    {
      q: "Is using a Twitter DM mockup tool legal?",
      a: "Using a Twitter DM mockup tool no signup platform for demonstrations, educational content, interface testing, or creative presentations is generally acceptable. However, deceptive use, impersonation, or misleading communication may violate laws or platform policies depending on usage intent.",
    },
    {
      q: "Can I customize usernames and profile pictures?",
      a: "Most realistic Twitter DM creator tools provide customization options for usernames, timestamps, message content, avatars, and conversation layouts. These settings help users create highly personalized and visually realistic messaging mockups for presentations or marketing campaigns.",
    },
    {
      q: "What formats are available for download?",
      a: "Most Twitter DM screenshot generator free platforms support PNG and JPG exports. Some advanced editable Twitter chat mockup systems may also provide layered templates or downloadable assets compatible with external design and editing software tools.",
    },
    {
      q: "Are Twitter chat generators safe to use?",
      a: "Reputable Twitter messaging mockup generator platforms are generally safe when used responsibly. Users should avoid uploading sensitive information and should only use generated mockups ethically for demonstrations, presentations, educational content, or design testing purposes.",
    },
    {
      q: "Can businesses use Twitter chat mockups commercially?",
      a: "Yes. Businesses frequently use Twitter conversation screenshot maker tools for marketing campaigns, client presentations, landing pages, affiliate funnels, and product demos where realistic messaging visuals improve communication and audience engagement effectively.",
    },
    {
      q: "Do Twitter chat generators work on mobile devices?",
      a: "Most Twitter chat UI builder free tools are fully responsive and optimized for smartphones, tablets, and desktop browsers. This allows users to generate realistic messaging previews conveniently from almost any modern device or operating system.",
    },
    {
      q: "How realistic are the generated conversations?",
      a: "A high-quality realistic Twitter conversation builder closely matches Twitter’s interface design, including message spacing, timestamps, fonts, and chat layouts. Proper customization can produce highly authentic-looking messaging previews suitable for professional mockups and demonstrations.",
    },
    {
      q: "Can I edit conversations after generation?",
      a: "Most instant Twitter DM design creator platforms allow users to modify conversations before downloading screenshots. Users can usually edit usernames, timestamps, message content, avatars, and layout settings multiple times until the final mockup meets their exact requirements.",
    },
    {
      q: "What limitations do fake Twitter generators have?",
      a: "Although these tools create highly realistic messaging previews, they do not connect to real Twitter accounts or send actual messages. They are intended strictly for mockups, design previews, educational demonstrations, testing environments, and professional presentation workflows.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Twitter Black/Slate Theme */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-black via-slate-900 to-[#1DA1F2]/10 p-8 sm:p-12 shadow-2xl border border-slate-800">
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1DA1F2]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <Twitter size={13} className="text-[#1DA1F2] animate-pulse" /> DM Simulator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Twitter Chat Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A fake Twitter chat generator allows you to create realistic Twitter DM screenshots and conversation previews within seconds. Replicate Twitter’s messaging interface to customize usernames, profile images, timestamps, and conversation layouts for storytelling, educational demonstrations, and design presentations.
          </p>
        </div>
      </div>

      {/* Grid: What is it & Twitter Chat Mockup Use */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What is Fake Twitter Chat Generator */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-50 rounded-xl text-[#1DA1F2]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What is this Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A fake Twitter chat generator is an online tool that allows users to create simulated Twitter direct message conversations and realistic messaging screenshots. 
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Replicate Twitter’s messaging interface by customizing message bubbles, avatars, names, handles, and timestamps. Use the output for UI testing, client demos, or visual layouts without requiring professional graphic design skills.
            </p>
          </div>
        </div>

        {/* Twitter Comment Mockup Use */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-200 rounded-xl text-slate-800">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Twitter DM Layout Use</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              A realistic Twitter DM creator supports multiple creative and professional workflows:
            </p>
            <div className="space-y-3 pt-1">
              {[
                "Landing Pages: Improve storytelling and user engagement on promotional pages.",
                "Testimonials: Display simulated conversations as visual examples of communication.",
                "Affiliate Funnels: Create compelling promotional visuals and conversion-focused assets.",
                "Social Proof Visuals: Produce polished mockup screenshots for marketing and client pitches.",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-[#1DA1F2] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{reason}</span>
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
            Using an instant Twitter chat mockup creator is simple and beginner-friendly:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#1DA1F2] uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Features & Supported Platforms */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Features */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-50 rounded-xl text-[#1DA1F2]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platforms Supported */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-250 rounded-xl text-slate-800">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Platforms Supported</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Most Twitter chat template generator free tools are optimized for:
            </p>
            <div className="space-y-3 pt-1 text-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#1DA1F2]" /> Desktop browsers
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#1DA1F2]" /> Smartphones
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#1DA1F2]" /> Tablets
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#1DA1F2]" /> Marketing presentation software
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#1DA1F2]" /> UI/UX prototyping workflows
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Use Cases */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Use Cases
          </h3>
          <p className="text-slate-500 text-sm">
            Simulate conversational threads across your sales and product workflows:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
          {/* Why This Tool Is Useful Mini card */}
          <div className="bg-slate-950 text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-2">
              <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-[#1DA1F2]">
                Benefits
              </span>
              <h4 className="text-sm font-bold text-white leading-tight">Fast generation, realistic visuals, and consistent mockup quality.</h4>
              <p className="text-slate-400 text-[10px] leading-normal">Allows users to create polished visuals without complicated software or technical expertise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Why Useful & Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
          <h4 className="font-bold text-slate-900 text-base">Why This Tool Is Useful</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">Saves Time:</strong> Manual editing in graphic design software can take hours.</span>
            </li>
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">Improves Design Quality:</strong> Pre-built layouts maintain consistent visual presentation.</span>
            </li>
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">Creates Realistic Mockups:</strong> Replicates Twitter’s familiar messaging interface.</span>
            </li>
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">No Design Skills Needed:</strong> Create professional-looking visuals instantly.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h4 className="font-bold text-slate-900 text-base">Tips for Realistic DM Previews</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span>Keep conversations natural and conversational.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span>Avoid excessive promotional or marketing language.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span>Use realistic timestamps and balanced reply flows.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#1DA1F2] shrink-0 mt-0.5" />
              <span>Use believable handles, names, and profile avatars.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ethical warning / disclaimer */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-white text-[#1DA1F2] rounded-xl shadow-sm shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Important Disclaimer</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This fake chat generator and DM mockup style tool are intended strictly for mockups, demonstrations, educational examples, interface testing, design previews, and creative presentations only. Users must not use generated screenshots or simulated conversations to deceive individuals, impersonate users, distribute misleading information, or create fake engagement.
          </p>
          <p className="text-slate-500 text-xs italic">
            Users assume full responsibility for how generated mockups, screenshots, and messaging previews are used, shared, or distributed.
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
            Everything you need to know about our fake Twitter DM generator tool.
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
