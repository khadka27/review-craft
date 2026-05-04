import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, ThumbsUp, ThumbsDown, Flag, Camera } from "lucide-react";

interface AliexpressReviewProps {
  data: ReviewData;
}

export const AliexpressReview = ({ data }: AliexpressReviewProps) => {
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
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {data.name.substring(0, 3)}***{data.name.substring(data.name.length - 2)}
            </h3>
            <div className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
              {data.location?.country || "United States"}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={`${
                    star <= safeRating
                      ? "text-red-500 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {format(data.date, "yyyy-MM-dd HH:mm")}
            </span>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Product Variation */}
      {data.productVariation && (
        <div className="bg-red-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-red-900">
            <span className="font-medium">Color:</span> {data.productVariation}
          </div>
        </div>
      )}

      {/* Review Images */}
      {data.images && data.images.length > 0 && (
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto">
            {data.images.map((image, index) => (
              <div key={index} className="relative flex-shrink-0">
                <img
                  src={image}
                  alt={`Customer photo ${index + 1}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
                />
                <div className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1">
                  <Camera size={10} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shipping Info */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-600">Shipping:</span>
            <div className="font-medium text-gray-900">Standard Shipping</div>
          </div>
          <div>
            <span className="text-gray-600">Delivery:</span>
            <div className="font-medium text-gray-900">{Math.floor(Math.random() * 20) + 10} days</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
            <ThumbsUp size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <ThumbsDown size={14} />
            <span>Not helpful</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <Flag size={14} />
            <span>Report</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Reviewed {format(data.date, "MMM d, yyyy")}
        </div>
      </div>
    </div>
  );
};