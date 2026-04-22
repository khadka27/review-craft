import { ReviewGeneratorPage } from "@/components/ReviewGeneratorPage";
import { Platform } from "@/types/review";

type PlatformTheme = {
  pageGradient: string;
  heroGradient: string;
  heroDescriptionColor: string;
  tipsCard: string;
  tipsHeading: string;
  tipsText: string;
  tipsBullet: string;
  disclaimerCard: string;
  disclaimerHeading: string;
  disclaimerText: string;
  disclaimerIcon: string;
};

const platformMeta: Record<
  Platform,
  { name: string; description: string; theme: PlatformTheme }
> = {
  reddit: {
    name: "Reddit",
    description: "Create realistic Reddit review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-amber-50",
      heroGradient: "bg-gradient-to-r from-[#FF4500] to-[#FF6A3D]",
      heroDescriptionColor: "text-orange-100",
      tipsCard: "bg-orange-50 border border-orange-200",
      tipsHeading: "text-orange-900",
      tipsText: "text-orange-800",
      tipsBullet: "text-orange-600",
      disclaimerCard: "bg-orange-50 border border-orange-200",
      disclaimerHeading: "text-orange-900",
      disclaimerText: "text-orange-800",
      disclaimerIcon: "text-orange-600",
    },
  },
  twitter: {
    name: "Twitter/X",
    description: "Create realistic Twitter/X review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-slate-100 via-white to-zinc-100",
      heroGradient: "bg-gradient-to-r from-black to-slate-700",
      heroDescriptionColor: "text-slate-200",
      tipsCard: "bg-slate-100 border border-slate-300",
      tipsHeading: "text-slate-900",
      tipsText: "text-slate-800",
      tipsBullet: "text-slate-600",
      disclaimerCard: "bg-slate-100 border border-slate-300",
      disclaimerHeading: "text-slate-900",
      disclaimerText: "text-slate-800",
      disclaimerIcon: "text-slate-700",
    },
  },
  instagram: {
    name: "Instagram",
    description: "Create realistic Instagram review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50",
      heroGradient:
        "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45]",
      heroDescriptionColor: "text-pink-100",
      tipsCard: "bg-pink-50 border border-pink-200",
      tipsHeading: "text-pink-900",
      tipsText: "text-pink-800",
      tipsBullet: "text-pink-600",
      disclaimerCard: "bg-pink-50 border border-pink-200",
      disclaimerHeading: "text-pink-900",
      disclaimerText: "text-pink-800",
      disclaimerIcon: "text-pink-600",
    },
  },
  trustpilot: {
    name: "Trustpilot",
    description: "Create realistic Trustpilot review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-emerald-50 via-white to-green-50",
      heroGradient: "bg-gradient-to-r from-[#00B67A] to-[#0E9F6E]",
      heroDescriptionColor: "text-emerald-100",
      tipsCard: "bg-emerald-50 border border-emerald-200",
      tipsHeading: "text-emerald-900",
      tipsText: "text-emerald-800",
      tipsBullet: "text-emerald-600",
      disclaimerCard: "bg-emerald-50 border border-emerald-200",
      disclaimerHeading: "text-emerald-900",
      disclaimerText: "text-emerald-800",
      disclaimerIcon: "text-emerald-600",
    },
  },
  google: {
    name: "Google",
    description: "Create realistic Google review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-yellow-50",
      heroGradient:
        "bg-gradient-to-r from-[#4285F4] via-[#34A853] via-[#FBBC05] to-[#EA4335]",
      heroDescriptionColor: "text-white/90",
      tipsCard: "bg-blue-50 border border-blue-200",
      tipsHeading: "text-blue-900",
      tipsText: "text-blue-800",
      tipsBullet: "text-blue-600",
      disclaimerCard: "bg-blue-50 border border-blue-200",
      disclaimerHeading: "text-blue-900",
      disclaimerText: "text-blue-800",
      disclaimerIcon: "text-blue-600",
    },
  },
  facebook: {
    name: "Facebook",
    description: "Create realistic Facebook review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-sky-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#1877F2] to-[#0F5CC9]",
      heroDescriptionColor: "text-blue-100",
      tipsCard: "bg-blue-50 border border-blue-200",
      tipsHeading: "text-blue-900",
      tipsText: "text-blue-800",
      tipsBullet: "text-blue-600",
      disclaimerCard: "bg-blue-50 border border-blue-200",
      disclaimerHeading: "text-blue-900",
      disclaimerText: "text-blue-800",
      disclaimerIcon: "text-blue-600",
    },
  },
  yelp: {
    name: "Yelp",
    description: "Create realistic Yelp review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-red-50 via-rose-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#D32323] to-[#B91C1C]",
      heroDescriptionColor: "text-red-100",
      tipsCard: "bg-red-50 border border-red-200",
      tipsHeading: "text-red-900",
      tipsText: "text-red-800",
      tipsBullet: "text-red-600",
      disclaimerCard: "bg-red-50 border border-red-200",
      disclaimerHeading: "text-red-900",
      disclaimerText: "text-red-800",
      disclaimerIcon: "text-red-600",
    },
  },
  amazon: {
    name: "Amazon",
    description: "Create realistic Amazon review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-amber-50 via-yellow-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#FF9900] to-[#F59E0B]",
      heroDescriptionColor: "text-amber-100",
      tipsCard: "bg-amber-50 border border-amber-200",
      tipsHeading: "text-amber-900",
      tipsText: "text-amber-800",
      tipsBullet: "text-amber-600",
      disclaimerCard: "bg-amber-50 border border-amber-200",
      disclaimerHeading: "text-amber-900",
      disclaimerText: "text-amber-800",
      disclaimerIcon: "text-amber-600",
    },
  },
  netflix: {
    name: "Netflix",
    description: "Create realistic Netflix review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-red-950 via-zinc-950 to-black",
      heroGradient: "bg-gradient-to-r from-[#E50914] to-[#B20710]",
      heroDescriptionColor: "text-red-100",
      tipsCard: "bg-zinc-900 border border-zinc-700",
      tipsHeading: "text-red-300",
      tipsText: "text-zinc-200",
      tipsBullet: "text-red-400",
      disclaimerCard: "bg-zinc-900 border border-zinc-700",
      disclaimerHeading: "text-red-300",
      disclaimerText: "text-zinc-200",
      disclaimerIcon: "text-red-400",
    },
  },
  spotify: {
    name: "Spotify",
    description: "Create realistic Spotify review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-green-50 via-emerald-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#1DB954] to-[#159947]",
      heroDescriptionColor: "text-green-100",
      tipsCard: "bg-green-50 border border-green-200",
      tipsHeading: "text-green-900",
      tipsText: "text-green-800",
      tipsBullet: "text-green-600",
      disclaimerCard: "bg-green-50 border border-green-200",
      disclaimerHeading: "text-green-900",
      disclaimerText: "text-green-800",
      disclaimerIcon: "text-green-600",
    },
  },
  youtube: {
    name: "YouTube",
    description: "Create realistic YouTube review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-rose-50 via-red-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#FF0000] to-[#C40000]",
      heroDescriptionColor: "text-red-100",
      tipsCard: "bg-red-50 border border-red-200",
      tipsHeading: "text-red-900",
      tipsText: "text-red-800",
      tipsBullet: "text-red-600",
      disclaimerCard: "bg-red-50 border border-red-200",
      disclaimerHeading: "text-red-900",
      disclaimerText: "text-red-800",
      disclaimerIcon: "text-red-600",
    },
  },
  linkedin: {
    name: "LinkedIn",
    description: "Create realistic LinkedIn review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-sky-50 via-blue-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#0A66C2] to-[#084E96]",
      heroDescriptionColor: "text-blue-100",
      tipsCard: "bg-blue-50 border border-blue-200",
      tipsHeading: "text-blue-900",
      tipsText: "text-blue-800",
      tipsBullet: "text-blue-600",
      disclaimerCard: "bg-blue-50 border border-blue-200",
      disclaimerHeading: "text-blue-900",
      disclaimerText: "text-blue-800",
      disclaimerIcon: "text-blue-600",
    },
  },
  tiktok: {
    name: "TikTok",
    description: "Create realistic TikTok review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-zinc-950 via-black to-zinc-900",
      heroGradient: "bg-gradient-to-r from-[#25F4EE] via-black to-[#FE2C55]",
      heroDescriptionColor: "text-zinc-100",
      tipsCard: "bg-zinc-900 border border-zinc-700",
      tipsHeading: "text-cyan-300",
      tipsText: "text-zinc-200",
      tipsBullet: "text-pink-400",
      disclaimerCard: "bg-zinc-900 border border-zinc-700",
      disclaimerHeading: "text-cyan-300",
      disclaimerText: "text-zinc-200",
      disclaimerIcon: "text-pink-400",
    },
  },
  discord: {
    name: "Discord",
    description: "Create realistic Discord review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-indigo-50 via-violet-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#5865F2] to-[#434ECF]",
      heroDescriptionColor: "text-indigo-100",
      tipsCard: "bg-indigo-50 border border-indigo-200",
      tipsHeading: "text-indigo-900",
      tipsText: "text-indigo-800",
      tipsBullet: "text-indigo-600",
      disclaimerCard: "bg-indigo-50 border border-indigo-200",
      disclaimerHeading: "text-indigo-900",
      disclaimerText: "text-indigo-800",
      disclaimerIcon: "text-indigo-600",
    },
  },
  steam: {
    name: "Steam",
    description: "Create realistic Steam review screenshots in seconds.",
    theme: {
      pageGradient:
        "bg-gradient-to-br from-slate-100 via-blue-100 to-slate-200",
      heroGradient: "bg-gradient-to-r from-[#1B2838] to-[#2A475E]",
      heroDescriptionColor: "text-slate-200",
      tipsCard: "bg-slate-100 border border-slate-300",
      tipsHeading: "text-slate-900",
      tipsText: "text-slate-800",
      tipsBullet: "text-slate-600",
      disclaimerCard: "bg-slate-100 border border-slate-300",
      disclaimerHeading: "text-slate-900",
      disclaimerText: "text-slate-800",
      disclaimerIcon: "text-slate-700",
    },
  },
  imdb: {
    name: "IMDb",
    description: "Create realistic IMDb review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-yellow-50 via-amber-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#F5C518] to-[#EAB308]",
      heroDescriptionColor: "text-yellow-100",
      tipsCard: "bg-yellow-50 border border-yellow-200",
      tipsHeading: "text-yellow-900",
      tipsText: "text-yellow-800",
      tipsBullet: "text-yellow-600",
      disclaimerCard: "bg-yellow-50 border border-yellow-200",
      disclaimerHeading: "text-yellow-900",
      disclaimerText: "text-yellow-800",
      disclaimerIcon: "text-yellow-600",
    },
  },
};

export function renderPlatformPage(platform: Platform) {
  const selectedPlatform = platformMeta[platform];

  return (
    <ReviewGeneratorPage
      initialPlatform={platform}
      lockPlatform
      pageViewName={`platform_${platform}_review_generator`}
      heroTitle={`${selectedPlatform.name} Review Generator`}
      heroDescription={selectedPlatform.description}
      theme={selectedPlatform.theme}
    />
  );
}
