import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const CheckIcon = ({ size = 38, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const XIcon = ({ size = 32, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ClockIcon = ({ size = 28, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const DownloadIcon = ({ size = 16, color = "#555" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const ShareIcon = ({ size = 18, color = "rgba(255,255,255,0.8)" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const HelpIcon = ({ size = 20, color = "rgba(255,255,255,0.8)" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const FonepayReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";
  const sym = getCurrencySymbol(data.currency);

  const statusColor = isSuccess ? "#22c55e" : isFailed ? "#ef4444" : "#f59e0b";
  const statusRing = isSuccess ? "rgba(34,197,94,0.12)" : isFailed ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)";
  const statusText = isSuccess ? "Payment Successful" : isFailed ? "Payment Failed" : "Payment Pending";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "white", fontFamily: "'Roboto',sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── Fonepay Red Header ── */}
      <div style={{ background: "#ed1c24", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#ed1c24", fontWeight: 900, fontSize: 16, fontStyle: "italic" }}>f</span>
          </div>
          <span style={{ color: "white", fontWeight: 900, fontSize: 18, fontStyle: "italic", letterSpacing: -0.5 }}>fonepay</span>
        </div>
        {/* SVG icons instead of text arrows */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <HelpIcon size={20} color="rgba(255,255,255,0.8)" />
          <ShareIcon size={18} color="rgba(255,255,255,0.8)" />
        </div>
      </div>

      {/* ── Status hero ── */}
      <div style={{ padding: "28px 20px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 76, height: 76, borderRadius: "50%",
          background: statusColor,
          boxShadow: `0 0 0 10px ${statusRing}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 14,
        }}>
          {isSuccess
            ? <CheckIcon size={38} color="white" />
            : isFailed
            ? <XIcon size={32} color="white" />
            : <ClockIcon size={28} color="white" />}
        </div>

        <p style={{ margin: "0 0 2px", fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: 0.5, color: statusColor }}>
          {statusText}
        </p>
        <p style={{ margin: 0, fontSize: 11, color: "#aaa", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{data.timestamp}</p>

        <p style={{ margin: "16px 0 2px", fontSize: 46, fontWeight: 900, color: "#ed1c24", letterSpacing: -2 }}>
          {sym}{parseFloat(data.amount).toLocaleString("en", { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* ── Details box ── */}
      <div style={{ margin: "4px 16px 0", background: "#f9f9f9", borderRadius: 16, overflow: "hidden", border: "1px solid #f0f0f0" }}>
        {[
          { label: "Merchant / Recipient", value: data.receiverName },
          { label: "Sender", value: data.senderName },
          { label: "Reference ID", value: data.transactionId.slice(0, 12).toUpperCase(), mono: true },
          { label: "Trace ID", value: data.transactionId.replace(/\D/g, "").slice(0, 10).padEnd(10, "0"), mono: true },
          ...(data.note ? [{ label: "Remarks", value: data.note }] : []),
        ].map(({ label, value, mono }: any, i, arr) => (
          <div key={label} style={{ padding: "13px 16px", borderBottom: i < arr.length - 1 ? "1px dashed #e8e8e8" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#999", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
            <span style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* ── Buttons ── */}
      <div style={{ margin: "16px 16px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <button style={{ padding: "13px", background: "#f5f5f5", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 13, color: "#555", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
          <DownloadIcon size={15} color="#555" /> Save
        </button>
        <button style={{ padding: "13px", background: "#ed1c24", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 13, color: "white", cursor: "pointer" }}>
          Done
        </button>
      </div>

      {/* ── Footer ── */}
      <div style={{ padding: "20px 0 12px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 9, color: "#ccc", fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>
          Interoperable QR Network
        </p>
      </div>
    </div>
  );
};
