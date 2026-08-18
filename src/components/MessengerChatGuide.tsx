"use client";

import { useState } from "react";
import {
  MessageSquare,
  CheckCircle,
  HelpCircle,
  Sliders,
  Sparkles,
  Info,
  ShieldCheck,
  ChevronRight,
  Zap,
  Smartphone,
  Copy,
} from "lucide-react";
import Script from "next/script";

export function MessengerChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Set Sender Info",
      desc: "Enter Facebook Messenger contact name, avatar, and active status indicator.",
    },
    {
      step: "02",
      title: "Add Chat Messages",
      desc: "Customize blue and grey message bubbles, reaction emojis, and timestamps.",
    },
    {
      step: "03",
      title: "Adjust Theme Gradient",
      desc: "Choose Messenger gradient bubble themes (Blue, Purple, Pink) and phone layout.",
    },
    {
      step: "04",
      title: "Download Screenshot",
      desc: "Export your Messenger chat mockup as PNG, WEBP, JPG, or vector PDF.",
    },
  ];

  const features = [
    "Authentic Facebook Messenger chat UI & gradient bubbles",
    "Reaction emoji badges (❤️, 👍, 😂)",
    "Editable profile pictures, usernames, and active status",
    "Live instant canvas rendering engine",
    "PNG, WEBP, JPG & PDF export options",
    "Optional EXIF metadata embedding",
    "Mobile device bezel preview",
    "100% private in-browser generation",
    "No registration required",
  ];

  const faqs = [
    {
      q: "What is a Messenger chat generator?",
      a: "A Messenger chat generator is a web application for creating simulated Facebook Messenger direct message screenshots for marketing visuals, UI prototypes, and social proof graphics.",
    },
    {
      q: "Is this Messenger generator free?",
      a: "Yes, our Messenger mockup tool is 100% free.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-800">
      <Script
        id="messenger-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#0064e0] via-[#0084FF] to-[#00a2ff] p-8 sm:p-12 shadow-2xl border border-blue-500/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0084FF]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <MessageSquare size={13} className="text-blue-200 animate-pulse" /> Messenger Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Facebook Messenger Generator
          </h2>
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal">
            Create realistic Facebook Messenger chat screenshots and DM conversation mockups in seconds. Replicate Messenger's gradient bubble design with customizable avatars, names, reactions, and timestamps.
          </p>
        </div>
      </div>

      {/* Grid: Overview & Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-600">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">What is this Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The Messenger chat mockup builder lets designers, agency owners, and marketers simulate Facebook Messenger threads matching Meta's official mobile interface standards.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-600">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Prototyping Workflows</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Great for Facebook ad creative concepts, customer support chat testimonials, sales funnels, and UX wireframes.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Create a Messenger Chat Mockup
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-600">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Key Features</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-2 items-start">
              <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-amber-100 text-amber-800 rounded-xl border border-amber-200 shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-extrabold text-slate-900 text-base">Ethical Usage Policy</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This Messenger chat generator is strictly intended for UI design, educational presentations, and marketing demonstrations. Generated chats are simulated. Do not use for deceptive activity.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200/70 rounded-xl overflow-hidden shadow-sm bg-slate-50/50">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 hover:bg-slate-100/60 transition-colors text-left cursor-pointer"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{faq.q}</span>
                <HelpCircle size={18} className="text-slate-400 shrink-0 ml-2" />
              </button>

              {activeFaq === idx && (
                <div className="p-4 border-t border-slate-200/60 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed">
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
