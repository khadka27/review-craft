export type ChatPlatform = 
  | "whatsapp" 
  | "messenger" 
  | "instagram" 
  | "telegram" 
  | "discord" 
  | "twitter" 
  | "imessage";

export interface ChatMessage {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: string;
  status?: "sent" | "delivered" | "read";
  image?: string;
}

export interface ChatData {
  id: string;
  platform: ChatPlatform;
  contactName: string;
  contactAvatar: string;
  contactStatus: string;
  messages: ChatMessage[];
  deviceMode: "mobile" | "desktop";
  theme: "light" | "dark";
}
