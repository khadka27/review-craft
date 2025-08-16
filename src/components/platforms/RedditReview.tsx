import { ReviewData } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { ArrowUp, ArrowDown, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface RedditReviewProps {
  data: ReviewData;
}

export const RedditReview = ({ data }: RedditReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{data.username}</span>
            {data.verified && (
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                OP
              </span>
            )}
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(data.date, { addSuffix: true })}
            </span>
          </div>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{data.title}</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{data.content}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:bg-gray-200 rounded transition-colors">
            <ArrowUp size={16} />
            <span className="text-sm font-medium">{data.likes}</span>
          </button>
          <button className="p-1 text-gray-400 hover:bg-gray-200 rounded transition-colors">
            <ArrowDown size={16} />
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:bg-gray-200 rounded transition-colors">
          <MessageCircle size={16} />
          <span className="text-sm">{data.replies} Comments</span>
        </button>
        
        <button className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:bg-gray-200 rounded transition-colors">
          <Share2 size={16} />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};