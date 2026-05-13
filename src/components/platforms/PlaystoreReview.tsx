import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { MoreVertical, Star } from "lucide-react";

interface PlaystoreReviewProps {
  data: ReviewData;
}

export const PlaystoreReview = ({ data }: PlaystoreReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 2)));

  return (
    <div className="bg-white text-gray-900 rounded-lg px-6 py-7 max-w-4xl w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-start gap-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-700 text-xs font-semibold">
                {(data.name || "C").charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div className="flex-1">
            <div className="font-medium text-[10px] text-[#202124]">
              {data.name}
            </div>
          </div>
        </div>
        <button type="button" className="text-[#5f6368] p-1">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={
                star <= safeRating
                  ? "text-[#0f9d58] fill-[#0f9d58]"
                  : "text-[#dadce0] fill-[#dadce0]"
              }
            />
          ))}
        </div>
        <span className="text-[10px] text-[#5f6368]">
          {format(data.date, "MMMM d, yyyy")}
        </span>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-[#5f6368] leading-relaxed text-[10px]">
          {data.content}
        </p>
      </div>

      <div className="text-[10px] text-[#5f6368]">
        {Math.max(1, data.likes || 5)} people found this review helpful
      </div>
    </div>
  );
};

