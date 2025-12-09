import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
            <div className="h-full bg-secondary/30 p-8 rounded-2xl relative border border-border/50">
              <Quote className="absolute top-6 right-6 text-primary/20 h-10 w-10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/80 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-serif font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.dog}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
