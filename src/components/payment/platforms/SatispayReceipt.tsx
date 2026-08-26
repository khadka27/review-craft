import { TransactionData } from "@/types/payment";
import { SatispayIcon } from "@/components/SocialMediaIcons";

export const SatispayReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("it-IT", {
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
        color: "#1C1C1E",
      }}
    >
      {/* ── Satispay Red Header ── */}
      <div
        style={{
          background: "#FD3B31",
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SatispayIcon size={22} />
          </div>
          <span style={{ fontSize: 18, fontWeight: 900, color: "white", letterSpacing: -0.3 }}>
            satispay
          </span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "rgba(255,255,255,0.25)", color: "white", padding: "3px 10px", borderRadius: 12 }}>
          ITALIA
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: isSuccess ? "#FEF2F2" : "#F3F4F6",
            border: `3.5px solid ${isSuccess ? "#FD3B31" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 8px 24px rgba(253, 59, 49, 0.18)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FD3B31" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#1C1C1E" }}>
          {isSuccess ? "Pagamento effettuato!" : isFailed ? "Pagamento non riuscito" : "In attesa"}
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: "#8E8E93" }}>
          {isSuccess ? "Hai inviato denaro con Satispay" : "Transazione annullata"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#FD3B31", letterSpacing: -1.5, marginBottom: 22 }}>
          {formattedAmount} €
        </div>

        {/* Details Card */}
        <div
          style={{
            width: "100%",
            background: "#F9FAFB",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid #E5E7EB",
            marginBottom: 20,
          }}
        >
          {[
            { label: "A / To", value: data.receiverName },
            { label: "Da / From", value: data.senderName },
            { label: "Data e ora", value: data.timestamp },
            { label: "ID Transazione", value: `SAT-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Cashback", value: "0,00 €" },
            ...(data.note ? [{ label: "Messaggio", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #E5E7EB" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "#8E8E93", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#1C1C1E",
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
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid #F3F4F6" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#FD3B31",
            color: "white",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(253, 59, 49, 0.3)",
          }}
        >
          Invia altro denaro
        </button>
      </div>
    </div>
  );
};
