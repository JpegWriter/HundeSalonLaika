import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted");
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookie_consent", "rejected");
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    setVisible(false);
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem("cookie_consent", "essential");
    // Keep analytics denied (already default)
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 border border-border">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Cookie className="h-6 w-6 text-primary shrink-0" />
            <h2 className="font-serif text-lg font-bold">Cookie-Einstellungen</h2>
          </div>
          <button
            onClick={rejectAll}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
          Website zu bieten. Einige Cookies sind notwendig, damit die Website
          funktioniert. Andere helfen uns, die Nutzung zu analysieren und unsere
          Dienstleistungen zu verbessern.
        </p>

        {showDetails && (
          <div className="text-xs text-muted-foreground bg-secondary/30 rounded-lg p-4 space-y-2">
            <p>
              <strong>Notwendige Cookies:</strong> Diese Cookies sind für das
              Funktionieren der Website unerlässlich und können nicht deaktiviert
              werden.
            </p>
            <p>
              <strong>Analyse-Cookies (Google Analytics):</strong> Helfen uns zu
              verstehen, wie Besucher die Website nutzen – z.&nbsp;B. besuchte
              Seiten und Verweildauer. Daten werden anonymisiert erhoben.
            </p>
            <p>
              <strong>Marketing-Cookies:</strong> Werden verwendet, um
              Werbung relevanter zu gestalten.
            </p>
            <p className="pt-1">
              Weitere Informationen finden Sie in unserer{" "}
              <a href="/privacy" className="underline text-primary hover:text-primary/80">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button onClick={acceptAll} className="flex-1 h-10">
            Alle akzeptieren
          </Button>
          <Button
            onClick={acceptEssentialOnly}
            variant="outline"
            className="flex-1 h-10"
          >
            Nur notwendige
          </Button>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs text-muted-foreground hover:text-primary underline transition-colors w-full text-center"
        >
          {showDetails ? "Details ausblenden" : "Cookie-Details anzeigen"}
        </button>
      </div>
    </div>
  );
}
