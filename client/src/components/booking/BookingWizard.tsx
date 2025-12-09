import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, addDays } from "date-fns";
import { de } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services, pricingTiers } from "@/lib/data";
import { Check, ChevronLeft, ChevronRight, CreditCard, ShoppingBag, Calendar as CalendarIcon, User, Dog } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Schema for Customer Info
const customerSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail"),
  phone: z.string().min(5, "Telefonnummer ist erforderlich"),
  dogName: z.string().min(1, "Name des Hundes ist erforderlich"),
  breed: z.string().min(1, "Rasse ist erforderlich"),
  notes: z.string().optional(),
  policy: z.boolean().refine(val => val === true, "Bitte stimmen Sie den Bedingungen zu"),
});

type CustomerFormData = z.infer<typeof customerSchema>;

const steps = [
  "Service",
  "Größe",
  "Warenkorb",
  "Termin",
  "Daten",
  "Zahlung",
  "Bestätigung"
];

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large" | "xl" | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      policy: false
    }
  });

  const selectedService = services.find(s => s.id === selectedServiceId);
  
  const getPrice = () => {
    if (!selectedService || !selectedSize) return 0;
    const tier = selectedService.category === "Kurzhaar" ? pricingTiers.shortHair : pricingTiers.longHair;
    return tier[selectedSize];
  };

  const nextStep = () => {
    if (currentStep === 0 && !selectedServiceId) {
      toast({ title: "Bitte wählen Sie einen Service aus", variant: "destructive" });
      return;
    }
    if (currentStep === 1 && !selectedSize) {
      toast({ title: "Bitte wählen Sie die Größe Ihres Hundes", variant: "destructive" });
      return;
    }
    if (currentStep === 3 && (!selectedDate || !selectedTime)) {
      toast({ title: "Bitte wählen Sie Datum und Uhrzeit", variant: "destructive" });
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);

  const onSubmit = (data: CustomerFormData) => {
    nextStep(); // Go to payment
  };

  const handlePayment = () => {
    // Mock payment processing
    setTimeout(() => {
      nextStep(); // Go to confirmation
    }, 1500);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0: // Service Selection
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => (
              <div 
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={cn(
                  "cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-md",
                  selectedServiceId === service.id ? "border-primary bg-primary/5" : "border-border bg-white"
                )}
              >
                <div className="flex gap-4 items-start">
                  <div className="h-20 w-20 shrink-0 rounded-lg overflow-hidden bg-secondary">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{service.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDescription}</p>
                    <p className="mt-2 font-medium text-primary">Ab €{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 1: // Size Selection
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-center">Wie groß ist Ihr Hund?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: "small", label: "Klein", desc: "Bis 10kg", price: selectedService?.category === "Kurzhaar" ? pricingTiers.shortHair.small : pricingTiers.longHair.small },
                { id: "medium", label: "Mittel", desc: "10-25kg", price: selectedService?.category === "Kurzhaar" ? pricingTiers.shortHair.medium : pricingTiers.longHair.medium },
                { id: "large", label: "Groß", desc: "25-40kg", price: selectedService?.category === "Kurzhaar" ? pricingTiers.shortHair.large : pricingTiers.longHair.large },
                { id: "xl", label: "Riesig", desc: "Über 40kg", price: selectedService?.category === "Kurzhaar" ? pricingTiers.shortHair.xl : pricingTiers.longHair.xl },
              ].map((size) => (
                <div 
                  key={size.id}
                  onClick={() => setSelectedSize(size.id as any)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-6 text-center transition-all hover:shadow-md flex flex-col items-center justify-center gap-2",
                    selectedSize === size.id ? "border-primary bg-primary/5" : "border-border bg-white"
                  )}
                >
                  <Dog size={32} className={cn(selectedSize === size.id ? "text-primary" : "text-muted-foreground")} />
                  <span className="font-bold">{size.label}</span>
                  <span className="text-xs text-muted-foreground">{size.desc}</span>
                  <span className="text-primary font-medium">€{size.price}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 2: // Cart Summary
        return (
          <div className="max-w-md mx-auto bg-white rounded-xl border border-border p-6 shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 flex items-center gap-2">
              <ShoppingBag className="text-primary" /> Zusammenfassung
            </h3>
            <div className="space-y-4 divide-y divide-border">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Service</span>
                <span className="font-medium text-right">{selectedService?.title}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Größe</span>
                <span className="font-medium capitalize">{selectedSize}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Dauer ca.</span>
                <span className="font-medium">90 Min.</span>
              </div>
              <div className="flex justify-between pt-4 text-lg font-bold">
                <span>Gesamt</span>
                <span className="text-primary">€{getPrice()}</span>
              </div>
            </div>
          </div>
        );

      case 3: // Calendar
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl border border-border">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-none w-full flex justify-center"
                disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                locale={de}
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-serif font-bold">Verfügbare Zeiten</h4>
              {!selectedDate ? (
                <p className="text-muted-foreground text-sm">Bitte wählen Sie zuerst ein Datum.</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {["09:00", "09:30", "11:00", "13:00", "14:30", "16:00"].map(time => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className={cn(selectedTime === time ? "bg-primary text-white" : "")}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 4: // Customer Info
        return (
          <form id="customer-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ihr Name</Label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name && <span className="text-destructive text-xs">{form.formState.errors.name.message}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" {...form.register("phone")} />
                {form.formState.errors.phone && <span className="text-destructive text-xs">{form.formState.errors.phone.message}</span>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email && <span className="text-destructive text-xs">{form.formState.errors.email.message}</span>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dogName">Hundename</Label>
                <Input id="dogName" {...form.register("dogName")} />
                {form.formState.errors.dogName && <span className="text-destructive text-xs">{form.formState.errors.dogName.message}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="breed">Rasse</Label>
                <Input id="breed" {...form.register("breed")} />
                {form.formState.errors.breed && <span className="text-destructive text-xs">{form.formState.errors.breed.message}</span>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Anmerkungen (Optional)</Label>
              <Input id="notes" {...form.register("notes")} />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="policy" checked={form.watch("policy")} onCheckedChange={(c) => form.setValue("policy", c as boolean)} />
              <Label htmlFor="policy" className="text-sm text-muted-foreground">Ich stimme den Stornierungsbedingungen zu.</Label>
            </div>
            {form.formState.errors.policy && <span className="text-destructive text-xs block">{form.formState.errors.policy.message}</span>}
          </form>
        );

      case 5: // Payment
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="bg-secondary/20 p-6 rounded-xl border border-border">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Gesamtsumme</span>
                <span className="font-serif text-2xl font-bold text-primary">€{getPrice()}</span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Gutscheincode" />
                  <Button variant="outline">Einlösen</Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold mb-2">Zahlungsmethode wählen</h4>
              <div className="grid gap-2">
                <div className="border p-4 rounded-lg flex items-center gap-3 cursor-pointer hover:border-primary transition-colors bg-white">
                  <CreditCard className="text-primary" />
                  <div>
                    <p className="font-medium">Kreditkarte</p>
                    <p className="text-xs text-muted-foreground">Sichere Zahlung via Stripe</p>
                  </div>
                </div>
                <div className="border p-4 rounded-lg flex items-center gap-3 cursor-pointer hover:border-primary transition-colors bg-white">
                  <ShoppingBag className="text-primary" />
                  <div>
                    <p className="font-medium">Vor Ort bezahlen</p>
                    <p className="text-xs text-muted-foreground">Bar oder Karte im Salon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6: // Confirmation
        return (
          <div className="text-center space-y-6 py-8">
            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={40} />
            </div>
            <h2 className="font-serif text-3xl font-bold">Buchung bestätigt!</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Vielen Dank für Ihre Buchung, {form.getValues("name")}. Wir freuen uns auf Sie und {form.getValues("dogName")} am {selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""} um {selectedTime} Uhr.
            </p>
            <div className="bg-secondary/20 p-6 rounded-xl max-w-md mx-auto text-left space-y-2 text-sm mt-8">
              <p><strong>Service:</strong> {selectedService?.title}</p>
              <p><strong>Datum:</strong> {selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""}</p>
              <p><strong>Uhrzeit:</strong> {selectedTime}</p>
              <p><strong>Ort:</strong> Premiumstraße 1, 1010 Wien</p>
            </div>
            <div className="pt-4">
               <Button onClick={() => window.location.href = "/"} className="bg-primary hover:bg-primary/90">Zurück zur Startseite</Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex justify-between min-w-[600px] px-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 relative z-10">
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300",
                currentStep >= idx ? "bg-primary text-white" : "bg-secondary text-muted-foreground"
              )}>
                {idx + 1}
              </div>
              <span className={cn(
                "text-xs font-medium transition-colors duration-300",
                currentStep >= idx ? "text-primary" : "text-muted-foreground"
              )}>{step}</span>
            </div>
          ))}
          {/* Progress Line - Simplified for now as absolute positioning is tricky with flex justify-between */}
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
              <h2 className="font-serif text-2xl font-bold mb-6 text-center md:text-left">{steps[currentStep]}</h2>
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation */}
      {currentStep < 6 && (
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="w-32"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Zurück
          </Button>
          
          {currentStep === 4 ? (
             <Button 
               className="w-32 bg-primary hover:bg-primary/90"
               onClick={form.handleSubmit(onSubmit)}
             >
               Weiter <ChevronRight className="ml-2 h-4 w-4" />
             </Button>
          ) : currentStep === 5 ? (
             <Button 
               className="w-48 bg-primary hover:bg-primary/90"
               onClick={handlePayment}
             >
               Zahlungspflichtig buchen
             </Button>
          ) : (
            <Button
              className="w-32 bg-primary hover:bg-primary/90"
              onClick={nextStep}
            >
              Weiter <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
