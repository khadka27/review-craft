import { TransactionData } from "@/types/payment";
import { CheckCircle2 } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const PaytmReceipt = ({ data }: { data: TransactionData }) => {
  // Prepare amount in words (supports up to crores for display)
  const numberToWords = (num: number) => {
    if (!num && num !== 0) return "zero";
    const a = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const b = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const inWords = (n: number): string => {
      if (n < 20) return a[n];
      if (n < 100)
        return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
      if (n < 1000)
        return (
          a[Math.floor(n / 100)] +
          " Hundred" +
          (n % 100 ? " " + inWords(n % 100) : "")
        );
      if (n < 100000)
        return (
          inWords(Math.floor(n / 1000)) +
          " Thousand" +
          (n % 1000 ? " " + inWords(n % 1000) : "")
        );
      if (n < 10000000)
        return (
          inWords(Math.floor(n / 100000)) +
          " Lakh" +
          (n % 100000 ? " " + inWords(n % 100000) : "")
        );
      return (
        inWords(Math.floor(n / 10000000)) +
        " Crore" +
        (n % 10000000 ? " " + inWords(n % 10000000) : "")
      );
    };

    return inWords(num) + " Only";
  };

  const amountNumber = Math.floor(Number(data.amount) || 0);

  return (
    <div className="w-full bg-slate-50 font-sans text-gray-800 flex flex-col min-h-full">
      {/* Top centered Paytm logo */}
      <div className="py-6 flex justify-center">
        <div className="text-2xl font-extrabold text-[#0066cc]">Paytm</div>
      </div>

      {/* Big blue success card */}
      <div className="mx-4 bg-gradient-to-b from-[#e6f7ff] to-white rounded-2xl shadow-md p-6 text-center border border-[#d7f0ff]">
        <div className="text-lg font-semibold text-slate-900">
          Money Sent Successfully
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="text-4xl font-black text-slate-900">
            {getCurrencySymbol(data.currency)}
            {data.amount}
          </div>
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
            <CheckCircle2 size={16} />
          </div>
        </div>
        <div className="mt-3 text-sm text-slate-500">
          {numberToWords(amountNumber)}
        </div>
      </div>

      {/* Details card */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                To: {data.receiverName}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                UPI ID: {data.receiverId ?? "9933165936@ybl"}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-700">
              {(data.receiverName || "SD")
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
          </div>

          <div className="my-4 border-t border-dashed border-slate-200" />

          <div className="mt-2">
            <div className="text-sm font-semibold text-slate-900">
              From: {data.senderName}
            </div>
            <div className="text-xs text-slate-500 mt-2">
              UPI Ref No: {data.transactionId.slice(0, 12)}
            </div>
            <div className="text-xs text-slate-400 mt-1">{data.timestamp}</div>
          </div>
        </div>
      </div>

      <div className="flex-1" />
    </div>
  );
};
