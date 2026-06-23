import { ChatData } from "@/types/chat";
import {
  Camera,
  ChevronLeft,
  Lock,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Smile,
  Video,
} from "lucide-react";
import MobileStatusBar from "@/components/ui/MobileStatusBar";

export const WhatsAppChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  const renderTicks = (status?: string) => {
    if (status === "sent") {
      return (
        <svg viewBox="0 0 16 15" width="13" height="13" className={isDark ? "text-[#8696a0]" : "text-[#667781]"} fill="none">
          <path d="M10.91 3.38L5.22 9.07L2.83 6.68L1.75 7.75L5.22 11.22L12 4.45L10.91 3.38Z" fill="currentColor"/>
        </svg>
      );
    }
    
    const isRead = status === "read" || !status;
    const tickColor = isRead ? "text-[#53bdeb]" : (isDark ? "text-[#8696a0]" : "text-[#667781]");
    
    return (
      <div className={`relative w-[15px] h-[13px] ${tickColor} flex-shrink-0`}>
        {/* First tick */}
        <svg viewBox="0 0 16 15" width="11" height="11" className="absolute left-0 top-[1px]" fill="none">
          <path d="M10.91 3.38L5.22 9.07L2.83 6.68L1.75 7.75L5.22 11.22L12 4.45L10.91 3.38Z" fill="currentColor"/>
        </svg>
        {/* Second tick overlapping closely */}
        <svg viewBox="0 0 16 15" width="11" height="11" className="absolute left-[3.5px] top-[1px]" fill="none">
          <path d="M10.91 3.38L5.22 9.07L2.83 6.68L1.75 7.75L5.22 11.22L12 4.45L10.91 3.38Z" fill="currentColor"/>
        </svg>
      </div>
    );
  };

  return (
    <div className={`h-full flex flex-col font-sans ${isDark ? "bg-[#0b141a] text-[#e9edef]" : "bg-[#efeae2] text-[#111b21]"}`}>
      {/* Status bar */}
      <div className={`px-0 pt-4 pb-1 ${isDark ? "bg-[#111b21]" : "bg-[#f0f2f5]"}`}>
        <MobileStatusBar isDark={isDark} batteryLevel={87} />
      </div>

      {/* Header */}
      <div className={`px-4 py-2 flex items-center gap-3 border-b ${isDark ? "bg-[#111b21] border-[#202c33]" : "bg-[#f0f2f5] border-[#e9edef]"}`}>
        <ChevronLeft size={24} className={isDark ? "text-[#d1d7db]" : "text-[#54656f]"} />
        <div className={`w-9 h-9 rounded-full ${isDark ? "bg-[#1f2c34]" : "bg-gray-300"} overflow-hidden`}>
          <img
            src={data.contactAvatar || "/images/default-avatar.jpg"}
            alt={data.contactName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className={`font-semibold text-[20px] truncate ${isDark ? "text-[#e9edef]" : "text-[#111b21]"}`}>
            {data.contactName}
          </div>
          <div className={`text-[13px] truncate ${isDark ? "text-[#8696a0]" : "text-[#667781]"}`}>
            {data.contactStatus}
          </div>
        </div>
        <div className={`flex items-center gap-4 ${isDark ? "text-[#d1d7db]" : "text-[#54656f]"}`}>
          <Video size={22} />
          <Phone size={22} />
          <MoreVertical size={22} />
        </div>
      </div>

      {/* Chat area */}
      <div
        className="flex-1 overflow-y-auto px-3 py-3 space-y-2"
        style={{
          backgroundImage:
            "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
          backgroundColor: isDark ? "#0b141a" : "#efeae2",
          backgroundBlendMode: isDark ? "overlay" : "soft-light",
        }}
      >
        <div className={`text-center text-[13px] mb-2 ${isDark ? "text-[#aebac1]" : "text-[#667781]"}`}>
          October 30, 2025
        </div>

        <div className={`mx-auto max-w-[330px] text-[13px] leading-snug px-3 py-2 rounded-md text-center ${isDark ? "bg-[#202c33] text-[#e9edef]" : "bg-[#ffeecd] text-[#54656f]"}`}>
          <span className="inline-flex items-center gap-1">
            <Lock size={12} className={isDark ? "text-[#aebac1]" : "text-[#54656f]"} />
            Messages and calls are end-to-end encrypted. Only people in this
            chat can read, listen to, or share them.
          </span>{" "}
          <span className={isDark ? "text-[#53bdeb] font-semibold" : "text-[#008069] font-semibold"}>Learn more</span>
        </div>

        <div className={`text-center text-[13px] mt-2 mb-2 ${isDark ? "text-[#aebac1]" : "text-[#667781]"}`}>
          January 18, 2026
        </div>

        {data.messages.map((msg) => {
          const isMe = msg.sender === "me";
          const hasImage = !!msg.image;
          const hasText = !!msg.text;
          const hasReaction = !!msg.reaction;

          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"} ${hasReaction ? "mb-3" : ""}`}
            >
              <div
                className={`max-w-[80%] rounded-lg text-[14px] leading-snug relative ${
                  isMe
                    ? (isDark ? "bg-[#005c4b] text-[#e9edef] rounded-tr-sm" : "bg-[#d9fdd3] text-[#111b21] rounded-tr-sm")
                    : (isDark ? "bg-[#202c33] text-[#e9edef] rounded-tl-sm" : "bg-[#ffffff] text-[#111b21] rounded-tl-sm")
                } ${
                  hasImage
                    ? (hasText ? "p-[4px] pb-1" : "p-[3px]")
                    : "px-3 py-2"
                }`}
              >
                {hasImage ? (
                  <div className="relative">
                    <img
                      src={msg.image}
                      alt=""
                      className="w-full h-auto max-h-[300px] object-cover rounded-md block"
                    />
                    {!hasText && (
                      <div className="absolute bottom-1.5 right-1.5 bg-black/45 text-white rounded px-1.5 py-0.5 text-[10px] flex items-center gap-1 backdrop-blur-[1px] select-none">
                        <span>{msg.timestamp || "8:20 PM"}</span>
                        {isMe && renderTicks(msg.status)}
                      </div>
                    )}
                  </div>
                ) : null}

                {hasText && (
                  <div className={`break-words whitespace-pre-wrap ${hasImage ? "px-2 pt-1.5 pb-0.5" : ""}`}>
                    {msg.text}
                  </div>
                )}

                {/* For text-only or image-with-text, show timestamp underneath */}
                {(!hasImage || hasText) && (
                  <div className={`flex items-center justify-end gap-1 text-[11px] ${hasImage ? "px-2 pb-0.5 mt-0.5" : "mt-1"} ${isDark ? "text-[#aebac1]" : "text-[#667781]"}`}>
                    <span>{msg.timestamp || "8:20 PM"}</span>
                    {isMe && renderTicks(msg.status)}
                  </div>
                )}

                {/* Floating Reaction badge for WhatsApp */}
                {hasReaction && (
                  <div className={`absolute -bottom-2.5 left-3 z-10 flex items-center bg-white dark:bg-[#202c33] border ${isDark ? "border-[#374248]" : "border-gray-200"} shadow-sm rounded-full px-1.5 py-0.5 text-[12px] select-none`}>
                    <span>{msg.reaction}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className={`px-2 py-2 ${isDark ? "bg-[#111b21]" : "bg-[#f0f2f5]"}`}>
        <div className="flex items-center gap-2">
          <div className={`flex-1 rounded-full px-3 py-2 flex items-center gap-3 ${isDark ? "bg-[#202c33] text-[#8696a0]" : "bg-[#ffffff] text-[#54656f]"}`}>
            <Smile size={20} />
            <span className={`flex-1 text-[19px] ${isDark ? "text-[#8696a0]" : "text-[#667781]"}`}>Message</span>
            <Paperclip size={20} />
            <Camera size={20} />
          </div>
          <button className={`w-12 h-12 rounded-full bg-[#00a884] flex items-center justify-center ${isDark ? "text-[#0b141a]" : "text-[#ffffff]"}`}>
            <Mic size={22} />
          </button>
        </div>
        <div className={`w-28 h-1 rounded-full mx-auto mt-3 ${isDark ? "bg-white/90" : "bg-black/30"}`} />
      </div>
    </div>
  );
};

