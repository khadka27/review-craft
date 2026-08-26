import { TransactionData } from "@/types/payment";
import { MobilePayIcon } from "@/components/SocialMediaIcons";

export const MobilePayReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("da-DK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#1E2A4A",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      {/* ── MobilePay Nordic Header ── */}
      <div
        style={{
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MobilePayIcon size={28} />
          <div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "white", letterSpacing: -0.3 }}>
              MobilePay
            </span>
            <span style={{ fontSize: 10, color: "#5BF2FF", marginLeft: 6, fontWeight: 700, textTransform: "uppercase" }}>
              Nordic Pay
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "rgba(91,242,255,0.15)", color: "#5BF2FF", padding: "3px 10px", borderRadius: 12, border: "1px solid rgba(91,242,255,0.3)" }}>
          DKK / EUR
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "rgba(91,242,255,0.12)",
            border: `3.5px solid ${isSuccess ? "#5BF2FF" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 0 25px rgba(91,242,255,0.2)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#5BF2FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : isFailed ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>

        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "white" }}>
          {isSuccess ? "Betaling gennemført!" : isFailed ? "Betaling fejlede" : "Afventer"}
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
          {isSuccess ? "Penge overført via MobilePay" : "Overførslen blev afvist"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#5BF2FF", letterSpacing: -1.5, marginBottom: 22 }}>
          {formattedAmount} <span style={{ fontSize: 22, color: "white", fontWeight: 800 }}>kr.</span>
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
            { label: "Modtager / To", value: data.receiverName },
            { label: "Afsender / From", value: data.senderName },
            { label: "Dato & tid", value: data.timestamp },
            { label: "Transaktionsnummer", value: `MP-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Status", value: "Gennemført · MobilePay A/S" },
            ...(data.note ? [{ label: "Besked", value: data.note }] : []),
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
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#5BF2FF",
            color: "#1E2A4A",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(91,242,255,0.3)",
          }}
        >
          Send ny betaling
        </button>
      </div>
    </div>
  );
};
