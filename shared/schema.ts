import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  dogName: text("dog_name").notNull(),
  breed: text("breed").notNull(),
  serviceId: text("service_id").notNull(),
  serviceName: text("service_name").notNull(),
  size: text("size").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  price: text("price").notNull(),
  notes: text("notes"),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const insertBookingSchema = createInsertSchema(bookings).pick({
  customerName: true,
  email: true,
  phone: true,
  dogName: true,
  breed: true,
  serviceId: true,
  serviceName: true,
  size: true,
  date: true,
  time: true,
  price: true,
  notes: true,
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
