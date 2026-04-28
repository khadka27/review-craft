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

export const platformMeta: Record<
  Platform,
  { name: string; description: string; theme: PlatformTheme }
> = {
  reddit: {
    name: "Reddit Comment Generator – Fake Reddit Reviews & Threads",
    description:
      "Generate realistic Reddit comments, threads, and review-style posts. Perfect for discussions, memes, and UI demos.",
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
    name: "Twitter/X Post Generator – Fake Tweets & Review Threads",
    description:
      "Create realistic tweets, replies, and review-style threads. Perfect for social media mockups and storytelling.",
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
    name: "Instagram Comment & Review Generator – Fake IG Screenshots",
    description:
      "Create realistic Instagram comments, captions, and review-style screenshots. Perfect for influencers, mockups, and social proof.",
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
    name: "Trustpilot Review Generator – Fake Customer Reviews",
    description:
      "Generate Trustpilot-style reviews and ratings instantly. Create customer feedback screenshots for demos and UI design.",
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
    name: "Google Review Generator – Fake Google Reviews & Ratings",
    description:
      "Generate realistic Google reviews and star ratings instantly. Create business review screenshots for mockups and presentations.",
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
    name: "Facebook Review Generator – Fake Facebook Reviews & Comments",
    description:
      "Instantly generate realistic Facebook reviews, comments, and post screenshots. Ideal for social proof mockups and marketing visuals.",
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
    name: "Yelp Review Generator – Fake Business Reviews & Ratings",
    description:
      "Generate realistic Yelp reviews and star ratings for restaurants and businesses. Ideal for mockups and presentations.",
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
    name: "Amazon Fake Review Generator – Create Realistic Amazon Review Screenshots",
    description:
      "Generate realistic Amazon review screenshots instantly with our fake review generator. Create high-quality Amazon testimonials, ratings, and product reviews for demos and mockups.",
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
    name: "Netflix Review Generator – Fake Show & Movie Ratings",
    description:
      "Create Netflix-style reviews and ratings screenshots instantly. Great for entertainment UI mockups and concepts.",
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
    name: "Spotify Review Generator – Fake Music Reviews & Ratings",
    description:
      "Create Spotify-style music reviews and ratings screenshots. Ideal for artists, mockups, and creative content.",
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
    name: "YouTube Comment Generator – Fake Video Reviews & Comments",
    description:
      "Create realistic YouTube comments and engagement screenshots. Perfect for creators, demos, and social proof visuals.",
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
    name: "LinkedIn Recommendation Generator – Fake Professional Reviews",
    description:
      "Generate realistic LinkedIn recommendations and reviews. Ideal for portfolio mockups and professional profile demos.",
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
    name: "TikTok Comment Generator – Fake TikTok Reviews & Replies",
    description:
      "Create realistic TikTok comments and engagement screenshots. Great for social media mockups and viral content ideas.",
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
    name: "Discord Chat & Review Screenshot Generator – Fake Discord Messages",
    description:
      "Create realistic Discord chat and review screenshots in seconds. Perfect for mock conversations, testimonials, and UI demos.",
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
    name: "Steam Review Generator – Fake Game Reviews & Ratings",
    description:
      "Generate realistic Steam game reviews and ratings. Perfect for gaming mockups and product demos.",
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
    name: "IMDb Review Generator – Fake Movie Reviews & Ratings",
    description:
      "Generate IMDb-style movie reviews and ratings instantly. Create realistic film review screenshots for demos and content.",
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
  airbnb: {
    name: "Airbnb",
    description: "Create realistic Airbnb review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-rose-50 via-pink-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#FF5A5F] to-[#E11D48]",
      heroDescriptionColor: "text-rose-100",
      tipsCard: "bg-rose-50 border border-rose-200",
      tipsHeading: "text-rose-900",
      tipsText: "text-rose-800",
      tipsBullet: "text-rose-600",
      disclaimerCard: "bg-rose-50 border border-rose-200",
      disclaimerHeading: "text-rose-900",
      disclaimerText: "text-rose-800",
      disclaimerIcon: "text-rose-600",
    },
  },
  tripadvisor: {
    name: "TripAdvisor",
    description: "Create realistic TripAdvisor rating screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-emerald-50 via-green-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#34E0A1] to-[#00AF87]",
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
  shopify: {
    name: "Shopify Product Reviews",
    description: "Create Shopify-style product review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-lime-50 via-green-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#95BF47] to-[#5E8E3E]",
      heroDescriptionColor: "text-lime-100",
      tipsCard: "bg-lime-50 border border-lime-200",
      tipsHeading: "text-lime-900",
      tipsText: "text-lime-800",
      tipsBullet: "text-lime-600",
      disclaimerCard: "bg-lime-50 border border-lime-200",
      disclaimerHeading: "text-lime-900",
      disclaimerText: "text-lime-800",
      disclaimerIcon: "text-lime-600",
    },
  },
  playstore: {
    name: "Play Store Layouts",
    description: "Create Play Store-style review layouts in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-cyan-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#34A853] to-[#4285F4]",
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
  fiverr: {
    name: "Fiverr-Style Service Reviews",
    description: "Create Fiverr-style service review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-green-50 via-emerald-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#1DBF73] to-[#0F9D58]",
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
  booking: {
    name: "Booking-Style Ratings",
    description: "Create Booking-style rating layouts in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#003580] to-[#1E5AA7]",
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
  ecommerce: {
    name: "Ecommerce Review Generator – Fake Product Reviews & Ratings",
    description:
      "Create realistic ecommerce review layouts, ratings, and testimonials for any online store. Fast, customizable, and professional.",
    theme: {
      pageGradient: "bg-gradient-to-br from-amber-50 via-orange-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#F59E0B] to-[#EA580C]",
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
  daraz: {
    name: "Daraz",
    description: "Create realistic Daraz review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-red-50",
      heroGradient: "bg-gradient-to-r from-[#f68b1e] to-[#ff4500]",
      heroDescriptionColor: "text-orange-50",
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
  flipkart: {
    name: "Flipkart Fake Review Generator – Create Flipkart Review Screenshots",
    description:
      "Generate Flipkart-style product reviews and ratings with our easy fake review generator. Perfect for ecommerce demos and UI design.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-yellow-50",
      heroGradient: "bg-gradient-to-r from-[#2874f0] to-[#ffd814]",
      heroDescriptionColor: "text-blue-50",
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
  ebay: {
    name: "eBay",
    description: "Create realistic eBay review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-zinc-50 via-white to-slate-50",
      heroGradient:
        "bg-gradient-to-r from-[#e53238] via-[#0064d2] via-[#f5af02] to-[#86b817]",
      heroDescriptionColor: "text-white/90",
      tipsCard: "bg-zinc-50 border border-zinc-200",
      tipsHeading: "text-zinc-900",
      tipsText: "text-zinc-800",
      tipsBullet: "text-zinc-600",
      disclaimerCard: "bg-zinc-50 border border-zinc-200",
      disclaimerHeading: "text-zinc-900",
      disclaimerText: "text-zinc-800",
      disclaimerIcon: "text-zinc-600",
    },
  },
  walmart: {
    name: "Walmart",
    description: "Create realistic Walmart review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-sky-50 via-white to-amber-50",
      heroGradient: "bg-gradient-to-r from-[#0071ce] to-[#ffc220]",
      heroDescriptionColor: "text-sky-50",
      tipsCard: "bg-sky-50 border border-sky-200",
      tipsHeading: "text-sky-900",
      tipsText: "text-sky-800",
      tipsBullet: "text-sky-600",
      disclaimerCard: "bg-sky-50 border border-sky-200",
      disclaimerHeading: "text-sky-900",
      disclaimerText: "text-sky-800",
      disclaimerIcon: "text-sky-600",
    },
  },
  bestbuy: {
    name: "Best Buy",
    description: "Create realistic Best Buy review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-yellow-50",
      heroGradient: "bg-gradient-to-r from-[#0046be] to-[#fff200]",
      heroDescriptionColor: "text-blue-50",
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
  etsy: {
    name: "Etsy",
    description: "Create realistic Etsy review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-amber-50",
      heroGradient: "bg-gradient-to-r from-[#f1641e] to-[#eb6d20]",
      heroDescriptionColor: "text-orange-50",
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
  aliexpress: {
    name: "AliExpress",
    description: "Create realistic AliExpress review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-red-50 via-white to-orange-50",
      heroGradient: "bg-gradient-to-r from-[#e62e04] to-[#ff4747]",
      heroDescriptionColor: "text-red-50",
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
  alibaba: {
    name: "Alibaba",
    description: "Create realistic Alibaba review screenshots in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-amber-50",
      heroGradient: "bg-gradient-to-r from-[#ff6600] to-[#ff4500]",
      heroDescriptionColor: "text-orange-50",
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
  testimonial: {
    name: "Custom Testimonial Layouts",
    description: "Create custom testimonial-style review layouts in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-sky-50 via-white to-indigo-50",
      heroGradient: "bg-gradient-to-r from-[#2563EB] to-[#4F46E5]",
      heroDescriptionColor: "text-blue-100",
      tipsCard: "bg-sky-50 border border-sky-200",
      tipsHeading: "text-sky-900",
      tipsText: "text-sky-800",
      tipsBullet: "text-sky-600",
      disclaimerCard: "bg-sky-50 border border-sky-200",
      disclaimerHeading: "text-sky-900",
      disclaimerText: "text-sky-800",
      disclaimerIcon: "text-sky-600",
    },
  },
  generic5star: {
    name: "Generic 5-Star Review Templates",
    description: "Create generic 5-star review templates in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-emerald-50 via-green-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#10B981] to-[#059669]",
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
  generic1star: {
    name: "Generic 1-Star Review Templates",
    description: "Create generic 1-star review templates in seconds.",
    theme: {
      pageGradient: "bg-gradient-to-br from-red-50 via-rose-50 to-white",
      heroGradient: "bg-gradient-to-r from-[#EF4444] to-[#DC2626]",
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
      platformCategory={
        platform === "ecommerce" ||
        [
          "amazon",
          "ebay",
          "walmart",
          "bestbuy",
          "etsy",
          "aliexpress",
          "alibaba",
          "daraz",
          "flipkart",
        ].includes(platform)
          ? "ecommerce"
          : undefined
      }
    />
  );
}
