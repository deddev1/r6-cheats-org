import type { FaqItem } from '../data/faqs'
import {
  OG_IMAGE,
  PRODUCT_LIFETIME_PRICE_USD,
  PRODUCT_PRICE_USD,
  SEO_REGIONS,
  SITE_ABOUT,
  SITE_NAME,
  SITE_PURPOSE,
  SITE_URL,
  absoluteUrl,
  type PageSeo,
} from '../data/site'
import { getReviewsAggregate, REVIEWS } from '../data/reviews'
import type { GameStatus } from '../data/games'
import { PAGE_MEDIA } from '../data/media'

export const PRODUCT_ID = `${SITE_URL}/#product`

function absoluteAsset(src: string) {
  return src.startsWith('http') ? src : `${SITE_URL}${src.startsWith('/') ? src : `/${src}`}`
}

function offerNode(
  name: string,
  price: string,
  url: string,
  availability: string,
) {
  return {
    '@type': 'Offer',
    name,
    url,
    availability,
    price,
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': `${SITE_URL}/#organization` },
  }
}

/** Monthly + lifetime offers for Product / Pricing pages. */
function aggregateOffers(url: string, availability: string) {
  return {
    '@type': 'AggregateOffer',
    url,
    availability,
    priceCurrency: 'USD',
    lowPrice: PRODUCT_PRICE_USD,
    highPrice: PRODUCT_LIFETIME_PRICE_USD,
    offerCount: 2,
    offers: [
      offerNode('Monthly', PRODUCT_PRICE_USD, `${SITE_URL}/pricing`, availability),
      offerNode(
        'Lifetime',
        PRODUCT_LIFETIME_PRICE_USD,
        `${SITE_URL}/pricing`,
        availability,
      ),
    ],
  }
}

function aggregateRatingNode() {
  const aggregate = getReviewsAggregate()
  return {
    '@type': 'AggregateRating',
    ratingValue: aggregate.ratingValue,
    reviewCount: aggregate.reviewCount,
    bestRating: aggregate.bestRating,
    worstRating: aggregate.worstRating,
  }
}

/** Stable Organization + WebSite identity for every page. */
export function siteIdentityGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [
        'R6 Hacks',
        'Rainbow Six Siege Cheats',
        'Buy R6 Cheats',
        'Buy R6 Hacks',
        'r6cheats.org',
        'R6 Aimbot ESP',
      ],
      url: SITE_URL,
      description: SITE_PURPOSE,
      knowsAbout: [...SITE_ABOUT],
      brand: { '@type': 'Brand', name: SITE_NAME },
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
        width: 48,
        height: 46,
      },
      image: absoluteAsset(OG_IMAGE),
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_PURPOSE,
      inLanguage: 'en',
      about: {
        '@type': 'Thing',
        name: 'R6 cheats',
        description:
          'Commercial R6 cheats for PC — silent aim Aimbot, player ESP, gadget ESP, wallhack, radar hack and BattlEye status.',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ]
}

export function webPageNode(seo: PageSeo) {
  const img = seo.image || OG_IMAGE
  const page = {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(seo.path)}#webpage`,
    url: absoluteUrl(seo.path),
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  } as Record<string, unknown>
  const hasVisibleImage =
    ['/', '/r6-cheats', '/forums'].includes(seo.path) || seo.path.startsWith('/forums/')
  // Text pages (faq/support/reviews) still expose OG as WebPage.image for social crawlers
  const hasOgImage = Boolean(seo.image)
  if (hasVisibleImage || hasOgImage) {
    page.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: absoluteAsset(img),
      width: 1200,
      height: 630,
      caption: seo.imageAlt || seo.title,
    }
    page.image = absoluteAsset(img)
  }
  return page
}

export function productCoreJsonLd() {
  return {
    '@type': 'Product',
    '@id': PRODUCT_ID,
    name: 'R6 Cheats',
    alternateName: [
      'R6 Hacks',
      'Rainbow Six Siege Cheats',
      'Buy R6 Cheats',
      'Buy R6 Hacks',
      'Buy Rainbow Six Siege Cheats',
      'R6 Aimbot',
      'R6 ESP',
      'R6 Wallhack',
      'R6 Radar Hack',
    ],
    description: SITE_PURPOSE,
    url: `${SITE_URL}/r6-cheats`,
    image: [
      absoluteAsset('/og/r6-cheats.jpg'),
      absoluteAsset('/og/home.jpg'),
      absoluteAsset(PAGE_MEDIA.product.image),
      absoluteAsset(PAGE_MEDIA.home.image),
    ],
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    category: 'PC game software',
    offers: aggregateOffers(`${SITE_URL}/pricing`, 'https://schema.org/InStock'),
    subjectOf: {
      '@type': 'VideoObject',
      name: 'R6 Cheats Aimbot and ESP preview',
      description:
        'Preview of R6 Aimbot, ESP menu, gadget highlighting and radar hack features on PC.',
      thumbnailUrl: absoluteAsset('/media/r6-video-thumb.jpg'),
      contentUrl: absoluteAsset('/videos/r6-gameplay.mp4'),
      uploadDate: '2026-09-16',
      inLanguage: 'en',
    },
  }
}

export function productDetailJsonLd(status: GameStatus) {
  const availability =
    status === 'Undetected' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}/r6-cheats`,
    image: absoluteAsset(PAGE_MEDIA.product.image),
    about: {
      '@type': 'VideoGame',
      name: 'Rainbow Six Siege',
      alternateName: ['Rainbow Six Siege', 'R6 SA'],
      publisher: { '@type': 'Organization', name: 'Ubisoft' },
      gamePlatform: 'PC',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Platform', value: 'Windows PC' },
      {
        '@type': 'PropertyValue',
        name: 'Features',
        value: 'Silent aim Aimbot, player ESP, gadget ESP, wallhack, radar hack, spoofer',
      },
      { '@type': 'PropertyValue', name: 'Anti-cheat', value: 'BattlEye' },
      {
        '@type': 'PropertyValue',
        name: 'Servers',
        value: 'Official R6 servers and private servers with common mods',
      },
      { '@type': 'PropertyValue', name: 'Status', value: status },
    ],
    offers: aggregateOffers(`${SITE_URL}/pricing`, availability),
    aggregateRating: aggregateRatingNode(),
  }
}

/** Product + AggregateOffer for the pricing/checkout page. */
export function pricingProductJsonLd(status: GameStatus = 'Undetected') {
  const availability =
    status === 'Undetected' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}/pricing`,
    offers: aggregateOffers(`${SITE_URL}/pricing`, availability),
    aggregateRating: aggregateRatingNode(),
  }
}

export function productReviewsJsonLd() {
  return {
    ...productCoreJsonLd(),
    url: `${SITE_URL}/r6-cheats`,
    aggregateRating: aggregateRatingNode(),
    review: REVIEWS.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.datePublished,
      reviewBody: review.body,
      name: `${review.author} R6 Cheats review`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: { '@id': PRODUCT_ID },
    })),
  }
}

/** Merge site identity + WebPage + optional extra nodes into FAQ/Product graph. */
export function buildPageJsonLd(seo: PageSeo, extra: unknown[] = []) {
  const cleaned = extra.filter((node) => {
    if (!node || typeof node !== 'object') return true
    const t = (node as { '@type'?: string })['@type']
    return t !== 'WebSite' && t !== 'Organization'
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [...siteIdentityGraph(), webPageNode(seo), ...cleaned],
  }
}

/** Build FAQPage JSON-LD graph node from the same items shown in FaqSection. */
export function faqPageJsonLd(items: FaqItem[], pageUrl?: string) {
  return {
    '@type': 'FAQPage',
    ...(pageUrl ? { '@id': `${pageUrl}#faq`, url: pageUrl } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export { SEO_REGIONS, absoluteUrl, OG_IMAGE, SITE_NAME, SITE_URL }
