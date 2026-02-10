import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { Star, ThumbsUp, ThumbsDown, Play } from "lucide-react";

interface NetflixReviewProps {
  data: ReviewData;
}

export const NetflixReview = ({ data }: NetflixReviewProps) => {
  return (
    <div className="bg-black text-white rounded-lg p-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {data.avatar ? (
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-white text-xs">?</span>
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white">{data.username}</span>
            {data.verified && (
              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                Top Reviewer
              </span>
            )}
          </div>
          <div className="text-sm text-gray-400">
            {formatDistanceToNow(data.date, { addSuffix: true })}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className={
                star <= data.rating
                  ? "text-red-500 fill-current"
                  : "text-gray-600"
              }
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">({data.rating}/5)</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-3">{data.title}</h3>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-300 leading-relaxed">{data.content}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ThumbsUp size={16} />
          <span className="text-sm">{data.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ThumbsDown size={16} />
        </button>
        <span className="text-sm text-gray-500 ml-auto">
          {data.replies} responses
        </span>
      </div>
    </div>
  );
};
