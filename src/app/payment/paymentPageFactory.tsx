import { PaymentGeneratorPage } from "@/components/payment/PaymentGeneratorPage";
import { PaymentPlatform, PaymentPageTheme } from "@/types/payment";
import { PhonePeGuide } from "@/components/PhonePeGuide";
import { PaytmGuide } from "@/components/PaytmGuide";
import { StripeGuide } from "@/components/StripeGuide";
import { GooglePayGuide } from "@/components/GooglePayGuide";
import { UpiGuide } from "@/components/UpiGuide";
import { ApplePayGuide } from "@/components/ApplePayGuide";
import { VenmoGuide } from "@/components/VenmoGuide";
import { FonepayGuide } from "@/components/FonepayGuide";
import { CashAppGuide } from "@/components/CashAppGuide";

const paymentPlatformMeta: Record<
  PaymentPlatform,
  { name: string; description: string; theme: PaymentPageTheme }
> = {
  paytm: {
    name: "Paytm Receipt Generator",
    description: "Create realistic Paytm transaction success screenshots in seconds. Fully customizable amounts and details.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50", heroGradient: "bg-gradient-to-r from-[#00baf2] to-[#002e6e]", heroDescriptionColor: "text-blue-100" },
  },
  stripe: {
    name: "Stripe Payment Generator",
    description: "Generate authentic-looking Stripe payment confirmation screenshots for your ecommerce mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-indigo-50 via-white to-purple-50", heroGradient: "bg-gradient-to-r from-[#635bff] to-[#0a2540]", heroDescriptionColor: "text-indigo-100" },
  },
  googlepay: {
    name: "Google Pay Generator",
    description: "Create realistic Google Pay transaction screenshots for design presentations and demos.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-red-50 to-yellow-50", heroGradient: "bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]", heroDescriptionColor: "text-white" },
  },
  upi: {
    name: "UPI Receipt Generator",
    description: "Create realistic BHIM UPI transaction screenshots with custom recipient names and amounts.",
    theme: { pageGradient: "bg-gradient-to-br from-orange-50 via-white to-green-50", heroGradient: "bg-gradient-to-r from-[#ff9933] to-[#138808]", heroDescriptionColor: "text-orange-50" },
  },
  phonepay: {
    name: "PhonePe Receipt Generator",
    description: "Generate realistic PhonePe payment screenshots for your financial app prototypes.",
    theme: { pageGradient: "bg-gradient-to-br from-purple-50 via-white to-violet-50", heroGradient: "bg-gradient-to-r from-[#5f259f] to-[#8c52ff]", heroDescriptionColor: "text-purple-100" },
  },
  phonepe: {
    name: "PhonePe UPI Generator",
    description: "Generate realistic PhonePe UPI payment screenshots with Indian Rupees for financial app prototypes.",
    theme: { pageGradient: "bg-gradient-to-br from-purple-50 via-white to-violet-50", heroGradient: "bg-gradient-to-r from-[#5f259f] to-[#7b2cbf]", heroDescriptionColor: "text-purple-100" },
  },
  gpay: {
    name: "Google Pay (GPay) Generator",
    description: "Create realistic Google Pay (GPay) UPI transaction screenshots with Indian Rupees for design presentations.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-white to-green-50", heroGradient: "bg-gradient-to-r from-[#4285f4] to-[#34a853]", heroDescriptionColor: "text-white" },
  },
  bhim: {
    name: "BHIM UPI Generator",
    description: "Create realistic BHIM (Bharat Interface for Money) UPI payment screenshots with Indian Rupees.",
    theme: { pageGradient: "bg-gradient-to-br from-orange-50 via-white to-red-50", heroGradient: "bg-gradient-to-r from-[#ff9933] to-[#ff6600]", heroDescriptionColor: "text-orange-50" },
  },
  googlewallet: {
    name: "Google Wallet Generator",
    description: "Create realistic Google Wallet pass and transaction screenshots for mobile design mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-slate-50 via-white to-blue-50", heroGradient: "bg-gradient-to-r from-[#1a73e8] to-[#0d47a1]", heroDescriptionColor: "text-blue-100" },
  },
  applepay: {
    name: "Apple Pay Generator",
    description: "Generate realistic Apple Pay transaction and wallet screenshots for iOS app demos.",
    theme: { pageGradient: "bg-gradient-to-br from-slate-100 via-white to-zinc-100", heroGradient: "bg-gradient-to-r from-black to-slate-800", heroDescriptionColor: "text-slate-300" },
  },
  venmo: {
    name: "Venmo Receipt Generator",
    description: "Create realistic Venmo payment and social feed screenshots for your design presentations.",
    theme: { pageGradient: "bg-gradient-to-br from-sky-50 via-white to-blue-50", heroGradient: "bg-gradient-to-r from-[#008CFF] to-[#005FB8]", heroDescriptionColor: "text-blue-100" },
  },
  fonepay: {
    name: "Fonepay Receipt Generator",
    description: "Create realistic Fonepay transaction success screenshots for the Nepal market mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-pink-50 via-white to-rose-50", heroGradient: "bg-gradient-to-r from-[#ed1c24] to-[#c1272d]", heroDescriptionColor: "text-rose-100" },
  },
  cashapp: {
    name: "Cash App Generator",
    description: "Generate realistic Cash App payment screenshots with custom $cashtags and amounts.",
    theme: { pageGradient: "bg-gradient-to-br from-emerald-50 via-white to-green-50", heroGradient: "bg-gradient-to-r from-[#00D64F] to-[#00A33C]", heroDescriptionColor: "text-green-50" },
  },
  // ── Global Platforms ─────────────────────────────────────────────────
  paypal: {
    name: "PayPal Receipt Generator",
    description: "Create realistic PayPal payment confirmation screenshots for global e-commerce mockups and product demos.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50", heroGradient: "bg-gradient-to-r from-[#003087] to-[#009CDE]", heroDescriptionColor: "text-blue-100" },
  },
  zelle: {
    name: "Zelle Payment Generator",
    description: "Generate authentic Zelle bank transfer screenshots for US banking app UI mockups and design demos.",
    theme: { pageGradient: "bg-gradient-to-br from-purple-50 via-white to-violet-50", heroGradient: "bg-gradient-to-r from-[#6D1ED4] to-[#9b51e0]", heroDescriptionColor: "text-purple-100" },
  },
  interac: {
    name: "Interac e-Transfer Generator",
    description: "Create realistic Canadian Interac e-Transfer receipt screenshots for banking UI prototypes.",
    theme: { pageGradient: "bg-gradient-to-br from-amber-50 via-white to-yellow-50", heroGradient: "bg-gradient-to-r from-[#F5A623] to-[#E08E00]", heroDescriptionColor: "text-amber-50" },
  },
  wero: {
    name: "Wero Payment Generator",
    description: "Generate Wero instant payment receipt screenshots for French and Dutch fintech design mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-teal-50 via-white to-cyan-50", heroGradient: "bg-gradient-to-r from-[#00B2A9] to-[#00D4CA]", heroDescriptionColor: "text-teal-50" },
  },
  ideal: {
    name: "iDEAL Payment Generator",
    description: "Create realistic iDEAL Dutch bank payment confirmation screenshots for Netherlands fintech prototypes.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-white to-indigo-50", heroGradient: "bg-gradient-to-r from-[#0033A0] to-[#0066FF]", heroDescriptionColor: "text-blue-100" },
  },
  bancontact: {
    name: "Bancontact Payment Generator",
    description: "Generate authentic Bancontact Belgian payment confirmation screenshots for fintech UI mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50", heroGradient: "bg-gradient-to-r from-[#005499] to-[#0080CC]", heroDescriptionColor: "text-blue-100" },
  },
  bizum: {
    name: "Bizum Payment Generator",
    description: "Create realistic Bizum Spanish mobile payment receipt screenshots for banking app prototypes.",
    theme: { pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50", heroGradient: "bg-gradient-to-r from-[#0066CC] to-[#3399FF]", heroDescriptionColor: "text-blue-100" },
  },
  satispay: {
    name: "Satispay Payment Generator",
    description: "Generate Italian Satispay payment confirmation screenshots for fintech UI design and demos.",
    theme: { pageGradient: "bg-gradient-to-br from-orange-50 via-white to-red-50", heroGradient: "bg-gradient-to-r from-[#FF4D00] to-[#FF7A40]", heroDescriptionColor: "text-orange-50" },
  },
  blik: {
    name: "BLIK Payment Generator",
    description: "Create realistic BLIK Polish payment screenshots for banking UI prototypes and design presentations.",
    theme: { pageGradient: "bg-gradient-to-br from-pink-50 via-white to-rose-50", heroGradient: "bg-gradient-to-r from-[#E91E63] to-[#F06292]", heroDescriptionColor: "text-pink-50" },
  },
  mbway: {
    name: "MB WAY Payment Generator",
    description: "Generate Portuguese MB WAY mobile payment confirmation screenshots for fintech app mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-red-50 via-white to-rose-50", heroGradient: "bg-gradient-to-r from-[#ED1C24] to-[#FF5A5A]", heroDescriptionColor: "text-red-50" },
  },
  twint: {
    name: "TWINT Payment Generator",
    description: "Create authentic Swiss TWINT payment confirmation screenshots for fintech UI design mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-slate-50 via-white to-gray-50", heroGradient: "bg-gradient-to-r from-black to-slate-700", heroDescriptionColor: "text-slate-300" },
  },
  swish: {
    name: "Swish Payment Generator",
    description: "Generate realistic Swedish Swish payment receipt screenshots for Scandinavian fintech mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-pink-50 via-white to-rose-50", heroGradient: "bg-gradient-to-r from-[#E11D48] to-[#FB7185]", heroDescriptionColor: "text-pink-100" },
  },
  vipps: {
    name: "Vipps Payment Generator",
    description: "Create realistic Norwegian Vipps mobile payment receipt screenshots for fintech app prototypes.",
    theme: { pageGradient: "bg-gradient-to-br from-orange-50 via-white to-amber-50", heroGradient: "bg-gradient-to-r from-[#FF5B24] to-[#FF8C42]", heroDescriptionColor: "text-orange-50" },
  },
  mobilepay: {
    name: "MobilePay Generator",
    description: "Generate Danish and Finnish MobilePay payment confirmation screenshots for Nordic fintech mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-indigo-50 via-white to-purple-50", heroGradient: "bg-gradient-to-r from-[#5A4FCF] to-[#7B72E9]", heroDescriptionColor: "text-indigo-100" },
  },
  stcpay: {
    name: "STC Pay Generator",
    description: "Create realistic Saudi STC Pay mobile payment receipt screenshots for Middle East fintech demos.",
    theme: { pageGradient: "bg-gradient-to-br from-purple-50 via-white to-violet-50", heroGradient: "bg-gradient-to-r from-[#6B2D8B] to-[#9B59B6]", heroDescriptionColor: "text-purple-100" },
  },
  knet: {
    name: "KNET Payment Generator",
    description: "Generate Kuwaiti KNET bank payment confirmation screenshots for Middle East fintech UI mockups.",
    theme: { pageGradient: "bg-gradient-to-br from-green-50 via-white to-emerald-50", heroGradient: "bg-gradient-to-r from-[#007A3D] to-[#00A84F]", heroDescriptionColor: "text-green-50" },
  },
  payshap: {
    name: "PayShap Payment Generator",
    description: "Create South African PayShap instant payment confirmation screenshots for fintech UI design demos.",
    theme: { pageGradient: "bg-gradient-to-br from-green-50 via-white to-teal-50", heroGradient: "bg-gradient-to-r from-[#00843D] to-[#00B84E]", heroDescriptionColor: "text-green-50" },
  },
};

export function renderPaymentPlatformPage(platform: PaymentPlatform) {
  const selectedPlatform = paymentPlatformMeta[platform];

  const guideMap: Partial<Record<PaymentPlatform, React.ReactNode>> = {
    paytm: <PaytmGuide />,
    stripe: <StripeGuide />,
    googlepay: <GooglePayGuide />,
    gpay: <GooglePayGuide />,
    upi: <UpiGuide />,
    bhim: <UpiGuide />,
    phonepay: <PhonePeGuide />,
    phonepe: <PhonePeGuide />,
    applepay: <ApplePayGuide />,
    googlewallet: <ApplePayGuide />,
    venmo: <VenmoGuide />,
    fonepay: <FonepayGuide />,
    cashapp: <CashAppGuide />,
  };

  return (
    <PaymentGeneratorPage
      initialPlatform={platform}
      lockPlatform
      heroTitle={`${selectedPlatform.name} Receipt Generator`}
      heroDescription={selectedPlatform.description}
      theme={selectedPlatform.theme}
      extraContent={guideMap[platform] ?? null}
    />
  );
}
