import { ChatData } from "@/types/chat";
import { Phone, Video, Info, ChevronLeft, Plus, Camera, Image as ImageIcon, Mic, ThumbsUp, Smile } from "lucide-react";

export const MessengerChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  return (
    <div className={`h-full flex flex-col font-sans ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <div className={`p-2 py-3 flex items-center gap-2 border-b ${isDark ? "border-gray-800" : "border-gray-100"} shadow-sm`}>
        <ChevronLeft size={28} className="text-blue-600" />
        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden relative">
          <img src={data.contactAvatar || "/images/default-avatar.jpg"} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-[15px] truncate">{data.contactName}</div>
          <div className="text-[11px] text-gray-500 truncate">{data.contactStatus || "Active now"}</div>
        </div>
        <div className="flex gap-4 px-2 text-blue-600">
          <Phone size={22} fill="currentColor" />
          <Video size={24} fill="currentColor" />
          <Info size={22} fill="currentColor" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {data.messages.map((msg, index) => {
          const isMe = msg.sender === "me";
          return (
            <div 
              key={msg.id} 
              className={`flex items-end gap-2 ${isMe ? "flex-row-reverse" : "flex-row"}`}
            >
              {!isMe && (
                <div className="w-7 h-7 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                   <img src={data.contactAvatar || "/images/default-avatar.jpg"} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className={`
                max-w-[70%] p-2.5 px-4 rounded-[20px] text-[15px]
                ${isMe 
                  ? "bg-blue-600 text-white"
                  : (isDark ? "bg-[#242526]" : "bg-[#f0f0f0]")
                }
              `}>
                {msg.image && (
                  <div className="mb-2 rounded-2xl overflow-hidden">
                    <img src={msg.image} alt="" className="w-full h-auto max-h-[300px] object-cover" />
                  </div>
                )}
                {msg.text && <p className="leading-snug break-words whitespace-pre-wrap">{msg.text}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-2 flex items-center gap-3">
        <Plus size={20} className="text-blue-600" />
        <Camera size={20} className="text-blue-600" />
        <ImageIcon size={20} className="text-blue-600" />
        <Mic size={20} className="text-blue-600" />
        <div className={`flex-1 rounded-full p-2 px-4 text-sm ${isDark ? "bg-[#242526]" : "bg-[#f0f2f5] text-gray-500"}`}>
          Aa
        </div>
        <Smile size={20} className="text-blue-600" />
        <ThumbsUp size={22} className="text-blue-600" fill="currentColor" />
      </div>
    </div>
  );
};
