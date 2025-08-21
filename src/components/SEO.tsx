interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

// In Next.js App Router, we use metadata API instead of Head component
// This component is kept for compatibility but doesn't render anything
// SEO is handled through metadata in layout.tsx and page metadata exports
export const SEO = ({
  title = "ReviewCraft - AI-Powered Social Media Review Generator",
  description = "Generate realistic, authentic-looking social media reviews for educational purposes, mockups, and presentations. Supports 15+ platforms including Reddit, Twitter, Instagram, Amazon, and more.",
  keywords = "review generator, social media mockup, fake reviews, educational tool, design mockup, UI components, social media templates, reddit review, twitter review, instagram review, amazon review, netflix review, spotify review",
  image = "/images/og-image.png",
  url = "https://reviewcraft.app",
  type = "website",
  noindex = false,
}: SEOProps) => {
  // This component is now a no-op for compatibility
  // In App Router, SEO is handled through metadata exports
  return null;
};
