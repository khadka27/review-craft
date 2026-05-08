import { TransactionData } from "@/types/payment";
import { CheckCircle, Copy, Shield } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const GPayReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";

  return (
    <div className="w-full min-h-full bg-white font-sans text-gray-800 flex flex-col">
      {/* Google Pay Header */}
      <div className="bg-gradient-to-r from-[#4285f4] to-[#34a853] p-4 pt-8 pb-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-lg font-black text-[#4285f4]">G</span>
          </div>
          <div>
            <div className="text-white font-bold text-lg">Google Pay</div>
            <div className="text-blue-100 text-xs font-medium">
              Tez • A Google Product
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center flex-1">
        {/* Status */}
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
          Paid to {data.receiverName}
        </p>

        {/* Payment Card */}
        <div className="w-full bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                {data.receiverName.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-base font-semibold text-slate-900">
                  {data.receiverName}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {data.receiverId ?? data.receiverName.toLowerCase().replace(/\s+/g, '') + "@okaxis"}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-slate-900">
                ₹{data.amount}
              </div>
              <div className="text-xs text-green-600 font-medium">
                ✓ Completed
              </div>
            </div>
          </div>

          {data.note && (
            <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
              <div className="text-xs text-slate-500 mb-1">Note</div>
              <div className="text-sm text-slate-900 font-medium">
                {data.note}
              </div>
            </div>
          )}

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 font-mono text-xs">
                  {data.transactionId.slice(0, 16)}
                </span>
                <Copy size={14} className="text-blue-500 cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">Date & Time</span>
              <span className="text-slate-900 font-medium">{data.timestamp}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">UPI Reference ID</span>
              <span className="text-slate-900 font-mono text-xs">
                {data.utr || data.transactionId.slice(-12)}
              </span>
            </div>
          </div>
        </div>

        {/* From Account */}
        <div className="w-full bg-white border border-gray-200 p-4 rounded-xl">
          <div className="text-xs text-slate-500 mb-2">Paid from</div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-slate-600 font-bold text-sm">
              {data.senderName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                {data.senderName}
              </div>
              <div className="text-xs text-slate-500">
                {data.senderMasked ?? "••••••2845"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-green-600" />
          <span className="text-xs font-bold text-slate-700">
            Secured by Google
          </span>
        </div>
        <div className="text-xs text-slate-500">
          UPI • NPCI
        </div>
      </div>
    </div>
  );
};