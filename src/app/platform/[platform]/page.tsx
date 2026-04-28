import { notFound } from "next/navigation";
import { renderPlatformPage, platformMeta } from "../platformPageFactory";
import { Platform } from "@/types/review";
import type { Metadata } from "next";

interface PlatformPageProps {
  params: Promise<{
    platform: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(platformMeta).map((platform) => ({
    platform,
  }));
}

export async function generateMetadata({
  params,
}: PlatformPageProps): Promise<Metadata> {
  const { platform: platformStr } = await params;
  const platform = platformStr as Platform;
  const meta = platformMeta[platform];

  if (!meta) {
    return {
      title: "Platform Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: meta.name,
    description: meta.description,
    alternates: {
      canonical: `/platform/${platform}`,
    },
    openGraph: {
      title: meta.name,
      description: meta.description,
      url: `/platform/${platform}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.name,
      description: meta.description,
    },
  };
}

export default async function DynamicPlatformPage({
  params,
}: PlatformPageProps) {
  const { platform: platformStr } = await params;
  const platform = platformStr as Platform;

  // Check if platform exists in metadata
  if (!platformMeta[platform]) {
    notFound();
  }

  return renderPlatformPage(platform);
}
