import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";

function MessageCell({ message }: { message: string }) {
  const [expanded, setExpanded] = useState(false);
  if (!message) return <td className="border p-1 text-muted-foreground">—</td>;
  const isLong = message.length > 80;
  return (
    <td
      className={`border p-1 max-w-sm ${isLong ? "cursor-pointer hover:bg-secondary/30" : ""} ${expanded ? "whitespace-pre-wrap break-words" : "truncate"}`}
      onClick={() => isLong && setExpanded(!expanded)}
      title={expanded ? "" : message}
    >
      {expanded ? message : message.length > 80 ? message.slice(0, 80) + "…" : message}
      {isLong && !expanded && (
        <span className="text-primary ml-1 text-[10px]">[mehr]</span>
      )}
    </td>
  );
}

interface Stats {
  totalViews: number;
  todayViews: number;
  last7DaysViews: number;
  topPages: { path: string; views: string }[];
  viewsByDay: { date: string; views: string }[];
  totalSubmissions: number;
  submissionsByType: { type: string; count: string }[];
}

interface FinanceEntry {
  id?: string;
  date: string;
  sales: string | number;
  costs: string | number;
  notes?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export default function DevPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [financeEntries, setFinanceEntries] = useState<FinanceEntry[]>([]);
  const [financeForm, setFinanceForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    sales: "",
    costs: "",
    notes: "",
  });
  const [financeSaving, setFinanceSaving] = useState(false);
  const [financeError, setFinanceError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<"stats" | "submissions" | "finance">("stats");

  const financeSummary = financeEntries.reduce(
    (acc, entry) => {
      const sales = Number(entry.sales ?? 0);
      const costs = Number(entry.costs ?? 0);
      return {
        sales: acc.sales + sales,
        costs: acc.costs + costs,
        net: acc.net + (sales - costs),
      };
    },
    { sales: 0, costs: 0, net: 0 },
  );

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
      fetch("/api/dev/finance").then(async (r) => {
        const data = await r.json();
        if (r.ok && Array.isArray(data)) return data;
        throw new Error(data.error || data.message || "Fehler beim Laden der Finanzen");
      }),
    ])
      .then(([subs, st, finance]) => {
        setSubmissions(subs);
        setStats(st);
        setFinanceEntries(finance);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const handleFinanceSave = async (event: React.FormEvent) => {
    event.preventDefault();
    setFinanceError(null);
    setFinanceSaving(true);

    try {
      const response = await fetch("/api/dev/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: financeForm.date,
          sales: Number(financeForm.sales || 0),
          costs: Number(financeForm.costs || 0),
          notes: financeForm.notes,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || data.error || "Speichern fehlgeschlagen");
      }

      setFinanceEntries((prev) => {
        const next = prev.filter((entry) => entry.date !== data.date);
        return [data, ...next].sort((a, b) => b.date.localeCompare(a.date));
      });
      setFinanceForm((current) => ({ ...current, sales: "", costs: "", notes: "" }));
    } catch (error) {
      setFinanceError(error instanceof Error ? error.message : "Speichern fehlgeschlagen");
    } finally {
      setFinanceSaving(false);
    }
  };

  if (loading) return <Layout><div className="p-8">Lade...</div></Layout>;
  if (error) return <Layout><div className="p-8 text-destructive">{error}</div></Layout>;
  if (!authed) return null;

  return (
    <Layout>
      <SEO title="DEV Dashboard" description="DEV" />
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6">📊 Dev Dashboard</h1>

        <div className="flex flex-wrap gap-2 mb-6">
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
          <Button
            variant={tab === "finance" ? "default" : "outline"}
            onClick={() => setTab("finance")}
            size="sm"
          >
            Buchhaltung
          </Button>
        </div>

        {tab === "stats" && stats && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Besuche gesamt" value={stats.totalViews} />
              <StatCard label="Heute" value={stats.todayViews} />
              <StatCard label="Letzte 7 Tage" value={stats.last7DaysViews} />
              <StatCard label="Anfragen gesamt" value={stats.totalSubmissions} />
            </div>

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
                      <MessageCell message={s.message} />
                      <td className="border p-1">{s.page}</td>
                      <td className="border p-1 whitespace-nowrap">{new Date(s.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "finance" && (
          <div className="space-y-6">
            <form onSubmit={handleFinanceSave} className="bg-white rounded-xl border p-4 space-y-4">
              <h3 className="font-bold text-sm">Tageserfassung</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <label className="space-y-1 text-xs text-muted-foreground">
                  <span>Datum</span>
                  <input
                    type="date"
                    value={financeForm.date}
                    onChange={(event) => setFinanceForm((current) => ({ ...current, date: event.target.value }))}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    required
                  />
                </label>
                <label className="space-y-1 text-xs text-muted-foreground">
                  <span>Verkauf (€)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={financeForm.sales}
                    onChange={(event) => setFinanceForm((current) => ({ ...current, sales: event.target.value }))}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="0.00"
                  />
                </label>
                <label className="space-y-1 text-xs text-muted-foreground">
                  <span>Kosten (€)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={financeForm.costs}
                    onChange={(event) => setFinanceForm((current) => ({ ...current, costs: event.target.value }))}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="0.00"
                  />
                </label>
                <div className="flex items-end">
                  <Button type="submit" disabled={financeSaving} className="w-full">
                    {financeSaving ? "Speichern..." : "Speichern"}
                  </Button>
                </div>
              </div>
              <label className="block space-y-1 text-xs text-muted-foreground">
                <span>Notiz</span>
                <textarea
                  value={financeForm.notes}
                  onChange={(event) => setFinanceForm((current) => ({ ...current, notes: event.target.value }))}
                  rows={3}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="z. B. Material, Steuern, Ausgaben, ..."
                />
              </label>
              {financeError && <div className="text-xs text-destructive">{financeError}</div>}
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard label="Verkauf gesamt" value={Number(financeSummary.sales.toFixed(2))} />
              <StatCard label="Kosten gesamt" value={Number(financeSummary.costs.toFixed(2))} />
              <StatCard label="Netto" value={Number(financeSummary.net.toFixed(2))} />
            </div>

            <div className="bg-white rounded-xl border p-4">
              <h3 className="font-bold text-sm mb-3">Letzte Tageswerte</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="p-2 border text-left">Datum</th>
                      <th className="p-2 border text-right">Verkauf</th>
                      <th className="p-2 border text-right">Kosten</th>
                      <th className="p-2 border text-right">Netto</th>
                      <th className="p-2 border text-left">Notiz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financeEntries.length === 0 && (
                      <tr>
                        <td colSpan={5} className="border p-3 text-muted-foreground text-center">
                          Noch keine Tageswerte erfasst.
                        </td>
                      </tr>
                    )}
                    {financeEntries.map((entry) => {
                      const sales = Number(entry.sales ?? 0);
                      const costs = Number(entry.costs ?? 0);
                      return (
                        <tr key={`${entry.date}-${entry.id || "manual"}`}>
                          <td className="border p-2">{new Date(`${entry.date}T00:00:00`).toLocaleDateString("de-AT")}</td>
                          <td className="border p-2 text-right">{sales.toFixed(2)} €</td>
                          <td className="border p-2 text-right">{costs.toFixed(2)} €</td>
                          <td className="border p-2 text-right">{(sales - costs).toFixed(2)} €</td>
                          <td className="border p-2">{entry.notes || "—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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
