import { ReviewData } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface InstagramReviewProps {
  data: ReviewData;
}

export const InstagramReview = ({ data }: InstagramReviewProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-10 h-10 rounded-full border-2 border-gradient-to-r from-purple-400 to-pink-400 p-0.5"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{data.username.replace('@', '')}</span>
              {data.verified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500">{data.name}</span>
          </div>
        </div>
        <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button className="text-gray-800 hover:text-red-500 transition-colors">
              <Heart size={24} />
            </button>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <MessageCircle size={24} />
            </button>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <Send size={24} />
            </button>
          </div>
          <button className="text-gray-800 hover:text-gray-600 transition-colors">
            <Bookmark size={24} />
          </button>
        </div>

        <div className="text-sm font-semibold text-gray-900 mb-2">
          {data.likes.toLocaleString()} likes
        </div>

        <div className="text-sm">
          <span className="font-semibold text-gray-900">{data.username.replace('@', '')}</span>
          <span className="text-gray-700 ml-2">{data.content}</span>
        </div>

        <div className="text-xs text-gray-500 mt-2">
          {formatDistanceToNow(data.date, { addSuffix: true }).toUpperCase()}
        </div>
      </div>
    </div>
  );
};