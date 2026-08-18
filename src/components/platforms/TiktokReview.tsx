import { ReviewData } from "@/types/review";
import { ChevronDown, Heart } from "lucide-react";
import { format } from "date-fns";

interface TiktokReviewProps {
  data: ReviewData;
}

export const TiktokReview = ({ data }: TiktokReviewProps) => {
  const likesLabel =
    data.likes >= 1000000
      ? `${(data.likes / 1000000).toFixed(1)}M`
      : data.likes >= 1000
      ? `${(data.likes / 1000).toFixed(1)}K`
      : `${data.likes}`;

  const formattedDate = data.date
    ? format(new Date(data.date), "M-d")
    : "3-31";

  return (
    <div className="bg-[#121212] text-white w-full p-4 sm:p-5 font-sans">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name || data.username}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-xs sm:text-sm font-medium">
              {(data.username || data.name || "u").trim().charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Comment Content */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="text-[13px] font-bold text-gray-200 leading-tight">
            {data.username || data.name}
          </div>
          <div className="mt-1 text-[14px] leading-relaxed text-gray-100 font-normal break-words">
            {data.content}
          </div>

          <div className="mt-2 flex items-center gap-4 text-[12px] text-gray-400 font-medium">
            <span>{formattedDate}</span>
            <button type="button" className="font-semibold hover:text-gray-300 transition-colors">
              Reply
            </button>
          </div>

          {/* View replies */}
          <button
            type="button"
            className="mt-3 flex items-center gap-1.5 text-[12px] text-gray-400 font-semibold hover:text-gray-300 transition-colors"
          >
            <span className="text-gray-600">──</span>
            <span>View {Math.max(1, data.replies || 7)} replies</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        </div>

        {/* Like Button Column (Right Aligned like TikTok App) */}
        <div className="flex flex-col items-center flex-shrink-0 pt-1 text-gray-400">
          <button type="button" className="hover:scale-110 active:scale-95 transition-transform" aria-label="Like">
            <Heart size={18} className="text-gray-400 hover:text-red-500 transition-colors" />
          </button>
          <span className="text-[11px] mt-1 font-normal text-gray-400">{likesLabel}</span>
        </div>
      </div>
    </div>
  );
};

