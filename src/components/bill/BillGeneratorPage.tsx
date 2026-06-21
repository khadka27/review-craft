"use client";

import { useState, useEffect } from "react";
import { BillData, BillPlatform } from "@/types/bill";
import { BillForm } from "./BillForm";
import { BillPreview } from "./BillPreview";
import { Shield, Download, Sparkles, Zap, Lock } from "lucide-react";
import { downloadComponentAsImage } from "@/utils/export";

interface BillGeneratorPageProps {
  initialPlatform?: BillPlatform;
  lockPlatform?: boolean;
  heroTitle?: string;
  heroDescription?: string;
}

const DEFAULT_MOCK_DATA: Record<BillPlatform, BillData> = {
  amazon: {
    platform: "amazon",
    orderId: "408-9872134-8219382",
    orderDate: "Jun 18, 2026",
    invoiceDate: "Jun 19, 2026",
    invoiceNumber: "INV-28394819",
    paymentMethod: "Visa ending in 4821",
    sellerName: "Amazon.com Services LLC",
    sellerAddress: "410 Terry Ave N, Seattle, WA 98109, US",
    sellerTaxId: "TAX-92-09281",
    billingName: "Abish Khadka",
    billingAddress: "1044 Broad St, Suite 2A\nNewark, NJ 07102\nUnited States",
    shippingName: "Abish Khadka",
    shippingAddress: "1044 Broad St, Suite 2A\nNewark, NJ 07102\nUnited States",
    items: [
      {
        id: "amz-item-1",
        name: "Ring Video Doorbell (2024 release) - 1080p HD Video, Improved Motion Detection, Satin Nickel",
        price: "99.99",
        quantity: 1,
        sku: "B08N5N65X2",
        specifications: "Satin Nickel / Standard"
      },
      {
        id: "amz-item-2",
        name: "Echo Dot (5th Gen, 2022 release) with clock | Cloud Blue",
        price: "49.99",
        quantity: 2,
        sku: "B09B8V1LZ3",
        specifications: "Cloud Blue / 5th Generation"
      }
    ],
    shippingCost: "0.00",
    taxRate: "8.875",
    discount: "15.00",
    currencySymbol: "$",
    currencyCode: "USD",
    logoName: "amazon",
    logoExtension: ".com"
  },
  walmart: {
    platform: "walmart",
    orderId: "392817293817",
    orderDate: "Jun 17, 2026",
    invoiceDate: "Jun 17, 2026",
    invoiceNumber: "WM-9812739",
    paymentMethod: "Mastercard ending in 0922",
    sellerName: "Walmart.com",
    sellerAddress: "702 SW 8th St, Bentonville, AR 72716, US",
    sellerTaxId: "TX-829102",
    billingName: "Abish Khadka",
    billingAddress: "522 W End Ave, Apt 3\nNew York, NY 10024\nUnited States",
    shippingName: "Abish Khadka",
    shippingAddress: "522 W End Ave, Apt 3\nNew York, NY 10024\nUnited States",
    items: [
      {
        id: "wm-item-1",
        name: "Roku Express 4K+ Streaming Media Player with Voice Remote",
        price: "39.99",
        quantity: 1,
        sku: "592817",
        specifications: "Black / 4K Ultra HD"
      },
      {
        id: "wm-item-2",
        name: "Mainstays 20 inch Box 3-Speed Cooling Fan, Black",
        price: "21.84",
        quantity: 2,
        sku: "718291",
        specifications: "Black / 20-inch"
      }
    ],
    shippingCost: "5.99",
    taxRate: "8.25",
    discount: "5.00",
    currencySymbol: "$",
    currencyCode: "USD",
    logoName: "Walmart",
    logoExtension: ""
  },
  supplement: {
    platform: "supplement",
    orderId: "NUTR-20839",
    orderDate: "Jun 15, 2026",
    invoiceDate: "Jun 15, 2026",
    invoiceNumber: "VV-92810",
    paymentMethod: "Apple Pay",
    sellerName: "VitaVibe.com",
    sellerAddress: "VitaVibe Fulfillment Center, 1800 Health Parkway, Suite 100, Denver, CO 80202, US",
    sellerTaxId: "TAX-72-831920",
    billingName: "Abish Khadka",
    billingAddress: "382 Ocean Ave, Apt 5A\nJersey City, NJ 07305\nUnited States",
    shippingName: "Abish Khadka",
    shippingAddress: "382 Ocean Ave, Apt 5A\nJersey City, NJ 07305\nUnited States",
    items: [
      {
        id: "supp-item-1",
        name: "Optimum Nutrition Gold Standard 100% Whey Protein Powder",
        price: "74.99",
        quantity: 1,
        sku: "ON-WHEY-CHOC",
        specifications: "Double Rich Chocolate / 5 lbs"
      },
      {
        id: "supp-item-2",
        name: "Creatine Monohydrate Powder (Microized Supplement)",
        price: "29.99",
        quantity: 2,
        sku: "ON-CREA-UNFL",
        specifications: "Unflavored / 60 Servings"
      },
      {
        id: "supp-item-3",
        name: "Daily Multivitamin Pack for Men (Essential Nutrient Tablets)",
        price: "19.99",
        quantity: 1,
        sku: "VIT-M-DAILY",
        specifications: "90 Tablets"
      }
    ],
    shippingCost: "0.00",
    taxRate: "6.625",
    discount: "10.00",
    currencySymbol: "$",
    currencyCode: "USD",
    logoName: "VitaVibe",
    logoExtension: ".com"
  }
};

const US_NAMES = [
  "John Smith", "Emma Davis", "Michael Johnson", "Emily Watson", "Robert Miller", 
  "Sophia Martinez", "David Wilson", "Olivia Taylor", "William Anderson", "Isabella Thomas",
  "James Taylor", "Ava Robinson", "Joseph Harris", "Mia Clark", "Charles Lewis",
  "Amelia Walker", "Daniel Young", "Charlotte Allen", "Matthew King", "Abigail Scott",
  "Anthony Green", "Harper Baker", "Mark Adams", "Evelyn Carter", "Donald Mitchell"
];

const getRandomUSName = () => {
  return US_NAMES[Math.floor(Math.random() * US_NAMES.length)];
};

export function BillGeneratorPage({
  initialPlatform = "amazon",
  lockPlatform = false,
  heroTitle = "E-Commerce Bill Generator",
  heroDescription = "Generate realistic e-commerce invoice screenshots for Amazon, Walmart, and custom supplement stores. Fully customize items, shipping dates, amounts, and tax rates.",
}: BillGeneratorPageProps) {
  const [billData, setBillData] = useState<BillData>(DEFAULT_MOCK_DATA[initialPlatform]);
  const [isDownloading, setIsDownloading] = useState(false);

  // Sync state if initialPlatform changes and assign random names on mount/change to avoid hydration mismatch
  useEffect(() => {
    const randomName = getRandomUSName();
    setBillData({
      ...DEFAULT_MOCK_DATA[initialPlatform],
      billingName: randomName,
      shippingName: randomName,
    });
  }, [initialPlatform]);

  const handleDownload = async () => {
    setIsDownloading(true);
    // Export the component using export utility
    await downloadComponentAsImage(
      "bill-invoice-capture",
      `invoice-${billData.platform}-${Date.now()}`
    );
    setTimeout(() => setIsDownloading(false), 1500);
  };

  const updateBillData = (updates: Partial<BillData>) => {
    // If platform changes, load its default mock data
    if (updates.platform && updates.platform !== billData.platform) {
      const randomName = getRandomUSName();
      setBillData({
        ...DEFAULT_MOCK_DATA[updates.platform],
        billingName: randomName,
        shippingName: randomName,
      });
    } else {
      setBillData((prev) => ({ ...prev, ...updates } as BillData));
    }
  };

  const platformDisplayNames: Record<BillPlatform, string> = {
    amazon: "Amazon",
    walmart: "Walmart",
    supplement: "Supplement Store",
  };

  const platformName = platformDisplayNames[billData.platform];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0B0F14", fontFamily: "Inter, sans-serif" }}
    >
      {/* Grid overlay */}
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
        className="pointer-events-none fixed z-0"
        style={{
          top: "-120px",
          left: "-80px",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="pointer-events-none fixed z-0"
        style={{
          bottom: "-80px",
          right: "-80px",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* ──────────── Hero ──────────── */}
        <div className="mb-12 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
            style={{
              background: "rgba(37,99,235,0.1)",
              border: "1px solid rgba(37,99,235,0.25)",
              color: "#60a5fa",
            }}
          >
            <Sparkles size={13} />
            <span>Premium Invoice Mockup Studio</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight text-white"
          >
            Generate{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #10B981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {platformName}
            </span>{" "}
            Invoices
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-[#94A3B8]"
          >
            {heroDescription}
          </p>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Zap, label: "Live Calc Preview", color: "#facc15" },
              { icon: Lock, label: "No Server Uploads", color: "#34d399" },
              { icon: Shield, label: "Educational Templates", color: "#60a5fa" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/30 border border-[#1E293B] text-[#94A3B8]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <Icon size={14} style={{ color }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ──────────── 2-Column Grid Layout ──────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT Pane: Form Editor (5/12 width) ── */}
          <div
            className="xl:col-span-5 rounded-2xl overflow-hidden"
            style={{
              background: "#111827",
              border: "1px solid #1E293B",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.08), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Form header */}
            <div
              className="px-6 pt-6 pb-5 border-b border-[#1E293B]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-500/15 border border-blue-500/30"
                >
                  <Sparkles size={16} className="text-blue-400" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#F8FAFC]">
                    Invoice Customizer
                  </h2>
                  <p className="text-xs text-[#94A3B8]">
                    Configure billing terms and product details
                  </p>
                </div>
              </div>
            </div>

            {/* Form wrapper */}
            <div className="p-6">
              <BillForm
                billData={billData}
                onUpdate={updateBillData}
                showPlatformSelector={!lockPlatform}
              />
            </div>
          </div>

          {/* ── RIGHT Pane: Live Preview & Zoom Control (7/12 width) ── */}
          <div
            className="xl:col-span-7 rounded-2xl overflow-hidden xl:sticky xl:top-8"
            style={{
              background: "#111827",
              border: "1px solid #1E293B",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.08), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Preview header */}
            <div
              className="px-6 pt-6 pb-5 border-b border-[#1E293B]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-500/15 border border-blue-500/30"
                  >
                    <Download size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#F8FAFC]">
                      Bill Render View
                    </h2>
                    <p className="text-xs text-[#94A3B8]">
                      Dynamic document canvas rendering
                    </p>
                  </div>
                </div>

                {/* Export CTA Button */}
                <button
                  id="download-invoice-btn"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 text-white"
                  style={{
                    background: isDownloading ? "#1D4ED8" : "#2563EB",
                    boxShadow: "0 2px 12px rgba(37,99,235,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isDownloading) (e.currentTarget.style.background = "#1D4ED8");
                  }}
                  onMouseLeave={(e) => {
                    if (!isDownloading) (e.currentTarget.style.background = "#2563EB");
                  }}
                >
                  <Download size={14} className={isDownloading ? "animate-bounce" : ""} />
                  {isDownloading ? "Generating Image…" : "Download Receipt PNG"}
                </button>
              </div>
            </div>

            {/* Preview sheet wrapper */}
            <div className="p-6">
              <BillPreview billData={billData} />
            </div>
          </div>
        </div>

        {/* ──────────── Educational Notice ──────────── */}
        <div
          className="mt-12 rounded-2xl p-5 bg-amber-500/5 border border-amber-500/15"
        >
          <div className="flex gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-amber-500/10 border border-amber-500/25"
            >
              <Shield size={18} className="text-[#fbbf24]" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1 text-[#fcd34d]">
                ⚠️ Ethical & Design Material Disclaimer
              </h3>
              <p className="text-sm leading-relaxed text-[#fcd34d]/60">
                This receipt mockup editor is designed solely for **UI/UX prototyping, design demonstrations, and educational design purposes**. Producing mock invoices or bills to masquerade as authentic vendor papers, claiming unpaid transactions, or deceiving financial organizations is **strictly prohibited**. Please review local state and federal codes regarding invoice representation.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
