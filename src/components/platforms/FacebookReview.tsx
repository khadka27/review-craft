import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface FacebookReviewProps {
  data: ReviewData;
}

export const FacebookReview = ({ data }: FacebookReviewProps) => {
  return (
    <div className="bg-gray-100 p-4 w-full max-w-2xl mx-auto">
      {/* Main Comment */}
      <div className="flex gap-3">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
        />
        <div className="flex-1">
          {/* Comment Bubble */}
          <div className="bg-gray-200 rounded-2xl px-3 py-2 inline-block max-w-full">
            <div className="font-semibold text-sm text-gray-900 mb-1">
              {data.name}
            </div>
            <div className="text-sm text-gray-900 leading-relaxed">
              {data.content}
            </div>
          </div>

          {/* Reaction Icons on Comment */}
          <div className="flex items-center gap-1 mt-1 ml-2">
            <div className="flex items-center -space-x-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-white z-10">
                <span className="text-white text-xs">👍</span>
              </div>
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border border-white">
                <span className="text-white text-xs">❤️</span>
              </div>
            </div>
            <span className="text-xs text-gray-600 ml-1">{data.likes}</span>
          </div>

          {/* Comment Actions */}
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-600 font-semibold">
            <span className="cursor-pointer hover:underline">
              {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                "about ",
                ""
              )}
            </span>
            <button className="cursor-pointer hover:underline">Like</button>
            <button className="cursor-pointer hover:underline">Reply</button>
            <button className="cursor-pointer hover:underline">Edited</button>
            <div className="ml-auto flex items-center gap-1">
              <span className="text-blue-600 cursor-pointer hover:underline">
                {data.replies}
              </span>
              <span className="text-blue-600 cursor-pointer hover:underline">
                😂😍
              </span>
            </div>
          </div>

          {/* View more replies link */}
          <div className="mt-2">
            <button className="text-xs text-gray-600 font-semibold hover:underline flex items-center gap-1">
              <span>↳</span>
              <span>View 1 more reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
