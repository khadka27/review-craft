import { ReviewData } from "@/types/review";
import { formatDistanceToNowStrict } from "date-fns";
import { Heart, MoreVertical, Share2, Star } from "lucide-react";
import { GoogleReviewSummary } from "./GoogleReviewSummary";

interface GoogleReviewProps {
  data: ReviewData;
}

export const GoogleReview = ({ data }: GoogleReviewProps) => {
  if (data.googleContentType === "summary") {
    return <GoogleReviewSummary data={data} />;
  }

  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const initials = (data.name || "A").trim().charAt(0).toUpperCase();
  const localGuide = true;
  const reviewCount = 106;
  const photoCount = 226;

  const timeAgo = (() => {
    try {
      return formatDistanceToNowStrict(data.date, { addSuffix: true }).replace(
        "about ",
        "",
      );
    } catch {
      return "just now";
    }
  })();

  const food = Math.min(5, Math.max(1, safeRating));
  const service = Math.min(5, Math.max(1, safeRating));
  const atmosphere = Math.min(5, Math.max(1, safeRating + 1));

  return (
    <div className="bg-[#202124] text-[#e8eaed] rounded-lg p-4 w-full max-w-2xl mx-auto">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#3c4043] text-[#e8eaed] flex items-center justify-center text-[10px] font-semibold flex-shrink-0">
              {initials}
            </div>
          )}

          <div className="min-w-0">
            <div className="font-semibold text-[10px] truncate">
              {data.name}
            </div>
            <div className="text-[12px] text-[#9aa0a6]">
              {localGuide ? "Local Guide" : "Google user"} · {reviewCount} reviews
              {" · "}
              {photoCount} photos
            </div>
          </div>
        </div>

        <button
          type="button"
          className="text-[#9aa0a6] hover:text-[#e8eaed] p-1"
          aria-label="More"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={
                star <= safeRating
                  ? "text-[#fbbc04] fill-[#fbbc04]"
                  : "text-[#5f6368] fill-[#5f6368]"
              }
            />
          ))}
        </div>
        <div className="text-[12px] text-[#9aa0a6]">{timeAgo}</div>
      </div>

      <div className="mt-2 text-[11px] leading-relaxed text-[#e8eaed]">
        {data.content}
      </div>

      <div className="mt-4 bg-[#2b2c2f] rounded-lg px-4 py-3 text-[11px] text-[#c9cdd2]">
        Food: {food}/5 <span className="text-[#5f6368]">|</span> Service:{" "}
        {service}/5 <span className="text-[#5f6368]">|</span> Atmosphere:{" "}
        {atmosphere}/5
      </div>

      {data.images && data.images.length > 0 && (
        <div className="mt-4 flex gap-2">
          {data.images.slice(0, 3).map((img, idx) => (
            <img
              key={`${img}-${idx}`}
              src={img}
              alt="Review"
              className="w-[120px] h-[92px] rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-4 text-[#9aa0a6]">
        <button type="button" className="flex items-center gap-2">
          <Heart size={18} />
          <span className="text-[10px]">{Math.max(0, data.likes || 2)}</span>
        </button>
        <button type="button" className="flex items-center gap-2" aria-label="Share">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

