import { google } from "googleapis";

// Scopes required for Google Calendar API
const SCOPES = ["https://www.googleapis.com/auth/calendar"];

// Helper to get authenticated client
const getAuthClient = () => {
  const credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Handle newline characters in env var
  };

  return new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    SCOPES
  );
};

export const calendar = google.calendar({ version: "v3", auth: getAuthClient() });
export const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

export async function checkAvailability(date: string) {
  if (!CALENDAR_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.warn("Google Calendar credentials missing. Skipping availability check.");
    // Return all slots as available if credentials are missing (fallback)
    // Or return empty to force setup. Let's return mock slots for now or handle gracefully.
    return null;
  }

  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  try {
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    throw error;
  }
}

export async function createCalendarEvent(booking: any) {
  if (!CALENDAR_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.warn("Google Calendar credentials missing. Skipping event creation.");
    return;
  }

  // Parse date and time to create start/end ISO strings
  // Format expected: "DD.MM.YYYY" and "HH:mm"
  const [day, month, year] = booking.date.split(".");
  const [hours, minutes] = booking.time.split(":");
  
  const startDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  const endDate = new Date(startDate.getTime() + 90 * 60000); // Assuming 90 mins duration

  const event = {
    summary: `Hundesalon: ${booking.serviceName} - ${booking.customerName} (${booking.dogName})`,
    description: `
      Kunde: ${booking.customerName}
      Hund: ${booking.dogName} (${booking.breed}, ${booking.size})
      Service: ${booking.serviceName}
      Telefon: ${booking.phone}
      Email: ${booking.email}
      Notizen: ${booking.notes || "Keine"}
    `,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: "Europe/Vienna", // Adjust time zone as needed
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: "Europe/Vienna",
    },
  };

  try {
    await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: event,
    });
    console.log("Calendar event created successfully");
  } catch (error) {
    console.error("Error creating calendar event:", error);
    // Don't throw, just log. Booking should still proceed.
  }
}

