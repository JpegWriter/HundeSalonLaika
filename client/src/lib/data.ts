
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

      <p><a href="/booking">👉 Termin buchen</a></p>
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
      <p><a href="/booking">👉 Direkt Termin buchen</a></p>
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

      <p><a href="/booking">👉 Jetzt Fellanalyse &amp; Pflegetermin buchen</a></p>
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

      <p><a href="/booking">👉 Professionelle Fellpflege in Wien buchen</a></p>
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

      <p><a href="/booking">👉 Ohrenpflege-Termin direkt buchen</a></p>
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

      <p><a href="/booking">👉 Beratungstermin buchen</a></p>
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

      <p><a href="/booking">👉 Entfilzungsberatung buchen</a></p>
      <p><a href="/services/der-wunderschnitt-langhaar">👉 Langhaar-Pflege ansehen</a></p>
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

      <p><a href="/booking">👉 Jetzt Termin buchen</a></p>
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

      <p><a href="/booking">👉 Jetzt professionelle Beratung buchen</a></p>
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

      <p><a href="/booking">👉 Sanftes Pflegepaket buchen</a></p>
      <p><a href="/services">👉 Für Angsthunde geeignete Services ansehen</a></p>
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

      <p><a href="/booking">👉 Pfotenpflege buchen</a></p>
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
      <p>Mehr dazu finden Sie in unserem Service für Unterwolle &amp; Entfilzen: <a href="/services/entwollung">👉 Entwollungs-Service ansehen</a></p>

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
      <p><a href="/booking">👉 Jetzt Fellwechsel-Pflege buchen</a></p>
      <p><a href="/services">👉 Alle Services ansehen</a></p>
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
      <p>Für intensive Unterwollpflege empfehlen wir unseren Entwollungs-Service: <a href="/services/entwollung">👉 Entwollungs-Service ansehen</a>.</p>

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

      <p><a href="/booking">👉 Krallenservice buchen</a></p>
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
      <p>Unser Langhaar-Spezialservice hilft, die Lockenstruktur gesund und pflegeleicht zu erhalten: <a href="/services/der-wunderschnitt-langhaar">👉 Der Wunderschnitt Langhaar</a></p>

      <h3>5. Häufige Pflegefehler bei Doodles</h3>
      <ul>
        <li>nur oberflächliches Bürsten über das Deckhaar</li>
        <li>Baden ohne gründliches Trocknen und Ausbürsten</li>
        <li>Versuch, Filz selbst mit der Schere herauszuschneiden</li>
        <li>falsche Shampoos ohne ausreichende Feuchtigkeitspflege</li>
      </ul>

      <h3>Fazit</h3>
      <p>Doodle- und Pudelfell ist wunderschön – aber nur mit konsequenter Betreuung. Die Kombination aus täglicher Heimroutine und professionellen Terminen ist der Schlüssel zu gesundem, weichem und filzfreiem Fell.</p>

      <p><a href="/booking">👉 Doodle-Pflege buchen</a></p>
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
      <p>Mehr dazu im Serviceprofil: <a href="/services/entwollung">👉 Entwollungsservice ansehen</a></p>

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

      <p><a href="/booking">👉 Entwollungsservice buchen</a></p>
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

      <p><a href="/booking">👉 Langhaarschnitt buchen</a></p>
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

      <p><a href="/booking">👉 Welpen-Ersttermin buchen</a></p>
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

      <p><a href="/booking">👉 Sanftes Pflegepaket für Angsthunde buchen</a></p>
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

      <p><a href="/booking">👉 Beratungstermin buchen</a></p>
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

      <p><a href="/booking">👉 Seniorfreundliche Pflege buchen</a></p>
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

      <p><a href="/booking">👉 Hypoallergene Pflege buchen</a></p>
    `,
    image: shampooImage
  }
];
