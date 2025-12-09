import heroImage from "@assets/generated_images/elegant_dog_grooming_salon_hero_image.png";
import shortHairImage from "@assets/generated_images/beagle_dog_grooming_close_up.png";
import longHairImage from "@assets/generated_images/long_haired_dog_grooming_spa.png";
import groomerImage from "@assets/generated_images/professional_dog_groomer_portrait.png";
import detailImage from "@assets/generated_images/dog_spa_detail_shot.png";

export const siteData = {
  name: "Hundesalon Laika Wien",
  tagline: "Premium Pflege. Liebevolle Betreuung. Glückliche Hunde.",
  phone: "+43 1 234 5678",
  email: "hallo@hundesalon-laika.at",
  address: "Premiumstraße 1, 1010 Wien",
  openingHours: "Mo-Fr: 09:00 - 18:00 | Sa: 10:00 - 14:00",
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
      <h2>Die Wahrheit über das Baden von Hunden</h2>
      <p>Es ist eine der häufigsten Fragen, die wir im Salon hören: "Wie oft darf ich meinen Hund eigentlich baden?" Die Antwort ist nicht immer einfach, denn sie hängt stark von der Rasse, dem Felltyp und dem Lebensstil Ihres Vierbeiners ab.</p>
      
      <h3>Der Mythos vom "Selbstreinigenden Hund"</h3>
      <p>Früher hieß es oft, man solle Hunde so selten wie möglich baden, um den Säureschutzmantel der Haut nicht zu zerstören. Dank moderner, pH-neutraler Hundeshampoos ist diese Regel jedoch veraltet. Heute gilt: Baden Sie Ihren Hund so oft wie nötig, aber so selten wie möglich.</p>

      <h3>Felltyp entscheidet</h3>
      <p>Hunde mit langem, seidigem Fell (wie Malteser oder Yorkshire Terrier) benötigen häufigere Bäder (alle 2-4 Wochen), um Verfilzungen zu vermeiden. Kurzhaarige Rassen kommen oft mit selteneren Bädern aus, es sei denn, sie haben sich im Schlamm gewälzt.</p>

      <h3>Die richtigen Produkte</h3>
      <p>Verwenden Sie niemals Menschenshampoo! Der pH-Wert der Hundehaut unterscheidet sich von unserem. Ein hochwertiges, rückfettendes Hundeshampoo ist essentiell für gesundes Fell.</p>
    `,
    image: detailImage
  },
  {
    slug: "kurzhaar-vs-langhaar",
    title: "Kurzhaar vs. Langhaar: Welche Pflege braucht Ihr Hund?",
    excerpt: "Unterschiedliche Felle, unterschiedliche Bedürfnisse. Ein Leitfaden für jeden Felltyp.",
    content: `
      <h2>Jedes Fell ist anders</h2>
      <p>Ob kurzes, borstiges Haar oder lange, weiche Mähne – die Pflegebedürfnisse von Hunden sind so individuell wie ihre Persönlichkeiten.</p>
      <h3>Kurzhaar-Pflege</h3>
      <p>Viele Besitzer von Kurzhaar-Rassen glauben irrtümlich, diese bräuchten keine Pflege. Falsch! Auch kurzes Fell muss regelmäßig gebürstet werden, um lose Haare zu entfernen und die Durchblutung der Haut anzuregen. Ein Gummistriegel wirkt hier Wunder.</p>
      <h3>Langhaar-Herausforderungen</h3>
      <p>Langhaarige Hunde neigen zu Verfilzungen, besonders hinter den Ohren und unter den Achseln. Tägliches Bürsten ist Pflicht. Professionelle Pflege alle 6-8 Wochen hilft, die Frisur in Form zu halten und die Haut gesund zu bewahren.</p>
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
    `,
    image: shortHairImage
  },
  {
    slug: "fellpflege-tipps-zuhause",
    title: "Die besten Fellpflege-Tipps für Zuhause",
    excerpt: "So halten Sie Ihren Hund zwischen den Salonbesuchen gepflegt und sauber.",
    content: "<h2>Routine ist alles</h2><p>Gewöhnen Sie Ihren Hund schon im Welpenalter an Kamm und Bürste. Machen Sie die Pflege zu einem positiven Ritual mit vielen Leckerlis.</p><h3>Das richtige Werkzeug</h3><p>Investieren Sie in gute Bürsten. Eine Zupfbürste für Unterwolle und ein Kamm für die Kontrolle sind die Grundausstattung.</p>",
    image: detailImage
  },
  {
    slug: "ohrenpflege-wichtig",
    title: "Warum professionelle Ohrenpflege so wichtig ist",
    excerpt: "Ohrenentzündungen vorbeugen durch richtige Reinigung und Pflege.",
    content: "<h2>Ein sensibles Organ</h2><p>Hundeohren sind warm und feucht – das perfekte Klima für Bakterien und Pilze. Besonders Hunderassen mit Schlappohren sind gefährdet.</p><p>Im Salon zupfen wir sanft die Haare aus dem Gehörgang (falls nötig) und reinigen die Ohrmuschel fachgerecht.</p>",
    image: groomerImage
  },
  {
    slug: "buersten-vergleich",
    title: "Hundebürsten im Vergleich: Welche ist die richtige?",
    excerpt: "Zupfbürste, Striegel oder Kamm? Wir erklären den Dschungel der Pflegewerkzeuge.",
    content: "<h2>Werkzeugkunde</h2><p>Für jede Fellart gibt es die passende Bürste. Wir zeigen Ihnen, welche Sie wirklich brauchen und welche nur Marketing sind.</p>",
    image: detailImage
  },
  {
    slug: "umgang-verfilzungen",
    title: "Der richtige Umgang mit verfilztem Fell",
    excerpt: "Warum man Filz nicht einfach herausschneiden sollte und wie man ihn verhindert.",
    content: "<h2>Filz ist schmerzhaft</h2><p>Verfilzungen ziehen bei jeder Bewegung an der Haut. Versuchen Sie niemals, Filz mit einer Schere nah an der Haut herauszuschneiden – die Verletzungsgefahr ist riesig! Lassen Sie Profis ran.</p>",
    image: longHairImage
  },
  {
    slug: "vorbereitung-grooming",
    title: "So bereiten Sie Ihren Hund auf den Grooming-Termin vor",
    excerpt: "Ein entspannter Hund macht die Pflege für alle leichter. Tipps für einen stressfreien Besuch.",
    content: "<h2>Vor dem Termin</h2><p>Gehen Sie vorher eine große Runde Gassi. Ein ausgepowerter Hund ist entspannter. Bitte füttern Sie kurz vor dem Termin keine großen Mengen.</p>",
    image: groomerImage
  },
  {
    slug: "mythen-hundepflege",
    title: "Die größten Mythen über Hundepflege",
    excerpt: "Wir räumen auf mit Ammenmärchen rund um Fell und Hygiene.",
    content: "<h2>Stimmt das wirklich?</h2><p>Mythos 1: Hunde im Winter nicht schneiden. Falsch! Verfilztes langes Fell wärmt nicht, sondern speichert Nässe. Ein gepflegter Schnitt ist auch im Winter wichtig.</p>",
    image: shortHairImage
  },
  {
    slug: "shampoo-arten",
    title: "Welche Shampoo-Arten sind sicher für Hunde?",
    excerpt: "Inhaltsstoffe, auf die Sie achten sollten, und was Sie vermeiden müssen.",
    content: "<h2>Natur pur</h2><p>Wir verwenden ausschließlich Shampoos auf natürlicher Basis ohne aggressive Chemikalien. Achten Sie auf pH-Neutralität und vermeiden Sie künstliche Duftstoffe.</p>",
    image: detailImage
  },
  {
    slug: "stressfreie-pflege",
    title: "Stressfreie Hundepflege: Unsere sanften Methoden erklärt",
    excerpt: "Wie wir auch ängstlichen Hunden eine angenehme Erfahrung bereiten.",
    content: "<h2>Angstfrei zum schönen Fell</h2><p>Wir arbeiten mit viel Geduld, Pausen und positiver Verstärkung. Kein Zwang, kein Stress. Ihr Hund bestimmt das Tempo.</p>",
    image: groomerImage
  },
  {
    slug: "pfotenkontrolle",
    title: "Warum regelmäßige Pfotenkontrolle gesundheitsrelevant ist",
    excerpt: "Streusalz, Grannen und lange Krallen – warum die Pfoten besondere Aufmerksamkeit brauchen.",
    content: "<h2>Tragende Rolle</h2><p>Die Pfoten tragen das ganze Gewicht. Kontrollieren Sie regelmäßig die Ballen auf Risse und die Zehenzwischenräume auf Fremdkörper wie Grannen.</p>",
    image: detailImage
  }
];
