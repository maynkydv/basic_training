import { handleInput } from './handleInput.js';
import { generateReceipt } from './receiptGenerator.js';

// Main entry point

function start(){
  handleInput().then(inputs => {
    const receipt = generateReceipt(inputs);
    console.log('\n Receipt: \n' + receipt);
    start();
  })
    .catch(err => {
      console.error('Error:', err);
    });
}
start();
