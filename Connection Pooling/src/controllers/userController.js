const pool = require("../config/db");

exports.getUsers = async (req, res) => {
  let connection;

  try {
    // 1️⃣ Get connection from pool
    connection = await pool.connect();

    // After getting rows, add:
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 second delay

    // 2️⃣ Execute query
    const result = await connection.query("SELECT * FROM users");
    const rows = result.rows;

    console.log('Connection acquired');
    // ... query ...
    console.log('Connection released');


    // 3️⃣ Send response
    res.json(rows);

  } catch (error) {
    console.error("❌ DB Error:", error.message);
    res.status(500).json({ error: "Database error" });

  } finally {
    // 4️⃣ RELEASE connection
    if (connection) connection.release();
  }
};
