import { ChatData } from "@/types/chat";
import { Hash, Bell, Pin, Users, Inbox, HelpCircle, PlusCircle, Gift, Sticker, Smile } from "lucide-react";
import MobileStatusBar from "@/components/ui/MobileStatusBar";

export const DiscordChat = ({ data }: { data: ChatData }) => {
  const isDark = data.theme === "dark" || true; // Discord mobile app is typically dark

  return (
    <div className={`w-full h-full flex-1 flex flex-col min-h-0 font-sans ${isDark ? "bg-[#313338] text-[#dbdee1]" : "bg-white text-[#060607]"}`}>
      {/* Status Bar */}
      <div className={`px-0 pt-2 pb-1 shrink-0 ${isDark ? "bg-[#2b2d31]" : "bg-gray-100"}`}>
        <MobileStatusBar isDark={isDark} batteryLevel={87} />
      </div>

      {/* Header */}
      <div className={`p-2.5 px-3 flex items-center gap-2 border-b shadow-sm shrink-0 ${isDark ? "border-[#2b2d31] bg-[#2b2d31]" : "border-gray-200 bg-white"}`}>
        <Hash size={18} className="text-[#80848e]" />
        <div className="flex-1 font-bold text-sm truncate">{data.contactName}</div>
        <div className="flex gap-3 px-1 text-[#b5bac1]">
          <Bell size={18} />
          <Pin size={18} />
          <Users size={18} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {data.messages.map((msg, index) => {
          // In Discord, messages from the same user are often grouped
          const isFirstInGroup = index === 0 || data.messages[index-1].sender !== msg.sender;
          
          return (
            <div key={msg.id} className={`flex gap-4 ${isFirstInGroup ? "mt-4" : "mt-1"} hover:bg-black/5 p-1 -ml-1 rounded`}>
              {isFirstInGroup ? (
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex-shrink-0 overflow-hidden">
                   {msg.sender === "me" ? (
                     <div className="w-full h-full bg-blue-600" />
                   ) : (
                     <img src={data.contactAvatar || "/images/default-avatar.jpg"} alt="" className="w-full h-full object-cover" />
                   )}
                </div>
              ) : (
                <div className="w-10 flex-shrink-0 text-[10px] text-[#949ba4] text-center pt-1 opacity-0 hover:opacity-100">
                  {msg.timestamp.split(' ')[0]}
                </div>
              )}
              <div className="flex-1 min-w-0">
                {isFirstInGroup && (
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-sm ${msg.sender === "me" ? "text-blue-400" : "text-white hover:underline cursor-pointer"}`}>
                      {msg.sender === "me" ? "You" : data.contactName}
                    </span>
                    <span className="text-[10px] text-[#949ba4]">{msg.timestamp}</span>
                  </div>
                )}
                {msg.image && (
                  <div className="mt-2 mb-2 rounded-lg overflow-hidden max-w-md border border-[#2b2d31]">
                    <img src={msg.image} alt="" className="w-full h-auto max-h-[400px] object-contain" />
                  </div>
                )}
                {msg.text && (
                  <div className="text-[14px] leading-relaxed break-words whitespace-pre-wrap">
                    {msg.text}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3 pt-0 shrink-0">
        <div className={`flex items-center gap-3 p-2 px-3 rounded-lg ${isDark ? "bg-[#383a40]" : "bg-[#ebedef]"}`}>
          <PlusCircle size={18} className="text-[#b5bac1]" />
          <div className="flex-1 text-xs text-[#949ba4]">Message @{data.contactName}</div>
          <div className="flex gap-2.5 text-[#b5bac1]">
            <Gift size={18} />
            <Sticker size={18} />
            <Smile size={18} />
          </div>
        </div>
      </div>
      <div className={`w-28 h-1 rounded-full mx-auto my-1.5 shrink-0 ${isDark ? "bg-white/90" : "bg-black/30"}`} />
    </div>
  );
};
