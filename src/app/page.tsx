import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "./home/page";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "ReviewCraft — Free Review Generator, Social Proof & UI Mockup Tool",
  },
  description:
    "Free online review generator & UI mockup maker. Design realistic Google reviews, Amazon ratings, Trustpilot cards, and social proof components in seconds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ReviewCraft — Free Review Generator & UI Prototype Tool",
    description:
      "Design realistic review interface mockups, rating cards, and social proof components for UI/UX testing, client presentations, and design demos.",
    url: "https://www.fakereviewgenerator.com",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is ReviewCraft used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReviewCraft is a visual prototyping tool for designers, marketers, and educators to create simulated review layouts, social proof mockups, and interface wireframes.",
      },
    },
    {
      "@type": "Question",
      name: "Can generated mockups be published as authentic customer reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All generated content is fictional and simulated. It must never be published to misrepresent genuine customer feedback or real commercial activity.",
      },
    },
    {
      "@type": "Question",
      name: "Which review interface layouts are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReviewCraft supports interface designs inspired by Amazon, Google, Trustpilot, Yelp, Instagram, TikTok, and other common social proof layouts.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReviewCraft UI Mockup Generator",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://www.fakereviewgenerator.com",
  description:
    "A browser-based visual prototyping application for creating simulated review UI cards, social proof mockups, and interface design assets.",
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <HomePage />
    </>
  );
}
