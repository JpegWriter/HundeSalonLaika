import { businessInfo } from "./business";

export interface FinanceReportEntry {
  date: string;
  sales: string | number;
  costs: string | number;
  notes?: string | null;
}

export interface FinanceReportRow {
  date: string;
  sales: number;
  costs: number;
  net: number;
  notes: string;
}

export interface FinanceReportTotals {
  sales: number;
  costs: number;
  net: number;
  days: number;
}

const euroFormatter = new Intl.NumberFormat("de-AT", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatEuro(value: number): string {
  return `${euroFormatter.format(value)} €`;
}

/** Accepts "2026-09-13" as well as full ISO timestamps and returns "2026-09-13". */
export function normalizeDate(value: string): string {
  if (!value) return "";
  const trimmed = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) return trimmed.slice(0, 10);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`;
}

export function formatDateDe(isoDate: string): string {
  const normalized = normalizeDate(isoDate);
  const [year, month, day] = normalized.split("-");
  return year && month && day ? `${day}.${month}.${year}` : normalized;
}

function toNumber(value: string | number | null | undefined): number {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric : 0;
}

/** Filters to the inclusive [from, to] range and sorts oldest first (bookkeeping order). */
export function buildReportRows(
  entries: FinanceReportEntry[],
  from: string,
  to: string,
): FinanceReportRow[] {
  return entries
    .map((entry) => {
      const sales = toNumber(entry.sales);
      const costs = toNumber(entry.costs);
      return {
        date: normalizeDate(entry.date),
        sales,
        costs,
        net: sales - costs,
        notes: (entry.notes || "").trim(),
      };
    })
    .filter((row) => row.date && (!from || row.date >= from) && (!to || row.date <= to))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function summarizeRows(rows: FinanceReportRow[]): FinanceReportTotals {
  const totals = rows.reduce(
    (acc, row) => ({
      sales: acc.sales + row.sales,
      costs: acc.costs + row.costs,
      net: acc.net + row.net,
    }),
    { sales: 0, costs: 0, net: 0 },
  );

  return {
    sales: Number(totals.sales.toFixed(2)),
    costs: Number(totals.costs.toFixed(2)),
    net: Number(totals.net.toFixed(2)),
    days: rows.length,
  };
}

const MONTH_NAMES = [
  "Jänner", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

export function groupByMonth(rows: FinanceReportRow[]) {
  const months = new Map<string, FinanceReportTotals & { label: string }>();

  for (const row of rows) {
    const key = row.date.slice(0, 7);
    const monthIndex = Number(key.slice(5, 7)) - 1;
    const current = months.get(key) || {
      label: `${MONTH_NAMES[monthIndex] ?? key} ${key.slice(0, 4)}`,
      sales: 0,
      costs: 0,
      net: 0,
      days: 0,
    };
    current.sales += row.sales;
    current.costs += row.costs;
    current.net += row.net;
    current.days += 1;
    months.set(key, current);
  }

  return Array.from(months.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([key, value]) => ({
      key,
      label: value.label,
      sales: Number(value.sales.toFixed(2)),
      costs: Number(value.costs.toFixed(2)),
      net: Number(value.net.toFixed(2)),
      days: value.days,
    }));
}

export function reportFileName(from: string, to: string, extension: string): string {
  return `Hundesalon-Laika_Umsatz-Kosten_${from || "alle"}_bis_${to || "alle"}.${extension}`;
}

// ---------------------------------------------------------------- CSV export

/** German Excel reads ";" as the column separator and "," as the decimal mark. */
function csvNumber(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

function csvCell(value: string | number): string {
  const raw = String(value ?? "");
  // Neutralise spreadsheet formula injection before quoting.
  const safe = /^[=+\-@\t\r]/.test(raw) ? `'${raw}` : raw;
  return `"${safe.replace(/"/g, '""')}"`;
}

export function buildFinanceCsv(rows: FinanceReportRow[], from: string, to: string): string {
  const totals = summarizeRows(rows);
  const lines: string[] = [];

  lines.push(csvCell(businessInfo.legalName));
  lines.push(csvCell(`${businessInfo.street}, ${businessInfo.postalCode} ${businessInfo.city}, ${businessInfo.country}`));
  lines.push(csvCell(`UID-Nr.: ${businessInfo.vatId}`) + ";" + csvCell(`Firmenbuch: ${businessInfo.companyRegisterNumber}`));
  lines.push(csvCell(`Inhaberin: ${businessInfo.owner}`) + ";" + csvCell(businessInfo.email));
  lines.push("");
  lines.push(csvCell("Umsatz- und Kostenaufstellung"));
  lines.push(csvCell("Zeitraum") + ";" + csvCell(`${formatDateDe(from)} – ${formatDateDe(to)}`));
  lines.push(csvCell("Erstellt am") + ";" + csvCell(formatDateDe(new Date().toISOString().slice(0, 10))));
  lines.push(csvCell("Währung") + ";" + csvCell("EUR"));
  lines.push("");
  lines.push(["Datum", "Umsatz", "Kosten", "Netto", "Notiz"].map(csvCell).join(";"));

  for (const row of rows) {
    lines.push(
      [
        csvCell(formatDateDe(row.date)),
        csvNumber(row.sales),
        csvNumber(row.costs),
        csvNumber(row.net),
        csvCell(row.notes),
      ].join(";"),
    );
  }

  lines.push("");
  lines.push(
    [csvCell("Summe"), csvNumber(totals.sales), csvNumber(totals.costs), csvNumber(totals.net), csvCell(`${totals.days} Tage`)].join(";"),
  );

  return lines.join("\r\n");
}

export function downloadFinanceCsv(rows: FinanceReportRow[], from: string, to: string): void {
  // The BOM makes Excel open the file as UTF-8 (umlauts stay intact).
  const blob = new Blob(["\uFEFF" + buildFinanceCsv(rows, from, to)], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = reportFileName(from, to, "csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ------------------------------------------------- Print / PDF export (A4)

function escapeHtml(value: string): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildFinanceReportHtml(rows: FinanceReportRow[], from: string, to: string): string {
  const totals = summarizeRows(rows);
  const months = groupByMonth(rows);
  const createdAt = formatDateDe(new Date().toISOString().slice(0, 10));
  const period = `${formatDateDe(from)} – ${formatDateDe(to)}`;
  const title = `Umsatz- und Kostenaufstellung ${period}`;

  const dailyRows = rows.length
    ? rows
        .map(
          (row) => `
            <tr>
              <td>${escapeHtml(formatDateDe(row.date))}</td>
              <td class="num">${escapeHtml(formatEuro(row.sales))}</td>
              <td class="num">${escapeHtml(formatEuro(row.costs))}</td>
              <td class="num ${row.net < 0 ? "negative" : ""}">${escapeHtml(formatEuro(row.net))}</td>
              <td class="note">${escapeHtml(row.notes) || "—"}</td>
            </tr>`,
        )
        .join("")
    : `<tr><td colspan="5" class="empty">Für diesen Zeitraum wurden keine Tageswerte erfasst.</td></tr>`;

  const monthlyBlock =
    months.length > 1
      ? `
        <h2>Monatsübersicht</h2>
        <table>
          <thead>
            <tr>
              <th>Monat</th>
              <th class="num">Umsatz</th>
              <th class="num">Kosten</th>
              <th class="num">Netto</th>
              <th class="num">Tage</th>
            </tr>
          </thead>
          <tbody>
            ${months
              .map(
                (month) => `
              <tr>
                <td>${escapeHtml(month.label)}</td>
                <td class="num">${escapeHtml(formatEuro(month.sales))}</td>
                <td class="num">${escapeHtml(formatEuro(month.costs))}</td>
                <td class="num ${month.net < 0 ? "negative" : ""}">${escapeHtml(formatEuro(month.net))}</td>
                <td class="num">${month.days}</td>
              </tr>`,
              )
              .join("")}
          </tbody>
        </table>`
      : "";

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>
  @page { size: A4; margin: 16mm 14mm 18mm; }
  * { box-sizing: border-box; }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #1c1917;
    font-size: 11px;
    line-height: 1.5;
    margin: 0;
    padding: 24px;
    background: #fff;
  }
  .sheet { max-width: 820px; margin: 0 auto; }
  header.letterhead {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    border-bottom: 2px solid #1c1917;
    padding-bottom: 14px;
  }
  .company-name { font-size: 17px; font-weight: 700; letter-spacing: .01em; margin: 0 0 2px; }
  .company-sub { color: #57534e; font-size: 10.5px; margin: 0; }
  .company-contact { text-align: right; font-size: 10.5px; color: #57534e; white-space: nowrap; }
  .doc-title { margin: 26px 0 4px; font-size: 20px; font-weight: 700; }
  .doc-meta { color: #57534e; margin: 0 0 20px; }
  .doc-meta strong { color: #1c1917; }
  .summary { display: flex; gap: 12px; margin-bottom: 26px; }
  .summary > div {
    flex: 1;
    border: 1px solid #d6d3d1;
    border-radius: 8px;
    padding: 12px 14px;
  }
  .summary .label { font-size: 10px; text-transform: uppercase; letter-spacing: .06em; color: #78716c; }
  .summary .value { font-size: 17px; font-weight: 700; margin-top: 4px; }
  .summary .value.negative { color: #b91c1c; }
  h2 { font-size: 13px; margin: 24px 0 8px; padding-bottom: 4px; border-bottom: 1px solid #d6d3d1; }
  table { width: 100%; border-collapse: collapse; }
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; }
  th, td { padding: 6px 8px; border-bottom: 1px solid #e7e5e4; text-align: left; vertical-align: top; }
  th { background: #f5f5f4; font-size: 10px; text-transform: uppercase; letter-spacing: .05em; color: #57534e; }
  td.num, th.num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
  td.negative { color: #b91c1c; }
  td.note { color: #57534e; }
  td.empty { text-align: center; color: #78716c; padding: 18px; }
  tfoot td { font-weight: 700; border-top: 2px solid #1c1917; border-bottom: none; background: #fafaf9; }
  footer.legal {
    margin-top: 28px;
    padding-top: 12px;
    border-top: 1px solid #d6d3d1;
    font-size: 9.5px;
    color: #78716c;
  }
  .signature { margin-top: 34px; display: flex; gap: 40px; page-break-inside: avoid; }
  .signature div { flex: 1; border-top: 1px solid #78716c; padding-top: 6px; font-size: 9.5px; color: #78716c; }
  @media print {
    body { padding: 0; }
    .no-print { display: none !important; }
  }
  .no-print { text-align: center; margin-bottom: 20px; }
  .no-print button {
    font: inherit; font-size: 13px; padding: 9px 18px; border-radius: 8px;
    border: 1px solid #1c1917; background: #1c1917; color: #fff; cursor: pointer;
  }
  .no-print span { display: block; margin-top: 8px; color: #78716c; font-size: 11px; }
</style>
</head>
<body>
<div class="sheet">
  <div class="no-print">
    <button type="button" onclick="window.print()">Als PDF speichern / drucken</button>
    <span>Im Druckdialog als Ziel &bdquo;Als PDF speichern&ldquo; wählen.</span>
  </div>

  <header class="letterhead">
    <div>
      <p class="company-name">${escapeHtml(businessInfo.legalName)}</p>
      <p class="company-sub">Inhaberin: ${escapeHtml(businessInfo.owner)} &middot; ${escapeHtml(businessInfo.legalForm)}</p>
      <p class="company-sub">${escapeHtml(businessInfo.street)}, ${escapeHtml(businessInfo.postalCode)} ${escapeHtml(businessInfo.city)}, ${escapeHtml(businessInfo.country)}</p>
    </div>
    <div class="company-contact">
      ${escapeHtml(businessInfo.phone)}<br />
      ${escapeHtml(businessInfo.email)}<br />
      UID-Nr.: ${escapeHtml(businessInfo.vatId)}<br />
      ${escapeHtml(businessInfo.companyRegisterNumber)} (FB-Gericht ${escapeHtml(businessInfo.companyRegisterCourt)})
    </div>
  </header>

  <h1 class="doc-title">Umsatz- und Kostenaufstellung</h1>
  <p class="doc-meta">
    Zeitraum: <strong>${escapeHtml(period)}</strong> &nbsp;&middot;&nbsp;
    Erstellt am: <strong>${escapeHtml(createdAt)}</strong> &nbsp;&middot;&nbsp;
    Währung: <strong>EUR</strong> &nbsp;&middot;&nbsp;
    Erfasste Tage: <strong>${totals.days}</strong>
  </p>

  <div class="summary">
    <div><div class="label">Umsatz gesamt</div><div class="value">${escapeHtml(formatEuro(totals.sales))}</div></div>
    <div><div class="label">Kosten gesamt</div><div class="value">${escapeHtml(formatEuro(totals.costs))}</div></div>
    <div><div class="label">Netto (Umsatz &minus; Kosten)</div><div class="value ${totals.net < 0 ? "negative" : ""}">${escapeHtml(formatEuro(totals.net))}</div></div>
  </div>

  ${monthlyBlock}

  <h2>Tagesaufstellung</h2>
  <table>
    <thead>
      <tr>
        <th>Datum</th>
        <th class="num">Umsatz</th>
        <th class="num">Kosten</th>
        <th class="num">Netto</th>
        <th>Notiz</th>
      </tr>
    </thead>
    <tbody>${dailyRows}</tbody>
    <tfoot>
      <tr>
        <td>Summe</td>
        <td class="num">${escapeHtml(formatEuro(totals.sales))}</td>
        <td class="num">${escapeHtml(formatEuro(totals.costs))}</td>
        <td class="num">${escapeHtml(formatEuro(totals.net))}</td>
        <td>${totals.days} Tage</td>
      </tr>
    </tfoot>
  </table>

  <div class="signature">
    <div>Ort, Datum</div>
    <div>Unterschrift ${escapeHtml(businessInfo.owner)}</div>
  </div>

  <footer class="legal">
    ${escapeHtml(businessInfo.legalName)} &middot; ${escapeHtml(businessInfo.street)}, ${escapeHtml(businessInfo.postalCode)} ${escapeHtml(businessInfo.city)} &middot;
    UID-Nr. ${escapeHtml(businessInfo.vatId)} &middot; ${escapeHtml(businessInfo.companyRegisterNumber)}, FB-Gericht ${escapeHtml(businessInfo.companyRegisterCourt)} &middot;
    Bankverbindung: ${escapeHtml(businessInfo.bank)}<br />
    Diese Aufstellung wurde aus der internen Tageserfassung des Unternehmens erzeugt und dient als Grundlage für die Buchhaltung. Alle Beträge in EUR.
  </footer>
</div>
</body>
</html>`;
}

export function openFinanceReportPrintView(rows: FinanceReportRow[], from: string, to: string): boolean {
  const printWindow = window.open("", "_blank", "width=1024,height=768");
  if (!printWindow) return false;

  printWindow.document.open();
  printWindow.document.write(buildFinanceReportHtml(rows, from, to));
  printWindow.document.close();
  printWindow.focus();
  return true;
}
