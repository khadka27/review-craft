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

export const InstagramChat = ({ data }: { data: ChatData }) => {
  return (
    <div className="h-full flex flex-col font-sans bg-black text-white">
      {/* Status bar */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between text-[14px] font-semibold">
        <span>5:43</span>
        <div className="flex items-center gap-2 text-gray-200 text-[12px]">
          <span>📶</span>
          <span>87</span>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-2 flex items-center gap-3 border-b border-[#1d1d1f]">
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
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
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
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-3 pb-4 pt-2 bg-black">
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
        <div className="w-28 h-1 bg-white/90 rounded-full mx-auto mt-3" />
      </div>
    </div>
  );
};
