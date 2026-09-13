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
    CREATE TABLE IF NOT EXISTS daily_finance (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL UNIQUE,
      sales NUMERIC(12,2) NOT NULL DEFAULT 0,
      costs NUMERIC(12,2) NOT NULL DEFAULT 0,
      notes TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `);
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const p = getPool();
  if (!p) {
    if (req.method === "GET") return res.status(200).json([]);
    return res.status(500).json({ message: "No DATABASE_URL configured" });
  }

  try {
    await ensureTable(p);

    if (req.method === "GET") {
      const result = await p.query(`
        SELECT id, date, sales::text AS sales, costs::text AS costs, notes, created_at AS "createdAt", updated_at AS "updatedAt"
        FROM daily_finance
        ORDER BY date DESC
      `);
      return res.status(200).json(result.rows);
    }

    if (req.method === "POST") {
      const { date, sales = 0, costs = 0, notes = "" } = req.body || {};
      if (!date) {
        return res.status(400).json({ message: "Date is required" });
      }

      const result = await p.query(
        `INSERT INTO daily_finance (date, sales, costs, notes, updated_at)
         VALUES ($1, $2, $3, $4, NOW())
         ON CONFLICT (date)
         DO UPDATE SET sales = EXCLUDED.sales,
                       costs = EXCLUDED.costs,
                       notes = EXCLUDED.notes,
                       updated_at = NOW()
         RETURNING id, date, sales::text AS sales, costs::text AS costs, notes, created_at AS "createdAt", updated_at AS "updatedAt"`,
        [date, Number(sales || 0).toFixed(2), Number(costs || 0).toFixed(2), notes || null]
      );

      return res.status(201).json(result.rows[0]);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Daily finance error:", err);
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
}
