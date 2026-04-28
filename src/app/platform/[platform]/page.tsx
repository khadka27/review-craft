import { notFound } from "next/navigation";
import { renderPlatformPage, platformMeta } from "../platformPageFactory";
import { Platform } from "@/types/review";

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
