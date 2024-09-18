import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};


function isValidNumber(num) {
  return !isNaN(num); 
}

async function calculator() {
  try {
    const num1Input = await askQuestion("Enter first number: ");
    if (!isValidNumber(num1Input)) {
      console.log("Enter a valid number!");
      return calculator(); 
    }
    const num1 = parseFloat(num1Input); 

    const num2Input = await askQuestion("Enter second number: ");
    if (!isValidNumber(num2Input)) {
      console.log("Enter a valid number!");
      return calculator(); 
    }
    const num2 = parseFloat(num2Input); 

    const operation = await askQuestion("Enter operation (+, -, *, /): ");

    let result;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Cannot divide by zero!");
          return calculator(); 
        }
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operation!");
        return calculator(); 
    }

    console.log(`Result: ${result}`);
    calculator();
    // rl.close();
  } catch (error) {
    console.error("Error:", error);
    rl.close();
  }
}

calculator();
