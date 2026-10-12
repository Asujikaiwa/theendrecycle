import type { Dict } from "./th";

const zh: Dict = {
  meta: {
    title: "泰国废金属回收 上门收购废铁、铝、黄铜、紫铜 | TheEnd Recycle",
    description:
      "TheEnd Recycle 上门回收各类废金属：废铁、铝、黄铜、紫铜，整件、碎料、车床屑均可。今日价格请致电 080-009-9625。",
    keywords: ["泰国废金属回收", "曼谷废铁回收", "上门回收废金属", "废铜回收", "黄铜回收", "废铝回收", "金属屑回收", "今日废铁价格"],
  },
  nav: { materials: "回收范围", forms: "任何形态", process: "回收流程", faq: "常见问题", contact: "联系我们" },
  hero: {
    badge: "上门回收",
    h1a: "回收废铁、铝、",
    h1b: "黄铜、紫铜",
    sub: "各类金属一律回收——整件、碎料或车床屑都可以。告诉我们您有什么，报价后我们上门收货。",
    ctaCall: "致电询价",
    ctaMaterials: "查看回收范围",
    chips: ["铁", "铝", "黄铜", "紫铜"],
    photoAlt: "挖掘机在废金属堆上作业",
  },
  trust: [
    { t: "上门回收", d: "无需自己运输，住家、店铺、工地、工厂都可上门" },
    { t: "任何形态", d: "整件、碎料、车床屑、锉屑，混装也可以" },
    { t: "先问价再决定", d: "金属价格每天随市场波动，欢迎先来电确认" },
    { t: "当面过磅", d: "当面称重，按实际重量计价" },
  ],
  materials: {
    title: "四大类金属回收",
    sub: "其他金属也欢迎拍照发给我们或来电咨询。",
    examplesLabel: "回收示例",
    items: [
      {
        key: "steel",
        name: "铁 / 钢",
        desc: "各种等级的废铁：厚料、薄料、结构钢以及铁屑。",
        examples: ["型钢、钢筋", "钢板、铁皮", "钢架、旧机器", "铸铁", "铁车床屑、铁屑"],
        photos: ["steelYard", "steelPieces"],
        alts: ["废钢场与抓料机", "一堆旧钢铁零件"],
      },
      {
        key: "aluminium",
        name: "铝",
        desc: "易拉罐、铝框、生活用品以及工厂铝屑。",
        examples: ["饮料易拉罐", "铝窗框、纱窗", "铝锅、铝盆", "铸铝、铝合金轮毂", "铝车床屑"],
        photos: ["aluScrap", "aluCans"],
        alts: ["一堆废铝", "压扁的铝罐"],
      },
      {
        key: "brass",
        name: "黄铜",
        desc: "黄铜件、水暖配件以及车削产生的黄铜屑。",
        examples: ["水龙头、阀门", "管件接头", "门把手、门锁", "黄铜整件", "黄铜车床屑"],
        photos: ["brassFittings", "brassShavings"],
        alts: ["一堆黄铜接头", "机器产生的黄铜屑"],
      },
      {
        key: "copper",
        name: "紫铜",
        desc: "电线、铜管以及电工、空调工程的废铜。",
        examples: ["电线电缆（已剥皮/未剥皮）", "铜管、空调铜管", "冷凝器、蒸发器铜排", "铜杆、铜板", "铜米"],
        photos: ["copperWire", "copperChopped"],
        alts: ["一团铜线", "回收电缆加工后的铜米"],
      },
    ],
  },
  forms: {
    title: "整件、碎料、车床屑——全部回收",
    sub: "不必事先分类，但分开不同金属可以更快、更准确地报价。",
    items: [
      { t: "整件", d: "零件、结构件、旧机器、淘汰设备", photo: "brassItems", alt: "旧黄铜和铜五金件" },
      { t: "碎料", d: "切割边角料、工地及拆除废料", photo: "pressed", alt: "一堆压缩废金属" },
      { t: "车床屑 / 锉屑", d: "车床厂和工厂的铁、铝、黄铜、紫铜屑", photo: "aluSwarf", alt: "装满铝屑的容器" },
    ],
  },
  process: {
    title: "四步轻松卖废料",
    sub: "我们上门回收，您只需打个电话。",
    steps: [
      { t: "来电或留言", d: "告诉我们金属种类、大约数量和地址，附上照片更快。" },
      { t: "初步报价", d: "按种类和状况、参考当日市场价报价。" },
      { t: "预约上门", d: "工作人员按约定时间开车上门收货。" },
      { t: "过磅收款", d: "当面称重，按实际重量结算。" },
    ],
    photo: "truck",
    photoAlt: "工人将废金属装上卡车",
  },
  gallery: {
    title: "我们回收的废料类型",
    sub: "回收物品示例（示意图）",
    items: [
      { photo: "shop", alt: "废金属回收店" },
      { photo: "bales", alt: "打包的废钢" },
      { photo: "yard", alt: "废料场" },
      { photo: "copperWire", alt: "铜线" },
      { photo: "brassFittings", alt: "黄铜接头" },
      { photo: "aluCans", alt: "铝罐" },
    ],
  },
  faq: {
    title: "常见问题",
    items: [
      { q: "今天的回收价格是多少？", a: "金属价格每天随市场变化，并取决于种类、等级和洁净程度。请致电 080-009-9625 询问最新价格。" },
      { q: "可以上门回收吗？", a: "可以。告诉我们地址和数量，我们会预约上门时间。" },
      { q: "需要先分类吗？", a: "不需要，但把铁、铝、黄铜、紫铜分开，价格更好、报价更快。" },
      { q: "回收车床屑和锉屑吗？", a: "回收，包括车床厂和工厂的铁、铝、黄铜、紫铜屑。" },
      { q: "未剥皮的电线收吗？", a: "收，已剥皮和未剥皮都收，价格按含铜量而定。" },
      { q: "可以先发照片吗？", a: "可以。通过 Facebook 主页发照片或直接来电，有助于更准确报价。" },
    ],
  },
  contact: {
    title: "有废金属？马上来电",
    sub: "来电询价并预约上门回收。",
    call: "致电 080-009-9625",
    facebook: "Facebook 留言",
    tiktok: "TikTok 视频",
    areaLabel: "服务区域",
    areaFallback: "请告诉我们您的地址，我们会确认能否上门。",
    soon: "即将上线",
  },
  footer: { tagline: "上门回收废铁、铝、黄铜、紫铜", credits: "图片来源", rights: "版权所有" },
  credits: {
    title: "图片来源",
    intro: "本网站图片均为摄影师拍摄的真实照片，依据下列许可协议使用。感谢各位摄影师。",
    gbpNote: "这些为示意图片，并非本店场地或货品的实拍照片。",
    back: "返回首页",
    colPhoto: "图片",
    colAuthor: "作者 / 来源",
    colLicense: "许可协议",
  },
  floatCall: "立即致电",
  skip: "跳到正文",
};

export default zh;
