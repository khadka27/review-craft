import { ChatData } from "@/types/chat";
import { Info, ChevronLeft, Settings, Image as ImageIcon, Gift, AlignLeft, Smile, Send } from "lucide-react";

export const TwitterChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  return (
    <div className={`h-full flex flex-col font-sans ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <div className={`p-3 flex items-center gap-6 border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}>
        <ChevronLeft size={20} />
        <div className="flex-1 flex flex-col items-center">
          <div className="font-bold text-base">{data.contactName}</div>
          <div className="text-[11px] text-gray-500">@{data.contactName.toLowerCase().replace(/\s/g, '')}</div>
        </div>
        <Info size={20} />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {data.messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div key={msg.id} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
              <div className={`
                max-w-[85%] p-3 px-4 text-[15px]
                ${isMe 
                  ? "bg-[#1d9bf0] text-white rounded-t-[20px] rounded-bl-[20px] rounded-br-[4px]"
                  : (isDark ? "bg-[#2f3336] text-white rounded-t-[20px] rounded-br-[20px] rounded-bl-[4px]" : "bg-[#eff3f4] text-black rounded-t-[20px] rounded-br-[20px] rounded-bl-[4px]")
                }
              `}>
                {msg.image && (
                  <div className="mb-2 rounded-2xl overflow-hidden border border-gray-800">
                    <img src={msg.image} alt="" className="w-full h-auto max-h-[300px] object-cover" />
                  </div>
                )}
                {msg.text && <p className="leading-snug">{msg.text}</p>}
              </div>
              <span className="text-[11px] text-gray-500 mt-1 px-1">{msg.timestamp}</span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className={`p-2 px-4 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
        <div className={`flex items-center gap-3 p-1.5 px-3 rounded-2xl border ${isDark ? "bg-black border-gray-800" : "bg-[#eff3f4] border-transparent"}`}>
          <ImageIcon size={20} className="text-[#1d9bf0]" />
          <Gift size={20} className="text-[#1d9bf0]" />
          <AlignLeft size={20} className="text-[#1d9bf0]" />
          <div className="flex-1 text-gray-500 text-sm">Start a message</div>
          <Smile size={20} className="text-[#1d9bf0]" />
          <Send size={20} className="text-[#1d9bf0]" />
        </div>
      </div>
    </div>
  );
};
