import { existsSync, mkdirSync, writeFile } from 'fs';
import { join } from 'path';

// Create the output directory if it doesn't exist
const outputDir = join(process.cwd(), 'output');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

/**
 * Generates a timestamped filename.
 * return in format of milisecond_endpoint.txt
 */
function generateFilename(endpoint) {
  const timestamp = Date.now();
  return `${timestamp}_${endpoint}.txt`;
}

/**
 * Writes data to a file in the /output directory.
 */
export function writeToFile(endpoint, data) {
  const filename = generateFilename(endpoint);
  const filePath = join(outputDir, filename);

  writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(`Error writing to file ${filename}:`, err);
    } else {
      console.log(`Data written to ${filename}`);
    }
  });
}
