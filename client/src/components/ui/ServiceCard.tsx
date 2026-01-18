import { Link } from "wouter";
import { ArrowRight, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  featured?: boolean;
}

export function ServiceCard({ id, title, description, image, features, featured = false }: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-white transition-all duration-300",
      featured ? "border-2 border-primary/20 shadow-xl scale-[1.02]" : "border border-border shadow-sm hover:shadow-lg hover:-translate-y-1"
    )}>
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 md:p-8 space-y-4">
        <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-2 pt-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link href={`/service/${id}`}>
            <Button variant={featured ? "default" : "outline"} className={cn("w-full group/btn", featured ? "bg-primary hover:bg-primary/90" : "")}>
              Details & Terminanfrage
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
