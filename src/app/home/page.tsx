"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { getPlatformIcon } from "@/components/SocialMediaIcons";
import { trackPageView, trackButtonClick } from "@/utils/analytics";
import { ReviewGeneratorPage } from "@/components/ReviewGeneratorPage";

type SupportedPlatformCard = {
  name: string;
  slug: string;
  subtitle: string;
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
      name: "Discord",
      subtitle: "Discord Reviews",
      slug: "discord",
    },
    {
      name: "Facebook",
      subtitle: "Facebook Fake Review Screenshot Generator",
      slug: "facebook",
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
      name: "Netflix",
      subtitle: "Netflix Reviews",
      slug: "netflix",
    },
    {
      name: "Reddit",
      subtitle: "Reddit Fake Feedback Generator",
      slug: "reddit",
    },
    {
      name: "Spotify",
      subtitle: "Spotify Reviews",
      slug: "spotify",
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
        "ReviewCraft automatically fills non-essential visual details, including reviewer images and supporting profile-style fields, so screenshots feel more complete without requiring manual entry for every element.",
    },
    {
      question:
        "Can ReviewCraft be used for both positive and negative review layouts?",
      answer:
        "Yes. ReviewCraft supports multiple rating formats, including 5-star and 1-star layouts, so you can preview different review styles depending on the page or concept you are building.",
    },
    {
      question:
        "Why use ReviewCraft instead of designing review screenshots manually?",
      answer:
        "Manual design takes time and often creates inconsistent results. ReviewCraft speeds up the process by giving you ready-to-use layouts, editable fields, and automatic completion of secondary details.",
    },
    {
      question: "Does ReviewCraft support multiple platforms?",
      answer:
        "Yes. ReviewCraft supports 16 platform-style layouts, including review formats inspired by major ecommerce, service, app, and social platforms.",
    },
    {
      question: "Is ReviewCraft only for product pages?",
      answer:
        "No. ReviewCraft is useful for landing pages, service pages, funnel previews, pitch decks, ecommerce mockups, sales materials, internal demos, and testing environments.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <ReviewGeneratorPage
        heroTitle="ReviewCraft: Fake Review Generator for Mockups, Demos, and Customer Feedback"
        heroDescription="ReviewCraft helps you create realistic review-style screenshots for 16 platforms in seconds, complete with editable text, ratings, and auto-filled reviewer details for mockups, demos, landing page previews, and testing workflows."
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
              ReviewCraft supports 16 platform-inspired customer review layouts
              so your screenshots feel closer to real-world interfaces and are
              easier to present in a polished design context.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportedPlatforms.map((platform) => (
              <Link
                key={platform.slug}
                href={`/platform/${platform.slug}`}
                className="rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-gray-900">
                    {getPlatformIcon(platform.slug, 26)}
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
            Final Thoughts
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">
            ReviewCraft helps you move faster when your page, funnel, mockup, or
            presentation needs realistic review-style visuals. Instead of
            manually designing every card, you can generate polished screenshots
            for 16 platforms, edit the details you care about, and rely on
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
                  <div className="px-6 pb-5">
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
