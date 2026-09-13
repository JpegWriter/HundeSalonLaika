import pg from "pg";
const { Pool } = pg;

let pool: pg.Pool | null = null;

export function getPool(): pg.Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      ssl: { rejectUnauthorized: false },
    });
  }
  return pool;
}

/** Create the submissions table if it doesn't exist yet */
export async function initSubmissionsTable(): Promise<void> {
  const p = getPool();
  if (!p) {
    console.log("[db] No DATABASE_URL – submissions will only be stored in memory (not persistent on Vercel).");
    return;
  }

  try {
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
    console.log("[db] contact_submissions table ready.");
  } catch (err) {
    console.error("[db] Failed to create contact_submissions table:", err);
  }
}

export async function initDailyFinanceTable(): Promise<void> {
  const p = getPool();
  if (!p) {
    console.log("[db] No DATABASE_URL – daily finance entries will only be stored in memory.");
    return;
  }

  try {
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
    console.log("[db] daily_finance table ready.");
  } catch (err) {
    console.error("[db] Failed to create daily_finance table:", err);
  }
}
