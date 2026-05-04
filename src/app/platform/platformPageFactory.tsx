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
  {
    name: string;
    description: string;
    theme: PlatformTheme;
    features?: string[];
    useCases?: string[];
    faqs?: { q: string; a: string }[];
  }
> = {
  reddit: {
    name: "Reddit Comment Generator - Create Fake Reddit Threads",
    description:
      "Generate realistic Reddit thread screenshots with editable usernames, replies, upvotes, comments, and discussions.",
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
    name: "Twitter Comment Generator - Create Fake X Comments",
    description:
      "Create realistic Twitter and X comment screenshots with editable usernames, replies, likes, and engagement metrics.",
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
    features: [
      "X/Twitter style engagement metrics",
      "Verified checkmark options",
      "Dark mode & Light mode presets",
      "Thread and reply formatting",
      "Customizable views and likes",
    ],
    useCases: [
      "Social media marketing mockups",
      "Public relations crisis demos",
      "X-platform UI design testing",
      "Educational social media safety content",
    ],
    faqs: [
      {
        q: "Can I toggle the verified badge?",
        a: "Yes, you can enable or disable the blue/gold verified checkmark for any user profile.",
      },
      {
        q: "Do you support the new X branding?",
        a: "Yes, the generator uses the latest X (formerly Twitter) UI patterns and icons.",
      },
    ],
  },
  instagram: {
    name: "Instagram Comment Generator - Create Fake IG Comments",
    description:
      "Generate realistic Instagram comment screenshots with editable usernames, likes, emojis, replies, and engagement details.",
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
    features: [
      "Instagram feed and story styles",
      "Verified badge toggle",
      "Emoji support in comments",
      "Like counts and timestamp formatting",
      "Custom avatar uploads",
    ],
    useCases: [
      "Instagram marketing campaign previews",
      "Influencer collaboration mockups",
      "App interface design demos",
      "Social proof visualization for ads",
    ],
    faqs: [
      {
        q: "Can I add multiple comments?",
        a: "Yes, you can generate main posts and multiple nested replies to simulate a full thread.",
      },
      {
        q: "Are the fonts accurate to the IG app?",
        a: "We use system fonts that closely match the Instagram mobile and web experience for maximum realism.",
      },
    ],
  },
  trustpilot: {
    name: "Trustpilot Fake Review Generator - Brand Reviews",
    description:
      "Create realistic Trustpilot review screenshots with editable ratings, customer feedback, reviewer names, and business comments.",
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
    name: "Google Fake Review Generator - Create Fake Google Reviews",
    description:
      "Create realistic Google review screenshots instantly with editable ratings, usernames, dates, and business feedback for demos and mockups.",
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
    features: [
      "Local Guides badge option",
      "Response from business owner",
      "Review images and gallery",
      "Location tags and categories",
      "Helpful counts (thumbs up/down)",
    ],
    useCases: [
      "Local business Google My Business mockups",
      "Restaurant or hotel review pages",
      "Google Maps integrations",
      "Marketing campaign mockups",
    ],
    faqs: [
      {
        q: "Can I add a business response?",
        a: "Yes. Add the business owner's response to the review to show customer service interaction.",
      },
      {
        q: "Can I customize the Local Guides badge?",
        a: "Yes, toggle the Local Guides badge on or off based on your mockup needs.",
      },
    ],
  },
  facebook: {
    name: "Facebook Fake Review Generator - Create Fake Facebook Reviews",
    description:
      "Generate realistic Facebook review screenshots with editable recommendations, ratings, comments, and profile details instantly.",
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
    name: "Yelp Fake Review Generator - Create Fake Yelp Reviews",
    description:
      "Generate realistic Yelp review screenshots with editable ratings, customer feedback, business details, and reviewer names instantly.",
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
    name: "Amazon Fake Review Generator - Create Fake Amazon Reviews",
    description:
      "Generate realistic Amazon review screenshots instantly with editable ratings, buyer feedback, verified badges, and product reviews.",
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
    features: [
      "Verified Purchase badge options",
      "Helpful/unhelpful vote counts",
      "Certified Reviewer badge",
      "Top Reviewer badge option",
      "Review images and galleries",
    ],
    useCases: [
      "Product detail page mockups",
      "Ecommerce website design",
      "UI/UX portfolio examples",
      "Investor pitch decks",
    ],
    faqs: [
      {
        q: "Can I customize the verified purchase badge?",
        a: "Yes, toggle the verified purchase badge on or off to match your mockup needs.",
      },
      {
        q: "Can I add images to the review?",
        a: "Yes, you can upload product images to display alongside the review.",
      },
    ],
  },
  youtube: {
    name: "YouTube Comment Generator - Create Fake YT Comments",
    description:
      "Generate realistic YouTube comment screenshots with editable usernames, likes, replies, and audience engagement details.",
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
    name: "LinkedIn Recommendation Generator - Career Reviews",
    description:
      "Generate realistic LinkedIn recommendation screenshots with editable job titles, endorsements, and professional feedback.",
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
    name: "TikTok Comment Generator - Create Fake TikTok Comments",
    description:
      "Create realistic TikTok comment screenshots with editable usernames, likes, reactions, replies, and engagement details.",
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
    name: "Discord Message Generator - Create Fake Discord Chats",
    description:
      "Create realistic Discord message screenshots with editable usernames, timestamps, channels, and chat conversations.",
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
    name: "Steam Fake Review Generator - Create Fake Steam Reviews",
    description:
      "Create realistic Steam review screenshots with editable gamer feedback, playtime stats, recommendations, and ratings.",
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
    features: [
      "Steam-style playtime stats (Total & Review time)",
      "Recommended / Not Recommended toggles",
      "Early Access review badge",
      "Helpful, Funny, and Award counts",
      "Detailed PC specs section support",
    ],
    useCases: [
      "Game store page mockups",
      "Gaming blog community discussions",
      "Game development marketing assets",
      "UI/UX research for gaming platforms",
    ],
    faqs: [
      {
        q: "Can I show 'Early Access' in the review?",
        a: "Yes, you can toggle the Early Access badge to indicate if the review was written during development.",
      },
      {
        q: "How do I add PC specs?",
        a: "In the generator form, there is a dedicated field for 'PC Specs'. Entering text there will render a specific specs box in the review.",
      },
      {
        q: "Can I customize the playtime?",
        a: "Yes, you can independently set the 'Total Playtime' and 'Playtime at Review' to match any scenario.",
      },
    ],
  },
  imdb: {
    name: "IMDb Fake Review Generator - Create Fake Movie Reviews",
    description:
      "Generate realistic IMDb review screenshots with editable movie ratings, usernames, audience feedback, and comments.",
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
    name: "Airbnb Fake Review Generator - Create Fake Guest Reviews",
    description:
      "Create realistic Airbnb review screenshots with editable guest feedback, ratings, stay summaries, and traveler comments.",
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
    name: "Tripadvisor Review Generator - Travel Review Mockups",
    description:
      "Create realistic Tripadvisor review screenshots with editable traveler feedback, hotel ratings, usernames, and comments.",
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
    name: "Shopify Fake Review Generator - Create Fake Product Reviews",
    description:
      "Generate realistic Shopify product reviews with editable customer feedback, ratings, names, and ecommerce testimonials.",
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
    name: "Play Store Review Generator - Fake App Reviews",
    description:
      "Generate realistic Play Store review screenshots with editable ratings, app feedback, usernames, and review comments.",
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
  testimonial: {
    name: "Fake Testimonial Generator - Create Testimonial Mockups",
    description:
      "Generate realistic testimonial screenshots instantly with editable customer feedback, ratings, names, and profile details for demos and mockups.",
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
  fiverr: {
    name: "Fiverr Fake Review Generator - Create Fake Fiverr Reviews",
    description:
      "Create realistic Fiverr review screenshots with editable seller ratings, buyer feedback, delivery reviews, and comments.",
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
    name: "Booking Review Generator - Create Hotel Reviews",
    description:
      "Create realistic Booking.com review screenshots with editable guest feedback, hotel ratings, and traveler comments.",
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
    name: "Ecommerce Review Generator - Product Review Mockups",
    description:
      "Generate realistic ecommerce review screenshots with editable ratings, customer feedback, and product testimonials.",
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
    name: "Flipkart Fake Review Generator - Create Flipkart Review Screenshots",
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
  generic5star: {
    name: "5 Star Fake Review Generator - Create Fake Positive Reviews",
    description:
      "Create realistic 5 star review screenshots instantly with editable customer ratings, feedback, names, and testimonials.",
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
    name: "1 Star Fake Review Generator - Create Fake Negative Reviews",
    description:
      "Generate realistic 1 star review screenshots with editable complaints, ratings, customer feedback, and reviewer details.",
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
  appstore: {
    name: "App Store Review Generator - Fake Apple App Store Reviews",
    description:
      "Generate realistic Apple App Store review screenshots instantly with editable ratings, app feedback, usernames, and review comments.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-gray-50",
      heroGradient: "bg-gradient-to-r from-[#007AFF] to-[#5856D6]",
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
};

export function renderPlatformPage(platform: Platform) {
  const selectedPlatform = platformMeta[platform];

  return (
    <ReviewGeneratorPage
      initialPlatform={platform}
      lockPlatform
      pageViewName={`platform_${platform}_review_generator`}
      heroTitle={`${selectedPlatform.name}`}
      heroDescription={selectedPlatform.description}
      theme={selectedPlatform.theme}
      features={selectedPlatform.features}
      useCases={selectedPlatform.useCases}
      faqs={selectedPlatform.faqs}
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
          "shopify",
        ].includes(platform)
          ? "ecommerce"
          : platform === "testimonial" || 
            ["generic5star", "generic1star"].includes(platform)
          ? "professional"
          : ["airbnb", "tripadvisor", "booking"].includes(platform)
          ? "travel"
          : ["fiverr"].includes(platform)
          ? "freelance"
          : undefined
      }
    />
  );
}
