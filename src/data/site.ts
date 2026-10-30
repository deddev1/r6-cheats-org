import { R6_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://r6cheats.org'
export const SITE_NAME = 'R6 Cheats'
export const SITE_HOST = 'r6cheats.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Rainbow Six Siege cheats for PC (worldwide).
 * Canonical host is apex https://r6cheats.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy R6 cheats for Rainbow Six Siege on Windows PC — silent-aim Aimbot, player and gadget ESP, wallhack, radar hack and live BattlEye status with instant digital delivery.'

export const SITE_ABOUT = [
  'r6 cheats',
  'r6 cheat',
  'r6 hacks',
  'r6 hack',
  'rainbow six siege cheats',
  'r6 aimbot',
  'r6 esp',
  'r6 wallhack',
  'r6 radar hack',
  'battleye r6 cheats',
  'r6 cheat aimbot',
  'buy r6 cheats',
  'buy r6 cheat',
  'buy r6 hacks',
  'buy r6 hack',
  'buy rainbow six siege cheats',
  'buy r6 aimbot',
  'buy r6 esp',
  'buy r6 wallhack',
  'buy r6 radar hack',
] as const

/** Monthly license price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'
/** Lifetime license price shown on pricing. */
export const PRODUCT_LIFETIME_PRICE_USD = '150'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = R6_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'R6 Cheats | Aimbot, ESP & BattlEye Status',
    description:
      'R6 Cheats for Rainbow Six Siege — silent aim Aimbot, player and gadget ESP, wallhack and radar hack with live BattlEye status on Windows PC.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'R6 Cheats — Aimbot, ESP and BattlEye status for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Forums | R6 Setup, Aimbot, ESP & Status Threads',
    description:
      'Forums for Rainbow Six Siege setup — Aimbot, ESP, antivirus exclusions, loader steps and BattlEye status threads on r6cheats.org.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Forums — R6 setup threads and loader guides',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Reviews | R6 Buyer Ratings & Patch Feedback',
    description:
      'Reviews from Rainbow Six Siege buyers — ESP accuracy, BattlEye status honesty, loader delivery and how builds held after patches.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Reviews — buyer ratings for Rainbow Six Siege licenses',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'FAQ | R6 Price, BattlEye Status & Loader Setup',
    description:
      'FAQ for Rainbow Six Siege licenses — price, Aimbot and wallhack features, BattlEye status, servers, loader setup and delivery on PC.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'FAQ — price, BattlEye status and setup answers',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'R6 Cheats Support | Loader, Delivery & Setup Help',
    description:
      'Support: Get help buying and loading R6 cheats — delivery email, Windows setup, antivirus exclusions, loader errors and BattlEye status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'R6 Cheats support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'ESP Wallhack | R6 Aimbot, Gadget ESP & Radar',
    description:
      'ESP wallhack for Rainbow Six Siege — player boxes, gadget highlighting, silent aim Aimbot and radar overlay with live BattlEye status. From $35.',
    path: '/r6-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'ESP wallhack — R6 player boxes, gadget ESP and Aimbot preview',
    robots: INDEX_ROBOTS,
  },
  pricing: {
    title: 'Buy R6 Cheats | $35 Monthly & $150 Lifetime',
    description:
      'Buy R6 Cheats — $35 monthly or $150 lifetime with Aimbot, ESP, wallhack and radar. Check BattlEye status, then checkout for instant digital delivery.',
    path: '/pricing',
    ogType: 'website',
    image: PAGE_OG.pricing,
    imageAlt: 'Buy R6 Cheats — $35 monthly and $150 lifetime pricing',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'R6 Cheats — Aimbot, ESP & Hacks',
  h2Features: 'R6 Aimbot, ESP, gadget ESP & radar hack',
  h2About: 'Clear BattlEye status before you checkout',
  h2Access: 'Get your license',
  h2Faq: 'Questions before checkout',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
