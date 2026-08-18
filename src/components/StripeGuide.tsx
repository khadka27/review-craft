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

export function StripeGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Input Charge Details",
      desc: "Enter customer email, charge description, amount ($/€/£), and payment status.",
    },
    {
      step: "02",
      title: "Set Transaction ID",
      desc: "Customize Stripe Charge ID (ch_...), PaymentIntent (pi_...), and receipt number.",
    },
    {
      step: "03",
      title: "Select Card Brand",
      desc: "Choose Visa, Mastercard, AMEX, or Discover with custom last 4 digits.",
    },
    {
      step: "04",
      title: "Export Screenshot",
      desc: "Download the completed Stripe payment confirmation mockup as PNG, WEBP, JPG, or PDF.",
    },
  ];

  const features = [
    "Authentic Stripe indigo dashboard theme",
    "Support for USD ($), EUR (€), GBP (£), and INR (₹)",
    "Editable Stripe Charge ID and PaymentIntent ID",
    "Masked credit card details (•••• 4242)",
    "Live instant canvas rendering",
    "PNG, WEBP, JPG, and PDF export options",
    "Optional EXIF metadata embedding",
    "Responsive mobile device preview",
    "100% private browser processing",
    "No login or subscription required",
  ];

  const faqs = [
    {
      q: "What is a Stripe payment receipt generator?",
      a: "A Stripe payment receipt generator is a web prototyping tool that creates realistic simulated Stripe dashboard confirmation receipts. Developers, SaaS founders, and UI designers use it to build sales funnel demos and invoice wireframes.",
    },
    {
      q: "Is this Stripe payment generator free?",
      a: "Yes, our Stripe payment mockup tool is 100% free with no account creation required.",
    },
    {
      q: "Can I use generated Stripe receipts for actual billing?",
      a: "No. All generated receipts are strictly fictional and intended exclusively for visual design mockups, educational presentations, and software testing.",
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
        id="stripe-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#0a2540] via-[#635bff] to-[#7a73ff] p-8 sm:p-12 shadow-2xl border border-indigo-500/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#635bff]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <CreditCard size={13} className="text-indigo-300 animate-pulse" /> Stripe Checkout Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Stripe Payment Generator
          </h2>
          <p className="text-base sm:text-lg text-indigo-100 leading-relaxed font-normal">
            Create authentic Stripe payment confirmation screenshots and invoice mockups in seconds. Replicate Stripe's checkout interface with customizable amounts, customer emails, card brands, and transaction IDs for SaaS presentations and e-commerce pitch decks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/15 border border-indigo-500/30 rounded-xl text-indigo-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">What is this Generator?</h3>
            </div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              The Stripe payment mockup generator lets designers and founders simulate payment receipts matching Stripe's clean web and mobile UI standards.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/15 border border-indigo-500/30 rounded-xl text-indigo-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Prototyping Workflows</h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Perfect for SaaS pitch decks, payment gateway integration testing, wireframes, and customer support training materials.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            How to Create a Stripe Payment Mockup
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl flex flex-col justify-between hover:border-indigo-500/40 transition-all">
              <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest block mb-4">Step {s.step}</span>
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
          <div className="p-2.5 bg-indigo-500/15 border border-indigo-500/30 rounded-xl text-indigo-400">
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
            This Stripe receipt builder is strictly intended for UI/UX wireframes, educational workshops, and software demonstrations. Generated receipts are fictional and must not be used for illegal billing deception.
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
