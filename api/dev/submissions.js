import pg from "pg";

const { Pool } = pg;

let pool = null;

function getPool() {
  if (!pool && process.env.DATABASE_URL) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 3,
      ssl: { rejectUnauthorized: false },
    });
  }
  return pool;
}

async function ensureTable(p) {
  await p.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      type TEXT NOT NULL,
      first_name TEXT,
      last_name TEXT,
      email TEXT,
      phone TEXT,
      subject TEXT,
      message TEXT,
      page TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `);
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const p = getPool();
  if (!p) {
    return res.status(200).json([]);
  }

  try {
    await ensureTable(p);

    const result = await p.query(
      `SELECT id, type, first_name AS "firstName", last_name AS "lastName", email, phone, subject, message, page, created_at AS "createdAt"
       FROM contact_submissions ORDER BY created_at DESC LIMIT 500`
    );

    return res.status(200).json(result.rows);
  } catch (err) {
    console.error("Dev submissions error:", err);
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
}
