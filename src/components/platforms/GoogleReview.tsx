import { ReviewData } from "@/types/review";
import { BadgeCheck, Star } from "lucide-react";

interface GoogleReviewProps {
  data: ReviewData;
}

export const GoogleReview = ({ data }: GoogleReviewProps) => {
  const initials = data.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 1)
    .toUpperCase();

  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-[#f5f5f5] p-4 rounded-2xl w-full max-w-2xl mx-auto">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-[#2E7D32] text-white flex items-center justify-center text-2xl font-medium flex-shrink-0">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-[34px] leading-none font-semibold text-gray-900 truncate">
            {data.name}
          </h3>
          <p className="text-[24px] text-gray-500 mt-1">
            {data.date.toISOString().split("T")[0]}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star <= safeRating
                      ? "text-[#f4b400] fill-[#f4b400]"
                      : "text-gray-300 fill-gray-300"
                  }
                />
              ))}
            </div>
            <BadgeCheck size={16} className="text-[#4285F4]" />
          </div>

          <p className="mt-4 text-[18px] leading-relaxed text-gray-900">
            {data.content}
          </p>

          <button
            type="button"
            className="mt-3 text-[16px] text-gray-500 hover:text-gray-700 transition-colors"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
