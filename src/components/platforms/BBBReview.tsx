import { ReviewData } from "@/types/review";
import { MapPin, Phone, ExternalLink, Shield, Star, AlertCircle, CheckCircle } from "lucide-react";

interface BBBReviewProps {
  data: ReviewData;
}

const GRADE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "A+": { bg: "#003087", text: "#fff", border: "#003087" },
  "A":  { bg: "#003087", text: "#fff", border: "#003087" },
  "B+": { bg: "#1a5276", text: "#fff", border: "#1a5276" },
  "B":  { bg: "#1a5276", text: "#fff", border: "#1a5276" },
  "C+": { bg: "#f39c12", text: "#fff", border: "#f39c12" },
  "C":  { bg: "#f39c12", text: "#fff", border: "#f39c12" },
  "D+": { bg: "#e67e22", text: "#fff", border: "#e67e22" },
  "D":  { bg: "#e67e22", text: "#fff", border: "#e67e22" },
  "F":  { bg: "#c0392b", text: "#fff", border: "#c0392b" },
};

export const BBBReview = ({ data }: BBBReviewProps) => {
  const grade = data.bbbRating || "A+";
  const gradeStyle = GRADE_COLORS[grade] || GRADE_COLORS["A+"];
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  const years = data.bbbYearsInBusiness ?? 12;
  const complaints = data.bbbComplaintsCount ?? 3;
  const accredited = data.bbbAccredited !== false;
  const category = data.bbbCategory || "Software Development";
  const location = data.location ? `${data.location.city}, ${data.location.state}` : "Austin, TX";

  return (
    <div className="bg-white border border-[#dde3ea] rounded-sm font-sans w-full overflow-hidden" style={{ fontFamily: "'Arial', sans-serif" }}>
      {/* BBB Header Banner */}
      <div className="bg-[#003087] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* BBB Logo Text */}
          <div className="text-white font-black text-xl tracking-tight leading-none">BBB</div>
          <div className="w-px h-6 bg-white/30" />
          <div className="text-white text-xs font-semibold leading-tight">
            Better Business Bureau<br />
            <span className="font-normal opacity-80">Accredited Business Profile</span>
          </div>
        </div>
        {accredited && (
          <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded px-2 py-1">
            <Shield className="w-3.5 h-3.5 text-[#f9c023]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">BBB Accredited</span>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Company Row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            {/* Avatar / Logo */}
            {data.avatar ? (
              <img src={data.avatar} alt="Company" className="w-16 h-16 rounded border border-[#dde3ea] object-cover flex-shrink-0" />
            ) : (
              <div className="w-16 h-16 rounded border border-[#dde3ea] flex items-center justify-center bg-slate-100 flex-shrink-0">
                <span className="text-xl font-black text-[#003087]">
                  {(data.title || "Co").slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            <div>
              <h2 className="text-[18px] font-bold text-[#003087] leading-snug hover:underline cursor-pointer">
                {data.title || "Business Name"}
              </h2>
              <div className="text-[13px] text-[#555] mt-0.5">{category}</div>
              <div className="flex items-center gap-1 mt-1 text-[12px] text-[#666]">
                <MapPin className="w-3 h-3" />
                {location}
              </div>
            </div>
          </div>

          {/* Grade Badge */}
          <div className="flex-shrink-0 text-center">
            <div
              className="w-16 h-16 rounded flex items-center justify-center text-3xl font-black"
              style={{ backgroundColor: gradeStyle.bg, color: gradeStyle.text }}
            >
              {grade}
            </div>
            <div className="text-[10px] text-[#666] mt-1 font-semibold uppercase tracking-wide">BBB Rating</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#eee] my-4" />

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-[11px] text-[#888] uppercase tracking-wide font-semibold mb-1">Customer Reviews</div>
            <div className="flex justify-center text-[#003087] mb-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-sm ${i < safeRating ? "text-[#003087]" : "text-[#ddd]"}`}>★</span>
              ))}
            </div>
            <div className="text-[13px] font-bold text-[#003087]">{data.rating.toFixed(1)} / 5</div>
          </div>
          <div className="text-center border-x border-[#eee]">
            <div className="text-[11px] text-[#888] uppercase tracking-wide font-semibold mb-1">Years in Business</div>
            <div className="text-2xl font-black text-[#003087]">{years}</div>
            <div className="text-[11px] text-[#888]">years</div>
          </div>
          <div className="text-center">
            <div className="text-[11px] text-[#888] uppercase tracking-wide font-semibold mb-1">Complaints</div>
            <div className="text-2xl font-black text-[#003087]">{complaints}</div>
            <div className="text-[11px] text-[#888]">last 3 years</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#eee] my-4" />

        {/* Review Body */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            {data.verified ? (
              <CheckCircle className="w-4 h-4 text-[#003087]" />
            ) : (
              <AlertCircle className="w-4 h-4 text-slate-400" />
            )}
            <span className="text-[12px] font-bold text-[#003087]">
              {data.verified ? "Verified Customer Review" : "Customer Review"}
            </span>
            <span className="text-[12px] text-[#888] ml-auto">
              {new Date(data.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
            </span>
          </div>
          {data.title && (
            <div className="text-[14px] font-bold text-[#1a1a1a] mb-1">"{data.title}"</div>
          )}
          <p className="text-[13px] text-[#444] leading-relaxed">{data.content}</p>
          <div className="text-[12px] text-[#888] mt-2 font-medium">— {data.name}</div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#eee]">
          <div className="flex items-center gap-1.5 text-[11px] text-[#888]">
            <Phone className="w-3 h-3" />
            <span>Contact Business</span>
          </div>
          <button className="flex items-center gap-1 text-[11px] font-bold text-white bg-[#003087] hover:bg-[#002070] px-3 py-1.5 rounded transition-colors">
            <ExternalLink className="w-3 h-3" />
            View BBB Profile
          </button>
        </div>
      </div>
    </div>
  );
};
