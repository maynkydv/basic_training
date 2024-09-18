import { isExempt } from './isExemption.js';
import { isImported } from './isImported.js';
import { roundUpTax } from './roundTax.js';

// Function to calculate taxes for an item
export function calculateTaxes(price, itemName) {
  let tax = 0;

  // Determine if basic sales tax applies
  if (!isExempt(itemName)) {
    tax += 0.10 * price;
  }

  // Determine if import duty applies
  if (isImported(itemName)) {
    tax += 0.05 * price;
  }

  // Round up the tax to the nearest 0.05
  return roundUpTax(tax);
}
