import React, { useState, useEffect } from "react";
import { Wifi } from "lucide-react";

export interface MobileStatusBarProps {
  isDark?: boolean;
  batteryLevel?: number;
  time?: string;
  className?: string;
  showPercent?: boolean;
}

export const MobileStatusBar: React.FC<MobileStatusBarProps> = ({
  isDark = false,
  batteryLevel = 87,
  time: customTime,
  className = "",
  showPercent = true,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayTime = customTime || (mounted
    ? new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "19:07");

  const textColor = isDark ? "text-white" : "text-[#111827]";
  const fillColor = isDark ? "#ffffff" : "#111827";
  const clampedBattery = Math.min(100, Math.max(5, batteryLevel));

  return (
    <div
      className={`w-full flex items-center justify-between px-6 pt-2.5 pb-1 select-none pointer-events-none ${textColor} ${className}`}
      style={{ minHeight: "26px" }}
    >
      {/* Time on Left */}
      <span className="text-[13px] sm:text-[14px] font-semibold tracking-tight leading-none">
        {displayTime}
      </span>

      {/* Status Icons on Right (Signal, Wi-Fi, Battery) */}
      <div className="flex items-center gap-2 leading-none">
        {/* 4-Bar Cellular Signal Indicator */}
        <div className="flex items-end gap-[1.5px] h-[11px] pb-[1px]" title="Cellular Signal">
          <span className="w-[3px] h-[3px] rounded-[0.5px]" style={{ backgroundColor: fillColor }} />
          <span className="w-[3px] h-[5px] rounded-[0.5px]" style={{ backgroundColor: fillColor }} />
          <span className="w-[3px] h-[8px] rounded-[0.5px]" style={{ backgroundColor: fillColor }} />
          <span className="w-[3px] h-[10px] rounded-[0.5px]" style={{ backgroundColor: fillColor }} />
        </div>

        {/* Wi-Fi Icon */}
        <Wifi size={14} strokeWidth={2.5} className="shrink-0" />

        {/* Battery Container */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Battery Outline Capsule */}
          <div className="flex items-center">
            <div
              className="w-[20px] h-[10.5px] rounded-[3px] p-[1.5px] flex items-center"
              style={{ border: `1.5px solid ${fillColor}` }}
            >
              <div
                className="h-full rounded-[1px] transition-all"
                style={{
                  width: `${clampedBattery}%`,
                  backgroundColor: fillColor,
                }}
              />
            </div>
            {/* Battery Terminal Nub */}
            <div
              className="w-[1.5px] h-[4px] rounded-r-[1px]"
              style={{ backgroundColor: fillColor }}
            />
          </div>

          {/* Optional Percentage Badge */}
          {showPercent && (
            <span className="text-[11px] sm:text-[12px] font-medium tracking-tight ml-0.5">
              {clampedBattery}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileStatusBar;
