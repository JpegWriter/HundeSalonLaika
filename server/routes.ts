import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { checkAvailability, createCalendarEvent } from "./googleCalendar";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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

  return httpServer;
}
