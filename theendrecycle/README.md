# theendrecycle.com — เว็บรับซื้อเศษโลหะ

Next.js 16 + Tailwind CSS 4 · 3 ภาษา (`/th` `/en` `/zh`) · หน้าเดียวเน้นปุ่มโทร

## เริ่มใช้งาน

```bash
npm install
npm run dev        # เปิด http://localhost:3000 (จะเด้งไป /th อัตโนมัติ)
npm run build      # ทดสอบ build ก่อนขึ้นจริง
```

## ไฟล์ที่ต้องแก้บ่อย

| ต้องการแก้ | ไฟล์ |
|---|---|
| เบอร์โทร, ลิงก์ Facebook / TikTok / Google, พื้นที่บริการ, เวลาทำการ | `src/config/site.ts` |
| ข้อความภาษาไทย / อังกฤษ / จีน | `src/i18n/dictionaries/th.ts`, `en.ts`, `zh.ts` |
| รูปภาพและเครดิต | `src/data/images.ts` |
| สี | `src/app/globals.css` (ส่วน `@theme`) |

## รูปภาพ

- ทุกรูปเป็น **ภาพถ่ายจริง** (ไม่ใช่ AI) จาก Unsplash และ Wikimedia Commons ใช้เชิงพาณิชย์ได้ตามสัญญาอนุญาต
- รูปจาก Wikimedia ที่เป็น CC BY / CC BY-SA **ต้องมีเครดิต** — ทำไว้แล้วทั้งบรรทัดเล็กใต้รูปและหน้า `/th/photo-credits` ห้ามลบออก
- ตอนนี้รูปโหลดตรงจากเว็บต้นทาง ถ้าอยากเก็บไว้ในเว็บเอง: `npm run images:download` แล้วเปลี่ยน `USE_LOCAL_IMAGES = true` ใน `src/data/images.ts`
- **อย่าอัปโหลดรูปชุดนี้ขึ้น Google Business Profile** ให้ใช้รูปจริงของร้าน (ลาน รถ ตาชั่ง ทีมงาน กองของจริง)
- เมื่อมีรูปจริงของร้าน: วางไฟล์ใน `public/images/` แล้วเพิ่มรายการใน `images.ts` (ไม่ต้องใส่เครดิต)

## ขึ้นเว็บจริง (Vercel)

1. push โปรเจกต์ขึ้น GitHub → Vercel → New Project → Import
2. Settings → Domains → เพิ่ม `theendrecycle.com` และ `www.theendrecycle.com`
3. ไปที่ผู้ให้บริการโดเมน ตั้ง DNS ตามที่ Vercel บอก (A record `@` และ CNAME `www`)

## เชื่อม Google Business Profile

1. สร้างโปรไฟล์ที่ business.google.com
   - ประเภทธุรกิจ: **Scrap metal dealer** (ร้านรับซื้อเศษโลหะ)
   - เลือก **"ฉันส่งสินค้าและบริการให้ลูกค้า"** (Service-area business) เพราะเป็นแบบรับซื้อถึงที่ จะซ่อนที่อยู่ได้
   - ใส่พื้นที่บริการ, เบอร์ 080-009-9625, เว็บไซต์ `https://theendrecycle.com/th`
2. ชื่อ เบอร์ และพื้นที่บริการ ต้องเขียนเหมือนกันทุกที่ (เว็บ, GBP, Facebook, TikTok)
3. ยืนยันตัวตนเสร็จแล้ว คัดลอกลิงก์โปรไฟล์มาใส่ `googleBusinessUrl` ใน `src/config/site.ts`
4. ใส่ `serviceAreas` และ `openingHours` ใน `site.ts` ให้ตรงกับ GBP
5. สมัคร Google Search Console → ยืนยันโดเมน → ส่ง `https://theendrecycle.com/sitemap.xml`

## SEO ที่ทำไว้แล้ว

- URL แยกภาษา `/th` `/en` `/zh` + hreflang + x-default
- Schema `RecyclingCenter` (ธุรกิจท้องถิ่น) + `FAQPage` + `WebSite`
- `sitemap.xml`, `robots.txt`, Open Graph สำหรับแชร์ลิงก์ใน Facebook / LINE
