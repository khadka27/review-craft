export interface ReviewData {
  id: string;
  name: string;
  username: string;
  avatar: string;
  gender: "male" | "female" | "random";
  platform: Platform;
  title: string;
  content: string;
  rating: number;
  date: Date;
  likes: number;
  replies: number;
  shares: number;
  verified: boolean;
  deviceViewMode?: "desktop" | "mobile";
  phoneModel?: string; // e.g. "iPhone 15", "Samsung Galaxy S24"
  facebookContentType?: "post" | "review";
  facebookViewMode?: "desktop" | "mobile";
  appstoreTemplate?: "editorial" | "classic";
  images?: string[]; // Optional array of image URLs or file paths
  googleContentType?: "single" | "summary";
  productVariation?: string; // e.g. "Color: Black, Size: Large"
  // Steam Specific
  steamIsEarlyAccess?: boolean;
  steamPlaytimeTotal?: string;
  steamPlaytimeAtReview?: string;
  steamPcSpecs?: string;
  steamAwardCount?: number;
  steamHelpfulCount?: number;
  steamFunnyCount?: number;
  // Clutch Specific
  clutchMinProjectSize?: string;
  clutchAvgHourlyRate?: string;
  clutchEmployees?: string;
  clutchServicesProvided?: string;
  clutchReviewCount?: number;
  clutchBottomTags?: string[];
  // BBB Specific
  bbbRating?: string; // A+, A, B+, B, C+, C, D+, D, F
  bbbYearsInBusiness?: number;
  bbbComplaintsCount?: number;
  bbbAccredited?: boolean;
  bbbCategory?: string;
  // G2 / Capterra Specific
  b2bCategory?: string;
  b2bUsersCount?: number;
  b2bBadge?: string; // e.g. "Leader", "High Performer", "Momentum Leader"
  b2bPros?: string;
  b2bCons?: string;
  b2bCompanySize?: string;
  b2bIndustry?: string;
  // Angi Specific
  angiGrade?: string; // A, B, C, D, F
  angiServiceCategory?: string;
  angiCostPaid?: string;
  angiDateOfService?: string;
  location?: {
    city: string;
    state: string;
    country?: string;
    zip?: string;
    address?: string;
  };
}

export type Platform =
  | "reddit"
  | "twitter"
  | "instagram"
  | "trustpilot"
  | "google"
  | "facebook"
  | "yelp"
  | "amazon"
  | "youtube"
  | "linkedin"
  | "tiktok"
  | "discord"
  | "steam"
  | "imdb"
  | "airbnb"
  | "tripadvisor"
  | "shopify"
  | "playstore"
  | "fiverr"
  | "booking"
  | "ecommerce"
  | "daraz"
  | "flipkart"
  | "ebay"
  | "walmart"
  | "bestbuy"
  | "etsy"
  | "aliexpress"
  | "alibaba"
  | "testimonial"
  | "generic5star"
  | "generic1star"
  | "clutch"
  | "bbb"
  | "consumerreports"
  | "g2"
  | "capterra"
  | "angi"
  | "appstore";

export interface PlatformStyle {
  name: string;
  color: string;
  icon: string;
  hasRating: boolean;
  hasEngagement: boolean;
  maxLength: number;
}
