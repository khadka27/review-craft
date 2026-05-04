import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Verified,
} from "lucide-react";

interface InstagramReviewProps {
  data: ReviewData;
}

export const InstagramReview = ({ data }: InstagramReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full max-w-md mx-auto shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {data.avatar ? (
            <div className="relative">
              <img
                src={data.avatar}
                alt={data.name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-75 blur-sm"></div>
              <img
                src={data.avatar}
                alt={data.name}
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0 border-2 border-white"
              />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-75 blur-sm"></div>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 border-2 border-white">
                <span className="text-xs text-gray-600">?</span>
              </div>
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                {data.username.replace("@", "")}
              </span>
              {data.verified && (
                <Verified size={14} className="text-blue-500 fill-current flex-shrink-0" />
              )}
            </div>
            <span className="text-xs text-gray-500 truncate block">
              {data.location?.city || "Location"}
            </span>
          </div>
        </div>
        <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0">
          <MoreHorizontal size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-2xl">📸</span>
          </div>
          <p className="text-sm">Post Image</p>
        </div>
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

        {data.replies > 0 && (
          <button className="text-xs text-gray-500 mt-1 hover:text-gray-700 transition-colors">
            View all {data.replies} comments
          </button>
        )}

        <div className="text-xs text-gray-500 mt-1 sm:mt-2">
          {formatDistanceToNow(data.date, { addSuffix: true }).toUpperCase()}
        </div>
      </div>
    </div>
  );
};
