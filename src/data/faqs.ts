export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are R6 Cheats?',
    a: 'R6 Cheats are Rainbow Six Siege tools on r6cheats.org — silent-aim Aimbot, player ESP, wallhack, gadgets and gadget ESP, and a 2D radar hack — with live BattlEye status after game patches.',
  },
  {
    q: 'How much do R6 cheats cost?',
    a: `R6 cheats are $35 monthly or $150 lifetime. Always confirm live BattlEye status on r6cheats.org before checkout.`,
  },
  {
    q: 'Do you sell R6 hacks for other games?',
    a: 'No. r6cheats.org sells R6 cheats / R6 hacks only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with R6 ESP, gadget highlighting and radar awareness, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle BattlEye updates?',
    a: 'We publish live clear-to-load or Updating labels after R6 and BattlEye patches. Always check status on r6cheats.org before you load.',
  },
  {
    q: 'What is R6 ESP / wallhack?',
    a: 'R6 ESP and wallhack show operators, gadgets and operators through walls with distance and health when supported. Gadget ESP highlights cameras, nukes, claymores and utility so you clear site without guessing.',
  },
  {
    q: 'What is a R6 radar hack?',
    a: 'The radar hack is a 2D overlay for off-screen operators and third parties — useful for site executes and avoiding roamers on Siege maps or ranked play.',
  },
  {
    q: 'What features are included?',
    a: 'R6 Aimbot with silent aim, player ESP, gadget ESP, radar hack, default and camera intel, spoofer and stream-proof options — Rainbow Six Siege on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Do R6 Cheats work on official and private servers?',
    a: 'Yes. The cheats run on official R6 servers and on private servers using most common mod setups. Heavily modded servers with custom anti-cheat scripts can behave differently — ask support before you buy.',
  },
  {
    q: 'How do I buy R6 cheats?',
    a: 'Start on the homepage, confirm live BattlEye status, then open Pricing for Monthly ($35) or Lifetime ($150). Review Product details for features, then checkout for digital delivery.',
  },
  {
    q: 'How do I load R6 Cheats?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get R6 Cheats support?',
    a: 'Use the Support page and your checkout order channel. Include current BattlEye status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read R6 Cheats reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official R6 site?',
    a: 'No. We sell R6 Cheats only. Buy and play the game from r6.com. We are not affiliated with Ubisoft or R6.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
