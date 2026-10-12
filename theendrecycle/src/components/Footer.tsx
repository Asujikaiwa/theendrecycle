import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n";
import { site, telHref } from "@/config/site";
import { Logo } from "./Header";
import { PhoneIcon } from "./icons";

export default function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  return (
    <footer className="border-t border-line bg-white pb-24 pt-10 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-muted">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={telHref} className="inline-flex items-center gap-2 font-semibold text-navy">
            <PhoneIcon className="size-4" /> {site.phoneDisplay}
          </a>
          <div className="flex gap-4 text-muted">
            {site.facebookUrl && <a href={site.facebookUrl} target="_blank" rel="noopener" className="hover:text-navy">Facebook</a>}
            {site.tiktokUrl && <a href={site.tiktokUrl} target="_blank" rel="noopener" className="hover:text-navy">TikTok</a>}
            <Link href={`/${lang}/photo-credits`} className="hover:text-navy">{t.footer.credits}</Link>
          </div>
          <p className="text-xs text-muted">© {new Date().getFullYear()} {site.brand} · theendrecycle.com · {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

/** ปุ่มโทรลอยด้านล่าง (มือถือ) */
export function FloatingCall({ label }: { label: string }) {
  return (
    <a
      href={telHref}
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-full bg-navy py-3.5 text-lg font-semibold text-white shadow-2xl shadow-ink/30 sm:hidden"
    >
      <PhoneIcon />
      {label} {site.phoneDisplay}
    </a>
  );
}
