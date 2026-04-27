import { TransactionData } from "@/types/payment";
import { Check, Mail, Download, Clock, AlertCircle, Info, ShieldCheck } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const GooglePayReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";

  return (
    <div className="w-full bg-white font-sans text-gray-900 min-h-full flex flex-col relative overflow-hidden">
      {/* Google Pay Colors Top Bar */}
      <div className="flex h-1.5 w-full">
        <div className="bg-[#4285F4] flex-1"></div>
        <div className="bg-[#EA4335] flex-1"></div>
        <div className="bg-[#FBBC05] flex-1"></div>
        <div className="bg-[#34A853] flex-1"></div>
      </div>
      
      <div className="p-6 pt-12">
        <div className="flex justify-between items-center mb-8">
          <img src="/icons/payment/googlepay.png" alt="Google Pay" className="h-6" />
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xs font-bold">{data.senderName.charAt(0)}</span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            isFailed ? "bg-red-50 text-red-600" : isPending ? "bg-amber-50 text-amber-600" : "bg-green-50 text-green-600"
          }`}>
            {isFailed ? <AlertCircle size={32} /> : isPending ? <Clock size={32} /> : <Check size={32} />}
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            {isFailed ? "Payment failed" : isPending ? "Payment pending" : "Paid to"}
          </p>
          <p className="text-xl font-bold mb-4">{data.receiverName}</p>
          <p className="text-5xl font-bold tracking-tight">
            {getCurrencySymbol(data.currency)} {data.amount}
          </p>
        </div>

        {/* Transaction Details */}
        <div className="w-full space-y-6 px-2">
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex-1">
              <p className="font-bold">{data.receiverName}</p>
              <p className="text-xs text-gray-500">To: {data.receiverName.toLowerCase().replace(/ /g, '')}@okaxis</p>
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

          {data.note && (
            <div className="w-full mt-8 bg-gray-50 p-4 rounded-xl text-sm text-gray-600">
              <p className="font-bold text-xs text-gray-400 uppercase mb-1">Note</p>
              {data.note}
            </div>
          )}
        </div>
      </div>

      {/* Security Footer */}
      <div className="mt-auto p-6 flex flex-col items-center gap-4 bg-gray-50">
        <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
          <ShieldCheck size={18} />
          <span>Secured by Google</span>
        </div>
        <div className="flex gap-4">
           <img src="/icons/payment/BHIM-UPI.png" className="h-4 opacity-50" />
           <img src="/icons/payment/googlepay.png" className="h-4 opacity-50" />
        </div>
      </div>
    </div>
  );
};
