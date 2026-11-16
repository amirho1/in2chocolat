export const STORE_URL = 'https://in2bazar.com'
export const sourceDate = '2026-11-16'
export const storeLink = (path: string) => `${STORE_URL}${path}`
export const media = (path: string) => `/images/${path.split('/').pop()}`

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
  { title: 'لباس خواب', slug: 'women-homewear-set', image: media('uploads/2026/06/icon-homewear-f.webp'), caption: 'راحتی، به سبک شما' },
  { title: 'بادی زنانه', slug: 'women-bodysuit', image: media('uploads/2026/06/icon-body-f.webp'), caption: 'جزئیاتِ دوست‌داشتنی' },
  { title: 'کاستوم زنانه', slug: 'women-costume', image: media('uploads/2026/06/icon-costume-f.webp'), caption: 'انتخابی متفاوت' },
  { title: 'سرهمی زنانه', slug: 'women-jumpsuit', image: media('uploads/2026/06/icon-jumpsuit-f.webp'), caption: 'خاص، درست مثل شما' },
  { title: 'ست زنانه', slug: 'women-set' },
  { title: 'پیراهن', slug: 'women-dresse' },
  { title: 'تونیک', slug: 'women-tunic' },
  { title: 'نیم‌تنه', slug: 'women-top' },
  { title: 'شورت', slug: 'women-underwear-bottom' },
  { title: 'جوراب', slug: 'women-socks' },
]
export const categoryLink = (slug: string) => storeLink(`/product-category/women/${slug}/`)
export const productLink = (id: string) => storeLink(`/product/${id}/`)

export const bestsellers: Product[] = [
  { id: 'roxyrose-1206', name: 'لباس خواب زنانه فانتزی حریر رنگی روکسی رز', brand: 'ROXY ROSE', price: 1974000, image: media('uploads/2026/05/roxyrose-1206-1-300x450.webp') },
  { id: 'lovele-8070', name: 'لباس خواب زنانه پاپیونی پلنگی لاولی', brand: 'LOVELE', price: 1089000, image: media('uploads/2026/09/lovele-8070-1-300x450.webp') },
  { id: 'mylove-234', name: 'جوراب شلواری زنانه زنبوری درشت مشکی مای لاو', brand: 'MY LOVE', price: 385000, image: media('uploads/2026/08/mylove-234-1-300x450.webp') },
]
export const jumpsuits: Product[] = [
  { id: 'kenzo-1645', name: 'سرهمی زنانه دانتل کاپ فنردار مشکی کنزو', brand: 'KENZO', price: 1666000, image: media('uploads/elementor/thumbs/kenzo-1645-1-rw284el6v70tu9iospmllaoxckfoivwqc258gv7ge0.webp') },
  { id: 'tifa-2021', name: 'سرهمی زنانه جوراب‌دار حریر و دانتل مشکی تیفا', brand: 'TIFA', price: 1678000, image: media('uploads/elementor/thumbs/tifa-2021-1-rtty4i29du8l2fa7re303wjxbpvkw5pcicj8du7iyg.webp') },
  { id: 'lavina-y26', name: 'سرهمی زنانه بند پهن طرح‌دار مشکی لاوینا', brand: 'LAVINA', price: 618000, image: media('uploads/elementor/thumbs/lavina-y26-1-roxigj20xpz2uungecyq5y9kczry2ugp0kaz3gmnqw.webp') },
  { id: 'krishna-1899', name: 'سرهمی زنانه گارتر‌دار زنجیری رنگی کریشنا', brand: 'KRISHNA', price: 1258000, image: media('uploads/elementor/thumbs/krishna-1899-1-rowi4kmuyzhbgmj3xzlll0cyp2ix93yv6s5okby5yw.webp') },
  { id: 'harny-1249', name: 'سرهمی زنانه فنری قلبی رنگی هارنی', brand: 'HARNY', price: 1118000, image: media('uploads/elementor/thumbs/harny-1249-1-ro87wh4hs8jvn5iaw022cvtwhchkw5x86d1k97xwhk.webp') },
  { id: 'tifa-2028', name: 'سرهمی زنانه مشکی تیفا', brand: 'TIFA', price: 1538000, image: media('uploads/elementor/thumbs/tifa-2028-1-rob3b6xd4so59y1yu5zmigwl0now56um03kqmw8ddk.webp') },
]
export const sets: Product[] = [
  { id: 'shein-634', name: 'ست تاپ و شورت زنانه کیت فوتبالی شین', brand: 'SHEIN', price: 1078000, image: media('uploads/2026/10/shein-634-1-300x450.webp') },
  { id: 'gloria-1212', name: 'ست زنانه ۲ تکه فنردار دانتل رنگی گلوریا', brand: 'GLORIA', price: 1258000, image: media('uploads/2026/09/gloria-1212-1-300x450.webp') },
  { id: 'gloria-1232', name: 'ست زنانه فانتزی فنردار دانتل رنگی گلوریا', brand: 'GLORIA', price: 1348000, image: media('uploads/2026/09/gloria-1232-1-300x450.webp') },
  { id: 'fitan-3356', name: 'ست زنانه ۲ تکه فانتزی جین فیتان', brand: 'FITAN', price: 1680000, image: media('uploads/2026/09/fitan-3356-1-300x450.webp') },
  { id: 'feloriya-022', name: 'ست زنانه ۴ تکه فنردار فلامنت رنگی فلوریا', brand: 'FELORIYA', price: 1258000, image: media('uploads/2026/09/feloriya-022-1-300x450.webp') },
  { id: 'krishna-1912', name: 'ست زنانه ۴ تکه فانتزی رنگی با دانتل سفید کریشنا', brand: 'KRISHNA', price: 1358000, image: media('uploads/2026/09/krishna-1912-1-300x450.webp') },
]
export const articles = [
  { title: 'خرید قسطی، انتخابی راحت‌تر', description: 'خرید از ایندو با ترب‌پی و دیجی‌پی فعال شد.', path: '/installment-shopping-torob-pay-digipay/', tag: 'راهنمای خرید' },
  { title: 'خیالتان از حریم خصوصی راحت', description: 'درباره بسته‌بندی ساده و ارسال محرمانه سفارش‌ها.', path: '/indo-discreet-packaging/', tag: 'همراه شما' },
  { title: 'حال‌وهوای فوتبالی، به سبک شما', description: 'ست تاپ و شورت شین برای روزهای جام جهانی.', path: '/football-kit-top-shorts-shein/', tag: 'مجله ایندو' },
]
