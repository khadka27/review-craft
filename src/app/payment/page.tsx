import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { getPlatformIcon } from "@/components/SocialMediaIcons";
import { Sparkles, CreditCard, ChevronRight, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Receipt Generator — PayPal, Venmo, Zelle, Swish, BLIK & 25+ Apps",
  description:
    "Generate realistic payment receipt screenshots for PayPal, Venmo, Cash App, Zelle, Swish, Vipps, MobilePay, iDEAL, Bizum, BLIK, TWINT, Satispay, and 20+ global apps.",
  alternates: { canonical: "/payment" },
  openGraph: {
    title: "Payment Receipt Generator — 30+ Global Apps | ReviewCraft",
    description:
      "Create realistic payment confirmation screenshots for 30+ payment platforms across USA, Europe, Scandinavia, Middle East, and Asia.",
    url: "/payment",
    type: "website",
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
  region?: string;
}

const PAYMENT_PLATFORMS: PaymentPlatformInfo[] = [
  // ── Americas ─────────────────────────────────────────────────────────
  {
    name: "PayPal",
    slug: "paypal",
    subtitle: "Global Payment Receipt",
    description: "Generate realistic PayPal payment confirmation screenshots for global e-commerce, freelancing, and peer-to-peer payment mockups.",
    badge: "Global #1",
    accent: "from-[#003087] to-[#009CDE]",
    hoverGlow: "rgba(0,48,135,0.18)",
    region: "Americas · Global",
  },
  {
    name: "Venmo",
    slug: "venmo",
    subtitle: "Social Payment Feed",
    description: "Build mock Venmo receipts with social feed notes, liking actions, transaction comments, and @handles.",
    badge: "USA",
    accent: "from-[#008CFF] to-[#005FB8]",
    hoverGlow: "rgba(0,140,255,0.15)",
    region: "USA",
  },
  {
    name: "Cash App",
    slug: "cashapp",
    subtitle: "Cash App Transaction",
    description: "Create realistic green Cash App transaction screens with custom $cashtags, amounts, and web receipt links.",
    badge: "USA",
    accent: "from-[#00D64F] to-[#00A33C]",
    hoverGlow: "rgba(0,214,79,0.15)",
    region: "USA",
  },
  {
    name: "Zelle",
    slug: "zelle",
    subtitle: "Bank Transfer Receipt",
    description: "Generate authentic Zelle bank-to-bank transfer screenshots with confirmation codes and purple branding.",
    badge: "USA",
    accent: "from-[#6D1ED4] to-[#9b51e0]",
    hoverGlow: "rgba(109,30,212,0.15)",
    region: "USA",
  },
  {
    name: "Interac e-Transfer",
    slug: "interac",
    subtitle: "Canadian Bank Transfer",
    description: "Create realistic Interac e-Transfer receipt screenshots for Canadian banking UI prototypes with CAD amounts.",
    badge: "Canada",
    accent: "from-[#F5A623] to-[#E08E00]",
    hoverGlow: "rgba(245,166,35,0.15)",
    region: "Canada",
  },
  // ── Europe ───────────────────────────────────────────────────────────
  {
    name: "Apple Pay",
    slug: "applepay",
    subtitle: "Wallet Screenshot",
    description: "Generate authentic iOS Apple Pay transaction sheets and Apple Card cleared balances in high quality.",
    badge: "Global",
    accent: "from-black to-slate-800",
    hoverGlow: "rgba(255,255,255,0.1)",
    region: "Global",
  },
  {
    name: "Stripe",
    slug: "stripe",
    subtitle: "Payment Receipt",
    description: "Create authentic-looking Stripe payment confirmation screenshots for ecommerce websites and SaaS mockups.",
    badge: "API Standard",
    accent: "from-[#635bff] to-[#0a2540]",
    hoverGlow: "rgba(99,91,255,0.15)",
    region: "Global",
  },
  {
    name: "Wero",
    slug: "wero",
    subtitle: "Instant Payment",
    description: "Generate Wero instant payment receipt screenshots — the new European payment standard replacing PayLib in France & Netherlands.",
    badge: "France · NL",
    accent: "from-[#00B2A9] to-[#00D4CA]",
    hoverGlow: "rgba(0,178,169,0.15)",
    region: "France · Netherlands",
  },
  {
    name: "iDEAL",
    slug: "ideal",
    subtitle: "Dutch Bank Payment",
    description: "Create authentic iDEAL Dutch bank payment confirmation screenshots used by 10M+ Netherlands consumers daily.",
    badge: "Netherlands",
    accent: "from-[#0033A0] to-[#0066FF]",
    hoverGlow: "rgba(0,51,160,0.15)",
    region: "Netherlands",
  },
  {
    name: "Bancontact",
    slug: "bancontact",
    subtitle: "Belgian Payment",
    description: "Generate realistic Bancontact Belgian mobile payment receipt screenshots — Belgium's most-used payment method.",
    badge: "Belgium",
    accent: "from-[#005499] to-[#0080CC]",
    hoverGlow: "rgba(0,84,153,0.15)",
    region: "Belgium",
  },
  {
    name: "Bizum",
    slug: "bizum",
    subtitle: "Spanish Mobile Payment",
    description: "Create realistic Bizum Spanish instant payment screenshots — used by 25M+ Spanish bank customers.",
    badge: "Spain",
    accent: "from-[#0066CC] to-[#3399FF]",
    hoverGlow: "rgba(0,102,204,0.15)",
    region: "Spain",
  },
  {
    name: "Satispay",
    slug: "satispay",
    subtitle: "Italian Payment",
    description: "Generate authentic Satispay Italian mobile payment confirmation screenshots for fintech UI design.",
    badge: "Italy",
    accent: "from-[#FF4D00] to-[#FF7A40]",
    hoverGlow: "rgba(255,77,0,0.15)",
    region: "Italy",
  },
  {
    name: "BLIK",
    slug: "blik",
    subtitle: "Polish Payment",
    description: "Create realistic BLIK Polish bank payment screenshots — Poland's dominant mobile payment standard.",
    badge: "Poland",
    accent: "from-[#E91E63] to-[#F06292]",
    hoverGlow: "rgba(233,30,99,0.15)",
    region: "Poland",
  },
  {
    name: "MB WAY",
    slug: "mbway",
    subtitle: "Portuguese Payment",
    description: "Generate realistic MB WAY Portuguese mobile payment confirmation screenshots for fintech app mockups.",
    badge: "Portugal",
    accent: "from-[#ED1C24] to-[#FF5A5A]",
    hoverGlow: "rgba(237,28,36,0.15)",
    region: "Portugal",
  },
  {
    name: "TWINT",
    slug: "twint",
    subtitle: "Swiss Payment",
    description: "Create authentic TWINT Swiss mobile payment receipts — Switzerland's #1 payment app for CHF transactions.",
    badge: "Switzerland",
    accent: "from-[#111] to-[#444]",
    hoverGlow: "rgba(100,100,100,0.15)",
    region: "Switzerland",
  },
  // ── Scandinavia ──────────────────────────────────────────────────────
  {
    name: "Swish",
    slug: "swish",
    subtitle: "Swedish Payment",
    description: "Generate realistic Swish Swedish payment receipt screenshots — used by 8M+ Swedes for instant SEK transfers.",
    badge: "Sweden",
    accent: "from-[#E11D48] to-[#FB7185]",
    hoverGlow: "rgba(225,29,72,0.15)",
    region: "Sweden",
  },
  {
    name: "Vipps",
    slug: "vipps",
    subtitle: "Norwegian Payment",
    description: "Create authentic Vipps Norwegian mobile payment screenshots — Norway's dominant peer-to-peer payment app.",
    badge: "Norway",
    accent: "from-[#FF5B24] to-[#FF8C42]",
    hoverGlow: "rgba(255,91,36,0.15)",
    region: "Norway",
  },
  {
    name: "MobilePay",
    slug: "mobilepay",
    subtitle: "Nordic Payment",
    description: "Generate realistic MobilePay payment confirmation screenshots — used across Denmark and Finland.",
    badge: "Denmark · FI",
    accent: "from-[#5A4FCF] to-[#7B72E9]",
    hoverGlow: "rgba(90,79,207,0.15)",
    region: "Denmark · Finland",
  },
  // ── India & South Asia ───────────────────────────────────────────────
  {
    name: "Google Pay (GPay)",
    slug: "googlepay",
    subtitle: "GPay Transaction",
    description: "Create realistic Google Pay/GPay transaction success screens for design demos and prototypes.",
    accent: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
    hoverGlow: "rgba(66,133,244,0.15)",
    region: "Global",
  },
  {
    name: "Paytm",
    slug: "paytm",
    subtitle: "Success Receipt",
    description: "Generate realistic Paytm wallet success screenshots with custom amounts, transaction numbers, and receiver details.",
    badge: "India",
    accent: "from-[#00baf2] to-[#002e6e]",
    hoverGlow: "rgba(0,186,242,0.15)",
    region: "India",
  },
  {
    name: "PhonePe",
    slug: "phonepay",
    subtitle: "PhonePe Screenshot",
    description: "Generate beautiful PhonePe receipt mockups featuring Indian Rupees, sender bank maskings, and success status indicators.",
    badge: "India",
    accent: "from-[#5f259f] to-[#8c52ff]",
    hoverGlow: "rgba(95,37,159,0.15)",
    region: "India",
  },
  {
    name: "BHIM UPI",
    slug: "upi",
    subtitle: "UPI Receipt",
    description: "Generate realistic standard BHIM UPI successful receipts with custom reference IDs, UTRs, and sender names.",
    badge: "India UPI",
    accent: "from-[#ff9933] to-[#138808]",
    hoverGlow: "rgba(255,153,51,0.15)",
    region: "India",
  },
  {
    name: "Fonepay",
    slug: "fonepay",
    subtitle: "Nepal QR Receipt",
    description: "Generate realistic Fonepay payment screenshots for Nepalese market demonstrations, merchant names, and trace IDs.",
    badge: "Nepal",
    accent: "from-[#ed1c24] to-[#c1272d]",
    hoverGlow: "rgba(237,28,36,0.15)",
    region: "Nepal",
  },
  {
    name: "Google Wallet",
    slug: "googlewallet",
    subtitle: "Pass & Transaction",
    description: "Create realistic Google Wallet pass balances and card transaction summaries for modern mobile previews.",
    accent: "from-[#1a73e8] to-[#0d47a1]",
    hoverGlow: "rgba(26,115,232,0.15)",
    region: "Global",
  },
  // ── Middle East ──────────────────────────────────────────────────────
  {
    name: "STC Pay",
    slug: "stcpay",
    subtitle: "Saudi Mobile Payment",
    description: "Generate authentic STC Pay Saudi mobile payment receipt screenshots for Middle East fintech UI demos.",
    badge: "Saudi Arabia",
    accent: "from-[#6B2D8B] to-[#9B59B6]",
    hoverGlow: "rgba(107,45,139,0.15)",
    region: "Saudi Arabia",
  },
  {
    name: "KNET",
    slug: "knet",
    subtitle: "Kuwait Bank Payment",
    description: "Create realistic KNET Kuwaiti bank payment confirmation screenshots for Middle East fintech UI mockups.",
    badge: "Kuwait",
    accent: "from-[#007A3D] to-[#00A84F]",
    hoverGlow: "rgba(0,122,61,0.15)",
    region: "Kuwait",
  },
  // ── Africa ───────────────────────────────────────────────────────────
  {
    name: "PayShap",
    slug: "payshap",
    subtitle: "South Africa Instant Pay",
    description: "Create South African PayShap instant payment confirmation screenshots — the new RTP standard for ZAR transfers.",
    badge: "South Africa",
    accent: "from-[#00843D] to-[#00B84E]",
    hoverGlow: "rgba(0,132,61,0.15)",
    region: "South Africa",
  },
];

// Group platforms by region for SEO-rich section headings
const REGIONS = [
  { label: "🌎 Americas", filter: (p: PaymentPlatformInfo) => ["USA", "Canada", "Americas · Global"].some(r => p.region?.includes(r.split(" · ")[0])) },
  { label: "🇪🇺 Europe", filter: (p: PaymentPlatformInfo) => ["France", "Netherlands", "Belgium", "Spain", "Italy", "Poland", "Portugal", "Switzerland", "Global", "API Standard"].some(r => p.region?.includes(r)) && !["Americas", "USA", "Canada", "India", "Nepal", "Saudi", "Kuwait", "South Africa"].some(r => p.region?.includes(r)) },
  { label: "🌍 Scandinavia", filter: (p: PaymentPlatformInfo) => ["Sweden", "Norway", "Denmark", "Finland"].some(r => p.region?.includes(r)) },
  { label: "🇮🇳 India & South Asia", filter: (p: PaymentPlatformInfo) => ["India", "Nepal"].some(r => p.region?.includes(r)) },
  { label: "🌐 Middle East & Africa", filter: (p: PaymentPlatformInfo) => ["Saudi", "Kuwait", "Bahrain", "UAE", "South Africa"].some(r => p.region?.includes(r)) },
];

export default function PaymentPlatformsPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#0B0F14", fontFamily: "Inter, sans-serif", color: "#F8FAFC" }}
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
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={12} />
            <span>30+ Global Payment Platforms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Payment{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Receipt Generators
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Generate pixel-perfect payment receipt screenshots for PayPal, Venmo, Zelle, Swish, Vipps, MobilePay, iDEAL, BLIK, TWINT, Bizum, STC Pay, KNET, PayShap & 20+ more global apps. Custom amounts, dates, IDs — instant PNG export.
          </p>

          {/* Quick stats */}
          <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
            {[
              { n: "30+", label: "Payment Platforms" },
              { n: "35+", label: "Countries Covered" },
              { n: "100%", label: "Free & Private" },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col items-center px-5 py-3 rounded-xl bg-[#111827] border border-[#1E293B]">
                <span className="text-2xl font-black text-blue-400">{n}</span>
                <span className="text-xs text-[#64748B] font-semibold mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PAYMENT_PLATFORMS.map((platform) => (
            <Link
              key={platform.slug}
              href={`/payment/${platform.slug}`}
              id={`payment-platform-link-${platform.slug}`}
              className="group block relative rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%, ${platform.hoverGlow} 0%, transparent 60%)` }}
              />

              <div className="p-5 relative z-10 flex flex-col h-full min-h-[200px] justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center text-white overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      {getPlatformIcon(platform.slug, 26) || (
                        <CreditCard className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {platform.badge && (
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {platform.badge}
                        </span>
                      )}
                      {platform.region && (
                        <span className="text-[9px] text-[#475569] font-semibold flex items-center gap-0.5">
                          <Globe size={8} />
                          {platform.region}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-blue-500/80 font-semibold mb-2">{platform.subtitle}</p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                    {platform.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-blue-400 mt-4 group-hover:text-blue-300 transition-colors">
                  <span>Generate Receipt</span>
                  <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Region Table */}
        <div className="mb-12 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
            <Globe size={20} className="text-blue-400" />
            Payment Apps by Country & Region
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1E293B]">
                  <th className="text-left py-3 pr-6 text-[#64748B] font-bold text-xs uppercase tracking-wider">Market</th>
                  <th className="text-left py-3 text-[#64748B] font-bold text-xs uppercase tracking-wider">Top Payment Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { market: "🇺🇸 USA", apps: [["paypal","PayPal"], ["venmo","Venmo"], ["cashapp","Cash App"], ["zelle","Zelle"]] },
                  { market: "🇨🇦 Canada", apps: [["interac","Interac e-Transfer"]] },
                  { market: "🇬🇧 UK", apps: [["paypal","PayPal"], ["applepay","Apple Pay"]] },
                  { market: "🇩🇪 Germany", apps: [["paypal","PayPal"]] },
                  { market: "🇫🇷 France", apps: [["paypal","PayPal"], ["wero","Wero"]] },
                  { market: "🇳🇱 Netherlands", apps: [["ideal","iDEAL"], ["wero","Wero"]] },
                  { market: "🇧🇪 Belgium", apps: [["bancontact","Bancontact"]] },
                  { market: "🇪🇸 Spain", apps: [["bizum","Bizum"]] },
                  { market: "🇮🇹 Italy", apps: [["satispay","Satispay"]] },
                  { market: "🇵🇱 Poland", apps: [["blik","BLIK"]] },
                  { market: "🇵🇹 Portugal", apps: [["mbway","MB WAY"]] },
                  { market: "🇨🇭 Switzerland", apps: [["twint","TWINT"]] },
                  { market: "🇸🇪 Sweden", apps: [["swish","Swish"]] },
                  { market: "🇳🇴 Norway", apps: [["vipps","Vipps"]] },
                  { market: "🇩🇰 Denmark / 🇫🇮 Finland", apps: [["mobilepay","MobilePay"]] },
                  { market: "🇸🇦 Saudi Arabia", apps: [["applepay","Apple Pay"], ["stcpay","STC Pay"]] },
                  { market: "🇰🇼 Kuwait", apps: [["knet","KNET"], ["applepay","Apple Pay"]] },
                  { market: "🇦🇺 Australia / 🇳🇿 NZ", apps: [["applepay","Apple Pay"], ["paypal","PayPal"]] },
                  { market: "🇿🇦 South Africa", apps: [["payshap","PayShap"], ["applepay","Apple Pay"]] },
                  { market: "🇮🇳 India", apps: [["googlepay","Google Pay"], ["phonepay","PhonePe"], ["paytm","Paytm"], ["upi","UPI"]] },
                ].map(({ market, apps }) => (
                  <tr key={market} className="border-b border-[#1E293B]/60 hover:bg-[#1E293B]/30 transition-colors">
                    <td className="py-3 pr-6 text-[#94A3B8] font-semibold whitespace-nowrap">{market}</td>
                    <td className="py-3">
                      <div className="flex flex-wrap gap-2">
                        {apps.map(([slug, label]) => (
                          <Link
                            key={slug}
                            href={`/payment/${slug}`}
                            className="text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 px-2.5 py-1 rounded-lg transition-all"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#111827] border border-yellow-500/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/25 rounded-xl text-yellow-500 shrink-0">
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-yellow-500 mb-1">⚠️ Responsible & Ethical Usage Notice</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                ReviewCraft's payment receipt generators are for design presentations, product mockups, and educational purposes only. Generating fake billing confirmations to deceive, defraud, or bypass verification is strictly illegal. Always act ethically and follow local laws regarding design materials.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
