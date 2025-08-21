import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: "ReviewCraft - AI-Powered Social Media Review Generator",
  description:
    "Generate realistic social media reviews with AI-powered content and authentic platform styling. Perfect for mockups, presentations, and educational purposes.",
  keywords: [
    "review generator",
    "social media",
    "mockup",
    "fake reviews",
    "educational",
    "design tool",
    "ui components",
    "reddit review",
    "twitter review",
    "instagram review",
    "amazon review",
  ],
  authors: [{ name: "Abishek Khadka", url: "https://github.com/khadka27" }],
  creator: "Abishek Khadka",
  publisher: "ReviewCraft",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
  openGraph: {
    title: "ReviewCraft - AI-Powered Social Media Review Generator",
    description:
      "Generate realistic social media reviews with AI-powered content and authentic platform styling. Perfect for mockups, presentations, and educational purposes.",
    type: "website",
    url: "https://reviewcraft.app",
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
    title: "ReviewCraft - AI-Powered Social Media Review Generator",
    description:
      "Generate realistic social media reviews for educational purposes, mockups, and presentations.",
    images: ["/images/og-image.png"],
    creator: "@khadka27",
  },
  alternates: {
    canonical: "https://reviewcraft.app",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${
            process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"
          }`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${
              process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"
            }', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
