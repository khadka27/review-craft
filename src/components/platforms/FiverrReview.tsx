import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { ThumbsUp } from "lucide-react";

interface FiverrReviewProps {
  data: ReviewData;
}

export const FiverrReview = ({ data }: FiverrReviewProps) => {
  return (
    <div className="bg-white w-full max-w-5xl mx-auto px-6 py-5">
      <div className="flex items-start gap-3">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-gray-700 font-semibold text-sm">
              {(data.name || "M").trim().charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-[11px] font-semibold text-[#1dbf73]">
              {data.name}
            </span>
            <span className="text-[12px] text-gray-500">
              {format(data.date, "MMM d, yyyy, h:mm a")}
            </span>
          </div>

          <div className="text-[12px] text-gray-500">
            Community Member @ Fiverr
          </div>

          <div className="mt-3 text-[11px] text-gray-800 leading-snug">
            {data.content}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-gray-800"
            >
              <ThumbsUp size={16} />
              <span>Like</span>
            </button>

            <div className="flex items-center gap-1 text-[10px] text-gray-600">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">
                🙏
              </span>
              <span>{Math.max(0, data.likes || 1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
