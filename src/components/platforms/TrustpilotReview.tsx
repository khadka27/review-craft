import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { Star, ThumbsUp, Share2 } from "lucide-react";

interface TrustpilotReviewProps {
  data: ReviewData;
}

export const TrustpilotReview = ({ data }: TrustpilotReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
      {/* Header with User Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">
            {data.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
        </div>
        <div>
          <div className="font-medium text-gray-900">
            {data.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div className="text-sm text-gray-500">
            {formatDistanceToNow(data.date, { addSuffix: true })}
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= data.rating
                ? "text-red-500 fill-current"
                : "text-gray-300 fill-current"
            }
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-800 text-sm leading-relaxed mb-4">
        {data.content}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
          <ThumbsUp size={16} />
          <span className="text-sm">Useful</span>
        </button>

        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
          <Share2 size={16} />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};
