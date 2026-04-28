import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

export const StripeReceipt = ({ data }: { data: TransactionData }) => {
  return (
    <div className="w-full min-h-full bg-white font-sans text-slate-900 overflow-hidden flex flex-col">
      {/* Purple Diagonal Header */}
      <div className="relative h-40 bg-gradient-to-r from-[#6366F1] to-[#7C3AED] overflow-hidden">
        {/* Diagonal Wave */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z"
            fill="white"
          />
        </svg>

        {/* S Badge */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-[#6366F1] shadow-lg">
          <span className="text-4xl font-black text-[#6366F1]">S</span>
        </div>
      </div>

      <div className="px-8 py-12 flex-1">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            Receipt from Stripe, Inc.
          </h1>
          <p className="text-sm text-slate-500">
            Receipt #{data.transactionId.slice(0, 8).toUpperCase()}
          </p>
        </div>

        {/* Summary Row */}
        <div className="grid grid-cols-3 gap-8 mb-12 pb-8 border-b border-slate-200">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Amount Paid
            </p>
            <p className="text-xl font-semibold text-slate-900">
              {getCurrencySymbol(data.currency)}
              {data.amount}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Date Paid
            </p>
            <p className="text-base text-slate-900">
              {data.timestamp.split("•")[0].trim()}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Payment Method
            </p>
            <p className="text-base text-slate-900 font-semibold">
              VISA – 9969
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-12">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-6">
            Summary
          </p>

          <div className="space-y-4">
            {/* Payment Item */}
            <div className="flex justify-between items-center py-3 bg-slate-50 px-4 rounded-lg">
              <p className="text-slate-700 font-medium">
                Payment to {data.receiverName}
              </p>
              <p className="font-semibold text-slate-900">
                {getCurrencySymbol(data.currency)}
                {data.amount}
              </p>
            </div>

            {/* Amount Paid Total */}
            <div className="flex justify-between items-center py-4 border-t border-slate-200 px-4">
              <p className="font-semibold text-slate-900 text-base">
                Amount paid
              </p>
              <p className="font-bold text-slate-900 text-lg">
                {getCurrencySymbol(data.currency)}
                {data.amount}
              </p>
            </div>
          </div>
        </div>

        {/* Note if present */}
        {data.note && (
          <div className="mb-12 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-2">
              Note
            </p>
            <p className="text-sm text-slate-800">{data.note}</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="border-t border-slate-200 pt-8 text-sm text-slate-600 leading-relaxed">
          <p className="mb-6">
            If you have any questions, contact us at{" "}
            <a
              href="mailto:support@stripe.com"
              className="text-blue-600 hover:underline font-medium"
            >
              support@stripe.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+15551234567"
              className="text-blue-600 hover:underline font-medium"
            >
              +1 (555) 123-4567
            </a>
            .
          </p>

          <p className="text-[12px] text-slate-500 mb-4">
            <a href="#" className="text-blue-600 hover:underline">
              View it in your browser
            </a>
          </p>

          <p className="text-[12px] text-slate-500 mb-4">
            You're receiving this email because you made a purchase at Stripe,
            Inc. Stripe, Inc. partners with Stripe to provide secure invoicing
            and payments processing.
          </p>

          <p className="text-[12px] text-slate-500 mb-4">
            Stripe, Inc., 510 Townsend Street, San Francisco CA 94103
          </p>

          <p className="text-[12px] text-slate-500">
            Application Name: Stripe Credit, AID: A0000000031010
          </p>
        </div>
      </div>
    </div>
  );
};
