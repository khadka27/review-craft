import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface InstagramReviewProps {
  data: ReviewData;
}

export const InstagramReview = ({ data }: InstagramReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gradient-to-r from-purple-400 to-pink-400 p-0.5 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                {data.username.replace("@", "")}
              </span>
              {data.verified && (
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500 truncate block">
              {data.name}
            </span>
          </div>
        </div>
        <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0">
          <MoreHorizontal size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Actions */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-gray-800 hover:text-red-500 transition-colors">
              <Heart size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <Send size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
          <button className="text-gray-800 hover:text-gray-600 transition-colors">
            <Bookmark size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">
          {data.likes.toLocaleString()} likes
        </div>

        <div className="text-xs sm:text-sm">
          <span className="font-semibold text-gray-900">
            {data.username.replace("@", "")}
          </span>
          <span className="text-gray-700 ml-2 break-words">{data.content}</span>
        </div>

        <div className="text-xs text-gray-500 mt-1 sm:mt-2">
          {formatDistanceToNow(data.date, { addSuffix: true }).toUpperCase()}
        </div>
      </div>
    </div>
  );
};
