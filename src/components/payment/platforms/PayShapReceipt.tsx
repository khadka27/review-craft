import { TransactionData } from "@/types/payment";
import { PayShapIcon } from "@/components/SocialMediaIcons";

export const PayShapReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#062817",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      {/* ── PayShap South Africa Header ── */}
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
          <PayShapIcon size={28} />
          <div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#00E575", letterSpacing: -0.3 }}>
              PayShap
            </span>
            <span style={{ fontSize: 10, color: "#FFB81C", marginLeft: 6, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>
              Rapid Payments
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "rgba(0,229,117,0.15)", color: "#00E575", padding: "3px 10px", borderRadius: 12, border: "1px solid rgba(0,229,117,0.3)" }}>
          ZAR · SOUTH AFRICA
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "rgba(0,229,117,0.12)",
            border: `3.5px solid ${isSuccess ? "#00E575" : isFailed ? "#EF4444" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 0 25px rgba(0,229,117,0.2)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#00E575" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
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
          {isSuccess ? "PayShap Instant Sent!" : isFailed ? "Payment Failed" : "Processing"}
        </h2>
        <p style={{ margin: "0 0 18px", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
          {isSuccess ? "Money delivered in real-time" : "Could not complete payment"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "#00E575", letterSpacing: -1.5, marginBottom: 22 }}>
          <span style={{ fontSize: 22, color: "#FFB81C", fontWeight: 800, marginRight: 6 }}>R</span>
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
            { label: "Paid To", value: data.receiverName },
            { label: "ShapID / Account", value: `${data.receiverName.toLowerCase().replace(/\s+/g, "")}@shap` },
            { label: "From Account", value: `${data.senderName} (Cheque)` },
            { label: "Date & Time", value: data.timestamp },
            { label: "PayShap Ref", value: `SHAP-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Settlement", value: "Real-Time Clearing (RTC)" },
            ...(data.note ? [{ label: "Payment Reference", value: data.note }] : []),
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
            background: "linear-gradient(135deg, #00E575 0%, #00B84E 100%)",
            color: "#062817",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(0,229,117,0.3)",
          }}
        >
          Send Another PayShap
        </button>
      </div>
    </div>
  );
};
