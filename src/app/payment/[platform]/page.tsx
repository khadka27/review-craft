import { PaymentPlatform } from "@/types/payment";
import { renderPaymentPlatformPage } from "../paymentPageFactory";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const platforms: PaymentPlatform[] = [
    "paytm",
    "stripe",
    "googlepay",
    "upi",
    "phonepay",
    "phonepe",
    "gpay",
    "bhim",
    "googlewallet",
    "applepay",
    "venmo",
    "fonepay",
    "cashapp",
  ];
  return platforms.map((platform) => ({
    platform,
  }));
}

const paymentMetadata: Record<
  PaymentPlatform,
  { title: string; description: string }
> = {
  paytm: {
    title: "Paytm Receipt Generator - Create Fake Payment Receipts",
    description:
      "Generate realistic Paytm payment screenshots with editable amounts, transaction IDs, usernames, and payment details.",
  },
  stripe: {
    title: "Stripe Receipt Generator - Create Fake Payment Screens",
    description:
      "Create realistic Stripe payment screenshots with editable transaction amounts, customer details, and payment statuses.",
  },
  googlepay: {
    title: "Google Pay Generator - Create Fake Payment Screens",
    description:
      "Generate realistic Google Pay screenshots instantly with editable payment amounts, usernames, and transaction details.",
  },
  upi: {
    title: "UPI Payment Generator - Create Fake UPI Receipts",
    description:
      "Create realistic UPI payment screenshots with editable transaction IDs, recipient names, timestamps, and amounts.",
  },
  phonepay: {
    title: "PhonePe Receipt Generator - Payment Screenshot Tool",
    description:
      "Generate realistic PhonePe payment screenshots with editable amounts, usernames, timestamps, and payment details.",
  },
  phonepe: {
    title: "PhonePe Receipt Generator - UPI Payment Screenshots",
    description:
      "Generate realistic PhonePe UPI payment screenshots with editable amounts, usernames, timestamps, and payment details.",
  },
  gpay: {
    title: "Google Pay (GPay) Generator - UPI Payment Screenshots",
    description:
      "Create realistic Google Pay (GPay) UPI payment screenshots with editable amounts, usernames, and transaction details.",
  },
  bhim: {
    title: "BHIM UPI Generator - Create Fake BHIM Payment Receipts",
    description:
      "Generate realistic BHIM (Bharat Interface for Money) UPI payment screenshots with editable amounts and transaction details.",
  },
  googlewallet: {
    title: "Google Wallet Generator - Wallet Payment Screens",
    description:
      "Create realistic Google Wallet screenshots with editable balances, payment details, timestamps, and transaction info.",
  },
  applepay: {
    title: "Apple Pay Generator - Create Fake Payment Screens",
    description:
      "Generate realistic Apple Pay payment screenshots with editable amounts, merchant names, and payment confirmations.",
  },
  venmo: {
    title: "Venmo Receipt Generator - Create Fake Payment Screens",
    description:
      "Create realistic Venmo payment screenshots with editable usernames, notes, amounts, and transfer activity.",
  },
  fonepay: {
    title: "Fonepay Receipt Generator - Payment Mockups",
    description:
      "Generate realistic Fonepay payment screenshots with editable merchant names, amounts, timestamps, and details.",
  },
  cashapp: {
    title: "Cash App Generator - Create Fake Payment Screens",
    description:
      "Create realistic Cash App payment screenshots with editable usernames, amounts, payment activity, and timestamps.",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { platform } = await params;
  const meta = paymentMetadata[platform as PaymentPlatform];

  if (!meta) {
    return {
      title: "Payment Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: `/payment/${platform}`,
    },
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

  const validPlatforms: PaymentPlatform[] = [
    "paytm",
    "stripe",
    "googlepay",
    "upi",
    "phonepay",
    "phonepe",
    "gpay",
    "bhim",
    "googlewallet",
    "applepay",
    "venmo",
    "fonepay",
    "cashapp",
  ];

  if (!validPlatforms.includes(platform as PaymentPlatform)) {
    notFound();
  }

  return renderPaymentPlatformPage(platform as PaymentPlatform);
}
