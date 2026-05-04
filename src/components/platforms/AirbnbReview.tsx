import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, MapPin, Calendar, Users } from "lucide-react";

interface AirbnbReviewProps {
  data: ReviewData;
}

export const AirbnbReview = ({ data }: AirbnbReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 w-full max-w-2xl mx-auto shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-lg">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
              {data.name}
            </h3>
            {data.verified && (
              <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                Verified
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{format(data.date, "MMMM yyyy")}</span>
            </div>
            {data.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{data.location.city}, {data.location.state}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={`${
                  star <= safeRating
                    ? "text-pink-500 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {format(data.date, "MMMM d, yyyy")}
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

      {/* Stay Details */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>2 guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>3 nights</span>
          </div>
          <div className="text-gray-400">•</div>
          <span>Entire home</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <button className="hover:text-gray-800 transition-colors">
            Helpful ({data.likes})
          </button>
          <button className="hover:text-gray-800 transition-colors">
            Report
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Stayed {format(data.date, "MMM yyyy")}
        </div>
      </div>
    </div>
  );
};