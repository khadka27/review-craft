"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Generator", href: "/" },
      { name: "About", href: "/about" },
      { name: "Features", href: "/home#features" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Acceptable Use", href: "/acceptable-use" },
    ],
    reviewPlatforms: [
      { name: "Amazon", href: "/platform/amazon" },
      { name: "Airbnb", href: "/platform/airbnb" },
      { name: "Booking-style Ratings", href: "/platform/booking" },
      { name: "Custom Testimonial Layouts", href: "/platform/testimonial" },
      { name: "Discord", href: "/platform/discord" },
      { name: "Ecommerce Review Formats", href: "/platform/ecommerce" },
      { name: "Facebook", href: "/platform/facebook" },
      { name: "Fiverr-style Service Reviews", href: "/platform/fiverr" },
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
      { name: "Yelp", href: "/platform/yelp" },
      { name: "YouTube", href: "/platform/youtube" },
    ],
    chatPlatforms: [
      { name: "WhatsApp", href: "/chat/whatsapp" },
      { name: "Messenger", href: "/chat/messenger" },
      { name: "Instagram", href: "/chat/instagram" },
      { name: "Telegram", href: "/chat/telegram" },
      { name: "Twitter", href: "/chat/twitter" },
      { name: "Discord", href: "/chat/discord" },
      { name: "iMessage", href: "/chat/imessage" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo/logo.png"
                alt="ReviewCraft Logo"
                width={200}
                height={40}
                className="h-8 sm:h-10 w-auto"
                unoptimized
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              AI-powered social media review generator for educational purposes,
              design mockups, and presentations. Create authentic-looking
              reviews for 26+ platforms.
            </p>
            <div className="inline-flex items-center space-x-2 text-xs text-gray-400 bg-green-900/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Educational Use Only</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Review Platform Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Review Platforms
            </h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {footerLinks.reviewPlatforms.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chat Platform Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            Chat Platforms
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {footerLinks.chatPlatforms.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block rounded-lg border border-gray-800 bg-gray-800/40 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-2 text-sm text-gray-400">
              <span>
                © {currentYear} ReviewCraft. Educational tool for design
                mockups.
              </span>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-right">
              <span>
                All generated content is simulated for educational purposes only
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
