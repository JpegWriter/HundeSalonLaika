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

async function ensureTables(p) {
  await p.query(`
    CREATE TABLE IF NOT EXISTS page_views (
      id SERIAL PRIMARY KEY,
      path TEXT NOT NULL,
      referrer TEXT,
      user_agent TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `);
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const p = getPool();
  if (!p) {
    return res.status(200).json({ ok: true });
  }

  try {
    await ensureTables(p);
    const { path, referrer } = req.body || {};
    const userAgent = req.headers["user-agent"] || null;

    await p.query(
      `INSERT INTO page_views (path, referrer, user_agent) VALUES ($1, $2, $3)`,
      [path || "/", referrer || null, userAgent]
    );

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Pageview error:", err);
    return res.status(200).json({ ok: true }); // Don't fail silently
  }
}
