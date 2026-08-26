import { TransactionData } from "@/types/payment";
import { IDEALIcon } from "@/components/SocialMediaIcons";

export const IDEALReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("nl-NL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#F3F5F9",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#1E293B",
      }}
    >
      {/* ── iDEAL Header ── */}
      <div
        style={{
          background: "#002D62",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <IDEALIcon size={28} />
          <div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#FFFFFF", letterSpacing: -0.2 }}>
              iDEAL
            </span>
            <span style={{ fontSize: 11, color: "#93C5FD", marginLeft: 6, fontWeight: 600 }}>
              Nederland
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "#CC0066", color: "white", padding: "3px 10px", borderRadius: 8 }}>
          SEPA Instant
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "22px 16px 16px", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "24px 18px",
            boxShadow: "0 4px 18px rgba(0, 45, 98, 0.08)",
            border: "1px solid #E2E8F0",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: "50%",
              background: isSuccess ? "#ECFDF5" : isFailed ? "#FEF2F2" : "#FFFBEB",
              border: `3px solid ${isSuccess ? "#059669" : isFailed ? "#DC2626" : "#D97706"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px",
            }}
          >
            {isSuccess ? (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : isFailed ? (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3">
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </div>

          <p style={{ margin: "0 0 4px", fontSize: 13, color: "#64748B", fontWeight: 600 }}>
            {isSuccess ? "Betaling geslaagd!" : isFailed ? "Betaling mislukt" : "Betaling in behandeling"}
          </p>
          <h2 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 800, color: "#0F172A" }}>
            {data.receiverName}
          </h2>

          <div style={{ fontSize: 42, fontWeight: 900, color: "#002D62", letterSpacing: -1.5, marginBottom: 8 }}>
            € {formattedAmount}
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 14px",
              borderRadius: 16,
              background: isSuccess ? "#F0FDF4" : "#FEF2F2",
              border: `1px solid ${isSuccess ? "#BBF7D0" : "#FECACA"}`,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, color: isSuccess ? "#15803D" : "#B91C1C" }}>
              {isSuccess ? "Goedgekeurd door bank" : "Niet verwerkt"}
            </span>
          </div>
        </div>

        {/* Details */}
        <div
          style={{
            background: "white",
            borderRadius: 18,
            padding: "16px 18px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            marginBottom: 16,
          }}
        >
          {[
            { label: "Begunstigde / To", value: data.receiverName },
            { label: "Betaler / From", value: data.senderName },
            { label: "Datum & Tijd", value: data.timestamp },
            { label: "Transactiekenmerk", value: `IDL-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Status", value: isSuccess ? "Voltooid (Direct verwerkt)" : "Mislukt" },
            ...(data.note ? [{ label: "Omschrijving", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 11 : 0,
                paddingBottom: i < arr.length - 1 ? 11 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #F1F5F9" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#0F172A",
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
      <div style={{ padding: "12px 16px 20px", background: "white", borderTop: "1px solid #E2E8F0" }}>
        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#002D62",
            color: "white",
            border: "none",
            borderRadius: 26,
            fontSize: 15,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0, 45, 98, 0.3)",
          }}
        >
          Terug naar winkelier
        </button>
      </div>
    </div>
  );
};
