import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// ทุกหน้าเป็น SSG (ไม่มี revalidate) — ใช้แคชแบบอ่านอย่างเดียวจาก static assets ไม่ต้องใช้ KV/R2
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
