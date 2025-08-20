import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Award,
  Bookmark,
} from "lucide-react";

interface RedditReviewProps {
  data: ReviewData;
}

export const RedditReview = ({ data }: RedditReviewProps) => {
  // Generate realistic Reddit-style data
  const upvotePercentage = Math.floor(85 + Math.random() * 12); // 85-97%
  const commentCount = Math.floor(Math.random() * 50) + 5;
  const awardCount =
    Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0;
  const subreddit = [
    "r/BuyItForLife",
    "r/ProductReviews",
    "r/AmazonFinds",
    "r/HelpMeFind",
    "r/Recommendations",
    "r/DidntKnowIWantedThat",
  ][Math.floor(Math.random() * 6)];

  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden font-['IBM_Plex_Sans',_system-ui,_sans-serif]">
      <div className="flex">
        {/* Voting Section - Exact Reddit Style */}
        <div className="flex flex-col items-center py-2 px-2 bg-gray-50 border-r border-gray-200 min-w-[40px]">
          <button className="p-1 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors">
            <ArrowUp size={18} strokeWidth={2} />
          </button>
          <span className="text-xs font-bold text-gray-900 py-1 select-none">
            {data.likes >= 1000
              ? `${(data.likes / 1000).toFixed(1)}k`
              : data.likes}
          </span>
          <button className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
            <ArrowDown size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Post Header - Authentic Reddit Layout */}
          <div className="flex items-center justify-between px-3 pt-2 pb-1">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span className="font-bold text-gray-800 hover:underline cursor-pointer">
                {subreddit}
              </span>
              <span className="text-gray-400">•</span>
              <span>Posted by</span>
              <div className="flex items-center gap-1">
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-4 h-4 rounded-full"
                  style={{ imageRendering: "crisp-edges" }}
                />
                <span className="font-medium text-gray-700 hover:underline cursor-pointer">
                  u/{data.username.replace(/^u\//, "")}
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">
                {formatDistanceToNow(data.date, { addSuffix: true })}
              </span>
              {data.verified && (
                <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded font-medium ml-1">
                  OP
                </span>
              )}
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Post Title */}
          <div className="px-3 pb-2">
            <h3 className="text-lg font-medium text-gray-900 leading-snug">
              {data.title}
            </h3>
          </div>

          {/* Post Content */}
          <div className="px-3 pb-3">
            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
              {data.content}
            </p>
          </div>

          {/* Awards Section (if any) */}
          {awardCount > 0 && (
            <div className="flex items-center gap-2 px-3 pb-2">
              {Array.from({ length: awardCount }).map((_, i) => (
                <div
                  key={`award-${i}`}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full"
                >
                  <Award size={12} className="text-yellow-600" />
                  <span className="text-xs text-gray-700">1</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Bar - Exact Reddit Style */}
          <div className="flex items-center gap-0 px-3 py-2 border-t border-gray-100 text-xs">
            <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-sm font-bold transition-colors">
              <MessageCircle size={14} strokeWidth={2} />
              <span>{commentCount} Comments</span>
            </button>

            <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-sm font-bold transition-colors">
              <Share2 size={14} strokeWidth={2} />
              <span>Share</span>
            </button>

            <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-sm font-bold transition-colors">
              <Bookmark size={14} strokeWidth={2} />
              <span>Save</span>
            </button>

            <div className="ml-auto text-xs text-gray-500">
              {upvotePercentage}% Upvoted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
