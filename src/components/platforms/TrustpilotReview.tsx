import { ReviewData } from "@/types/review";
import { format, formatDistanceToNowStrict } from "date-fns";
import { Flag, Share2, ThumbsUp } from "lucide-react";

interface TrustpilotReviewProps {
  data: ReviewData;
}

export const TrustpilotReview = ({ data }: TrustpilotReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 3)));
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const timeAgo = formatDistanceToNowStrict(data.date, {
    addSuffix: true,
  }).replace("about ", "");

  return (
    <div className="bg-white w-full max-w-4xl mx-auto px-6 py-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-[#f2edbe] rounded-full flex items-center justify-center">
            <span className="text-[24px] font-bold text-gray-700">
              {initials}
            </span>
          </div>
          <div>
            <div className="text-[26px] font-semibold text-[#232a31] leading-tight">
              {data.username || data.name.split(" ")[0].toLowerCase()}
            </div>
            <div className="text-[18px] text-gray-600">
              {data.location?.country || "UA"} ·{" "}
              {Math.max(1, data.replies || 1)} review
            </div>
          </div>
        </div>
        <div className="text-[24px] text-gray-600 whitespace-nowrap">
          {timeAgo}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`w-8 h-8 flex items-center justify-center text-[16px] font-bold ${
              star <= safeRating
                ? "bg-[#f9c700] text-white"
                : "bg-[#d9dde3] text-white"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <div className="mt-5 text-[28px] font-semibold leading-tight text-[#232a31]">
        {data.title || "i don't know what to say"}
      </div>

      <div className="mt-3 text-[24px] leading-[1.35] text-[#2f3943]">
        {data.content}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="px-3 py-1 rounded-md bg-[#eef0f2] text-[20px] text-[#343f49]">
          {format(data.date, "MMM d, yyyy")}
        </span>
        <span className="px-3 py-1 rounded-md bg-[#eef0f2] text-[20px] text-[#343f49]">
          Unprompted review
        </span>
      </div>

      <div className="mt-7 flex items-center gap-8 text-[#5b646d]">
        <button className="flex items-center gap-2">
          <ThumbsUp size={24} />
          <span className="text-[18px]">Useful</span>
        </button>

        <button className="flex items-center gap-2">
          <Share2 size={24} />
          <span className="text-[18px]">Share</span>
        </button>

        <button className="flex items-center gap-2">
          <Flag size={24} />
        </button>
      </div>
    </div>
  );
};
