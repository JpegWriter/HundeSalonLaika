import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { CatBookingWizard } from "@/components/booking/CatBookingWizard";

export default function CatBooking() {
  return (
    <Layout>
      <SEO
        title="Katzen-Termin buchen – Sanfte Katzenpflege in Wien"
        description="Buchen Sie einen sanften Katzenpflege-Termin im Hundesalon Laika in 1090 Wien. Spezialisierte Katzengrooming-Pakete, stressarme Behandlung und individuelle Betreuung."
      />
      <div className="bg-secondary/30 min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Katzen-Termin bei Laika
            </h1>
            <p className="text-muted-foreground text-lg">
              Buchen Sie den passenden Grooming-Termin für Ihre Katze in wenigen
              Schritten – sanft, ruhig und katzenerfahren.
            </p>
          </div>

          <CatBookingWizard />
        </div>
      </div>
    </Layout>
  );
}


