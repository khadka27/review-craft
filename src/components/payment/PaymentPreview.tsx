import { TransactionData } from "@/types/payment";
import { PaytmReceipt } from "./platforms/PaytmReceipt";
import { StripeReceipt } from "./platforms/StripeReceipt";
import { GooglePayReceipt } from "./platforms/GooglePayReceipt";
import { UpiReceipt } from "./platforms/UpiReceipt";
import { PhonePeReceipt } from "./platforms/PhonePeReceipt";
import { GoogleWalletReceipt } from "./platforms/GoogleWalletReceipt";
import { ApplePayReceipt } from "./platforms/ApplePayReceipt";
import { VenmoReceipt } from "./platforms/VenmoReceipt";
import { FonepayReceipt } from "./platforms/FonepayReceipt";
import { CashAppReceipt } from "./platforms/CashAppReceipt";
import { Wifi, Signal, Battery } from "lucide-react";

interface PaymentPreviewProps {
  paymentData: TransactionData;
}

const MobileStatusBar = ({ isDark }: { isDark: boolean }) => {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className={`flex justify-between items-center px-6 py-3 w-full ${textColor} absolute top-0 left-0 z-20`}>
      <span className="text-xs font-bold">{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <Battery size={14} strokeWidth={2.5} className="rotate-0" />
      </div>
    </div>
  );
};

export const PaymentPreview = ({ paymentData }: PaymentPreviewProps) => {
  // Determine if the platform has a dark header to adjust status bar text color
  const darkHeaderPlatforms = ["paytm", "stripe", "phonepay", "venmo", "fonepay", "cashapp"];
  const isDark = darkHeaderPlatforms.includes(paymentData.platform);

  const renderPlatformReceipt = () => {
    switch (paymentData.platform) {
      case "paytm":
        return <PaytmReceipt data={paymentData} />;
      case "stripe":
        return <StripeReceipt data={paymentData} />;
      case "googlepay":
        return <GooglePayReceipt data={paymentData} />;
      case "upi":
        return <UpiReceipt data={paymentData} />;
      case "phonepay":
        return <PhonePeReceipt data={paymentData} />;
      case "googlewallet":
        return <GoogleWalletReceipt data={paymentData} />;
      case "applepay":
        return <ApplePayReceipt data={paymentData} />;
      case "venmo":
        return <VenmoReceipt data={paymentData} />;
      case "fonepay":
        return <FonepayReceipt data={paymentData} />;
      case "cashapp":
        return <CashAppReceipt data={paymentData} />;
      default:
        return <PaytmReceipt data={paymentData} />;
    }
  };

  return (
    <div className="w-full flex justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-[375px] shadow-2xl rounded-[3rem] border-[10px] border-gray-900 overflow-hidden bg-white aspect-[9/19.5] relative">
        <div id="payment-receipt-capture" className="h-full w-full relative flex flex-col pt-10">
          <MobileStatusBar isDark={isDark} />
          
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {renderPlatformReceipt()}
          </div>

          {/* Home Indicator */}
          <div className="h-8 flex justify-center items-center absolute bottom-0 w-full bg-transparent">
             <div className={`w-32 h-1.5 rounded-full ${isDark ? "bg-white/30" : "bg-black/20"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
