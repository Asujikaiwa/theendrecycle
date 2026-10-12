import { site } from "@/config/site";
import { photos } from "@/data/images";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n";

/**
 * Structured data ให้ Google เข้าใจว่าเป็นธุรกิจท้องถิ่นประเภท "รับซื้อ/รีไซเคิลโลหะ"
 * และเชื่อมกับ Google Business Profile / Facebook / TikTok ผ่าน sameAs
 */
export default function JsonLd({ lang, t }: { lang: Locale; t: Dict }) {
  const url = `${site.domain}/${lang}`;
  const sameAs = [site.facebookUrl, site.tiktokUrl, site.googleBusinessUrl].filter(Boolean);

  const business: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    "@id": `${site.domain}/#business`,
    name: site.brand,
    alternateName: site.brandTh,
    url,
    telephone: site.phoneE164,
    description: t.meta.description,
    image: photos.hero.remote,
    address: { "@type": "PostalAddress", addressCountry: "TH" },
    knowsAbout: t.materials.items.map((m) => m.name),
    makesOffer: t.materials.items.map((m) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${t.hero.badge}: ${m.name}`, description: m.desc },
    })),
    contactPoint: { "@type": "ContactPoint", telephone: site.phoneE164, contactType: "customer service", availableLanguage: ["th", "en", "zh"] },
  };
  if (sameAs.length) business.sameAs = sameAs;
  if (site.serviceAreas.length) business.areaServed = site.serviceAreas.map((a) => ({ "@type": "AdministrativeArea", name: a }));
  if (site.openingHours.length) business.openingHours = site.openingHours;

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: t.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const website = { "@context": "https://schema.org", "@type": "WebSite", name: site.brand, url: site.domain, inLanguage: ["th", "en", "zh-Hans"] };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, faq, website]).replace(/</g, "\\u003c") }}
    />
  );
}
