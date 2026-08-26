import { TransactionData } from "@/types/payment";
import { WeroIcon } from "@/components/SocialMediaIcons";

export const WeroReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#0A192F",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#F8FAFC",
      }}
    >
      {/* ── Wero Header ── */}
      <div
        style={{
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <WeroIcon size={28} />
          <div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#00E599", letterSpacing: -0.5 }}>
              wero
            </span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginLeft: 6, textTransform: "uppercase", letterSpacing: 1 }}>
              EPI Pay
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, background: "rgba(0,229,153,0.15)", color: "#00E599", padding: "3px 10px", borderRadius: 12, border: "1px solid rgba(0,229,153,0.3)" }}>
          INSTANT EUR
        </span>
      </div>

      {/* ── Body ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: isSuccess ? "rgba(0,229,153,0.12)" : isFailed ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
            border: `3px solid ${isSuccess ? "#00E599" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 0 30px rgba(0,229,153,0.2)",
          }}
        >
          {isSuccess ? (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00E599" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : isFailed ? (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>

        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>
          {isSuccess ? "Paiement envoyé !" : isFailed ? "Paiement échoué" : "Paiement en cours"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          {isSuccess ? "Paiement instantané européen Wero" : isFailed ? "Erreur de transmission" : "En cours de validation"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#00E599", letterSpacing: -1.5, marginBottom: 22 }}>
          {formattedAmount} €
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            marginBottom: 20,
          }}
        >
          {[
            { label: "Bénéficiaire / To", value: data.receiverName },
            { label: "Émetteur / From", value: data.senderName },
            { label: "Date & Heure", value: data.timestamp },
            { label: "Réf. Transaction", value: `WRO-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Réseau", value: "European Payments Initiative (EPI)" },
            ...(data.note ? [{ label: "Motif", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
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
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "linear-gradient(135deg, #00E599 0%, #00B4D8 100%)",
            color: "#001B3A",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0,229,153,0.3)",
          }}
        >
          Nouveau paiement Wero
        </button>
      </div>
    </div>
  );
};
