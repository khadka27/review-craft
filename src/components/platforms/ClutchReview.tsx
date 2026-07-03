import { ReviewData } from "@/types/review";
import { 
  Clock, 
  Users, 
  MapPin, 
  Bookmark,
  MessageSquare,
  ChevronDown,
  Globe,
  Wallet,
  Tag
} from "lucide-react";

interface ClutchReviewProps {
  data: ReviewData;
}

export const ClutchReview = ({ data }: ClutchReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));
  
  // Extract initials for the avatar if no custom image is loaded
  const initials = data.title
    ? data.title
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "MD";

  // Parse bottom badges/tags list
  const tags = data.clutchBottomTags && data.clutchBottomTags.length === 4
    ? data.clutchBottomTags
    : [
        "Experienced",
        "Reviewed 6 times in the past 6 months",
        "4.8 out of 5.0 rating for cost",
        "Completed projects in 3 countries"
      ];

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-[#2d3748] font-sans w-full relative">
      {/* Top Right Absolute Ribbon Bookmark */}
      <div className="absolute top-5 right-5 cursor-pointer text-[#e02b20] hover:text-[#b91c1c] transition-colors z-10">
        <Bookmark className="w-5.5 h-5.5 fill-none stroke-[1.5]" />
      </div>

      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-5">
        {/* Left Side: Logo & Main Company Title Info */}
        <div className="flex items-start gap-4 flex-1 pr-4 md:pr-10">
          {data.avatar ? (
            <img 
              src={data.avatar} 
              alt="Company Logo" 
              className="w-14 h-14 rounded-lg object-cover border border-[#E2E8F0] flex-shrink-0 mt-0.5"
            />
          ) : (
            <div className="w-14 h-14 rounded-lg bg-black flex items-center justify-center text-white text-lg font-black flex-shrink-0 mt-0.5">
              {initials}
            </div>
          )}
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
              <h3 className="text-[22px] font-bold text-[#0f172a] tracking-tight leading-snug">
                {data.title || "Company Name"}
              </h3>
              {(data.verified !== false) && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6F7F0] text-[#008557] text-[11px] font-bold tracking-tight shrink-0">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M8 0L1.5 2.5v4.5c0 4 2.8 7.8 6.5 9 3.7-1.2 6.5-5 6.5-9V2.5L8 0zm-1.1 10.7L4 7.8l1-1 1.9 1.9 4.1-4.1 1 1-5.1 5.1z" />
                  </svg>
                  Premier Verified
                </span>
              )}
            </div>

            {/* Rating Stars and Reviews Count */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-bold text-slate-900 leading-none">{data.rating.toFixed(1)}</span>
              <div className="flex text-[#e02b20] gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-base leading-none ${i < safeRating ? 'text-[#e02b20]' : 'text-slate-200'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#0066cc] hover:underline cursor-pointer transition-colors leading-none">
                {data.clutchReviewCount || 33} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Action Buttons (aligned horizontally, offset from ribbon) */}
        <div className="flex items-center gap-2 self-stretch md:self-auto justify-start md:mr-10">
          <button className="px-4 py-2 border border-[#CBD5E1] rounded text-xs font-bold text-[#334155] hover:bg-slate-50 active:bg-slate-100 transition-colors">
            View Profile
          </button>
          <button className="px-4 py-2 bg-[#E02B20] hover:bg-[#c62319] active:bg-[#a51c14] rounded text-xs font-bold text-white transition-colors shadow-sm">
            Visit Website
          </button>
        </div>
      </div>

      {/* Middle Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-4 border-t border-[#F1F5F9] border-b border-[#F1F5F9] mb-5">
        {/* Left Column: Quick Facts (Tag, Hourly Rate, Employees, Location) */}
        <div className="md:col-span-3 space-y-3.5 pr-2">
          <div className="flex items-center gap-3">
            <Tag className="w-4 h-4 text-slate-400 stroke-[1.5] flex-shrink-0" />
            <div className="text-[13px] font-medium text-[#475569]">
              {data.clutchMinProjectSize || "$25,000+"}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-slate-400 stroke-[1.5] flex-shrink-0" />
            <div className="text-[13px] font-medium text-[#475569]">
              {data.clutchAvgHourlyRate || "$50 - $99 / hr"}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-4 h-4 text-slate-400 stroke-[1.5] flex-shrink-0" />
            <div className="text-[13px] font-medium text-[#475569]">
              {data.clutchEmployees || "250 - 999"}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-slate-400 stroke-[1.5] flex-shrink-0" />
            <div className="text-[13px] font-medium text-[#475569]">
              {data.location ? `${data.location.city}, ${data.location.state || data.location.country}` : "Aventura, FL"}
            </div>
          </div>
        </div>

        {/* Center Column: Services Provided (Segmented bar & legend) */}
        <div className="md:col-span-4 border-l border-[#F1F5F9] px-2 md:px-5">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3.5">
            <span>Services Provided</span>
            <span className="w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center text-[8px] text-slate-400 font-bold hover:text-slate-600 hover:border-slate-400 cursor-pointer">i</span>
          </div>
          
          {/* Segmented Progress Bar */}
          <div className="w-full h-2 rounded-full bg-slate-100 flex overflow-hidden mb-4">
            <div className="h-full bg-[#3b82f6] w-[20%]"></div>
            <div className="h-full bg-[#22d3ee] w-[10%]"></div>
            <div className="h-full bg-[#34d399] w-[10%]"></div>
            <div className="h-full bg-[#0f766e] w-[15%]"></div>
            <div className="h-full bg-[#1e3a8a] w-[45%]"></div>
          </div>

          {/* Legend Lists */}
          <div className="space-y-2 text-[13px] text-[#334155]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] shrink-0"></span>
              <span>
                <strong className="text-[#0f172a] font-bold">20%</strong> Mobile App Development
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22d3ee] shrink-0"></span>
              <span>
                <strong className="text-[#0f172a] font-bold">10%</strong> AI Agents
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] shrink-0"></span>
              <span className="flex items-center gap-1.5">
                <span>
                  <strong className="text-[#0f172a] font-bold">10%</strong> AI Consulting
                </span>
                <span className="text-[#0066cc] hover:underline cursor-pointer text-xs font-normal shrink-0">
                  +6 services
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Description & Project Link */}
        <div className="md:col-span-5 flex flex-col justify-between border-l border-[#F1F5F9] pl-2 md:pl-5">
          <p className="text-sm leading-relaxed text-[#475569] font-normal">
            {data.content || "Describe your company profile or insert a client testimonial highlights statement. Our agency is fully praised for its technical expertise, timely delivery, and proactive project communication methods."}
          </p>
          <div className="mt-3">
            <span className="text-xs font-bold text-[#0066cc] hover:underline cursor-pointer flex items-center gap-0.5">
              See all {data.clutchReviewCount || 33} projects &gt;
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row Tags (badging details matching design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Badge 1 */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border border-[#E2E8F0] rounded hover:bg-slate-50 transition-colors cursor-pointer min-h-[42px]">
          <div className="flex items-center gap-2 text-[11px] text-[#334155] font-semibold leading-tight">
            <MessageSquare className="w-3.5 h-3.5 text-slate-500 stroke-[1.5] shrink-0" />
            <span>{tags[0]}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
        </div>

        {/* Badge 2 */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border border-[#E2E8F0] rounded hover:bg-slate-50 transition-colors cursor-pointer min-h-[42px]">
          <div className="flex items-center gap-2 text-[11px] text-[#334155] font-semibold leading-tight">
            <div className="w-3.5 h-3.5 rounded border border-slate-350 flex items-center justify-center text-[9px] text-slate-500 font-bold leading-none shrink-0">
              ★
            </div>
            <span>{tags[1]}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
        </div>

        {/* Badge 3 */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border border-[#E2E8F0] rounded hover:bg-slate-50 transition-colors cursor-pointer min-h-[42px]">
          <div className="flex items-center gap-2 text-[11px] text-[#334155] font-semibold leading-tight">
            <Wallet className="w-3.5 h-3.5 text-slate-500 stroke-[1.5] shrink-0" />
            <span>{tags[2]}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
        </div>

        {/* Badge 4 */}
        <div className="flex items-center justify-between px-3 py-2 bg-white border border-[#E2E8F0] rounded hover:bg-slate-50 transition-colors cursor-pointer min-h-[42px]">
          <div className="flex items-center gap-2 text-[11px] text-[#334155] font-semibold leading-tight">
            <Globe className="w-3.5 h-3.5 text-slate-500 stroke-[1.5] shrink-0" />
            <span>{tags[3]}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
        </div>
      </div>
    </div>
  );
};
