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

export function WhatsappChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Set Contact Details",
      desc: "Enter contact name, phone number, profile photo, and online status (Online / Typing...).",
    },
    {
      step: "02",
      title: "Create Messages",
      desc: "Add sent and received chat bubbles with customizable timestamps and blue tick read receipts.",
    },
    {
      step: "03",
      title: "Customize Wallpaper & Layout",
      desc: "Toggle light or dark theme background wallpaper, battery status bar, and time indicator.",
    },
    {
      step: "04",
      title: "Export Image",
      desc: "Download your completed WhatsApp conversation mockup as PNG, WEBP, JPG, or PDF.",
    },
  ];

  const features = [
    "Authentic WhatsApp green chat bubble layout",
    "Support for single tick, double tick, and blue double tick read receipts",
    "Customizable contact name, profile picture, and status",
    "Voice message and image message bubble mockups",
    "Live instant canvas rendering engine",
    "High-resolution PNG, WEBP, JPG & PDF export options",
    "Optional EXIF metadata embedding",
    "Mobile device bezel preview",
    "100% private client-side processing",
    "No login or registration required",
  ];

  const faqs = [
    {
      q: "What is a WhatsApp chat generator?",
      a: "A WhatsApp chat generator is a web-based mockup builder that allows users to create simulated WhatsApp conversation screenshots. Marketers, UX designers, and content creators use it to build social proof visual assets, landing page testimonials, and educational materials.",
    },
    {
      q: "Is this WhatsApp chat creator free?",
      a: "Yes, our WhatsApp chat generator is completely free to use with no limits or signups.",
    },
    {
      q: "Can I customize the read ticks and timestamps?",
      a: "Yes, you can toggle single grey ticks, double grey ticks, or blue double read ticks, as well as customize individual message timestamps.",
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
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-200">
      <Script
        id="whatsapp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#075e54] via-[#128c7e] to-[#25d366] p-8 sm:p-12 shadow-2xl border border-emerald-500/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#25d366]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <MessageSquare size={13} className="text-emerald-200 animate-pulse" /> WhatsApp Chat Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            WhatsApp Chat Generator
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 leading-relaxed font-normal">
            Create realistic WhatsApp message screenshots and conversation mockups in seconds. Replicate WhatsApp's green chat interface with customizable contact names, blue ticks, timestamps, and voice note bubbles for storytelling and landing page visuals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">What is this Generator?</h3>
            </div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              The WhatsApp chat generator lets designers, marketers, and authors create simulated WhatsApp messaging threads matching standard WhatsApp iOS & Android UI layouts.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Prototyping Workflows</h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Ideal for website landing page customer chat testimonials, sales funnel visual mockups, social proof graphics, and storytelling videos.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            How to Create a WhatsApp Chat Mockup
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-[#F8FAFC] text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl font-extrabold text-[#F8FAFC]">Key Features</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-2 items-start">
              <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111827] border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-extrabold text-[#F8FAFC] text-base">Ethical Usage Policy</h4>
          <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
            This WhatsApp chat generator is strictly intended for UI design, social proof testimonials, and educational demonstrations. Generated chats are simulated. Do not use for impersonation or deceptive activity.
          </p>
        </div>
      </div>

      <div className="space-y-8 bg-[#111827] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[#1E293B] rounded-xl overflow-hidden shadow-sm bg-[#0B0F14]">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#1E293B]/50 transition-colors text-left cursor-pointer"
              >
                <span className="font-bold text-[#F8FAFC] text-sm sm:text-base leading-snug">{faq.q}</span>
                <HelpCircle size={18} className="text-slate-400 shrink-0 ml-2" />
              </button>

              {activeFaq === idx && (
                <div className="p-4 border-t border-[#1E293B] bg-[#0B0F14] text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
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
