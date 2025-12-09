import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { siteData, services } from "@/lib/data";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src={siteData.images.hero} 
            alt="Hundesalon Laika Interior" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-8 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary font-medium text-sm shadow-sm">
              <Sparkles size={14} />
              <span>Wiens exklusivster Hundesalon</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Premium Pflege <br/>
              <span className="text-primary italic font-script pr-4">für Ihren</span>
              Liebling
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Erleben Sie Hundepflege auf höchstem Niveau. Sanfter Umgang, hochwertige Produkte und eine entspannte Atmosphäre im Herzen von Wien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Online Termin Buchen
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg bg-white/50 backdrop-blur-sm border-2 border-foreground hover:bg-white transition-all">
                  Services ansehen
                </Button>
              </Link>
            </div>

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
      <section className="py-24 bg-secondary/30 relative">
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

      {/* Groomer Intro */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-3" />
              <img 
                src={siteData.images.groomer} 
                alt="Laika Team" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
                Leidenschaft für <br/>
                <span className="text-primary">Perfektion</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "Jeder Hund hat seinen eigenen Charakter und seine eigene Schönheit. Meine Aufgabe ist es, diese hervorzuheben, ohne dabei Stress zu verursachen."
                </p>
                <p>
                  Als zertifizierte Hundefriseurin mit über 10 Jahren Erfahrung habe ich mich auf den sanften Umgang spezialisiert. In meinem Salon in Wien biete ich eine Oase der Ruhe, in der sich Ihr Vierbeiner wohlfühlen kann.
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Bereit für den Wunderschnitt?</h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Buchen Sie Ihren Termin ganz einfach online. Wir freuen uns darauf, Sie und Ihren Vierbeiner kennenzulernen.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full text-lg shadow-xl hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90">
              Jetzt Termin vereinbaren
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
