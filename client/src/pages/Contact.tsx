import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Kontaktieren Sie uns</h1>
            <p className="text-muted-foreground text-lg">
              Haben Sie Fragen zu unseren Services oder möchten Sie einen speziellen Wunsch äußern? Wir sind für Sie da.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h2 className="font-serif text-2xl font-bold mb-6">Kontaktdaten</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">{siteData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telefon</h3>
                      <p className="text-muted-foreground">{siteData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">E-Mail</h3>
                      <p className="text-muted-foreground">{siteData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Öffnungszeiten</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{siteData.openingHours.replace("|", "\n")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <Button variant="outline" className="w-full gap-2 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700 h-12">
                    <MessageCircle size={20} />
                    Chat auf WhatsApp starten
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary/20 rounded-2xl h-64 w-full flex items-center justify-center border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Vienna_map.png/640px-Vienna_map.png')] bg-cover bg-center opacity-50 grayscale"></div>
                <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2">
                   <MapPin className="text-primary" />
                   <span className="font-bold">1010 Wien</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <h2 className="font-serif text-2xl font-bold mb-6">Schreiben Sie uns</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" placeholder="Max" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" placeholder="Mustermann" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail Adresse</Label>
                  <Input id="email" type="email" placeholder="max@beispiel.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Betreff</Label>
                  <Input id="subject" placeholder="Terminanfrage..." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea id="message" placeholder="Wie können wir Ihnen helfen?" className="min-h-[150px]" />
                </div>
                
                <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
