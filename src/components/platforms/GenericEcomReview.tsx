import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, CheckCircle, ThumbsUp, MessageCircle, MoreVertical } from "lucide-react";

interface GenericEcomReviewProps {
  data: ReviewData;
}

export const GenericEcomReview = ({ data }: GenericEcomReviewProps) => {
  const platform = data.platform;

  // Branding configurations
  const branding: Record<string, { 
    color: string, 
    badgeText: string, 
    badgeColor: string, 
    secondaryColor: string,
    font: string 
  }> = {
    daraz: { 
      color: "#F68B1E", 
      badgeText: "Verified User", 
      badgeColor: "text-orange-500", 
      secondaryColor: "bg-orange-50",
      font: "font-sans"
    },
    flipkart: { 
      color: "#2874F0", 
      badgeText: "Certified Buyer", 
      badgeColor: "text-gray-500", 
      secondaryColor: "bg-blue-50",
      font: "font-sans"
    },
    ebay: { 
      color: "#E53238", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-gray-500", 
      secondaryColor: "bg-zinc-50",
      font: "font-sans"
    },
    walmart: { 
      color: "#0071CE", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-blue-600", 
      secondaryColor: "bg-sky-50",
      font: "font-sans"
    },
    bestbuy: { 
      color: "#0046BE", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-blue-700", 
      secondaryColor: "bg-yellow-50",
      font: "font-sans"
    },
    etsy: { 
      color: "#F1641E", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-gray-500", 
      secondaryColor: "bg-orange-50",
      font: "font-serif"
    },
    aliexpress: { 
      color: "#E62E04", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-red-600", 
      secondaryColor: "bg-red-50",
      font: "font-sans"
    },
    alibaba: { 
      color: "#FF6600", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-orange-600", 
      secondaryColor: "bg-orange-50",
      font: "font-sans"
    },
    ecommerce: { 
      color: "#FF9900", 
      badgeText: "Verified Purchase", 
      badgeColor: "text-orange-600", 
      secondaryColor: "bg-amber-50",
      font: "font-sans"
    },
  };

  const brand = branding[platform] || branding.ecommerce;

  return (
    <div className={`bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden w-full max-w-2xl mx-auto ${brand.font}`}>
      <div className="p-4 sm:p-6">
        {/* User Info & Rating Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3 items-center">
            <div className="relative">
              <img 
                src={data.avatar} 
                alt={data.name} 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-50 shadow-sm"
              />
              {data.verified && (
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle size={14} fill={brand.color} className="text-white" />
                </div>
              )}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                {data.name}
              </h4>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={14} 
                      fill={star <= data.rating ? brand.color : "none"} 
                      className={star <= data.rating ? "" : "text-gray-200"}
                      style={{ color: star <= data.rating ? brand.color : undefined }}
                    />
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                  {format(data.date, "dd MMM yyyy")}
                </span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Review Title & Content */}
        <div className="space-y-2 mb-4">
          {data.title && (
            <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
              {data.title}
            </h3>
          )}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {data.content}
          </p>
        </div>

        {/* Verification Badge */}
        {data.verified && (
          <div className="flex items-center gap-1.5 mb-4">
            <CheckCircle size={14} className={brand.badgeColor} />
            <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${brand.badgeColor}`}>
              {brand.badgeText}
            </span>
          </div>
        )}

        {/* Review Images */}
        {data.images && data.images.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {data.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`Review ${idx + 1}`} 
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-100 hover:opacity-90 transition-opacity cursor-zoom-in"
              />
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
              <ThumbsUp size={16} />
              <span>Helpful ({data.likes})</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
              <MessageCircle size={16} />
              <span>Comment</span>
            </button>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest">
            {platform.toUpperCase()} REVIEW
          </span>
        </div>
      </div>
    </div>
  );
};
