import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, Building, MapPin, ThumbsUp, Flag } from "lucide-react";

interface AlibabaReviewProps {
  data: ReviewData;
}

export const AlibabaReview = ({ data }: AlibabaReviewProps) => {
  const safeRating = Math.max(1, Math.min(5, Math.round(data.rating || 5)));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0 border border-orange-200"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 border border-orange-200">
            <Building size={20} className="text-white" />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">
              {data.name}
            </h3>
            <div className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">
              Gold Supplier
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
            <MapPin size={14} />
            <span>{data.location?.city || "Guangzhou"}, {data.location?.country || "China"}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={`${
                    star <= safeRating
                      ? "text-orange-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {format(data.date, "yyyy-MM-dd")}
            </span>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base break-words">
          {data.content}
        </p>
      </div>

      {/* Trade Details */}
      <div className="bg-orange-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-orange-800 font-medium">Order Quantity:</span>
            <div className="text-orange-900">{Math.floor(Math.random() * 1000) + 100} pieces</div>
          </div>
          <div>
            <span className="text-orange-800 font-medium">Trade Type:</span>
            <div className="text-orange-900">FOB</div>
          </div>
          <div>
            <span className="text-orange-800 font-medium">Payment Terms:</span>
            <div className="text-orange-900">T/T, L/C</div>
          </div>
          <div>
            <span className="text-orange-800 font-medium">Delivery Time:</span>
            <div className="text-orange-900">{Math.floor(Math.random() * 20) + 7} days</div>
          </div>
        </div>
      </div>

      {/* Product Specification */}
      {data.productVariation && (
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-gray-700">
            <span className="font-medium">Product Specification:</span> {data.productVariation}
          </div>
        </div>
      )}

      {/* Review Images */}
      {data.images && data.images.length > 0 && (
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product sample ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0 border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Supplier Rating */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-3 gap-3 text-sm text-center">
          <div>
            <div className="font-semibold text-gray-900">{safeRating}.0</div>
            <div className="text-gray-600">Product Quality</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{(safeRating - 0.2).toFixed(1)}</div>
            <div className="text-gray-600">Communication</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{(safeRating + 0.1).toFixed(1)}</div>
            <div className="text-gray-600">Delivery</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
            <ThumbsUp size={14} />
            <span>Helpful ({data.likes})</span>
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <Flag size={14} />
            <span>Report</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Trade completed {format(data.date, "MMM yyyy")}
        </div>
      </div>
    </div>
  );
};