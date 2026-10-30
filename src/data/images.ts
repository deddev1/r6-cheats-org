import { R6_HERO, R6_SOLDIER, R6_COVER, R6_MENU, R6_ESP } from './media'
import { R6_OG, getOgImageForPath, PAGE_OG } from './og'

export { R6_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const R6_PRODUCT_HERO = R6_HERO
export const R6_PRODUCT_COVER = R6_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  r6: {
    alt: 'R6 cheats product artwork for Rainbow Six Siege on PC',
    title: 'R6 Cheats Product Details',
    caption: 'R6 Aimbot, ESP, wallhack, gadget ESP, radar hack and BattlEye compatibility',
    heroAlt: 'R6 cheats silent aim Aimbot and ESP features',
    heroTitle: 'R6 Cheats Features',
    heroCaption: 'Review R6 Aimbot, ESP, radar hack and current BattlEye status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: R6_SOLDIER,
    og: PAGE_OG.home,
    alt: 'R6 cheats Aimbot and ESP artwork for Rainbow Six Siege on PC',
    title: 'R6 Cheats',
    caption: 'R6 Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: R6_HERO,
    og: PAGE_OG.forums,
    alt: 'R6 cheats product artwork',
    title: 'R6 Cheats Forums',
    caption: 'Setup, Aimbot and ESP forum threads for R6.',
  },
  reviews: {
    src: R6_ESP,
    og: PAGE_OG.reviews,
    alt: 'R6 cheats review artwork',
    title: 'R6 Cheats Reviews',
    caption: 'Feature and compatibility feedback for Rainbow Six Siege.',
  },
  faq: {
    src: R6_MENU,
    og: PAGE_OG.faq,
    alt: 'R6 cheats FAQ artwork',
    title: 'R6 Cheats FAQ',
    caption: 'Compatibility, feature and setup answers for R6.',
  },
  support: {
    src: R6_HERO,
    og: PAGE_OG.support,
    alt: 'R6 cheats support artwork',
    title: 'R6 Cheats Support',
    caption: 'Delivery, loader and setup support for R6 cheats.',
  },
  product: {
    src: R6_COVER,
    og: PAGE_OG.product,
    alt: 'R6 cheat gameplay frame from product preview video',
    title: 'R6 Cheats Features',
    caption: 'Product details for R6 Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return R6_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return R6_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
