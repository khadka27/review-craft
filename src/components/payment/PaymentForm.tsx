"use client";

import { TransactionData } from "@/types/payment";
import {
  User,
  Receipt,
  Calendar,
  Hash,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

interface PaymentFormProps {
  paymentData: TransactionData;
  onUpdate: (data: Partial<TransactionData>) => void;
  showPlatformSelector?: boolean;
}

const INPUT_CLASS =
  "w-full min-h-[48px] md:min-h-0 px-3.5 py-3 md:py-2.5 rounded-[10px] bg-[#0B0F14] border border-slate-800 text-slate-50 text-sm outline-none transition-all duration-150 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15";

const LABEL_CLASS =
  "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-slate-300 mb-2";

const DIVIDER_STYLE: React.CSSProperties = {
  borderTop: "1px solid #1E293B",
  margin: "0",
};

function InputField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
  rightSlot,
}: {
  id: string;
  label: string;
  icon?: React.ElementType;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {Icon && <Icon size={12} className="text-blue-600" />}
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${INPUT_CLASS} ${rightSlot ? "pr-[42px]" : ""}`}
        />
        {rightSlot && (
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}

export const PaymentForm = ({ paymentData, onUpdate }: PaymentFormProps) => {
  const generateTxnId = () => {
    onUpdate({
      transactionId:
        "TXN" + Math.random().toString(36).substring(2, 10).toUpperCase(),
    });
  };

  const statusOptions: {
    id: TransactionData["status"];
    label: string;
    icon: React.ElementType;
    activeStyle: React.CSSProperties;
  }[] = [
    {
      id: "success",
      label: "Success",
      icon: CheckCircle2,
      activeStyle: {
        background: "rgba(52,211,153,0.12)",
        border: "1px solid rgba(52,211,153,0.4)",
        color: "#34d399",
        boxShadow: "0 0 0 2px rgba(52,211,153,0.15)",
      },
    },
    {
      id: "pending",
      label: "Pending",
      icon: Clock,
      activeStyle: {
        background: "rgba(251,191,36,0.12)",
        border: "1px solid rgba(251,191,36,0.4)",
        color: "#fbbf24",
        boxShadow: "0 0 0 2px rgba(251,191,36,0.15)",
      },
    },
    {
      id: "failed",
      label: "Failed",
      icon: AlertCircle,
      activeStyle: {
        background: "rgba(248,113,113,0.12)",
        border: "1px solid rgba(248,113,113,0.4)",
        color: "#f87171",
        boxShadow: "0 0 0 2px rgba(248,113,113,0.15)",
      },
    },
  ];

  const inactiveStatusStyle: React.CSSProperties = {
    background: "#0B0F14",
    border: "1px solid #1E293B",
    color: "#94A3B8",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
      {/* ── Status ── */}
      <div>
        <div className={LABEL_CLASS}>
          <CheckCircle2 size={12} className="text-blue-600" />
          Transaction Status
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {statusOptions.map((s) => {
            const isActive = paymentData.status === s.id;
            return (
              <button
                key={s.id}
                type="button"
                className="min-h-[48px] md:min-h-0"
                onClick={() => onUpdate({ status: s.id })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s",
                  ...(isActive ? s.activeStyle : inactiveStatusStyle),
                }}
              >
                <s.icon size={14} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div style={DIVIDER_STYLE} />

      {/* ── Amount & Currency ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField
          id="payment-amount"
          label="Amount"
          icon={Receipt}
          value={paymentData.amount}
          onChange={(v) => onUpdate({ amount: v })}
          placeholder="500.00"
        />
        <div>
          <label htmlFor="payment-currency" className={LABEL_CLASS}>Currency</label>
          <select
            id="payment-currency"
            aria-label="Select Currency"
            value={paymentData.currency}
            onChange={(e) => onUpdate({ currency: e.target.value })}
            className={`${INPUT_CLASS} cursor-pointer`}
          >
            <option value="INR" style={{ background: "#111827" }}>INR (₹)</option>
            <option value="USD" style={{ background: "#111827" }}>USD ($)</option>
            <option value="EUR" style={{ background: "#111827" }}>EUR (€)</option>
            <option value="GBP" style={{ background: "#111827" }}>GBP (£)</option>
            <option value="NPR" style={{ background: "#111827" }}>NPR (Rs.)</option>
          </select>
        </div>
      </div>

      <div style={DIVIDER_STYLE} />

      {/* ── Sender & Receiver ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField
          id="payment-sender"
          label="Sender Name"
          icon={User}
          value={paymentData.senderName}
          onChange={(v) => onUpdate({ senderName: v })}
          placeholder="John Doe"
        />
        <InputField
          id="payment-receiver"
          label="Receiver Name"
          icon={User}
          value={paymentData.receiverName}
          onChange={(v) => onUpdate({ receiverName: v })}
          placeholder="Jane Smith"
        />
      </div>

      <div style={DIVIDER_STYLE} />

      {/* ── Transaction ID & Date ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <InputField
          id="payment-txn-id"
          label="Transaction ID"
          icon={Hash}
          value={paymentData.transactionId}
          onChange={(v) => onUpdate({ transactionId: v })}
          placeholder="TXN123456"
          rightSlot={
            <button
              type="button"
              onClick={generateTxnId}
              title="Generate random ID"
              aria-label="Generate random transaction ID"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#475569",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              <RefreshCw size={13} />
            </button>
          }
        />
        <InputField
          id="payment-timestamp"
          label="Date & Time"
          icon={Calendar}
          value={paymentData.timestamp}
          onChange={(v) => onUpdate({ timestamp: v })}
          placeholder="03 Jun 2026, 03:15 PM"
        />
      </div>

      <div style={DIVIDER_STYLE} />

      {/* ── Note ── */}
      <div>
        <div className={LABEL_CLASS}>
          <FileText size={12} className="text-blue-600" />
          Payment Note
        </div>
        <textarea
          id="payment-note"
          value={paymentData.note}
          onChange={(e) => onUpdate({ note: e.target.value })}
          placeholder="What's this payment for?"
          rows={3}
          className={INPUT_CLASS}
          style={{
            resize: "none",
            lineHeight: "1.5",
          }}
        />
      </div>

      {/* tip */}
      <p style={{ fontSize: "11px", color: "#334155", textAlign: "center" }}>
        ✦ All changes reflect instantly in the preview
      </p>
    </div>
  );
};
