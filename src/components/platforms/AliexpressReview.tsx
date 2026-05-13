import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { MoreHorizontal, Star, ThumbsUp } from "lucide-react";

interface AliexpressReviewProps {
  data: ReviewData;
}

export const AliexpressReview = ({ data }: AliexpressReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const maskedName = (() => {
    const trimmed = (data.name || "").trim();
    if (!trimmed) return "U***r";
    const first = trimmed[0]?.toUpperCase() || "U";
    const last = trimmed.at(-1)?.toLowerCase() || "r";
    return `${first}***${last}`;
  })();

  const productLine = data.productVariation || data.title;
  const images = data.images || [];

  return (
    <div className="bg-white w-full max-w-4xl mx-auto px-4 py-3">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <span className="text-gray-700 font-semibold text-xs">
                {(data.name || "U").charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= safeRating
                        ? "text-[#ffb000] fill-[#ffb000]"
                        : "text-gray-300 fill-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            {productLine && (
              <div className="mt-0.5 text-[12px] text-gray-500 truncate">
                {productLine}
              </div>
            )}

            <div className="mt-1 text-[10px] text-gray-900 font-semibold leading-snug">
              {data.content}
            </div>

            <div className="mt-4 text-[12px] text-gray-500">
              {maskedName} | {format(data.date, "dd MMM yyyy")}
            </div>
          </div>
        </div>

        {images.length > 0 && (
          <div className="flex items-start gap-2 flex-shrink-0">
            {images.slice(0, 2).map((image, index) => {
              const isSecondThumb = index === 1;
              const remainingCount = Math.max(0, images.length - 2);
              return (
                <div key={`${image}-${index}`} className="relative">
                  <img
                    src={image}
                    alt={`Customer ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-sm border border-gray-200"
                  />
                  {isSecondThumb && remainingCount > 0 && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        +{remainingCount}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-3 mt-2 text-gray-700">
        <button
          type="button"
          className="flex items-center gap-2 text-[10px] hover:text-gray-900 transition-colors"
        >
          <ThumbsUp size={16} />
          <span>Helpful ({data.likes})</span>
        </button>
        <button
          type="button"
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="More"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};
