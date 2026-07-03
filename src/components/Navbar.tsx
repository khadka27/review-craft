"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MessageSquare, Sparkles } from "lucide-react";
import { getPlatformIcon } from "@/components/SocialMediaIcons";

const getBrandIcon = (slug: string, size = 18) => {
  const iconStyle = { width: size, height: size };
  
  if (slug === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]" style={iconStyle}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.39 1.97 13.916 .94 11.29 1.04C5.86 1.04 1.432 5.41 1.43 10.84c-.001 1.7.453 3.36 1.314 4.84l-.997 3.637 3.737-.978-.127-.088zm12.311-6.633c-.332-.165-1.962-.968-2.266-1.077-.303-.11-.524-.165-.744.165-.22.33-.852 1.077-1.044 1.297-.193.22-.386.242-.718.077-.332-.165-1.4-.516-2.667-1.644-1.002-.893-1.684-1.997-1.882-2.33-.197-.33-.02-.508.145-.671.15-.147.332-.385.498-.578.166-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.79-1.018-2.45-.268-.644-.54-.555-.74-.565-.19-.01-.41-.01-.62-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.28 3.26.16.2 2.2 3.36 5.33 4.71.74.32 1.33.51 1.78.65.75.24 1.43.2 1.97.12.6-.09 1.96-.8 2.24-1.58.28-.77.28-1.44.2-1.58-.08-.14-.29-.22-.62-.39z"/>
      </svg>
    );
  }
  if (slug === "telegram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#0088cc]" style={iconStyle}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.48.94-4.19 2.77-.4.27-.76.4-1.08.39-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
      </svg>
    );
  }
  if (slug === "messenger") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#00B2FF]" style={iconStyle}>
        <path d="M12 2C6.36 2 2 6.13 2 11.23c0 2.9 1.39 5.48 3.57 7.15.19.15.3.38.3.62l-.08 1.9c-.02.5.47.88.94.68l2.12-.91c.18-.08.38-.09.56-.03A10.45 10.45 0 0012 20.46c5.64 0 10-4.13 10-9.23S17.64 2 12 2zm1.09 11.45l-2.09-2.23a.41.41 0 00-.59 0l-4.08 4.09c-.31.31-.72-.12-.47-.47l4.08-4.09a.41.41 0 000-.59l-2.09-2.23c-.22-.24-.13-.62.2-.62h.01l2.09 2.23a.41.41 0 00.59 0l4.08-4.09c.31-.31.72.12.47.47l-4.08 4.09a.41.41 0 000 .59l2.09 2.23c.22.24.13.62-.2.62z"/>
      </svg>
    );
  }
  if (slug === "imessage") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#34C759]" style={iconStyle}>
        <path d="M12 2C6.48 2 2 6.02 2 11c0 2.2 1.05 4.2 2.82 5.61-.17.84-.62 2.31-.83 3.03-.09.31-.02.55.23.47.44-.15 2.92-1.25 4.31-2.02C9.52 18.37 10.74 18.5 12 18.5c5.52 0 10-4.02 10-9S17.52 2 12 2z"/>
      </svg>
    );
  }
  if (slug === "aliexpress") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#E62E04]" style={iconStyle}>
        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm4.5 10c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5 1.67 1.5 2.5-.67.5-1.5.5zm-9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5 1.67 1.5 2.5-.67.5-1.5.5z" />
      </svg>
    );
  }
  if (slug === "alibaba") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FF6A00]" style={iconStyle}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14h-7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-4.5-3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
      </svg>
    );
  }
  if (slug === "bestbuy") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FFF200]" style={iconStyle}>
        <path d="M21.4 11.6l-9-9c-.4-.4-.9-.6-1.4-.6H3c-1.1 0-2 .9-2 2v8c0 .5.2 1 .6 1.4l9 9c.4.4.9.6 1.4.6s1-.2 1.4-.6l8-8c.8-.8.8-2 0-2.8zM5.5 7C4.7 7 4 6.3 4 5.5S4.7 4 5.5 4 7 4.7 7 5.5 6.3 7 5.5 7z" />
      </svg>
    );
  }
  if (slug === "ebay") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
        <text x="0" y="18" fontStyle="normal" fontWeight="bold" fontSize="18" fontFamily="sans-serif">
          <tspan fill="#E53238">e</tspan>
          <tspan fill="#0064D2">b</tspan>
          <tspan fill="#F5AF02">a</tspan>
          <tspan fill="#86B817">y</tspan>
        </text>
      </svg>
    );
  }
  if (slug === "etsy") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#D5641C]" style={iconStyle}>
        <rect width="24" height="24" rx="4" />
        <text x="6" y="17" fill="white" fontWeight="bold" fontSize="16" fontFamily="serif">E</text>
      </svg>
    );
  }
  if (slug === "shopify") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#96BF48]" style={iconStyle}>
        <path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2zm5 12h-2c0-1.66-1.34-3-3-3s-3 1.34-3 3H7c0-2.76 2.24-5 5-5s5 2.24 5 5z" />
      </svg>
    );
  }
  if (slug === "walmart") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FFC220]" style={iconStyle}>
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(0 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(60 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(120 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(180 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(240 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(300 12 12)" />
      </svg>
    );
  }
  if (slug === "flipkart") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2874F0]" style={iconStyle}>
        <rect width="24" height="24" rx="4" />
        <path fill="#FFE11B" d="M17 9h-3c0-1.5-1-2.5-2.5-2.5S9 7.5 9 9H6v9h11V9zm-5-1.5c.8 0 1.5.7 1.5 1.5h-3c0-.8.7-1.5 1.5-1.5z" />
        <text x="10" y="16" fill="white" fontWeight="bold" fontSize="10" fontFamily="sans-serif">f</text>
      </svg>
    );
  }
  if (slug === "daraz") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FF5000]" style={iconStyle}>
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 7v10l10 5 10-5V7l-10 5z" />
      </svg>
    );
  }
  if (slug === "ecommerce") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-amber-400" style={iconStyle}>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    );
  }
  if (slug === "tripadvisor") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#00AF87]" style={iconStyle}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm-10 0C5.62 13.5 4.5 12.38 4.5 11s1.12-2.5 2.5-2.5S9.5 9.62 9.5 11s-1.12 2.5-2.5 2.5zM12 18c-2.33 0-4.31-1.37-5.18-3.35h10.36c-.87 1.98-2.85 3.35-5.18 3.35z" />
      </svg>
    );
  }
  if (slug === "airbnb") {
    return (
      <svg viewBox="0 0 32 32" fill="currentColor" className="text-[#FF5A5F]" style={iconStyle}>
        <path d="M16 1c-2.008 0-3.916 1.179-5.11 3.161L3.064 17.009c-2.124 3.513-2.124 7.844 0 11.357C4.195 30.221 6.103 31 8.11 31c1.474 0 2.94-.482 4.148-1.45L16 26.541l3.742 3.009c1.208.968 2.674 1.45 4.148 1.45 2.007 0 3.915-.779 5.046-2.634 2.124-3.513 2.124-7.844 0-11.357L21.11 4.161C19.916 2.179 18.008 1 16 1zm0 3c1.237 0 2.45.748 3.238 2.051l7.828 12.929c1.439 2.378 1.439 5.3 0 7.678-.718 1.186-1.921 1.792-3.148 1.792-.931 0-1.85-.304-2.617-.918L16 23.364l-5.301 4.268c-.767.614-1.686.918-2.617.918-1.227 0-2.43-.606-3.148-1.792-1.439-2.378-1.439-5.3 0-7.678l7.828-12.929C13.55 4.748 14.763 4 16 4zm0 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
      </svg>
    );
  }
  if (slug === "booking") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#003580]" style={iconStyle}>
        <rect width="24" height="24" rx="4" />
        <path fill="white" d="M6 6h4.5c1.4 0 2.3.8 2.3 2 0 .9-.6 1.6-1.4 1.8.9.2 1.6.9 1.6 2.1 0 1.5-1.1 2.1-2.5 2.1H6V6zm2 2.2v1.8h2.3c.5 0 .8-.2.8-.8s-.3-1-1-1H8zm0 3.8v2.4h2.5c.5 0 .9-.2.9-1s-.4-1.4-1.2-1.4H8zM16 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    );
  }
  if (slug === "playstore") {
    return (
      <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
        <path d="M3.2 2.1C3.1 2.3 3 2.7 3 3.1V20.9c0 .4.1.8.2 1L12.4 12 3.2 2.1z" fill="#34A853" />
        <path d="M15.8 8.6L3.2 2.1C3.2 2.1 3.2 2.1 3.2 2.1c.3-.2.8-.2 1.3.1l11.3 6.4 0 0z" fill="#4285F4" />
        <path d="M12.4 12L3.2 21.9c.5.3 1 .3 1.3.1l11.3-6.4 0 0L12.4 12z" fill="#EA4335" />
        <path d="M20.7 11.4l-4.9-2.8 0 0L12.4 12l3.4 3.4 4.9-2.8c.6-.3.9-.9.9-1.3 0-.4-.3-1-.9-1.3z" fill="#FBBC05" />
      </svg>
    );
  }
  if (slug === "fiverr") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#1DBF73]" style={iconStyle}>
        <rect width="24" height="24" rx="4" />
        <text x="4" y="17" fill="white" fontWeight="bold" fontSize="13" fontFamily="sans-serif">fi</text>
      </svg>
    );
  }
  if (slug === "testimonial") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-violet-400" style={iconStyle}>
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
      </svg>
    );
  }
  if (slug === "generic-1-star" || slug === "generic1star") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-500" style={iconStyle}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }
  if (slug === "generic-5-star" || slug === "generic5star") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FFC72C]" style={iconStyle}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }
  if (slug === "supplement") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-teal-400" style={iconStyle}>
        <path d="M16 2h-8c-1.1 0-2 .9-2 2v2h12V4c0-1.1-.9-2-2-2zm2 6H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8zm-6 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    );
  }

  // Fall back to getPlatformIcon if available
  const existing = getPlatformIcon(slug, size);
  if (existing) return existing;

  return <MessageSquare className="text-slate-400" style={iconStyle} />;
};

const REVIEW_CATEGORIES = [
  {
    title: "E-Commerce & Retail",
    icon: "🛍️",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    platforms: [
      { name: "Amazon", href: "/platform/amazon", slug: "amazon" },
      { name: "AliExpress", href: "/platform/aliexpress", slug: "aliexpress" },
      { name: "Alibaba", href: "/platform/alibaba", slug: "alibaba" },
      { name: "Best Buy", href: "/platform/bestbuy", slug: "bestbuy" },
      { name: "eBay", href: "/platform/ebay", slug: "ebay" },
      { name: "Etsy", href: "/platform/etsy", slug: "etsy" },
      { name: "Shopify Reviews", href: "/platform/shopify", slug: "shopify" },
      { name: "Walmart", href: "/platform/walmart", slug: "walmart" },
      { name: "Flipkart", href: "/platform/flipkart", slug: "flipkart" },
      { name: "Daraz", href: "/platform/daraz", slug: "daraz" },
      { name: "Ecommerce Popular", href: "/platform/ecommerce", slug: "ecommerce" },
    ],
  },
  {
    title: "Social Media & Forums",
    icon: "💬",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    platforms: [
      { name: "Facebook", href: "/platform/facebook", slug: "facebook" },
      { name: "Instagram", href: "/platform/instagram", slug: "instagram" },
      { name: "Twitter / X", href: "/platform/twitter", slug: "twitter" },
      { name: "TikTok", href: "/platform/tiktok", slug: "tiktok" },
      { name: "YouTube", href: "/platform/youtube", slug: "youtube" },
      { name: "Reddit", href: "/platform/reddit", slug: "reddit" },
      { name: "Discord", href: "/platform/discord", slug: "discord" },
      { name: "LinkedIn", href: "/platform/linkedin", slug: "linkedin" },
    ],
  },
  {
    title: "Local & Booking",
    icon: "📍",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    platforms: [
      { name: "Google Reviews", href: "/platform/google", slug: "google" },
      { name: "Trustpilot", href: "/platform/trustpilot", slug: "trustpilot" },
      { name: "TripAdvisor", href: "/platform/tripadvisor", slug: "tripadvisor" },
      { name: "Yelp", href: "/platform/yelp", slug: "yelp" },
      { name: "Airbnb", href: "/platform/airbnb", slug: "airbnb" },
      { name: "Booking Ratings", href: "/platform/booking", slug: "booking" },
    ],
  },
  {
    title: "Apps & Custom Layouts",
    icon: "⚙️",
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    platforms: [
      { name: "App Store", href: "/platform/appstore", slug: "appstore" },
      { name: "Play Store Layouts", href: "/platform/playstore", slug: "playstore" },
      { name: "Steam Reviews", href: "/platform/steam", slug: "steam" },
      { name: "Fiverr Services", href: "/platform/fiverr", slug: "fiverr" },
      { name: "Custom Testimonial", href: "/platform/testimonial", slug: "testimonial" },
      { name: "IMDb Reviews", href: "/platform/imdb", slug: "imdb" },
      { name: "Generic 1-Star", href: "/platform/generic-1-star", slug: "generic-1-star" },
      { name: "Generic 5-Star", href: "/platform/generic-5-star", slug: "generic-5-star" },
    ],
  },
];

const CHAT_PLATFORMS = [
  { name: "WhatsApp", href: "/chat/whatsapp", slug: "whatsapp", description: "WhatsApp bubble chat screenshot mockup" },
  { name: "Messenger", href: "/chat/messenger", slug: "messenger", description: "Meta Messenger bubble conversation mockup" },
  { name: "Instagram DMs", href: "/chat/instagram", slug: "instagram", description: "Instagram direct message screens" },
  { name: "Telegram", href: "/chat/telegram", slug: "telegram", description: "Telegram message layout style templates" },
  { name: "Twitter / X DMs", href: "/chat/twitter", slug: "twitter", description: "Twitter DM interface preview screen" },
  { name: "Discord Chat", href: "/chat/discord", slug: "discord", description: "Discord server channel chat feeds layout" },
  { name: "iMessage", href: "/chat/imessage", slug: "imessage", description: "iOS standard text message bubble mockup" },
];

const PAYMENT_PLATFORMS = [
  { name: "Paytm Success", href: "/payment/paytm", slug: "paytm", description: "Indian digital wallet receipt layout" },
  { name: "Stripe Receipt", href: "/payment/stripe", slug: "stripe", description: "Standard Stripe checkout invoice screenshot" },
  { name: "Google Pay", href: "/payment/googlepay", slug: "googlepay", description: "GPay payment confirmation screenshot" },
  { name: "Google Wallet", href: "/payment/googlewallet", slug: "googlewallet", description: "Mobile wallet pass mockup template" },
  { name: "Apple Pay", href: "/payment/applepay", slug: "applepay", description: "Apple Wallet transaction screen mockup" },
  { name: "Venmo", href: "/payment/venmo", slug: "venmo", description: "Venmo social payment feed screen layout" },
  { name: "BHIM UPI", href: "/payment/upi", slug: "upi", description: "Indian standard UPI confirmation screen" },
  { name: "PhonePe", href: "/payment/phonepay", slug: "phonepay", description: "PhonePe payment confirmation layout" },
  { name: "Fonepay", href: "/payment/fonepay", slug: "fonepay", description: "Fonepay Nepal receipt screen mockup" },
  { name: "Cash App", href: "/payment/cashapp", slug: "cashapp", description: "Cash App successful transfer receipt" },
];

const BILL_PLATFORMS = [
  { name: "Amazon Invoice", href: "/bill-generator/amazon", slug: "amazon", description: "Official Amazon order invoice PDF mockup" },
  { name: "Walmart Invoice", href: "/bill-generator/walmart", slug: "walmart", description: "Standard Walmart order details layout" },
  { name: "Product Bill", href: "/bill-generator/supplement", slug: "supplement", description: "Custom product invoice & POS receipt mockup" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<
    "reviews" | "chats" | "payments" | "bills" | "ai" | null
  >(null);
  
  // Mobile accordion states
  const [mobileReviewsOpen, setMobileReviewsOpen] = useState(false);
  const [mobileChatsOpen, setMobileChatsOpen] = useState(false);
  const [mobilePaymentsOpen, setMobilePaymentsOpen] = useState(false);
  const [mobileBillsOpen, setMobileBillsOpen] = useState(false);
  const [mobileAIOpen, setMobileAIOpen] = useState(false);
  
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const navigation: { name: string; href: string }[] = [];

  useEffect(() => {
    setDesktopDropdown(null);
    setIsMenuOpen(false);
    setMobileReviewsOpen(false);
    setMobileChatsOpen(false);
    setMobilePaymentsOpen(false);
    setMobileBillsOpen(false);
    setMobileAIOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!desktopMenuRef.current) return;
      if (!desktopMenuRef.current.contains(event.target as Node)) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "/home";
    return pathname === href;
  };

  const isReviewRoute = pathname.startsWith("/platform/");
  const isChatRoute = pathname.startsWith("/chat");
  const isPaymentRoute = pathname.startsWith("/payment");
  const isBillRoute = pathname.startsWith("/bill-generator");

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-900 bg-[#0B0F14]/90 backdrop-blur-md text-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={desktopMenuRef}>
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Image
                src="/logo/logo.png"
                alt="ReviewCraft Logo"
                width={200}
                height={40}
                className="h-8 sm:h-10 w-auto brightness-0 invert filter transition-all duration-300 hover:opacity-90"
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActiveRoute(item.href)
                    ? "bg-[#1E293B] text-white border border-slate-700/50 shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Reviews Dropdown Link (Mega Menu) */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "reviews" ? null : "reviews",
                  )
                }
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                  desktopDropdown === "reviews" || isReviewRoute
                    ? "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
                aria-expanded={desktopDropdown === "reviews"}
                aria-haspopup="menu"
              >
                Review Platforms
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopDropdown === "reviews" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "reviews" && (
                <div className="absolute left-1/2 top-full mt-2 w-[58rem] -translate-x-1/2 rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-2xl z-50">
                  <div className="grid grid-cols-4 gap-6">
                    {REVIEW_CATEGORIES.map((category) => (
                      <div key={category.title} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`flex items-center justify-center text-xs font-bold px-2 py-1.5 rounded-lg border ${category.color}`}>
                            <span className="mr-1">{category.icon}</span>
                            {category.title}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {category.platforms.map((platform) => (
                            <li key={platform.slug}>
                              <Link
                                href={platform.href}
                                className="group/item flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-slate-300 hover:bg-slate-800/60 hover:text-white transition-all duration-200"
                                onClick={() => setDesktopDropdown(null)}
                              >
                                <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-md bg-slate-800/80 border border-slate-700/30 group-hover/item:bg-slate-700/80 group-hover/item:border-slate-600 transition-colors">
                                  {getBrandIcon(platform.slug, 14)}
                                </span>
                                <span className="truncate">{platform.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat Platforms Link */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "chats" ? null : "chats",
                  )
                }
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                  desktopDropdown === "chats" || isChatRoute
                    ? "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
                aria-expanded={desktopDropdown === "chats"}
                aria-haspopup="menu"
              >
                Chat Platforms
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopDropdown === "chats" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "chats" && (
                <div className="absolute left-0 top-full mt-2 w-[32rem] rounded-2xl border border-slate-800 bg-[#111827] p-4 shadow-2xl overflow-hidden z-50">
                  <div className="grid grid-cols-2 gap-2">
                    {CHAT_PLATFORMS.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={platform.href}
                        className="group/item flex gap-3 rounded-xl p-2.5 hover:bg-slate-800/60 transition-all duration-200"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-xl bg-slate-800/80 border border-slate-700/30 group-hover/item:bg-slate-700/80 group-hover/item:border-slate-600 transition-colors">
                          {getBrandIcon(platform.slug, 16)}
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">{platform.name}</div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5 group-hover/item:text-slate-300 transition-colors">{platform.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Payment Receipts Link */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "payments" ? null : "payments",
                  )
                }
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                  desktopDropdown === "payments" || isPaymentRoute
                    ? "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
                aria-expanded={desktopDropdown === "payments"}
                aria-haspopup="menu"
              >
                Payment Receipts
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopDropdown === "payments" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "payments" && (
                <div className="absolute left-0 top-full mt-2 w-[34rem] rounded-2xl border border-slate-800 bg-[#111827] p-4 shadow-2xl overflow-hidden z-50">
                  <div className="grid grid-cols-2 gap-2">
                    {PAYMENT_PLATFORMS.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={platform.href}
                        className="group/item flex gap-3 rounded-xl p-2.5 hover:bg-slate-800/60 transition-all duration-200"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-xl bg-slate-800/80 border border-slate-700/30 group-hover/item:bg-slate-700/80 group-hover/item:border-slate-600 transition-colors">
                          {getBrandIcon(platform.slug, 16)}
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">{platform.name}</div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5 group-hover/item:text-slate-300 transition-colors">{platform.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bill Generator Link */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "bills" ? null : "bills",
                  )
                }
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                  desktopDropdown === "bills" || isBillRoute
                    ? "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
                aria-expanded={desktopDropdown === "bills"}
                aria-haspopup="menu"
              >
                Bill Generator
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopDropdown === "bills" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "bills" && (
                <div className="absolute left-0 top-full mt-2 w-[34rem] rounded-2xl border border-slate-800 bg-[#111827] p-4 shadow-2xl overflow-hidden z-50">
                  <div className="grid grid-cols-2 gap-2">
                    {BILL_PLATFORMS.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={platform.href}
                        className="group/item flex gap-3 rounded-xl p-2.5 hover:bg-slate-800/60 transition-all duration-200"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-xl bg-slate-800/80 border border-slate-700/30 group-hover/item:bg-slate-700/80 group-hover/item:border-slate-600 transition-colors">
                          {getBrandIcon(platform.slug, 16)}
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">{platform.name}</div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5 group-hover/item:text-slate-300 transition-colors">{platform.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI Tools Dropdown Link */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "ai" ? null : "ai",
                  )
                }
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                  desktopDropdown === "ai"
                    ? "bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
                aria-expanded={desktopDropdown === "ai"}
                aria-haspopup="menu"
              >
                AI Tools
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopDropdown === "ai" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "ai" && (
                <div className="absolute left-0 top-full mt-2 w-[20rem] rounded-2xl border border-slate-800 bg-[#111827] p-2 shadow-2xl overflow-hidden z-50">
                  <Link
                    href="/ai-generator"
                    onClick={() => setDesktopDropdown(null)}
                    className="group/item flex gap-3 rounded-xl p-3 hover:bg-slate-800/60 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center shrink-0 w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover/item:bg-emerald-500/20 transition-colors">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">AI Reviewer</span>
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">PRO</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 group-hover/item:text-slate-300 transition-colors">Generate reviews with locales automatically.</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="ml-2 h-6 w-px bg-slate-800" aria-hidden="true" />

            {/* Educational Use Only Badge */}
            <div className="ml-2 flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="hidden lg:inline">Educational Use Only</span>
              <span className="lg:hidden">Educational</span>
            </div>

            {/* Action CTA Button */}
            <Link
              href="/home"
              className="ml-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all shadow-md shadow-indigo-950/40 hover:from-indigo-500 hover:to-violet-500 hover:shadow-lg hover:shadow-indigo-950/60 active:scale-[0.98]"
            >
              Try Generator
            </Link>
          </div>

          {/* Hamburger Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-900 bg-[#0B0F14] absolute left-0 right-0 top-16 shadow-2xl p-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto z-50">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActiveRoute(item.href)
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Review Platforms accordion */}
              <div className="pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileReviewsOpen(!mobileReviewsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isReviewRoute
                      ? "bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  aria-expanded={mobileReviewsOpen}
                >
                  <span>Review Platforms</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileReviewsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {mobileReviewsOpen && (
                  <div className="mt-2 pl-2 pr-1 py-1 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4 max-h-[18rem] overflow-y-auto">
                    {REVIEW_CATEGORIES.map((category) => (
                      <div key={category.title} className="p-2 space-y-1">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2.5 mb-1.5 flex items-center gap-1.5">
                          <span>{category.icon}</span>
                          {category.title}
                        </div>
                        <div className="grid grid-cols-1 gap-0.5">
                          {category.platforms.map((platform) => (
                            <Link
                              key={platform.slug}
                              href={platform.href}
                              className="flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileReviewsOpen(false);
                              }}
                            >
                              <span className="shrink-0">{getBrandIcon(platform.slug, 12)}</span>
                              <span>{platform.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Chat Platforms accordion */}
              <div className="pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileChatsOpen(!mobileChatsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isChatRoute
                      ? "bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  aria-expanded={mobileChatsOpen}
                >
                  <span>Chat Platforms</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileChatsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {mobileChatsOpen && (
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-2 space-y-0.5 max-h-[15rem] overflow-y-auto">
                    {CHAT_PLATFORMS.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={platform.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileChatsOpen(false);
                        }}
                      >
                        <span className="shrink-0">{getBrandIcon(platform.slug, 14)}</span>
                        <span>{platform.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Payment Receipts accordion */}
              <div className="pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobilePaymentsOpen(!mobilePaymentsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isPaymentRoute
                      ? "bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  aria-expanded={mobilePaymentsOpen}
                >
                  <span>Payment Receipts</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobilePaymentsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {mobilePaymentsOpen && (
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-2 space-y-0.5 max-h-[15rem] overflow-y-auto">
                    {PAYMENT_PLATFORMS.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={platform.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobilePaymentsOpen(false);
                        }}
                      >
                        <span className="shrink-0">{getBrandIcon(platform.slug, 14)}</span>
                        <span>{platform.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Bill Generator accordion */}
              <div className="pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileBillsOpen(!mobileBillsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isBillRoute
                      ? "bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                  aria-expanded={mobileBillsOpen}
                >
                  <span>Bill Generator</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileBillsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {mobileBillsOpen && (
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-2 space-y-0.5 max-h-[15rem] overflow-y-auto">
                    {BILL_PLATFORMS.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={platform.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileBillsOpen(false);
                        }}
                      >
                        <span className="shrink-0">{getBrandIcon(platform.slug, 14)}</span>
                        <span>{platform.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Tools accordion */}
              <div className="pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileAIOpen(!mobileAIOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
                  aria-expanded={mobileAIOpen}
                >
                  <span>AI Tools</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileAIOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {mobileAIOpen && (
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-2 space-y-0.5">
                    <Link
                      href="/ai-generator"
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors font-medium"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setMobileAIOpen(false);
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Generate AI Reviews</span>
                      <span className="ml-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">PRO</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Call To Action & Notice */}
              <div className="pt-4 space-y-2.5">
                <Link
                  href="/home"
                  className="block w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white hover:from-indigo-500 hover:to-violet-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try Generator
                </Link>

                <div className="px-4 py-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center space-x-2 text-xs text-emerald-400">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Educational Use Only</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
