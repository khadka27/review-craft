import { ReviewData } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, CheckCircle } from 'lucide-react';

interface TwitterReviewProps {
  data: ReviewData;
}

export const TwitterReview = ({ data }: TwitterReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden max-w-lg">
      {/* Header */}
      <div className="flex items-start gap-3 p-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">{data.name}</span>
            {data.verified && (
              <CheckCircle size={16} className="text-blue-500 fill-current" />
            )}
            <span className="text-gray-500">{data.username}</span>
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(data.date, { addSuffix: true })}
            </span>
          </div>
          
          <div className="mt-2">
            <p className="text-gray-900 leading-relaxed">{data.content}</p>
          </div>

          {/* Engagement */}
          <div className="flex items-center justify-between mt-4 max-w-md">
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle size={18} />
              <span className="text-sm">{data.replies}</span>
            </button>
            
            <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
              <Repeat2 size={18} />
              <span className="text-sm">{data.shares}</span>
            </button>
            
            <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
              <Heart size={18} />
              <span className="text-sm">{data.likes}</span>
            </button>
            
            <button className="p-1 text-gray-500 hover:text-blue-500 transition-colors">
              <Share size={18} />
            </button>
          </div>
        </div>
        
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};