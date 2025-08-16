import { ReviewData } from '@/types/review';
import { format } from 'date-fns';
import { Star, ThumbsUp, ThumbsDown, Flag } from 'lucide-react';

interface AmazonReviewProps {
  data: ReviewData;
}

export const AmazonReview = ({ data }: AmazonReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-900">{data.username}</span>
            {data.verified && (
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                Verified Purchase
              </span>
            )}
          </div>
          <div className="text-sm text-gray-600">
            Reviewed in the United States on {format(data.date, 'MMMM d, yyyy')}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={star <= data.rating ? 'text-orange-400 fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="font-bold text-gray-900">{data.title}</span>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{data.content}</p>
      </div>

      {/* Images indicator */}
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
        <div className="flex gap-1">
          <div className="w-12 h-12 bg-gray-200 rounded border"></div>
          <div className="w-12 h-12 bg-gray-200 rounded border"></div>
        </div>
      </div>

      {/* Helpful section */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {data.likes} people found this helpful
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <ThumbsUp size={14} />
            Helpful
          </button>
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <Flag size={14} />
            Report
          </button>
        </div>
      </div>
    </div>
  );
};