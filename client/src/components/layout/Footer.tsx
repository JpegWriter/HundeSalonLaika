import { Link } from "wouter";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Hundesalon <span className="text-primary">Laika</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {siteData.tagline}
              <br />
              Ihr Premium-Partner für Hundepflege in Wien.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-3 rounded-full hover:text-primary transition-colors shadow-sm hover:shadow-md">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white p-3 rounded-full hover:text-primary transition-colors shadow-sm hover:shadow-md">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold">Links</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services & Preise</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Über Uns</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Pflege-Blog</Link></li>
              <li><Link href="/booking" className="text-muted-foreground hover:text-primary transition-colors">Online Buchen</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="shrink-0 mt-1 text-primary" size={18} />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="shrink-0 text-primary" size={18} />
                <span>{siteData.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="shrink-0 text-primary" size={18} />
                <span>{siteData.email}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold">Öffnungszeiten</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="shrink-0 mt-1 text-primary" size={18} />
                <span className="whitespace-pre-line">{siteData.openingHours.replace("|", "\n")}</span>
              </li>
            </ul>
            <Link href="/booking" className="block">
              <div className="inline-block bg-white px-6 py-3 rounded-xl border border-border shadow-sm hover:shadow-md transition-all cursor-pointer">
                <span className="text-primary font-medium flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Jetzt geöffnet
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hundesalon Laika Wien. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-primary">Impressum</Link>
            <Link href="/privacy" className="hover:text-primary">Datenschutz</Link>
            <Link href="/privacy" className="hover:text-primary">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
