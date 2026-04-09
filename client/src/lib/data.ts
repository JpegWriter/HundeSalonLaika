
import bathImage from "@assets/generated_images/dog_getting_a_gentle_bath.png";
import longHairImage from "@assets/generated_images/long_haired_dog_grooming_spa.png";
import mattedImage from "@assets/generated_images/groomer_dealing_with_matted_fur.png";
import brushingImage from "@assets/generated_images/dog_owner_brushing_dog_at_home.png";
import earImage from "@assets/generated_images/close_up_of_dog_ear_cleaning.png";
import calmImage from "@assets/generated_images/calm_relaxed_dog_in_salon.png";
import winterImage from "@assets/generated_images/happy_dog_in_winter_setting.png";
import shampooImage from "@assets/generated_images/natural_dog_shampoo_bottles.png";
import pawImage from "@assets/generated_images/close_up_of_dog_paw_check.png";
import spaImage from "@assets/generated_images/dog_spa_detail_shot.png";
import groomerImage from "@assets/generated_images/professional_dog_groomer_portrait.png";
import bellaImage from "@assets/generated_images/cockapoo_matted_bella.png";
import maxImage from "@assets/generated_images/aggressive_dog_max.png";
import teddyImage from "@assets/generated_images/puppy_grooming_teddy.jpg";
import charlieImage from "@assets/generated_images/senior_dog_charlie.jpg";
import rockyImage from "@assets/generated_images/skin_issues_rocky.jpg";
import brunoImage from "@assets/generated_images/dirty_dog_bruno.jpg";
import oliverImage from "@assets/generated_images/poodle_precision_oliver.jpg";
import miloImage from "@assets/generated_images/bathing_dog_milo.jpg";
import cocoImage from "@assets/generated_images/nail_grinding_coco.webp";
import alfieImage from "@assets/generated_images/cavapoo_alfie_grooming.webp";
import rosieImage from "@assets/generated_images/shihtzu_rosie_notfall_grooming.jpg";

// Site Data
export const siteData = {
  tagline: "Sanfte Fellpflege mit Herz & Verstand",
  address: "Grünentorgasse 8, 1090 Wien",
  phone: "+43 650 861 3405",
  phoneSecondary: "+43 699 1036 7116",
  email: "hundesalonlaika@gmail.com",
  openingHours: "Terminvereinbarung / by appointment",
  images: {
    hero: spaImage, // Using spa image as hero for now
    groomer: groomerImage,
  },
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
    id: "erfrischungsbad-hund",
    title: "Erfrischungsbad, Frisch & Flauschig (Hund) – ideal für Zwischendurch",
    slug: "erfrischungsbad-frisch-flauschig-hund",
    category: "Hund",
    price: 0,
    image: bathImage,
    shortDescription:
      "Sanftes Bad, trocknen und ausbürsten – die perfekte Zwischenpflege.",
    description:
      "Sanfte Pflege für zwischendurch: Waschen, trocknen, ausbürsten/auskämmen, Ohrenreinigung, Krallen kürzen, Pfotenballen von Haaren befreien und Pfotenpflege.",
    features: [
      "Waschen, trocknen, ausbürsten/auskämmen",
      "Ohrenreinigung & Krallen kürzen",
      "Pfotenballen befreien & Pfotenpflege",
    ],
  },
  {
    id: "komplettpflege-hund",
    title: "Komplettpflege (Hund)",
    slug: "komplettpflege-hund",
    category: "Hund",
    price: 0,
    image: longHairImage,
    shortDescription:
      "Komplette Pflege inkl. Schnitt und individueller Fellbearbeitung.",
    description:
      "Komplettpflege mit individuellem Styling: Waschen, trocknen, ausbürsten/auskämmen, Ohrenreinigung, Krallen kürzen, Pfotenballen von Haaren befreien, Pfotenpflege. Je nachdem: Scherenschnitt, Schur, von Hand trimmen und carden, Unterwolle entfernen. Entfilzen, falls vertretbar, maximal 15 Minuten. Konturen-Schnitt.",
    features: [
      "Komplettpflege inklusive Hygiene",
      "Scherenschnitt/Schur/Trimmen nach Bedarf",
      "Unterwolle entfernen & Konturen-Schnitt",
    ],
  },
];

export const sizeOptions = [
  { id: "xxs", label: "XXS", desc: "z.B. Kurzhaar Chihuahua", price: 50 },
  { id: "xs", label: "XS", desc: "bis 3 Kg (auch junge Katzen)", price: 60 },
  { id: "s", label: "S", desc: "bis 6 Kg (auch kooperative Hauskatzen)", price: 75 },
  { id: "m", label: "M", desc: "bis 16 Kg (oder z.B. Maine Coon)", price: 80 },
  { id: "l", label: "L", desc: "bis 39 Kg", price: 90 },
  { id: "xl", label: "XL", desc: "ab 40 Kg", price: 100 },
];

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
      <h2>Wie oft sollte man einen Hund wirklich baden?</h2>
      <p>Viele Hundebesitzer fragen sich, wie oft Baden gesund ist. Zu häufiges Waschen kann die Haut austrocknen – zu seltenes Baden führt zu Geruch, Schmutzansammlung und potenziellen Hautproblemen. Doch was ist der ideale Rhythmus?</p>

      <h3>1. Die richtige Badehäufigkeit – eine klare Empfehlung</h3>
      <p>Die meisten Hunde sollten alle <strong>4–8 Wochen</strong> gebadet werden.</p>
      <p>Ausnahmen:</p>
      <ul>
        <li>Hunde mit Hautproblemen → nach Tierarztanweisung</li>
        <li>Hunde, die viel draußen sind → häufiger</li>
        <li>Rassen mit lockigem Fell (Pudel, Doodles) → eher alle 2–4 Wochen, kombiniert mit gründlichem Bürsten</li>
      </ul>

      <h3>2. Warum Über-Baden schadet</h3>
      <p>Zu häufiges Baden kann negative Effekte haben:</p>
      <ul>
        <li>trockene, irritierte Haut</li>
        <li>Verlust der natürlichen Schutzschicht</li>
        <li>erhöhtes Risiko für Juckreiz</li>
      </ul>
      <p>Verwenden Sie unbedingt <strong>pH‑neutrale Hundeshampoos</strong>, die speziell für Hundehaut entwickelt wurden. Mehr dazu lesen Sie im Artikel <a href="/blog/shampoo-arten-sicher">👉 Welche Shampoo-Arten sind sicher für Hunde?</a></p>

      <h3>3. Wann Baden sofort notwendig ist</h3>
      <p>Unabhängig vom regulären Rhythmus ist ein Bad sofort sinnvoll, wenn:</p>
      <ul>
        <li>Ihr Hund mit Streusalz im Winter in Kontakt gekommen ist</li>
        <li>Schlamm &amp; Pollen im Fell sitzen (besonders bei empfindlichen Hunden)</li>
        <li>ein Ungezieferbefall festgestellt wurde</li>
        <li>starker Geruch besteht, obwohl regelmäßig gebürstet wird</li>
      </ul>

      <h3>4. Wie professionelle Bäder helfen</h3>
      <p>Im Salon wird Ihr Hund gründlich, aber schonend gepflegt:</p>
      <ul>
        <li>gründliches, hautschonendes Waschen mit abgestimmten Pflegeprodukten</li>
        <li>Lösen von Unterwolle und Schmutz</li>
        <li>Reinigung von Pfoten und Ohren</li>
        <li>fachgerechtes Föhnen, ohne das Haar zu schädigen</li>
      </ul>
      <p>Im Hundesalon Laika in Wien achten wir darauf, Fell und Haut individuell zu beurteilen und den Waschrhythmus mit Ihnen abzustimmen.</p>

      <h3>Fazit</h3>
      <p>Die perfekte Badefrequenz hängt von Felltyp, Hautgesundheit und Lebensstil ab. Regelmäßige professionelle Pflege sorgt für Glanz, Hygiene und Komfort – und verhindert, dass sich kleine Probleme zu großen Themen entwickeln.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
      <p><a href="/services">👉 Pflegepakete ansehen</a></p>
    `,
    image: bathImage
  },
  {
    slug: "kurzhaar-vs-langhaar",
    title: "Kurzhaar vs. Langhaar: Welche Pflege braucht Ihr Hund?",
    excerpt: "Unterschiedliche Felle, unterschiedliche Bedürfnisse. Ein Leitfaden für jeden Felltyp.",
    date: getPostDate(2),
    content: `
      <h2>Kurzhaar vs. Langhaar – Welche Pflege braucht Ihr Hund?</h2>
      <p>Kurzhaarhunde gelten als pflegeleicht, Langhaarhunde als anspruchsvoll – doch das ist nur die halbe Wahrheit. Beide Felltypen benötigen eine eigene Strategie.</p>

      <h3>1. Pflegebedarf von Kurzhaarhunden</h3>
      <p>Kurzhaarhunde:</p>
      <ul>
        <li>verlieren oft mehr Haare als erwartet</li>
        <li>entwickeln leichter Hautschuppen</li>
        <li>profitieren enorm von Entwollungs-Behandlungen</li>
      </ul>
      <p>Wichtig ist regelmäßiges Striegeln, damit lose Haare entfernt werden und die Haut atmen kann.</p>

      <h3>2. Pflegebedarf von Langhaarhunden</h3>
      <p>Langhaarhunde brauchen deutlich mehr Aufmerksamkeit:</p>
      <ul>
        <li>tägliches Bürsten</li>
        <li>regelmäßiges Entfilzen</li>
        <li>professionelle Schnitte in sinnvollen Abständen</li>
        <li>hochwertige, zum Felltyp passende Shampoos</li>
      </ul>
      <p>Rassen wie Havaneser, Maltese, Shih Tzu und Doodles sind besonders wartungsintensiv. Ohne konsequente Pflege verfilzt das Fell schnell und die Haut leidet.</p>

      <h3>3. Häufige Fehler</h3>
      <ul>
        <li>Selbst-Schneiden ohne Know-how (Gefahr von Verletzungen und ungleichmäßigem Fell)</li>
        <li>falsche Bürstenwahl für den jeweiligen Felltyp</li>
        <li>zu seltenes Waschen bei Langhaarhunden, aus Angst “zu viel” zu pflegen</li>
      </ul>
      <p>Lesen Sie dazu auch unseren Artikel <a href="/blog/hundebuersen-vergleich">👉 Hundebürsten im Vergleich</a>, um das richtige Werkzeug für Ihren Hund zu wählen.</p>

      <h3>Fazit</h3>
      <p>Kurzhaar- und Langhaarhunde unterscheiden sich stark – die passende Routine verhindert Haut- und Fellprobleme langfristig. Professionelle Unterstützung im Hundesalon Laika in 1090 Wien hilft Ihnen, die ideale Pflege für Ihren Vierbeiner zu finden.</p>

      <p><a href="/services">👉 Unsere Kurz- und Langhaar-Pflegepakete ansehen</a></p>
      <p><a href="/booking">👉 Direkt Terminanfrage senden</a></p>
    `,
    image: longHairImage
  },
  {
    slug: "anzeichen-professionelle-pflege",
    title: "5 Anzeichen, dass Ihr Hund professionelle Pflege braucht",
    excerpt: "Wann reicht Bürsten zuhause nicht mehr aus? Achten Sie auf diese Signale.",
    date: getPostDate(3),
    content: `
      <h2>5 Anzeichen, dass Ihr Hund professionelle Pflege braucht</h2>
      <p>Viele Hundebesitzer bemerken nicht sofort, dass ihr Hund einen professionellen Grooming-Termin benötigt. Diese fünf Signale sollten Sie ernst nehmen.</p>

      <h3>1. Verfilzungen oder Knoten</h3>
      <p>Kleine Filze entstehen schneller, als man denkt – besonders hinter den Ohren, an den Hosen oder in der Rute. Sie ziehen bei jeder Bewegung an der Haut und können schmerzhaft werden. Mit professioneller Entfilzung beugen Sie Hautreizungen und sogar Entzündungen vor.</p>
      <p>Mehr zum Thema lesen Sie im Artikel <a href="/blog/verfilztes-fell">👉 Der richtige Umgang mit verfilztem Fell</a>.</p>

      <h3>2. Starker Geruch</h3>
      <p>Wenn Ihr Hund trotz regelmäßigem Bürsten und gelegentlichem Baden weiterhin stark riecht, ist das ein Warnsignal. Es können sich Talg, Bakterien oder Hefepilze im Fell angesammelt haben. Eine professionelle Tiefenreinigung mit geeigneten Pflegeprodukten hilft, Haut und Fell wieder ins Gleichgewicht zu bringen.</p>

      <h3>3. Hautschuppen &amp; Juckreiz</h3>
      <p>Schuppen und ständiges Kratzen sind häufige Anzeichen für:</p>
      <ul>
        <li>trockene, gereizte Haut</li>
        <li>Unterwolle-Stau</li>
        <li>ein ungeeignetes oder zu aggressives Shampoo</li>
      </ul>
      <p>Im Hundesalon Laika achten wir auf pH‑neutrale, hautfreundliche Produkte und beraten Sie gerne, welches Pflegeprogramm zu Ihrem Hund passt.</p>

      <h3>4. Haarbüschel im Haus</h3>
      <p>Wenn Sie plötzlich überall im Zuhause große Haarbüschel finden, ist der Fellwechsel meist in vollem Gange. Professionelle Entwollung entlastet die Haut, verkürzt die haarige Phase und beugt Verfilzungen vor.</p>

      <h3>5. Gereizte Ohren</h3>
      <p>Rötungen, vermehrtes Kratzen, Kopfschütteln oder unangenehmer Geruch aus den Ohren sind ein deutliches Warnsignal. In solchen Fällen sollte der Gehörgang fachgerecht kontrolliert und gereinigt werden – ohne die empfindliche Haut zu verletzen.</p>
      <p>Weitere Hintergründe zur Ohrenpflege finden Sie im Artikel <a href="/blog/professionelle-ohrenpflege">👉 Warum professionelle Ohrenpflege so wichtig ist</a>.</p>

      <h3>Fazit</h3>
      <p>Wenn Sie eines oder mehrere dieser Anzeichen bei Ihrem Hund beobachten, ist es Zeit für einen Termin im Hundesalon. Frühzeitige professionelle Pflege verhindert, dass kleine Probleme zu großen gesundheitlichen Baustellen werden.</p>

      <p><a href="/booking">👉 Jetzt Terminanfrage senden</a></p>
    `,
    image: mattedImage
  },
  {
    slug: "fellpflege-tipps-zuhause",
    title: "Die besten Fellpflege-Tipps für Zuhause",
    excerpt: "So halten Sie Ihren Hund zwischen den Salonbesuchen gepflegt und sauber.",
    date: getPostDate(4),
    content: `
      <h2>Die besten Fellpflege-Tipps für Zuhause</h2>
      <p>Zwischen professionellen Grooming-Terminen entscheidet die tägliche Fellpflege zu Hause darüber, wie gesund, glänzend und hygienisch das Fell Ihres Hundes bleibt. Viele Probleme wie Verfilzungen, Schuppen oder unangenehme Gerüche lassen sich mit wenigen, aber kontinuierlichen Maßnahmen vermeiden. Dieser Leitfaden zeigt Ihnen die wichtigsten Schritte – einfach, effektiv und für jeden Felltyp geeignet.</p>
      <p><strong>Hund zu Hause pflegen – Tipps vom Hundefriseur Wien:</strong> Mit einer klaren Routine und dem richtigen Werkzeug wird Fellpflege zum entspannten Ritual.</p>

      <h3>1. Die richtige Bürste auswählen</h3>
      <p>Die Wahl des Werkzeugs entscheidet oft über Erfolg oder Misserfolg bei der Fellpflege.</p>
      <ul>
        <li><strong>Slicker Brush (Zupfbürste):</strong> ideal für Langhaarhunde wie Havaneser, Shih Tzu oder Doodles – löst Knoten und feine Unterwolle.</li>
        <li><strong>Striegel / Fellkamm:</strong> perfekt für Hunde mit dichter Unterwolle wie Retriever oder Schäferhund.</li>
        <li><strong>Borstenbürste (Bristle Brush):</strong> sanft für empfindliche Kurzhaarhunde, verteilt natürliche Hautfette und sorgt für Glanz.</li>
      </ul>
      <p>Mehr Details zu den einzelnen Werkzeugen finden Sie im Artikel <a href="/blog/hundebuersen-vergleich">👉 Hundebürsten im Vergleich</a>.</p>

      <h3>2. Bürsten: Regelmäßigkeit ist wichtiger als Kraft</h3>
      <p>Kurze, regelmäßige Pflegesessions sind deutlich effektiver als seltene „Großaktionen“.</p>
      <p>Durch tägliches oder alle zwei Tage leichtes Bürsten verhindern Sie:</p>
      <ul>
        <li>Filzbildung</li>
        <li>übermäßigen Haarflug in der Wohnung</li>
        <li>Hautreizungen durch abgestorbene Haare</li>
        <li>Verknotungen hinter Ohren, in den Achseln und an den Hosen</li>
      </ul>
      <p><strong>Tipp:</strong> Bürsten Sie sanft in kleinen Partien statt mit viel Druck über große Flächen zu gehen. So bleibt die Pflege für Ihren Hund angenehm.</p>

      <h3>3. Fell und Haut sauber halten</h3>
      <p>Auch ohne komplettes Bad können Sie viel für Sauberkeit und Hautgesundheit tun:</p>
      <ul>
        <li>feuchte Mikrofasertücher für Beine, Bauch und Brustbereich</li>
        <li>Pfotenreiniger, besonders im Winter in Wien (Streusalz!)</li>
        <li>regelmäßiges Entfernen von Pollen im Frühjahr und Herbst</li>
      </ul>
      <p>Wann ein vollständiges Bad sinnvoll ist, erklären wir ausführlich im Artikel <a href="/blog/wie-oft-hund-baden">👉 Wie oft sollte man einen Hund wirklich baden?</a>.</p>

      <h3>4. Felltypen individuell pflegen</h3>
      <ul>
        <li><strong>Kurzhaar:</strong> weniger Aufwand, aber regelmäßiges Striegeln ist wichtig, um lose Haare und Hautschuppen zu entfernen.</li>
        <li><strong>Langhaar:</strong> tägliches Entknoten und sanftes Ausbürsten, damit sich keine Filze bilden.</li>
        <li><strong>Lockenfell:</strong> häufiges, vorsichtiges Entwirren, da sich Locken sonst schnell ineinander verhaken.</li>
        <li><strong>Doppeltes Fell:</strong> Unterwolle regelmäßig entfernen, damit Luft an die Haut kommt und der Hund Temperatur besser regulieren kann.</li>
      </ul>

      <h3>5. Professionelle Pflege sinnvoll ergänzen</h3>
      <p>Auch bei sehr guter Heimpflege stößt man irgendwann an Grenzen:</p>
      <ul>
        <li>Unterwolle lässt sich zu Hause oft nicht vollständig entfernen.</li>
        <li>bestehende Filze können schnell schmerzhaft werden.</li>
        <li>die professionelle Föhntechnik im Salon schont das Haar und verhindert Haarbruch.</li>
      </ul>
      <p>Regelmäßige Salonbesuche ergänzen Ihre Routine perfekt und sorgen dafür, dass Fell und Haut langfristig gesund bleiben.</p>

      <h3>6. Fazit</h3>
      <p>Zuhause lässt sich mit der richtigen Bürste, einer sanften Technik und etwas Konsequenz sehr viel erreichen. Die Kombination aus professioneller Pflege und täglicher, kurzer Routine ist jedoch das absolute Optimum – für ein gesundes, glänzendes Fell und einen rundum zufriedenen Hund.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
      <p><a href="/services">👉 Komplettes Pflegeangebot ansehen</a></p>
    `,
    image: brushingImage
  },

  // MONTH 2 — Health & Prevention
  {
    slug: "professionelle-ohrenpflege",
    title: "Warum professionelle Ohrenpflege so wichtig ist",
    excerpt: "Ohrenentzündungen vorbeugen durch richtige Reinigung und Pflege.",
    date: getPostDate(5),
    content: `
      <h2>Warum professionelle Ohrenpflege so wichtig ist</h2>
      <p>Ohrenprobleme gehören zu den häufigsten Gründen für Tierarztbesuche. Viele Hunde – besonders in städtischen Gebieten wie Wien – sind durch Feuchtigkeit, Schmutz, Allergien oder Haarwuchs im Ohr besonders anfällig. Professionelle Ohrenpflege ist daher kein Luxus, sondern wichtige Gesundheitsvorsorge.</p>

      <h3>1. Warum Hundeohren so empfindlich sind</h3>
      <p>Hundeohren sind anders aufgebaut als menschliche Ohren. Sie besitzen einen L-förmigen Gehörgang, der tiefer und enger ist.</p>
      <ul>
        <li>Feuchtigkeit bleibt länger im Ohr.</li>
        <li>Bakterien und Hefepilze können sich schneller ansiedeln.</li>
        <li>Schmutz und Ohrenschmalz können schlechter von selbst entweichen.</li>
      </ul>
      <p>Dadurch steigt das Risiko für wiederkehrende Entzündungen deutlich.</p>

      <h3>2. Typische Symptome für Ohrprobleme</h3>
      <p>Achten Sie auf folgende Warnsignale:</p>
      <ul>
        <li>häufiges Kopfschütteln</li>
        <li>Kratzen an den Ohren</li>
        <li>Rötungen im Ohrbereich</li>
        <li>üblen Geruch aus den Ohren</li>
        <li>dunkle, krümelige oder schmierige Ablagerungen</li>
      </ul>
      <p>Je früher Sie eingreifen, desto besser lassen sich Schmerzen und Folgeschäden vermeiden.</p>

      <h3>3. Was professionelle Ohrenpflege umfasst</h3>
      <p>Im Hundesalon Laika wird sorgfältig und schonend gearbeitet, damit Ihr Hund sich wohlfühlt:</p>
      <ul>
        <li>Ablagerungen und Schmutz werden sanft entfernt.</li>
        <li>Haare im Ohrkanal werden – falls nötig – vorsichtig gekürzt oder gezupft.</li>
        <li>pH-ausgleichende, speziell für Hunde geeignete Lösungen werden verwendet.</li>
        <li>entzündungsfördernder Schmutz wird nachhaltig entfernt.</li>
      </ul>
      <p>Diese Pflege hilft, die Ohren langfristig gesund zu halten und neue Entzündungen zu verhindern.</p>

      <h3>4. Diese Rassen benötigen besondere Ohrenpflege</h3>
      <p>Einige Rassen sind besonders anfällig für Ohrenprobleme, zum Beispiel:</p>
      <ul>
        <li>Cockerspaniel</li>
        <li>Pudel</li>
        <li>Doodles</li>
        <li>Basset Hound</li>
        <li>Shih Tzu</li>
      </ul>
      <p>Lange, hängende Ohren begünstigen Luftstau und Wärme – das ideale Klima für Bakterien und Pilze. Hier ist regelmäßige, fachgerechte Pflege besonders wichtig.</p>

      <h3>5. Wann Sie zum Profi gehen sollten</h3>
      <p>Ein Besuch im Salon oder beim Tierarzt ist dringend zu empfehlen, wenn:</p>
      <ul>
        <li>Ohrenentzündungen immer wiederkehren.</li>
        <li>Ihr Hund stark an den Ohren kratzt oder den Kopf schief hält.</li>
        <li>Schwellungen oder Rötungen sichtbar sind.</li>
        <li>klebige, krümelige oder blutige Ablagerungen auftreten.</li>
      </ul>

      <h3>Fazit</h3>
      <p>Saubere, gepflegte Ohren sind weit mehr als ein Schönheitsdetail – sie schützen Ihren Hund vor Schmerzen, Infektionen und langfristigen Schäden. Professionelle Ohrenpflege in Kombination mit regelmäßiger Kontrolle zu Hause ist der beste Schutz für empfindliche Hundeohren.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
      <p><a href="/services">👉 Kombi-Pflegepakete ansehen</a></p>
    `,
    image: earImage
  },
  {
    slug: "hundebuersen-vergleich",
    title: "Hundebürsten im Vergleich – Welche ist die richtige?",
    excerpt: "Zupfbürste, Striegel oder Kamm? Wir erklären den Dschungel der Pflegewerkzeuge.",
    date: getPostDate(6),
    content: `
      <h2>Hundebürsten im Vergleich – Welche ist die richtige?</h2>
      <p>Die richtige Bürste ist das Herzstück jeder erfolgreichen Hundepflege. Doch der Markt ist groß und unübersichtlich. Dieser Vergleich hilft Ihnen, das passende Werkzeug für Ihren Hund zu finden.</p>

      <h3>1. Slicker Brush (Zupfbürste)</h3>
      <p>Die Slicker Brush gehört zu den wichtigsten Werkzeugen im Grooming.</p>
      <p>Sie ist ideal für:</p>
      <ul>
        <li>Langhaarfell</li>
        <li>Lockenfell</li>
        <li>empfindliche Bereiche wie hinter den Ohren oder an den Hosen</li>
      </ul>
      <p>Vorteile:</p>
      <ul>
        <li>entwirrt Knoten und beginnenden Filz</li>
        <li>glättet das Fell</li>
        <li>entfernt lose Haare sehr effektiv</li>
      </ul>
      <p>Besonders bei Hunden in Wien mit viel Unterwolle während des Fellwechsels ist eine gute Zupfbürste Gold wert.</p>

      <h3>2. Unterwollkamm / Striegel</h3>
      <p>Ein Striegel oder Unterwollkamm ist perfekt für Rassen mit dichtem, doppeltem Fell, zum Beispiel:</p>
      <ul>
        <li>Retriever</li>
        <li>Schäferhunde</li>
        <li>Samojeden</li>
        <li>Huskys</li>
      </ul>
      <p>Er löst tief sitzende Winterwolle und hilft, den Fellwechsel deutlich zu erleichtern – für Hund und Halter.</p>

      <h3>3. Metallkamm</h3>
      <p>Der Metallkamm ist unverzichtbar, um das Ergebnis nach dem Bürsten zu kontrollieren.</p>
      <ul>
        <li>zeigt versteckte Knötchen</li>
        <li>hilft, kleine Verfilzungen frühzeitig zu erkennen</li>
        <li>verhindert, dass Filz unbemerkt „unter dem Deckhaar“ entsteht</li>
      </ul>

      <h3>4. Borstenbürste</h3>
      <p>Für empfindliche Hunde oder Kurzhaarrassen eignet sich eine weiche Borstenbürste besonders gut.</p>
      <ul>
        <li>massiert sanft die Haut</li>
        <li>verteilt die natürlichen Hautfette gleichmäßig</li>
        <li>schenkt dem Fell schönen, natürlichen Glanz</li>
      </ul>

      <h3>5. Häufige Fehler bei der Bürstenwahl</h3>
      <ul>
        <li>zu harte Bürsten bei dünnem oder feinem Fell</li>
        <li>Slicker Brush ohne die richtige Technik – das kann die Haut reizen</li>
        <li>Unterwollstriegel bei Lockenfell – hier kann es schnell zu Haarbruch kommen</li>
      </ul>
      <p>Bei falscher Werkzeugwahl drohen schnell Verfilzungen. Mehr dazu lesen Sie im Artikel <a href="/blog/verfilztes-fell">👉 Der richtige Umgang mit verfilztem Fell</a>.</p>

      <h3>Fazit</h3>
      <p>Die perfekte Bürste hängt immer vom Felltyp, der Haut und der Empfindlichkeit Ihres Hundes ab. Im Hundesalon Laika beraten wir Sie gerne persönlich, welche Werkzeuge für Ihren Vierbeiner ideal sind – damit die Fellpflege zuhause leicht von der Hand geht.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: brushingImage
  },
  {
    slug: "verfilztes-fell",
    title: "Der richtige Umgang mit verfilztem Fell",
    excerpt: "Warum man Filz nicht einfach herausschneiden sollte und wie man ihn verhindert.",
    date: getPostDate(7),
    content: `
      <h2>Der richtige Umgang mit verfilztem Fell</h2>
      <p>Verfilzungen sind eines der häufigsten und schmerzhaftesten Probleme bei Hunden. Besonders in Wien, wo Regen, Schnee und Straßenschmutz das Fell zusätzlich belasten, kann Filz schnell entstehen. Doch wie geht man richtig damit um?</p>

      <h3>1. Warum Filz entsteht</h3>
      <p>Filz ist das Ergebnis aus mehreren Faktoren:</p>
      <ul>
        <li>Feuchtigkeit und Reibung (z. B. durch Geschirr oder Mantel)</li>
        <li>fehlende oder unregelmäßige Bürstroutinen</li>
        <li>lockiges oder langes Fell, das leichter verknotet</li>
        <li>Unterwolle, die nicht rechtzeitig entfernt wurde</li>
      </ul>

      <h3>2. Warum man Filz nie abschneiden sollte</h3>
      <p>Viele Besitzer versuchen, Filz selbst mit der Schere zu entfernen – das ist jedoch extrem gefährlich.</p>
      <p>Risiken:</p>
      <ul>
        <li>tiefe Hautverletzungen, weil Haut in den Filz hineingezogen wird</li>
        <li>ungleichmäßige Löcher im Fell</li>
        <li>Stress und Angst beim Hund, wenn es weh tut</li>
      </ul>
      <p>Professionelle Groomer arbeiten mit speziellen Werkzeugen und Techniken, um Filz so schonend wie möglich zu lösen.</p>

      <h3>3. Wie Filz fachgerecht entfernt wird</h3>
      <p>Im Salon wird systematisch und hundefreundlich vorgegangen:</p>
      <ul>
        <li>das Fell wird zunächst sanft in Abschnitte geteilt</li>
        <li>Filzbereiche werden lokal bearbeitet, anstatt einfach „drüber zu schneiden“</li>
        <li>gesundes Haar wird nach Möglichkeit erhalten und geschützt</li>
        <li>nur im Notfall wird kurz geschoren – wenn es für den Hund angenehmer und sicherer ist</li>
      </ul>

      <h3>4. Wie man Filz vorbeugt</h3>
      <ul>
        <li>tägliches oder sehr regelmäßiges Bürsten</li>
        <li>die Verwendung eines passenden Shampoos</li>
        <li>professionelle Pflege alle 4–8 Wochen</li>
        <li>gründliches Trocknen nach Regen, Schnee oder Baden</li>
      </ul>
      <p>Weitere Tipps für die Pflegeroutine zuhause finden Sie im Artikel <a href="/blog/fellpflege-tipps-zuhause">👉 Die besten Fellpflege-Tipps für Zuhause</a>.</p>

      <h3>5. Besonders gefährdete Felltypen</h3>
      <ul>
        <li>Doodles</li>
        <li>Spaniels</li>
        <li>Malteser</li>
        <li>Shih Tzu</li>
      </ul>
      <p>Diese Rassen haben oft langes oder strukturiertes Fell, das ohne konsequente Pflege sehr schnell verfilzt.</p>

      <h3>Fazit</h3>
      <p>Filz ist kein rein kosmetisches Problem, sondern ein ernstzunehmendes Gesundheitsrisiko. Je früher Sie reagieren und professionelle Hilfe in Anspruch nehmen, desto stressfreier und schmerzfreier bleibt es für Ihren Hund.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
      <p><a href="/services">👉 Langhaar-Pflege ansehen</a></p>
    `,
    image: mattedImage
  },
  {
    slug: "hund-vorbereiten-grooming",
    title: "So bereiten Sie Ihren Hund auf den Grooming-Termin vor",
    excerpt: "Ein entspannter Hund macht die Pflege für alle leichter. Tipps für einen stressfreien Besuch.",
    date: getPostDate(8),
    content: `
      <h2>Hund vorbereiten für Hundefriseur – So wird der Termin stressfrei</h2>
      <p>Ein Grooming-Termin sollte ein angenehmes Erlebnis sein – für Hund und Besitzer. Doch viele Hunde wirken nervös, gestresst oder überfordert, wenn sie zum ersten Mal einen Salon betreten. Mit der richtigen Vorbereitung gelingt ein entspannter Termin, der die Pflege erleichtert und Ihrem Vierbeiner Vertrauen und Sicherheit gibt.</p>

      <h3>1. Vor dem Termin: Ruhige Routinen schaffen</h3>
      <p>Hunde reagieren stark auf unsere Stimmung. Deshalb ist es wichtig, dass Sie selbst gelassen bleiben.</p>
      <ul>
        <li>bleiben Sie entspannt</li>
        <li>vermeiden Sie Hektik kurz vor dem Termin</li>
        <li>lassen Sie Ihren Hund vorher lösen und etwas schnüffeln</li>
      </ul>
      <p>Ein gelöster Spaziergang im 1090 Wien-Alsergrund wirkt oft Wunder und sorgt dafür, dass Ihr Hund mit einem guten Gefühl im Salon ankommt.</p>

      <h3>2. Gewöhnen Sie Ihren Hund an Berührungen</h3>
      <p>Besonders wichtig ist das für Welpen und sensible oder ängstliche Hunde:</p>
      <ul>
        <li>Pfoten kurz halten und sanft anfassen</li>
        <li>Bauch und Achseln vorsichtig streicheln</li>
        <li>Ohren spielerisch berühren</li>
        <li>kurz bürsten und direkt loben</li>
      </ul>
      <p>Regelmäßige Mini-Übungen zu Hause erleichtern später jede Salonbehandlung und machen den Termin stressfreier.</p>

      <h3>3. Fell gut durchkämmen – aber nicht baden</h3>
      <p>Ein Bad direkt vor dem Termin ist meist keine gute Idee, denn es kann:</p>
      <ul>
        <li>bestehenden Filz verhärten</li>
        <li>das Föhnen erschweren</li>
        <li>das Fell „rutschig“ machen und die Arbeit mit Schere und Maschine komplizieren</li>
      </ul>
      <p>Bürsten Sie Ihren Hund stattdessen am Tag davor gründlich durch. Weitere Tipps finden Sie im Artikel <a href="/blog/fellpflege-tipps-zuhause">👉 Die besten Fellpflege-Tipps für Zuhause</a>.</p>

      <h3>4. Bringen Sie wichtige Infos mit</h3>
      <p>Teilen Sie der Groomerin alle Informationen mit, die für die Pflege wichtig sein könnten:</p>
      <ul>
        <li>bekannte Allergien</li>
        <li>frühere Verletzungen oder Operationen</li>
        <li>temperamentvolle Verhaltensweisen (z. B. Unsicherheit bei Pfoten, Ohren, Bauch)</li>
        <li>medizinische Hinweise vom Tierarzt</li>
      </ul>
      <p>Je mehr Hintergrundwissen, desto sanfter und sicherer kann der Ablauf gestaltet werden.</p>

      <h3>5. Nachholbedürftige Hunde langsam heranführen</h3>
      <p>Wenn Ihr Hund:</p>
      <ul>
        <li>schlechte Erfahrungen gemacht hat,</li>
        <li>Angst vor Föhn oder Schere zeigt oder</li>
        <li>Schwierigkeiten beim Bürsten hat,</li>
      </ul>
      <p>dann sind kurze Kennenlerntermine im Salon vorab ideal. So kann sich Ihr Hund in Ruhe an Gerüche, Geräusche und Berührungen gewöhnen.</p>

      <h3>Fazit</h3>
      <p>Mit entspannter Vorbereitung wird der Grooming-Besuch ein positives Erlebnis. Vertrauen entsteht durch Wiederholung – und durch eine ruhige, liebevolle Einstellung von Mensch und Groomerin.</p>

      <p><a href="/booking">👉 Jetzt Terminanfrage senden</a></p>
      <p><a href="/services">👉 Unsere sanften Pflegepakete ansehen</a></p>
    `,
    image: calmImage
  },

  // MONTH 3 — Trust & Myths
  {
    slug: "mythen-hundepflege",
    title: "Die größten Mythen über Hundepflege",
    excerpt: "Wir räumen auf mit Ammenmärchen rund um Fell und Hygiene.",
    date: getPostDate(9),
    content: `
      <h2>Die größten Mythen über Hundepflege</h2>
      <p>Rund um die Hundepflege kursieren viele Mythen – einige sind harmlos, andere können echten Schaden anrichten. Wir räumen mit den häufigsten Irrtümern auf und erklären, was wirklich stimmt.</p>

      <h3>Mythos 1: „Kurzhaarhunde brauchen keine Pflege.“</h3>
      <p>Falsch. Kurzhaarhunde werden oft unterschätzt, was ihren Pflegebedarf angeht.</p>
      <ul>
        <li>Sie haaren oft stärker als Langhaarhunde.</li>
        <li>Sie entwickeln Schuppen, wenn nicht regelmäßig gebürstet wird.</li>
        <li>Sie profitieren enorm von Entwollung, besonders zum Fellwechsel.</li>
      </ul>

      <h3>Mythos 2: „Filz verschwindet von selbst.“</h3>
      <p>Leider nein. Filz löst sich nicht von allein auf – im Gegenteil: Er wird mit der Zeit immer dichter und flächiger.</p>
      <p>Er kann:</p>
      <ul>
        <li>Schmerzen verursachen</li>
        <li>die Durchblutung beeinträchtigen</li>
        <li>Parasiten und Hautentzündungen verstecken</li>
      </ul>
      <p>Mehr dazu lesen Sie im Artikel <a href="/blog/verfilztes-fell">👉 Der richtige Umgang mit verfilztem Fell</a>.</p>

      <h3>Mythos 3: „Hundeshampoo ist überflüssig.“</h3>
      <p>Auch falsch. Menschenshampoo ist für Hundehaut nicht geeignet.</p>
      <p>Es kann:</p>
      <ul>
        <li>die natürliche Schutzschicht der Haut zerstören</li>
        <li>Juckreiz und Schuppen auslösen</li>
        <li>Allergien begünstigen</li>
      </ul>
      <p>Hundeshampoo ist pH-neutral, mild und speziell auf die Bedürfnisse von Hundehaut abgestimmt. Mehr Details dazu im Artikel <a href="/blog/shampoo-arten-sicher">👉 Welche Shampoo-Arten sind sicher für Hunde?</a>.</p>

      <h3>Mythos 4: „Das Bad macht Filz schlimmer.“</h3>
      <p>Nur halb richtig: Filz entsteht nicht durch das Baden selbst, sondern durch falsches Trocknen und fehlendes Bürsten danach.</p>
      <p>Mit:</p>
      <ul>
        <li>gründlichem Ausbürsten vor dem Bad</li>
        <li>sorgfältigem Föhnen in Fellrichtung</li>
        <li>passender Bürstentechnik</li>
      </ul>
      <p>kann Baden sogar helfen, Filz zu vermeiden.</p>

      <h3>Mythos 5: „Scheren löst alle Probleme.“</h3>
      <p>Scheren kann manchmal notwendig sein – sollte aber nie die erste Wahl sein.</p>
      <p>Viel sinnvoller sind:</p>
      <ul>
        <li>Entfilzen, wo es möglich und schmerzfrei ist</li>
        <li>Entwollen bei Hunden mit Unterwolle</li>
        <li>strukturerhaltendes Schneiden, das das Fell gesund wachsen lässt</li>
      </ul>

      <h3>Fazit</h3>
      <p>Viele Pflegefehler entstehen aus gut gemeinten, aber falschen Annahmen. Professionelles Grooming kombiniert Wissen, Erfahrung und sichere Technik – damit Ihr Hund gesund, gepflegt und entspannt bleibt.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: winterImage
  },
  {
    slug: "shampoo-arten-sicher",
    title: "Welche Shampoo-Arten sind sicher für Hunde?",
    excerpt: "Inhaltsstoffe, auf die Sie achten sollten, und was Sie vermeiden müssen.",
    date: getPostDate(10),
    content: `
      <h2>Hundeshampoo sicher – Inhaltsstoffe erklärt</h2>
      <p>Hundehaut ist bis zu fünfmal dünner als menschliche Haut. Falsches Shampoo kann schnell zu Juckreiz, Schuppen oder Allergien führen. Dieser Artikel erklärt, worauf Sie achten müssen – und welche Inhaltsstoffe wirklich sicher sind.</p>

      <h3>1. Warum Menschenshampoo tabu ist</h3>
      <p>Der pH-Wert von Menschenhaut liegt bei etwa 5,5, der von Hundehaut hingegen bei etwa 7–7,5.</p>
      <p>Menschenshampoo ist für den deutlich sauren pH-Bereich entwickelt und damit für Hundehaut viel zu aggressiv – die natürliche Schutzbarriere wird angegriffen und kann langfristig geschädigt werden.</p>

      <h3>2. Welche Shampoos sicher sind</h3>
      <p><strong>pH-neutrale Hundeshampoos</strong> sind:</p>
      <ul>
        <li>mild</li>
        <li>hautschonend</li>
        <li>für regelmäßige Pflege geeignet</li>
      </ul>
      <p><strong>Hypoallergene Shampoos</strong> sind ideal für Hunde mit:</p>
      <ul>
        <li>Allergien</li>
        <li>Rötungen</li>
        <li>sehr empfindlicher Haut</li>
      </ul>
      <p><strong>Spezialshampoos</strong> können sinnvoll sein bei:</p>
      <ul>
        <li>Anti-Filz-Behandlungen</li>
        <li>starker Schuppenbildung</li>
        <li>Welpen, die besonders sanfte Pflege benötigen</li>
      </ul>

      <h3>3. Inhaltsstoffe, die Sie vermeiden sollten</h3>
      <p>Achten Sie auf die INCI-Liste und meiden Sie Produkte mit:</p>
      <ul>
        <li>Alkohol in hohen Konzentrationen</li>
        <li>Silikonen</li>
        <li>Parabenen</li>
        <li>künstlichen Farbstoffen</li>
        <li>starken, synthetischen Parfümen</li>
      </ul>
      <p>Diese Stoffe können die Haut austrocknen, reizen oder Allergien begünstigen.</p>

      <h3>4. Wann medizinische Shampoos sinnvoll sind</h3>
      <p>Medizinische Shampoos kommen zum Einsatz bei:</p>
      <ul>
        <li>Dermatitis</li>
        <li>Pilzbefall</li>
        <li>starkem, wiederkehrendem Schuppenbefall</li>
      </ul>
      <p>Wichtig: Solche Produkte sollten Sie immer zuerst tierärztlich abklären lassen. Eigenexperimente können die Hautprobleme verschlimmern.</p>

      <h3>Fazit</h3>
      <p>Das richtige Shampoo schützt nicht nur das Fell, sondern vor allem die empfindliche Haut Ihres Hundes. Wählen Sie Produkte bewusst aus und lassen Sie sich im Zweifel beraten – im Hundesalon Laika zeigen wir Ihnen gerne, welche Pflege zu Ihrem Vierbeiner passt.</p>

      <p><a href="/services">👉 Sicheres Pflegepaket auswählen</a></p>
    `,
    image: shampooImage
  },
  {
    slug: "stressfreie-hundepflege",
    title: "Stressfreie Hundepflege: Unsere sanften Methoden erklärt",
    excerpt: "Wie wir auch ängstlichen Hunden eine angenehme Erfahrung bereiten.",
    date: getPostDate(11),
    content: `
      <h2>Stressfreie Hundepflege – Unsere sanften Methoden erklärt</h2>
      <p>Viele Hunde fühlen sich unwohl beim Grooming. Manche haben schlechte Erfahrungen gemacht, andere reagieren sensibel auf Geräusche oder Berührungen. Im Hundesalon Laika Wien arbeiten wir mit besonders sanften, stressarmen Methoden – perfekt für Angsthunde, Welpen und sensible Rassen.</p>

      <h3>1. Langsame Annäherung und Vertrauen</h3>
      <p>Wir starten jeden Termin mit Ruhe und Respekt vor dem individuellen Tempo des Hundes:</p>
      <ul>
        <li>ruhige Begrüßung</li>
        <li>Zeit zum Schnuppern und Ankommen</li>
        <li>kurzes Beobachten des Hundeverhaltens</li>
      </ul>
      <p>Ein entspannter Einstieg reduziert Stress erheblich und legt den Grundstein für eine positive Erfahrung.</p>

      <h3>2. Positive Verstärkung statt Zwang</h3>
      <p>Während des Termins setzen wir auf:</p>
      <ul>
        <li>eine ruhige, freundliche Stimme</li>
        <li>Leckerlis und Lob</li>
        <li>Pausen, wenn der Hund sie braucht</li>
        <li>kein unnötiges Fixieren oder Festhalten</li>
      </ul>
      <p>Diese Herangehensweise ist besonders effektiv für Angsthunde und unsichere Vierbeiner.</p>

      <h3>3. Leiser Föhn &amp; sanfte Werkzeuge</h3>
      <p>Wir achten darauf, dass unsere Ausstattung so geräuscharm und angenehm wie möglich ist:</p>
      <ul>
        <li>leise, moderne Föhne</li>
        <li>weiche Bürsten</li>
        <li>schonende Scherwerkzeuge</li>
      </ul>
      <p>Das ist ideal für geräuschempfindliche Hunde, Senioren und sehr sensible Tiere.</p>

      <h3>4. Vorsicht bei sensiblen Körperstellen</h3>
      <p>Bestimmte Bereiche sind für viele Hunde besonders empfindlich:</p>
      <ul>
        <li>Bauch</li>
        <li>Achseln</li>
        <li>Innenschenkel</li>
        <li>Pfoten</li>
      </ul>
      <p>Diese Zonen werden mit besonders viel Geduld, Ruhe und Feingefühl gepflegt.</p>

      <h3>5. Kurze Kennenlerntermine für ängstliche Hunde</h3>
      <p>Für Hunde mit großer Unsicherheit bieten wir kurze Kennenlerntermine von etwa 10–15 Minuten an. So kann Ihr Hund den Salon, die Gerüche und die Berührungen in kleinen Schritten kennenlernen – ohne direkt eine komplette Behandlung zu durchlaufen.</p>

      <h3>Fazit</h3>
      <p>Sanftes Grooming ist keine einzelne Technik – es ist eine Haltung. Ihr Hund soll sich wohl, sicher und verstanden fühlen. Mit Geduld, positiver Verstärkung und der richtigen Umgebung wird aus dem Grooming-Termin ein entspanntes Pflegeritual.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
      <p><a href="/services">👉 Für Angsthunde geeignete Leistungen ansehen</a></p>
    `,
    image: calmImage
  },
  {
    slug: "pfotencheck-warum-wichtig",
    title: "Warum regelmäßige Pfotenkontrolle gesundheitsrelevant ist",
    excerpt: "Streusalz, Grannen und lange Krallen – warum die Pfoten besondere Aufmerksamkeit brauchen.",
    date: getPostDate(12),
    content: `
      <h2>Warum regelmäßige Pfotenkontrolle gesundheitsrelevant ist</h2>
      <p>Pfoten sind eines der am stärksten belasteten Körperteile eines Hundes. Und doch werden sie oft übersehen – bis Probleme entstehen. Besonders in Wien mit Salz, Schnee, Grannen und Asphaltbelastung lohnt sich regelmäßige Kontrolle.</p>

      <h3>1. Was Pfoten täglich leisten</h3>
      <p>Pfoten übernehmen eine Vielzahl wichtiger Aufgaben:</p>
      <ul>
        <li>Stoßdämpfung</li>
        <li>Balance</li>
        <li>Rutschfestigkeit</li>
        <li>Temperaturregulation</li>
      </ul>
      <p>Jeder Riss, jeder Splitter und jede zu lange Kralle beeinflusst das Bewegungsbild Ihres Hundes.</p>

      <h3>2. Häufige Probleme bei ungepflegten Pfoten</h3>
      <p>Werden Pfoten nicht regelmäßig kontrolliert, können unter anderem auftreten:</p>
      <ul>
        <li>eingerissene oder trockene Ballen</li>
        <li>eingewachsene oder zu lange Krallen</li>
        <li>Grannen zwischen den Zehen</li>
        <li>Salzreizungen im Winter</li>
      </ul>

      <h3>3. Die richtige Pfotenpflege</h3>
      <ul>
        <li>Krallen regelmäßig schneiden oder schneiden lassen</li>
        <li>Haare zwischen den Ballen kürzen, damit sich kein Schmutz verfängt</li>
        <li>Pfotenbalsam verwenden, um die Ballenhaut geschmeidig zu halten</li>
        <li>nach Winterspaziergängen Pfoten abwaschen, um Salz und Streureste zu entfernen</li>
      </ul>
      <p>Mehr Hintergründe finden Sie im ausführlichen Leitfaden zur Krallenpflege: <a href="/blog/wie-oft-krallen-schneiden">👉 Krallen schneiden – kompletter Leitfaden</a>.</p>

      <h3>4. Pfoten und Jahreszeiten</h3>
      <p>Je nach Jahreszeit gibt es unterschiedliche Risiken:</p>
      <ul>
        <li><strong>Sommer:</strong> heißer Asphalt kann Ballen verbrennen.</li>
        <li><strong>Winter:</strong> Salz und Schnee führen zu Reizungen und Rissen.</li>
        <li><strong>Frühling:</strong> Pollen und Grannen setzen sich gerne zwischen den Zehen fest.</li>
      </ul>

      <h3>Fazit</h3>
      <p>Gesunde Pfoten bedeuten einen glücklichen, bewegungsfreudigen Hund. Eine kleine Pfoten-Routine hat eine große Wirkung auf Gesundheit und Wohlbefinden.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: pawImage
  },

  // MONTH 4 — Seasonal & Cycles
  {
    slug: "sommerfell-oder-winterfell",
    title: "Sommerfell oder Winterfell: Wann braucht mein Hund mehr Pflege?",
    excerpt: "Der Fellwechsel ist für viele Hunde eine Belastung. So unterstützen Sie Ihren Vierbeiner optimal.",
    date: getPostDate(13),
    content: `
      <h2>Fellwechsel-Zeit: Sommerfell oder Winterfell?</h2>
      <p>Der Fellwechsel gehört zu den intensivsten Phasen im Leben eines Hundes. Besonders in Wien, wo die Jahreszeiten stark spürbar sind, reagieren viele Hunde empfindlich auf Temperaturwechsel. Zwischen März/April und September/Oktober wechseln die meisten Vierbeiner ihr Fell – doch wie viel Pflege braucht Ihr Hund wirklich? Und wie unterstützen Sie ihn optimal?</p>

      <h3>1. Warum Hunde überhaupt Fell wechseln</h3>
      <p>Der Fellwechsel ist ein natürlicher Schutzmechanismus des Körpers.</p>
      <ul>
        <li><strong>Winterfell:</strong> dichter, wärmender Unterwollmantel</li>
        <li><strong>Sommerfell:</strong> leichter, luftiger, hitzereflektierend</li>
      </ul>
      <p>Der Körper Ihres Hundes reagiert auf Tageslicht, Temperatur und Hormone. Daher haaren manche Tiere im Frühjahr extrem, während andere das ganze Jahr über moderat wechseln.</p>

      <h3>2. Frühjahrsfellwechsel – die intensivste Phase</h3>
      <p>Zwischen März und April zeigen viele Hunde:</p>
      <ul>
        <li>starke Haarbüschel im gesamten Haushalt</li>
        <li>juckende Haut</li>
        <li>stumpfes Aussehen des Deckhaars</li>
        <li>verfilzende Partien hinter den Ohren und an den Hosen</li>
      </ul>
      <p><strong>Tipp:</strong> Nutzen Sie in dieser Phase professionelle Entfilzungs- und Entwollungsbehandlungen, um die Haut zu entlasten.</p>
      <p>Mehr dazu finden Sie in unseren Leistungen zur Unterwolle &amp; Entfilzen: <a href="/services">👉 Leistungen ansehen</a></p>

      <h3>3. Herbstfellwechsel – Vorbereitung auf die Kälte</h3>
      <p>Im September/Oktober baut der Hund sein Winterfell auf. Es kommt zu:</p>
      <ul>
        <li>dichter werdender Unterwolle</li>
        <li>stärkerem Wärmebedürfnis</li>
        <li>erhöhter Talgproduktion</li>
      </ul>
      <p>Regelmäßiges Ausbürsten und professionelle Fellpflege verhindern Hautirritationen und sorgen dafür, dass Luft bis zur Haut vordringen kann.</p>

      <h3>4. Welche Rassen besonders betroffen sind</h3>
      <p><strong>Starker Fellwechsel:</strong></p>
      <ul>
        <li>Golden Retriever</li>
        <li>Schäferhunde</li>
        <li>Spitz-Arten</li>
        <li>Husky &amp; Malamute</li>
      </ul>
      <p><strong>Moderater Fellwechsel:</strong></p>
      <ul>
        <li>Kurzhaar-Rassen</li>
        <li>Terrier</li>
        <li>Mischlinge mit wenig Unterwolle</li>
      </ul>

      <h3>5. Wann professionelle Pflege sinnvoll ist</h3>
      <p>Ein Besuch im Salon empfiehlt sich, wenn:</p>
      <ul>
        <li>sich Knoten bilden</li>
        <li>Unterwolle nicht mehr alleine ausgebürstet werden kann</li>
        <li>der Hund empfindlich oder gereizt wirkt</li>
        <li>starke Schuppen auftreten</li>
      </ul>
      <p>Professionelle Groomer erkennen sofort, welche Technik zum Felltyp passt – ob Ausbürsten, Entwollen, Trimmen oder Schneiden. Im Hundesalon Laika in 1090 Wien nehmen wir uns Zeit, Fell und Haut gründlich zu beurteilen.</p>

      <h3>6. Fazit</h3>
      <p>Sommer- und Winterfell erfordern unterschiedliche Pflegeroutinen. Je besser der Fellwechsel begleitet wird, desto gesünder bleibt die Haut – und desto wohler fühlt sich Ihr Hund. Gerade in einer Stadt wie Wien, mit heißen Sommern und kalten Wintern, lohnt sich eine professionelle Begleitung des Fellwechsels.</p>

      <h3>Termin vereinbaren</h3>
      <p>Wenn Sie unsicher sind, ob das Fell Ihres Hundes Unterstützung braucht, beraten wir Sie gerne im Salon.</p>
      <p><a href="/booking">👉 Terminanfrage senden</a></p>
      <p><a href="/services">👉 Alle Leistungen ansehen</a></p>
    `,
    image: winterImage
  },
  {
    slug: "fruehjahrsfell",
    title: "Frühjahrsfell: Warum Hunde im März & April besonders haaren",
    excerpt: "Warum das Frühjahr die intensivste Zeit für Hundehaare ist und was dagegen hilft.",
    date: getPostDate(14),
    content: `
      <h2>Frühjahrsfell – Warum Hunde im März &amp; April besonders haaren</h2>
      <p>Wenn die Temperaturen steigen und die Tage länger werden, beginnt für viele Hunde eine turbulente Phase: der intensivste Fellwechsel des Jahres. In Wien zeigt sich das besonders im März und April – auf Böden, Sofas und Kleidern.</p>

      <h3>1. Warum der Frühjahrsfellwechsel so stark ist</h3>
      <p>Der Körper bereitet sich auf den Sommer vor:</p>
      <ul>
        <li>dichte Winterunterwolle wird abgestoßen</li>
        <li>die Fellstruktur wird leichter und luftiger</li>
        <li>die Haut produziert vermehrt Talg</li>
      </ul>

      <h3>2. Typische Probleme im Frühjahr</h3>
      <ul>
        <li>massive Haarmengen im Haushalt</li>
        <li>stumpf wirkendes Deckhaar</li>
        <li>gereizte, juckende Haut</li>
        <li>Verfilzungen durch lose, nicht entfernte Unterwolle</li>
      </ul>

      <h3>3. Welche Hunde besonders betroffen sind</h3>
      <p>Stark haarende Rassen wie:</p>
      <ul>
        <li>Golden Retriever</li>
        <li>Schäferhunde</li>
        <li>Huskys</li>
        <li>Spitz-Arten</li>
      </ul>
      <p>zeigen den Fellwechsel meist besonders deutlich, aber auch Mischlinge mit Unterwolle können stark betroffen sein.</p>

      <h3>4. Wie Sie Ihren Hund unterstützen</h3>
      <ul>
        <li>häufiges, gründliches Ausbürsten</li>
        <li>professionelle Entwollung im Salon</li>
        <li>mildes, pH-neutrales Shampoo</li>
        <li>gründliches Trocknen nach dem Baden</li>
      </ul>
      <p>Für intensive Unterwollpflege empfehlen wir unsere Leistungen: <a href="/services">👉 Leistungen ansehen</a>.</p>

      <h3>Fazit</h3>
      <p>Mit der richtigen Pflege wird der Frühjahrsfellwechsel nicht zur Belastung, sondern zu einer Phase, in der das Fell besonders gesund und schön nachwächst. Professionelle Unterstützung hilft, Haut und Fell optimal durch diese Zeit zu begleiten.</p>
    `,
    image: brushingImage
  },
  {
    slug: "fellpflege-routinen-winter",
    title: "Die besten Fellpflege-Routinen für den Winter in Wien",
    excerpt: "Schnee, Salz und Split: So schützen Sie Pfoten und Fell in der kalten Jahreszeit.",
    date: getPostDate(15),
    content: `
      <h2>Die besten Fellpflege-Routinen für den Winter in Wien</h2>
      <p>Winter in Wien bedeutet: Kälte, Schnee, Streusalz und Feuchtigkeit. Für Hundepfoten und Fell kann diese Jahreszeit zur echten Belastung werden. Mit den richtigen Routinen bleibt Ihr Hund geschützt, gesund und gepflegt.</p>

      <h3>1. Schutz vor Salz &amp; kaltem Asphalt</h3>
      <p>Streusalz und kalter Asphalt können die Ballen stark reizen und austrocknen.</p>
      <p>Salz verursacht:</p>
      <ul>
        <li>trockene, rissige Ballen</li>
        <li>Schmerzen beim Laufen</li>
        <li>Entzündungen, wenn Risse nicht behandelt werden</li>
      </ul>
      <p>Daher gilt: Pfoten nach jedem Winterspaziergang mit lauwarmem Wasser abwaschen und sorgfältig abtrocknen.</p>

      <h3>2. Häufigeres Bürsten im Winter</h3>
      <p>Winterfelle speichern mehr Feuchtigkeit. Nasse Hosen und Brustbereiche können schneller verfilzen und Hautprobleme begünstigen.</p>
      <p>Regelmäßiges Bürsten hilft:</p>
      <ul>
        <li>Feuchtigkeit aus dem Fell zu holen</li>
        <li>Verfilzungen vorzubeugen</li>
        <li>Hautreizungen zu vermeiden</li>
      </ul>

      <h3>3. Winter-Shampoos und Pfotenbalsam</h3>
      <p>Im Winter sind pflegende Produkte besonders wichtig:</p>
      <ul>
        <li>fettreiches, mildes Shampoo für gelegentliche Winterbäder</li>
        <li>pflegende Conditioner für langes oder strapaziertes Fell</li>
        <li>schützender Balsam für Ballen vor und nach Spaziergängen</li>
      </ul>

      <h3>4. Fell kürzen – ja oder nein?</h3>
      <p>Bei Langhaarhunden ist ein leichtes, strukturerhaltendes Trimmen sinnvoll – kein radikaler Komplettschnitt. So bleibt genügend Fellschutz erhalten, ohne dass Filz entsteht.</p>
      <p>Bei Kurzhaarhunden bleibt das Fell in der Regel unverändert, aber auch hier sind Pfoten- und Hautpflege wichtig.</p>

      <h3>Fazit</h3>
      <p>Mit der richtigen Winterroutine wird die kalte Jahreszeit für Ihren Hund nicht zur Belastung, sondern zu einer gemütlichen, sicheren Zeit. Achten Sie besonders auf Pfoten, Fellsauberkeit und vollständiges Trocknen nach Schnee und Regen.</p>
    `,
    image: winterImage
  },
  {
    slug: "wie-oft-krallen-schneiden",
    title: "Wie oft sollte man Krallen schneiden? (Kompletter Leitfaden)",
    excerpt: "Gesunde Pfoten brauchen kurze Krallen. Eine Anleitung für den richtigen Rhythmus.",
    date: getPostDate(16),
    content: `
      <h2>Wie oft sollte man Krallen schneiden? (Kompletter Leitfaden)</h2>
      <p>Zu lange Krallen sind mehr als ein kosmetisches Problem. Sie können Schmerzen, Fehlstellungen und Gelenkprobleme verursachen. Doch wie oft sollten Sie wirklich schneiden – und woran erkennen Sie, dass es Zeit wird?</p>

      <h3>1. Die ideale Häufigkeit</h3>
      <p>In der Regel sollten Krallen alle 3–6 Wochen kontrolliert und bei Bedarf gekürzt werden. Der Rhythmus hängt ab von:</p>
      <ul>
        <li>Aktivitätslevel des Hundes</li>
        <li>Rasse und Pfotengeometrie</li>
        <li>Untergrund (z. B. nutzt Wiener Asphalt Krallen stärker ab als weicher Waldboden)</li>
      </ul>

      <h3>2. Wie man erkennt, dass die Krallen zu lang sind</h3>
      <ul>
        <li>deutliches „Klackern“ der Krallen auf dem Boden</li>
        <li>der Hund geht vorsichtig oder verändert sein Gangbild</li>
        <li>Krallen berühren im Stand sichtbar den Boden</li>
        <li>die Wolfskralle wächst ein oder krümmt sich stark</li>
      </ul>

      <h3>3. Risiken zu langer Krallen</h3>
      <ul>
        <li>Schmerzen bei jedem Schritt</li>
        <li>Einwachsen der Krallen in die Ballen</li>
        <li>Gelenküberlastung durch veränderte Statik</li>
        <li>dauerhafte Fehlstellungen der Gliedmaßen</li>
      </ul>

      <h3>4. Warum professionelle Krallenpflege sicherer ist</h3>
      <p>Fehler beim Heimschneiden führen schnell zu:</p>
      <ul>
        <li>Verletzungen des empfindlichen Krallenmarks</li>
        <li>starker Blutung</li>
        <li>schiefen, ungleichmäßigen Schnitten</li>
      </ul>
      <p>Profis arbeiten routiniert, schnell und stressarm – und wissen genau, wie weit gekürzt werden darf.</p>

      <h3>Fazit</h3>
      <p>Regelmäßige Krallenpflege verbessert die Beweglichkeit, schützt Gelenke und verhindert Schmerzen. Eine kurze Kontrolle in regelmäßigen Abständen lohnt sich für jeden Hund.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: pawImage
  },

  // MONTH 5 — Specific Breeds
  {
    slug: "fellpflege-pudel-doodles",
    title: "Fellpflege für Pudel & Doodles – Was Besitzer wissen müssen",
    excerpt: "Lockenfell ist anspruchsvoll. Wir zeigen, wie Sie Verfilzungen vermeiden.",
    date: getPostDate(17),
    content: `
      <h2>Doodle Fellpflege Wien – Verfilzungen vermeiden</h2>
      <p>Pudel und Doodles gehören zu den beliebtesten Hunderassen in Wien – und zu den anspruchsvollsten in der Fellpflege. Ihr lockiges, weiches Haar verfilzt extrem schnell, speichert Feuchtigkeit und wächst kontinuierlich nach. Ohne die richtige Routine entstehen schmerzhafte Knoten, Hautreizungen und ein ungleichmäßiger Look. Dieser Leitfaden zeigt Ihnen, wie Sie das Fell gesund, weich und filzfrei halten.</p>

      <h3>1. Warum Doodle- &amp; Pudelfell so anspruchsvoll ist</h3>
      <p>Lockiges Fell:</p>
      <ul>
        <li>bildet Mikro-Knoten, die schnell zusammenfilzen</li>
        <li>speichert Feuchtigkeit länger als glattes Haar</li>
        <li>wächst ständig nach – regelmäßige Schnitte sind nötig</li>
        <li>benötigt hochwertige, feuchtigkeitsspendende Pflegeprodukte</li>
      </ul>
      <p>Das Fell ist oft eine Mischung aus Deckhaar und Unterwolle – eine echte Herausforderung, wenn die Pflege nicht konsequent erfolgt.</p>

      <h3>2. Bürstroutine: das Herzstück der Pflege</h3>
      <p>Für Pudel &amp; Doodles gilt:</p>
      <ul>
        <li>täglich 5–10 Minuten bürsten</li>
        <li>zuerst mit einer Slicker Brush (Zupfbürste)</li>
        <li>danach mit einem Metallkamm kontrollieren</li>
      </ul>
      <p>Die goldene Regel: <strong>Wenn der Metallkamm nicht durchkommt, ist Filz im Anmarsch.</strong></p>

      <h3>3. Baden &amp; Trocknen – ohne Hitze, ohne Stress</h3>
      <p>Wasser und Feuchtigkeit sind für Lockenfell eine besondere Herausforderung. Wichtig ist:</p>
      <ul>
        <li>Baden alle 2–4 Wochen</li>
        <li>sanfte, feuchtigkeitsspendende Shampoos verwenden</li>
        <li>gründliches Ausspülen, um Juckreiz zu vermeiden</li>
        <li>professionelles Föhnen – das verhindert neue Filzbildung</li>
      </ul>
      <p>Heim-Föhne sind oft zu heiß oder zu stark – das kann zu Fellbruch, Frizz oder ungleichmäßigem Volumen führen.</p>

      <h3>4. Regelmäßige Grooming-Termine</h3>
      <p>Für Doodles und Pudel sind regelmäßige Salonbesuche unverzichtbar:</p>
      <ul>
        <li>alle 4–8 Wochen schneiden</li>
        <li>vollständiges Entfilzen und Entwollen</li>
        <li>Pfoten, Augen &amp; Ohren frei halten</li>
      </ul>
      <p>Unser Langhaar-Spezialservice hilft, die Lockenstruktur gesund und pflegeleicht zu erhalten: <a href="/services">👉 Langhaar-Pflege ansehen</a></p>

      <h3>5. Häufige Pflegefehler bei Doodles</h3>
      <ul>
        <li>nur oberflächliches Bürsten über das Deckhaar</li>
        <li>Baden ohne gründliches Trocknen und Ausbürsten</li>
        <li>Versuch, Filz selbst mit der Schere herauszuschneiden</li>
        <li>falsche Shampoos ohne ausreichende Feuchtigkeitspflege</li>
      </ul>

      <h3>Fazit</h3>
      <p>Doodle- und Pudelfell ist wunderschön – aber nur mit konsequenter Betreuung. Die Kombination aus täglicher Heimroutine und professionellen Terminen ist der Schlüssel zu gesundem, weichem und filzfreiem Fell.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: longHairImage
  },
  {
    slug: "pflege-golden-retriever",
    title: "Pflege von Golden Retrievern – Unterwolle richtig managen",
    excerpt: "Golden Retriever verlieren viel Haar. Mit der richtigen Technik bekommen Sie es in den Griff.",
    date: getPostDate(18),
    content: `
      <h2>Pflege von Golden Retrievern – Unterwolle richtig managen</h2>
      <p>Golden Retriever sind sanfte, freundliche und treue Begleiter. Gleichzeitig gehören sie zu den stärksten Haarern überhaupt. Ihre Unterwolle ist dicht, warm und neigt zur Verfilzung – besonders während des Fellwechsels in Wien. Eine gezielte Pflegeroutine verhindert Hautprobleme und reduziert den Haarflug im Haus erheblich.</p>

      <h3>1. Anatomie der Golden-Retriever-Unterwolle</h3>
      <p>Golden Retriever haben:</p>
      <ul>
        <li>wasserabweisendes Deckhaar</li>
        <li>dichte, wärmende Unterwolle</li>
        <li>starke saisonale Haarwechsel</li>
      </ul>
      <p>Wird die Unterwolle nicht regelmäßig entfernt, kann sie:</p>
      <ul>
        <li>die Haut „ersticken“</li>
        <li>Hotspots auslösen</li>
        <li>unangenehmen Geruch verursachen</li>
      </ul>

      <h3>2. Warum Bürsten allein nicht reicht</h3>
      <p>Viele Besitzer bürsten täglich – und trotzdem haaren ihre Hunde extrem. Der Grund: Die tiefe Unterwolle wird mit der Bürste oft gar nicht erreicht.</p>
      <p>Dafür braucht es professionelle Werkzeuge wie:</p>
      <ul>
        <li>leistungsstarke Blower (Ausblaser)</li>
        <li>spezielle Unterwollkämme</li>
        <li>geübte Entwollungstechniken</li>
      </ul>

      <h3>3. Entwollung – die Lösung für stark haarende Hunde</h3>
      <p>Im Salon wird bei der Entwollung:</p>
      <ul>
        <li>lose Unterwolle ausgeblasen</li>
        <li>das Deckhaar geschont</li>
        <li>die Fellstruktur erhalten</li>
      </ul>
      <p>Das Ergebnis:</p>
      <ul>
        <li>spürbar weniger Haare im Haushalt</li>
        <li>bessere Luftzirkulation bis zur Haut</li>
        <li>eine gesündere, atmende Haut</li>
      </ul>
      <p>Mehr dazu in unseren Leistungen: <a href="/services">👉 Leistungen ansehen</a></p>

      <h3>4. Saisonale Pflege für Golden Retriever</h3>
      <p>Je nach Jahreszeit variieren die Schwerpunkte:</p>
      <ul>
        <li><strong>Frühjahr (März/April):</strong> stärkster Haarverlust, intensive Entwollung empfohlen</li>
        <li><strong>Herbst (September/Oktober):</strong> Aufbau des Winterfells, regelmäßiges Bürsten und Unterwoll-Kontrolle</li>
        <li><strong>Sommer:</strong> Schutz der Haut vor Sonnenbrand, besonders bei aufgehelltem Fell</li>
        <li><strong>Winter:</strong> Salz &amp; Nässe belasten Pfoten und Hosen – Pfotenpflege nicht vergessen</li>
      </ul>

      <h3>5. Wann der Profi notwendig ist</h3>
      <p>Ein Besuch im Salon ist besonders wichtig, wenn:</p>
      <ul>
        <li>starker Geruch trotz regelmäßigem Baden bleibt</li>
        <li>die Hosen kletten oder sich Knoten bilden</li>
        <li>die Unterwolle dicht und kompakt wirkt</li>
        <li>Hotspots oder Hautirritationen auftreten</li>
      </ul>

      <h3>Fazit</h3>
      <p>Golden Retriever sind pflegeleicht im Wesen – aber anspruchsvoll im Fell. Wer die Unterwolle kontrolliert, kontrolliert auch den Haarflug. Mit professioneller Entwollung und einer guten Bürstroutine wird das Zusammenleben deutlich entspannter.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: longHairImage
  },
  {
    slug: "pflege-shih-tzu-malteser",
    title: "Wie man Shih Tzus und Maltese richtig pflegt (mit Schnittformen)",
    excerpt: "Von Puppy-Cut bis Show-Look: Styling-Ideen für kleine Rassen.",
    date: getPostDate(19),
    content: `
      <h2>Wie man Shih Tzus und Maltese richtig pflegt (mit Schnittformen)</h2>
      <p>Shih Tzu und Maltese gehören zu den beliebtesten Familienhunden in Wien. Ihr feines, seidiges Fell ist wunderschön – aber hoch pflegeintensiv. Ohne regelmäßige Routine entsteht schnell Filz, besonders an Beinen, Brust und Ohren. Dieser Artikel zeigt die optimale Pflege und die beliebtesten Schnittstile.</p>

      <h3>1. Besonderheiten dieser Rassen</h3>
      <p>Shih Tzu &amp; Maltese haben:</p>
      <ul>
        <li>langes, weiches, seidiges Haar</li>
        <li>wenig bis keine Unterwolle</li>
        <li>hohe Filzneigung bei ausbleibender Pflege</li>
        <li>schnell wachsende Gesichtshaare rund um Augen und Maul</li>
      </ul>

      <h3>2. Bürstroutine (täglich!)</h3>
      <p>Für beide Rassen gilt:</p>
      <ul>
        <li>täglich 5–8 Minuten einplanen</li>
        <li>Fell leicht anfeuchten (z. B. mit Pflegespray)</li>
        <li>erst mit der Slicker Brush arbeiten</li>
        <li>danach mit dem Kamm kontrollieren</li>
      </ul>

      <h3>3. Baden &amp; Conditioner</h3>
      <p>Diese Rassen profitieren besonders von:</p>
      <ul>
        <li>einem Bad alle 1–3 Wochen</li>
        <li>feuchtigkeitsspendendem Conditioner</li>
        <li>schonendem Föhnen in kleinen Sektionen</li>
      </ul>

      <h3>4. Die beliebtesten Schnittformen</h3>
      <p><strong>Puppy Cut</strong></p>
      <ul>
        <li>gleichmäßig kurz geschnitten</li>
        <li>pflegeleicht und alltagstauglich</li>
        <li>besonders beliebt bei Familien</li>
      </ul>
      <p><strong>Teddy Cut</strong></p>
      <ul>
        <li>runder Kopf</li>
        <li>etwas längerer Körper</li>
        <li>weiches, verspieltes Aussehen</li>
      </ul>
      <p><strong>Show Style</strong></p>
      <ul>
        <li>sehr langes, bis zum Boden reichendes Fell</li>
        <li>extrem pflegeintensiv</li>
        <li>nur für sehr erfahrene und konsequente Besitzer geeignet</li>
      </ul>

      <h3>5. Typische Problemzonen</h3>
      <ul>
        <li>hinter den Ohren</li>
        <li>in den Achseln</li>
        <li>am Brustbereich</li>
        <li>an den Innenschenkeln</li>
      </ul>
      <p>Dort entsteht Filz besonders schnell und wird oft erst spät bemerkt.</p>

      <h3>Fazit</h3>
      <p>Shih Tzus und Maltese sind kleine Schönheiten – aber nur mit konsequenter Pflege. Die richtige Routine spart Zeit, Stress und Tierarztkosten. Regelmäßige Grooming-Termine sorgen dafür, dass das Fell gesund, glänzend und filzfrei bleibt.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: spaImage
  },
  {
    slug: "welpenpflege-erster-termin",
    title: "Welpenpflege: Ab wann braucht ein junger Hund seinen ersten Termin?",
    excerpt: "Der erste Besuch prägt das ganze Leben. So wird er zum Erfolg.",
    date: getPostDate(20),
    content: `
      <h2>Welpenpflege – Ab wann braucht ein junger Hund seinen ersten Termin?</h2>
      <p>Der erste Besuch beim Hundefriseur prägt den Hund ein Leben lang. Je früher und sanfter der Kontakt hergestellt wird, desto entspannter wird Ihr Hund im späteren Leben sein. Doch ab wann ist der richtige Zeitpunkt?</p>

      <h3>1. Idealer Zeitpunkt für den ersten Grooming-Besuch</h3>
      <p>Ein guter Zeitraum für den ersten Termin liegt bei etwa 12–16 Wochen, sobald:</p>
      <ul>
        <li>die wichtigsten Impfungen abgeschlossen sind</li>
        <li>der Welpe Vertrauen zum Besitzer aufgebaut hat</li>
        <li>er neugierig und offen für neue Erfahrungen ist</li>
      </ul>

      <h3>2. Was beim ersten Besuch passiert</h3>
      <p>Ein Welpen-Ersttermin umfasst:</p>
      <ul>
        <li>ruhiges Kennenlernen von Salon, Geräuschen und Gerüchen</li>
        <li>sanftes Berührungstraining</li>
        <li>eine leichte Bürst-Session</li>
        <li>Krallencheck</li>
        <li>Pfoten-Handling</li>
        <li>Geräuschgewöhnung an Föhn, Schere und Blower</li>
      </ul>
      <p>Ziel ist eine positive Verknüpfung: Der Welpe soll lernen, dass Pflege nichts Bedrohliches ist.</p>

      <h3>3. Warum frühe Pflege wichtig ist</h3>
      <ul>
        <li>verhindert spätes Angstverhalten</li>
        <li>bildet früh eine klare Routine</li>
        <li>erleichtert spätere, aufwendigere Schnitte</li>
        <li>stärkt die Bindung zwischen Hund, Besitzer und Groomerin</li>
      </ul>

      <h3>4. Do's &amp; Don'ts bei Welpen</h3>
      <p><strong>Do:</strong></p>
      <ul>
        <li>kurze Termine</li>
        <li>viele Pausen</li>
        <li>Leckerlis und Lob</li>
        <li>positive, ruhige Stimmung</li>
      </ul>
      <p><strong>Don't:</strong></p>
      <ul>
        <li>langes Stillstehen erzwingen</li>
        <li>erste Filze ignorieren</li>
        <li>Welpen überfordern oder drängen</li>
      </ul>

      <h3>5. Wie oft Welpen danach kommen sollten</h3>
      <p>Empfehlung:</p>
      <ul>
        <li>alle 4–6 Wochen kurze Mini-Sessions</li>
        <li>ab dem 6.–8. Monat schrittweiser Übergang zu regulären Grooming-Terminen</li>
      </ul>

      <h3>Fazit</h3>
      <p>Früh übt sich – gut vorbereitete Welpen werden zu entspannten, pflegeleichten Hunden. Ein liebevoll gestalteter erster Termin ist die beste Investition in ein stressfreies Hundeleben.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: groomerImage
  },

  // MONTH 6 — Behavior & Advanced
  {
    slug: "angsthunde-beim-grooming",
    title: "Angsthunde beim Grooming: 7 Schritte für einen stressfreien Termin",
    excerpt: "Ihr Hund hat Angst vorm Friseur? Wir haben die Lösung.",
    date: getPostDate(21),
    content: `
      <h2>Angsthunde beim Grooming – 7 Schritte für einen stressfreien Termin</h2>
      <p>Viele Hunde haben Angst vor Scheren, Föhn oder fremden Berührungen. Im Hundesalon Laika Wien arbeiten wir mit besonders sanften, hundezentrierten Methoden, um Angsthunden Sicherheit zu geben. Diese 7 Schritte helfen, den Besuch so stressfrei wie möglich zu gestalten.</p>

      <h3>1. Ruhige Begrüßung</h3>
      <p>Wir nähern uns dem Hund nicht direkt und frontal, sondern geben ihm Zeit. Der Hund bestimmt das Tempo der ersten Kontaktaufnahme.</p>

      <h3>2. Geruchsorientierung zulassen</h3>
      <p>Hunde entspannen sich, wenn sie schnuppern dürfen. Wir lassen sie in Ruhe die Umgebung, den Tisch und die Werkzeuge erkunden, bevor es losgeht.</p>

      <h3>3. Positive Verstärkung</h3>
      <p>Wir setzen auf:</p>
      <ul>
        <li>eine sanfte, ruhige Stimme</li>
        <li>Leckerlis</li>
        <li>viele kleine Pausen</li>
        <li>kurze Arbeitssequenzen</li>
      </ul>

      <h3>4. Reizreduzierte Umgebung</h3>
      <p>Wir vermeiden bewusst unnötigen Stress:</p>
      <ul>
        <li>keine dauerhaft lauten Föhne</li>
        <li>keine hektischen Bewegungen</li>
        <li>so wenig Ablenkung wie möglich</li>
      </ul>

      <h3>5. Langsame Annäherung an Werkzeuge</h3>
      <p>Der Hund darf zuerst:</p>
      <ul>
        <li>Bürsten beschnuppern</li>
        <li>die Schere hören</li>
        <li>den Luftstrom des Föhns fühlen</li>
      </ul>
      <p>Wir arbeiten in kleinen Schritten, damit der Hund Vertrauen entwickeln kann.</p>

      <h3>6. Anpassung an individuelle Bedürfnisse</h3>
      <p>Jeder Hund ist anders:</p>
      <ul>
        <li>manche brauchen häufige Pausen</li>
        <li>manche wünschen sich Körperkontakt</li>
        <li>manche arbeiten besser im Sitzen oder Liegen</li>
      </ul>
      <p>Wir passen unseren Ablauf an die Signale des Hundes an.</p>

      <h3>7. Regelmäßigkeit</h3>
      <p>Je öfter der Hund positive Erfahrungen macht, desto schneller wächst das Vertrauen. Kurze, positive Termine in kürzeren Abständen sind oft besser als seltene, sehr lange Behandlungen.</p>

      <h3>Fazit</h3>
      <p>Angsthunde können lernen, Grooming zu akzeptieren – manchmal sogar zu genießen. Mit Geduld, Verständnis und professioneller Technik gelingt es in den meisten Fällen, den Pflegetermin zu einem deutlich entspannteren Erlebnis zu machen.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: calmImage
  },
  {
    slug: "hunde-ungern-gebuerstet",
    title: "Warum einige Hunde ungern gebürstet werden – und was hilft",
    excerpt: "Wenn die Bürste zum Feind wird: Ursachenforschung und Trainingstipps.",
    date: getPostDate(22),
    content: `
      <h2>Warum einige Hunde ungern gebürstet werden – und was hilft</h2>
      <p>Viele Hunde empfinden Bürsten als unangenehm. Gründe dafür liegen meist tiefer als reine „Abneigung“. Dieser Artikel erklärt die häufigsten Ursachen und zeigt, wie Sie Ihrem Hund helfen können.</p>

      <h3>1. Schmerzempfindlichkeit</h3>
      <p>Hunde verbinden Bürsten oft mit Ziehen oder Zupfen – also mit Schmerz.</p>
      <p>Lösung:</p>
      <ul>
        <li>Fell leicht anfeuchten oder Pflegespray verwenden</li>
        <li>weiche, passende Bürsten wählen</li>
        <li>in kleinen Sektionen und ohne Hast arbeiten</li>
      </ul>

      <h3>2. Falsche Bürste</h3>
      <p>Sehr häufig ist schlicht das falsche Werkzeug im Einsatz. Eine zu harte Bürste oder der falsche Bürstentyp kann die Haut reizen.</p>
      <p>Mehr dazu im Artikel <a href="/blog/hundebuersen-vergleich">👉 Hundebürsten im Vergleich</a>.</p>

      <h3>3. Negative Erfahrungen im Welpenalter</h3>
      <p>Einmal kräftig gezogen – und das Vertrauen ist beschädigt. Hunde merken sich unangenehme Erlebnisse oft sehr lange.</p>
      <p>Lösung:</p>
      <ul>
        <li>sehr langsam neu beginnen</li>
        <li>Bürsten mit Leckerli und Lob verknüpfen</li>
        <li>nur sehr kurze Sessions einbauen</li>
      </ul>

      <h3>4. Hautprobleme</h3>
      <p>Schuppen, Allergien oder Dermatitis können dazu führen, dass jeder Bürstenstrich weh tut.</p>
      <p>In solchen Fällen gilt: Pflege anpassen und Hautzustand tierärztlich abklären lassen.</p>

      <h3>5. Angst vor Fixierung</h3>
      <p>Viele Hunde mögen es nicht, festgehalten oder „festgeklemmt“ zu werden.</p>
      <p>Lösung:</p>
      <ul>
        <li>möglichst freie, natürliche Körperhaltung zulassen</li>
        <li>Pausen einlegen</li>
        <li>nicht von oben über den Hund „beugen“</li>
      </ul>

      <h3>Fazit</h3>
      <p>Kein Hund „hasst“ Bürsten ohne Grund. Mit der richtigen Technik, passenden Werkzeugen und viel Geduld kann Bürsten für beide Seiten deutlich angenehmer werden.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: brushingImage
  },
  {
    slug: "senioren-hunde-pflege",
    title: "Senioren-Hunde: Besondere Pflegebedürfnisse im Alter",
    excerpt: "Ältere Hunde brauchen mehr Komfort und Geduld. Darauf achten wir besonders.",
    date: getPostDate(23),
    content: `
      <h2>Senioren-Hunde – Besondere Pflegebedürfnisse im Alter</h2>
      <p>Ältere Hunde benötigen mehr Rücksicht, mehr Zeit und oft spezielle Pflegeroutinen. Gelenke werden empfindlicher, die Haut trockener, das Fell stumpfer. Mit liebevoller, angepasster Pflege bleibt Ihr Seniorhund gepflegt und schmerzfrei.</p>

      <h3>1. Fellveränderungen im Alter</h3>
      <p>Senioren haben häufig:</p>
      <ul>
        <li>weniger Talgproduktion</li>
        <li>mehr Haarverlust</li>
        <li>dünnere, empfindlichere Haut</li>
      </ul>
      <p>Lösung:</p>
      <ul>
        <li>milde, feuchtigkeitsspendende Shampoos</li>
        <li>weiche Bürsten statt harter Werkzeuge</li>
        <li>kürzere, dafür häufigere Pflegesessions</li>
      </ul>

      <h3>2. Gelenkschonendes Handling</h3>
      <p>Im Salon achten wir darauf:</p>
      <ul>
        <li>den Hund nicht unnötig zu drehen oder zu heben</li>
        <li>Pausen einzubauen</li>
        <li>rutschfeste Teppichunterlagen für besseren Halt zu nutzen</li>
      </ul>

      <h3>3. Spezielle Bedürfnisse</h3>
      <ul>
        <li>kürzere Sitzungen mit mehr Erholungspausen</li>
        <li>langsamere, ruhige Bewegungen</li>
        <li>längere Trockenzeit bei niedrigerer Föhntemperatur</li>
      </ul>

      <h3>4. Krallen &amp; Pfoten besonders beobachten</h3>
      <p>Senioren nutzen sich die Krallen weniger ab, da sie oft langsamer oder kürzere Strecken laufen.</p>
      <p>Daher ist ein regelmäßiger Pfotencheck besonders wichtig:</p>
      <ul>
        <li>Krallenlänge kontrollieren</li>
        <li>Ballen auf Risse prüfen</li>
        <li>Druckstellen oder Schonhaltungen beobachten</li>
      </ul>

      <h3>Fazit</h3>
      <p>Mit angepasster Pflege bleibt Ihr Seniorhund länger mobil, glücklich und schmerzfrei. Ein sanfter, respektvoller Umgang macht den Grooming-Termin für ältere Hunde deutlich angenehmer.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: calmImage
  },
  {
    slug: "allergien-empfindliche-haut",
    title: "Allergien & empfindliche Haut: Welcher Service ist der richtige?",
    excerpt: "Juckreiz und Rötungen? Wir beraten Sie zu hypoallergener Pflege.",
    date: getPostDate(24),
    content: `
      <h2>Allergien &amp; empfindliche Haut – Welcher Service ist der richtige?</h2>
      <p>Hunde mit empfindlicher Haut sind in Wien keine Seltenheit. Pollen, Stadtluft, Winterstreusalz und Stress wirken sich direkt auf Haut und Fell aus. Dieser Leitfaden zeigt, welche Pflegeoptionen schonend und sicher sind.</p>

      <h3>1. Symptome sensibler Haut</h3>
      <p>Achten Sie auf:</p>
      <ul>
        <li>Rötungen</li>
        <li>Schuppen</li>
        <li>starken Juckreiz</li>
        <li>wiederkehrenden Geruch</li>
        <li>Hotspots</li>
      </ul>

      <h3>2. Welche Pflege hilft wirklich?</h3>
      <p><strong>Hypoallergene Pflegepakete</strong> bieten:</p>
      <ul>
        <li>besonders sanfte Formulierungen</li>
        <li>kein oder nur sehr dezentes Parfum</li>
        <li>beruhigende, feuchtigkeitsspendende Inhaltsstoffe</li>
      </ul>
      <p><strong>Feuchtigkeitsshampoos</strong> helfen bei:</p>
      <ul>
        <li>trockener, schuppiger Haut</li>
        <li>Spannungsgefühl nach dem Baden</li>
      </ul>
      <p><strong>Pfotenpflege</strong> ist besonders im Winter entscheidend, um Salzreizungen und Risse zu vermeiden.</p>

      <h3>3. Was Sie meiden sollten</h3>
      <ul>
        <li>zu häufiges Baden</li>
        <li>stark parfümierte Produkte</li>
        <li>sehr heißes Föhnen</li>
        <li>harte oder unpassende Bürsten</li>
      </ul>

      <h3>4. Wann zum Tierarzt?</h3>
      <p>Ein Tierarztbesuch ist wichtig bei:</p>
      <ul>
        <li>wiederkehrenden Entzündungen</li>
        <li>nässenden Stellen</li>
        <li>extrem starkem, anhaltendem Juckreiz</li>
      </ul>
      <p>Der Salon kann pflegen und unterstützen – die medizinische Diagnose gehört jedoch immer in tierärztliche Hände.</p>

      <h3>Fazit</h3>
      <p>Die richtige Kombination aus professioneller, schonender Pflege und angepasster Heimpflege bringt empfindliche Hunde wieder ins Gleichgewicht. So können Haut und Fell sich erholen und langfristig stabilisieren.</p>

      <p><a href="/booking">👉 Terminanfrage senden</a></p>
    `,
    image: shampooImage
  },

  // CASE STUDIES
  {
    slug: "fallstudie-verfilzter-cockapoo-bella",
    title: "Stark verfilzter Hund: Bellas Verwandlung – Vom Filzpanzer zur sofortigen Erleichterung",
    excerpt: "Cockapoo Bella kam mit extremer Ganzkörper-Verfilzung. Ein Notfall-Pflegetermin brachte ihr sofortige Erleichterung – einfühlsam und schmerzfrei.",
    date: getPostDate(25),
    content: `
      <h2>Fallstudie: Stark verfilzter Hund – Bellas Verwandlung</h2>
      <p><strong>Vom Filzpanzer zur sofortigen Erleichterung</strong></p>

      <h3>📍 Fallübersicht</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Bella</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Cockapoo</td></tr>
          <tr><td><strong>Alter</strong></td><td>4 Jahre</td></tr>
          <tr><td><strong>Temperament</strong></td><td>Verschlossen bei Ankunft, reaktiv an den Beinen</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Sarah M.</td></tr>
          <tr><td><strong>Termin</strong></td><td>Notfall-Pflegetermin</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde 45 Minuten</td></tr>
        </tbody>
      </table>

      <h3>🐾 Zustand bei Ankunft</h3>
      <p>Bella kam langsam herein. Kopf gesenkt. Keine Rutenbewegung.</p>
      <p>Aus der Ferne sah sie flauschig aus. Aus der Nähe war es etwas ganz anderes.</p>
      <p><strong>Das war kein Fell. Das war ein fester Panzer.</strong></p>
      <ul>
        <li>Ohren zu dicken Strängen verschmolzen</li>
        <li>Brust zu einer dichten Masse komprimiert</li>
        <li>Hinterpartie stark verschmutzt und verfilzt</li>
        <li>Augen teilweise verdeckt</li>
      </ul>
      <p>Als ich das Fell an ihrer Schulter teilte, bewegte sich die Haut nicht mit.</p>
      <p>In diesem Moment weiß man: <strong>Das ist keine Fellpflege mehr. Das ist Soforthilfe.</strong></p>

      <h3>🔍 Verfilzungsgrad</h3>
      <p>Es handelte sich um extreme Ganzkörper-Verfilzung. Nichts durchdrang das Fell:</p>
      <ul>
        <li>Grober Kamm → sofort blockiert</li>
        <li>Finger → kamen nicht bis zur Haut</li>
      </ul>
      <p>An mehreren Stellen war die Verfilzung <strong>1–2 cm dick</strong>. Achseln und Leisten waren fest zusammengebunden. Keine Luftzirkulation. Keine Trennung.</p>
      <p>Das nennen wir <strong>„verpelzt"</strong> – das Fell hebt sich in Stücken wie eine Schale ab, sobald es entfernt wird. Ein ähnliches Muster – wenn auch weniger extrem – zeigt sich oft <a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">bei versteckter Verfilzung wie bei Cavapoo Alfie</a>.</p>

      <h4>Verfilzung nach Körperbereich</h4>
      <table>
        <thead><tr><th>Bereich</th><th>Schweregrad (1–5)</th><th>Anmerkung</th></tr></thead>
        <tbody>
          <tr><td>Ohren</td><td>5</td><td>Vollständig verkordet, dicht</td></tr>
          <tr><td>Brust</td><td>5</td><td>Solide Masse, keine Luftzirkulation</td></tr>
          <tr><td>Beine</td><td>4</td><td>Eingeschränkte Bewegung</td></tr>
          <tr><td>Hinterpartie</td><td>5</td><td>Komprimiert mit Verschmutzung</td></tr>
          <tr><td>Achseln</td><td>5</td><td>Eng gebunden, hohes Risiko</td></tr>
        </tbody>
      </table>

      <h3>⚠️ Tierschutzrisiken</h3>
      <p>Das war kein kosmetisches Problem. Es war ein <strong>Tierschutzproblem</strong>.</p>
      <p><strong>Akute Risiken:</strong></p>
      <ul>
        <li>Hautrisse durch Spannung</li>
        <li>Bakterienbildung durch eingeschlossene Feuchtigkeit</li>
        <li>Versteckte Hotspots (2 hinter den Ohren gefunden)</li>
        <li>Eingeschränkte Beinbewegung</li>
      </ul>
      <p><strong>Weniger sichtbar – aber ernst:</strong></p>
      <ul>
        <li>Verminderte Durchblutung</li>
        <li>Überhitzung (keine Belüftung)</li>
        <li>Parasiten versteckt im Fell</li>
        <li>Konstanter, leiser Schmerz</li>
      </ul>
      <p>👉 Jede Bewegung zieht an der Haut.</p>

      <h3>✂️ Scheren oder Retten – Die entscheidende Frage</h3>
      <p>Sarahs erste Frage war einfach: <em>„Können wir sie flauschig lassen?"</em></p>
      <p>Also habe ich es gezeigt:</p>
      <ul>
        <li>Kamm einsetzen versucht → blockiert</li>
        <li>Filzmatte angehoben → Haut spannt sich</li>
      </ul>
      <p>Dann klar erklärt: <strong>„Wenn ich versuche, das auszubürsten, wird es ihr wehtun. Die freundlichste Option ist, es zu entfernen."</strong></p>
      <p>Entscheidung gefallen. ✅ Komplettschur mit einer #10 Klinge unter der Filzmatte.</p>
      <p>Sobald Besitzer es sehen, verstehen sie es.</p>

      <h3>🐶 Bellas Verhalten während der Pflege</h3>
      <p><strong>Erste 10 Minuten:</strong> Komplett still. Klassisches Shutdown-Verhalten.</p>
      <p><strong>Als die Schermaschine lief:</strong> Zucken an den Beinen. Anspannung an der Hinterpartie.</p>
      <p><strong>Dann kam der Wendepunkt.</strong></p>
      <p>In dem Moment, als das erste Stück von ihrer Seite abkam – <strong>entspannte sie sich</strong>.</p>
      <p>Man braucht kein Messgerät dafür. Man spürt es sofort.</p>

      <h3>🧘 Bella ruhig & sicher halten</h3>
      <p>Hier wird Vertrauen aufgebaut – oder verloren.</p>
      <p><strong>Ansatz:</strong></p>
      <ul>
        <li>Kein Hetzen. Gleichmäßiger Rhythmus</li>
        <li>Schermaschine immer flach gehalten</li>
        <li>Häufige Pausen (alle 3–5 Minuten)</li>
        <li>Minimale Fixierung</li>
      </ul>
      <p><strong>Strategie:</strong></p>
      <ul>
        <li>An der Schulter begonnen (am wenigsten empfindlich)</li>
        <li>Beine bis später gelassen (erst Vertrauen)</li>
        <li>Durchgehende stimmliche Beruhigung</li>
      </ul>
      <p>👉 <strong>Kein Zwang. Niemals.</strong></p>

      <h3>🧰 Verwendete Werkzeuge & Produkte</h3>
      <table>
        <thead><tr><th>Phase</th><th>Werkzeug/Produkt</th><th>Zweck</th></tr></thead>
        <tbody>
          <tr><td>Schur</td><td>Heiniger Schermaschine + #10 Klinge</td><td>Sichere Entfernung unter dem Filz</td></tr>
          <tr><td>Prüfung</td><td>Grober Kamm</td><td>Schweregrad bestätigen</td></tr>
          <tr><td>Bad</td><td>Chlorhexidin-Shampoo</td><td>Hautreizungen behandeln</td></tr>
          <tr><td>Trocknung</td><td>Niederdruckföhn</td><td>Empfindliche Haut schonen</td></tr>
          <tr><td>Finish</td><td>Pflegespray</td><td>Feuchtigkeit wiederherstellen</td></tr>
        </tbody>
      </table>
      <p>👉 Keine Entfilzungswerkzeuge verwendet. Das hätte Schmerzen verursacht.</p>

      <h3>✨ Das Ergebnis</h3>
      <p>Das war kein Styling. Das war ein <strong>Neustart</strong>.</p>
      <ul>
        <li>Kompletter Filzpanzer in Stücken entfernt</li>
        <li>Haut sichtbar – leicht rosa, aber intakt</li>
        <li>Zwei Hotspots behandelt</li>
        <li>Augen vollständig frei</li>
        <li>Bewegung sofort verbessert</li>
      </ul>
      <p><strong>Bella lief anders vom Tisch, als sie gekommen war.</strong></p>
      <p>Das ist das Ergebnis, das zählt.</p>

      <h3>🧠 Groomer-Tipp: Verfilzung früh erkennen</h3>
      <p>Die meisten schweren Fälle fangen klein an. Achten Sie auf:</p>
      <ul>
        <li>Fell fühlt sich dicht an, nicht weich</li>
        <li>Kamm gleitet nicht einfach durch</li>
        <li>Haut bewegt sich nicht unter dem Fell</li>
        <li>Hund vermeidet Berührungen</li>
      </ul>
      <p>👉 Wenn Bürsten sich schwierig anfühlt, ist das Fell bereits zu weit verfilzt.</p>

      <h3>💬 Rat an Besitzer</h3>
      <p>Kein Urteil. Nur Klarheit.</p>
      <p><strong>Sofortige Nachsorge:</strong></p>
      <ul>
        <li>Kratzen verhindern (Haut ist empfindlich)</li>
        <li>Hotspots beobachten</li>
        <li>Sanftes Bürsten sobald das Fell nachwächst</li>
      </ul>
      <p><strong>Langfristiger Plan:</strong></p>
      <table>
        <thead><tr><th>Aufgabe</th><th>Häufigkeit</th></tr></thead>
        <tbody>
          <tr><td>Professionelle Pflege</td><td>Alle 6–8 Wochen</td></tr>
          <tr><td>Bürsten zuhause</td><td>3–4× pro Woche</td></tr>
          <tr><td>Fellmanagement</td><td>Kürzer halten bei Bedarf</td></tr>
        </tbody>
      </table>
      <p>Und der eine Satz, den ich als Hundefriseur in Wien immer sage: <strong>„Wenn Bürsten sich wie eine Last anfühlt, ist das Fell zu lang."</strong> Wer früh mit der Pflege beginnt – <a href="/blog/fallstudie-erste-welpenpflege-teddy">wie bei Welpe Teddy</a> – vermeidet solche Situationen von Anfang an.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Kann starke Verfilzung ausgebürstet werden?</strong></p>
      <p>Nein. Es verursacht Schmerzen und kann die Haut einreißen. Scheren ist die humane Option.</p>
      <p><strong>Tut Scheren dem Hund weh?</strong></p>
      <p>Nicht wenn es richtig gemacht wird. Es bringt sofortige Erleichterung der Spannung.</p>
      <p><strong>Wie lange dauert das Nachwachsen?</strong></p>
      <p>Typischerweise 6–12 Wochen, abhängig von Felltyp und Pflege.</p>

      <h3>Fazit</h3>
      <p>Diese Situation ist häufiger als man denkt. Nicht weil Besitzer sich nicht kümmern – sondern weil das Leben dazwischenkommt.</p>
      <p>Aber Verfilzung baut sich leise auf – und Hunde beschweren sich nicht. Sie leben einfach damit. Bis jemand eingreift und es in Ordnung bringt.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">Erwartung vs. Realität: Warum Cavapoo Alfie geschoren werden musste</a></li>
        <li><a href="/blog/fallstudie-vernachlaessigter-hund-bruno">Vernachlässigter Hund: Brunos Komplett-Reset nach der Adoption</a></li>
        <li><a href="/blog/fallstudie-angsthund-schnauzer-max">Angsthund Max: Von Panik zu ruhiger Pflege</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: bellaImage
  },
  {
    slug: "fallstudie-angsthund-schnauzer-max",
    title: "Aggressiver Hund beim Grooming: Max' Weg von Panik zu ruhiger Pflege",
    excerpt: "Zwergschnauzer Max schnappte aus Angst – ein anderer Salon hatte ihn abgelehnt. So wurde sein Termin im Hundesalon Laika trotzdem ein Erfolg.",
    date: getPostDate(26),
    content: `
      <h2>Fallstudie: Aggressiver / ängstlicher Hund beim Grooming</h2>
      <p><strong>Von Schnappen & Panik zu ruhiger, kontrollierter Pflege</strong></p>

      <h3>📍 Fallübersicht</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Max</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Zwergschnauzer</td></tr>
          <tr><td><strong>Alter</strong></td><td>3 Jahre</td></tr>
          <tr><td><strong>Temperament</strong></td><td>Angstbasierte Aggression (defensiv)</td></tr>
          <tr><td><strong>Besitzer</strong></td><td>Daniel R.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Vorheriger Groomer verweigerte den Service</td></tr>
          <tr><td><strong>Termin</strong></td><td>Verhaltens-Pflegetermin</td></tr>
          <tr><td><strong>Dauer</strong></td><td>2 Stunden 10 Minuten (mit Pausen)</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090 (Alsergrund)</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck: Ruhig… aber geladen</h3>
      <p>Dieser Fall fand im Hundesalon Laika statt, wo die Arbeit mit ängstlichen oder reaktiven Hunden zum täglichen Alltag gehört.</p>
      <p>Max kam nicht bellend herein. Er kam <strong>ruhig – aber angespannt</strong>.</p>
      <p>Und das ist oft aufschlussreicher.</p>
      <ul>
        <li>Kopf gesenkt, Augen fixiert auf jede Bewegung</li>
        <li>Ohren eng angelegt</li>
        <li>Rute eingezogen, aber steif – nicht entspannt</li>
      </ul>
      <p>Innerhalb von Sekunden auf dem Tisch häuften sich die Signale:</p>
      <ul>
        <li>Lippenlecken</li>
        <li>Whale Eye (Weißes im Auge sichtbar)</li>
        <li>Ein leises, kontrolliertes Knurren</li>
      </ul>
      <p>Als ich nach seinem Vorderbein griff:</p>
      <p>👉 <strong>Ein schnelles, gezieltes Schnappen.</strong> Kein Kontakt – aber klare Absicht.</p>
      <p>Das war kein schlechtes Benehmen.</p>
      <p>👉 Das war Kommunikation: <strong>„Ich fühle mich nicht sicher."</strong></p>

      <h3>📊 Trigger-Empfindlichkeit</h3>
      <table>
        <thead><tr><th>Auslöser</th><th>Reaktionslevel (1–5)</th><th>Anmerkung</th></tr></thead>
        <tbody>
          <tr><td>Vorderbeine</td><td>5</td><td>Sofortige Schnapp-Reaktion</td></tr>
          <tr><td>Gesicht / Kopf</td><td>4</td><td>Hohe Anspannung</td></tr>
          <tr><td>Plötzliche Bewegung</td><td>5</td><td>Eskalationsauslöser</td></tr>
          <tr><td>Schermaschine nahe Gesicht</td><td>4</td><td>Angstspitze</td></tr>
          <tr><td>Rücken / Schultern</td><td>2</td><td>Sichere Startzone</td></tr>
        </tbody>
      </table>

      <h3>🔍 Trigger identifizieren</h3>
      <p>Anstatt zu reagieren, habe ich beobachtet. Die Muster wurden schnell deutlich:</p>
      <ul>
        <li>Hände Richtung Pfoten → sofortige Anspannung</li>
        <li>Schermaschine nahe Gesicht → starker Angstanstieg</li>
        <li>Physische Fixierung → sofortige Eskalation</li>
      </ul>
      <p>Was am meisten auffiel:</p>
      <p>👉 Ruhig wenn in Ruhe gelassen<br/>👉 Reaktiv wenn Kontrolle ausgeübt wurde</p>
      <p>Das ist <strong>klassisches angstbasiertes Verhalten</strong>.</p>

      <h3>🔄 Vorgehensweise anpassen</h3>
      <p><strong>Erste Entscheidung:</strong> 👉 Alles verlangsamen.</p>
      <p><strong>Zweite Entscheidung:</strong> 👉 Druck wegnehmen – nicht erhöhen.</p>
      <p><strong>Was sich änderte:</strong></p>
      <ul>
        <li>Kein Pflegeversuch in den ersten Minuten</li>
        <li>Max durfte frei stehen</li>
        <li>Werkzeuge schrittweise eingeführt, in seinem Sichtfeld</li>
      </ul>
      <p>Ich habe nicht mit Pflegen begonnen. <strong>Ich habe mit Vorhersehbarkeit begonnen.</strong> Denselben Ansatz verwenden wir im Hundesalon Laika Wien auch <a href="/blog/fallstudie-hund-hasst-wasser-milo">bei Hunden mit Wasserangst wie Milo</a>.</p>

      <h3>🧠 Handling-Strategie</h3>
      <table>
        <thead><tr><th>Phase</th><th>Vorgehensweise</th></tr></thead>
        <tbody>
          <tr><td>Phase 1</td><td>Nur Beobachtung</td></tr>
          <tr><td>Phase 2</td><td>Leichte Berührung → Loslassen</td></tr>
          <tr><td>Phase 3</td><td>Werkzeuge auf Distanz einführen</td></tr>
          <tr><td>Phase 4</td><td>Bereiche mit niedrigem Triggerlevel pflegen</td></tr>
        </tbody>
      </table>
      <p>Der Startpunkt ist entscheidend: 👉 <strong>Rücken und Schultern zuerst</strong> – nicht Gesicht oder Pfoten.</p>

      <h3>🦺 Sicherheit ohne Zwang</h3>
      <p>Sicherheit geht nicht über Dominanz – sondern über <strong>Timing und Positionierung</strong>.</p>
      <p><strong>Was verwendet wurde:</strong></p>
      <ul>
        <li>Lockere Pflegeschlinge (Führung, keine Fixierung)</li>
        <li>Weicher Stoff-Maulkorb (schrittweise eingeführt)</li>
      </ul>
      <p>Wichtiges Detail:</p>
      <p>👉 Der Maulkorb wurde <strong>nicht sofort</strong> angelegt<br/>👉 Er wurde eingeführt, nachdem erstes Vertrauen aufgebaut war</p>
      <p>Dieses Timing macht den gesamten Unterschied.</p>

      <h3>🧘 Die Situation ruhig halten</h3>
      <p>Kleine Entscheidungen bestimmen das Ergebnis:</p>
      <ul>
        <li>Leicht seitlich gearbeitet – nicht direkt von vorne</li>
        <li>Eine stabilisierende Hand – nie greifend</li>
        <li>Ständige Überwachung von Anspannung und Atmung</li>
      </ul>
      <p>Wenn Max sich versteifte: 👉 <strong>Ich stoppte.</strong></p>
      <p>Kein Drängen. Kein Hetzen.</p>

      <h3>🔄 Fortschritte während des Termins</h3>
      <p>Nicht dramatisch – aber real:</p>
      <ul>
        <li>Knurren ließ nach ~20 Minuten nach</li>
        <li>Schulterschur ruhig abgeschlossen</li>
        <li>Maulkorb ohne Widerstand akzeptiert</li>
        <li>Vorderbeine noch reaktiv – aber handhabbar</li>
      </ul>
      <p><strong>Schlüsselmoment:</strong></p>
      <p>👉 Er hörte auf, ständig alles abzuscannen.</p>
      <p>Das ist der Moment, in dem der Hund mental zur Ruhe kommt.</p>
      <p>In der geschäftigen Umgebung Wiens sind Hunde oft überreizt – deshalb wird ruhige Vorhersehbarkeit noch wichtiger.</p>

      <h3>🧰 Verwendete Werkzeuge & Setup</h3>
      <table>
        <thead><tr><th>Phase</th><th>Werkzeug</th><th>Grund</th></tr></thead>
        <tbody>
          <tr><td>Schur</td><td>Wahl KM10 + #7F Klinge</td><td>Geringe Vibration</td></tr>
          <tr><td>Gesicht</td><td>Kleiner Trimmer</td><td>Weniger einschüchternd</td></tr>
          <tr><td>Sicherheit</td><td>Weicher Maulkorb</td><td>Ruhige Kontrolle</td></tr>
          <tr><td>Tisch</td><td>Pflegeschlinge</td><td>Stabilität</td></tr>
          <tr><td>Pausen</td><td>Wasser + Unterbrechungen</td><td>Stressabbau</td></tr>
        </tbody>
      </table>
      <p>Kein lauter Föhn in Gesichtsnähe verwendet – das hätte den Fortschritt sofort zunichte gemacht.</p>

      <h3>✨ Das Ergebnis</h3>
      <p>Nicht perfekt – und das ist wichtig.</p>
      <ul>
        <li>Körper sauber geschoren</li>
        <li>Sanitärbereiche sicher abgeschlossen</li>
        <li>Gesicht teilweise getrimmt</li>
        <li>Krallen mit Pausen geschnitten</li>
      </ul>
      <p><strong>Am wichtigsten:</strong></p>
      <ul>
        <li>👉 Keine Verletzungen</li>
        <li>👉 Keine Eskalation</li>
        <li>👉 Hund ging ruhiger als er kam</li>
      </ul>
      <p><strong>Das ist der echte Erfolg.</strong></p>

      <h3>🚫 Was man nicht tun sollte</h3>
      <ul>
        <li>Zu früh fixieren</li>
        <li>Mit empfindlichen Bereichen anfangen</li>
        <li>Werkzeuge plötzlich einschalten</li>
        <li>Den Prozess überstürzen</li>
        <li>Warnsignale ignorieren</li>
      </ul>

      <h3>💬 Rat an den Besitzer</h3>
      <p>Kein Vorwurf. Nur Klarheit.</p>
      <p>Max ist nicht aggressiv – <strong>er hat Angst</strong>. Und das bedeutet: sein Verhalten ist vorhersehbar – und verbesserbar.</p>
      <p><strong>Plan für die Zukunft:</strong></p>
      <table>
        <thead><tr><th>Aufgabe</th><th>Häufigkeit</th></tr></thead>
        <tbody>
          <tr><td>Pflegetermine</td><td>Alle 4–6 Wochen</td></tr>
          <tr><td>Handling zuhause</td><td>Täglich (Pfoten + Gesicht)</td></tr>
          <tr><td>Desensibilisierung</td><td>Schrittweise Gewöhnung</td></tr>
        </tbody>
      </table>
      <p>Und ein Satz, der hängen blieb: <strong>„Wenn Sie ihn nur pflegen, wenn er überwachsen ist, fühlt sich jeder Besuch wie eine Bedrohung an."</strong> Genau deshalb empfehlen wir als Hundefriseur in Wien, <a href="/blog/fallstudie-krallenschneiden-dackel-coco">regelmäßige Termine – auch für sensible Bereiche wie Krallenpflege</a>.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Sollten ängstliche Hunde sediert werden?</strong></p>
      <p>Nicht immer. Viele verbessern sich mit korrektem Handling und Routine.</p>
      <p><strong>Kann sich das Verhalten verbessern?</strong></p>
      <p>Ja – Konsequenz verändert alles.</p>
      <p><strong>Ist ein Maulkorb grausam?</strong></p>
      <p>Nein. Richtig eingeführt, reduziert er Stress und erhöht die Sicherheit.</p>

      <h3>Fazit</h3>
      <p>Hunde wie Max sind nicht schwierig. Sie sind <strong>unsicher</strong>.</p>
      <p>Geben Sie ihnen Struktur. Geben Sie ihnen Vorhersehbarkeit.</p>
      <p>Und der Großteil der Aggression verschwindet.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-hund-hasst-wasser-milo">Hund hasst Wasser: Milos Weg von Panik zu ruhigem Baden</a></li>
        <li><a href="/blog/fallstudie-krallenschneiden-dackel-coco">Krallenschneiden-Angst: Dackel Cocos Weg zur Ruhe</a></li>
        <li><a href="/blog/fallstudie-verfilzter-cockapoo-bella">Verfilzter Cockapoo Bella: Vom Filzpanzer zur Erleichterung</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: maxImage
  },
  {
    slug: "fallstudie-erste-welpenpflege-teddy",
    title: "Erste Welpenpflege: Teddys Einführung in stressfreies Grooming",
    excerpt: "Cockapoo-Welpe Teddy hatte seinen allerersten Pflegetermin mit 13 Wochen. So legen wir im Hundesalon Laika den Grundstein für ein stressfreies Hundeleben.",
    date: getPostDate(27),
    content: `
      <h2>Fallstudie: Erste Welpenpflege</h2>
      <p><strong>Den Grundstein für ein Leben voller stressfreier Pflege legen</strong></p>

      <h3>📍 Fallübersicht</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Teddy</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Cockapoo</td></tr>
          <tr><td><strong>Alter</strong></td><td>13 Wochen</td></tr>
          <tr><td><strong>Temperament</strong></td><td>Neugierig, leicht unsicher, sehr aufnahmefähig</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Emma L.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Erster Hund, erste Pflegeerfahrung</td></tr>
          <tr><td><strong>Termin</strong></td><td>Einführungs-Welpenpflege</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde (mit Mikropausen)</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090 (Alsergrund)</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Von Aufregung zu Unsicherheit</h3>
      <p>Dieser Termin fand im Hundesalon Laika statt, wo frühe Welpenerfahrungen als Grundlagenarbeit behandelt werden – nicht als Routinepflege.</p>
      <p>Teddy kam genau so an, wie man es von einem jungen Welpen erwartet:</p>
      <p><strong>Aufgeregt… neugierig… voller Energie.</strong></p>
      <p>Dann, innerhalb von Sekunden auf dem Tisch:</p>
      <ul>
        <li>Rute wedelt noch – aber langsamer</li>
        <li>Kopf schief gelegt, den Raum scannend</li>
        <li>Bewegungen werden vorsichtiger</li>
      </ul>
      <p>Der bekannte Wechsel: 👉 <strong>Selbstvertrauen → Unsicherheit</strong></p>
      <p>Und genau dieser Moment ist entscheidend. Hier baut man entweder Vertrauen auf – oder schafft zukünftige Probleme. Wir sehen im Hundesalon Laika Wien regelmäßig, <a href="/blog/fallstudie-angsthund-schnauzer-max">was passiert, wenn die erste Erfahrung schlecht läuft – wie bei Angsthund Max</a>.</p>

      <h3>🧠 Werkzeuge richtig einführen</h3>
      <p>Nichts wurde überstürzt. Nicht für eine Sekunde.</p>
      <p><strong>Schritt-für-Schritt-Ansatz:</strong></p>
      <ul>
        <li>Bürste auf den Tisch gelegt → Teddy durfte sie untersuchen</li>
        <li>Schermaschine auf der anderen Seite des Raums eingeschaltet</li>
        <li>Über einige Minuten schrittweise näher gebracht</li>
      </ul>
      <p>Grundprinzip:</p>
      <p>👉 Ich gehe nicht mit dem Werkzeug auf den Welpen zu<br/>👉 Ich lasse den Welpen die Erfahrung selbst entdecken</p>
      <p>Das nimmt sofort den Druck.</p>

      <h3>🐶 Teddys Verhalten (Echt, nicht perfekt)</h3>
      <p>Kein Welpe steht still und verhält sich perfekt – und das ist in Ordnung.</p>
      <p><strong>Was Teddy zeigte:</strong></p>
      <ul>
        <li>Kleines Zusammenzucken beim Schermaschinengeräusch</li>
        <li>Spielerisches Knabbern an der Bürste</li>
        <li>Gelegentliches Pfotenrückziehen</li>
      </ul>
      <p><strong>Aber am wichtigsten:</strong></p>
      <ul>
        <li>👉 Keine Panik</li>
        <li>👉 Kein Shutdown</li>
        <li>👉 Keine Eskalation</li>
      </ul>
      <p>Das ist das grüne Licht.</p>

      <h3>🤝 Vertrauen durch Handling aufbauen</h3>
      <p>Hier werden langfristige Ergebnisse entschieden.</p>
      <p><strong>Angewandte Techniken:</strong></p>
      <ul>
        <li>Eine Hand liegt immer leicht auf seinem Körper</li>
        <li>Kurze, wiederholende Bewegungen</li>
        <li>Durchgehend konsistenter Tonfall</li>
      </ul>
      <p><strong>Pausenstruktur:</strong> Alle 5–7 Minuten:</p>
      <ul>
        <li>Pause</li>
        <li>Teddy darf sich leicht bewegen</li>
        <li>Fokus zurücksetzen</li>
      </ul>
      <p>Kein langes, ununterbrochenes Pflegen.</p>
      <p>👉 <strong>Welpen brauchen keine Ausdauer – sie brauchen positive Wiederholung.</strong></p>

      <h3>🎯 Was bei einer ersten Pflege wirklich zählt</h3>
      <p>Nicht der Haarschnitt. Nicht die Symmetrie. Nicht die Perfektion.</p>
      <p>👉 Das eigentliche Ziel:</p>
      <p><strong>„Beim nächsten Mal kommt der Welpe selbstbewusst herein."</strong></p>
      <p>Alles andere ist zweitrangig.</p>

      <h3>🛁 Das Badeerlebnis</h3>
      <p>Hier gehen viele erste Pflegetermine schief.</p>
      <p><strong>Anpassungen:</strong></p>
      <ul>
        <li>Nur lauwarmes Wasser</li>
        <li>Sehr geringer Wasserdruck</li>
        <li>An den Hinterbeinen begonnen – nicht am Kopf</li>
      </ul>
      <p><strong>Teddys Reaktion:</strong></p>
      <ul>
        <li>Kurzes Zögern</li>
        <li>Dann sichtbare Entspannung innerhalb einer Minute</li>
      </ul>
      <p>Das sagt eines: 👉 <strong>Das Tempo war richtig.</strong></p>

      <h3>✂️ Durchgeführte Pflegearbeiten</h3>
      <p>Das war absichtlich <strong>kein vollständiger Pflegetermin</strong>.</p>
      <p><strong>Was gemacht wurde:</strong></p>
      <ul>
        <li>Leichtes Körper-Aufräumen</li>
        <li>Sanitärschnitt</li>
        <li>Augenbereich freigelegt</li>
        <li>Sanftes Durchbürsten</li>
        <li>Krallen gekürzt (nur Spitzen)</li>
      </ul>
      <p><strong>Was nicht erzwungen wurde:</strong></p>
      <ul>
        <li>Vollständiger Haarschnitt</li>
        <li>Perfektes Finish</li>
        <li>Enges Gesichtsstyling</li>
      </ul>
      <p>Denn das früh zu erzwingen: 👉 <strong>erzeugt Widerstand für später.</strong></p>

      <h3>🧰 Verwendete Werkzeuge & Produkte</h3>
      <table>
        <thead><tr><th>Phase</th><th>Werkzeug</th><th>Grund</th></tr></thead>
        <tbody>
          <tr><td>Bürsten</td><td>Weiche Slicker-Bürste</td><td>Sanfte Einführung</td></tr>
          <tr><td>Schur</td><td>Leise Schermaschine</td><td>Angst reduzieren</td></tr>
          <tr><td>Trimmen</td><td>Abgerundete Schere</td><td>Sicherheit</td></tr>
          <tr><td>Bad</td><td>Welpen-Shampoo</td><td>Empfindliche Haut</td></tr>
          <tr><td>Trocknung</td><td>Niederdruckföhn</td><td>Nicht überwältigen</td></tr>
        </tbody>
      </table>
      <p>Keine starken Düfte. Keine aggressiven Produkte.</p>

      <h3>✨ Das Ergebnis</h3>
      <p>Nicht perfekt – und genau darum geht es.</p>
      <ul>
        <li>Weiches, natürliches Finish</li>
        <li>Stellenweise leicht ungleichmäßig</li>
        <li>Welpe am Ende entspannt</li>
      </ul>
      <p><strong>Am wichtigsten:</strong></p>
      <ul>
        <li>👉 Handling akzeptiert</li>
        <li>👉 Keine Angst erzeugt</li>
        <li>👉 Ging neugierig – nicht vorsichtig</li>
      </ul>
      <p><strong>Das ist der echte Erfolg.</strong></p>

      <h3>🧠 Rat an Besitzer (Wo alles weitergeht)</h3>
      <p>Hier wird die Zukunft geformt.</p>
      <p><strong>1. Zuhause mit der Pflege beginnen:</strong></p>
      <ul>
        <li>Täglich Pfoten anfassen</li>
        <li>Ohren sanft handhaben</li>
        <li>Bürsten als Spiel einführen</li>
      </ul>
      <p><strong>2. Konsistenz beibehalten:</strong></p>
      <table>
        <thead><tr><th>Phase</th><th>Häufigkeit</th></tr></thead>
        <tbody>
          <tr><td>Welpenphase</td><td>Alle 4 Wochen</td></tr>
          <tr><td>Ab 6 Monaten</td><td>Alle 4–6 Wochen</td></tr>
        </tbody>
      </table>
      <p><strong>3. Positiv halten:</strong></p>
      <ul>
        <li>Kein Zwang</li>
        <li>Nicht mit Werkzeugen hinterherjagen</li>
        <li>Sitzungen kurz und ruhig halten</li>
      </ul>
      <p>Und ein Satz, den ich immer sage: <strong>„Wenn die ersten Pflegetermine gut laufen, werden Sie nie Probleme haben."</strong> Das gilt auch für spezifische Bereiche – <a href="/blog/fallstudie-verfilzter-cockapoo-bella">regelmäßiges Bürsten verhindert Verfilzung wie bei Bella</a>.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Wann sollte ein Welpe seinen ersten Pflegetermin haben?</strong></p>
      <p>Etwa mit 10–14 Wochen, sobald er sich in seinem neuen Zuhause eingelebt hat.</p>
      <p><strong>Was, wenn mein Welpe nervös ist?</strong></p>
      <p>Das ist normal – sanfte, positive Gewöhnung ist der Schlüssel.</p>
      <p><strong>Sollte beim ersten Besuch ein vollständiger Haarschnitt gemacht werden?</strong></p>
      <p>Nein. Der Fokus sollte auf der Erfahrung liegen, nicht auf dem Ergebnis.</p>

      <h3>Fazit</h3>
      <p>Einen schlechten Haarschnitt kann man korrigieren.</p>
      <p>Eine schlechte erste Erfahrung nicht so leicht.</p>
      <p>Welpen entscheiden schnell: 👉 <strong>Ist Pflege sicher – oder nicht?</strong></p>
      <p>Das früh richtig machen… und Sie vermeiden Angst, Stress und Widerstand für die Zukunft.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-angsthund-schnauzer-max">Angsthund Max: Was passiert, wenn die erste Erfahrung schlecht war</a></li>
        <li><a href="/blog/fallstudie-verfilzter-cockapoo-bella">Verfilzter Cockapoo: Warum regelmäßige Pflege so wichtig ist</a></li>
        <li><a href="/blog/fallstudie-krallenschneiden-dackel-coco">Krallenpflege bei Dackel Coco: Angst nach schlechter Erfahrung</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: teddyImage
  },
  {
    slug: "fallstudie-senior-hund-charlie",
    title: "Senior-Hund beim Hundefriseur: Charlies schonende Pflege mit 13 Jahren",
    excerpt: "Cavalier King Charles Spaniel Charlie ist 13 und hat Arthrose. So sieht ein angepasster Pflegetermin im Hundesalon Laika aus – Komfort vor Optik.",
    date: getPostDate(28),
    content: `
      <h2>Fallstudie: Senior-Hund beim Hundefriseur</h2>
      <p><strong>Komfort vor Optik – Wie man einen alten Hund schonend pflegt</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Charlie</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Cavalier King Charles Spaniel</td></tr>
          <tr><td><strong>Alter</strong></td><td>13 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Ruhig, brav, wird schnell müde</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Margaret H.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Stammkunde seit Welpenalter</td></tr>
          <tr><td><strong>Termin</strong></td><td>Senior-Komfort-Grooming</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde 20 Minuten (mit Pausen)</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Langsamer, aber noch voll dabei</h3>
      <p>Der Termin fand bei Hundesalon Laika statt – hier geht's bei älteren Hunden nicht um Perfektion, sondern um Wohlbefinden. Als erfahrener Hundefriseur in Wien wissen wir: Jeder Senior braucht einen individuellen Pflegeplan.</p>
      <p>Charlie ist nicht einfach reingelaufen. Er ist <strong>langsam reingeschlurft</strong>.</p>
      <p>Und genau da siehst du's sofort:</p>
      <ul>
        <li>Hinterbeine steif</li>
        <li>Unsicher auf dem Boden</li>
        <li>Kopf etwas tiefer als früher</li>
      </ul>
      <p>Der Schwanz hat noch gewedelt – aber langsamer.</p>
      <p>Und das sagt alles: 👉 <strong>Er will… aber sein Körper kann nimmer wie früher.</strong></p>

      <h3>🧠 Gesundheitliche Situation</h3>
      <p>Bei Senioren ist nix „Standard". Alles richtet sich danach, was der Hund noch schafft.</p>
      <p><strong>Bekannte Probleme:</strong></p>
      <ul>
        <li>Arthrose in Hüfte und Hinterbeinen</li>
        <li>Leichte Herzprobleme</li>
        <li>Weniger Ausdauer</li>
      </ul>
      <p><strong>Beim Grooming aufgefallen:</strong></p>
      <ul>
        <li>Muskeln im hinteren Bereich abgebaut</li>
        <li>Empfindlich beim Anheben der Beine</li>
        <li>Dünnere, sensiblere Haut</li>
      </ul>
      <p>Das sind keine Nebensachen. 👉 <strong>Das bestimmt den ganzen Ablauf.</strong></p>

      <h3>⚠️ Was das fürs Grooming bedeutet</h3>
      <p>Bei alten Hunden hast du immer zwei Fragen im Kopf:</p>
      <p>👉 Was gehört gemacht<br/>👉 Und was hält er überhaupt aus</p>
      <p><strong>Einschränkungen:</strong></p>
      <ul>
        <li>Langes Stehen geht nicht</li>
        <li>Schnelles Umpositionieren geht nicht</li>
        <li>Stress muss runter (Herz!)</li>
      </ul>
      <p>Darum: 👉 <strong>Kein durchgehendes Grooming – sondern in Etappen arbeiten.</strong></p>

      <h3>🔄 Anpassungen im Ablauf</h3>
      <h4>1. Ablauf in Blöcken</h4>
      <p>Statt durchziehen:</p>
      <ul>
        <li>10–15 Minuten arbeiten</li>
        <li>3–5 Minuten Pause</li>
      </ul>
      <p>Charlie durfte: 👉 <strong>sitzen oder liegen, wann er wollte.</strong></p>

      <h4>2. Tisch & Setup</h4>
      <ul>
        <li>Rutschfeste Unterlage</li>
        <li>Halterung nur zur Unterstützung – nicht zum Fixieren</li>
        <li>Bauch leicht gestützt</li>
      </ul>
      <p>Kein unnötiges Hochheben.</p>

      <h4>3. Reihenfolge geändert</h4>
      <p>Normal: Körper → Beine → Kopf</p>
      <p>Hier: 👉 <strong>Beine zuerst – solange noch Energie da ist.</strong></p>
      <p>Kleine Änderung, große Wirkung.</p>

      <h3>✂️ Technik angepasst</h3>
      <p>Einen Senior groomt man anders.</p>
      <p><strong>Was geändert wurde:</strong></p>
      <ul>
        <li>Lieber mit Maschine als mit Schere (schneller, sicherer)</li>
        <li>Kein Ziehen oder Strecken</li>
        <li>Keine unnatürlichen Positionen</li>
      </ul>
      <p>Alles war: 👉 <strong>langsam, ruhig, kontrolliert.</strong></p>

      <h3>🧘 Ständige Beobachtung</h3>
      <p>Bei alten Hunden muss man permanent schauen.</p>
      <p><strong>Worauf geachtet wurde:</strong></p>
      <ul>
        <li>Mehr Hecheln</li>
        <li>Unruhiges Verlagern vom Gewicht</li>
        <li>Augen schließen (Erschöpfung)</li>
      </ul>
      <p>Nach ca. 40 Minuten: 👉 <strong>Charlie hat sich einfach hingesetzt.</strong></p>
      <p>Und das ist kein „Ungehorsam". Das ist Kommunikation.</p>
      <p>👉 Also sofort Pause.</p>

      <h3>🧰 Werkzeuge & Produkte</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Schneiden</td><td>Andis Maschine + #5F</td><td>Schnell, effizient</td></tr>
          <tr><td>Bürsten</td><td>Weiche Slicker</td><td>Schonend</td></tr>
          <tr><td>Baden</td><td>Hafer-Shampoo</td><td>Beruhigt die Haut</td></tr>
          <tr><td>Trocknen</td><td>Niedrige Hitze & Luft</td><td>Weniger Stress</td></tr>
          <tr><td>Unterstützung</td><td>Grooming-Sling</td><td>Stabilität</td></tr>
        </tbody>
      </table>
      <p>Kein Lärm. Keine Hitze.</p>

      <h3>🛁 Baden – besonders sensibel</h3>
      <p>Für ältere Hunde oft der anstrengendste Teil.</p>
      <p><strong>Anpassungen:</strong></p>
      <ul>
        <li>Kürzere Badezeit</li>
        <li>Ständige Unterstützung</li>
        <li>Kein langes Stehen</li>
      </ul>
      <p>Charlie war leicht wackelig – aber ruhig. 👉 <strong>Genau so soll's sein.</strong></p>

      <h3>✨ Ergebnis</h3>
      <p>Kein Show-Schnitt. Ein <strong>Komfort-Schnitt</strong>.</p>
      <ul>
        <li>Fell gekürzt für einfache Pflege</li>
        <li>Hygiene sauber gemacht</li>
        <li>Weniger Verfilzung durch kürzeres Fell</li>
        <li>Krallen vorsichtig geschnitten</li>
      </ul>
      <p><strong>Das Wichtigste:</strong></p>
      <ul>
        <li>👉 Kein Stress</li>
        <li>👉 Keine Überforderung</li>
        <li>👉 Schwanz hat noch gewedelt</li>
      </ul>

      <h3>🧠 Beratung für die Besitzerin</h3>
      <p>Da entscheidet sich, wie's weitergeht.</p>
      <h4>1. Öfter, aber kürzer</h4>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Grooming</td><td>Alle 4–6 Wochen</td></tr>
          <tr><td>Zuhause bürsten</td><td>2–3× pro Woche</td></tr>
        </tbody>
      </table>
      <h4>2. Zuhause anpassen</h4>
      <ul>
        <li>Orthopädisches Bett</li>
        <li>Rutschfeste Böden</li>
        <li>Leichte Zugänge</li>
      </ul>
      <h4>3. Fell anpassen</h4>
      <p><strong>„In dem Alter ist kürzer einfach freundlicher für den Hund."</strong></p>
      <p>Langes Fell + alter Hund = selten eine gute Kombi. Ähnlich schonende Ansätze nutzen wir auch <a href="/blog/fallstudie-hautprobleme-franzoesische-bulldogge-rocky">bei Hunden mit Hautproblemen wie Rocky</a> und <a href="/blog/fallstudie-notfall-grooming-shihtzu-rosie">bei zeitlich angepassten Terminen wie bei Rosie</a>.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Soll man alte Hunde überhaupt noch regelmäßig pflegen?</strong></p>
      <p>Ja – aber angepasst und ohne Druck.</p>
      <p><strong>Ist Grooming stressig für Senioren?</strong></p>
      <p>Kann es sein, wenn man's falsch macht. Mit Ruhe geht's gut.</p>
      <p><strong>Soll man den Stil ändern?</strong></p>
      <p>Ja. Komfort geht vor Optik.</p>

      <h3>Fazit</h3>
      <p>Ein alter Hund braucht kein perfektes Styling.</p>
      <p>Er braucht: 👉 <strong>Geduld, Gefühl und Respekt für seine Grenzen.</strong></p>
      <p>Der größte Fehler? 👉 <strong>Ihn behandeln, als wär er noch jung.</strong></p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-hautprobleme-franzoesische-bulldogge-rocky">Hautprobleme bei Rocky: Wenn Pflege besonders schonend sein muss</a></li>
        <li><a href="/blog/fallstudie-erste-welpenpflege-teddy">Welpe Teddy: Pflegeroutine von Anfang an aufbauen</a></li>
        <li><a href="/blog/fallstudie-notfall-grooming-shihtzu-rosie">Notfall-Grooming bei Rosie: Angepasste Pflege unter Zeitdruck</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: charlieImage
  },
  {
    slug: "fallstudie-hautprobleme-franzoesische-bulldogge-rocky",
    title: "Hund mit Hautproblemen: Rockys Weg von gereizter Haut zu spürbarer Erleichterung",
    excerpt: "Französische Bulldogge Rocky hatte entzündete Hautfalten und Hefepilz-Verdacht. So sah sein hautorientierter Pflegetermin im Hundesalon Laika aus.",
    date: getPostDate(29),
    content: `
      <h2>Fallstudie: Hund mit Hautproblemen</h2>
      <p><strong>Von gereizter, entzündeter Haut zu spürbarer Erleichterung</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Rocky</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Französische Bulldogge</td></tr>
          <tr><td><strong>Alter</strong></td><td>5 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Freundlich, aber unruhig bei Reizung</td></tr>
          <tr><td><strong>Besitzer</strong></td><td>Jason T.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Wiederkehrende Hautprobleme, bereits tierärztlich behandelt</td></tr>
          <tr><td><strong>Termin</strong></td><td>Hautorientiertes Pflege-Grooming</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde 30 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Du riechst es zuerst</h3>
      <p>Noch bevor du den Hund richtig anschaust, nimmst du den Geruch wahr.</p>
      <p>So ein leicht süßlicher, „muffiger" Geruch.</p>
      <p>Wenn du als Hundefriseur in Wien Erfahrung hast, weißt du sofort: 👉 <strong>Das geht oft Richtung Hefepilz (Yeast)</strong></p>
      <p><strong>Sichtbare Anzeichen:</strong></p>
      <ul>
        <li>Rötungen an Brust und Achseln</li>
        <li>Fettiges, leicht klebriges Fell</li>
        <li>Permanentes Kratzen beim Reinkommen</li>
        <li>Kleine kahle Stellen rund um die Halsfalten</li>
      </ul>
      <p>Rocky war nicht panisch. Aber eindeutig: 👉 <strong>Unwohl.</strong></p>

      <h3>🔍 Worum es sich wahrscheinlich handelt</h3>
      <p>Wichtig vorweg: 👉 <strong>Das ist keine Diagnose – sondern eine fachliche Einschätzung.</strong></p>
      <p><strong>Wahrscheinliche Kombination:</strong></p>
      <ul>
        <li>Hefepilz-Überwuchs</li>
        <li>Leichte allergische Reaktion</li>
      </ul>
      <p><strong>Hinweise dafür:</strong></p>
      <ul>
        <li>Typischer Geruch</li>
        <li>Fettiger Film im Fell</li>
        <li>Rote, entzündete Hautfalten</li>
      </ul>
      <p>Zusätzlich klar sichtbar: 👉 <strong>Feuchtigkeit in den Hautfalten – typisch bei dieser Rasse.</strong></p>

      <h3>🧠 Wie ich das einschätze (Praxislogik)</h3>
      <p>Man rät nicht – man liest Muster.</p>
      <p><strong>Worauf ich achte:</strong></p>
      <ul>
        <li>Farbunterschiede in der Haut</li>
        <li>Wärmeentwicklung an betroffenen Stellen</li>
        <li>Fellstruktur (trocken vs. fettig)</li>
      </ul>
      <p>Beim Auseinanderziehen der Haut in der Achsel: 👉 <strong>Warm, leicht klebrig.</strong></p>
      <p>Das ist kein Normalzustand.</p>

      <h3>⚠️ Was ich bewusst NICHT gemacht habe</h3>
      <p>Hier passieren die größten Fehler.</p>
      <p><strong>Ich habe bewusst verzichtet auf:</strong></p>
      <ul>
        <li>Stark entfettende Shampoos</li>
        <li>Intensive Duftstoffe</li>
        <li>Heißes oder starkes Föhnen</li>
      </ul>
      <p>Warum? 👉 <strong>Gereizte Haut reagiert extrem schnell auf zu aggressive Behandlung.</strong></p>
      <p>Und dann wird's nur schlimmer.</p>

      <h3>🛁 Ablauf der Behandlung</h3>
      <h4>1. Vorcheck (trocken)</h4>
      <p>Kein Bürsten über gereizte Stellen. So wenig Reibung wie möglich.</p>

      <h4>2. Erste Wäsche</h4>
      <ul>
        <li>Lauwarmes Wasser</li>
        <li>Sanftes Auftragen</li>
        <li>Kein Schrubben</li>
      </ul>

      <h4>3. Medizinisches Shampoo</h4>
      <p>Verwendet: 👉 <strong>Chlorhexidin-Shampoo</strong></p>
      <p><strong>Anwendung:</strong></p>
      <ul>
        <li>Direkt auf Problemzonen</li>
        <li>8–10 Minuten einwirken lassen</li>
      </ul>
      <p>Ganz wichtig: 👉 <strong>Die meisten spülen viel zu früh aus – dann wirkt das Ganze nicht.</strong></p>

      <h4>4. Zweite, leichte Reinigung</h4>
      <ul>
        <li>Mild</li>
        <li>Fokus aufs Fell, nicht auf die Haut</li>
      </ul>

      <h4>5. Trocknen</h4>
      <ul>
        <li>Niedrige Temperatur</li>
        <li>Wenig Druck</li>
        <li>Ständige Bewegung</li>
      </ul>
      <p>Wichtig: 👉 <strong>Haut muss trocken sein – aber darf nicht überhitzen.</strong></p>

      <h3>✂️ Schur-Anpassungen</h3>
      <p>Rocky hat zwar kurzes Fell, aber leicht gekürzt wurde:</p>
      <ul>
        <li>Halsfalten</li>
        <li>Achselbereich</li>
        <li>Hygienezonen</li>
      </ul>
      <p>Ziel: 👉 <strong>Mehr Luft an die Haut – weniger Feuchtigkeit → weniger Probleme.</strong></p>
      <p>Kein kurzes Schneiden direkt auf entzündeten Stellen.</p>

      <h3>🧰 Verwendete Produkte & Tools</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Hauptwäsche</td><td>Chlorhexidin-Shampoo</td><td>Antibakteriell & antifungal</td></tr>
          <tr><td>Nachwäsche</td><td>Hypoallergenes Shampoo</td><td>Schonend</td></tr>
          <tr><td>Trocknen</td><td>Low-Pressure Föhn</td><td>Hautschutz</td></tr>
          <tr><td>Trimmen</td><td>Kleine Maschine</td><td>Präzise & kontrolliert</td></tr>
        </tbody>
      </table>
      <p>👉 Kein Conditioner – kann Feuchtigkeit einschließen.</p>

      <h3>✨ Ergebnis nach dem Termin</h3>
      <p>Man „heilt" Hautprobleme nicht in einer Sitzung. Aber man verbessert die Situation deutlich.</p>
      <p><strong>Nach dem Grooming:</strong></p>
      <ul>
        <li>Rötung etwas zurückgegangen</li>
        <li>Fell deutlich sauberer, weniger fettig</li>
        <li>Geruch stark reduziert</li>
        <li>Rocky deutlich ruhiger</li>
      </ul>
      <p>Wichtiges Zeichen: 👉 <strong>Weniger Kratzen in den letzten 15 Minuten.</strong></p>
      <p>Das ist immer ein gutes Signal.</p>

      <h3>🧠 Empfehlung an den Besitzer</h3>
      <p>Das ist entscheidend für den langfristigen Erfolg.</p>
      <p>Ich hab Jason klar gesagt:</p>
      <p><strong>„Das schaut gut behandelbar aus – aber wenn's immer wieder kommt, muss der Tierarzt tiefer schauen."</strong></p>
      <p>Denn: 👉 Grooming unterstützt – ersetzt aber keine medizinische Abklärung.</p>

      <h4>Pflegeplan für zuhause</h4>
      <p><strong>Direkt danach:</strong></p>
      <ul>
        <li>Hautfalten täglich sanft reinigen</li>
        <li>Gut trocken halten</li>
        <li>Nicht zu oft baden</li>
      </ul>
      <p><strong>Langfristig:</strong></p>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Grooming</td><td>Alle 4–6 Wochen</td></tr>
          <tr><td>Faltenpflege</td><td>Täglich</td></tr>
          <tr><td>Medizinische Wäsche</td><td>Nach Bedarf / Tierarzt</td></tr>
        </tbody>
      </table>
      <p>Und der Satz, der hängen bleibt: <strong>„Hautprobleme sind kein Sauberkeitsproblem – sondern ein Gleichgewichtsproblem."</strong> Ähnliche Hygiene-Themen behandeln wir auch <a href="/blog/fallstudie-vernachlaessigter-hund-bruno">bei vernachlässigten Hunden wie Bruno</a> und <a href="/blog/fallstudie-doppelfell-husky-luna">bei rassetypischer Fellpflege wie bei Husky Luna</a>.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Warum kratzt sich mein Hund ständig?</strong></p>
      <p>Oft wegen Hautreizungen, Allergien oder Hefepilzen.</p>
      <p><strong>Hilft häufiges Waschen?</strong></p>
      <p>Nein – zu viel Waschen kann die Haut sogar verschlechtern.</p>
      <p><strong>Braucht man immer einen Tierarzt?</strong></p>
      <p>Bei wiederkehrenden Problemen: Ja, unbedingt.</p>

      <h3>Fazit</h3>
      <p>Hautprobleme kommen selten plötzlich. Sie bauen sich auf:</p>
      <p>👉 Feuchtigkeit, Wärme, zu wenig Luft.</p>
      <p>Und irgendwann kippt's.</p>
      <p>Deine Aufgabe ist nicht nur, den Hund zu waschen. 👉 <strong>Sondern das Umfeld der Haut zu verbessern.</strong></p>
      <p>Du kannst die Ursache im Salon nicht heilen. Aber du kannst dafür sorgen, dass der Hund weniger Juckreiz hat, ruhiger ist und besser damit leben kann.</p>
      <p>Und für die meisten Besitzer… 👉 <strong>ist genau das der Unterschied.</strong></p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-vernachlaessigter-hund-bruno">Vernachlässigter Hund Bruno: Haut- und Hygiene-Reset</a></li>
        <li><a href="/blog/fallstudie-senior-hund-charlie">Senior-Hund Charlie: Schonende Pflege mit 13 Jahren</a></li>
        <li><a href="/blog/fallstudie-doppelfell-husky-luna">Doppelfell bei Husky Luna: Fellpflege für empfindliche Rassen</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: rockyImage
  },
  {
    slug: "fallstudie-doppelfell-husky-luna",
    title: "Doppelfell-Rasse im Fellwechsel: Lunas komplettes De-Shedding",
    excerpt: "Siberian Husky Luna war mitten im Fellwechsel – Unterwolle überall. So funktioniert ein professionelles De-Shedding im Hundesalon Laika.",
    date: getPostDate(30),
    content: `
      <h2>Fallstudie: Doppelfell-Rasse im Fellwechsel</h2>
      <p><strong>Vom Fellchaos zur kontrollierten, gesunden Fellpflege</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Luna</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Siberian Husky</td></tr>
          <tr><td><strong>Alter</strong></td><td>6 Jahre</td></tr>
          <tr><td><strong>Temperament</strong></td><td>Energetisch, aber kooperativ</td></tr>
          <tr><td><strong>Besitzer</strong></td><td>Mark D.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Starker saisonaler Fellwechsel</td></tr>
          <tr><td><strong>Termin</strong></td><td>Komplettes De-Shedding / Fell-Reset</td></tr>
          <tr><td><strong>Dauer</strong></td><td>2 Stunden 30 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Fell überall</h3>
      <p>Man hat es sofort gesehen. Und ehrlich gesagt: auch gespürt.</p>
      <p>👉 <strong>Haare. Überall.</strong></p>
      <p>Nicht einfach lose – sondern regelrecht aus dem Fell herausdrückend.</p>
      <p><strong>Beim Ankommen:</strong></p>
      <ul>
        <li>Büschel, die beim Schütteln abfallen</li>
        <li>Unterwolle, die durch das Deckhaar nach oben kommt</li>
        <li>Besitzer bereits voller Haare</li>
      </ul>
      <p>Als ich mit der Hand über den Rücken gefahren bin: 👉 <strong>Eine ganze Hand voll Fell.</strong></p>
      <p>Das ist ein klares Zeichen: 👉 <strong>Das Fell ist komplett im „Blow-Out".</strong> Als Hundefriseur in Wien sehen wir das bei Doppelfell-Rassen regelmäßig – und wissen: ohne Pflege endet es wie <a href="/blog/fallstudie-verfilzter-cockapoo-bella">bei Cockapoo Bella, wo das Fell komplett verfilzt war</a>.</p>

      <h3>🔍 Wie stark war der Fellwechsel?</h3>
      <p>Das war Hochphase. Kein normales Bürsten mehr – das war ein <strong>kompletter Fellwechsel</strong>.</p>
      <p><strong>Fellzustand:</strong></p>
      <ul>
        <li>Dichte, fest sitzende Unterwolle</li>
        <li>Deckhaar intakt (sehr wichtig!)</li>
        <li>Keine Verfilzungen – aber starke Verdichtung</li>
      </ul>
      <p>Entscheidender Punkt: 👉 <strong>Die Haut bekommt kaum noch Luft.</strong></p>
      <p>Wenn man das ignoriert:</p>
      <ul>
        <li>Überhitzung</li>
        <li>Hautprobleme</li>
        <li>Geruchsbildung</li>
      </ul>

      <h3>⚠️ Typischer Fehler – und sofort angesprochen</h3>
      <p>Mark hat gefragt: <em>„Wäre es nicht einfacher, sie einfach zu scheren?"</em></p>
      <p>Das hört man ständig. Meine klare Antwort:</p>
      <p>👉 <strong>Doppelfell niemals scheren.</strong></p>
      <p><strong>Warum:</strong></p>
      <ul>
        <li>Zerstört die natürliche Temperaturregulierung</li>
        <li>Fell wächst oft ungleichmäßig oder beschädigt nach</li>
        <li>Erhöht das Risiko für Sonnenbrand</li>
      </ul>
      <p>Sobald man das verständlich erklärt, ist das Thema erledigt. Ähnliche Erwartungsgespräche führen wir auch <a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">bei Cavapoo Alfie, wo die Besitzerin ebenfalls einen anderen Schnitt wollte</a>.</p>

      <h3>🛠️ Der Ablauf – So funktioniert richtiges De-Shedding</h3>
      <p>Das ist kein schnelles Durchbürsten. 👉 <strong>Das ist ein System.</strong></p>

      <h4>1. Pre-Blow (trockenes Fell)</h4>
      <p>Bevor Wasser ins Spiel kommt: 👉 <strong>Einsatz vom Hochleistungsföhn im trockenen Fell.</strong></p>
      <p><strong>Ziel:</strong></p>
      <ul>
        <li>Lose Unterwolle rausblasen</li>
        <li>Verdichtung auflockern</li>
      </ul>
      <p>Ergebnis: 👉 Sofort massive Fellmengen.</p>

      <h4>2. Baden</h4>
      <p>Verwendet: 👉 <strong>Spezielles De-Shedding Shampoo</strong></p>
      <ul>
        <li>Komplett durchfeuchten (dauert bei Huskys!)</li>
        <li>Nicht nur oberflächlich waschen</li>
      </ul>

      <h4>3. Conditioner</h4>
      <p>Ein Schritt, den viele auslassen.</p>
      <p>👉 <strong>Leichter De-Shedding Conditioner</strong></p>
      <p><strong>Warum:</strong></p>
      <ul>
        <li>Löst restliche Unterwolle</li>
        <li>Reduziert statische Aufladung</li>
        <li>Erleichtert das Ausföhnen</li>
      </ul>
      <p>Einwirkzeit: 👉 Mindestens 5–7 Minuten.</p>

      <h4>4. Föhnen (der wichtigste Teil)</h4>
      <p>Hier passiert der Großteil der Arbeit.</p>
      <p><strong>Vorgehen:</strong></p>
      <ul>
        <li>In Sektionen arbeiten</li>
        <li>Luftstrom mit dem Fellverlauf</li>
        <li>Kein „wildes Draufhalten"</li>
      </ul>
      <p>Visuell: 👉 <strong>Das Fell hebt sich in Wellen ab.</strong></p>

      <h4>5. Bürsten & Feinarbeit</h4>
      <p><strong>Tools:</strong> Unterwollrechen + Slicker-Bürste</p>
      <p>Wichtig: 👉 <strong>Nur das entfernen, was sich lösen will – kein aggressives Herausreißen.</strong></p>

      <h3>🧰 Werkzeuge & Produkte</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Zweck</th></tr></thead>
        <tbody>
          <tr><td>Pre-Blow</td><td>Hochleistungsföhn</td><td>Grobe Unterwolle entfernen</td></tr>
          <tr><td>Baden</td><td>De-Shedding Shampoo</td><td>Fellwechsel unterstützen</td></tr>
          <tr><td>Pflege</td><td>Conditioner</td><td>Unterwolle lösen</td></tr>
          <tr><td>Bürsten</td><td>Unterwollrechen</td><td>Kontrolliertes Entfernen</td></tr>
          <tr><td>Finish</td><td>Slicker</td><td>Deckhaar glätten</td></tr>
        </tbody>
      </table>

      <h3>⏱️ Dauer im Überblick</h3>
      <p>Gesamt: 👉 <strong>2,5 Stunden</strong></p>
      <table>
        <thead><tr><th>Phase</th><th>Dauer</th></tr></thead>
        <tbody>
          <tr><td>Pre-Blow</td><td>30 Min</td></tr>
          <tr><td>Baden + Einwirkzeit</td><td>30 Min</td></tr>
          <tr><td>Föhnen</td><td>60 Min</td></tr>
          <tr><td>Finish</td><td>30 Min</td></tr>
        </tbody>
      </table>
      <p>👉 Kein Schnellservice – sondern saubere Arbeit.</p>

      <h3>✨ Ergebnis</h3>
      <p>Der Unterschied war deutlich.</p>
      <p><strong>Nach dem Grooming:</strong></p>
      <ul>
        <li>80–90 % der losen Unterwolle entfernt</li>
        <li>Fell liegt wieder sauber an</li>
        <li>Natürlicher Glanz zurück</li>
        <li>Kaum noch Haarverlust beim Anfassen</li>
      </ul>
      <p>Der entscheidende Moment: 👉 <strong>Besitzer streicht drüber… und es bleibt nichts mehr hängen.</strong></p>
      <p>Das ist genau das, was Kunden wollen.</p>

      <h3>🧠 Beratung für den Besitzer</h3>
      <p>Hier entscheidet sich, ob das Problem wiederkommt.</p>
      <table>
        <thead><tr><th>Aufgabe</th><th>Häufigkeit</th></tr></thead>
        <tbody>
          <tr><td>Bürsten</td><td>2–3× pro Woche</td></tr>
          <tr><td>Komplettes Grooming</td><td>Alle 8–10 Wochen</td></tr>
          <tr><td>Fellwechsel-Behandlung</td><td>2× pro Jahr</td></tr>
        </tbody>
      </table>
      <p><strong>Wichtige Punkte:</strong></p>
      <ul>
        <li>Nicht warten, bis es „explodiert"</li>
        <li>Niemals scheren</li>
        <li>Gute Werkzeuge verwenden (billige Bürsten bringen nichts)</li>
      </ul>
      <p>Und mein Satz dazu: <strong>„Wenn du dem Fell voraus bist, ist es einfach. Wenn du hinterher bist, wird's Arbeit."</strong></p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Kann man das Haaren stoppen?</strong></p>
      <p>Nein – aber man kann es kontrollieren.</p>
      <p><strong>Hilft Scheren gegen Haaren?</strong></p>
      <p>Nein, macht es oft schlimmer.</p>
      <p><strong>Warum verliert mein Hund so viel Fell?</strong></p>
      <p>Meist wegen saisonalem Fellwechsel und angestauter Unterwolle.</p>

      <h3>Fazit</h3>
      <p>Das Problem ist nicht das Haaren. 👉 <strong>Das Problem ist verdichtete Unterwolle.</strong></p>
      <p>Wenn die sich staut: Hitze bleibt im Fell, Haut leidet, Haaren wird schlimmer.</p>
      <p>Ein richtig gemachtes De-Shedding: 👉 <strong>setzt alles wieder zurück auf „normal".</strong></p>
      <p>Bei Doppelfell geht es nicht darum, das Haaren zu stoppen. 👉 <strong>Sondern es richtig zu managen.</strong></p>
      <p>Machst du das sauber… haben Hund und Besitzer ein deutlich entspannteres Leben.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-verfilzter-cockapoo-bella">Verfilzter Cockapoo Bella: Wenn Fellpflege vernachlässigt wird</a></li>
        <li><a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">Erwartung vs. Realität: Cavapoo Alfies versteckte Verfilzung</a></li>
        <li><a href="/blog/fallstudie-pudel-praezisionsschnitt-oliver">Pudel Oliver: Rassespezifisches Grooming auf höchstem Niveau</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: winterImage
  },
  {
    slug: "fallstudie-vernachlaessigter-hund-bruno",
    title: "Stark verschmutzter Hund: Brunos Komplett-Reset nach der Adoption",
    excerpt: "Tierschutz-Mischling Bruno kam frisch adoptiert und völlig verdreckt. So sah sein Reha-Grooming im Hundesalon Laika aus – Schritt für Schritt.",
    date: getPostDate(31),
    content: `
      <h2>Fallstudie: Stark verschmutzter / vernachlässigter Hund</h2>
      <p><strong>Vom komplett verdreckten Fell… zu sauber, entspannt und wieder „Hund sein"</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Bruno</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Mischling (Terrier-Mix)</td></tr>
          <tr><td><strong>Alter</strong></td><td>7 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Nervös, aber nicht aggressiv</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Lisa K.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Frisch adoptiert (Tierschutzhund)</td></tr>
          <tr><td><strong>Termin</strong></td><td>Komplett-Reset / Reha-Grooming</td></tr>
          <tr><td><strong>Dauer</strong></td><td>2 Stunden 15 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Du gehst nicht gleich ran</h3>
      <p>Das ist so ein Fall, wo du nicht einfach drauflos arbeitest.</p>
      <p>👉 <strong>Zuerst schauen. Einschätzen. Plan machen.</strong></p>
      <p>Und ehrlich gesagt: Man hat's gerochen, bevor man's richtig gesehen hat.</p>
      <p><strong>Sofort aufgefallen:</strong></p>
      <ul>
        <li>Fell komplett durchtränkt mit Schmutz und Fett</li>
        <li>Starker, saurer Geruch (kein normaler „Hundegeruch")</li>
        <li>Eingetrockneter Schlamm an Beinen und Bauch</li>
        <li>Dreck und kleine Partikel im ganzen Fell</li>
      </ul>
      <p>Als Bruno sich geschüttelt hat: 👉 <strong>Staub und Dreck sind wie eine Wolke runtergefallen.</strong></p>
      <p>Da weißt du sofort: 👉 <strong>Das wird keine „einmal schnell waschen"-Nummer.</strong></p>

      <h3>🔍 Zustand im Detail</h3>
      <p>Das war nicht einfach ein dreckiger Hund. Das war aufgebaut über Zeit – ähnlich wie <a href="/blog/fallstudie-verfilzter-cockapoo-bella">bei Cockapoo Bella, wo sich die Verfilzung schleichend entwickelt hat</a>.</p>
      <p><strong>Fell:</strong></p>
      <ul>
        <li>Fettige obere Schicht</li>
        <li>Dreck tief im Fell eingebettet</li>
        <li>Leichte Verfilzungen an typischen Stellen</li>
      </ul>
      <p><strong>Haut:</strong></p>
      <ul>
        <li>Leichte Rötung am Bauch</li>
        <li>Kratzspuren sichtbar</li>
        <li>Keine offenen Wunden (sehr gut)</li>
      </ul>
      <p>Zusätzlich: 👉 <strong>Flohkot entlang der Wirbelsäule.</strong></p>
      <p>Keine aktiven Flöhe – aber vor Kurzem da gewesen.</p>

      <h3>⚠️ Risiken vor dem Start</h3>
      <p>Bevor du überhaupt anfängst, denkst du schon weiter.</p>
      <p><strong>Mögliche Probleme:</strong></p>
      <ul>
        <li>Haut reagiert empfindlich auf zu starkes Waschen</li>
        <li>Parasiten könnten sich im Salon verteilen</li>
        <li>Zu aggressive Reinigung = Stress für den Hund</li>
      </ul>
      <p>Darum: 👉 <strong>Kein „alles runter in einem Schritt" – sondern kontrollierter Reset.</strong></p>

      <h3>🛠️ Ablauf – So gehst du richtig ran</h3>
      <p>Das hier ist keine Standardwäsche. <strong>Das ist ein Prozess.</strong></p>

      <h4>1. Vorbereitung (trocken)</h4>
      <p>Bevor Wasser dazukommt:</p>
      <ul>
        <li>Groben Dreck vorsichtig rausgebürstet</li>
        <li>Größere Teile von Hand entfernt</li>
      </ul>
      <p>Warum? 👉 <strong>Wasser + Dreck = Schlamm – und das willst du vermeiden.</strong></p>

      <h4>2. Erste Wäsche (Entfetten)</h4>
      <p>Verwendet: 👉 <strong>Tiefenreinigendes, entfettendes Shampoo</strong></p>
      <ul>
        <li>Komplett durchnässen (dauert!)</li>
        <li>Gründlich einarbeiten – aber ohne Rubbeln</li>
      </ul>
      <p>Ergebnis: 👉 <strong>Wasser wurde sofort braun.</strong> Ganz normal bei so einem Zustand.</p>

      <h4>3. Zweite Wäsche (die eigentliche Reinigung)</h4>
      <p>Nach dem Ausspülen: 👉 <strong>Noch einmal Shampoo.</strong></p>
      <p>Jetzt passiert das Entscheidende:</p>
      <ul>
        <li>Restlicher Dreck wird gelöst</li>
        <li>Fell fühlt sich deutlich leichter an</li>
      </ul>
      <p>Wichtig zu wissen: 👉 <strong>Richtig sauber wird's oft erst beim zweiten Durchgang.</strong></p>

      <h4>4. Floh-Management</h4>
      <p>Auch ohne aktive Flöhe:</p>
      <ul>
        <li>Antiparasitäres Shampoo gezielt eingesetzt</li>
        <li>Besonders gründlich gespült</li>
      </ul>
      <p>Salon-Hygiene dabei immer im Blick.</p>

      <h4>5. Pflege (Balance wiederherstellen)</h4>
      <p>Nach so einer Reinigung braucht die Haut Unterstützung.</p>
      <p>👉 <strong>Leichte Pflege verwendet</strong></p>
      <ul>
        <li>Feuchtigkeit zurückgeben</li>
        <li>Haut beruhigen</li>
        <li>Austrocknen verhindern</li>
      </ul>

      <h4>6. Trocknen – jetzt sieht man die Veränderung</h4>
      <p>Hier wird's sichtbar.</p>
      <ul>
        <li>Hochleistungsföhn</li>
        <li>In Sektionen gearbeitet</li>
      </ul>
      <p>Während dem Trocknen: 👉 <strong>Die echte Fellfarbe kommt zurück.</strong></p>
      <p>Das ist jedes Mal ein richtig guter Moment.</p>

      <h4>7. Schneiden & Finish</h4>
      <p>Erst wenn alles sauber ist:</p>
      <ul>
        <li>Leicht in Form gebracht</li>
        <li>Hygienebereiche sauber gemacht</li>
        <li>Kleine Verfilzungen entfernt</li>
      </ul>
      <p>Kein extremes Styling. 👉 <strong>Nur zurück zu einem gesunden Zustand.</strong></p>

      <h3>🧰 Werkzeuge & Produkte</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Vorbereitung</td><td>Slicker-Bürste</td><td>Groben Schmutz lösen</td></tr>
          <tr><td>1. Wäsche</td><td>Entfettendes Shampoo</td><td>Öl & Dreck aufbrechen</td></tr>
          <tr><td>2. Wäsche</td><td>Mildes Shampoo</td><td>Tiefenreinigung</td></tr>
          <tr><td>Behandlung</td><td>Antiparasitär</td><td>Flohkontrolle</td></tr>
          <tr><td>Pflege</td><td>Leichte Pflege</td><td>Haut schützen</td></tr>
          <tr><td>Trocknen</td><td>Hochleistungsföhn</td><td>Fell komplett öffnen</td></tr>
        </tbody>
      </table>

      <h3>✨ Ergebnis – der Unterschied ist enorm</h3>
      <p><strong>Vorher:</strong></p>
      <ul>
        <li>Schweres, stumpfes Fell</li>
        <li>Starker Geruch</li>
        <li>Lebloser Eindruck</li>
      </ul>
      <p><strong>Nachher:</strong></p>
      <ul>
        <li>Sauberes, luftiges Fell</li>
        <li>Natürliche Farbe zurück</li>
        <li>Weichere Struktur</li>
        <li>Frischer Geruch</li>
      </ul>
      <p>Aber das Wichtigste: 👉 <strong>Bruno hat sich anders bewegt.</strong></p>
      <ul>
        <li>Kopf höher</li>
        <li>Körper entspannter</li>
        <li>Mehr Energie</li>
      </ul>
      <p>Das ist kein kosmetischer Effekt. 👉 <strong>Das ist Wohlbefinden.</strong></p>

      <h3>🧠 Verhalten während des Grooms</h3>
      <p><strong>Am Anfang:</strong> Vorsichtig, etwas zurückhaltend.</p>
      <p><strong>Währenddessen:</strong> Im Wasser deutlich ruhiger geworden. Stand stabiler.</p>
      <p><strong>Am Ende:</strong> 👉 Aufmerksamer. Mehr „da".</p>
      <p>Das sieht man oft bei Hunden, die sich endlich wieder sauber fühlen.</p>

      <h3>🧠 Beratung für Lisa</h3>
      <p>Gerade bei einem neuen Hund extrem wichtig.</p>
      <h4>1. Regelmäßigkeit ist alles</h4>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Bürsten</td><td>2–3× pro Woche</td></tr>
          <tr><td>Grooming</td><td>Alle 6–8 Wochen</td></tr>
        </tbody>
      </table>
      <h4>2. Früh erkennen</h4>
      <p>Achte auf:</p>
      <ul>
        <li>Fettiges Fell</li>
        <li>Geruch</li>
        <li>Mehr Kratzen</li>
      </ul>
      <h4>3. Tierschutzhunde brauchen Zeit</h4>
      <p><strong>„Das ist jetzt der Neustart – kein einmaliges Fixen."</strong></p>
      <p>Das hat sie sofort verstanden.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Warum riecht mein Hund so stark?</strong></p>
      <p>Oft wegen Fett, Schmutz und Hautproblemen, die sich aufbauen.</p>
      <p><strong>Reicht einmal Waschen?</strong></p>
      <p>Nein – bei solchen Fällen brauchst du mehrere Schritte.</p>
      <p><strong>Wie schnell wird das wieder besser?</strong></p>
      <p>Mit regelmäßiger Pflege ziemlich schnell.</p>

      <h3>Fazit</h3>
      <p>Hunde wie Bruno sind keine „dreckigen Hunde". Sie hatten einfach keine konstante Pflege, keine Struktur, keine richtigen Bedingungen.</p>
      <p>Sobald du das einmal richtig resettest… 👉 <strong>wird alles viel leichter zu managen.</strong></p>
      <p>Einen sauberen Hund waschen kann jeder. Die echte Fähigkeit als Hundefriseur in Wien ist: 👉 <strong>Einen vernachlässigten Hund nehmen und ihn richtig zurückholen – ohne ihn zu überfordern.</strong> Wie wichtig ruhiges Handling dabei ist, zeigt auch <a href="/blog/fallstudie-angsthund-schnauzer-max">der Fall von Angsthund Max</a>.</p>
      <p>Genau da entsteht Vertrauen.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-verfilzter-cockapoo-bella">Verfilzter Cockapoo Bella: Extremfall mit Filzpanzer</a></li>
        <li><a href="/blog/fallstudie-angsthund-schnauzer-max">Angsthund Max: Vertrauen aufbauen beim Grooming</a></li>
        <li><a href="/blog/fallstudie-hautprobleme-franzoesische-bulldogge-rocky">Hautprobleme bei Rocky: Haut und Hygiene wiederherstellen</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: brunoImage
  },
  {
    slug: "fallstudie-pudel-praezisionsschnitt-oliver",
    title: "Rassespezifisches Grooming: Olivers Pudel-Präzisionsschnitt",
    excerpt: "Großpudel Oliver bekommt seinen modernen Teddy-Schnitt – saubere Linien, perfekte Balance. So entsteht ein Präzisionsschnitt im Hundesalon Laika.",
    date: getPostDate(32),
    content: `
      <h2>Fallstudie: Rassespezifisches Grooming (Pudel Präzisionsschnitt)</h2>
      <p><strong>Saubere Linien, perfekte Balance – Grooming auf höchstem Niveau</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Oliver</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Großpudel</td></tr>
          <tr><td><strong>Alter</strong></td><td>4 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Ruhig, grooming-erfahren</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Victoria S.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Stammkundin, wünscht konstanten Stil</td></tr>
          <tr><td><strong>Termin</strong></td><td>Voller Rasseschnitt (Teddy / moderner Pudelschnitt)</td></tr>
          <tr><td><strong>Dauer</strong></td><td>2 Stunden 45 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Der weiß genau, wie's läuft</h3>
      <p>Oliver ist reingekommen und du hast sofort gemerkt: 👉 <strong>Der kennt das alles schon.</strong></p>
      <ul>
        <li>Ruhig</li>
        <li>Sicher</li>
        <li>Kein Stress</li>
      </ul>
      <p><strong>Fellzustand:</strong></p>
      <ul>
        <li>Sauber, aber deutlich rausgewachsen</li>
        <li>Gute Dichte und Struktur</li>
        <li>Leicht ungleichmäßig vom letzten Wachstum</li>
      </ul>
      <p>Und genau das ist ideal. 👉 <strong>Wenn das Fell passt, arbeitest du an Präzision – nicht an Schadensbegrenzung.</strong> Als Hundefriseur in Wien ist das ein Luxus – denn oft sieht der Alltag anders aus, wie etwa <a href="/blog/fallstudie-doppelfell-husky-luna">beim De-Shedding von Husky Luna</a>.</p>

      <h3>✂️ Gewünschter Stil</h3>
      <p>Victoria wollte: 👉 <strong>Einen modernen Teddy-Pudelschnitt</strong></p>
      <p><strong>Charakteristisch:</strong></p>
      <ul>
        <li>Rund geschnittener Kopf</li>
        <li>Weicher, voller Ohrbereich</li>
        <li>Gleichmäßige, „säulenartige" Beine</li>
        <li>Saubere Füße und Hygienebereich</li>
      </ul>
      <p>Kein Show-Schnitt – aber trotzdem: 👉 <strong>technisch anspruchsvoll.</strong></p>

      <h3>🧠 Warum Pudel nicht verzeihen</h3>
      <p>Pudel sind ehrlich. <strong>Jeder Fehler bleibt sichtbar.</strong></p>
      <p><strong>Warum?</strong></p>
      <ul>
        <li>Dichtes, lockiges Fell → jede Unebenheit fällt auf</li>
        <li>Linien müssen exakt passen</li>
        <li>Struktur verstärkt jeden Schnitt</li>
      </ul>
      <p>Die Realität: 👉 <strong>Wenn die Vorbereitung nicht passt, wird das Ergebnis nie sauber.</strong></p>

      <h3>🛠️ Ablauf – So entsteht ein sauberer Schnitt</h3>
      <p>Das hier ist kein „einfach drüber schneiden". <strong>Das ist ein präziser Ablauf.</strong></p>

      <h4>1. Waschen & Vorbereitung (der wichtigste Teil)</h4>
      <p>Verwendet: Hochwertiges Shampoo + leichte Pflege</p>
      <p>Entscheidender Punkt: 👉 <strong>Das Fell muss komplett sauber UND komplett glatt sein.</strong></p>
      <p>Nach dem Waschen:</p>
      <ul>
        <li>Föhnen mit Hochleistungsgerät</li>
        <li>Ausbürsten</li>
        <li>Fluff-Drying (für perfekte Glätte)</li>
      </ul>
      <p>Wenn das Fell nicht glatt ist: 👉 <strong>kannst du nicht sauber schneiden.</strong></p>

      <h4>2. Vorschur (Grundform)</h4>
      <p>Bevor die Schere ins Spiel kommt:</p>
      <ul>
        <li>Körper auf Grundlänge geschnitten</li>
        <li>Hals und Körperform vorgezeichnet</li>
      </ul>
      <p>Das gibt dir: 👉 <strong>die Basis für alles Weitere.</strong></p>

      <h4>3. Gesicht, Füße & Hygiene</h4>
      <p>Die sensiblen Bereiche zuerst:</p>
      <ul>
        <li>Gesicht sauber und eng</li>
        <li>Füße ordentlich freigelegt</li>
        <li>Hygienebereich gepflegt</li>
      </ul>
      <p>Diese Zonen bestimmen: 👉 <strong>wie „clean" der ganze Hund wirkt.</strong></p>

      <h4>4. Scherenarbeit (hier entscheidet sich alles)</h4>
      <p>Das ist der zeitintensivste Teil.</p>
      <p><strong>Technik:</strong></p>
      <ul>
        <li>Kleine, kontrollierte Schnitte</li>
        <li>Ständiges Kontrollieren aus verschiedenen Blickwinkeln</li>
      </ul>
      <p><strong>Fokus:</strong></p>
      <ul>
        <li>Kopf (muss perfekt rund sein)</li>
        <li>Beine (gerade, gleichmäßig)</li>
        <li>Übergänge (keine harten Kanten)</li>
      </ul>
      <p>Wichtig: 👉 <strong>Du schneidest nicht – du formst.</strong></p>

      <h4>5. Finaler Check</h4>
      <p>Am Schluss:</p>
      <ul>
        <li>Einen Schritt zurückgehen</li>
        <li>Von allen Seiten anschauen</li>
        <li>Symmetrie feinjustieren</li>
      </ul>
      <p>Viele Korrekturen passieren genau hier.</p>

      <h3>🧰 Werkzeuge & Setup</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Zweck</th></tr></thead>
        <tbody>
          <tr><td>Vorbereitung</td><td>Hochleistungsföhn</td><td>Fell anheben</td></tr>
          <tr><td>Finish</td><td>Fluff-Dryer + Slicker</td><td>Glattes Fell</td></tr>
          <tr><td>Maschine</td><td>Wahl KM10</td><td>Grundform</td></tr>
          <tr><td>Schere</td><td>Gerade & gebogene Scheren</td><td>Präzision</td></tr>
          <tr><td>Detail</td><td>Kleine Trimmer</td><td>Gesicht & Füße</td></tr>
        </tbody>
      </table>

      <h3>⏱️ Zeitaufwand</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Dauer</th></tr></thead>
        <tbody>
          <tr><td>Waschen & Föhnen</td><td>ca. 60 Min</td></tr>
          <tr><td>Vorschur</td><td>ca. 30 Min</td></tr>
          <tr><td>Scherenarbeit</td><td>60–70 Min</td></tr>
          <tr><td>Finish</td><td>ca. 15 Min</td></tr>
        </tbody>
      </table>
      <p>👉 Das ist kein schneller Termin – <strong>Präzision braucht Zeit.</strong></p>

      <h3>✨ Ergebnis</h3>
      <p>Hier kommt alles zusammen.</p>
      <ul>
        <li>Perfekt runder Kopf</li>
        <li>Harmonische Proportionen</li>
        <li>Weiche Übergänge</li>
        <li>Gleichmäßiges Fellbild</li>
      </ul>
      <p>Und das wichtigste Detail: 👉 <strong>Keine sichtbaren Scherenlinien.</strong></p>
      <p>Das ist der Unterschied zwischen „okay" und „richtig gut".</p>

      <h3>🧠 Verhalten während des Grooms</h3>
      <p>Oliver hat's möglich gemacht:</p>
      <ul>
        <li>Ruhig gestanden</li>
        <li>Kaum Bewegung</li>
        <li>Voll vertraut mit dem Ablauf</li>
      </ul>
      <p>Für so ein Ergebnis brauchst du: 👉 <strong>Einen kooperativen Hund und Erfahrung im Handling.</strong></p>

      <h3>🧠 Beratung für Victoria</h3>
      <p>Damit der Look bleibt:</p>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Grooming</td><td>Alle 4–6 Wochen</td></tr>
          <tr><td>Bürsten</td><td>Täglich oder jeden 2. Tag</td></tr>
          <tr><td>Fellpflege</td><td>Regelmäßig sauber halten</td></tr>
        </tbody>
      </table>
      <p><strong>Wichtige Punkte:</strong></p>
      <ul>
        <li>Nicht zu lange rauswachsen lassen</li>
        <li>Regelmäßig bürsten (sonst verfilzt es schnell)</li>
        <li>Nächsten Termin rechtzeitig buchen</li>
      </ul>
      <p>Und ich hab ihr gesagt: <strong>„Der Schnitt funktioniert nur, wenn das Fell konstant gepflegt wird."</strong> Was passiert, wenn diese Pflege ausbleibt, zeigt <a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">der Fall von Cavapoo Alfie</a> sehr deutlich.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Wie oft muss ein Pudel geschnitten werden?</strong></p>
      <p>Alle 4–6 Wochen für saubere Linien.</p>
      <p><strong>Warum ist Pudel-Grooming so aufwendig?</strong></p>
      <p>Weil jede Ungenauigkeit sofort sichtbar ist.</p>
      <p><strong>Kann man das zuhause machen?</strong></p>
      <p>Grundpflege ja – Präzisionsschnitt eher schwierig.</p>

      <h3>Fazit</h3>
      <p>Einen Hund kurz scheren kann jeder. Aber:</p>
      <p>👉 Saubere Linien schneiden, Symmetrie halten, ohne sichtbare Übergänge arbeiten – <strong>das ist Handwerk.</strong></p>
      <p>Bei solchen Schnitten geht's nicht um Geschwindigkeit. 👉 <strong>Sondern um Kontrolle, Balance und Auge fürs Detail.</strong></p>
      <p>Und wenn's richtig gemacht ist… sieht man's sofort.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-doppelfell-husky-luna">Doppelfell bei Husky Luna: Rassespezifisches De-Shedding</a></li>
        <li><a href="/blog/fallstudie-erste-welpenpflege-teddy">Welpe Teddy: Warum regelmäßige Pflege so wichtig ist</a></li>
        <li><a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">Erwartung vs. Realität: Wenn das Fell nicht hält, was es verspricht</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: oliverImage
  },
  {
    slug: "fallstudie-hund-hasst-wasser-milo",
    title: "Hund hasst Wasser: Milos Weg von Panik zu ruhigem Baden",
    excerpt: "Jack Russell Milo flippt beim Baden aus – zuhause kaum möglich. So haben wir im Hundesalon Laika die Erfahrung Schritt für Schritt verändert.",
    date: getPostDate(33),
    content: `
      <h2>Fallstudie: Hund, der Wasser hasst</h2>
      <p><strong>Von Panik in der Badewanne zu ruhigem, kontrolliertem Waschen</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Milo</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Jack Russell Terrier</td></tr>
          <tr><td><strong>Alter</strong></td><td>2 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Sehr aktiv, reagiert stark auf Wasser</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Sophie K.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Baden zuhause kaum möglich</td></tr>
          <tr><td><strong>Termin</strong></td><td>Verhaltensorientiertes Bad & Groom</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde 25 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Alles gut… bis zur Badewanne</h3>
      <p>Milo ist reingekommen wie ein typischer junger Terrier: 👉 <strong>Wach, voller Energie, alles im Blick.</strong></p>
      <p>Keine Angst am Anfang. Aber sobald er den Badebereich gesehen hat:</p>
      <ul>
        <li>Körper sofort angespannt</li>
        <li>Schwanz leicht runter</li>
        <li>Zug nach hinten an der Leine</li>
      </ul>
      <p>Und genau da weißt du: 👉 <strong>Trigger sofort erkannt.</strong></p>

      <h3>⚠️ Reaktion auf Wasser</h3>
      <p>Sobald die Pfoten in der Wanne waren:</p>
      <ul>
        <li>Versuch rauszuklettern</li>
        <li>Schnelles Hecheln</li>
        <li>Vorderbeine drücken nach oben</li>
      </ul>
      <p>Beim ersten Wasserkontakt: 👉 <strong>Komplettes Zucken + Fluchtversuch.</strong></p>
      <p>Das ist kein „Ungehorsam". 👉 <strong>Das ist eine echte Stressreaktion.</strong> Als Hundefriseur in Wien kennen wir solches Verhalten gut – <a href="/blog/fallstudie-angsthund-schnauzer-max">ähnlich wie bei Angsthund Max, der aus Stress geschnappt hat</a>.</p>

      <h3>🔍 Woher kommt das?</h3>
      <p>Aus Erfahrung meistens eine Kombination:</p>
      <ul>
        <li>Rutschiger Untergrund</li>
        <li>Kontrollverlust</li>
        <li>Plötzliches Wasser</li>
        <li>Geräuschkulisse</li>
      </ul>
      <p>Wichtiger Punkt:</p>
      <p>👉 Die meisten Hunde hassen nicht das Wasser<br/>👉 <strong>Sie hassen die Situation rundherum.</strong></p>

      <h3>🔄 Anpassung – nicht dagegen arbeiten</h3>
      <p>Erste Regel: 👉 <strong>Nicht dagegen kämpfen.</strong></p>
      <p>Sondern: 👉 <strong>Auslöser reduzieren.</strong></p>
      <p><strong>Sofort geändert:</strong></p>
      <ul>
        <li>Wasser wieder aus</li>
        <li>Milo durfte in der trockenen Wanne stehen</li>
        <li>Kein Festhalten am Anfang</li>
      </ul>
      <p>Erst mal: 👉 <strong>Situation verstehen lassen.</strong></p>

      <h3>🧠 Schritt für Schritt zur Entspannung</h3>

      <h4>1. Stabilität schaffen</h4>
      <ul>
        <li>Rutschfeste Matte unter die Pfoten</li>
        <li>Hand ruhig am Brustbereich</li>
      </ul>
      <p>Nach kurzer Zeit: 👉 <strong>Spannung wird weniger.</strong> Das ist dein Einstieg.</p>

      <h4>2. Wasser langsam einführen</h4>
      <p>Nicht gleich mit dem Schlauch drauf.</p>
      <ul>
        <li>Wasser zuerst mit der Hand aufgetragen</li>
        <li>Start an den Hinterbeinen</li>
        <li>Nicht am Kopf</li>
      </ul>
      <p>Wichtig: 👉 <strong>Kein direkter Strahl am Anfang.</strong></p>

      <h4>3. Druck & Geräusch kontrollieren</h4>
      <ul>
        <li>Niedriger Wasserdruck</li>
        <li>Gleichmäßiger Fluss</li>
        <li>Keine plötzlichen Bewegungen</li>
      </ul>
      <p>Hunde reagieren stärker auf Überraschung als auf Wasser selbst.</p>

      <h4>4. Kontakt halten</h4>
      <p>Eine Hand war immer bei ihm. Nicht zum Fixieren. 👉 <strong>Einfach präsent.</strong></p>
      <p>Das gibt: Sicherheit und Orientierung.</p>

      <h3>🛁 Der Wendepunkt</h3>
      <p>Nach ca. 5–7 Minuten:</p>
      <ul>
        <li>Kein Fluchtversuch mehr</li>
        <li>Hecheln wird weniger</li>
        <li>Körper wird weicher</li>
      </ul>
      <p>Er hat's nicht geliebt. Aber: 👉 <strong>Er konnte damit umgehen.</strong></p>
      <p>Und genau das ist das Ziel.</p>

      <h3>🧰 Tools & Setup</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Boden</td><td>Rutschfeste Matte</td><td>Stabilität</td></tr>
          <tr><td>Wasser</td><td>Niedriger Druck</td><td>Weniger Stress</td></tr>
          <tr><td>Auftrag</td><td>Hand zuerst</td><td>Kontrollierter Einstieg</td></tr>
          <tr><td>Shampoo</td><td>Mild, wenig Duft</td><td>Keine Reizüberflutung</td></tr>
          <tr><td>Trocknen</td><td>Handtuch + leichter Luftstrom</td><td>Sanfter Übergang</td></tr>
        </tbody>
      </table>

      <h3>✂️ Grooming danach angepasst</h3>
      <p>Weil das Baden schon viel war:</p>
      <ul>
        <li>Grooming kurz und effizient gehalten</li>
        <li>Wenig Handling</li>
        <li>Fokus auf das Wesentliche</li>
      </ul>
      <p>Kein langes Styling.</p>

      <h3>✨ Ergebnis</h3>
      <ul>
        <li>Sauber gewaschen</li>
        <li>Keine Eskalation</li>
        <li>Durchgehend kontrollierbar</li>
      </ul>
      <p>Aber das Wichtigste: 👉 <strong>Milo ist nicht traumatisiert rausgegangen.</strong></p>
      <p>Und genau das zählt.</p>

      <h3>🧠 Verhalten am Ende</h3>
      <p>Deutlich anders als am Anfang:</p>
      <ul>
        <li>Ruhiger Stand</li>
        <li>Kein Fluchtverhalten</li>
        <li>Handtuch wurde akzeptiert</li>
      </ul>
      <p>Das zeigt: 👉 <strong>Die Erfahrung wurde verbessert – nicht verschlechtert.</strong></p>

      <h3>🧠 Beratung für Sophie</h3>
      <p>Hier entscheidet sich alles.</p>

      <h4>1. Zuhause nicht mehr „durchziehen"</h4>
      <ul>
        <li>Kein Zwingen</li>
        <li>Kein Hinterherlaufen mit Wasser</li>
      </ul>

      <h4>2. Neu aufbauen</h4>
      <table>
        <thead><tr><th>Schritt</th><th>Was tun</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Hund in trockene Wanne stellen</td></tr>
          <tr><td>2</td><td>Wasser langsam einführen</td></tr>
          <tr><td>3</td><td>Niedrigen Druck verwenden</td></tr>
          <tr><td>4</td><td>Kurz halten</td></tr>
        </tbody>
      </table>

      <h4>3. Umgebung beachten</h4>
      <ul>
        <li>Rutschfeste Unterlage</li>
        <li>Ruhige Atmosphäre</li>
        <li>Kein lautes Wasser</li>
      </ul>
      <p>Und der wichtigste Satz: <strong>„Er hasst nicht das Wasser – er hasst den Kontrollverlust."</strong></p>
      <p>Das versteht jeder sofort. Genau denselben Mechanismus zeigt auch <a href="/blog/fallstudie-krallenschneiden-dackel-coco">Dackel Coco beim Krallenschneiden</a> – anderer Auslöser, gleiches Prinzip.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Warum hat mein Hund Angst vorm Baden?</strong></p>
      <p>Meist wegen schlechten Erfahrungen oder Überforderung.</p>
      <p><strong>Soll ich ihn einfach festhalten?</strong></p>
      <p>Nein – das verstärkt die Angst.</p>
      <p><strong>Kann man das wieder verbessern?</strong></p>
      <p>Ja, mit Geduld und richtigem Aufbau.</p>

      <h3>Fazit</h3>
      <p>Die meisten „Wasser-Hasser" wurden nie richtig dran gewöhnt. Sie wurden zu schnell reingesteckt, überfordert und festgehalten. Und das bleibt hängen.</p>
      <p>Du löst das Problem nicht, indem du schneller badest. 👉 <strong>Sondern indem du die Erfahrung veränderst.</strong></p>
      <p>Wenn sich das Gefühl ändert… wird alles leichter.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-angsthund-schnauzer-max">Angsthund Max: Angstverhalten erkennen und richtig handeln</a></li>
        <li><a href="/blog/fallstudie-krallenschneiden-dackel-coco">Krallenpflege bei Coco: Ähnliche Angst, anderer Auslöser</a></li>
        <li><a href="/blog/fallstudie-vernachlaessigter-hund-bruno">Vernachlässigter Hund Bruno: Auch hier war Baden eine Herausforderung</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: miloImage
  },
  {
    slug: "fallstudie-krallenschneiden-dackel-coco",
    title: "Krallenschneiden als Albtraum: Dackeldame Cocos Weg zur ruhigen Krallenpflege",
    excerpt: "Dackel Coco hatte eine schlechte Erfahrung beim Krallenschneiden und ließ niemanden mehr ran. So haben wir es im Hundesalon Laika gelöst.",
    date: getPostDate(34),
    content: `
      <h2>Fallstudie: Krallenschneiden als Albtraum</h2>
      <p><strong>Von Ziehen, Panik und Widerstand… zu ruhiger, kontrollierter Krallenpflege</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Coco</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Dackel</td></tr>
          <tr><td><strong>Alter</strong></td><td>5 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Nervös, reagiert stark bei Pfoten</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Natalie P.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Schlechte Erfahrung beim Krallenschneiden</td></tr>
          <tr><td><strong>Termin</strong></td><td>Nur Krallenpflege (High-Stress-Fall)</td></tr>
          <tr><td><strong>Dauer</strong></td><td>35 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Vorsichtig, aber aufmerksam</h3>
      <p>Coco ist ruhig reingekommen. Nicht panisch. Aber: 👉 <strong>Sehr aufmerksam auf alles, was passiert.</strong></p>
      <p>Dann der entscheidende Moment: Ich greife zur Vorderpfote… 👉 <strong>Sofort zurückgezogen.</strong></p>
      <p>Zweiter Versuch:</p>
      <ul>
        <li>Kopf dreht sich blitzschnell</li>
        <li>Blick fixiert meine Hand</li>
      </ul>
      <p>Und da weißt du: 👉 <strong>Das ist kein Zufall – das ist gelerntes Verhalten.</strong></p>

      <h3>⚠️ Warum das Krallenschneiden schwierig war</h3>
      <p>Natalie hat gleich gesagt: <em>„Sie hat einmal aufgeschrien beim Schneiden… seitdem lässt sie niemanden mehr ran."</em></p>
      <p>Und genau so entsteht das Problem. 👉 <strong>Ein schlechter Moment reicht.</strong></p>
      <p><strong>Verhalten im Salon:</strong></p>
      <ul>
        <li>Pfoten werden ruckartig weggezogen</li>
        <li>Ganzer Körper spannt sich an</li>
        <li>Versucht sich rauszudrehen</li>
      </ul>
      <p>Nicht aggressiv. Aber: 👉 <strong>Kurz vor Eskalation.</strong> Im Hundesalon Laika in Wien 1090 kennen wir ähnliches Verhalten auch <a href="/blog/fallstudie-angsthund-schnauzer-max">bei Schnauzer Max, der aus Angst geschnappt hat</a>.</p>

      <h3>🔍 Das eigentliche Problem</h3>
      <p>Es ist nicht nur Angst. 👉 <strong>Es ist die Erwartung von Schmerz.</strong></p>
      <p>Und beim Dackel kommt noch dazu:</p>
      <ul>
        <li>Kurze Beine</li>
        <li>Empfindliche Gelenke</li>
        <li>Oft längere Krallen</li>
      </ul>
      <p>Das macht alles schwieriger.</p>

      <h3>🧠 Strategie – So bin ich rangegangen</h3>
      <p>Erste Regel: 👉 <strong>Kein Greifen. Kein Zwingen. Kein Stress.</strong></p>

      <h4>1. Desensibilisierung</h4>
      <ul>
        <li>Pfote kurz berühren → sofort wieder loslassen</li>
        <li>Mehrmals wiederholen</li>
      </ul>
      <p>Ziel: 👉 <strong>Erwartung durchbrechen.</strong></p>

      <h4>2. Werkzeug wechseln (entscheidend)</h4>
      <p>Statt Schere: 👉 <strong>Krallenschleifer (Dremel)</strong></p>
      <p><strong>Warum:</strong></p>
      <ul>
        <li>Mehr Kontrolle</li>
        <li>Geringeres Risiko, die Blutlinie zu erwischen</li>
        <li>Weniger „Schockmoment"</li>
      </ul>

      <h4>3. Position anpassen</h4>
      <ul>
        <li>Pfote niedrig halten</li>
        <li>In natürlicher Haltung arbeiten</li>
      </ul>
      <p>Kein Hochziehen. 👉 <strong>Weniger Widerstand sofort spürbar.</strong></p>

      <h3>🧘 Ruhe reinbringen</h3>
      <p>Kleine Dinge machen den Unterschied:</p>
      <ul>
        <li>Hand immer wieder am Körper (nicht nur beim Arbeiten)</li>
        <li>Ruhige Stimme</li>
        <li>Keine hektischen Bewegungen</li>
      </ul>
      <p>Wenn Coco angespannt hat: 👉 <strong>Sofort Pause.</strong> Nicht weiterdrücken.</p>

      <h3>🛠️ Ablauf – So lief es wirklich ab</h3>
      <h4>Erste Kralle:</h4>
      <ul>
        <li>Berühren → Pause</li>
        <li>Schleifer nur hörbar gemacht (noch kein Kontakt)</li>
        <li>Dann ganz kurz angesetzt (1–2 Sekunden)</li>
      </ul>
      <p>Und wieder stoppen. 👉 <strong>Dieser erste Erfolg ist entscheidend.</strong></p>

      <h4>Danach:</h4>
      <ul>
        <li>Kralle für Kralle</li>
        <li>Immer nur kurze Intervalle</li>
        <li>Viele kleine Pausen</li>
      </ul>
      <p>Kein: „Jetzt machen wir schnell fertig."</p>

      <h4>Der Wendepunkt:</h4>
      <p>Bei Kralle 3–4: 👉 <strong>Deutlich weniger Widerstand.</strong></p>
      <p>Und da weißt du: 👉 <strong>Vertrauen baut sich auf.</strong></p>

      <h3>🧰 Werkzeuge & Setup</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Haupttool</td><td>Krallenschleifer (Dremel)</td><td>Präzise & kontrolliert</td></tr>
          <tr><td>Backup</td><td>Krallenzange</td><td>Nicht verwendet</td></tr>
          <tr><td>Position</td><td>Groomingtisch + niedrige Haltung</td><td>Stabilität</td></tr>
          <tr><td>Pflege</td><td>Pfotenbalsam</td><td>Nachbehandlung</td></tr>
        </tbody>
      </table>

      <h3>✨ Ergebnis</h3>
      <ul>
        <li>Alle Krallen sauber gekürzt</li>
        <li>Keine Verletzung</li>
        <li>Kein Kontrollverlust</li>
      </ul>
      <p>Aber das Wichtigste: 👉 <strong>Keine Panik.</strong></p>
      <p>Und das ist bei so einem Hund ein riesiger Schritt.</p>

      <h3>🧠 Verhalten am Ende</h3>
      <p>Deutlicher Unterschied:</p>
      <ul>
        <li>Weniger Zurückziehen</li>
        <li>Mehr Toleranz bei Berührung</li>
        <li>Körper entspannter</li>
      </ul>
      <p>Nicht perfekt. 👉 <strong>Aber klar besser.</strong> Und genau das zählt.</p>

      <h3>🧠 Beratung für Natalie</h3>
      <p>Hier entscheidet sich, ob es besser wird.</p>

      <h4>1. Täglich üben</h4>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Pfoten anfassen</td><td>Täglich</td></tr>
          <tr><td>Leichter Druck auf Krallen</td><td>Kurz & ruhig</td></tr>
        </tbody>
      </table>

      <h4>2. Nicht zu lange warten</h4>
      <p>👉 <strong>Lange Krallen = mehr Druck = mehr Schmerzgefühl.</strong></p>
      <p>Regelmäßig schneiden ist einfacher.</p>

      <h4>3. Zuhause lieber schleifen</h4>
      <p>👉 Weniger Risiko = weniger Angst.</p>
      <p>Und mein wichtigster Satz: <strong>„Es geht nicht um perfekte Krallen – es geht darum, dass sie ruhig bleibt."</strong></p>
      <p>Das verändert die Sichtweise komplett – genauso wie <a href="/blog/fallstudie-hund-hasst-wasser-milo">bei Jack Russell Milo, der mit derselben Methode das Baden wieder toleriert hat</a>.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Warum hasst mein Hund Krallenschneiden?</strong></p>
      <p>Oft wegen einer schlechten Erfahrung.</p>
      <p><strong>Soll ich ihn festhalten?</strong></p>
      <p>Nein – das verstärkt die Angst.</p>
      <p><strong>Kann man das wieder verbessern?</strong></p>
      <p>Ja – mit Geduld und richtigem Aufbau.</p>

      <h3>Fazit</h3>
      <p>Krallenschneiden ist technisch einfach. Schwierig wird es durch: Erinnerung, Angst und Erwartung.</p>
      <p>Wenn du das löst… 👉 <strong>wird der Rest leicht.</strong></p>
      <p>Es geht nicht darum, schnell fertig zu werden. 👉 <strong>Sondern ruhig, kontrolliert und sauber zu arbeiten.</strong></p>
      <p>Machst du das richtig… werden selbst schwierige Hunde mit der Zeit entspannt dabei.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-angsthund-schnauzer-max">Angsthund Max: Angstbasiertes Verhalten verstehen und lösen</a></li>
        <li><a href="/blog/fallstudie-hund-hasst-wasser-milo">Hund hasst Wasser: Milos ähnlicher Weg zur Ruhe</a></li>
        <li><a href="/blog/fallstudie-erste-welpenpflege-teddy">Welpe Teddy: So vermeidest du solche Probleme von Anfang an</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: cocoImage
  },
  {
    slug: "fallstudie-erwartung-vs-realitaet-alfie",
    title: "Erwartung vs. Realität beim Grooming: Warum Alfie kurz geschoren werden musste",
    excerpt: "Cavapoo Alfie sollte nur „leicht nachgeschnitten” werden – doch unter der flauschigen Oberfläche steckte Verfilzung. So haben wir's im Hundesalon Laika gelöst.",
    date: getPostDate(35),
    content: `
      <h2>Fallstudie: Erwartung vs. Realität beim Grooming</h2>
      <p><strong>Warum „nur ein bisschen schneiden" nicht möglich war – und wie wir's richtig gelöst haben</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Hundename</strong></td><td>Alfie</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Cavapoo</td></tr>
          <tr><td><strong>Alter</strong></td><td>3 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Freundlich, leicht empfindlich beim Bürsten</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Rachel D.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Unregelmäßige Grooming-Termine, Bürsten zuhause inkonsequent</td></tr>
          <tr><td><strong>Termin</strong></td><td>Vollgroom (gewünscht: „nur leicht nachschneiden")</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde 40 Minuten</td></tr>
          <tr><td><strong>Standort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>🐾 Erster Eindruck – Sieht gut aus… aber nur oberflächlich</h3>
      <p>Auf den ersten Blick: 👉 <strong>Süß, flauschig, ein bissl rausgewachsen.</strong></p>
      <p>Aber mit Erfahrung weißt du: 👉 <strong>Oberfläche sagt gar nix.</strong></p>
      <p><strong>Beim genaueren Hinschauen:</strong></p>
      <ul>
        <li>Fell weich – aber darunter dicht</li>
        <li>Leichte Knötchen bei Ohren und Brust</li>
        <li>Beine voller als sie wirken sollten</li>
      </ul>
      <p>Ich geh mit dem Kamm durch die obere Schicht: 👉 Geht problemlos.</p>
      <p>Dann näher zur Haut: 👉 <strong>Komplett blockiert.</strong></p>
      <p>Und genau da kippt die Situation. Als Hundefriseur in Wien sehen wir das regelmäßig – im Extremfall endet es wie <a href="/blog/fallstudie-verfilzter-cockapoo-bella">bei Cockapoo Bella, wo das gesamte Fell entfernt werden musste</a>.</p>

      <h3>🔍 Wunsch der Besitzerin</h3>
      <p>Rachel sagt: <em>„Ich würd ihn gern lang lassen – einfach nur ein bisschen aufhübschen."</em></p>
      <p>Das hörst du ständig. Und ehrlich: 👉 <strong>Klingt erstmal völlig logisch.</strong></p>

      <h3>⚠️ Warum das nicht geht</h3>
      <p>Ich erklär das nicht sofort. <strong>Ich zeig's.</strong></p>
      <p><strong>Demonstration:</strong></p>
      <ul>
        <li>Kamm bei der Brust angesetzt</li>
        <li>Bleibt stecken – kommt nicht bis zur Haut</li>
        <li>Fell leicht angehoben → Haut zieht mit</li>
      </ul>
      <p>Dann sag ich: <strong>„Das ist Verfilzung unter der Oberfläche. Wenn ich das ausbürste, tut ihm das weh."</strong></p>
      <p>Das ist der Punkt: 👉 <strong>Nicht erklären – zeigen.</strong></p>

      <h3>🧠 Der entscheidende Moment</h3>
      <p>Hier entscheidet sich alles: 👉 <strong>Vertrauen oder Diskussion.</strong></p>
      <p><strong>Optionen klar erklärt:</strong></p>
      <table>
        <thead><tr><th>Option</th><th>Ergebnis</th></tr></thead>
        <tbody>
          <tr><td>Entfilzen</td><td>Schmerzhaft, stressig, nicht vertretbar</td></tr>
          <tr><td>Kurz scheren</td><td>Schonend, sauber, Reset fürs Fell</td></tr>
        </tbody>
      </table>
      <p>Keine Beschönigung. Keine falschen Hoffnungen.</p>

      <h3>🧠 Reaktion von Rachel</h3>
      <p>Erst: <em>„Oh… ich hab nicht gedacht, dass es so schlimm ist."</em></p>
      <p>Dann: <em>„Okay, machen wir das, was für ihn am besten ist."</em></p>
      <p>Und genau dieser Wechsel passiert: 👉 <strong>Wenn der Kunde versteht – nicht wenn er nur hört.</strong></p>

      <h3>✂️ Grooming-Ansatz (Reset)</h3>
      <p>Sobald die Entscheidung steht:</p>
      <p><strong>Plan:</strong></p>
      <ul>
        <li>Komplett runterscheren</li>
        <li>Haut schonen</li>
        <li>Sauberes, gleichmäßiges Ergebnis</li>
      </ul>
      <p><strong>Umsetzung:</strong></p>
      <ul>
        <li>#7F Scherkopf verwendet</li>
        <li>In Abschnitten gearbeitet (keine Spannung auf der Haut)</li>
        <li>Vorsichtig an sensiblen Stellen (Achseln, Ohren)</li>
      </ul>
      <p>Ganz wichtig: 👉 <strong>Kein „wir retten noch ein bisschen Länge".</strong></p>
      <p>Das geht fast immer nach hinten los.</p>

      <h3>🧰 Werkzeuge & Produkte</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Werkzeug</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Schneiden</td><td>Heiniger Maschine + #7F</td><td>Sicher unter der Verfilzung</td></tr>
          <tr><td>Kontrolle</td><td>Metallkamm</td><td>Verfilzung sichtbar machen</td></tr>
          <tr><td>Baden</td><td>Mildes Shampoo</td><td>Haut beruhigen</td></tr>
          <tr><td>Finish</td><td>Leichte Pflege</td><td>Fell ausgleichen</td></tr>
        </tbody>
      </table>

      <h3>🐶 Verhalten während des Grooms</h3>
      <p>Alfie war:</p>
      <ul>
        <li>Ruhig beim Handling</li>
        <li>Empfindlich beim Bürsten</li>
      </ul>
      <p>Das bestätigt: 👉 <strong>Die Verfilzung hat schon weh getan.</strong></p>
      <p>Sobald wir mit dem Scheren begonnen haben: 👉 <strong>Deutlich entspannter.</strong></p>
      <p>Und das ist dein Zeichen: 👉 <strong>Richtige Entscheidung getroffen.</strong> Wer den Felltyp seines Hundes besser verstehen will, findet hilfreiche Einblicke auch <a href="/blog/fallstudie-doppelfell-husky-luna">in unserem Fall mit Husky Luna</a>.</p>

      <h3>✨ Ergebnis</h3>
      <p>Ganz anders als gewünscht – aber genau richtig.</p>
      <ul>
        <li>Kurzes, gleichmäßiges Fell</li>
        <li>Keine Verfilzungen mehr</li>
        <li>Haut gesund und frei</li>
        <li>Sauberes Gesamtbild</li>
      </ul>
      <p>Und das Wichtigste:</p>
      <ul>
        <li>👉 Alfie hat sich leichter bewegt</li>
        <li>👉 Kein Ziehen mehr auf der Haut</li>
      </ul>
      <p><strong>Das ist Komfort – nicht Optik.</strong></p>

      <h3>🧠 Beratung für Rachel</h3>
      <p>Hier verhinderst du, dass es wieder passiert.</p>

      <h4>1. Richtig bürsten</h4>
      <p>Ich hab ihr gezeigt:</p>
      <ul>
        <li>Fell scheiteln</li>
        <li>Bis zur Haut durchgehen</li>
      </ul>
      <p>Die meisten machen nur Oberfläche. 👉 <strong>Das bringt nix.</strong></p>

      <h4>2. Pflegeplan</h4>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Grooming</td><td>Alle 6–8 Wochen</td></tr>
          <tr><td>Bürsten</td><td>3–4× pro Woche</td></tr>
          <tr><td>Felllänge</td><td>Realistisch halten</td></tr>
        </tbody>
      </table>

      <h4>3. Ehrlicher Satz</h4>
      <p><strong>„Wenn du ihn lang willst, muss die Pflege dazu passen."</strong></p>
      <p>Ohne Druck. Einfach Realität.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Warum wurde mein Hund so kurz geschoren?</strong></p>
      <p>Weil Verfilzungen nicht schmerzfrei ausgebürstet werden können.</p>
      <p><strong>Kann man das Fell retten?</strong></p>
      <p>In den meisten Fällen: nein, ohne Stress für den Hund.</p>
      <p><strong>Wie vermeide ich das?</strong></p>
      <p>Regelmäßig bürsten – bis zur Haut.</p>

      <h3>Fazit</h3>
      <p>Das passiert jeden Tag. Nicht weil Besitzer es schlecht meinen. Sondern weil sie Pflege unterschätzen, Fell falsch einschätzen und nur oberflächlich bürsten.</p>
      <p>Und flauschiges Fell versteckt alles.</p>
      <p>Ein guter Groomer macht nicht einfach das, was gewünscht wird. 👉 <strong>Sondern das, was der Hund braucht.</strong></p>
      <p>Und wenn man das sauber erklärt… gehen Kunden nicht enttäuscht raus – sondern mit Verständnis. Und kommen wieder.</p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-verfilzter-cockapoo-bella">Verfilzter Cockapoo Bella: Ein extremer Fall von Verfilzung</a></li>
        <li><a href="/blog/fallstudie-doppelfell-husky-luna">Doppelfell bei Husky Luna: Felltypen verstehen</a></li>
        <li><a href="/blog/fallstudie-notfall-grooming-shihtzu-rosie">Notfall-Grooming Rosie: Kundenkommunikation unter Zeitdruck</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: alfieImage
  },
  {
    slug: "fallstudie-notfall-grooming-shihtzu-rosie",
    title: "Notfall-Grooming: Wie Shih Tzu Rosie in 70 Minuten wieder präsentabel wurde",
    excerpt: "Shih Tzu Rosie brauchte dringend Hilfe – eine Familienfeier stand bevor und der letzte Grooming-Termin war über 10 Wochen her. So haben wir's im Hundesalon Laika gelöst.",
    date: getPostDate(36),
    content: `
      <h2>Fallstudie: Notfall-Grooming (Last Minute)</h2>
      <p><strong>Wenn Timing genauso wichtig ist wie das Ergebnis</strong></p>

      <h3>📍 Überblick</h3>
      <table>
        <tbody>
          <tr><td><strong>Name</strong></td><td>Rosie</td></tr>
          <tr><td><strong>Rasse</strong></td><td>Shih Tzu</td></tr>
          <tr><td><strong>Alter</strong></td><td>6 Jahre</td></tr>
          <tr><td><strong>Wesen</strong></td><td>Freundlich, leicht unruhig</td></tr>
          <tr><td><strong>Besitzerin</strong></td><td>Claire W.</td></tr>
          <tr><td><strong>Hintergrund</strong></td><td>Kurzfristiger Termin vor Familienfeier</td></tr>
          <tr><td><strong>Datum</strong></td><td>20. März 2026</td></tr>
          <tr><td><strong>Termin</strong></td><td>Notfall-Grooming am selben Tag</td></tr>
          <tr><td><strong>Dauer</strong></td><td>1 Stunde 10 Minuten</td></tr>
          <tr><td><strong>Ort</strong></td><td>Wien – 1090</td></tr>
        </tbody>
      </table>

      <h3>📞 Der Anruf – Warum es dringend war</h3>
      <p>Der Tag hat um 09:10 mit einem Anruf begonnen.</p>
      <p>Claire am Telefon: <em>„Wir haben heute Nachmittag eine Familienfeier… und Rosie braucht dringend Hilfe."</em></p>
      <p>Du hörst sofort: 👉 <strong>Druck ist da.</strong> Nicht Panik – aber knapp davor.</p>
      <p><strong>Situation:</strong></p>
      <ul>
        <li>Termin um 15:00</li>
        <li>Hund seit über 10 Wochen nicht gepflegt</li>
        <li>Kein anderer Termin verfügbar</li>
      </ul>
      <p>Und da stellst du dir eine Frage: 👉 <strong>Krieg ich das sauber hin – oder sag ich lieber nein?</strong></p>

      <h3>🐾 Erster Eindruck – Kein „nur schnell drüber"</h3>
      <p>Rosie war um 10:05 da. Und sofort klar: 👉 <strong>Das ist mehr als ein kleines Auffrischen.</strong></p>
      <p><strong>Zustand:</strong></p>
      <ul>
        <li>Fell rausgewachsen und ungleichmäßig</li>
        <li>Augen teilweise verdeckt</li>
        <li>Hygienebereich unsauber</li>
        <li>Leichte Verfilzungen hinter den Ohren</li>
      </ul>
      <p>Nicht extrem. Aber: 👉 <strong>Präsentation war das Hauptproblem.</strong> Im Hundesalon Laika in Wien 1090 kennen wir solche Fälle – wenn auch meist gravierender, wie <a href="/blog/fallstudie-vernachlaessigter-hund-bruno">den Komplett-Reset bei Mischling Bruno</a>.</p>

      <h3>⚠️ Prioritäten setzen</h3>
      <p>Bei Notfall-Terminen geht's nicht um Perfektion. Sondern um: 👉 <strong>Wirkung vs. Zeit.</strong></p>
      <table>
        <thead><tr><th>Bereich</th><th>Priorität</th></tr></thead>
        <tbody>
          <tr><td>Gesicht</td><td>Hoch</td></tr>
          <tr><td>Hygiene</td><td>Hoch</td></tr>
          <tr><td>Gesamte Form</td><td>Mittel</td></tr>
          <tr><td>Feinarbeit</td><td>Niedrig</td></tr>
        </tbody>
      </table>
      <p>Du arbeitest dort, wo's sofort sichtbar ist.</p>

      <h3>🧠 Strategie – Schnell, aber kontrolliert</h3>
      <p>Nicht hektisch. Aber auch kein Leerlauf.</p>

      <h4>1. Schnelle Vorbereitung</h4>
      <ul>
        <li>Fell kurz eingeschätzt</li>
        <li>Leicht durchgebürstet, wo möglich</li>
        <li>Keine aufwendige Entfilzung</li>
      </ul>

      <h4>2. Gesicht zuerst (immer)</h4>
      <p>Warum? 👉 <strong>Das sieht jeder sofort.</strong></p>
      <ul>
        <li>Augen freigeschnitten</li>
        <li>Schnauze in Form gebracht</li>
        <li>Ausdruck wieder klar</li>
      </ul>
      <p>Und schon: 👉 <strong>Riesiger Unterschied.</strong></p>

      <h4>3. Hygiene-Bereich</h4>
      <ul>
        <li>Hinterteil sauber gemacht</li>
        <li>Bauchbereich gekürzt</li>
      </ul>
      <p>Das bringt: 👉 Mehr Komfort, weniger Geruch, Sauberkeit.</p>

      <h4>4. Körper scheren</h4>
      <ul>
        <li>Gleichmäßiger Schnitt</li>
        <li>Keine unnötigen Durchgänge</li>
      </ul>
      <p>Ziel: 👉 <strong>Sauber, ordentlich, präsentabel.</strong></p>

      <h4>5. Schnelles Bad & Trocknen</h4>
      <p>Kein Wellnessprogramm. 👉 <strong>Funktional.</strong></p>
      <ul>
        <li>Kürzeres Bad, Fokus auf Sauberkeit</li>
        <li>Trocknen: effizient und kontrolliert</li>
      </ul>

      <h3>🧰 Werkzeuge & Setup</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Tool</th><th>Warum</th></tr></thead>
        <tbody>
          <tr><td>Maschine</td><td>Wahl KM10</td><td>Schnell & zuverlässig</td></tr>
          <tr><td>Gesicht</td><td>Kleine Trimmer</td><td>Präzise</td></tr>
          <tr><td>Bad</td><td>Mildes Shampoo</td><td>Schnell & schonend</td></tr>
          <tr><td>Trocknen</td><td>Hochleistungsföhn</td><td>Effizient</td></tr>
          <tr><td>Finish</td><td>Leichter Spray</td><td>Frischer Look</td></tr>
        </tbody>
      </table>

      <h3>⏱️ Zeitaufteilung</h3>
      <table>
        <thead><tr><th>Bereich</th><th>Dauer</th></tr></thead>
        <tbody>
          <tr><td>Einschätzung & Vorbereitung</td><td>10 Min</td></tr>
          <tr><td>Schneiden</td><td>30 Min</td></tr>
          <tr><td>Baden & Trocknen</td><td>20 Min</td></tr>
          <tr><td>Finish</td><td>10 Min</td></tr>
        </tbody>
      </table>
      <p>👉 <strong>Jede Minute hatte einen Zweck.</strong></p>

      <h3>✨ Ergebnis</h3>
      <p>Hier zeigt sich, wie wichtig Prioritäten sind.</p>
      <p><strong>Vorher:</strong></p>
      <ul>
        <li>Ungepflegt</li>
        <li>Überwachsen</li>
        <li>Kein klarer Ausdruck</li>
      </ul>
      <p><strong>Nachher:</strong></p>
      <ul>
        <li>Freies Gesicht</li>
        <li>Gleichmäßiges Fell</li>
        <li>Sauberer Gesamteindruck</li>
      </ul>
      <p>Claire hat gesagt: <em>„Sie schaut aus wie ein ganz anderer Hund."</em></p>
      <p>Und genau das ist das Ziel. Gute Kundenkommunikation macht den Unterschied – wie wir auch <a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">beim Erwartungsgespräch mit Alfies Besitzerin</a> zeigen.</p>

      <h3>🐶 Verhalten während des Grooms</h3>
      <p>Rosie war:</p>
      <ul>
        <li>Leicht unruhig</li>
        <li>Aber gut händelbar</li>
      </ul>
      <p>Ganz wichtig: 👉 <strong>Kein Stressanstieg.</strong> Auch unter Zeitdruck bleibt das Handling ruhig.</p>

      <h3>🧠 Beratung für Claire</h3>
      <p>Ehrlich – aber entspannt.</p>
      <p><strong>Das hab ich ihr gesagt:</strong></p>
      <ul>
        <li>Das war ein Reset – kein perfekter Schnitt</li>
        <li>Beim nächsten Mal besser früher buchen</li>
      </ul>
      <p><strong>Pflegeplan:</strong></p>
      <table>
        <thead><tr><th>Aufgabe</th><th>Rhythmus</th></tr></thead>
        <tbody>
          <tr><td>Grooming</td><td>Alle 6–8 Wochen</td></tr>
          <tr><td>Event-Vorbereitung</td><td>1–2 Wochen vorher</td></tr>
        </tbody>
      </table>
      <p>Und der wichtigste Satz: <strong>„Wir kriegen das immer hin – aber mit Zeit wird's noch besser."</strong></p>
      <p>Das baut Vertrauen auf.</p>

      <h3>❓ Häufige Fragen</h3>
      <p><strong>Geht Grooming am selben Tag überhaupt?</strong></p>
      <p>Ja – wenn richtig priorisiert wird.</p>
      <p><strong>Ist das Ergebnis gleich wie bei einem normalen Termin?</strong></p>
      <p>Nein – aber sauber und präsentabel.</p>
      <p><strong>Sollte man für Events extra planen?</strong></p>
      <p>Unbedingt.</p>

      <h3>Fazit</h3>
      <p>Notfall-Groomings passieren. Das ist normal. Der Unterschied ist: 👉 <strong>Wie man damit umgeht.</strong></p>
      <p>Mit Zeit kann jeder gut arbeiten. Die echte Fähigkeit ist:</p>
      <ul>
        <li>👉 Unter Druck ruhig bleiben</li>
        <li>👉 Richtig priorisieren</li>
        <li>👉 Und ein starkes Ergebnis liefern</li>
      </ul>
      <p><strong>Ohne den Hund dabei zu stressen.</strong></p>

      <h3>📍 Ähnliche Fälle aus dem Hundesalon Laika</h3>
      <ul>
        <li><a href="/blog/fallstudie-erwartung-vs-realitaet-alfie">Erwartung vs. Realität: Kundenkommunikation bei Cavapoo Alfie</a></li>
        <li><a href="/blog/fallstudie-vernachlaessigter-hund-bruno">Vernachlässigter Hund Bruno: Komplett-Reset in einer Sitzung</a></li>
        <li><a href="/blog/fallstudie-senior-hund-charlie">Senior-Hund Charlie: Angepasstes Grooming mit Zeitgefühl</a></li>
      </ul>

      <h3>👉 Termin beim Hundefriseur Wien sichern</h3>
      <p>Wenn du merkst, dass dein Hund ähnliche Probleme hat – melde dich rechtzeitig.</p>
      <p>Wir nehmen uns Zeit und arbeiten ruhig, stressfrei und individuell.</p>
      <p><a href="/booking"><strong>➡️ Jetzt Termin anfragen</strong></a></p>

      <p><em>Hundesalon Laika – Ihr Hundefriseur in Wien 1090 (Alsergrund)</em></p>
    `,
    image: rosieImage
  }
];
