"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { getPlatformIcon } from "@/components/SocialMediaIcons";
import { trackPageView } from "@/utils/analytics";
import { ReviewGeneratorPage } from "@/components/ReviewGeneratorPage";
import { FileText } from "lucide-react";

type SupportedPlatformCard = {
  name: string;
  slug: string;
  subtitle: string;
};

const getPlatformHref = (slug: string) => {
  const paymentSlugs = [
    "paytm",
    "stripe",
    "googlepay",
    "googlewallet",
    "applepay",
    "venmo",
    "upi",
    "phonepay",
    "fonepay",
    "cashapp",
  ];
  if (paymentSlugs.includes(slug)) {
    return `/payment/${slug}`;
  }
  if (slug.endsWith("-bill")) {
    return `/bill-generator/${slug.replace("-bill", "")}`;
  }
  return `/platform/${slug}`;
};

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    trackPageView("home_landing_page");
  }, []);

  const supportedPlatforms: SupportedPlatformCard[] = [
    {
      name: "Amazon",
      subtitle: "Amazon Fake Product Reviews Generator",
      slug: "amazon",
    },
    {
      name: "Airbnb",
      subtitle: "Airbnb Review Layout Generator",
      slug: "airbnb",
    },
    {
      name: "Booking",
      subtitle: "Booking-style Ratings",
      slug: "booking",
    },
    {
      name: "Custom Testimonials",
      subtitle: "Custom Testimonial Layouts",
      slug: "testimonial",
    },
    {
      name: "Discord",
      subtitle: "Discord Reviews",
      slug: "discord",
    },
    {
      name: "Ecommerce",
      subtitle: "Ecommerce Review Formats",
      slug: "ecommerce",
    },
    {
      name: "Facebook",
      subtitle: "Facebook Fake Review Screenshot Generator",
      slug: "facebook",
    },
    {
      name: "Fiverr",
      subtitle: "Fiverr-style Service Reviews",
      slug: "fiverr",
    },
    {
      name: "Generic 1-Star",
      subtitle: "Generic 1-star Review Templates",
      slug: "generic-1-star",
    },
    {
      name: "Generic 5-Star",
      subtitle: "Generic 5-star Review Templates",
      slug: "generic-5-star",
    },
    {
      name: "Google",
      subtitle: "Google Fake Review Screenshot Generator",
      slug: "google",
    },
    {
      name: "IMDb",
      subtitle: "IMDb Reviews",
      slug: "imdb",
    },
    {
      name: "Instagram",
      subtitle: "Instagram Fake Customer Reviews Generator",
      slug: "instagram",
    },
    {
      name: "LinkedIn",
      subtitle: "LinkedIn Fake Review Maker",
      slug: "linkedin",
    },
    {
      name: "Clutch",
      subtitle: "Clutch B2B Review Generator",
      slug: "clutch",
    },
    {
      name: "BBB",
      subtitle: "Better Business Bureau Review",
      slug: "bbb",
    },
    {
      name: "Consumer Reports",
      subtitle: "Product Score & Recommendation",
      slug: "consumerreports",
    },
    {
      name: "G2",
      subtitle: "G2 Software Review Generator",
      slug: "g2",
    },
    {
      name: "Capterra",
      subtitle: "Capterra Software Review",
      slug: "capterra",
    },
    {
      name: "Angi",
      subtitle: "Angi Home Services Review",
      slug: "angi",
    },
    {
      name: "Play Store",
      subtitle: "Play Store Layouts",
      slug: "playstore",
    },
    {
      name: "App Store",
      subtitle: "App Store Review Generator",
      slug: "appstore",
    },
    {
      name: "Reddit",
      subtitle: "Reddit Fake Feedback Generator",
      slug: "reddit",
    },
    {
      name: "Shopify",
      subtitle: "Shopify Product Reviews",
      slug: "shopify",
    },
    {
      name: "Steam",
      subtitle: "Steam Reviews",
      slug: "steam",
    },
    {
      name: "TikTok",
      subtitle: "TikTok Fake Reviews Generator",
      slug: "tiktok",
    },
    {
      name: "TripAdvisor",
      subtitle: "TripAdvisor Rating Layouts",
      slug: "tripadvisor",
    },
    {
      name: "Trustpilot",
      subtitle: "Trustpilot Reviews",
      slug: "trustpilot",
    },
    {
      name: "Twitter",
      subtitle: "Twitter/X Fake Feedback Generator",
      slug: "twitter",
    },
    {
      name: "Yelp",
      subtitle: "Yelp Reviews",
      slug: "yelp",
    },
    {
      name: "YouTube",
      subtitle: "YouTube Fake Review Maker",
      slug: "youtube",
    },
    {
      name: "Paytm",
      subtitle: "Paytm Success Receipt",
      slug: "paytm",
    },
    {
      name: "Stripe",
      subtitle: "Stripe Payment Receipt",
      slug: "stripe",
    },
    {
      name: "Google Pay",
      subtitle: "GPay Transaction Mockup",
      slug: "googlepay",
    },
    {
      name: "Google Wallet",
      subtitle: "Wallet Pass & Transaction",
      slug: "googlewallet",
    },
    {
      name: "Apple Pay",
      subtitle: "Apple Wallet Screenshot",
      slug: "applepay",
    },
    {
      name: "Venmo",
      subtitle: "Venmo Social Payment",
      slug: "venmo",
    },
    {
      name: "UPI",
      subtitle: "BHIM UPI Receipt",
      slug: "upi",
    },
    {
      name: "PhonePe",
      subtitle: "PhonePe Payment Screenshot",
      slug: "phonepay",
    },
    {
      name: "Fonepay",
      subtitle: "Fonepay Nepal Receipt",
      slug: "fonepay",
    },
    {
      name: "Cash App",
      subtitle: "Cash App Transaction",
      slug: "cashapp",
    },
    {
      name: "Amazon Invoice",
      subtitle: "Amazon PDF Invoice Mockup",
      slug: "amazon-bill",
    },
    {
      name: "Walmart Invoice",
      subtitle: "Walmart Order Invoice Mockup",
      slug: "walmart-bill",
    },
    {
      name: "Supplement Receipt",
      subtitle: "Supplement Store Invoice Mockup",
      slug: "supplement-bill",
    },
  ];
  const usefulness = [
    "Create realistic review screenshots quickly for mockups and demos.",
    "Keep the layout consistent across product, service, and marketing pages.",
    "Fill in secondary details automatically so the design feels complete.",
    "Export polished visuals that are ready to present or test immediately.",
  ];

  const features = [
    {
      title: "Platform-specific layouts",
      description:
        "Choose from review styles inspired by popular apps, marketplaces, and social platforms.",
    },
    {
      title: "Fast screenshot generation",
      description:
        "Build convincing review mockups in seconds instead of assembling each element by hand.",
    },
    {
      title: "Editable review content",
      description:
        "Adjust names, ratings, comments, and other visible details to fit your use case.",
    },
    {
      title: "Built for previews and demos",
      description:
        "Use the generated layouts in funnels, pitch decks, internal reviews, and design mockups.",
    },
  ];

  const audience = [
    "Marketers and growth teams",
    "Ecommerce and marketplace brands",
    "Designers and product teams",
    "Agencies, founders, and testers",
  ];

  const useCases = [
    {
      title: "Landing page mockups",
      description:
        "Add believable review sections to landing pages and conversion-focused designs.",
    },
    {
      title: "Product and service demos",
      description:
        "Show what a page could look like before real content is available.",
    },
    {
      title: "Pitch decks and sales assets",
      description:
        "Use polished review screenshots to support presentations and internal buy-in.",
    },
    {
      title: "Testing and iteration",
      description:
        "Compare different review layouts quickly while refining copy and placement.",
    },
  ];

  const faqs = [
    {
      question: "How does the auto-fill feature work?",
      answer:
        "ReviewCraft automatically populates secondary visual details-such as reviewer avatars, timestamps, verified purchase badges, and reaction counters-so your mockups look realistic without requiring manual data entry for every field.",
    },
    {
      question:
        "Can ReviewCraft be used for both positive and negative review layouts?",
      answer:
        "Yes. ReviewCraft supports full customization across all rating tiers (from 5-star positive testimonials to 1-star critical complaints). This allows product designers and CS managers to test positive social proof alongside critical feedback states.",
    },
    {
      question:
        "Why use ReviewCraft instead of designing review screenshots manually?",
      answer:
        "Designing platform-accurate UI components in tools like Figma or Photoshop takes hours per screen. ReviewCraft provides 30+ ready-to-use, pixel-perfect platform templates that export high-resolution PNGs in seconds.",
    },
    {
      question: "Which review platforms does ReviewCraft support?",
      answer:
        "ReviewCraft supports 30+ major platforms including Amazon, Google, Yelp, Trustpilot, Reddit, Twitter/X, Instagram, Facebook, YouTube, TikTok, Steam, IMDb, Airbnb, TripAdvisor, App Store, Play Store, Shopify, Fiverr, Booking.com, and custom testimonial templates.",
    },
    {
      question: "Is ReviewCraft suitable for client pitch decks?",
      answer:
        "Absolutely. ReviewCraft screenshots are optimized for website mockups, SaaS landing pages, agency sales decks, app design portfolios, and educational presentations.",
    },
    {
      question: "Are the generated review screenshots free to download?",
      answer:
        "Yes, ReviewCraft is completely free to use for design mockups, presentations, and educational purposes. You can generate and download unlimited PNG screenshots without creating an account.",
    },
    {
      question: "Does ReviewCraft store my custom text or uploaded avatars?",
      answer:
        "No. All review customization and rendering happen locally in your web browser. We do not store or transmit your custom review text or uploaded images to external servers.",
    },
    {
      question: "Can I use generated reviews on a live e-commerce store?",
      answer:
        "No. Generated screenshots are simulated design assets intended solely for prototyping, client demos, and wireframing. Falsifying real customer feedback on a live commercial storefront is deceptive and prohibited by consumer protection laws.",
    },
    {
      question: "Can I export chat conversations and payment receipts too?",
      answer:
        "Yes! In addition to reviews, ReviewCraft features built-in Chat Generators (WhatsApp, iMessage, Messenger, Telegram) and Payment Receipt Mockup Generators (Stripe, Paytm, Google Pay, Apple Pay).",
    },
    {
      question: "How do I ensure my review mockups look realistic?",
      answer:
        "To make mockups believable in your wireframes, use natural conversational tone, balance 5-star ratings with occasional 4-star feedback, include realistic engagement counts, and match the specific platform typography.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <ReviewGeneratorPage
        heroTitle="ReviewCraft: Fake Review Generator for Mockups, Demos, and Customer Feedback"
        heroDescription="ReviewCraft helps you create realistic review-style screenshots for 26 platforms in seconds, complete with editable text, ratings, and auto-filled reviewer details for mockups, demos, landing page previews, and testing workflows."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Why ReviewCraft Is Useful
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              When you are building a landing page, product page, affiliate
              funnel, or client presentation, empty review sections can make the
              entire design feel unfinished. ReviewCraft helps you create
              realistic review-style screenshots that make mockups, drafts, and
              previews look more complete and easier to present.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Instead of recreating review layouts manually in design tools,
              ReviewCraft gives you a faster way to build polished visuals that
              fit naturally into your workflow. You can choose a platform-style
              layout, add the main details, let the generator fill in the
              secondary elements, and create a finished screenshot in seconds.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {usefulness.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-gray-900 leading-6">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Platforms Reviews Supported on ReviewCraft
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ReviewCraft supports 26 platform-inspired customer review layouts
              so your screenshots feel closer to real-world interfaces and are
              easier to present in a polished design context.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportedPlatforms.map((platform) => (
              <Link
                key={platform.slug}
                href={getPlatformHref(platform.slug)}
                className="rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-gray-900">
                    {getPlatformIcon(platform.slug.replace("-bill", ""), 26) || (
                      <FileText size={26} className="text-emerald-600" />
                    )}
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-lg font-semibold text-gray-950 leading-tight">
                      {platform.name}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 leading-snug">
                      {platform.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-600">
            Each layout is built to resemble a format users already recognize,
            which helps your mockups look more complete and easier to understand
            at a glance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              How to use ReviewCraft: Fake Review Generator
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ReviewCraft is designed for speed. Most screenshots can be created
              in under a minute.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Choose a platform layout",
                description:
                  "Select the review style that best matches the page, product, funnel, or presentation you are building.",
              },
              {
                title: "Auto-fill the secondary elements",
                description:
                  "ReviewCraft can populate non-essential details automatically so the screenshot does not look incomplete.",
              },
              {
                title: "Add the core details",
                description:
                  "Enter the key information and the content you want to show. You can generate text with AI and edit reviewer names as needed.",
              },
              {
                title: "Generate and download",
                description:
                  "Preview the output, make quick edits if needed, and export the screenshot for immediate use in your workflow.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Features That Make ReviewCraft Faster to Use
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The feature set is what turns ReviewCraft from a simple fake
              review template into a practical production tool for marketers,
              ecommerce teams, and designers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Who ReviewCraft Is For
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ReviewCraft is most useful for people who need review-style
              visuals quickly and repeatedly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-gray-900 leading-6">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Use Cases Across Marketing, Ecommerce, and Design
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ReviewCraft fits into multiple workflows because review-style
              visuals appear in more places than most teams expect.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText size={14} /> UI/UX & Design Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Learn About Review Mockups & Social Proof Design
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Read our technical guides on UI layout best practices, e-commerce conversion design, and ethical social proof implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">UI/UX Design</span>
              <h3 className="mt-3 text-xl font-bold text-white">
                <Link href="/blog/how-to-create-review-mockups-for-landing-pages" className="hover:underline">
                  How to Create Effective Review Mockups for Landing Pages
                </Link>
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Discover principles for integrating customer feedback visual cards into high-converting website landing page wireframes.
              </p>
            </div>

            <div className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">E-Commerce UI</span>
              <h3 className="mt-3 text-xl font-bold text-white">
                <Link href="/blog/anatomy-of-an-authentic-amazon-review" className="hover:underline">
                  Anatomy of an Authentic Amazon Review: UI Guidelines
                </Link>
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Deconstruct the visual hierarchy, micro-components, and rating scales of Amazon's customer feedback system.
              </p>
            </div>

            <div className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Ethics & Policy</span>
              <h3 className="mt-3 text-xl font-bold text-white">
                <Link href="/blog/ethical-standards-in-social-proof-design" className="hover:underline">
                  Ethical Standards & Guidelines in Social Proof Design
                </Link>
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Understand legal standards, FTC compliance, and responsible usage parameters for simulated design mockups.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
            >
              Explore All Guides & Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
            Final Thoughts
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">
            ReviewCraft helps you move faster when your page, funnel, mockup, or
            presentation needs realistic review-style visuals. Instead of
            manually designing every card, you can generate polished screenshots
            for 30+ platforms, edit the details you care about, and rely on
            auto-filled reviewer elements to complete the layout.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            For marketers, affiliate teams, ecommerce operators, designers, and
            agencies, ReviewCraft makes review mockups easier to create, easier
            to test, and easier to present.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              FAQs
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-950">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
