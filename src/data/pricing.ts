import { PRODUCT_LIFETIME_PRICE_USD, PRODUCT_PRICE_USD } from './site'

export type PricingPlan = {
  id: string
  name: string
  priceUsd: string
  period: string
  blurb: string
  features: readonly string[]
  featured?: boolean
  cta: string
}

/** License options shown on /pricing — monthly and lifetime only. */
export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    priceUsd: PRODUCT_PRICE_USD,
    period: '/ month',
    blurb: 'Full menu access for one month — Aimbot, ESP, wallhack and radar.',
    features: [
      'Full Aimbot, ESP, wallhack and radar menu',
      'Instant digital delivery',
      'Live BattlEye status before you load',
    ],
    featured: true,
    cta: 'Buy monthly — $' + PRODUCT_PRICE_USD,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    priceUsd: PRODUCT_LIFETIME_PRICE_USD,
    period: ' one-time',
    blurb: 'Pay once for ongoing access while the product is supported.',
    features: [
      'Same full feature set as monthly',
      'One-time payment — no renewals',
      'Best value for long-term play',
    ],
    cta: 'Buy lifetime — $' + PRODUCT_LIFETIME_PRICE_USD,
  },
] as const

export const CHECKOUT_FLOW = [
  {
    title: 'Check BattlEye status',
    body: 'Only buy when status is clear to load — or accept Updating risk after a patch.',
  },
  {
    title: 'Pick Monthly or Lifetime',
    body:
      'Monthly is $' +
      PRODUCT_PRICE_USD +
      '. Lifetime is $' +
      PRODUCT_LIFETIME_PRICE_USD +
      ' one-time. Choose your plan at checkout.',
  },
  {
    title: 'Pay once',
    body: 'Secure checkout through our payment partner. Keys are digital — no shipping.',
  },
  {
    title: 'Load with the setup guide',
    body: 'Follow the complete setup thread after delivery so the first inject is clean.',
  },
] as const

export const PRICING_INCLUDES = [
  'Silent aim Aimbot',
  'Player ESP / wallhack',
  'Gadget ESP',
  'Radar hack',
  'Spoofer + cleaner',
  'Live BattlEye status',
] as const
