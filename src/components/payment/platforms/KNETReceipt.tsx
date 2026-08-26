import { TransactionData } from "@/types/payment";

export const KNETReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#f5f7fa", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "linear-gradient(135deg, #007A3D 0%, #00A84F 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "white", borderRadius: 6, padding: "4px 10px" }}>
            <span style={{ color: "#007A3D", fontWeight: 900, fontSize: 16, letterSpacing: 1 }}>KNET</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, fontWeight: 500 }}>الكويت</span>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>

      <div style={{ flex: 1, padding: "20px 16px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: isSuccess ? "#f0fff7" : isFailed ? "#fef2f2" : "#fffbeb", border: `3px solid ${isSuccess ? "#007A3D" : isFailed ? "#ef4444" : "#f59e0b"}`, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isSuccess ? <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007A3D" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              : isFailed ? <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
          </div>
          <h2 style={{ margin: "0 0 2px", fontSize: 20, fontWeight: 900, color: "#1a1a1a" }}>
            {isSuccess ? "تم الدفع" : isFailed ? "فشل الدفع" : "قيد المعالجة"}
          </h2>
          <p style={{ margin: "0 0 2px", fontSize: 14, color: "#333" }}>
            {isSuccess ? "Payment Successful" : isFailed ? "Payment Failed" : "Payment Pending"}
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 12, color: "#888" }}>KNET · Kuwait</p>
          <div style={{ fontSize: 40, fontWeight: 900, color: "#007A3D", marginBottom: 4, letterSpacing: -2 }}>
            {parseFloat(data.amount || "0").toLocaleString("ar-KW", { minimumFractionDigits: 3 })}
          </div>
          <p style={{ fontSize: 14, color: "#888", margin: "0 0 20px" }}>KWD دينار كويتي</p>
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: "14px", boxShadow: "0 4px 12px rgba(0,122,61,0.08)", border: "1px solid #d0f0e0", marginBottom: 14 }}>
          {[
            { label: "To / إلى", value: data.receiverName },
            { label: "From / من", value: data.senderName },
            { label: "Date / التاريخ", value: data.timestamp },
            { label: "Approval / موافقة", value: data.transactionId.slice(0, 8), mono: true },
            ...(data.note ? [{ label: "Note / ملاحظة", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #e8f5ee" : "none" }}>
              <span style={{ fontSize: 11, color: "#007A3D", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#222", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "12px 16px", borderTop: "1px solid #d0f0e0", background: "white" }}>
        <button style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg, #007A3D, #00A84F)", color: "white", border: "none", borderRadius: 25, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          New Payment
        </button>
      </div>
    </div>
  );
};
