
import { useEffect } from "react";

type JsonLdEntry = {
  /** Unique DOM id for the script tag. If omitted, a default id based on index is used. */
  id?: string;
  /** Arbitrary JSON-LD data object. */
  data: unknown;
};

interface SEOProps {
  title: string;
  description: string;
  /**
   * One or more JSON-LD entries to inject into the document head.
   * This is runtime-only (client side) but good enough for SPA SEO / AEO.
   */
  jsonLd?: JsonLdEntry | JsonLdEntry[];
}

export function SEO({ title, description, jsonLd }: SEOProps) {
  useEffect(() => {
    // Document title
    if (typeof document !== "undefined") {
      document.title = title;

      // Description meta tag
      let descriptionTag = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );
      if (!descriptionTag) {
        descriptionTag = document.createElement("meta");
        descriptionTag.name = "description";
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.content = description;

      // JSON-LD
      const entries: JsonLdEntry[] = Array.isArray(jsonLd)
        ? jsonLd
        : jsonLd
          ? [jsonLd]
          : [];

      entries.forEach((entry, index) => {
        const scriptId = entry.id ?? `jsonld-${index}`;
        const existing = document.getElementById(scriptId);
        if (existing?.parentNode) {
          existing.parentNode.removeChild(existing);
        }

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = scriptId;
        script.text = JSON.stringify(entry.data);
        document.head.appendChild(script);
      });

      // Cleanup on unmount / route change
      return () => {
        entries.forEach((entry, index) => {
          const scriptId = entry.id ?? `jsonld-${index}`;
          const existing = document.getElementById(scriptId);
          if (existing?.parentNode) {
            existing.parentNode.removeChild(existing);
          }
        });
      };
    }
  }, [title, description, JSON.stringify(jsonLd)]);

  // This component does not render anything visually.
  return null;
}


