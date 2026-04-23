import { renderChatPlatformPage } from "../chatPageFactory";
import { ChatPlatform } from "@/types/chat";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const platforms: ChatPlatform[] = [
    "whatsapp",
    "messenger",
    "instagram",
    "telegram",
    "twitter",
    "discord",
    "imessage",
  ];

  return platforms.map((platform) => ({
    platform,
  }));
}

interface PageProps {
  params: Promise<{ platform: string }>;
}

export default async function Page({ params }: PageProps) {
  const { platform } = await params;
  
  const validPlatforms: string[] = [
    "whatsapp",
    "messenger",
    "instagram",
    "telegram",
    "twitter",
    "discord",
    "imessage",
  ];

  if (!validPlatforms.includes(platform)) {
    return notFound();
  }

  return renderChatPlatformPage(platform as ChatPlatform);
}
