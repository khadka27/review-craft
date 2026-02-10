import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface TiktokReviewProps {
  data: ReviewData;
}

export const TiktokReview = ({ data }: TiktokReviewProps) => {
  return (
    <div className="bg-black text-white rounded-lg p-4 max-w-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
            <span className="text-white text-xs">?</span>
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{data.username}</span>
            {data.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <span className="text-xs text-gray-400">
            {formatDistanceToNow(data.date, { addSuffix: true })}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-white text-sm leading-relaxed mb-2">
          {data.content}
        </p>

        <div className="flex flex-wrap gap-1">
          <span className="text-blue-400 text-sm">#trending</span>
          <span className="text-blue-400 text-sm">#viral</span>
          <span className="text-blue-400 text-sm">#fyp</span>
        </div>
      </div>

      {/* Engagement */}
      <div className="flex items-center gap-6 pt-3 border-t border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
            <Heart size={18} />
            <span className="text-sm">
              {data.likes > 1000
                ? `${(data.likes / 1000).toFixed(1)}K`
                : data.likes}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm">{data.replies}</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
            <Share2 size={18} />
            <span className="text-sm">{data.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
