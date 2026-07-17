import { TransactionData } from "@/types/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const HeartIcon = ({ size = 22, color = "#aaa" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const MessageIcon = ({ size = 22, color = "#aaa" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShareIcon = ({ size = 22, color = "#3D95CE" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const HomeIcon = ({ size = 22, color = "#999" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ListIcon = ({ size = 22, color = "#999" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);
const MenuIcon = ({ size = 22, color = "#999" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const MoreHorizontalIcon = ({ size = 22, color = "rgba(255,255,255,0.8)" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
  </svg>
);

export const VenmoReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const getCurrencySymbol = (c: string) => c === "USD" ? "$" : c === "EUR" ? "€" : c === "GBP" ? "£" : c === "INR" ? "₹" : "$";
  const sym = getCurrencySymbol(data.currency);

  const senderHandle = `@${data.senderName.toLowerCase().replace(/\s+/g, "")}`;
  const receiverHandle = `@${data.receiverName.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "white", fontFamily: "'Roboto',sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── Venmo blue header ── */}
      <div style={{ background: "#3D95CE", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, background: "white", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#3D95CE", fontWeight: 900, fontSize: 18, lineHeight: 1 }}>V</span>
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 18 }}>venmo</span>
        </div>
        <MoreHorizontalIcon size={22} color="rgba(255,255,255,0.85)" />
      </div>

      {/* ── Transaction post ── */}
      <div style={{ padding: "16px 16px 0" }}>
        {/* Avatars + names */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ display: "flex", flexShrink: 0 }}>
            <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#3D95CE", border: "3px solid white", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: 18 }}>{(data.senderName || "S")[0].toUpperCase()}</span>
            </div>
            <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#5bb8e8", border: "3px solid white", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: -14 }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: 18 }}>{(data.receiverName || "R")[0].toUpperCase()}</span>
            </div>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.3 }}>
              <strong>{data.senderName}</strong> paid <strong>{data.receiverName}</strong>
            </p>
            <p style={{ margin: "3px 0 0", fontSize: 12, color: "#999" }}>{data.timestamp}</p>
          </div>
        </div>

        {/* Note bubble */}
        <div style={{ background: "#f0f9ff", borderRadius: 12, padding: "14px 16px", marginBottom: 4, border: "1px solid #e0f0fc" }}>
          <p style={{ margin: "0 0 4px", fontSize: 16, color: "#1a1a1a", fontWeight: 500 }}>
            {data.note && data.note.length > 0 ? data.note : "Payment"}
          </p>
          <p style={{ margin: 0, fontSize: 10, color: "#3D95CE", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Payment memo</p>
        </div>

        {/* Like / Comment / Share */}
        <div style={{ display: "flex", padding: "10px 0", borderBottom: "1px solid #f0f0f0", gap: 20 }}>
          <button aria-label="Like transaction" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <HeartIcon size={22} color="#aaa" />
          </button>
          <button aria-label="Comment on transaction" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <MessageIcon size={22} color="#aaa" />
          </button>
          <button aria-label="Share transaction" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <ShareIcon size={22} color="#3D95CE" />
          </button>
        </div>
      </div>

      {/* ── Amount section ── */}
      <div style={{ padding: "20px 16px", borderBottom: "1px solid #f0f0f0", textAlign: "center" }}>
        <p style={{ fontSize: 54, fontWeight: 900, color: "#3D95CE", margin: "0 0 10px", letterSpacing: -2 }}>
          {sym}{parseFloat(data.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 14px", borderRadius: 20, background: isSuccess ? "#e6f7ee" : isFailed ? "#fef2f2" : "#fffbeb", border: `1px solid ${isSuccess ? "#b7ebc9" : isFailed ? "#fecaca" : "#fde68a"}` }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: isSuccess ? "#16a34a" : isFailed ? "#dc2626" : "#d97706", display: "inline-block" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: isSuccess ? "#15803d" : isFailed ? "#dc2626" : "#d97706" }}>
            {isSuccess ? "Completed" : isFailed ? "Failed" : "Pending"}
          </span>
        </div>
      </div>

      {/* ── Details ── */}
      <div style={{ padding: "16px", flex: 1 }}>
        {[
          { label: "From", value: `${data.senderName} ${senderHandle}` },
          { label: "To", value: `${data.receiverName} ${receiverHandle}` },
          { label: "Reference", value: data.transactionId.slice(0, 12), mono: true },
        ].map(({ label, value, mono }: any, i, arr) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? "1px solid #f5f5f5" : "none" }}>
            <span style={{ fontSize: 13, color: "#999", fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: 13, color: "#333", fontWeight: 600, fontFamily: mono ? "monospace" : "inherit" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* ── Bottom tab bar ── */}
      <div style={{ background: "#f7f7f7", borderTop: "1px solid #eee", padding: "10px 0 6px", display: "flex", justifyContent: "space-around" }}>
        {[
          { Icon: HomeIcon, label: "Home" },
          { Icon: ListIcon, label: "Activity" },
          { Icon: MenuIcon, label: "More" },
        ].map(({ Icon, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Icon size={22} color="#999" />
            <span style={{ fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 0.3 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
