import { ReviewData } from '@/types/review';
import { format } from 'date-fns';
import { Hash, Reply, MoreHorizontal, Smile } from 'lucide-react';

interface DiscordReviewProps {
  data: ReviewData;
}

export const DiscordReview = ({ data }: DiscordReviewProps) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 max-w-2xl">
      {/* Channel header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <Hash size={20} className="text-gray-400" />
        <span className="font-semibold text-gray-300">general</span>
      </div>

      {/* Message */}
      <div className="flex items-start gap-3">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white">{data.name}</span>
            {data.verified && (
              <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                BOT
              </span>
            )}
            <span className="text-xs text-gray-400">
              Today at {format(data.date, 'h:mm a')}
            </span>
          </div>
          
          <div className="mb-2">
            <p className="text-gray-100 leading-relaxed">{data.content}</p>
          </div>

          {/* Reactions */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 bg-gray-700 rounded px-2 py-1">
              <span className="text-sm">👍</span>
              <span className="text-xs text-gray-300">{data.likes}</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-700 rounded px-2 py-1">
              <span className="text-sm">❤️</span>
              <span className="text-xs text-gray-300">{Math.floor(data.likes * 0.3)}</span>
            </div>
            <button className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
              <Smile size={14} className="text-gray-400" />
            </button>
          </div>

          {/* Thread indicator */}
          {data.replies > 0 && (
            <div className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 cursor-pointer">
              <Reply size={14} />
              <span>{data.replies} replies</span>
              <span className="text-gray-500">Last reply {format(new Date(Date.now() - 3600000), 'h:mm a')}</span>
            </div>
          )}
        </div>
        
        <button className="p-1 text-gray-400 hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};