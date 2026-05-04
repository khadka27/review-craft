import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, Heart, Flag } from "lucide-react";

interface EtsyReviewProps {
  data: ReviewData;
}

export const EtsyReview = ({ data }: EtsyReviewProps) => {
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
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0">
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
            <div className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">
              {Math.floor(Math.random() * 500) + 50} reviews
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
                      ? "text-orange-400 fill-current"
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

      {/* Review Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Product Details */}
      {data.productVariation && (
        <div className="bg-orange-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-orange-900">
            <span className="font-medium">Purchased item:</span> {data.productVariation}
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

      {/* Quality Ratings */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Quality</span>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className={`${
                    star <= safeRating
                      ? "text-orange-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className={`${
                    star <= safeRating
                      ? "text-orange-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Customer service</span>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className={`${
                    star <= safeRating
                      ? "text-orange-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
            <Heart size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <Flag size={14} />
            <span>Report</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Purchased on {format(data.date, "MMM d, yyyy")}
        </div>
      </div>
    </div>
  );
};