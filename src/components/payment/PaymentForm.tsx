import { TransactionData, PaymentPlatform } from "@/types/payment";
import { User, Receipt, CreditCard, Calendar, Hash, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface PaymentFormProps {
  paymentData: TransactionData;
  onUpdate: (data: Partial<TransactionData>) => void;
  showPlatformSelector?: boolean;
}

export const PaymentForm = ({ paymentData, onUpdate, showPlatformSelector = true }: PaymentFormProps) => {
  return (
    <div className="space-y-6">
      {/* Platform Selection */}
      {showPlatformSelector && (
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <CreditCard size={16} /> Payment Platform
          </label>
          <select 
            value={paymentData.platform}
            onChange={(e) => onUpdate({ platform: e.target.value as PaymentPlatform })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option value="paytm">Paytm</option>
            <option value="stripe">Stripe</option>
            <option value="googlepay">Google Pay</option>
            <option value="upi">BHIM UPI</option>
            <option value="phonepay">PhonePe</option>
          </select>
        </div>
      )}

      {/* Transaction Status */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
          Status
        </label>
        <div className="flex gap-2">
          {[
            { id: "success", label: "Success", icon: CheckCircle2, color: "text-green-600 bg-green-50 border-green-200" },
            { id: "pending", label: "Pending", icon: Clock, color: "text-amber-600 bg-amber-50 border-amber-200" },
            { id: "failed", label: "Failed", icon: AlertCircle, color: "text-red-600 bg-red-50 border-red-200" }
          ].map((status) => (
            <button
              key={status.id}
              onClick={() => onUpdate({ status: status.id as any })}
              className={`flex-1 flex items-center justify-center gap-2 p-2 rounded-lg border text-sm font-medium transition-all ${
                paymentData.status === status.id 
                  ? status.color + " ring-2 ring-offset-1 ring-indigo-500" 
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <status.icon size={16} />
              {status.label}
            </button>
          ))}
        </div>
      </div>

      {/* Amount & Currency */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Receipt size={16} /> Amount
          </label>
          <input 
            type="text"
            value={paymentData.amount}
            onChange={(e) => onUpdate({ amount: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="500.00"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            Currency
          </label>
          <select 
            value={paymentData.currency}
            onChange={(e) => onUpdate({ currency: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>

      {/* Sender & Receiver */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <User size={16} /> Sender Name
          </label>
          <input 
            type="text"
            value={paymentData.senderName}
            onChange={(e) => onUpdate({ senderName: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <User size={16} /> Receiver Name
          </label>
          <input 
            type="text"
            value={paymentData.receiverName}
            onChange={(e) => onUpdate({ receiverName: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Transaction ID & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Hash size={16} /> Transaction ID
          </label>
          <input 
            type="text"
            value={paymentData.transactionId}
            onChange={(e) => onUpdate({ transactionId: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Calendar size={16} /> Date & Time
          </label>
          <input 
            type="text"
            value={paymentData.timestamp}
            onChange={(e) => onUpdate({ timestamp: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Note */}
      <div className="space-y-2 border-t pt-4">
        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
          <FileText size={16} /> Payment Note
        </label>
        <textarea 
          value={paymentData.note}
          onChange={(e) => onUpdate({ note: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 h-20"
          placeholder="What's this payment for?"
        />
      </div>
    </div>
  );
};
