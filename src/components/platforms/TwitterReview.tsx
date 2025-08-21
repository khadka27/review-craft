import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  MoreHorizontal,
  CheckCircle,
} from "lucide-react";

interface TwitterReviewProps {
  data: ReviewData;
}

export const TwitterReview = ({ data }: TwitterReviewProps) => {
  return (
    <div className="bg-black border border-gray-800 rounded-xl overflow-hidden w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-white text-sm sm:text-base truncate">
              {data.name}
            </span>
            {data.verified && (
              <CheckCircle
                size={14}
                className="sm:w-4 sm:h-4 text-blue-400 fill-current flex-shrink-0"
              />
            )}
            <span className="text-gray-500 text-sm truncate">
              @{data.username}
            </span>
            <span className="text-gray-500 mx-1">•</span>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
              {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                " ago",
                ""
              )}
            </span>
          </div>

          <div className="mt-2 sm:mt-3">
            <p className="text-white leading-relaxed text-sm sm:text-base break-words">
              {data.content}
            </p>
          </div>

          {/* Engagement */}
          <div className="flex items-center justify-between mt-3 sm:mt-4 max-w-sm">
            <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-400 transition-colors">
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{data.replies}</span>
            </button>

            <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-green-400 transition-colors">
              <Repeat2 size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{data.shares || 1}</span>
            </button>

            <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-400 transition-colors">
              <Heart size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{data.likes}</span>
            </button>

            <button className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-blue-400 transition-colors">
              <Share size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">
                {Math.floor(data.likes / 10) || 529}
              </span>
            </button>
          </div>
        </div>

        <button className="p-1 text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0">
          <MoreHorizontal size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};
