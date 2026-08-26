import { TransactionData } from "@/types/payment";

export const STCPayReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "linear-gradient(135deg, #6B2D8B 0%, #9B59B6 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "white", borderRadius: 8, padding: "4px 10px" }}>
            <span style={{ color: "#6B2D8B", fontWeight: 900, fontSize: 14, letterSpacing: 1 }}>STC Pay</span>
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 16px 16px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: isSuccess ? "#f9f0ff" : isFailed ? "#fef2f2" : "#fffbeb", border: `3px solid ${isSuccess ? "#6B2D8B" : isFailed ? "#ef4444" : "#f59e0b"}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isSuccess ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6B2D8B" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            : isFailed ? <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
        </div>
        <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800, color: "#1a1a1a", textAlign: "center" }}>
          {isSuccess ? "تم التحويل بنجاح" : isFailed ? "فشل التحويل" : "قيد الانتظار"}
        </h2>
        <p style={{ margin: "0 0 4px", fontSize: 14, color: "#555", textAlign: "center" }}>
          {isSuccess ? "Transfer Successful" : isFailed ? "Transfer Failed" : "Transfer Pending"}
        </p>
        <p style={{ margin: "0 0 20px", fontSize: 12, color: "#888" }}>STC Pay · Saudi Arabia</p>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#6B2D8B", marginBottom: 8, letterSpacing: -2 }}>
          {parseFloat(data.amount || "0").toLocaleString("ar-SA", { minimumFractionDigits: 2 })}
        </div>
        <p style={{ fontSize: 14, color: "#888", margin: "0 0 24px" }}>SAR ريال سعودي</p>

        <div style={{ background: "#f9f0ff", borderRadius: 16, padding: "16px", width: "100%", border: "1px solid #e0c8f0", marginBottom: 16 }}>
          {[
            { label: "To / إلى", value: data.receiverName },
            { label: "From / من", value: data.senderName },
            { label: "Date / التاريخ", value: data.timestamp },
            { label: "Ref / مرجع", value: data.transactionId.slice(0, 12), mono: true },
            ...(data.note ? [{ label: "Note / ملاحظة", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #e0c8f0" : "none" }}>
              <span style={{ fontSize: 11, color: "#6B2D8B", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#222", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #e0c8f0" }}>
        <button style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg, #6B2D8B, #9B59B6)", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Send New Payment
        </button>
      </div>
    </div>
  );
};
