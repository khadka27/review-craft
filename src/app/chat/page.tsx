import type { Metadata } from "next";
import { ChatGeneratorPage } from "@/components/chat/ChatGeneratorPage";

export const metadata: Metadata = {
  title: "Social Media Chat Screenshot Generator - WhatsApp, IG & Messenger Mockups | ReviewCraft",
  description:
    "Create realistic chat conversation screenshots for WhatsApp, Instagram, Messenger, and Telegram. Customize messages, timestamps, and status.",
  alternates: {
    canonical: "/chat",
  },
};

export default function ChatPage() {
  return <ChatGeneratorPage />;
}
