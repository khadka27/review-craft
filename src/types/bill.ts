export type BillPlatform = "amazon" | "walmart" | "supplement";

export interface BillItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  sku?: string;
  specifications?: string; // For things like flavor, size, color, etc.
}

export interface BillData {
  platform: BillPlatform;
  orderId: string;
  orderDate: string;
  invoiceDate: string;
  invoiceNumber: string;
  paymentMethod: string;
  
  // Seller Info
  sellerName: string;
  sellerAddress: string;
  sellerTaxId?: string;

  // Billing Address
  billingName: string;
  billingAddress: string;
  billingPhone?: string;

  // Shipping Address
  shippingName: string;
  shippingAddress: string;
  shippingPhone?: string;

  // Items
  items: BillItem[];

  // Totals
  shippingCost: string;
  taxRate: string; // percentage (e.g. "8.25")
  discount: string; // flat discount amount (e.g. "10.00")
  
  currencySymbol: string;
  currencyCode: string;
  logoName?: string;
  logoExtension?: string;
  templateStyle?: "classic" | "pos" | "modern";
  logoImage?: string;
}

export interface BillPageTheme {
  pageGradient: string;
  heroGradient: string;
  heroDescriptionColor: string;
}
