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
  // Generate realistic Twitter engagement metrics
  const retweetCount = Math.floor(Math.random() * 100) + 5;
  const viewCount = data.likes * Math.floor(Math.random() * 50 + 10);

  // Format engagement numbers like Twitter
  const formatEngagement = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 font-['TwitterChirp',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_Helvetica,_Arial,_sans-serif]">
      <div className="flex gap-3 p-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full object-cover"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1 overflow-hidden">
              <h3 className="font-bold text-gray-900 text-[15px] leading-5 truncate">
                {data.name}
              </h3>
              {data.verified && (
                <CheckCircle
                  size={16}
                  className="text-blue-500 flex-shrink-0"
                  fill="currentColor"
                />
              )}
              <span className="text-gray-500 text-[15px] leading-5 truncate">
                @{data.username.replace(/^@/, "")}
              </span>
              <span className="text-gray-500 text-[15px] leading-5 flex-shrink-0">
                ·
              </span>
              <span className="text-gray-500 text-[15px] leading-5 hover:underline cursor-pointer flex-shrink-0">
                {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                  "about ",
                  ""
                )}
              </span>
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Tweet Content */}
          <div className="mb-3">
            <p className="text-gray-900 text-[15px] leading-5 whitespace-pre-wrap break-words">
              {data.content}
            </p>
          </div>

          {/* Engagement Stats - Only show if high engagement */}
          {viewCount > 5000 && (
            <div className="text-gray-500 text-[13px] leading-4 mb-3 border-b border-gray-100 pb-3">
              {formatEngagement(viewCount)} views
            </div>
          )}

          {/* Action Buttons - Exact Twitter Layout */}
          <div className="flex items-center justify-between max-w-md -ml-2">
            {/* Reply */}
            <button className="flex items-center gap-1 p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors group">
              <div className="p-1.5 group-hover:bg-blue-100 rounded-full transition-colors">
                <MessageCircle size={18} strokeWidth={1.5} />
              </div>
              {data.replies > 0 && (
                <span className="text-[13px] leading-4 font-normal">
                  {formatEngagement(data.replies)}
                </span>
              )}
            </button>

            {/* Retweet */}
            <button className="flex items-center gap-1 p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-full transition-colors group">
              <div className="p-1.5 group-hover:bg-green-100 rounded-full transition-colors">
                <Repeat2 size={18} strokeWidth={1.5} />
              </div>
              {retweetCount > 0 && (
                <span className="text-[13px] leading-4 font-normal">
                  {formatEngagement(retweetCount)}
                </span>
              )}
            </button>

            {/* Like */}
            <button className="flex items-center gap-1 p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors group">
              <div className="p-1.5 group-hover:bg-red-100 rounded-full transition-colors">
                <Heart size={18} strokeWidth={1.5} />
              </div>
              {data.likes > 0 && (
                <span className="text-[13px] leading-4 font-normal">
                  {formatEngagement(data.likes)}
                </span>
              )}
            </button>

            {/* Bookmark & Share */}
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors group">
                <div className="p-1.5 group-hover:bg-blue-100 rounded-full transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </button>

              <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors group">
                <div className="p-1.5 group-hover:bg-blue-100 rounded-full transition-colors">
                  <Share size={18} strokeWidth={1.5} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
