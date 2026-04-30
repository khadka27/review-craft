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
    title: "WhatsApp Fake Chat Generator - Create Fake WhatsApp Chats",
    description:
      "Create realistic WhatsApp chat screenshots instantly with editable messages, timestamps, contact names, and profile photos.",
  },
  messenger: {
    title: "Messenger Fake Chat Generator - Create Fake Messenger Chats",
    description:
      "Generate realistic Messenger chat screenshots instantly with editable conversations, timestamps, usernames, and profile details.",
  },
  instagram: {
    title: "Instagram Fake Chat Generator - Create Fake Instagram DMs",
    description:
      "Create realistic Instagram DM screenshots with editable messages, usernames, timestamps, reactions, and replies.",
  },
  telegram: {
    title: "Telegram Fake Chat Generator - Create Fake Telegram Chats",
    description:
      "Generate realistic Telegram chat screenshots with editable usernames, timestamps, messages, and conversation layouts.",
  },
  twitter: {
    title: "Twitter Fake Chat Generator - Create Fake X Messages",
    description:
      "Create realistic Twitter and X chat screenshots with editable usernames, direct messages, and timestamps instantly.",
  },
  discord: {
    title: "Discord Fake Chat Generator - Create Fake Discord Messages",
    description:
      "Generate realistic Discord chat screenshots with editable usernames, messages, channels, and timestamps instantly.",
  },
  imessage: {
    title: "iMessage Fake Chat Generator - Create Fake iPhone Chats",
    description:
      "Create realistic iMessage screenshots instantly with editable texts, timestamps, contact names, and iPhone chat layouts.",
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
