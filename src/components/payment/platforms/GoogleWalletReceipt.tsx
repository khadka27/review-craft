import { TransactionData } from "@/types/payment";
import {
  Check,
  MoreVertical,
  Smartphone,
  ShieldCheck,
  Clock,
  AlertCircle,
} from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const GoogleWalletReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";

  return (
    <div className="w-full bg-[#f8f9fa] font-sans text-gray-900 min-h-full flex flex-col overflow-hidden">
      {/* App Bar */}
      <div className="p-6 pt-12 flex justify-between items-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
            <img
              src="/icons/payment/google-wallet.png"
              alt="Google Wallet"
              className="w-full h-auto object-contain"
            />
          </div>
          <span className="font-medium text-lg text-gray-700">
            Google Wallet
          </span>
        </div>
        <MoreVertical size={20} className="text-gray-500" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white shadow-lg ring-8 ${
              isFailed
                ? "bg-red-500 ring-red-50"
                : isPending
                  ? "bg-amber-500 ring-amber-50"
                  : "bg-blue-600 ring-blue-50"
            }`}
          >
            {isFailed ? (
              <AlertCircle size={36} strokeWidth={3} />
            ) : isPending ? (
              <Clock size={36} strokeWidth={3} />
            ) : (
              <Check size={36} strokeWidth={3} />
            )}
          </div>

          <h2 className="text-xl font-bold mb-1">
            {isFailed
              ? "Payment failed"
              : isPending
                ? "Payment pending"
                : "Payment sent"}
          </h2>
          <div className="text-4xl font-black mb-8 tracking-tight">
            {getCurrencySymbol(data.currency)} {data.amount}
          </div>

          <div className="w-full space-y-4 border-t pt-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 font-semibold uppercase tracking-wide text-[11px]">
                Sent To
              </span>
              <span className="font-bold text-gray-900">
                {data.receiverName}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 font-semibold uppercase tracking-wide text-[11px]">
                Transaction Date
              </span>
              <span className="font-medium text-gray-800">
                {data.timestamp}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 font-semibold uppercase tracking-wide text-[11px]">
                Payment Source
              </span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-blue-600 rounded border text-[8px] flex items-center justify-center font-bold text-white">
                  VISA
                </div>
                <span className="font-medium text-gray-800">•••• 8899</span>
              </div>
            </div>
          </div>
        </div>

        {data.note && (
          <div className="mt-4 bg-blue-50 p-4 rounded-2xl text-sm text-blue-800 border border-blue-100">
            <p className="font-bold text-[10px] text-blue-700 uppercase tracking-widest mb-1">
              Payment Memo
            </p>
            {data.note}
          </div>
        )}
      </div>

      {/* Security Footer */}
      <div className="p-8 flex flex-col items-center gap-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-green-700 font-semibold text-xs uppercase tracking-widest">
          <ShieldCheck size={18} />
          <span>Secured by Google</span>
        </div>
        <p className="text-[9px] text-gray-500 text-center max-w-[200px] font-medium">
          Transaction protected by Google's SSL/TLS encryption & fraud detection
          systems.
        </p>
      </div>
    </div>
  );
};
