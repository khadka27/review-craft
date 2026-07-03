import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "ReviewCraft - AI-Powered Social Media Review Generator",
  description = "Generate realistic, authentic-looking social media reviews for educational purposes, mockups, and presentations. Supports 40+ platforms including Reddit, Twitter, Instagram, Amazon, Google, App Store, and more.",
  image = "/logo/logo.png",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@ReviewCraft",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://www.fakereviewgenerator.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

// Keep the component for backward compatibility if needed, but it should not be used in App Router for SEO
export const SEO = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return null;
};

