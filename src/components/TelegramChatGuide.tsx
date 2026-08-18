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

export function TelegramChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Set Telegram User",
      desc: "Enter Telegram contact name, @username, avatar, and online status (last seen recently).",
    },
    {
      step: "02",
      title: "Add Chat Messages",
      desc: "Create sent and received messages, media attachments, and double tick delivery status.",
    },
    {
      step: "03",
      title: "Customize Theme",
      desc: "Select Telegram blue chat bubble theme and status bar settings.",
    },
    {
      step: "04",
      title: "Export Mockup",
      desc: "Download the completed Telegram conversation screenshot as PNG, WEBP, JPG, or PDF.",
    },
  ];

  const features = [
    "Authentic Telegram blue chat UI layout",
    "Support for double tick read receipts and timestamps",
    "Editable usernames, avatars, and bio info",
    "Live instant canvas rendering engine",
    "High-resolution PNG, WEBP, JPG & PDF export options",
    "Optional EXIF metadata embedding",
    "Mobile frame preview mode",
    "100% private client-side processing",
    "No signups required",
  ];

  const faqs = [
    {
      q: "What is a Telegram chat generator?",
      a: "A Telegram chat generator is a design tool that creates simulated Telegram direct message screenshots for marketing graphics, social proof visuals, and UI prototypes.",
    },
    {
      q: "Is this Telegram mockup generator free?",
      a: "Yes, our Telegram chat creator is 100% free.",
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
        id="telegram-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#0088cc] via-[#24A1DE] to-[#54b9f2] p-8 sm:p-12 shadow-2xl border border-sky-500/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#24A1DE]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <MessageSquare size={13} className="text-sky-200 animate-pulse" /> Telegram Chat Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Telegram Chat Generator
          </h2>
          <p className="text-base sm:text-lg text-sky-100 leading-relaxed font-normal">
            Create realistic Telegram message screenshots and channel conversation mockups in seconds. Replicate Telegram's clean messaging interface with customizable contact names, @handles, read ticks, and timestamps.
          </p>
        </div>
      </div>

      {/* Grid: Overview & Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">What is this Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The Telegram chat generator lets community managers, UI designers, and marketers simulate Telegram messaging threads for visual storytelling and sales proof.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Prototyping Workflows</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Great for crypto community previews, Telegram channel promo graphics, customer chat testimonials, and app wireframes.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How to Create a Telegram Chat Mockup
          </h3>
          <p className="text-slate-500 text-sm">
            Generating a custom Telegram screenshot takes only four simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest block mb-4">Step {s.step}</span>
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
          <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600">
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
            This Telegram chat generator is strictly intended for UI design, educational presentations, and marketing demonstrations. Generated chats are simulated. Do not use for deceptive activity.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything you need to know about our Telegram chat mockup generator:
          </p>
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
