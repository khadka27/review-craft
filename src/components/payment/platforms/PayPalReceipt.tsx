import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";
import { PayPalIcon } from "@/components/SocialMediaIcons";

export const PayPalReceipt = ({ data }: { data: TransactionData }) => {
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
        backgroundColor: "#F5F7FB",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#0C2340",
      }}
    >
      {/* ── App Header ── */}
      <div
        style={{
          background: "#003087",
          padding: "32px 16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <PayPalIcon size={22} />
            <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "white" }}>
              PayPal
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
          </svg>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ flex: 1, padding: "20px 16px 16px", display: "flex", flexDirection: "column" }}>
        {/* Hero Card */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "24px 18px",
            boxShadow: "0 4px 20px rgba(0, 48, 135, 0.08)",
            border: "1px solid #E8EEF5",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          {/* Avatar / Status Badge */}
          <div style={{ position: "relative", width: 68, height: 68, margin: "0 auto 14px" }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #003087 0%, #0079C1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 26,
                fontWeight: 800,
                boxShadow: "0 4px 12px rgba(0, 121, 193, 0.25)",
              }}
            >
              {(data.receiverName || "P")[0].toUpperCase()}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: isSuccess ? "#00CF92" : isFailed ? "#E53E3E" : "#F6AD55",
                border: "2.5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isSuccess ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : isFailed ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
            </div>
          </div>

          <p style={{ margin: "0 0 2px", fontSize: 13, color: "#68717A", fontWeight: 600 }}>
            {isSuccess ? "You sent money to" : isFailed ? "Payment failed to" : "Payment pending to"}
          </p>
          <h2 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 800, color: "#0C2340", letterSpacing: -0.3 }}>
            {data.receiverName}
          </h2>

          <div style={{ fontSize: 42, fontWeight: 900, color: "#003087", letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 8 }}>
            {sym}{formattedAmount}
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 20,
              background: isSuccess ? "#E6FBF5" : isFailed ? "#FDF2F2" : "#FFF8EB",
              border: `1px solid ${isSuccess ? "#A7F3D0" : isFailed ? "#FECACA" : "#FDE68A"}`,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: isSuccess ? "#00A870" : isFailed ? "#E53E3E" : "#DD6B20",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: isSuccess ? "#00875A" : isFailed ? "#C53030" : "#C05621",
              }}
            >
              {isSuccess ? "Completed · PayPal Instant" : isFailed ? "Failed" : "Pending"}
            </span>
          </div>
        </div>

        {/* Transaction Details Card */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "18px 18px",
            boxShadow: "0 2px 12px rgba(0, 48, 135, 0.05)",
            border: "1px solid #E8EEF5",
            marginBottom: 18,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 800, color: "#68717A", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 12 }}>
            Transaction Details
          </div>

          {[
            { label: "Sent From", value: data.senderName },
            { label: "Date & Time", value: data.timestamp },
            { label: "Transaction ID", value: data.transactionId, mono: true },
            { label: "Payment Method", value: "PayPal Balance & Linked Bank" },
            ...(data.note ? [{ label: "Note", value: `"${data.note}"`, italic: true }] : []),
          ].map(({ label, value, mono, italic }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 11 : 0,
                paddingBottom: i < arr.length - 1 ? 11 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #F1F4F8" : "none",
              }}
            >
              <span style={{ fontSize: 13, color: "#68717A", fontWeight: 500 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#0C2340",
                  fontWeight: 700,
                  fontFamily: mono ? "SF Mono, Monaco, Consolas, monospace" : "inherit",
                  fontStyle: italic ? "italic" : "normal",
                  textAlign: "right",
                  maxWidth: "60%",
                  wordBreak: "break-all",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Action Buttons Footer ── */}
      <div
        style={{
          padding: "12px 16px 20px",
          background: "white",
          borderTop: "1px solid #E8EEF5",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#0070BA",
            color: "white",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0, 112, 186, 0.3)",
          }}
        >
          Send More Money
        </button>
        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#F5F7FB",
            color: "#003087",
            border: "1px solid #DCE5EF",
            borderRadius: 28,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Share Receipt
        </button>
      </div>
    </div>
  );
};
