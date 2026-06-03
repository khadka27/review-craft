import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const SearchIcon = ({ size = 22, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const HelpCircleIcon = ({ size = 14, color = "rgba(255,255,255,0.5)" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const CashAppReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const isPending = data.status === "pending";
  const sym = getCurrencySymbol(data.currency);
  const cashtag = `$${data.receiverName.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#00D64F", fontFamily: "'Cash Sans','SF Pro Display','Helvetica Neue',sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── Header ── */}
      <div style={{ padding: "12px 20px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Cash App logo — "$" in white box */}
          <div style={{ width: 34, height: 34, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 1v2M12 21v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M1 12h2M21 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#00D64F" strokeWidth="2.5" strokeLinecap="round"/>
              <text x="7" y="17" fontSize="12" fontWeight="900" fill="#00D64F" fontFamily="Arial">$</text>
            </svg>
            <span style={{ color: "#00D64F", fontWeight: 900, fontSize: 18, lineHeight: 1 }}>$</span>
          </div>
          <span style={{ color: "white", fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>Cash App</span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <SearchIcon size={22} color="white" />
          <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2.5px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>{(data.senderName || "U")[0].toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* ── Big Amount ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 24px 20px" }}>
        <p style={{ fontSize: 72, fontWeight: 900, color: "white", letterSpacing: -3, margin: "0 0 8px", lineHeight: 1 }}>
          {sym}{parseFloat(data.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, fontWeight: 700, margin: "0 0 28px", fontStyle: "italic" }}>
          {isFailed ? "Failed payment to" : isPending ? "Pending to" : "Paid to"} {data.receiverName}
        </p>

        {/* ── Details Card ── */}
        <div style={{ width: "100%", background: "rgba(0,0,0,0.15)", backdropFilter: "blur(10px)", borderRadius: 28, padding: "24px 20px", border: "1px solid rgba(255,255,255,0.12)" }}>
          {/* Receiver row */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontWeight: 900, fontSize: 22 }}>{(data.receiverName || "R")[0].toUpperCase()}</span>
            </div>
            <div>
              <p style={{ margin: 0, color: "white", fontWeight: 900, fontSize: 18, lineHeight: 1 }}>{data.receiverName}</p>
              <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 700 }}>{cashtag}</p>
            </div>
          </div>

          {/* Info rows */}
          {[
            { label: "STATUS", value: isSuccess ? "Completed" : isFailed ? "Failed" : "Pending" },
            { label: "COMPLETION DATE", value: data.timestamp.split(",")[0] },
            { label: "REFERENCE CODE", value: data.transactionId.slice(0, 12), mono: true },
            ...(data.note ? [{ label: "NOTE", value: `"${data.note}"`, italic: true }] : []),
          ].map(({ label, value, mono, italic }: any) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontWeight: 700, letterSpacing: 1.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "white", fontWeight: 800, fontFamily: mono ? "monospace" : "inherit", fontStyle: italic ? "italic" : "normal", textAlign: "right", maxWidth: "58%" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Web Receipt button */}
        <button style={{ width: "100%", marginTop: 20, padding: "16px", background: "white", border: "none", borderRadius: 40, color: "#00D64F", fontWeight: 900, fontSize: 17, cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
          Web Receipt
        </button>

        {/* Help row — no emoji, use icon */}
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 5 }}>
          <HelpCircleIcon size={13} color="rgba(255,255,255,0.4)" />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>HELP CENTER</span>
        </div>
      </div>
    </div>
  );
};
