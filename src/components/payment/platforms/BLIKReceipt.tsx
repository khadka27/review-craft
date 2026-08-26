import { TransactionData } from "@/types/payment";

export const BLIKReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "linear-gradient(135deg, #E91E63 0%, #F06292 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "white", borderRadius: 6, padding: "4px 10px" }}>
            <span style={{ color: "#E91E63", fontWeight: 900, fontSize: 16, letterSpacing: 2 }}>BLIK</span>
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 16px 16px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: isSuccess ? "#fce4ec" : isFailed ? "#fef2f2" : "#fffbeb", border: `3px solid ${isSuccess ? "#E91E63" : isFailed ? "#ef4444" : "#f59e0b"}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E91E63" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            : isFailed ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
        </div>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 900, color: "#1a1a1a", letterSpacing: -0.5 }}>
          {isSuccess ? "Przelew wysłany!" : isFailed ? "Przelew nieudany" : "Przelew oczekuje"}
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 12, color: "#999" }}>{isSuccess ? "Transfer sent" : isFailed ? "Transfer failed" : "Transfer pending"}</p>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#E91E63", marginBottom: 8, letterSpacing: -2 }}>
          {parseFloat(data.amount || "0").toLocaleString("pl-PL", { minimumFractionDigits: 2 })} zł
        </div>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 24px" }}>PLN</p>

        <div style={{ background: "#fce4ec", borderRadius: 16, padding: "16px", width: "100%", border: "1px solid #f8bbd0", marginBottom: 16 }}>
          {[
            { label: "Do / To", value: data.receiverName },
            { label: "Od / From", value: data.senderName },
            { label: "Data / Date", value: data.timestamp },
            { label: "Nr ref.", value: data.transactionId.slice(0, 10), mono: true },
            ...(data.note ? [{ label: "Tytuł / Note", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #f8bbd0" : "none" }}>
              <span style={{ fontSize: 12, color: "#880e4f", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#222", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "60%" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #f8bbd0" }}>
        <button style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg, #E91E63, #F06292)", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Nowy przelew
        </button>
      </div>
    </div>
  );
};
