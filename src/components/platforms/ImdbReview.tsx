import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import {
  ChevronRight,
  MoreVertical,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

interface ImdbReviewProps {
  data: ReviewData;
}

export const ImdbReview = ({ data }: ImdbReviewProps) => {
  const safeRating = Math.max(1, Math.min(10, Math.round(data.rating * 2)));
  const helpfulCount = data.likes || 591;
  const unhelpfulCount = Math.max(0, Math.floor(helpfulCount * 0.14));
  const heading = data.title || "Jaafar Jackson wow";

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative bg-white border border-gray-300 rounded-lg px-5 py-5">
        <div className="flex items-center gap-1.5 mb-4">
          <Star size={16} className="text-[#f5c518] fill-[#f5c518]" />
          <span className="text-[18px] font-medium leading-none text-gray-700">
            {safeRating}/10
          </span>
        </div>

        <h3 className="text-[24px] font-bold leading-tight text-gray-900 mb-4 flex items-center gap-2">
          <span>{heading}</span>
          <ChevronRight size={30} className="text-gray-600" />
        </h3>

        <div className="text-[15px] leading-[1.45] text-gray-800 rc-line-clamp-5">
          {data.content}
        </div>
        <div className="text-[22px] leading-none text-gray-900 -mt-2">...</div>

        <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[16px] text-gray-800">
            <button className="flex items-center gap-2">
              <ThumbsUp size={24} />
              <span>Helpful · {helpfulCount}</span>
            </button>
            <button className="flex items-center gap-2">
              <ThumbsDown size={24} />
              <span>{unhelpfulCount}</span>
            </button>
          </div>
          <button className="text-gray-500">
            <MoreVertical size={24} />
          </button>
        </div>

        <div className="absolute -bottom-[7px] left-9 w-3.5 h-3.5 bg-white border-l border-b border-gray-300 rotate-[-45deg]" />
      </div>

      <div className="flex items-center gap-3 pt-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {(data.username || data.name).charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-[16px]">
          <span className="text-[#0b57d0] font-semibold">
            {data.username || "blueastrid-76756"}
          </span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-700">
            {format(data.date, "MMM d, yyyy")}
          </span>
          <span className="text-gray-500">·</span>
          <span className="text-[#0b57d0]">Permalink</span>
        </div>
      </div>
    </div>
  );
};
