const { Client } = require('pg');

// Create a new client
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'TestDB',
  password: 'password',
  port: 5432, // Default PostgreSQL port
});

(async () => {
  try {
    // Connect to the PostgreSQL server
    await client.connect();
    console.log('Connected to the database');

    // Example Query: SELECT users with specific conditions
    const res = await client.query('SELECT * FROM "Users" WHERE email = $1', ['mayank@example.com']);
    console.log(res.rows);

    // Another example: Insert a new user
    const insertUser = await client.query(
      'INSERT INTO "Users" (firstName, lastName, email) VALUES ($1, $2, $3) RETURNING *',
      ['John', 'Doe', 'john@example.com']
    );
    console.log('Inserted User:', insertUser.rows[0]);

  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    // Close the connection
    await client.end();
    console.log('Connection closed');
  }
})();
