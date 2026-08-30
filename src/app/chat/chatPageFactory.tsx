import { ChatGeneratorPage } from "@/components/chat/ChatGeneratorPage";
import { ChatPlatform } from "@/types/chat";
import { TwitterChatGuide } from "@/components/TwitterChatGuide";
import { DiscordChatGuide } from "@/components/DiscordChatGuide";
import { ImessageChatGuide } from "@/components/ImessageChatGuide";
import { WhatsappChatGuide } from "@/components/WhatsappChatGuide";
import { MessengerChatGuide } from "@/components/MessengerChatGuide";
import { InstagramChatGuide } from "@/components/InstagramChatGuide";
import { TelegramChatGuide } from "@/components/TelegramChatGuide";

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
    description: "Design pixel-perfect WhatsApp chat screens with custom message bubbles, read ticks, and contact avatars.",
    theme: {
      pageGradient: "bg-gradient-to-br from-green-50 via-white to-emerald-50",
      heroGradient: "bg-gradient-to-r from-[#25D366] to-[#128C7E]",
      heroDescriptionColor: "text-green-100",
    },
  },
  messenger: {
    name: "Messenger",
    description: "Build realistic Facebook Messenger conversations with editable message timestamps, active status, and replies.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-sky-50",
      heroGradient: "bg-gradient-to-r from-[#0084FF] to-[#00A2FF]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  instagram: {
    name: "Instagram",
    description: "Create sleek Instagram direct message mockups with heart reactions, verified badges, and dark mode styling.",
    theme: {
      pageGradient: "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50",
      heroGradient: "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45]",
      heroDescriptionColor: "text-pink-100",
    },
  },
  telegram: {
    name: "Telegram",
    description: "Generate authentic Telegram messenger screenshots featuring channels, username tags, and status headers.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-sky-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#0088cc] to-[#24A1DE]",
      heroDescriptionColor: "text-blue-100",
    },
  },
  twitter: {
    name: "Twitter/X",
    description: "Create realistic Twitter and X direct message screenshots with verified checks, avatars, and timestamps.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-100 via-white to-zinc-100",
      heroGradient: "bg-gradient-to-r from-black to-slate-700",
      heroDescriptionColor: "text-slate-200",
    },
  },
  discord: {
    name: "Discord",
    description: "Build realistic Discord community chat mockups with bot tags, role colors, emojis, and channel titles.",
    theme: {
      pageGradient: "bg-gradient-to-br from-indigo-50 via-violet-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#5865F2] to-[#434ECF]",
      heroDescriptionColor: "text-indigo-100",
    },
  },
  imessage: {
    name: "iMessage",
    description: "Generate Apple iOS iMessage mockups with blue text bubbles, delivery receipts, and iPhone status bars.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-50 via-white to-blue-50",
      heroGradient: "bg-gradient-to-r from-[#007aff] to-[#0051a8]",
      heroDescriptionColor: "text-blue-100",
    },
  },
};

export function renderChatPlatformPage(platform: ChatPlatform) {
  const selectedPlatform = chatPlatformMeta[platform];

  const guideMap: Record<ChatPlatform, React.ReactNode> = {
    whatsapp: <WhatsappChatGuide />,
    messenger: <MessengerChatGuide />,
    instagram: <InstagramChatGuide />,
    telegram: <TelegramChatGuide />,
    twitter: <TwitterChatGuide />,
    discord: <DiscordChatGuide />,
    imessage: <ImessageChatGuide />,
  };

  return (
    <ChatGeneratorPage
      initialPlatform={platform}
      lockPlatform
      heroTitle={`${selectedPlatform.name} Chat Generator`}
      heroDescription={selectedPlatform.description}
      theme={selectedPlatform.theme}
      extraContent={guideMap[platform]}
    />
  );
}
