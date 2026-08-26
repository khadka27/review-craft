import { TransactionData } from "@/types/payment";
import { BizumIcon } from "@/components/SocialMediaIcons";

export const BizumReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#002E4E",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      {/* ── Bizum Header ── */}
      <div
        style={{
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BizumIcon size={28} />
          <div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#00BAC6", letterSpacing: -0.5 }}>
              bizum
            </span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginLeft: 6 }}>
              España
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "rgba(0,186,198,0.2)", color: "#00BAC6", padding: "3px 10px", borderRadius: 12, border: "1px solid rgba(0,186,198,0.4)" }}>
          INMEDIATO
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: isSuccess ? "rgba(0,186,198,0.15)" : isFailed ? "rgba(239,68,68,0.15)" : "rgba(245,158,11,0.15)",
            border: `3px solid ${isSuccess ? "#00BAC6" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 0 25px rgba(0,186,198,0.25)",
          }}
        >
          {isSuccess ? (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00BAC6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
          {isSuccess ? "¡Bizum enviado con éxito!" : isFailed ? "Envío no realizado" : "Bizum en proceso"}
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          {isSuccess ? "El dinero ya está en la cuenta del destinatario" : "Ha ocurrido un error"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#00BAC6", letterSpacing: -1.5, marginBottom: 20 }}>
          {formattedAmount} €
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            marginBottom: 20,
          }}
        >
          {[
            { label: "Destinatario", value: data.receiverName },
            { label: "Emisor", value: data.senderName },
            { label: "Fecha y hora", value: data.timestamp },
            { label: "ID Operación Bizum", value: `BZM-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Comisión", value: "0,00 € (Gratis)" },
            ...(data.note ? [{ label: "Concepto", value: data.note }] : []),
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
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>{label}</span>
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
            background: "#00BAC6",
            color: "#002E4E",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0,186,198,0.35)",
          }}
        >
          Hacer otro Bizum
        </button>
      </div>
    </div>
  );
};
