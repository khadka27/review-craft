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

export function PhonePeGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Input Payment Details",
      desc: "Enter recipient name, UPI ID (e.g. name@ybl), and transaction amount in Indian Rupees (₹).",
    },
    {
      step: "02",
      title: "Set Reference Numbers",
      desc: "Customize transaction ID (TXN...), UTR reference number, and date/time stamp.",
    },
    {
      step: "03",
      title: "Configure Bank Info",
      desc: "Select sender bank name (e.g. State Bank of India), masked account number, and transaction status.",
    },
    {
      step: "04",
      title: "Export Mockup",
      desc: "Download the completed PhonePe receipt mockup as a high-resolution PNG, WEBP, JPG, or PDF file.",
    },
  ];

  const features = [
    "Authentic PhonePe UPI theme",
    "Custom transaction amount & currency (₹)",
    "Editable UTR and Transaction ID",
    "Sender and Receiver banking details",
    "Verified banking name checkmark badge",
    "Live instant canvas rendering",
    "High-definition image and PDF exports",
    "Optional EXIF metadata embedding",
    "Responsive mobile device bezel preview",
    "100% private in-browser generation",
  ];

  const useCases = [
    {
      title: "Fintech App UI Design",
      desc: "Product designers use PhonePe receipt mockups to test payment confirmation screens and wallet transaction flows.",
      badge: "UI Prototyping",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    },
    {
      title: "E-Commerce Mockups",
      desc: "Storefront developers display simulated PhonePe payment confirmation screens in checkout presentation decks.",
      badge: "E-Commerce",
      color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    },
    {
      title: "Educational Workshops",
      desc: "Digital literacy educators use simulated payment visuals to teach online security and UPI transaction safety.",
      badge: "Education",
      color: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    },
    {
      title: "Client Presentations",
      desc: "Marketing agencies incorporate realistic UPI receipt screenshots into client pitch decks and product demos.",
      badge: "Presentations",
      color: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    },
  ];

  const faqs = [
    {
      q: "What is a PhonePe receipt generator?",
      a: "A PhonePe receipt generator is a web-based design tool that creates simulated PhonePe UPI transaction confirmation screenshots. It allows designers, developers, and educators to customize payment details, receiver names, transaction IDs, and amounts for prototyping and demonstration purposes.",
    },
    {
      q: "Is this PhonePe payment generator free to use?",
      a: "Yes, our PhonePe UPI receipt builder is 100% free to use with no account creation or subscription required. You can generate and download unlimited transaction mockups directly from your web browser.",
    },
    {
      q: "Can I use generated PhonePe receipts for real payment proof?",
      a: "No. All generated content is strictly fictional and simulated. Generated receipts must never be used to misrepresent commercial activity, create fake payment proof, or deceive individuals.",
    },
    {
      q: "What file formats can I download the receipt in?",
      a: "You can export generated PhonePe receipts in PNG, WEBP, JPG image formats, or as a crisp vector PDF document. You can also toggle EXIF metadata embedding for high-fidelity design testing.",
    },
    {
      q: "Can I customize the UTR and Transaction ID?",
      a: "Yes, you can edit the Transaction ID, UTR reference number, timestamp, sender bank name, receiver UPI ID, and payment note to match your wireframe or project requirements.",
    },
    {
      q: "Do I need to sign up or install software?",
      a: "No. The generator runs entirely inside your web browser. There is no software installation, app download, or user registration needed.",
    },
    {
      q: "Is my payment data safe when using this tool?",
      a: "Yes. All data processing occurs locally in your browser. No sensitive financial information or generated images are uploaded or stored on external servers.",
    },
    {
      q: "Does the generator support Indian Rupees (₹)?",
      a: "Yes, the PhonePe receipt generator natively formats currency in Indian Rupees (₹) with standard Indian numbering formats (e.g. ₹500.00).",
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
        id="phonepe-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner with PhonePe Purple Theme */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#3b1566] via-[#5f259f] to-[#7b2cbf] p-8 sm:p-12 shadow-2xl border border-purple-700/60">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#8c52ff]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <CreditCard size={13} className="text-purple-300 animate-pulse" /> PhonePe Receipt Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            PhonePe Receipt Generator
          </h2>
          <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
            Create realistic PhonePe payment success screenshots and UPI transaction receipt mockups in seconds. Replicate PhonePe's transaction confirmation UI with customizable amounts, recipient names, bank details, UTR reference numbers, and timestamps for UI/UX presentations, client demos, and educational workshops.
          </p>
        </div>
      </div>

      {/* Grid: Overview & Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Overview */}
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/15 border border-purple-500/30 rounded-xl text-purple-400">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">What is this Generator?</h3>
            </div>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              The PhonePe receipt mockup generator is an online design tool built for web designers, app developers, marketers, and educators. It renders authentic simulated PhonePe payment confirmation screens matching standard mobile UI guidelines.
            </p>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              Easily customize transaction attributes including receiver VPA, amount in Indian Rupees (₹), transaction IDs, sender bank names, and date stamps without needing advanced graphics software.
            </p>
          </div>
        </div>

        {/* Prototyping Capabilities */}
        <div className="lg:col-span-6 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/15 border border-purple-500/30 rounded-xl text-purple-400">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Prototyping Capabilities</h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Our PhonePe UI builder supports multiple design and educational workflows:
            </p>
            <div className="space-y-3 pt-1">
              {[
                "Fintech UI Wireframes: Test mobile payment confirmation screens and checkout UI flows.",
                "E-Commerce Pitch Decks: Show realistic payment options to stakeholders in store mockups.",
                "Security Workshops: Demonstrate online transaction verification features safely.",
                "Client Demonstrations: Present high-fidelity visual proofs for app integration demos.",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-purple-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Steps: How It Works */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            How to Create a PhonePe Receipt Mockup
          </h3>
          <p className="text-[#94A3B8] text-sm">
            Generating a custom PhonePe transaction screenshot takes only four simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all">
              <span className="text-xs font-extrabold text-purple-400 uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-[#F8FAFC] text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Features & Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Features List */}
        <div className="lg:col-span-7 bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#1E293B] flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/15 border border-purple-500/30 rounded-xl text-purple-400">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC]">Key Features</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#1e1035] to-[#2e1354] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-800/60 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-purple-400/30 bg-purple-500/20 text-purple-300">
              Why Choose ReviewCraft
            </span>
            <h3 className="text-xl font-extrabold text-white">Fast, Browser-Based & High Precision</h3>
            <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
              Eliminate hours of manual pixel editing in graphic design programs. ReviewCraft’s live rendering engine automatically generates sharp, aligned, pixel-perfect PhonePe receipts instantly.
            </p>
            <div className="space-y-2 pt-2 text-xs text-purple-300 font-medium">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-yellow-400" /> Instant dynamic canvas rendering
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={14} className="text-emerald-400" /> Mobile frame preview mode
              </div>
              <div className="flex items-center gap-2">
                <Copy size={14} className="text-blue-400" /> Direct clipboard copy & multi-format exports
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Cards */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            Professional Use Cases
          </h3>
          <p className="text-[#94A3B8] text-sm">
            Empowering designers, developers, and educators with high-quality visual prototypes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => (
            <div key={idx} className="bg-[#111827] rounded-2xl p-5 border border-[#1E293B] shadow-xl flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-all duration-300">
              <div className="space-y-2">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${uc.color}`}>
                  {uc.badge}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC]">{uc.title}</h4>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethical Disclaimer */}
      <div className="bg-[#111827] border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-extrabold text-[#F8FAFC] text-base">Ethical Usage Policy & Disclaimer</h4>
          <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
            This PhonePe receipt generator is built exclusively for visual prototyping, user interface testing, client pitch presentations, software demonstrations, and educational workshops. All generated content is fictional. Do not use generated receipts to commit fraud, misrepresent financial transactions, or engage in deceptive activities.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-8 bg-[#111827] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            Frequently Asked Questions
          </h3>
          <p className="text-[#94A3B8] text-sm">
            Everything you need to know about our PhonePe payment receipt mockup generator:
          </p>
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
