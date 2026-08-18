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

export function UpiGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Input UPI VPA Details",
      desc: "Enter sender & receiver VPAs (e.g. user@okaxis), recipient name, and amount (₹).",
    },
    {
      step: "02",
      title: "Set Reference & UTR",
      desc: "Customize 12-digit UTR reference number, Transaction ID, and date/time stamp.",
    },
    {
      step: "03",
      title: "Select Banking Partner",
      desc: "Select SBI, HDFC, ICICI, Axis, or custom bank name with masked account number.",
    },
    {
      step: "04",
      title: "Export Mockup",
      desc: "Download the completed BHIM UPI payment confirmation mockup as PNG, WEBP, JPG, or PDF.",
    },
  ];

  const features = [
    "Authentic BHIM UPI tricolor branding theme",
    "Universal UPI 2.0 transaction layout simulation",
    "Editable 12-digit UTR and Transaction Ref ID",
    "Custom transaction amount in Indian Rupees (₹)",
    "Live instant canvas rendering engine",
    "High-resolution PNG, WEBP, JPG & PDF exports",
    "Optional EXIF metadata embedding",
    "Mobile frame preview mode",
    "100% private client-side processing",
    "No account creation required",
  ];

  const faqs = [
    {
      q: "What is a BHIM UPI receipt generator?",
      a: "A BHIM UPI receipt generator is a web-based design tool that creates simulated UPI payment confirmation screenshots. Designers, developers, and educators use it for wireframing, presentations, and educational workshops.",
    },
    {
      q: "Is this UPI payment generator free to use?",
      a: "Yes, our BHIM UPI mockup tool is completely free with no registration or hidden fees.",
    },
    {
      q: "Can I use generated UPI receipts for real payment proof?",
      a: "No. All generated content is strictly fictional and intended exclusively for visual design mockups, educational presentations, and software testing.",
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
        id="upi-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#ff9933] via-[#e65100] to-[#138808] p-8 sm:p-12 shadow-2xl border border-orange-500/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ff9933]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <CreditCard size={13} className="text-orange-200 animate-pulse" /> BHIM UPI Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            BHIM UPI Receipt Generator
          </h2>
          <p className="text-base sm:text-lg text-orange-100 leading-relaxed font-normal">
            Create realistic BHIM UPI payment success screenshots and transaction receipt mockups in seconds. Customize recipient names, VPAs, amounts in Indian Rupees (₹), UTR numbers, and bank details for UI presentations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-500/15 border border-orange-500/30 rounded-xl text-orange-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">What is this Generator?</h3>
            </div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              The BHIM UPI receipt builder is an online tool that lets designers and developers simulate Unified Payments Interface (UPI) transaction screens matching NPCI standard mobile UI specifications.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-500/15 border border-orange-500/30 rounded-xl text-orange-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Prototyping Workflows</h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Great for Indian fintech mobile app mockups, client pitch decks, payment verification testing, and UPI security education.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            How to Create a BHIM UPI Receipt Mockup
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl flex flex-col justify-between hover:border-orange-500/40 transition-all">
              <span className="text-xs font-extrabold text-orange-400 uppercase tracking-widest block mb-4">Step {s.step}</span>
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
          <div className="p-2.5 bg-orange-500/15 border border-orange-500/30 rounded-xl text-orange-400">
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
            This UPI receipt builder is strictly intended for UI design, educational presentations, and software demonstrations. Generated receipts are fictional. Do not use for fraudulent payment claims.
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
