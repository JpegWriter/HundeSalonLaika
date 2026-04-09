import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Scissors,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Link } from "wouter";

export default function VerfilzterHund() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kann man einen verfilzten Hund noch ausbürsten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nur, wenn die Verfilzung leicht ist und sich noch mit den Fingern lösen lässt. Sitzt der Filz direkt an der Haut, ist ausbürsten schmerzhaft und kontraproduktiv – dann ist eine fachgerechte Schur die bessere Lösung.",
        },
      },
      {
        "@type": "Question",
        name: "Ist es schmerzhaft für den Hund, wenn man Filz rausschneidet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wenn professionell durchgeführt, nicht. Im Hundesalon Laika arbeiten wir mit speziellen Klingen und kontrollierter Technik. Der Schnitt erfolgt über dem Filz – die Haut bleibt unberührt. Der Hund spürt vor allem: Erleichterung.",
        },
      },
      {
        "@type": "Question",
        name: "Was kostet es, einen stark verfilzten Hund scheren zu lassen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt vom Ausmaß der Verfilzung ab. Bei uns in Wien 1090 erhalten Sie nach einer kurzen Begutachtung eine individuelle Einschätzung. Einfach Terminanfrage senden.",
        },
      },
      {
        "@type": "Question",
        name: "Wie kann ich Verfilzung beim Hund vorbeugen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regelmäßiges Bürsten (je nach Rasse 1–3x pro Woche) und professionelle Pflegetermine alle 4–8 Wochen. Besonders wichtig: nach Regen, Schnee oder starkem Toben im Freien kontrollieren.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Hunderassen verfilzen besonders schnell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cockapoo, Pudel, Malteser, Shih Tzu, Yorkshire Terrier und Doodle-Rassen sind besonders anfällig. Aber auch Rassen mit Unterwolle (z.B. Golden Retriever, Berner Sennenhund) können verfilzen.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Verfilzter Hund – Was wirklich hilft | Hundesalon Laika Wien"
        description="Dein Hund ist verfilzt? Erfahre, wann ausbürsten möglich ist, wann geschoren werden muss – und wie Hundesalon Laika in Wien 1090 auch schwere Fälle stressfrei löst."
        jsonLd={[{ id: "ld-faq-verfilzt", data: faqJsonLd }]}
      />

      {/* Hero Intro */}
      <section className="py-24 pt-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-medium text-sm">
              <Scissors size={14} />
              <span>Fellpflege-Ratgeber</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Verfilzter Hund – Was wirklich hilft, wenn das Fell nicht mehr
              bis zur Haut durchkämmbar ist
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ein verfilzter Hund ist kein Zeichen von schlechter Haltung. Es
              passiert schneller, als viele denken: ein paar Wochen ohne
              Bürsten, ein verregneter Herbst, ein Haushalt mit wenig Zeit. Und
              plötzlich lässt sich das Fell nicht mehr durchkämmen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In diesem Ratgeber erklären wir als{" "}
              <Link href="/hundefriseur-wien" className="text-primary hover:underline">
                Hundefriseur aus Wien
              </Link>
              : Wie man Verfilzung erkennt, wann Ausbürsten noch möglich ist,
              wann geschoren werden muss – und wie wir auch die schwersten
              Fälle stressfrei lösen.
            </p>
          </div>
        </div>
      </section>

      {/* Verfilzung erkennen */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Wie erkenne ich, ob mein Hund verfilzt ist?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Verfilzung ist nicht immer auf den ersten Blick sichtbar. Das
              Deckhaar kann gepflegt aussehen – aber darunter hat sich ein
              dichter Filzpanzer gebildet.
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold">
                Typische Anzeichen:
              </h3>
              <ul className="space-y-3">
                {[
                  "Der Kamm bleibt schon nach wenigen Zentimetern stecken",
                  "Das Fell fühlt sich wie eine feste Platte an",
                  "Die Haut darunter ist gerötet oder riecht unangenehm",
                  "Der Hund reagiert empfindlich, wenn man durch das Fell streicht",
                  "Kleine Knoten haben sich zu großflächigen Matten verbunden",
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Bei{" "}
              <Link href="/blog/fallstudie-verfilzter-cockapoo-bella" className="text-primary hover:underline">
                Bella, dem Cockapoo
              </Link>
              , war das Fell so stark verfilzt, dass man die Haut darunter nicht
              mehr sehen konnte. Ein klassischer Fall, den wir im Salon
              regelmäßig sehen.
            </p>
          </div>
        </div>
      </section>

      {/* Ausbürsten vs. Scheren */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Ausbürsten oder Scheren? – Wann was hilft
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-border">
                <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">
                  Ausbürsten ist möglich, wenn…
                </h3>
                <ul className="space-y-2">
                  {[
                    "Die Knoten sich noch mit den Fingern lösen lassen",
                    "Die Verfilzung oberflächlich ist",
                    "Die Haut darunter nicht gereizt ist",
                    "Der Hund das Bürsten toleriert",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-border">
                <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Scissors className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">
                  Scheren ist nötig, wenn…
                </h3>
                <ul className="space-y-2">
                  {[
                    "Der Filz direkt an der Haut sitzt",
                    "Das Fell sich wie ein Panzer anfühlt",
                    "Der Hund Schmerzen zeigt beim Kämmen",
                    "Die Haut darunter entzündet oder feucht ist",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Wichtig: Eine Schur ist keine Strafe. Es ist eine medizinisch
              sinnvolle Maßnahme, die den Hund sofort entlastet. Danach wächst
              das Fell gesund nach – und mit regelmäßiger Pflege bleibt es
              auch so.
            </p>
          </div>
        </div>
      </section>

      {/* Unser Ablauf bei verfilztem Fell */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Wie wir verfilztes Fell im Hundesalon behandeln
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bei Hundesalon Laika in Wien 1090 folgen wir einem klaren Ablauf
              – ruhig, schmerzfrei und transparent.
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Begutachtung",
                  text: "Wir schauen uns das Fell genau an: Wo sitzt der Filz? Wie tief? Ist die Haut betroffen? Wir erklären alles offen.",
                },
                {
                  step: "2",
                  title: "Entscheidung: Retten oder Neuanfang",
                  text: "Wo möglich, bürsten wir aus. Wo nötig, scheren wir – sauber und kontrolliert. Kein Ziehen, kein Reißen.",
                },
                {
                  step: "3",
                  title: "Pflege der Haut",
                  text: "Nach der Entfilzung oder Schur wird die Haut gepflegt. Bei Rötungen beraten wir zur Nachsorge – und empfehlen bei Bedarf einen Tierarztbesuch.",
                },
                {
                  step: "4",
                  title: "Plan für die Zukunft",
                  text: "Wir besprechen mit Ihnen einen Pflegeplan: Wie oft bürsten? Welche Bürste? Wann der nächste Termin sinnvoll ist.",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fehler vermeiden */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Diese Fehler machen Besitzer bei verfilztem Fell
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Gut gemeint ist nicht immer gut gemacht. Diese Fehler sehen wir
              als Hundefriseur in Wien besonders häufig:
            </p>

            <div className="space-y-4">
              {[
                {
                  mistake: "Selbst mit der Schere schneiden",
                  why: "Hohes Verletzungsrisiko – die Haut liegt unter dem Filz oft viel näher, als man denkt.",
                },
                {
                  mistake: "Mit Gewalt ausbürsten",
                  why: "Verursacht Schmerzen und kann zu Hautverletzungen führen. Der Hund wird beim nächsten Mal noch mehr Angst haben.",
                },
                {
                  mistake: "Verfilzung ignorieren und abwarten",
                  why: "Je länger man wartet, desto dichter wird der Filz. Das kann zu Hautinfektionen und Ekzemen führen.",
                },
                {
                  mistake: "Billige Entfilzungssprays als Lösung",
                  why: "Sprays helfen bei leichten Knoten. Bei echtem Filz sind sie wirkungslos – und verschlimmern manchmal die Lage.",
                },
              ].map((error, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{error.mistake}</h3>
                      <p className="text-muted-foreground text-sm">{error.why}</p>
                    </div>
                  </div>
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
            Dein Hund ist verfilzt? Wir helfen – ruhig und schmerzfrei.
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
              Echte Fälle: Verfilzung im Hundesalon Laika
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Diese Hunde kamen mit starker Verfilzung zu uns. Jeder Fall war
              anders – aber alle hatten ein Happy End.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Cockapoo Bella – extremer Filzpanzer",
                summary: "Das Fell war so verfilzt, dass die Haut nicht mehr sichtbar war. Eine behutsame Komplett-Schur brachte sofortige Erleichterung.",
                slug: "fallstudie-verfilzter-cockapoo-bella",
                date: "2026-04-09",
              },
              {
                title: "Maltipoo Alfie – Erwartung vs. Realität",
                summary: "Die Besitzerin wünschte sich einen Teddy-Look. Im Salon zeigte sich: verfilztes Fell, das nicht mehr rettbar war.",
                slug: "fallstudie-erwartung-vs-realitaet-alfie",
                date: "2026-06-11",
              },
              {
                title: "Mischling Bruno – vernachlässigtes Fell",
                summary: "Ein Pflegefall mit massivem Filz und Hautproblemen. Schritt für Schritt befreit – ohne Stress.",
                slug: "fallstudie-vernachlaessigter-hund-bruno",
                date: "2026-05-14",
              },
              {
                title: "Welpe Teddy – Prävention von Anfang an",
                summary: "Wie ein erster Pflegetermin mit 13 Wochen hilft, Verfilzung gar nicht erst entstehen zu lassen.",
                slug: "fallstudie-erste-welpenpflege-teddy",
                date: "2026-04-16",
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
        </div>
      </section>

      {/* Vorbeugung */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              So verhinderst du Verfilzung dauerhaft
            </h2>
            <ul className="space-y-4">
              {[
                "Regelmäßig bürsten – je nach Rasse 1–3x pro Woche, mit der richtigen Bürste",
                "Nasses Fell immer trocknen und durchkämmen",
                "Alle 4–8 Wochen zum professionellen Pflegetermin",
                "Problematische Stellen (Achseln, Ohren, Schenkel) besonders beachten",
                "Keine Hausmittel wie Olivenöl auf verfilztes Fell auftragen",
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Häufige Fragen zu verfilztem Hundefell
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "Kann man einen verfilzten Hund noch ausbürsten?",
                a: "Nur, wenn die Verfilzung leicht ist und sich noch mit den Fingern lösen lässt. Sitzt der Filz direkt an der Haut, ist ausbürsten schmerzhaft und kontraproduktiv – dann ist eine fachgerechte Schur die bessere Lösung.",
              },
              {
                q: "Ist es schmerzhaft für den Hund, wenn man Filz rausschneidet?",
                a: "Wenn professionell durchgeführt, nicht. Wir arbeiten mit speziellen Klingen und kontrollierter Technik. Der Schnitt erfolgt über dem Filz – die Haut bleibt unberührt. Der Hund spürt vor allem: Erleichterung.",
              },
              {
                q: "Was kostet es, einen stark verfilzten Hund scheren zu lassen?",
                a: "Das hängt vom Ausmaß der Verfilzung ab. Bei uns in Wien 1090 erhalten Sie nach einer kurzen Begutachtung eine individuelle Einschätzung. Einfach Terminanfrage senden.",
              },
              {
                q: "Wie kann ich Verfilzung beim Hund vorbeugen?",
                a: "Regelmäßiges Bürsten (je nach Rasse 1–3x pro Woche) und professionelle Pflegetermine alle 4–8 Wochen. Besonders wichtig: nach Regen, Schnee oder starkem Toben im Freien kontrollieren.",
              },
              {
                q: "Welche Hunderassen verfilzen besonders schnell?",
                a: "Cockapoo, Pudel, Malteser, Shih Tzu, Yorkshire Terrier und Doodle-Rassen sind besonders anfällig. Aber auch Rassen mit Unterwolle (z.B. Golden Retriever, Berner Sennenhund) können verfilzen.",
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
      <section className="py-16 bg-secondary/20">
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
              , der auch schwere Verfilzungen fachgerecht und stressfrei behandelt?
              Hundesalon Laika in der Grünentorgasse 8, 1090 Wien – ruhig, erfahren, individuell.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Verfilztes Fell? Wir helfen.
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Keine Vorwürfe, keine Bewertung. Wir sehen den Hund – und machen
            das Beste draus. Ruhig, professionell und schmerzfrei.
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
