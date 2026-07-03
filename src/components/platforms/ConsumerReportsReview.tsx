import { ReviewData } from "@/types/review";
import { CheckCircle, XCircle, Lock, Star } from "lucide-react";

interface ConsumerReportsReviewProps {
  data: ReviewData;
}

const ScoreBar = ({ label, score, color }: { label: string; score: number; color: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-[12px] text-[#444] w-28 shrink-0 font-medium">{label}</div>
    <div className="flex-1 bg-[#e8e8e8] rounded-full h-2.5 overflow-hidden">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${score}%`, backgroundColor: color }}
      />
    </div>
    <div className="text-[13px] font-bold text-[#222] w-8 text-right shrink-0">{score}</div>
  </div>
);

export const ConsumerReportsReview = ({ data }: ConsumerReportsReviewProps) => {
  const overallScore = Math.round(data.rating * 20); // 5★ → 100
  const isRecommended = overallScore >= 68;

  // Derive sub-scores from overall (with slight variation)
  const perfScore  = Math.min(100, overallScore + Math.floor(Math.random() * 6) - 3);
  const relScore   = Math.min(100, overallScore - 2);
  const ownerScore = Math.min(100, overallScore + 1);

  const category = data.b2bCategory || "Electronics";

  return (
    <div className="bg-white border border-[#ddd] font-sans w-full overflow-hidden" style={{ fontFamily: "'Georgia', serif" }}>
      {/* CR Header */}
      <div className="bg-[#C8102E] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-white font-black text-base tracking-tight uppercase leading-none">
            Consumer<br />Reports
          </div>
          <div className="w-px h-8 bg-white/30" />
          <div className="text-white text-[11px] font-semibold leading-tight uppercase tracking-wider">
            Independent<br />Testing & Ratings
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded px-2 py-1">
          <Lock className="w-3 h-3 text-white opacity-70" />
          <span className="text-[10px] font-bold text-white">Member Rating</span>
        </div>
      </div>

      <div className="p-5">
        {/* Product Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            {data.avatar ? (
              <img src={data.avatar} alt="Product" className="w-16 h-16 object-contain border border-[#eee] rounded flex-shrink-0" />
            ) : (
              <div className="w-16 h-16 bg-[#f5f5f5] border border-[#ddd] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📦</span>
              </div>
            )}
            <div>
              <div className="text-[11px] font-bold text-[#C8102E] uppercase tracking-wider mb-1">{category}</div>
              <h2 className="text-[18px] font-bold text-[#1a1a1a] leading-snug">{data.title || "Product Name"}</h2>
              <div className="text-[12px] text-[#666] mt-1">Tested & Rated by {data.b2bUsersCount?.toLocaleString() || "2,847"} members</div>
            </div>
          </div>

          {/* Overall Score Circle */}
          <div className="flex-shrink-0 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black border-4"
              style={{
                borderColor: overallScore >= 80 ? "#006600" : overallScore >= 60 ? "#f39c12" : "#C8102E",
                color: overallScore >= 80 ? "#006600" : overallScore >= 60 ? "#f39c12" : "#C8102E",
                backgroundColor: "#fff",
              }}
            >
              {overallScore}
            </div>
            <div className="text-[10px] text-[#666] mt-1 font-bold uppercase tracking-wide">Overall Score</div>
          </div>
        </div>

        {/* Recommended Badge */}
        <div className={`flex items-center gap-2 px-4 py-2.5 rounded mb-5 ${isRecommended ? "bg-[#e8f5e9] border border-[#a5d6a7]" : "bg-[#ffebee] border border-[#ef9a9a]"}`}>
          {isRecommended ? (
            <CheckCircle className="w-5 h-5 text-[#2e7d32] shrink-0" />
          ) : (
            <XCircle className="w-5 h-5 text-[#c62828] shrink-0" />
          )}
          <div>
            <div className={`text-[13px] font-bold ${isRecommended ? "text-[#2e7d32]" : "text-[#c62828]"}`}>
              {isRecommended ? "✓ Consumer Reports Recommended" : "Not Recommended"}
            </div>
            <div className="text-[11px] text-[#666]">
              {isRecommended ? "Meets our standards for performance and reliability" : "Did not meet our minimum performance standards"}
            </div>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="mb-5">
          <div className="text-[12px] font-bold text-[#888] uppercase tracking-wider mb-3">Score Breakdown</div>
          <div className="space-y-2.5">
            <ScoreBar label="Performance" score={perfScore} color="#C8102E" />
            <ScoreBar label="Reliability" score={relScore} color="#C8102E" />
            <ScoreBar label="Owner Satisfaction" score={ownerScore} color="#C8102E" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#eee] my-4" />

        {/* Member Review */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-3.5 h-3.5 fill-[#C8102E] text-[#C8102E]" />
            <span className="text-[12px] font-bold text-[#C8102E] uppercase tracking-wide">Member Review</span>
            <span className="text-[12px] text-[#888] ml-auto">
              {new Date(data.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </span>
          </div>
          <p className="text-[13px] text-[#444] leading-relaxed italic">
            "{data.content}"
          </p>
          <div className="text-[12px] text-[#888] mt-2">— {data.name}</div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#eee] text-[11px] text-[#999]">
          Consumer Reports is an independent, non-profit member organization. Results are based on lab tests and member surveys.
        </div>
      </div>
    </div>
  );
};
