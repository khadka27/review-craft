import { TransactionData } from "@/types/payment";
import { X, Search, Info } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const CashAppReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-full bg-[#00D64F] font-sans text-white min-h-full flex flex-col overflow-hidden">
      <div className="p-6 flex justify-between items-center">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden shadow-sm">
               <img src="/icons/payment/cash-app.png" alt="Cash App" className="w-full h-auto object-contain" />
            </div>
            <span className="font-black text-xl tracking-tight">Cash App</span>
         </div>
         <div className="flex gap-6">
            <Search size={24} strokeWidth={2.5} />
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs uppercase">
               {data.senderName.charAt(0)}
            </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pt-8 px-6">
         <div className="text-8xl font-black mb-4 tracking-tighter">
            {getCurrencySymbol(data.currency)}{data.amount}
         </div>
         <p className="text-xl font-bold mb-12 opacity-90 italic">Paid to {data.receiverName}</p>

         <div className="w-full bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 space-y-8 border border-white/10">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold uppercase">
                  {data.receiverName.charAt(0)}
               </div>
               <div>
                  <p className="text-xl font-black leading-tight">{data.receiverName}</p>
                  <p className="text-sm opacity-60 font-bold tracking-tight">${data.receiverName.toLowerCase().replace(/ /g, '')}</p>
               </div>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                  <span className="font-bold opacity-60 uppercase tracking-widest text-[10px]">Status</span>
                  <span className="font-black bg-white text-[#00D64F] px-3 py-1 rounded-full text-[10px] uppercase">Completed</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="font-bold opacity-60 uppercase tracking-widest text-[10px]">Date</span>
                  <span className="font-black">{data.timestamp.split(',')[0]}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="font-bold opacity-60 uppercase tracking-widest text-[10px]">Identifier</span>
                  <span className="font-mono font-bold text-[10px] uppercase">{data.transactionId}</span>
               </div>
            </div>
         </div>

         {data.note && (
           <div className="w-full mt-6 px-8 py-4 bg-black/5 rounded-2xl text-center italic font-medium opacity-80">
              "{data.note}"
           </div>
         )}
      </div>

      {/* Bottom Actions */}
      <div className="p-10 flex flex-col items-center gap-4">
         <button className="w-full py-4 bg-white text-[#00D64F] rounded-full font-black text-lg shadow-xl shadow-green-900/20 active:scale-95 transition-transform">
            Web Receipt
         </button>
         <div className="flex items-center gap-2 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Info size={12} />
            Help Center
         </div>
      </div>
    </div>
  );
};
