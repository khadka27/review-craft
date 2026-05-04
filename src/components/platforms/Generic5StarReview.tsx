import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, CheckCircle, ThumbsUp, Heart } from "lucide-react";

interface Generic5StarReviewProps {
  data: ReviewData;
}

export const Generic5StarReview = ({ data }: Generic5StarReviewProps) => {
  const safeRating = 5; // Always 5 stars for this component

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 sm:p-6 w-full max-w-2xl mx-auto shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 border-2 border-green-300"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 border-2 border-green-300">
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
            {data.verified && (
              <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                <CheckCircle size={12} />
                <span>Verified</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="text-green-500 fill-current"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-green-700">
              Excellent!
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

      {/* Positive Highlights */}
      <div className="bg-white bg-opacity-60 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart size={16} className="text-green-600" />
          <span className="font-semibold text-green-800">What customers love:</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-green-700">
          <div className="flex items-center gap-1">
            <CheckCircle size={12} />
            <span>Excellent quality</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={12} />
            <span>Fast delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={12} />
            <span>Great value</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={12} />
            <span>Outstanding service</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      {data.productVariation && (
        <div className="bg-green-100 rounded-lg p-3 mb-4">
          <div className="text-sm text-green-900">
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
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0 border-2 border-green-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-green-200">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-green-700 hover:text-green-800 transition-colors">
            <ThumbsUp size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <div className="text-sm text-green-600">
            Would recommend to others
          </div>
        </div>
        <div className="text-xs text-green-600 font-medium">
          ⭐ 5/5 Stars
        </div>
      </div>
    </div>
  );
};