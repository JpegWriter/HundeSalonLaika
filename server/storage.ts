import { type User, type InsertUser, type Booking, type InsertBooking } from "@shared/schema";
import { randomUUID } from "crypto";
import { getPool } from "./db";

export interface Submission {
  id: number;
  type: string;            // 'contact_form' | 'whatsapp_contact' | 'whatsapp_booking' | 'whatsapp_cat_booking'
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  subject: string | null;
  message: string | null;
  page: string | null;
  createdAt: string;
}

export interface DailyFinanceEntry {
  id: string;
  date: string;
  sales: string;
  costs: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking methods
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;

  // Submission tracking
  addSubmission(data: Omit<Submission, "id" | "createdAt">): Promise<Submission>;
  getSubmissions(): Promise<Submission[]>;

  // Daily finance tracking
  upsertDailyFinanceEntry(data: { date: string; sales: string | number; costs: string | number; notes?: string | null }): Promise<DailyFinanceEntry>;
  getDailyFinanceEntries(): Promise<DailyFinanceEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bookings: Map<string, Booking>;
  private submissions: Submission[];
  private submissionId: number;
  private dailyFinance: Map<string, DailyFinanceEntry>;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.submissions = [];
    this.submissionId = 1;
    this.dailyFinance = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = { 
      ...insertBooking, 
      id,
      status: "pending",
      createdAt: new Date().toISOString(),
      notes: insertBooking.notes || null 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async addSubmission(data: Omit<Submission, "id" | "createdAt">): Promise<Submission> {
    const submission: Submission = {
      ...data,
      id: this.submissionId++,
      createdAt: new Date().toISOString(),
    };
    this.submissions.push(submission);

    // Also persist to PostgreSQL when available
    const pool = getPool();
    if (pool) {
      try {
        await pool.query(
          `INSERT INTO contact_submissions (type, first_name, last_name, email, phone, subject, message, page)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [data.type, data.firstName, data.lastName, data.email, data.phone, data.subject, data.message, data.page]
        );
      } catch (err) {
        console.error("[storage] DB insert failed, kept in memory:", err);
      }
    }

    return submission;
  }

  async getSubmissions(): Promise<Submission[]> {
    // Read from PostgreSQL when available, fall back to in-memory
    const pool = getPool();
    if (pool) {
      try {
        const result = await pool.query(
          `SELECT id, type, first_name AS "firstName", last_name AS "lastName", email, phone, subject, message, page, created_at AS "createdAt"
           FROM contact_submissions ORDER BY created_at DESC LIMIT 500`
        );
        return result.rows;
      } catch (err) {
        console.error("[storage] DB read failed, using in-memory:", err);
      }
    }
    return [...this.submissions].reverse();
  }

  async upsertDailyFinanceEntry(data: { date: string; sales: string | number; costs: string | number; notes?: string | null }): Promise<DailyFinanceEntry> {
    const now = new Date().toISOString();
    const cleanedEntry = {
      date: data.date,
      sales: Number(data.sales ?? 0).toFixed(2),
      costs: Number(data.costs ?? 0).toFixed(2),
      notes: data.notes ?? null,
    };

    const record: DailyFinanceEntry = {
      id: randomUUID(),
      date: cleanedEntry.date,
      sales: cleanedEntry.sales,
      costs: cleanedEntry.costs,
      notes: cleanedEntry.notes,
      createdAt: now,
      updatedAt: now,
    };

    const pool = getPool();
    if (pool) {
      try {
        const result = await pool.query(
          `INSERT INTO daily_finance (date, sales, costs, notes, updated_at)
           VALUES ($1, $2, $3, $4, NOW())
           ON CONFLICT (date)
           DO UPDATE SET sales = EXCLUDED.sales,
                         costs = EXCLUDED.costs,
                         notes = EXCLUDED.notes,
                         updated_at = NOW()
           RETURNING id, date, sales::text AS sales, costs::text AS costs, notes, created_at AS "createdAt", updated_at AS "updatedAt"`,
          [cleanedEntry.date, cleanedEntry.sales, cleanedEntry.costs, cleanedEntry.notes]
        );

        if (result.rows[0]) {
          const row = result.rows[0];
          const persisted: DailyFinanceEntry = {
            id: row.id,
            date: row.date,
            sales: row.sales,
            costs: row.costs,
            notes: row.notes,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
          };
          this.dailyFinance.set(persisted.date, persisted);
          return persisted;
        }
      } catch (err) {
        console.error("[storage] daily_finance DB upsert failed, keeping in memory:", err);
      }
    }

    this.dailyFinance.set(record.date, record);
    return record;
  }

  async getDailyFinanceEntries(): Promise<DailyFinanceEntry[]> {
    const pool = getPool();
    if (pool) {
      try {
        const result = await pool.query(
          `SELECT id, date, sales::text AS sales, costs::text AS costs, notes, created_at AS "createdAt", updated_at AS "updatedAt"
           FROM daily_finance
           ORDER BY date DESC`
        );
        return result.rows;
      } catch (err) {
        console.error("[storage] daily_finance DB read failed, using in-memory:", err);
      }
    }

    return Array.from(this.dailyFinance.values()).sort((a, b) => b.date.localeCompare(a.date));
  }
}

export const storage = new MemStorage();
