import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="font-serif text-4xl mb-8">Datenschutz & AGB</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Datenschutzerklärung</h2>
              <p>
                <strong>Hundesalon Laika</strong><br />
                Grünentorgasse 8, 1090 Wien<br />
                Kontakt: +43 699 1036 7116 oder +43 650 861 3405
              </p>
              
              <h3 className="text-xl font-serif mt-6 mb-2">DSGVO-Erklärung</h3>
              <p>
                Hundesalon Laika ist verpflichtet, bestimmte personenbezogene Daten für jeden Termin zu erfassen und zu speichern. 
                Diese Daten werden in Übereinstimmung mit geltenden Gesetzen gespeichert.
              </p>
              <p>
                Die Website vom Hundesalon Laika setzt keine Cookies und es erfolgt kein Tracking. Keine Dienste oder Inhalte Dritter sind eingebunden. 
                Hundesalon Laika gibt diese Daten nicht an andere Organisationen weiter und verwendet sie ausschließlich zur Bereitstellung angeforderter oder damit verbundener Dienste. 
                Der Webserver befindet sich in der EU.
              </p>
              <p>
                Tierhalter haben das Recht, etwaige personenbezogenen Daten, die im Zusammenhang eines Termins im Hundesalon Laika gesammelt wurden, anzufordern, einzusehen oder löschen zu lassen. 
                Anfragen an: <a href="mailto:hundesalonlaika@gmail.com">hundesalonlaika@gmail.com</a>
              </p>
            </section>

            <div className="border-t border-border my-12"></div>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
              
              <h3 className="text-xl font-serif mt-6 mb-2">1. Grundsätzliches zur Pflege</h3>
              <p>
                Man kann leider nicht garantieren, dass jedes Tier jeden Pflegeprozess gut akzeptiert. Oft klappt der zweite oder dritte Versuch viel besser als der erste, also geben Sie nicht auf und erstellen Sie mit dem Tiersalon einen Plan, um die Pflege für Ihr Haustier akzeptabel zu machen.
              </p>
              <p>
                Hundesalon Laika behält sich das Recht vor, einen Pflegevorgang bei Gefahr für Tier oder Mensch jederzeit abzubrechen und eine Gebühr für die bereits erbrachten Leistungen zu erheben.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">2. Termine & Pünktlichkeit</h3>
              <p>
                <strong>Termineinhaltung:</strong> Kommen Sie bitte ziemlich genau zur vereinbarten Uhrzeit. Wenn Sie früher ankommen, wird eventuell noch ein anderes Tier gepflegt oder etwas anderes wird erledigt. Ihr Tier kann möglicherweise nicht sofort untergebracht werden.
              </p>
              <p>
                <strong>Verspätung:</strong> Wenn Sie mit mehr als 10 Minuten Verspätung eintreffen, kann man vielleicht die gewünschte Behandlung nicht vollständig ausführen. Bei Verspätung (Stau usw.) bitten wir um eine kurze Nachricht per SMS oder WhatsApp.
              </p>
              <p>
                <strong>Abholung:</strong> Nach der Pflege bitten wir Sie Ihr Haustier möglichst rasch nach Benachrichtigung (innerhalb von 30 Minuten) von uns abzuholen. Vor allem bei Katzen ist dies wichtig, da der Transportbehälter relativ eng ist und idealerweise nicht sofort nach der Pflege als Katzenklo verwendet werden soll.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">3. Läufigkeit, Rolligkeit & Trächtigkeit</h3>
              <p>
                Termine bitte so vereinbaren, dass Läufigkeit, Rolligkeit oder Trächtigkeit möglichst gemieden werden. Falls Pflege während Läufigkeit / Rolligkeit notwendig ist, bitte dies bei der Termin-Vereinbarung besprechen, damit eine geeignete Uhrzeit gefunden werden kann.
                Hundesalon Laika pflegt keine trächtigen Tiere, es sei denn, dies wird im Voraus mit einem Tierarzt vereinbart.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">4. Stornierungen & Umbuchungen</h3>
              <p>
                Stornierungen oder Umbuchungen müssen mindestens <strong>36 Stunden im Voraus</strong> erfolgen, um eine Verdienstausfallgebühr zu vermeiden. 
                Andernfalls berechnen wir den geschätzten Richtpreis abzüglich geschätzte Pflegemittel. Falls der Termin einem anderen Kunden vermittelt wird, verzichtet Hundesalon Laika auf die Ausfallgebühr.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">5. Fellzustand & Tierwohl</h3>
              <p>
                Oberste Priorität hat immer das Tierwohl. Stoßt man auf vernachlässigtes Fell, das besser entfernt als entwirrt werden soll, geschieht dies im Einklang mit geltenden Tierschutzgesetzen.
              </p>
              <p>
                Auch wenn man sich bemüht, Verfilzung schon bei der Abgabe des Tieres und die Fellbeurteilung vor dem Termin zu erkennen, kann das Ausmaß einer Verfilzung manchmal erst während der Fellpflege vollständig ersichtlich werden. In solchen Fällen wird im besten Interesse des Tieres gehandelt und professionelles Urteilsvermögen genutzt.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">6. Verhalten, Angst & Sicherheit</h3>
              <p>
                Tierhalter sind verpflichtet, Hundesalon Laika bei der Termin-Vereinbarung über ängstliches oder aggressives Verhalten des zur Pflege gebrachten Haustieres gegenüber anderen Tieren oder Menschen zu informieren.
              </p>
              <p>
                Hunde werden bitte angeleint und mit passendem Maulkorb, Katzen in einem möglichst nicht allzu sperrigen und geschlossenen Transport-Behälter gebracht.
              </p>
              <p>
                Wenn ein Hund / eine Katze einen Menschen oder ein anderes Tier beißt, ist in erster Linie der Tierhalter für alle damit verbundenen medizinischen und / oder tierärztlichen Rechnungen, Einkommensverluste und Sachschäden verantwortlich.
              </p>
              <p>
                Hundesalon Laika behält sich das Recht vor, eine Behandlung zu verweigern oder jederzeit abzubrechen, wenn ein Tier eine Gefahr für sich selbst oder für andere darstellt. Bereits erbrachte Leistungen werden in Rechnung gestellt.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">7. Vorbereitung auf den Termin</h3>
              <p>
                Bitte spazieren Sie mit Ihrem Hund direkt vor dem Termin lang genug, dass Ihr Hund leicht müde, entspannt und möglichst leer ankommt. Lieblingsleckerli dürfen natürlich mitgegeben werden.
              </p>
              <p>
                Bei Katzen empfiehlt es sich, die Katze zum Termin nüchtern zu bringen. Ein leerer Darm ist während der Pflege bequem. Wasser darf natürlich jederzeit getrunken werden.
              </p>

              <h3 className="text-xl font-serif mt-6 mb-2">8. Preise & Zusatzkosten</h3>
              <p>
                Alle vor dem Termin genannten Preise sind Richtpreise inkl. Umsatzsteuer und Abgaben. Zusätzliche Kosten können anfallen für:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>sehr übergewichtige, unkooperative oder deutlich über dem Rassestandard liegende Tiere</li>
                <li>vernachlässigtes Fell</li>
                <li>aggressive, ältere oder sehr schüchterne Tiere, die besondere Pflege/Zeit benötigen</li>
                <li>Tiere, die eine mehrfache Behandlung benötigen</li>
              </ul>

              <h3 className="text-xl font-serif mt-6 mb-2">9. Sonstiges</h3>
              <p>
                <strong>Anwesenheit:</strong> Die Pflege erfolgt in der Regel ohne Anwesenheit des Tierhalters, da Tiere oft entspannter sind und so 1:1 gearbeitet werden kann. Dies ist auch aus versicherungstechnischen Gründen wichtig.
              </p>
              <p>
                <strong>Ausstellungstiere:</strong> Hundesalon Laika pflegt hauptsächlich glückliche Haustiere. Die Vorbereitung von Ausstellungstieren wird nicht bzw. nur selten angeboten.
              </p>
              <p>
                <strong>Rückerstattung:</strong> Hundesalon Laika bemüht sich um qualitativ hochwertige Pflege. Auch wenn man nach bestem Wissen und Gewissen arbeitet, kann keine Garantie für das Verhalten des Tieres übernommen werden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

