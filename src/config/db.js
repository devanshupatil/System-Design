const { Pool } = require("pg");

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,

//   waitForConnections: true,
//   connectionLimit: process.env.DB_CONNECTION_LIMIT || 5,
//   queueLimit: 0
// });

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: process.env.DB_POOL_MAX || 20,  // Maximum number of connections
  idleTimeoutMillis: process.env.DB_POOL_IDLE_TIMEOUT || 30000,  // Close idle connections after 30s
  connectionTimeoutMillis: process.env.DB_POOL_CONN_TIMEOUT || 2000,  // Connection timeout
});

console.log("✅ PostgreSQL Connection Pool Created");

module.exports = pool;