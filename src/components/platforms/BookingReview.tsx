import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import {
  BedDouble,
  Calendar,
  Smile,
  Frown,
  ThumbsUp,
  ThumbsDown,
  Users,
} from "lucide-react";

interface BookingReviewProps {
  data: ReviewData;
}

export const BookingReview = ({ data }: BookingReviewProps) => {
  const safeRating = Math.max(1, Math.min(10, Math.round((data.rating || 5) * 2)));
  const reviewDate = format(data.date, "MMM d, yyyy");
  const countryLabel = data.location?.country || "Australia";
  const roomLine =
    data.productVariation ||
    "Deluxe Double Room with 15% Off on FNB& SPA, Welcome Drink on Arrival. Room upgrade to Next Category as per subject to availability";
  const stayLine = `1 night · ${format(data.date, "MMM yyyy")}`;
  const travelerType = "Family";
  const title = data.title || "Decent place but won’t be back";

  const [prosLine, consLine] = (() => {
    const parts = (data.content || "").split(/\n+/).map((s) => s.trim()).filter(Boolean);
    if (parts.length === 0) {
      return ["Decent property with good quality food", "The service is not good enough for the brand image"];
    }
    if (parts.length === 1) {
      return [parts[0], "The service is not good enough for the brand image"];
    }
    return [parts[0], parts[1]];
  })();

  return (
    <div className="bg-white w-full max-w-6xl mx-auto px-6 py-6">
      <div className="flex gap-8">
        {/* Left column */}
        <div className="w-[260px] flex-shrink-0">
          <div className="flex items-start gap-3">
            {data.avatar ? (
              <img
                src={data.avatar}
                alt={data.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                {(data.name || "B").trim().charAt(0).toUpperCase()}
              </div>
            )}

            <div className="min-w-0">
              <div className="font-semibold text-gray-900 leading-tight">
                {data.name || "Guest"}
              </div>
              <div className="mt-1 flex items-center gap-2 text-[13px] text-gray-600">
                <span aria-hidden="true">🇦🇺</span>
                <span>{countryLabel}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-[13px] text-gray-700">
            <div className="flex items-start gap-3">
              <BedDouble size={16} className="text-gray-500 mt-0.5" />
              <div className="leading-relaxed">{roomLine}</div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={16} className="text-gray-500" />
              <div>{stayLine}</div>
            </div>
            <div className="flex items-center gap-3">
              <Users size={16} className="text-gray-500" />
              <div>{travelerType}</div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <div className="text-[12px] text-gray-500">
                Reviewed: {reviewDate}
              </div>
              <div className="mt-1 text-[22px] font-bold text-gray-900 leading-snug">
                {title}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-[#003B95] text-white font-bold px-3 py-2 rounded-md text-[14px] min-w-[44px] text-center">
                {safeRating.toFixed(1)}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-[14px] text-gray-800">
            <div className="flex items-start gap-3">
              <Smile size={18} className="text-emerald-600 mt-0.5" />
              <div>{prosLine}</div>
            </div>
            <div className="flex items-start gap-3">
              <Frown size={18} className="text-gray-500 mt-0.5" />
              <div>{consLine}</div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-end gap-10 text-[14px]">
            <button
              type="button"
              className="flex items-center gap-2 text-[#006CE4] hover:underline font-semibold"
            >
              <ThumbsUp size={16} /> Helpful
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-[#006CE4] hover:underline font-semibold"
            >
              <ThumbsDown size={16} /> Not helpful
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};