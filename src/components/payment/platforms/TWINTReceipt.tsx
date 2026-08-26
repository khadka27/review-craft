import { TransactionData } from "@/types/payment";
import { TWINTIcon } from "@/components/SocialMediaIcons";

export const TWINTReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("de-CH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#000000",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      {/* ── TWINT Swiss Header ── */}
      <div
        style={{
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <TWINTIcon size={26} />
          <span style={{ fontSize: 18, fontWeight: 900, color: "white", letterSpacing: 2 }}>
            TWINT
          </span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 900, background: "#00D26A", color: "#000000", padding: "3px 10px", borderRadius: 12 }}>
          CHF · SWISS
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "28px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "rgba(0,210,106,0.12)",
            border: `3.5px solid ${isSuccess ? "#00D26A" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 0 30px rgba(0,210,106,0.25)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#00D26A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>
          {isSuccess ? "Zahlung gesendet !" : isFailed ? "Zahlung fehlgeschlagen" : "Zahlung ausstehend"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          {isSuccess ? "Paiement envoyé avec succès" : "Échec du paiement"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", letterSpacing: -1.5, marginBottom: 24 }}>
          <span style={{ fontSize: 24, color: "#00D26A", fontWeight: 800, marginRight: 6 }}>CHF</span>
          {formattedAmount}
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            marginBottom: 20,
          }}
        >
          {[
            { label: "An / Destinataire", value: data.receiverName },
            { label: "Von / Émetteur", value: data.senderName },
            { label: "Datum / Date", value: data.timestamp },
            { label: "TWINT Transaktions-ID", value: `TW-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Gebühr", value: "CHF 0.00 (Kostenlos)" },
            ...(data.note ? [{ label: "Mitteilung", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#FFFFFF",
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
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#00D26A",
            color: "#000000",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            letterSpacing: 1,
            boxShadow: "0 6px 20px rgba(0,210,106,0.35)",
          }}
        >
          NEUE TWINT ZAHLUNG
        </button>
      </div>
    </div>
  );
};
