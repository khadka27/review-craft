import { ReviewData } from '@/types/review';
import { format } from 'date-fns';
import { ThumbsUp, ThumbsDown, MessageCircle, Award } from 'lucide-react';

interface SteamReviewProps {
  data: ReviewData;
}

export const SteamReview = ({ data }: SteamReviewProps) => {
  const isRecommended = data.rating >= 3;
  
  return (
    <div className="bg-gray-900 text-white rounded p-4 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-12 h-12 rounded"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white">{data.username}</span>
            {data.verified && (
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                Curator
              </span>
            )}
          </div>
          <div className="text-sm text-gray-400">
            {Math.floor(Math.random() * 500 + 100)} products in account
          </div>
          <div className="text-sm text-gray-400">
            {Math.floor(Math.random() * 50 + 10)} reviews
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex items-center gap-2 ${isRecommended ? 'text-green-400' : 'text-red-400'}`}>
          {isRecommended ? <ThumbsUp size={20} /> : <ThumbsDown size={20} />}
          <span className="font-semibold">
            {isRecommended ? 'Recommended' : 'Not Recommended'}
          </span>
        </div>
        <div className="text-sm text-gray-400">
          {(Math.random() * 100 + 10).toFixed(1)} hrs on record
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="font-semibold text-white mb-2">{data.title}</h3>
        <p className="text-gray-300 leading-relaxed">{data.content}</p>
      </div>

      {/* Posted date */}
      <div className="text-sm text-gray-500 mb-4">
        Posted: {format(data.date, 'MMMM d, yyyy')}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            Was this review helpful?
          </span>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
              <ThumbsUp size={14} />
              <span className="text-sm">{data.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
              <ThumbsDown size={14} />
              <span className="text-sm">{Math.floor(data.likes * 0.1)}</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MessageCircle size={14} />
          <span>{data.replies} comments</span>
        </div>
      </div>

      {/* Awards */}
      {data.verified && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-700">
          <Award size={16} className="text-yellow-400" />
          <span className="text-sm text-gray-400">This review received an award from the community</span>
        </div>
      )}
    </div>
  );
};