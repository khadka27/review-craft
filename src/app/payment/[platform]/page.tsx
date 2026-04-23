import { PaymentPlatform } from "@/types/payment";
import { renderPaymentPlatformPage } from "../paymentPageFactory";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const platforms: PaymentPlatform[] = [
    "paytm",
    "stripe",
    "googlepay",
    "upi",
    "phonepay",
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
