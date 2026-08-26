import { TransactionData } from "@/types/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const HeartIcon = ({ size = 20, color = "#94a3b8" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const MessageIcon = ({ size = 20, color = "#94a3b8" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShareIcon = ({ size = 20, color = "#008CFF" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const HomeIcon = ({ size = 20, color = "#94a3b8" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ListIcon = ({ size = 20, color = "#94a3b8" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);
const MenuIcon = ({ size = 20, color = "#94a3b8" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const MoreHorizontalIcon = ({ size = 22, color = "rgba(255,255,255,0.9)" }: { size?: number; color?: string }) => (
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
    <div style={{ width: "100%", backgroundColor: "white", fontFamily: "system-ui, -apple-system, 'SF Pro Text', sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── Venmo blue header ── */}
      <div style={{ background: "#008CFF", padding: "32px 16px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "white", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <span style={{ color: "#008CFF", fontWeight: 900, fontSize: 17, lineHeight: 1 }}>V</span>
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>venmo</span>
        </div>
        <MoreHorizontalIcon size={22} color="rgba(255,255,255,0.95)" />
      </div>

      {/* ── Transaction post ── */}
      <div style={{ padding: "16px 16px 0" }}>
        {/* Avatars + names */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", flexShrink: 0 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#008CFF", border: "2.5px solid white", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: 17 }}>{(data.senderName || "S")[0].toUpperCase()}</span>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#38bdf8", border: "2.5px solid white", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: -14, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: 17 }}>{(data.receiverName || "R")[0].toUpperCase()}</span>
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 14, color: "#1e293b", lineHeight: 1.35 }}>
              <strong style={{ fontWeight: 700, color: "#0f172a" }}>{data.senderName}</strong> paid <strong style={{ fontWeight: 700, color: "#0f172a" }}>{data.receiverName}</strong>
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "#94a3b8" }}>{data.timestamp}</p>
          </div>
        </div>

        {/* Note bubble */}
        <div style={{ background: "#f0f8ff", borderRadius: 14, padding: "12px 14px", marginBottom: 6, border: "1px solid #e0f0fe" }}>
          <p style={{ margin: "0 0 3px", fontSize: 15, color: "#0f172a", fontWeight: 500, lineHeight: 1.3 }}>
            {data.note && data.note.length > 0 ? data.note : "Payment"}
          </p>
          <p style={{ margin: 0, fontSize: 9.5, color: "#008CFF", fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase" }}>Payment memo</p>
        </div>

        {/* Like / Comment / Share */}
        <div style={{ display: "flex", padding: "8px 0", borderBottom: "1px solid #f1f5f9", gap: 18 }}>
          <button type="button" aria-label="Like transaction" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0 }}>
            <HeartIcon size={19} color="#94a3b8" />
          </button>
          <button type="button" aria-label="Comment on transaction" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0 }}>
            <MessageIcon size={19} color="#94a3b8" />
          </button>
          <button type="button" aria-label="Share transaction" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0 }}>
            <ShareIcon size={19} color="#008CFF" />
          </button>
        </div>
      </div>

      {/* ── Amount section ── */}
      <div style={{ padding: "16px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <p style={{ fontSize: 44, fontWeight: 900, color: "#008CFF", margin: "0 0 8px", letterSpacing: -1.5, lineHeight: 1.1 }}>
          {sym}{parseFloat(data.amount || "0").toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 9999, background: isSuccess ? "#f0fdf4" : isFailed ? "#fef2f2" : "#fffbeb", border: `1px solid ${isSuccess ? "#bbf7d0" : isFailed ? "#fecaca" : "#fde68a"}` }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: isSuccess ? "#16a34a" : isFailed ? "#dc2626" : "#d97706", display: "inline-block" }} />
          <span style={{ fontSize: 11.5, fontWeight: 700, color: isSuccess ? "#15803d" : isFailed ? "#dc2626" : "#d97706" }}>
            {isSuccess ? "Completed" : isFailed ? "Failed" : "Pending"}
          </span>
        </div>
      </div>

      {/* ── Details Section (Fixed 2-line layout to prevent text clipping) ── */}
      <div style={{ padding: "14px 16px", background: "#ffffff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #f8fafc" }}>
          <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, minWidth: 50 }}>From</span>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, color: "#0f172a", fontWeight: 700 }}>{data.senderName}</div>
            <div style={{ fontSize: 11, color: "#008CFF", fontWeight: 500 }}>{senderHandle}</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #f8fafc" }}>
          <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, minWidth: 50 }}>To</span>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, color: "#0f172a", fontWeight: 700 }}>{data.receiverName}</div>
            <div style={{ fontSize: 11, color: "#008CFF", fontWeight: 500 }}>{receiverHandle}</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>Ref ID</span>
          <span style={{ fontSize: 11.5, color: "#475569", fontWeight: 600, fontFamily: "monospace", letterSpacing: 0.5 }}>{data.transactionId.slice(0, 14)}</span>
        </div>
      </div>

      {/* ── Bottom tab bar ── */}
      <div style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "8px 0 6px", display: "flex", justifyContent: "space-around" }}>
        {[
          { Icon: HomeIcon, label: "Home" },
          { Icon: ListIcon, label: "Activity" },
          { Icon: MenuIcon, label: "More" },
        ].map(({ Icon, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <Icon size={18} color="#94a3b8" />
            <span style={{ fontSize: 9, color: "#94a3b8", fontWeight: 600, letterSpacing: 0.2 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
