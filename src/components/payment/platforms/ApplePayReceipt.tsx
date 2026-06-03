import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const CheckIcon = ({ size = 12, color = "#065f46" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const XIcon = ({ size = 12, color = "#991b1b" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ClockIcon = ({ size = 12, color = "#92400e" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const ChevronLeftIcon = ({ size = 18, color = "#007AFF" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

// Apple logo as pure SVG path
const AppleLogo = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 814 1000" fill="rgba(255,255,255,0.9)">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 436 45.6 411.4 45.6 258.5c0-141.1 59.4-233.2 191.4-233.2 53 0 112.2 38.8 166.7 38.8 51 0 122.3-41.4 175.4-41.4 69.5-.3 140.7 42.4 178.7 127.8zm-147.8-180.7c-32.4-38.8-92.8-70.3-147.7-70.3-3.2 0-6.4.3-9.5.6l-.3 9.2c0 45.4 17.5 92.5 48.3 124.3 30.8 31.9 87.3 55.4 140.7 55.4 3.2 0 6.4-.3 9.5-.6.6-3.5.9-7.1.9-10.6 0-43.6-17.5-88-41.9-108z"/>
  </svg>
);

export const ApplePayReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const isPending = data.status === "pending";
  const sym = getCurrencySymbol(data.currency);
  const amt = parseFloat(data.amount) || 0;

  const statusBg = isSuccess ? "#d1fae5" : isFailed ? "#fee2e2" : "#fef3c7";
  const StatusIcon = isSuccess ? CheckIcon : isFailed ? XIcon : ClockIcon;
  const statusIconColor = isSuccess ? "#065f46" : isFailed ? "#991b1b" : "#92400e";
  const statusText = isSuccess ? "Cleared" : isFailed ? "Declined" : "Pending";
  const statusTextColor = isSuccess ? "#065f46" : isFailed ? "#991b1b" : "#92400e";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#f2f2f7", fontFamily: "-apple-system,'SF Pro Display','Helvetica Neue',sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── iOS nav bar ── */}
      <div style={{ background: "rgba(242,242,247,0.95)", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(0,0,0,0.12)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ChevronLeftIcon size={18} color="#007AFF" />
          <span style={{ color: "#007AFF", fontSize: 15, fontWeight: 400 }}>Wallet</span>
        </div>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#1c1c1e" }}>Transaction</span>
        <span style={{ fontSize: 15, color: "#007AFF" }}>Done</span>
      </div>

      {/* ── Apple Pay Card ── */}
      <div style={{ margin: "20px 16px 0", background: "linear-gradient(135deg,#1c1c1e 0%,#2c2c2e 100%)", borderRadius: 18, padding: "20px", boxShadow: "0 8px 24px rgba(0,0,0,0.25)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, background: "radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)", borderRadius: "50%" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 500, letterSpacing: 0.5 }}>Apple Card</p>
            <p style={{ margin: "2px 0 0", color: "white", fontSize: 13, fontWeight: 600 }}>{data.senderName}</p>
          </div>
          {/* Real Apple SVG logo — no emoji */}
          <AppleLogo size={22} />
        </div>
        <p style={{ margin: "0 0 4px", color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 1, fontWeight: 500 }}>•••• •••• •••• 4242</p>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
          {/* Mastercard circles — SVG not emoji */}
          <svg width="46" height="28" viewBox="0 0 46 28">
            <circle cx="14" cy="14" r="14" fill="#EB001B" opacity="0.9" />
            <circle cx="32" cy="14" r="14" fill="#F79E1B" opacity="0.9" />
          </svg>
        </div>
      </div>

      {/* ── Amount ── */}
      <div style={{ textAlign: "center", padding: "20px 20px 4px" }}>
        <p style={{ margin: "0 0 4px", fontSize: 46, fontWeight: 700, color: "#1c1c1e", letterSpacing: -2 }}>
          {sym}{amt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </p>
        <p style={{ margin: "0 0 4px", fontSize: 15, color: "#3c3c43", fontWeight: 500 }}>{data.receiverName}</p>
        <p style={{ margin: 0, fontSize: 13, color: "#8e8e93" }}>{data.timestamp}</p>
      </div>

      {/* Status pill — SVG icon, not emoji */}
      <div style={{ display: "flex", justifyContent: "center", margin: "12px 0 0" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 14px", borderRadius: 20, background: statusBg }}>
          <StatusIcon size={12} color={statusIconColor} />
          <span style={{ fontSize: 12, fontWeight: 700, color: statusTextColor }}>{statusText}</span>
        </div>
      </div>

      {/* ── Details card ── */}
      <div style={{ margin: "16px 16px 0", background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        {[
          { label: "Status", value: statusText },
          { label: "Card", value: "Apple Card •••• 4242" },
          { label: "Transaction ID", value: data.transactionId.slice(0, 14), mono: true },
        ].map(({ label, value, mono }: any, i, arr) => (
          <div key={label} style={{ padding: "13px 16px", borderBottom: i < arr.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 15, color: "#1c1c1e" }}>{label}</span>
            <span style={{ fontSize: 15, color: "#8e8e93", fontFamily: mono ? "monospace" : "inherit", fontWeight: mono ? 600 : 400, textAlign: "right", maxWidth: "55%" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* ── Breakdown card ── */}
      <div style={{ margin: "12px 16px 0", background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <p style={{ padding: "12px 16px 0", margin: 0, fontSize: 12, fontWeight: 700, color: "#8e8e93", textTransform: "uppercase", letterSpacing: 0.5 }}>Purchase Breakdown</p>
        {[
          { label: data.note || "Purchase", value: `${sym}${(amt * 0.935).toFixed(2)}` },
          { label: "Tax", value: `${sym}${(amt * 0.065).toFixed(2)}` },
        ].map(({ label, value }) => (
          <div key={label} style={{ padding: "11px 16px", borderTop: "0.5px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 15, color: "#1c1c1e" }}>{label}</span>
            <span style={{ fontSize: 15, color: "#1c1c1e", fontWeight: 500 }}>{value}</span>
          </div>
        ))}
        <div style={{ padding: "12px 16px", borderTop: "0.5px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#1c1c1e" }}>Total</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#1c1c1e" }}>{sym}{amt.toFixed(2)}</span>
        </div>
        <div style={{ padding: "12px 16px", borderTop: "0.5px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between", background: "#f9f9f9" }}>
          <span style={{ fontSize: 13, color: "#34c759" }}>3% Daily Cash</span>
          <span style={{ fontSize: 13, color: "#34c759", fontWeight: 600 }}>+{sym}{(amt * 0.03).toFixed(2)}</span>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ padding: "20px 16px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
        <button style={{ background: "none", border: "none", color: "#007AFF", fontSize: 16, fontWeight: 500, cursor: "pointer", padding: "6px 0" }}>
          Report an Issue
        </button>
        <p style={{ margin: 0, fontSize: 11, color: "#c7c7cc", textAlign: "center" }}>
          Shown on statement as: <strong style={{ color: "#8e8e93" }}>APPLE.COM/BILL</strong>
        </p>
      </div>
    </div>
  );
};
