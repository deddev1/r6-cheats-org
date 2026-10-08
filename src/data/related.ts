export type RelatedLink = {
  label: string
  to: string
  description?: string
}

/** Cross-page internal linking clusters for crawl equity + UX. */
export const RELATED_BY_PAGE = {
  support: [
    { label: 'Forums', to: '/forums', description: 'Setup and status threads' },
    { label: 'Complete setup', to: '/forums/complete-setup', description: 'Load order after purchase' },
    { label: 'Features checklist', to: '/forums/features-list', description: 'What’s included' },
    { label: 'FAQ', to: '/faq', description: 'Price, BattlEye and delivery' },
    { label: 'Pricing', to: '/pricing', description: 'Plans from $35' },
    { label: 'Product details', to: '/r6-cheats', description: 'Features and status' },
  ],
  faq: [
    { label: 'Pricing', to: '/pricing', description: 'Plans and checkout' },
    { label: 'Product details', to: '/r6-cheats', description: 'Features and BattlEye status' },
    { label: 'Features checklist', to: '/forums/features-list', description: 'Aimbot, ESP, radar' },
    { label: 'Complete setup', to: '/forums/complete-setup', description: 'How to load' },
    { label: 'Support', to: '/support', description: 'Loader and delivery help' },
    { label: 'Reviews', to: '/reviews', description: 'What buyers say' },
  ],
  reviews: [
    { label: 'Pricing', to: '/pricing', description: 'Plans from $35' },
    { label: 'Product details', to: '/r6-cheats', description: 'Buy R6 Cheats' },
    { label: 'Forums', to: '/forums', description: 'Setup threads' },
    { label: 'FAQ', to: '/faq', description: 'Common questions' },
    { label: 'Support', to: '/support', description: 'Get help' },
  ],
  forums: [
    { label: 'Pricing', to: '/pricing', description: 'Plans and checkout' },
    { label: 'Product details', to: '/r6-cheats', description: 'Features and status' },
    { label: 'FAQ', to: '/faq', description: 'Quick answers' },
    { label: 'Reviews', to: '/reviews', description: 'Buyer feedback' },
    { label: 'Support', to: '/support', description: 'Loader help' },
  ],
  product: [
    { label: 'Pricing', to: '/pricing', description: 'Plans from $35' },
    { label: 'Features checklist', to: '/forums/features-list', description: 'Full module list' },
    { label: 'Complete setup', to: '/forums/complete-setup', description: 'After checkout' },
    { label: 'FAQ', to: '/faq', description: 'Price and status' },
    { label: 'Reviews', to: '/reviews', description: 'Player feedback' },
    { label: 'Support', to: '/support', description: 'Delivery and load' },
  ],
  pricing: [
    { label: 'Product details', to: '/r6-cheats', description: 'Aimbot, ESP and status' },
    { label: 'Complete setup', to: '/forums/complete-setup', description: 'After you buy' },
    { label: 'FAQ', to: '/faq', description: 'Price and delivery' },
    { label: 'Reviews', to: '/reviews', description: 'Buyer feedback' },
    { label: 'Refunds', to: '/refunds', description: 'When refunds apply' },
    { label: 'Support', to: '/support', description: 'Delivery and load help' },
  ],
  home: [
    { label: 'Pricing', to: '/pricing', description: 'Plans from $35' },
    { label: 'FAQ', to: '/faq', description: 'BattlEye, price, features' },
    { label: 'Reviews', to: '/reviews', description: 'Buyer feedback' },
    { label: 'Support', to: '/support', description: 'Setup help' },
    { label: 'Product details', to: '/r6-cheats', description: 'Buy R6 Cheats' },
  ],
} as const satisfies Record<string, readonly RelatedLink[]>

export type RelatedPageKey = keyof typeof RELATED_BY_PAGE
