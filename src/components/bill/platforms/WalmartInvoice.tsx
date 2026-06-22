import React from "react";
import { BillData } from "@/types/bill";

interface WalmartInvoiceProps {
  data: BillData;
}

export const WalmartInvoice = ({ data }: WalmartInvoiceProps) => {
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
  const isDefaultSeller = !data.sellerName || data.sellerName === "Walmart.com" || data.sellerName === "Walmart Inc.";
  const cleanLogoName = data.logoName 
    ? (data.logoName.toLowerCase() === "walmart" ? "Walmart" : data.logoName) 
    : "";
  const logoExtension = data.logoExtension !== undefined ? data.logoExtension : "";
  
  const sellerNameDisplay = (isDefaultSeller && data.logoName)
    ? `${cleanLogoName}${logoExtension}`
    : (data.sellerName || "Walmart.com");

  const sellerNameFooterDisplay = (isDefaultSeller && data.logoName)
    ? `${cleanLogoName}${logoExtension || " Inc."}`
    : (data.sellerName || "Walmart Inc.");

  return (
    <div 
      className="bg-white text-[#2e2e2e] p-8 max-w-[800px] mx-auto text-left select-text"
      style={{ 
        fontFamily: "'Bogle', 'Helvetica Neue', Arial, sans-serif", 
        fontSize: "13px",
        lineHeight: "1.5"
      }}
    >
      {/* Top Header Logo */}
      <div className="flex justify-between items-center border-b-2 border-[#0071dc] pb-5 mb-5">
        <div className="flex items-center gap-2">
          {/* Custom Logo Image / Text */}
          <div className="flex items-center">
            {data.logoImage ? (
              <img 
                src={data.logoImage} 
                alt="Logo" 
                className="max-h-10 max-w-[150px] object-contain"
              />
            ) : (
              <span className="text-[#0071dc] text-3xl font-extrabold tracking-tight flex items-center">
                {data.logoName || "Walmart"}
                {data.logoExtension && <span className="text-[#ffc220] font-semibold text-xl self-end mb-1">{data.logoExtension}</span>}
                <svg className="w-8 h-8 ml-1 text-[#ffc220] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-gray-900">Order Details</div>
          <div className="text-xs text-gray-500 mt-1">Receipt for Order: <span className="font-semibold text-gray-800">#{data.orderId}</span></div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[#f2f8fd] border-l-4 border-[#0071dc] p-4 rounded-r-lg mb-6 flex justify-between items-center">
        <div>
          <span className="text-xs text-[#0071dc] font-bold uppercase tracking-wider block">Order Status</span>
          <span className="text-lg font-bold text-gray-900">Delivered</span>
          <span className="text-xs text-gray-500 block mt-0.5">Shipment arrived on {data.orderDate}</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500 block">Total paid</span>
          <span className="text-xl font-extrabold text-[#0071dc]">{data.currencySymbol}{grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Split Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-gray-200 pb-6">
        <div>
          <div className="text-xs font-bold text-gray-400 uppercase mb-2">Shipping Address</div>
          <div className="font-bold text-gray-800">{data.shippingName}</div>
          <div className="text-gray-600 whitespace-pre-line mt-1">{data.shippingAddress}</div>
          {data.shippingPhone && <div className="text-xs text-gray-500 mt-1">Phone: {data.shippingPhone}</div>}
        </div>

        <div>
          <div className="text-xs font-bold text-gray-400 uppercase mb-2">Payment Method</div>
          <div className="font-bold text-gray-800">{data.paymentMethod || "Walmart Credit Card"}</div>
          <div className="text-xs text-gray-500 mt-1">Authorized on: {data.orderDate}</div>
          <div className="mt-3 text-xs text-gray-500">
            <span className="font-semibold text-gray-700 block">Sold By:</span>
            <span className="font-medium text-gray-800">{sellerNameDisplay}</span>
            <span className="block whitespace-pre-line">{data.sellerAddress || "702 SW 8th St, Bentonville, AR 72716, US"}</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold text-gray-400 uppercase mb-2">Billing Address</div>
          <div className="font-bold text-gray-800">{data.billingName}</div>
          <div className="text-gray-600 whitespace-pre-line mt-1">{data.billingAddress}</div>
          {data.billingPhone && <div className="text-xs text-gray-500 mt-1">Phone: {data.billingPhone}</div>}
        </div>
      </div>

      {/* Shipment header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-bold text-gray-900">Shipment Details</h3>
        <span className="text-xs bg-gray-100 border border-gray-200 text-gray-600 px-2 py-0.5 rounded font-semibold">Free Delivery</span>
      </div>

      {/* Item List */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 grid grid-cols-12 gap-3 px-4 py-2 border-b border-gray-200 text-xs font-bold text-gray-500">
          <div className="col-span-8">Product Name</div>
          <div className="col-span-1 text-center">Qty</div>
          <div className="col-span-1.5 text-right">Price</div>
          <div className="col-span-1.5 text-right">Total</div>
        </div>
        
        <div className="divide-y divide-gray-150">
          {data.items.map((item, idx) => {
            const priceVal = parseFloat(item.price) || 0;
            const itemTotal = priceVal * item.quantity;
            return (
              <div key={item.id || idx} className="grid grid-cols-12 gap-3 px-4 py-4 items-center hover:bg-gray-50/50">
                <div className="col-span-8">
                  <div className="font-bold text-gray-900">{item.name}</div>
                  {item.specifications && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      Specs: {item.specifications}
                    </div>
                  )}
                  {item.sku && (
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Item/UPC: {item.sku}
                    </div>
                  )}
                </div>
                <div className="col-span-1 text-center font-semibold text-gray-700">
                  {item.quantity}
                </div>
                <div className="col-span-1.5 text-right text-gray-700 font-medium">
                  {data.currencySymbol}{priceVal.toFixed(2)}
                </div>
                <div className="col-span-1.5 text-right font-bold text-gray-900">
                  {data.currencySymbol}{itemTotal.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Totals Calculation */}
      <div className="flex justify-end mb-8">
        <div className="w-80">
          <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
            <span className="text-gray-500">Subtotal:</span>
            <span className="font-semibold text-gray-800">{data.currencySymbol}{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
            <span className="text-gray-500">Shipping (Standard):</span>
            <span className="font-semibold text-gray-800">{shipping === 0 ? "FREE" : `${data.currencySymbol}${shipping.toFixed(2)}`}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between py-1 border-b border-gray-100 text-sm text-green-600 font-semibold">
              <span>Discounts Applied:</span>
              <span>-{data.currencySymbol}{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between py-1 border-b border-gray-100 text-sm">
            <span className="text-gray-500">Taxes & Fees:</span>
            <span className="font-semibold text-gray-800">{data.currencySymbol}{taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 border-t border-gray-200 mt-2 text-base font-extrabold text-[#0071dc]">
            <span>Order Total:</span>
            <span className="text-lg">{data.currencySymbol}{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Walmart Mock Barcode */}
      <div className="flex flex-col items-center justify-center border-t border-gray-200 pt-6 mt-8">
        {/* Simple inline barcode */}
        <div className="h-10 w-64 flex justify-between items-stretch bg-black p-0.5">
          {Array.from({ length: 60 }).map((_, i) => {
            const width = (i % 3 === 0 || i % 7 === 0 || i % 13 === 0) ? "w-0.5" : "w-1";
            const bg = (i % 2 === 0 || i % 5 === 0) ? "bg-white" : "bg-black";
            return <div key={i} className={`h-full ${width} ${bg}`} />;
          })}
        </div>
        <div className="text-[10px] text-gray-500 font-mono mt-1 tracking-widest">
          *{data.orderId.replace(/[^0-9]/g, "") || "4092817293817"}*
        </div>
        
        <p className="text-[10px] text-gray-400 mt-4 text-center">
          Thank you for shopping at {data.logoName || "Walmart"}! • {sellerNameFooterDisplay} • {data.sellerAddress || "702 SW 8th St, Bentonville, AR 72716, US"}
        </p>
      </div>
    </div>
  );
};
