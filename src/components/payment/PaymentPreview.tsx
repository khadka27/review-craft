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
import { PhonePeNewReceipt } from "./platforms/PhonePeNewReceipt";
import { GPayReceipt } from "./platforms/GPayReceipt";
import { BhimReceipt } from "./platforms/BhimReceipt";
import { Wifi, Signal } from "lucide-react";

interface PaymentPreviewProps {
  paymentData: TransactionData;
}

const MobileStatusBar = ({
  isDark,
  batteryLevel = 76,
}: {
  isDark: boolean;
  batteryLevel?: number;
}) => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  // Render status bar elements in black for consistency
  const textColor = "text-black";
  const batteryGradientOffset = Math.min(100, Math.max(0, batteryLevel));

  return (
    <div
      className={`flex justify-between items-center px-4 py-2 w-full ${textColor} absolute top-0 left-0 z-20`}
    >
      <span className="text-sm font-medium tracking-tight">{time}</span>

      <div className="flex items-center gap-3">
        <Signal size={16} strokeWidth={2} className="opacity-95" />
        <Wifi size={16} strokeWidth={2} className="opacity-95" />

        {/* Battery icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-95"
        >
          <defs>
            <linearGradient
              id="batteryGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="currentColor" />
              <stop
                offset={`${batteryGradientOffset}%`}
                stopColor="currentColor"
              />
              <stop offset={`${batteryGradientOffset}%`} stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path
            d="M10.79 9.197a.75.75 0 0 0-.76-.75c-1.38.016-2.758.08-4.135.189l-.188.015a1.004 1.004 0 0 0-.9.78a11.686 11.686 0 0 0 0 5.12c.095.429.459.745.896.781l.175.015c1.382.114 2.767.18 4.152.197a.75.75 0 0 0 .76-.75V9.197Z"
            fill="url(#batteryGradient)"
          />
          <path
            fillRule="evenodd"
            d="M22.25 14v-4a1.75 1.75 0 0 0-1.75-1.75h-.65v-.06a2.434 2.434 0 0 0-2.245-2.427l-1.269-.1a68.646 68.646 0 0 0-10.672 0l-1.348.106c-1.21.094-2.2 1-2.4 2.197a24.398 24.398 0 0 0 0 8.068a2.642 2.642 0 0 0 2.4 2.197l1.348.105a68.63 68.63 0 0 0 10.672 0l1.269-.099a2.434 2.434 0 0 0 2.245-2.427v-.06h.65A1.75 1.75 0 0 0 22.25 14Zm-1.5-4v4a.25.25 0 0 1-.25.25h-1.4a.75.75 0 0 0-.75.75v.81a.934.934 0 0 1-.862.932l-1.268.099c-3.475.27-6.965.27-10.44 0l-1.347-.105a1.142 1.142 0 0 1-1.038-.95a22.898 22.898 0 0 1 0-7.572a1.142 1.142 0 0 1 1.038-.95L5.78 7.16c3.475-.27 6.965-.27 10.44 0l1.268.1a.934.934 0 0 1 .862.93V9c0 .414.336.75.75.75h1.4a.25.25 0 0 1 .25.25Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export const PaymentPreview = ({ paymentData }: PaymentPreviewProps) => {
  // Determine if the platform has a dark header to adjust status bar text color
  const darkHeaderPlatforms = [
    "paytm",
    "stripe",
    "phonepay",
    "phonepe",
    "bhim",
    "venmo",
    "fonepay",
    "cashapp",
  ];
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
      case "phonepe":
        return <PhonePeNewReceipt data={paymentData} />;
      case "gpay":
        return <GPayReceipt data={paymentData} />;
      case "bhim":
        return <BhimReceipt data={paymentData} />;
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
    <div className="w-full flex justify-center p-4 md:p-8">
      {/* Mobile Preview Container with Realistic Frame */}
      <div className="w-full max-w-[375px] relative group transition-all duration-500">
        {/* Outer Frame Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 rounded-[48px] blur-2xl -z-10"></div>

        {/* Phone Bezel Container */}
        <div className="relative rounded-[48px] bg-black/90 p-2.5 shadow-2xl border border-black/50">
          {/* Screen with notch */}
          <div className="relative bg-white rounded-[42px] overflow-hidden shadow-lg">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-40 h-7 bg-black rounded-b-3xl"></div>

            {/* Capture Area */}
            <div
              id="payment-receipt-capture"
              className="w-full bg-white relative flex flex-col"
            >
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
                <div
                  className={`w-32 h-1.5 rounded-full ${isDark ? "bg-black/20" : "bg-black/10"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reflection/Shine Effect */}
        <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};
