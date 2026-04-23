import { TransactionData } from "@/types/payment";
import { CheckCircle2, Share2, HelpCircle } from "lucide-react";

export const PaytmReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-[380px] bg-[#f5f9fd] font-sans text-gray-800 flex flex-col min-h-[600px]">
      {/* Header */}
      <div className="bg-[#002e6e] p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
            <img src="https://static.paytm.com/common/images/paytm-logo.png" alt="Paytm" className="w-full h-auto" />
          </div>
          <span className="font-bold text-lg">Paytm</span>
        </div>
        <Share2 size={20} />
      </div>

      {/* Success Banner */}
      <div className="bg-white p-6 flex flex-col items-center text-center border-b">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-xl font-bold text-green-600 mb-1">Payment Successful</h2>
        <p className="text-gray-500 text-sm">{data.timestamp}</p>
        
        <div className="mt-6 flex flex-col items-center">
          <span className="text-4xl font-black text-[#002e6e]">
            {data.currency === "INR" ? "₹" : data.currency} {data.amount}
          </span>
          <p className="text-sm text-gray-500 mt-2 italic">Paid to {data.receiverName}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 space-y-4 bg-white mt-2">
        <div className="flex justify-between items-start border-b pb-3">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold">Transaction ID</p>
            <p className="text-sm font-medium">{data.transactionId}</p>
          </div>
          <HelpCircle size={16} className="text-blue-500" />
        </div>

        <div className="flex justify-between items-start border-b pb-3">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold">Paid From</p>
            <p className="text-sm font-medium">{data.senderName}</p>
            <p className="text-xs text-gray-400">Paytm Balance</p>
          </div>
        </div>

        {data.note && (
          <div className="flex justify-between items-start border-b pb-3">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Message</p>
              <p className="text-sm italic text-gray-600">"{data.note}"</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto p-6 bg-white border-t flex flex-col items-center gap-4">
        <img 
          src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/methods/qr-code.png" 
          alt="QR Code" 
          className="w-24 h-24 opacity-50"
        />
        <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
          Powered by Paytm Payments Bank
        </p>
      </div>
    </div>
  );
};
