import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  MoreHorizontal,
  Globe,
  MessageCircle,
  Repeat2,
  Send,
  ThumbsUp,
  X,
} from "lucide-react";

interface LinkedinReviewProps {
  data: ReviewData;
}

export const LinkedinReview = ({ data }: LinkedinReviewProps) => {
  const postImages = data.images || [];
  const timeAgo = formatDistanceToNow(data.date, { addSuffix: false }).replace(
    "about ",
    "",
  );

  return (
    <div className="bg-white border border-gray-300 rounded-lg w-full max-w-[580px] mx-auto overflow-hidden">
      <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between text-[12px] text-gray-600">
        <span className="font-semibold">Suggested</span>
        <div className="flex items-center gap-2">
          <MoreHorizontal size={16} />
          <X size={16} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-700 text-sm font-semibold">
                {(data.name || "A").trim().charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[22px] leading-tight font-semibold text-gray-900 truncate">
                  {data.name}{" "}
                  <span className="text-gray-500 font-normal">• 3rd+</span>
                </div>
                <div className="text-[13px] text-gray-600 truncate">
                  Full-Stack Developer | React & Next.js
                </div>
                <div className="mt-0.5 text-[12px] text-gray-500 flex items-center gap-1">
                  <span>{timeAgo}</span>
                  <span>·</span>
                  <span>Edited</span>
                  <span>·</span>
                  <Globe size={12} />
                </div>
              </div>

              <button
                type="button"
                className="text-[#0a66c2] font-semibold text-[16px] whitespace-nowrap"
              >
                + Follow
              </button>
            </div>

            <div className="mt-3 text-[16px] text-gray-800 leading-relaxed">
              {data.content}
              <div className="text-gray-500 font-semibold">... more</div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-lg overflow-hidden border border-gray-200">
          {postImages.length > 0 ? (
            <div>
              <img
                src={postImages[0]}
                alt="Post"
                className="w-full h-[240px] object-cover"
              />

              <div className="grid grid-cols-3 gap-[2px] bg-white">
                {postImages.slice(1, 4).map((img, idx) => {
                  const isLast = idx === 2;
                  const remaining = Math.max(0, postImages.length - 4);
                  return (
                    <div key={`${img}-${idx}`} className="relative">
                      <img
                        src={img}
                        alt="Gallery"
                        className="w-full h-[72px] object-cover"
                      />
                      {isLast && remaining > 0 && (
                        <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-white text-[24px] font-semibold">
                          +{remaining}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="h-[300px] bg-gray-100 flex items-center justify-center text-gray-500">
              Post media
            </div>
          )}
        </div>

        <div className="mt-2 flex items-center justify-between text-[14px] text-gray-600">
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-1">
              <span className="w-4 h-4 rounded-full bg-[#0a66c2] text-white text-[10px] flex items-center justify-center">
                👍
              </span>
              <span className="w-4 h-4 rounded-full bg-[#43a047] text-white text-[10px] flex items-center justify-center">
                💚
              </span>
              <span className="w-4 h-4 rounded-full bg-[#ef6c00] text-white text-[10px] flex items-center justify-center">
                ❤️
              </span>
            </div>
            <span>{Math.max(1, data.likes || 6)}</span>
          </div>
          <div>{Math.max(0, data.replies || 2)} comments</div>
        </div>

        <div className="mt-2 border-t border-gray-200 pt-2 grid grid-cols-4 text-[14px] text-gray-600">
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <ThumbsUp size={16} />
            Like
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <MessageCircle size={16} />
            Comment
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <Repeat2 size={16} />
            Repost
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
