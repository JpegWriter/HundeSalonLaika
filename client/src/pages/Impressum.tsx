import { Layout } from "@/components/layout/Layout";

export default function Impressum() {
  return (
    <Layout>
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="font-serif text-4xl mb-8">Impressum</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Hundesalon Laika – Dog Grooming e.U.</h2>
              <p>
                Grünentorgasse 8<br />
                1090 Wien<br />
                Österreich
              </p>
              
              <p className="mt-4">
                <strong>Inhaberin:</strong> Dominique ADEY BALINOVA<br />
                <strong>Rechtsform:</strong> Einzelunternehmen
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Kontakt</h2>
              <p>
                <strong>Tel. / SMS / WhatsApp:</strong> +43 650 861 3405<br />
                <strong>E-Mail:</strong> <a href="mailto:hundesalonlaika@gmail.com">hundesalonlaika@gmail.com</a>
              </p>
              <p className="mt-2">
                <em>Um Terminvereinbarung wird gebeten.</em>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Unternehmensdaten</h2>
              <p>
                <strong>Unternehmensgegenstand:</strong> Tiersalon. Ausbildung, Betreuung, Pflege, Abwiegen, Messung und Vermietung von Tieren sowie die Beratung hinsichtlich artgerechter Haltung und Ernährung von Tieren mit Ausnahme der den Tierärzten vorbehaltenen diagnostischen und therapeutischen Tätigkeiten.<br />
                <strong>UID-Nummer:</strong> ATU69689517<br />
                <strong>EORI:</strong> ATEOS1000096814<br />
                <strong>Firmenbuchnummer:</strong> FN 435362p<br />
                <strong>Firmenbuchgericht:</strong> Wien<br />
                <strong>Aufsichtsbehörde:</strong> Magistrat der Stadt Wien für den 9. Bezirk<br />
                <strong>Kammerzugehörigkeit:</strong> Mitglied der WKO Wien
              </p>
              <p>
                <strong>Bankverbindung:</strong> Wise, EUR, BE71 9677 8443 9669 (Dominique Adey Balinova)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">Rechtliche Hinweise</h2>
              <p>
                <strong>Anwendbare Rechtsvorschriften:</strong> Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a><br />
                <strong>Behörde gem. E-Commerce-Gesetz (ECG):</strong> Magistratisches Bezirksamt des IX. Bezirkes
              </p>
              <p className="text-sm text-muted-foreground mt-4">Stand: Oktober 2025</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

