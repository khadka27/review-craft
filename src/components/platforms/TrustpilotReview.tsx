import { ReviewData } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { Star, ThumbsUp, Flag } from 'lucide-react';

interface TrustpilotReviewProps {
  data: ReviewData;
}

export const TrustpilotReview = ({ data }: TrustpilotReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              className={star <= data.rating ? 'text-green-500 fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {formatDistanceToNow(data.date, { addSuffix: true })}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{data.title}</h3>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-4">{data.content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{data.name}</span>
              {data.verified && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Verified
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">Customer</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">
            <ThumbsUp size={14} />
            <span className="text-sm">Helpful</span>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <Flag size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};