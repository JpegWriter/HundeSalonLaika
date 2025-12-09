import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <Layout>
      <div className="bg-background min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Pflege-Blog</h1>
            <p className="text-muted-foreground text-lg">
              Tipps, Tricks und Wissenswertes rund um die Pflege Ihres Vierbeiners.
            </p>
          </div>

          {/* Featured Post */}
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
                   <span className="bg-primary/10 px-3 py-1 rounded-full">Featured</span>
                   <span className="text-muted-foreground flex items-center gap-1"><Calendar size={14} /> Heute</span>
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 text-sm text-muted-foreground flex items-center gap-2">
                       <Calendar size={14} /> <span>{format(new Date(), "d. MMMM yyyy", { locale: de })}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-medium text-sm flex items-center mt-auto">
                      Weiterlesen <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
