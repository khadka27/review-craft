import { TransactionData } from "@/types/payment";
import { BLIKIcon } from "@/components/SocialMediaIcons";

export const BLIKReceipt = ({ data }: { data: TransactionData }) => {
  const isSuccess = data.status === "success";
  const isFailed = data.status === "failed";
  const formattedAmount = parseFloat(data.amount || "0").toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#F4F5F7",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        color: "#111827",
      }}
    >
      {/* ── BLIK Dark Bar ── */}
      <div
        style={{
          background: "#1C1C1E",
          padding: "32px 18px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BLIKIcon size={26} />
          <div>
            <span style={{ fontSize: 17, fontWeight: 900, color: "white", letterSpacing: 0.5 }}>
              BLIK
            </span>
            <span style={{ fontSize: 11, color: "#EB0029", marginLeft: 6, fontWeight: 700 }}>
              Przelew na telefon
            </span>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, background: "#EB0029", color: "white", padding: "3px 10px", borderRadius: 8 }}>
          POLSKA
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, padding: "22px 16px 16px", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "24px 18px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
            border: "1px solid #E5E7EB",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: "50%",
              background: isSuccess ? "#ECFDF5" : isFailed ? "#FEF2F2" : "#FFFBEB",
              border: `3px solid ${isSuccess ? "#10B981" : isFailed ? "#EF4444" : "#F59E0B"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px",
            }}
          >
            {isSuccess ? (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : isFailed ? (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3">
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </div>

          <p style={{ margin: "0 0 4px", fontSize: 13, color: "#6B7280", fontWeight: 600 }}>
            {isSuccess ? "Przelew na telefon wysłany!" : isFailed ? "Przelew nieudany" : "Oczekiwanie"}
          </p>
          <h2 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 800, color: "#111827" }}>
            {data.receiverName}
          </h2>

          <div style={{ fontSize: 42, fontWeight: 900, color: "#111827", letterSpacing: -1.5, marginBottom: 8 }}>
            {formattedAmount} <span style={{ fontSize: 22, color: "#EB0029", fontWeight: 800 }}>zł</span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 14px",
              borderRadius: 16,
              background: "#FEE2E2",
              border: "1px solid #FECACA",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, color: "#991B1B" }}>
              BLIK Instant Transfer
            </span>
          </div>
        </div>

        {/* Details Card */}
        <div
          style={{
            background: "white",
            borderRadius: 18,
            padding: "16px 18px",
            border: "1px solid #E5E7EB",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            marginBottom: 16,
          }}
        >
          {[
            { label: "Odbiorca / To", value: data.receiverName },
            { label: "Nadawca / From", value: data.senderName },
            { label: "Data i godzina", value: data.timestamp },
            { label: "ID Transakcji BLIK", value: `BLK-${data.transactionId.slice(0, 10).toUpperCase()}`, mono: true },
            { label: "Opłata", value: "0,00 zł" },
            ...(data.note ? [{ label: "Tytuł przelewu", value: data.note }] : []),
          ].map(({ label, value, mono }: any, i, arr) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: i > 0 ? 11 : 0,
                paddingBottom: i < arr.length - 1 ? 11 : 0,
                borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none",
              }}
            >
              <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 600 }}>{label}</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#111827",
                  fontWeight: 700,
                  fontFamily: mono ? "monospace" : "inherit",
                  textAlign: "right",
                  maxWidth: "58%",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ padding: "12px 16px 20px", background: "white", borderTop: "1px solid #E5E7EB" }}>
        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#1C1C1E",
            color: "white",
            border: "none",
            borderRadius: 26,
            fontSize: 15,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          }}
        >
          Nowy przelew BLIK
        </button>
      </div>
    </div>
  );
};
