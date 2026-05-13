import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Award,
  MoreHorizontal,
  MessageCircle,
  Share2,
} from "lucide-react";

interface RedditReviewProps {
  data: ReviewData;
}

export const RedditReview = ({ data }: RedditReviewProps) => {
  const upvoteLabel =
    data.likes > 999 ? `${(data.likes / 1000).toFixed(1)}K` : `${data.likes}`;

  return (
    <div className="bg-[#030b14] border border-[#3d444d] rounded-none w-full max-w-4xl mx-auto p-4">
      {/* Top bar */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <button className="w-8 h-8 rounded-full bg-[#1f2731] flex items-center justify-center text-[#c7d0d9] flex-shrink-0">
            <ArrowLeft size={16} />
          </button>

          <div className="min-w-0 flex-1">
            {/* User Profile */}
            <div className="flex items-center gap-2 mb-1">
              {data.avatar ? (
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-6 h-6 rounded-full flex-shrink-0"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs flex-shrink-0">
                  {(data.name || "U").charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-[11px] text-[#d6dee7] font-semibold">
                {data.name || "User"}
              </span>
              <span className="text-[10px] text-[#8ea0b2]">·</span>
              <span className="text-[10px] text-[#8ea0b2]">
                {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                  "about ",
                  "",
                )}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-[#6bb6ff] font-semibold">r/confession</span>
            </div>
          </div>
        </div>

        <button className="text-[#9da9b6] p-1">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Title */}
      <h2 className="mt-2 text-[21px] leading-tight font-bold text-white">
        {data.title}
      </h2>

      {/* Body */}
      <p className="mt-4 text-[12px] leading-relaxed text-[#b9c8d7] whitespace-pre-wrap">
        {data.content}
      </p>

      {/* Action pills */}
      <div className="mt-5 flex items-center gap-3 flex-wrap text-[11px]">
        <button className="px-3 py-2 rounded-full bg-[#1f2731] text-[#d6dee7] flex items-center gap-2">
          <ArrowUp size={16} />
          <span className="font-semibold">{upvoteLabel}</span>
          <ArrowDown size={16} />
        </button>
        <button className="px-3 py-2 rounded-full bg-[#1f2731] text-[#d6dee7] flex items-center gap-2">
          <MessageCircle size={16} />
          <span className="font-semibold">{data.replies}</span>
        </button>
        <button className="px-3 py-2 rounded-full bg-[#1f2731] text-[#d6dee7]">
          <Award size={16} />
        </button>
        <button className="px-3 py-2 rounded-full bg-[#1f2731] text-[#d6dee7] flex items-center gap-2">
          <Share2 size={16} />
          <span className="font-semibold">Share</span>
        </button>
      </div>
    </div>
  );
};
