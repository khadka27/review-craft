import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface FacebookReviewProps {
  data: ReviewData;
}

export const FacebookReview = ({ data }: FacebookReviewProps) => {
  const isReviewMode = (data.facebookContentType || "post") === "review";
  const isMobile =
    (data.deviceViewMode || data.facebookViewMode || "desktop") === "mobile";
  const postImages = data.images || [];

  if (isReviewMode) {
    return (
      <div className="bg-gray-100 p-4 w-full max-w-2xl mx-auto rounded-lg">
        <div className="flex gap-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full flex-shrink-0 bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
          )}

          <div className="flex-1">
            <div className="bg-gray-200 rounded-2xl px-3 py-2 inline-block max-w-full">
              <div className="font-semibold text-sm text-gray-900 mb-1">
                {data.name}
              </div>
              <div className="text-sm text-gray-900 leading-relaxed">
                {data.content}
              </div>
            </div>

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

            <div className="flex items-center gap-4 mt-2 text-xs text-gray-600 font-semibold">
              <span className="cursor-pointer hover:underline">
                {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                  "about ",
                  "",
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
  }

  if (isMobile) {
    return (
      <div className="bg-[#f0f2f5] p-2 w-full max-w-[390px] mx-auto rounded-xl border border-gray-200">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>9:41</span>
            <span>4G • 100%</span>
          </div>

          <div className="p-3">
            <div className="flex items-start gap-2">
              {data.avatar ? (
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  ?
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">
                  {data.name}
                </div>
                <div className="text-xs text-gray-500">
                  {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                    "about ",
                    "",
                  )}
                </div>
              </div>
              <MoreHorizontal size={16} className="text-gray-500" />
            </div>

            <p className="text-sm text-gray-900 mt-3 leading-relaxed">
              {data.content}
            </p>

            <div className="mt-3 rounded-lg overflow-hidden bg-gray-100">
              {postImages.length > 0 ? (
                <img
                  src={postImages[0]}
                  alt="Post media"
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div className="h-40 flex items-center justify-center text-gray-400">
                  <div className="text-center text-xs">Image Placeholder</div>
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <span>👍 ❤️</span>
                <span>{data.likes}</span>
              </div>
              <div>{data.replies} comments</div>
            </div>

            <div className="mt-2 pt-2 border-t border-gray-100 grid grid-cols-3 text-xs text-gray-600">
              <button className="flex items-center justify-center gap-1 py-1.5 hover:bg-gray-50 rounded-md">
                <ThumbsUp size={14} /> Like
              </button>
              <button className="flex items-center justify-center gap-1 py-1.5 hover:bg-gray-50 rounded-md">
                <MessageCircle size={14} /> Comment
              </button>
              <button className="flex items-center justify-center gap-1 py-1.5 hover:bg-gray-50 rounded-md">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#e9eff7] p-5 w-full max-w-2xl mx-auto rounded-xl">
      <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start gap-3">
            {data.avatar ? (
              <img
                src={data.avatar}
                alt={data.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                ?
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-gray-900 truncate">
                {data.name}
              </div>
              <div className="text-xs text-gray-500">
                {formatDistanceToNow(data.date, { addSuffix: true }).replace(
                  "about ",
                  "",
                )}
              </div>
            </div>
            <MoreHorizontal size={18} className="text-gray-500" />
          </div>

          <p className="text-sm text-gray-900 mt-3 leading-relaxed">
            {data.content}
          </p>
        </div>

        <div className="bg-gray-100 overflow-hidden">
          {postImages.length > 0 ? (
            <img
              src={postImages[0]}
              alt="Post media"
              className="w-full h-52 object-cover"
            />
          ) : (
            <div className="h-52 flex items-center justify-center text-gray-400">
              <div className="text-center text-sm">Image Placeholder</div>
            </div>
          )}
        </div>

        <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-600 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <span>👍 ❤️</span>
            <span>{data.likes}</span>
          </div>
          <div>
            {data.replies} comments • {data.shares} shares
          </div>
        </div>

        <div className="px-2 py-1 border-t border-gray-100 grid grid-cols-3 text-sm text-gray-600">
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <ThumbsUp size={16} /> Like
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <MessageCircle size={16} /> Comment
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded-md">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};
