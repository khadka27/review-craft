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
    const main = data.logoName || "vitavibe";
    const ext = data.logoExtension !== undefined ? data.logoExtension : ".com";
    return (
      <>
        <span>{main}</span>
        {ext && <span className="text-emerald-500 font-semibold">{ext}</span>}
      </>
    );
  };

  const renderClassicInvoice = () => {
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
          {data.logoImage ? (
            <div className="flex items-center gap-3">
              <img 
                src={data.logoImage} 
                alt="Logo" 
                className="max-h-12 max-w-[180px] object-contain bg-white rounded p-1 border border-emerald-100/50"
              />
              <div>
                <p className="text-xs text-gray-500 font-semibold">Premium Products & Custom Order Invoice</p>
              </div>
            </div>
          ) : (
            <>
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
                <p className="text-xs text-gray-500 mt-0.5 font-semibold">Premium Products & Custom Order Invoice</p>
              </div>
            </>
          )}
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

        {/* Seller Information Block */}
        <div className="border border-emerald-100 bg-emerald-50/20 rounded-xl p-4 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-1.5 mb-2">Seller Information</h3>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Seller:</span> {data.logoName ? `${data.logoName} LLC` : (data.sellerName || "VitaVibe LLC")}
            </p>
            <p className="text-gray-600 whitespace-pre-line mt-1.5">
              <span className="font-semibold text-gray-900">Address:</span>{"\n"}{data.sellerAddress || "VitaVibe Fulfillment Center\n1800 Health Parkway, Suite 100\nDenver, CO 80202\nUnited States"}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-1.5 mb-2">Contact & Tax</h3>
              <p className="text-gray-700 text-xs">
                <span className="font-semibold text-gray-900">Customer Support:</span> support@{data.logoName ? `${data.logoName.toLowerCase().replace(/\s+/g, "")}${data.logoExtension || ".com"}` : "vitavibe.com"}
              </p>
              <p className="text-gray-700 text-xs mt-1">
                <span className="font-semibold text-gray-900">Website:</span> <a href={`https://www.${data.logoName ? `${data.logoName.toLowerCase().replace(/\s+/g, "")}${data.logoExtension || ".com"}` : "vitavibe.com"}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">https://www.{data.logoName ? `${data.logoName.toLowerCase().replace(/\s+/g, "")}${data.logoExtension || ".com"}` : "vitavibe.com"}</a>
              </p>
            </div>
            <p className="text-[11px] text-gray-500 mt-4 italic leading-tight">
              Sales Tax: Calculated at checkout based on applicable state and local tax laws.
            </p>
          </div>
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
          <p className="font-semibold text-emerald-800 mt-2">✓ Certified Genuine Supplements • Thank you for choosing {data.logoName || "vitavibe"}!</p>
        </div>
      </div>
    );
  };

  const renderPOSReceipt = () => {
    const main = data.logoName || "vitavibe";
    const ext = data.logoExtension !== undefined ? data.logoExtension : ".com";
    const receiptLogo = `${main.toUpperCase()}${ext.toUpperCase()}`;

    return (
      <div 
        className="bg-white text-black p-6 mx-auto text-left relative select-text"
        style={{ 
          fontFamily: "'Courier New', Courier, monospace", 
          fontSize: "12px",
          lineHeight: "1.4",
          maxWidth: "420px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
          borderLeft: "1px solid #e5e7eb",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        {/* Top Jagged Edge */}
        <div className="absolute top-0 left-0 right-0 flex overflow-hidden h-2.5 -translate-y-2.5 select-none bg-transparent">
          {Array.from({ length: 42 }).map((_, i) => (
            <svg key={i} className="w-2.5 h-2.5 text-white fill-current flex-shrink-0" viewBox="0 0 10 10">
              <polygon points="0,10 5,0 10,10" />
            </svg>
          ))}
        </div>

        {/* Center Header Details */}
        <div className="text-center mb-6 flex flex-col items-center">
          {data.logoImage ? (
            <img 
              src={data.logoImage} 
              alt="Receipt Logo" 
              className="max-h-12 max-w-[150px] object-contain mb-2 filter grayscale"
            />
          ) : (
            <h2 className="text-lg font-bold tracking-widest">{receiptLogo}</h2>
          )}
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Official Sales Receipt</p>
          <div className="text-[11px] text-gray-700 mt-3 space-y-0.5 font-semibold">
            <p className="whitespace-pre-line">{data.sellerAddress || "VitaVibe Fulfillment Center\n1800 Health Parkway, Suite 100\nDenver, CO 80202"}</p>
            <p className="mt-1">support@{main}{ext}</p>
            <p>www.{main}{ext}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center text-gray-400 select-none my-2">----------------------------------------</div>

        {/* Order Meta Info */}
        <div className="space-y-1 text-[11px] font-semibold">
          <div className="flex justify-between">
            <span>ORDER ID:</span>
            <span>#{data.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>INVOICE NO:</span>
            <span>#{data.invoiceNumber || `VV-${data.orderId.substring(0, 7)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>DATE:</span>
            <span>{data.orderDate}</span>
          </div>
          <div className="flex justify-between">
            <span>PAY METHOD:</span>
            <span className="uppercase">{data.paymentMethod || "CREDIT CARD"}</span>
          </div>
          {data.sellerTaxId && (
            <div className="flex justify-between">
              <span>TAX ID:</span>
              <span>{data.sellerTaxId}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="text-center text-gray-400 select-none my-2">----------------------------------------</div>

        {/* Customer Address Details */}
        <div className="text-[11px] space-y-2">
          <div>
            <span className="font-bold block text-gray-700">SHIPPED TO:</span>
            <span className="font-semibold block">{data.shippingName}</span>
            <span className="text-gray-600 block whitespace-pre-line">{data.shippingAddress}</span>
          </div>
          {data.shippingPhone && (
            <div className="text-[10px] text-gray-500 font-semibold">
              PHONE: {data.shippingPhone}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="text-center text-gray-400 select-none my-2">----------------------------------------</div>

        {/* Item Rows Header */}
        <div className="grid grid-cols-12 text-[11px] font-bold text-gray-800">
          <div className="col-span-8">ITEM DESCRIPTION</div>
          <div className="col-span-2 text-center">QTY</div>
          <div className="col-span-2 text-right">TOTAL</div>
        </div>

        {/* Item Rows */}
        <div className="space-y-2 mt-2 text-[11px] font-semibold">
          {data.items.map((item, idx) => {
            const priceVal = parseFloat(item.price) || 0;
            const itemTotal = priceVal * item.quantity;
            return (
              <div key={item.id || idx} className="space-y-0.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-8 truncate uppercase">{item.name}</div>
                  <div className="col-span-2 text-center">{item.quantity}</div>
                  <div className="col-span-2 text-right">{data.currencySymbol}{itemTotal.toFixed(2)}</div>
                </div>
                {item.specifications && (
                  <div className="text-[10px] text-gray-500 italic ml-2">
                    FLAVOR/SIZE: {item.specifications.toUpperCase()}
                  </div>
                )}
                {item.sku && (
                  <div className="text-[10px] text-gray-400 ml-2">
                    SKU/BATCH: {item.sku.toUpperCase()}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="text-center text-gray-400 select-none my-2">----------------------------------------</div>

        {/* Totals Summary block */}
        <div className="flex justify-end text-[11px] font-bold space-y-1 flex-col items-end">
          <div className="w-56 flex justify-between">
            <span>SUBTOTAL:</span>
            <span>{data.currencySymbol}{subtotal.toFixed(2)}</span>
          </div>
          <div className="w-56 flex justify-between">
            <span>SHIPPING:</span>
            <span>{data.currencySymbol}{shipping.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="w-56 flex justify-between text-rose-600">
              <span>DISCOUNTS:</span>
              <span>-{data.currencySymbol}{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="w-56 flex justify-between">
            <span>SALES TAX ({taxRate}%):</span>
            <span>{data.currencySymbol}{taxAmount.toFixed(2)}</span>
          </div>
          <div className="w-56 flex justify-between text-xs pt-1 border-t border-dashed border-gray-400 mt-1 font-extrabold">
            <span>GRAND TOTAL:</span>
            <span>{data.currencySymbol}{grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center text-gray-400 select-none my-2">----------------------------------------</div>

        {/* Thermal Barcode */}
        <div className="flex flex-col items-center justify-center pt-2">
          {/* Simple POS linear barcode */}
          <div className="h-8 w-48 flex justify-between items-stretch bg-black p-0.5">
            {Array.from({ length: 48 }).map((_, i) => {
              const width = (i % 3 === 0 || i % 11 === 0) ? "w-0.5" : "w-1";
              const bg = (i % 2 === 0 || i % 7 === 0) ? "bg-white" : "bg-black";
              return <div key={i} className={`h-full ${width} ${bg}`} />;
            })}
          </div>
          <div className="text-[9px] text-gray-500 font-mono mt-1">
            *VV-{data.orderId.replace(/[^0-9]/g, "").substring(0, 10)}*
          </div>
          
          <p className="text-[10px] font-bold text-center mt-4 uppercase tracking-widest text-gray-800">
            *** THANK YOU FOR YOUR VISIT ***
          </p>
          <p className="text-[9px] text-gray-400 mt-1 text-center font-medium italic">
            Sales tax is calculated based on state laws.
          </p>
        </div>

        {/* Bottom Jagged Edge */}
        <div className="absolute bottom-0 left-0 right-0 flex overflow-hidden h-2.5 translate-y-2.5 rotate-180 select-none bg-transparent">
          {Array.from({ length: 42 }).map((_, i) => (
            <svg key={i} className="w-2.5 h-2.5 text-white fill-current flex-shrink-0" viewBox="0 0 10 10">
              <polygon points="0,10 5,0 10,10" />
            </svg>
          ))}
        </div>
      </div>
    );
  };

  const renderModernInvoice = () => {
    const main = data.logoName || "vitavibe";
    const ext = data.logoExtension !== undefined ? data.logoExtension : ".com";
    const logoDisplay = `${main}${ext}`;

    return (
      <div 
        className="bg-white text-gray-800 p-8 max-w-[800px] mx-auto text-left relative select-text border border-slate-200 rounded-2xl shadow-md"
        style={{ 
          fontFamily: "'Outfit', 'Inter', system-ui, sans-serif", 
          fontSize: "13px",
          lineHeight: "1.5"
        }}
      >
        {/* Paid Status Stamp */}
        <div className="absolute right-8 top-28 border-4 border-emerald-500 text-emerald-500 font-extrabold uppercase px-4 py-2 rounded-xl text-lg tracking-widest select-none rotate-12 opacity-85 bg-white shadow-sm flex items-center gap-1.5 z-10">
          <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          PAID IN FULL
        </div>

        {/* Top Header Deep Blue Banner */}
        <div className="bg-[#1E293B] text-white p-6 rounded-xl flex justify-between items-center mb-6 shadow-sm">
          <div>
            {data.logoImage ? (
              <img 
                src={data.logoImage} 
                alt="Logo" 
                className="max-h-10 max-w-[180px] object-contain bg-white rounded p-1 border border-slate-100"
              />
            ) : (
              <h1 className="text-2xl font-black tracking-tight flex items-center gap-1">
                <span>{main}</span>
                <span className="text-[#38bdf8]">{ext}</span>
              </h1>
            )}
            <p className="text-xs text-slate-300 mt-1 font-medium tracking-wide uppercase font-semibold">Transaction Invoice</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Invoice Balance</div>
            <div className="text-3xl font-extrabold text-white mt-1">{data.currencySymbol}{grandTotal.toFixed(2)}</div>
          </div>
        </div>

        {/* Invoice details grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Invoice ID</span>
            <span className="font-bold text-slate-800 text-sm">#{data.invoiceNumber || `VV-${data.orderId.substring(0, 7)}`}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Order ID</span>
            <span className="font-bold text-slate-800 text-sm">#{data.orderId}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Date Paid</span>
            <span className="font-bold text-slate-800 text-sm">{data.orderDate}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Payment Method</span>
            <span className="font-bold text-slate-800 text-sm flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              {data.paymentMethod || "Apple Pay"}
            </span>
          </div>
        </div>

        {/* Shipping & Billing Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-1.5 mb-2">Ship To</h3>
            <p className="font-extrabold text-slate-900">{data.shippingName}</p>
            <p className="text-slate-600 whitespace-pre-line mt-1 font-semibold">{data.shippingAddress}</p>
            {data.shippingPhone && <p className="text-xs text-slate-400 mt-2 font-semibold">Phone: {data.shippingPhone}</p>}
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-1.5 mb-2">Bill To</h3>
            <p className="font-extrabold text-slate-900">{data.billingName}</p>
            <p className="text-slate-600 whitespace-pre-line mt-1 font-semibold">{data.billingAddress}</p>
            {data.billingPhone && <p className="text-xs text-slate-400 mt-2 font-semibold">Phone: {data.billingPhone}</p>}
          </div>
        </div>

        {/* Seller Info Contact Block */}
        <div className="border border-slate-200 rounded-xl p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Company details</h4>
            <p className="font-extrabold text-slate-900">{data.logoName ? `${data.logoName} LLC` : (data.sellerName || "VitaVibe LLC")}</p>
            <p className="text-slate-600 whitespace-pre-line text-[11px] mt-1 font-semibold">
              {data.sellerAddress || "VitaVibe Fulfillment Center\n1800 Health Parkway, Suite 100\nDenver, CO 80202\nUnited States"}
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Support info</h4>
            <p className="text-slate-700 text-xs font-semibold">Email: support@{data.logoName ? `${data.logoName.toLowerCase().replace(/\s+/g, "")}${data.logoExtension || ".com"}` : "vitavibe.com"}</p>
            <p className="text-slate-700 text-xs mt-1 font-semibold">Web: www.{data.logoName ? `${data.logoName.toLowerCase().replace(/\s+/g, "")}${data.logoExtension || ".com"}` : "vitavibe.com"}</p>
            <p className="text-[10px] text-slate-400 italic mt-3 font-semibold">Sales Tax: Calculated based on state laws.</p>
          </div>
        </div>

        {/* Item Summary Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-6 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wider">
                <th className="py-3.5 px-4 w-12 text-center">Qty</th>
                <th className="py-3.5 px-4">Item Description</th>
                <th className="py-3.5 px-4 text-center w-28">ASIN / Batch</th>
                <th className="py-3.5 px-4 text-right w-24">Price</th>
                <th className="py-3.5 px-4 text-right w-28">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.items.map((item, idx) => {
                const priceVal = parseFloat(item.price) || 0;
                const itemTotal = priceVal * item.quantity;
                return (
                  <tr key={item.id || idx} className="hover:bg-slate-50/50">
                    <td className="py-4 px-4 text-center font-extrabold text-slate-800">{item.quantity}</td>
                    <td className="py-4 px-4">
                      <div className="font-extrabold text-slate-900 text-sm">{item.name}</div>
                      {item.specifications && (
                        <div className="text-xs text-slate-500 font-medium mt-1">
                          Specs: {item.specifications}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center font-mono text-xs text-slate-500">
                      {item.sku || `BATCH-${Math.floor(100000 + Math.random() * 900000)}`}
                    </td>
                    <td className="py-4 px-4 text-right text-slate-600 font-semibold">
                      {data.currencySymbol}{priceVal.toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-right font-extrabold text-slate-900">
                      {data.currencySymbol}{itemTotal.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Calculations Section */}
        <div className="flex justify-end">
          <div className="w-full sm:w-72 text-sm">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Subtotal:</span>
              <span className="font-bold text-slate-800">{data.currencySymbol}{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Shipping & Handling:</span>
              <span className="font-bold text-slate-800">{data.currencySymbol}{shipping.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between py-2 border-b border-slate-100 text-rose-600 font-semibold">
                <span>Discounts:</span>
                <span>-{data.currencySymbol}{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Taxes ({taxRate}%):</span>
              <span className="font-bold text-slate-800">{data.currencySymbol}{taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-slate-800 mt-2 text-base font-extrabold text-[#1E293B]">
              <span>Invoice Total:</span>
              <span className="text-lg text-slate-900">{data.currencySymbol}{grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-[10px] text-center text-slate-400 mt-12 pt-6 border-t border-slate-100 space-y-1">
          <p>Thank you for your business. This document is a confirmation of full payment.</p>
          <p className="font-bold text-slate-600">✓ Electronic Receipt Approved</p>
        </div>
      </div>
    );
  };

  // Main Render Switch
  const style = data.templateStyle || "classic";
  if (style === "pos") {
    return renderPOSReceipt();
  }
  if (style === "modern") {
    return renderModernInvoice();
  }
  return renderClassicInvoice();
};
