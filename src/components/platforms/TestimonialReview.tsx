import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, Quote, CheckCircle } from "lucide-react";

interface TestimonialReviewProps {
  data: ReviewData;
}

export const TestimonialReview = ({ data }: TestimonialReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 w-full max-w-2xl mx-auto shadow-sm">
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <Quote size={24} className="text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              className={`${
                star <= safeRating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-8">
        <p className="text-gray-800 leading-relaxed text-lg sm:text-xl text-center italic break-words">
          "{data.content}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="flex items-center justify-center gap-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0 border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
            <span className="text-white font-bold text-xl">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center mb-1">
            <h3 className="font-bold text-gray-900 text-lg sm:text-xl">
              {data.name}
            </h3>
            {data.verified && (
              <CheckCircle size={20} className="text-blue-500" />
            )}
          </div>
          
          {data.title && (
            <div className="text-gray-600 text-sm sm:text-base mb-2">
              {data.title}
            </div>
          )}
          
          {data.location && (
            <div className="text-gray-500 text-sm">
              {data.location.city}, {data.location.state}
            </div>
          )}
          
          <div className="text-gray-500 text-xs mt-2">
            {format(data.date, "MMMM d, yyyy")}
          </div>
        </div>
      </div>

      {/* Company/Product Info */}
      {data.productVariation && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="text-center text-sm text-gray-600">
            <span className="font-medium">About:</span> {data.productVariation}
          </div>
        </div>
      )}
    </div>
  );
};