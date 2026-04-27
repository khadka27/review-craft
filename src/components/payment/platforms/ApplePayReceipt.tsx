import { TransactionData } from "@/types/payment";
import { ChevronRight, Apple } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const ApplePayReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-full bg-white font-sans text-black min-h-full flex flex-col overflow-hidden">
      {/* Top Section */}
      <div className="p-8 pt-12 flex flex-col items-center">
         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden shadow-inner">
            <img src="/icons/payment/apple-pay.png" alt="Apple Pay" className="w-full h-auto object-contain p-2" />
         </div>
         <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">Apple Pay</p>
         <h1 className="text-5xl font-black tracking-tighter mb-8">
           {getCurrencySymbol(data.currency)}{data.amount}
         </h1>

         <div className="w-full space-y-1">
            <div className="bg-gray-50 p-5 rounded-2xl flex justify-between items-center group cursor-pointer hover:bg-gray-100 transition-colors">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {data.receiverName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">{data.receiverName}</p>
                    <p className="text-sm text-gray-500">{data.timestamp.split(',')[0]}</p>
                  </div>
               </div>
               <ChevronRight className="text-gray-300" size={20} />
            </div>
         </div>
      </div>

      {/* Details Section */}
      <div className="px-8 flex-1">
         <div className="space-y-6 mt-4">
            <div className="flex justify-between items-center text-sm border-b pb-4">
               <span className="text-gray-500 font-medium">Status</span>
               <span className={`font-bold ${
                 data.status === "failed" ? "text-red-600" : 
                 data.status === "pending" ? "text-amber-600" : "text-green-600"
               }`}>
                 {data.status === "failed" ? "Failed" : 
                  data.status === "pending" ? "Pending" : "Completed"}
               </span>
            </div>
            <div className="flex justify-between items-center text-sm border-b pb-4">
               <span className="text-gray-500 font-medium">Transaction ID</span>
               <span className="font-mono text-xs text-gray-400 uppercase">{data.transactionId}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b pb-4">
               <span className="text-gray-500 font-medium">Payment Method</span>
               <div className="flex items-center gap-2">
                  <div className="w-8 h-5 bg-black rounded flex items-center justify-center text-[8px] text-white font-bold italic">CARD</div>
                  <span className="font-bold">•••• 4242</span>
               </div>
            </div>
         </div>

         {data.note && (
           <div className="mt-8 p-5 bg-gray-50 rounded-2xl">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Note</p>
              <p className="text-sm text-gray-700 font-medium leading-relaxed italic">"{data.note}"</p>
           </div>
         )}
      </div>

      {/* Footer */}
      <div className="p-10 flex flex-col items-center">
         <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-4">Transaction Confirmed</p>
         <div className="flex items-center gap-1.5 grayscale opacity-20">
            <img src="/icons/payment/apple-pay.png" className="w-3.5 h-3.5 object-contain" />
            <span className="text-[10px] font-bold">Wallet</span>
         </div>
      </div>
    </div>
  );
};
