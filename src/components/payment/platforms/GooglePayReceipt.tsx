import { TransactionData } from "@/types/payment";
import {
  Check,
  Mail,
  Download,
  Clock,
  AlertCircle,
  Info,
  ShieldCheck,
  Copy,
} from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const GooglePayReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white font-sans text-gray-900 min-h-full flex flex-col overflow-hidden">
      {/* Google Pay Rainbow Header */}
      <div className="flex h-2 w-full shadow-sm">
        <div className="bg-[#4285F4] flex-1"></div>
        <div className="bg-[#EA4335] flex-1"></div>
        <div className="bg-[#FBBC05] flex-1"></div>
        <div className="bg-[#34A853] flex-1"></div>
      </div>

      <div className="p-8 pt-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md">
              G
            </div>
            <div>
              <p className="font-black text-lg tracking-tight text-slate-900">
                Google Pay
              </p>
              <p className="text-[10px] text-slate-500 font-medium uppercase">
                Payment Receipt
              </p>
            </div>
          </div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md ${
              isSuccess
                ? "bg-gradient-to-br from-green-500 to-emerald-600"
                : isPending
                  ? "bg-gradient-to-br from-amber-500 to-orange-600"
                  : "bg-gradient-to-br from-red-500 to-rose-600"
            }`}
          >
            {data.senderName.charAt(0)}
          </div>
        </div>

        {/* Status Section */}
        <div className="flex flex-col items-center mb-10">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg ${
              isFailed
                ? "bg-red-100 text-red-600"
                : isPending
                  ? "bg-amber-100 text-amber-600"
                  : "bg-green-100 text-green-600"
            }`}
          >
            {isFailed ? (
              <AlertCircle size={48} strokeWidth={1.5} />
            ) : isPending ? (
              <Clock size={48} strokeWidth={1.5} />
            ) : (
              <Check size={48} strokeWidth={1.5} />
            )}
          </div>
          <p
            className={`text-xs font-black uppercase tracking-widest mb-2 ${
              isFailed
                ? "text-red-600"
                : isPending
                  ? "text-amber-600"
                  : "text-slate-400"
            }`}
          >
            {isFailed
              ? "Payment Failed"
              : isPending
                ? "Payment Pending"
                : "Payment Successful"}
          </p>
          <p className="text-sm text-slate-500 font-medium mb-6">to</p>
          <p className="text-lg font-black text-slate-900 mb-6">
            {data.receiverName}
          </p>
          <p className="text-5xl font-black tracking-tighter text-slate-900">
            {getCurrencySymbol(data.currency)} {data.amount}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-8"></div>

        {/* Transaction Details */}
        <div className="space-y-6">
          {/* To: Receiver */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 uppercase font-semibold tracking-widest mb-2">
                  To
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {data.receiverName}
                </p>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  {data.receiverName.toLowerCase().replace(/ /g, "")}@upi
                </p>
              </div>
              <Info size={18} className="text-slate-300" />
            </div>
          </div>

          {/* From: Sender */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 uppercase font-semibold tracking-widest mb-2">
                  From
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {data.senderName}
                </p>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Bank of Baroda
                </p>
              </div>
              <Info size={18} className="text-slate-300" />
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-3 border-t pt-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-semibold uppercase tracking-wide text-[11px]">
                UPI Transaction ID
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-800 text-xs tracking-tighter">
                  {data.transactionId.slice(0, 12)}
                </span>
                <Copy
                  size={14}
                  className="text-slate-300 cursor-pointer hover:text-slate-600"
                />
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-semibold uppercase tracking-wide text-[11px]">
                Date & Time
              </span>
              <span className="font-semibold text-slate-900">
                {data.timestamp}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-semibold uppercase tracking-wide text-[11px]">
                Payment Method
              </span>
              <span className="flex items-center gap-2">
                <div className="w-6 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-[7px] font-black text-white shadow-sm">
                  UPI
                </div>
                <span className="font-semibold text-slate-900">BHIM UPI</span>
              </span>
            </div>
          </div>

          {/* Note */}
          {data.note && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mt-6">
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-wider mb-2">
                Reference
              </p>
              <p className="text-sm text-slate-800 font-medium">{data.note}</p>
            </div>
          )}
        </div>
      </div>

      {/* Security Footer */}
      <div className="mt-auto p-6 bg-white border-t border-slate-100 flex flex-col items-center gap-4 shadow-sm">
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
          <ShieldCheck size={18} />
          <span>Secured by Google Pay</span>
        </div>
        <p className="text-[9px] text-slate-400 font-medium text-center">
          All transactions are protected by industry-standard encryption and
          verified by Google
        </p>
      </div>
    </div>
  );
};
