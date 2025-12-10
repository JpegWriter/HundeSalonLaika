import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { blogPosts } from "@/lib/data";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import NotFound from "@/pages/not-found";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!match || !post) {
    return <NotFound />;
  }

  const publishedDate = post.date ? new Date(post.date) : new Date();
  const articleUrl = `https://www.hundesalonlaika-wien.at/blog/${post.slug}`;

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: publishedDate.toISOString(),
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "Hundesalon Laika",
    },
    url: articleUrl,
    image: "https://www.hundesalonlaika-wien.at/opengraph.jpg",
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={`${post.title} | Pflege-Blog Hundesalon Laika Wien`}
        description={post.excerpt}
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
            className="prose prose-lg prose-stone mx-auto max-w-3xl
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-bold
            "
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
