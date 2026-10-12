import Link from "next/link";
import { locales, localeLabel, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n";
import { site, telHref } from "@/config/site";
import { PhoneIcon } from "./icons";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      {/* โลโก้จริง: public/Logo_TheEndRecycle.png (ตัด/ลบพื้นขาวเป็น logo-mark.png) */}
      <img src="/logo-mark.png" alt="" width={230} height={160} className="h-9 w-auto shrink-0" />
      <span className="font-[family-name:var(--font-display)] text-lg font-bold italic leading-none tracking-tight text-[#1e282e]">
        TheEnd<span className="text-[#2b7f2b]">Recycle</span>
      </span>
    </span>
  );
}

export default function Header({ lang, t, path = "" }: { lang: Locale; t: Dict; path?: string }) {
  const nav = [
    ["#materials", t.nav.materials],
    ["#forms", t.nav.forms],
    ["#process", t.nav.process],
    ["#faq", t.nav.faq],
    ["#contact", t.nav.contact],
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href={`/${lang}`} aria-label={site.brand}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex" aria-label="Main">
          {nav.map(([href, label]) => (
            <Link key={href} href={`/${lang}${href}`} className="hover:text-navy">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-line p-0.5 text-xs font-semibold" role="group" aria-label="Language">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}${path}`}
                hrefLang={l}
                aria-current={l === lang ? "true" : undefined}
                className={`rounded-full px-2.5 py-1 ${l === lang ? "bg-navy text-white" : "text-muted hover:text-navy"}`}
              >
                {localeLabel[l]}
              </Link>
            ))}
          </div>
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-700 sm:flex"
          >
            <PhoneIcon className="size-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
