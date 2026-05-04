import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, CheckCircle, ThumbsUp, ThumbsDown } from "lucide-react";

interface ShopifyReviewProps {
  data: ReviewData;
}

export const ShopifyReview = ({ data }: ShopifyReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-lime-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {data.name}
            </h3>
            {data.verified && (
              <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                <CheckCircle size={12} />
                <span>Verified Buyer</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={`${
                    star <= safeRating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {format(data.date, "MMM d, yyyy")}
            </span>
          </div>
        </div>
      </div>

      {/* Review Title */}
      {data.title && (
        <h4 className="font-semibold text-gray-900 text-base mb-3 break-words">
          {data.title}
        </h4>
      )}

      {/* Review Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Product Variation */}
      {data.productVariation && (
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-gray-700">
            <span className="font-medium">Product:</span> {data.productVariation}
          </div>
        </div>
      )}

      {/* Review Images */}
      {data.images && data.images.length > 0 && (
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Customer photo ${index + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0 border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors">
            <ThumbsUp size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
            <ThumbsDown size={14} />
            <span>Not helpful</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          {data.verified ? "Verified Purchase" : "Unverified"}
        </div>
      </div>
    </div>
  );
};