import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star } from "lucide-react";

interface EtsyReviewProps {
  data: ReviewData;
}

export const EtsyReview = ({ data }: EtsyReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const purchasedLabel = data.productVariation || data.title || "Custom Mama Sweatshirt wi...";

  return (
    <div className="bg-white border border-gray-200 rounded-xl w-full max-w-sm mx-auto p-5">
      <div className="flex items-center gap-0.5 text-gray-900">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={
              star <= safeRating
                ? "text-gray-900 fill-gray-900"
                : "text-gray-300 fill-gray-300"
            }
          />
        ))}
      </div>

      <div className="mt-3 text-[11px] leading-snug text-gray-700">
        {data.content}
      </div>

      <div className="mt-16 text-[10px] font-semibold text-gray-900">
        {data.name}
        <span className="font-normal text-gray-500">
          {" "}
          | {format(data.date, "MMM d, yyyy")}
        </span>
      </div>

      <div className="mt-1 text-[11px] text-gray-500">
        Purchased:{" "}
        <span className="text-gray-500 underline underline-offset-2">
          {purchasedLabel}
        </span>
      </div>
    </div>
  );
};
