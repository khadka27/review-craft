import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { CheckCircle2, ChevronRight, Star, ThumbsUp } from "lucide-react";

interface AlibabaReviewProps {
  data: ReviewData;
}

export const AlibabaReview = ({ data }: AlibabaReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const maskedName = (() => {
    const trimmed = (data.name || "").trim();
    if (!trimmed) return "J***i";
    const first = trimmed[0]?.toUpperCase() || "J";
    const last = trimmed.at(-1)?.toLowerCase() || "i";
    return `${first}***${last}`;
  })();

  const initials = (data.name || "J").trim().charAt(0).toUpperCase() || "J";
  const countryLabel = data.location?.country || "Australia";
  const productTitle = data.productVariation || data.title || "";
  const priceLine = "NPR 437,642.05-503,333.67";
  const productImage = data.images?.[0];

  return (
    <div className="bg-white w-full max-w-5xl mx-auto px-4 py-4">
      <div className="grid grid-cols-[1fr_auto] items-start gap-5">
        <div className="flex items-start gap-3.5 min-w-0">
          <div className="w-10 h-10 rounded-full bg-[#d55200] text-white flex items-center justify-center font-semibold flex-shrink-0">
            {initials}
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <div className="text-[13px] font-semibold text-gray-900">
              {maskedName}
            </div>

            <div className="mt-1.5 space-y-1 text-[12px]">
              <div className="flex items-center gap-1.5 text-gray-700">
                <span aria-hidden="true">🇦🇺</span>
                <span>{countryLabel}</span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>Verified purchase</span>
              </div>

              <div>
                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-[12px] text-gray-600">
                  Repeat buyer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end flex-shrink-0 pt-0.5">
          <div className="text-[12px] text-gray-500 whitespace-nowrap">
            {format(data.date, "MMM d, yyyy")}
          </div>
        </div>
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={
                    star <= safeRating
                      ? "text-[#ff7a00] fill-[#ff7a00]"
                      : "text-gray-300 fill-gray-300"
                  }
                />
              ))}
            </div>
          </div>

          <div className="mt-1.5 text-[14px] text-gray-900 leading-snug max-w-3xl">
            {data.content}
          </div>

          <div className="mt-2.5 bg-gray-100 rounded px-3 py-2 flex items-center gap-3 max-w-4xl">
            <div className="w-12 h-12 rounded bg-white border border-gray-200 overflow-hidden flex items-center justify-center flex-shrink-0">
              {productImage ? (
                <img
                  src={productImage}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="text-[13px] text-gray-700 truncate">
                {productTitle}
              </div>
              <div className="text-[13px] font-semibold text-gray-900">
                {priceLine}
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-[12px] font-semibold text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              See product details <ChevronRight size={16} />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2 text-gray-600">
            <ThumbsUp size={16} />
            <span className="text-[12px]">Helpful ({data.likes})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
