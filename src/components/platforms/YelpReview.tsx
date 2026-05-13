import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import {
  Camera,
  CircleUserRound,
  Hand,
  HeartHandshake,
  Lightbulb,
  MoreHorizontal,
  Palette,
  Star,
} from "lucide-react";

interface YelpReviewProps {
  data: ReviewData;
}

export const YelpReview = ({ data }: YelpReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white w-full max-w-5xl mx-auto px-8 py-8">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-start gap-4">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-700 text-sm">
                {(data.name || "H").charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div>
            <div className="text-[20px] font-semibold text-[#1f2b37] leading-tight">
              {data.name}
            </div>
            <div className="text-[14px] text-[#3d4a58]">
              {data.location?.city || "NC"}, {data.location?.state || "NC"}
            </div>
            <div className="mt-2 flex items-center gap-3 text-[14px] text-[#576574]">
              <span className="flex items-center gap-1">
                <Camera size={16} /> 0
              </span>
              <span className="flex items-center gap-1">
                <CircleUserRound size={16} /> 1
              </span>
              <span className="flex items-center gap-1">
                <Palette size={16} /> 0
              </span>
            </div>
          </div>
        </div>

        <button className="text-[#6b7280] p-1">
          <MoreHorizontal size={22} />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const filled = star <= safeRating;
            return (
              <span
                key={star}
                className={`w-8 h-8 rounded flex items-center justify-center ${
                  filled ? "bg-[#f5483d]" : "bg-[#d8dbe1]"
                }`}
              >
                <Star
                  size={16}
                  className={
                    filled
                      ? "text-white fill-white"
                      : "text-white fill-white/70"
                  }
                />
              </span>
            );
          })}
        </div>
        <span className="text-[14px] text-[#4b5563]">
          {format(data.date, "MMM d, yyyy")}
        </span>
      </div>

      <div className="text-[22px] leading-tight font-medium text-[#1f2b37] mb-4">
        {data.title || "Beautiful soft focus effect"}
      </div>

      <div className="text-[16px] leading-relaxed text-[#253241] max-w-5xl whitespace-pre-wrap">
        {data.content}
      </div>

      <div className="mt-8 flex items-center gap-8">
        <button className="flex flex-col items-center text-[#556170]">
          <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <Lightbulb size={22} />
          </span>
          <span className="mt-2 text-[14px]">Helpful 0</span>
        </button>
        <button className="flex flex-col items-center text-[#556170]">
          <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <Hand size={22} />
          </span>
          <span className="mt-2 text-[14px]">Thanks 0</span>
        </button>
        <button className="flex flex-col items-center text-[#556170]">
          <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <HeartHandshake size={22} />
          </span>
          <span className="mt-2 text-[14px]">Love this 0</span>
        </button>
        <button className="flex flex-col items-center text-[#556170]">
          <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <Palette size={22} />
          </span>
          <span className="mt-2 text-[14px]">Oh no 1</span>
        </button>
      </div>
    </div>
  );
};
