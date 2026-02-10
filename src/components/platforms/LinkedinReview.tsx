import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
  MoreHorizontal,
} from "lucide-react";

interface LinkedinReviewProps {
  data: ReviewData;
}

export const LinkedinReview = ({ data }: LinkedinReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
            <span className="text-white text-sm">?</span>
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-900">{data.username}</span>
            {data.verified && (
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <div className="text-sm text-gray-600 mb-1">
            Senior Professional • 1st
          </div>
          <div className="text-xs text-gray-500">
            {formatDistanceToNow(data.date, { addSuffix: true })} • 🌐
          </div>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900 mb-2">{data.title}</h3>
        <p className="text-gray-700 leading-relaxed">{data.content}</p>
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center justify-between py-2 border-t border-b border-gray-100 mb-3">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <div className="flex -space-x-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-white flex items-center justify-center">
              <ThumbsUp size={8} className="text-white" />
            </div>
            <div className="w-4 h-4 bg-green-500 rounded-full border border-white"></div>
          </div>
          <span>{data.likes}</span>
        </div>
        <div className="text-sm text-gray-600">
          {data.replies} comments • {data.shares} reposts
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-4 gap-2">
        <button className="flex items-center justify-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <ThumbsUp size={16} />
          <span className="text-sm font-medium">Like</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <MessageCircle size={16} />
          <span className="text-sm font-medium">Comment</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <Share2 size={16} />
          <span className="text-sm font-medium">Repost</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <Send size={16} />
          <span className="text-sm font-medium">Send</span>
        </button>
      </div>
    </div>
  );
};
