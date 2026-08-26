import { TransactionData } from "@/types/payment";
import { STCPayIcon } from "@/components/SocialMediaIcons";

export const STCPayReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#4F008C",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      {/* ── STC Pay Header ── */}
      <div
        style={{
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <STCPayIcon size={20} />
          </div>
          <div>
            <span style={{ fontSize: 18, fontWeight: 900, color: "white", letterSpacing: -0.3 }}>
              stc pay
            </span>
            <span style={{ fontSize: 11, color: "#FF375E", marginLeft: 6, fontWeight: 700 }}>
              STC Bank
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "#FF375E", color: "white", padding: "3px 10px", borderRadius: 12 }}>
          SAR ﷼
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "26px 18px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: `3.5px solid ${isSuccess ? "#00E599" : isFailed ? "#FF375E" : "#F59E0B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
        >
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#00E599" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : isFailed ? (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF375E" strokeWidth="3.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>

        <h2 style={{ margin: "0 0 2px", fontSize: 22, fontWeight: 900, color: "white", textAlign: "center" }}>
          {isSuccess ? "تم التحويل بنجاح" : isFailed ? "فشل التحويل" : "قيد المعالجة"}
        </h2>
        <p style={{ margin: "0 0 16px", fontSize: 13, color: "rgba(255,255,255,0.75)", textAlign: "center" }}>
          {isSuccess ? "Transfer Successful · stc pay" : "Transfer Failed"}
        </p>

        <div style={{ fontSize: 44, fontWeight: 900, color: "white", letterSpacing: -1.5, marginBottom: 22 }}>
          {formattedAmount} <span style={{ fontSize: 20, color: "#FF375E", fontWeight: 800 }}>SAR</span>
        </div>

        {/* Card */}
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "18px",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            marginBottom: 20,
          }}
        >
          {[
            { label: "المستلم / To", value: data.receiverName },
            { label: "المرسل / From", value: data.senderName },
            { label: "التاريخ / Date", value: data.timestamp },
            { label: "رقم المرجع / Ref ID", value: `STC-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "الرسوم / Fee", value: "0.00 SAR (مجاناً)" },
            ...(data.note ? [{ label: "ملاحظة / Note", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 12 : 0,
                paddingBottom: i < arr.length - 1 ? 12 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{label}</span>
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
      <div style={{ padding: "14px 18px 24px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#FF375E",
            color: "white",
            border: "none",
            borderRadius: 28,
            fontSize: 15,
            fontWeight: 900,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(255, 55, 94, 0.35)",
          }}
        >
          تحويل جديد / New Transfer
        </button>
      </div>
    </div>
  );
};
