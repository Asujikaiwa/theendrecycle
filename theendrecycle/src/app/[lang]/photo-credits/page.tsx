import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, hreflang } from "@/i18n/config";
import { getDict } from "@/i18n";
import { photos, src } from "@/data/images";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang);
  return {
    title: `${t.credits.title} | TheEnd Recycle`,
    alternates: {
      canonical: `/${lang}/photo-credits`,
      languages: Object.fromEntries(locales.map((l) => [hreflang[l], `/${l}/photo-credits`])),
    },
    robots: { index: false, follow: true },
  };
}

export default async function Credits({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const list = Object.values(photos);
  return (
    <>
      <Header lang={lang} t={t} path="/photo-credits" />
      <main className="mx-auto max-w-5xl px-4 py-14">
        <h1 className="text-3xl font-semibold">{t.credits.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t.credits.intro}</p>
        <p className="mt-1 text-sm text-muted">{t.credits.gbpNote}</p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-sky-50 text-xs uppercase tracking-wider text-navy">
              <tr>
                <th className="p-3">{t.credits.colPhoto}</th>
                <th className="p-3">{t.credits.colAuthor}</th>
                <th className="p-3">{t.credits.colLicense}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {list.map((p) => (
                <tr key={p.id}>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src(p, 200)} alt={p.subject} width={80} height={56} loading="lazy" className="h-14 w-20 rounded object-cover" />
                      <span className="text-muted">{p.subject}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <a href={p.sourceUrl} target="_blank" rel="noopener nofollow" className="font-medium text-navy hover:underline">
                      {p.author}
                    </a>
                    <div className="text-xs text-muted">{p.source}</div>
                  </td>
                  <td className="p-3">
                    <a href={p.licenseUrl} target="_blank" rel="noopener nofollow license" className="hover:underline">
                      {p.license}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href={`/${lang}`} className="mt-8 inline-block font-semibold text-navy hover:underline">
          ← {t.credits.back}
        </Link>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
