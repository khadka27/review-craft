import { ReviewData } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { Heart, Play, Share2, MoreHorizontal, Star } from 'lucide-react';

interface SpotifyReviewProps {
  data: ReviewData;
}

export const SpotifyReview = ({ data }: SpotifyReviewProps) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 max-w-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{data.username}</span>
            {data.verified && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Premium
              </span>
            )}
          </div>
          <div className="text-sm text-gray-400">
            {formatDistanceToNow(data.date, { addSuffix: true })}
          </div>
        </div>
        <button className="p-1 text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-300 leading-relaxed text-sm">{data.content}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
            <Heart size={16} />
            <span className="text-sm">{data.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Share2 size={16} />
            <span className="text-sm">Share</span>
          </button>
        </div>
        <span className="text-xs text-gray-500">
          {data.shares} shares
        </span>
      </div>
    </div>
  );
};