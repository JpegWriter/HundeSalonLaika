import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Heart,
  Shield,
  MapPin,
  Phone,
  Mail,
  Clock,
  PawPrint,
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      <SEO
        title="Über Hundesalon Laika – Ihr Hundefriseur in Wien"
        description="Erfahren Sie mehr über die Geschichte, Philosophie und Werte des Hundesalon Laika in 1090 Wien. Sanfte Pflege für Hunde und Katzen seit 2007."
      />

      {/* Hero */}
      <div className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Über uns – Hundesalon Laika, Wien 1090
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Willkommen im Hundesalon Laika – einem liebevollen, ruhigen und
            sicheren Ort für professionelle Hund- und Katzenpflege im Herzen
            des 9. Bezirks.
          </p>
          <p className="mt-4 text-muted-foreground">
            Seit 2007 steht unser Salon für Vertrauen, Respekt und
            tiergerechte Behandlung – ein Anspruch, den wir bis heute mit
            großer Sorgfalt weiterführen.
          </p>
        </div>
      </div>

      {/* Contact / Facts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Adresse & Erreichbarkeit
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">{siteData.address}</p>
                    <p className="text-sm">
                      Gut erreichbar: U4 Rossauer Lände · Bus 40A · Straßenbahn
                      D (Bauernfeldplatz)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">{siteData.phone}</p>
                    <p className="font-semibold">+43 650 861 3405</p>
                    <p className="text-sm">
                      Wenn ein Anruf nicht sofort beantwortet werden kann,
                      erfolgt zuverlässig ein Rückruf oder eine Nachricht per
                      WhatsApp oder SMS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">{siteData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">Termine nach Vereinbarung</p>
                    <p className="text-sm">
                      Bitte vereinbaren Sie Ihren Termin im Voraus, da jeder
                      Besuch genügend Zeit und Ruhe benötigt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold mb-2">
                Terminanfrage stellen
              </h3>
              <p className="text-muted-foreground">
                Am besten erreichen Sie uns per SMS oder WhatsApp – so können
                wir in Behandlungspausen in Ruhe antworten.
              </p>
              <div className="space-y-3 text-sm">
                <p>
                  🐾 SMS / WhatsApp bevorzugt:
                  <br />
                  <span className="font-semibold">{siteData.phone}</span>
                  <br />
                  <span className="font-semibold">+43 650 861 3405</span>
                </p>
                <p>
                  📩{" "}
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {siteData.email}
                  </a>
                </p>
              </div>
              <div className="pt-4 flex flex-wrap gap-3">
                <Link href="/booking">
                  <Button className="bg-primary hover:bg-primary/90">
                    Terminanfrage
                  </Button>
                </Link>
                <a
                  href="https://wa.me/4369910367116"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">WhatsApp öffnen</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story: Marie to Dominique */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src={siteData.images.groomer}
                alt="Dominique, Hundefriseurin im Hundesalon Laika"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold uppercase tracking-wider text-xs">
                  Unsere Geschichte
                </span>
                <h2 className="font-serif text-3xl font-bold mt-2">
                  Von Marie zu Dominique
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Der Hundesalon Laika wurde 2007 von Marie Pinezits
                  gegründet. Marie führte den Salon bis zu ihrem Ruhestand
                  2015 mit Herz, Erfahrung und einer tiefen Liebe zu Tieren.
                  Unterstützt von ihren Kindern schuf sie einen Ort, an dem
                  Tiere mit Geduld und Feingefühl gepflegt wurden. Ihre
                  Ausbildung erhielt sie bei Margit Schönauer in Wien.
                </p>
                <p>
                  2015 übergab Marie den Salon an Dominique, die von ihr
                  persönlich ausgebildet wurde und seither die gleiche
                  liebevolle, respektvolle Philosophie fortführt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dominique */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl font-bold">
              Über Dominique – Erfahrung, Ausbildung & Leidenschaft
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ich, Dominique, bin im Vereinigten Königreich aufgewachsen –
              umgeben von Hunden, Katzen, Pferden und vielen anderen Tieren.
              Seit 1992 lebe ich in Österreich. Tiere begleiten mein Leben
              seit meiner Kindheit, und ihre Pflege ist meine Passion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Um meinen vierbeinigen Kunden die bestmögliche Betreuung zu
              bieten, habe ich zahlreiche internationale Ausbildungen und
              Workshops absolviert – unter anderem bei:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-muted-foreground">
            <ul className="space-y-1 list-disc list-inside">
              <li>Gia Anslin (Luxemburg)</li>
              <li>Francisco De Assis Ferreira de Vasconcellos</li>
              <li>Danelle Joner German, NCGIA (Schweiz, Katzenpflege)</li>
              <li>Nathalie Doaré Ariey-Jouglard, DAATA (England)</li>
              <li>Christine Naß (Deutschland, Katzen)</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside">
              <li>Jean Beets</li>
              <li>Carmen Schreiner</li>
              <li>Nina Landrichter</li>
              <li>Thomas Pirker</li>
              <li>Tatjana Marin</li>
              <li>Margit Schönauer</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Zusätzlich besuche ich regelmäßig Fachseminare der
            Wirtschaftskammer Österreich (WKO), um mein Wissen aktuell zu
            halten.
          </p>
        </div>
      </section>

      {/* Name & Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold">Warum „Laika“?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Der Name erinnert an Laika (Лайка) – den berühmten
              Weltraumhund, der 1957 als erstes Lebewesen die Erde umkreiste.
              Im Russischen bezeichnet Laika zudem verschiedene
              Husky-ähnliche Rassen und bedeutet sinngemäß „die Bellende“.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ein schöner Name für einen Ort, an dem Hunde im Mittelpunkt
              stehen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold">
                Unsere Philosophie – jedes Tier ist einzigartig
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Bei uns wird jede Katze und jeder Hund als Individuum
                behandelt – mit Ruhe, Geduld und Achtsamkeit. Tiere wollen
                sich in ihrem Fell wohlfühlen. Doch im Alltag fehlt oft die
                Zeit, um Fell, Unterwolle und Haut regelmäßig zu Hause zu
                pflegen. Genau hier unterstützen wir:
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>sanft</li>
                <li>gründlich</li>
                <li>stressarm</li>
                <li>mit hochwertigen Pflegeprodukten</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Knoten, Filz, Fett und Verschmutzungen können Hautprobleme
                verursachen. Durch frühzeitige und regelmäßige Pflege
                bleiben viele Beschwerden erspart.
              </p>
            </div>

            <div className="bg-secondary/20 rounded-2xl border border-border p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <PawPrint className="text-primary" />
                <h3 className="font-serif text-xl font-bold">
                  Ein sanfter Start – Welpen, Kitten & Tierschutzhunde
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Junge oder unsichere Tiere werden im Salon besonders
                behutsam eingewöhnt. Für die Sicherheit wird jeder Hund
                locker am Tisch gesichert, um Stürze zu vermeiden. Alle
                Oberflächen und Werkzeuge werden nach jeder Behandlung
                desinfiziert.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die Erfahrung zeigt: Tiere sind in einem 1:1-Setting
                ruhiger, gerade weil keine zusätzlichen Reize oder Menschen
                im Raum sind. Falls Ihre Anwesenheit während einzelner
                Schritte hilfreich wäre, informiere ich Sie selbstverständlich.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Regelmäßige Pflege ab dem 4.–5. Lebensmonat sorgt dafür,
                dass Ihr Tier ohne Angst und ohne tierärztliche Sedierung
                gepflegt werden kann.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How often grooming */}
      <section className="py-16 bg-secondary/10 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="font-serif text-3xl font-bold">
            Wie oft braucht Ihr Tier Pflege?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Je nach Rasse, Felltyp und Pflege zu Hause unterscheidet sich
            der optimale Rhythmus:
          </p>

          <div className="overflow-x-auto rounded-xl border border-border bg-white">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-secondary/40">
                <tr>
                  <th className="px-4 py-3 font-semibold">Felltyp / Rassen</th>
                  <th className="px-4 py-3 font-semibold">
                    Empfohlener Salonrhythmus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 align-top">
                    Malteser, Havaneser, Yorkshire, Coton, Shih Tzu
                  </td>
                  <td className="px-4 py-3 align-top">alle 4–8 Wochen</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">
                    Pudel, Doodle, Wasserhunde, Bichon, Lagotto, große
                    Fellrassen
                  </td>
                  <td className="px-4 py-3 align-top">alle 4–6 Wochen</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">
                    Husky, Schäferhund, Aussie, Spitz, Collie, Spaniel
                  </td>
                  <td className="px-4 py-3 align-top">
                    alle 6–12 Wochen (Unterwolle entfernen!)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">Kurzhaarrassen</td>
                  <td className="px-4 py-3 align-top">
                    gelegentliches Baden &amp; Schlammbehandlung
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Katzen profitieren besonders von regelmäßiger Pflege, da sie
            Filzbildung oft erst spät zeigen.
          </p>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="font-serif text-3xl font-bold">
            Unsere Leistungen – sanft, professionell & individuell
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            <ul className="space-y-2 list-disc list-inside">
              <li>Baden &amp; Föhnen</li>
              <li>Schneiden (Schere &amp; Schermaschine)</li>
              <li>Trimmen (Handstripping)</li>
              <li>Entfilzen &amp; Auskämmen</li>
              <li>Unterwolle entfernen</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Ohren-, Pfoten- &amp; Krallenpflege</li>
              <li>Zahnpflege mit Orozyme, Canina oder EmmiPet</li>
              <li>
                Schlammbehandlung (Thalasso) – ideal bei Unterwolle,
                Hautirritationen, Juckreiz
              </li>
              <li>
                Ozonbad (Nanobubbles) – antibakteriell, regenerierend,
                wohltuend für Haut &amp; Fell
              </li>
            </ul>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Bitte beachten: Ozon- und spezielle Spa-Behandlungen dürfen nur
            bei gesunder, unverletzter Haut durchgeführt werden und werden
            zuvor mit Ihrem Tierarzt besprochen.
          </p>
        </div>
      </section>

      {/* Cats & pricing */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold">
                Stressarme Pflege – besonders für Katzen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Katzen haben oft kürzere Geduldspannen. Deshalb arbeiten wir
                mit Pausen, und falls nötig, findet das Auskämmen erst am
                nächsten Tag statt. Viele Katzen genießen die Pflege jedoch,
                sobald sie merken, wie angenehm ein sauberes, leichtes Fell
                ist.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold">Preise</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Kosten hängen vom Zustand des Fells, der Fellmenge, der
                Rasse und der Kooperation des Tieres ab. Wir nennen vorab
                gerne einen Richtpreis, der endgültige Preis wird jedoch
                individuell beim Termin festgelegt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food recommendations & final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold">Futterempfehlungen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gesundes Fell beginnt mit guter Ernährung. Hier finden Sie
              hochwertige Katzen- und Hundenahrung:
            </p>
            <a
              href="https://hundesalonlaika.xantara-partner.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
            >
              👉 Hier klicken für Futterempfehlungen
            </a>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold">
              Wir freuen uns auf Sie!
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vielen Dank für Ihr Vertrauen. Ich freue mich darauf, Sie und
              Ihre tierischen Familienmitglieder kennenzulernen und ihnen
              eine sanfte, liebevolle und fachkundige Pflege zu bieten.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary/90">
                  Termin vereinbaren
                </Button>
              </Link>
              <a
                href="https://www.facebook.com/HundesalonLaika1090Wien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline text-sm"
              >
                👉 Folgen Sie uns auf Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
