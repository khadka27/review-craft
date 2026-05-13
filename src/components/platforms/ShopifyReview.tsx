import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star } from "lucide-react";
import { useState } from "react";

interface ShopifyReviewProps {
  data: ReviewData;
}

export const ShopifyReview = ({ data }: ShopifyReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const [expanded, setExpanded] = useState(false);
  const yearsUsingApp = Math.max(
    1,
    Math.min(8, new Date().getFullYear() - data.date.getFullYear()),
  );

  return (
    <div className="bg-white w-full max-w-5xl mx-auto px-8 py-7">
      <div className="flex items-start gap-12">
        {/* Left customer column */}
        <div className="w-[170px] flex-shrink-0 text-[#6d7175]">
          <div className="text-[20px] font-semibold text-[#202223] leading-tight">
            {data.name}
          </div>
          <div className="mt-2 text-[15px]">
            {data.location?.country || "United States"}
          </div>
          <div className="mt-2 text-[15px]">
            Almost {yearsUsingApp} years using the app
          </div>
        </div>

        {/* Right review column */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star <= safeRating
                      ? "text-[#111827] fill-[#111827]"
                      : "text-gray-300 fill-gray-300"
                  }
                />
              ))}
            </div>
            <div className="text-[15px] text-[#6d7175] whitespace-nowrap">
              {format(data.date, "MMM d, yyyy")}
            </div>
          </div>

          <div
            className={`mt-3 text-[22px] leading-[1.45] text-[#42474c] ${
              expanded ? "" : "rc-line-clamp-5"
            }`}
          >
            {data.content}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-[16px] font-semibold text-[#202223] underline underline-offset-2"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
};
