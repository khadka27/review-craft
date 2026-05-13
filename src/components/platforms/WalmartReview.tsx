import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { CircleUserRound, Info, MessageSquare, ThumbsUp } from "lucide-react";

interface WalmartReviewProps {
  data: ReviewData;
}

export const WalmartReview = ({ data }: WalmartReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const sourceHost = "itcosmetics.com";

  return (
    <div className="bg-white w-full max-w-4xl mx-auto px-8 py-8">
      <div className="flex items-start gap-10">
        {/* Left meta column */}
        <div className="w-[170px] flex-shrink-0 text-[#68707a]">
          <div className="text-[14px]">{format(data.date, "MMM d, yyyy")}</div>
          <div className="mt-5 flex items-center gap-2 text-[16px] text-[#35425b]">
            <CircleUserRound size={16} />
            <span>Walmart customer</span>
          </div>
        </div>

        {/* Right content column */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[16px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= safeRating ? "text-[#f7c324]" : "text-[#d1d6dd]"
                }
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-[#2c3137] font-semibold">
              Seller Verified Purchase
            </span>
            <Info size={15} className="text-[#7b8188]" />
          </div>

          <div className="mt-3 text-[22px] font-semibold leading-tight text-[#22272d]">
            {data.title || "Beautiful soft focus effect"}
          </div>

          <div className="mt-3 text-[15px] leading-relaxed text-[#2b3642] max-w-4xl rc-line-clamp-5">
            {data.content}
          </div>
          <button className="mt-2 text-[14px] text-[#2b3642] underline font-medium">
            View more
          </button>

          <div className="mt-5">
            {data.images && data.images.length > 0 ? (
              <img
                src={data.images[0]}
                alt="Review"
                className="w-[120px] h-[150px] object-cover border border-gray-200"
              />
            ) : (
              <div className="w-[120px] h-[150px] bg-gray-100 border border-gray-200" />
            )}
            <div className="mt-4 text-[14px] text-[#6d7680]">
              Review from {sourceHost}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 text-[14px] text-[#2b3642]">
            <span className="font-semibold">Helpful?</span>
            <button className="flex items-center gap-1">
              <ThumbsUp size={16} />
              <span>({Math.max(0, data.likes || 18)})</span>
            </button>
            <button className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span>(0)</span>
            </button>
            <button className="underline ml-2">Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};
