import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  CheckCircle2,
  Globe,
  MessageCircle,
  MoreHorizontal,
  Share2,
  ThumbsUp,
  X,
} from "lucide-react";

interface FacebookReviewProps {
  data: ReviewData;
}

const formatMetric = (num: number) => {
  if (!num && num !== 0) return "0";
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toLocaleString();
};

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
              <span className="text-xs text-gray-600 ml-1">{formatMetric(data.likes)}</span>
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

            {postImages.length > 0 && (
              <div className="mt-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={postImages[0]}
                  alt="Post media"
                  className="w-full h-44 object-cover"
                />
              </div>
            )}

            {/* Bottom Engagement Bar */}
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-1.5">
                  <ThumbsUp size={15} className="text-gray-600 stroke-[2]" />
                  <span>{formatMetric(data.likes || 3400)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle size={15} className="text-gray-600 stroke-[2]" />
                  <span>{data.replies || 29}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Share2 size={15} className="text-gray-600 stroke-[2]" />
                  <span>{data.shares || 47}</span>
                </div>
              </div>

              <div className="flex items-center -space-x-1.5">
                <div className="w-4 h-4 bg-[#1877F2] rounded-full flex items-center justify-center border border-white shadow-sm z-10">
                  <span className="text-white text-[9px] leading-none">👍</span>
                </div>
                <div className="w-4 h-4 bg-[#F02849] rounded-full flex items-center justify-center border border-white shadow-sm">
                  <span className="text-white text-[9px] leading-none">❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full max-w-[540px] mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-start gap-3">
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
              {(data.name || "P").trim().charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <div className="font-semibold text-sm text-gray-900 truncate">
                {data.name}
              </div>
              <CheckCircle2 size={15} className="text-[#1877F2]" />
            </div>

            <div className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
              <span>
                {formatDistanceToNow(data.date, { addSuffix: false }).replace(
                  "about ",
                  "",
                )}
              </span>
              <span>·</span>
              <Globe size={13} className="text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <button
              type="button"
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <MoreHorizontal size={18} />
            </button>
            <button
              type="button"
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="mt-3 text-[13px] text-gray-900 leading-relaxed">
          <span>{data.content}</span>
        </div>
      </div>

      {/* Media - only shown if an image is uploaded */}
      {postImages.length > 0 && (
        <div className="mt-3 bg-gray-100">
          <img
            src={postImages[0]}
            alt="Post media"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Modern Facebook Bottom Engagement Bar */}
      <div className="mt-3 px-4 py-2.5 bg-[#f0f2f5] border-t border-gray-200 flex items-center justify-between">
        {/* Left Engagement Metrics (ThumbsUp count, Comment count, Share count) */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-900 transition-colors">
            <ThumbsUp size={16} className="text-gray-600 stroke-[2]" />
            <span>{formatMetric(data.likes || 3400)}</span>
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-900 transition-colors">
            <MessageCircle size={16} className="text-gray-600 stroke-[2]" />
            <span>{data.replies || 29}</span>
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer hover:text-gray-900 transition-colors">
            <Share2 size={16} className="text-gray-600 stroke-[2]" />
            <span>{data.shares || 47}</span>
          </div>
        </div>

        {/* Right Reaction Badges (Blue Thumb + Red Heart) */}
        <div className="flex items-center -space-x-1.5">
          <div className="w-5 h-5 bg-[#1877F2] rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10">
            <span className="text-white text-[10px] leading-none">👍</span>
          </div>
          <div className="w-5 h-5 bg-[#F02849] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            <span className="text-white text-[10px] leading-none">❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
};
