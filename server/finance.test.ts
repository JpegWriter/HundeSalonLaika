import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { dailyFinanceEntrySchema, summarizeFinanceEntries } from "./finance";

describe("daily finance helpers", () => {
  it("accepts manual daily sales and cost data", () => {
    const parsed = dailyFinanceEntrySchema.parse({
      date: "2026-09-13",
      sales: "2450.50",
      costs: "670",
      notes: "Grooming + supplies",
    });

    assert.equal(parsed.date, "2026-09-13");
    assert.equal(parsed.sales, 2450.5);
    assert.equal(parsed.costs, 670);
  });

  it("summarizes sales, costs, and net values across entries", () => {
    const summary = summarizeFinanceEntries([
      { date: "2026-09-12", sales: "1200.00", costs: "320.25", notes: "" },
      { date: "2026-09-13", sales: "2450.50", costs: "670.00", notes: "" },
    ]);

    assert.equal(summary.totalSales, 3650.5);
    assert.equal(summary.totalCosts, 990.25);
    assert.equal(summary.net, 2660.25);
  });
});
