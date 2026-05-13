import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star } from "lucide-react";

interface EbayReviewProps {
  data: ReviewData;
}

export const EbayReview = ({ data }: EbayReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const byLine = data.username || "tp62-610";
  const title = data.title || "Another great computer from eBay";
  const condition = "Pre-owned";

  return (
    <div className="bg-white w-full max-w-6xl mx-auto px-6 py-6">
      <div className="flex items-start gap-12">
        {/* Left */}
        <div className="w-[180px] flex-shrink-0">
          <div className="flex items-center gap-0.5 text-gray-900">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={
                  star <= safeRating
                    ? "text-gray-900 fill-gray-900"
                    : "text-gray-300 fill-gray-300"
                }
              />
            ))}
          </div>
          <div className="mt-2 text-[10px] text-gray-700">
            by{" "}
            <span className="text-gray-900 underline underline-offset-2">
              {byLine}
            </span>
          </div>
          <div className="text-[10px] text-gray-700">
            {format(data.date, "MMM d, yyyy")}
          </div>
        </div>

        {/* Right */}
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-bold text-gray-900 leading-snug">
            {title}
          </div>
          <div className="mt-2 text-[11px] text-gray-900">
            {data.content}
          </div>
          <div className="mt-2 text-[12px] text-gray-500">
            Verified purchase: <span className="font-semibold">Yes</span> ·
            {"  "}
            Condition: <span className="font-semibold">{condition}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
