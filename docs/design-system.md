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

Tokens are in `app/globals.css`. `data-brand="chocolate"` is active in this separate color variant. Chocolate’s logo, imagery, categories, product snapshot and purchase links are used. Chocolate's existing darker teal is used for text-bearing primary actions to improve white-text contrast while retaining its original bright teal as `--brand`. Semantic success, warning and destructive tokens are available but are not used to invent stock or discount claims. No automatic dark theme: both existing identities are light, so OS dark mode must not silently recolor the store.

## Typography and spacing
IRANYekanX Variable is self-hosted from the user-supplied WOFF2 file in `app/fonts/IRANYekanXVF.woff2`. Next.js preloads it through `next/font/local`, and the shared sans font applies it throughout the site, including form controls and navigation. The font supports weights 100–1000. Body 16px, supporting copy 12–14px, product titles 12px mobile / 16px desktop, prices 14px mobile / 18px desktop, section headings 16px mobile / 24px desktop, hero heading 32–46px. Persian text uses 1.75–2 line heights. Prices use Intl.NumberFormat('fa-IR') and bdi isolation.

4px spacing base; primary gaps 12/16/20/24px; section padding 32px mobile and 44px desktop. Content max-width 1280px, 16px mobile gutters, 32px wider gutters. Radius scale 8/12/16/24/32px. Shadows limited to hover cards; ordinary surfaces use borders. Transitions 180ms, imagery 300ms, bottom navigation 650ms; reduced motion disables animations and smooth scrolling. Action buttons use the emphasized mint surface and dark teal text, changing to the dark teal background and white text on hover. Hamburger hover uses the secondary surface; journal cards use gray on hover.

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
Product collections use horizontal snap scrolling on small screens, showing two cards and part of the next; category grids retain two columns. Product grids use three columns on tablet and four columns on large screens. The two category collections show four product cards each; the featured collection pairs three products with its editorial introduction. Product titles clamp to two lines, while journal descriptions clamp to three. Every interactive icon has an accessible name. A labeled search form uses ordinary GET navigation; no custom Enter handler interferes with IME composition. Modal navigation uses Base UI focus management, escape dismissal and titles/descriptions. The mobile header puts the logo on the right and hamburger on the left, hides the cart, and reveals search from the bottom bar with a mobile-only blurred backdrop. Clicking the backdrop or pressing Escape closes search and restores focus to its toggle. The menu sheet opens from the right. Bottom navigation centers Home and adapts the sliding wave and raised active icon from [abxlfazl’s Animated Tab Bar](https://codepen.io/abxlfazl/pen/VwKzaEm) to RTL and the store palette. The wave follows the selected action and respects reduced motion. No essential action requires hover. Use logical spacing and bdi for mixed-direction prices.

## Extension
The Chocolate storefront is a separate repository cloned from in2bazar, with its own content snapshot and deployment. Replace the source snapshot with the existing platform's server-side commerce adapter before production. Shared article previews, SectionHeading, typography, spacing and theme tokens can support a future blog index/article template, but this phase creates no blog or category/product routes. Existing article links remain on the original site.

The floating support symbol is decorative only, with an accessible label and no chat panel or click behavior. It follows the store palette and stays above mobile navigation.
