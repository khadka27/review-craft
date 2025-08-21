"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReviewData } from "@/types/review";
import { generateRandomReviewData } from "@/utils/dataGenerator";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewPreview } from "@/components/ReviewPreview";
import { Shield } from "lucide-react";

export default function Home() {
  const [reviewData, setReviewData] = useState<ReviewData>({
    id: "",
    name: "",
    username: "",
    avatar: "",
    gender: "random",
    platform: "reddit",
    title: "",
    content: "",
    rating: 5,
    date: new Date(),
    likes: 0,
    replies: 0,
    shares: 0,
    verified: false,
  });

  const generateCompleteRandomReview = async () => {
    const randomData = await generateRandomReviewData(reviewData.platform);
    setReviewData((prev) => ({ ...prev, ...randomData }));
  };

  const updateReviewData = (updates: Partial<ReviewData>) => {
    setReviewData((prev) => ({ ...prev, ...updates }));
  };

  // Generate initial random data
  useEffect(() => {
    generateCompleteRandomReview();
  }, []);

  // Regenerate username when platform changes
  useEffect(() => {
    const updateUsername = async () => {
      const randomData = await generateRandomReviewData(reviewData.platform);
      if (randomData.username) {
        setReviewData((prev) => ({ ...prev, username: randomData.username }));
      }
    };
    updateUsername();
  }, [reviewData.platform]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <main className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Hero Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-white mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Create Product Reviews Like Social Media Posts
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Generate fake product reviews with realistic social media
              formatting for testing, mockups, and presentations. Our tool
              creates customer feedback posts that look authentic for
              educational purposes.
            </p>
          </div>
        </div>

        {/* Main Content - Mobile First Layout */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Review Preview Section - Always on top on mobile */}
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

          {/* Desktop Layout: Form and Tips Side by Side */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Form Section - Takes 2 columns on desktop */}
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
                  />
                </div>
              </div>
            </div>

            {/* Tips Section - Takes 1 column on desktop */}
            <div className="xl:col-span-1">
              <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                <h3 className="font-semibold text-blue-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <span className="text-xl sm:text-2xl mr-2">💡</span>
                  Tips for Realistic Reviews
                </h3>
                <ul className="text-xs sm:text-sm text-blue-800 space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 text-xs">•</span>
                    <span className="leading-relaxed">
                      Keep content natural and avoid overly promotional language
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 text-xs">•</span>
                    <span className="leading-relaxed">
                      Use platform-appropriate language and tone
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 text-xs">•</span>
                    <span className="leading-relaxed">
                      Adjust engagement metrics to realistic levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 text-xs">•</span>
                    <span className="leading-relaxed">
                      Consider the posting date when setting context
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-lg p-3 sm:p-4 lg:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <Shield className="text-yellow-600 mt-1 flex-shrink-0" size={16} />
            <div className="min-w-0">
              <h3 className="font-semibold text-yellow-900 mb-1 sm:mb-2 text-sm sm:text-base">
                Important Disclaimer
              </h3>
              <p className="text-yellow-800 text-xs sm:text-sm leading-relaxed">
                This tool is designed for educational purposes, mockups, and
                presentations only. Creating fake reviews for deceptive purposes
                is unethical and may violate platform terms of service. Always
                use generated content responsibly and in compliance with
                applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
