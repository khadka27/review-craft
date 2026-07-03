import { ReviewData } from "@/types/review";
import { CheckCircle, Building2, ThumbsUp } from "lucide-react";

interface CapterraReviewProps {
  data: ReviewData;
}

const SubScore = ({ label, score }: { label: string; score: number }) => (
  <div className="flex items-center gap-3">
    <div className="text-[12px] text-[#555] w-24 shrink-0">{label}</div>
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-sm"
          style={{ backgroundColor: i < Math.round(score) ? "#055AEF" : "#e0e0e0" }}
        />
      ))}
    </div>
    <div className="text-[13px] font-bold text-[#1a1a1a]">{score.toFixed(1)}</div>
  </div>
);

export const CapterraReview = ({ data }: CapterraReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, data.rating || 4.5));
  const valueScore = Math.min(5, safeRating - 0.1);
  const featuresScore = Math.min(5, safeRating + 0.1);
  const supportScore = Math.min(5, safeRating);
  const easeScore = Math.min(5, safeRating - 0.2);

  const category = data.b2bCategory || "Project Management Software";
  const companySize = data.b2bCompanySize || "Small Business (1-50 employees)";
  const industry = data.b2bIndustry || "Marketing & Advertising";
  const pros = data.b2bPros || "Very easy to onboard new team members. The dashboard gives a clear overview and integrations work seamlessly.";
  const cons = data.b2bCons || "Mobile app could use improvement. Some reporting features feel limited compared to desktop version.";

  return (
    <div className="bg-white border border-[#e0e0e0] rounded-lg font-sans w-full overflow-hidden shadow-sm">
      {/* Capterra Header */}
      <div className="bg-[#055AEF] px-5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-white font-black text-base tracking-tight">Capterra</div>
          <div className="w-px h-5 bg-white/30" />
          <div className="text-white text-[11px] font-semibold">Software Reviews</div>
        </div>
        <div className="text-white text-[11px] font-semibold opacity-80">
          {data.b2bUsersCount?.toLocaleString() || "1,847"} reviews
        </div>
      </div>

      <div className="p-5">
        {/* Software + Rating Header */}
        <div className="flex items-start gap-4 mb-4">
          {data.avatar ? (
            <img src={data.avatar} alt="Software" className="w-12 h-12 object-contain border border-[#eee] rounded-lg flex-shrink-0" />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-[#055AEF] to-[#2979FF] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm">{(data.title || "So").slice(0, 2).toUpperCase()}</span>
            </div>
          )}
          <div>
            <h2 className="text-[17px] font-bold text-[#1a1a1a] leading-snug">{data.title || "Software Name"}</h2>
            <div className="text-[12px] text-[#666] mt-0.5">{category}</div>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#eee]">
          <div className="text-4xl font-black text-[#055AEF]">{safeRating.toFixed(1)}</div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-lg ${i < Math.round(safeRating) ? "text-[#055AEF]" : "text-[#ddd]"}`}>★</span>
              ))}
            </div>
            <div className="text-[11px] text-[#888]">Overall rating</div>
          </div>
        </div>

        {/* Sub Scores */}
        <div className="space-y-2 mb-4 pb-4 border-b border-[#eee]">
          <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-2">Score Breakdown</div>
          <SubScore label="Ease of Use" score={easeScore} />
          <SubScore label="Value" score={valueScore} />
          <SubScore label="Features" score={featuresScore} />
          <SubScore label="Support" score={supportScore} />
        </div>

        {/* Reviewer */}
        <div className="flex items-center gap-3 mb-4">
          {data.avatar ? (
            <img src={data.avatar} alt={data.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-9 h-9 rounded-full bg-[#055AEF]/10 flex items-center justify-center text-[#055AEF] font-bold text-sm flex-shrink-0">
              {data.name ? data.name[0].toUpperCase() : "U"}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[13px] font-bold text-[#1a1a1a]">{data.name}</span>
              {data.verified && (
                <span className="flex items-center gap-0.5 text-[10px] text-[#2e7d32] font-semibold bg-[#e8f5e9] px-1.5 py-0.5 rounded">
                  <CheckCircle className="w-2.5 h-2.5" />
                  Verified Reviewer
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap mt-0.5">
              <span className="flex items-center gap-1 text-[11px] text-[#666]">
                <Building2 className="w-3 h-3" />
                {companySize}
              </span>
              <span className="text-[#ccc]">•</span>
              <span className="text-[11px] text-[#666]">{industry}</span>
            </div>
          </div>
          <div className="text-[11px] text-[#999] ml-auto shrink-0">
            {new Date(data.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="space-y-3 mb-4">
          <div>
            <div className="text-[11px] font-bold text-[#2e7d32] uppercase tracking-wider mb-1">✓ Pros</div>
            <p className="text-[13px] text-[#444] leading-relaxed">{pros}</p>
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#c62828] uppercase tracking-wider mb-1">✗ Cons</div>
            <p className="text-[13px] text-[#444] leading-relaxed">{cons}</p>
          </div>
        </div>

        {/* Main Review */}
        <div className="mb-4 pb-4 border-b border-[#eee]">
          <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1.5">Overall Experience</div>
          <p className="text-[13px] text-[#444] leading-relaxed">{data.content}</p>
        </div>

        <div className="flex items-center gap-2 text-[12px] text-[#888]">
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{data.likes || 8} people found this review helpful</span>
        </div>
      </div>
    </div>
  );
};
