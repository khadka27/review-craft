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
  | "cashapp";

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
}

export interface PaymentPageTheme {
  pageGradient: string;
  heroGradient: string;
  heroDescriptionColor: string;
}
