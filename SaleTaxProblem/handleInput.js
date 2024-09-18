import { clear } from 'console';
import { createInterface } from 'readline';

// Function to handle terminal input
export function handleInput() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const inputs = [];
  console.log('\n Enter the items\n >> type "done" when finished \n ');

  return new Promise((resolve) => {
    rl.on('line', (input) => {
      if (input.trim().toLowerCase() === 'done') {
        rl.close();
        resolve(inputs);
      } else {
        inputs.push(input);
      }
    });
  });
}
