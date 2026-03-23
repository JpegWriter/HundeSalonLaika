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
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bookings: Map<string, Booking>;
  private submissions: Submission[];
  private submissionId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.submissions = [];
    this.submissionId = 1;
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
}

export const storage = new MemStorage();
