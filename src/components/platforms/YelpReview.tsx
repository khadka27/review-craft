import { ReviewData } from '@/types/review';
import { format } from 'date-fns';
import { Star, Camera, ThumbsUp, Flag, MessageCircle } from 'lucide-react';

interface YelpReviewProps {
  data: ReviewData;
}

export const YelpReview = ({ data }: YelpReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-900">{data.name}</span>
            {data.verified && (
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                Elite
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>📍 Local Guide</span>
            <span>•</span>
            <span>125 reviews</span>
            <span>•</span>
            <span>89 photos</span>
          </div>
        </div>
      </div>

      {/* Rating and Date */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              className={star <= data.rating ? 'text-red-500 fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {format(data.date, 'MM/dd/yyyy')}
        </span>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h4 className="font-bold text-gray-900 mb-2">{data.title}</h4>
        <p className="text-gray-700 leading-relaxed">{data.content}</p>
      </div>

      {/* Photos indicator */}
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
        <Camera size={16} />
        <span>3 photos</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
          <ThumbsUp size={16} />
          <span className="text-sm">Useful ({data.likes})</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
          <MessageCircle size={16} />
          <span className="text-sm">Comment</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
          <Flag size={16} />
          <span className="text-sm">Flag</span>
        </button>
      </div>
    </div>
  );
};