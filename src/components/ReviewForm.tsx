import { ReviewData, Platform } from "@/types/review";
import {
  generateRandomReviewData,
  platformStyles,
} from "@/utils/dataGenerator";
import { getPlatformIcon } from "@/components/SocialMediaIcons";
import { Shuffle, User, Calendar, MessageSquare, Star } from "lucide-react";

interface ReviewFormProps {
  reviewData: ReviewData;
  onUpdate: (data: Partial<ReviewData>) => void;
  onGenerateRandom: () => void;
}

export const ReviewForm = ({
  reviewData,
  onUpdate,
  onGenerateRandom,
}: ReviewFormProps) => {
  const handleInputChange = (field: keyof ReviewData, value: any) => {
    onUpdate({ [field]: value });
  };

  const generateRandomForField = async (field: keyof ReviewData) => {
    const randomData = await generateRandomReviewData(reviewData.platform);
    if (randomData[field] !== undefined) {
      onUpdate({ [field]: randomData[field] });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Review Generator</h2>
        <button
          onClick={onGenerateRandom}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          <Shuffle size={16} />
          Generate Random
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Platform Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Platform
          </label>
          <select
            value={reviewData.platform}
            onChange={(e) =>
              handleInputChange("platform", e.target.value as Platform)
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {Object.entries(platformStyles).map(([key, style]) => (
              <option key={key} value={key}>
                {style.name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            {getPlatformIcon(reviewData.platform, 16)}
            <span>Selected: {platformStyles[reviewData.platform].name}</span>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Gender
          </label>
          <select
            value={reviewData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="random">Random</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Name Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <button
              onClick={() => generateRandomForField("name")}
              className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
              title="Generate random name"
            >
              <User size={16} />
            </button>
          </div>
          <input
            type="text"
            value={reviewData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter reviewer name"
          />
        </div>

        {/* Username Input */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={reviewData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter username"
          />
        </div>

        {/* Rating (if platform supports it) */}
        {platformStyles[reviewData.platform].hasRating && (
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleInputChange("rating", star)}
                  className={`p-1 transition-colors ${
                    star <= reviewData.rating
                      ? "text-yellow-400 hover:text-yellow-500"
                      : "text-gray-300 hover:text-yellow-300"
                  }`}
                >
                  <Star
                    size={24}
                    fill={star <= reviewData.rating ? "currentColor" : "none"}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {reviewData.rating}/5
              </span>
            </div>
          </div>
        )}

        {/* Date Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-semibold text-gray-700">
              Date
            </label>
            <button
              onClick={() => generateRandomForField("date")}
              className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
              title="Generate random date"
            >
              <Calendar size={16} />
            </button>
          </div>
          <input
            type="date"
            value={reviewData.date.toISOString().split("T")[0]}
            onChange={(e) =>
              handleInputChange("date", new Date(e.target.value))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Title Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-gray-700">
            Title
          </label>
          <button
            onClick={() => generateRandomForField("title")}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
            title="Generate random title"
          >
            <MessageSquare size={16} />
          </button>
        </div>
        <input
          type="text"
          value={reviewData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter review title"
          maxLength={100}
        />
        <div className="text-xs text-gray-500 text-right">
          {reviewData.title.length}/100
        </div>
      </div>

      {/* Content Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-gray-700">
            Review Content
          </label>
          <button
            onClick={() => generateRandomForField("content")}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
            title="Generate random content"
          >
            <MessageSquare size={16} />
          </button>
        </div>
        <textarea
          value={reviewData.content}
          onChange={(e) => handleInputChange("content", e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          rows={4}
          placeholder="Enter review content"
          maxLength={platformStyles[reviewData.platform].maxLength}
        />
        <div className="text-xs text-gray-500 text-right">
          {reviewData.content.length}/
          {platformStyles[reviewData.platform].maxLength}
        </div>
      </div>

      {/* Engagement Metrics (if platform supports it) */}
      {platformStyles[reviewData.platform].hasEngagement && (
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Likes
            </label>
            <input
              type="number"
              value={reviewData.likes}
              onChange={(e) =>
                handleInputChange("likes", parseInt(e.target.value) || 0)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="0"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Replies
            </label>
            <input
              type="number"
              value={reviewData.replies}
              onChange={(e) =>
                handleInputChange("replies", parseInt(e.target.value) || 0)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="0"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Shares
            </label>
            <input
              type="number"
              value={reviewData.shares}
              onChange={(e) =>
                handleInputChange("shares", parseInt(e.target.value) || 0)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="0"
            />
          </div>
        </div>
      )}
    </div>
  );
};
