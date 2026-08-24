import type { Metadata } from "next";
import AIReviewGeneratorPage from "@/components/ai-generator/AIReviewGeneratorPage";

export const metadata: Metadata = {
  title: "Automatic Reviews & AI Review Generator - Free Review Tool & Review Maker | ReviewCraft",
  description:
    "Free automatic reviews and AI review generator tool. Generate authentic customer reviews, product feedback, and 5-star testimonials instantly.",
  alternates: {
    canonical: "/ai-generator",
  },
};

export default function AIGeneratorPage() {
  return <AIReviewGeneratorPage />;
}
