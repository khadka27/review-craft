import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface FacebookReviewProps {
  data: ReviewData;
}

export const FacebookReview = ({ data }: FacebookReviewProps) => {
  // Generate realistic Facebook engagement metrics
  const shareCount = Math.floor(Math.random() * 20) + 1;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      {/* Header */}
      <div className="flex items-start gap-3 p-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-10 h-10 rounded-full object-cover"
          style={{ imageRendering: "crisp-edges" }}
        />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[15px] text-gray-900 hover:underline cursor-pointer">
              {data.name}
            </span>
            {data.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-[13px] text-gray-500">
            <span className="hover:underline cursor-pointer">
              {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                "about ",
                ""
              )}
            </span>
            <span>·</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-[15px] text-gray-900 leading-normal whitespace-pre-wrap">
          {data.content}
        </p>
      </div>

      {/* Engagement Summary */}
      {(data.likes > 0 || data.replies > 0) && (
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="flex items-center justify-between text-[13px] text-gray-500">
            <div className="flex items-center gap-1">
              <div className="flex items-center -space-x-1">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-white">
                  <ThumbsUp size={8} className="text-white" fill="white" />
                </div>
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border border-white text-[10px]">
                  ❤️
                </div>
              </div>
              <span className="ml-1 hover:underline cursor-pointer">
                {data.likes > 0 ? `${data.likes}` : ""}
              </span>
            </div>
            {data.replies > 0 && (
              <div className="flex items-center gap-3">
                <span className="hover:underline cursor-pointer">
                  {data.replies} comments
                </span>
                {shareCount > 0 && (
                  <span className="hover:underline cursor-pointer">
                    {shareCount} shares
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="px-4 py-2 border-t border-gray-200">
        <div className="flex items-center justify-around">
          <button className="flex items-center justify-center gap-2 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors flex-1">
            <ThumbsUp size={16} strokeWidth={1.5} />
            <span className="font-medium text-[15px]">Like</span>
          </button>

          <button className="flex items-center justify-center gap-2 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors flex-1">
            <MessageCircle size={16} strokeWidth={1.5} />
            <span className="font-medium text-[15px]">Comment</span>
          </button>

          <button className="flex items-center justify-center gap-2 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors flex-1">
            <Share2 size={16} strokeWidth={1.5} />
            <span className="font-medium text-[15px]">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
