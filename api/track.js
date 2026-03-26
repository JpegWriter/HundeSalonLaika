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
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const p = getPool();
  if (!p) {
    return res.status(500).json({ message: "No DATABASE_URL configured" });
  }

  try {
    await ensureTable(p);

    const { type, firstName, lastName, email, phone, subject, message, page } = req.body || {};

    if (!type) {
      return res.status(400).json({ message: "type is required" });
    }

    const result = await p.query(
      `INSERT INTO contact_submissions (type, first_name, last_name, email, phone, subject, message, page)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id`,
      [type, firstName || null, lastName || null, email || null, phone || null, subject || null, message || null, page || null]
    );

    return res.status(201).json({ ok: true, id: result.rows[0].id });
  } catch (err) {
    console.error("Track error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
