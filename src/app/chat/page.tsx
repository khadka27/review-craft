import type { Metadata } from "next";
import { ChatGeneratorPage } from "@/components/chat/ChatGeneratorPage";

export const metadata: Metadata = {
  title: "Fake Chat Generator — WhatsApp, iMessage, Instagram & Messenger Mockups",
  description:
    "Create realistic chat conversation screenshots for WhatsApp, iMessage, Instagram DMs, Discord, Telegram, and Messenger with custom bubbles and timestamps.",
  alternates: {
    canonical: "/chat",
  },
  openGraph: {
    title: "Fake Chat Generator — WhatsApp, iMessage, Instagram & Messenger Mockups | ReviewCraft",
    description:
      "Create realistic chat conversation screenshots for WhatsApp, iMessage, Instagram DMs, Discord, Telegram, and Messenger with custom bubbles and timestamps.",
    url: "/chat",
    type: "website",
  },
};

export default function ChatPage() {
  return <ChatGeneratorPage />;
}
