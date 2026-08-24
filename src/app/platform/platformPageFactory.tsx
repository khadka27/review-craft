import { ReviewGeneratorPage } from "@/components/ReviewGeneratorPage";
import { Platform } from "@/types/review";
import { TestimonialGuide } from "@/components/TestimonialGuide";
import { GoogleReviewGuide } from "@/components/GoogleReviewGuide";
import { YelpReviewGuide } from "@/components/YelpReviewGuide";
import { AmazonReviewGuide } from "@/components/AmazonReviewGuide";
import { TrustpilotReviewGuide } from "@/components/TrustpilotReviewGuide";
import { FacebookReviewGuide } from "@/components/FacebookReviewGuide";
import { Generic1StarReviewGuide } from "@/components/Generic1StarReviewGuide";
import { TripadvisorReviewGuide } from "@/components/TripadvisorReviewGuide";
import { InstagramReviewGuide } from "@/components/InstagramReviewGuide";
import { TwitterReviewGuide } from "@/components/TwitterReviewGuide";
import { LinkedinRecommendationGuide } from "@/components/LinkedinRecommendationGuide";
import { AirbnbReviewGuide } from "@/components/AirbnbReviewGuide";

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
    name: "Reddit Comment Generator - Create Reddit Discussion & Thread Mockups",
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
    name: "Twitter / X Comment Generator - Create X Post & Comment Mockups",
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
    name: "Instagram Comment Generator - Create IG Comment & Post Screenshots",
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
    name: "Trustpilot Reviews Generator - Create Trustpilot Review Mockups",
    description:
      "Free Trustpilot Review Generator. Build realistic Trustpilot star rating screenshots, verified customer feedback, and brand review mockups instantly.",
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
  clutch: {
    name: "Clutch Review Generator - B2B Agency Listing & Review Mockups",
    description:
      "Generate realistic Clutch B2B company listing reviews and profiles with customizable ratings, hourly rates, project sizes, and services metrics.",
    theme: {
      pageGradient: "bg-gradient-to-br from-red-50 via-white to-slate-50",
      heroGradient: "bg-gradient-to-r from-[#DA291C] to-[#B91C1C]",
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
    features: [
      "Customizable hourly rates & min. project size",
      "Premier Verified badge option",
      "Visual services breakdown bar charts",
      "Structured bottom trust metrics",
      "Clutch rating and project link options",
    ],
    useCases: [
      "B2B agency website designs",
      "Portfolio case study proofing",
      "Agency pitch deck graphics",
      "Software developer marketing mockups",
    ],
    faqs: [
      {
        q: "Can I customize the location tag?",
        a: "Yes, you can edit the city and state or country location fields in the settings to match any office location.",
      },
      {
        q: "What is the Premier Verified badge?",
        a: "It's an official Clutch validation program showing verification status, which you can toggle on or off in the profile settings.",
      },
    ],
  },
  bbb: {
    name: "BBB Review Generator - Better Business Bureau Rating Mockups",
    description: "Generate realistic BBB business profile review screenshots with customizable letter grades, accreditation status, complaints count, and verified customer reviews.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-slate-50",
      heroGradient: "bg-gradient-to-r from-[#003087] to-[#1a5276]",
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
    features: [
      "A+ to F letter grade badge",
      "BBB Accredited Business seal",
      "Years in business and complaint count stats",
      "Verified customer review body",
      "Business category and location details",
    ],
    useCases: [
      "Business credibility mockups",
      "Trust signal design proofs",
      "Marketing presentation assets",
      "Customer service training material",
    ],
  },
  consumerreports: {
    name: "Consumer Reports Review Generator - Product Rating Mockups",
    description: "Generate realistic Consumer Reports product review screenshots with overall score, sub-category ratings, Recommended badge, and independent testing summaries.",
    theme: {
      pageGradient: "bg-gradient-to-br from-red-50 via-white to-slate-50",
      heroGradient: "bg-gradient-to-r from-[#C8102E] to-[#9B0E24]",
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
    features: [
      "Overall score circle (0-100)",
      "Performance, Reliability, Satisfaction sub-scores",
      "Recommended / Not Recommended badge",
      "Independent testing summary",
      "Member review body",
    ],
    useCases: [
      "Product launch presentations",
      "Consumer electronics mockups",
      "E-commerce design proofs",
      "Marketing review assets",
    ],
  },
  g2: {
    name: "G2 Software Review Generator - B2B Software Review Screenshots",
    description: "Generate realistic G2 business software review screenshots with star ratings, Leader/High Performer badges, pros & cons, verified buyer labels, and company details.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-slate-50",
      heroGradient: "bg-gradient-to-r from-[#FF492C] to-[#D63B22]",
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
    features: [
      "Leader / High Performer / Momentum Leader badges",
      "Verified buyer status toggle",
      "Pros & cons structured review format",
      "Industry and company size metadata",
      "Helpful vote count",
    ],
    useCases: [
      "SaaS product marketing mockups",
      "Software comparison presentations",
      "B2B lead generation assets",
      "Investor pitch deck demos",
    ],
  },
  capterra: {
    name: "Capterra Review Generator - Software Rating & Review Mockups",
    description: "Generate realistic Capterra software review screenshots with star ratings, sub-scores for value/features/support, verified reviewer badge, and pros & cons sections.",
    theme: {
      pageGradient: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      heroGradient: "bg-gradient-to-r from-[#055AEF] to-[#1E40AF]",
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
    features: [
      "Sub-scores: Ease of Use, Value, Features, Support",
      "Verified Reviewer badge toggle",
      "Pros & cons review format",
      "Industry and company size details",
      "Helpful vote counter",
    ],
    useCases: [
      "Software company marketing",
      "CRM and ERP platform mockups",
      "HR and accounting tool demos",
      "SaaS pitch deck assets",
    ],
  },
  angi: {
    name: "Angi Review Generator - Home Services Rating & Review Screenshots",
    description: "Generate realistic Angi home services review screenshots with letter grades, service category, cost paid, date of service, and verified contractor reviews.",
    theme: {
      pageGradient: "bg-gradient-to-br from-orange-50 via-white to-red-50",
      heroGradient: "bg-gradient-to-r from-[#FF6B35] to-[#E85520]",
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
    features: [
      "A-F letter grade badge",
      "Service category and cost paid details",
      "Date of service field",
      "Verified contractor review toggle",
      "Reviewer name and location",
    ],
    useCases: [
      "Home services company marketing",
      "Contractor business mockups",
      "Service provider pitch assets",
      "Local business review demos",
    ],
  },
  google: {
    name: "Google Review Generator - Free Google Reviews Maker & Mockup Tool",
    description:
      "Free Google Review Generator & Review Maker. Create realistic 5-star Google review screenshots, rating mockups, and customer feedback for UI design and presentations.",
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
    name: "Facebook Review Generator - Create Facebook Page Review Mockups",
    description:
      "Generate realistic Facebook recommendation screenshots and page review mockups for social media marketing presentations and prototypes.",
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
    name: "Yelp Review Generator & Review on Yelp Mockup Maker",
    description:
      "Generate realistic Yelp reviews & review on Yelp screenshots instantly with editable ratings, customer feedback, and business details.",
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
    features: [
      "Yelp star rating system (1-5 stars)",
      "Elite reviewer badge toggle",
      "Check-in & photo count indicators",
      "Useful, Funny, Cool reaction buttons",
      "Business owner response formatting",
    ],
    useCases: [
      "Local restaurant & service business mockups",
      "Yelp page design prototypes for agencies",
      "Reputation management educational demos",
      "Pitch deck customer feedback visuals",
    ],
    faqs: [
      {
        q: "Can I add photos to the Yelp review mockup?",
        a: "Yes, you can upload customer images to include alongside the text feedback.",
      },
      {
        q: "Is the Elite badge customizable?",
        a: "You can toggle the Yelp Elite badge on or off to represent different reviewer tiers.",
      },
    ],
  },
  amazon: {
    name: "Amazon Review Generator - Product Reviews & Rating Screenshot Maker",
    description:
      "Generate authentic-looking Amazon product review screenshots and rating mockups. Customize verified purchase badges, seller feedback, and star ratings.",
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
    name: "YouTube Comment Generator - Video Comment & Thread Screenshots",
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
    features: [
      "Creator pinned comment badge",
      "Hearted by creator indicator",
      "Upvote/downvote counts",
      "Channel avatar uploads",
      "Nested replies thread structure",
    ],
    useCases: [
      "Video content production mockups",
      "Social media marketing presentations",
      "YouTube channel redesign prototypes",
      "Creator portfolio project demos",
    ],
    faqs: [
      {
        q: "Can I show a comment pinned by the channel owner?",
        a: "Yes, you can enable the Pinned by Creator badge on any comment.",
      },
      {
        q: "Are channel avatars customizable?",
        a: "Yes, upload custom profile pictures or use our random generator.",
      },
    ],
  },
  linkedin: {
    name: "LinkedIn Recommendation Generator - Career & Service Recommendation Cards",
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
    features: [
      "Job relationship tag (e.g. Managed directly)",
      "Company name and title fields",
      "Professional connection badge",
      "Editable recommendation body",
      "Date of recommendation formatting",
    ],
    useCases: [
      "Resume and portfolio website designs",
      "B2B service offering proposals",
      "Professional branding presentations",
      "HR tech software UI prototypes",
    ],
    faqs: [
      {
        q: "Can I customize the connection relationship?",
        a: "Yes, you can edit the relationship line to specify how the colleagues worked together.",
      },
      {
        q: "Does it support company avatars?",
        a: "You can upload profile photos and company logo badges for high fidelity mockups.",
      },
    ],
  },
  tiktok: {
    name: "TikTok Comment Generator - Create TikTok Video Comment Screenshots",
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
    features: [
      "Creator liked comment badge",
      "Verified creator checkmark",
      "Comment heart counter",
      "Dark theme video overlay style",
      "Mention (@username) formatting",
    ],
    useCases: [
      "Short-form video marketing decks",
      "Social media agency client pitches",
      "TikTok ad concept prototypes",
      "Viral trend case study visuals",
    ],
    faqs: [
      {
        q: "Can I add the 'Liked by creator' heart icon?",
        a: "Yes, toggle the Creator Liked status to match TikTok's official UI.",
      },
      {
        q: "Is dark mode the default for TikTok mockups?",
        a: "Yes, the TikTok layout utilizes standard dark mode styling mirroring the mobile app.",
      },
    ],
  },
  discord: {
    name: "Discord Message Generator - Create Discord Chat & Discussion Screenshots",
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
    features: [
      "Role color & BOT badge tags",
      "Channel name header (#general)",
      "Emoji reaction counters",
      "Server member avatar upload",
      "Dark Discord theme styling",
    ],
    useCases: [
      "Community management presentations",
      "Web3 & gaming project landing pages",
      "Discord bot marketing materials",
      "UI design mockups for chat tools",
    ],
    faqs: [
      {
        q: "Can I mark a user as a Bot?",
        a: "Yes, you can toggle the blue BOT tag next to any username.",
      },
      {
        q: "Can I customize Discord role colors?",
        a: "Yes, set custom color codes for username display names.",
      },
    ],
  },
  steam: {
    name: "Steam Review Generator - Create PC Gaming Review Screenshots",
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
    name: "IMDb Movie Review Generator - Create Film Rating & Review Screenshots",
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
    features: [
      "IMDb 10-point star rating scale",
      "Spoiler alert warning header option",
      "Helpful votes count (e.g. 45 out of 50 found this helpful)",
      "Review headline & date tag",
      "Classic yellow IMDb branding",
    ],
    useCases: [
      "Film and TV marketing mockups",
      "Entertainment news site prototypes",
      "Cinematic project proposals",
      "Media study educational presentations",
    ],
    faqs: [
      {
        q: "Can I set a rating out of 10?",
        a: "Yes, IMDb uses a 10-point scale which you can select in the form.",
      },
      {
        q: "Can I include a spoiler warning tag?",
        a: "Yes, toggle the Spoiler Alert flag on top of the review text.",
      },
    ],
  },
  airbnb: {
    name: "Airbnb Review Generator - Vacation Rental & Guest Review Mockups",
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
    features: [
      "Guest category ratings (Cleanliness, Accuracy, Location)",
      "Host response section",
      "Stay duration & month tag",
      "Superhost badge on profile",
      "Airbnb star rating design",
    ],
    useCases: [
      "Short-term rental landing pages",
      "Property management marketing decks",
      "Travel app UI prototype testing",
      "Hospitality pitch presentations",
    ],
    faqs: [
      {
        q: "Can I show detailed sub-ratings like Cleanliness?",
        a: "Yes, Airbnb sub-category ratings can be customized.",
      },
      {
        q: "Can I add a Host Response?",
        a: "Yes, include a response from the property owner below the guest feedback.",
      },
    ],
  },
  tripadvisor: {
    name: "Tripadvisor Review Generator - Travel & Hotel Review Mockups",
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
    features: [
      "Green bubble rating scale",
      "Trip type indicator (Family, Couples, Solo, Business)",
      "Date of stay selection",
      "Contribution count for reviewer profile",
      "Management response section",
    ],
    useCases: [
      "Hotel & resort website mockups",
      "Travel agency marketing materials",
      "Tourism board presentation assets",
      "UI design testing for travel portals",
    ],
    faqs: [
      {
        q: "Does it use Tripadvisor's signature green bubble icons?",
        a: "Yes, the rating layout uses standard green circular rating bubbles.",
      },
      {
        q: "Can I specify trip types like Family or Solo?",
        a: "Yes, trip context tags are customizable.",
      },
    ],
  },
  shopify: {
    name: "Shopify Reviews App & Shop Review Generator - E-Commerce Mockups",
    description:
      "Create shop reviews and Shopify product review mockups. Generate authentic customer review screenshots for e-commerce storefronts and UI prototypes.",
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
    features: [
      "Shopify Product Reviews app layout",
      "Verified Buyer badge",
      "Star rating breakdown summary",
      "Customer photos attachment",
      "Clean ecommerce typography",
    ],
    useCases: [
      "Shopify store theme customization mockups",
      "D2C brand landing page designs",
      "Conversion rate optimization (CRO) demos",
      "Ecommerce agency portfolio showcases",
    ],
    faqs: [
      {
        q: "Does this match standard Shopify review apps?",
        a: "Yes, the design mimics Judge.me, Loox, and Shopify Product Reviews app interfaces.",
      },
      {
        q: "Can I add customer photos?",
        a: "Yes, upload customer product photos to accompany the review text.",
      },
    ],
  },
  playstore: {
    name: "Play Store Review Generator - Create App Store Review Screenshots",
    description:
      "Generate realistic Play Store app review screenshots with editable ratings, app feedback, usernames, and review comments.",
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
    features: [
      "Google Play Material Design layout",
      "Helpful review thumbs-up counter",
      "Developer response thread",
      "Device model info (e.g. Pixel 8)",
      "App version badge",
    ],
    useCases: [
      "Android app store page pitch assets",
      "Mobile app UX/UI design mockups",
      "ASO (App Store Optimization) proposals",
      "App review section prototypes",
    ],
    faqs: [
      {
        q: "Can I include developer replies?",
        a: "Yes, add official developer responses under the user review.",
      },
      {
        q: "Is it formatted like the mobile Play Store?",
        a: "Yes, it reflects modern Android Google Play Store UI.",
      },
    ],
  },
  testimonial: {
    name: "AI Testimonial Generator & Review Maker - Create Customer Feedback Mockups",
    description:
      "Free AI Testimonial Generator & Review Maker. Create clean customer feedback cards, star ratings, and social proof mockups.",
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
    features: [
      "Clean card, speech bubble, and avatar layouts",
      "Company logo and customer role fields",
      "5-star or custom score selector",
      "High resolution image export",
      "Light and dark card themes",
    ],
    useCases: [
      "SaaS and landing page testimonial sections",
      "Marketing deck social proof visuals",
      "Website design agency wireframes",
      "Case study summary cards",
    ],
    faqs: [
      {
        q: "Can I add customer company names and titles?",
        a: "Yes, specify fields like 'CEO at Acme Inc' for realistic social proof.",
      },
      {
        q: "Are there multiple layout styles?",
        a: "Yes, select between card styles, minimal quotes, and detailed reviews.",
      },
    ],
  },
  fiverr: {
    name: "Fiverr Review Generator - Freelance Service Review Mockups",
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
    features: [
      "Buyer country flag icon",
      "Gig price range and delivery time",
      "Sub-ratings: Communication, Service, Recommendation",
      "Seller response box",
      "Fiverr signature green star ratings",
    ],
    useCases: [
      "Freelancer portfolio showcases",
      "Agency marketplace listing designs",
      "Gig service presentation mockups",
      "UI design testing for freelance platforms",
    ],
    faqs: [
      {
        q: "Can I display the buyer's country flag?",
        a: "Yes, select the country to display the appropriate flag icon.",
      },
      {
        q: "Can I customize service sub-ratings?",
        a: "Yes, set sub-scores for Communication and Quality of Delivery.",
      },
    ],
  },
  booking: {
    name: "Booking.com Review Generator - Hotel & Accommodation Review Mockups",
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
    features: [
      "Numerical score badge out of 10 (e.g. 9.6 Exceptional)",
      "Positive (+) and Negative (-) bullet points format",
      "Room type and duration of stay",
      "Traveler category tag (Couple, Solo, Group)",
      "Booking.com deep blue theme",
    ],
    useCases: [
      "Hotel & resort website designs",
      "Online Travel Agency (OTA) interface prototypes",
      "Hospitality management presentations",
      "Tourism marketing proposals",
    ],
    faqs: [
      {
        q: "Does it support the Pros & Cons format?",
        a: "Yes, separate positive highlights from critical notes just like Booking.com.",
      },
      {
        q: "Is the score out of 10?",
        a: "Yes, it uses Booking.com's 10-point scale with rating labels like 'Superb' or 'Exceptional'.",
      },
    ],
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
    features: [
      "Universal product review layout",
      "Verified buyer verification badge",
      "Star distribution summary bar",
      "Customer photos & video thumbnail uploads",
      "Helpful vote interaction buttons",
    ],
    useCases: [
      "Generic online store landing pages",
      "Checkout funnel optimization tests",
      "E-commerce website template demos",
      "Digital product sales page mockups",
    ],
    faqs: [
      {
        q: "Can I use this for any online store layout?",
        a: "Yes, this layout is designed to work universally across custom ecommerce stores.",
      },
      {
        q: "Can I add customer photo attachments?",
        a: "Yes, attach images to simulate authentic customer unboxing reviews.",
      },
    ],
  },
  daraz: {
    name: "Daraz Review Generator - Product Review & Rating Screenshots",
    description: "Generate realistic Daraz online shopping product review screenshots for ecommerce mockups, design prototypes, and presentations.",
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
    features: [
      "Daraz-style orange star rating layout",
      "Verified purchase tag",
      "Color & size variant tags",
      "Seller response formatting",
      "Customer image attachments",
    ],
    useCases: [
      "South Asian ecommerce market mockups",
      "Daraz store seller presentation assets",
      "Regional marketplace UI studies",
      "Ecommerce agency portfolio demos",
    ],
    faqs: [
      {
        q: "Can I customize product variant fields?",
        a: "Yes, add size, color, or specification details for the item reviewed.",
      },
      {
        q: "Is it formatted like the Daraz mobile app?",
        a: "Yes, it accurately matches the mobile web and app interface of Daraz.",
      },
    ],
  },
  flipkart: {
    name: "Flipkart Review Generator - E-Commerce Review & Rating Screenshots",
    description:
      "Generate Flipkart-style product reviews and ratings with our easy review generator. Perfect for ecommerce demos and UI design.",
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
    features: [
      "Flipkart green star rating pill",
      "Certified Buyer badge",
      "Location and date tags",
      "Upvote and downvote count",
      "Product image upload support",
    ],
    useCases: [
      "Indian ecommerce market prototypes",
      "Flipkart seller product page concepts",
      "UI/UX redesign case studies",
      "Marketing deck social proof slides",
    ],
    faqs: [
      {
        q: "Does it feature the signature Flipkart green rating badge?",
        a: "Yes, reviews include the green rating pill matching Flipkart's design system.",
      },
      {
        q: "Can I toggle 'Certified Buyer' status?",
        a: "Yes, enable or disable the Certified Buyer verification line.",
      },
    ],
  },
  ebay: {
    name: "eBay Review Generator - Create Buyer & Seller Feedback Mockups",
    description: "Create realistic eBay buyer feedback and star rating screenshots for design mockups, presentations, and educational projects.",
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
    features: [
      "Positive / Neutral / Negative feedback icons",
      "Verified purchase & item price details",
      "Detailed seller ratings (DSR) breakdown",
      "Buyer feedback score star icons",
      "Classic eBay marketplace layout",
    ],
    useCases: [
      "Online marketplace UI design testing",
      "eBay seller store marketing presentations",
      "Auction site workflow prototypes",
      "E-commerce trust element research",
    ],
    faqs: [
      {
        q: "Can I choose Positive, Neutral, or Negative rating?",
        a: "Yes, eBay's distinct feedback types can be selected.",
      },
      {
        q: "Can I display the buyer's feedback star score?",
        a: "Yes, customize the buyer score and star color.",
      },
    ],
  },
  walmart: {
    name: "Walmart Review Generator - Retail Product Review & Rating Screenshots",
    description: "Create realistic Walmart online order review screenshots in seconds for product mockups and marketing presentations.",
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
    features: [
      "Walmart blue & spark branding style",
      "Verified Purchaser badge",
      "In-store vs Online purchase tag",
      "Product recommendation percentage",
      "Reviewer location detail",
    ],
    useCases: [
      "Retail marketplace product page designs",
      "Supplier pitch deck mockups",
      "Consumer packaged goods (CPG) proposals",
      "Ecommerce UX comparative studies",
    ],
    faqs: [
      {
        q: "Can I mark the review as an 'In-Store' purchase?",
        a: "Yes, toggle between Online and In-Store verified purchase labels.",
      },
      {
        q: "Does it show 'Recommends this item'?",
        a: "Yes, include Walmart's recommendation checkbox status.",
      },
    ],
  },
  bestbuy: {
    name: "Best Buy Review Generator - Tech Product Review Screenshots",
    description: "Create realistic Best Buy tech product review screenshots for electronics mockups, pitch decks, and educational projects.",
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
    features: [
      "Best Buy verified purchaser badge",
      "Would recommend to a friend indicator",
      "Pros and Cons feature list",
      "Tech product rating sub-scores",
      "Helpful / Unhelpful voting buttons",
    ],
    useCases: [
      "Consumer electronics marketing mockups",
      "Tech hardware product launch decks",
      "Ecommerce store design prototypes",
      "Retail tech display concepts",
    ],
    faqs: [
      {
        q: "Can I include Pros & Cons bullet lists?",
        a: "Yes, enter specific pros and cons for electronics feedback.",
      },
      {
        q: "Does it feature Best Buy's signature yellow tag styling?",
        a: "Yes, it matches Best Buy's official retail product page theme.",
      },
    ],
  },
  etsy: {
    name: "Etsy Review Generator - Handmade Shop Review Screenshots",
    description: "Create realistic Etsy handmade and craft product review screenshots for shop mockups and seller portfolio showcases.",
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
    features: [
      "Etsy orange star rating aesthetic",
      "Item quality & shipping sub-scores",
      "Customer product photo attachment",
      "Item purchased thumbnail preview",
      "Appreciative seller reply thread",
    ],
    useCases: [
      "Handmade business portfolio mockups",
      "Etsy shop seller presentation slides",
      "Craft brand landing page prototypes",
      "Creative agency client pitches",
    ],
    faqs: [
      {
        q: "Can I show customer photos of handmade items?",
        a: "Yes, upload customer photos showcasing custom craft products.",
      },
      {
        q: "Is it tailored for craft and handmade sellers?",
        a: "Yes, the terminology and styling match Etsy's buyer review format.",
      },
    ],
  },
  aliexpress: {
    name: "AliExpress Review Generator - Order & Product Review Screenshots",
    description: "Create realistic AliExpress review screenshots with buyer feedback, shipping details, and star ratings for product mockups.",
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
    features: [
      "Logistics & shipping speed sub-rating",
      "Buyer country flag & initials",
      "Item specification tags (Color, Ships from)",
      "Unboxing photo gallery attachment",
      "Additional feedback section (Follow-up review)",
    ],
    useCases: [
      "Dropshipping & cross-border ecommerce mockups",
      "Supply chain presentation slides",
      "Global marketplace UI design tests",
      "Product sourcing case study visuals",
    ],
    faqs: [
      {
        q: "Can I include shipping speed ratings?",
        a: "Yes, rate logistics speed separately from item quality.",
      },
      {
        q: "Can I add follow-up reviews?",
        a: "Yes, simulate additional comments left days after product delivery.",
      },
    ],
  },
  alibaba: {
    name: "Alibaba Review Generator - Wholesale Supplier Review Mockups",
    description: "Create realistic Alibaba B2B supplier review screenshots with trade assurance tags, rating sub-scores, and buyer feedback.",
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
    features: [
      "Trade Assurance verified tag",
      "Supplier service sub-scores (On-time shipment, Product quality)",
      "Order value range & quantity indicator",
      "Verified buyer company country",
      "Professional B2B review styling",
    ],
    useCases: [
      "B2B manufacturing marketplace mockups",
      "Wholesale supplier pitch presentations",
      "Global trade platform prototypes",
      "Sourcing case study presentations",
    ],
    faqs: [
      {
        q: "Can I toggle Trade Assurance badges?",
        a: "Yes, include official Trade Assurance trust seals.",
      },
      {
        q: "Does it support order quantity metrics?",
        a: "Yes, specify bulk order units and transaction values.",
      },
    ],
  },
  generic5star: {
    name: "5 Star Review Generator - Positive Customer Review & Rating Maker",
    description:
      "Create realistic 5 star positive review screenshots instantly with editable customer ratings, feedback, names, and testimonials.",
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
    features: [
      "Bright green 5-star rating presentation",
      "Verified customer badge options",
      "Clean modern card design",
      "Custom avatar or photo upload",
      "High resolution image export",
    ],
    useCases: [
      "High-converting sales landing pages",
      "Product hero section social proof",
      "Marketing deck testimonial slides",
      "Ad creative mockup design",
    ],
    faqs: [
      {
        q: "Why use a generic 5-star layout?",
        a: "Generic layouts fit seamlessly onto any brand page without forcing platform-specific logos.",
      },
      {
        q: "Can I customize the color scheme?",
        a: "Yes, choose between emerald green, gold, and neutral star colors.",
      },
    ],
  },
  generic1star: {
    name: "1 Star Review Generator - Negative Review & Rating Mockup Tool",
    description:
      "Generate realistic 1 star negative review screenshots with editable complaints, ratings, customer feedback, and reviewer details.",
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
    features: [
      "Red 1-star alert rating layout",
      "Constructive complaint structure",
      "Resolution / Response box",
      "Customer support interaction tag",
      "Clear feedback highlight formatting",
    ],
    useCases: [
      "Customer support training workshops",
      "Crisis management PR strategy decks",
      "UX error state & feedback redesigns",
      "A/B testing critical vs positive sentiment",
    ],
    faqs: [
      {
        q: "What are negative review mockups used for?",
        a: "They are widely used in CS training, PR crisis drills, and testing customer response workflows.",
      },
      {
        q: "Can I include a business response?",
        a: "Yes, add a support team resolution response beneath the complaint.",
      },
    ],
  },
  appstore: {
    name: "App Store Review Generator - iOS & Apple App Review Mockups",
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
    features: [
      "iOS App Store typography and card design",
      "App version & device model tag",
      "Developer response formatting",
      "Country store selector tag",
      "Light and Dark iOS theme styles",
    ],
    useCases: [
      "iOS App Store product page mockups",
      "Mobile app pitch deck presentations",
      "ASO (App Store Optimization) proposals",
      "App UI design case studies",
    ],
    faqs: [
      {
        q: "Does it match Apple San Francisco typography?",
        a: "Yes, font choices and line heights mirror iOS App Store standards.",
      },
      {
        q: "Can I include the app version number?",
        a: "Yes, specify version numbers like 'v2.4.1' in the metadata fields.",
      },
    ],
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
            ["generic5star", "generic1star", "linkedin"].includes(platform)
          ? "professional"
          : ["reddit", "twitter", "instagram", "facebook", "tiktok", "discord"].includes(platform)
          ? "social"
          : ["steam", "imdb", "youtube", "playstore", "appstore"].includes(platform)
          ? "entertainment"
          : ["clutch", "bbb", "consumerreports", "g2", "capterra", "angi"].includes(platform)
          ? "business"
          : undefined
      }
      extraContent={
        platform === "testimonial" ? (
          <TestimonialGuide />
        ) : platform === "google" ? (
          <GoogleReviewGuide />
        ) : platform === "yelp" ? (
          <YelpReviewGuide />
        ) : platform === "amazon" ? (
          <AmazonReviewGuide />
        ) : platform === "trustpilot" ? (
          <TrustpilotReviewGuide />
        ) : platform === "facebook" ? (
          <FacebookReviewGuide />
        ) : platform === "generic1star" ? (
          <Generic1StarReviewGuide />
        ) : platform === "tripadvisor" ? (
          <TripadvisorReviewGuide />
        ) : platform === "instagram" ? (
          <InstagramReviewGuide />
        ) : platform === "twitter" ? (
          <TwitterReviewGuide />
        ) : platform === "linkedin" ? (
          <LinkedinRecommendationGuide />
        ) : platform === "airbnb" ? (
          <AirbnbReviewGuide />
        ) : undefined
      }
    />
  );
}
