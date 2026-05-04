import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { ThumbsUp, ThumbsDown, Award, Smile, Star } from "lucide-react";

interface SteamReviewProps {
  data: ReviewData;
}

export const SteamReview = ({ data }: SteamReviewProps) => {
  const isRecommended = data.rating >= 3;
  
  // Use data from props or generate fallbacks for visual consistency
  const playtimeTotal = data.steamPlaytimeTotal || "47.3 hrs";
  const playtimeAtReview = data.steamPlaytimeAtReview || "14.1 hrs";
  const helpfulCount = data.steamHelpfulCount || 10;
  const funnyCount = data.steamFunnyCount || 2;
  const awardCount = data.steamAwardCount || 1;

  return (
    <div className="bg-[#1b2838] text-[#acb2b8] font-sans p-4 sm:p-6 w-full max-w-2xl mx-auto border border-[#2a475e] shadow-2xl rounded-sm">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* User Info Sidebar */}
        <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:w-32 flex-shrink-0">
          <div className="relative group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#67c1f5] p-0.5 bg-[#3d4450]">
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
          </div>
          <div className="flex flex-col">
            <span className="text-[#67c1f5] font-bold text-sm sm:text-base hover:underline cursor-pointer truncate max-w-[150px]">
              {data.username || "Rushian"}
            </span>
            <span className="text-[#626366] text-[11px] sm:text-xs">
              {data.replies || 33} reviews
            </span>
          </div>
        </div>

        {/* Review Content Area */}
        <div className="flex-1 min-w-0">
          {/* Header Status */}
          <div className="flex items-start justify-between bg-[#121a24] bg-opacity-40 p-2 sm:p-3 rounded-sm mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-1 rounded-sm ${isRecommended ? "bg-[#3d4450]" : "bg-[#3d4450]"}`}>
                {isRecommended ? (
                  <ThumbsUp className="text-[#66c0f4]" size={32} fill="#66c0f4" />
                ) : (
                  <ThumbsDown className="text-[#a34c32]" size={32} fill="#a34c32" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[#d6d7d8] text-lg font-medium leading-none mb-1">
                  {isRecommended ? "Recommended" : "Not Recommended"}
                </span>
                <span className="text-[#8ba2ad] text-xs">
                  {playtimeTotal} on record ({playtimeAtReview} at review time)
                </span>
              </div>
            </div>
            <Star size={16} className="text-[#4c6c7c]" />
          </div>

          {/* Early Access Badge */}
          {data.steamIsEarlyAccess && (
            <div className="inline-block border border-[#4c6c7c] text-[#8ba2ad] text-[10px] sm:text-xs px-1.5 py-0.5 mb-3 rounded-sm font-medium">
              EARLY ACCESS REVIEW
            </div>
          )}

          {/* Date */}
          <div className="text-[#626366] text-[11px] sm:text-xs uppercase mb-3 font-medium">
            Posted: {format(data.date || new Date(), "MMMM d")}
          </div>

          {/* Review Text */}
          <div className="text-[#d6d7d8] text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-wrap">
            {data.content || "I like the concept and a lot of the main ideas here, but many of the mechanics of this game leave a lot to be desired."}
          </div>

          {/* PC Specs Box */}
          {data.steamPcSpecs && (
            <div className="bg-[#2a475e] bg-opacity-30 border-l-2 border-[#67c1f5] p-3 mb-6">
              <div className="text-[#67c1f5] font-bold text-xs mb-2">Reviewer's PC Specs:</div>
              <div className="text-[#8ba2ad] text-xs leading-relaxed whitespace-pre-line">
                {data.steamPcSpecs}
              </div>
            </div>
          )}

          <div className="h-[1px] bg-[#2a475e] w-full mb-4"></div>

          {/* Helpful Question */}
          <div className="mb-4">
            <div className="text-[#626366] text-xs mb-3">Was this review helpful?</div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1 bg-[#212c3d] hover:bg-[#3d4450] text-[#66c0f4] rounded-sm text-xs transition-colors border border-transparent">
                <ThumbsUp size={14} fill="#66c0f4" /> Yes
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1 bg-[#212c3d] hover:bg-[#3d4450] text-[#66c0f4] rounded-sm text-xs transition-colors border border-transparent">
                <ThumbsDown size={14} fill="#66c0f4" /> No
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1 bg-[#212c3d] hover:bg-[#3d4450] text-[#66c0f4] rounded-sm text-xs transition-colors border border-transparent">
                <Smile size={14} /> Funny
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1 bg-[#212c3d] hover:bg-[#3d4450] text-[#ebe2d7] rounded-sm text-xs transition-colors border border-transparent">
                <Award size={14} className="text-[#e5da2d]" /> Award
              </button>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="text-[#626366] text-xs flex flex-wrap items-center gap-4">
            <span>{helpfulCount} people found this review helpful</span>
            {funnyCount > 0 && <span>{funnyCount} people found this review funny</span>}
          </div>

          {/* Awards Icons */}
          {awardCount > 0 && (
            <div className="flex gap-1.5 mt-4">
              {Array.from({ length: awardCount }).map((_, i) => (
                <div key={i} className="w-6 h-6 bg-[#212c3d] rounded-sm flex items-center justify-center border border-[#e5da2d] border-opacity-30">
                  <Award size={12} className="text-[#e5da2d]" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
