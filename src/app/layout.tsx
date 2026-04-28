import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fakereviewgenerator.com"),
  title: {
    default: "Fake Review Generator for Mockups | ReviewCraft",
    template: "%s | ReviewCraft",
  },
  description:
    "Create realistic review and comment mockups for UI design, demos, and education. Generate Amazon, Google, Instagram, TikTok, and more with fast export options.",
  keywords: [
    "fake review generator",
    "review screenshot generator",
    "testimonial generator",
    "social proof generator",
    "review mockup generator",
    "amazon review generator",
    "google review generator",
    "instagram comment generator",
    "tiktok comment generator",
    "ui design mockup tool",
    "ecommerce review mockup",
  ],
  authors: [{ name: "ReviewCraft Team" }],
  creator: "ReviewCraft",
  publisher: "ReviewCraft",
  manifest: "/site.webmanifest",
  category: "Design tool",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Fake Review Generator for Mockups | ReviewCraft",
    description:
      "Create realistic review and comment mockups for UI design, demos, and educational workflows across 40+ platform styles.",
    type: "website",
    url: "https://fakereviewgenerator.com",
    siteName: "ReviewCraft",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReviewCraft - Social Media Review Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fake Review Generator for Mockups | ReviewCraft",
    description:
      "Create realistic review mockups for UI design, demos, and educational use across major social and ecommerce layouts.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://fakereviewgenerator.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="application-name" content="ReviewCraft" />
        <meta name="apple-mobile-web-app-title" content="ReviewCraft" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Google Analytics */}
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}
        />
      </body>
    </html>
  );
}
