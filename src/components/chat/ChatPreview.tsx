import { useState, useEffect } from "react";
import { ChatData } from "@/types/chat";
import { WhatsAppChat } from "./platforms/WhatsAppChat";
import { MessengerChat } from "./platforms/MessengerChat";
import { InstagramChat } from "./platforms/InstagramChat";
import { TelegramChat } from "./platforms/TelegramChat";
import { TwitterChat } from "./platforms/TwitterChat";
import { DiscordChat } from "./platforms/DiscordChat";
import { IMessageChat } from "./platforms/IMessageChat";
import { Wifi, Signal } from "lucide-react";

interface ChatPreviewProps {
  chatData: ChatData;
}

export const ChatPreview = ({ chatData }: ChatPreviewProps) => {
  const isDark = chatData.theme === "dark" || chatData.platform === "discord";

  const renderPlatform = () => {
    switch (chatData.platform) {
      case "whatsapp":
        return <WhatsAppChat data={chatData} />;
      case "messenger":
        return <MessengerChat data={chatData} />;
      case "instagram":
        return <InstagramChat data={chatData} />;
      case "telegram":
        return <TelegramChat data={chatData} />;
      case "twitter":
        return <TwitterChat data={chatData} />;
      case "discord":
        return <DiscordChat data={chatData} />;
      case "imessage":
        return <IMessageChat data={chatData} />;
      default:
        return (
          <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
            <p className="text-gray-500">Preview Coming Soon</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full flex justify-center p-1 sm:p-4">
      {/* Visual Flagship Phone Frame */}
      <div className="w-full max-w-[360px] sm:max-w-[375px] shadow-2xl rounded-[46px] bg-[#161a22] p-2 sm:p-2.5 border border-slate-700/60 transition-all duration-300">
        {/* Screen Area */}
        <div className={`relative rounded-[38px] overflow-hidden ${isDark ? "bg-[#111]" : "bg-white"} shadow-inner flex flex-col h-[620px] sm:h-[650px]`}>
          {/* Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-4.5 bg-black rounded-full shadow-sm flex items-center justify-between px-2 pointer-events-none">
            <div className="w-1.5 h-1.5 rounded-full bg-[#050505] ml-auto"></div>
          </div>

          {/* Flat Capture Area (for download) */}
          <div 
            id="chat-screen-capture" 
            className={`w-full h-full ${isDark ? "bg-[#111]" : "bg-white"} flex flex-col flex-1 overflow-hidden relative`}
          >
            <div className="w-full h-full flex-1 flex flex-col overflow-hidden min-h-0">
              {renderPlatform()}
            </div>
            <div 
              className="w-full bg-slate-900 text-slate-300 text-[9px] font-mono font-bold tracking-wider py-1.5 px-2 text-center border-t border-slate-700 uppercase select-none pointer-events-none z-30 export-watermark-banner shrink-0"
              data-export-watermark="true"
            >
              SIMULATED CHAT MOCKUP — FOR DESIGN USE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
