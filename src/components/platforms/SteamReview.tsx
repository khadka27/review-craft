import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { ThumbsUp, ThumbsDown, Award, MessageSquare, Star } from "lucide-react";

interface SteamReviewProps {
  data: ReviewData;
}

export const SteamReview = ({ data }: SteamReviewProps) => {
  const isRecommended = data.rating >= 3;
  const playtimeTotal = data.steamPlaytimeTotal || "57.9 hrs";
  const playtimeAtReview = data.steamPlaytimeAtReview || "22.4 hrs";
  const helpfulCount = data.steamHelpfulCount || 61;
  const funnyCount = data.steamFunnyCount || 2;
  const awardCount = data.steamAwardCount || 2;

  return (
    <div className="bg-[#1b2838] text-[#acb2b8] font-sans p-4 w-full max-w-5xl mx-auto border border-[#2a475e] shadow-2xl rounded-sm">
      <div className="bg-[#16202d] border border-[#2a475e] p-3">
        <div className="flex gap-4">
          {/* Left user sidebar */}
          <aside className="w-[300px] flex-shrink-0">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 border border-[#4b6a86] p-[2px] bg-[#0e141b]">
                {data.avatar ? (
                  <img
                    src={data.avatar}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#2a475e] flex items-center justify-center">
                    <span className="text-[#67c1f5] text-xl font-bold">?</span>
                  </div>
                )}
              </div>

              <div>
                <div className="text-[#9eb7cc] text-[14px] font-bold leading-tight">
                  {data.username || "KratomCowgirl"}
                </div>
                <div className="text-[#6f8598] text-[11px]">
                  {Math.max(1, data.replies || 1)} reviews
                </div>
              </div>
            </div>
          </aside>

          {/* Right review area */}
          <section className="flex-1 min-w-0">
            <div className="flex items-start justify-between bg-[#101923] border border-[#24384d] p-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#1f6f8f] flex items-center justify-center">
                  {isRecommended ? (
                    <ThumbsUp
                      className="text-[#66c0f4]"
                      size={24}
                      fill="#66c0f4"
                    />
                  ) : (
                    <ThumbsDown
                      className="text-[#a34c32]"
                      size={24}
                      fill="#a34c32"
                    />
                  )}
                </div>

                <div>
                  <div className="text-[#c7d5e0] font-bold text-[15px] leading-tight">
                    {isRecommended ? "Recommended" : "Not Recommended"}
                  </div>
                  <div className="text-[#8ba2ad] text-[11px] leading-tight">
                    {playtimeTotal} on record ({playtimeAtReview} at review
                    time)
                  </div>
                </div>
              </div>

              <Star size={16} className="text-[#4c6c7c]" />
            </div>

            <div className="text-[#5f7387] uppercase text-[11px] mb-2">
              Posted: {format(data.date || new Date(), "MMM d")}
            </div>

            <div className="text-[#c7d5e0] text-[13px] leading-[1.4] mb-3 whitespace-pre-wrap">
              {data.content}
            </div>

            <div className="h-[1px] bg-[#3a4f63] mb-2" />

            <div className="text-[#6f8598] text-[11px] mb-2">
              Was this review helpful?
            </div>

            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <button className="px-3 py-1 bg-[#233142] border border-[#2e3f52] text-[#66c0f4] text-[12px] rounded-sm flex items-center gap-1">
                <ThumbsUp size={16} /> Yes
              </button>
              <button className="px-3 py-1 bg-[#233142] border border-[#2e3f52] text-[#66c0f4] text-[12px] rounded-sm flex items-center gap-1">
                <ThumbsDown size={16} /> No
              </button>
              <button className="px-3 py-1 bg-[#233142] border border-[#2e3f52] text-[#6f8598] text-[12px] rounded-sm">
                Funny
              </button>
              <button className="px-3 py-1 bg-[#233142] border border-[#2e3f52] text-[#8fa0b2] text-[12px] rounded-sm flex items-center gap-1">
                <Award size={16} className="text-[#e5da2d]" /> Award
              </button>
            </div>

            <div className="text-[#7f8f9d] text-[11px] leading-tight">
              <div>{helpfulCount} people found this review helpful</div>
              <div>{funnyCount} people found this review funny</div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#0f2438] rounded text-[12px] text-[#66c0f4]">
                <span>🎯</span>
                <span>{awardCount}</span>
              </div>
              <div className="flex items-center gap-1 text-[#66c0f4] text-[12px]">
                <span>2</span>
                <MessageSquare size={18} fill="#66c0f4" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
