import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  HandHeart,
  Heart,
  MapPin,
  PawPrint,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Link } from "wouter";

export default function HundAngstGrooming() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Warum hat mein Hund Angst beim Grooming?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mögliche Gründe: Eine frühere negative Erfahrung, fehlende Gewöhnung als Welpe, genetisch bedingte Sensibilität, oder eine zu hektische Salon-Umgebung. Die gute Nachricht: Mit dem richtigen Ansatz kann Angst reduziert werden.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ein Angsthund überhaupt zum Hundefriseur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Bei Hundesalon Laika arbeiten wir mit Angsthunden und reaktiven Hunden – ohne Zwang, mit viel Geduld. Viele Hunde, die anderswo abgelehnt wurden, kommen bei uns zur Ruhe.",
        },
      },
      {
        "@type": "Question",
        name: "Wie arbeitet ein Hundefriseur mit ängstlichen Hunden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir arbeiten in kleinen Schritten: Kennenlernphase, Pausen nach Bedarf, ruhiger Raum, kein Zwang. Der Hund wird nicht festgehalten oder überflutet. Ziel ist, dass er die Pflege toleriert – und irgendwann sogar akzeptiert.",
        },
      },
      {
        "@type": "Question",
        name: "Werden Angsthunde bei Ihnen sediert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Wir arbeiten ausschließlich ohne Sedierung. In extremen Fällen empfehlen wir eine Zusammenarbeit mit dem Tierarzt. Aber die meisten Hunde brauchen keine Medikamente – nur Geduld und das richtige Handling.",
        },
      },
      {
        "@type": "Question",
        name: "Was kostet Grooming für einen Angsthund?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da wir bei Angsthunden mehr Zeit einplanen, kann der Termin etwas länger dauern. Die Kosten besprechen wir transparent vorab. Einfach Terminanfrage senden.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Hund hat Angst beim Grooming? So funktioniert stressfreie Fellpflege | Hundesalon Laika Wien"
        description="Dein Hund hat Angst beim Hundefriseur? Hundesalon Laika in Wien 1090 arbeitet ruhig und ohne Zwang – auch mit Angsthunden und reaktiven Hunden. Erfahre, wie stressfreies Grooming funktioniert."
        jsonLd={[{ id: "ld-faq-angst", data: faqJsonLd }]}
      />

      {/* Hero Intro */}
      <section className="py-24 pt-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-medium text-sm">
              <Heart size={14} />
              <span>Angst & Grooming</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Hund hat Angst beim Grooming? So läuft ruhige, stressfreie
              Fellpflege wirklich ab
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dein Hund zittert, wenn er den Hundesalon betritt? Er schnappt
              nach der Bürste, duckt sich beim Föhn, oder wurde von einem
              anderen Salon abgelehnt? Dann bist du hier richtig.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wir bei{" "}
              <Link href="/hundefriseur-wien" className="text-primary hover:underline">
                Hundesalon Laika in Wien 1090
              </Link>{" "}
              arbeiten täglich mit ängstlichen, unsicheren und reaktiven Hunden.
              In diesem Ratgeber erklären wir, warum Hunde Angst beim Grooming
              haben – und wie man das ändert.
            </p>
          </div>
        </div>
      </section>

      {/* Angst erkennen */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Wie zeigt ein Hund Angst beim Grooming?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Angst ist nicht immer offensichtlich. Manche Hunde knurren oder
              schnappen – aber viele zeigen ihre Angst subtiler.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Deutliche Zeichen
                </h3>
                <ul className="space-y-2">
                  {[
                    "Schnappen oder Beißversuche",
                    "Zittern am ganzen Körper",
                    "Fluchtversuche vom Tisch",
                    "Einfrieren / Erstarren",
                    "Bellen, Winseln, Heulen",
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Subtile Zeichen
                </h3>
                <ul className="space-y-2">
                  {[
                    "Gähnen (Stresszeichen)",
                    "Lippen lecken",
                    "Wegschauen / Kopf abwenden",
                    "Hecheln ohne körperliche Anstrengung",
                    "Schwanz eingezogen, Ohren angelegt",
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <PawPrint className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Bei{" "}
              <Link href="/blog/fallstudie-angsthund-schnauzer-max" className="text-primary hover:underline">
                Max, dem Schnauzer
              </Link>
              , war die Angst so stark, dass er beim letzten Salon nach dem
              Groomer geschnappt hatte. Andere Salons lehnten ihn ab. Bei uns
              hat er seinen Termin ruhig durchgestanden – weil wir sein Tempo
              respektiert haben.
            </p>
          </div>
        </div>
      </section>

      {/* Was Zwang anrichtet */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Warum Zwang beim Grooming alles schlimmer macht
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In manchen Salons werden ängstliche Hunde festgebunden,
              festgehalten oder überredet. Das funktioniert vielleicht einmal –
              aber langfristig wird die Angst größer.
            </p>

            <div className="space-y-4">
              {[
                {
                  problem: "Hund wird festgehalten oder fixiert",
                  effect: "Kontrollverlust erzeugt Panik. Der Hund lernt: Salon = Gefahr.",
                },
                {
                  problem: "Hektisches Durcharbeiten, um schnell fertig zu werden",
                  effect: "Das Stresslevel steigt mit jeder Minute. Keine Chance, sich zu beruhigen.",
                },
                {
                  problem: "Kein Kennenlernen, sofort auf den Tisch",
                  effect: "Der Hund kann sich nicht orientieren. Die Überforderung beginnt ab Sekunde 1.",
                },
                {
                  problem: "Laute Geräte ohne Vorwarnung",
                  effect: "Schermaschine, Föhn, Wasserstrahl – alles auf einmal ist für sensible Hunde eine Reizüberflutung.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{item.problem}</h3>
                      <p className="text-muted-foreground text-sm">{item.effect}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Arbeitsweise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              So arbeiten wir mit Angsthunden
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unser Ansatz bei Hundesalon Laika basiert auf einem einfachen
              Prinzip: Der Hund bestimmt das Tempo. Nicht der Zeitplan.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: "Ankommen lassen",
                  text: "Der Hund darf den Raum erkunden, schnuppern, ankommen. Kein sofortiges Hochheben, kein Tisch.",
                },
                {
                  icon: HandHeart,
                  title: "Kleine Schritte, viele Pausen",
                  text: "Wir arbeiten in kurzen Blöcken. Zwischendurch: Pause, Lob, Entspannung. So bleibt der Stresslevel kontrollierbar.",
                },
                {
                  icon: ShieldCheck,
                  title: "Signale lesen und respektieren",
                  text: "Wenn ein Hund signalisiert 'Stopp', hören wir auf. Nicht zur Strafe – sondern weil es der schnellere Weg ist.",
                },
                {
                  icon: PawPrint,
                  title: "Kein Zwang, kein Festhalten",
                  text: "Wir fixieren keine Hunde. Wir arbeiten lieber langsamer und mehrmals – als einmal unter Stress.",
                },
              ].map((method, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-secondary/20">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">{method.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{method.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sensible Situationen */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Besonders sensible Situationen
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Manche Pflegeschritte sind für Angsthunde besonders schwierig.
              So gehen wir damit um:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Krallenschneiden",
                  text: "Einer der häufigsten Angst-Trigger. Wir schneiden nur eine Kralle, wenn der Hund bereit ist. Lieber mehrere kurze Sitzungen als ein traumatisches Erlebnis.",
                  link: "/blog/fallstudie-krallenschneiden-dackel-coco",
                  linkText: "→ Cocos Geschichte lesen",
                },
                {
                  title: "Baden und Föhnen",
                  text: "Viele Hunde hassen Wasser oder den Föhn. Wir arbeiten mit reduzierter Lautstärke, warmem Wasser und nähern uns schrittweise.",
                  link: "/blog/fallstudie-hund-hasst-wasser-milo",
                  linkText: "→ Milos Geschichte lesen",
                },
                {
                  title: "Schermaschine",
                  text: "Das Geräusch und die Vibration verunsichern sensible Hunde. Wir lassen den Hund erst hören, dann fühlen – ohne Schur. Bis er bereit ist.",
                },
                {
                  title: "Fremde Umgebung",
                  text: "Manche Hunde sind grundsätzlich gestresst von neuen Orten. Deshalb bieten wir bei Bedarf eine kurze Kennenlernsitzung vor dem ersten Termin an.",
                },
              ].map((situation, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-border">
                  <h3 className="font-serif text-lg font-bold mb-2">{situation.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{situation.text}</p>
                  {situation.link && (
                    <Link href={situation.link} className="text-primary text-sm font-medium hover:underline">
                      {situation.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-CTA */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-lg font-medium">
            Dein Hund hat Angst vorm Hundefriseur? Wir arbeiten anders.
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
              Echte Fälle: Angsthunde im Hundesalon Laika
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Diese Hunde haben Angst – und trotzdem eine positive
              Grooming-Erfahrung gemacht. Weil wir anders arbeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Schnauzer Max – abgelehnt vom letzten Salon",
                summary: "Max hat aus Angst geschnappt. Kein anderer Salon wollte ihn nehmen. Bei uns hat er es geschafft – ruhig und in seinem Tempo.",
                slug: "fallstudie-angsthund-schnauzer-max",
              },
              {
                title: "Jack Russell Milo – Panik vor Wasser",
                summary: "Milo hat sich beim letzten Bad so gewehrt, dass ein Helfer dazukommen musste. Bei uns: schrittweise Gewöhnung, kein Zwang.",
                slug: "fallstudie-hund-hasst-wasser-milo",
              },
              {
                title: "Dackel Coco – Krallen-Trauma",
                summary: "Nach einer schmerzhaften Erfahrung beim Tierarzt ließ Coco niemanden mehr an ihre Pfoten. Wir haben es langsam aufgebaut.",
                slug: "fallstudie-krallenschneiden-dackel-coco",
              },
              {
                title: "Welpe Teddy – Prävention statt Therapie",
                summary: "Mit 13 Wochen den Grundstein gelegt: ruhige Einführung, positive Verknüpfung – damit Angst gar nicht erst entsteht.",
                slug: "fallstudie-erste-welpenpflege-teddy",
              },
              {
                title: "Senior Charlie – alt und unsicher",
                summary: "Mit 13 Jahren war Charlie nicht nur langsam, sondern auch verunsichert. Ruhiges Handling und Pausen machten den Unterschied.",
                slug: "fallstudie-senior-hund-charlie",
              },
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

      {/* FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Häufige Fragen: Angst beim Grooming
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "Warum hat mein Hund Angst beim Grooming?",
                a: "Mögliche Gründe: Eine frühere negative Erfahrung, fehlende Gewöhnung als Welpe, genetisch bedingte Sensibilität, oder eine zu hektische Salon-Umgebung. Die gute Nachricht: Mit dem richtigen Ansatz kann Angst reduziert werden.",
              },
              {
                q: "Kann ein Angsthund überhaupt zum Hundefriseur?",
                a: "Ja. Bei Hundesalon Laika arbeiten wir mit Angsthunden und reaktiven Hunden – ohne Zwang, mit viel Geduld. Viele Hunde, die anderswo abgelehnt wurden, kommen bei uns zur Ruhe.",
              },
              {
                q: "Wie arbeitet ein Hundefriseur mit ängstlichen Hunden?",
                a: "Wir arbeiten in kleinen Schritten: Kennenlernphase, Pausen nach Bedarf, ruhiger Raum, kein Zwang. Der Hund wird nicht festgehalten oder überflutet. Ziel ist, dass er die Pflege toleriert – und irgendwann sogar akzeptiert.",
              },
              {
                q: "Werden Angsthunde bei Ihnen sediert?",
                a: "Nein. Wir arbeiten ausschließlich ohne Sedierung. In extremen Fällen empfehlen wir eine Zusammenarbeit mit dem Tierarzt. Aber die meisten Hunde brauchen keine Medikamente – nur Geduld und das richtige Handling.",
              },
              {
                q: "Was kostet Grooming für einen Angsthund?",
                a: "Da wir bei Angsthunden mehr Zeit einplanen, kann der Termin etwas länger dauern. Die Kosten besprechen wir transparent vorab. Einfach Terminanfrage senden.",
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

      {/* Local SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
              <MapPin size={16} />
              <span>Wien 1090</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Du suchst einen{" "}
              <Link href="/hundefriseur-wien" className="text-primary hover:underline">
                Hundefriseur in Wien
              </Link>
              , der Erfahrung mit Angsthunden hat? Hundesalon Laika, Grünentorgasse 8,
              1090 Wien – ruhig, ohne Zwang, individuell.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Dein Hund verdient stressfreies Grooming
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Wenn dein Hund Angst vor dem Hundefriseur hat, ist das kein
            Grund aufzugeben. Es ist ein Grund, den richtigen Salon zu
            finden.
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
