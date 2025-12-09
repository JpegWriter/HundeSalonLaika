import { Layout } from "@/components/layout/Layout";
import { BookingWizard } from "@/components/booking/BookingWizard";

export default function Booking() {
  return (
    <Layout>
      <div className="bg-secondary/30 min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ihr Termin bei Laika</h1>
            <p className="text-muted-foreground text-lg">
              Buchen Sie Ihren Wunschtermin in wenigen Schritten ganz bequem online.
            </p>
          </div>
          
          <BookingWizard />
        </div>
      </div>
    </Layout>
  );
}
