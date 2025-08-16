import { ReviewData } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, ThumbsDown, Reply, MoreVertical } from 'lucide-react';

interface YoutubeReviewProps {
  data: ReviewData;
}

export const YoutubeReview = ({ data }: YoutubeReviewProps) => {
  return (
    <div className="bg-white rounded-lg p-4 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-gray-900">{data.username}</span>
            {data.verified && (
              <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(data.date, { addSuffix: true })}
            </span>
          </div>
          
          <div className="mb-3">
            <p className="text-gray-900 leading-relaxed">{data.content}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <ThumbsUp size={16} />
              </button>
              <span className="text-sm text-gray-600">{data.likes}</span>
              <button className="flex items-center gap-1 p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <ThumbsDown size={16} />
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Reply size={16} />
              <span className="text-sm font-medium">Reply</span>
            </button>
          </div>

          {/* Replies indicator */}
          {data.replies > 0 && (
            <div className="mt-3 pt-3">
              <button className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-3 py-1 rounded transition-colors">
                <span className="text-sm font-medium">
                  View {data.replies} {data.replies === 1 ? 'reply' : 'replies'}
                </span>
              </button>
            </div>
          )}
        </div>
        
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};