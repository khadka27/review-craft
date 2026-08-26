import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";
import { ZelleIcon } from "@/components/SocialMediaIcons";

export const ZelleReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const sym = getCurrencySymbol(data.currency);
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#1E1E24",
      }}
    >
      {/* ── Top Bar ── */}
      <div
        style={{
          background: "#7414CA",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "white",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7414CA",
            }}
          >
            <ZelleIcon size={20} />
          </div>
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: -0.5, color: "white" }}>
            zelle
          </span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>

      {/* ── Success Animation Area ── */}
      <div style={{ flex: 1, padding: "28px 20px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Animated Checkmark Circle */}
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: isSuccess ? "#F3E8FF" : isFailed ? "#FEE2E2" : "#FEF3C7",
            border: `3.5px solid ${isSuccess ? "#7414CA" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            boxShadow: "0 8px 24px rgba(116, 20, 202, 0.15)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#7414CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : isFailed ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>

        <h2 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 900, color: "#111827", letterSpacing: -0.5 }}>
          {isSuccess ? "Payment Sent!" : isFailed ? "Payment Failed" : "Payment Pending"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 14, color: "#6B7280", fontWeight: 500 }}>
          {isSuccess ? "Money sent with Zelle®" : isFailed ? "Transfer was not completed" : "Processing payment"}
        </p>

        <div style={{ fontSize: 46, fontWeight: 900, color: "#7414CA", letterSpacing: -2, lineHeight: 1, marginBottom: 24 }}>
          {sym}{formattedAmount}
        </div>

        {/* Details Card */}
        <div
          style={{
            width: "100%",
            background: "#FAF5FF",
            borderRadius: 18,
            padding: "18px",
            border: "1px solid #E9D5FF",
            marginBottom: 20,
          }}
        >
          {[
            { label: "Sent To", value: data.receiverName },
            { label: "Sent From", value: `${data.senderName} (Checking)` },
            { label: "Date Sent", value: data.timestamp },
            { label: "Delivery", value: "Typically in minutes", highlight: true },
            { label: "Confirmation #", value: `ZEL-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            ...(data.note ? [{ label: "Memo", value: data.note }] : []),
          ].map(({ label, value, mono, highlight }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #E9D5FF" : "none",
              }}
            >
              <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: highlight ? "#7414CA" : "#111827",
                  fontWeight: 700,
                  fontFamily: mono ? "SF Mono, Monaco, Consolas, monospace" : "inherit",
                  textAlign: "right",
                  maxWidth: "58%",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center", margin: 0, lineHeight: 1.4 }}>
          Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC.
        </p>
      </div>

      {/* ── Footer ── */}
      <div style={{ padding: "14px 20px 24px", borderTop: "1px solid #F3F4F6" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#7414CA",
            color: "white",
            border: "none",
            borderRadius: 30,
            fontSize: 16,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(116, 20, 202, 0.3)",
          }}
        >
          All Done
        </button>
      </div>
    </div>
  );
};
