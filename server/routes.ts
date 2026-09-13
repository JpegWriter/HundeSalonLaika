import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { checkAvailability, createCalendarEvent } from "./googleCalendar";
import { z } from "zod";
import { initDailyFinanceTable, initSubmissionsTable } from "./db";
import { dailyFinanceEntrySchema } from "./finance";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Initialize the persistence tables in the background
  initSubmissionsTable().catch(console.error);
  initDailyFinanceTable().catch(console.error);

  const contactSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
  });

  app.get("/api/availability", async (req, res) => {
    const { date } = req.query;
    if (!date || typeof date !== 'string') {
      return res.status(400).json({ message: "Date is required" });
    }

    try {
      const busyEvents = await checkAvailability(date);
      
      // Default slots
      const allSlots = ["09:00", "09:30", "11:00", "13:00", "14:30", "16:00"];
      
      if (!busyEvents) {
        // If credentials are missing or error, return all slots (or handle differently)
        return res.json({ slots: allSlots });
      }

      // Filter slots
      const availableSlots = allSlots.filter(slot => {
        // Parse slot time
        const [hours, minutes] = slot.split(":").map(Number);
        const slotTime = new Date(date);
        slotTime.setHours(hours, minutes, 0, 0);
        
        // Assume 90 min duration for service
        const slotEnd = new Date(slotTime.getTime() + 90 * 60000);

        // Check if overlaps with any busy event
        const isBusy = busyEvents.some(event => {
          if (!event.start?.dateTime || !event.end?.dateTime) return false;
          
          const eventStart = new Date(event.start.dateTime);
          const eventEnd = new Date(event.end.dateTime);

          return (
            (slotTime >= eventStart && slotTime < eventEnd) || // Slot starts during event
            (slotEnd > eventStart && slotEnd <= eventEnd) ||   // Slot ends during event
            (slotTime <= eventStart && slotEnd >= eventEnd)    // Slot encompasses event
          );
        });

        return !isBusy;
      });

      res.json({ slots: availableSlots });
    } catch (error) {
      console.error("Availability check error:", error);
      res.status(500).json({ message: "Error checking availability" });
    }
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);

      // Add to Google Calendar
      await createCalendarEvent(booking);

      // Email sending logic
      // Only attempt to send email if credentials are present
      if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: booking.email, // Send to customer
          subject: "Buchungsbestätigung - Hundesalon Laika",
          text: `Hallo ${booking.customerName},\n\nvielen Dank für Ihre Buchung!\n\nDetails:\nService: ${booking.serviceName}\nDatum: ${booking.date} um ${booking.time}\nPreis: ${booking.price}€\n\nWir freuen uns auf Sie und ${booking.dogName}!\n\nMit freundlichen Grüßen,\nIhr Hundesalon Laika Team`,
        };
        
        // Also send to owner
        const ownerMailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.GMAIL_USER, // Send copy to owner
          subject: `Neue Buchung: ${booking.customerName}`,
          text: `Neue Buchung erhalten!\n\nKunde: ${booking.customerName}\nEmail: ${booking.email}\nTelefon: ${booking.phone}\nHund: ${booking.dogName} (${booking.breed}, ${booking.size})\nService: ${booking.serviceName}\nDatum: ${booking.date} um ${booking.time}\nPreis: ${booking.price}€\nNotizen: ${booking.notes || "Keine"}`,
        };

        try {
          await transporter.sendMail(mailOptions);
          await transporter.sendMail(ownerMailOptions);
          console.log("Emails sent successfully");
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          // Don't fail the request if email fails, but log it
        }
      } else {
        console.log("Gmail credentials not found, skipping email sending.");
      }

      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      // Log the contact form submission
      await storage.addSubmission({
        type: "contact_form",
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: null,
        subject: data.subject,
        message: data.message,
        page: "contact",
      });

      if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });

        const ownerMail = {
          from: process.env.GMAIL_USER,
          to: process.env.GMAIL_USER,
          replyTo: data.email,
          subject: `[Kontaktformular] ${data.subject} - ${data.firstName} ${data.lastName}`,
          text: `Neue Anfrage über das Kontaktformular:\n\nName: ${data.firstName} ${data.lastName}\nE-Mail: ${data.email}\nBetreff: ${data.subject}\n\nNachricht:\n${data.message}\n`,
        };

        try {
          await transporter.sendMail(ownerMail);
        } catch (emailError) {
          console.error("Error sending contact email:", emailError);
          // continue, but still answer success so user doesn't see an error
        }
      } else {
        console.log("Gmail credentials not found, skipping contact email sending.");
      }

      res.status(200).json({ ok: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Ungültige Eingabe", issues: error.issues });
      }
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // ── Submission tracking ──────────────────────────────────
  const trackSchema = z.object({
    type: z.string().min(1),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().optional(),
    page: z.string().optional(),
  });

  app.post("/api/track", async (req, res) => {
    try {
      const data = trackSchema.parse(req.body);
      const submission = await storage.addSubmission({
        type: data.type,
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        email: data.email || null,
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message || null,
        page: data.page || null,
      });
      res.status(201).json({ ok: true, id: submission.id });
    } catch (error) {
      console.error("Track error:", error);
      res.status(400).json({ message: "Invalid tracking data" });
    }
  });

  app.get("/api/dev/stats", async (_req, res) => {
    const pool = (await import("./db")).getPool();
    if (!pool) {
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
      await pool.query(`
        CREATE TABLE IF NOT EXISTS page_views (
          id SERIAL PRIMARY KEY,
          path TEXT NOT NULL,
          referrer TEXT,
          user_agent TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )
      `);

      const [totalRes, todayRes, last7Res, topPagesRes, viewsByDayRes, totalSubRes, subByTypeRes] = await Promise.all([
        pool.query(`SELECT COUNT(*) AS count FROM page_views`),
        pool.query(`SELECT COUNT(*) AS count FROM page_views WHERE created_at >= CURRENT_DATE`),
        pool.query(`SELECT COUNT(*) AS count FROM page_views WHERE created_at >= NOW() - INTERVAL '7 days'`),
        pool.query(`
          SELECT path, COUNT(*) AS views
          FROM page_views
          WHERE created_at >= NOW() - INTERVAL '30 days'
          GROUP BY path
          ORDER BY views DESC
          LIMIT 10
        `),
        pool.query(`
          SELECT DATE(created_at) AS date, COUNT(*) AS views
          FROM page_views
          WHERE created_at >= NOW() - INTERVAL '14 days'
          GROUP BY DATE(created_at)
          ORDER BY date DESC
        `),
        pool.query(`SELECT COUNT(*) AS count FROM contact_submissions`).catch(() => ({ rows: [{ count: 0 }] })),
        pool.query(`
          SELECT type, COUNT(*) AS count
          FROM contact_submissions
          GROUP BY type
          ORDER BY count DESC
        `).catch(() => ({ rows: [] })),
      ]);

      return res.status(200).json({
        totalViews: parseInt(totalRes.rows[0].count, 10) || 0,
        todayViews: parseInt(todayRes.rows[0].count, 10) || 0,
        last7DaysViews: parseInt(last7Res.rows[0].count, 10) || 0,
        topPages: topPagesRes.rows,
        viewsByDay: viewsByDayRes.rows,
        totalSubmissions: parseInt(totalSubRes.rows[0].count, 10) || 0,
        submissionsByType: subByTypeRes.rows,
      });
    } catch (error) {
      console.error("Dev stats error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Dev page – retrieve all submissions
  app.get("/api/dev/submissions", async (_req, res) => {
    try {
      const submissions = await storage.getSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Dev submissions error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get("/api/dev/finance", async (_req, res) => {
    try {
      const entries = await storage.getDailyFinanceEntries();
      res.json(entries);
    } catch (error) {
      console.error("Dev finance read error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post("/api/dev/finance", async (req, res) => {
    try {
      const parsed = dailyFinanceEntrySchema.parse(req.body);
      const entry = await storage.upsertDailyFinanceEntry({
        date: parsed.date,
        sales: parsed.sales,
        costs: parsed.costs,
        notes: parsed.notes || null,
      });
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Ungültige Eingabe", issues: error.issues });
      }
      console.error("Dev finance write error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return httpServer;
}
