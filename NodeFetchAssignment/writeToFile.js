import { existsSync, mkdirSync, writeFile } from 'fs';
import { join } from 'path';

// Create the output directory if it doesn't exist
const outputDir = join(process.cwd(), 'output');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// Function to generate a timestamped filename
function generateFilename(endpoint) {
  const timestamp = Date.now();
  return `${timestamp}_${endpoint}.txt`;
}

// Function to write data to a file in the /output directory
 export function writeToFile(endpoint, result) {
  const filename = generateFilename(endpoint);
  const filePath = join(outputDir, filename);
  writeFile(filePath, JSON.stringify(result.data, null, 2), (err) => {
    if (err) {
      console.error(`Error writing to file ${filename}:`, err);
    } else {
      console.log(`Data written to ${filename}`);
    }
  });
}