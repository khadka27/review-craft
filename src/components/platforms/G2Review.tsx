import { ReviewData } from "@/types/review";
import { ThumbsUp, Building2, CheckCircle } from "lucide-react";

interface G2ReviewProps {
  data: ReviewData;
}

const BADGE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  Leader:            { bg: "#FF492C", text: "#fff", label: "Leader" },
  "High Performer":  { bg: "#FF492C", text: "#fff", label: "High Performer" },
  "Momentum Leader": { bg: "#FF492C", text: "#fff", label: "Momentum Leader" },
  "Best Support":    { bg: "#FF492C", text: "#fff", label: "Best Support" },
  "Easy to Use":     { bg: "#FF492C", text: "#fff", label: "Easy to Use" },
};

export const G2Review = ({ data }: G2ReviewProps) => {
  const safeRating = Math.max(0, Math.min(5, data.rating || 4.5));
  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating - fullStars >= 0.5;
  const badge = data.b2bBadge || "Leader";
  const badgeStyle = BADGE_STYLES[badge] || BADGE_STYLES["Leader"];
  const category = data.b2bCategory || "CRM Software";
  const companySize = data.b2bCompanySize || "Mid-Market (51-1000 emp.)";
  const industry = data.b2bIndustry || "Information Technology";
  const pros = data.b2bPros || "Intuitive interface, excellent customer support, seamless integrations with existing tools.";
  const cons = data.b2bCons || "Pricing can be steep for smaller teams. Some advanced features have a learning curve.";
  const usersCount = data.b2bUsersCount?.toLocaleString() || "4,312";

  return (
    <div className="bg-white border border-[#e0e0e0] rounded-lg font-sans w-full overflow-hidden shadow-sm">
      {/* G2 Header Bar */}
      <div className="bg-[#FF492C] px-5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-white font-black text-lg tracking-tight leading-none">G2</div>
          <div className="w-px h-5 bg-white/30" />
          <div className="text-white text-[11px] font-semibold">Business Software Reviews</div>
        </div>
        <div className="text-white text-[11px] font-semibold opacity-80">{usersCount} reviews</div>
      </div>

      <div className="p-5">
        {/* Product + Badge Row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            {data.avatar ? (
              <img src={data.avatar} alt="Software" className="w-12 h-12 object-contain border border-[#eee] rounded-lg flex-shrink-0" />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF492C] to-[#FF6B50] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-base">{(data.title || "So").slice(0, 2).toUpperCase()}</span>
              </div>
            )}
            <div>
              <h2 className="text-[17px] font-bold text-[#1a1a1a] leading-snug">{data.title || "Software Name"}</h2>
              <div className="text-[12px] text-[#666] mt-0.5">{category}</div>
            </div>
          </div>

          {/* Badge */}
          <div
            className="shrink-0 px-3 py-1.5 rounded text-[11px] font-black uppercase tracking-wide border-2"
            style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text, borderColor: badgeStyle.bg }}
          >
            {badgeStyle.label}
          </div>
        </div>

        {/* Stars + Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = i < fullStars;
              const half = !filled && i === fullStars && halfStar;
              return (
                <span
                  key={i}
                  className="text-lg leading-none"
                  style={{ color: filled || half ? "#FF492C" : "#ddd" }}
                >
                  {half ? "☆" : "★"}
                </span>
              );
            })}
          </div>
          <span className="text-[15px] font-black text-[#1a1a1a]">{safeRating.toFixed(1)}</span>
          <span className="text-[12px] text-[#888]">out of 5</span>
        </div>

        {/* Reviewer Info */}
        <div className="flex items-center gap-3 bg-[#fafafa] border border-[#eee] rounded-lg px-4 py-3 mb-4">
          {data.avatar ? (
            <img src={data.avatar} alt={data.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#FF492C]/10 flex items-center justify-center text-[#FF492C] font-bold text-sm flex-shrink-0">
              {data.name ? data.name[0].toUpperCase() : "U"}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[13px] font-bold text-[#1a1a1a]">{data.name}</span>
              {data.verified && (
                <span className="flex items-center gap-0.5 text-[10px] text-[#2e7d32] font-semibold bg-[#e8f5e9] px-1.5 py-0.5 rounded">
                  <CheckCircle className="w-2.5 h-2.5" />
                  Verified Buyer
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
          <div className="text-[11px] text-[#999] shrink-0">
            {new Date(data.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </div>
        </div>

        {/* Review Title */}
        {data.title && (
          <div className="text-[14px] font-bold text-[#1a1a1a] mb-3">"{data.title}"</div>
        )}

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-[#f0faf0] border border-[#c8e6c9] rounded-lg p-3">
            <div className="text-[11px] font-bold text-[#2e7d32] uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <span className="text-base">👍</span> What do you like best?
            </div>
            <p className="text-[12px] text-[#333] leading-relaxed">{pros}</p>
          </div>
          <div className="bg-[#fff8f5] border border-[#ffccbc] rounded-lg p-3">
            <div className="text-[11px] font-bold text-[#bf360c] uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <span className="text-base">👎</span> What do you dislike?
            </div>
            <p className="text-[12px] text-[#333] leading-relaxed">{cons}</p>
          </div>
        </div>

        {/* Main review body */}
        <div className="mb-4">
          <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1.5">Overall Review</div>
          <p className="text-[13px] text-[#444] leading-relaxed">{data.content}</p>
        </div>

        {/* Helpful */}
        <div className="flex items-center gap-2 pt-4 border-t border-[#f0f0f0] text-[12px] text-[#888]">
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{data.likes || 12} people found this helpful</span>
        </div>
      </div>
    </div>
  );
};
