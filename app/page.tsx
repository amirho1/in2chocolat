import { StoreHeader } from '@/components/store/store-header'
import { Hero, Benefits, Categories, BrandBanners, AboutStore, JournalPreview } from '@/components/store/home-sections'
import { ProductSection } from '@/components/store/product-section'
import { StoreFooter } from '@/components/store/store-footer'
import { bestsellers, jumpsuits, sets, storeLink, categoryLink } from '@/lib/store'

export default function Page() {
  return <>
    <StoreHeader />
    <main id="main">
      <Hero />
      <Benefits />
      <Categories />
      <ProductSection id="bestsellers" title="محبوب شما، منتخب ایندو" eyebrow="پرفروش‌ترین‌های فروشگاه" products={bestsellers} href={storeLink('/shop/')} featured />
      <BrandBanners />
      <ProductSection id="jumpsuits" title="سرهمی‌های زنانه" eyebrow="ظرافت در هر جزئیات" products={jumpsuits} href={categoryLink('women-jumpsuit')} />
      <AboutStore />
      <ProductSection id="sets" title="ست‌های زنانه" eyebrow="هماهنگیِ دوست‌داشتنی" products={sets} href={categoryLink('women-set')} />
      <JournalPreview />
    </main>
    <StoreFooter />
  </>
}
