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
  metadataBase: new URL("https://fakereviewgenerator.com"),
  title: "ReviewCraft - Create Product Reviews Like Social Media Posts",
  description:
    "Discover how Review Craft allows you to create product reviews just like sharing posts on social media. Our user-friendly platform lets customers easily write, interact, and share their reviews in a familiar, engaging format. Whether you're a business looking to collect feedback or a consumer eager to share your experience, Review Craft simplifies the review process with a sleek, intuitive interface. Start creating authentic product reviews today and build trust with your audience.",
  keywords: [
    "product reviews",
    "social media reviews",
    "review platform",
    "customer feedback",
    "review generator",
    "authentic reviews",
    "business reviews",
    "consumer reviews",
    "review interface",
    "user-friendly reviews",
    "review sharing",
    "trust building",
    "review creation",
    "engaging reviews",
  ],
  authors: [{ name: "ReviewCraft Team" }],
  creator: "ReviewCraft",
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
    title: "ReviewCraft - Create Product Reviews Like Social Media Posts",
    description:
      "Discover how Review Craft allows you to create product reviews just like sharing posts on social media. Our user-friendly platform lets customers easily write, interact, and share their reviews in a familiar, engaging format.",
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
    title: "ReviewCraft - Create Product Reviews Like Social Media Posts",
    description:
      "User-friendly platform for creating authentic product reviews in a familiar social media format. Build trust with your audience through engaging reviews.",
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
