import { TransactionData } from "@/types/payment";
import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const VenmoReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-[380px] bg-white font-sans text-gray-900 min-h-[600px] flex flex-col shadow-2xl border border-gray-100">
      {/* Venmo Header */}
      <div className="bg-[#008CFF] p-4 flex justify-between items-center text-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-white rounded overflow-hidden flex items-center justify-center p-1">
               <img src="/icons/payment/Venmo.png" alt="Venmo" className="w-full h-auto object-contain" />
            </div>
           <span className="font-bold text-lg">Venmo</span>
        </div>
        <MoreHorizontal size={24} />
      </div>

      <div className="p-6">
         {/* User Profiles */}
         <div className="flex items-center gap-4 mb-8">
            <div className="relative flex -space-x-4">
               <div className="w-14 h-14 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center text-blue-600 font-bold text-xl">
                 {data.senderName.charAt(0)}
               </div>
               <div className="w-14 h-14 bg-sky-100 rounded-full border-2 border-white flex items-center justify-center text-sky-600 font-bold text-xl">
                 {data.receiverName.charAt(0)}
               </div>
            </div>
            <div>
               <p className="text-lg font-medium leading-tight">
                 <span className="font-bold">{data.senderName}</span> paid <span className="font-bold">{data.receiverName}</span>
               </p>
               <p className="text-sm text-gray-500 mt-0.5">{data.timestamp}</p>
            </div>
         </div>

         {/* Note / Emoji */}
         <div className="bg-[#f0f9ff] p-6 rounded-3xl mb-8 border border-blue-50">
            <p className="text-2xl mb-1">{data.note || "💸 Payment"}</p>
            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Transaction Note</p>
         </div>

         {/* Amount */}
         <div className="flex flex-col items-center py-8 border-t border-b border-gray-100 mb-8">
            <p className="text-6xl font-black text-[#008CFF] tracking-tighter">
              {getCurrencySymbol(data.currency)}{data.amount}
            </p>
            <div className="flex items-center gap-2 mt-4 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100 uppercase tracking-widest">
               Completed
            </div>
         </div>

         {/* Social Actions */}
         <div className="flex justify-around items-center pt-2">
            <div className="flex flex-col items-center gap-1.5 text-gray-400">
               <Heart size={24} />
               <span className="text-[10px] font-bold">LIKE</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400">
               <MessageCircle size={24} />
               <span className="text-[10px] font-bold">COMMENT</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-[#008CFF]">
               <Share size={24} />
               <span className="text-[10px] font-bold">SHARE</span>
            </div>
         </div>
      </div>

      {/* Transaction ID Footer */}
      <div className="mt-auto p-6 bg-gray-50 flex flex-col items-center">
         <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Transaction ID</p>
         <p className="text-[10px] font-mono text-gray-400 uppercase">{data.transactionId}</p>
      </div>
    </div>
  );
};
