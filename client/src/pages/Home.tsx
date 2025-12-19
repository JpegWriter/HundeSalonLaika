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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
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
        title="Hundesalon Laika Wien – Premium Hundepflege & Grooming in 1090 Wien"
        description="Exklusive Hundepflege in Wien-Alsergrund (1090). Professionelles Waschen, Schneiden & Pflegen für Kurzhaar und Langhaar. Stellen Sie jetzt Ihre Terminanfrage bei Hundesalon Laika!"
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
              <span>Wiens bester Hundesalon</span>
            </div>
            <p className="text-sm md:text-base font-medium text-primary/90 bg-white/80 inline-flex px-4 py-1 rounded-full shadow-sm">
              Hundesalon in 1090 Wien-Alsergrund – Premium Hundepflege im Herzen von Wien.
            </p>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Pflege <br/>
              <span className="text-primary italic font-script pr-4">für Ihren</span>
              Liebling
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Erleben Sie Hundepflege auf höchstem Niveau. Sanfter Umgang, hochwertige Produkte und eine entspannte Atmosphäre im Herzen von Wien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Terminanfrage
                </Button>
              </Link>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg bg-white/50 backdrop-blur-sm border-2 border-foreground hover:bg-white transition-all"
                onClick={handleScrollToServices}
                aria-label="Zu den Hundefriseur-Services von Hundesalon Laika scrollen"
              >
                Services ansehen
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-1">
              Stellen Sie Ihre Terminanfrage – wir melden uns zeitnah zurück.
            </p>

            <div className="flex items-center gap-8 pt-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span>Zertifizierte Groomer</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-primary h-5 w-5" />
                <span>Stressfreie Behandlung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section aria-label="Preisübersicht" className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="py-4 md:py-5 flex flex-col md:flex-row items-center justify-center gap-3 text-sm md:text-base text-foreground">
            <span className="font-semibold tracking-wide uppercase text-xs md:text-sm text-primary">
              Schnellüberblick Preise
            </span>
            <span className="text-muted-foreground text-center md:text-left">
              Pflege ab <strong>€45</strong> · Schneiden ab <strong>€75</strong> · Langhaar-Pflege ab <strong>€115</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl font-bold">Warum Hundesalon Laika?</h2>
            <p className="text-muted-foreground text-lg">
              Wir verbinden fachliche Kompetenz mit liebevoller Zuwendung. Bei uns steht das Wohlbefinden Ihres Hundes an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Liebevolle Betreuung",
                text: "Wir nehmen uns Zeit für jeden Hund. Pausen, Streicheleinheiten und positive Verstärkung sind Teil unseres Konzepts."
              },
              {
                icon: ShieldCheck,
                title: "Zertifizierte Profis",
                text: "Unser Team besteht aus ausgebildeten Hundefriseuren mit jahrelanger Erfahrung und stetiger Weiterbildung."
              },
              {
                icon: Sparkles,
                title: "Premium Produkte",
                text: "Wir verwenden ausschließlich hochwertige, pH-neutrale Pflegeprodukte auf natürlicher Basis."
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
              <h2 className="font-serif text-4xl font-bold">Exklusive Pflegepakete</h2>
              <p className="text-muted-foreground">
                Vom schnellen Bad bis zum kompletten Styling – wir haben das passende Paket für jede Rasse.
              </p>
            </div>
            <Link href="/services" className="group text-foreground hover:text-primary flex items-center font-medium">
              Alle Services ansehen <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} featured={service.id.includes("wunderschnitt")} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Groomer / Groomer Intro */}
      <section className="py-24 bg-white overflow-hidden">
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
                  Dominique, Ihre Groomerin im Hundesalon Laika, stammt ursprünglich aus Schottland und ist seit über 10 Jahren als Hundefriseurin tätig. 
                  Sie hat sich auf sanfte, stressfreie Hundepflege in Wien spezialisiert – mit besonderem Fokus auf sensible Hunde, Doodles, Senioren-Hunde und Angsthunde, die eine ruhige Hand und viel Feingefühl brauchen.
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
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Das sagen unsere Kunden</h2>
            <p className="text-muted-foreground">
              Die Zufriedenheit von Hund und Halter ist unser größter Erfolg.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Bereit für Ihre nächste Grooming-Terminanfrage?
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Stellen Sie jetzt Ihre Terminanfrage für den Hundesalon Laika in
            1090 Wien und gönnen Sie Ihrem Vierbeiner eine hochwertige,
            stressfreie Pflege.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-10 rounded-full text-lg shadow-xl hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90"
            >
              Terminanfrage senden
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
