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

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<
    "reviews" | "chats" | "payments" | null
  >(null);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isChatsOpen, setIsChatsOpen] = useState(false);
  const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Terms", href: "/terms" },
  ];

  const reviewPlatforms = [
    { name: "Amazon", href: "/platform/amazon" },
    { name: "AliExpress", href: "/platform/aliexpress" },
    { name: "Alibaba", href: "/platform/alibaba" },
    { name: "Airbnb", href: "/platform/airbnb" },
    { name: "Best Buy", href: "/platform/bestbuy" },
    { name: "Booking-style Ratings", href: "/platform/booking" },
    { name: "Custom Testimonial Layouts", href: "/platform/testimonial" },
    { name: "Daraz", href: "/platform/daraz" },
    { name: "Discord", href: "/platform/discord" },
    { name: "eBay", href: "/platform/ebay" },
    { name: "Ecommerce (Popular)", href: "/platform/ecommerce" },
    { name: "Etsy", href: "/platform/etsy" },
    { name: "Facebook", href: "/platform/facebook" },
    { name: "Fiverr-style Service Reviews", href: "/platform/fiverr" },
    { name: "Flipkart", href: "/platform/flipkart" },
    { name: "Generic 1-star Templates", href: "/platform/generic-1-star" },
    { name: "Generic 5-star Templates", href: "/platform/generic-5-star" },
    { name: "Google", href: "/platform/google" },
    { name: "IMDb", href: "/platform/imdb" },
    { name: "Instagram", href: "/platform/instagram" },
    { name: "LinkedIn", href: "/platform/linkedin" },
    { name: "Netflix", href: "/platform/netflix" },
    { name: "Play Store Layouts", href: "/platform/playstore" },
    { name: "Reddit", href: "/platform/reddit" },
    { name: "Shopify Product Reviews", href: "/platform/shopify" },
    { name: "Spotify", href: "/platform/spotify" },
    { name: "Steam", href: "/platform/steam" },
    { name: "TikTok", href: "/platform/tiktok" },
    { name: "TripAdvisor", href: "/platform/tripadvisor" },
    { name: "Trustpilot", href: "/platform/trustpilot" },
    { name: "Twitter", href: "/platform/twitter" },
    { name: "Walmart", href: "/platform/walmart" },
    { name: "Yelp", href: "/platform/yelp" },
    { name: "YouTube", href: "/platform/youtube" },
  ];

  const chatPlatforms = [
    { name: "WhatsApp", href: "/chat/whatsapp" },
    { name: "Messenger", href: "/chat/messenger" },
    { name: "Instagram", href: "/chat/instagram" },
    { name: "Telegram", href: "/chat/telegram" },
    { name: "Twitter", href: "/chat/twitter" },
    { name: "Discord", href: "/chat/discord" },
    { name: "iMessage", href: "/chat/imessage" },
  ];

  const paymentPlatforms = [
    { name: "Paytm Success", href: "/payment/paytm" },
    { name: "Stripe Receipt", href: "/payment/stripe" },
    { name: "Google Pay", href: "/payment/googlepay" },
    { name: "Google Wallet", href: "/payment/googlewallet" },
    { name: "Apple Pay", href: "/payment/applepay" },
    { name: "Venmo", href: "/payment/venmo" },
    { name: "BHIM UPI", href: "/payment/upi" },
    { name: "PhonePe", href: "/payment/phonepay" },
    { name: "Fonepay", href: "/payment/fonepay" },
    { name: "Cash App", href: "/payment/cashapp" },
  ];

  useEffect(() => {
    setDesktopDropdown(null);
    setIsMenuOpen(false);
    setIsReviewsOpen(false);
    setIsChatsOpen(false);
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

  const baseLinkClass =
    "rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap";

  const desktopLinkClass = (href: string) =>
    `${baseLinkClass} ${
      isActiveRoute(href)
        ? "bg-indigo-600 text-white shadow-sm"
        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
    }`;

  const desktopMenuClass = (active: boolean) =>
    `${baseLinkClass} inline-flex items-center gap-1 ${
      active
        ? "bg-indigo-100 text-indigo-700"
        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-md">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={desktopMenuRef}
      >
        <div className="flex justify-between items-center h-16">
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
                className="h-8 sm:h-10 w-auto"
                unoptimized
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={desktopLinkClass(item.href)}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "reviews" ? null : "reviews",
                  )
                }
                className={desktopMenuClass(
                  desktopDropdown === "reviews" || isReviewRoute,
                )}
                aria-expanded={desktopDropdown === "reviews"}
                aria-haspopup="menu"
              >
                Review Platforms
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    desktopDropdown === "reviews" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "reviews" && (
                <div className="absolute left-1/2 top-full mt-2 w-[42rem] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl z-50">
                  <div className="grid grid-cols-3 gap-1">
                    {reviewPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "chats" ? null : "chats",
                  )
                }
                className={desktopMenuClass(
                  desktopDropdown === "chats" || isChatRoute,
                )}
                aria-expanded={desktopDropdown === "chats"}
                aria-haspopup="menu"
              >
                Chat Platforms
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    desktopDropdown === "chats" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "chats" && (
                <div className="absolute left-0 top-full mt-2 w-[18rem] rounded-2xl border border-gray-200 bg-white p-3 shadow-xl overflow-hidden z-50">
                  <div className="grid grid-cols-2 gap-1">
                    {chatPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setDesktopDropdown((open) =>
                    open === "payments" ? null : "payments",
                  )
                }
                className={desktopMenuClass(
                  desktopDropdown === "payments" || isPaymentRoute,
                )}
                aria-expanded={desktopDropdown === "payments"}
                aria-haspopup="menu"
              >
                Payment Receipts
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    desktopDropdown === "payments" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {desktopDropdown === "payments" && (
                <div className="absolute left-0 top-full mt-2 w-[18rem] rounded-2xl border border-gray-200 bg-white p-3 shadow-xl overflow-hidden z-50">
                  <div className="grid grid-cols-2 gap-1">
                    {paymentPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="ml-2 h-6 w-px bg-gray-200" aria-hidden="true" />

            <div className="ml-2 flex items-center space-x-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="hidden lg:inline">Educational Use Only</span>
              <span className="lg:hidden">Educational</span>
            </div>

            <Link
              href="/home"
              className="ml-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              Try Generator
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActiveRoute(item.href)
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReviewsOpen((open) => !open)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isReviewRoute
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  aria-expanded={isReviewsOpen}
                  aria-haspopup="menu"
                >
                  <span>Review Platforms</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      isReviewsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isReviewsOpen && (
                  <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                    {reviewPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsReviewsOpen(false);
                        }}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsChatsOpen((open) => !open)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isChatRoute
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  aria-expanded={isChatsOpen}
                  aria-haspopup="menu"
                >
                  <span>Chat Platforms</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      isChatsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isChatsOpen && (
                  <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                    {chatPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsChatsOpen(false);
                        }}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPaymentsOpen((open) => !open)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isPaymentRoute
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  aria-expanded={isPaymentsOpen}
                  aria-haspopup="menu"
                >
                  <span>Payment Receipts</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      isPaymentsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isPaymentsOpen && (
                  <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                    {paymentPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsPaymentsOpen(false);
                        }}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/home"
                className="mx-3 mt-3 block rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Try Generator
              </Link>

              <div className="mx-3 mt-3 mb-1 px-3 py-2 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center space-x-2 text-sm text-emerald-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Educational Use Only</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
