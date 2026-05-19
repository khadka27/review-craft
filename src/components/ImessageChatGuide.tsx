"use client";

import { useState } from "react";
import {
  MessageSquare,
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

export function ImessageChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Open the iMessage Interface",
      desc: "Visit the tool and you'll see a live preview area using a native iOS chat layout.",
    },
    {
      step: "02",
      title: "Generate or Customize a Chat",
      desc: "Click the generate button, or manually edit contact names, message text, and toggle features like read receipts. The tool instantly builds a natural-looking conversation.",
    },
    {
      step: "03",
      title: "Capture Your Chat Mockup",
      desc: "When you like what you see, export the screenshot or copy the layout data. Paste it into Figma, Adobe XD, Keynote, or your slide deck.",
    },
  ];

  const features = [
    {
      title: "Instant Chat Generation",
      desc: "Create full iMessage-style conversations in one click with realistic sender/receiver bubbles, timestamps, and delivery status.",
    },
    {
      title: "Customizable Message Length & Count",
      desc: "Control how many messages appear and adjust text length to test wrapping, scrolling, and keyboard overlap behavior.",
    },
    {
      title: "Realistic iOS UI Elements",
      desc: "Includes accurate status bars, battery/signal icons, blue/gray bubble styling, read receipts, and native iOS input fields.",
    },
    {
      title: "Dynamic Contact & Avatar Support",
      desc: "Add custom contact names, phone numbers, or profile pictures to match your brand, app concept, or iphone message mockup style.",
    },
    {
      title: "Dark & Light Mode Previews",
      desc: "Switch between iOS light and dark themes to see how your chat adapts across system settings before exporting.",
    },
    {
      title: "Rich Media & Link Placeholders",
      desc: "Insert realistic-looking image thumbnails, website previews, and emoji strings to simulate modern iMessage interactions.",
    },
    {
      title: "Quick Export Options",
      desc: "Download high-res PNG screenshots or copy structured data for seamless use in Figma, Sketch, presentations, and portfolio case studies.",
    },
    {
      title: "Educational & Demo Labels",
      desc: "Automatically add 'Mockup,' 'Demo,' or 'Fictional Chat' badges to keep your imessage screenshot generator output transparent and responsible.",
    },
  ];

  const useCases = [
    {
      title: "Portfolio App Designs",
      desc: "Populate messaging screens so your UI feels like a working product rather than a bare layout.",
      badge: "Portfolios",
      color: "border-blue-200 bg-blue-50 text-blue-900",
    },
    {
      title: "Client Presentations",
      desc: "Help stakeholders visualize how users might interact with your chat or notification features.",
      badge: "Client Demos",
      color: "border-indigo-200 bg-indigo-50 text-indigo-850",
    },
    {
      title: "Classroom Demos",
      desc: "Keep focus on layout, interaction design, and component hierarchy while the generator handles sample dialogue.",
      badge: "Education",
      color: "border-sky-200 bg-sky-50 text-sky-800",
    },
    {
      title: "Component Showcases",
      desc: "Display message bubbles, input fields, and status indicators with natural, human-sounding text instead of lorem ipsum.",
      badge: "UI Library",
      color: "border-slate-200 bg-slate-50 text-slate-805",
    },
  ];

  const faqs = [
    {
      q: "Is this generator connected to Apple or iMessage?",
      a: "No. It is an independent design and educational tool and is not affiliated with, endorsed by, or connected to Apple Inc.",
    },
    {
      q: "Are these chats based on real conversations?",
      a: "No. All messages, names, and timestamps are automatically generated and fully fictional. They exist only for use in mockups, demos, and learning.",
    },
    {
      q: "Can I use these mockups in my portfolio?",
      a: "Yes. You can use them in case studies, presentations, and design posts as long as you clearly label them as concept designs or demo mockups.",
    },
    {
      q: "Can I customize the text, names, and theme?",
      a: "Absolutely. You can edit contact details, rewrite messages, toggle read receipts, and switch between light/dark mode before exporting your iphone message mockup.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with iOS Blue/Slate Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-slate-900 via-sky-950 to-blue-950 p-8 sm:p-12 shadow-2xl border border-blue-500/20">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#007aff]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <MessageSquare size={13} className="text-[#007aff] animate-pulse" /> iMessage Visualizer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            iMessage Chat Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            iMessage is Apple’s default messaging platform, known for its clean interface and signature blue/gray bubbles. This fake iPhone text message generator helps you instantly create believable iMessage conversations you can use in mockups, prototypes, and educational projects.
          </p>
        </div>
      </div>

      {/* Grid: What is it & Why Use iPhone Chat Mockups? */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What This iMessage Tool Does */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#007aff]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What This iMessage Tool Does</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              This tool generates iMessage‑style chat screens that look like authentic iOS messaging threads. Each generated conversation can include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-xs font-semibold pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#007aff] shrink-0" /> Sender & recipient contact details
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#007aff] shrink-0" /> Blue (sent) & gray (received) bubbles
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#007aff] shrink-0" /> Timestamps & read receipts
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#007aff] shrink-0" /> Link previews & media placeholders
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#007aff] shrink-0" /> Custom conversational lengths
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#007aff] shrink-0" /> Notch/Dynamic Island status bar
              </div>
            </div>
          </div>
        </div>

        {/* Why Use iPhone Chat Mockups? */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-650">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Why Use iPhone Chat Mockups?</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fake message screens behave more like real user content than placeholder text. With natural conversational pacing and varied message lengths, you can:
            </p>
            <div className="space-y-3 pt-1">
              {[
                "Test how text wrapping, bubble alignment, and scroll behavior work on screen sizes.",
                "Check spacing, padding, and typography in messaging UIs without layout breaking.",
                "Simulate realistic user flows for notifications, alerts, or onboarding sequences.",
                "Present polished, 'ready-to-ship' screens instead of empty wireframe grids.",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-[#007aff] mt-0.5 shrink-0" />
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
            How to Use iPhone Message Mockup Generator
          </h3>
          <p className="text-slate-500 text-sm">
            Everything happens directly in your browser. No extra software needed:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#007aff] uppercase tracking-widest block mb-4">Step {s.step}</span>
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
              <div className="p-2.5 bg-blue-50 rounded-xl text-[#007aff]">
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
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-650">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Who This Fake iMessage Chat Generator Is For</h3>
            </div>
            
            <div className="space-y-4 pt-1">
              {[
                { title: "UI and UX Designers", desc: "Fill messaging flows with realistic conversations. Turn plain wireframes into high-fidelity designs." },
                { title: "Front-End Developers", desc: "Test responsive chat layouts with short/long text. Populate component libraries with sample data." },
                { title: "Students and Learners", desc: "Build portfolios faster with instant mockups. Practice iOS Human Interface Guidelines." },
                { title: "Content Creators and Educators", desc: "Add clean, recognizable iOS visuals to tutorials, slides, blog posts, and classes." },
              ].map((user, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-50 text-[#007aff] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
            Practical Ways to Use Fake iPhone Chats
          </h3>
          <p className="text-slate-500 text-sm">
            iMessage visual assets fit perfectly across multiple interface designs and presentation concepts:
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
          <div className="flex items-center gap-2 text-[#007aff]">
            <TrendingUp size={20} />
            <span className="font-extrabold text-xs uppercase tracking-wider">Tips for Getting the Best Results</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#007aff] shrink-0 mt-0.5" />
              <span>Generate several conversation tones (casual, professional, support) to match your app’s voice.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#007aff] shrink-0 mt-0.5" />
              <span>Use a mix of short replies and long paragraphs to catch layout and scroll issues early.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#007aff] shrink-0 mt-0.5" />
              <span>Keep timestamps and read receipts consistent with actual iOS behavior for maximum realism.</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-[#007aff] shrink-0 mt-0.5" />
              <span>Always label exported screenshots as “Mockup”, “Demo”, or “Fictional Chat” when sharing publicly.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical warning */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-blue-50 text-[#007aff] rounded-xl shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Honest and Responsible Use</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This tool is built for design, development, and education not for deception or platform manipulation. You should not use it for spreading misinformation, impersonating real individuals, fabricating customer support tickets, or posting fake chats on social media or messaging apps as “real”.
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
            Everything you need to know about our fake iMessage chat generator.
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
