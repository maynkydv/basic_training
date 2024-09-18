// Import the required modules
import { createServer } from 'http';
import { readFile, writeFile } from 'fs/promises';
import { parse } from 'url';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current directory of the script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the JSON file
const jsonFilePath = join(__dirname, 'data.json');

// Create an HTTP server
const server = createServer(async (req, res) => {
  const { pathname, query } = parse(req.url, true);

  // Handle GET request to fetch data from JSON file
  if (pathname === '/get' && req.method === 'GET') {
    try {
      const data = await readFile(jsonFilePath, 'utf-8');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    } catch (error) {
      res.statusCode = 500;
      res.end('Error reading JSON file');
    }
  }

  // Handle GET request to set data in JSON file
  else if (pathname === '/set' && req.method === 'POST') {
    try {
      // Collect data from the request body
      let body = '';

      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        try {
          // Parse and write the JSON data to the file
          await writeFile(jsonFilePath, body);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Data updated successfully');
        } catch (error) {
          res.statusCode = 500;
          res.end('Error writing to JSON file');
        }
      });
    } catch (error) {
      res.statusCode = 500;
      res.end('Server error');
    }
  }


  // Handle unknown routes
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

