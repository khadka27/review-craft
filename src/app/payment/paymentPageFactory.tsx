import { PaymentGeneratorPage } from "@/components/payment/PaymentGeneratorPage";
import { PaymentPlatform, PaymentPageTheme } from "@/types/payment";

const paymentPlatformMeta: Record<
  PaymentPlatform,
  { name: string; description: string; theme: PaymentPageTheme }
> = {
  paytm: {
    name: "Paytm",
    description: "Create realistic Paytm transaction success screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50",
      heroGradient: "bg-gradient-to-r from-[#00baf2] to-[#002e6e]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  stripe: {
    name: "Stripe",
    description: "Create realistic Stripe payment confirmation screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-indigo-50 via-white to-purple-50",
      heroGradient: "bg-gradient-to-r from-[#635bff] to-[#0a2540]",
      heroDescriptionColor: "text-indigo-100",
    },
  },
  googlepay: {
    name: "Google Pay",
    description: "Create realistic Google Pay transaction screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-red-50 to-yellow-50",
      heroGradient: "bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
      heroDescriptionColor: "text-white",
    },
  },
  upi: {
    name: "UPI",
    description: "Create realistic BHIM UPI transaction screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-green-50",
      heroGradient: "bg-gradient-to-r from-[#ff9933] to-[#138808]",
      heroDescriptionColor: "text-orange-50",
    },
  },
  phonepay: {
    name: "PhonePe",
    description: "Create realistic PhonePe transaction screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-purple-50 via-white to-violet-50",
      heroGradient: "bg-gradient-to-r from-[#5f259f] to-[#8c52ff]",
      heroDescriptionColor: "text-purple-100",
    },
  },
  googlewallet: {
    name: "Google Wallet",
    description: "Create realistic Google Wallet pass and transaction screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-50 via-white to-blue-50",
      heroGradient: "bg-gradient-to-r from-[#1a73e8] to-[#0d47a1]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  applepay: {
    name: "Apple Pay",
    description: "Create realistic Apple Pay transaction and wallet screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-100 via-white to-zinc-100",
      heroGradient: "bg-gradient-to-r from-black to-slate-800",
      heroDescriptionColor: "text-slate-300",
    },
  },
  venmo: {
    name: "Venmo",
    description: "Create realistic Venmo payment and social feed screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-sky-50 via-white to-blue-50",
      heroGradient: "bg-gradient-to-r from-[#008CFF] to-[#005FB8]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  fonepay: {
    name: "Fonepay",
    description: "Create realistic Fonepay transaction success screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-pink-50 via-white to-rose-50",
      heroGradient: "bg-gradient-to-r from-[#ed1c24] to-[#c1272d]",
      heroDescriptionColor: "text-rose-100",
    },
  },
  cashapp: {
    name: "Cash App",
    description: "Create realistic Cash App payment screenshots.",
    theme: {
      pageGradient: "bg-gradient-to-br from-emerald-50 via-white to-green-50",
      heroGradient: "bg-gradient-to-r from-[#00D64F] to-[#00A33C]",
      heroDescriptionColor: "text-green-50",
    },
  },
};

export function renderPaymentPlatformPage(platform: PaymentPlatform) {
  const selectedPlatform = paymentPlatformMeta[platform];

  return (
    <PaymentGeneratorPage
      initialPlatform={platform}
      lockPlatform
      heroTitle={`${selectedPlatform.name} Receipt Generator`}
      heroDescription={selectedPlatform.description}
      theme={selectedPlatform.theme}
    />
  );
}
