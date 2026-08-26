import { TransactionData } from "@/types/payment";

export const TWINTReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#000", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "white", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#000" }}>TWINT</span>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: 18, letterSpacing: 2 }}>TWINT</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 16px 16px" }}>
        {/* Colored status ring */}
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: isSuccess ? "#f0fdf4" : isFailed ? "#fef2f2" : "#fffbeb", border: `4px solid ${isSuccess ? "#000" : isFailed ? "#ef4444" : "#f59e0b"}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            : isFailed ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
        </div>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#000", letterSpacing: -0.5 }}>
          {isSuccess ? "Zahlung gesendet" : isFailed ? "Zahlung fehlgeschlagen" : "Zahlung ausstehend"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 12, color: "#888" }}>{isSuccess ? "Payment sent" : isFailed ? "Payment failed" : "Payment pending"}</p>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#000", marginBottom: 8, letterSpacing: -2 }}>
          CHF {parseFloat(data.amount || "0").toLocaleString("de-CH", { minimumFractionDigits: 2 })}
        </div>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 24px" }}>Swiss Franc</p>

        <div style={{ background: "#f9f9f9", borderRadius: 16, padding: "16px", width: "100%", border: "1px solid #eee", marginBottom: 16 }}>
          {[
            { label: "An / To", value: data.receiverName },
            { label: "Von / From", value: data.senderName },
            { label: "Datum / Date", value: data.timestamp },
            { label: "Referenz / Ref", value: data.transactionId.slice(0, 10), mono: true },
            ...(data.note ? [{ label: "Betreff / Note", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none" }}>
              <span style={{ fontSize: 12, color: "#666", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#000", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #eee" }}>
        <button style={{ width: "100%", padding: "13px", background: "#000", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 1 }}>
          NEUE ZAHLUNG
        </button>
      </div>
    </div>
  );
};
