import { ReviewData } from "@/types/review";
import { MapPin, Wrench, DollarSign, Calendar, CheckCircle } from "lucide-react";

interface AngiReviewProps {
  data: ReviewData;
}

const GRADE_META: Record<string, { color: string; bg: string; label: string }> = {
  A: { color: "#1b5e20", bg: "#e8f5e9", label: "Excellent" },
  B: { color: "#1565c0", bg: "#e3f2fd", label: "Good" },
  C: { color: "#f57f17", bg: "#fff8e1", label: "Average" },
  D: { color: "#e65100", bg: "#fff3e0", label: "Poor" },
  F: { color: "#b71c1c", bg: "#ffebee", label: "Unsatisfactory" },
};

export const AngiReview = ({ data }: AngiReviewProps) => {
  const grade = data.angiGrade || "A";
  const gradeMeta = GRADE_META[grade] || GRADE_META["A"];
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const serviceCategory = data.angiServiceCategory || "General Contractor";
  const costPaid = data.angiCostPaid || "$1,500 - $3,000";
  const dateOfService = data.angiDateOfService ||
    new Date(data.date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const location = data.location
    ? `${data.location.city}, ${data.location.state}`
    : "Nashville, TN";

  return (
    <div className="bg-white border border-[#e8e8e8] rounded-lg font-sans w-full overflow-hidden shadow-sm">
      {/* Angi Header */}
      <div className="px-5 py-3 flex items-center justify-between" style={{ background: "linear-gradient(90deg, #FF6B35 0%, #e85520 100%)" }}>
        <div className="flex items-center gap-2">
          {/* Angi wordmark */}
          <div className="text-white font-black text-xl tracking-tight italic">Angi</div>
          <div className="w-px h-5 bg-white/30" />
          <div className="text-white text-[11px] font-semibold">Home Services Reviews</div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/15 border border-white/25 rounded px-2 py-1">
          <CheckCircle className="w-3 h-3 text-white" />
          <span className="text-[10px] font-bold text-white">Verified Review</span>
        </div>
      </div>

      <div className="p-5">
        {/* Service Provider Row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            {data.avatar ? (
              <img src={data.avatar} alt="Provider" className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B35]/20 flex-shrink-0" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-[#FF6B35]/10 border-2 border-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-[#FF6B35]" />
              </div>
            )}
            <div>
              <h2 className="text-[17px] font-bold text-[#1a1a1a] leading-snug">{data.title || "Service Provider"}</h2>
              <div className="flex items-center gap-1 text-[12px] text-[#666] mt-0.5">
                <Wrench className="w-3 h-3 text-[#FF6B35]" />
                {serviceCategory}
              </div>
              <div className="flex items-center gap-1 text-[12px] text-[#666] mt-0.5">
                <MapPin className="w-3 h-3 text-[#FF6B35]" />
                {location}
              </div>
            </div>
          </div>

          {/* Grade Badge */}
          <div className="shrink-0 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black border-3 border-current"
              style={{ color: gradeMeta.color, backgroundColor: gradeMeta.bg, border: `3px solid ${gradeMeta.color}` }}
            >
              {grade}
            </div>
            <div className="text-[10px] font-semibold mt-1" style={{ color: gradeMeta.color }}>{gradeMeta.label}</div>
          </div>
        </div>

        {/* Star Rating Row */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-[#FF6B35]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-lg ${i < safeRating ? "text-[#FF6B35]" : "text-[#ddd]"}`}>★</span>
            ))}
          </div>
          <span className="text-[15px] font-bold text-[#1a1a1a]">{data.rating.toFixed(1)}</span>
          <span className="text-[12px] text-[#888]">overall</span>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-[#fafafa] border border-[#eee] rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
            <div>
              <div className="text-[10px] text-[#888] font-semibold uppercase">Date of Service</div>
              <div className="text-[12px] font-bold text-[#1a1a1a]">{dateOfService}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
            <div>
              <div className="text-[10px] text-[#888] font-semibold uppercase">Cost Paid</div>
              <div className="text-[12px] font-bold text-[#1a1a1a]">{costPaid}</div>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="mb-4">
          {data.title && (
            <div className="text-[14px] font-bold text-[#1a1a1a] mb-2">"{data.title}"</div>
          )}
          <p className="text-[13px] text-[#444] leading-relaxed">{data.content}</p>
        </div>

        {/* Reviewer Attribution */}
        <div className="flex items-center gap-2 pt-4 border-t border-[#f0f0f0]">
          {data.avatar ? (
            <img src={data.avatar} alt={data.name} className="w-7 h-7 rounded-full object-cover" />
          ) : (
            <div className="w-7 h-7 rounded-full bg-[#FF6B35]/15 flex items-center justify-center text-[#FF6B35] font-bold text-xs">
              {data.name ? data.name[0].toUpperCase() : "U"}
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[12px] font-bold text-[#1a1a1a]">{data.name}</span>
              {data.verified && (
                <span className="flex items-center gap-0.5 text-[10px] text-[#2e7d32] bg-[#e8f5e9] px-1.5 py-0.5 rounded font-semibold">
                  <CheckCircle className="w-2.5 h-2.5" />
                  Verified
                </span>
              )}
            </div>
            <div className="text-[11px] text-[#888]">{location}</div>
          </div>
          <div className="text-[11px] text-[#999] shrink-0">
            {new Date(data.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </div>
    </div>
  );
};
