export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "INR":
      return "₹";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "NPR":
      return "Rs.";
    default:
      return currency;
  }
};

export const formatAmount = (amount: string, currency: string) => {
  const symbol = getCurrencySymbol(currency);
  return `${symbol} ${amount}`;
};
