import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Award, Heart, Shield } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <SEO
        title="Über Hundesalon Laika – Ihr Hundefriseur in Wien"
        description="Erfahren Sie mehr über die Geschichte, Philosophie und Werte des Hundesalon Laika in 1090 Wien. Sanfte Hundepflege, langjährige Erfahrung und Liebe zum Detail."
      />
      {/* Hero */}
      <div className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Über Hundesalon Laika</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mehr als nur ein Friseurtermin. Ein Ort, an dem Ihr Hund liebevoll umsorgt wird und sich wohlfühlen kann.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src={siteData.images.groomer} 
                alt="Unsere Geschichte" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Unsere Geschichte</span>
              <h2 className="font-serif text-4xl font-bold">Wer ist Laika?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Der Name "Laika" steht nicht nur für die berühmte Hündin im Weltall, sondern war auch der Name meiner ersten Golden Retriever Hündin, die mich zur Hundefriseurin inspiriert hat.
                </p>
                <p>
                  Ich bin Dominique, ursprünglich aus Schottland, und lebe seit vielen Jahren in Wien. Nach meiner Ausbildung in London und Wien habe ich 2018 den Hundesalon Laika eröffnet, mit dem Ziel, einen Standard zu setzen: Keine Massenabfertigung, keine Käfigtrockner, kein Stress.
                </p>
                <p>
                  Heute sind wir stolz darauf, einer der führenden Salons in Wien zu sein, bekannt für unseren sanften Umgang ("Fear Free Handling") und unsere exzellenten Ergebnisse – für Hunde und Katzen gleichermaßen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-muted-foreground">Das Fundament unserer Arbeit.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Sanftmut",
                text: "Wir behandeln jeden Hund so liebevoll wie unseren eigenen. Geduld steht über Schnelligkeit."
              },
              {
                icon: Award,
                title: "Qualität",
                text: "Wir bilden uns ständig weiter und nutzen nur die besten Werkzeuge und Pflegeprodukte."
              },
              {
                icon: Shield,
                title: "Vertrauen",
                text: "Transparenz ist uns wichtig. Sie dürfen gerne beim ersten Termin dabei bleiben."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-border text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">Zertifizierungen & Mitgliedschaften</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos */}
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><CheckCircle2 /> Verband der Hundefriseure</div>
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><CheckCircle2 /> Fear Free Certified</div>
             <div className="flex items-center gap-2 text-xl font-bold font-serif"><CheckCircle2 /> Master Groomer Diploma</div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
         <h2 className="font-serif text-3xl font-bold mb-6">Lernen Sie uns kennen</h2>
         <Link href="/booking">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
              Termin vereinbaren
            </Button>
         </Link>
      </section>
    </Layout>
  );
}
