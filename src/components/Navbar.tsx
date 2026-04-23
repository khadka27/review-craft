"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isChatsOpen, setIsChatsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Terms", href: "/terms" },
  ];

  const reviewPlatforms = [
    { name: "Amazon", href: "/platform/amazon" },
    { name: "Discord", href: "/platform/discord" },
    { name: "Facebook", href: "/platform/facebook" },
    { name: "Google", href: "/platform/google" },
    { name: "IMDb", href: "/platform/imdb" },
    { name: "Instagram", href: "/platform/instagram" },
    { name: "LinkedIn", href: "/platform/linkedin" },
    { name: "Netflix", href: "/platform/netflix" },
    { name: "Reddit", href: "/platform/reddit" },
    { name: "Spotify", href: "/platform/spotify" },
    { name: "Steam", href: "/platform/steam" },
    { name: "TikTok", href: "/platform/tiktok" },
    { name: "Trustpilot", href: "/platform/trustpilot" },
    { name: "Twitter", href: "/platform/twitter" },
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

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
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

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsReviewsOpen((open) => !open)}
                className="inline-flex items-center gap-1 text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                aria-expanded={isReviewsOpen}
                aria-haspopup="menu"
              >
                Review Platforms
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </button>

              {isReviewsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden z-50">
                  <div className="max-h-80 overflow-y-auto py-2">
                    {reviewPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setIsReviewsOpen(false)}
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
                onClick={() => setIsChatsOpen((open) => !open)}
                className="inline-flex items-center gap-1 text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                aria-expanded={isChatsOpen}
                aria-haspopup="menu"
              >
                Chat Platforms
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </button>

              {isChatsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden z-50">
                  <div className="max-h-80 overflow-y-auto py-2">
                    {chatPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setIsChatsOpen(false)}
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="ml-4 flex items-center space-x-2 text-xs text-gray-500 bg-green-50 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="hidden lg:inline">Educational Use Only</span>
              <span className="lg:hidden">Educational</span>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReviewsOpen((open) => !open)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
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
                  <div className="mt-2 rounded-md border border-gray-200 bg-gray-50 overflow-hidden">
                    {reviewPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-6 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
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
                  className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
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
                  <div className="mt-2 rounded-md border border-gray-200 bg-gray-50 overflow-hidden">
                    {chatPlatforms.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.href}
                        className="block px-6 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
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

              <div className="mx-3 mt-3 mb-2 px-3 py-2 bg-green-50 rounded-md flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
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
