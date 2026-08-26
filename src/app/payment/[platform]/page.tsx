import { PaymentPlatform } from "@/types/payment";
import { renderPaymentPlatformPage } from "../paymentPageFactory";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const ALL_PLATFORMS: PaymentPlatform[] = [
  "paytm", "stripe", "googlepay", "upi", "phonepay", "phonepe",
  "gpay", "bhim", "googlewallet", "applepay", "venmo", "fonepay", "cashapp",
  // New global platforms
  "paypal", "zelle", "interac", "wero", "ideal", "bancontact",
  "bizum", "satispay", "blik", "mbway", "twint", "swish",
  "vipps", "mobilepay", "stcpay", "knet", "payshap",
];

export function generateStaticParams() {
  return ALL_PLATFORMS.map((platform) => ({ platform }));
}

const paymentMetadata: Record<PaymentPlatform, { title: string; description: string }> = {
  paytm: {
    title: "Paytm Receipt Generator - Create Realistic Payment Screenshots",
    description: "Generate realistic Paytm payment screenshots with editable amounts, transaction IDs, usernames, and payment details.",
  },
  stripe: {
    title: "Stripe Receipt Generator - Create Fake Payment Screens",
    description: "Create realistic Stripe payment screenshots with editable transaction amounts, customer details, and payment statuses.",
  },
  googlepay: {
    title: "Google Pay Generator - Create Fake GPay Payment Screens",
    description: "Generate realistic Google Pay screenshots instantly with editable payment amounts, usernames, and transaction details.",
  },
  upi: {
    title: "UPI Payment Generator - Create Realistic UPI Receipts",
    description: "Create realistic UPI payment screenshots with editable transaction IDs, recipient names, timestamps, and amounts.",
  },
  phonepay: {
    title: "PhonePe Receipt Generator - Payment Screenshot Tool",
    description: "Generate realistic PhonePe payment screenshots with editable amounts, usernames, timestamps, and payment details.",
  },
  phonepe: {
    title: "PhonePe Receipt Generator - UPI Payment Screenshots",
    description: "Generate realistic PhonePe UPI payment screenshots with editable amounts, usernames, timestamps, and payment details.",
  },
  gpay: {
    title: "Google Pay (GPay) Generator - UPI Payment Screenshots",
    description: "Create realistic Google Pay (GPay) UPI payment screenshots with editable amounts, usernames, and transaction details.",
  },
  bhim: {
    title: "BHIM UPI Generator - Create Realistic BHIM Payment Receipts",
    description: "Generate realistic BHIM (Bharat Interface for Money) UPI payment screenshots with editable amounts and transaction details.",
  },
  googlewallet: {
    title: "Google Wallet Generator - Wallet Payment Screens",
    description: "Create realistic Google Wallet screenshots with editable balances, payment details, timestamps, and transaction info.",
  },
  applepay: {
    title: "Apple Pay Generator - Create Realistic Apple Pay Screens",
    description: "Generate realistic Apple Pay payment screenshots with editable amounts, merchant names, and payment confirmations.",
  },
  venmo: {
    title: "Venmo Receipt Generator - Create Fake Venmo Payment Screens",
    description: "Create realistic Venmo payment screenshots with editable usernames, notes, amounts, and transfer activity.",
  },
  fonepay: {
    title: "Fonepay Receipt Generator - Nepal Payment Mockups",
    description: "Generate realistic Fonepay payment screenshots with editable merchant names, amounts, timestamps, and details.",
  },
  cashapp: {
    title: "Cash App Generator - Create Realistic Cash App Screens",
    description: "Create realistic Cash App payment screenshots with editable usernames, amounts, payment activity, and timestamps.",
  },
  // New global platforms
  paypal: {
    title: "PayPal Receipt Generator - Create Realistic PayPal Payment Screenshots",
    description: "Generate authentic PayPal payment confirmation screenshots for global e-commerce UI mockups. Editable amounts, recipient, and transaction IDs.",
  },
  zelle: {
    title: "Zelle Receipt Generator - Create Realistic Zelle Bank Transfer Screenshots",
    description: "Create realistic Zelle payment screenshots for US banking app UI mockups. Editable amounts, sender, and confirmation numbers.",
  },
  interac: {
    title: "Interac e-Transfer Generator - Canadian Payment Receipt Screenshots",
    description: "Generate realistic Interac e-Transfer confirmation screenshots for Canadian banking app prototypes with editable amounts and details.",
  },
  wero: {
    title: "Wero Payment Generator - French & Dutch Instant Payment Screenshots",
    description: "Create realistic Wero payment confirmation screenshots for France and Netherlands fintech mockups. Editable EUR amounts and details.",
  },
  ideal: {
    title: "iDEAL Payment Generator - Dutch Bank Payment Receipt Screenshots",
    description: "Generate authentic iDEAL Dutch payment screenshots for Netherlands e-commerce and fintech UI mockups with editable amounts.",
  },
  bancontact: {
    title: "Bancontact Generator - Belgian Payment Receipt Screenshots",
    description: "Create realistic Bancontact Belgian payment confirmation screenshots for fintech UI design mockups with editable amounts.",
  },
  bizum: {
    title: "Bizum Generator - Spanish Mobile Payment Receipt Screenshots",
    description: "Generate authentic Bizum Spanish payment confirmation screenshots for mobile banking UI mockups with editable amounts.",
  },
  satispay: {
    title: "Satispay Generator - Italian Payment Receipt Screenshots",
    description: "Create realistic Satispay Italian payment confirmation screenshots for fintech design mockups with editable amounts.",
  },
  blik: {
    title: "BLIK Generator - Polish Payment Receipt Screenshots",
    description: "Generate realistic BLIK Polish mobile payment confirmation screenshots for banking UI mockups with editable amounts.",
  },
  mbway: {
    title: "MB WAY Generator - Portuguese Mobile Payment Screenshots",
    description: "Create authentic MB WAY Portuguese payment confirmation screenshots for fintech app mockups with editable amounts.",
  },
  twint: {
    title: "TWINT Generator - Swiss Payment Receipt Screenshots",
    description: "Generate realistic TWINT Swiss payment confirmation screenshots for CHF payments and fintech UI mockups.",
  },
  swish: {
    title: "Swish Generator - Swedish Payment Receipt Screenshots",
    description: "Create realistic Swish Swedish payment confirmation screenshots for Scandinavian fintech mockups with SEK amounts.",
  },
  vipps: {
    title: "Vipps Generator - Norwegian Payment Receipt Screenshots",
    description: "Generate authentic Vipps Norwegian mobile payment screenshots for fintech UI mockups with NOK amounts.",
  },
  mobilepay: {
    title: "MobilePay Generator - Danish & Finnish Payment Screenshots",
    description: "Create realistic MobilePay Nordic payment confirmation screenshots for Denmark and Finland fintech mockups.",
  },
  stcpay: {
    title: "STC Pay Generator - Saudi Arabia Payment Receipt Screenshots",
    description: "Generate realistic STC Pay Saudi mobile payment screenshots for Middle East fintech UI mockups with SAR amounts.",
  },
  knet: {
    title: "KNET Generator - Kuwait Payment Receipt Screenshots",
    description: "Create authentic KNET Kuwaiti bank payment confirmation screenshots for Middle East fintech UI design mockups.",
  },
  payshap: {
    title: "PayShap Generator - South Africa Instant Payment Screenshots",
    description: "Generate realistic PayShap South African instant payment confirmation screenshots for fintech UI mockups.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { platform } = await params;
  const meta = paymentMetadata[platform as PaymentPlatform];

  if (!meta) {
    return { title: "Payment Not Found", robots: { index: false, follow: false } };
  }

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: `/payment/${platform}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/payment/${platform}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

interface PageProps {
  params: Promise<{ platform: string }>;
}

export default async function PaymentPlatformPage({ params }: PageProps) {
  const { platform } = await params;

  if (!ALL_PLATFORMS.includes(platform as PaymentPlatform)) {
    notFound();
  }

  return renderPaymentPlatformPage(platform as PaymentPlatform);
}
