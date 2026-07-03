import type { Metadata } from "next";
import { ChatGeneratorPage } from "@/components/chat/ChatGeneratorPage";

export const metadata: Metadata = {
  title: "Fake Chat Generator - ReviewCraft",
  description: "Create realistic social media chat screenshots for WhatsApp, Messenger, Instagram and more.",
  alternates: {
    canonical: "/chat",
  },
};

export default function ChatPage() {
  return <ChatGeneratorPage />;
}
