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

export const WhatsAppChat = ({ data }: { data: ChatData }) => {
  return (
    <div className="h-full flex flex-col font-sans bg-[#0b141a] text-[#e9edef]">
      {/* Status bar */}
      <div className="px-5 pt-4 pb-1 flex items-center justify-between text-[14px] font-semibold">
        <span>5:39</span>
        <div className="flex items-center gap-2 text-[12px] text-gray-200">
          <span>📶</span>
          <span>87</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#111b21] px-4 py-2 flex items-center gap-3 border-b border-[#202c33]">
        <ChevronLeft size={24} />
        <div className="w-9 h-9 rounded-full bg-[#1f2c34] overflow-hidden">
          <img
            src={data.contactAvatar || "/images/default-avatar.jpg"}
            alt={data.contactName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-[20px] truncate">
            {data.contactName}
          </div>
          <div className="text-[13px] text-gray-400 truncate">
            {data.contactStatus}
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#d1d7db]">
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
          backgroundColor: "#0b141a",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-[#aebac1] text-[13px] mb-2">
          October 30, 2025
        </div>

        <div className="mx-auto max-w-[330px] bg-[#202c33] text-[#e9edef] text-[13px] leading-snug px-3 py-2 rounded-md text-center">
          <span className="inline-flex items-center gap-1">
            <Lock size={12} />
            Messages and calls are end-to-end encrypted. Only people in this
            chat can read, listen to, or share them.
          </span>{" "}
          <span className="text-[#53bdeb] font-semibold">Learn more</span>
        </div>

        <div className="text-center text-[#aebac1] text-[13px] mt-2 mb-2">
          January 18, 2026
        </div>

        {data.messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-lg text-[14px] leading-snug ${
                  isMe
                    ? "bg-[#005c4b] text-[#e9edef] rounded-tr-sm"
                    : "bg-[#202c33] text-[#e9edef] rounded-tl-sm"
                }`}
              >
                <div>{msg.text}</div>
                <div className="mt-1 flex items-center justify-end gap-1 text-[11px] text-[#aebac1]">
                  <span>{msg.timestamp || "8:20 PM"}</span>
                  {isMe && <span className="text-[#53bdeb]">✓✓</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="bg-[#111b21] px-2 py-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-full bg-[#202c33] px-3 py-2 flex items-center gap-3 text-[#8696a0]">
            <Smile size={20} />
            <span className="flex-1 text-[19px]">Message</span>
            <Paperclip size={20} />
            <Camera size={20} />
          </div>
          <button className="w-12 h-12 rounded-full bg-[#00a884] flex items-center justify-center text-[#0b141a]">
            <Mic size={22} />
          </button>
        </div>
        <div className="w-28 h-1 bg-white/90 rounded-full mx-auto mt-3" />
      </div>
    </div>
  );
};
