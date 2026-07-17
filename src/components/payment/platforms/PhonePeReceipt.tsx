import { TransactionData } from "@/types/payment";
import { Check, ChevronRight, Copy } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const PhonePeReceipt = ({ data }: { data: TransactionData }) => {
  // Simplified single-column PhonePe-style receipt that matches screenshot layout
  return (
    <div className="w-full min-h-full bg-slate-50 font-sans text-gray-800 flex flex-col">
      <div className="mx-4 mt-6">
        {/* Top small header like PhonePe app */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#6a38ff] flex items-center justify-center text-white font-black text-lg">
            पे
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">
              Transaction Successful
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {data.timestamp}
            </div>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="bg-white mx-4 mt-4 rounded-2xl shadow-md border border-slate-100 overflow-hidden">
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center text-slate-800 font-bold text-xl">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5f259f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
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
                {getCurrencySymbol(data.currency)}
                {data.amount}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600 flex items-center gap-2">
            <span>Banking name :</span>
            <span className="font-medium text-slate-900">
              {data.receiverName}
            </span>
            <span className="text-emerald-600 ml-2">
              <Check size={14} />
            </span>
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M3 7h18M3 12h18M3 17h18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Payment Details
                  </div>
                  <div className="text-xs text-slate-400"> </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </div>

            <div className="mt-4 text-sm">
              <div className="text-xs text-slate-500">Message</div>
              <div className="text-sm text-slate-900 font-medium mt-1">
                {data.note ?? "Pay abishek"}
              </div>

              <div className="mt-4 text-xs text-slate-500">Transaction ID</div>
              <div className="flex items-center justify-between mt-1">
                <div className="text-sm font-mono text-slate-800">
                  {data.transactionId}
                </div>
                <button aria-label="Copy Transaction ID" className="text-[#6a38ff] text-sm font-semibold flex items-center gap-2">
                  <Copy size={14} />{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t pt-4 flex items-start justify-between">
            <div>
              <div className="text-xs text-slate-500">Sent from</div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#2b6cff] font-bold">
                  S
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {data.senderMasked ?? "XXXXXX2845"}
                  </div>
                  <div className="text-xs text-slate-400">
                    UTR: {data.utr ?? "264786711602"}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {getCurrencySymbol(data.currency)}
              {data.amount}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1" />
    </div>
  );
};
