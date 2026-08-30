import { renderChatPlatformPage } from "../chatPageFactory";
import { ChatPlatform } from "@/types/chat";
import type { Metadata } from "next";
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

const chatMetadata: Record<
  ChatPlatform,
  { title: string; description: string }
> = {
  whatsapp: {
    title: "WhatsApp Chat Generator — Custom Message & Status Mockup Tool",
    description:
      "Generate authentic WhatsApp chat screenshots with editable green bubbles, blue read ticks, contact headers, online statuses, and media previews.",
  },
  messenger: {
    title: "Facebook Messenger Chat Generator — DM & Conversation Mockups",
    description:
      "Create realistic Facebook Messenger chat screenshots with customized gradient chat bubbles, active now indicators, and profile avatars.",
  },
  instagram: {
    title: "Instagram DM Generator — Direct Message & Story Reply Mockups",
    description:
      "Design realistic Instagram direct message screenshots with heart reactions, verified checkmarks, audio wave bubbles, and dark/light themes.",
  },
  telegram: {
    title: "Telegram Chat Generator — Channel & Encrypted Message Mockups",
    description:
      "Build realistic Telegram messenger screenshots featuring custom usernames, reply previews, channel admin badges, and timestamp headers.",
  },
  twitter: {
    title: "Twitter / X DM Generator — Direct Message Screenshot Maker",
    description:
      "Generate realistic Twitter and X direct message screenshots with verified badges, profile handles, message timestamps, and sleek dark UI.",
  },
  discord: {
    title: "Discord Chat Generator — Server Channel & Bot Message Mockups",
    description:
      "Create realistic Discord chat screenshots with custom server roles, channel tags, BOT labels, reaction emojis, and dark theme formatting.",
  },
  imessage: {
    title: "iMessage Generator — iPhone Blue Bubble & iOS Text Mockups",
    description:
      "Generate pixel-perfect Apple iMessage screenshots on iOS with blue/green message bubbles, Delivered receipts, and status bar controls.",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { platform } = await params;
  const meta = chatMetadata[platform as ChatPlatform];

  if (!meta) {
    return {
      title: "Chat Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: `/chat/${platform}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/chat/${platform}`,
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
