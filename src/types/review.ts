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
  images?: string[]; // Optional array of image URLs or file paths
  googleContentType?: "single" | "summary";
  productVariation?: string; // e.g. "Color: Black, Size: Large"
  location?: {
    city: string;
    state: string;
    country: string;
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
  | "netflix"
  | "spotify"
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
  | "generic1star";

export interface PlatformStyle {
  name: string;
  color: string;
  icon: string;
  hasRating: boolean;
  hasEngagement: boolean;
  maxLength: number;
}
