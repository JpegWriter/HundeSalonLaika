import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";

export default function DevPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    // Only show if ?dev is present
    if (!window.location.search.includes("dev")) {
      setError("Not found");
      setLoading(false);
      return;
    }
    // Simple browser prompt for password
    const pw = window.prompt("Passwort für DEV-Seite:");
    // Change this password as needed
    if (pw !== "laika2026") {
      setError("Nicht autorisiert");
      setLoading(false);
      return;
    }
    setAuthed(true);
    fetch("/api/dev/submissions")
      .then(async (r) => {
        const data = await r.json();
        if (r.ok && Array.isArray(data)) {
          setSubmissions(data);
        } else {
          setError(data.error || data.message || "Unbekannter Fehler");
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Layout><div className="p-8">Lade...</div></Layout>;
  if (error) return <Layout><div className="p-8 text-destructive">{error}</div></Layout>;
  if (!authed) return null;

  return (
    <Layout>
      <SEO title="DEV Submissions" description="DEV" />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Alle Kontakt- und WhatsApp-Anfragen</h1>
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
        <Button className="mt-6" onClick={() => window.location.reload()}>Neu laden</Button>
      </div>
    </Layout>
  );
}
