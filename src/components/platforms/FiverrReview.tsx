import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

interface FiverrReviewProps {
  data: ReviewData;
}

export const FiverrReview = ({ data }: FiverrReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-medium text-gray-900 text-base">
              {data.name}
            </h3>
            <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Repeat Client</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
            <span className="text-blue-600">🇺🇸</span>
            <span>{data.location?.country || "United States"}</span>
          </div>
        </div>
      </div>

      {/* Rating and Date */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={`${
                star <= safeRating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          1 month ago
        </span>
      </div>

      {/* Review Content */}
      <div className="mb-6">
        <p className="text-gray-800 leading-relaxed text-sm break-words">
          {data.content}
          {data.content.length > 100 && (
            <>
              {" "}
              <button className="text-green-600 hover:text-green-700 font-medium underline">
                See more
              </button>
            </>
          )}
        </p>
      </div>

      {/* Order Details */}
      <div className="flex items-center gap-8 mb-4 text-sm">
        <div>
          <div className="text-gray-900 font-medium">${Math.floor(Math.random() * 400) + 600}-$800</div>
          <div className="text-gray-600">Price</div>
        </div>
        <div>
          <div className="text-gray-900 font-medium">3 weeks</div>
          <div className="text-gray-600">Duration</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-xs">📖</span>
          </div>
          <span className="text-gray-700 text-sm">Book Layout Design & Typesetting</span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span>Helpful?</span>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors">
          <ThumbsUp size={14} />
          <span>Yes</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
          <ThumbsDown size={14} />
          <span>No</span>
        </button>
      </div>
    </div>
  );
};