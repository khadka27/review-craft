import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, ThumbsUp, MessageSquare, MoreVertical, CheckCircle } from "lucide-react";

interface FlipkartReviewProps {
  data: ReviewData;
}

export const FlipkartReview = ({ data }: FlipkartReviewProps) => {
  const city = data.location?.city || "Mumbai";
  const productLine =
    data.productVariation || "Color Pantone Tendril • RAM 4 GB • Storage 64 GB";

  return (
    <div className="bg-white border-t border-b border-gray-100 p-4 sm:p-6 w-full max-w-4xl mx-auto font-sans text-[#212121]">
      {/* Title & Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-0.5 text-[#008C00]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              fill={star <= data.rating ? "#008C00" : "none"}
              className={star <= data.rating ? "text-[#008C00]" : "text-gray-200"}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-[#008C00] ml-1">{data.rating.toFixed(1)}</span>
        <span className="text-[#878787] text-sm">•</span>
        <span className="text-sm font-medium text-[#212121]">
          {data.title || "Highly recommended"}
        </span>
      </div>

      <div className="text-[12px] text-[#878787] mb-3">
        <span className="font-medium">Review for:</span> {productLine}
      </div>

      {/* Content */}
      <p className="text-sm text-[#212121] mb-4 leading-relaxed">
        {data.content}
      </p>

      {/* Images (if any) */}
      {data.images && data.images.length > 0 && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {data.images.map((img, idx) => (
            <img 
              key={`${img}-${idx}`} 
              src={img} 
              alt={`Review ${idx + 1}`} 
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-gray-200 flex-shrink-0"
            />
          ))}
        </div>
      )}

      {/* User Info */}
      <div className="text-[13px] text-[#878787] mb-3">
        {data.name}, {city}
      </div>

      {/* Helpful & Dislike & Menu */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e0e0e0] rounded-full text-[13px] font-medium text-[#878787] hover:bg-gray-50 transition-colors">
            <ThumbsUp size={14} className="text-[#878787]" />
            <span>Helpful for {data.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e0e0e0] rounded-full text-[13px] font-medium text-[#878787] hover:bg-gray-50 transition-colors">
            <MessageSquare size={14} className="text-[#878787]" />
            <span>{Math.max(0, data.replies || 73)}</span>
          </button>
        </div>
        <button className="text-[#878787] hover:text-gray-900 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Verified Purchase and Date */}
      <div className="flex items-center gap-1 text-[13px] text-[#878787] font-medium">
        {data.verified && (
          <div className="flex items-center">
            <div className="bg-[#111112] rounded-full p-0.5 mr-1.5">
              <CheckCircle size={10} className="text-white fill-white" />
            </div>
            <span>Verified Purchase· </span>
          </div>
        )}
        <span>{format(data.date, "MMM, yyyy")}</span>
      </div>
    </div>
  );
};
