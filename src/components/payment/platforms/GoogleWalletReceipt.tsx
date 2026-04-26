import { TransactionData } from "@/types/payment";
import { Check, MoreVertical, Smartphone, ShieldCheck } from "lucide-react";
import { getCurrencySymbol } from "@/utils/payment";

export const GoogleWalletReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-[380px] bg-[#f8f9fa] font-sans text-gray-900 min-h-[600px] flex flex-col rounded-3xl overflow-hidden shadow-xl border border-gray-200">
      {/* App Bar */}
      <div className="p-6 flex justify-between items-center bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
             <img src="/icons/payment/google-wallet.png" alt="Google Wallet" className="w-full h-auto object-contain" />
          </div>
          <span className="font-medium text-lg text-gray-700">Google Wallet</span>
        </div>
        <MoreVertical size={20} className="text-gray-500" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
           <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg ring-8 ring-blue-50">
             <Check size={36} strokeWidth={3} />
           </div>
           
           <h2 className="text-xl font-bold mb-1">Payment sent</h2>
           <div className="text-4xl font-black mb-8 tracking-tight">
             {getCurrencySymbol(data.currency)} {data.amount}
           </div>

           <div className="w-full space-y-4 border-t pt-6">
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Recipient</span>
                <span className="font-bold">{data.receiverName}</span>
             </div>
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Date</span>
                <span className="font-medium text-gray-700">{data.timestamp}</span>
             </div>
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Method</span>
                <div className="flex items-center gap-2">
                   <div className="w-6 h-4 bg-gray-100 rounded border text-[8px] flex items-center justify-center font-bold">VISA</div>
                   <span className="font-medium text-gray-700">•••• 8899</span>
                </div>
             </div>
           </div>
        </div>

        {data.note && (
          <div className="mt-4 bg-blue-50 p-4 rounded-2xl text-sm text-blue-800 border border-blue-100">
            <p className="font-bold text-[10px] uppercase tracking-widest mb-1 opacity-60">Message</p>
            "{data.note}"
          </div>
        )}
      </div>

      {/* Security Footer */}
      <div className="p-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-green-700 font-bold text-xs uppercase tracking-widest">
          <ShieldCheck size={18} />
          <span>Secured by Google</span>
        </div>
        <p className="text-[10px] text-gray-400 text-center max-w-[200px]">
          Your transaction is encrypted and protected by Google's advanced security.
        </p>
      </div>
    </div>
  );
};
