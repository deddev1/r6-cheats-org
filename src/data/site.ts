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
    title: 'R6 Cheats Forums | Aimbot, ESP, Radar & Status',
    description:
      'R6 cheats forums — silent aim, player and gadget ESP, radar hack, antivirus exclusions, loader setup and BattlEye status threads before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'R6 Cheats setup forums for Aimbot, ESP and BattlEye',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'R6 Cheats Reviews | Buyer Feedback on R6 Hacks',
    description:
      'Read R6 cheats reviews covering silent aim, player ESP, gadget ESP and BattlEye rebuilds before you buy a Rainbow Six Siege license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'R6 Cheats buyer reviews for Rainbow Six Siege',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'R6 Cheats FAQ | Price, BattlEye Status & Setup',
    description:
      'FAQ for buying R6 cheats on Windows PC — price, Aimbot and ESP features, BattlEye status, private server support, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'R6 Cheats FAQ — price, BattlEye and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'R6 Cheats Support | Loader, Delivery & Setup Help',
    description:
      'Get help buying and loading R6 cheats — delivery email, Windows setup, antivirus exclusions, loader errors and BattlEye status updates.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'R6 Cheats support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'R6 Cheats — Aimbot, ESP & Wallhack | From $35',
    description:
      'Buy R6 Cheats for Rainbow Six Siege — silent aim Aimbot, player ESP, gadget ESP, wallhack, radar hack and spoofer with live BattlEye status. Licenses from $35.',
    path: '/r6-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'R6 Aimbot, ESP and radar hack product details',
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
  h2About: 'Clear BattlEye status before you buy R6 cheats',
  h2Access: 'Buy R6 Cheats',
  h2Faq: 'R6 Cheats FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
