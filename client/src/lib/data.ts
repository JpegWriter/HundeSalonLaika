
import bathImage from "@assets/generated_images/dog_getting_a_gentle_bath.png";
import longHairImage from "@assets/generated_images/long_haired_dog_grooming_spa.png";
import mattedImage from "@assets/generated_images/groomer_dealing_with_matted_fur.png";
import brushingImage from "@assets/generated_images/dog_owner_brushing_dog_at_home.png";
import earImage from "@assets/generated_images/close_up_of_dog_ear_cleaning.png";
import calmImage from "@assets/generated_images/calm_relaxed_dog_in_salon.png";
import winterImage from "@assets/generated_images/happy_dog_in_winter_setting.png";
import shampooImage from "@assets/generated_images/natural_dog_shampoo_bottles.png";
import pawImage from "@assets/generated_images/close_up_of_dog_paw_check.png";
import beagleImage from "@assets/generated_images/beagle_dog_grooming_close_up.png";
import spaImage from "@assets/generated_images/dog_spa_detail_shot.png";
import groomerImage from "@assets/generated_images/professional_dog_groomer_portrait.png";

// Site Data
export const siteData = {
  tagline: "Exklusive Fellpflege mit Herz & Verstand",
  address: "Grünentorgasse 8, 1090 Wien",
  phone: "+43 699 1036 7116",
  email: "hundesalonlaika@gmail.com",
  openingHours: "Mo-Fr: 09:00 - 18:00 | Sa: Nach Vereinbarung",
  images: {
    hero: spaImage, // Using spa image as hero for now
    groomer: groomerImage
  }
};

// Testimonials (Google Reviews – gekürzt)
export const testimonials = [
  {
    text: "Ich kenne niemanden, der so freundlich und fürsorglich mit den flauschigen Freunden umgeht wie Dominique. Flexibel, aufmerksam und geduldig – auch mit sehr verspielt‑frechen Hunden.",
    name: "ggh 1806",
    dog: "Mehrere Hunde"
  },
  {
    text: "Sie kümmert sich seit Jahren perfekt um meinen Husky‑Malamute‑Mix – waschen, bürsten, trimmen. Er hat ordentlich Charakter, aber bei Dominique ist er in den besten Händen.",
    name: "Cristina Colamonici",
    dog: "Husky‑Malamute"
  },
  {
    text: "Elvis sieht immer top gestylt und süß aus. Dominique ist die liebste Person – vielen Dank für das großartige Grooming.",
    name: "Mel White",
    dog: "Elvis"
  },
  {
    text: "Ich bin super happy – mein Pudel sieht großartig aus und Dominique hatte unglaublich viel Geduld mit den vielen Knoten. Absolute Empfehlung.",
    name: "Constance Jacques",
    dog: "Pudel"
  },
  {
    text: "Dominique versucht immer, die Erfahrung für meine Katzen so angenehm wie möglich zu machen. Wir kommen seit Jahren gerne wieder.",
    name: "Rebecca Lee",
    dog: "Zwei Katzen"
  },
  {
    text: "Sehr freundlicher, aufmerksamer und vorsichtiger Service. Unser Hund war entspannt und das Ergebnis war hervorragend – zu einem fairen Preis.",
    name: "Tim MacDonald",
    dog: "Familienhund"
  },
  {
    text: "Dominique macht die Grooming‑Erfahrung für meine Katze so gut wie möglich. Mein Stubentiger und ich kommen immer wieder gerne.",
    name: "Jana K",
    dog: "Katze"
  },
  {
    text: "Unser Hund Rocky hat heute den besten Haarschnitt in Wien bekommen. Wir freuen uns schon auf das nächste Mal.",
    name: "Natasam M.",
    dog: "Rocky"
  },
  {
    text: "Sehr freundlicher, aufmerksamer und behutsamer Service – unser kleiner Balu kam am zweiten Tag freiwillig wieder. Wärmstens zu empfehlen.",
    name: "Manuel Eising",
    dog: "Balu"
  },
  {
    text: "Mein Border‑Collie‑Mädchen sieht fantastisch aus! Wir waren vom ersten Besuch an begeistert und kommen sicher wieder.",
    name: "Gisela Aistleitner",
    dog: "Border Collie"
  },
  {
    text: "Unser Malteser hat eine elegante Frisur bekommen und wurde herzlich empfangen. Wir gehen seit Langem zu Dominique und waren immer zufrieden.",
    name: "Thomas P",
    dog: "Malteser"
  },
  {
    text: "Ich war heute das erste Mal da und bin sehr zufrieden. Dominique hat sich Zeit genommen, war super freundlich zu Bella und hat definitiv eine neue Stammkundin gewonnen.",
    name: "Branislava Matic",
    dog: "Bella"
  },
  {
    text: "Flocki sah nach dem Termin wieder so lieb und hübsch aus und kam entspannt und fröhlich zurück. Danke für Geduld, Flexibilität und Freundlichkeit.",
    name: "I K",
    dog: "Malteser Flocki"
  },
  {
    text: "Mein Spitz war zum ersten Mal beim Hundefriseur und ich war begeistert. Super flauschig, strahlend weiß und sauber – und das sehr kurzfristig und zu einem top Preis‑Leistungsverhältnis.",
    name: "Marie Blümel",
    dog: "Mittelspitz"
  },
  {
    text: "Ein kleiner, smarter Hundesalon zu moderaten Preisen. Dominique nimmt sich wirklich Zeit und geht mit Liebe und Feingefühl an die Fellpflege.",
    name: "Susanne Delpin",
    dog: "Mehrere Hunde"
  }
];

// Service Data
export const services = [
  {
    id: "wunderschnitt-kurzhaar",
    title: "Der Wunderschnitt (Kurzhaar)",
    slug: "der-wunderschnitt-kurzhaar",
    category: "Kurzhaar",
    price: 85,
    image: beagleImage,
    shortDescription: "Komplettpflege für kurzhaarige Rassen. Waschen, Föhnen, Schneiden & Styling.",
    description: "Unser Premium-Paket für alle Kurzhaar-Rassen. Wir beginnen mit einer sanften Wäsche...",
    features: ["Waschen & Föhnen", "Individueller Schnitt", "Ohren & Krallen", "Intimhygiene"]
  },
  {
    id: "frisch-flauschig-kurzhaar",
    title: "Frisch & Flauschig (Kurzhaar)",
    slug: "frisch-flauschig-kurzhaar",
    category: "Kurzhaar",
    price: 55,
    image: bathImage,
    shortDescription: "Die perfekte Zwischenpflege. Waschen, Bürsten & Hygiene.",
    description: "Ideal für zwischendurch...",
    features: ["Waschen", "Ausbürsten", "Ohrenreinigung", "Krallen kürzen"]
  },
  {
    id: "wunderschnitt-langhaar",
    title: "Der Wunderschnitt (Langhaar)",
    slug: "der-wunderschnitt-langhaar",
    category: "Langhaar",
    price: 105,
    image: longHairImage,
    shortDescription: "Meisterhafte Schere für langes Fell. Rassestandard oder Teddy-Schnitt.",
    description: "Für anspruchsvolles Langhaar...",
    features: ["Spezial-Shampoo", "Hand-Schnitt (Scissoring)", "Entfilzen (bis 15 Min)", "Styling"]
  },
  {
    id: "frisch-flauschig-langhaar",
    title: "Frisch & Flauschig (Langhaar)",
    slug: "frisch-flauschig-langhaar",
    category: "Langhaar",
    price: 75,
    image: spaImage,
    shortDescription: "Waschen, Föhnen & Unterwolle entfernen für Langhaar-Hunde.",
    description: "Befreit von loser Unterwolle...",
    features: ["Deep Clean Shampoo", "Unterwolle entfernen", "Konturen säubern", "Pfotenpflege"]
  }
];

export const pricingTiers = {
  shortHair: {
    small: 85,
    medium: 95,
    large: 110,
    xl: 130
  },
  longHair: {
    small: 105,
    medium: 125,
    large: 145,
    xl: 175
  }
};

// Calculate dates for the blog plan
// Week 1 was ~12 weeks ago, Week 24 is ~12 weeks in future
const today = new Date();
const oneWeek = 7 * 24 * 60 * 60 * 1000;
const startDate = new Date(today.getTime() - (12 * oneWeek));

const getPostDate = (weekNum: number) => {
  return new Date(startDate.getTime() + ((weekNum - 1) * oneWeek)).toISOString();
};

export const blogPosts = [
  // MONTH 1 — Foundations
  {
    slug: "wie-oft-hund-baden",
    title: "Wie oft sollte man einen Hund wirklich baden?",
    excerpt: "Zu oft oder zu selten? Wir klären auf, was für Haut und Fell Ihres Hundes am besten ist.",
    date: getPostDate(1),
    content: `
      <h2>Kurze Antwort</h2>
      <p>Die meisten Hunde sollten alle 4–8 Wochen gebadet werden – abhängig von Felltyp, Hautgesundheit und Aktivität. Für professionelle Pflege können Sie jederzeit bequem online Ihren Termin buchen: <a href="/booking">👉 Termin buchen</a></p>

      <h3>Warum die richtige Badfrequenz wichtig ist</h3>
      <p>Viele Hundebesitzer baden ihren Hund zu oft oder zu selten. Regelmäßige professionelle Behandlungen wie der <a href="/service/wunderschnitt-kurzhaar">Wunderschnitt für Kurzhaar</a> oder <a href="/service/frisch-flauschig-langhaar">Frisch & Flauschig Langhaar</a> schützen Haut & Fell langfristig.</p>

      <h3>Die ideale Badfrequenz nach Felltyp</h3>
      <h4>Kurzhaar (z. B. Mops, Beagle)</h4>
      <p>Alle 6–8 Wochen<br>Empfohlene Behandlung: <a href="/service/frisch-flauschig-kurzhaar">👉 Frisch & Flauschig Kurzhaar</a></p>

      <h4>Langhaar (Golden Retriever, Spaniel)</h4>
      <p>Alle 4–6 Wochen<br>Empfohlene Behandlung: <a href="/service/wunderschnitt-langhaar">👉 Der Wunderschnitt Langhaar</a></p>

      <h4>Lockenfell</h4>
      <p>3–4 Wochen</p>

      <h3>So erkennen Sie, dass Ihr Hund ein Bad braucht</h3>
      <p>Wenn Ihr Hund:</p>
      <ul>
      <li>riecht</li>
      <li>verfilzt</li>
      <li>viel haar verliert</li>
      </ul>
      <p>→ Dann direkt hier Termin sichern: <a href="/booking">👉 Online buchen</a></p>
    `,
    image: bathImage
  },
  {
    slug: "kurzhaar-vs-langhaar",
    title: "Kurzhaar vs. Langhaar: Welche Pflege braucht Ihr Hund?",
    excerpt: "Unterschiedliche Felle, unterschiedliche Bedürfnisse. Ein Leitfaden für jeden Felltyp.",
    date: getPostDate(2),
    content: `
      <h2>Kurzhaar vs. Langhaar: Welche Pflege braucht Ihr Hund?</h2>
      <p>Kurzhaar braucht weniger Schnittarbeit, Langhaar braucht häufigere Pflege.</p>
      <p>Für beide Felltypen bieten wir spezialisierte Services:</p>

      <h3>Kurzhaar:</h3>
      <p><a href="/service/wunderschnitt-kurzhaar">👉 Der Wunderschnitt Kurzhaar</a></p>
      <p><a href="/service/frisch-flauschig-kurzhaar">👉 Frisch & Flauschig Kurzhaar</a></p>

      <h3>Langhaar:</h3>
      <p><a href="/service/wunderschnitt-langhaar">👉 Der Wunderschnitt Langhaar</a></p>
      <p><a href="/service/frisch-flauschig-langhaar">👉 Frisch & Flauschig Langhaar</a></p>

      <h3>Warum Langhaar mehr Pflege benötigt</h3>
      <p>Verfilzungen → Lesen Sie auch: <a href="/blog/verfilztes-fell">👉 Der richtige Umgang mit verfilztem Fell</a></p>
    `,
    image: longHairImage
  },
  {
    slug: "anzeichen-professionelle-pflege",
    title: "5 Anzeichen, dass Ihr Hund professionelle Pflege braucht",
    excerpt: "Wann reicht Bürsten zuhause nicht mehr aus? Achten Sie auf diese Signale.",
    date: getPostDate(3),
    content: `
      <h2>Wann ist es Zeit für den Salon?</h2>
      <ol>
        <li><strong>Starker Geruch:</strong> Wenn auch nach dem Baden der "Hundegeruch" bleibt, kann das an Bakterien im Fell oder Hautproblemen liegen.</li>
        <li><strong>Lange Krallen:</strong> Wenn Sie das "Klick-Klack" auf dem Parkett hören, sind die Krallen zu lang und können Gelenkprobleme verursachen.</li>
        <li><strong>Verfilzungen:</strong> Kleine Knoten werden schnell zu großen Filzplatten, die schmerzhaft an der Haut ziehen.</li>
        <li><strong>Haare in den Augen:</strong> Wenn der Pony die Sicht versperrt, ist ein Schnitt fällig.</li>
        <li><strong>Juckreiz:</strong> Häufiges Kratzen kann auf Parasiten, aber auch auf nicht entfernte Unterwolle hindeuten.</li>
      </ol>
      <h3>Professionelle Hilfe</h3>
      <p>Bei Geruch, Filz, Juckreiz oder häufigem Haarverlust → <a href="/booking">👉 Termin vereinbaren</a></p>
      <p>Mehr Infos zu Verfilzungen im Artikel: <a href="/blog/verfilztes-fell">👉 Verfilztes Fell – Ursachen & Lösungen</a></p>
      <p>Bei starkem Haaren empfehlen wir: <a href="/service/wunderschnitt-kurzhaar">👉 Der Wunderschnitt Kurzhaar</a></p>
    `,
    image: mattedImage
  },
  {
    slug: "fellpflege-tipps-zuhause",
    title: "Die besten Fellpflege-Tipps für Zuhause",
    excerpt: "So halten Sie Ihren Hund zwischen den Salonbesuchen gepflegt und sauber.",
    date: getPostDate(4),
    content: "<h2>Routine ist alles</h2><p>Gewöhnen Sie Ihren Hund schon im Welpenalter an Kamm und Bürste. Machen Sie die Pflege zu einem positiven Ritual mit vielen Leckerlis.</p><h3>Das richtige Werkzeug</h3><p>Investieren Sie in gute Bürsten. Eine Zupfbürste für Unterwolle und ein Kamm für die Kontrolle sind die Grundausstattung.</p><h3>Weiterführende Tipps</h3><p>Shampoo wählen: <a href=\"/blog/shampoo-arten-sicher\">👉 Welche Shampoo-Arten sind sicher?</a></p><p>Richtige Bürste: <a href=\"/blog/hundebuersen-vergleich\">👉 Hundebürsten im Vergleich</a></p>",
    image: brushingImage
  },

  // MONTH 2 — Health & Prevention
  {
    slug: "professionelle-ohrenpflege",
    title: "Warum professionelle Ohrenpflege so wichtig ist",
    excerpt: "Ohrenentzündungen vorbeugen durch richtige Reinigung und Pflege.",
    date: getPostDate(5),
    content: "<h2>Ein sensibles Organ</h2><p>Hundeohren sind warm und feucht – das perfekte Klima für Bakterien und Pilze. Besonders Hunderassen mit Schlappohren sind gefährdet.</p><p>Im Salon zupfen wir sanft die Haare aus dem Gehörgang (falls nötig) und reinigen die Ohrmuschel fachgerecht.</p><p>Bei Symptomen → jetzt Termin buchen: <a href=\"/booking\">👉 Pflege buchen</a></p>",
    image: earImage
  },
  {
    slug: "hundebuersen-vergleich",
    title: "Hundebürsten im Vergleich – Welche ist die richtige?",
    excerpt: "Zupfbürste, Striegel oder Kamm? Wir erklären den Dschungel der Pflegewerkzeuge.",
    date: getPostDate(6),
    content: "<h2>Werkzeugkunde</h2><p>Für jede Fellart gibt es die passende Bürste. Wir zeigen Ihnen, welche Sie wirklich brauchen und welche nur Marketing sind.</p><p>Weitere Lesetipps: <a href=\"/blog/fellpflege-tipps-zuhause\">👉 Fellpflege-Tipps für Zuhause</a></p>",
    image: brushingImage
  },
  {
    slug: "verfilztes-fell",
    title: "Der richtige Umgang mit verfilztem Fell",
    excerpt: "Warum man Filz nicht einfach herausschneiden sollte und wie man ihn verhindert.",
    date: getPostDate(7),
    content: "<h2>Filz ist schmerzhaft</h2><p>Verfilzungen ziehen bei jeder Bewegung an der Haut. Versuchen Sie niemals, Filz mit einer Schere nah an der Haut herauszuschneiden – die Verletzungsgefahr ist riesig! Lassen Sie Profis ran.</p><h3>Passende Services gegen Verfilzungen:</h3><p><a href=\"/service/wunderschnitt-langhaar\">👉 Der Wunderschnitt Langhaar</a></p><p><a href=\"/service/frisch-flauschig-langhaar\">👉 Frisch & Flauschig Langhaar</a></p>",
    image: mattedImage
  },
  {
    slug: "hund-vorbereiten-grooming",
    title: "So bereiten Sie Ihren Hund auf den Grooming-Termin vor",
    excerpt: "Ein entspannter Hund macht die Pflege für alle leichter. Tipps für einen stressfreien Besuch.",
    date: getPostDate(8),
    content: "<h2>Vor dem Termin</h2><p>Gehen Sie vorher eine große Runde Gassi. Ein ausgepowerter Hund ist entspannter. Bitte füttern Sie kurz vor dem Termin keine großen Mengen.</p><p>Jetzt Vorbereitung abschließen → <a href=\"/booking\">👉 Grooming-Termin buchen</a></p>",
    image: calmImage
  },

  // MONTH 3 — Trust & Myths
  {
    slug: "mythen-hundepflege",
    title: "Die größten Mythen über Hundepflege",
    excerpt: "Wir räumen auf mit Ammenmärchen rund um Fell und Hygiene.",
    date: getPostDate(9),
    content: "<h2>Stimmt das wirklich?</h2><p>Mythos 1: Hunde im Winter nicht schneiden. Falsch! Verfilztes langes Fell wärmt nicht, sondern speichert Nässe. Ein gepflegter Schnitt ist auch im Winter wichtig.</p><p>Empfohlene Lektüre: <a href=\"/blog/kurzhaar-vs-langhaar\">👉 Stimmt es, dass Kurzhaar keine Pflege braucht?</a></p>",
    image: winterImage
  },
  {
    slug: "shampoo-arten-sicher",
    title: "Welche Shampoo-Arten sind sicher für Hunde?",
    excerpt: "Inhaltsstoffe, auf die Sie achten sollten, und was Sie vermeiden müssen.",
    date: getPostDate(10),
    content: "<h2>Natur pur</h2><p>Wir verwenden ausschließlich Shampoos auf natürlicher Basis ohne aggressive Chemikalien. Achten Sie auf pH-Neutralität und vermeiden Sie künstliche Duftstoffe.</p><p>Mehr Pflegewissen: <a href=\"/blog/fellpflege-tipps-zuhause\">👉 Die besten Fellpflege-Tipps</a></p>",
    image: shampooImage
  },
  {
    slug: "stressfreie-hundepflege",
    title: "Stressfreie Hundepflege: Unsere sanften Methoden erklärt",
    excerpt: "Wie wir auch ängstlichen Hunden eine angenehme Erfahrung bereiten.",
    date: getPostDate(11),
    content: "<h2>Angstfrei zum schönen Fell</h2><p>Wir arbeiten mit viel Geduld, Pausen und positiver Verstärkung. Kein Zwang, kein Stress. Ihr Hund bestimmt das Tempo.</p><h3>Empfohlene Services für sensible Hunde:</h3><p><a href=\"/service/frisch-flauschig-kurzhaar\">👉 Frisch & Flauschig Kurzhaar</a></p><p><a href=\"/service/frisch-flauschig-langhaar\">👉 Frisch & Flauschig Langhaar</a></p>",
    image: calmImage
  },
  {
    slug: "pfotencheck-warum-wichtig",
    title: "Warum regelmäßige Pfotenkontrolle gesundheitsrelevant ist",
    excerpt: "Streusalz, Grannen und lange Krallen – warum die Pfoten besondere Aufmerksamkeit brauchen.",
    date: getPostDate(12),
    content: "<h2>Tragende Rolle</h2><p>Die Pfoten tragen das ganze Gewicht. Kontrollieren Sie regelmäßig die Ballen auf Risse und die Zehenzwischenräume auf Fremdkörper wie Grannen.</p><h3>Direkt Pfotenservice mitbuchen:</h3><p><a href=\"/service/wunderschnitt-kurzhaar\">👉 Wunderschnitt Kurzhaar</a></p><p><a href=\"/service/wunderschnitt-langhaar\">👉 Wunderschnitt Langhaar</a></p>",
    image: pawImage
  },

  // MONTH 4 — Seasonal & Cycles
  {
    slug: "sommerfell-oder-winterfell",
    title: "Sommerfell oder Winterfell: Wann braucht mein Hund mehr Pflege?",
    excerpt: "Der Fellwechsel ist für viele Hunde eine Belastung. So unterstützen Sie Ihren Vierbeiner optimal.",
    date: getPostDate(13),
    content: "<h2>Fellwechsel-Zeit</h2><p>Inhalt folgt in Kürze.</p><p>Haben Sie Fragen zum Fellwechsel? <a href=\"/booking\">👉 Beratungstermin buchen</a></p>",
    image: winterImage
  },
  {
    slug: "fruehjahrsfell",
    title: "Frühjahrsfell: Warum Hunde im März & April besonders haaren",
    excerpt: "Warum das Frühjahr die intensivste Zeit für Hundehaare ist und was dagegen hilft.",
    date: getPostDate(14),
    content: "<h2>Der große Abwurf</h2><p>Inhalt folgt in Kürze.</p>",
    image: brushingImage
  },
  {
    slug: "fellpflege-routinen-winter",
    title: "Die besten Fellpflege-Routinen für den Winter in Wien",
    excerpt: "Schnee, Salz und Split: So schützen Sie Pfoten und Fell in der kalten Jahreszeit.",
    date: getPostDate(15),
    content: "<h2>Winter-Special</h2><p>Inhalt folgt in Kürze.</p>",
    image: winterImage
  },
  {
    slug: "wie-oft-krallen-schneiden",
    title: "Wie oft sollte man Krallen schneiden? (Kompletter Leitfaden)",
    excerpt: "Gesunde Pfoten brauchen kurze Krallen. Eine Anleitung für den richtigen Rhythmus.",
    date: getPostDate(16),
    content: "<h2>Klick-Klack?</h2><p>Inhalt folgt in Kürze.</p>",
    image: pawImage
  },

  // MONTH 5 — Specific Breeds
  {
    slug: "fellpflege-pudel-doodles",
    title: "Fellpflege für Pudel & Doodles – Was Besitzer wissen müssen",
    excerpt: "Lockenfell ist anspruchsvoll. Wir zeigen, wie Sie Verfilzungen vermeiden.",
    date: getPostDate(17),
    content: "<h2>Lockenpracht</h2><p>Inhalt folgt in Kürze.</p>",
    image: longHairImage
  },
  {
    slug: "pflege-golden-retriever",
    title: "Pflege von Golden Retrievern – Unterwolle richtig managen",
    excerpt: "Golden Retriever verlieren viel Haar. Mit der richtigen Technik bekommen Sie es in den Griff.",
    date: getPostDate(18),
    content: "<h2>Unterwolle Masterclass</h2><p>Inhalt folgt in Kürze.</p>",
    image: longHairImage
  },
  {
    slug: "pflege-shih-tzu-malteser",
    title: "Wie man Shih Tzus und Maltese richtig pflegt (mit Schnittformen)",
    excerpt: "Von Puppy-Cut bis Show-Look: Styling-Ideen für kleine Rassen.",
    date: getPostDate(19),
    content: "<h2>Kleiner Hund, große Pflege</h2><p>Inhalt folgt in Kürze.</p>",
    image: spaImage
  },
  {
    slug: "welpenpflege-erster-termin",
    title: "Welpenpflege: Ab wann braucht ein junger Hund seinen ersten Termin?",
    excerpt: "Der erste Besuch prägt das ganze Leben. So wird er zum Erfolg.",
    date: getPostDate(20),
    content: "<h2>Früh übt sich</h2><p>Inhalt folgt in Kürze.</p>",
    image: groomerImage
  },

  // MONTH 6 — Behavior & Advanced
  {
    slug: "angsthunde-beim-grooming",
    title: "Angsthunde beim Grooming: 7 Schritte für einen stressfreien Termin",
    excerpt: "Ihr Hund hat Angst vorm Friseur? Wir haben die Lösung.",
    date: getPostDate(21),
    content: "<h2>Keine Panik</h2><p>Inhalt folgt in Kürze.</p>",
    image: calmImage
  },
  {
    slug: "hunde-ungern-gebuerstet",
    title: "Warum einige Hunde ungern gebürstet werden – und was hilft",
    excerpt: "Wenn die Bürste zum Feind wird: Ursachenforschung und Trainingstipps.",
    date: getPostDate(22),
    content: "<h2>Bürstentraining</h2><p>Inhalt folgt in Kürze.</p>",
    image: brushingImage
  },
  {
    slug: "senioren-hunde-pflege",
    title: "Senioren-Hunde: Besondere Pflegebedürfnisse im Alter",
    excerpt: "Ältere Hunde brauchen mehr Komfort und Geduld. Darauf achten wir besonders.",
    date: getPostDate(23),
    content: "<h2>Respekt vor dem Alter</h2><p>Inhalt folgt in Kürze.</p>",
    image: calmImage
  },
  {
    slug: "allergien-empfindliche-haut",
    title: "Allergien & empfindliche Haut: Welcher Service ist der richtige?",
    excerpt: "Juckreiz und Rötungen? Wir beraten Sie zu hypoallergener Pflege.",
    date: getPostDate(24),
    content: "<h2>Sensibelchen</h2><p>Inhalt folgt in Kürze.</p>",
    image: shampooImage
  }
];
