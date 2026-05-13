import { ReviewData } from "@/types/review";
import { Star, Info, ChevronRight } from "lucide-react";

interface GoogleReviewSummaryProps {
  data: ReviewData;
}

export const GoogleReviewSummary = ({ data }: GoogleReviewSummaryProps) => {
  const rating = data.rating || 4.7;
  const reviewCount = data.likes || 3322; // Using likes as review count for now or a default
  
  // Mock histogram data based on rating
  const histogram = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full max-w-md mx-auto font-sans text-gray-900">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Star size={16} className="text-blue-600 fill-blue-600" />
          </div>
          <span className="font-medium text-lg">{rating}</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={14}
                className={s <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">· {reviewCount.toLocaleString()} Reviews</span>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

      {/* Content Text */}
      <p className="text-sm text-gray-700 mb-8 line-clamp-2">
        {data.content || "Large freshwater lake offers scenic mountain views, nature trails & an iconic Hindu temple."}
      </p>

      {/* Summary Heading */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Google review summary</h3>
        <Info size={16} className="text-gray-400" />
      </div>

      {/* Histogram and Big Rating */}
      <div className="flex items-center gap-8 mb-8">
        {/* Histogram */}
        <div className="flex-1 space-y-1">
          {histogram.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <span className="text-xs font-medium w-2">{item.stars}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Big Rating */}
        <div className="text-center">
          <div className="text-6xl font-normal leading-tight">{rating.toFixed(1)}</div>
          <div className="flex justify-center gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={12}
                className={s <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}
              />
            ))}
          </div>
          <div className="text-xs text-gray-500">({reviewCount.toLocaleString()})</div>
        </div>
      </div>

      {/* Footer Button */}
      <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center gap-2 font-medium text-sm">
        More Google reviews
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

