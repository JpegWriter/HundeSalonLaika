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

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const p = getPool();
  if (!p) {
    return res.status(200).json({
      totalViews: 0,
      todayViews: 0,
      last7DaysViews: 0,
      topPages: [],
      viewsByDay: [],
      totalSubmissions: 0,
      submissionsByType: [],
    });
  }

  try {
    // Ensure page_views table exists
    await p.query(`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        path TEXT NOT NULL,
        referrer TEXT,
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    const [totalRes, todayRes, last7Res, topPagesRes, viewsByDayRes, totalSubRes, subByTypeRes] = await Promise.all([
      // Total page views
      p.query(`SELECT COUNT(*) AS count FROM page_views`),
      // Today's page views
      p.query(`SELECT COUNT(*) AS count FROM page_views WHERE created_at >= CURRENT_DATE`),
      // Last 7 days
      p.query(`SELECT COUNT(*) AS count FROM page_views WHERE created_at >= NOW() - INTERVAL '7 days'`),
      // Top pages (last 30 days)
      p.query(`
        SELECT path, COUNT(*) AS views
        FROM page_views
        WHERE created_at >= NOW() - INTERVAL '30 days'
        GROUP BY path
        ORDER BY views DESC
        LIMIT 10
      `),
      // Views by day (last 14 days)
      p.query(`
        SELECT DATE(created_at) AS date, COUNT(*) AS views
        FROM page_views
        WHERE created_at >= NOW() - INTERVAL '14 days'
        GROUP BY DATE(created_at)
        ORDER BY date DESC
      `),
      // Total submissions
      p.query(`SELECT COUNT(*) AS count FROM contact_submissions`).catch(() => ({ rows: [{ count: 0 }] })),
      // Submissions by type
      p.query(`
        SELECT type, COUNT(*) AS count
        FROM contact_submissions
        GROUP BY type
        ORDER BY count DESC
      `).catch(() => ({ rows: [] })),
    ]);

    return res.status(200).json({
      totalViews: parseInt(totalRes.rows[0].count),
      todayViews: parseInt(todayRes.rows[0].count),
      last7DaysViews: parseInt(last7Res.rows[0].count),
      topPages: topPagesRes.rows,
      viewsByDay: viewsByDayRes.rows,
      totalSubmissions: parseInt(totalSubRes.rows[0].count),
      submissionsByType: subByTypeRes.rows,
    });
  } catch (err) {
    console.error("Stats error:", err);
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
}
