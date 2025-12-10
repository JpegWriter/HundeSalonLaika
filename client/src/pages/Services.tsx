import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  const shortHairServices = services.filter(s => s.category === "Kurzhaar");
  const longHairServices = services.filter(s => s.category === "Langhaar");

  return (
    <Layout>
      <SEO
        title="Services – Hundepflege & Hundefriseur in Wien | Hundesalon Laika"
        description="Übersicht aller Hundepflege-Services im Hundesalon Laika in 1090 Wien-Alsergrund. Wunderschnitt & Frisch & Flauschig für Kurzhaar und Langhaar mit klaren Ab-Preisen."
      />
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Unsere Services</h1>
            <p className="text-muted-foreground text-lg">
              Professionelle Hundepflege und Hundefriseur-Leistungen in 1090 Wien-Alsergrund. 
              Wählen Sie das passende Paket für Ihren Liebling – alle Ab-Preise sind transparent dargestellt.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-8 border-b border-primary/20 pb-4 inline-block">Für Kurzhaar-Rassen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shortHairServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-8 border-b border-primary/20 pb-4 inline-block">Für Langhaar-Rassen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {longHairServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
