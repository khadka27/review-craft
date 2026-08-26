import { TransactionData } from "@/types/payment";

export const ZelleReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const sym = data.currency === "USD" ? "$" : data.currency === "EUR" ? "€" : data.currency === "GBP" ? "£" : "$";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#f5f0ff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #6D1ED4 0%, #9b51e0 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "white", borderRadius: 8, padding: "4px 8px" }}>
            <span style={{ color: "#6D1ED4", fontWeight: 900, fontSize: 16, letterSpacing: -0.5 }}>Zelle</span>
            <span style={{ color: "#a855f7", fontWeight: 900, fontSize: 16 }}>®</span>
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      {/* Success Card */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "24px 16px 16px" }}>
        {/* Status icon */}
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: isSuccess ? "#f0fdf4" : isFailed ? "#fef2f2" : "#fffbeb", border: `3px solid ${isSuccess ? "#22c55e" : isFailed ? "#ef4444" : "#f59e0b"}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          ) : isFailed ? (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          )}
        </div>

        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#1a1a1a", textAlign: "center" }}>
          {isSuccess ? "Money Sent!" : isFailed ? "Payment Failed" : "Payment Pending"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 13, color: "#777", textAlign: "center" }}>
          {isSuccess ? `To ${data.receiverName}` : `To ${data.receiverName}`}
        </p>

        {/* Amount */}
        <div style={{ fontSize: 42, fontWeight: 900, color: "#6D1ED4", marginBottom: 20, letterSpacing: -2 }}>
          {sym}{parseFloat(data.amount || "0").toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </div>

        {/* White card details */}
        <div style={{ background: "white", borderRadius: 16, padding: "16px", width: "100%", boxShadow: "0 4px 16px rgba(109,30,212,0.1)", marginBottom: 16 }}>
          {[
            { label: "Sent to", value: data.receiverName },
            { label: "From", value: data.senderName },
            { label: "Date & Time", value: data.timestamp },
            { label: "Confirmation #", value: data.transactionId.slice(0, 10), mono: true },
            ...(data.note ? [{ label: "Memo", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: i > 0 ? 12 : 0, paddingBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? "1px solid #f5f0ff" : "none" }}>
              <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", margin: 0 }}>
          Powered by your bank's mobile banking app
        </p>
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: "12px 16px", background: "white", borderTop: "1px solid #f0e8ff" }}>
        <button style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg, #6D1ED4, #9b51e0)", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Send Another Payment
        </button>
      </div>
    </div>
  );
};
