import { TransactionData } from "@/types/payment";
import { CheckCircle, Copy, Shield, ArrowRight, Clock, AlertCircle } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const BhimReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";

  return (
    <div className="w-full bg-gradient-to-b from-orange-50 to-white font-sans text-slate-800 min-h-full flex flex-col overflow-hidden">
      {/* BHIM Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 pt-8 pb-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-lg font-black text-orange-600">भ</span>
          </div>
          <div>
            <div className="text-white font-bold text-lg">BHIM</div>
            <div className="text-orange-100 text-xs font-medium">
              Bharat Interface for Money
            </div>
          </div>
        </div>
        <div className="text-white text-xs font-medium">
          NPCI
        </div>
      </div>

      <div className="p-8 flex flex-col items-center flex-1">
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
          {isFailed ? (
            <AlertCircle size={48} strokeWidth={2} />
          ) : isPending ? (
            <Clock size={48} strokeWidth={2} />
          ) : (
            <CheckCircle size={48} strokeWidth={2} />
          )}
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
            ? "Transaction Failed"
            : isPending
              ? "Transaction Pending"
              : "Transaction Successful"}
        </p>

        <div className="text-5xl font-black text-slate-900 mb-3 tracking-tight">
          ₹{data.amount}
        </div>

        <p className="text-sm text-slate-500 font-medium mb-8">
          sent to {data.receiverName}
        </p>

        {/* Transfer Visual */}
        <div className="w-full flex items-center justify-between bg-white border border-orange-100 p-4 rounded-2xl mb-8 shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              {data.senderName.charAt(0)}
            </div>
            <span className="text-xs font-bold text-slate-600 text-center w-14 truncate">
              {data.senderName}
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center px-4">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent relative">
              <ArrowRight
                size={16}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-400 bg-white rounded-full p-1"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              {data.receiverName.charAt(0)}
            </div>
            <span className="text-xs font-bold text-slate-600 text-center w-14 truncate">
              {data.receiverName}
            </span>
          </div>
        </div>

        {/* Transaction Info */}
        <div className="w-full space-y-4 border-t-2 border-orange-100 pt-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 font-semibold uppercase tracking-wide text-xs">
              Transaction ID
            </span>
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-mono font-bold text-xs tracking-tighter">
                {data.transactionId.slice(0, 14)}
              </span>
              <Copy
                size={14}
                className="text-orange-500 cursor-pointer hover:text-orange-700 transition"
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 font-semibold uppercase tracking-wide text-xs">
              Date & Time
            </span>
            <span className="text-slate-900 font-bold">{data.timestamp}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 font-semibold uppercase tracking-wide text-xs">
              UPI Reference No
            </span>
            <span className="text-slate-900 font-mono text-xs">
              {data.utr || data.transactionId.slice(-12)}
            </span>
          </div>
          {data.note && (
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 mt-4">
              <p className="text-xs text-orange-700 font-bold uppercase tracking-widest mb-1">
                Remark
              </p>
              <p className="text-sm text-slate-800 font-medium">{data.note}</p>
            </div>
          )}
        </div>
      </div>

      {/* BHIM Footer */}
      <div className="p-6 bg-white border-t border-slate-100 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-orange-600" />
          <span className="text-xs font-bold tracking-tight text-slate-700">
            Secured by NPCI
          </span>
        </div>
        <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
          Digital India
        </div>
      </div>
    </div>
  );
};