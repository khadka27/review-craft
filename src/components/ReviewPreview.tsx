import { ReviewData } from "@/types/review";
import dynamic from "next/dynamic";

const RedditReview = dynamic(() => import("./platforms/RedditReview").then(m => m.RedditReview), { ssr: true });
const TwitterReview = dynamic(() => import("./platforms/TwitterReview").then(m => m.TwitterReview), { ssr: true });
const InstagramReview = dynamic(() => import("./platforms/InstagramReview").then(m => m.InstagramReview), { ssr: true });
const TrustpilotReview = dynamic(() => import("./platforms/TrustpilotReview").then(m => m.TrustpilotReview), { ssr: true });
const FacebookReview = dynamic(() => import("./platforms/FacebookReview").then(m => m.FacebookReview), { ssr: true });
const GoogleReview = dynamic(() => import("./platforms/GoogleReview").then(m => m.GoogleReview), { ssr: true });
const YelpReview = dynamic(() => import("./platforms/YelpReview").then(m => m.YelpReview), { ssr: true });
const AmazonReview = dynamic(() => import("./platforms/AmazonReview").then(m => m.AmazonReview), { ssr: true });
const YoutubeReview = dynamic(() => import("./platforms/YoutubeReview").then(m => m.YoutubeReview), { ssr: true });
const LinkedinReview = dynamic(() => import("./platforms/LinkedinReview").then(m => m.LinkedinReview), { ssr: true });
const TiktokReview = dynamic(() => import("./platforms/TiktokReview").then(m => m.TiktokReview), { ssr: true });
const DiscordReview = dynamic(() => import("./platforms/DiscordReview").then(m => m.DiscordReview), { ssr: true });
const SteamReview = dynamic(() => import("./platforms/SteamReview").then(m => m.SteamReview), { ssr: true });
const ImdbReview = dynamic(() => import("./platforms/ImdbReview").then(m => m.ImdbReview), { ssr: true });
const GenericEcomReview = dynamic(() => import("./platforms/GenericEcomReview").then(m => m.GenericEcomReview), { ssr: true });
const FlipkartReview = dynamic(() => import("./platforms/FlipkartReview").then(m => m.FlipkartReview), { ssr: true });
const PlaystoreReview = dynamic(() => import("./platforms/PlaystoreReview").then(m => m.PlaystoreReview), { ssr: true });
const ClutchReview = dynamic(() => import("./platforms/ClutchReview").then(m => m.ClutchReview), { ssr: true });
const BBBReview = dynamic(() => import("./platforms/BBBReview").then(m => m.BBBReview), { ssr: true });
const ConsumerReportsReview = dynamic(() => import("./platforms/ConsumerReportsReview").then(m => m.ConsumerReportsReview), { ssr: true });
const G2Review = dynamic(() => import("./platforms/G2Review").then(m => m.G2Review), { ssr: true });
const CapterraReview = dynamic(() => import("./platforms/CapterraReview").then(m => m.CapterraReview), { ssr: true });
const AngiReview = dynamic(() => import("./platforms/AngiReview").then(m => m.AngiReview), { ssr: true });
const AppstoreReview = dynamic(() => import("./platforms/AppstoreReview").then(m => m.AppstoreReview), { ssr: true });
const AirbnbReview = dynamic(() => import("./platforms/AirbnbReview").then(m => m.AirbnbReview), { ssr: true });
const TripadvisorReview = dynamic(() => import("./platforms/TripadvisorReview").then(m => m.TripadvisorReview), { ssr: true });
const ShopifyReview = dynamic(() => import("./platforms/ShopifyReview").then(m => m.ShopifyReview), { ssr: true });
const FiverrReview = dynamic(() => import("./platforms/FiverrReview").then(m => m.FiverrReview), { ssr: true });
const BookingReview = dynamic(() => import("./platforms/BookingReview").then(m => m.BookingReview), { ssr: true });
const EbayReview = dynamic(() => import("./platforms/EbayReview").then(m => m.EbayReview), { ssr: true });
const WalmartReview = dynamic(() => import("./platforms/WalmartReview").then(m => m.WalmartReview), { ssr: true });
const BestbuyReview = dynamic(() => import("./platforms/BestbuyReview").then(m => m.BestbuyReview), { ssr: true });
const EtsyReview = dynamic(() => import("./platforms/EtsyReview").then(m => m.EtsyReview), { ssr: true });
const AliexpressReview = dynamic(() => import("./platforms/AliexpressReview").then(m => m.AliexpressReview), { ssr: true });
const AlibabaReview = dynamic(() => import("./platforms/AlibabaReview").then(m => m.AlibabaReview), { ssr: true });
const DarazReview = dynamic(() => import("./platforms/DarazReview").then(m => m.DarazReview), { ssr: true });
const TestimonialReview = dynamic(() => import("./platforms/TestimonialReview").then(m => m.TestimonialReview), { ssr: true });
const Generic5StarReview = dynamic(() => import("./platforms/Generic5StarReview").then(m => m.Generic5StarReview), { ssr: true });
const Generic1StarReview = dynamic(() => import("./platforms/Generic1StarReview").then(m => m.Generic1StarReview), { ssr: true });
import { Download, Copy, RefreshCw, Loader2 } from "lucide-react";
import {
  downloadReviewAsImage,
  copyToClipboard,
  preloadImagesForDownload,
} from "@/utils/downloadUtils";
import { useState } from "react";
import { useToast } from "@/components/ui/Toast";

interface ReviewPreviewProps {
  reviewData: ReviewData;
  onRefresh: () => void;
}

export const ReviewPreview = ({
  reviewData,
  onRefresh,
}: ReviewPreviewProps) => {
  const { success, error: toastError } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [includeExif, setIncludeExif] = useState(false);
  const isMobileView = (reviewData.deviceViewMode || "desktop") === "mobile";

  const renderPlatformReview = () => {
    const props = { data: reviewData };

    switch (reviewData.platform) {
      case "reddit":
        return <RedditReview {...props} />;
      case "twitter":
        return <TwitterReview {...props} />;
      case "instagram":
        return <InstagramReview {...props} />;
      case "trustpilot":
        return <TrustpilotReview {...props} />;
      case "google":
        return <GoogleReview {...props} />;
      case "facebook":
        return <FacebookReview {...props} />;
      case "yelp":
        return <YelpReview {...props} />;
      case "amazon":
        return <AmazonReview {...props} />;
      case "youtube":
        return <YoutubeReview {...props} />;
      case "linkedin":
        return <LinkedinReview {...props} />;
      case "tiktok":
        return <TiktokReview {...props} />;
      case "discord":
        return <DiscordReview {...props} />;
      case "steam":
        return <SteamReview {...props} />;
      case "imdb":
        return <ImdbReview {...props} />;
      case "airbnb":
        return <AirbnbReview {...props} />;
      case "tripadvisor":
        return <TripadvisorReview {...props} />;
      case "shopify":
        return <ShopifyReview {...props} />;
      case "playstore":
        return <PlaystoreReview {...props} />;
      case "clutch":
        return <ClutchReview {...props} />;
      case "bbb":
        return <BBBReview {...props} />;
      case "consumerreports":
        return <ConsumerReportsReview {...props} />;
      case "g2":
        return <G2Review {...props} />;
      case "capterra":
        return <CapterraReview {...props} />;
      case "angi":
        return <AngiReview {...props} />;
      case "appstore":
        return <AppstoreReview {...props} />;
      case "fiverr":
        return <FiverrReview {...props} />;
      case "booking":
        return <BookingReview {...props} />;
      case "flipkart":
        return <FlipkartReview {...props} />;
      case "daraz":
        return <DarazReview {...props} />;
      case "ebay":
        return <EbayReview {...props} />;
      case "walmart":
        return <WalmartReview {...props} />;
      case "bestbuy":
        return <BestbuyReview {...props} />;
      case "etsy":
        return <EtsyReview {...props} />;
      case "aliexpress":
        return <AliexpressReview {...props} />;
      case "alibaba":
        return <AlibabaReview {...props} />;
      case "ecommerce":
        return <GenericEcomReview {...props} />;
      case "testimonial":
        return <TestimonialReview {...props} />;
      case "generic5star":
        return <Generic5StarReview {...props} />;
      case "generic1star":
        return <Generic1StarReview {...props} />;
      default:
        return <div>Platform not supported</div>;
    }
  };

  const handleDownload = async (format: "png" | "jpeg" | "webp" = "png") => {
    if (isDownloading) return;

    setIsDownloading(true);
    try {
      // Ensure the review data exists
      if (!reviewData || !reviewData.platform) {
        throw new Error("Review data is not available");
      }

      // Wait a bit to ensure component is fully rendered
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Preload all images to ensure they're ready for download
      console.log("🖼️ Preloading images before download...");
      const preloadSuccess = await preloadImagesForDownload("review-preview");

      if (!preloadSuccess) {
        console.warn(
          "⚠️ Some images failed to preload, but continuing with download",
        );
      }

      // Additional wait after preloading to ensure everything is rendered
      await new Promise((resolve) => setTimeout(resolve, 500));

      await downloadReviewAsImage(
        "review-preview",
        `${reviewData.platform}-review`,
        format,
        includeExif,
        isMobileView,
      );

      // Show success feedback
      const finalFormat = format.toUpperCase();
      success(`${finalFormat} downloaded successfully!${includeExif ? " (with EXIF metadata)" : ""}`);

      // Small delay to show success state
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Failed to download image:", error);
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";

      // Provide more helpful error messages based on common issues
      let userMessage = `Download failed: ${message}`;

      if (message.includes("CORS") || message.includes("cross-origin")) {
        userMessage =
          "Download failed due to image loading restrictions. The image will be generated with a fallback avatar.";
      } else if (message.includes("network") || message.includes("timeout")) {
        userMessage =
          "Download failed due to network issues. Please check your connection and try again.";
      } else if (message.includes("tainted") || message.includes("security")) {
        userMessage =
          "Download completed with a generated avatar due to browser security restrictions.";
      }

      toastError(userMessage);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopy = async () => {
    if (isCopying) return;

    setIsCopying(true);
    try {
      // Preload images before copying to clipboard
      console.log("🖼️ Preloading images before copying...");
      const preloadSuccess = await preloadImagesForDownload("review-preview");

      if (!preloadSuccess) {
        console.warn(
          "⚠️ Some images failed to preload, but continuing with copy",
        );
      }

      // Additional wait to ensure everything is rendered
      await new Promise((resolve) => setTimeout(resolve, 300));

      await copyToClipboard("review-preview");
      success("Review copied to clipboard!");
      // Small delay to show success state
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      toastError(`Copy failed: ${message}`);
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center sm:text-left">
          Preview
        </h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <label className="flex items-center gap-2 cursor-pointer bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 select-none text-sm text-gray-700">
            <input
              type="checkbox"
              checked={includeExif}
              onChange={(e) => setIncludeExif(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <span className="font-semibold whitespace-nowrap text-gray-700">Add EXIF Metadata</span>
          </label>
          <button
            onClick={onRefresh}
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base"
          >
            <RefreshCw size={14} className="sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Refresh</span>
          </button>
          <button
            onClick={handleCopy}
            disabled={isCopying}
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm sm:text-base"
          >
            {isCopying ? (
              <Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin" />
            ) : (
              <Copy size={14} className="sm:w-4 sm:h-4" />
            )}
            <span className="whitespace-nowrap">
              {isCopying ? "Copying..." : "Copy"}
            </span>
          </button>
          <div className="relative group">
            <button
              onClick={() => handleDownload("png")}
              disabled={isDownloading}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
            >
              {isDownloading ? (
                <Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin" />
              ) : (
                <Download size={14} className="sm:w-4 sm:h-4" />
              )}
              <span className="whitespace-nowrap">
                {isDownloading ? "Downloading..." : "Download"}
              </span>
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-full">
              <button
                onClick={() => handleDownload("png")}
                disabled={isDownloading}
                className="block w-full px-3 sm:px-4 py-2 text-left text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                PNG
              </button>
              <button
                onClick={() => handleDownload("jpeg")}
                disabled={isDownloading}
                className="block w-full px-3 sm:px-4 py-2 text-left text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                JPEG
              </button>
              <button
                onClick={() => handleDownload("webp")}
                disabled={isDownloading}
                className="block w-full px-3 sm:px-4 py-2 text-left text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                WEBP
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full min-h-[300px]">
        <div
          id="review-preview"
          className={`w-full ${
            ["clutch", "bbb", "consumerreports", "g2", "capterra", "angi"].includes(reviewData.platform)
              ? "max-w-full"
              : isMobileView
                ? "max-w-[390px]"
                : "max-w-2xl"
          }`}
          style={{
            backgroundColor: "transparent",
            padding: "0",
            margin: "0",
          }}
        >
          <div className="w-full overflow-x-auto">{renderPlatformReview()}</div>
        </div>
      </div>
    </div>
  );
};
