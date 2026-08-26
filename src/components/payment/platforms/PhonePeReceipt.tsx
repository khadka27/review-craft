import { TransactionData } from "@/types/payment";
import { Check, ChevronRight, Copy, Share2, Shield, HelpCircle, ArrowUpRight } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";
import { useState } from "react";

export const PhonePeReceipt = ({ data }: { data: TransactionData }) => {
  const [copied, setCopied] = useState(false);

  const isSuccess = data.status === "success" || !data.status;
  const isFailed = data.status === "failed";

  const currencySymbol = getCurrencySymbol(data.currency);

  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleCopy = () => {
    if (data.transactionId) {
      navigator.clipboard.writeText(data.transactionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const receiverUpi = data.receiverId ?? `${(data.receiverName || "store").toLowerCase().replace(/\s+/g, "")}@ybl`;
  const utrNumber = data.utr ?? "423189271602";

  return (
    <div className="w-full min-h-[580px] bg-[#f4f0fa] font-sans text-slate-800 flex flex-col justify-between p-4 pt-9 select-none">
      <div>
        {/* Top Header Card / Banner */}
        <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-purple-100/80 mb-3">
          <div className="w-11 h-11 rounded-full bg-[#00b259] flex items-center justify-center text-white shadow-md shadow-green-500/20 flex-shrink-0">
            {isSuccess ? (
              <Check size={24} strokeWidth={3} />
            ) : isFailed ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <span className="text-xl font-bold">⏳</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-base font-extrabold text-slate-900 leading-snug">
              {isSuccess ? "Transaction Successful" : isFailed ? "Transaction Failed" : "Transaction Pending"}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              {data.timestamp || "18 Aug 2026, 10:44 AM"}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-extrabold text-xs shadow-sm flex-shrink-0">
            पे
          </div>
        </div>

        {/* Main PhonePe Receipt Card */}
        <div className="bg-white rounded-2xl shadow-md border border-purple-100/60 overflow-hidden">
          <div className="p-4 sm:p-5">
            {/* Receiver Row */}
            <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5f259f] to-[#7b2cbf] flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0">
                  <ArrowUpRight size={22} strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-slate-900 truncate">
                    {data.receiverName || "Receiver"}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono truncate mt-0.5">
                    {receiverUpi}
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="text-lg font-black text-slate-900">
                  {currencySymbol}{formattedAmount}
                </div>
              </div>
            </div>

            {/* Banking Name */}
            <div className="mt-3.5 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Banking name:</span>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold">
                <span>{data.receiverName || "Receiver"}</span>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                  <Check size={10} strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Payment Details Accordion Section */}
            <div className="mt-4 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center text-[#5f259f]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <line x1="3" y1="12" x2="21" y2="12"/>
                      <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-900">Payment Details</span>
                </div>
                <ChevronRight size={16} className="text-slate-400" />
              </div>

              <div className="mt-3 space-y-3 pl-1">
                {/* Note / Message */}
                {data.note && (
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Message</div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      {data.note}
                    </div>
                  </div>
                )}

                {/* Transaction ID */}
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Transaction ID</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-xs font-mono font-bold text-slate-900 tracking-tight">
                      {data.transactionId || "TXN2608181044"}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-[11px] font-bold text-[#5f259f] hover:text-[#4a1c7e] bg-purple-50 px-2 py-0.5 rounded-md transition-colors"
                    >
                      <Copy size={11} />
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Debited / Sent From Section */}
            <div className="mt-4 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 font-medium">Debited from</span>
                <span className="text-xs font-extrabold text-slate-900">
                  {currencySymbol}{formattedAmount}
                </span>
              </div>

              <div className="flex items-center gap-3 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#1e3a8a] text-white font-extrabold text-xs flex items-center justify-center shadow-xs flex-shrink-0">
                  S
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {data.senderMasked || "State Bank of India - 2845"}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    UTR: {utrNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share & Support Buttons */}
        <div className="mt-3.5 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-[#5f259f]/40 text-[#5f259f] rounded-xl text-xs font-bold shadow-xs hover:bg-purple-50 transition-colors"
          >
            <Share2 size={13} />
            <span>Share Receipt</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold shadow-xs hover:bg-slate-50 transition-colors"
          >
            <HelpCircle size={13} />
            <span>Contact Support</span>
          </button>
        </div>
      </div>

      {/* Security Footer */}
      <div className="mt-4 text-center flex items-center justify-center gap-1.5 text-slate-400 text-[10px] font-semibold">
        <Shield size={12} className="text-[#5f259f]" />
        <span>Secured by PhonePe • BHIM UPI</span>
      </div>
    </div>
  );
};

