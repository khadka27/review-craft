import { ReviewData } from "@/types/review";
import { formatDistanceToNowStrict } from "date-fns";
import { ChevronDown, ThumbsDown, ThumbsUp } from "lucide-react";

interface YoutubeReviewProps {
  data: ReviewData;
}

export const YoutubeReview = ({ data }: YoutubeReviewProps) => {
  const timeAgo = `${formatDistanceToNowStrict(data.date).replace("about ", "")} ago`;

  return (
    <div className="bg-white w-full max-w-3xl mx-auto px-6 py-5">
      <div className="relative pl-10">
        <div className="absolute left-[16px] top-[42px] w-[2px] h-[120px] border-l border-b border-[#e5e5e5] rounded-bl-2xl" />

        <div className="flex items-start gap-3 mb-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-700 text-xs">?</span>
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[16px]">
              <span className="font-semibold text-[#303030]">
                @{data.username}
              </span>
              <span className="text-[#606060]">{timeAgo}</span>
            </div>

            <div className="mt-1 text-[16px] text-[#0f0f0f] leading-snug">
              {data.content}
            </div>

            <div className="mt-4 flex items-center gap-7 text-[#606060]">
              <button className="flex items-center gap-2 text-[16px]">
                <ThumbsUp size={22} />
                <span>{Math.max(0, data.likes || 15)}</span>
              </button>
              <button className="flex items-center gap-2 text-[16px]">
                <ThumbsDown size={22} />
              </button>
              <button className="text-[16px] font-semibold text-[#303030]">
                Reply
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3 text-[#303030] font-semibold text-[18px]">
              <span>{Math.max(1, data.replies || 3)} replies</span>
              <ChevronDown size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
