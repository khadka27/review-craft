import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, MapPin, Camera, ThumbsUp, Flag } from "lucide-react";

interface TripadvisorReviewProps {
  data: ReviewData;
}

export const TripadvisorReview = ({ data }: TripadvisorReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 border-2 border-green-500"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 border-2 border-green-500">
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
            <div className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">
              Level 3 Contributor
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>127 contributions</span>
            <span className="text-gray-400">•</span>
            <span>45 helpful votes</span>
          </div>
          
          {data.location && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin size={14} />
              <span>{data.location.city}, {data.location.state}</span>
            </div>
          )}
        </div>
      </div>

      {/* Rating and Date */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className={`w-4 h-4 rounded-full ${
                star <= safeRating ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          Reviewed {format(data.date, "MMMM d, yyyy")}
        </span>
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

      {/* Trip Details */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="text-sm text-gray-700">
          <div className="flex items-center gap-4 mb-1">
            <span className="font-medium">Trip type:</span>
            <span>Traveled as a couple</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Date of experience:</span>
            <span>{format(data.date, "MMMM yyyy")}</span>
          </div>
        </div>
      </div>

      {/* Images */}
      {data.images && data.images.length > 0 && (
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto">
            {data.images.slice(0, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Review photo ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
            ))}
            {data.images.length > 4 && (
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Camera size={20} className="text-gray-500" />
                <span className="text-xs text-gray-600 ml-1">+{data.images.length - 4}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors">
            <ThumbsUp size={16} />
            <span>Helpful ({data.likes})</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <Flag size={16} />
            <span>Report</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Written {format(data.date, "MMMM d, yyyy")}
        </div>
      </div>
    </div>
  );
};