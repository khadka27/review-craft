import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { getPlatformIcon } from "@/components/SocialMediaIcons";
import { Sparkles, CreditCard, ChevronRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Fake Payment Receipt Generator - ReviewCraft",
  description: "Create realistic payment receipt screenshots for GPay, Apple Pay, Stripe, Paytm, and more.",
  alternates: {
    canonical: "/payment",
  },
};

interface PaymentPlatformInfo {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  badge?: string;
  accent: string;
  hoverGlow: string;
}

const PAYMENT_PLATFORMS: PaymentPlatformInfo[] = [
  {
    name: "Paytm",
    slug: "paytm",
    subtitle: "Success Receipt",
    description: "Generate realistic Paytm wallet success screenshots with custom amounts, transaction numbers, and receiver details.",
    badge: "Popular",
    accent: "from-[#00baf2] to-[#002e6e]",
    hoverGlow: "rgba(0,186,242,0.15)",
  },
  {
    name: "Stripe",
    slug: "stripe",
    subtitle: "Payment Receipt",
    description: "Create authentic-looking Stripe payment confirmation screenshots for ecommerce websites and SaaS mockups.",
    badge: "API Standard",
    accent: "from-[#635bff] to-[#0a2540]",
    hoverGlow: "rgba(99,91,255,0.15)",
  },
  {
    name: "Google Pay (GPay)",
    slug: "googlepay",
    subtitle: "GPay Transaction",
    description: "Create realistic Google Pay/GPay transaction success screens for design demos and prototypes.",
    accent: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
    hoverGlow: "rgba(66,133,244,0.15)",
  },
  {
    name: "Google Wallet",
    slug: "googlewallet",
    subtitle: "Pass & Transaction",
    description: "Create realistic Google Wallet pass balances and card transaction summaries for modern mobile previews.",
    accent: "from-[#1a73e8] to-[#0d47a1]",
    hoverGlow: "rgba(26,115,232,0.15)",
  },
  {
    name: "Apple Pay",
    slug: "applepay",
    subtitle: "Wallet Screenshot",
    description: "Generate authentic iOS Apple Pay transaction sheets and Apple Card cleared balances in high quality.",
    accent: "from-black to-slate-800",
    hoverGlow: "rgba(255,255,255,0.1)",
  },
  {
    name: "Venmo",
    slug: "venmo",
    subtitle: "Social Payment Feed",
    description: "Build mock Venmo receipts with social feed notes, liking actions, transaction comments, and handles.",
    accent: "from-[#008CFF] to-[#005FB8]",
    hoverGlow: "rgba(0,140,255,0.15)",
  },
  {
    name: "BHIM UPI",
    slug: "upi",
    subtitle: "UPI Receipt",
    description: "Generate realistic standard BHIM UPI successful receipts with custom reference IDs, UTRs, and sender names.",
    badge: "India UPI",
    accent: "from-[#ff9933] to-[#138808]",
    hoverGlow: "rgba(255,153,51,0.15)",
  },
  {
    name: "PhonePe",
    slug: "phonepay",
    subtitle: "PhonePe Screenshot",
    description: "Generate beautiful PhonePe receipt mockups featuring Indian Rupees, sender bank maskings, and success status indicators.",
    accent: "from-[#5f259f] to-[#8c52ff]",
    hoverGlow: "rgba(95,37,159,0.15)",
  },
  {
    name: "Fonepay",
    slug: "fonepay",
    subtitle: "Fonepay Nepal Receipt",
    description: "Generate realistic Fonepay payment screenshots for Nepalese market demonstrations, merchant names, and trace IDs.",
    badge: "Nepal QR",
    accent: "from-[#ed1c24] to-[#c1272d]",
    hoverGlow: "rgba(237,28,36,0.15)",
  },
  {
    name: "Cash App",
    slug: "cashapp",
    subtitle: "Cash App Transaction",
    description: "Create realistic green Cash App transaction screens with custom $cashtags, amounts, and web receipt links.",
    accent: "from-[#00D64F] to-[#00A33C]",
    hoverGlow: "rgba(0,214,79,0.15)",
  },
];

export default function PaymentPlatformsPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#0B0F14", fontFamily: "Inter, sans-serif", color: "#F8FAFC" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Background ambient glow */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={12} />
            <span>Educational Tool Studio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Payment{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Receipt Generators
            </span>
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Generate realistic mobile payment receipt confirmation screenshots for major banking apps and gateways. Custom dates, transaction IDs, statuses, and sender details. Perfect for UI design, prototype validation, and educational mockups.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAYMENT_PLATFORMS.map((platform) => (
            <Link
              key={platform.slug}
              href={`/payment/${platform.slug}`}
              id={`payment-platform-link-${platform.slug}`}
              className="group block relative rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Inner card light glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${platform.hoverGlow} 0%, transparent 60%)`,
                }}
              />

              <div className="p-6 relative z-10 flex flex-col h-full min-h-[220px] justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center text-white overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      {getPlatformIcon(platform.slug, 28) || (
                        <CreditCard className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
                    {platform.badge && (
                      <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {platform.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-blue-500/80 font-semibold mb-3">
                    {platform.subtitle}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-blue-400 mt-6 group-hover:text-blue-300 transition-colors">
                  <span>Start Generating</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Educational Disclaimer Section */}
        <div className="mt-16 bg-[#111827] border border-yellow-500/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/25 rounded-xl text-yellow-500 shrink-0">
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-yellow-500 mb-1">
                ⚠️ Responsible & Ethical Usage Notice
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                ReviewCraft's Payment Receipt generators are engineered strictly for design presentations, product mockups, and educational purposes. Generating fake billing confirmations or receipt screenshots to deceive, defraud, or bypass verification is strictly illegal. Always act ethically and follow local laws regarding design materials.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
