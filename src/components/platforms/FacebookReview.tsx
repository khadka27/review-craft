import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface FacebookReviewProps {
  data: ReviewData;
}

export const FacebookReview = ({ data }: FacebookReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {data.name}
            </span>
            {data.verified && (
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <span className="truncate">
              {formatDistanceToNow(data.date, { addSuffix: true })}
            </span>
            <span>•</span>
            <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
          </div>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-900 leading-relaxed">{data.content}</p>
      </div>

      {/* Engagement Stats */}
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <ThumbsUp size={10} className="text-white" />
            </div>
            <span>{data.likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{data.replies} comments</span>
            <span>{data.shares} shares</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 border-t border-gray-200">
        <button className="flex items-center justify-center gap-2 p-3 text-gray-600 hover:bg-gray-50 transition-colors">
          <ThumbsUp size={18} />
          <span className="font-medium">Like</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-3 text-gray-600 hover:bg-gray-50 transition-colors">
          <MessageCircle size={18} />
          <span className="font-medium">Comment</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-3 text-gray-600 hover:bg-gray-50 transition-colors">
          <Share2 size={18} />
          <span className="font-medium">Share</span>
        </button>
      </div>
    </div>
  );
};
