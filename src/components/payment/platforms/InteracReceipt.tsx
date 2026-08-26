import { TransactionData } from "@/types/payment";

export const InteracReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const sym = data.currency === "CAD" ? "CA$" : data.currency === "USD" ? "$" : "CA$";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "#F5A623", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "white", borderRadius: 6, padding: "4px 10px" }}>
            <span style={{ color: "#F5A623", fontWeight: 900, fontSize: 14, letterSpacing: -0.5 }}>Interac</span>
          </div>
          <span style={{ color: "white", fontSize: 11, fontWeight: 600, opacity: 0.9 }}>e-Transfer</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 16px 16px" }}>
        {/* Status */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: isSuccess ? "#f0fdf4" : isFailed ? "#fef2f2" : "#fffbeb", border: `2px solid ${isSuccess ? "#22c55e" : isFailed ? "#ef4444" : "#f59e0b"}`, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isSuccess ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ) : isFailed ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            )}
          </div>
          <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800, color: "#1a1a1a" }}>
            {isSuccess ? "Transfer Sent!" : isFailed ? "Transfer Failed" : "Transfer Pending"}
          </h2>
          <p style={{ margin: 0, fontSize: 13, color: "#888" }}>Interac e-Transfer</p>
        </div>

        {/* Amount */}
        <div style={{ background: "#FFF8EC", borderRadius: 16, padding: "20px", textAlign: "center", marginBottom: 16, border: "1px solid #FDEDC2" }}>
          <p style={{ margin: "0 0 4px", fontSize: 12, color: "#B07D00", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Amount Sent</p>
          <p style={{ margin: 0, fontSize: 42, fontWeight: 900, color: "#F5A623", letterSpacing: -2 }}>
            {sym}{parseFloat(data.amount || "0").toLocaleString("en-CA", { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Details Card */}
        <div style={{ background: "#f9f9f9", borderRadius: 12, padding: "16px", border: "1px solid #eee" }}>
          {[
            { label: "To", value: data.receiverName },
            { label: "From", value: data.senderName },
            { label: "Date & Time", value: data.timestamp },
            { label: "Reference #", value: data.transactionId.slice(0, 12), mono: true },
            ...(data.note ? [{ label: "Message", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: i > 0 ? 12 : 0, paddingBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none" }}>
              <span style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#222", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "60%" }}>{value}</span>
            </div>
          ))}
        </div>

        <p style={{ margin: "16px 0 0", fontSize: 11, color: "#bbb", textAlign: "center" }}>
          Recipient will be notified by email
        </p>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #f0f0f0" }}>
        <button style={{ width: "100%", padding: "13px", background: "#F5A623", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Send Another Transfer
        </button>
      </div>
    </div>
  );
};
