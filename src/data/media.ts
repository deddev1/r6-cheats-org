export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** R6 product art + gameplay stills from cheat preview video (self-hosted). */
export const R6_HERO = '/media/r6-hero-full.webp'
export const R6_SOLDIER = '/media/r6-hero-full.webp'
/** Product card + catalog — frame from cheat gameplay video (1080p). */
export const R6_COVER = '/media/r6-product-cover.webp'
export const R6_COVER_JPG = '/media/r6-product-cover.jpg'
export const R6_BOX = '/media/r6-box.jpg'
export const R6_ESP = '/media/r6-esp-gameplay.webp'
export const R6_MENU = '/media/r6-menu.webp'
export const R6_GAMEPLAY = '/media/r6-gameplay.jpg'
export const R6_HOME_ART = '/media/r6-home-art.jpg'
export const R6_CONTROL = '/media/r6-control-art.jpg'
export const R6_TACTICAL = '/media/r6-tactical-art.jpg'
export const R6_VIDEO_THUMB = '/media/r6-video-thumb.jpg'
export const R6_HERO_POSTER = '/media/r6-hero-poster.jpg'

/** Purple-tinted hero loop (1:07–1:20 cut, light file for speed). */
export const R6_HERO_VIDEO = {
  src: '/videos/r6-hero.mp4',
  poster: R6_HERO_POSTER,
  title: 'R6 Cheats hero gameplay',
  caption: 'Rainbow Six Siege cheat gameplay — Aimbot and ESP highlight reel.',
} as const

/** Clean (no purple tint) gameplay clip — same hero range + a bit more (1:05–1:22). */
export const R6_GAMEPLAY_VIDEO = {
  src: '/videos/r6-gameplay.mp4',
  poster: R6_COVER,
  title: 'R6 Cheats Aimbot and ESP preview',
  caption: 'Watch Aimbot, ESP and wallhack gameplay — tap play to start.',
} as const

/** @deprecated alias — prefer R6_GAMEPLAY_VIDEO */
export const R6_HOME_VIDEO = R6_GAMEPLAY_VIDEO

export const PAGE_MEDIA = {
  home: {
    image: R6_SOLDIER,
    alt: 'R6 cheats Aimbot and ESP gameplay on Rainbow Six Siege',
    title: 'R6 Cheats for Rainbow Six Siege',
    caption: 'Feature overview for R6 Aimbot, ESP, wallhack, gadget ESP and radar hack.',
  },
  product: {
    image: R6_COVER,
    video: R6_GAMEPLAY_VIDEO.src,
    alt: 'R6 ESP, silent aim Aimbot and wallhack gameplay screenshot',
    title: 'R6 Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for Rainbow Six Siege on Windows PC.',
    videoTitle: R6_GAMEPLAY_VIDEO.title,
    videoDescription: R6_GAMEPLAY_VIDEO.caption,
  },
  forums: {
    image: R6_MENU,
    alt: 'R6 cheats gameplay screenshot for setup forums',
    title: 'R6 Cheats Forums',
    caption: 'Reference for setup, Aimbot, ESP, gadgets and BattlEye status threads.',
  },
  reviews: {
    image: R6_ESP,
    alt: 'R6 cheats ESP gameplay review screenshot',
    title: 'R6 Cheats Reviews',
    caption: 'Feature and compatibility feedback for R6 cheats.',
  },
  faq: {
    image: R6_GAMEPLAY,
    alt: 'R6 cheats gameplay screenshot for the FAQ',
    title: 'R6 Cheats FAQ',
    caption: 'Compatibility, status and setup answers for Rainbow Six Siege.',
  },
  support: {
    image: R6_CONTROL,
    alt: 'R6 cheats support gameplay screenshot',
    title: 'R6 Cheats Support',
    caption: 'Delivery, loader and setup help for R6 cheats.',
  },
} as const satisfies Record<string, SeoMediaItem>

/**
 * Per-forum stills — each guide uses a unique cheat gameplay image
 * from /media/carousel with SEO alt text for Google.
 */
const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': {
    image: '/media/carousel/r6-gameplay-01.webp',
    alt: 'Rainbow Six Siege R6 Cheats features — Aimbot and ESP hitbox markers on a shooting-range dummy',
    title: 'R6 Cheat Features Checklist gameplay',
    caption: 'Feature checklist visuals: Aimbot and ESP overlays in Rainbow Six Siege.',
  },
  'aimbot-settings': {
    image: '/media/carousel/r6-gameplay-02.webp',
    alt: 'Rainbow Six Siege Aimbot settings gameplay — ESP boxes and distance labels tracking operators through walls',
    title: 'R6 Aimbot Settings gameplay',
    caption: 'Silent aim Aimbot and ESP tracking operators through walls on a snowy Siege map.',
  },
  'esp-wallhack-guide': {
    image: '/media/carousel/r6-gameplay-03.webp',
    alt: 'Rainbow Six Siege ESP wallhack guide — skeleton and box ESP on a range target with custom pink weapon skin',
    title: 'R6 ESP and Wallhack gameplay',
    caption: 'Box ESP, skeleton ESP and distance text for the wallhack setup guide.',
  },
  'radar-hack-guide': {
    image: '/media/carousel/r6-gameplay-04.webp',
    alt: 'Rainbow Six Siege radar hack guide — red enemy ESP boxes, skeletons and snap lines in 1F Lounge',
    title: 'R6 Radar Hack gameplay',
    caption: 'Radar-style awareness with ESP boxes and tracer lines locating enemies indoors.',
  },
  hotkeys: {
    image: '/media/carousel/r6-gameplay-05.webp',
    alt: 'Rainbow Six Siege cheats hotkeys gameplay — green and red ESP boxes with distance tracking in a Chalet interior',
    title: 'R6 Cheats Hotkeys gameplay',
    caption: 'In-match ESP overlays used when testing menu and hotkey binds.',
  },
  'complete-setup': {
    image: '/media/carousel/r6-gameplay-06.webp',
    alt: 'Rainbow Six Siege complete setup guide — ESP skeleton and box wallhack through walls in Bike Repair garage',
    title: 'Complete R6 Cheats Setup gameplay',
    caption: 'Gameplay frame after a clean load — skeleton ESP and box wallhack through garage walls.',
  },
  'windows-setup': {
    image: '/media/carousel/r6-gameplay-07.webp',
    alt: 'Rainbow Six Siege Windows setup guide — R6 Cheats ESP wallhack gameplay after installing on PC',
    title: 'Windows Setup for R6 Cheats gameplay',
    caption: 'In-game ESP preview after finishing Windows setup steps.',
  },
  'disable-antivirus': {
    image: '/media/carousel/r6-gameplay-08.webp',
    alt: 'Rainbow Six Siege antivirus exclusions guide — cheat ESP gameplay once the loader runs without quarantine',
    title: 'Antivirus Exclusions gameplay',
    caption: 'Cheat ESP active after antivirus exclusions so the loader is not blocked.',
  },
  'stream-proof-setup': {
    image: '/media/carousel/r6-gameplay-09.webp',
    alt: 'Rainbow Six Siege stream-proof cheats — ESP wallhack gameplay framed for capture-safe streaming setups',
    title: 'Stream-Proof R6 Cheats gameplay',
    caption: 'ESP gameplay reference for stream-proof overlay configuration.',
  },
  'battleye-status': {
    image: '/media/carousel/r6-gameplay-10.webp',
    alt: 'Rainbow Six Siege BattlEye status guide — clear-to-load R6 Cheats Aimbot and ESP gameplay screenshot',
    title: 'R6 BattlEye Status gameplay',
    caption: 'Aimbot and ESP gameplay when BattlEye status is clear to load.',
  },
  'undetected-status': {
    image: '/media/carousel/r6-gameplay-11.webp',
    alt: 'Rainbow Six Siege undetected status checklist — R6 Cheats ESP wallhack gameplay while status is clear',
    title: 'Undetected Status Checklist gameplay',
    caption: 'ESP wallhack gameplay used with the undetected status checklist.',
  },
  'raid-play-guide': {
    image: '/media/carousel/r6-gameplay-12.webp',
    alt: 'Safer R6 – Rainbow Six Siege attack and defend guide — R6 Cheats ESP and Aimbot during a live site',
    title: 'Attack and Defend Guide gameplay',
    caption: 'Site-push gameplay with ESP and Aimbot for attack and defend rounds.',
  },
  'loader-errors': {
    image: '/media/carousel/r6-gameplay-13.webp',
    alt: 'R6 Cheats Loader Errors – Rainbow Six Siege loader errors guide — R6 Cheats ESP gameplay after fixing inject',
    title: 'R6 Loader Errors gameplay',
    caption: 'ESP gameplay after resolving common loader and injection errors.',
  },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
