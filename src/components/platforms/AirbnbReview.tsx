import { ReviewData } from "@/types/review";
import { formatDistanceToNowStrict } from "date-fns";
import { Star } from "lucide-react";
import { useMemo, useState } from "react";

interface AirbnbReviewProps {
  data: ReviewData;
}

export const AirbnbReview = ({ data }: AirbnbReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const [isExpanded, setIsExpanded] = useState(false);

  const timeAgo = useMemo(() => {
    try {
      return formatDistanceToNowStrict(data.date, { addSuffix: true });
    } catch {
      return "just now";
    }
  }, [data.date]);

  return (
    <div className="bg-white w-full max-w-sm mx-auto p-4">
      <div className="flex items-start gap-3">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-lg">
              {data.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="font-semibold text-[12px] text-gray-900 leading-tight">
            {data.name}
          </div>

          {data.location && (
            <div className="mt-0.5 text-[10px] text-gray-500">
              {data.location.city}, {data.location.state}
            </div>
          )}

          <div className="mt-2 flex items-center gap-2 text-[10px] text-gray-500">
            <div className="flex items-center gap-0.5 text-gray-900">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className={
                    star <= safeRating
                      ? "text-gray-900 fill-gray-900"
                      : "text-gray-300 fill-gray-300"
                  }
                />
              ))}
            </div>
            <span>·</span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p
          className={`text-[11px] leading-relaxed text-gray-800 ${
            isExpanded ? "" : "rc-line-clamp-3"
          }`}
        >
          {data.content}
        </p>

        {data.content && data.content.length > 120 && (
          <button
            type="button"
            onClick={() => setIsExpanded((v) => !v)}
            className="mt-2 text-[11px] text-gray-900 underline underline-offset-2"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};
