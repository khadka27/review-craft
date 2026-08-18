import { ChatData } from "@/types/chat";
import { ChevronLeft, Video, Plus, Mic, ArrowUp } from "lucide-react";
import MobileStatusBar from "@/components/ui/MobileStatusBar";

export const IMessageChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";
  const contactInitial = (data.contactName || "A")
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <div
      className={`h-full w-full flex flex-col font-sans select-none ${
        isDark ? "bg-black text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* iOS Top Status Bar */}
      <div className="pt-2 pb-1 px-4 z-20">
        <MobileStatusBar />
      </div>

      {/* iOS iMessage Navigation Header */}
      <div
        className={`px-3 py-2 border-b flex items-center justify-between z-10 ${
          isDark ? "border-neutral-800 bg-black/90" : "border-slate-200/80 bg-white/90"
        } backdrop-blur-md`}
      >
        <button type="button" className="flex items-center text-[#007AFF] dark:text-[#0A84FF] text-sm font-semibold gap-0.5">
          <ChevronLeft size={24} />
          <span className="text-[15px] -ml-1">Messages</span>
        </button>

        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold text-sm shadow-inner">
            {data.contactAvatar ? (
              <img
                src={data.contactAvatar}
                alt={data.contactName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{contactInitial}</span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[11px] font-semibold text-slate-900 dark:text-white leading-tight">
              {data.contactName || "Alex Morgan"}
            </span>
            <span className="text-[9px] text-slate-400 dark:text-neutral-500">›</span>
          </div>
        </div>

        <div className="flex items-center text-[#007AFF] dark:text-[#0A84FF]">
          <Video size={22} className="opacity-90" />
        </div>
      </div>

      {/* Chat Messages Body */}
      <div
        className={`flex-1 overflow-y-auto p-4 space-y-3 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        {/* Timestamp header */}
        <div className="text-center my-2">
          <span className="text-[10px] font-semibold text-slate-400 dark:text-neutral-500 tracking-tight uppercase">
            iMessage • Today {data.messages?.[0]?.timestamp || "9:41 AM"}
          </span>
        </div>

        {data.messages.map((msg, index) => {
          const isMe = msg.sender === "me";
          const hasImage = !!msg.image;
          const hasText = !!msg.text;
          const isLastMessage = index === data.messages.length - 1;

          return (
            <div key={msg.id} className="space-y-1">
              <div
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[78%] text-[15px] leading-snug tracking-tight font-normal ${
                    hasImage && !hasText
                      ? ""
                      : `px-3.5 py-2.5 rounded-[20px] ${
                          isMe
                            ? "bg-[#007AFF] dark:bg-[#0A84FF] text-white rounded-br-[4px]"
                            : isDark
                            ? "bg-[#26262a] text-white rounded-bl-[4px]"
                            : "bg-[#e9e9eb] text-slate-900 rounded-bl-[4px]"
                        }`
                  }`}
                >
                  {hasImage && (
                    <div className={`overflow-hidden rounded-[16px] ${hasText ? "mb-2" : ""}`}>
                      <img
                        src={msg.image}
                        alt=""
                        className="w-full h-auto max-h-[260px] object-cover block"
                      />
                    </div>
                  )}
                  {hasText && (
                    <div className="break-words whitespace-pre-wrap">
                      {msg.text}
                    </div>
                  )}
                </div>
              </div>

              {/* Status indicator under last sent message */}
              {isMe && isLastMessage && (
                <div className="text-[10px] font-medium text-slate-400 dark:text-neutral-500 text-right pr-1 pt-0.5">
                  Delivered
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* iOS 17/18 Style iMessage Composer */}
      <div
        className={`px-3 py-2 border-t ${
          isDark ? "border-neutral-800 bg-black" : "border-slate-200/80 bg-white"
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Plus icon button */}
          <button
            type="button"
            className={`w-7 h-7 rounded-full flex items-center justify-center text-slate-500 dark:text-neutral-400 ${
              isDark ? "bg-[#26262a]" : "bg-[#e9e9eb]"
            }`}
          >
            <Plus size={18} />
          </button>

          {/* iMessage Input pill */}
          <div
            className={`flex-1 rounded-full px-3.5 py-1.5 border flex items-center justify-between text-sm ${
              isDark
                ? "border-neutral-700 bg-[#1c1c1e] text-white"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          >
            <span className="text-slate-400 dark:text-neutral-500 text-[14px]">
              iMessage
            </span>
            <div className="flex items-center gap-2">
              <Mic size={16} className="text-slate-400 dark:text-neutral-500" />
              <div className="w-5 h-5 rounded-full bg-[#007AFF] dark:bg-[#0A84FF] text-white flex items-center justify-center">
                <ArrowUp size={12} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        {/* iOS Home Bar Indicator */}
        <div className="w-32 h-1 bg-slate-300 dark:bg-neutral-700 rounded-full mx-auto mt-3 mb-0.5" />
      </div>
    </div>
  );
};
