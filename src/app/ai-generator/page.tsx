import type { Metadata } from "next";
import AIReviewGeneratorPage from "@/components/ai-generator/AIReviewGeneratorPage";

export const metadata: Metadata = {
  title: "AI Review Generator — Automated Review Text & Feedback Maker",
  description:
    "Generate contextual customer review text with AI for design prototypes and mockups. Customize sentiment, star rating, product type, and feedback tone.",
  alternates: {
    canonical: "/ai-generator",
  },
  openGraph: {
    title: "AI Review Generator — Automated Review Text & Feedback Maker | ReviewCraft",
    description:
      "Generate contextual customer review text with AI for design prototypes and mockups. Customize sentiment, star rating, product type, and feedback tone.",
    url: "/ai-generator",
    type: "website",
  },
};

export default function AIGeneratorPage() {
  return <AIReviewGeneratorPage />;
}
