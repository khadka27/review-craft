import { ChatData } from "@/types/chat";
import {
  Camera,
  ChevronLeft,
  Image as ImageIcon,
  Mic,
  Phone,
  PlusCircle,
  Smile,
  Video,
} from "lucide-react";
import MobileStatusBar from "@/components/ui/MobileStatusBar";

export const InstagramChat = ({ data }: { data: ChatData }) => {
  return (
    <div className="w-full h-full flex-1 flex flex-col min-h-0 font-sans bg-black text-white">
      {/* Status bar */}
      <div className="px-0 pt-2 pb-1 bg-black shrink-0">
        <MobileStatusBar isDark batteryLevel={87} />
      </div>

      {/* Header */}
      <div className="px-4 py-2 flex items-center gap-3 border-b border-[#1d1d1f] shrink-0">
        <ChevronLeft size={28} />
        <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden">
          <img
            src={data.contactAvatar || "/images/default-avatar.jpg"}
            alt={data.contactName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[16px] truncate">
            {data.contactName}
          </div>
          <div className="text-[13px] text-gray-400 truncate">
            {data.contactStatus}
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <Phone size={22} />
          <Video size={22} />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
        <div className="text-center text-gray-400 text-[13px] mb-2">
          5:41 PM
        </div>
        {data.messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              {!isMe && (
                <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 self-end overflow-hidden">
                  <img
                    src={data.contactAvatar || "/images/default-avatar.jpg"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`max-w-[72%] px-4 py-2.5 rounded-[20px] text-[15px] leading-snug ${
                  isMe
                    ? "bg-gradient-to-br from-[#ff00ae] to-[#7a5cff] text-white rounded-br-md"
                    : "bg-[#27292d] text-white rounded-bl-md"
                }`}
              >
                <div className="break-words whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-3 pb-3 pt-2 bg-black shrink-0">
        <div className="flex items-center gap-3 p-2 px-3 rounded-full border border-[#2d2f33] bg-[#1a1c20]">
          <div className="bg-[#4f5dff] rounded-full p-1.5 text-white">
            <Camera size={20} fill="currentColor" />
          </div>
          <div className="flex-1 text-[15px] text-gray-500">Message...</div>
          <div className="flex gap-4">
            <Mic size={22} />
            <ImageIcon size={22} />
            <Smile size={22} />
            <PlusCircle size={22} />
          </div>
        </div>
        <div className="w-28 h-1 bg-white/90 rounded-full mx-auto mt-2 mb-0.5" />
      </div>
    </div>
  );
};
