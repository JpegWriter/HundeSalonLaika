import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { de } from "date-fns/locale";

export default function Blog() {
  // Sort posts by date (newest first) or keep them in plan order?
  // Let's sort by date descending so the "latest" (or future plan) is at top?
  // Or if we want to show the "Plan", maybe chronological?
  // Let's stick to the order in data.ts which is Week 1 -> Week 24.
  // But usually blogs show newest first.
  // Let's reverse it so newest (Week 24) is first, OR featured is the latest *published*.
  
  // For now, let's keep the array as is (Week 1 -> 24) but maybe show the "current" week as featured?
  // Let's find the post that is closest to today but <= today.
  const today = new Date();
  const publishedPosts = blogPosts.filter(
    (p) => p.date && new Date(p.date) <= today
  );

  // Featured is der zuletzt veröffentlichte Beitrag (neuester mit Datum <= heute)
  const featuredPost =
    publishedPosts.length > 0
      ? publishedPosts[publishedPosts.length - 1]
      : null;

  // Alle weiteren veröffentlichten Beiträge (ohne Featured)
  const allOtherPosts =
    featuredPost !== null
      ? publishedPosts.filter((p) => p.slug !== featuredPost.slug)
      : [];

  return (
    <Layout>
      <SEO
        title="Pflege-Blog – Hundepflege Tipps in Wien | Hundesalon Laika"
        description="Der Pflege-Blog von Hundesalon Laika in 1090 Wien-Alsergrund. Wissen rund um Hundepflege, Hundefriseur-Termine und Gesundheit für Ihren Hund in Wien."
      />
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Pflege-Blog</h1>
            <p className="text-muted-foreground text-lg">
              Der Pflege-Blog von Hundesalon Laika in 1090 Wien-Alsergrund – Ihr Wissenshub rund um Hundepflege, Hundefriseur-Besuche und gesunde Fellpflege in Wien.
            </p>
          </div>

          {/* Featured Post (nur wenn bereits veröffentlichte Beiträge existieren) */}
          {featuredPost && (
            <div className="mb-16">
              <div className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-xl transition-all grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredPost.date
                        ? format(new Date(featuredPost.date), "d. MMMM yyyy", {
                            locale: de,
                          })
                        : "Datum folgt"}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button variant="outline" className="w-fit mt-4">
                      Artikel lesen <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid – zeigt ausschließlich bereits veröffentlichte Artikel (ohne Featured) */}
          {allOtherPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allOtherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      )}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar size={14} />
                      <span>
                        {post.date
                          ? format(new Date(post.date), "d. MMMM yyyy", {
                              locale: de,
                            })
                          : "Datum folgt"}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-medium text-sm flex items-center mt-auto">
                      Weiterlesen{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
