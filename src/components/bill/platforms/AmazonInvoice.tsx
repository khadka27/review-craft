import React from "react";
import { BillData } from "@/types/bill";

interface AmazonInvoiceProps {
  data: BillData;
}

export const AmazonInvoice = ({ data }: AmazonInvoiceProps) => {
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

  // Dynamically compute the seller name based on branding settings
  const isDefaultSeller = !data.sellerName || data.sellerName === "Amazon.com Services LLC";
  const cleanLogoName = data.logoName 
    ? (data.logoName.toLowerCase() === "amazon" ? "Amazon" : data.logoName) 
    : "";
  const logoExtension = data.logoExtension !== undefined ? data.logoExtension : ".com";
  
  const sellerNameDisplay = (isDefaultSeller && data.logoName)
    ? `${cleanLogoName}${logoExtension} Services LLC`
    : (data.sellerName || "Amazon.com Services LLC");

  return (
    <div 
      className="bg-white text-black p-8 max-w-[800px] mx-auto text-left select-text"
      style={{ 
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", 
        fontSize: "13px",
        lineHeight: "1.4"
      }}
    >
      {/* Header section */}
      <div className="flex justify-between items-start border-b border-gray-300 pb-4 mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Final Details for Order #{data.orderId}</h1>
          <p className="text-gray-500 text-xs mt-1">Print this page for your records.</p>
        </div>
        <div className="flex flex-col items-end">
          {/* Custom Logo Image / Text */}
          <div className="text-black font-bold text-xl tracking-tight flex flex-col items-end">
            {data.logoImage ? (
              <img 
                src={data.logoImage} 
                alt="Logo" 
                className="max-h-10 max-w-[150px] object-contain"
              />
            ) : (
              <span className="italic font-extrabold text-2xl flex items-center">
                {data.logoName || "amazon"}<span className="text-[#FF9900]">{data.logoExtension !== undefined ? data.logoExtension : ".com"}</span>
              </span>
            )}
            <span className="text-[10px] text-gray-500 tracking-wide font-normal mt-0.5">Order Invoice</span>
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="grid grid-cols-3 gap-6 mb-6 pb-4 border-b border-gray-200">
        <div>
          <span className="font-semibold block text-gray-700">Order Placed:</span>
          <span>{data.orderDate}</span>
        </div>
        <div>
          <span className="font-semibold block text-gray-700">Invoice Number:</span>
          <span>{data.invoiceNumber || `INV-${data.orderId.substring(0, 8)}`}</span>
        </div>
        <div>
          <span className="font-semibold block text-gray-700">Invoice Date:</span>
          <span>{data.invoiceDate}</span>
        </div>
      </div>

      {/* Address Details Block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div>
          <h3 className="font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">Shipping Address</h3>
          <p className="font-semibold">{data.shippingName}</p>
          <p className="text-gray-600 whitespace-pre-line">{data.shippingAddress}</p>
          {data.shippingPhone && <p className="text-gray-500 mt-2 text-xs">Phone: {data.shippingPhone}</p>}
        </div>

        <div>
          <h3 className="font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">Billing Address</h3>
          <p className="font-semibold">{data.billingName}</p>
          <p className="text-gray-600 whitespace-pre-line">{data.billingAddress}</p>
          {data.billingPhone && <p className="text-gray-500 mt-2 text-xs">Phone: {data.billingPhone}</p>}
        </div>

        <div>
          <h3 className="font-bold text-gray-800 border-b border-gray-200 pb-1 mb-2">Payment Method</h3>
          <p className="font-medium text-gray-700">{data.paymentMethod || "Credit Card"}</p>
          <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
            <p className="font-semibold text-gray-700">Seller Info:</p>
            <p className="font-medium">{sellerNameDisplay}</p>
            <p className="whitespace-pre-line text-[11px]">{data.sellerAddress || "410 Terry Ave N, Seattle, WA 98109, US"}</p>
            {data.sellerTaxId && <p className="mt-1">Tax ID: {data.sellerTaxId}</p>}
          </div>
        </div>
      </div>

      {/* Shipped Status Notification */}
      <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded text-xs font-semibold">
        ✓ Shipped on {data.orderDate} - Carrier: {data.logoName ? `${data.logoName} Logistics` : "Amazon Logistics"} (Tracking ID: TBA{Math.floor(1000000000 + Math.random() * 9000000000)})
      </div>

      {/* Item Table */}
      <table className="w-full text-left border-collapse mb-6">
        <thead>
          <tr className="border-b-2 border-gray-300 text-gray-700 font-bold bg-gray-100">
            <th className="py-2.5 px-3 w-12 text-center">Qty</th>
            <th className="py-2.5 px-3">Item Description</th>
            <th className="py-2.5 px-3 text-right w-24">Price</th>
            <th className="py-2.5 px-3 text-right w-28">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, idx) => {
            const priceVal = parseFloat(item.price) || 0;
            const itemTotal = priceVal * item.quantity;
            return (
              <tr key={item.id || idx} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-3 text-center font-semibold text-gray-800">{item.quantity}</td>
                <td className="py-3 px-3">
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  {item.specifications && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      Specs: {item.specifications}
                    </div>
                  )}
                  {item.sku && (
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      ASIN: {item.sku}
                    </div>
                  )}
                </td>
                <td className="py-3 px-3 text-right text-gray-700">
                  {data.currencySymbol}{priceVal.toFixed(2)}
                </td>
                <td className="py-3 px-3 text-right font-medium text-gray-900">
                  {data.currencySymbol}{itemTotal.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Total section (Two columns) */}
      <div className="flex justify-end">
        <div className="w-full sm:w-80 text-sm">
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-500">Item(s) Subtotal:</span>
            <span className="font-medium">{data.currencySymbol}{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-500">Shipping & Handling:</span>
            <span className="font-medium">{data.currencySymbol}{shipping.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between py-1.5 border-b border-gray-100 text-rose-600 font-medium">
              <span>Promotion Applied:</span>
              <span>-{data.currencySymbol}{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-500">Total before tax:</span>
            <span className="font-medium">{data.currencySymbol}{beforeTax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-200">
            <span className="text-gray-500">Estimated tax to be collected:</span>
            <span className="font-medium">{data.currencySymbol}{taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 text-base font-bold text-gray-900">
            <span>Grand Total:</span>
            <span className="text-lg text-gray-900">{data.currencySymbol}{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-[10px] text-gray-400">
        <p>{sellerNameDisplay}, {data.sellerAddress || "410 Terry Ave. North, Seattle, WA 98109-5210"}</p>
        <p className="mt-1">Need help? Visit the {data.logoName ? `${cleanLogoName}${logoExtension}` : "Amazon.com"} Customer Service portal at www.{data.logoName ? `${data.logoName.toLowerCase().replace(/\s+/g, "")}${logoExtension}` : "amazon.com"}/help</p>
      </div>
    </div>
  );
};
