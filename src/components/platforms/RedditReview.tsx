import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  Share2,
  MoreHorizontal,
} from "lucide-react";

interface RedditReviewProps {
  data: ReviewData;
}

export const RedditReview = ({ data }: RedditReviewProps) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full max-w-2xl mx-auto">
      <div className="flex">
        {/* Voting Section */}
        <div className="flex flex-col items-center p-1 sm:p-2 bg-gray-50 border-r border-gray-200 min-w-0">
          <button className="p-0.5 sm:p-1 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors">
            <ArrowUp size={16} className="sm:w-5 sm:h-5" />
          </button>
          <span className="text-xs sm:text-sm font-bold text-gray-900 py-0.5 sm:py-1">
            {data.likes > 999
              ? `${(data.likes / 1000).toFixed(1)}k`
              : data.likes}
          </span>
          <button className="p-0.5 sm:p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
            <ArrowDown size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 pb-2">
            {data.avatar ? (
              <img
                src={data.avatar}
                alt={data.name}
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0"
              />
            ) : (
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0 bg-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-600">?</span>
              </div>
            )}
            <span className="font-medium text-xs sm:text-sm text-gray-900 truncate">
              u/{data.username}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-xs text-gray-500 truncate">
              {formatDistanceToNow(data.date, { addSuffix: true })}
            </span>
            {data.verified && (
              <span className="text-xs bg-blue-100 text-blue-800 px-1 sm:px-2 py-0.5 rounded-full ml-1 whitespace-nowrap">
                Honest Review
              </span>
            )}
            <div className="ml-auto flex-shrink-0">
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                <MoreHorizontal size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-2 sm:px-3 pb-2 sm:pb-3">
            <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 mb-1 sm:mb-2 leading-tight">
              {data.title}
            </h3>
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
              {data.content}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-3 py-2 border-t border-gray-100">
            <button className="flex items-center gap-1 px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs sm:text-sm transition-colors">
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
              <span>{data.replies}</span>
            </button>

            <button className="flex items-center gap-1 px-1 sm:px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs sm:text-sm transition-colors">
              <Share2 size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
