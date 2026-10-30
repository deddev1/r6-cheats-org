export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is R6 cheats only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'r6', name: 'Rainbow Six Siege', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const GUIDE_FEATURES = [
  {
    name: 'R6 Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — fire near an operator and still land the hit, so it reads as legit even when someone spectates.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See operators through walls with distance, health and loadout information when the build supports it — tell attackers from defenders instantly.',
  },
  {
    name: 'Gadget ESP',
    text: 'Track cameras, claymores, nitro cells and utility before you swing — clear site without guessing what is waiting around the corner.',
  },
  {
    name: 'Operator ESP',
    text: 'Highlight enemy operators by role and distance so you plan executes, flanks and retakes with full map awareness.',
  },
  {
    name: 'Radar Hack',
    text: '2D radar awareness for off-screen operators across Siege maps — spot the third party before it reaches your angle.',
  },
  {
    name: 'Default & Camera Intel',
    text: 'Spot common default plant spots and camera placements so your team takes site with better information.',
  },
  {
    name: 'Ranked & casual support',
    text: 'Works on Rainbow Six Siege ranked and casual queues on Windows PC.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: 'BattlEye status + support',
    text: 'Live clear-to-load or Updating status is reviewed after BattlEye and R6 patches before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
