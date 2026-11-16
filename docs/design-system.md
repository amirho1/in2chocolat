# IN2 shared design system

## Principles
Mobile-first Persian RTL, clear product information, calm rounded surfaces, visible purchase actions, authentic brand assets, and honest commerce boundaries. Built with Next.js App Router, Tailwind v4 and shadcn Base UI. The source repositories were unavailable; this is an independent homepage review implementation, not a replacement for the live WordPress/WooCommerce installation.

## Verified brand tokens
Extracted from the public sites' `.in2-site-header` CSS on 2026-11-16.

| Semantic role | Bazar | Chocolate |
| --- | --- | --- |
| Brand | #B71C2C | #00A693 |
| Dark action shade | #941322 | #007F73 |
| Soft surface | #FFF1F3 | #E6F6F3 |
| Emphasized soft surface | #F9DFE3 | #CFEFEA |
| Ink | #171417 | #111111 |
| Muted text | #726A70 | #6B6B6B |
| Border | #EADDE0 | #E6E6E6 |
| Surface | #FFFFFF | #FFFFFF |

Tokens are in `app/globals.css`. `data-brand="bazar"` is on the root. For Chocolate, switch to `data-brand="chocolate"` and inject its content, logo and links; markup stays the same. Chocolate's existing darker teal is used for text-bearing primary actions to improve white-text contrast while retaining its original bright teal as `--brand`. Semantic success, warning and destructive tokens are available but are not used to invent stock or discount claims. No automatic dark theme: both existing identities are light, so OS dark mode must not silently recolor the store.

## Typography and spacing
Self-hosted, open-source Vazirmatn Variable replaces the live sites' proprietary IRANYekan/IRANSans fonts, whose redistribution licenses were not available. Body 16px, supporting copy 12–14px, product titles 16px, prices 18px, section headings 20–24px, hero heading 32–46px. Persian text uses 1.75–2 line heights. Prices use Intl.NumberFormat('fa-IR') and bdi isolation.

4px spacing base; primary gaps 12/16/20/24px; section padding 32px mobile and 44px desktop. Content max-width 1280px, 16px mobile gutters, 32px wider gutters. Radius scale 8/12/16/24/32px. Shadows limited to hover cards; ordinary surfaces use borders. Transitions 180ms, imagery 300ms; reduced motion disables animations and smooth scrolling.

## Component architecture
- `components/ui/`: shadcn Button, Badge, Sheet, Skeleton. Core button touch size is 44px; large is 48px.
- `components/store/store-header.tsx`: shared header, search, brand mark, controlled Sheet and compact mobile navigation.
- `section-heading.tsx`: heading, eyebrow and optional action link.
- `price.tsx`: current price, optional real original price and computed discount.
- `product-card.tsx`: server-rendered card with original image, complete title, price and purchase handoff.
- `product-section.tsx`: collection grid and optional editorial introduction; includes empty collection state.
- `home-sections.tsx`: hero, trust benefits, categories, existing brand campaigns, about and journal previews.
- `store-footer.tsx`: audited contact details, policies, original eNamad verification link and social links.
- `lib/store.ts`: typed, dated public-content snapshot isolated from presentation.

Product `available` is optional: omission means unknown, not in-stock. `available: false` shows an unavailable badge; no false add-to-cart success. Missing price shows a store price prompt. Original price is optional and must only be supplied from verified commerce data. Live variant selection, transactional buttons and cart feedback are deferred until a verified adapter is provided; the current action deliberately opens the real product page.

## Responsive and accessible patterns
Two-column product/category grids on small screens, three product columns on tablet, and a featured four-column arrangement on large screens. Every interactive icon has an accessible name. A labeled search form uses ordinary GET navigation; no custom Enter handler interferes with IME composition. Modal navigation uses Base UI focus management, escape dismissal and titles/descriptions. Bottom navigation has labels and a raised active home icon inspired by the supplied CodePen without copying its changing brand colors or whole-body animation. No essential action requires hover. Use logical spacing and bdi for mixed-direction prices.

## Extension
Extract store metadata and navigation into a brand configuration when the second storefront is implemented. Replace the source snapshot with the existing platform's server-side commerce adapter before production. Shared article previews, SectionHeading, typography, spacing and theme tokens can support a future blog index/article template, but this phase creates no blog or category/product routes. Existing article links remain on the original site.
