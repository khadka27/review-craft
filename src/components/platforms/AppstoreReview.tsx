import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";

interface AppstoreReviewProps {
  data: ReviewData;
}

export const AppstoreReview = ({ data }: AppstoreReviewProps) => {
  const appstoreTemplate = data.appstoreTemplate || "editorial";

  if (appstoreTemplate === "classic") {
    return (
      <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-lg p-5 max-w-2xl">
        <div className="flex items-start gap-4">


          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-slate-900 truncate">
                  {data.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  {data.username} {data.verified ? "• Editors' Choice" : ""}
                </div>
              </div>
              <span className="text-xs text-slate-500 whitespace-nowrap">
                {formatDistanceToNow(data.date, { addSuffix: true })}
              </span>
            </div>

            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={
                    star <= data.rating
                      ? "text-yellow-400 fill-current"
                      : "text-slate-300"
                  }
                />
              ))}
            </div>

            <p className="text-sm leading-relaxed text-slate-700 mt-3">
              {data.content}
            </p>

            {data.content && data.content.length > 150 && (
              <button className="text-blue-600 hover:text-blue-500 text-sm mt-2 transition-colors">
                more
              </button>
            )}

            {data.likes > 0 && (
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 mt-4 border-t border-slate-200">
                <span>{data.likes} people found this helpful</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#232527] text-white rounded-2xl p-6 max-w-md shadow-lg">
      {/* Editors' Choice Badge */}
      {data.verified && (
        <div className="flex items-center justify-center gap-3 mb-4 pb-4 border-b border-gray-800">
          <span className="text-xl">🌿</span>
          <span className="text-sm font-semibold text-gray-300">
            Editors' Choice
          </span>
          <span className="text-xl">🌿</span>
        </div>
      )}

      {/* Title */}
      <div className="mb-2">
        <h3 className="text-[18px] font-semibold text-white leading-snug">
          {data.title}
        </h3>
      </div>

      {/* Stars + meta line */}
      <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-3">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={
                star <= data.rating
                  ? "text-white fill-white"
                  : "text-gray-600 fill-gray-600"
              }
            />
          ))}
        </div>
        <span className="whitespace-nowrap">
          {formatDistanceToNow(data.date, { addSuffix: true })} · {data.username}
        </span>
      </div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-gray-300 leading-relaxed text-[13px] rc-line-clamp-5">
          {data.content}
        </p>
        {data.content && data.content.length > 150 && (
          <div className="text-[13px] text-gray-400 mt-2">…</div>
        )}
      </div>

      {/* Engagement */}
      {data.likes > 0 && (
        <div className="flex items-center gap-2 text-xs text-gray-500 pt-3 border-t border-gray-800">
          <span>{data.likes} people found this helpful</span>
        </div>
      )}
    </div>
  );
};
