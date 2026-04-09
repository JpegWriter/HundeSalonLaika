import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  MapPin,
  PawPrint,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

export default function HundefriseurWien() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet ein Hundefriseur in Wien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Kosten hängen von Rasse, Fellzustand und gewünschter Leistung ab. Bei Hundesalon Laika in Wien 1090 erstellen wir ein individuelles Angebot – am besten einfach eine Terminanfrage senden.",
        },
      },
      {
        "@type": "Question",
        name: "Wie oft sollte mein Hund zum Hundefriseur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je nach Rasse und Felltyp empfehlen wir alle 4–8 Wochen einen Pflegetermin. Rassen mit schnell wachsendem Fell (z.B. Pudel, Cockapoo) brauchen häufigere Termine.",
        },
      },
      {
        "@type": "Question",
        name: "Werden auch Katzen gepflegt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wir bieten auch Katzenpflege an – mit besonders ruhigem Handling, da Katzen oft sensibler auf die Salonsituation reagieren.",
        },
      },
      {
        "@type": "Question",
        name: "Was, wenn mein Hund Angst beim Grooming hat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir haben Erfahrung mit Angsthunden und reaktiven Hunden. Unser Ansatz: kein Zwang, viele Pausen, ruhiges Handling. Manche Hunde, die anderswo abgelehnt wurden, kommen bei uns problemlos durch den Termin.",
        },
      },
      {
        "@type": "Question",
        name: "Muss ich meinen Hund vorher waschen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Bitte bringen Sie Ihren Hund ungewaschen – wir verwenden professionelle Produkte und können den Fellzustand besser beurteilen, wenn das Fell im Originalzustand ist.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Hundefriseur Wien 1090 – Ruhige Fellpflege für Hunde und Katzen | Hundesalon Laika"
        description="Hundefriseur in Wien 1090 Alsergrund – Hundesalon Laika bietet ruhiges, stressfreies Grooming für Hunde und Katzen. Erfahrung mit Angsthunden und Problemfällen. Jetzt Termin anfragen."
        jsonLd={[{ id: "ld-faq-hundefriseur", data: faqJsonLd }]}
      />

      {/* Hero Intro */}
      <section className="py-24 pt-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-medium text-sm">
              <MapPin size={14} />
              <span>Wien 1090 – Alsergrund</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Hundefriseur Wien 1090 – Ruhige Fellpflege für Hunde und Katzen
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hundesalon Laika ist ein kleiner, persönlicher Hundesalon in Wien
              1090. Wir arbeiten ruhig, stressfrei und individuell – mit
              Erfahrung bei sensiblen Hunden, schwierigen Fällen und
              anspruchsvoller Fellpflege. Auch{" "}
              <Link href="/cat-booking" className="text-primary hover:underline">
                Katzenpflege
              </Link>{" "}
              bieten wir an.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ob{" "}
              <Link href="/blog/fallstudie-erste-welpenpflege-teddy" className="text-primary hover:underline">
                erster Welpentermin
              </Link>
              ,{" "}
              <Link href="/blog/fallstudie-senior-hund-charlie" className="text-primary hover:underline">
                schonende Senior-Pflege
              </Link>{" "}
              oder ein Hund, der anderswo abgelehnt wurde – bei uns ist jeder
              willkommen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Termin anfragen
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-2 border-foreground hover:bg-foreground hover:text-white transition-all">
                  Leistungen ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Hundesalon Laika */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Warum Hundesalon Laika in Wien?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Es gibt viele Hundefriseure in Wien. Was uns unterscheidet, ist
              nicht das Equipment – sondern wie wir arbeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Kein Stress, kein Druck",
                text: "Wir arbeiten ruhig und mit Pausen. Kein Festhalten, kein Hetzen. Der Hund bestimmt das Tempo – nicht der Kalender.",
              },
              {
                icon: ShieldCheck,
                title: "Erfahrung mit Angsthunden",
                text: "Hunde, die schnappen, zittern oder andere Salons nicht tolerieren, sind bei uns kein Problem. Wir kennen die Muster und wissen, wie man sie löst.",
              },
              {
                icon: Sparkles,
                title: "Individuelle Betreuung",
                text: "Jeder Hund wird einzeln betreut. Kein Fließband, keine Warteliste im Salon. Wir nehmen uns die Zeit, die es braucht.",
              },
              {
                icon: PawPrint,
                title: "Ruhige Arbeitsweise",
                text: "Von der Begrüßung bis zur Übergabe: alles ist auf Ruhe ausgelegt. Das spüren die Tiere – und die Besitzer auch.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-secondary/20 border border-border hover:border-primary/30 transition-all hover:shadow-lg group">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Leistungen im Hundesalon Wien
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Was genau wir als Hundefriseur in Wien anbieten – und wofür
              unsere Kunden uns am häufigsten buchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🛁",
                title: "Waschen & Föhnen",
                text: "Professionelles Bad mit hochwertigen, pH-neutralen Produkten. Angepasst an Felltyp und Hautempfindlichkeit.",
              },
              {
                icon: "✂️",
                title: "Schneiden & Scheren",
                text: "Vom Hygieneschnitt bis zum rassespezifischen Styling – saubere Linien, gleichmäßiges Ergebnis.",
              },
              {
                icon: "🐾",
                title: "Krallenpflege",
                text: "Krallenschneiden oder Schleifen – auch bei sensiblen Hunden. Wir arbeiten ruhig und in kleinen Schritten.",
              },
              {
                icon: "🧴",
                title: "Fellpflege bei Problemfällen",
                text: "Verfilzungen, Hautirritationen, vernachlässigtes Fell – wir übernehmen Fälle, die andere Salons ablehnen.",
              },
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-border">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 border-foreground text-foreground hover:bg-foreground hover:text-white">
                Alle Leistungen & Preise <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Für welche Hunde */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Für welche Hunde und Katzen wir besonders geeignet sind
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unser Hundesalon in Wien ist nicht auf eine bestimmte Rasse
              spezialisiert – sondern auf Situationen, die besonderes Handling
              verlangen.
            </p>
            <ul className="space-y-4">
              {[
                "Angsthunde und reaktive Hunde, die bei anderen Salons abgelehnt wurden",
                "Welpen beim allerersten Pflegetermin",
                "Senioren mit Arthrose oder eingeschränkter Belastbarkeit",
                "Hunde mit starker Verfilzung oder vernachlässigtem Fell",
                "Hunde mit Hautproblemen oder empfindlicher Haut",
                "Katzen, die ruhiges und geduldiges Handling brauchen",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mid-CTA */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-lg font-medium">
            Du suchst einen ruhigen Hundefriseur in Wien?
          </p>
          <Link href="/booking">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90">
              Jetzt Termin anfragen
            </Button>
          </Link>
        </div>
      </section>

      {/* Echte Fälle */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Echte Fälle aus dem Hundesalon Laika
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Keine Stock-Fotos, keine erfundenen Geschichten. Das sind echte
              Situationen aus unserem Alltag als Hundefriseur in Wien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Verfilzter Cockapoo Bella",
                summary: "Extremer Filzpanzer, Notfall-Pflegetermin – einfühlsam und schmerzfrei gelöst.",
                slug: "fallstudie-verfilzter-cockapoo-bella",
                date: "2026-04-09",
              },
              {
                title: "Angsthund Schnauzer Max",
                summary: "Hat aus Angst geschnappt. Ein anderer Salon hatte ihn abgelehnt.",
                slug: "fallstudie-angsthund-schnauzer-max",
                date: "2026-04-09",
              },
              {
                title: "Welpe Teddy – erster Termin",
                summary: "Mit 13 Wochen den Grundstein für stressfreies Grooming gelegt.",
                slug: "fallstudie-erste-welpenpflege-teddy",
                date: "2026-04-16",
              },
              {
                title: "Senior Charlie – 13 Jahre",
                summary: "Arthrose, wenig Ausdauer – angepasste Pflege mit Pausen.",
                slug: "fallstudie-senior-hund-charlie",
                date: "2026-04-23",
              },
              {
                title: "Milo hasst Wasser",
                summary: "Jack Russell mit Bade-Panik. Schritt für Schritt zur Ruhe.",
                slug: "fallstudie-hund-hasst-wasser-milo",
                date: "2026-05-28",
              },
              {
                title: "Coco – Krallen-Angst",
                summary: "Nach schlechter Erfahrung ließ Dackel Coco niemanden mehr ran.",
                slug: "fallstudie-krallenschneiden-dackel-coco",
                date: "2026-06-04",
              },
            ].map((study, idx) => {
              const isPublished = new Date(study.date) <= new Date();
              const card = (
                <div className={`p-6 rounded-2xl border transition-all h-full ${isPublished ? 'border-border hover:border-primary/30 hover:shadow-lg group cursor-pointer' : 'border-border/50 opacity-75'}`}>
                  {!isPublished && (
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-3">Kommt bald</span>
                  )}
                  <h3 className={`font-serif text-lg font-bold mb-2 ${isPublished ? 'group-hover:text-primary transition-colors' : 'text-muted-foreground'}`}>
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {study.summary}
                  </p>
                  {isPublished && (
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Fallstudie lesen <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              );
              return isPublished ? (
                <Link key={idx} href={`/blog/${study.slug}`}>{card}</Link>
              ) : (
                <div key={idx}>{card}</div>
              );
            })}
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

      {/* Local SEO Block */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
              <MapPin size={16} />
              <span>Standort</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Hundefriseur in Wien 1090 (Alsergrund)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unser Hundesalon liegt in der Grünentorgasse 8 im 9. Bezirk Wien
              – ruhig gelegen, gut erreichbar mit Öffis und mit einer
              entspannten Atmosphäre für Ihren Hund.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Viele unserer Kunden kommen aus Wien und Umgebung und schätzen
              die ruhige, stressfreie Betreuung. Wir nehmen uns für jeden
              Termin ausreichend Zeit – keine Massenabfertigung.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Häufige Fragen zum Hundefriseur in Wien
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "Was kostet ein Hundefriseur in Wien?",
                a: "Die Kosten hängen von Rasse, Fellzustand und gewünschter Leistung ab. Bei Hundesalon Laika in Wien 1090 erstellen wir ein individuelles Angebot – am besten einfach eine Terminanfrage senden.",
              },
              {
                q: "Wie oft sollte mein Hund zum Hundefriseur?",
                a: "Je nach Rasse und Felltyp empfehlen wir alle 4–8 Wochen einen Pflegetermin. Rassen mit schnell wachsendem Fell (z.B. Pudel, Cockapoo) brauchen häufigere Termine.",
              },
              {
                q: "Werden auch Katzen gepflegt?",
                a: "Ja. Wir bieten auch Katzenpflege an – mit besonders ruhigem Handling, da Katzen oft sensibler auf die Salonsituation reagieren.",
              },
              {
                q: "Was, wenn mein Hund Angst beim Grooming hat?",
                a: "Wir haben Erfahrung mit Angsthunden und reaktiven Hunden. Unser Ansatz: kein Zwang, viele Pausen, ruhiges Handling. Manche Hunde, die anderswo abgelehnt wurden, kommen bei uns problemlos durch den Termin.",
              },
              {
                q: "Muss ich meinen Hund vorher waschen?",
                a: "Nein. Bitte bringen Sie Ihren Hund ungewaschen – wir verwenden professionelle Produkte und können den Fellzustand besser beurteilen, wenn das Fell im Originalzustand ist.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
        </div>
      </section>
    </Layout>
  );
}
