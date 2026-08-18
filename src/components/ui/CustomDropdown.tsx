"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

export const CustomDropdown = ({
  value,
  onChange,
  options,
  placeholder = "Select option",
  ariaLabel = "Dropdown",
  className = "",
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="flex items-center justify-between gap-2.5 bg-[#0B0F14] border border-[#1E293B] hover:border-blue-500/50 focus:border-blue-500 text-[#F8FAFC] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer select-none outline-none group"
        style={{
          boxShadow: isOpen
            ? "0 0 0 2px rgba(37,99,235,0.4), 0 4px 16px rgba(0,0,0,0.3)"
            : "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center gap-2 truncate">
          {selectedOption?.icon}
          <span className="truncate">{selectedOption?.label || placeholder}</span>
        </div>
        <ChevronDown
          size={15}
          className={`text-slate-400 group-hover:text-blue-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu Popover */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-[#0F172A]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl rounded-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
          style={{
            boxShadow: "0 10px 38px -10px rgba(0,0,0,0.7), 0 10px 20px -15px rgba(37,99,235,0.3)",
          }}
        >
          <div className="space-y-0.5 max-h-60 overflow-y-auto custom-scrollbar">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer text-left ${
                    isSelected
                      ? "bg-blue-600/25 text-blue-300 font-bold border border-blue-500/30"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {option.icon}
                    <span className="truncate">{option.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {option.badge && (
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                        {option.badge}
                      </span>
                    )}
                    {isSelected && <Check size={14} className="text-blue-400 flex-shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
