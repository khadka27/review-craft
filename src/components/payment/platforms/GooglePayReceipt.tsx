import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const CheckIcon = ({ size = 36, color = "#34A853" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const XIcon = ({ size = 28, color = "#EA4335" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ClockIcon = ({ size = 28, color = "#FBBC05" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const SearchIcon = ({ size = 20, color = "#5f6368" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ShareIcon = ({ size = 18, color = "#5f6368" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);
const DownloadIcon = ({ size = 18, color = "#5f6368" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const HelpIcon = ({ size = 18, color = "#5f6368" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const GooglePayReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";
  const sym = getCurrencySymbol(data.currency);

  const upiId = `${data.receiverName.toLowerCase().replace(/\s+/g, ".")}@okicici`;
  const txnId = data.transactionId.replace(/\D/g, "").slice(0, 12).padEnd(12, "3");

  const statusColor = isSuccess ? "#34A853" : isFailed ? "#EA4335" : "#FBBC05";
  const statusBg = isSuccess ? "#e6f4ea" : isFailed ? "#fce8e6" : "#fff3e0";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "white", fontFamily: "'Google Sans','Roboto',sans-serif", display: "flex", flexDirection: "column" }}>

      {/* Rainbow strip */}
      <div style={{ height: 4, display: "flex" }}>
        {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c) => (
          <div key={c} style={{ flex: 1, background: c }} />
        ))}
      </div>

      {/* App bar */}
      <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Google G SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#202124" }}>Pay</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchIcon size={20} color="#5f6368" />
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: statusColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>{(data.senderName || "U")[0].toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Status hero */}
      <div style={{ padding: "20px 24px 28px", textAlign: "center", borderBottom: "1px solid #f1f3f4" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", margin: "0 auto 16px", background: statusBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? <CheckIcon size={36} color="#34A853" /> : isFailed ? <XIcon size={28} color="#EA4335" /> : <ClockIcon size={28} color="#FBBC05" />}
        </div>
        <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 14, color: statusColor, letterSpacing: 0.5 }}>
          {isSuccess ? "Payment sent" : isFailed ? "Payment failed" : "Payment pending"}
        </p>
        <p style={{ margin: "0 0 4px", fontSize: 40, fontWeight: 400, color: "#202124", letterSpacing: -1 }}>
          {sym}{parseFloat(data.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </p>
        <p style={{ margin: 0, fontSize: 14, color: "#5f6368" }}>to {data.receiverName}</p>
      </div>

      {/* Receiver card */}
      <div style={{ margin: "14px 16px 0", background: "#f8f9fa", borderRadius: 12, padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#4285F4,#34A853)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: 18 }}>{(data.receiverName || "R")[0].toUpperCase()}</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: "#202124" }}>{data.receiverName}</p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#5f6368", fontFamily: "monospace" }}>{upiId}</p>
          </div>
        </div>
      </div>

      {/* Sender card */}
      <div style={{ margin: "10px 16px 0", background: "#f8f9fa", borderRadius: 12, padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#e8eaed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#5f6368", fontWeight: 800, fontSize: 18 }}>{(data.senderName || "S")[0].toUpperCase()}</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: "#202124" }}>{data.senderName}</p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#5f6368" }}>via Google Pay • UPI</p>
          </div>
        </div>
      </div>

      {/* Info rows */}
      <div style={{ margin: "14px 16px 0", borderTop: "1px solid #e8eaed", paddingTop: 14, flex: 1 }}>
        {[
          { label: "Date & Time", value: data.timestamp },
          { label: "UPI transaction ID", value: txnId, mono: true },
          { label: "Payment method", value: "BHIM UPI" },
          ...(data.note ? [{ label: "Note", value: data.note }] : []),
        ].map(({ label, value, mono }: any, i, arr) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? "1px solid #f1f3f4" : "none" }}>
            <span style={{ fontSize: 13, color: "#5f6368", fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: 13, color: "#202124", fontWeight: 600, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "58%" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Bottom actions */}
      <div style={{ padding: "16px", borderTop: "1px solid #f1f3f4", display: "flex", justifyContent: "space-around" }}>
        {[
          { label: "Share", Icon: ShareIcon },
          { label: "Save", Icon: DownloadIcon },
          { label: "Help", Icon: HelpIcon },
        ].map(({ label, Icon }) => (
          <button key={label} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f1f3f4", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={18} color="#5f6368" />
            </div>
            <span style={{ fontSize: 11, color: "#5f6368", fontWeight: 600 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
