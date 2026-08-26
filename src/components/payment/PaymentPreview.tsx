import { useState, useEffect } from "react";
import { TransactionData } from "@/types/payment";
import dynamic from "next/dynamic";

const PaytmReceipt = dynamic(() => import("./platforms/PaytmReceipt").then(m => m.PaytmReceipt), { ssr: true });
const StripeReceipt = dynamic(() => import("./platforms/StripeReceipt").then(m => m.StripeReceipt), { ssr: true });
const GooglePayReceipt = dynamic(() => import("./platforms/GooglePayReceipt").then(m => m.GooglePayReceipt), { ssr: true });
const UpiReceipt = dynamic(() => import("./platforms/UpiReceipt").then(m => m.UpiReceipt), { ssr: true });
const PhonePeReceipt = dynamic(() => import("./platforms/PhonePeReceipt").then(m => m.PhonePeReceipt), { ssr: true });
const GoogleWalletReceipt = dynamic(() => import("./platforms/GoogleWalletReceipt").then(m => m.GoogleWalletReceipt), { ssr: true });
const ApplePayReceipt = dynamic(() => import("./platforms/ApplePayReceipt").then(m => m.ApplePayReceipt), { ssr: true });
const VenmoReceipt = dynamic(() => import("./platforms/VenmoReceipt").then(m => m.VenmoReceipt), { ssr: true });
const FonepayReceipt = dynamic(() => import("./platforms/FonepayReceipt").then(m => m.FonepayReceipt), { ssr: true });
const CashAppReceipt = dynamic(() => import("./platforms/CashAppReceipt").then(m => m.CashAppReceipt), { ssr: true });
const PhonePeNewReceipt = dynamic(() => import("./platforms/PhonePeNewReceipt").then(m => m.PhonePeNewReceipt), { ssr: true });
const GPayReceipt = dynamic(() => import("./platforms/GPayReceipt").then(m => m.GPayReceipt), { ssr: true });
const BhimReceipt = dynamic(() => import("./platforms/BhimReceipt").then(m => m.BhimReceipt), { ssr: true });
// New global platforms
const PayPalReceipt = dynamic(() => import("./platforms/PayPalReceipt").then(m => m.PayPalReceipt), { ssr: true });
const ZelleReceipt = dynamic(() => import("./platforms/ZelleReceipt").then(m => m.ZelleReceipt), { ssr: true });
const InteracReceipt = dynamic(() => import("./platforms/InteracReceipt").then(m => m.InteracReceipt), { ssr: true });
const WeroReceipt = dynamic(() => import("./platforms/WeroReceipt").then(m => m.WeroReceipt), { ssr: true });
const IDEALReceipt = dynamic(() => import("./platforms/IDEALReceipt").then(m => m.IDEALReceipt), { ssr: true });
const BancontactReceipt = dynamic(() => import("./platforms/BancontactReceipt").then(m => m.BancontactReceipt), { ssr: true });
const BizumReceipt = dynamic(() => import("./platforms/BizumReceipt").then(m => m.BizumReceipt), { ssr: true });
const SatispayReceipt = dynamic(() => import("./platforms/SatispayReceipt").then(m => m.SatispayReceipt), { ssr: true });
const BLIKReceipt = dynamic(() => import("./platforms/BLIKReceipt").then(m => m.BLIKReceipt), { ssr: true });
const MBWayReceipt = dynamic(() => import("./platforms/MBWayReceipt").then(m => m.MBWayReceipt), { ssr: true });
const TWINTReceipt = dynamic(() => import("./platforms/TWINTReceipt").then(m => m.TWINTReceipt), { ssr: true });
const SwishReceipt = dynamic(() => import("./platforms/SwishReceipt").then(m => m.SwishReceipt), { ssr: true });
const VippsReceipt = dynamic(() => import("./platforms/VippsReceipt").then(m => m.VippsReceipt), { ssr: true });
const MobilePayReceipt = dynamic(() => import("./platforms/MobilePayReceipt").then(m => m.MobilePayReceipt), { ssr: true });
const STCPayReceipt = dynamic(() => import("./platforms/STCPayReceipt").then(m => m.STCPayReceipt), { ssr: true });
const KNETReceipt = dynamic(() => import("./platforms/KNETReceipt").then(m => m.KNETReceipt), { ssr: true });
const PayShapReceipt = dynamic(() => import("./platforms/PayShapReceipt").then(m => m.PayShapReceipt), { ssr: true });
import { Wifi, Signal } from "lucide-react";

interface PaymentPreviewProps {
  paymentData: TransactionData;
}

const MobileStatusBar = ({
  isDark,
  batteryLevel = 88,
}: {
  isDark: boolean;
  batteryLevel?: number;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const time = mounted 
    ? new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "09:41";

  const textColor = isDark ? "text-white" : "text-slate-900";
  const iconColor = isDark ? "#ffffff" : "#0f172a";

  return (
    <div
      className={`flex justify-between items-center px-6 pt-2 pb-1 w-full ${textColor} absolute top-0 left-0 right-0 z-20 select-none pointer-events-none`}
    >
      <span className="text-[12px] font-bold tracking-tight leading-none drop-shadow-sm">{time}</span>

      <div className="flex items-center gap-1.5 leading-none">
        <Signal size={12} strokeWidth={2.5} style={{ color: iconColor }} />
        <Wifi size={12} strokeWidth={2.5} style={{ color: iconColor }} />

        {/* Battery Icon */}
        <div className="flex items-center gap-0.5 ml-0.5">
          <div
            className="w-4.5 h-2.5 rounded-[3px] p-[1px] flex items-center"
            style={{ border: `1.5px solid ${iconColor}` }}
          >
            <div
              className="h-full rounded-[1px]"
              style={{
                width: `${batteryLevel}%`,
                backgroundColor: iconColor,
              }}
            />
          </div>
          <div
            className="w-0.5 h-1 rounded-r-[1px]"
            style={{ backgroundColor: iconColor }}
          />
        </div>
      </div>
    </div>
  );
};

export const PaymentPreview = ({ paymentData }: PaymentPreviewProps) => {
  // Determine if the platform has a dark header to adjust status bar text color
  const darkHeaderPlatforms = [
    "paytm",
    "stripe",
    "bhim",
    "venmo",
    "fonepay",
    "cashapp",
    "paypal",
    "zelle",
    "phonepe",
    "upi",
    "gpay",
    "interac",
    "wero",
    "ideal",
    "bancontact",
    "bizum",
    "satispay",
    "blik",
    "mbway",
    "twint",
    "vipps",
    "mobilepay",
    "stcpay",
    "knet",
    "payshap",
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
      // New global platforms
      case "paypal":
        return <PayPalReceipt data={paymentData} />;
      case "zelle":
        return <ZelleReceipt data={paymentData} />;
      case "interac":
        return <InteracReceipt data={paymentData} />;
      case "wero":
        return <WeroReceipt data={paymentData} />;
      case "ideal":
        return <IDEALReceipt data={paymentData} />;
      case "bancontact":
        return <BancontactReceipt data={paymentData} />;
      case "bizum":
        return <BizumReceipt data={paymentData} />;
      case "satispay":
        return <SatispayReceipt data={paymentData} />;
      case "blik":
        return <BLIKReceipt data={paymentData} />;
      case "mbway":
        return <MBWayReceipt data={paymentData} />;
      case "twint":
        return <TWINTReceipt data={paymentData} />;
      case "swish":
        return <SwishReceipt data={paymentData} />;
      case "vipps":
        return <VippsReceipt data={paymentData} />;
      case "mobilepay":
        return <MobilePayReceipt data={paymentData} />;
      case "stcpay":
        return <STCPayReceipt data={paymentData} />;
      case "knet":
        return <KNETReceipt data={paymentData} />;
      case "payshap":
        return <PayShapReceipt data={paymentData} />;
      default:
        return <PaytmReceipt data={paymentData} />;
    }
  };

  return (
    <div className="w-full flex justify-center p-0 sm:p-2 md:p-4">
      {/* Mobile Preview Container with Realistic Flagship Frame */}
      <div className="w-full max-w-full sm:max-w-[390px] md:max-w-[410px] relative group transition-all duration-300">
        {/* Outer Frame Shadow */}
        <div className="absolute inset-0 bg-black/50 rounded-[36px] sm:rounded-[48px] blur-xl -z-10 transform scale-95 translate-y-3"></div>

        {/* Premium Device Titanium Frame */}
        <div className="relative rounded-[32px] sm:rounded-[46px] bg-[#161a22] p-1.5 sm:p-2.5 shadow-2xl border border-slate-700/60">
          {/* Screen area with dynamic island */}
          <div className="relative bg-white rounded-[26px] sm:rounded-[38px] overflow-hidden shadow-inner flex flex-col">
            {/* Dynamic Island Pill */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-24 h-4.5 bg-black rounded-full shadow-sm flex items-center justify-between px-2 pointer-events-none">
              <div className="w-1.5 h-1.5 rounded-full bg-[#050505] ml-auto"></div>
            </div>

            {/* Capture Area (Full Receipt) */}
            <div
              id="payment-receipt-capture"
              className="w-full bg-white relative flex flex-col overflow-hidden"
            >
              {/* Floating Status Bar */}
              <MobileStatusBar isDark={isDark} />

              {/* Platform Receipt */}
              <div className="w-full">
                {renderPlatformReceipt()}
              </div>

              {/* Permanent Simulation Watermark */}
              <div 
                className="w-full bg-slate-900 text-slate-200 text-[9px] font-mono font-bold tracking-wider py-1.5 px-2 text-center uppercase select-none pointer-events-none z-30 export-watermark-banner"
                data-export-watermark="true"
              >
                SIMULATED / SAMPLE — NOT A REAL TRANSACTION
              </div>

              {/* Home Indicator Area */}
              <div className="h-5 flex justify-center items-center w-full bg-white relative z-20 mt-auto pb-1">
                <div
                  className={`w-28 h-1 rounded-full ${isDark ? "bg-black/20" : "bg-black/15"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
