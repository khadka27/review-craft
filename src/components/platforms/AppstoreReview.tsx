import { ReviewData } from "@/types/review";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";
import { getPlatformIcon } from "@/components/SocialMediaIcons";

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
    <div className="bg-gray-950 text-white rounded-lg p-6 max-w-2xl">
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

      {/* Header with Title and Date */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-semibold text-white flex-1">
          {data.title}
        </h3>
        <span className="text-xs text-gray-400 ml-4 whitespace-nowrap">
          {formatDistanceToNow(data.date, { addSuffix: true })}
        </span>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={
              star <= data.rating
                ? "text-yellow-400 fill-current"
                : "text-gray-600"
            }
          />
        ))}
      </div>

      {/* Username */}
      <div className="text-xs text-gray-400 mb-3">{data.username}</div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-gray-300 leading-relaxed text-sm">{data.content}</p>
        {data.content && data.content.length > 150 && (
          <button className="text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors">
            more
          </button>
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
