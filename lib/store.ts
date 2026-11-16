export const STORE_URL = 'https://in2chocolate.com'
export const sourceDate = '2026-11-16'
export const storeLink = (path: string) => `${STORE_URL}${path}`

export type Category = { title: string; slug: string; image?: string; caption?: string }
export type Product = {
  id: string
  name: string
  brand: string
  image: string
  price: number | null
  originalPrice?: number
  available?: boolean
}

export const categories: Category[] = [
  { title: 'شکلات', slug: 'chocolate', image: '/images/chocolate/icon-chocolate.webp', caption: 'یک تکه حال خوب' },
  { title: 'صبحانه و کرم‌ها', slug: 'breakfast-spreads', image: '/images/chocolate/icon-breakfast.webp', caption: 'شروعی شیرین برای روز شما' },
  { title: 'قهوه و نوشیدنی گرم', slug: 'coffee-hot-drinks', image: '/images/chocolate/icon-coffe.webp', caption: 'عطر یک لحظه آرامش' },
  { title: 'نوشیدنی سرد', slug: 'cold-drinks', image: '/images/chocolate/icon-drink.webp', caption: 'تازه و خوش‌طعم' },
  { title: 'بیسکویت و ویفر', slug: 'biscuits-wafers' },
  { title: 'پاستیل و مارشمالو', slug: 'gummies-marshmallows' },
  { title: 'شکلات دراژه‌ای', slug: 'chocolate-dragees' },
  { title: 'شکلات تخته‌ای', slug: 'chocolate-tablets' },
  { title: 'دانه قهوه', slug: 'coffee-bean' },
  { title: 'قهوه فوری', slug: 'instant-coffee' },
]
export const categoryLink = (slug: string) => storeLink(`/product-category/${slug}/`)
export const productLink = (id: string) => storeLink(`/product/${id}/`)

export const bestsellers: Product[] = [
  {
    "id": "bebeto-003",
    "name": "پاستیل ببتو هندوانه 80 گرمی",
    "brand": "BEBETO",
    "price": 165000,
    "image": "/images/chocolate/bebeto-003-1-300x300.webp"
  },
  {
    "id": "albeni-002",
    "name": "شکلات آلبنی اولکر بسته 18 عددی",
    "brand": "ÜLKER",
    "price": 2400000,
    "image": "/images/chocolate/albeni-002-1-300x300.webp"
  },
  {
    "id": "bebeto-011",
    "name": "پاستیل ببتو طرح بستنی 80 گرمی",
    "brand": "BEBETO",
    "price": 165000,
    "image": "/images/chocolate/bebeto-011-1-300x300.webp"
  }
]

export const chocolates: Product[] = [
  {
    "id": "mars-003",
    "name": "شکلات مارس 50 گرمی بسته 36 عددی",
    "brand": "MARS",
    "price": 9165000,
    "image": "/images/chocolate/mars-003-1-300x300.webp"
  },
  {
    "id": "snickers-003",
    "name": "شکلات اسنیکرز 50 گرمی بسته 48 عددی",
    "brand": "SNICKERS",
    "price": 12220000,
    "image": "/images/chocolate/snickers-003-1-300x300.webp"
  },
  {
    "id": "albeni-002",
    "name": "شکلات آلبنی اولکر بسته 18 عددی",
    "brand": "ÜLKER",
    "price": 2400000,
    "image": "/images/chocolate/albeni-002-1-300x300.webp"
  },
  {
    "id": "metro-002",
    "name": "شکلات مترو کلاسیک 50.4 گرمی بسته 18 عددی",
    "brand": "ÜLKER",
    "price": 2400000,
    "image": "/images/chocolate/metro-002-1-300x300.webp"
  },
  {
    "id": "kitkat-012",
    "name": "کیت کت 4 انگشتی بسته 24 عددی",
    "brand": "KITKAT",
    "price": 4800000,
    "image": "/images/chocolate/kitkat-012-1-300x300.webp"
  },
  {
    "id": "hobby-002",
    "name": "شکلات هوبی اولکر بسته 24 عددی",
    "brand": "ÜLKER",
    "price": 1965000,
    "image": "/images/chocolate/hobby-002-1-300x300.webp"
  }
]

export const coffees: Product[] = [
  {
    "id": "nestle-001",
    "name": "کافی میت بدون کلسترول نستله 400 گرمی",
    "brand": "NESTLÉ",
    "price": 1310000,
    "image": "/images/chocolate/nestle-001-1-300x300.webp"
  },
  {
    "id": "lavazza-004",
    "name": "قهوه لاواتزا کوالیتا اورو 250 گرمی",
    "brand": "LAVAZZA",
    "price": 2765000,
    "image": "/images/chocolate/lavazza-004-300x300.webp"
  },
  {
    "id": "lavazza-001",
    "name": "قهوه لاواتزا اسپرسو ایتالیانو 250 گرمی",
    "brand": "LAVAZZA",
    "price": 2765000,
    "image": "/images/chocolate/lavazza-001-300x300.webp"
  },
  {
    "id": "mehmet-002",
    "name": "پودر قهوه ترک مهمت افندی 250 گرمی",
    "brand": "MEHMET EFENDİ",
    "price": 1820000,
    "image": "/images/chocolate/mehmet-002-300x300.webp"
  },
  {
    "id": "mehmet-001",
    "name": "پودر قهوه ترک مهمت افندی 100 گرمی",
    "brand": "MEHMET EFENDİ",
    "price": 800000,
    "image": "/images/chocolate/mehmet-001-300x300.webp"
  },
  {
    "id": "jacobs-008",
    "name": "قهوه فوری جاکوبز گلد 200 گرمی",
    "brand": "JACOBS",
    "price": 2690000,
    "image": "/images/chocolate/jacobs-008-300x300.webp"
  }
]

export const articles = [
  {
    "title": "خرید قسطی در ایندو چاکلت فعال شد",
    "description": "خرید اقساطی از ایندو چاکلت با ترب‌پی؛ قیمت، مراحل پرداخت و مرجوعی را بررسی کنید.",
    "path": "/installment-shopping/",
    "tag": "راهنمای خرید"
  },
  {
    "title": "نحوه ارسال کالا در ایندو چاکلت",
    "description": "روش‌های ارسال ایندو چاکلت در تهران و شهرستان‌ها، نحوه محاسبه هزینه و شرط ارسال رایگان بالای ۵ میلیون تومان را بشناسید.",
    "path": "/in2chocolate-shipping/",
    "tag": "ارسال سفارش"
  },
  {
    "title": "شروع به کار فروشگاه آنلاین ایندو چاکلت",
    "description": "ایندو چاکلت با تمرکز بر شکلات، قهوه و خوراکی‌های خارجی آغاز به کار کرد.",
    "path": "/in2chocolate-launch/",
    "tag": "داستان ایندو چاکلت"
  }
]
