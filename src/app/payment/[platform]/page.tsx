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
    title: "Paytm Receipt Generator — Indian Wallet & QR Payment Mockup",
    description: "Create realistic Paytm payment confirmation screenshots with custom INR amounts, Order IDs, Wallet balance displays, and transaction timestamps.",
  },
  stripe: {
    title: "Stripe Receipt Generator — E-Commerce Checkout Confirmation Mockup",
    description: "Build clean Stripe payment success screens with customizable currency amounts, customer billing emails, payment intent IDs, and receipt URLs.",
  },
  googlepay: {
    title: "Google Pay Receipt Generator — GPay Digital Wallet Screenshot Tool",
    description: "Design authentic Google Pay transaction success screens with recipient avatars, animated checkmarks, UPI reference numbers, and account masks.",
  },
  upi: {
    title: "BHIM UPI Receipt Generator — Instant Payment Confirmation Mockup",
    description: "Generate BHIM Unified Payments Interface (UPI) transaction success screens featuring 12-digit UTR numbers, VPA handles, and bank reference lines.",
  },
  phonepay: {
    title: "PhonePe Receipt Generator — Indian UPI Transfer Screenshot Maker",
    description: "Create realistic PhonePe payment successful screenshots with customized Indian Rupee amounts, sender bank masking, and transaction details.",
  },
  phonepe: {
    title: "PhonePe UPI Receipt Generator — Merchant & Contact Transfer Mockup",
    description: "Build high-fidelity PhonePe money transfer confirmation receipts with editable Txn IDs, receiver names, UPI IDs, and timestamp tags.",
  },
  gpay: {
    title: "GPay UPI Payment Generator — Google Pay India Transfer Screens",
    description: "Create realistic GPay India payment screens featuring stylized Google Pay reward badges, bank account debit lines, and contact transfer IDs.",
  },
  bhim: {
    title: "BHIM App Receipt Generator — National NPCI Payment UI Mockup",
    description: "Generate official-style BHIM NPCI payment receipts with custom bank account identifiers, recipient VPAs, and successful status badges.",
  },
  googlewallet: {
    title: "Google Wallet Pass Generator — Digital Card & Balance Mockup",
    description: "Design realistic Google Wallet pass balances, contactless payment confirmation cards, and recent merchant transaction summaries.",
  },
  applepay: {
    title: "Apple Pay Receipt Generator — iOS Wallet Sheet & Card Mockup",
    description: "Generate pixel-perfect Apple Pay transaction confirmation sheets and Apple Card balance clearances for iPhone app prototypes.",
  },
  venmo: {
    title: "Venmo Receipt Generator — Social Payment Feed & Note Mockup",
    description: "Create realistic Venmo transaction screens with social feed caption notes, emoji reactions, @handle transfers, and audience privacy tags.",
  },
  fonepay: {
    title: "Fonepay Receipt Generator — Nepal QR Payment Success Mockup",
    description: "Generate authentic Fonepay QR payment receipts for Nepalese fintech prototypes with NPR amounts, merchant names, and trace IDs.",
  },
  cashapp: {
    title: "Cash App Receipt Generator — $Cashtag Payment Screen Maker",
    description: "Build realistic green Cash App payment confirmation screens with custom $cashtags, transfer notes, transaction IDs, and web receipt links.",
  },
  paypal: {
    title: "PayPal Receipt Generator — Global E-Commerce & Transfer Mockup",
    description: "Generate authentic PayPal payment confirmation receipts for global e-commerce mockups with custom currencies, seller details, and Txn IDs.",
  },
  zelle: {
    title: "Zelle Payment Generator — US Bank Transfer Receipt Mockup",
    description: "Create realistic Zelle instant bank transfer screenshots featuring purple branding, recipient email/phone, and official confirmation codes.",
  },
  interac: {
    title: "Interac e-Transfer Generator — Canadian Banking Receipt Mockup",
    description: "Build authentic Canadian Interac e-Transfer confirmation receipts with CAD dollar amounts, security questions, and reference numbers.",
  },
  wero: {
    title: "Wero Payment Generator — European Instant Transfer Mockup",
    description: "Create realistic Wero instant payment receipts for French, German, and Dutch fintech prototypes with Euro amounts and QR verification.",
  },
  ideal: {
    title: "iDEAL Payment Generator — Dutch Bank Confirmation Mockup",
    description: "Generate authentic iDEAL Netherlands bank checkout confirmation screenshots with Dutch bank selection, Euro amounts, and transaction IDs.",
  },
  bancontact: {
    title: "Bancontact Receipt Generator — Belgian Mobile Payment Mockup",
    description: "Create realistic Bancontact Payconiq Belgian mobile payment receipts with QR verification codes and customized Euro amounts.",
  },
  bizum: {
    title: "Bizum Payment Generator — Spanish Mobile Banking Receipt Mockup",
    description: "Design authentic Bizum Spanish mobile payment screens with recipient contact names, IBAN identifiers, and instant transfer timestamps.",
  },
  satispay: {
    title: "Satispay Receipt Generator — Italian Smart Payment Mockup",
    description: "Generate realistic Satispay Italian smart payment confirmation screens featuring merchant tags, cashback indicators, and Euro totals.",
  },
  blik: {
    title: "BLIK Payment Generator — Polish 6-Digit Code & Transfer Mockup",
    description: "Create authentic BLIK Polish mobile payment screenshots with 6-digit confirmation codes, PLN currency values, and bank app styling.",
  },
  mbway: {
    title: "MB WAY Generator — Portuguese Instant Payment Receipt Mockup",
    description: "Build realistic MB WAY Portugal mobile payment confirmation screenshots with customized phone numbers, Euro amounts, and bank tags.",
  },
  twint: {
    title: "TWINT Receipt Generator — Swiss CHF Payment Confirmation Mockup",
    description: "Generate authentic TWINT Swiss payment receipts with Swiss Franc (CHF) amounts, merchant QR codes, and Swiss bank identifiers.",
  },
  swish: {
    title: "Swish Payment Generator — Swedish SEK Instant Transfer Mockup",
    description: "Create realistic Swish Sweden payment confirmation screens with Swedish Krona (SEK) amounts, recipient phone numbers, and message notes.",
  },
  vipps: {
    title: "Vipps Receipt Generator — Norwegian Mobile Payment UI Mockup",
    description: "Build authentic Vipps Norway mobile payment screenshots featuring orange branding, Norwegian Krone (NOK) amounts, and contact tags.",
  },
  mobilepay: {
    title: "MobilePay Generator — Nordic Denmark & Finland Payment Mockup",
    description: "Generate realistic MobilePay confirmation screens for Danish Krone (DKK) and Euro (EUR) transactions with merchant recipient details.",
  },
  stcpay: {
    title: "STC Pay Receipt Generator — Saudi Arabia Mobile Wallet Mockup",
    description: "Create authentic STC Pay Saudi Arabia payment receipts with Saudi Riyal (SAR) amounts, QR trace IDs, and local merchant tags.",
  },
  knet: {
    title: "KNET Receipt Generator — Kuwait Electronic Banking Mockup",
    description: "Generate official-style KNET Kuwait payment confirmation screens featuring Kuwaiti Dinar (KWD) amounts, approval codes, and ref numbers.",
  },
  payshap: {
    title: "PayShap Payment Generator — South Africa Instant Pay Mockup",
    description: "Build realistic South African PayShap instant payment screenshots with South African Rand (ZAR) amounts, ShapID handles, and bank tags.",
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
