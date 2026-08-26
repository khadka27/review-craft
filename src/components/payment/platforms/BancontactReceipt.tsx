import { TransactionData } from "@/types/payment";

export const BancontactReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "linear-gradient(135deg, #005499 0%, #0080CC 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "white", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: "#005499", letterSpacing: -0.5 }}>BC</span>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: 16 }}>Bancontact</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 16px 16px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: isSuccess ? "#f0f7ff" : isFailed ? "#fef2f2" : "#fffbeb", border: `3px solid ${isSuccess ? "#005499" : isFailed ? "#ef4444" : "#f59e0b"}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#005499" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            : isFailed ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
        </div>
        <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800, color: "#1a1a1a" }}>
          {isSuccess ? "Betaling geslaagd!" : isFailed ? "Betaling mislukt" : "Betaling in behandeling"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 12, color: "#888" }}>Bancontact mobile payment</p>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#005499", marginBottom: 8, letterSpacing: -2 }}>
          € {parseFloat(data.amount || "0").toLocaleString("nl-BE", { minimumFractionDigits: 2 })}
        </div>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 24px" }}>EUR</p>

        <div style={{ background: "#f0f7ff", borderRadius: 16, padding: "16px", width: "100%", border: "1px solid #bdd6f0", marginBottom: 16 }}>
          {[
            { label: "Aan / To", value: data.receiverName },
            { label: "Van / From", value: data.senderName },
            { label: "Datum", value: data.timestamp },
            { label: "Betaalkenmerk", value: data.transactionId.slice(0, 12), mono: true },
            ...(data.note ? [{ label: "Mededeling", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #bdd6f0" : "none" }}>
              <span style={{ fontSize: 12, color: "#005499", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#222", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "60%" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #d0e4ff", background: "white" }}>
        <button style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg, #005499, #0080CC)", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Nieuwe betaling
        </button>
      </div>
    </div>
  );
};
