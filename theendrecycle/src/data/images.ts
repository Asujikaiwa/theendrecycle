/**
 * รูปทั้งหมดเป็น "ภาพถ่ายจริง" จากช่างภาพ ไม่ใช่ภาพ AI
 * - Unsplash: ใช้ฟรีเชิงพาณิชย์ได้ (Unsplash License) ไม่บังคับให้เครดิต แต่เราให้เครดิตไว้
 * - Wikimedia Commons: Public Domain / CC0 / CC BY / CC BY-SA — ต้องให้เครดิตผู้ถ่าย + ลิงก์สัญญาอนุญาต
 *   (ทำไว้แล้วที่หน้า /photo-credits และบรรทัดเครดิตใต้รูป)
 *
 * อยากโหลดรูปมาเก็บในเว็บเอง (เร็วขึ้น ไม่ต้องพึ่งเว็บต้นทาง): รัน `npm run images:download`
 * แล้วเปลี่ยน USE_LOCAL_IMAGES เป็น true
 *
 * ⚠️ อย่านำรูปชุดนี้ไปอัปโหลดใน Google Business Profile — Google ต้องการรูปของร้านจริง
 */
export const USE_LOCAL_IMAGES = false;

export type License = "Unsplash License" | "Public domain" | "CC0" | "CC BY 2.0" | "CC BY-SA 2.5" | "CC BY-SA 3.0" | "CC BY-SA 4.0";

export interface Photo {
  id: string;
  remote: string;
  author: string;
  source: "Unsplash" | "Wikimedia Commons";
  sourceUrl: string;
  license: License;
  licenseUrl: string;
  /** สิ่งที่อยู่ในรูป (ภาษาอังกฤษ ใช้ทำ alt เสริม) */
  subject: string;
}

const LIC: Record<License, string> = {
  "Unsplash License": "https://unsplash.com/license",
  "Public domain": "https://creativecommons.org/publicdomain/mark/1.0/",
  CC0: "https://creativecommons.org/publicdomain/zero/1.0/",
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC BY-SA 2.5": "https://creativecommons.org/licenses/by-sa/2.5/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

const unsplash = (id: string, photo: string, author: string, subject: string): Photo => ({
  id,
  remote: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1600&q=70`,
  author,
  source: "Unsplash",
  sourceUrl: `https://unsplash.com/photos/${photo}`,
  license: "Unsplash License",
  licenseUrl: LIC["Unsplash License"],
  subject,
});

const commons = (id: string, file: string, author: string, license: License, subject: string): Photo => ({
  id,
  remote: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1280`,
  author,
  source: "Wikimedia Commons",
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`,
  license,
  licenseUrl: LIC[license],
  subject,
});

export const photos = {
  hero: unsplash("hero", "photo-1722695694560-f452b0919d3a", "yasin hemmati", "Excavator grabbing a pile of scrap metal"),
  yard: unsplash("yard", "photo-1617303331806-3d6b58e03241", "Evan Demicoli", "Scrap yard under blue sky"),
  steelYard: commons("steelYard", "Scrap Metal (Eugene, Oregon).jpg", "Visitor7", "CC BY-SA 3.0", "Steel scrap yard with material handler"),
  steelPieces: unsplash("steelPieces", "photo-1567093322492-f124e4caa330", "Jonathan Borba", "Pile of steel parts"),
  aluScrap: commons("aluScrap", "DillingenAluminiumSchrott.jpg", "Lokilech", "CC BY-SA 3.0", "Aluminium scrap pile"),
  aluCans: unsplash("aluCans", "photo-1561503412-852800622772", "Evgeny Karchevsky", "Crushed aluminium cans"),
  brassFittings: unsplash("brassFittings", "photo-1636624679304-232a9ca54736", "Ivan Di", "Pile of brass fittings"),
  brassShavings: commons("brassShavings", "Sweep of 'Gold'.JPG", "BronxAquarian", "CC BY-SA 4.0", "Brass shavings from a machine"),
  brassItems: unsplash("brassItems", "photo-1541617392762-9bd12653bd12", "Matt Seymour", "Old brass and copper hardware"),
  copperWire: unsplash("copperWire", "photo-1640602344715-a6ef5c281037", "Árpád Czapp", "Tangle of copper wires"),
  copperChopped: commons("copperChopped", "FEMP 18 219 (27367351003).jpg", "U.S. Department of Energy", "Public domain", "Processed copper wire for recycling"),
  aluSwarf: commons("aluSwarf", "BS VW Aluminium Swarf.JPG", "TeWeBs", "CC BY-SA 4.0", "Container of aluminium swarf (turnings)"),
  truck: commons("truck", "Workers loading scrap metal on board a truck for recycling.jpg", "Tino Munemo", "CC BY-SA 4.0", "Workers loading scrap metal onto a truck"),
  shop: commons("shop", "Scrap metal in Vietnam (25151817287).jpg", "Vinnie Cartabiano", "CC BY 2.0", "Scrap metal shop in Vietnam"),
  bales: commons("bales", "Steel recycling bales.jpg", "blahedo", "CC BY-SA 2.5", "Baled steel scrap"),
  pressed: unsplash("pressed", "photo-1671362935207-d9abfc5b9509", "Bob Brewer", "Pile of compressed scrap metal"),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export function src(p: Photo, width?: number) {
  if (USE_LOCAL_IMAGES) return `/images/${p.id}.jpg`;
  if (!width) return p.remote;
  return p.source === "Unsplash"
    ? p.remote.replace("w=1600", `w=${width}`)
    : p.remote.replace("width=1280", `width=${width}`);
}

export const creditLine = (p: Photo) => `Photo: ${p.author} · ${p.source} · ${p.license}`;
