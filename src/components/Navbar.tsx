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
  const existing = getPlatformIcon(slug, size);
  if (existing) return existing;

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

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<
    "reviews" | "chats" | "payments" | "ai" | null
  >(null);
  
  // Mobile accordion states
  const [mobileReviewsOpen, setMobileReviewsOpen] = useState(false);
  const [mobileChatsOpen, setMobileChatsOpen] = useState(false);
  const [mobilePaymentsOpen, setMobilePaymentsOpen] = useState(false);
  const [mobileAIOpen, setMobileAIOpen] = useState(false);
  
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const navigation: { name: string; href: string }[] = [];

  useEffect(() => {
    setDesktopDropdown(null);
    setIsMenuOpen(false);
    setMobileReviewsOpen(false);
    setMobileChatsOpen(false);
    setMobilePaymentsOpen(false);
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
          <div className="md:hidden border-t border-slate-900 bg-[#0B0F14]/98 backdrop-blur-md absolute left-0 right-0 top-16 shadow-2xl p-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto z-50">
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
