import { ChatData } from "@/types/chat";
import { WhatsAppChat } from "./platforms/WhatsAppChat";
import { MessengerChat } from "./platforms/MessengerChat";
import { InstagramChat } from "./platforms/InstagramChat";
import { TelegramChat } from "./platforms/TelegramChat";
import { TwitterChat } from "./platforms/TwitterChat";
import { DiscordChat } from "./platforms/DiscordChat";
import { IMessageChat } from "./platforms/IMessageChat";

interface ChatPreviewProps {
  chatData: ChatData;
}

export const ChatPreview = ({ chatData }: ChatPreviewProps) => {
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
    <div className="w-full flex justify-center p-4">
      {/* Visual Phone Frame (Preview only) */}
      <div className="w-full max-w-[375px] shadow-2xl rounded-[3rem] border-[8px] border-gray-900 overflow-hidden bg-white aspect-[9/19.5]">
        {/* Flat Capture Area (for download) */}
        <div 
          id="chat-screen-capture" 
          className="h-full w-full bg-white rounded-none border-none"
          style={{ borderRadius: '0px' }} // Force no rounding for capture
        >
          {renderPlatform()}
        </div>
      </div>
    </div>
  );
};
