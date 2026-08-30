import { ChatData } from "@/types/chat";
import { Phone, Search, MoreVertical, ChevronLeft, Mic, Paperclip, Smile, Send } from "lucide-react";
import MobileStatusBar from "@/components/ui/MobileStatusBar";

export const TelegramChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  return (
    <div className={`w-full h-full flex-1 flex flex-col min-h-0 font-sans ${isDark ? "bg-[#0e1621] text-white" : "bg-[#7195ba] text-black"}`}>
      {/* Status Bar */}
      <div className={`px-0 pt-2 pb-1 shrink-0 ${isDark ? "bg-[#17212b]" : "bg-white"}`}>
        <MobileStatusBar isDark={isDark} batteryLevel={87} />
      </div>

      {/* Header */}
      <div className={`${isDark ? "bg-[#17212b]" : "bg-white"} p-2 py-2.5 flex items-center gap-3 shadow-sm z-10 border-b shrink-0 ${isDark ? "border-[#101921]" : "border-gray-100"}`}>
        <ChevronLeft size={24} className="text-gray-500" />
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold overflow-hidden">
          {data.contactAvatar ? (
            <img src={data.contactAvatar} alt="" className="w-full h-full object-cover" />
          ) : (
            <span>{data.contactName.charAt(0)}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm truncate">{data.contactName}</div>
          <div className={`text-[11px] ${isDark ? "text-blue-400" : "text-gray-500"} truncate`}>
            {data.contactStatus || "online"}
          </div>
        </div>
        <div className="flex gap-4 px-2 text-gray-500">
          <Search size={20} />
          <Phone size={20} />
          <MoreVertical size={20} />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0 relative" style={{
        backgroundImage: isDark ? "none" : "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
        backgroundBlendMode: 'soft-light',
        backgroundColor: isDark ? '#0e1621' : '#7195ba'
      }}>
        {data.messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div className={`
                max-w-[80%] p-2 px-3 rounded-2xl shadow-sm text-sm relative
                ${isMe 
                  ? (isDark ? "bg-[#2b5278] text-white rounded-br-none" : "bg-[#effdde] text-black rounded-br-none")
                  : (isDark ? "bg-[#182533] text-white rounded-bl-none" : "bg-white text-black rounded-bl-none")
                }
              `}>
                {msg.image && (
                  <div className="mb-1 rounded-lg overflow-hidden">
                    <img src={msg.image} alt="" className="w-full h-auto max-h-[300px] object-cover" />
                  </div>
                )}
                {msg.text && <p className="leading-relaxed">{msg.text}</p>}
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className={`text-[9px] ${isDark ? "text-gray-400" : "text-gray-400"}`}>{msg.timestamp}</span>
                  {isMe && (
                    <span className="text-blue-400 text-[10px]">✓✓</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className={`${isDark ? "bg-[#17212b]" : "bg-white"} p-2 flex items-center gap-3 border-t shrink-0 ${isDark ? "border-[#101921]" : "border-gray-100"}`}>
        <Paperclip size={22} className="text-gray-500" />
        <div className={`flex-1 rounded-lg p-2 text-sm ${isDark ? "text-gray-300" : "text-gray-500"}`}>
          Message
        </div>
        <Smile size={24} className="text-gray-500" />
        <div className={`${isDark ? "text-blue-400" : "text-blue-500"}`}>
          <Mic size={24} />
        </div>
      </div>
      <div className={`w-28 h-1 rounded-full mx-auto my-1.5 shrink-0 ${isDark ? "bg-white/90" : "bg-black/30"}`} />
    </div>
  );
};
