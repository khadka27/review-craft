"use client";

import { useState } from "react";
import {
  CreditCard,
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

export function PaytmGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Input Payment Data",
      desc: "Enter Paytm order details, receiver name, mobile number or UPI ID, and amount (₹).",
    },
    {
      step: "02",
      title: "Set Transaction Info",
      desc: "Customize Paytm Wallet / UPI Order ID, reference number, and date/time stamp.",
    },
    {
      step: "03",
      title: "Configure Wallet Status",
      desc: "Set transaction status to Success, Pending, or Failed, and add custom payment notes.",
    },
    {
      step: "04",
      title: "Download Mockup",
      desc: "Export your Paytm payment receipt mockup as PNG, WEBP, JPG, or PDF file.",
    },
  ];

  const features = [
    "Authentic Paytm cyan & navy color theme",
    "Paytm Wallet & UPI transaction layouts",
    "Editable Order ID and reference numbers",
    "Custom transaction amount in Indian Rupees (₹)",
    "Instant live canvas preview",
    "High-resolution PNG, WEBP, JPG & PDF exports",
    "Optional EXIF metadata embedding",
    "Mobile frame device preview",
    "100% in-browser private generation",
    "No registration or software needed",
  ];

  const faqs = [
    {
      q: "What is a Paytm receipt generator?",
      a: "A Paytm receipt generator is a web design tool for creating simulated Paytm payment confirmation screenshots. Designers and developers use it to test checkout flows, create pitch decks, and present fintech prototypes.",
    },
    {
      q: "Is this Paytm payment mockup tool free?",
      a: "Yes, our Paytm receipt generator is completely free to use without signups or hidden charges.",
    },
    {
      q: "Can I use generated Paytm receipts for real commercial transactions?",
      a: "No. All generated receipts are strictly fictional and intended for UI/UX wireframing, client presentations, and educational workshops only.",
    },
    {
      q: "What export formats are supported?",
      a: "You can download mockups in PNG, WEBP, JPG, or vector PDF format with optional EXIF metadata.",
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
        id="paytm-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#002e6e] via-[#0084c7] to-[#00baf2] p-8 sm:p-12 shadow-2xl border border-sky-600/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00baf2]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <CreditCard size={13} className="text-sky-300 animate-pulse" /> Paytm Receipt Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Paytm Receipt Generator
          </h2>
          <p className="text-base sm:text-lg text-sky-100 leading-relaxed font-normal">
            Create realistic Paytm transaction success screenshots and wallet receipt mockups in seconds. Replicate Paytm's payment confirmation UI with customizable amounts, recipient names, order IDs, and timestamps for UI/UX presentations and app demos.
          </p>
        </div>
      </div>

      {/* Grid: Overview & Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-500/15 border border-sky-500/30 rounded-xl text-sky-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">What is this Generator?</h3>
            </div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              The Paytm receipt generator is a visual prototyping tool built for web designers, app developers, marketers, and educators. It renders realistic simulated Paytm transaction screens matching standard Paytm mobile interface guidelines.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-500/15 border border-sky-500/30 rounded-xl text-sky-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Prototyping Workflows</h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Ideal for fintech app wireframes, e-commerce checkout demos, client pitch presentations, and educational digital payment security demonstrations.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            How to Create a Paytm Receipt Mockup
          </h3>
          <p className="text-[#94A3B8] text-sm">
            Generate custom Paytm payment screenshots in four easy steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl flex flex-col justify-between hover:border-sky-500/40 transition-all">
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-[#F8FAFC] text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-500/15 border border-sky-500/30 rounded-xl text-sky-400">
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

      {/* Disclaimer */}
      <div className="bg-[#111827] border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-extrabold text-[#F8FAFC] text-base">Ethical Usage Policy</h4>
          <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
            This Paytm receipt builder is designed strictly for UI design, educational demonstrations, and software presentations. All content is simulated. Do not use generated receipts for fraudulent activities.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
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
