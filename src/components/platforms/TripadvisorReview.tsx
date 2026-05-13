import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { MoreHorizontal, ThumbsUp } from "lucide-react";

interface TripadvisorReviewProps {
  data: ReviewData;
}

export const TripadvisorReview = ({ data }: TripadvisorReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const photo = data.images?.[0];

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-8 py-7 w-full max-w-4xl mx-auto">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
              {data.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}

          <div>
            <div className="text-[17px] font-semibold text-[#0f2b24]">
              {data.name}
            </div>
            <div className="text-[13px] text-[#65767b]">
              {Math.max(1, data.replies || 3)} contributions
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[#0f2b24]">
          <button className="flex items-center gap-1 text-[13px]">
            <ThumbsUp size={14} />
            <span>{Math.max(0, data.likes)}</span>
          </button>
          <button type="button">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className={`w-4 h-4 rounded-full inline-block ${
                    dot <= safeRating ? "bg-[#00aa6c]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="mt-2 text-[22px] leading-tight font-semibold text-[#0f2b24]">
              {data.title || "The Casual Greek - Restaurant in New York"}
            </div>

            <div className="mt-2 text-[18px] text-[#223f39]">
              {format(data.date, "MMM yyyy")} • Family
            </div>
          </div>

          <div className="bg-[#013220] text-white text-[13px] font-semibold px-3 py-1 rounded-md whitespace-nowrap">
            Restaurant's favorite review
          </div>
        </div>

        <div className="mt-4 text-[16px] leading-relaxed text-[#223f39] max-w-5xl">
          {data.content}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-x-8 gap-y-4 max-w-3xl">
          {["Value", "Service", "Food", "Atmosphere"].map((label) => (
            <div key={label}>
              <div className="text-[15px] font-semibold text-[#0f2b24]">
                {label}
              </div>
              <div className="mt-1 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((d) => (
                  <span key={d} className="w-4 h-4 rounded-full bg-[#00aa6c]" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          {photo ? (
            <img
              src={photo}
              alt="Review"
              className="w-24 h-24 object-cover rounded-md border border-gray-200"
            />
          ) : (
            <div className="w-24 h-24 rounded-md border border-gray-200 bg-gray-100" />
          )}
        </div>

        <div className="mt-5 text-[13px] text-[#3f5257]">
          Written {format(data.date, "MMMM d, yyyy")}
        </div>
        <div className="mt-2 text-[12px] text-[#65767b] max-w-5xl">
          This review is the subjective opinion of a Tripadvisor member and not
          of Tripadvisor LLC. Tripadvisor performs checks on reviews as part of
          our industry-leading trust & safety standards. Read our transparency
          report to learn more.
        </div>
      </div>
    </div>
  );
};
