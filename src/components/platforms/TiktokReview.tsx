import { ReviewData } from "@/types/review";
import { ChevronDown, Heart } from "lucide-react";

interface TiktokReviewProps {
  data: ReviewData;
}

export const TiktokReview = ({ data }: TiktokReviewProps) => {
  const likesLabel =
    data.likes >= 1000 ? `${(data.likes / 1000).toFixed(1)}K` : `${data.likes}`;

  return (
    <div className="bg-black text-white w-full max-w-md px-3 py-3">
      <div className="flex items-start gap-3">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-white text-xs">
              {(data.name || "u").trim().charAt(0)}
            </span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold text-gray-300">
            {data.username}
          </div>
          <div className="mt-1 text-[14px] leading-snug font-semibold text-white max-w-[290px]">
            {data.content}
          </div>

          <div className="mt-3 flex items-center justify-between text-[13px] text-gray-400">
            <div className="flex items-center gap-4">
              <span>3-31</span>
              <button type="button" className="font-semibold">
                Reply
              </button>
            </div>
            <button type="button" className="flex items-center gap-1">
              <Heart size={16} />
              <span>{likesLabel}</span>
            </button>
          </div>

          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-[13px] text-gray-400 font-semibold"
          >
            <span className="text-gray-600">──</span>
            <span>View {Math.max(1, data.replies || 38)} replies</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
