import { ReviewData } from "@/types/review";
import { format } from "date-fns";
import { Star, ThumbsUp, Flag, ExternalLink } from "lucide-react";

interface ImdbReviewProps {
  data: ReviewData;
}

export const ImdbReview = ({ data }: ImdbReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded p-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
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
            <span className="font-bold text-lg text-gray-900">
              {data.rating}/10
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{data.title}</h3>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">
            by <span className="font-semibold">{data.username}</span>
          </div>
          <div className="text-sm text-gray-500">
            {format(data.date, "MMMM d, yyyy")}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">{data.content}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
            <ThumbsUp size={16} />
            <span className="text-sm">{data.likes} found this helpful</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <Flag size={14} />
            Report
          </button>
          <button className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-black rounded text-sm font-medium hover:bg-yellow-500 transition-colors">
            <ExternalLink size={14} />
            View on IMDb
          </button>
        </div>
      </div>

      {/* User info */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{data.username}</span>
              {data.verified && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Top Reviewer
                </span>
              )}
            </div>
            <div className="text-sm text-gray-600">
              {Math.floor(Math.random() * 500 + 50)} reviews •{" "}
              {Math.floor(Math.random() * 1000 + 100)} helpful votes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
