import React from "react";
import { BillData } from "@/types/bill";

interface SupplementInvoiceProps {
  data: BillData;
}

export const SupplementInvoice = ({ data }: SupplementInvoiceProps) => {
  // Helper to calculate totals
  const subtotal = data.items.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  const shipping = parseFloat(data.shippingCost) || 0;
  const discount = parseFloat(data.discount) || 0;
  const taxRate = parseFloat(data.taxRate) || 0;
  
  const beforeTax = Math.max(0, subtotal + shipping - discount);
  const taxAmount = beforeTax * (taxRate / 100);
  const grandTotal = beforeTax + taxAmount;

  const renderLogo = () => {
    const main = data.logoName || "VitaVibe";
    const ext = data.logoExtension !== undefined ? data.logoExtension : ".com";
    return (
      <>
        <span>{main}</span>
        {ext && <span className="text-emerald-500 font-semibold">{ext}</span>}
      </>
    );
  };

  return (
    <div 
      className="bg-white text-gray-800 p-8 max-w-[800px] mx-auto text-left select-text border border-emerald-100 rounded-lg shadow-sm"
      style={{ 
        fontFamily: "'Inter', system-ui, sans-serif", 
        fontSize: "13px",
        lineHeight: "1.5"
      }}
    >
      {/* Top Header / Branding */}
      <div className="flex justify-between items-start border-b border-emerald-500 pb-5 mb-5">
        <div className="flex items-center gap-3">
          {/* Health leaf logo in SVG */}
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-200">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m10.607 10.607l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12c2.5 0 4-1.5 4-4s-1.5-2.5-4-2.5S4 7 4 9.5s1.5 2.5 4 2.5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-emerald-800 tracking-tight flex items-center gap-0.5">
              {renderLogo()}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">Premium Health Supplements & Wellness</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-emerald-800 tracking-wider uppercase">Official Invoice</div>
          <div className="text-xs text-gray-500 mt-1">Invoice ID: <span className="font-semibold text-gray-800">#{data.invoiceNumber || `VV-${data.orderId.substring(0, 7)}`}</span></div>
          <div className="text-[11px] text-gray-400">Order ID: #{data.orderId}</div>
        </div>
      </div>

      {/* Invoice Metadata */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 bg-emerald-50/40 p-4 rounded-xl border border-emerald-100/50">
        <div>
          <span className="text-[10px] text-emerald-800/80 font-bold uppercase tracking-wider block">Order Date</span>
          <span className="font-semibold text-gray-800">{data.orderDate}</span>
        </div>
        <div>
          <span className="text-[10px] text-emerald-800/80 font-bold uppercase tracking-wider block">Invoice Date</span>
          <span className="font-semibold text-gray-800">{data.invoiceDate}</span>
        </div>
        <div>
          <span className="text-[10px] text-emerald-800/80 font-bold uppercase tracking-wider block">Payment Method</span>
          <span className="font-semibold text-gray-800">{data.paymentMethod || "Credit/Debit Card"}</span>
        </div>
        <div>
          <span className="text-[10px] text-emerald-800/80 font-bold uppercase tracking-wider block">Seller Tax ID</span>
          <span className="font-semibold text-gray-800">{data.sellerTaxId || "TAX-72-831920"}</span>
        </div>
      </div>

      {/* Address grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition-colors">
          <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-gray-100 pb-1.5 mb-2">Ship To Address</h3>
          <p className="font-bold text-gray-900">{data.shippingName}</p>
          <p className="text-gray-600 whitespace-pre-line mt-1">{data.shippingAddress}</p>
          {data.shippingPhone && <p className="text-xs text-gray-500 mt-2">Phone: {data.shippingPhone}</p>}
        </div>

        <div className="border border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition-colors">
          <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-gray-100 pb-1.5 mb-2">Bill To Address</h3>
          <p className="font-bold text-gray-900">{data.billingName}</p>
          <p className="text-gray-600 whitespace-pre-line mt-1">{data.billingAddress}</p>
          {data.billingPhone && <p className="text-xs text-gray-500 mt-2">Phone: {data.billingPhone}</p>}
        </div>
      </div>

      {/* Seller info contact block */}
      <div className="text-xs text-gray-500 mb-6 px-1">
        <span className="font-bold text-gray-700">Dispatch Facility Address: </span>
        {data.sellerAddress || "VitaVibe Fulfillment Center, 1800 Health Parkway, Suite 100, Denver, CO 80202"}
      </div>

      {/* Items table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider">
              <th className="py-3 px-4 w-12 text-center">Qty</th>
              <th className="py-3 px-4">Supplement Description</th>
              <th className="py-3 px-4 w-28 text-center">SKU/Batch</th>
              <th className="py-3 px-4 text-right w-24">Price</th>
              <th className="py-3 px-4 text-right w-28">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.items.map((item, idx) => {
              const priceVal = parseFloat(item.price) || 0;
              const itemTotal = priceVal * item.quantity;
              return (
                <tr key={item.id || idx} className="hover:bg-emerald-50/20">
                  <td className="py-4 px-4 text-center font-bold text-emerald-800">{item.quantity}</td>
                  <td className="py-4 px-4">
                    <div className="font-bold text-gray-900">{item.name}</div>
                    {item.specifications && (
                      <div className="text-xs text-emerald-600 font-medium mt-1">
                        Flavor / Size: {item.specifications}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center font-mono text-xs text-gray-500">
                    {item.sku || `BATCH-${Math.floor(100000 + Math.random() * 900000)}`}
                  </td>
                  <td className="py-4 px-4 text-right text-gray-600 font-medium">
                    {data.currencySymbol}{priceVal.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-right font-bold text-gray-900">
                    {data.currencySymbol}{itemTotal.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom totals calculation */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-gray-200 pb-6 mb-6">
        {/* FDA Warning Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-900 text-xs sm:max-w-md">
          <span className="font-bold uppercase tracking-wider block mb-1">FDA Regulatory Notice:</span>
          These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Always check supplement panels and check with a licensed healthcare practitioner before starting any diet or training regimen.
        </div>

        {/* Totals Table */}
        <div className="w-full sm:w-72 text-sm ml-auto">
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-500">Subtotal:</span>
            <span className="font-semibold text-gray-800">{data.currencySymbol}{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-500">Shipping & Handling:</span>
            <span className="font-semibold text-gray-800">{data.currencySymbol}{shipping.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between py-1.5 border-b border-gray-100 text-rose-600 font-semibold">
              <span>Discounts Applied:</span>
              <span>-{data.currencySymbol}{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-500">State Sales Tax ({taxRate}%):</span>
            <span className="font-semibold text-gray-800">{data.currencySymbol}{taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 border-t-2 border-emerald-500 mt-2 text-base font-extrabold text-emerald-800">
            <span>Invoice Total:</span>
            <span className="text-lg">{data.currencySymbol}{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Fine Print Footer */}
      <div className="text-[10px] text-center text-gray-400 space-y-1">
        <p>This document constitutes proof of purchase for the items listed above.</p>
        <p>For return policies, warranty inquiries, or health guidance, please consult our customer helpline or visit our online health center.</p>
        <p className="font-semibold text-emerald-800 mt-2">✓ Certified Genuine Supplements • Thank you for choosing VitaVibe!</p>
      </div>
    </div>
  );
};
