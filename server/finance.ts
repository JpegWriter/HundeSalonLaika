import { z } from "zod";

export const dailyFinanceEntrySchema = z.object({
  date: z.string().min(1, "Datum ist erforderlich"),
  sales: z.coerce.number().min(0, "Verkauf darf nicht negativ sein").finite(),
  costs: z.coerce.number().min(0, "Kosten dürfen nicht negativ sein").finite(),
  notes: z.string().max(1000, "Notiz zu lang").optional().default(""),
});

export type DailyFinanceEntryInput = z.infer<typeof dailyFinanceEntrySchema>;

export type FinanceEntryLike = {
  date: string;
  sales: number | string | null | undefined;
  costs: number | string | null | undefined;
  notes?: string | null;
};

export function toCurrencyValue(value: number | string | null | undefined): number {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric : 0;
}

export function summarizeFinanceEntries(entries: FinanceEntryLike[]) {
  const totalSales = entries.reduce((sum, entry) => sum + toCurrencyValue(entry.sales), 0);
  const totalCosts = entries.reduce((sum, entry) => sum + toCurrencyValue(entry.costs), 0);

  return {
    totalSales: Number(totalSales.toFixed(2)),
    totalCosts: Number(totalCosts.toFixed(2)),
    net: Number((totalSales - totalCosts).toFixed(2)),
    entriesCount: entries.length,
  };
}
