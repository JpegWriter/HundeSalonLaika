import { Layout } from "@/components/layout/Layout";
import { services, pricingTiers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { Check, ArrowLeft, Clock, Scissors } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const [match, params] = useRoute("/service/:id");
  const service = services.find(s => s.id === params?.id);

  if (!match || !service) {
    return <NotFound />;
  }

  const pricing = service.category === "Kurzhaar" ? pricingTiers.shortHair : pricingTiers.longHair;

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={service.image} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-end pb-12">
            <Link href="/services" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 transition-colors">
              <ArrowLeft size={20} /> Zurück zur Übersicht
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-white/90 text-xl max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Über diesen Service</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold mb-6">Was ist enthalten?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                      <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                        <Check size={16} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <Scissors className="text-primary" /> Unsere Philosophie
                </h2>
                <p className="text-muted-foreground italic">
                  "Wir nehmen uns für jeden Hund die Zeit, die er braucht. Bei diesem Service achten wir besonders auf eine stressfreie Behandlung und gehen individuell auf die Bedürfnisse Ihres Hundes ein."
                </p>
              </section>
            </div>

            {/* Sidebar Pricing */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-lg sticky top-24">
                <h3 className="font-serif text-2xl font-bold mb-6">Preise nach Größe</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <div>
                      <span className="font-bold block">Small</span>
                      <span className="text-xs text-muted-foreground">Bis 10kg</span>
                    </div>
                    <span className="font-serif text-xl text-primary">€{pricing.small}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <div>
                      <span className="font-bold block">Medium</span>
                      <span className="text-xs text-muted-foreground">10-25kg</span>
                    </div>
                    <span className="font-serif text-xl text-primary">€{pricing.medium}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <div>
                      <span className="font-bold block">Large</span>
                      <span className="text-xs text-muted-foreground">25-40kg</span>
                    </div>
                    <span className="font-serif text-xl text-primary">€{pricing.large}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <div>
                      <span className="font-bold block">X-Large</span>
                      <span className="text-xs text-muted-foreground">Über 40kg</span>
                    </div>
                    <span className="font-serif text-xl text-primary">€{pricing.xl}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center mb-2">
                    <Clock size={16} />
                    <span>Dauer ca. 90-120 Min.</span>
                  </div>
                  <Link href="/booking">
                    <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                      Jetzt Buchen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
