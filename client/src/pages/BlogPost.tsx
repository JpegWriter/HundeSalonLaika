import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { blogPosts } from "@/lib/data";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import NotFound from "@/pages/not-found";
import { format } from "date-fns";
import { de } from "date-fns/locale";

const seoMetaBySlug: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "sommerfell-oder-winterfell": {
    title: "Sommerfell vs. Winterfell – Wie viel Pflege braucht mein Hund?",
    description:
      "Erfahren Sie, warum Hunde im Sommer und Winter unterschiedlich haaren und welche Pflegeroutine in Wien am besten schützt.",
  },
  "wie-oft-hund-baden": {
    title: "Wie oft Hund baden? Empfehlungen für gesunde Haut & Fell",
    description:
      "Viele Hunde werden zu oft oder zu selten gebadet. Hier erfahren Sie, wie oft Baden wirklich gesund ist – plus Tipps für die richtige Pflege.",
  },
  "kurzhaar-vs-langhaar": {
    title: "Kurzhaar oder Langhaar? Die richtige Fellpflege für jeden Hund",
    description:
      "Jeder Felltyp hat eigene Bedürfnisse. Entdecken Sie die optimale Pflege für Kurzhaar- und Langhaarhunde.",
  },
  "anzeichen-professionelle-pflege": {
    title: "5 klare Anzeichen: Jetzt braucht Ihr Hund professionelle Pflege",
    description:
      "Wann reicht Bürsten zuhause nicht mehr aus? Diese 5 Signale zeigen, dass Ihr Hund einen Grooming-Termin benötigt.",
  },
  "fellpflege-tipps-zuhause": {
    title: "Fellpflege zuhause – Die 8 wichtigsten Tipps für gesundes Fell",
    description:
      "So pflegen Sie das Fell Ihres Hundes zwischen den Terminen richtig: Bürsten, Waschen und Pflegeroutinen für jedes Fell.",
  },
  "professionelle-ohrenpflege": {
    title: "Ohrenpflege Hund – Warum professionelle Reinigung wichtig ist",
    description:
      "Entzündungen beginnen oft unbemerkt. Lesen Sie, warum regelmäßige Ohrenpflege so entscheidend für die Gesundheit ist.",
  },
  "hundebuersen-vergleich": {
    title: "Hundebürsten im Vergleich – Welche Bürste passt zu Ihrem Hund?",
    description:
      "Zupfbürste, Striegel oder Kamm? Wir erklären, welche Bürste für welchen Felltyp ideal ist.",
  },
  "verfilztes-fell": {
    title: "Verfilztes Fell beim Hund – Was wirklich hilft",
    description:
      "Warum Filz nie selbst herausgeschnitten werden sollte und wie Sie zukünftige Verfilzungen vermeiden.",
  },
  "hund-vorbereiten-grooming": {
    title: "Hund vorbereiten fürs Grooming – So wird der Termin stressfrei",
    description:
      "Mit diesen Tipps wird der Besuch beim Hundefriseur entspannt – ideal für Welpen, Angsthunde und sensible Hunde.",
  },
  "mythen-hundepflege": {
    title: "Hundepflege Mythen – Was stimmt wirklich?",
    description:
      "Viele Irrtümer gefährden die Fellgesundheit. Wir klären auf, welche Mythen Sie kennen sollten.",
  },
  "shampoo-arten-sicher": {
    title: "Hundeshampoo – Welche Arten sind wirklich sicher?",
    description:
      "Erfahren Sie, welche Inhaltsstoffe gut für die Hundehaut sind – und welche Shampoos Sie vermeiden sollten.",
  },
  "stressfreie-hundepflege": {
    title: "Stressfreie Hundepflege – Sanfte Methoden für Angsthunde",
    description:
      "Wie Hunde ohne Stress gepflegt werden können: Unsere bewährten Techniken für sensible Hunde.",
  },
  "pfotencheck-warum-wichtig": {
    title: "Pfotenpflege beim Hund – Warum Kontrolle so wichtig ist",
    description:
      "Salz, Asphalt & Grannen: Erfahren Sie, warum Pfotenpflege ein Muss ist und wie Sie Schäden vermeiden.",
  },
  fruehjahrsfell: {
    title: "Frühjahrsfell beim Hund – Warum Hunde stark haaren",
    description:
      "Im Frühjahr verlieren Hunde massiv Fell. Hier erfahren Sie, wie Sie Ihren Hund optimal unterstützen.",
  },
  "fellpflege-routinen-winter": {
    title: "Winterfell Pflege – Die beste Fellroutine für Hunde in Wien",
    description:
      "Schnee, Salz und Kälte belasten das Fell. So schützen Sie Ihren Hund im Winter richtig.",
  },
  "wie-oft-krallen-schneiden": {
    title: "Hundekrallen schneiden – Wie oft & wie richtig?",
    description:
      "Zu lange Krallen schmerzen. Ein kompletter Leitfaden zum sicheren Schneiden und zur idealen Häufigkeit.",
  },
  "fellpflege-pudel-doodles": {
    title: "Doodle & Pudel Fellpflege – Tipps gegen Filz & Knoten",
    description:
      "Pudel & Doodles haben anspruchsvolles Fell. So verhindern Sie Filz und pflegen Locken richtig.",
  },
  "pflege-golden-retriever": {
    title: "Golden Retriever Pflege – Unterwolle richtig entfernen",
    description:
      "Golden Retriever haaren stark. Erfahren Sie, wie Unterwolle schonend entfernt und Hautproblemen vorgebeugt wird.",
  },
  "pflege-shih-tzu-malteser": {
    title: "Shih Tzu & Maltese Pflege – Schnitte, Bürsten, Tipps",
    description:
      "Seidiges Fell braucht besondere Pflege: Die besten Schnitte und Routinen für Shih Tzu & Maltese.",
  },
  "welpenpflege-erster-termin": {
    title: "Welpenpflege – Ab wann braucht ein Welpe seinen ersten Termin?",
    description:
      "Der erste Besuch beim Hundefriseur ist entscheidend. Lesen Sie, wann und wie Welpen am besten starten.",
  },
  "angsthunde-beim-grooming": {
    title: "Angsthunde pflegen – 7 Schritte zu einem stressfreien Grooming",
    description:
      "Viele Hunde haben Angst vor Schere & Föhn. Diese 7 Schritte machen das Grooming sicher und entspannt.",
  },
  "hunde-ungern-gebuerstet": {
    title: "Hund lässt sich nicht bürsten – Ursachen & Lösungen",
    description:
      "Warum Hunde Bürsten ablehnen und wie Sie es mit einfachen Techniken verbessern können.",
  },
  "senioren-hunde-pflege": {
    title: "Senioren-Hunde Pflege – Worauf Sie im Alter achten müssen",
    description:
      "Ältere Hunde brauchen besondere Pflege. Hier lesen Sie, wie Fell, Pfoten und Haut im Alter gesund bleiben.",
  },
  "allergien-empfindliche-haut": {
    title: "Hunde mit Allergien – Welche Pflege ist die richtige?",
    description:
      "Juckreiz, Rötungen & empfindliche Haut? Diese Pflegepakete helfen Hunden mit Allergien.",
  },
};

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!match || !post) {
    return <NotFound />;
  }

  const publishedDate = post.date ? new Date(post.date) : new Date();
  const articleUrl = `https://www.hundesalonlaika-wien.at/blog/${post.slug}`;
  const seoMeta = seoMetaBySlug[post.slug];

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: post.title,
    description: seoMeta?.description ?? post.excerpt,
    image: "https://www.hundesalonlaika-wien.at/opengraph.jpg",
    author: {
      "@type": "Organization",
      name: "Hundesalon Laika Wien",
    },
    publisher: {
      "@type": "Organization",
      name: "Hundesalon Laika Wien",
      logo: {
        "@type": "ImageObject",
        url: "https://www.hundesalonlaika-wien.at/logo.png",
      },
    },
    datePublished: publishedDate.toISOString(),
    dateModified: publishedDate.toISOString(),
    articleSection: "Hundepflege",
    keywords: [
      "Hundepflege",
      "Hundefriseur Wien",
      "Fellpflege Hund",
      "Hundesalon Wien",
      "Grooming",
    ],
    url: articleUrl,
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={seoMeta?.title ?? `${post.title} | Pflege-Blog Hundesalon Laika Wien`}
        description={seoMeta?.description ?? post.excerpt}
        jsonLd={{ id: "ld-blog-article", data: articleJson }}
      />
      <article className="min-h-screen pb-20">
        {/* Header */}
        <div className="bg-secondary/30 pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zum Blog
            </Link>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border/50 pb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Hundesalon Laika Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{format(publishedDate, "d. MMMM yyyy", { locale: de })}</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                 <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                    <Share2 size={16} /> Teilen
                 </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-4xl -mt-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          
          <div
            className="blog-article-content mx-auto max-w-3xl text-base text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Recommended services block */}
          <section className="mt-16 p-6 md:p-8 bg-secondary/20 rounded-2xl border border-border/60">
            <h3 className="font-serif text-2xl font-bold mb-3">
              Passende Services im Hundesalon Laika
            </h3>
            <p className="text-muted-foreground mb-4">
              Für eine professionelle Hundepflege in Wien können Sie unsere
              Spezialpakete für Kurzhaar und Langhaar direkt online buchen:
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/service/wunderschnitt-kurzhaar" className="text-primary underline-offset-4 hover:underline">
                Der Wunderschnitt Kurzhaar
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/service/frisch-flauschig-kurzhaar" className="text-primary underline-offset-4 hover:underline">
                Frisch &amp; Flauschig Kurzhaar
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/service/wunderschnitt-langhaar" className="text-primary underline-offset-4 hover:underline">
                Der Wunderschnitt Langhaar
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/service/frisch-flauschig-langhaar" className="text-primary underline-offset-4 hover:underline">
                Frisch &amp; Flauschig Langhaar
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Hundepflege in Wien leicht gemacht
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Wenn Sie in Wien nach professioneller Hundepflege suchen, buchen Sie jetzt Ihren Termin bei Hundesalon Laika in 1090 Wien-Alsergrund.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Termin buchen
              </Button>
            </Link>
          </div>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Weiterführende Artikel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-white rounded-xl border border-border/70 p-4 hover:border-primary/60 hover:shadow-md transition-all"
                  >
                    <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>
                        {related.date
                          ? format(new Date(related.date), "d. MMM yyyy", {
                              locale: de,
                            })
                          : "Datum folgt"}
                      </span>
                    </p>
                    <h4 className="font-serif font-semibold text-sm group-hover:text-primary mb-1 line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
}
