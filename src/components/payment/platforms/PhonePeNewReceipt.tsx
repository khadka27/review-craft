import { TransactionData } from "@/types/payment";

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const CheckIcon = ({ size = 36, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const XIcon = ({ size = 30, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ClockIcon = ({ size = 28, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const DownloadIcon = ({ size = 16, color = "#5f259f" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const ShieldIcon = ({ size = 12, color = "#bbb" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const PhonePeNewReceipt = ({ data }: { data: TransactionData }) => {
  const isPending = data.status === "pending";
  const isFailed = data.status === "failed";
  const isSuccess = data.status === "success";

  const upiId = data.receiverId ?? `${data.receiverName.toLowerCase().replace(/\s+/g, ".")}@ybl`;
  const utrNum = data.utr ?? data.transactionId.replace(/\D/g, "").slice(0, 12).padEnd(12, "7");

  const statusColor = isSuccess ? "#22c55e" : isFailed ? "#ef4444" : "#f59e0b";
  const statusBg = isSuccess ? "rgba(34,197,94,0.2)" : isFailed ? "rgba(239,68,68,0.2)" : "rgba(245,158,11,0.2)";
  const statusLabel = isSuccess ? "Payment Successful" : isFailed ? "Payment Failed" : "Payment Pending";
  const statusSentLabel = isSuccess ? "Sent" : isFailed ? "Failed" : "Pending";

  return (
    <div style={{ width: "100%", minHeight: "100%", backgroundColor: "#f4f1fb", fontFamily: "'Roboto', sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── Header ── */}
      <div style={{ background: "linear-gradient(135deg,#5f259f 0%,#7b2cbf 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 16, fontWeight: 900, color: "#5f259f", fontFamily: "serif" }}>Pe</span>
          </div>
          <span style={{ color: "white", fontWeight: 800, fontSize: 18, letterSpacing: -0.3 }}>PhonePe</span>
        </div>
        <div style={{ opacity: 0.7, display: "flex", alignItems: "center" }}>
          <XIcon size={20} color="white" />
        </div>
      </div>

      {/* ── Status Hero ── */}
      <div style={{ background: "linear-gradient(180deg,#7b2cbf 0%,#f4f1fb 100%)", padding: "30px 20px 50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: statusColor, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 8px ${statusBg}`, marginBottom: 14 }}>
          {isSuccess ? <CheckIcon size={36} color="white" /> : isFailed ? <XIcon size={30} color="white" /> : <ClockIcon size={28} color="white" />}
        </div>
        <p style={{ color: statusColor, fontWeight: 800, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", margin: "0 0 6px", textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          {statusLabel}
        </p>
        <p style={{ fontSize: 38, fontWeight: 900, color: "white", letterSpacing: -1.5, margin: "0 0 4px", textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
          ₹{parseFloat(data.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </p>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, fontWeight: 500, margin: 0 }}>to {data.receiverName}</p>
      </div>

      {/* ── Details Card ── */}
      <div style={{ margin: "-24px 16px 0", background: "white", borderRadius: 16, boxShadow: "0 2px 20px rgba(95,37,159,0.1)", overflow: "hidden" }}>
        {/* Receiver row */}
        <div style={{ padding: "16px 18px", borderBottom: "1px solid #f3f0f9", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#7b2cbf,#5f259f)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: 18 }}>{(data.receiverName || "R")[0].toUpperCase()}</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#1a1a1a" }}>{data.receiverName}</p>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "#888", fontFamily: "monospace" }}>{upiId}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontWeight: 800, fontSize: 16, color: "#1a1a1a" }}>₹{parseFloat(data.amount).toLocaleString("en-IN")}</p>
            <p style={{ margin: "2px 0 0", fontSize: 10, color: statusColor, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 3 }}>
              {isSuccess
                ? <><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={statusColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Sent</>
                : isFailed
                ? <><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={statusColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg> Failed</>
                : <><ClockIcon size={10} color={statusColor} /> Pending</>}
            </p>
          </div>
        </div>

        {/* Info rows */}
        {[
          { label: "From", value: data.senderName },
          { label: "Date & Time", value: data.timestamp },
          { label: "UPI Ref No.", value: utrNum, mono: true },
          { label: "Transaction ID", value: data.transactionId.slice(0, 16), mono: true },
          ...(data.note ? [{ label: "Note", value: data.note }] : []),
        ].map(({ label, value, mono }: any, i, arr) => (
          <div key={label} style={{ padding: "12px 18px", borderBottom: i < arr.length - 1 ? "1px solid #f3f0f9" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: 12, color: "#1a1a1a", fontWeight: 700, fontFamily: mono ? "monospace" : "inherit", textAlign: "right", maxWidth: "55%" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* ── Buttons ── */}
      <div style={{ margin: "16px 16px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <button style={{ padding: "12px", background: "#f4f1fb", border: "1px solid #e0d9f5", borderRadius: 12, color: "#5f259f", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <DownloadIcon size={15} color="#5f259f" /> Download
        </button>
        <button style={{ padding: "12px", background: "linear-gradient(135deg,#5f259f,#7b2cbf)", border: "none", borderRadius: 12, color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          Done
        </button>
      </div>

      {/* Footer */}
      <div style={{ padding: "16px 0 12px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
        <ShieldIcon size={12} color="#bbb" />
        <span style={{ fontSize: 10, color: "#bbb", fontWeight: 500 }}>Secured by PhonePe • UPI</span>
      </div>
    </div>
  );
};