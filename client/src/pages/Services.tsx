import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const catImageUrl =
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80";

  return (
    <Layout>
      <SEO
        title="Leistungen – Hunde- und Katzenpflege in Wien | Hundesalon Laika"
        description="Übersicht der Pflege-Leistungen für Hunde und Katzen im Hundesalon Laika in 1090 Wien-Alsergrund."
      />
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">
              Unsere Leistungen
            </h1>
            <p className="text-muted-foreground text-lg">
              Professionelle Fellpflege und Grooming in 1090 Wien-Alsergrund –
              für Hunde <strong>und</strong> Katzen. Wählen Sie das passende
              Paket für Ihren Liebling, alle Leistungen sind klar beschrieben.
            </p>
          </div>

          <div className="space-y-20">
            {/* Dog services */}
            <section>
              <h2 className="font-serif text-3xl font-bold mb-8 border-b border-primary/20 pb-4 inline-block">
                Für Hunde
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </section>

            {/* Cat services */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-10 items-center mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <PawPrint className="text-primary h-6 w-6" />
                    <h2 className="font-serif text-3xl font-bold">
                      Katzen-Terminanfrage
                    </h2>
                  </div>
                  <p className="text-muted-foreground max-w-3xl">
                    Komplettpflege inkl. Erfrischungsbad, Frisch &amp; Flauschig
                    (Katze) – unabhängig von Lang- oder Kurzhaar, Unterwolle,
                    Trimmen oder Felltyp.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-white">
                    <img
                      src={catImageUrl}
                      alt="Katze im Hundesalon Laika – sanfte Pflege"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-2xl bg-white border border-border rounded-2xl shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
                    <PawPrint className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    Komplettpflege inkl. Erfrischungsbad, Frisch &amp; Flauschig
                    (Katze)
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                  Waschen, trocknen, ausbürsten/auskämmen, Ohrenreinigung,
                  Krallen kürzen, Pfotenballen von Haaren befreien, Pfotenpflege.
                  Je nachdem: Scherenschnitt, Schur, von Hand trimmen und
                  carden, Unterwolle entfernen. Entfilzen, falls vertretbar,
                  maximal 15 Minuten. Konturen-Schnitt.
                </p>
                <Link href="/cat-booking">
                  <Button className="w-full text-sm md:text-base bg-primary hover:bg-primary/90">
                    Terminanfrage
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
