import { Layout } from "@/components/layout/Layout";
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

  return (
    <Layout>
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
                <span>{format(new Date(), "d. MMMM yyyy", { locale: de })}</span>
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
            <img src={post.image} alt={post.title} className="w-full h-auto" />
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
          
          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Haben Sie Fragen zur Pflege?</h3>
            <p className="text-muted-foreground mb-6">
              Wir beraten Sie gerne persönlich bei Ihrem nächsten Besuch.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Termin vereinbaren
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
