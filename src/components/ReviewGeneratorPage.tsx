"use client";

import { useState, useEffect, useRef } from "react";
import { ReviewData, Platform } from "@/types/review";
import { generateRandomReviewData } from "@/utils/dataGenerator";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewPreview } from "@/components/ReviewPreview";
import { Shield } from "lucide-react";
import { trackPageView, trackPlatformSwitch } from "@/utils/analytics";

interface ReviewGeneratorPageProps {
  initialPlatform?: Platform;
  lockPlatform?: boolean;
  pageViewName?: string;
  heroTitle?: string;
  heroDescription?: string;
  theme?: {
    pageGradient: string;
    heroGradient: string;
    heroDescriptionColor: string;
    tipsCard: string;
    tipsHeading: string;
    tipsText: string;
    tipsBullet: string;
    disclaimerCard: string;
    disclaimerHeading: string;
    disclaimerText: string;
    disclaimerIcon: string;
  };
}

export function ReviewGeneratorPage({
  initialPlatform = "reddit",
  lockPlatform = false,
  pageViewName = "home_review_generator",
  heroTitle = "Create Product Reviews Like Social Media Posts",
  heroDescription = "Generate fake product reviews with realistic social media formatting for testing, mockups, and presentations. Our tool creates customer feedback posts that look authentic for educational purposes.",
  theme,
}: ReviewGeneratorPageProps) {
  const [reviewData, setReviewData] = useState<ReviewData>({
    id: "",
    name: "Loading...",
    username: "loading...",
    avatar: "/images/default-avatar.jpg",
    gender: "random",
    platform: initialPlatform,
    title: "Loading review...",
    content: "Please wait while we generate your review...",
    rating: 5,
    date: new Date(),
    likes: 0,
    replies: 0,
    shares: 0,
    verified: false,
    deviceViewMode: "desktop",
    facebookContentType: "post",
    facebookViewMode: "desktop",
  });

  const previousPlatformRef = useRef<Platform>(initialPlatform);

  const generateCompleteRandomReview = async () => {
    const randomData = await generateRandomReviewData(reviewData.platform);
    setReviewData((prev) => ({ ...prev, ...randomData }));
  };

  const updateReviewData = (updates: Partial<ReviewData>) => {
    setReviewData((prev) => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    generateCompleteRandomReview();
    trackPageView(pageViewName);
  }, [pageViewName]);

  useEffect(() => {
    const updateUsername = async () => {
      const randomData = await generateRandomReviewData(reviewData.platform);
      if (randomData.username) {
        setReviewData((prev) => ({ ...prev, username: randomData.username }));
      }
    };

    updateUsername();

    if (previousPlatformRef.current !== reviewData.platform) {
      trackPlatformSwitch(previousPlatformRef.current, reviewData.platform);
      previousPlatformRef.current = reviewData.platform;
    }
  }, [reviewData.platform]);

  const activeTheme = theme || {
    pageGradient: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",
    heroGradient: "bg-gradient-to-r from-purple-600 to-blue-600",
    heroDescriptionColor: "text-purple-100",
    tipsCard: "bg-blue-50 border border-blue-200",
    tipsHeading: "text-blue-900",
    tipsText: "text-blue-800",
    tipsBullet: "text-blue-600",
    disclaimerCard: "bg-yellow-50 border border-yellow-200",
    disclaimerHeading: "text-yellow-900",
    disclaimerText: "text-yellow-800",
    disclaimerIcon: "text-yellow-600",
  };

  return (
    <div className={`min-h-screen ${activeTheme.pageGradient}`}>
      <main className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div
            className={`${activeTheme.heroGradient} rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-white mb-6 sm:mb-8`}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
              {heroTitle}
            </h1>
            <p
              className={`text-sm sm:text-base lg:text-lg ${activeTheme.heroDescriptionColor} max-w-3xl mx-auto leading-relaxed px-2 sm:px-0`}
            >
              {heroDescription}
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="w-full">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 lg:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                Review Preview
              </h2>
              <div className="overflow-x-auto">
                <ReviewPreview
                  reviewData={reviewData}
                  onRefresh={generateCompleteRandomReview}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="xl:col-span-2">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 lg:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center xl:text-left">
                  Generate Review
                </h2>
                <div className="w-full">
                  <ReviewForm
                    reviewData={reviewData}
                    onUpdate={updateReviewData}
                    onGenerateRandom={generateCompleteRandomReview}
                    showPlatformSelector={!lockPlatform}
                  />
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <div
                className={`${activeTheme.tipsCard} rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6`}
              >
                <h3
                  className={`font-semibold ${activeTheme.tipsHeading} mb-3 sm:mb-4 flex items-center text-sm sm:text-base`}
                >
                  <span className="text-xl sm:text-2xl mr-2">💡</span> Tips for
                  Realistic Reviews
                </h3>
                <ul
                  className={`text-xs sm:text-sm ${activeTheme.tipsText} space-y-2 sm:space-y-3`}
                >
                  <li className="flex items-start">
                    <span
                      className={`${activeTheme.tipsBullet} mr-2 mt-1 text-xs`}
                    >
                      •
                    </span>
                    <span className="leading-relaxed">
                      Keep content natural and avoid overly promotional language
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`${activeTheme.tipsBullet} mr-2 mt-1 text-xs`}
                    >
                      •
                    </span>
                    <span className="leading-relaxed">
                      Use platform-appropriate language and tone
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`${activeTheme.tipsBullet} mr-2 mt-1 text-xs`}
                    >
                      •
                    </span>
                    <span className="leading-relaxed">
                      Adjust engagement metrics to realistic levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`${activeTheme.tipsBullet} mr-2 mt-1 text-xs`}
                    >
                      •
                    </span>
                    <span className="leading-relaxed">
                      Consider the posting date when setting context
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-10 lg:mt-12 ${activeTheme.disclaimerCard} rounded-lg sm:rounded-lg p-3 sm:p-4 lg:p-6`}
        >
          <div className="flex items-start gap-2 sm:gap-3">
            <Shield
              className={`${activeTheme.disclaimerIcon} mt-1 flex-shrink-0`}
              size={16}
            />
            <div className="min-w-0">
              <h3
                className={`font-semibold ${activeTheme.disclaimerHeading} mb-1 sm:mb-2 text-sm sm:text-base`}
              >
                Important Disclaimer
              </h3>
              <p
                className={`${activeTheme.disclaimerText} text-xs sm:text-sm leading-relaxed`}
              >
                ReviewCraft is intended for mockups, prototypes, internal demos,
                design previews, sales materials, testing environments, and
                draft marketing assets. It must not be used to mislead
                customers, fabricate trust signals, impersonate real buyers, or
                present generated reviews as genuine public feedback. Any
                deceptive, infringing, or non-compliant use is strictly
                prohibited and may result in legal exposure, platform action,
                reputational damage, or other consequences. By using
                ReviewCraft, you remain responsible for ensuring that every
                screenshot, testimonial-style asset, or review layout is used
                only in lawful, clearly non-deceptive, and appropriate business
                or creative contexts.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
