import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Verified,
  ChevronLeft,
  Smile,
  ImageIcon,
} from "lucide-react";

interface InstagramReviewProps {
  data: ReviewData;
}

export const InstagramReview = ({ data }: InstagramReviewProps) => {
  const isCommentMode = (data.instagramContentType || "post") === "comment";
  const postImages = data.images || [];
  const postImage = postImages.length > 0 ? postImages[0] : null;

  if (isCommentMode) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden w-full max-w-md mx-auto shadow-sm text-gray-900 font-sans">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between p-3.5 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <ChevronLeft size={22} className="text-gray-900 cursor-pointer" />
            <span className="font-semibold text-base text-gray-900">Comments</span>
          </div>
          <Send size={20} className="text-gray-900 cursor-pointer -rotate-12" />
        </div>

        {/* Post Snippet Bar (if post image available) */}
        {postImage && (
          <div className="flex items-center gap-3 p-3 bg-gray-50 border-b border-gray-100">
            <img
              src={postImage}
              alt="Post preview"
              className="w-10 h-10 rounded-md object-cover flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-xs text-gray-900 block truncate">
                {data.username.replace("@", "")}
              </span>
              <span className="text-xs text-gray-500 truncate block">
                {data.content}
              </span>
            </div>
          </div>
        )}

        {/* Comment Thread Area */}
        <div className="p-4 space-y-4 bg-white">
          {/* Main Comment */}
          <div className="flex items-start gap-3">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute -inset-[1.5px] bg-gradient-to-tr from-[#f9ce0f] via-[#e1306c] to-[#833ab4] rounded-full"></div>
              {data.avatar ? (
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="relative w-full h-full rounded-full object-cover border-2 border-white"
                />
              ) : (
                <div className="relative w-full h-full rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs text-gray-600 font-semibold">?</span>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm leading-snug">
                <span className="font-semibold text-gray-900 mr-1.5 inline-flex items-center gap-1">
                  {data.username.replace("@", "")}
                  {data.verified && (
                    <Verified size={13} className="text-blue-500 fill-current" />
                  )}
                </span>
                <span className="text-gray-900 break-words">{data.content}</span>
              </div>

              {/* Comment Metadata */}
              <div className="flex items-center gap-4 mt-1.5 text-xs text-gray-500 font-medium">
                <span>
                  {formatDistanceToNow(data.date, { addSuffix: false })
                    .replace("about ", "")
                    .replace(" hours", "h")
                    .replace(" hour", "h")
                    .replace(" minutes", "m")
                    .replace(" minute", "m")
                    .replace(" days", "d")
                    .replace(" day", "d")}
                </span>
                {data.likes > 0 && (
                  <button className="hover:text-gray-700">
                    {data.likes} {data.likes === 1 ? "like" : "likes"}
                  </button>
                )}
                <button className="hover:text-gray-700">Reply</button>
                <button className="hover:text-gray-700">Send</button>
              </div>

              {/* Replies Link */}
              {data.replies > 0 && (
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-500 hover:text-gray-700 cursor-pointer">
                  <span className="w-6 h-[1px] bg-gray-300"></span>
                  <span>View all {data.replies} replies</span>
                </div>
              )}
            </div>

            {/* Comment Like Heart Button */}
            <button className="p-1 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 mt-0.5">
              <Heart size={14} />
            </button>
          </div>
        </div>

        {/* Comment Input Footer */}
        <div className="p-3 border-t border-gray-100 bg-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            {data.avatar ? (
              <img src={data.avatar} alt="Current user" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">U</div>
            )}
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5 flex items-center justify-between">
            <span className="text-xs text-gray-400 truncate">
              Add a comment as {data.username.replace("@", "")}...
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <Smile size={16} />
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
            Post
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full max-w-md mx-auto shadow-sm font-sans">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {data.avatar ? (
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <div className="absolute -inset-[2px] bg-gradient-to-tr from-[#f9ce0f] via-[#e1306c] to-[#833ab4] rounded-full"></div>
              <img
                src={data.avatar}
                alt={data.name}
                className="relative w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
          ) : (
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <div className="absolute -inset-[2px] bg-gradient-to-tr from-[#f9ce0f] via-[#e1306c] to-[#833ab4] rounded-full"></div>
              <div className="relative w-full h-full rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                <span className="text-xs text-gray-600 font-semibold">?</span>
              </div>
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                {data.username.replace("@", "")}
              </span>
              {data.verified && (
                <Verified size={14} className="text-blue-500 fill-current flex-shrink-0" />
              )}
            </div>
            <span className="text-xs text-gray-500 truncate block">
              {data.location?.city || "Location"}
            </span>
          </div>
        </div>
        <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0">
          <MoreHorizontal size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Image Display Section */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden flex items-center justify-center">
        {postImage ? (
          <img
            src={postImage}
            alt="Post content"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="aspect-square w-full h-full bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 mb-3 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 border border-gray-100">
              <ImageIcon size={32} />
            </div>
            <p className="text-sm font-semibold text-gray-700">No Image Attached</p>
            <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
              Upload an image in the editor to display it on this post
            </p>
          </div>
        )}
        {postImages.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
            1/{postImages.length}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-gray-800 hover:text-red-500 transition-colors">
              <Heart size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="text-gray-800 hover:text-gray-600 transition-colors">
              <Send size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
          <button className="text-gray-800 hover:text-gray-600 transition-colors">
            <Bookmark size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">
          {data.likes.toLocaleString()} likes
        </div>

        <div className="text-xs sm:text-sm">
          <span className="font-semibold text-gray-900">
            {data.username.replace("@", "")}
          </span>
          <span className="text-gray-700 ml-2 break-words">{data.content}</span>
        </div>

        {data.replies > 0 && (
          <button className="text-xs text-gray-500 mt-1 hover:text-gray-700 transition-colors block">
            View all {data.replies} comments
          </button>
        )}

        <div className="text-xs text-gray-400 mt-1 sm:mt-2 uppercase tracking-wide">
          {formatDistanceToNow(data.date, { addSuffix: true })}
        </div>
      </div>
    </div>
  );
};
