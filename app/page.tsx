import { StoreHeader } from '@/components/store/store-header'
import { Hero, Benefits, Categories, BrandBanners, AboutStore, JournalPreview } from '@/components/store/home-sections'
import { ProductSection } from '@/components/store/product-section'
import { StoreFooter } from '@/components/store/store-footer'
import { bestsellers, chocolates, coffees, storeLink, categoryLink } from '@/lib/store'

export default function Page() {
  return <>
    <StoreHeader />
    <main id="main">
      <Hero />
      <Benefits />
      <Categories />
      <ProductSection id="bestsellers" title="محبوب شما، منتخب ایندو" eyebrow="پرفروش‌ترین‌های فروشگاه" products={bestsellers} href={storeLink('/shop/')} featured />
      <BrandBanners />
      <ProductSection id="chocolates" title="شکلات‌های دوست‌داشتنی" eyebrow="یک تکه حال خوب" products={chocolates} href={categoryLink('chocolate')} />
      <AboutStore />
      <ProductSection id="coffees" title="قهوه و نوشیدنی‌های گرم" eyebrow="عطر لحظه‌های آرام" products={coffees} href={categoryLink('coffee-hot-drinks')} />
      <JournalPreview />
    </main>
    <StoreFooter />
  </>
}
