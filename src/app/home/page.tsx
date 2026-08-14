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
      subtitle: "Amazon-Style Review Interface Mockup",
      slug: "amazon",
    },
    {
      name: "Airbnb",
      subtitle: "Airbnb-Style Rental Feedback Layout",
      slug: "airbnb",
    },
    {
      name: "Booking",
      subtitle: "Booking-Style Rating Component",
      slug: "booking",
    },
    {
      name: "Custom Testimonials",
      subtitle: "Custom Testimonial Card Wireframe",
      slug: "testimonial",
    },
    {
      name: "Discord",
      subtitle: "Discord Community Chat Prototype",
      slug: "discord",
    },
    {
      name: "Ecommerce",
      subtitle: "Generic E-Commerce Review Layout",
      slug: "ecommerce",
    },
    {
      name: "Facebook",
      subtitle: "Social Review Interface Prototype",
      slug: "facebook",
    },
    {
      name: "Fiverr",
      subtitle: "Service Marketplace Feedback UI",
      slug: "fiverr",
    },
    {
      name: "Generic 1-Star",
      subtitle: "Critical Feedback Component Mockup",
      slug: "generic-1-star",
    },
    {
      name: "Generic 5-Star",
      subtitle: "Positive Testimonial Component Mockup",
      slug: "generic-5-star",
    },
    {
      name: "Google",
      subtitle: "Google-Style Review UI Mockup",
      slug: "google",
    },
    {
      name: "IMDb",
      subtitle: "Movie & Show Rating Layout",
      slug: "imdb",
    },
    {
      name: "Instagram",
      subtitle: "Instagram Post Comment Mockup",
      slug: "instagram",
    },
    {
      name: "LinkedIn",
      subtitle: "Professional Recommendation UI Prototype",
      slug: "linkedin",
    },
    {
      name: "Clutch",
      subtitle: "B2B Agency Review UI Layout",
      slug: "clutch",
    },
    {
      name: "BBB",
      subtitle: "Accredited Business Feedback Prototype",
      slug: "bbb",
    },
    {
      name: "Consumer Reports",
      subtitle: "Product Scorecard Interface Mockup",
      slug: "consumerreports",
    },
    {
      name: "G2",
      subtitle: "SaaS Software Review Card Prototype",
      slug: "g2",
    },
    {
      name: "Capterra",
      subtitle: "Software Listing Feedback UI",
      slug: "capterra",
    },
    {
      name: "Angi",
      subtitle: "Home Services Review UI Mockup",
      slug: "angi",
    },
    {
      name: "Play Store",
      subtitle: "Mobile App Rating Component UI",
      slug: "playstore",
    },
    {
      name: "App Store",
      subtitle: "iOS App Review Card Wireframe",
      slug: "appstore",
    },
    {
      name: "Reddit",
      subtitle: "Community Discussion Post Prototype",
      slug: "reddit",
    },
    {
      name: "Shopify",
      subtitle: "Shopify Store Review UI Layout",
      slug: "shopify",
    },
    {
      name: "Steam",
      subtitle: "Game Review Interface Prototype",
      slug: "steam",
    },
    {
      name: "TikTok",
      subtitle: "TikTok Social Comment UI Prototype",
      slug: "tiktok",
    },
    {
      name: "TripAdvisor",
      subtitle: "Travel Hospitality Review Mockup",
      slug: "tripadvisor",
    },
    {
      name: "Trustpilot",
      subtitle: "Trustpilot-Style Review Mockup",
      slug: "trustpilot",
    },
    {
      name: "Twitter",
      subtitle: "Social Feedback Tweet Prototype",
      slug: "twitter",
    },
    {
      name: "Yelp",
      subtitle: "Local Business Review Card Prototype",
      slug: "yelp",
    },
    {
      name: "YouTube",
      subtitle: "Video Comment UI Prototype",
      slug: "youtube",
    },
    {
      name: "Paytm",
      subtitle: "Payment Confirmation UI Prototype",
      slug: "paytm",
    },
    {
      name: "Stripe",
      subtitle: "Stripe Billing UI Mockup",
      slug: "stripe",
    },
    {
      name: "Google Pay",
      subtitle: "Digital Wallet Screen Prototype",
      slug: "googlepay",
    },
    {
      name: "Google Wallet",
      subtitle: "Pass & Card UI Prototype",
      slug: "googlewallet",
    },
    {
      name: "Apple Pay",
      subtitle: "Apple Wallet Screen Wireframe",
      slug: "applepay",
    },
    {
      name: "Venmo",
      subtitle: "Peer-to-Peer Payment Feed UI",
      slug: "venmo",
    },
    {
      name: "UPI",
      subtitle: "Mobile Payment UI Mockup",
      slug: "upi",
    },
    {
      name: "PhonePe",
      subtitle: "Transaction Status Screen Prototype",
      slug: "phonepay",
    },
    {
      name: "Fonepay",
      subtitle: "Merchant Payment Screen UI",
      slug: "fonepay",
    },
    {
      name: "Cash App",
      subtitle: "Financial App UI Component",
      slug: "cashapp",
    },
    {
      name: "Amazon Invoice",
      subtitle: "E-Commerce Invoice PDF Layout",
      slug: "amazon-bill",
    },
    {
      name: "Walmart Invoice",
      subtitle: "Retail Receipt UI Wireframe",
      slug: "walmart-bill",
    },
    {
      name: "Supplement Receipt",
      subtitle: "Store Invoice Component Wireframe",
      slug: "supplement-bill",
    },
  ];
  const usefulness = [
    "Design realistic review UI screenshots quickly for prototypes and presentations.",
    "Maintain consistent visual hierarchy across landing page and app wireframes.",
    "Auto-generate realistic secondary elements to test layout wrapping and spacing.",
    "Export high-resolution design assets ready for pitch decks and usability tests.",
  ];

  const features = [
    {
      title: "Platform-Inspired UI Layouts",
      description:
        "Select from review card components designed to reflect common marketplace, app store, and social media UI patterns.",
    },
    {
      title: "Instant Mockup Generation",
      description:
        "Build polished visual prototypes in seconds without designing UI components from scratch in design software.",
    },
    {
      title: "Full Layout Customization",
      description:
        "Customize text, avatar images, star ratings, and timestamps to evaluate different interface display states.",
    },
    {
      title: "Built for Designers & Presenters",
      description:
        "Incorporate visual assets seamlessly into wireframes, client presentations, software QA decks, and design portfolios.",
    },
  ];

  const audience = [
    "UI/UX Designers & Wireframers",
    "Product Managers & QA Testers",
    "Educators & Design Students",
    "Digital Agencies & Growth Teams",
  ];

  const useCases = [
    {
      title: "Landing Page Wireframing",
      description:
        "Test review section layouts and customer feedback visual hierarchy during initial page design.",
    },
    {
      title: "Product Demos & Presentations",
      description:
        "Illustrate user feedback interfaces in client pitch decks before real user content is aggregated.",
    },
    {
      title: "Usability Testing & QA",
      description:
        "Evaluate how long-form and short-form user feedback text wraps across desktop and mobile screens.",
    },
    {
      title: "Design System & UI Components",
      description:
        "Benchmark rating components, badge alignments, and comment card styles against industry standards.",
    },
  ];

  const faqs = [
    {
      question: "What is ReviewCraft used for?",
      answer:
        "ReviewCraft is an independent browser-based visual prototyping tool that helps designers, product teams, marketers, and educators create simulated review layouts and UI mockups for presentations, wireframes, and design testing.",
    },
    {
      question: "Are generated mockups real reviews?",
      answer:
        "No. All generated outputs are fictional UI mockups intended solely for visual design, testing, demonstration, and educational purposes. Generated images feature permanent simulation disclaimers and must never be published to misrepresent genuine customer feedback or authentic platform records.",
    },
    {
      question: "Is ReviewCraft affiliated with Google, Amazon, or other platforms?",
      answer:
        "No. ReviewCraft is an independent design tool and is not affiliated with, sponsored by, or endorsed by Google, Amazon, Meta, Trustpilot, Yelp, Apple, or any third-party platform shown in its design templates.",
    },
    {
      question: "Can ReviewCraft be used for both positive and negative UI states?",
      answer:
        "Yes. ReviewCraft supports full customization across all rating scales (from 5-star positive feedback cards to 1-star complaint components) so product designers and UX researchers can test various feedback UI states.",
    },
    {
      question: "Why use ReviewCraft instead of building components manually?",
      answer:
        "Creating responsive review UI cards in design software can be time-consuming. ReviewCraft provides instant platform-inspired component templates that render clean, downloadable screenshots in seconds.",
    },
    {
      question: "Are the generated review UI mockups free to download?",
      answer:
        "Yes, ReviewCraft is completely free to use for visual prototyping, presentations, and educational projects. You can export PNG, JPEG, and WEBP image files without creating an account.",
    },
    {
      question: "Does ReviewCraft store custom text or uploaded images?",
      answer:
        "No. All mockup customization and canvas rendering take place locally inside your web browser. Custom text and uploaded images are never stored or transmitted to external servers.",
    },
    {
      question: "Can I publish generated reviews on a live commercial storefront?",
      answer:
        "No. Presenting simulated feedback as authentic customer reviews on a live commercial website is deceptive and prohibited by consumer protection laws and ReviewCraft's Acceptable Use Policy.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Responsible Use Notice Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-center text-xs sm:text-sm text-amber-900 font-medium">
        <p className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
          <span>
            <strong>Responsible-Use Notice:</strong> All generated content is simulated and intended exclusively for visual design, UI/UX prototyping, software testing, and educational purposes.
          </span>
        </p>
      </div>

      <ReviewGeneratorPage
        heroTitle="Create Review & Social Proof UI Mockups in Seconds"
        heroDescription="Design realistic interface prototypes for presentations, product demos, landing pages, usability testing, and educational projects — without representing simulated content as genuine customer feedback."
      />

      {/* Section 6: What Is ReviewCraft? */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            About Our Platform
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
            What Is ReviewCraft?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            ReviewCraft is an independent, browser-based visual prototyping application built for designers, marketers, developers, product managers, and educators. It enables teams to create simulated review layouts, social proof visual cards, chat interfaces, and financial UI components for wireframes, pitch decks, and usability research.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            All generated visual outputs are strictly fictional representations. ReviewCraft operates independently and is not affiliated with, certified by, or endorsed by Google, Amazon, Meta, Trustpilot, Yelp, Apple, or any other platform shown in its templates. ReviewCraft tools must never be used to fabricate customer reviews, simulate real commercial transactions, or misrepresent genuine customer feedback.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Why ReviewCraft Is Essential for UI Prototyping
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              When wireframing landing pages, product pages, or pitch presentations, placeholder text like "Lorem Ipsum" fails to demonstrate how user feedback cards interact with your overall visual hierarchy. ReviewCraft allows you to quickly generate realistic UI components that streamline design review workflows.
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
              Platform Interface Templates Supported on ReviewCraft
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore platform-inspired review UI layouts designed to emulate industry-standard visual design patterns for prototyping and presentation use.
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

          <p className="mt-8 text-center text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto">
            Disclaimer: ReviewCraft is an independent design and prototyping tool and is not affiliated with or endorsed by any platform shown in its templates.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              How to Create a Review UI Mockup
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ReviewCraft makes visual prototyping quick and intuitive. Create review card assets in four simple steps:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Select a UI Template",
                description:
                  "Choose the review layout component style that matches your design system or presentation requirements.",
              },
              {
                title: "Configure Layout Parameters",
                description:
                  "Set rating scores, reviewer avatar types, dates, and component options to reflect your target interface.",
              },
              {
                title: "Customize Feedback Content",
                description:
                  "Input custom feedback text or use example text options to evaluate typography wrapping and spacing.",
              },
              {
                title: "Export Visual Prototype",
                description:
                  "Export your mockup image directly into PNG or JPEG format with embedded simulation disclaimers.",
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
              Key Features for UI/UX Prototyping
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Designed specifically to meet the speed and flexibility needs of modern design workflows.
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
              Who Uses ReviewCraft?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ReviewCraft supports digital creators who require rapid visual mockup generation.
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
              Prototyping Use Cases Across Product & Design
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Visual review components play a pivotal role in modern web interfaces and product presentations.
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
              <FileText size={14} /> UI/UX & Design Resource Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Learn About Review UI Mockups & Social Proof Design
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Read our educational guides on UI component layout, accessibility standards, and responsible prototyping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">UI/UX Design</span>
              <h3 className="mt-3 text-xl font-bold text-white">
                <Link href="/guides/review-mockups" className="hover:underline">
                  The Complete Guide to Designing Review UI Mockups
                </Link>
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Discover principles for integrating customer feedback visual cards into high-converting website landing page wireframes.
              </p>
            </div>

            <div className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Design Systems</span>
              <h3 className="mt-3 text-xl font-bold text-white">
                <Link href="/guides/designing-review-components" className="hover:underline">
                  Component Anatomy: Rating Stars & Badges
                </Link>
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Deconstruct the visual hierarchy, micro-components, and rating scales of modern customer feedback systems.
              </p>
            </div>

            <div className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-6 hover:border-indigo-700 transition-colors">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Ethics & Policy</span>
              <h3 className="mt-3 text-xl font-bold text-white">
                <Link href="/guides/ethical-social-proof" className="hover:underline">
                  Ethical Standards in Social Proof Design
                </Link>
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Understand legal standards, consumer protection, and responsible usage parameters for simulated design mockups.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
            >
              Explore All 10 Design Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Frequently Asked Questions
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
