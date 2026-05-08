"use client";

import { useState } from "react";
import { TransactionData, PaymentPlatform } from "@/types/payment";
import { PaymentForm } from "./PaymentForm";
import { PaymentPreview } from "./PaymentPreview";
import { Shield, Download } from "lucide-react";
import { downloadComponentAsImage } from "@/utils/export";

interface PaymentGeneratorPageProps {
  initialPlatform?: PaymentPlatform;
  lockPlatform?: boolean;
  heroTitle?: string;
  heroDescription?: string;
  theme?: {
    pageGradient: string;
    heroGradient: string;
    heroDescriptionColor: string;
  };
}

export function PaymentGeneratorPage({
  initialPlatform = "paytm",
  lockPlatform = false,
  heroTitle = "Payment Receipt Generator",
  heroDescription = "Create realistic payment confirmation screenshots for Paytm, Stripe, Google Pay, and more. Perfect for mockups and UI demonstrations.",
  theme,
}: PaymentGeneratorPageProps) {
  const [paymentData, setPaymentData] = useState<TransactionData>({
    id: "1",
    platform: initialPlatform,
    amount: "500.00",
    currency: "INR", // Default to Indian Rupees for UPI apps
    senderName: "Abish Khadka",
    receiverName: "ReviewCraft Store",
    timestamp: new Date().toLocaleString(),
    transactionId: "TXN" + Math.random().toString(36).substring(2, 10).toUpperCase(),
    status: "success",
    note: "Payment for subscription",
  });

  const activeTheme = theme || {
    pageGradient: "bg-gray-50",
    heroGradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
    heroDescriptionColor: "text-white opacity-90",
  };

  const updatePaymentData = (updates: Partial<TransactionData>) => {
    setPaymentData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className={`min-h-screen ${activeTheme.pageGradient}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className={`${activeTheme.heroGradient} rounded-2xl p-8 text-white shadow-xl`}>
            <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
            <p className={`text-xl ${activeTheme.heroDescriptionColor} max-w-2xl mx-auto`}>
              {heroDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Transaction Details</h2>
            <PaymentForm 
              paymentData={paymentData} 
              onUpdate={updatePaymentData} 
              showPlatformSelector={!lockPlatform}
            />
          </div>

          {/* Right: Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
                <button
                  onClick={() => downloadComponentAsImage("payment-receipt-capture", `payment-${paymentData.platform}-${Date.now()}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm text-sm font-medium"
                >
                  <Download size={16} />
                  Download Receipt
                </button>
             </div>
             <div className="flex justify-center bg-gray-100 p-8 rounded-xl overflow-auto max-h-[600px]">
                <PaymentPreview paymentData={paymentData} />
             </div>
             
             <div className="mt-8 text-center text-xs text-gray-400 italic">
               <p>Note: These generated receipts are for mockup purposes only.</p>
             </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex gap-3">
            <Shield className="text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-900">Ethical Use Disclaimer</h3>
              <p className="text-yellow-800 text-sm mt-1">
                This tool is strictly for educational and professional design purposes. 
                Creating fake payment receipts to deceive others or for fraudulent activities is illegal and strictly prohibited. 
                Always use these mockups responsibly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
