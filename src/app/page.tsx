import type { Metadata } from "next";
import Script from "next/script";
import { cookies } from "next/headers";
import HomePage from "./home/page";
import LoginPage from "./login/page";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";

export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    absolute: "Login | ReviewCraft Office Studio",
  },
  description:
    "ReviewCraft Office Studio. Free online review generator & UI mockup maker.",
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

export default async function Page() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const { valid, username } = verifySessionToken(sessionCookie);

  // When opening the site in office branch, directly show login page if not authenticated
  if (!valid || !username) {
    return <LoginPage />;
  }

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

