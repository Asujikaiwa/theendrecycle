import type { Dict } from "@/i18n";
import type { MetalKey } from "@/i18n/dictionaries/th";
import { site, telHref } from "@/config/site";
import Photo from "./Photo";
import { ChatIcon, LayersIcon, PhoneIcon, PinIcon, PlayIcon, PlusIcon, ScaleIcon, TagIcon, TruckIcon } from "./icons";

const metalDot: Record<MetalKey, string> = {
  steel: "bg-steel",
  aluminium: "bg-aluminium",
  brass: "bg-brass",
  copper: "bg-copper",
};

function SectionHead({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className={`text-3xl font-semibold sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-base sm:text-lg ${light ? "text-sky-100" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}

export function CallButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={telHref}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-700 ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

/* ---------------- Hero ---------------- */
export function Hero({ t, lang }: { t: Dict; lang: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Photo k="hero" alt={t.hero.photoAlt} priority width={1800} sizes="100vw" className="!absolute inset-0 -z-10 h-full w-full opacity-80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky px-3 py-1 text-sm font-semibold text-ink">
            <TruckIcon className="size-4" />
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {/* ตัดคำตามช่องว่างเท่านั้น กันภาษาไทยขึ้นบรรทัดใหม่กลางคำ */}
            {t.hero.h1a.split(" ").map((w, i) => (
              <span key={i} className="whitespace-nowrap">
                {w}{" "}
              </span>
            ))}
            <span className="block text-sky">
              {t.hero.h1b.split(" ").map((w, i) => (
                <span key={i} className="whitespace-nowrap">
                  {w}{" "}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-sky-100">{t.hero.sub}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.nav.materials}>
            {t.hero.chips.map((c, i) => (
              <li key={c} className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-white">
                <span className={`size-2.5 rounded-full ${["bg-steel", "bg-aluminium", "bg-brass", "bg-copper"][i]}`} />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton label={`${t.hero.ctaCall} ${site.phoneDisplay}`} className="!bg-sky !text-ink hover:!bg-white" />
            <a
              href={`/${lang}#materials`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white hover:bg-white/10"
            >
              {t.hero.ctaMaterials}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip ---------------- */
const trustIcons = [TruckIcon, LayersIcon, TagIcon, ScaleIcon];
export function Trust({ t }: { t: Dict }) {
  return (
    <section className="bg-sky">
      <ul className="mx-auto grid max-w-6xl gap-px px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.map((item, i) => {
          const Icon = trustIcons[i];
          return (
            <li key={item.t} className="flex gap-3 p-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-navy shadow-sm">
                <Icon />
              </span>
              <div>
                <h3 className="font-semibold">{item.t}</h3>
                <p className="mt-0.5 text-sm text-ink/75">{item.d}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------------- Materials ---------------- */
export function Materials({ t }: { t: Dict }) {
  const m = t.materials;
  return (
    <section id="materials" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead title={m.title} sub={m.sub} />
        <div className="grid gap-6 md:grid-cols-2">
          {m.items.map((it) => (
            <article key={it.key} id={it.key} className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-px bg-line">
                <Photo k={it.photos[0]} alt={it.alts[0]} className="aspect-[4/3]" sizes="(min-width: 768px) 25vw, 50vw" width={700} />
                <Photo k={it.photos[1]} alt={it.alts[1]} className="aspect-[4/3]" sizes="(min-width: 768px) 25vw, 50vw" width={700} />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2.5 text-2xl font-semibold">
                  <span className={`size-3.5 rounded-full ${metalDot[it.key]}`} aria-hidden />
                  {it.name}
                </h3>
                <p className="mt-2 text-muted">{it.desc}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy">{m.examplesLabel}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {it.examples.map((e) => (
                    <li key={e} className="rounded-full bg-sky-50 px-3 py-1 text-sm text-ink ring-1 ring-line">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Forms (ชิ้น / เศษ / ขี้) ---------------- */
export function Forms({ t }: { t: Dict }) {
  return (
    <section id="forms" className="bg-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead title={t.forms.title} sub={t.forms.sub} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.forms.items.map((f, i) => (
            <article key={f.t} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line">
              <Photo k={f.photo} alt={f.alt} className="aspect-[16/10]" sizes="(min-width: 768px) 33vw, 100vw" width={800} />
              <div className="p-6">
                <span className="text-sm font-semibold text-navy">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-semibold">{f.t}</h3>
                <p className="mt-2 text-muted">{f.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function Process({ t }: { t: Dict }) {
  const p = t.process;
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{p.title}</h2>
          <p className="mt-3 text-lg text-muted">{p.sub}</p>
          <ol className="mt-8 space-y-5">
            {p.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{s.t}</h3>
                  <p className="text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <CallButton label={site.phoneDisplay} className="mt-8" />
        </div>
        <Photo k={p.photo} alt={p.photoAlt} className="aspect-[4/3] rounded-3xl shadow-xl" width={1100} />
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
export function Gallery({ t }: { t: Dict }) {
  return (
    <section className="bg-sky py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead title={t.gallery.title} sub={t.gallery.sub} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {t.gallery.items.map((g, i) => (
            <Photo
              key={g.photo + i}
              k={g.photo}
              alt={g.alt}
              className={`rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
              sizes="(min-width: 768px) 33vw, 50vw"
              width={i === 0 ? 1200 : 700}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq({ t }: { t: Dict }) {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHead title={t.faq.title} />
        <div className="divide-y divide-line rounded-2xl border border-line">
          {t.faq.items.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="flex items-center justify-between gap-4 text-lg font-semibold">
                {f.q}
                <PlusIcon className="faq-icon size-5 shrink-0 text-navy transition-transform" />
              </summary>
              <p className="mt-2 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  const social = [
    { url: site.facebookUrl, label: c.facebook, Icon: ChatIcon },
    { url: site.tiktokUrl, label: c.tiktok, Icon: PlayIcon },
  ];
  return (
    <section id="contact" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionHead title={c.title} sub={c.sub} light />
        <a
          href={telHref}
          className="mx-auto inline-flex items-center gap-3 rounded-2xl bg-sky px-8 py-5 font-[family-name:var(--font-display)] text-3xl font-bold text-ink shadow-xl hover:bg-white sm:text-4xl"
        >
          <PhoneIcon className="size-8" />
          {site.phoneDisplay}
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {social.map(({ url, label, Icon }) =>
            url ? (
              <a key={label} href={url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">
                <Icon />
                {label}
              </a>
            ) : (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/25 px-5 py-3 text-white/60">
                <Icon />
                {label} · {c.soon}
              </span>
            ),
          )}
        </div>

        <p className="mt-10 flex items-start justify-center gap-2 text-sky-100">
          <PinIcon className="mt-0.5 size-5 shrink-0" />
          <span>
            <strong className="text-white">{c.areaLabel}:</strong> {site.serviceAreas.length ? site.serviceAreas.join(", ") : c.areaFallback}
          </span>
        </p>
      </div>
    </section>
  );
}
