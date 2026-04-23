import { ChatData } from "@/types/chat";
import { Phone, Video, Info, ChevronLeft, Camera, Mic, Image as ImageIcon, Heart } from "lucide-react";

export const InstagramChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  return (
    <div className={`h-full flex flex-col font-sans ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <div className={`p-3 flex items-center gap-3 border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}>
        <ChevronLeft size={28} />
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img src={data.contactAvatar || "/images/default-avatar.jpg"} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate">{data.contactName}</div>
          <div className="text-[10px] text-gray-500 truncate">{data.contactStatus || "Active now"}</div>
        </div>
        <div className="flex gap-5 px-1">
          <Phone size={24} />
          <Video size={24} />
          <Info size={24} />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {data.messages.map((msg, index) => {
          const isMe = msg.sender === "me";
          return (
            <div 
              key={msg.id} 
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              {!isMe && (
                <div className="w-7 h-7 rounded-full bg-gray-300 mr-2 self-end overflow-hidden">
                   <img src={data.contactAvatar || "/images/default-avatar.jpg"} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className={`
                max-w-[70%] p-3 px-4 rounded-[22px] text-sm
                ${isMe 
                  ? "bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 text-white"
                  : (isDark ? "bg-[#262626]" : "bg-gray-100")
                }
              `}>
                <p className="leading-snug">{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4">
        <div className={`flex items-center gap-3 p-2 px-4 rounded-full border ${isDark ? "bg-black border-gray-800 text-white" : "bg-white border-gray-200"}`}>
          <div className="bg-blue-500 rounded-full p-1.5 text-white">
            <Camera size={20} fill="currentColor" />
          </div>
          <div className="flex-1 text-sm text-gray-500">Message...</div>
          <div className="flex gap-4">
            <Mic size={24} />
            <ImageIcon size={24} />
            <Heart size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
