import { ChatData } from "@/types/chat";
import { Phone, Video, MoreVertical, ChevronLeft, Mic, Paperclip, Camera, Smile, Send } from "lucide-react";

export const WhatsAppChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  return (
    <div className={`h-full flex flex-col font-sans ${isDark ? "bg-[#0b141a] text-[#e9edef]" : "bg-[#efeae2] text-[#111b21]"}`}>
      {/* Header */}
      <div className={`${isDark ? "bg-[#202c33]" : "bg-[#f0f2f5]"} p-2 py-3 flex items-center gap-2 shadow-sm z-10`}>
        <ChevronLeft size={20} className="text-blue-500" />
        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
          <img src={data.contactAvatar || "/images/default-avatar.jpg"} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate">{data.contactName}</div>
          <div className="text-[10px] text-gray-500 truncate">{data.contactStatus || "online"}</div>
        </div>
        <div className="flex gap-4 px-2">
          <Video size={18} className="text-blue-500" />
          <Phone size={18} className="text-blue-500" />
          <MoreVertical size={18} className="text-blue-500" />
        </div>
      </div>

      {/* Chat Background (WhatsApp pattern usually) */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 relative" style={{ 
        backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
        backgroundBlendMode: isDark ? 'overlay' : 'soft-light',
        backgroundColor: isDark ? '#0b141a' : '#efeae2'
      }}>
        {data.messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div className={`
              max-w-[85%] p-1.5 px-2 rounded-lg shadow-sm text-sm relative
              ${msg.sender === "me" 
                ? (isDark ? "bg-[#005c4b] rounded-tr-none" : "bg-[#d9fdd3] rounded-tr-none")
                : (isDark ? "bg-[#202c33] rounded-tl-none" : "bg-white rounded-tl-none")
              }
            `}>
              <p className="leading-relaxed">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[9px] text-gray-500">{msg.timestamp}</span>
                {msg.sender === "me" && (
                  <div className="flex">
                    <span className="text-blue-400 text-[10px]">✓✓</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={`${isDark ? "bg-[#202c33]" : "bg-[#f0f2f5]"} p-2 flex items-center gap-2`}>
        <Smile size={24} className="text-gray-500" />
        <Paperclip size={24} className="text-gray-500" />
        <div className={`flex-1 rounded-lg p-2 text-sm ${isDark ? "bg-[#2a3942]" : "bg-white"}`}>
          Type a message
        </div>
        {data.messages.length > 0 ? (
           <div className="bg-[#00a884] p-2 rounded-full text-white">
             <Send size={20} />
           </div>
        ) : (
          <Mic size={24} className="text-gray-500" />
        )}
      </div>
    </div>
  );
};
