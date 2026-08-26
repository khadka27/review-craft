import { TransactionData } from "@/types/payment";

export const PayShapReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "linear-gradient(135deg, #00843D 0%, #00B84E 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "white", borderRadius: 8, padding: "4px 10px" }}>
            <span style={{ color: "#00843D", fontWeight: 900, fontSize: 13, letterSpacing: 0.5 }}>PayShap</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 11 }}>South Africa</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 16px 16px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: isSuccess ? "#f0fff7" : isFailed ? "#fef2f2" : "#fffbeb", border: `3px solid ${isSuccess ? "#00843D" : isFailed ? "#ef4444" : "#f59e0b"}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00843D" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            : isFailed ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
        </div>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#1a1a1a" }}>
          {isSuccess ? "Payment Sent!" : isFailed ? "Payment Failed" : "Payment Pending"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 12, color: "#888" }}>PayShap Instant Payment</p>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#00843D", marginBottom: 8, letterSpacing: -2 }}>
          R {parseFloat(data.amount || "0").toLocaleString("en-ZA", { minimumFractionDigits: 2 })}
        </div>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 24px" }}>ZAR</p>

        <div style={{ background: "#f0fff7", borderRadius: 16, padding: "16px", width: "100%", border: "1px solid #b2e8c8", marginBottom: 16 }}>
          {[
            { label: "To", value: data.receiverName },
            { label: "From", value: data.senderName },
            { label: "Date", value: data.timestamp },
            { label: "Reference", value: data.transactionId.slice(0, 12), mono: true },
            ...(data.note ? [{ label: "Note", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #b2e8c8" : "none" }}>
              <span style={{ fontSize: 12, color: "#00843D", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#222", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "60%" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #b2e8c8" }}>
        <button style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg, #00843D, #00B84E)", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Send Another Payment
        </button>
      </div>
    </div>
  );
};
