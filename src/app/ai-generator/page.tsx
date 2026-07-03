import type { Metadata } from "next";
import AIReviewGeneratorPage from "@/components/ai-generator/AIReviewGeneratorPage";

export const metadata: Metadata = {
  title: "AI Review Generator - ReviewCraft",
  description: "Create realistic review mockups with AI in over 100 languages. Ideal for UI design, prototypes, and testing.",
  alternates: {
    canonical: "/ai-generator",
  },
};

export default function AIGeneratorPage() {
  return <AIReviewGeneratorPage />;
}
