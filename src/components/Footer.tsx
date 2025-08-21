"use client";

import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";

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
      { name: "Privacy Policy", href: "/terms#privacy" },
      { name: "Disclaimer", href: "/terms#disclaimer" },
    ],
    platforms: [
      { name: "Reddit Reviews", href: "/?platform=reddit" },
      { name: "Twitter Reviews", href: "/?platform=twitter" },
      { name: "Instagram Reviews", href: "/?platform=instagram" },
      { name: "Amazon Reviews", href: "/?platform=amazon" },
    ],
    connect: [
      {
        name: "Support",
        href: "/about",
        external: false,
      },
      {
        name: "Documentation",
        href: "/about",
        external: false,
      },
      {
        name: "Contact",
        href: "/about",
        external: false,
      },
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
              reviews for 15+ platforms.
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

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
