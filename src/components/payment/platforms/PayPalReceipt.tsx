import { TransactionData } from "@/types/payment";

export const PayPalReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const sym = data.currency === "USD" ? "$" : data.currency === "EUR" ? "€" : data.currency === "GBP" ? "£" : "$";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#f5f7fa", fontFamily: "'Roboto', 'Helvetica Neue', sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "#003087", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <svg width="80" height="22" viewBox="0 0 80 22" fill="none">
          <path d="M9.5 0H3.5C3.1 0 2.7.3 2.6.7L0 14.7c-.1.3.1.6.4.6h3.2c.4 0 .8-.3.8-.7l.6-4.1c.1-.4.4-.7.8-.7h2c3.8 0 6.1-1.9 6.7-5.5.3-1.6 0-2.9-.8-3.8C12.9.4 11.4 0 9.5 0zm.7 5.4c-.3 2-1.9 2-3.4 2H5.9l.6-3.9c0-.2.3-.4.5-.4h.4c1 0 2 0 2.5.6.3.3.4.9.3 1.7z" fill="#009CDE"/>
          <path d="M27.3 5.3h-3.2c-.2 0-.5.2-.5.4l-.2.9-.2-.3c-.7-1-2.2-1.3-3.7-1.3-3.5 0-6.5 2.6-7 6.3-.3 1.8.1 3.6 1.1 4.8.9 1.1 2.3 1.6 3.8 1.6 2.9 0 4.4-1.8 4.4-1.8l-.2.9c-.1.3.1.6.4.6h2.9c.4 0 .8-.3.8-.7l1.7-10.7c.1-.3-.1-.7-.1-.7zm-4.4 6.1c-.3 1.8-1.7 3-3.5 3-.9 0-1.6-.3-2.1-.8-.5-.6-.6-1.4-.5-2.2.3-1.8 1.7-3 3.5-3 .9 0 1.6.3 2.1.8.5.6.7 1.4.5 2.2z" fill="#009CDE"/>
          <path d="M44.3 5.3h-3.2c-.3 0-.5.1-.7.4l-3.9 5.8-1.7-5.5c-.1-.4-.5-.7-.9-.7h-3.1c-.4 0-.6.3-.5.7l3.2 9.4-3 4.2c-.3.4 0 .9.5.9h3.2c.3 0 .5-.1.7-.4l9.6-13.8c.3-.4 0-.9-.5-.9-.1 0-.1 0-.2 0z" fill="#003087"/>
          <path d="M54.4 0h-6c-.4 0-.8.3-.8.7l-2.6 16c-.1.3.1.6.4.6h3.4c.3 0 .5-.2.6-.5l.7-4.5c.1-.4.4-.7.8-.7h2c3.8 0 6.1-1.9 6.7-5.5.3-1.6 0-2.9-.8-3.8-1-1.1-2.5-1.3-4.4-1.3zm.7 5.4c-.3 2-1.9 2-3.4 2h-.9l.6-3.9c0-.2.3-.4.5-.4h.4c1 0 2 0 2.5.6.3.3.4.9.3 1.7z" fill="#003087"/>
          <path d="M72.2 5.3h-3.2c-.2 0-.5.2-.5.4l-.2.9-.2-.3c-.7-1-2.2-1.3-3.7-1.3-3.5 0-6.5 2.6-7 6.3-.3 1.8.1 3.6 1.1 4.8.9 1.1 2.3 1.6 3.8 1.6 2.9 0 4.4-1.8 4.4-1.8l-.2.9c-.1.3.1.6.4.6h2.9c.4 0 .8-.3.8-.7l1.7-10.7c.1-.3-.1-.7-.1-.7zm-4.4 6.1c-.3 1.8-1.7 3-3.5 3-.9 0-1.6-.3-2.1-.8-.5-.6-.6-1.4-.5-2.2.3-1.8 1.7-3 3.5-3 .9 0 1.6.3 2.1.8.5.6.7 1.4.5 2.2z" fill="#003087"/>
          <path d="M76 .4l-2.6 16.2c-.1.3.1.6.4.6h2.8c.4 0 .8-.3.8-.7l2.6-16c.1-.3-.1-.6-.4-.6H76.4c-.2.1-.4.3-.4.5z" fill="#003087"/>
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      {/* Transaction Summary */}
      <div style={{ background: "white", margin: "12px", borderRadius: 12, padding: "20px 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: isSuccess ? "#f0fdf4" : isFailed ? "#fef2f2" : "#fffbeb", border: `2px solid ${isSuccess ? "#16a34a" : isFailed ? "#dc2626" : "#d97706"}`, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isSuccess ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ) : isFailed ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            )}
          </div>
          <p style={{ margin: "0 0 4px", fontSize: 13, color: "#666", fontWeight: 500 }}>
            {isSuccess ? "Payment sent to" : isFailed ? "Payment failed to" : "Pending payment to"}
          </p>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{data.receiverName}</p>
          <div style={{ margin: "16px auto 0", fontSize: 38, fontWeight: 800, color: "#003087", letterSpacing: -1 }}>
            {sym}{parseFloat(data.amount || "0").toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
          <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 14px", borderRadius: 20, background: isSuccess ? "#f0fdf4" : isFailed ? "#fef2f2" : "#fffbeb", border: `1px solid ${isSuccess ? "#bbf7d0" : isFailed ? "#fecaca" : "#fde68a"}` }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: isSuccess ? "#16a34a" : isFailed ? "#dc2626" : "#d97706", display: "inline-block" }}/>
            <span style={{ fontSize: 12, fontWeight: 700, color: isSuccess ? "#15803d" : isFailed ? "#dc2626" : "#d97706" }}>
              {isSuccess ? "Completed" : isFailed ? "Failed" : "Pending"}
            </span>
          </div>
        </div>

        {/* Details */}
        {[
          { label: "From", value: data.senderName },
          { label: "Date", value: data.timestamp },
          { label: "Transaction ID", value: data.transactionId, mono: true },
          ...(data.note ? [{ label: "Note", value: data.note }] : []),
        ].map(({ label, value, mono }: any, i, arr) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: 12, paddingBottom: 12, borderBottom: i < arr.length - 1 ? "1px solid #f0f0f0" : "none" }}>
            <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: 13, color: "#222", fontWeight: 600, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "60%" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ padding: "0 12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        <button style={{ width: "100%", padding: "13px", background: "#003087", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Send Again
        </button>
        <button style={{ width: "100%", padding: "13px", background: "transparent", color: "#003087", border: "2px solid #003087", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Return Home
        </button>
      </div>
    </div>
  );
};
