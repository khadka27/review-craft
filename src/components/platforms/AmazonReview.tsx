import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, Upload, X } from "lucide-react";
import { useState, useRef } from "react";

interface AmazonReviewProps {
  data: ReviewData;
  onImageAdd?: (images: string[]) => void;
  allowImageUpload?: boolean;
}

export const AmazonReview = ({
  data,
  onImageAdd,
  allowImageUpload = false,
}: AmazonReviewProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>(
    data.images || []
  );
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          newImages.push(result);
          if (newImages.length === files.length) {
            const updatedImages = [...uploadedImages, ...newImages];
            setUploadedImages(updatedImages);
            onImageAdd?.(updatedImages);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleUrlAdd = () => {
    if (imageUrl.trim()) {
      const updatedImages = [...uploadedImages, imageUrl.trim()];
      setUploadedImages(updatedImages);
      onImageAdd?.(updatedImages);
      setImageUrl("");
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updatedImages);
    onImageAdd?.(updatedImages);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-900 text-sm sm:text-base truncate">
            {data.name}
          </div>
        </div>
      </div>

      {/* Rating and Title */}
      <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
        <div className="flex items-center gap-0.5 sm:gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={`sm:w-4 sm:h-4 ${
                star <= data.rating
                  ? "text-orange-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="font-bold text-gray-900 text-sm sm:text-base ml-1 sm:ml-2 break-words">
          {data.title}
        </span>
      </div>

      {/* Review Date and Location */}
      <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
        Reviewed in the United States on {format(data.date, "MMMM d, yyyy")}
      </div>

      {/* Product Details */}
      <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
        {data.verified && (
          <span className="text-orange-600 font-medium">Verified Purchase</span>
        )}
      </div>

      {/* Content */}
      <div className="mb-3 sm:mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Image Upload Section - Only show if allowImageUpload is true */}
      {allowImageUpload && (
        <div className="mb-4">
          <div className="flex flex-col gap-3">
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
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Upload size={16} />
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                onClick={handleUrlAdd}
                disabled={!imageUrl.trim()}
                className="px-3 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display Review Images - Show images from data or uploaded images */}
      {(data.images || uploadedImages).length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {(data.images || uploadedImages).map((image, index) => (
              <div key={`${image}-${index}`} className="relative">
                <img
                  src={image}
                  alt={`Customer review ${index + 1}`}
                  className="w-16 h-16 object-cover rounded border border-gray-300 shadow-sm"
                />
                {allowImageUpload && (
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Helpful section */}
      <div className="pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600 mb-3">
          {data.likes} people found this helpful
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Helpful
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
            Report
          </button>
        </div>
      </div>
    </div>
  );
};
