import { TransactionData } from "@/types/payment";
import { CheckCircle, Share2, HelpCircle, Download } from "lucide-react";

export const FonepayReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-[380px] bg-white font-sans text-gray-800 flex flex-col min-h-[620px] shadow-2xl rounded-2xl overflow-hidden border">
      {/* Fonepay Header */}
      <div className="bg-[#ed1c24] p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
              <span className="text-[#ed1c24] font-black text-xs">f</span>
           </div>
           <span className="font-black text-lg tracking-tight italic">fonepay</span>
        </div>
        <div className="flex gap-4">
          <HelpCircle size={20} />
          <Share2 size={20} />
        </div>
      </div>

      <div className="p-8 flex flex-col items-center">
         {/* Success Check */}
         <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 text-white ring-8 ring-green-50 shadow-lg">
            <CheckCircle size={48} strokeWidth={2.5} />
         </div>

         <h2 className="text-xl font-black text-green-600 mb-1 uppercase tracking-tight">Payment Successful</h2>
         <p className="text-gray-400 text-xs font-bold mb-8 uppercase tracking-widest">{data.timestamp}</p>
         
         <div className="text-5xl font-black text-[#ed1c24] mb-12 tracking-tighter">
           Rs. {data.amount}
         </div>

         {/* Transaction Summary Box */}
         <div className="w-full bg-gray-50 rounded-2xl p-6 space-y-5 border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-200 border-dashed pb-4">
               <span className="text-xs text-gray-500 font-bold uppercase">To</span>
               <span className="text-sm font-black text-gray-800">{data.receiverName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 border-dashed pb-4">
               <span className="text-xs text-gray-500 font-bold uppercase">From</span>
               <span className="text-sm font-black text-gray-800">{data.senderName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 border-dashed pb-4">
               <span className="text-xs text-gray-500 font-bold uppercase">Transaction ID</span>
               <span className="text-xs font-mono font-bold text-gray-600">{data.transactionId}</span>
            </div>
            {data.note && (
              <div className="flex justify-between items-start">
                 <span className="text-xs text-gray-500 font-bold uppercase">Remarks</span>
                 <span className="text-sm font-medium text-gray-700 italic text-right max-w-[150px]">"{data.note}"</span>
              </div>
            )}
         </div>

         {/* Action Buttons */}
         <div className="w-full mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-4 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">
               <Download size={16} /> Save
            </button>
            <button className="flex items-center justify-center gap-2 p-4 bg-[#ed1c24] text-white rounded-xl font-bold text-sm shadow-lg shadow-red-100 hover:bg-red-700 transition-colors">
               Done
            </button>
         </div>
      </div>

      {/* Powered By */}
      <div className="mt-auto p-4 flex justify-center opacity-30">
         <p className="text-[9px] font-black uppercase tracking-[0.3em]">Interoperable QR Network</p>
      </div>
    </div>
  );
};
