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
}

export type Platform =
  | "reddit"
  | "twitter"
  | "instagram"
  | "trustpilot"
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
  | "imdb";

export interface PlatformStyle {
  name: string;
  color: string;
  icon: string;
  hasRating: boolean;
  hasEngagement: boolean;
  maxLength: number;
}
