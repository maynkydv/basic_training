import { calculateTaxes } from './taxCalculator.js' ;

// Function to generate the receipt
export function generateReceipt(inputs) {
  let totalTax = 0;
  let totalCost = 0;
  let receipt = "";

  inputs.forEach(item => {
    // Parsing the input line
    const regex = /(\d+)\s(.*)\sat\s(\d+(\.\d+)?)/;
    const [, quantityStr, itemName, priceStr] = item.match(regex);
    const quantity = parseInt(quantityStr);
    const price = parseFloat(priceStr);

    // Calculate taxes for this item
    const itemTax = calculateTaxes(price, itemName);
    const totalItemCost = (price + itemTax) * quantity;

    // Add to the receipt
    receipt += `${quantity} ${itemName}: ${totalItemCost.toFixed(2)}\n`;

    // Update totals
    totalTax += itemTax * quantity;
    totalCost += totalItemCost;
  });

  // Add sales taxes and total to the receipt
  receipt += `Sales Taxes: ${totalTax.toFixed(2)}\n`;
  receipt += `Total: ${totalCost.toFixed(2)}`;

  return receipt;
}
