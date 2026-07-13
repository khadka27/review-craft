import { ReviewData } from "@/types/review";
import { formatDistanceToNowStrict } from "date-fns";
import {
  BarChart2,
  Bookmark,
  CheckCircle,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
  Verified,
} from "lucide-react";

interface TwitterReviewProps {
  data: ReviewData;
}

export const TwitterReview = ({ data }: TwitterReviewProps) => {
  const timeAgo = `${formatDistanceToNowStrict(data.date).replace("about ", "")}`;
  const viewCount = data.shares && data.shares > 0 ? `${data.shares}K` : "5.5K";

  return (
    <div className="bg-black border border-gray-800 w-full max-w-3xl mx-auto relative">
      <div className="absolute left-[62px] top-[58px] bottom-0 w-[2px] bg-[#2f3336]" />

      <div className="flex items-start gap-3 p-3">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gray-700 flex items-center justify-center">
            <span className="text-white text-sm">?</span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-bold text-white text-[24px] leading-tight truncate">
                {data.name}
              </span>
              {data.verified && (
                <span className="flex-shrink-0">
                  <CheckCircle
                    size={20}
                    className="text-[#1d9bf0] fill-[#1d9bf0]"
                  />
                </span>
              )}
              <span className="text-[#71767b] text-[18px] truncate">
                @{data.username}
              </span>
              <span className="text-[#71767b] text-[18px]">·</span>
              <span className="text-[#71767b] text-[18px] whitespace-nowrap">
                {timeAgo}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[#71767b]">
              <img
                src="/icons/grok.svg"
                alt="grok"
                className="w-[18px] h-[18px]"
              />
              <MoreHorizontal size={18} />
            </div>
          </div>

          <p className="mt-2 text-white text-[24px] leading-snug break-words">
            {data.content}
          </p>

          <div className="mt-4 flex items-center justify-between max-w-[680px] text-[#71767b]">
            <button className="flex items-center gap-1 text-[18px]">
              <MessageCircle size={20} />
              <span>{Math.max(1, data.replies || 1)}</span>
            </button>

            <button className="flex items-center gap-1 text-[18px]" aria-label="Retweet">
              <Repeat2 size={20} />
            </button>

            <button className="flex items-center gap-1 text-[18px]">
              <Heart size={20} />
              <span>{Math.max(1, data.likes || 1)}</span>
            </button>

            <button className="flex items-center gap-1 text-[18px]">
              <BarChart2 size={20} />
              <span>{viewCount}</span>
            </button>

            <button className="text-[18px]" aria-label="Bookmark">
              <Bookmark size={20} />
            </button>

            <button className="text-[18px]" aria-label="Share">
              <Share size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
