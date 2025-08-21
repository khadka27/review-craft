"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: "15+ Social Platforms",
      description:
        "Generate reviews for Reddit, Twitter, Instagram, Amazon, Netflix, Spotify, and more.",
      icon: "🌐",
    },
    {
      title: "Authentic Design",
      description:
        "Pixel-perfect replicas of real social media interfaces for maximum authenticity.",
      icon: "✨",
    },
    {
      title: "Easy Download",
      description:
        "Download reviews as PNG images or copy them to your clipboard instantly.",
      icon: "⬇️",
    },
    {
      title: "Educational Purpose",
      description:
        "Perfect for design mockups, presentations, and educational demonstrations.",
      icon: "📚",
    },
    {
      title: "Real User Data",
      description:
        "Uses authentic user profiles and avatars from external APIs for realism.",
      icon: "👤",
    },
    {
      title: "Responsive Design",
      description:
        "Works seamlessly across all devices - desktop, tablet, and mobile.",
      icon: "📱",
    },
  ];

  const platforms = [
    {
      name: "Reddit",
      logo: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png",
      color: "bg-orange-500",
    },
    {
      name: "Twitter",
      logo: "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png",
      color: "bg-black",
    },
    {
      name: "Instagram",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png",
      color: "bg-pink-500",
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      color: "bg-yellow-500",
    },
    {
      name: "Netflix",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
      color: "bg-red-600",
    },
    {
      name: "Spotify",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png",
      color: "bg-green-500",
    },
    {
      name: "LinkedIn",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png",
      color: "bg-blue-600",
    },
    {
      name: "YouTube",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png",
      color: "bg-red-500",
    },
    {
      name: "TikTok",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/TikTok-Logo.png",
      color: "bg-black",
    },
    {
      name: "Steam",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Steam-Logo.png",
      color: "bg-blue-800",
    },
    {
      name: "Yelp",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Yelp-Logo.png",
      color: "bg-red-500",
    },
    {
      name: "Trustpilot",
      logo: "https://logos-world.net/wp-content/uploads/2022/01/Trustpilot-Logo.png",
      color: "bg-green-600",
    },
    {
      name: "IMDB",
      logo: "https://logos-world.net/wp-content/uploads/2021/04/IMDb-Logo.png",
      color: "bg-yellow-600",
    },
    {
      name: "Facebook",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
      color: "bg-blue-600",
    },
    {
      name: "Discord",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
      color: "bg-indigo-600",
    },
  ];

  const faqs = [
    {
      question: "What is ReviewCraft?",
      answer:
        "ReviewCraft is an AI-powered tool that generates realistic-looking social media reviews for educational purposes, design mockups, and presentations. It supports over 15 popular platforms.",
    },
    {
      question: "Is this for creating fake reviews?",
      answer:
        "No, ReviewCraft is designed for educational purposes, design mockups, and presentations only. All generated content is clearly marked as simulated and should not be used to deceive or mislead.",
    },
    {
      question: "How realistic are the generated reviews?",
      answer:
        "Our reviews use real user data from APIs and replicate the exact design of social media platforms to create highly authentic-looking content for educational and demonstration purposes.",
    },
    {
      question: "Can I download the reviews?",
      answer:
        "Yes! You can download reviews as PNG images or copy them to your clipboard for use in presentations, mockups, or educational materials.",
    },
    {
      question: "Which platforms are supported?",
      answer:
        "We support 15+ platforms including Reddit, Twitter, Instagram, Amazon, Netflix, Spotify, LinkedIn, YouTube, TikTok, Steam, Yelp, Trustpilot, IMDB, Facebook, and Discord.",
    },
    {
      question: "Is ReviewCraft free to use?",
      answer:
        "Yes, ReviewCraft is completely free to use for educational and design purposes. No registration or payment required.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Authentic
              <span className="text-indigo-600"> Social Media Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate realistic, professional-looking social media reviews for
              educational purposes, design mockups, and presentations. Support
              for 15+ popular platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Start Generating Reviews
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ReviewCraft?
            </h2>
            <p className="text-xl text-gray-600">
              Professional-grade tools for creating authentic social media
              content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Generate reviews for all major social media and review platforms
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 overflow-hidden">
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    unoptimized
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {platform.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Create professional reviews in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Choose Platform
              </h3>
              <p className="text-gray-600">
                Select from 15+ supported social media and review platforms
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enter Details
              </h3>
              <p className="text-gray-600">
                Provide review content, ratings, and any custom preferences
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Download & Use
              </h3>
              <p className="text-gray-600">
                Download as PNG or copy to clipboard for your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ReviewCraft
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Amazing Reviews?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start generating professional social media reviews for your projects
            today
          </p>
          <Link
            href="/"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
