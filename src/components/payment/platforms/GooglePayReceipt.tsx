import { TransactionData } from "@/types/payment";
import { Check, X, Clock, ShieldCheck, Info } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const GooglePayReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isPending = data.status === "pending";

  return (
    <div className="w-full bg-white font-sans text-gray-900 min-h-full flex flex-col relative overflow-hidden">
      {/* Google Pay Colors Top Bar */}
      <div className="flex h-1.5 w-full">
        <div className="bg-[#4285F4] flex-1"></div>
        <div className="bg-[#EA4335] flex-1"></div>
        <div className="bg-[#FBBC05] flex-1"></div>
        <div className="bg-[#34A853] flex-1"></div>
      </div>

      <div className="p-6 flex flex-col items-center">
        {/* Animated Checkmark Simulation */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 ${
          isSuccess ? "bg-[#34A853] border-green-100 text-white" : 
          isPending ? "bg-[#FBBC05] border-yellow-100 text-white" : 
          "bg-[#EA4335] border-red-100 text-white"
        }`}>
          {isSuccess && <Check size={48} strokeWidth={3} />}
          {isPending && <Clock size={48} strokeWidth={3} />}
          {!isSuccess && !isPending && <X size={48} strokeWidth={3} />}
        </div>

        <h2 className="text-2xl font-medium mb-1">
          {isSuccess ? "Paid" : isPending ? "Processing" : "Failed"}
        </h2>
        <div className="text-4xl font-bold mb-8">
          {getCurrencySymbol(data.currency)} {data.amount}
        </div>

        {/* Transaction Details */}
        <div className="w-full space-y-6 px-2">
          <div className="flex justify-between items-center text-sm border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                {data.receiverName.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{data.receiverName}</p>
                <p className="text-xs text-gray-500">To: {data.receiverName.toLowerCase().replace(/ /g, '')}@okaxis</p>
              </div>
            </div>
            <Info size={18} className="text-gray-400" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Transaction Date</span>
              <span className="font-medium text-gray-700">{data.timestamp}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">UPI Transaction ID</span>
              <span className="font-medium text-gray-700 font-mono text-xs">{data.transactionId}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Paid from</span>
              <span className="font-medium text-gray-700">Google Pay Balance</span>
            </div>
          </div>
        </div>

        {data.note && (
          <div className="w-full mt-8 bg-gray-50 p-4 rounded-xl text-sm text-gray-600">
            <p className="font-bold text-xs text-gray-400 uppercase mb-1">Note</p>
            {data.note}
          </div>
        )}
      </div>

      {/* Security Footer */}
      <div className="mt-auto p-6 flex flex-col items-center gap-4 bg-gray-50">
        <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
          <ShieldCheck size={18} />
          <span>Secured by Google</span>
        </div>
        <div className="flex gap-4">
           <img src="/icons/payment/BHIM-UPI.png" className="h-4 opacity-50" />
           <img src="/icons/payment/g-pay.png" className="h-4 opacity-50" />
        </div>
      </div>
    </div>
  );
};
