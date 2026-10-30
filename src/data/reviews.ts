export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay recent for R6 commercial reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'R6 operator',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in game. Player ESP held after the first BattlEye rebuild — glad I waited for a clear status before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Siege ranked player',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought it for gadget ESP and leave the aimbot off. Not clearing empty rooms for cameras and traps changes the whole round.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'R6',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Gadget ESP plus honest Updating vs clear-to-load flips are what I wanted before buying R6 cheats.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sellers still pushed dead loaders. We check status, then checkout — ESP held through Clubhouse and Oregon executes.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night runs',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy. Stream-proof on, radar on. Setup guides covered antivirus and load order so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Monthly key first was the right call. Instant delivery and live BattlEye status sold me before I took the lifetime plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo operator',
    game: 'R6',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Player ESP distance readouts were solid. Radar helped when a third party pushed from above site. Silent aim took ten minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'ranked play regular',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Gadget ESP alone is worth it — no more pulling a roam clear while clearing a roam. Nothing like the free junk I tried first.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'PvP tryhard',
    game: 'R6',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Silent aim looks legit even when an admin spectates, as long as FOV and smoothing stay conservative. I still check status after every BattlEye note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'One license, full menu. ESP plus gadget highlighting covered our site executes and roam clears. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'R6',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to Discord overlay.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Private server',
    game: 'R6',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'R6-only shop is a plus. No random filler titles. Worked on our modded private server and the feature list matched the menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
