import { TransactionData } from "@/types/payment";
import { InteracIcon } from "@/components/SocialMediaIcons";

export const InteracReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("en-CA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#F8F9FA",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#1F2937",
      }}
    >
      {/* ── Canadian Banking App Header ── */}
      <div
        style={{
          background: "#000000",
          padding: "32px 18px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <InteracIcon size={26} />
          <div>
            <span style={{ fontSize: 16, fontWeight: 900, color: "#FFB81C", letterSpacing: -0.2 }}>
              Interac
            </span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", marginLeft: 4 }}>
              e-Transfer
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, background: "#1F2937", color: "#FFB81C", padding: "3px 8px", borderRadius: 6 }}>
            CAD $
          </span>
        </div>
      </div>

      {/* ── Transfer Confirmation Card ── */}
      <div style={{ flex: 1, padding: "20px 16px 16px", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "24px 18px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            border: "1px solid #E5E7EB",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: isSuccess ? "#ECFDF5" : isFailed ? "#FEF2F2" : "#FFFBEB",
              border: `3px solid ${isSuccess ? "#10B981" : isFailed ? "#EF4444" : "#F59E0B"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px",
            }}
          >
            {isSuccess ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : isFailed ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3">
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </div>

          <p style={{ margin: "0 0 4px", fontSize: 13, color: "#6B7280", fontWeight: 600 }}>
            {isSuccess ? "e-Transfer Sent & Deposited" : isFailed ? "e-Transfer Failed" : "e-Transfer Pending"}
          </p>
          <h2 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 800, color: "#111827" }}>
            {data.receiverName}
          </h2>

          <div style={{ fontSize: 40, fontWeight: 900, color: "#111827", letterSpacing: -1.5, marginBottom: 6 }}>
            ${formattedAmount} <span style={{ fontSize: 16, fontWeight: 700, color: "#6B7280" }}>CAD</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 16,
              background: isSuccess ? "#FEF3C7" : isFailed ? "#FEE2E2" : "#F3F4F6",
              border: `1px solid ${isSuccess ? "#FDE68A" : isFailed ? "#FECACA" : "#E5E7EB"}`,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 800, color: isSuccess ? "#92400E" : isFailed ? "#991B1B" : "#374151" }}>
              {isSuccess ? "Autodeposit Completed" : isFailed ? "Failed" : "Pending Notification"}
            </span>
          </div>
        </div>

        {/* Transfer Breakdown */}
        <div
          style={{
            background: "white",
            borderRadius: 18,
            padding: "16px 18px",
            border: "1px solid #E5E7EB",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            marginBottom: 16,
          }}
        >
          {[
            { label: "To Recipient", value: data.receiverName },
            { label: "From Account", value: `${data.senderName} (Chequing)` },
            { label: "Date & Time", value: data.timestamp },
            { label: "Reference Number", value: `CA${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Transfer Fee", value: "$0.00 CAD", green: true },
            ...(data.note ? [{ label: "Message / Note", value: data.note }] : []),
          ].map(({ label, value, mono, green }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 11 : 0,
                paddingBottom: i < arr.length - 1 ? 11 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: green ? "#059669" : "#111827",
                  fontWeight: 700,
                  fontFamily: mono ? "SF Mono, Monaco, Consolas, monospace" : "inherit",
                  textAlign: "right",
                  maxWidth: "60%",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Action ── */}
      <div style={{ padding: "12px 16px 20px", borderTop: "1px solid #E5E7EB", background: "white" }}>
        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#FFB81C",
            color: "#000000",
            border: "none",
            borderRadius: 26,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(255, 184, 28, 0.35)",
          }}
        >
          Send Another e-Transfer
        </button>
      </div>
    </div>
  );
};
