import { TransactionData } from "@/types/payment";
import { SwishIcon } from "@/components/SocialMediaIcons";

export const SwishReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("sv-SE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#1E293B",
      }}
    >
      {/* ── Swish Header ── */}
      <div
        style={{
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <SwishIcon size={30} />
          <span style={{ fontSize: 18, fontWeight: 900, color: "#111827", letterSpacing: -0.5 }}>
            swish
          </span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "#FEF2F2", color: "#E11D48", padding: "3px 10px", borderRadius: 12, border: "1px solid #FECACA" }}>
          SVERIGE · SEK
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Swish swirl status icon */}
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: isSuccess ? "#ECFDF5" : isFailed ? "#FEF2F2" : "#FFFBEB",
            border: `3.5px solid ${isSuccess ? "#10B981" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 8px 24px rgba(16, 185, 129, 0.15)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#111827" }}>
          {isSuccess ? "Betalning skickad!" : isFailed ? "Betalning misslyckades" : "Väntar"}
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: "#64748B" }}>
          {isSuccess ? "Pengarna har swishats direkt" : "Överföringen kunde inte genomföras"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#111827", letterSpacing: -1.5, marginBottom: 20 }}>
          {formattedAmount} <span style={{ fontSize: 20, color: "#E11D48", fontWeight: 800 }}>kr</span>
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            background: "#F8FAFC",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid #E2E8F0",
            marginBottom: 20,
          }}
        >
          {[
            { label: "Mottagare / To", value: data.receiverName },
            { label: "Avsändare / From", value: data.senderName },
            { label: "Datum & tid", value: data.timestamp },
            { label: "Referensnummer", value: `SW-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Bank", value: "Bankgirot · Swish Direkt" },
            ...(data.note ? [{ label: "Meddelande", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #E2E8F0" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#111827",
                  fontWeight: 700,
                  fontFamily: mono ? "monospace" : "inherit",
                  textAlign: "right",
                  maxWidth: "58%",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid #F1F5F9" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#E11D48",
            color: "white",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(225, 29, 72, 0.3)",
          }}
        >
          Swisha igen
        </button>
      </div>
    </div>
  );
};
