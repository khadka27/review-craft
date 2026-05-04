import { ReviewData, Platform } from "@/types/review";
import {
  generateRandomReviewData,
  platformStyles,
} from "@/utils/dataGenerator";
import { getPlatformIcon } from "@/components/SocialMediaIcons";
import { trackPlatformSwitch, trackFeatureUse } from "@/utils/analytics";
import {
  Shuffle,
  User,
  Calendar,
  MessageSquare,
  Star,
  Upload,
  X,
  ImageIcon,
} from "lucide-react";
import { useState, useRef } from "react";

interface ReviewFormProps {
  reviewData: ReviewData;
  onUpdate: (data: Partial<ReviewData>) => void;
  onGenerateRandom: () => void;
  showPlatformSelector?: boolean;
  platformCategory?: "social" | "ecommerce" | "professional" | "entertainment";
}

export const ReviewForm = ({
  reviewData,
  onUpdate,
  onGenerateRandom,
  showPlatformSelector = true,
  platformCategory,
}: ReviewFormProps) => {
  const [imageUrl, setImageUrl] = useState("");
  const [avatarType, setAvatarType] = useState<"api" | "default" | "custom">(
    "api",
  );
  const [customAvatarUrl, setCustomAvatarUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: keyof ReviewData, value: any) => {
    // Track platform changes
    if (field === "platform" && value !== reviewData.platform) {
      trackPlatformSwitch(reviewData.platform, value);
    }
    onUpdate({ [field]: value });
  };

  const generateRandomForField = async (field: keyof ReviewData) => {
    const randomData = await generateRandomReviewData(reviewData.platform);
    if (randomData[field] !== undefined) {
      onUpdate({ [field]: randomData[field] });
      trackFeatureUse(`random_${field}`);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const currentImages = reviewData.images || [];
      const newImages: string[] = [];

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          newImages.push(result);
          if (newImages.length === files.length) {
            const updatedImages = [...currentImages, ...newImages];
            handleInputChange("images", updatedImages);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleUrlAdd = () => {
    if (imageUrl.trim()) {
      const currentImages = reviewData.images || [];
      const updatedImages = [...currentImages, imageUrl.trim()];
      handleInputChange("images", updatedImages);
      setImageUrl("");
    }
  };

  const removeImage = (index: number) => {
    const currentImages = reviewData.images || [];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    handleInputChange("images", updatedImages);
  };

  const handleAvatarTypeChange = (type: "api" | "default" | "custom") => {
    setAvatarType(type);
    if (type === "default") {
      handleInputChange("avatar", "/images/default-avatar.jpg");
    } else if (type === "api") {
      // Keep current API avatar or generate new one
      if (
        !reviewData.avatar ||
        reviewData.avatar === "/images/default-avatar.jpg"
      ) {
        generateRandomForField("avatar");
      }
    }
  };

  const handleCustomAvatarUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCustomAvatarUrl(result);
        handleInputChange("avatar", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCustomAvatarUrl = () => {
    if (customAvatarUrl.trim()) {
      handleInputChange("avatar", customAvatarUrl.trim());
    }
  };

  const isFacebookPostMode =
    reviewData.platform === "facebook" &&
    (reviewData.facebookContentType || "post") === "post";
  let contentLabel = "Review Content";
  let contentPlaceholder = "Enter review content";
  if (reviewData.platform === "facebook") {
    contentLabel = isFacebookPostMode ? "Post Content" : "Comment";
    contentPlaceholder = isFacebookPostMode
      ? "Enter post content"
      : "Enter comment";
  }

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center sm:text-left">
          Review Generator
        </h2>
        <button
          onClick={onGenerateRandom}
          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
        >
          <Shuffle size={14} className="sm:w-4 sm:h-4" />
          <span className="whitespace-nowrap">Generate Random</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Platform Selection */}
        {(showPlatformSelector || platformCategory) && (
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              {platformCategory
                ? `${platformCategory.charAt(0).toUpperCase() + platformCategory.slice(1)} Platform`
                : "Platform"}
            </label>
            <select
              value={reviewData.platform}
              onChange={(e) =>
                handleInputChange("platform", e.target.value as Platform)
              }
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            >
              {Object.entries(platformStyles)
                .filter(([key]) => {
                  if (!platformCategory) return true;
                  if (platformCategory === "ecommerce") {
                    return [
                      "amazon",
                      "ebay",
                      "walmart",
                      "bestbuy",
                      "etsy",
                      "aliexpress",
                      "alibaba",
                      "daraz",
                      "flipkart",
                      "ecommerce",
                    ].includes(key);
                  }
                  return true; // Expand other categories as needed
                })
                .map(([key, style]) => (
                  <option key={key} value={key}>
                    {style.name}
                  </option>
                ))}
            </select>
            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-gray-600">
              {getPlatformIcon(reviewData.platform, 14)}
              <span className="truncate">
                Selected: {platformStyles[reviewData.platform].name}
              </span>
            </div>
          </div>
        )}

        {/* Gender Selection */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            Gender
          </label>
          <select
            value={reviewData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
          >
            <option value="random">Random</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Screen Mode For All Platforms */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            Screen Mode
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                onUpdate({
                  deviceViewMode: "desktop",
                  ...(reviewData.platform === "facebook"
                    ? { facebookViewMode: "desktop" }
                    : {}),
                })
              }
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                (reviewData.deviceViewMode || "desktop") === "desktop"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Desktop
            </button>
            <button
              type="button"
              onClick={() =>
                onUpdate({
                  deviceViewMode: "mobile",
                  ...(reviewData.platform === "facebook"
                    ? { facebookViewMode: "mobile" }
                    : {}),
                })
              }
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                (reviewData.deviceViewMode || "desktop") === "mobile"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Phone Model Selection - Only show when Mobile is selected */}
        {(reviewData.deviceViewMode || "desktop") === "mobile" && (
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Phone Model
            </label>
            <select
              value={reviewData.phoneModel || "iPhone 15 Pro"}
              onChange={(e) => onUpdate({ phoneModel: e.target.value })}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            >
              {/* Apple Models */}
              <optgroup label="Apple">
                <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                <option value="iPhone 15">iPhone 15</option>
                <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                <option value="iPhone 14">iPhone 14</option>
                <option value="iPhone 13">iPhone 13</option>
              </optgroup>
              {/* Samsung Models */}
              <optgroup label="Samsung">
                <option value="Samsung Galaxy S24 Ultra">
                  Samsung Galaxy S24 Ultra
                </option>
                <option value="Samsung Galaxy S24">Samsung Galaxy S24</option>
                <option value="Samsung Galaxy S23">Samsung Galaxy S23</option>
                <option value="Samsung Galaxy A55">Samsung Galaxy A55</option>
                <option value="Samsung Galaxy Z Fold 6">
                  Samsung Galaxy Z Fold 6
                </option>
              </optgroup>
              {/* Google Models */}
              <optgroup label="Google">
                <option value="Google Pixel 9 Pro">Google Pixel 9 Pro</option>
                <option value="Google Pixel 9">Google Pixel 9</option>
                <option value="Google Pixel 8">Google Pixel 8</option>
              </optgroup>
              {/* OnePlus Models */}
              <optgroup label="OnePlus">
                <option value="OnePlus 12">OnePlus 12</option>
                <option value="OnePlus 11">OnePlus 11</option>
              </optgroup>
              {/* Xiaomi Models */}
              <optgroup label="Xiaomi">
                <option value="Xiaomi 14 Ultra">Xiaomi 14 Ultra</option>
                <option value="Xiaomi 13">Xiaomi 13</option>
              </optgroup>
              {/* Generic Options */}
              <optgroup label="Generic">
                <option value="Generic Android">Generic Android</option>
                <option value="Generic iOS">Generic iOS</option>
              </optgroup>
            </select>
          </div>
        )}

        {/* Avatar Selection */}
        <div className="space-y-2 sm:col-span-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            Avatar
          </label>
          <div className="space-y-3">
            {/* Avatar Type Selection */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleAvatarTypeChange("api")}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                  avatarType === "api"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Generate API
              </button>
              <button
                type="button"
                onClick={() => handleAvatarTypeChange("default")}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                  avatarType === "default"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Default Avatar
              </button>
              <button
                type="button"
                onClick={() => handleAvatarTypeChange("custom")}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                  avatarType === "custom"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Custom
              </button>
            </div>

            {/* Avatar Preview */}
            <div className="flex items-center gap-3">
              {reviewData.avatar ? (
                <img
                  src={reviewData.avatar}
                  alt="Avatar preview"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg text-gray-400">?</span>
                </div>
              )}
              <div className="text-xs sm:text-sm text-gray-600">
                Current avatar preview
              </div>
            </div>

            {/* Custom Avatar Options */}
            {avatarType === "custom" && (
              <div className="space-y-2">
                {/* File Upload */}
                <div className="flex gap-2">
                  <input
                    type="file"
                    ref={avatarInputRef}
                    onChange={handleCustomAvatarUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => avatarInputRef.current?.click()}
                    className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Upload size={14} className="sm:w-4 sm:h-4" />
                    Upload Avatar
                  </button>
                </div>

                {/* URL Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customAvatarUrl}
                    onChange={(e) => setCustomAvatarUrl(e.target.value)}
                    placeholder="Or paste avatar URL"
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleCustomAvatarUrl}
                    disabled={!customAvatarUrl.trim()}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Set
                  </button>
                </div>
              </div>
            )}

            {/* Generate New API Avatar Button */}
            {avatarType === "api" && (
              <button
                type="button"
                onClick={() => generateRandomForField("avatar")}
                className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <User size={14} className="sm:w-4 sm:h-4" />
                Generate New Avatar
              </button>
            )}
          </div>
        </div>

        {/* Facebook Screen Mode */}
        {reviewData.platform === "facebook" && (
          <div className="space-y-2 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Facebook Content Type
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleInputChange("facebookContentType", "post")}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                  (reviewData.facebookContentType || "post") === "post"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Post
              </button>
              <button
                type="button"
                onClick={() =>
                  handleInputChange("facebookContentType", "review")
                }
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                  (reviewData.facebookContentType || "post") === "review"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Comment
              </button>
            </div>
          </div>
        )}

        {/* Google Content Type */}
        {reviewData.platform === "google" && (
          <div className="space-y-2 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Google View Mode
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleInputChange("googleContentType", "single")}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                  (reviewData.googleContentType || "single") === "single"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Single Review
              </button>
              <button
                type="button"
                onClick={() =>
                  handleInputChange("googleContentType", "summary")
                }
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                  (reviewData.googleContentType || "single") === "summary"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Summary Badge
              </button>
            </div>
          </div>
        )}

        {/* App Store Template */}
        {reviewData.platform === "appstore" && (
          <div className="space-y-2 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              App Store Template
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  handleInputChange("appstoreTemplate", "editorial")
                }
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                  (reviewData.appstoreTemplate || "editorial") === "editorial"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Editorial
              </button>
              <button
                type="button"
                onClick={() => handleInputChange("appstoreTemplate", "classic")}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors ${
                  (reviewData.appstoreTemplate || "editorial") === "classic"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Classic
              </button>
            </div>
          </div>
        )}

        {/* Name Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Name
            </label>
            <button
              onClick={() => generateRandomForField("name")}
              className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
              title="Generate random name"
            >
              <User size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
          <input
            type="text"
            value={reviewData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            placeholder="Enter reviewer name"
          />
        </div>

        {/* Username Input */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={reviewData.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            placeholder="Enter username"
          />
        </div>

        {/* Rating (if platform supports it) */}
        {platformStyles[reviewData.platform].hasRating && (
          <div className="space-y-2 sm:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Rating
            </label>
            <div className="flex items-center gap-1 sm:gap-2">
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
                    size={20}
                    className="sm:w-6 sm:h-6"
                    fill={star <= reviewData.rating ? "currentColor" : "none"}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs sm:text-sm text-gray-600">
                {reviewData.rating}/5
              </span>
            </div>
          </div>
        )}

        {/* Date Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Date
            </label>
            <button
              onClick={() => generateRandomForField("date")}
              className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
              title="Generate random date"
            >
              <Calendar size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
          <input
            type="date"
            value={reviewData.date.toISOString().split("T")[0]}
            onChange={(e) =>
              handleInputChange("date", new Date(e.target.value))
            }
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Steam Specific Settings */}
      {reviewData.platform === "steam" && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Steam Specific Settings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="steamIsEarlyAccess"
                checked={reviewData.steamIsEarlyAccess || false}
                onChange={(e) =>
                  handleInputChange("steamIsEarlyAccess", e.target.checked)
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="steamIsEarlyAccess"
                className="text-xs sm:text-sm font-semibold text-gray-700"
              >
                Early Access Review
              </label>
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Playtime Total
              </label>
              <input
                type="text"
                value={reviewData.steamPlaytimeTotal || ""}
                onChange={(e) =>
                  handleInputChange("steamPlaytimeTotal", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                placeholder="e.g. 47.3 hrs"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Playtime at Review
              </label>
              <input
                type="text"
                value={reviewData.steamPlaytimeAtReview || ""}
                onChange={(e) =>
                  handleInputChange("steamPlaytimeAtReview", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                placeholder="e.g. 14.1 hrs"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Helpful Count
              </label>
              <input
                type="number"
                value={reviewData.steamHelpfulCount || 0}
                onChange={(e) =>
                  handleInputChange(
                    "steamHelpfulCount",
                    parseInt(e.target.value) || 0,
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Funny Count
              </label>
              <input
                type="number"
                value={reviewData.steamFunnyCount || 0}
                onChange={(e) =>
                  handleInputChange(
                    "steamFunnyCount",
                    parseInt(e.target.value) || 0,
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Awards Count
              </label>
              <input
                type="number"
                value={reviewData.steamAwardCount || 0}
                onChange={(e) =>
                  handleInputChange(
                    "steamAwardCount",
                    parseInt(e.target.value) || 0,
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                PC Specs (Optional)
              </label>
              <textarea
                value={reviewData.steamPcSpecs || ""}
                onChange={(e) =>
                  handleInputChange("steamPcSpecs", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                placeholder={"Windows 11\nAMD Ryzen 5..."}
                rows={3}
              />
            </div>
          </div>
        </div>
      )}

      {/* Title Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            Title
          </label>
          <button
            onClick={() => generateRandomForField("title")}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
            title="Generate random title"
          >
            <MessageSquare size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
        <input
          type="text"
          value={reviewData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
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
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            {contentLabel}
          </label>
          <button
            onClick={() => generateRandomForField("content")}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
            title="Generate random content"
          >
            <MessageSquare size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
        <textarea
          value={reviewData.content}
          onChange={(e) => handleInputChange("content", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
          rows={4}
          placeholder={contentPlaceholder}
          maxLength={platformStyles[reviewData.platform].maxLength}
        />
        <div className="text-xs text-gray-500 text-right">
          {reviewData.content.length}/
          {platformStyles[reviewData.platform].maxLength}
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <ImageIcon size={16} className="text-gray-600 sm:w-5 sm:h-5" />
          <label className="block text-xs sm:text-sm font-semibold text-gray-700">
            Review Images (Optional)
          </label>
        </div>

        {/* Upload Controls */}
        <div className="flex flex-col gap-2 sm:gap-3">
          {/* File Upload */}
          <div className="flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Upload size={14} className="sm:w-4 sm:h-4" />
              Upload Images
            </button>
          </div>

          {/* URL Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Or paste image URL"
              className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={handleUrlAdd}
              disabled={!imageUrl.trim()}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>
        </div>

        {/* Display Uploaded Images */}
        {reviewData.images && reviewData.images.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-500">
              {reviewData.images.length} image(s) added
            </p>
            <div className="flex flex-wrap gap-2">
              {reviewData.images.map((image, index) => (
                <div key={`${image}-${index}`} className="relative group">
                  <img
                    src={image}
                    alt={`Review ${index + 1}`}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-300 shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X size={10} className="sm:w-3 sm:h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Engagement Metrics (if platform supports it) */}
      {platformStyles[reviewData.platform].hasEngagement && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Likes
            </label>
            <input
              type="number"
              value={reviewData.likes}
              onChange={(e) =>
                handleInputChange("likes", parseInt(e.target.value) || 0)
              }
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              min="0"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Replies
            </label>
            <input
              type="number"
              value={reviewData.replies}
              onChange={(e) =>
                handleInputChange("replies", parseInt(e.target.value) || 0)
              }
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              min="0"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700">
              Shares
            </label>
            <input
              type="number"
              value={reviewData.shares}
              onChange={(e) =>
                handleInputChange("shares", parseInt(e.target.value) || 0)
              }
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              min="0"
            />
          </div>
        </div>
      )}
    </div>
  );
};
