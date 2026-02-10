import { ReviewData } from "@/types/review";
import { RedditReview } from "./platforms/RedditReview";
import { TwitterReview } from "./platforms/TwitterReview";
import { InstagramReview } from "./platforms/InstagramReview";
import { TrustpilotReview } from "./platforms/TrustpilotReview";
import { FacebookReview } from "./platforms/FacebookReview";
import { YelpReview } from "./platforms/YelpReview";
import { AmazonReview } from "./platforms/AmazonReview";
import { NetflixReview } from "./platforms/NetflixReview";
import { SpotifyReview } from "./platforms/SpotifyReview";
import { YoutubeReview } from "./platforms/YoutubeReview";
import { LinkedinReview } from "./platforms/LinkedinReview";
import { TiktokReview } from "./platforms/TiktokReview";
import { DiscordReview } from "./platforms/DiscordReview";
import { SteamReview } from "./platforms/SteamReview";
import { ImdbReview } from "./platforms/ImdbReview";
import { Download, Copy, RefreshCw, Loader2 } from "lucide-react";
import {
  downloadReviewAsImage,
  copyToClipboard,
  preloadImagesForDownload,
} from "@/utils/downloadUtils";
import { useState } from "react";

interface ReviewPreviewProps {
  reviewData: ReviewData;
  onRefresh: () => void;
}

export const ReviewPreview = ({
  reviewData,
  onRefresh,
}: ReviewPreviewProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

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
      case "facebook":
        return <FacebookReview {...props} />;
      case "yelp":
        return <YelpReview {...props} />;
      case "amazon":
        return <AmazonReview {...props} />;
      case "netflix":
        return <NetflixReview {...props} />;
      case "spotify":
        return <SpotifyReview {...props} />;
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
      default:
        return <div>Platform not supported</div>;
    }
  };

  const handleDownload = async (format: "png" | "jpeg" = "png") => {
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
      );

      // Show success feedback
      alert(`${format.toUpperCase()} downloaded successfully!`);

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

      alert(
        `${userMessage}\n\nTip: Try refreshing the review to generate new images, or check your internet connection.`,
      );
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
      alert("Review copied to clipboard!");
      // Small delay to show success state
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      alert(
        `Copy failed: ${message}. Please ensure your browser supports clipboard access.`,
      );
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div
          id="review-preview"
          className="w-full max-w-2xl"
          style={{
            backgroundColor: "white",
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
