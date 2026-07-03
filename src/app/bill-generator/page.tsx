import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Sparkles, FileText, ChevronRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Fake Invoice & Bill Generator - ReviewCraft",
  description: "Create realistic billing confirmation and receipt screenshots for Amazon, Walmart, and custom products.",
  alternates: {
    canonical: "/bill-generator",
  },
};

interface BillPlatformInfo {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  badge?: string;
  accent: string;
  hoverGlow: string;
}

const BILL_PLATFORMS: BillPlatformInfo[] = [
  {
    name: "Amazon Invoice",
    slug: "amazon",
    subtitle: "Official order invoice PDF layout",
    description: "Generate highly realistic Amazon Order Invoice details including shipping, billing, item listings, ASIN details, tax estimates, and totals.",
    badge: "Most Popular",
    accent: "from-[#FF9900] to-[#111111]",
    hoverGlow: "rgba(255,153,0,0.15)",
  },
  {
    name: "Walmart Invoice",
    slug: "walmart",
    subtitle: "Online order confirmation layout",
    description: "Create Walmart e-commerce invoices with accurate Walmart spark branding, barcode details, UPC/SKU listings, and delivery statuses.",
    badge: "Official Style",
    accent: "from-[#0071dc] to-[#ffc220]",
    hoverGlow: "rgba(0,113,220,0.15)",
  },
  {
    name: "Supplement Receipt",
    slug: "supplement",
    subtitle: "Premium vitamins & supplements receipt",
    description: "Create clean invoices tailored for health shops (like GNC or iHerb) including fields for flavors/sizes, batch numbers, and FDA disclaimers.",
    badge: "Healthcare",
    accent: "from-[#10B981] to-[#047857]",
    hoverGlow: "rgba(16,185,129,0.15)",
  },
];

export default function BillPlatformsPage() {
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
      {/* Background ambient glows */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={12} />
            <span>Educational Tool Studio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            E-Commerce{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Bill Generators
            </span>
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Generate pixel-perfect print-ready e-commerce order invoices and receipts. Enter customer details, add dynamic product line items, configure taxes, and download high-resolution receipt images. Ideal for UI mockup prototyping and sales materials testing.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BILL_PLATFORMS.map((platform) => (
            <Link
              key={platform.slug}
              href={`/bill-generator/${platform.slug}`}
              id={`bill-platform-link-${platform.slug}`}
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

              <div className="p-6 relative z-10 flex flex-col h-full min-h-[240px] justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center text-white overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-blue-400" />
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
                  <span>Start Editing Invoice</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Responsible Disclaimer Section */}
        <div className="mt-16 bg-[#111827] border border-yellow-500/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/25 rounded-xl text-yellow-500 shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-yellow-500 mb-1">
                ⚠️ Responsible & Ethical Usage Notice
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                ReviewCraft's Invoice and Bill generators are engineered strictly for design presentations, product UI/UX mockups, and educational purposes. Generating fake billing confirmations or receipt screenshots to deceive, bypass verification, avoid taxes, or for fraudulent activities is strictly illegal. Always act ethically and follow local laws regarding design materials.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
