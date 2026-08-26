import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6366f1",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fakereviewgenerator.com"),
  title: {
    default: "Review Mockup & Social Proof UI Prototype Generator | ReviewCraft",
    template: "%s | ReviewCraft",
  },
  description:
    "Design realistic review interface mockups, social proof prototypes, and feedback component visuals for UI/UX testing, client presentations, product demos, and educational projects.",
  keywords: [
    "review generator",
    "review maker",
    "ai review generator",
    "automatic reviews",
    "review tool",
    "review on yelp",
    "fake google reviews",
    "google review generator",
    "write a google review",
    "product reviews mockup",
    "amazon review generator",
    "trustpilot reviews maker",
    "shop reviews generator",
    "review screenshot generator",
    "google review card maker",
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
    title: "Review Mockup & Social Proof UI Prototype Generator | ReviewCraft",
    description:
      "Design realistic review interface mockups, social proof prototypes, and feedback component visuals for UI/UX testing, client presentations, and product demos.",
    type: "website",
    url: "https://www.fakereviewgenerator.com",
    siteName: "ReviewCraft",
    images: [
      {
        url: "/logo/logo.png",
        width: 100,
        height: 100,
        alt: "ReviewCraft - Review & Social Proof UI Mockup Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Review Mockup & Social Proof UI Prototype Generator | ReviewCraft",
    description:
      "Design realistic review interface mockups and social proof prototypes for UI design, client presentations, and educational projects.",
    images: ["/logo/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-adsense-account": "ca-pub-5286253567075688",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-JF87FG7JXT";

  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="application-name" content="ReviewCraft" />
        <meta name="apple-mobile-web-app-title" content="ReviewCraft" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Speculation Rules */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "document",
                  where: { and: [{ href_matches: "/*" }] },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          {/* Deferred AdSense script loading strategy (lazyOnload) prevents blocking mobile main thread (INP/LCP fix) */}
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
              process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-5286253567075688"
            }`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
            id="adsense-init"
          />

          <Footer />

          {/* Lazy-loaded Google Analytics to ensure 0 main-thread blocking during initial paint */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
            id="ga-script"
          />
          <Script
            id="ga-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </ToastProvider>
      </body>
    </html>
  );
}
