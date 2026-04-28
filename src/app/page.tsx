import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Fake Review Generator - Review Screenshot Mockup Tool",
  description:
    "Generate realistic review screenshots for UI design, product demos, and educational projects. Supports Amazon, Google, Instagram, TikTok, and more.",
  alternates: {
    canonical: "/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is this fake review generator used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool is for creating review mockups for UI design, prototypes, demos, and educational use only.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use generated content as real customer reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Generated content must not be used for deception, public misrepresentation, or posting as real reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tool supports many layouts including Amazon, Google, Instagram, TikTok, Trustpilot, and other social and ecommerce styles.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReviewCraft Fake Review Generator",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://fakereviewgenerator.com",
  description:
    "A web tool that generates review and comment mockups for product demos, UI design, and education.",
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
