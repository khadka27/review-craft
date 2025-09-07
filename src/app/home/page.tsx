"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: "Instant Reviews",
      description:
        "Generate fake product reviews quickly with realistic details every time.",
      icon: "/icons/lightning.svg",
      alt: "Lightning icon for instant reviews",
    },
    {
      title: "Platform Screens",
      description:
        "Create accurate screenshots for TikTok, Amazon, Instagram, and more.",
      icon: "/icons/mobile.svg",
      alt: "Mobile phone icon for platform screens",
    },
    {
      title: "Auto Details",
      description:
        "Names, usernames, avatars, dates, likes, shares—auto-filled instantly.",
      icon: "/icons/robot.svg",
      alt: "Robot icon for automated details",
    },
    {
      title: "Engage Metrics",
      description:
        "Control likes, replies, shares, and retweets for natural look.",
      icon: "/icons/chart.svg",
      alt: "Chart icon for engagement metrics",
    },
    {
      title: "Add Images",
      description:
        "Upload custom visuals or attach review images to boost realism.",
      icon: "/icons/image.svg",
      alt: "Image icon for adding visuals",
    },
    {
      title: "Easy Download",
      description: "Save your review screenshot as PNG or JPG in one click.",
      icon: "/icons/download.svg",
      alt: "Download icon for easy saving",
    },
    {
      title: "Free & Open",
      description:
        "100% free tool with no login needed—start creating right away.",
      icon: "/icons/free.svg",
      alt: "Free icon for no cost tool",
    },
    {
      title: "AI-Powered",
      description:
        "Generate natural-sounding reviews with our AI fake review maker.",
      icon: "/icons/brain.svg",
      alt: "Brain icon for AI-powered features",
    },
  ];

  const platforms = [
    {
      name: "TikTok",
      logo: "/icons/tiktok.svg",
      color: "bg-black",
      description: "TikTok Fake Reviews Generator",
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      color: "bg-yellow-500",
      description: "Amazon Fake Product Reviews Generator",
    },
    {
      name: "Instagram",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png",
      color: "bg-pink-500",
      description: "Instagram Fake Customer Reviews Generator",
    },
    {
      name: "Twitter",
      logo: "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png",
      color: "bg-black",
      description: "Twitter/X Fake Feedback Generator",
    },
    {
      name: "Facebook",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
      color: "bg-blue-600",
      description: "Facebook Fake Review Screenshot Generator",
    },
    {
      name: "YouTube",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png",
      color: "bg-red-500",
      description: "YouTube Fake Review Maker",
    },
    {
      name: "Reddit",
      logo: "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png",
      color: "bg-orange-500",
      description: "Reddit Fake Feedback Generator",
    },
    {
      name: "LinkedIn",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png",
      color: "bg-blue-600",
      description: "LinkedIn Fake Review Maker",
    },
    {
      name: "Netflix",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
      color: "bg-red-600",
      description: "Netflix Reviews",
    },
    {
      name: "Spotify",
      logo: "/icons/spotify.svg",
      color: "bg-green-500",
      description: "Spotify Reviews",
    },
    {
      name: "Steam",
      logo: "/icons/steam.svg",
      color: "bg-blue-800",
      description: "Steam Reviews",
    },
    {
      name: "Yelp",
      logo: "/icons/yelp.svg",
      color: "bg-red-500",
      description: "Yelp Reviews",
    },
    {
      name: "Trustpilot",
      logo: "/icons/trustpilot.svg",
      color: "bg-green-600",
      description: "Trustpilot Reviews",
    },
    {
      name: "IMDB",
      logo: "/icons/imdb.svg",
      color: "bg-yellow-600",
      description: "IMDB Reviews",
    },
    {
      name: "Discord",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
      color: "bg-indigo-600",
      description: "Discord Reviews",
    },
  ];

  const faqs = [
    {
      question: "What is Review Craft?",
      answer:
        "Review Craft is a free fake reviews generator that creates realistic review screenshots for 14+ platforms instantly. No sign-up, no cost—just pure creative freedom for mockups, presentations, and content creation.",
    },
    {
      question: "Is this for creating fake reviews to deceive people?",
      answer:
        "No! Review Craft is designed for educational, creative, and mockup purposes only. Using fake reviews to deceive customers or mislead audiences is unethical and against our intended use.",
    },
    {
      question: "How realistic are the generated reviews?",
      answer:
        "Our AI-powered fake feedback generator creates highly realistic reviews with authentic user details, names, avatars, dates, and engagement metrics that match each platform's design perfectly.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No! Review Craft is 100% free with no login required. You can start creating fake review screenshots instantly without any registration or personal information.",
    },
    {
      question: "Which platforms support fake review generation?",
      answer:
        "We support 14+ platforms including TikTok, Amazon, Instagram, Twitter/X, Facebook, YouTube, Reddit, LinkedIn, Netflix, Spotify, Steam, Yelp, Trustpilot, IMDB, and Discord.",
    },
    {
      question: "Can I download the fake review screenshots?",
      answer:
        "Yes! You can save your review screenshots as PNG or JPG files in one click. Perfect for adding to presentations, mockups, or creative projects.",
    },
    {
      question: "Who should use this fake review generator?",
      answer:
        "Content creators for demos, e-commerce sellers for mock product pages, designers & marketers for UI mockups, and educators for teaching digital ethics and review culture.",
    },
    {
      question: "Are there any limits on usage?",
      answer:
        "No limits! Generate unlimited fake review screenshots for free. Our tool is designed to give you complete creative freedom for your projects.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Review Craft: Free
              <span className="text-indigo-600"> Fake Reviews Generator</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Create Realistic Reviews & Screenshots Instantly
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <strong>100% Free, No Login Required</strong>
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Fast, reliable, and free fake reviews generator. With Review
              Craft, you can create realistic review screenshots for 14+
              platforms in seconds. No sign-up, no cost—just pure creative
              freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
              >
                Start Generating Reviews Now
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
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
              Why Use Review Craft?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our fake customer reviews generator makes it easy to create
              reviews that look real but are designed for mockups,
              presentations, and content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
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
              Supported Platforms: Free Fake Review Generator
            </h2>
            <p className="text-xl text-gray-600">
              Review Craft supports 14+ major platforms, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                    {platform.logo.startsWith("/") ? (
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                        unoptimized
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {platform.description}
                    </p>
                  </div>
                </div>
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
            <p className="text-xl text-gray-600 mb-8">
              With Review Craft's AI-powered fake feedback generator, creating
              realistic reviews is simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select Platform
              </h3>
              <p className="text-gray-600">
                Choose TikTok, Amazon, Instagram, Twitter, and more from 14+
                supported platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Add Details
              </h3>
              <p className="text-gray-600">
                Auto names, avatars, usernames, dates, and metrics are filled
                instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Write Review
              </h3>
              <p className="text-gray-600">
                Enter text or let the AI fake review maker generate it for you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Add Images
              </h3>
              <p className="text-gray-600">
                Upload product shots or custom visuals for extra realism.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Generate Review
              </h3>
              <p className="text-gray-600">
                Preview your screenshot instantly in the right layout.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Download Free
              </h3>
              <p className="text-gray-600">
                Save as PNG or JPG, no login required, 100% free.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              That's it. In less than a minute, your review is ready.
            </p>
            <Link
              href="/"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
            >
              Start Generating Reviews Now
            </Link>
          </div>
        </div>
      </section>

      {/* Who Should Use Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Should Use Fake Review Screenshot Generator
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <img
                  src="/icons/video-camera.svg"
                  alt="Video camera icon for content creators"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Content Creators
              </h3>
              <p className="text-gray-600">
                Make funny or demo reviews for TikTok, YouTube, and Instagram.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <img
                  src="/icons/ecommerce.svg"
                  alt="Shopping icon for e-commerce sellers"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                E-commerce Sellers
              </h3>
              <p className="text-gray-600">
                Use the fake product reviews generator for mock product pages.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <img
                  src="/icons/design.svg"
                  alt="Design star icon for designers and marketers"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Designers & Marketers
              </h3>
              <p className="text-gray-600">
                Add realistic fake feedback to UI mockups and campaign decks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <img
                  src="/icons/education.svg"
                  alt="Education graduation cap icon for educators"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Educators & Trainers
              </h3>
              <p className="text-gray-600">
                Demonstrate digital ethics, review culture, or run classroom
                simulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Review Craft Stands Out Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Review Craft Stands Out
            </h2>
            <p className="text-xl text-gray-600">
              Unlike other Fake Review Generator tools, Review Craft is:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Completely Free
              </h3>
              <p className="text-gray-600">No hidden fees ever</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Login Required
              </h3>
              <p className="text-gray-600">Start instantly</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Powered
              </h3>
              <p className="text-gray-600">Generate natural-sounding reviews</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Always Updated
              </h3>
              <p className="text-gray-600">
                Matches the latest platform designs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips for Realistic Fake Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <img
                    src="/icons/chat.svg"
                    alt="Chat bubble icon for natural language"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Keep language natural
                  </h3>
                  <p className="text-gray-600">Avoid overly promotional tone</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <img
                    src="/icons/target.svg"
                    alt="Target icon for platform matching"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Match platform style
                  </h3>
                  <p className="text-gray-600">
                    Casual for TikTok, professional for LinkedIn
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <img
                    src="/icons/analytics.svg"
                    alt="Analytics chart icon for balanced engagement"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Balanced engagement
                  </h3>
                  <p className="text-gray-600">
                    Use realistic likes, shares, replies numbers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <img
                    src="/icons/calendar.svg"
                    alt="Calendar icon for dates and timing"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Add dates and images
                  </h3>
                  <p className="text-gray-600">For extra authenticity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-yellow-50 border-y-2 border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ⚠️ Important Disclaimer
          </h2>
          <p className="text-lg text-gray-700">
            Review Craft is designed for{" "}
            <strong>educational, creative, and mockup purposes only</strong>.
            Using fake reviews to deceive customers or mislead audiences is
            unethical.
          </p>
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
            Start Creating Fake Reviews Now
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Ready to make realistic reviews in seconds? With Review Craft, you
            can generate unlimited screenshots for free—no login, no hassle.
          </p>
          <Link
            href="/"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            Generate Your First Fake Review Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
