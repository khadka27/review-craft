import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, ThumbsUp, ThumbsDown, MoreHorizontal } from "lucide-react";

interface ImdbReviewProps {
  data: ReviewData;
}

export const ImdbReview = ({ data }: ImdbReviewProps) => {
  const safeRating = Math.max(1, Math.min(10, Math.round(data.rating * 2)));

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-4xl mx-auto">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <Star size={20} className="text-yellow-500 fill-current" />
        <span className="text-lg font-medium text-gray-900">
          {safeRating}/10
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium text-gray-900 mb-4 cursor-pointer hover:text-blue-600">
        {data.title || "Was I supposed to feel anything ?"}
        <span className="ml-1 text-gray-400">▶</span>
      </h3>

      {/* Review Content */}
      <div className="mb-6 space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          {data.content}
        </p>
      </div>

      {/* Helpful Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ThumbsUp size={16} />
            <span className="text-sm">Helpful • {data.likes || 674}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ThumbsDown size={16} />
            <span className="text-sm">{Math.floor((data.likes || 674) * 0.25)}</span>
          </button>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {(data.username || data.name).charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            {data.username || "lone_samurai678"}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">
            {format(data.date, "MMM d, yyyy")}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-blue-600 cursor-pointer hover:underline">
            Permalink
          </span>
        </div>
      </div>
    </div>
  );
};