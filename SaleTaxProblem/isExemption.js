// List of exempt categories
const exemptItems = ["book", "chocolate", "chocolates", "food" , "foods" , "pill", "pills" , "medicine"];

// Function to check if an item is exempt from basic sales tax
export function isExempt(itemName) {
  return exemptItems.some(exempt => itemName.includes(exempt));
}
