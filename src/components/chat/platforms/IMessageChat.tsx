import { ChatData } from "@/types/chat";
import { Camera, ChevronLeft, Mic, Video } from "lucide-react";
import MobileStatusBar from "@/components/ui/MobileStatusBar";

export const IMessageChat = ({ data }: { data: ChatData }) => {
  const contactInitial = (data.contactName || "R")
    .trim()
    .charAt(0)
    .toUpperCase();
  const rendered = data.messages.slice(0, 5);

  return (
    <div className="h-full w-full bg-[#ff2f63] flex items-center justify-center overflow-hidden p-3">
      <div
        className="w-[340px] h-[600px] bg-[#111] rounded-[42px] p-[8px] shadow-2xl"
        style={{ transform: "rotate(-10deg)" }}
      >
        <div className="h-full w-full bg-white rounded-[34px] overflow-hidden relative">
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-2xl z-20" />

          {/* status bar */}
          <div className="pt-6">
            <div className="px-0">
              <MobileStatusBar />
            </div>
          </div>

          {/* contact bar */}
          <div className="px-4 pt-2 pb-2 border-b border-gray-200">
            <div className="flex items-center justify-between text-[#0a84ff]">
              <ChevronLeft size={22} />
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-gray-700 font-semibold">
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
                <span className="text-[11px] text-gray-800 mt-1">
                  {data.contactName || "Ryan"} ›
                </span>
              </div>
              <span className="w-[22px]" />
            </div>
          </div>

          {/* chat body */}
          <div className="px-3 py-3 space-y-2 h-[430px] overflow-hidden bg-[#f7f7f8]">
            {rendered.map((msg) => {
              const isMe = msg.sender === "me";
              return (
                <div
                  key={msg.id}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[74%] px-3 py-2 rounded-[18px] text-[15px] leading-snug ${
                      isMe
                        ? "bg-[#1f8cff] text-white rounded-br-md"
                        : "bg-[#ececef] text-[#111] rounded-bl-md"
                    }`}
                  >
                    <div className="break-words whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              );
            })}

            <div className="text-[11px] text-gray-500 text-right pr-2">
              Delivered
            </div>
          </div>

          {/* composer */}
          <div className="px-3 py-2 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                <Camera size={16} />
              </button>
              <div className="flex-1 border border-gray-300 rounded-full px-3 py-1.5 text-gray-400 text-[14px] flex items-center justify-between">
                <span>iMessage</span>
                <Mic size={16} />
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 overflow-hidden">
              {["📷", "🎵", "🧵", "💵", "😀", "🌐"].map((icon) => (
                <span
                  key={icon}
                  className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
