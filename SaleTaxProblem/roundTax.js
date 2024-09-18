// Function to round up tax to the nearest 0.05
export function roundUpTax(tax) {
    return Math.ceil(tax * 20) / 20;
  }
  