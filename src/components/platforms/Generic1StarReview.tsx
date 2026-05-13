import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, AlertTriangle, ThumbsUp, X } from "lucide-react";

interface Generic1StarReviewProps {
  data: ReviewData;
}

export const Generic1StarReview = ({ data }: Generic1StarReviewProps) => {
  const safeRating = 1; // Always 1 star for this component

  return (
    <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl p-4 sm:p-6 w-full max-w-2xl mx-auto shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 border-2 border-red-300"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center flex-shrink-0 border-2 border-red-300">
            <span className="text-white font-bold text-lg">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">
              {data.name}
            </h3>
            <div className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
              Disappointed Customer
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              <Star
                size={16}
                className="text-red-500 fill-current"
              />
              {[2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="text-gray-300"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-red-700">
              Terrible Experience
            </span>
          </div>
          
          <div className="text-sm text-gray-600">
            {format(data.date, "MMMM d, yyyy")}
          </div>
        </div>
      </div>

      {/* Review Title */}
      {data.title && (
        <h4 className="font-bold text-gray-900 text-lg mb-3 break-words">
          {data.title}
        </h4>
      )}

      {/* Review Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Negative Highlights */}
      <div className="bg-white bg-opacity-60 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={16} className="text-red-600" />
          <span className="font-semibold text-red-800">Major issues:</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-red-700">
          <div className="flex items-center gap-1">
            <X size={12} />
            <span>Poor quality</span>
          </div>
          <div className="flex items-center gap-1">
            <X size={12} />
            <span>Slow delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <X size={12} />
            <span>Overpriced</span>
          </div>
          <div className="flex items-center gap-1">
            <X size={12} />
            <span>Bad customer service</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      {data.productVariation && (
        <div className="bg-red-100 rounded-lg p-3 mb-4">
          <div className="text-sm text-red-900">
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
                alt={`Issue photo ${index + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0 border-2 border-red-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Warning Notice */}
      <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-red-800">
          <AlertTriangle size={14} />
          <span className="font-medium">Would NOT recommend this product/service</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-red-200">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-red-700 hover:text-red-800 transition-colors">
            <ThumbsUp size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <div className="text-sm text-red-600">
            Save your money!
          </div>
        </div>
        <div className="text-xs text-red-600 font-medium">
          ⭐ 1/5 Stars
        </div>
      </div>
    </div>
  );
};
