import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";

interface Stats {
  totalViews: number;
  todayViews: number;
  last7DaysViews: number;
  topPages: { path: string; views: string }[];
  viewsByDay: { date: string; views: string }[];
  totalSubmissions: number;
  submissionsByType: { type: string; count: string }[];
}

export default function DevPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<"stats" | "submissions">("stats");

  useEffect(() => {
    if (!window.location.search.includes("dev")) {
      setError("Not found");
      setLoading(false);
      return;
    }
    const pw = window.prompt("Passwort für DEV-Seite:");
    if (pw !== "laika2026") {
      setError("Nicht autorisiert");
      setLoading(false);
      return;
    }
    setAuthed(true);

    Promise.all([
      fetch("/api/dev/submissions").then(async (r) => {
        const data = await r.json();
        if (r.ok && Array.isArray(data)) return data;
        throw new Error(data.error || data.message || "Fehler");
      }),
      fetch("/api/dev/stats").then(async (r) => {
        const data = await r.json();
        if (r.ok) return data;
        throw new Error(data.error || data.message || "Fehler");
      }),
    ])
      .then(([subs, st]) => {
        setSubmissions(subs);
        setStats(st);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Layout><div className="p-8">Lade...</div></Layout>;
  if (error) return <Layout><div className="p-8 text-destructive">{error}</div></Layout>;
  if (!authed) return null;

  return (
    <Layout>
      <SEO title="DEV Dashboard" description="DEV" />
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6">📊 Dev Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={tab === "stats" ? "default" : "outline"}
            onClick={() => setTab("stats")}
            size="sm"
          >
            Statistiken
          </Button>
          <Button
            variant={tab === "submissions" ? "default" : "outline"}
            onClick={() => setTab("submissions")}
            size="sm"
          >
            Anfragen ({submissions.length})
          </Button>
        </div>

        {tab === "stats" && stats && (
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Besuche gesamt" value={stats.totalViews} />
              <StatCard label="Heute" value={stats.todayViews} />
              <StatCard label="Letzte 7 Tage" value={stats.last7DaysViews} />
              <StatCard label="Anfragen gesamt" value={stats.totalSubmissions} />
            </div>

            {/* Submissions by type */}
            {stats.submissionsByType.length > 0 && (
              <div className="bg-white rounded-xl border p-4">
                <h3 className="font-bold text-sm mb-3">Anfragen nach Typ</h3>
                <div className="space-y-2">
                  {stats.submissionsByType.map((s) => (
                    <div key={s.type} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{s.type}</span>
                      <span className="font-semibold">{s.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Views by day */}
            {stats.viewsByDay.length > 0 && (
              <div className="bg-white rounded-xl border p-4">
                <h3 className="font-bold text-sm mb-3">Besuche pro Tag (letzte 14 Tage)</h3>
                <div className="space-y-1">
                  {stats.viewsByDay.map((d) => {
                    const max = Math.max(...stats.viewsByDay.map((v) => parseInt(v.views)));
                    const pct = max > 0 ? (parseInt(d.views) / max) * 100 : 0;
                    return (
                      <div key={d.date} className="flex items-center gap-2 text-xs">
                        <span className="w-20 text-muted-foreground shrink-0">
                          {new Date(d.date).toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit" })}
                        </span>
                        <div className="flex-1 bg-secondary/30 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-8 text-right font-semibold">{d.views}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Top pages */}
            {stats.topPages.length > 0 && (
              <div className="bg-white rounded-xl border p-4">
                <h3 className="font-bold text-sm mb-3">Top-Seiten (letzte 30 Tage)</h3>
                <div className="space-y-2">
                  {stats.topPages.map((p) => (
                    <div key={p.path} className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-mono text-xs">{p.path}</span>
                      <span className="font-semibold">{p.views}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "submissions" && (
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-xs">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-2 border">Typ</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">E-Mail</th>
                    <th className="p-2 border">Telefon</th>
                    <th className="p-2 border">Betreff</th>
                    <th className="p-2 border">Nachricht</th>
                    <th className="p-2 border">Seite</th>
                    <th className="p-2 border">Zeit</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr key={s.id}>
                      <td className="border p-1">{s.type}</td>
                      <td className="border p-1">{[s.firstName, s.lastName].filter(Boolean).join(" ")}</td>
                      <td className="border p-1">{s.email}</td>
                      <td className="border p-1">{s.phone}</td>
                      <td className="border p-1">{s.subject}</td>
                      <td className="border p-1 max-w-xs truncate" title={s.message}>{s.message}</td>
                      <td className="border p-1">{s.page}</td>
                      <td className="border p-1 whitespace-nowrap">{new Date(s.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <Button className="mt-6" onClick={() => window.location.reload()}>Neu laden</Button>
      </div>
    </Layout>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-xl border p-4 text-center">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
