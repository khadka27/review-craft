import React from "react";
import { Wifi, Signal } from "lucide-react";

interface MobileStatusBarProps {
  isDark?: boolean;
  batteryLevel?: number;
  className?: string;
}

export const MobileStatusBar: React.FC<MobileStatusBarProps> = ({
  isDark = false,
  batteryLevel = 76,
  className = "",
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const time = mounted 
    ? new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "09:41";

  const textColor = isDark ? "text-white" : "text-black";
  const batteryGradientOffset = Math.min(100, Math.max(0, batteryLevel));

  return (
    <div
      className={`flex justify-between items-center px-4 py-2 w-full ${textColor} ${className}`}
    >
      <span className="text-sm font-medium tracking-tight">{time}</span>

      <div className="flex items-center gap-3">
        <Signal size={16} strokeWidth={2} className="opacity-95" />
        <Wifi size={16} strokeWidth={2} className="opacity-95" />

        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-95"
          >
            <defs>
              <linearGradient
                id="batteryGradientUI"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="currentColor" />
                <stop
                  offset={`${batteryGradientOffset}%`}
                  stopColor="currentColor"
                />
                <stop
                  offset={`${batteryGradientOffset}%`}
                  stopColor="#d1d5db"
                />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path
              d="M10.79 9.197a.75.75 0 0 0-.76-.75c-1.38.016-2.758.08-4.135.189l-.188.015a1.004 1.004 0 0 0-.9.78a11.686 11.686 0 0 0 0 5.12c.095.429.459.745.896.781l.175.015c1.382.114 2.767.18 4.152.197a.75.75 0 0 0 .76-.75V9.197Z"
              fill="url(#batteryGradientUI)"
            />
            <path
              fillRule="evenodd"
              d="M22.25 14v-4a1.75 1.75 0 0 0-1.75-1.75h-.65v-.06a2.434 2.434 0 0 0-2.245-2.427l-1.269-.1a68.646 68.646 0 0 0-10.672 0l-1.348.106c-1.21.094-2.2 1-2.4 2.197a24.398 24.398 0 0 0 0 8.068a2.642 2.642 0 0 0 2.4 2.197l1.348.105a68.63 68.63 0 0 0 10.672 0l1.269-.099a2.434 2.434 0 0 0 2.245-2.427v-.06h.65A1.75 1.75 0 0 0 22.25 14Zm-1.5-4v4a.25.25 0 0 1-.25.25h-1.4a.75.75 0 0 0-.75.75v.81a.934.934 0 0 1-.862.932l-1.268.099c-3.475.27-6.965.27-10.44 0l-1.347-.105a1.142 1.142 0 0 1-1.038-.95a22.898 22.898 0 0 1 0-7.572a1.142 1.142 0 0 1 1.038-.95L5.78 7.16c3.475-.27 6.965-.27 10.44 0l1.268.1a.934.934 0 0 1 .862.93V9c0 .414.336.75.75.75h1.4a.25.25 0 0 1 .25.25Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-sm font-medium opacity-95">
            {batteryLevel}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileStatusBar;
