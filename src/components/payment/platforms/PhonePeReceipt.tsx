import { TransactionData } from "@/types/payment";
import { Check, Share2, HelpCircle, ChevronRight, Clock, AlertCircle } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const PhonePeReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";

  return (
    <div className="w-full bg-[#f7f5ff] font-sans text-gray-800 flex flex-col min-h-full">
      {/* PhonePe Header */}
      <div className="bg-[#5f259f] p-4 pt-8 flex justify-between items-center text-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
             <img src="/icons/payment/phonepe.png" alt="PhonePe" className="w-full h-auto object-contain" />
          </div>
          <span className="font-bold text-lg">PhonePe</span>
        </div>
        <div className="flex gap-4">
          <HelpCircle size={20} />
          <Share2 size={20} />
        </div>
      </div>

      <div className="bg-white m-4 rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
        {/* Transaction Summary */}
        <div className="p-6 flex flex-col items-center text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white ring-8 ${
            isFailed ? "bg-red-500 ring-red-50" : isPending ? "bg-amber-500 ring-amber-50" : "bg-[#5f259f] ring-purple-50"
          }`}>
            {isFailed ? <AlertCircle size={40} strokeWidth={3} /> : isPending ? <Clock size={40} strokeWidth={3} /> : <Check size={40} strokeWidth={3} />}
          </div>
          <h2 className={`text-xl font-black mb-1 uppercase tracking-tight ${
            isFailed ? "text-red-600" : isPending ? "text-amber-600" : "text-[#5f259f]"
          }`}>
            {isFailed ? "Transaction Failed" : isPending ? "Transaction Pending" : "Transaction Successful"}
          </h2>
          <p className="text-gray-400 text-xs font-bold">{data.timestamp}</p>
          
          <div className="mt-8 mb-4">
             <span className="text-5xl font-black text-gray-900 tracking-tighter">
               {getCurrencySymbol(data.currency)}{data.amount}
             </span>
          </div>

          <div className="w-full border-t border-purple-50 pt-4 mt-4 flex justify-between items-center px-2">
             <div className="text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase">To</p>
                <p className="text-sm font-black text-gray-800">{data.receiverName}</p>
             </div>
             <ChevronRight className="text-purple-200" size={20} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 border-t border-purple-50">
           <button className="p-4 text-[#5f259f] font-bold text-sm border-r border-purple-50 hover:bg-purple-50 transition-colors">
              View History
           </button>
           <button className="p-4 text-[#5f259f] font-bold text-sm hover:bg-purple-50 transition-colors">
              Check Balance
           </button>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-white m-4 mt-0 rounded-2xl shadow-sm border border-purple-100 p-6 space-y-6">
        <div className="flex justify-between items-start">
           <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Transaction ID</p>
              <p className="text-sm font-mono text-gray-600">{data.transactionId}</p>
           </div>
           <button className="text-[#5f259f] text-[10px] font-black uppercase tracking-widest bg-purple-50 px-2 py-1 rounded">Copy</button>
        </div>

        <div className="flex justify-between items-start">
           <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Debited From</p>
              <div className="flex items-center gap-2">
                 <div className="w-8 h-5 bg-gray-100 rounded border text-[8px] flex items-center justify-center font-bold">SBI</div>
                 <p className="text-sm font-bold text-gray-700">XXXX XXXX 1234</p>
              </div>
           </div>
           <p className="text-sm font-black text-gray-900">{getCurrencySymbol(data.currency)}{data.amount}</p>
        </div>

        {data.note && (
          <div className="bg-purple-50 p-3 rounded-lg">
             <p className="text-[10px] text-purple-400 font-bold uppercase mb-1">Message</p>
             <p className="text-sm text-purple-900 italic font-medium">"{data.note}"</p>
          </div>
        )}
      </div>

      {/* PhonePe Footer */}
      <div className="mt-auto p-4 flex justify-center items-center gap-2 opacity-30">
         <img 
            src="/icons/payment/BHIM-UPI.png" 
            className="h-3" 
            alt="UPI" 
         />
         <div className="w-px h-3 bg-gray-400"></div>
         <span className="text-[8px] font-black uppercase tracking-tighter">Secured by PhonePe</span>
      </div>
    </div>
  );
};
