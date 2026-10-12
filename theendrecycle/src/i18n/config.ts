export const locales = ["th", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "th";

export const htmlLang: Record<Locale, string> = { th: "th", en: "en", zh: "zh-Hans" };
export const hreflang: Record<Locale, string> = { th: "th-TH", en: "en", zh: "zh-Hans" };
export const ogLocale: Record<Locale, string> = { th: "th_TH", en: "en_US", zh: "zh_CN" };
export const localeLabel: Record<Locale, string> = { th: "ไทย", en: "EN", zh: "中文" };

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
