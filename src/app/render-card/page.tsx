"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState, useEffect } from "react";
import { ReviewData, Platform } from "@/types/review";

import { RedditReview } from "@/components/platforms/RedditReview";
import { TwitterReview } from "@/components/platforms/TwitterReview";
import { InstagramReview } from "@/components/platforms/InstagramReview";
import { TrustpilotReview } from "@/components/platforms/TrustpilotReview";
import { FacebookReview } from "@/components/platforms/FacebookReview";
import { GoogleReview } from "@/components/platforms/GoogleReview";
import { YelpReview } from "@/components/platforms/YelpReview";
import { AmazonReview } from "@/components/platforms/AmazonReview";
import { YoutubeReview } from "@/components/platforms/YoutubeReview";
import { LinkedinReview } from "@/components/platforms/LinkedinReview";
import { TiktokReview } from "@/components/platforms/TiktokReview";
import { DiscordReview } from "@/components/platforms/DiscordReview";
import { SteamReview } from "@/components/platforms/SteamReview";
import { ImdbReview } from "@/components/platforms/ImdbReview";
import { GenericEcomReview } from "@/components/platforms/GenericEcomReview";
import { FlipkartReview } from "@/components/platforms/FlipkartReview";
import { PlaystoreReview } from "@/components/platforms/PlaystoreReview";
import { ClutchReview } from "@/components/platforms/ClutchReview";
import { BBBReview } from "@/components/platforms/BBBReview";
import { ConsumerReportsReview } from "@/components/platforms/ConsumerReportsReview";
import { G2Review } from "@/components/platforms/G2Review";
import { CapterraReview } from "@/components/platforms/CapterraReview";
import { AngiReview } from "@/components/platforms/AngiReview";
import { AppstoreReview } from "@/components/platforms/AppstoreReview";
import { AirbnbReview } from "@/components/platforms/AirbnbReview";
import { TripadvisorReview } from "@/components/platforms/TripadvisorReview";
import { ShopifyReview } from "@/components/platforms/ShopifyReview";
import { FiverrReview } from "@/components/platforms/FiverrReview";
import { BookingReview } from "@/components/platforms/BookingReview";
import { EbayReview } from "@/components/platforms/EbayReview";
import { WalmartReview } from "@/components/platforms/WalmartReview";
import { BestbuyReview } from "@/components/platforms/BestbuyReview";
import { EtsyReview } from "@/components/platforms/EtsyReview";
import { AliexpressReview } from "@/components/platforms/AliexpressReview";
import { AlibabaReview } from "@/components/platforms/AlibabaReview";
import { DarazReview } from "@/components/platforms/DarazReview";
import { TestimonialReview } from "@/components/platforms/TestimonialReview";
import { Generic5StarReview } from "@/components/platforms/Generic5StarReview";
import { Generic1StarReview } from "@/components/platforms/Generic1StarReview";

function RenderCardInner() {
  const searchParams = useSearchParams();
  const [injectedData, setInjectedData] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).__REVIEW_DATA__) {
        setInjectedData((window as any).__REVIEW_DATA__);
      }
      const handleMsg = (e: MessageEvent) => {
        if (e.data && e.data.type === "SET_REVIEW_DATA" && e.data.data) {
          setInjectedData(e.data.data);
        }
      };
      window.addEventListener("message", handleMsg);
      return () => window.removeEventListener("message", handleMsg);
    }
  }, []);

  const reviewData: ReviewData = useMemo(() => {
    if (injectedData) {
      return {
        ...injectedData,
        date: injectedData.date ? new Date(injectedData.date) : new Date(),
      };
    }

    const raw = searchParams.get("data");
    if (raw) {
      try {
        const decoded = JSON.parse(decodeURIComponent(escape(atob(raw))));
        return {
          ...decoded,
          date: decoded.date ? new Date(decoded.date) : new Date(),
        };
      } catch (e) {
        console.error("Failed to parse data param:", e);
      }
    }

    const platform = (searchParams.get("platform") || "google") as Platform;
    const name = searchParams.get("name") || "David Miller";
    const username = searchParams.get("username") || "davidmiller_42";
    const avatar = searchParams.get("avatar") || "https://randomuser.me/api/portraits/men/32.jpg";
    const title = searchParams.get("title") || "Outstanding design and build quality";
    const content = searchParams.get("content") || "The review mockup generator works seamlessly for prototyping product landing pages and client feedback presentations.";
    const rating = parseInt(searchParams.get("rating") || "5", 10);

    return {
      id: "preview-card",
      platform,
      name,
      username,
      avatar,
      gender: "random",
      title,
      content,
      rating,
      date: new Date(),
      likes: 42,
      replies: 7,
      shares: 3,
      verified: true,
      deviceViewMode: "desktop",
      facebookContentType: "post",
      facebookViewMode: "desktop",
      appstoreTemplate: "editorial",
    };
  }, [searchParams, injectedData]);

  const renderComponent = () => {
    const props = { data: reviewData };
    switch (reviewData.platform) {
      case "reddit": return <RedditReview {...props} />;
      case "twitter": return <TwitterReview {...props} />;
      case "instagram": return <InstagramReview {...props} />;
      case "trustpilot": return <TrustpilotReview {...props} />;
      case "google": return <GoogleReview {...props} />;
      case "facebook": return <FacebookReview {...props} />;
      case "yelp": return <YelpReview {...props} />;
      case "amazon": return <AmazonReview {...props} />;
      case "youtube": return <YoutubeReview {...props} />;
      case "linkedin": return <LinkedinReview {...props} />;
      case "tiktok": return <TiktokReview {...props} />;
      case "discord": return <DiscordReview {...props} />;
      case "steam": return <SteamReview {...props} />;
      case "imdb": return <ImdbReview {...props} />;
      case "airbnb": return <AirbnbReview {...props} />;
      case "tripadvisor": return <TripadvisorReview {...props} />;
      case "shopify": return <ShopifyReview {...props} />;
      case "playstore": return <PlaystoreReview {...props} />;
      case "clutch": return <ClutchReview {...props} />;
      case "bbb": return <BBBReview {...props} />;
      case "consumerreports": return <ConsumerReportsReview {...props} />;
      case "g2": return <G2Review {...props} />;
      case "capterra": return <CapterraReview {...props} />;
      case "angi": return <AngiReview {...props} />;
      case "appstore": return <AppstoreReview {...props} />;
      case "fiverr": return <FiverrReview {...props} />;
      case "booking": return <BookingReview {...props} />;
      case "flipkart": return <FlipkartReview {...props} />;
      case "daraz": return <DarazReview {...props} />;
      case "ebay": return <EbayReview {...props} />;
      case "walmart": return <WalmartReview {...props} />;
      case "bestbuy": return <BestbuyReview {...props} />;
      case "etsy": return <EtsyReview {...props} />;
      case "aliexpress": return <AliexpressReview {...props} />;
      case "alibaba": return <AlibabaReview {...props} />;
      case "ecommerce": return <GenericEcomReview {...props} />;
      case "testimonial": return <TestimonialReview {...props} />;
      case "generic5star": return <Generic5StarReview {...props} />;
      case "generic1star": return <Generic1StarReview {...props} />;
      default: return <GoogleReview {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent p-6 flex items-start justify-center">
      <div
        id="screenshot-target"
        className="w-full max-w-2xl bg-transparent overflow-hidden"
        style={{ margin: 0 }}
      >
        {renderComponent()}
      </div>
    </div>
  );
}

export default function RenderCardPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading preview...</div>}>
      <RenderCardInner />
    </Suspense>
  );
}
