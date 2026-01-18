import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  PawPrint,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { siteData } from "@/lib/data";

const customerSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail"),
  phone: z.string().min(5, "Telefonnummer ist erforderlich"),
  catName: z.string().min(1, "Name der Katze ist erforderlich"),
  breed: z.string().min(1, "Rasse ist erforderlich"),
  notes: z.string().optional(),
  policy: z
    .boolean()
    .refine((val) => val === true, "Bitte stimmen Sie den Bedingungen zu"),
});

type CustomerFormData = z.infer<typeof customerSchema>;

const steps = [
  "Service",
  "Wunschtermin",
  "Daten",
  "Anfrage",
  "Bestätigung",
];

const catServices = [
  {
    id: "cat-bath",
    title: "Komplettpflege inkl. Erfrischungsbad, Frisch & Flauschig (Katze)",
    description:
      "Unabhängig von Lang- oder Kurzhaar, Unterwolle, Trimmen oder Felltyp.",
  },
];

export function CatBookingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [paymentMethod] = useState<"onsite">("onsite");
  const { toast } = useToast();

  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      policy: false,
    },
  });

  const selectedService = catServices.find((s) => s.id === selectedServiceId);

  const nextStep = () => {
    if (currentStep === 0 && !selectedServiceId) {
      toast({
        title: "Bitte wählen Sie einen Katzen-Service aus",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 1 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Bitte wählen Sie Datum und Uhrzeit",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data: CustomerFormData) => {
    nextStep(); // Go to payment
  };

  const buildWhatsAppText = () => {
    const name = form.getValues("name");
    const phone = form.getValues("phone");
    const email = form.getValues("email");
    const catName = form.getValues("catName");
    const breed = form.getValues("breed");
    const notes = form.getValues("notes") || "";
    const serviceTitle = selectedService?.title ?? "";
    const dateStr = selectedDate ? format(selectedDate, "dd.MM.yyyy") : "";
    return (
      `Neue Katzen-Terminanfrage im Hundesalon Laika:\n\n` +
      `Kunde: ${name}\n` +
      `Telefon: ${phone}\n` +
      `E-Mail: ${email}\n\n` +
      `Katze: ${catName} (${breed})\n` +
      `Service: ${serviceTitle}\n` +
      `Wunschtermin: ${dateStr} um ${selectedTime} Uhr\n` +
      `Zahlungsmethode: Vor Ort bezahlen (bar oder Sofort-Überweisung). Bei Neukunden kann eine Vorauszahlung erforderlich sein.\n\n` +
      (notes ? `Hinweise des Kunden:\n${notes}\n` : "")
    );
  };

  const getWhatsAppLink = () => {
    const text = buildWhatsAppText();
    return `https://wa.me/436508613405?text=${encodeURIComponent(text)}`;
  };

  const handlePayment = async () => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    const baseNotes = form.getValues("notes") || "";
    const paymentNote =
      "Zahlungsmethode: Vor Ort bezahlen (bar oder Sofort-Überweisung). Bei Neukunden kann eine Vorauszahlung erforderlich sein.";
    const combinedNotes = baseNotes ? `${baseNotes}\n\n${paymentNote}` : paymentNote;

    const bookingData = {
      customerName: form.getValues("name"),
      email: form.getValues("email"),
      phone: form.getValues("phone"),
      dogName: form.getValues("catName"), // Feldname in DB, inhaltlich Katze
      breed: form.getValues("breed"),
      serviceId: selectedService.id,
      serviceName: selectedService.title,
      size: "n/a",
      date: format(selectedDate, "dd.MM.yyyy"),
      time: selectedTime,
      price: "0",
      notes: combinedNotes,
    };

    try {
      await apiRequest("POST", "/api/bookings", bookingData);
    } catch (error) {
      console.warn(
        "Cat booking: backend not reachable, using WhatsApp/mail only.",
        error,
      );
    }

    const waUrl = getWhatsAppLink();
    window.open(waUrl, "_blank");

    const emailSubject = encodeURIComponent(
      "Neue Katzen-Terminanfrage (Vor Ort bezahlen)",
    );
    const emailBody = encodeURIComponent(buildWhatsAppText());
    window.location.href = `mailto:${encodeURIComponent(
      siteData.email,
    )}?subject=${emailSubject}&body=${emailBody}`;

    nextStep();
  };

  // Fetch slots when date changes (same logic as Hund, mit Fallback)
  useEffect(() => {
    if (selectedDate) {
      const fetchSlots = async () => {
        setIsLoadingSlots(true);
        try {
          const dateStr = format(selectedDate, "yyyy-MM-dd");
          const response = await apiRequest(
            "GET",
            `/api/availability?date=${dateStr}`,
          );
          const data = await response.json();
          setAvailableSlots(data.slots || []);
        } catch (error) {
          console.error("Error fetching slots (cat):", error);
          setAvailableSlots(["09:00", "09:30", "11:00", "13:00", "14:30", "16:00"]);
        } finally {
          setIsLoadingSlots(false);
        }
      };

      fetchSlots();
      setSelectedTime(null);
    }
  }, [selectedDate]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {catServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={cn(
                  "cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-md bg-white",
                  selectedServiceId === service.id
                    ? "border-primary bg-primary/5"
                    : "border-border",
                )}
              >
                <div className="flex gap-4 items-start">
                  <div className="h-14 w-14 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                    <PawPrint className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl border border-border">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-none w-full flex justify-center"
                disabled={(date) =>
                  date < new Date() || date.getDay() === 0
                } // Disable past & Sundays
                locale={de}
              />
            </div>
            <div className="space-y-4">
              {!selectedDate ? (
                <p className="text-muted-foreground text-sm">
                  Bitte wählen Sie zuerst ein Datum.
                </p>
              ) : isLoadingSlots ? (
                <div className="flex justify-center py-4">
                  <span className="loading loading-spinner text-primary">
                    Lade Verfügbarkeit...
                  </span>
                </div>
              ) : availableSlots.length === 0 ? (
                <p className="text-destructive text-sm">
                  Keine Termine verfügbar.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {availableSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        selectedTime === time ? "bg-primary text-white" : "",
                      )}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <form
            id="cat-customer-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-w-lg mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ihr Name</Label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name && (
                  <span className="text-destructive text-xs">
                    {form.formState.errors.name.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" {...form.register("phone")} />
                {form.formState.errors.phone && (
                  <span className="text-destructive text-xs">
                    {form.formState.errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email && (
                <span className="text-destructive text-xs">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="catName">Name der Katze</Label>
                <Input id="catName" {...form.register("catName")} />
                {form.formState.errors.catName && (
                  <span className="text-destructive text-xs">
                    {form.formState.errors.catName.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="breed">Rasse</Label>
                <Input id="breed" {...form.register("breed")} />
                {form.formState.errors.breed && (
                  <span className="text-destructive text-xs">
                    {form.formState.errors.breed.message}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Anmerkungen (Optional)</Label>
              <Input
                id="notes"
                placeholder="Kg, Alter, Rasse, etwaige gesundheitliche Einschränkungen, bisherige Erfahrungen im Tiersalon und in der Tierarzt-Praxis"
                {...form.register("notes")}
              />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="policy"
                checked={form.watch("policy")}
                onCheckedChange={(c) =>
                  form.setValue("policy", c as boolean)
                }
              />
              <Label
                htmlFor="policy"
                className="text-sm text-muted-foreground"
              >
                Ich stimme den Stornierungsbedingungen zu. Hundename / Katzenname
              </Label>
            </div>
            {form.formState.errors.policy && (
              <span className="text-destructive text-xs block">
                {form.formState.errors.policy.message}
              </span>
            )}
          </form>
        );

      case 3:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="bg-secondary/20 p-6 rounded-xl border border-border">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Zahlung</span>
                <span className="font-serif text-2xl font-bold text-primary">
                  Vor Ort
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold mb-2">Zahlungsart</h4>
              <div className="grid gap-2">
                <div className="border p-4 rounded-lg flex items-center gap-3 bg-white border-primary bg-primary/5">
                  <ShoppingBag className="text-primary" />
                  <div>
                    <p className="font-medium">Vor Ort bezahlen</p>
                    <p className="text-xs text-muted-foreground">
                      Die Bezahlung erfolgt direkt im Salon – bar oder
                      Sofort-Überweisung. Bei Neukunden behalten wir uns das
                      Recht vor, eine Vorauszahlung zu verlangen, die am Tag
                      der Pflege mit dem tatsächlichen Endpreis abgerechnet wird.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6 py-8">
            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={40} />
            </div>
            <h2 className="font-serif text-3xl font-bold">
              Katzen-Terminanfrage übermittelt!
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Vielen Dank für Ihre Terminanfrage, {form.getValues("name")}. Wir
              freuen uns auf Sie und {form.getValues("catName")} am{" "}
              {selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""} um{" "}
              {selectedTime} Uhr.
            </p>
            <div className="bg-secondary/20 p-6 rounded-xl max-w-md mx-auto text-left space-y-2 text-sm mt-8">
              <p>
                <strong>Service:</strong> {selectedService?.title}
              </p>
              <p>
                <strong>Wunschtermin:</strong>{" "}
                {selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""} um{" "}
                {selectedTime}
              </p>
              <p>
                <strong>Ort:</strong> {siteData.address}
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-xs mx-auto pt-4">
              <Button
                onClick={() => window.open(getWhatsAppLink(), "_blank")}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Terminanfrage per WhatsApp senden
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                className="w-full"
              >
                Zurück zur Startseite
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex justify-between min-w-[600px] px-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 relative z-10"
            >
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300",
                  currentStep >= idx
                    ? "bg-primary text-white"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                {idx + 1}
              </div>
              <span
                className={cn(
                  "text-xs font-medium transition-colors duration-300",
                  currentStep >= idx ? "text-primary" : "text-muted-foreground",
                )}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <Card className="min-h-[400px] shadow-lg border-border/50">
        <CardContent className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Zurück
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button
            onClick={
              currentStep === 2
                ? form.handleSubmit(onSubmit)
                : currentStep === steps.length - 2
                ? handlePayment
                : nextStep
            }
            className="flex items-center gap-2"
          >
            {currentStep === steps.length - 2 ? "Terminanfrage senden" : "Weiter"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}


