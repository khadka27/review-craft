"use client";

import React, { useState } from "react";
import { BillData, BillItem, BillPlatform } from "@/types/bill";
import { 
  User, 
  ShoppingBag, 
  Calendar, 
  Hash, 
  CreditCard, 
  Plus, 
  Trash2, 
  DollarSign, 
  Percent, 
  Truck, 
  MapPin, 
  Store,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface BillFormProps {
  billData: BillData;
  onUpdate: (updates: Partial<BillData>) => void;
  showPlatformSelector?: boolean;
}

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "10px",
  background: "#0B0F14",
  border: "1px solid #1E293B",
  color: "#F8FAFC",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "#94A3B8",
  marginBottom: "8px",
};

const SECTION_HEADER_STYLE: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 700,
  color: "#F8FAFC",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  background: "rgba(30,41,59,0.4)",
  borderRadius: "8px",
  cursor: "pointer",
  userSelect: "none",
  border: "1px solid #1E293B"
};

function InputField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  icon?: React.ElementType;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={LABEL_STYLE}>
        {Icon && <Icon size={12} className="text-blue-500" />}
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={INPUT_STYLE}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#2563EB";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#1E293B";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

const US_NAMES = [
  "John Smith", "Emma Davis", "Michael Johnson", "Emily Watson", "Robert Miller", 
  "Sophia Martinez", "David Wilson", "Olivia Taylor", "William Anderson", "Isabella Thomas",
  "James Taylor", "Ava Robinson", "Joseph Harris", "Mia Clark", "Charles Lewis",
  "Amelia Walker", "Daniel Young", "Charlotte Allen", "Matthew King", "Abigail Scott",
  "Anthony Green", "Harper Baker", "Mark Adams", "Evelyn Carter", "Donald Mitchell"
];

const US_ADDRESSES = [
  { street: "742 Evergreen Terrace", city: "Springfield", state: "OR", zip: "97477" },
  { street: "1600 Amphitheatre Pkwy", city: "Mountain View", state: "CA", zip: "94043" },
  { street: "350 Fifth Ave", city: "New York", state: "NY", zip: "10118" },
  { street: "233 S Wacker Dr", city: "Chicago", state: "IL", zip: "60606" },
  { street: "1 Infinite Loop", city: "Cupertino", state: "CA", zip: "95014" },
  { street: "1044 Broad St, Suite 2A", city: "Newark", state: "NJ", zip: "07102" },
  { street: "522 W End Ave, Apt 3", city: "New York", state: "NY", zip: "10024" },
  { street: "1800 Health Parkway, Suite 100", city: "Denver", state: "CO", zip: "80202" },
  { street: "221B Baker St", city: "Boston", state: "MA", zip: "02116" },
  { street: "415 Mission St", city: "San Francisco", state: "CA", zip: "94105" },
  { street: "901 Cherry Ave", city: "San Bruno", state: "CA", zip: "94066" },
  { street: "2200 Mission College Blvd", city: "Santa Clara", state: "CA", zip: "95054" },
  { street: "1600 Pennsylvania Ave NW", city: "Washington", state: "DC", zip: "20500" },
  { street: "1200 Intrepid Ave", city: "Philadelphia", state: "PA", zip: "19112" },
  { street: "300 Pintail Rock Rd", city: "Grants Pass", state: "OR", zip: "97527" }
];

const US_PAYMENTS = [
  "Visa ending in ", "Mastercard ending in ", "American Express ending in ", "Discover ending in "
];

export const BillForm = ({ billData, onUpdate, showPlatformSelector = true }: BillFormProps) => {
  // Accordion states
  const [openSections, setOpenSections] = useState({
    general: true,
    branding: true,
    shipping: false,
    billing: false,
    seller: false,
    items: true,
    financials: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleRandomizeAll = () => {
    // Generate random shipping address
    const shipName = US_NAMES[Math.floor(Math.random() * US_NAMES.length)];
    const shipAddrObj = US_ADDRESSES[Math.floor(Math.random() * US_ADDRESSES.length)];
    const shipAddress = `${shipAddrObj.street}\n${shipAddrObj.city}, ${shipAddrObj.state} ${shipAddrObj.zip}\nUnited States`;
    const shipAreaCode = [201, 212, 302, 415, 650, 718, 917][Math.floor(Math.random() * 7)];
    const shipPrefix = Math.floor(100 + Math.random() * 900);
    const shipSuffix = Math.floor(1000 + Math.random() * 9000);
    const shipPhone = `+1 (${shipAreaCode}) ${shipPrefix}-${shipSuffix}`;

    // Generate random billing address (50% chance same as shipping, 50% different)
    const isBillingSame = Math.random() > 0.5;
    let billName = shipName;
    let billAddress = shipAddress;
    let billPhone = shipPhone;

    if (!isBillingSame) {
      billName = US_NAMES[Math.floor(Math.random() * US_NAMES.length)];
      const billAddrObj = US_ADDRESSES[Math.floor(Math.random() * US_ADDRESSES.length)];
      billAddress = `${billAddrObj.street}\n${billAddrObj.city}, ${billAddrObj.state} ${billAddrObj.zip}\nUnited States`;
      const billAreaCode = [201, 212, 302, 415, 650, 718, 917][Math.floor(Math.random() * 7)];
      const billPrefix = Math.floor(100 + Math.random() * 900);
      const billSuffix = Math.floor(1000 + Math.random() * 9000);
      billPhone = `+1 (${billAreaCode}) ${billPrefix}-${billSuffix}`;
    }

    // Random Order ID
    const randomOrderId = billData.platform === "amazon"
      ? `${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(1000000 + Math.random() * 9000000)}`
      : `${Math.floor(100000000000 + Math.random() * 900000000000)}`;

    // Random Invoice Number
    const randomInvNum = billData.platform === "amazon"
      ? `INV-${Math.floor(10000000 + Math.random() * 90000000)}`
      : billData.platform === "walmart"
      ? `WM-${Math.floor(1000000 + Math.random() * 9000000)}`
      : `VV-${Math.floor(10000 + Math.random() * 90000)}`;

    // Random Payment Card
    const cardBrand = US_PAYMENTS[Math.floor(Math.random() * US_PAYMENTS.length)];
    const cardFourDigits = String(Math.floor(1000 + Math.random() * 9000));
    const randomPayment = `${cardBrand}${cardFourDigits}`;

    // Random dates in past 15 days
    const getRandomPastDate = (daysAgoMax = 15) => {
      const d = new Date();
      const pastDays = Math.floor(Math.random() * daysAgoMax);
      d.setDate(d.getDate() - pastDays);
      const day = d.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      return `${month} ${day}, ${year}`;
    };

    const orderDate = getRandomPastDate(15);
    const invoiceDate = orderDate;

    onUpdate({
      shippingName: shipName,
      shippingAddress: shipAddress,
      shippingPhone: shipPhone,
      billingName: billName,
      billingAddress: billAddress,
      billingPhone: billPhone,
      orderId: randomOrderId,
      invoiceNumber: randomInvNum,
      paymentMethod: randomPayment,
      orderDate,
      invoiceDate,
    });
  };

  // Add Item handler
  const handleAddItem = () => {
    const newItem: BillItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: billData.platform === "supplement" 
        ? "Optimum Nutrition Gold Standard Whey Powder" 
        : "Standard E-commerce Product Name",
      price: "29.99",
      quantity: 1,
      sku: billData.platform === "amazon" ? "B002DYIZH0" : "UPC-7281023",
      specifications: billData.platform === "supplement" ? "Double Rich Chocolate / 5 lbs" : "Standard size"
    };
    onUpdate({ items: [...billData.items, newItem] });
  };

  // Update item field
  const handleUpdateItem = (itemId: string, updates: Partial<BillItem>) => {
    const updatedItems = billData.items.map(item => 
      item.id === itemId ? { ...item, ...updates } : item
    );
    onUpdate({ items: updatedItems });
  };

  // Delete item handler
  const handleDeleteItem = (itemId: string) => {
    const updatedItems = billData.items.filter(item => item.id !== itemId);
    onUpdate({ items: updatedItems });
  };

  return (
    <div className="flex flex-col gap-5">
      {/* ── Platform Selector ── */}
      {showPlatformSelector && (
        <div>
          <label style={LABEL_STYLE}>Select Invoice Platform</label>
          <div className="grid grid-cols-3 gap-2">
            {(["amazon", "walmart", "supplement"] as BillPlatform[]).map((p) => {
              const isActive = billData.platform === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => onUpdate({ platform: p })}
                  className={`py-2 px-3 rounded-xl text-sm font-semibold capitalize border transition-all ${
                    isActive
                      ? "bg-blue-500/10 border-blue-500 text-blue-400 shadow-sm shadow-blue-500/10"
                      : "bg-[#0B0F14] border-[#1E293B] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {p === "supplement" ? "Supplement" : p}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Randomize USA Details Button ── */}
      <button
        type="button"
        onClick={handleRandomizeAll}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-amber-400 bg-amber-500/10 border border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-500 transition-all active:scale-[0.98] shadow-sm shadow-amber-500/5 mb-1"
      >
        🎲 Generate Random USA Details
      </button>

      {/* ── SECTION: Logo Branding Settings ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("branding")}>
          <span className="flex items-center gap-2">
            <Store size={14} className="text-blue-400" />
            Logo Branding Settings
          </span>
          {openSections.branding ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.branding && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              id="bill-logo-name"
              label="Logo Brand Name"
              value={billData.logoName || ""}
              onChange={(v) => onUpdate({ logoName: v })}
              placeholder="e.g. VitaVibe"
            />
            <InputField
              id="bill-logo-ext"
              label="Logo Domain Extension"
              value={billData.logoExtension || ""}
              onChange={(v) => onUpdate({ logoExtension: v })}
              placeholder="e.g. .com"
            />
          </div>
        )}
      </div>

      {/* ── SECTION: General Information ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("general")}>
          <span className="flex items-center gap-2">
            <Hash size={14} className="text-blue-400" />
            General Order Info
          </span>
          {openSections.general ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
        
        {openSections.general && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              id="bill-order-id"
              label="Order ID"
              icon={Hash}
              value={billData.orderId}
              onChange={(v) => onUpdate({ orderId: v })}
              placeholder="408-1234567-1234567"
            />
            <InputField
              id="bill-invoice-num"
              label="Invoice Number"
              icon={Hash}
              value={billData.invoiceNumber}
              onChange={(v) => onUpdate({ invoiceNumber: v })}
              placeholder="INV-12345"
            />
            <InputField
              id="bill-order-date"
              label="Order Date"
              icon={Calendar}
              value={billData.orderDate}
              onChange={(v) => onUpdate({ orderDate: v })}
              placeholder="Jun 21, 2026"
            />
            <InputField
              id="bill-invoice-date"
              label="Invoice Date"
              icon={Calendar}
              value={billData.invoiceDate}
              onChange={(v) => onUpdate({ invoiceDate: v })}
              placeholder="Jun 21, 2026"
            />
            <div className="col-span-1 sm:col-span-2">
              <InputField
                id="bill-payment-method"
                label="Payment Method"
                icon={CreditCard}
                value={billData.paymentMethod}
                onChange={(v) => onUpdate({ paymentMethod: v })}
                placeholder="Visa ending in 1234"
              />
            </div>
          </div>
        )}
      </div>

      {/* ── SECTION: Shipping Address ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("shipping")}>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-400" />
            Shipping Details
          </span>
          {openSections.shipping ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.shipping && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl flex flex-col gap-4">
            <InputField
              id="bill-shipping-name"
              label="Recipient Name"
              icon={User}
              value={billData.shippingName}
              onChange={(v) => onUpdate({ shippingName: v })}
              placeholder="John Doe"
            />
            <div>
              <label htmlFor="bill-shipping-addr" style={LABEL_STYLE}>
                <MapPin size={12} className="text-blue-500 mr-1.5" />
                Shipping Address
              </label>
              <textarea
                id="bill-shipping-addr"
                rows={3}
                value={billData.shippingAddress}
                onChange={(e) => onUpdate({ shippingAddress: e.target.value })}
                placeholder="123 Main St&#10;Apartment 4B&#10;New York, NY 10001"
                style={{ ...INPUT_STYLE, resize: "none" }}
              />
            </div>
            <InputField
              id="bill-shipping-phone"
              label="Recipient Phone"
              icon={User}
              value={billData.shippingPhone || ""}
              onChange={(v) => onUpdate({ shippingPhone: v })}
              placeholder="555-0199"
            />
          </div>
        )}
      </div>

      {/* ── SECTION: Billing Address ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("billing")}>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-400" />
            Billing Details
          </span>
          {openSections.billing ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.billing && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => onUpdate({
                  billingName: billData.shippingName,
                  billingAddress: billData.shippingAddress,
                  billingPhone: billData.shippingPhone
                })}
                className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 py-1 px-3 rounded-lg hover:bg-blue-500/20 transition-all font-semibold"
              >
                Copy Shipping Address
              </button>
            </div>
            <InputField
              id="bill-billing-name"
              label="Billing Name"
              icon={User}
              value={billData.billingName}
              onChange={(v) => onUpdate({ billingName: v })}
              placeholder="John Doe"
            />
            <div>
              <label htmlFor="bill-billing-addr" style={LABEL_STYLE}>
                <MapPin size={12} className="text-blue-500 mr-1.5" />
                Billing Address
              </label>
              <textarea
                id="bill-billing-addr"
                rows={3}
                value={billData.billingAddress}
                onChange={(e) => onUpdate({ billingAddress: e.target.value })}
                placeholder="123 Main St&#10;Apartment 4B&#10;New York, NY 10001"
                style={{ ...INPUT_STYLE, resize: "none" }}
              />
            </div>
            <InputField
              id="bill-billing-phone"
              label="Billing Phone"
              icon={User}
              value={billData.billingPhone || ""}
              onChange={(v) => onUpdate({ billingPhone: v })}
              placeholder="555-0199"
            />
          </div>
        )}
      </div>

      {/* ── SECTION: Seller Details ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("seller")}>
          <span className="flex items-center gap-2">
            <Store size={14} className="text-blue-400" />
            Seller Information
          </span>
          {openSections.seller ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.seller && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl flex flex-col gap-4">
            <InputField
              id="bill-seller-name"
              label="Seller Name"
              icon={Store}
              value={billData.sellerName}
              onChange={(v) => onUpdate({ sellerName: v })}
              placeholder="Amazon.com Services LLC"
            />
            <div>
              <label htmlFor="bill-seller-addr" style={LABEL_STYLE}>
                <MapPin size={12} className="text-blue-500 mr-1.5" />
                Seller Address
              </label>
              <textarea
                id="bill-seller-addr"
                rows={2}
                value={billData.sellerAddress}
                onChange={(e) => onUpdate({ sellerAddress: e.target.value })}
                placeholder="410 Terry Ave N, Seattle, WA"
                style={{ ...INPUT_STYLE, resize: "none" }}
              />
            </div>
            <InputField
              id="bill-seller-tax"
              label="Seller Tax ID / VAT Number"
              icon={Hash}
              value={billData.sellerTaxId || ""}
              onChange={(v) => onUpdate({ sellerTaxId: v })}
              placeholder="TAX-12-345678"
            />
          </div>
        )}
      </div>

      {/* ── SECTION: Line Items (DYN LIST) ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("items")}>
          <span className="flex items-center gap-2">
            <ShoppingBag size={14} className="text-blue-400" />
            Line Items ({billData.items.length})
          </span>
          {openSections.items ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.items && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl flex flex-col gap-4">
            <div className="divide-y divide-[#1E293B] flex flex-col">
              {billData.items.map((item, index) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                      Item #{index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      className="text-rose-500 hover:text-rose-400 p-1 hover:bg-rose-500/10 rounded transition-all"
                      title="Delete item"
                      disabled={billData.items.length <= 1}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  
                  <InputField
                    id={`item-name-${item.id}`}
                    label="Item Name"
                    value={item.name}
                    onChange={(v) => handleUpdateItem(item.id, { name: v })}
                    placeholder="Product title"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <InputField
                      id={`item-price-${item.id}`}
                      label="Price"
                      icon={DollarSign}
                      value={item.price}
                      onChange={(v) => handleUpdateItem(item.id, { price: v })}
                      placeholder="29.99"
                    />
                    <div>
                      <label htmlFor={`item-qty-${item.id}`} style={LABEL_STYLE}>Quantity</label>
                      <select
                        id={`item-qty-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => handleUpdateItem(item.id, { quantity: parseInt(e.target.value) || 1 })}
                        style={INPUT_STYLE}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty => (
                          <option key={qty} value={qty} style={{ background: "#111827" }}>{qty}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <InputField
                      id={`item-sku-${item.id}`}
                      label="ASIN / SKU"
                      value={item.sku || ""}
                      onChange={(v) => handleUpdateItem(item.id, { sku: v })}
                      placeholder="B002DYIZH0"
                    />
                    <InputField
                      id={`item-specs-${item.id}`}
                      label="Specs / Flavor / Size"
                      value={item.specifications || ""}
                      onChange={(v) => handleUpdateItem(item.id, { specifications: v })}
                      placeholder="e.g. Vanilla / 5 lbs"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleAddItem}
              className="mt-2 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-dashed border-blue-500/40 text-blue-400 hover:text-blue-300 hover:bg-blue-500/5 hover:border-blue-500 transition-all text-sm font-semibold"
            >
              <Plus size={14} />
              Add Product Line Item
            </button>
          </div>
        )}
      </div>

      {/* ── SECTION: Financial Adjustments ── */}
      <div>
        <div style={SECTION_HEADER_STYLE} onClick={() => toggleSection("financials")}>
          <span className="flex items-center gap-2">
            <DollarSign size={14} className="text-blue-400" />
            Tax, Shipping & Discounts
          </span>
          {openSections.financials ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.financials && (
          <div className="p-4 bg-[#111827]/40 border-x border-b border-[#1E293B] rounded-b-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              id="bill-shipping-cost"
              label="Shipping Cost"
              icon={Truck}
              value={billData.shippingCost}
              onChange={(v) => onUpdate({ shippingCost: v })}
              placeholder="0.00"
            />
            <InputField
              id="bill-tax-rate"
              label="Tax Rate (%)"
              icon={Percent}
              value={billData.taxRate}
              onChange={(v) => onUpdate({ taxRate: v })}
              placeholder="8.25"
            />
            <InputField
              id="bill-discount"
              label="Discount Amount"
              icon={DollarSign}
              value={billData.discount}
              onChange={(v) => onUpdate({ discount: v })}
              placeholder="0.00"
            />
            <div>
              <label style={LABEL_STYLE}>Currency</label>
              <select
                value={`${billData.currencySymbol}:${billData.currencyCode}`}
                onChange={(e) => {
                  const [symbol, code] = e.target.value.split(":");
                  onUpdate({ currencySymbol: symbol, currencyCode: code });
                }}
                style={INPUT_STYLE}
              >
                <option value="$:USD" style={{ background: "#111827" }}>USD ($)</option>
                <option value="€:EUR" style={{ background: "#111827" }}>EUR (€)</option>
                <option value="£:GBP" style={{ background: "#111827" }}>GBP (£)</option>
                <option value="₹:INR" style={{ background: "#111827" }}>INR (₹)</option>
                <option value="CAD $:CAD" style={{ background: "#111827" }}>CAD (CAD $)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="text-center text-[11px] text-[#475569] mt-2">
        ✦ Dynamic calculations evaluate subtotal and grand total in real-time.
      </div>
    </div>
  );
};
