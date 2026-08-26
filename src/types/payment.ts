export type PaymentPlatform =
  | "paytm"
  | "stripe"
  | "googlepay"
  | "upi"
  | "phonepay"
  | "googlewallet"
  | "applepay"
  | "venmo"
  | "fonepay"
  | "cashapp"
  | "bhim"
  | "phonepe"
  | "gpay"
  // New global platforms
  | "paypal"
  | "zelle"
  | "interac"
  | "wero"
  | "ideal"
  | "bancontact"
  | "bizum"
  | "satispay"
  | "blik"
  | "mbway"
  | "twint"
  | "swish"
  | "vipps"
  | "mobilepay"
  | "stcpay"
  | "knet"
  | "payshap";

export interface TransactionData {
  id: string;
  platform: PaymentPlatform;
  amount: string;
  currency: string;
  senderName: string;
  receiverName: string;
  timestamp: string;
  transactionId: string;
  status: "success" | "pending" | "failed";
  note?: string;
  referenceId?: string;
  receiverId?: string;
  senderMasked?: string;
  utr?: string;
}

export interface PaymentPageTheme {
  pageGradient: string;
  heroGradient: string;
  heroDescriptionColor: string;
}
