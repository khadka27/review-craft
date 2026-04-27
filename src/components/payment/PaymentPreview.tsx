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
      {/* Mobile Preview Container - Removed outer black border */}
      <div className="w-full max-w-[375px] relative group transition-all duration-500 shadow-2xl">
        {/* Capture Area */}
        <div id="payment-receipt-capture" className="w-full bg-white relative flex flex-col rounded-3xl overflow-hidden">
          {/* Status Bar Area */}
          <div className="h-10 relative z-20 bg-transparent">
            <MobileStatusBar isDark={isDark} />
          </div>
          
          {/* Content Area */}
          <div className="w-full -mt-10 pt-10">
            {renderPlatformReceipt()}
          </div>

          {/* Home Indicator Area */}
          <div className="h-10 flex justify-center items-center w-full bg-white relative z-20 mt-auto">
             <div className={`w-32 h-1.5 rounded-full ${isDark ? "bg-black/20" : "bg-black/10"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
