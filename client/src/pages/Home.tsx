import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { siteData, services } from "@/lib/data";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  MapPin,
  PawPrint,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const handleScrollToServices = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "PetGrooming",
    "@id": "https://www.hundesalonlaika-wien.at/#business",
    name: "Hundesalon Laika",
    url: "https://www.hundesalonlaika-wien.at/",
    image: "https://www.hundesalonlaika-wien.at/path-to-hero-image.jpg",
    logo: "https://www.hundesalonlaika-wien.at/path-to-logo.png",
    telephone: siteData.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Grünentorgasse 8",
      addressLocality: "Wien",
      postalCode: "1090",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.22,
      longitude: 16.36,
    },
    sameAs: [
      "https://maps.app.goo.gl/c6GHPHxbzYv175zU6",
    ],
  };

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.hundesalonlaika-wien.at/#website",
    url: "https://www.hundesalonlaika-wien.at/",
    name: "Hundesalon Laika Wien",
    publisher: {
      "@type": "Organization",
      name: "Hundesalon Laika Wien",
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.hundesalonlaika-wien.at/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Layout>
      <SEO
        title="Hundefriseur Wien 1090 – Ruhiges, stressfreies Grooming | Hundesalon Laika"
        description="Hundefriseur Wien 1090 Alsergrund – Individuelle Hunde- und Katzenpflege ohne Stress. Erfahrung mit Angsthunden, Verfilzungen und Problemfällen. Jetzt Termin anfragen!"
        jsonLd={[
          { id: "ld-business", data: localBusinessJson },
          { id: "ld-website", data: websiteJson },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src={siteData.images.hero} 
            alt="Hund wird im Hundesalon Laika in Wien gepflegt" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-8 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary font-medium text-sm shadow-sm">
              <Sparkles size={14} />
              <span>Hundefriseur in Wien 1090</span>
            </div>
            <p className="text-sm md:text-base font-medium text-primary/90 bg-white/80 inline-flex px-4 py-1 rounded-full shadow-sm">
              Hundesalon in Wien-Alsergrund – Ruhige, stressfreie Hunde- und Katzenpflege.
            </p>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-foreground">
              Hundefriseur Wien 1090
              <br />
              <span className="text-primary italic font-script pr-3">
                Ruhiges, stressfreies
              </span>
              Grooming für Hunde
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Individuelle Pflege ohne Stress – mit Erfahrung bei Angsthunden,
              Verfilzungen und schwierigen Fällen. Ihr Hundesalon in Wien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Termin anfragen
                </Button>
              </Link>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg bg-white/50 backdrop-blur-sm border-2 border-foreground hover:bg-white transition-all"
                onClick={handleScrollToServices}
                aria-label="Zu den Leistungen von Hundesalon Laika scrollen"
              >
                Leistungen ansehen
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-1">
              Stellen Sie Ihre Terminanfrage – wir melden uns zeitnah zurück.
            </p>

            <div className="flex items-center gap-8 pt-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>Erfahrung mit Problemfällen</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-primary h-5 w-5" />
                <span>Kein Stress, kein Druck</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser removed */}

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl font-bold">
              Warum Hundesalon Laika?
            </h2>
            <p className="text-muted-foreground text-lg">
              Ruhig, individuell und mit Erfahrung bei schwierigen Fällen –
              so arbeiten wir als Hundefriseur in Wien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Kein Stress, kein Druck",
                text: "Wir nehmen uns Zeit für jeden Hund. Pausen, ruhiges Handling und positive Erfahrungen sind Teil unseres Konzepts. Auch Angsthunde und reaktive Hunde sind bei uns willkommen."
              },
              {
                icon: ShieldCheck,
                title: "Erfahrung mit Problemfällen",
                text: "Verfilztes Fell, Angst vorm Wasser, schwierige Krallenpflege – wir haben Erfahrung mit Situationen, die andere Salons ablehnen. Jeder Hund verdient professionelle Pflege."
              },
              {
                icon: Sparkles,
                title: "Individuelle Betreuung",
                text: "Kein Hund ist wie der andere. Wir passen den Ablauf an Rasse, Alter und Verhalten an – mit hochwertigen Produkten auf natürlicher Basis (ohne Parabene)."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-secondary/20 border border-border hover:border-primary/30 transition-all hover:shadow-lg group">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services-section" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl space-y-4">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Unsere Leistungen</span>
              <h2 className="font-serif text-4xl font-bold">Leistungen im Hundesalon Wien</h2>
              <p className="text-muted-foreground">
                Waschen, Schneiden, Krallenpflege oder Fellpflege bei Problemfällen – als Hundefriseur in Wien bieten wir das passende Paket für jede Rasse.
              </p>
            </div>
            <Link
              href="/services"
              className="group text-foreground hover:text-primary flex items-center font-medium"
            >
              Alle Leistungen ansehen{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
              <PawPrint size={16} />
              <span>Echte Fälle aus dem Salon</span>
            </div>
            <h2 className="font-serif text-4xl font-bold">
              🐾 Echte Fälle aus dem Hundesalon Laika
            </h2>
            <p className="text-muted-foreground text-lg">
              Jeder Hund ist anders – hier sind echte Beispiele aus unserem
              Alltag als Hundefriseur in Wien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Stark verfilzter Cockapoo",
                summary: "Bella kam mit extremer Ganzkörper-Verfilzung – ein Notfall-Pflegetermin brachte ihr sofortige Erleichterung.",
                slug: "fallstudie-verfilzter-cockapoo-bella"
              },
              {
                title: "Angsthund beim Grooming",
                summary: "Zwergschnauzer Max schnappte aus Angst – ein anderer Salon hatte ihn abgelehnt. Bei uns wurde es ein Erfolg.",
                slug: "fallstudie-angsthund-schnauzer-max"
              },
              {
                title: "Hund hasst Wasser",
                summary: "Jack Russell Milo flippt beim Baden aus. Schritt für Schritt haben wir die Erfahrung verändert.",
                slug: "fallstudie-hund-hasst-wasser-milo"
              },
              {
                title: "Erste Welpenpflege",
                summary: "Cockapoo-Welpe Teddy hatte mit 13 Wochen seinen allerersten Termin – so legen wir den Grundstein.",
                slug: "fallstudie-erste-welpenpflege-teddy"
              },
              {
                title: "Krallenschneiden als Albtraum",
                summary: "Dackel Coco ließ nach einer schlechten Erfahrung niemanden mehr ran. Mit Geduld und Technik hat es geklappt.",
                slug: "fallstudie-krallenschneiden-dackel-coco"
              }
            ].map((study, idx) => (
              <Link key={idx} href={`/blog/${study.slug}`}>
                <div className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg group cursor-pointer h-full">
                  <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {study.summary}
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Fallstudie lesen <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <Button variant="outline" className="rounded-full px-8 border-foreground text-foreground hover:bg-foreground hover:text-white">
                Alle Fallstudien ansehen <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Groomer / Groomer Intro */}
      <section className="py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-3" />
              <img 
                src={siteData.images.groomer} 
                alt="Groomerin im Hundesalon Laika in Wien bei der Arbeit" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
                Lernen Sie Ihre Groomerin kennen
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "Jeder Hund hat seinen eigenen Charakter und seine eigene Schönheit. Meine Aufgabe ist es, diese ganz ohne Stress zum Strahlen zu bringen."
                </p>
                <p>
                  Dominique, Ihre Groomerin im Hundesalon Laika, stammt
                  ursprünglich aus dem Vereinigten Königreich und ist seit 2015
                  als Tierfriseurin tätig.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-bold text-3xl text-foreground mb-1">10+</h4>
                  <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
                </div>
                <div>
                  <h4 className="font-bold text-3xl text-foreground mb-1">5k+</h4>
                  <p className="text-sm text-muted-foreground">Glückliche Hunde</p>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" className="mt-4 border-foreground text-foreground hover:bg-foreground hover:text-white rounded-full px-8">
                  Mehr über uns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Das sagen unsere Kunden
            </h2>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Local SEO Block */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
              <MapPin size={16} />
              <span>Standort</span>
            </div>
            <h2 className="font-serif text-4xl font-bold">
              Hundefriseur in Wien 1090 (Alsergrund)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unser Hundesalon liegt im Herzen von Wien-Alsergrund – ruhig,
              gut erreichbar und mit einer entspannten Atmosphäre für Ihren
              Hund. Viele unserer Kunden kommen aus Wien und Umgebung und
              schätzen die ruhige, stressfreie Betreuung.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ob Grooming für Welpen, Senioren, Angsthunde oder
              rassespezifische Fellpflege – als Hundefriseur in Wien bieten
              wir individuelle Lösungen für jeden Hund. Besuchen Sie uns in
              der Grünentorgasse 8, 1090 Wien.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["Hundefriseur Wien", "Hundesalon Wien 1090", "Hundepflege Alsergrund", "Grooming Wien"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white border border-border text-sm text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Termin im Hundesalon Wien sichern
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Wenn du deinem Hund eine ruhige und professionelle Pflege bieten
            willst – melde dich frühzeitig. Wir nehmen uns Zeit und arbeiten
            individuell.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-10 rounded-full text-lg shadow-xl hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90"
            >
              Jetzt Termin anfragen
            </Button>
          </Link>
          <p className="text-white/80 text-sm">
            (Kg, Alter, Rasse, etwaige gesundheitliche Einschränkungen)
          </p>
        </div>
      </section>
    </Layout>
  );
}
