import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Heart, MoreVertical, Star, ThumbsUp } from "lucide-react";

interface DarazReviewProps {
  data: ReviewData;
}

export const DarazReview = ({ data }: DarazReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const maskedName = (() => {
    const trimmed = (data.name || "").trim();
    if (!trimmed) return "g**4";
    const start = trimmed.slice(0, 1).toLowerCase() || "g";
    const end = trimmed.at(-1)?.toLowerCase() || "4";
    return `${start}**${end}`;
  })();

  return (
    <div className="bg-white w-full max-w-6xl mx-auto px-6 py-4 border-t border-gray-200">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={
                  star <= safeRating
                    ? "text-[#f5a623] fill-[#f5a623]"
                    : "text-gray-300 fill-gray-300"
                }
              />
            ))}
          </div>

          <div className="mt-1 flex items-center gap-2 text-[10px]">
            <span className="text-gray-700">{maskedName}</span>
            {data.verified && (
              <span className="inline-flex items-center gap-1 text-green-600">
                <Heart
                  size={14}
                  fill="currentColor"
                  className="text-green-600"
                />
                <span className="font-medium">Verified Purchase</span>
              </span>
            )}
          </div>
        </div>

        <div className="text-[10px] text-gray-500 whitespace-nowrap">
          {format(data.date, "dd MMM yyyy")}
        </div>
      </div>

      <div className="mt-4 text-[11px] leading-relaxed text-gray-800 max-w-5xl">
        {data.content}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <ThumbsUp size={16} />
          <span className="text-[10px]">{data.likes}</span>
        </div>

        <button
          type="button"
          className="p-1 text-gray-400 hover:text-gray-600"
          aria-label="More"
        >
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};
