import { ChatData } from "@/types/chat";
import { Phone, Video, ChevronLeft, Mic, Camera, AppWindow } from "lucide-react";

export const IMessageChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark";

  return (
    <div className={`h-full flex flex-col font-sans ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <div className={`p-2 pt-10 flex flex-col items-center border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="w-full flex justify-between px-2 text-blue-500">
          <ChevronLeft size={28} />
          <div className="flex gap-4">
             <Video size={24} />
             <Phone size={24} />
          </div>
        </div>
        <div className="w-14 h-14 rounded-full bg-gray-400 mt-2 mb-1 flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
           {data.contactAvatar ? (
             <img src={data.contactAvatar} alt="" className="w-full h-full object-cover" />
           ) : (
             <span>{data.contactName.charAt(0)}</span>
           )}
        </div>
        <div className="text-[11px] font-medium mb-2">{data.contactName} {'>'}</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {data.messages.map((msg) => {
          const isMe = msg.sender === "me";
          return (
            <div key={msg.id} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
              <div className={`
                max-w-[70%] p-2.5 px-4 rounded-[20px] text-[15px]
                ${isMe 
                  ? "bg-[#007aff] text-white"
                  : (isDark ? "bg-[#262626]" : "bg-[#e9e9eb] text-black")
                }
              `}>
                {msg.image && (
                  <div className="mb-1 rounded-[18px] overflow-hidden">
                    <img src={msg.image} alt="" className="w-full h-auto max-h-[300px] object-cover" />
                  </div>
                )}
                {msg.text && <p className="leading-snug">{msg.text}</p>}
              </div>
              {isMe && (
                <span className="text-[10px] text-gray-500 mt-1 mr-1">Delivered</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-2 pb-8 flex items-center gap-3">
        <Camera size={26} className="text-gray-500" />
        <AppWindow size={26} className="text-gray-500" />
        <div className={`flex-1 rounded-full border p-1.5 px-4 text-[16px] flex justify-between items-center ${isDark ? "bg-black border-gray-700 text-gray-500" : "bg-white border-gray-300 text-gray-400"}`}>
          <span>iMessage</span>
          <Mic size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};
