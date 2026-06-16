import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const CheckIcon = ({ size = 32, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const XIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ClockIcon = ({ size = 28, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const ShareIcon = ({ size = 18, color = "#00baf2" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);
const DownloadIcon = ({ size = 18, color = "#00baf2" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const FlagIcon = ({ size = 18, color = "#00baf2" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

export const PaytmReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";
  const sym = getCurrencySymbol(data.currency);
  const upiId = data.receiverId ?? `${data.receiverName.toLowerCase().replace(/\s+/g, ".")}@paytm`;
  const upiRef = data.transactionId.replace(/[^0-9]/g, "").slice(0, 12).padEnd(12, "0");

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#f5f7fa", fontFamily: "'Roboto', sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── Paytm Top Nav ── */}
      <div style={{ backgroundColor: "#002970", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 22, fontWeight: 900, fontFamily: "Arial, sans-serif", letterSpacing: "-0.5px", display: "flex", alignItems: "center" }}>
          <span style={{ color: "#00baf2" }}>Pay</span>
          <span style={{ color: "white" }}>tm</span>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <XIcon size={16} color="white" />
        </div>
      </div>

      {/* ── Status Hero ── */}
      <div style={{ background: isSuccess ? "linear-gradient(180deg,#00baf2 0%,#0076c8 100%)" : isFailed ? "#e53935" : "#f59e0b", padding: "28px 20px 48px", textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid rgba(255,255,255,0.5)" }}>
          {isSuccess ? <CheckIcon size={32} color="white" /> : isFailed ? <XIcon size={28} color="white" /> : <ClockIcon size={28} color="white" />}
        </div>
        <p style={{ color: "white", fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>
          {isSuccess ? "Money Sent!" : isFailed ? "Payment Failed" : "Payment Pending"}
        </p>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, margin: 0 }}>{data.timestamp}</p>
      </div>

      {/* ── White card ── */}
      <div style={{ margin: "-24px 16px 0", background: "white", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.1)", flex: 1, overflow: "hidden" }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
          <p style={{ color: "#999", fontSize: 12, fontWeight: 600, marginBottom: 4, letterSpacing: 0.5 }}>AMOUNT</p>
          <p style={{ fontSize: 36, fontWeight: 900, color: "#1a1a1a", letterSpacing: -1, margin: 0 }}>
            {sym}{parseFloat(data.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div style={{ padding: "14px 20px", borderBottom: "1px dashed #f0f0f0", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#e8f4ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#00baf2", fontWeight: 800, fontSize: 16 }}>{(data.receiverName || "R")[0].toUpperCase()}</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, color: "#888", margin: "0 0 2px", fontWeight: 500 }}>Paid to</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{data.receiverName}</p>
            <p style={{ fontSize: 11, color: "#aaa", margin: "2px 0 0" }}>{upiId}</p>
          </div>
        </div>

        <div style={{ padding: "14px 20px", borderBottom: "1px dashed #f0f0f0", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f0f7ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#002970", fontWeight: 800, fontSize: 16 }}>{(data.senderName || "S")[0].toUpperCase()}</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, color: "#888", margin: "0 0 2px", fontWeight: 500 }}>Paid by</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>{data.senderName}</p>
          </div>
        </div>

        <div style={{ padding: "14px 20px" }}>
          {[
            { label: "UPI Ref. No.", value: upiRef, mono: true },
            { label: "Order ID", value: data.transactionId.slice(0, 10).toUpperCase(), mono: true },
            ...(data.note ? [{ label: "Remark", value: data.note, mono: false }] : []),
          ].map(({ label, value, mono }) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 12, color: "#999", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: 12, color: "#333", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Action bar */}
        <div style={{ background: "#f9f9f9", borderTop: "1px solid #f0f0f0", padding: "14px 20px", display: "flex", justifyContent: "center", gap: 32 }}>
          {[
            { label: "Share", Icon: ShareIcon },
            { label: "Download", Icon: DownloadIcon },
            { label: "Raise Issue", Icon: FlagIcon },
          ].map(({ label, Icon }) => (
            <button key={label} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#e8f4ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={16} color="#00baf2" />
              </div>
              <span style={{ fontSize: 10, color: "#666", fontWeight: 600 }}>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Shield footer */}
      <div style={{ padding: "14px 0", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span style={{ fontSize: 10, color: "#aaa", fontWeight: 600 }}>Secured by Paytm Payments Bank</span>
      </div>
    </div>
  );
};
