import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

interface PlaystoreReviewProps {
  data: ReviewData;
}

export const PlaystoreReview = ({ data }: PlaystoreReviewProps) => {
  return (
    <div className="bg-white text-gray-900 rounded-lg p-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">?</span>
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-900">{data.username}</span>
            {data.verified && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                Verified
              </span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {formatDistanceToNow(data.date, { addSuffix: true })}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={
                star <= data.rating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* Title */}
      {data.title && (
        <h3 className="text-base font-bold text-gray-900 mb-2">{data.title}</h3>
      )}

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed text-sm">{data.content}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
            <ThumbsUp size={16} />
            <span className="text-xs">Helpful</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
            <ThumbsDown size={16} />
          </button>
        </div>
        {data.likes > 0 && (
          <span className="text-xs text-gray-500 ml-auto">
            {data.likes} people found this helpful
          </span>
        )}
      </div>
    </div>
  );
};
