import { BillPlatform } from "@/types/bill";
import { BillGeneratorPage } from "@/components/bill/BillGeneratorPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const platforms: BillPlatform[] = ["amazon", "walmart", "supplement"];
  return platforms.map((platform) => ({
    platform,
  }));
}

const billMetadata: Record<
  BillPlatform,
  { title: string; description: string }
> = {
  amazon: {
    title: "Amazon Invoice Generator - Create Realistic Amazon Receipts",
    description:
      "Generate realistic Amazon invoices and order receipts with editable details, product items, pricing, billing addresses, and totals.",
  },
  walmart: {
    title: "Walmart Receipt Generator - Order Details Invoice Maker",
    description:
      "Generate realistic Walmart invoice details and order summary receipts. Customize items, prices, shipping addresses, and tax values.",
  },
  supplement: {
    title: "Supplement Invoice Generator - Premium Health Shop Receipts",
    description:
      "Create clean invoices for supplement brands and health stores (like GNC or iHerb). Customize protein powders, vitamin specs, and regulatory terms.",
  },
};

interface PageProps {
  params: Promise<{ platform: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { platform } = await params;
  const meta = billMetadata[platform as BillPlatform];

  if (!meta) {
    return {
      title: "Invoice Layout Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: `/bill-generator/${platform}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/bill-generator/${platform}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function BillPlatformPage({ params }: PageProps) {
  const { platform } = await params;

  const validPlatforms: BillPlatform[] = ["amazon", "walmart", "supplement"];

  if (!validPlatforms.includes(platform as BillPlatform)) {
    notFound();
  }

  const descriptions: Record<BillPlatform, string> = {
    amazon: "Create a highly realistic replication of the official Amazon.com Order Invoice. Enter billing, shipping, product specifications, and totals.",
    walmart: "Create a highly realistic online Walmart Order Details receipt. Enter customer addresses, barcode info, UPC/SKU listings, and checkout values.",
    supplement: "Create a custom green health supplement store receipt mockup. Enter vitamin or protein specs, custom seller names, and regulatory FDA declarations.",
  };

  return (
    <BillGeneratorPage
      initialPlatform={platform as BillPlatform}
      lockPlatform
      heroDescription={descriptions[platform as BillPlatform]}
    />
  );
}
