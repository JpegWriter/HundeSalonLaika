import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";
import { CatBookingWizard } from "@/components/booking/CatBookingWizard";
import { siteData } from "@/lib/data";

export default function CatBooking() {
  return (
    <Layout>
      <SEO
        title="Katzen-Terminanfrage – Sanfte Katzenpflege in Wien"
        description="Stellen Sie eine sanfte Katzenpflege-Terminanfrage im Hundesalon Laika in 1090 Wien. Spezialisierte Katzengrooming-Pakete, stressarme Behandlung und individuelle Betreuung."
      />
      <div className="bg-secondary/30 min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] gap-10 items-center mb-12">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Katzen-Terminanfrage bei Laika
              </h1>
              <p className="text-muted-foreground text-lg">
                Stellen Sie die passende Grooming-Terminanfrage für Ihre Katze
                in wenigen Schritten – sanft, ruhig und katzenerfahren.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border bg-white">
                <img
                  src={siteData.images.groomer}
                  alt="Dominique im Salon – sanfte Pflege für Katzen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <CatBookingWizard />
        </div>
      </div>
    </Layout>
  );
}



