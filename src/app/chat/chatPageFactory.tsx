import { ChatGeneratorPage } from "@/components/chat/ChatGeneratorPage";
import { ChatPlatform } from "@/types/chat";
import { TwitterChatGuide } from "@/components/TwitterChatGuide";
import { DiscordChatGuide } from "@/components/DiscordChatGuide";
import { ImessageChatGuide } from "@/components/ImessageChatGuide";

type ChatTheme = {
  pageGradient: string;
  heroGradient: string;
  heroDescriptionColor: string;
};

const chatPlatformMeta: Record<
  ChatPlatform,
  { name: string; description: string; theme: ChatTheme }
> = {
  whatsapp: {
    name: "WhatsApp",
    description: "Create realistic WhatsApp chat screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-green-50 via-white to-emerald-50",
      heroGradient: "bg-gradient-to-r from-[#25D366] to-[#128C7E]",
      heroDescriptionColor: "text-green-100",
    },
  },
  messenger: {
    name: "Messenger",
    description: "Create realistic Facebook Messenger chat screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50",
      heroGradient: "bg-gradient-to-r from-[#0084FF] to-[#00A2FF]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  instagram: {
    name: "Instagram",
    description: "Create realistic Instagram DM screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50",
      heroGradient: "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45]",
      heroDescriptionColor: "text-pink-100",
    },
  },
  telegram: {
    name: "Telegram",
    description: "Create realistic Telegram chat screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-sky-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#0088cc] to-[#24A1DE]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  twitter: {
    name: "Twitter/X",
    description: "Create realistic Twitter/X DM screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-100 via-white to-zinc-100",
      heroGradient: "bg-gradient-to-r from-black to-slate-700",
      heroDescriptionColor: "text-slate-200",
    },
  },
  discord: {
    name: "Discord",
    description: "Create realistic Discord chat screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-indigo-50 via-violet-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#5865F2] to-[#434ECF]",
      heroDescriptionColor: "text-indigo-100",
    },
  },
  imessage: {
    name: "iMessage",
    description: "Create realistic iMessage screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-50 via-white to-blue-50",
      heroGradient: "bg-gradient-to-r from-[#007aff] to-[#0051a8]",
      heroDescriptionColor: "text-blue-100",
    },
  },
};

export function renderChatPlatformPage(platform: ChatPlatform) {
  const selectedPlatform = chatPlatformMeta[platform];

  return (
    <ChatGeneratorPage
      initialPlatform={platform}
      lockPlatform
      heroTitle={`${selectedPlatform.name} Chat Generator`}
      heroDescription={selectedPlatform.description}
      theme={selectedPlatform.theme}
      extraContent={
        platform === "twitter" ? (
          <TwitterChatGuide />
        ) : platform === "discord" ? (
          <DiscordChatGuide />
        ) : platform === "imessage" ? (
          <ImessageChatGuide />
        ) : undefined
      }
    />
  );
}
