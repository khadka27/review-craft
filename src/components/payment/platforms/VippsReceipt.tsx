import { TransactionData } from "@/types/payment";
import { VippsIcon } from "@/components/SocialMediaIcons";

export const VippsReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("nb-NO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#FF5B24",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      {/* ── Vipps Orange Top Bar ── */}
      <div
        style={{
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <VippsIcon size={22} />
          </div>
          <span style={{ fontSize: 20, fontWeight: 900, color: "white", letterSpacing: -0.5 }}>
            vipps
          </span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "rgba(255,255,255,0.2)", color: "white", padding: "3px 10px", borderRadius: 12 }}>
          NORGE · NOK
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            border: "3.5px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : isFailed ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>

        <h2 style={{ margin: "0 0 4px", fontSize: 24, fontWeight: 900, color: "white" }}>
          {isSuccess ? "Penger sendt!" : isFailed ? "Betaling feilet" : "Venter"}
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: "rgba(255,255,255,0.85)" }}>
          {isSuccess ? "Vippsing gjennomført direkte" : "Kunne ikke fullføre betalingen"}
        </p>

        <div style={{ fontSize: 46, fontWeight: 900, color: "white", letterSpacing: -2, marginBottom: 22 }}>
          {formattedAmount} <span style={{ fontSize: 22, fontWeight: 800 }}>kr</span>
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            background: "rgba(0,0,0,0.15)",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)",
            marginBottom: 20,
          }}
        >
          {[
            { label: "Til / To", value: data.receiverName },
            { label: "Fra / From", value: data.senderName },
            { label: "Tidspunkt", value: data.timestamp },
            { label: "Vipps-nummer", value: `VP-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Status", value: "Fullført · Vipps AS" },
            ...(data.note ? [{ label: "Melding", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "white",
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
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "white",
            color: "#FF5B24",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          Vipps igjen
        </button>
      </div>
    </div>
  );
};
