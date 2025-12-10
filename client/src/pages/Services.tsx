import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, siteData } from "@/lib/data";
import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const shortHairServices = services.filter((s) => s.category === "Kurzhaar");
  const longHairServices = services.filter((s) => s.category === "Langhaar");

  const catServices = [
    {
      title: "Kurzpflege Katze (Bath & Blow-Dry)",
      description:
        "Sanftes Bad mit pH-neutralem Katzenshampoo, anschließendes Föhnen und gründlicher Pfoten- & Krallencheck. Ideal für Wohnungskatzen oder nach dem Winter.",
      highlights: [
        "Mildes Katzenshampoo & warmes Handtuch",
        "Schonendes Föhnen ohne Hitzestress",
        "Pfoten- & Krallencheck inklusive",
      ],
    },
    {
      title: "Langhaar Katzenpflege & Entfilzen",
      description:
        "Langes Fell braucht besondere Pflege – wir entwirren Verfilzungen, pflegen Unterwolle und sorgen für glänzendes, weiches Fell.",
      highlights: [
        "Sanftes Entfilzen & Ausbürsten",
        "Unterwolle sorgfältig entfernen",
        "Pflege für Mähne, Brust & Hosen",
      ],
    },
    {
      title: "Trimmen & Styling Katze",
      description:
        "Zur Fellpflege oder Hygiene: wir kürzen und stylen sanft – auf Wunsch mit minimalem Schnitt, damit Ihre Katze sauber, gepflegt und gesund bleibt.",
      highlights: [
        "Hygienisches Kürzen an Bauch & Pfoten",
        "Sanftes Styling, wo es sinnvoll ist",
        "Beratung, was für Ihre Katze geeignet ist",
      ],
    },
    {
      title: "Pfoten-, Krallen- & Ohrenpflege",
      description:
        "Krallen kürzen, Pfoten reinigen und Ohren kontrollieren – besonders wichtig bei Wohnungskatzen oder in der Winterzeit.",
      highlights: [
        "Krallen kürzen mit viel Ruhe & Geduld",
        "Pfotenreinigung nach Bedarf",
        "Ohren- und Augenhygiene bei Bedarf",
      ],
    },
    {
      title: "Sanfte Pflege für Angst- & Schmusekatzen",
      description:
        "Geräuscharme Behandlung, viele Pausen und viel Geduld – ideal für ängstliche oder sensible Katzen. Vertrauen & Ruhe stehen an erster Stelle.",
      highlights: [
        "Kurze Sessions und Pausen nach Bedarf",
        "1:1-Betreuung in ruhiger Umgebung",
        "Viele Streicheleinheiten & Einfühlungsvermögen",
      ],
    },
    {
      title: "Komplett-Grooming Katze (Full-Service Paket)",
      description:
        "Das Rundum-Sorglos-Paket: Baden, Fellpflege, Krallen, Ohren und Unterwolle – alles in einem Termin, abgestimmt auf Ihre Katze.",
      highlights: [
        "Bad & Föhnen, Fellpflege & Entfilzen",
        "Krallen- und Ohrenpflege in einem Besuch",
        "Individuelle Anpassung an Temperament & Felltyp",
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title="Services – Hundesalon & Katzenpflege in Wien | Hundesalon Laika"
        description="Übersicht aller Pflege-Services für Hunde und Katzen im Hundesalon Laika in 1090 Wien-Alsergrund. Wunderschnitt & Frisch & Flauschig für Hunde sowie sanfte Katzenpflege-Pakete."
      />
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">
              Unsere Services
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
                Für Kurzhaar-Hunde
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shortHairServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-8 border-b border-primary/20 pb-4 inline-block">
                Für Langhaar-Hunde
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {longHairServices.map((service) => (
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
                      Katzenpflege & Grooming
                    </h2>
                  </div>
                  <p className="text-muted-foreground max-w-3xl">
                    Katzen sind für uns genauso wichtig wie Hunde. Wir arbeiten
                    mit viel Ruhe, Erfahrung und speziell auf Katzen abgestimmten
                    Pflegeprodukten. Ob Kurzpflege, Entfilzen oder
                    Komplett-Grooming – wir stimmen jeden Termin auf Charakter
                    und Felltyp Ihrer Katze ab.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-white">
                    <img
                      src={siteData.images.groomer}
                      alt="Groomerin Dominique im Salon – sanfte Pflege auch für Katzen"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <div
                    key={service.title}
                    className="group rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-7 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
                        <PawPrint className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mb-5">
                      {service.highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>
                    <div className="pt-1">
                      <Link href="/cat-booking">
                        <Button className="w-full text-sm md:text-base bg-primary hover:bg-primary/90">
                          Katzen-Termin buchen
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 max-w-3xl bg-secondary/20 rounded-2xl border border-border p-6 md:p-8 space-y-3">
                <h3 className="font-serif text-2xl font-bold">
                  Warum auch Katzen?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Viele Katzenbesitzer finden nur schwer einen ruhigen,
                  katzenerfahrenen Salon. Unsere Groomerin Dominique hat
                  langjährige Erfahrung in der Katzenpflege – mit viel Geduld,
                  sanften Methoden und einer Umgebung, die auf sensible Tiere
                  Rücksicht nimmt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Gerne beraten wir Sie persönlich, welches Paket für Ihre
                  Katze sinnvoll ist und in welchem Rhythmus Pflege empfohlen
                  wird.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
