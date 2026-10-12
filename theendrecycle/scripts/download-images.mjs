// ดาวน์โหลดรูปทั้งหมดมาเก็บที่ public/images/ เพื่อให้เว็บโหลดรูปจากโดเมนตัวเอง
// วิธีใช้:  npm run images:download   แล้วแก้ USE_LOCAL_IMAGES = true ใน src/data/images.ts
import { mkdir, writeFile, readFile } from "node:fs/promises";

const file = await readFile(new URL("../src/data/images.ts", import.meta.url), "utf8");
const out = new URL("../public/images/", import.meta.url);
await mkdir(out, { recursive: true });

const items = [];
for (const m of file.matchAll(/unsplash\("(\w+)", "([\w-]+)"/g)) {
  items.push([m[1], `https://images.unsplash.com/${m[2]}?auto=format&fit=crop&w=1600&q=75&fm=jpg`]);
}
for (const m of file.matchAll(/commons\("(\w+)", "([^"]+)"/g)) {
  items.push([m[1], `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(m[2])}?width=1600`]);
}

for (const [id, url] of items) {
  const res = await fetch(url, { headers: { "User-Agent": "theendrecycle.com image downloader (contact: site owner)" } });
  if (!res.ok) {
    console.error(`✗ ${id}: HTTP ${res.status}`);
    continue;
  }
  await writeFile(new URL(`${id}.jpg`, out), Buffer.from(await res.arrayBuffer()));
  console.log(`✓ ${id}.jpg`);
}
