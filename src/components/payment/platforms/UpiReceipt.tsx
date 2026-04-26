import { TransactionData } from "@/types/payment";
import { CheckCircle, ArrowRight, Shield, Copy } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const UpiReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-[380px] bg-white font-sans text-slate-800 shadow-2xl rounded-2xl overflow-hidden border">
      {/* UPI Header */}
      <div className="bg-[#f2f7ff] p-4 flex justify-between items-center border-b">
        <img 
          src="/icons/payment/BHIM-UPI.png" 
          className="h-6" 
          alt="UPI Logo" 
        />
        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 tracking-wider">
          BHIM <span className="text-slate-800">UPI</span>
        </div>
      </div>

      <div className="p-8 flex flex-col items-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={40} strokeWidth={2.5} />
        </div>
        
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Payment Successful</p>
        <div className="text-5xl font-black text-slate-900 mb-8 tracking-tight">
          {getCurrencySymbol(data.currency)}{data.amount}
        </div>

        {/* Transfer Visual */}
        <div className="w-full flex items-center justify-between bg-slate-50 p-4 rounded-2xl mb-8">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              {data.senderName.charAt(0)}
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">{data.senderName.split(' ')[0]}</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center px-4">
             <div className="w-full h-px bg-slate-200 relative">
                <ArrowRight size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300" />
             </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
              {data.receiverName.charAt(0)}
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">{data.receiverName.split(' ')[0]}</span>
          </div>
        </div>

        {/* Transaction Info */}
        <div className="w-full space-y-4 border-t border-dashed pt-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">To</span>
            <span className="text-slate-900 font-bold">{data.receiverName}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Reference ID</span>
            <div className="flex items-center gap-2">
               <span className="text-slate-900 font-mono text-xs">{data.transactionId}</span>
               <Copy size={12} className="text-slate-400" />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Transaction Date</span>
            <span className="text-slate-900 font-bold">{data.timestamp}</span>
          </div>
        </div>
      </div>

      {/* UPI Footer */}
      <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-emerald-400" />
          <span className="text-xs font-bold tracking-tight">Payment is 100% Secure</span>
        </div>
        <div className="text-[10px] opacity-60 font-bold tracking-widest uppercase">
          NPCI Certified
        </div>
      </div>
    </div>
  );
};
