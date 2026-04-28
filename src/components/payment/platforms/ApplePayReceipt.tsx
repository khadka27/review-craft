import { TransactionData } from "@/types/payment";
import { ChevronLeft } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const ApplePayReceipt = ({ data }: { data: TransactionData }) => {
  const statusLabel =
    data.status === "failed"
      ? "Failed"
      : data.status === "pending"
        ? "Pending"
        : "Cleared";

  return (
    <div className="w-full bg-white font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-black min-h-full flex flex-col overflow-hidden">
      {/* Apple Status Bar */}
      <div className="px-6 pt-4 pb-2 flex items-center">
        <ChevronLeft className="text-blue-500" size={24} />
        <span className="text-blue-500 font-semibold ml-1">Back</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        {/* Amount Section */}
        <div className="text-center mb-12">
          <p className="text-7xl font-black tracking-tight mb-2">
            {getCurrencySymbol(data.currency)}
            {data.amount}
          </p>
          <p className="text-lg text-gray-600 font-semibold mb-1">
            {data.receiverName}
          </p>
          <p className="text-sm text-gray-500">{data.timestamp}</p>
        </div>

        {/* Status Card */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 space-y-5">
          {/* Status */}
          <div className="flex justify-between items-center">
            <p className="text-base font-bold">Status: {statusLabel}</p>
          </div>

          {/* Card Number */}
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-gray-500 text-sm">Card Number Used</span>
            <span className="text-gray-600 font-medium">•••• 4242</span>
          </div>

          {/* Item Breakdown */}
          <div className="border-t pt-4 space-y-3">
            {/* Item */}
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-black text-black">Apple</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-base">Apple One</p>
                <p className="text-gray-500 text-sm">Premier</p>
              </div>
              <span className="font-semibold text-base">
                {getCurrencySymbol(data.currency)}
                {(parseFloat(data.amount) * 0.93).toFixed(2)}
              </span>
            </div>

            {/* Tax */}
            <div className="flex justify-between items-center border-t pt-3">
              <p className="font-semibold">Tax</p>
              <span className="text-gray-600">
                {getCurrencySymbol(data.currency)}
                {(parseFloat(data.amount) * 0.065).toFixed(2)}
              </span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t pt-3">
              <p className="text-lg font-bold">Total</p>
              <span className="text-lg font-bold">
                {getCurrencySymbol(data.currency)}
                {data.amount}
              </span>
            </div>

            {/* Rewards/Cashback */}
            <div className="flex justify-between items-center border-t pt-3">
              <p className="text-gray-600 text-sm">3% Daily Cash</p>
              <span className="text-gray-600 text-sm">
                {getCurrencySymbol(data.currency)}
                {(parseFloat(data.amount) * 0.03).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Statement Info */}
        <div className="mb-6">
          <p className="text-[11px] text-gray-400 font-semibold tracking-widest uppercase mb-3">
            Shown on statement as:
          </p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900">apple.com/bill</p>
          </div>
        </div>

        {/* Note if present */}
        {data.note && (
          <div className="mb-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-[11px] text-blue-600 font-bold uppercase tracking-widest mb-1">
              Note
            </p>
            <p className="text-sm text-gray-800">{data.note}</p>
          </div>
        )}
      </div>

      {/* Footer Button */}
      <div className="px-6 pb-8">
        <button className="w-full py-3 text-blue-500 font-semibold text-base">
          Report an Issue
        </button>
      </div>
    </div>
  );
};
