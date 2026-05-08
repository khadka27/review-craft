import { TransactionData } from "@/types/payment";
import { Check, ChevronRight, Copy, CheckCircle } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const PhonePeNewReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";

  return (
    <div className="w-full min-h-full bg-gradient-to-b from-purple-50 to-white font-sans text-gray-800 flex flex-col">
      {/* PhonePe Header */}
      <div className="bg-gradient-to-r from-[#5f259f] to-[#7b2cbf] p-4 pt-8 pb-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-lg font-black text-[#5f259f]">पे</span>
          </div>
          <div>
            <div className="text-white font-bold text-lg">PhonePe</div>
            <div className="text-purple-100 text-xs font-medium">
              Digital Payments
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center flex-1">
        {/* Status Icon */}
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg ${
            isFailed
              ? "bg-gradient-to-br from-red-400 to-red-600 text-white"
              : isPending
                ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white"
                : "bg-gradient-to-br from-green-400 to-emerald-600 text-white"
          }`}
        >
          <CheckCircle size={48} strokeWidth={2} />
        </div>

        <p
          className={`text-sm font-black uppercase tracking-widest mb-2 ${
            isFailed
              ? "text-red-600"
              : isPending
                ? "text-amber-600"
                : "text-emerald-600"
          }`}
        >
          {isFailed
            ? "Payment Failed"
            : isPending
              ? "Payment Pending"
              : "Payment Successful"}
        </p>

        <div className="text-5xl font-black text-slate-900 mb-3 tracking-tight">
          ₹{data.amount}
        </div>

        <p className="text-sm text-slate-500 font-medium mb-8">
          to {data.receiverName}
        </p>

        {/* Transaction Card */}
        <div className="w-full bg-white border border-purple-100 p-6 rounded-2xl mb-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                ↗
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {data.receiverName}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {data.receiverId ?? "******5936@ybl"}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-slate-900">
                ₹{data.amount}
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="text-xs text-slate-500 mb-2">Transaction ID</div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-mono text-slate-800">
                {data.transactionId}
              </div>
              <button className="text-[#5f259f] text-sm font-semibold flex items-center gap-2">
                <Copy size={14} />
              </button>
            </div>
          </div>

          {data.note && (
            <div className="border-t pt-4 mt-4">
              <div className="text-xs text-slate-500 mb-2">Message</div>
              <div className="text-sm text-slate-900 font-medium">
                {data.note}
              </div>
            </div>
          )}
        </div>

        {/* Transaction Details */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 font-semibold">Date & Time</span>
            <span className="text-slate-900 font-bold">{data.timestamp}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 font-semibold">UPI Ref No</span>
            <span className="text-slate-900 font-mono text-xs">
              {data.utr || data.transactionId.slice(0, 12)}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 bg-white border-t border-slate-100 flex justify-center items-center shadow-sm">
        <div className="text-xs font-bold tracking-tight text-slate-700">
          Powered by PhonePe • UPI Payments
        </div>
      </div>
    </div>
  );
};