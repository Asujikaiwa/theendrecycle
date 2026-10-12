import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { htmlLang, isLocale, locales, ogLocale, hreflang } from "@/i18n/config";
import { getDict } from "@/i18n";
import { site } from "@/config/site";
import { photos } from "@/data/images";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#1d4e73", width: "device-width", initialScale: 1 };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang);
  const languages = Object.fromEntries(locales.map((l) => [hreflang[l], `/${l}`]));
  return {
    metadataBase: new URL(site.domain),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: { canonical: `/${lang}`, languages: { ...languages, "x-default": "/th" } },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: site.brand,
      title: t.meta.title,
      description: t.meta.description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: photos.hero.remote.replace("w=1600", "w=1200&h=630"), width: 1200, height: 630, alt: t.hero.photoAlt }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
    formatDetection: { telephone: true },
    // ใส่รหัสยืนยันจาก Google Search Console ตรงนี้เมื่อได้มา
    // verification: { google: "xxxxxxxx" },
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const fonts =
    lang === "zh"
      ? "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Prompt:wght@500;600;700&display=swap"
      : "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700&family=Prompt:wght@500;600;700&display=swap";
  return (
    <html lang={htmlLang[lang]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="stylesheet" href={fonts} />
      </head>
      <body>{children}</body>
    </html>
  );
}
