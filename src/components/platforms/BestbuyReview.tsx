import { ReviewData } from "@/types/review";
import { format, formatDistanceToNowStrict } from "date-fns";
import { Check, CheckCircle, Star } from "lucide-react";

interface BestbuyReviewProps {
  data: ReviewData;
}

export const BestbuyReview = ({ data }: BestbuyReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const postedAgo = (() => {
    try {
      return formatDistanceToNowStrict(data.date, { addSuffix: true });
    } catch {
      return "just now";
    }
  })();
  const paragraphs = (data.content || "").split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="bg-white w-full max-w-5xl mx-auto px-6 py-6">
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-start gap-8">
          <div className="w-[120px] flex-shrink-0">
            <button
              type="button"
              className="text-[12px] text-[#0046be] hover:underline font-semibold"
            >
              {data.username || data.name || "User"}
            </button>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= safeRating
                        ? "text-[#ffce00] fill-[#ffce00]"
                        : "text-gray-300 fill-gray-300"
                    }
                  />
                ))}
              </div>
              <div className="text-[13px] font-semibold text-gray-900 truncate">
                {data.title || data.productVariation || "Product"}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-700">
              {data.verified && (
                <span className="inline-flex items-center gap-1">
                  <CheckCircle size={12} className="text-gray-800" />
                  <span className="font-semibold">Verified Purchase</span>
                </span>
              )}
              <span className="text-gray-400">|</span>
              <span>Posted {postedAgo}.</span>
            </div>

            <div className="mt-1 text-[9px] text-gray-500">
              This reviewer received promo considerations or sweepstakes entry
              for writing a review.
            </div>

            <div className="mt-4 space-y-3 text-[11px] leading-relaxed text-gray-900">
              {(paragraphs.length > 0 ? paragraphs : [data.content]).map(
                (p, i) => (
                  <p key={`${i}-${p.slice(0, 24)}`}>{p}</p>
                ),
              )}
            </div>

            {data.images && data.images.length > 0 && (
              <div className="mt-5">
                <img
                  src={data.images[0]}
                  alt="Customer"
                  className="w-[56px] h-[56px] object-cover rounded border border-gray-200"
                />
              </div>
            )}

            <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-700">
              <Check size={14} className="text-green-700" />
              <span>I would recommend this to a friend</span>
            </div>

            <div className="mt-6 flex items-center gap-4 text-[11px] text-[#0046be]">
              <button
                type="button"
                className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50"
              >
                Helpful ({data.likes})
              </button>
              <button type="button" className="hover:underline">
                Unhelpful (0)
              </button>
              <button type="button" className="hover:underline">
                Report
              </button>
              <button type="button" className="hover:underline">
                Comment
              </button>
            </div>
          </div>

          <div className="w-[140px] flex-shrink-0 text-right text-[11px] text-gray-500">
            {format(data.date, "MMM d, yyyy")}
          </div>
        </div>
      </div>
    </div>
  );
};