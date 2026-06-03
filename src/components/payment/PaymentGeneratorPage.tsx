"use client";

import { useState } from "react";
import { TransactionData, PaymentPlatform } from "@/types/payment";
import { PaymentForm } from "./PaymentForm";
import { PaymentPreview } from "./PaymentPreview";
import { Shield, Download, Sparkles, Zap, Lock, ChevronRight } from "lucide-react";
import { downloadComponentAsImage } from "@/utils/export";

interface PaymentGeneratorPageProps {
  initialPlatform?: PaymentPlatform;
  lockPlatform?: boolean;
  heroTitle?: string;
  heroDescription?: string;
  theme?: {
    pageGradient: string;
    heroGradient: string;
    heroDescriptionColor: string;
  };
}

const getRealisticDefaultTimestamp = () => {
  const d = new Date();
  const day = d.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const time = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
  return `${day} ${month} ${year}, ${time}`;
};

export function PaymentGeneratorPage({
  initialPlatform = "paytm",
  lockPlatform = false,
  heroTitle = "Payment Receipt Generator",
  heroDescription = "Create realistic payment confirmation screenshots for Paytm, Stripe, Google Pay, and more. Perfect for mockups and UI demonstrations.",
  theme,
}: PaymentGeneratorPageProps) {
  const [paymentData, setPaymentData] = useState<TransactionData>({
    id: "1",
    platform: initialPlatform,
    amount: "500.00",
    currency: "INR",
    senderName: "Abish Khadka",
    receiverName: "ReviewCraft Store",
    timestamp: getRealisticDefaultTimestamp(),
    transactionId: "TXN" + Math.random().toString(36).substring(2, 10).toUpperCase(),
    status: "success",
    note: "Payment for subscription",
  });

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    await downloadComponentAsImage(
      "payment-receipt-capture",
      `payment-${paymentData.platform}-${Date.now()}`
    );
    setTimeout(() => setIsDownloading(false), 1500);
  };

  const updatePaymentData = (updates: Partial<TransactionData>) => {
    setPaymentData((prev) => ({ ...prev, ...updates }));
  };

  const platformDisplayNames: Record<string, string> = {
    paytm: "Paytm",
    stripe: "Stripe",
    googlepay: "Google Pay",
    upi: "UPI",
    phonepay: "PhonePe",
    phonepe: "PhonePe",
    gpay: "GPay",
    bhim: "BHIM",
    googlewallet: "Google Wallet",
    applepay: "Apple Pay",
    venmo: "Venmo",
    fonepay: "Fonepay",
    cashapp: "Cash App",
  };

  const platformName = platformDisplayNames[paymentData.platform] || paymentData.platform;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0B0F14", fontFamily: "Inter, sans-serif" }}
    >
      {/* ── Subtle noise / grid overlay ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow spots */}
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
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ──────────── Hero ──────────── */}
        <div className="mb-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
            style={{
              background: "rgba(37,99,235,0.1)",
              border: "1px solid rgba(37,99,235,0.25)",
              color: "#60a5fa",
            }}
          >
            <Sparkles size={13} />
            <span>Free Payment Receipt Generator</span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight"
            style={{ color: "#F8FAFC" }}
          >
            Generate{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {platformName}
            </span>{" "}
            Receipts
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: "#94A3B8" }}
          >
            {heroDescription}
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Zap, label: "Instant Generation", color: "#facc15" },
              { icon: Lock, label: "100% Private", color: "#34d399" },
              { icon: Shield, label: "Educational Use", color: "#60a5fa" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid #1E293B",
                  color: "#94A3B8",
                }}
              >
                <Icon size={14} style={{ color }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ──────────── 2-Column Layout ──────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">

          {/* ── LEFT: Form Card ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#111827",
              border: "1px solid #1E293B",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.08), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Card header */}
            <div
              className="px-6 pt-6 pb-5"
              style={{ borderBottom: "1px solid #1E293B" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  <Sparkles size={16} style={{ color: "#60a5fa" }} />
                </div>
                <div>
                  <h2 className="text-base font-bold" style={{ color: "#F8FAFC" }}>
                    Transaction Details
                  </h2>
                  <p className="text-xs" style={{ color: "#94A3B8" }}>
                    Customize your receipt below
                  </p>
                </div>
              </div>
            </div>

            {/* Form body */}
            <div className="p-6">
              <PaymentForm
                paymentData={paymentData}
                onUpdate={updatePaymentData}
                showPlatformSelector={!lockPlatform}
              />
            </div>
          </div>

          {/* ── RIGHT: Preview Card ── */}
          <div
            className="rounded-2xl overflow-hidden xl:sticky xl:top-8"
            style={{
              background: "#111827",
              border: "1px solid #1E293B",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.08), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Card header */}
            <div
              className="px-6 pt-6 pb-5"
              style={{ borderBottom: "1px solid #1E293B" }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.15)",
                      border: "1px solid rgba(37,99,235,0.3)",
                    }}
                  >
                    <Download size={16} style={{ color: "#60a5fa" }} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold" style={{ color: "#F8FAFC" }}>
                      Live Preview
                    </h2>
                    <p className="text-xs" style={{ color: "#94A3B8" }}>
                      Changes reflect instantly
                    </p>
                  </div>
                </div>

                {/* Download button */}
                <button
                  id="download-receipt-btn"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-60"
                  style={{
                    background: isDownloading ? "#1D4ED8" : "#2563EB",
                    color: "#F8FAFC",
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
                  {isDownloading ? "Downloading…" : "Download"}
                </button>
              </div>
            </div>

            {/* Preview area */}
            <div className="p-6">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.07) 0%, rgba(11,15,20,0.6) 70%)",
                  border: "1px solid #1E293B",
                }}
              >
                <div className="flex justify-center p-6 md:p-10 max-h-[640px] overflow-auto">
                  <PaymentPreview paymentData={paymentData} />
                </div>
              </div>

              <div
                className="mt-4 flex items-center justify-center gap-1.5 text-xs"
                style={{ color: "#475569" }}
              >
                <ChevronRight size={11} />
                <span>High-quality PNG • Mobile size • No watermark</span>
              </div>
            </div>
          </div>
        </div>

        {/* ──────────── Disclaimer ──────────── */}
        <div
          className="mt-10 rounded-2xl p-5"
          style={{
            background: "rgba(234,179,8,0.05)",
            border: "1px solid rgba(234,179,8,0.15)",
          }}
        >
          <div className="flex gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(234,179,8,0.1)",
                border: "1px solid rgba(234,179,8,0.25)",
              }}
            >
              <Shield size={18} style={{ color: "#fbbf24" }} />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1" style={{ color: "#fcd34d" }}>
                ⚠️ Ethical Use Disclaimer
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(253,211,77,0.55)" }}>
                This tool is strictly for{" "}
                <strong style={{ color: "rgba(253,211,77,0.8)" }}>
                  educational and professional design purposes
                </strong>
                . Creating fake payment receipts to deceive others or for fraudulent activities is
                illegal and strictly prohibited. Always use these mockups responsibly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
