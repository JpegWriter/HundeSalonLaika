import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { services, sizeOptions } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { Check, ArrowLeft, Clock, Scissors } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const [match, params] = useRoute("/service/:id");
  const service = services.find(s => s.id === params?.id);

  if (!match || !service) {
    return <NotFound />;
  }

  const lowPrice = Math.min(...sizeOptions.map((o) => o.price));

  const serviceUrl = `https://www.hundesalonlaika-wien.at/service/${service.id}`;

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "PetGrooming",
      name: "Hundesalon Laika",
      "@id": "https://www.hundesalonlaika-wien.at/#business",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Wien",
    },
    serviceType: "Hundepflege",
    offers: {
      "@type": "Offer",
      price: String(lowPrice),
      priceCurrency: "EUR",
      url: serviceUrl,
    },
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hundesalonlaika-wien.at/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: "https://www.hundesalonlaika-wien.at/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  const suitabilityText =
    "Geeignet für Hunde aller Rassen – die Pflege wird individuell auf Temperament, Felltyp und Pflegezustand abgestimmt.";

  const relatedService =
    services.find((s) => s.id !== service.id && s.category === service.category) ??
    services.find((s) => s.id !== service.id);

  return (
    <Layout>
      <SEO
        title={`${service.title} | Hundesalon Laika Wien`}
        description={`${service.shortDescription} Dieser Service ist in unserem Hundesalon in 1090 Wien-Alsergrund verfügbar.`}
        jsonLd={[
          { id: "ld-service", data: serviceJson },
          { id: "ld-service-breadcrumb", data: breadcrumbJson },
        ]}
      />
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-end pb-12">
            <Link href="/services" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 transition-colors">
              <ArrowLeft size={20} /> Zurück zur Übersicht
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-white/90 text-xl max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Über diesen Service</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
                <p className="text-muted-foreground leading-relaxed text-base mt-4">
                  Dieser Service ist in unserem Hundesalon in <strong>1090 Wien-Alsergrund</strong> verfügbar und wird individuell auf das Temperament und den Felltyp Ihres Hundes abgestimmt.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold mb-6">Was ist enthalten?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                      <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                        <Check size={16} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <Scissors className="text-primary" /> Unsere Philosophie
                </h2>
                <p className="text-muted-foreground italic">
                  "Wir nehmen uns für jeden Hund die Zeit, die er braucht. Bei diesem Service achten wir besonders auf eine stressfreie Behandlung und gehen individuell auf die Bedürfnisse Ihres Hundes ein."
                </p>
                <p className="text-muted-foreground mt-4">
                  {suitabilityText}
                </p>
              </section>

              {relatedService && (
                <section className="mt-10">
                  <h2 className="font-serif text-2xl font-bold mb-3">
                    Passt dieser Service nicht ganz?
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    Vielleicht ist folgendes Angebot von Hundesalon Laika in Wien besser geeignet:
                  </p>
                  <Link
                    href={`/service/${relatedService.id}`}
                    className="text-primary underline-offset-4 hover:underline font-medium"
                  >
                    {relatedService.title}
                  </Link>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Oder kehren Sie zur{" "}
                    <Link
                      href="/services"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                    Leistungs-Übersicht
                    </Link>{" "}
                    zurück.
                  </p>
                </section>
              )}
            </div>

            {/* Sidebar Pricing */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-lg sticky top-24">
                <h3 className="font-serif text-2xl font-bold mb-6">Größe</h3>
                
                <div className="space-y-4 mb-8">
                  {sizeOptions.map((size) => (
                    <div
                      key={size.id}
                      className="flex justify-between items-center pb-3 border-b border-border/50"
                    >
                      <div>
                        <span className="font-bold block">{size.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {size.desc}
                        </span>
                      </div>
                      <span className="font-serif text-xl text-primary">
                        ab €{size.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Kooperative Hauskatzen Komplettpflege inkl. Bad, falls
                    geduldet und Schur falls nötig/erwünscht ab € 75.
                  </p>
                  <p>Krallen-, Augen- und Ohrenpflege je ab € 10.</p>
                  <p>
                    Toypudel ab € 65, Kleinpudel ab € 70, Mittelpudel ab € 80,
                    Großpudel ab € 95.
                  </p>
                  <p>
                    Der Pflegeaufwand und die notwendige Pflegezeit ist ja von
                    Tier zu Tier individuell. Ein kleines Tier kann einfacher
                    oder sehr viel schwieriger als ein größeres Tier sein.
                    Trimmen von Hand ist körperlich sehr anstrengend, daher kann
                    die Pflege eines Trimmhundes ggf. etwas mehr kosten, als ein
                    anderes Haarkleid / Fellbeschaffenheit mit dem gleichen
                    Körpergewicht. Eine längere Fönzeit bei dichtem Fell oder
                    Langhaar verursacht einen höheren Stromverbrauch. Man bemüht
                    sich, möglichst effektiv zu arbeiten, ohne dem Tier Hektik
                    und Stress auszusetzen.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center mb-2">
                    <Clock size={16} />
                    <span>Dauer ca. 90-120 Min.</span>
                  </div>
                  <Link href="/booking">
                    <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                      Terminanfrage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
