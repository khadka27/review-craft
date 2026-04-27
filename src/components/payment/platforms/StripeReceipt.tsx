import { TransactionData } from "@/types/payment";
import { Check, Mail, Download, Printer } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const StripeReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-full min-h-full bg-white font-sans text-slate-900 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-[#635bff] h-2"></div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#635bff] rounded-lg flex items-center justify-center p-1.5 shadow-sm">
               <img src="/icons/payment/stripe.png" alt="Stripe" className="w-full h-auto object-contain brightness-0 invert" />
            </div>
            <div>
              <div className="text-[#635bff] font-black text-2xl tracking-tight leading-none mb-1">STRIPE</div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Receipt from ReviewCraft</p>
            </div>
          </div>
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-100">
            <Check size={14} /> Paid
          </div>
        </div>

        <div className="mb-8">
          <p className="text-4xl font-bold tracking-tight">
            {getCurrencySymbol(data.currency)} {data.amount}
          </p>
          <p className="text-sm text-slate-500 mt-1">Paid on {data.timestamp}</p>
        </div>

        <div className="space-y-4 border-t border-b py-6 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Transaction ID</span>
            <span className="font-mono text-xs">{data.transactionId}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Payment method</span>
            <span className="flex items-center gap-2">
               <div className="w-8 h-5 bg-slate-100 rounded border flex items-center justify-center text-[8px] font-bold">VISA</div>
               •••• 4242
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Customer</span>
            <span>{data.senderName}</span>
          </div>
        </div>

        {data.note && (
          <div className="mb-8 bg-slate-50 p-4 rounded-lg text-sm text-slate-600 italic">
            "{data.note}"
          </div>
        )}

        <div className="grid grid-cols-3 gap-2">
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
            <Mail size={18} className="text-slate-400" />
            <span className="text-[10px] font-bold uppercase text-slate-500">Email</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
            <Download size={18} className="text-slate-400" />
            <span className="text-[10px] font-bold uppercase text-slate-500">Download</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
            <Printer size={18} className="text-slate-400" />
            <span className="text-[10px] font-bold uppercase text-slate-500">Print</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-50 p-4 text-center">
        <p className="text-[10px] text-slate-400 font-medium">
          Something wrong with this receipt? <span className="text-[#635bff] cursor-pointer">Contact support</span>
        </p>
      </div>
    </div>
  );
};
