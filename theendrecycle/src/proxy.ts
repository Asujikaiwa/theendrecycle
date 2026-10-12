import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/** ส่งผู้เข้าชมที่เข้า URL ไม่มีภาษา (เช่น "/") ไปยังภาษาที่เหมาะสม */
function pickLocale(req: NextRequest) {
  const header = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const first = header.split(",")[0] ?? "";
  if (first.startsWith("zh")) return "zh";
  if (first.startsWith("en") && !header.includes("th")) return "en";
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // www.theendrecycle.com → theendrecycle.com (ให้ Google เห็นโดเมนเดียว)
  const host = req.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    return NextResponse.redirect(`https://${host.slice(4)}${pathname}${req.nextUrl.search}`, 301);
  }

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${pickLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // ไม่แตะไฟล์ระบบ รูป และไฟล์ SEO
  matcher: ["/((?!_next|images|api|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|.*\\..*).*)"],
};
