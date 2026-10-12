import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDict } from "@/i18n";
import Header from "@/components/Header";
import Footer, { FloatingCall } from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Contact, Faq, Forms, Gallery, Hero, Materials, Process, Trust } from "@/components/sections";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        {t.skip}
      </a>
      <Header lang={lang} t={t} />
      <main id="main">
        <Hero t={t} lang={lang} />
        <Trust t={t} />
        <Materials t={t} />
        <Forms t={t} />
        <Process t={t} />
        <Gallery t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer lang={lang} t={t} />
      <FloatingCall label={t.floatCall} />
      <JsonLd lang={lang} t={t} />
    </>
  );
}
