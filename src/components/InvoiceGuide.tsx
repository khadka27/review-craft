"use client";

import { useState } from "react";
import {
  FileText,
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

export function InvoiceGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Input Vendor Details",
      desc: "Enter vendor or store name, logo, invoice number, and order date.",
    },
    {
      step: "02",
      title: "Add Purchased Items",
      desc: "Customize item descriptions, quantities, unit prices, subtotal, tax, and shipping costs.",
    },
    {
      step: "03",
      title: "Configure Customer Address",
      desc: "Add shipping address, billing address, and payment method details.",
    },
    {
      step: "04",
      title: "Export Document",
      desc: "Download your completed invoice or bill mockup as PDF, PNG, WEBP, or JPG.",
    },
  ];

  const features = [
    "Authentic Amazon, Walmart & e-commerce invoice templates",
    "Automatic subtotal, tax, and total calculation math",
    "Editable order number, invoice ID, and date stamps",
    "Custom line items with quantities and unit prices",
    "Live instant canvas rendering engine",
    "Vector PDF, PNG, WEBP & JPG export options",
    "Optional EXIF metadata embedding",
    "100% private in-browser generation",
    "No signups or software installation required",
  ];

  const faqs = [
    {
      q: "What is an e-commerce invoice generator?",
      a: "An e-commerce invoice generator is an online design tool for creating simulated purchase receipts and invoices. UI designers, app developers, and store owners use it for wireframing checkout flows, building presentation decks, and product demos.",
    },
    {
      q: "Is this bill generator free to use?",
      a: "Yes, our invoice generator is 100% free with no registration.",
    },
    {
      q: "Can I use generated invoices as official tax documents?",
      a: "No. All generated invoices are strictly fictional and intended for visual prototyping, design wireframing, and software testing only.",
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
        id="invoice-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] p-8 sm:p-12 shadow-2xl border border-slate-700/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <FileText size={13} className="text-blue-300 animate-pulse" /> Invoice & Bill Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Invoice & Bill Receipt Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Create realistic Amazon, Walmart, and custom e-commerce invoice mockups in seconds. Replicate authentic order confirmation documents with customizable line items, tax, shipping costs, and customer addresses for design wireframes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/15 border border-blue-500/30 rounded-xl text-blue-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">What is this Generator?</h3>
            </div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              The invoice generator allows web developers, store managers, and UI designers to create simulated receipt documents matching real e-commerce order confirmation standards.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/15 border border-blue-500/30 rounded-xl text-blue-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Prototyping Workflows</h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Great for e-commerce checkout design testing, client presentation decks, SaaS billing UI mockups, and accounting software demos.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            How to Create an Invoice Mockup
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl flex flex-col justify-between hover:border-blue-500/40 transition-all">
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest block mb-4">Step {s.step}</span>
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
          <div className="p-2.5 bg-blue-500/15 border border-blue-500/30 rounded-xl text-blue-400">
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
            This invoice generator is strictly intended for UI design, educational presentations, and software demonstrations. Generated invoices are fictional. Do not use for fraudulent tax claims or commercial deception.
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
