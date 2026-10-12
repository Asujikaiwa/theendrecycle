/**
 * ข้อมูลร้าน — แก้ที่ไฟล์นี้ที่เดียว ทุกหน้า/ทุกภาษา/Schema จะอัปเดตตาม
 * สำคัญสำหรับ Google Business Profile: ชื่อ เบอร์ และพื้นที่บริการ
 * ต้องเขียน "เหมือนกันทุกตัวอักษร" ทั้งในเว็บ, GBP, Facebook และ TikTok
 */
export const site = {
  domain: "https://theendrecycle.com",
  brand: "TheEnd Recycle",
  brandTh: "ดิเอนด์ รีไซเคิล",

  // เบอร์โทร
  phoneDisplay: "080-009-9625",
  phoneE164: "+66800099625",

  // ลิงก์โซเชียล — ใส่ URL เต็มเมื่อพร้อม (ปล่อยว่าง = ปุ่มจะไม่แสดง)
  facebookUrl: "", // เช่น "https://www.facebook.com/theendrecycle"
  tiktokUrl: "", // เช่น "https://www.tiktok.com/@theendrecycle"
  googleBusinessUrl: "", // ลิงก์โปรไฟล์ Google หลังยืนยันเสร็จ (ใช้เป็น sameAs ใน Schema)

  // พื้นที่ให้บริการ (รับซื้อถึงที่) — ใส่จังหวัด/เขต เช่น ["กรุงเทพมหานคร", "นนทบุรี"]
  // ปล่อยว่าง = เว็บจะไม่ระบุพื้นที่
  serviceAreas: [] as string[],

  // เวลาทำการ (รูปแบบ schema.org) เช่น ["Mo-Sa 08:00-18:00"] — ปล่อยว่าง = ไม่ระบุ
  openingHours: [] as string[],
} as const;

export const telHref = `tel:${site.phoneE164}`;
