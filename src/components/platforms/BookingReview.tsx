import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, MapPin, Calendar, Users, ThumbsUp, ThumbsDown } from "lucide-react";

interface BookingReviewProps {
  data: ReviewData;
}

export const BookingReview = ({ data }: BookingReviewProps) => {
  const safeRating = Math.max(1, Math.min(10, Math.round((data.rating || 5) * 2)));
  const ratingColor = safeRating >= 8 ? "bg-green-600" : safeRating >= 6 ? "bg-yellow-500" : "bg-red-500";
  const ratingText = safeRating >= 9 ? "Superb" : safeRating >= 8 ? "Very good" : safeRating >= 7 ? "Good" : safeRating >= 6 ? "Pleasant" : "Poor";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
              {data.name}
            </h3>
            <div className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
              {data.location?.country || "United States"}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Calendar size={14} />
            <span>Stayed {format(data.date, "MMMM yyyy")}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={14} />
            <span>Couple</span>
            <span className="text-gray-400">•</span>
            <span>3 nights</span>
          </div>
        </div>
        
        {/* Rating Score */}
        <div className="flex flex-col items-end">
          <div className={`${ratingColor} text-white px-2 py-1 rounded text-sm font-bold min-w-[40px] text-center`}>
            {safeRating.toFixed(1)}
          </div>
          <div className="text-xs text-gray-600 mt-1">{ratingText}</div>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Category Ratings */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Staff</span>
            <span className="font-semibold">{(safeRating - 0.5).toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Facilities</span>
            <span className="font-semibold">{safeRating.toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cleanliness</span>
            <span className="font-semibold">{(safeRating + 0.3).toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Comfort</span>
            <span className="font-semibold">{(safeRating - 0.2).toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Value for money</span>
            <span className="font-semibold">{(safeRating - 0.8).toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location</span>
            <span className="font-semibold">{(safeRating + 0.5).toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Room Type */}
      <div className="bg-blue-50 rounded-lg p-3 mb-4">
        <div className="text-sm">
          <span className="font-medium text-blue-900">Room type:</span>
          <span className="text-blue-800 ml-2">Superior Double Room</span>
        </div>
      </div>

      {/* Review Images */}
      {data.images && data.images.length > 0 && (
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hotel photo ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0 border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <ThumbsUp size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
            <ThumbsDown size={14} />
            <span>Not helpful</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Reviewed: {format(data.date, "d MMMM yyyy")}
        </div>
      </div>
    </div>
  );
};