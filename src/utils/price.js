// utils/price.js
export const convertToINR = (usd) => {
  const conversionRate = 83.5; // You can update this later dynamically
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(usd * conversionRate);
};
