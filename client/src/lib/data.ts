import heroImage from "@assets/generated_images/elegant_dog_grooming_salon_hero_image.png";
import shortHairImage from "@assets/generated_images/beagle_dog_grooming_close_up.png";
import longHairImage from "@assets/generated_images/long_haired_dog_grooming_spa.png";
import groomerImage from "@assets/generated_images/professional_dog_groomer_portrait.png";
import detailImage from "@assets/generated_images/dog_spa_detail_shot.png";

// Blog Images
import bathImage from "@assets/generated_images/dog_getting_a_gentle_bath.png";
import brushingImage from "@assets/generated_images/dog_owner_brushing_dog_at_home.png";
import earImage from "@assets/generated_images/close_up_of_dog_ear_cleaning.png";
import pawImage from "@assets/generated_images/close_up_of_dog_paw_check.png";
import mattedImage from "@assets/generated_images/groomer_dealing_with_matted_fur.png";
import winterImage from "@assets/generated_images/happy_dog_in_winter_setting.png";
import calmImage from "@assets/generated_images/calm_relaxed_dog_in_salon.png";
import shampooImage from "@assets/generated_images/natural_dog_shampoo_bottles.png";

export const siteData = {
  name: "Hundesalon Laika",
  tagline: "Premium Pflege. Liebevolle Betreuung. Glückliche Hunde.",
  phone: "0699 10 36 71 16",
  email: "hundesalon-laika-1090-wien@hotmail.com",
  address: "Grünentorgasse, 8/1 1090, Wien",
  openingHours: "Mo-Sa: 09:00 - 18:00 | So & Feiertag möglich\nTermine nach telefonischer Vereinbarung",
  bookingLink: "/booking",
  images: {
    hero: heroImage,
    shortHair: shortHairImage,
    longHair: longHairImage,
    groomer: groomerImage,
    detail: detailImage
  }
};

export const services = [
  {
    id: "wunderschnitt-kurzhaar",
    title: "Der Wunderschnitt (Kurzhaar)",
    shortDescription: "Komplettpflege für kurzhaarige Rassen.",
    description: "Unser Premium-Paket für kurzhaarige Hunde. Beinhaltet ein entspannendes Bad mit hochwertigen Shampoos, professionelles Föhnen, Krallenpflege, Ohrenreinigung und das Entfernen von loser Unterwolle.",
    price: 75,
    image: shortHairImage,
    features: ["Baden & Föhnen", "Unterwolle entfernen", "Krallen & Ohren", "Pfotenpflege"],
    category: "Kurzhaar"
  },
  {
    id: "frisch-flauschig-kurzhaar",
    title: "Frisch & Flauschig (Kurzhaar)",
    shortDescription: "Das schnelle Auffrischungs-Programm.",
    description: "Ideal für zwischendurch. Ein gründliches Bad, Föhnen und Bürsten, damit Ihr Liebling wieder frisch riecht und strahlt.",
    price: 45,
    image: detailImage,
    features: ["Baden", "Föhnen", "Bürsten", "Duftspray"],
    category: "Kurzhaar"
  },
  {
    id: "wunderschnitt-langhaar",
    title: "Der Wunderschnitt (Langhaar)",
    shortDescription: "Exklusiver Schnitt & Styling für langes Fell.",
    description: "Das volle Verwöhnprogramm für Langhaar-Rassen. Baden, Föhnen, Entfilzen, professioneller Schnitt nach Rassestandard oder Kundenwunsch, sowie Krallen- und Ohrenpflege.",
    price: 115,
    image: longHairImage,
    features: ["Baden & Föhnen", "Schnitt & Styling", "Entfilzen", "Krallen & Ohren"],
    category: "Langhaar"
  },
  {
    id: "frisch-flauschig-langhaar",
    title: "Frisch & Flauschig (Langhaar)",
    shortDescription: "Bad & Bürsten für gepflegtes langes Fell.",
    description: "Perfekt, um Verfilzungen vorzubeugen. Wir baden Ihren Hund, föhnen ihn sanft und bürsten das Fell gründlich durch.",
    price: 55,
    image: detailImage, // Reusing detail image for variety if needed, or could reuse longHair
    features: ["Baden", "Sanftes Föhnen", "Gründliches Bürsten", "Augenpflege"],
    category: "Langhaar"
  }
];

export const pricingTiers = {
  shortHair: {
    small: 75,
    medium: 105,
    large: 125,
    xl: 165
  },
  longHair: {
    small: 115,
    medium: 145,
    large: 165,
    xl: 195
  }
};

export const testimonials = [
  {
    name: "Anna M.",
    dog: "Luna (Golden Retriever)",
    text: "Der beste Hundesalon in Wien! Laika sieht nach jedem Besuch wunderschön aus und duftet herrlich. Besonders toll finde ich den liebevollen Umgang."
  },
  {
    name: "Thomas K.",
    dog: "Max (Beagle)",
    text: "Endlich ein Groomer, bei dem Max keine Angst hat. Das Team ist super professionell und die Atmosphäre ist sehr entspannt. Klare Empfehlung!"
  },
  {
    name: "Sarah L.",
    dog: "Coco (Pudel)",
    text: "Ich bin begeistert vom Wunderschnitt! Coco sieht aus wie ein kleiner Teddybär. Der Preis ist für diese Qualität absolut gerechtfertigt."
  },
  {
    name: "Michael R.",
    dog: "Bello (Mischling)",
    text: "Sehr transparentes Preissystem und super einfache Online-Buchung. Wir kommen definitiv wieder."
  }
];

export const blogPosts = [
  {
    slug: "wie-oft-baden",
    title: "Wie oft sollte man einen Hund wirklich baden?",
    excerpt: "Zu oft oder zu selten? Wir klären auf, was für Haut und Fell Ihres Hundes am besten ist.",
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
      <p>Verfilzungen → Lesen Sie auch: <a href="/blog/umgang-verfilzungen">👉 Der richtige Umgang mit verfilztem Fell</a></p>
    `,
    image: longHairImage
  },
  {
    slug: "anzeichen-fuer-profi",
    title: "5 Anzeichen, dass Ihr Hund einen professionellen Pflegetermin braucht",
    excerpt: "Wann reicht Bürsten zuhause nicht mehr aus? Achten Sie auf diese Signale.",
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
      <p>Mehr Infos zu Verfilzungen im Artikel: <a href="/blog/umgang-verfilzungen">👉 Verfilztes Fell – Ursachen & Lösungen</a></p>
      <p>Bei starkem Haaren empfehlen wir: <a href="/service/wunderschnitt-kurzhaar">👉 Der Wunderschnitt Kurzhaar</a></p>
    `,
    image: mattedImage
  },
  {
    slug: "fellpflege-tipps-zuhause",
    title: "Die besten Fellpflege-Tipps für Zuhause",
    excerpt: "So halten Sie Ihren Hund zwischen den Salonbesuchen gepflegt und sauber.",
    content: "<h2>Routine ist alles</h2><p>Gewöhnen Sie Ihren Hund schon im Welpenalter an Kamm und Bürste. Machen Sie die Pflege zu einem positiven Ritual mit vielen Leckerlis.</p><h3>Das richtige Werkzeug</h3><p>Investieren Sie in gute Bürsten. Eine Zupfbürste für Unterwolle und ein Kamm für die Kontrolle sind die Grundausstattung.</p><h3>Weiterführende Tipps</h3><p>Shampoo wählen: <a href=\"/blog/shampoo-arten\">👉 Welche Shampoo-Arten sind sicher?</a></p><p>Richtige Bürste: <a href=\"/blog/buersten-vergleich\">👉 Hundebürsten im Vergleich</a></p>",
    image: brushingImage
  },
  {
    slug: "ohrenpflege-wichtig",
    title: "Warum professionelle Ohrenpflege so wichtig ist",
    excerpt: "Ohrenentzündungen vorbeugen durch richtige Reinigung und Pflege.",
    content: "<h2>Ein sensibles Organ</h2><p>Hundeohren sind warm und feucht – das perfekte Klima für Bakterien und Pilze. Besonders Hunderassen mit Schlappohren sind gefährdet.</p><p>Im Salon zupfen wir sanft die Haare aus dem Gehörgang (falls nötig) und reinigen die Ohrmuschel fachgerecht.</p><p>Bei Symptomen → jetzt Termin buchen: <a href=\"/booking\">👉 Pflege buchen</a></p>",
    image: earImage
  },
  {
    slug: "buersten-vergleich",
    title: "Hundebürsten im Vergleich: Welche ist die richtige?",
    excerpt: "Zupfbürste, Striegel oder Kamm? Wir erklären den Dschungel der Pflegewerkzeuge.",
    content: "<h2>Werkzeugkunde</h2><p>Für jede Fellart gibt es die passende Bürste. Wir zeigen Ihnen, welche Sie wirklich brauchen und welche nur Marketing sind.</p><p>Weitere Lesetipps: <a href=\"/blog/fellpflege-tipps-zuhause\">👉 Fellpflege-Tipps für Zuhause</a></p>",
    image: brushingImage
  },
  {
    slug: "umgang-verfilzungen",
    title: "Der richtige Umgang mit verfilztem Fell",
    excerpt: "Warum man Filz nicht einfach herausschneiden sollte und wie man ihn verhindert.",
    content: "<h2>Filz ist schmerzhaft</h2><p>Verfilzungen ziehen bei jeder Bewegung an der Haut. Versuchen Sie niemals, Filz mit einer Schere nah an der Haut herauszuschneiden – die Verletzungsgefahr ist riesig! Lassen Sie Profis ran.</p><h3>Passende Services gegen Verfilzungen:</h3><p><a href=\"/service/wunderschnitt-langhaar\">👉 Der Wunderschnitt Langhaar</a></p><p><a href=\"/service/frisch-flauschig-langhaar\">👉 Frisch & Flauschig Langhaar</a></p>",
    image: mattedImage
  },
  {
    slug: "vorbereitung-grooming",
    title: "So bereiten Sie Ihren Hund auf den Grooming-Termin vor",
    excerpt: "Ein entspannter Hund macht die Pflege für alle leichter. Tipps für einen stressfreien Besuch.",
    content: "<h2>Vor dem Termin</h2><p>Gehen Sie vorher eine große Runde Gassi. Ein ausgepowerter Hund ist entspannter. Bitte füttern Sie kurz vor dem Termin keine großen Mengen.</p><p>Jetzt Vorbereitung abschließen → <a href=\"/booking\">👉 Grooming-Termin buchen</a></p>",
    image: calmImage
  },
  {
    slug: "mythen-hundepflege",
    title: "Die größten Mythen über Hundepflege",
    excerpt: "Wir räumen auf mit Ammenmärchen rund um Fell und Hygiene.",
    content: "<h2>Stimmt das wirklich?</h2><p>Mythos 1: Hunde im Winter nicht schneiden. Falsch! Verfilztes langes Fell wärmt nicht, sondern speichert Nässe. Ein gepflegter Schnitt ist auch im Winter wichtig.</p><p>Empfohlene Lektüre: <a href=\"/blog/kurzhaar-vs-langhaar\">👉 Stimmt es, dass Kurzhaar keine Pflege braucht?</a></p>",
    image: winterImage
  },
  {
    slug: "shampoo-arten",
    title: "Welche Shampoo-Arten sind sicher für Hunde?",
    excerpt: "Inhaltsstoffe, auf die Sie achten sollten, und was Sie vermeiden müssen.",
    content: "<h2>Natur pur</h2><p>Wir verwenden ausschließlich Shampoos auf natürlicher Basis ohne aggressive Chemikalien. Achten Sie auf pH-Neutralität und vermeiden Sie künstliche Duftstoffe.</p><p>Mehr Pflegewissen: <a href=\"/blog/fellpflege-tipps-zuhause\">👉 Die besten Fellpflege-Tipps</a></p>",
    image: shampooImage
  },
  {
    slug: "stressfreie-pflege",
    title: "Stressfreie Hundepflege: Unsere sanften Methoden erklärt",
    excerpt: "Wie wir auch ängstlichen Hunden eine angenehme Erfahrung bereiten.",
    content: "<h2>Angstfrei zum schönen Fell</h2><p>Wir arbeiten mit viel Geduld, Pausen und positiver Verstärkung. Kein Zwang, kein Stress. Ihr Hund bestimmt das Tempo.</p><h3>Empfohlene Services für sensible Hunde:</h3><p><a href=\"/service/frisch-flauschig-kurzhaar\">👉 Frisch & Flauschig Kurzhaar</a></p><p><a href=\"/service/frisch-flauschig-langhaar\">👉 Frisch & Flauschig Langhaar</a></p>",
    image: calmImage
  },
  {
    slug: "pfotenkontrolle",
    title: "Warum regelmäßige Pfotenkontrolle gesundheitsrelevant ist",
    excerpt: "Streusalz, Grannen und lange Krallen – warum die Pfoten besondere Aufmerksamkeit brauchen.",
    content: "<h2>Tragende Rolle</h2><p>Die Pfoten tragen das ganze Gewicht. Kontrollieren Sie regelmäßig die Ballen auf Risse und die Zehenzwischenräume auf Fremdkörper wie Grannen.</p><h3>Direkt Pfotenservice mitbuchen:</h3><p><a href=\"/service/wunderschnitt-kurzhaar\">👉 Wunderschnitt Kurzhaar</a></p><p><a href=\"/service/wunderschnitt-langhaar\">👉 Wunderschnitt Langhaar</a></p>",
    image: pawImage
  }
];
