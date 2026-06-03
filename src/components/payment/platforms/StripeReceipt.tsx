import { TransactionData } from "@/types/payment";
import { getCurrencySymbol } from "@/utils/payment";

export const StripeReceipt = ({ data }: { data: TransactionData }) => {
  const sym = getCurrencySymbol(data.currency);
  const receiptNo = `RCPT-${data.transactionId.slice(0, 8).toUpperCase()}`;
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "white", fontFamily: "'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column", color: "#1a1a2e" }}>

      {/* ── Stripe purple gradient top ── */}
      <div style={{ background: "linear-gradient(135deg, #635bff 0%, #0a2540 100%)", padding: "28px 24px 28px" }}>
        {/* Stripe "S" logo */}
        <div style={{ marginBottom: 16 }}>
          <svg width="44" height="44" viewBox="0 0 44 44">
            <rect width="44" height="44" rx="8" fill="rgba(255,255,255,0.15)" />
            <text x="10" y="32" fontSize="26" fontWeight="900" fill="white" fontFamily="Arial">S</text>
          </svg>
        </div>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, margin: "0 0 4px", letterSpacing: 0.5 }}>Stripe, Inc.</p>
        <p style={{ color: "white", fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Payment receipt</p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: 0, fontFamily: "monospace" }}>{receiptNo}</p>
      </div>

      {/* ── Summary strip ── */}
      <div style={{ background: "#f6f9fc", borderBottom: "1px solid #e6ebf1", padding: "16px 24px", display: "flex", gap: 0 }}>
        {[
          { label: "AMOUNT PAID", value: `${sym}${parseFloat(data.amount).toFixed(2)} ${data.currency}` },
          { label: "DATE PAID", value: data.timestamp.split(",")[0] },
          { label: "PAYMENT METHOD", value: "Visa •••• 4242" },
        ].map(({ label, value }, i) => (
          <div key={label} style={{ flex: 1, paddingLeft: i > 0 ? 16 : 0, borderLeft: i > 0 ? "1px solid #e6ebf1" : "none", marginLeft: i > 0 ? 16 : 0 }}>
            <p style={{ margin: "0 0 4px", fontSize: 9, fontWeight: 700, color: "#8898aa", letterSpacing: 1, textTransform: "uppercase" }}>{label}</p>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#32325d" }}>{value}</p>
          </div>
        ))}
      </div>

      {/* ── Body ── */}
      <div style={{ flex: 1, padding: "24px" }}>

        {/* Status badge */}
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 12px", borderRadius: 20,
            background: isSuccess ? "#d4edda" : isFailed ? "#f8d7da" : "#fff3cd",
            border: `1px solid ${isSuccess ? "#c3e6cb" : isFailed ? "#f5c6cb" : "#ffeeba"}`,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: isSuccess ? "#28a745" : isFailed ? "#dc3545" : "#ffc107", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: isSuccess ? "#155724" : isFailed ? "#721c24" : "#856404" }}>
              {isSuccess ? "Paid" : isFailed ? "Failed" : "Pending"}
            </span>
          </div>
        </div>

        {/* Summary section */}
        <p style={{ fontSize: 10, fontWeight: 700, color: "#8898aa", letterSpacing: 1, margin: "0 0 12px", textTransform: "uppercase" }}>Summary</p>
        
        <div style={{ border: "1px solid #e6ebf1", borderRadius: 8, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #e6ebf1", display: "flex", justifyContent: "space-between", background: "#f6f9fc" }}>
            <span style={{ fontSize: 13, color: "#525f7f" }}>Payment to {data.receiverName}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#32325d" }}>{sym}{parseFloat(data.amount).toFixed(2)}</span>
          </div>
          <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#32325d" }}>Amount paid</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#32325d" }}>{sym}{parseFloat(data.amount).toFixed(2)}</span>
          </div>
        </div>

        {/* Bill to */}
        <p style={{ fontSize: 10, fontWeight: 700, color: "#8898aa", letterSpacing: 1, margin: "0 0 12px", textTransform: "uppercase" }}>Bill to</p>
        <div style={{ marginBottom: 20 }}>
          <p style={{ margin: "0 0 2px", fontSize: 14, fontWeight: 600, color: "#32325d" }}>{data.senderName}</p>
          <p style={{ margin: 0, fontSize: 12, color: "#8898aa" }}>{data.senderName.toLowerCase().replace(/\s+/g, ".")}@email.com</p>
        </div>

        {/* Transaction details */}
        <p style={{ fontSize: 10, fontWeight: 700, color: "#8898aa", letterSpacing: 1, margin: "0 0 12px", textTransform: "uppercase" }}>Details</p>
        <div style={{ background: "#f6f9fc", borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
          {[
            { label: "Transaction ID", value: data.transactionId, mono: true },
            { label: "Date", value: data.timestamp },
            ...(data.note ? [{ label: "Description", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingTop: i > 0 ? 10 : 0, marginTop: i > 0 ? 10 : 0, borderTop: i > 0 ? "1px solid #e6ebf1" : "none" }}>
              <span style={{ fontSize: 12, color: "#8898aa" }}>{label}</span>
              <span style={{ fontSize: 12, color: "#525f7f", fontWeight: 600, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div style={{ borderTop: "1px solid #e6ebf1", paddingTop: 16 }}>
          <p style={{ fontSize: 11, color: "#aab7c4", margin: "0 0 6px" }}>
            Questions? Contact <span style={{ color: "#635bff" }}>support@stripe.com</span>
          </p>
          <p style={{ fontSize: 10, color: "#cfd7df", margin: 0 }}>
            Stripe, Inc. • 510 Townsend Street, San Francisco, CA 94103
          </p>
        </div>
      </div>
    </div>
  );
};
