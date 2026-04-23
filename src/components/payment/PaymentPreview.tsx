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

interface PaymentPreviewProps {
  paymentData: TransactionData;
}

export const PaymentPreview = ({ paymentData }: PaymentPreviewProps) => {
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
    <div id="payment-receipt-capture" className="bg-white shadow-2xl rounded-sm">
      {renderPlatformReceipt()}
    </div>
  );
};
