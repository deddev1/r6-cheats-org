export type CarouselSlide = {
  src: string
  alt: string
  title: string
  caption: string
  width: number
  height: number
}

/**
 * R6 cheat gameplay stills for homepage + product carousels.
 * Alt/title/caption written so Google can understand Aimbot, ESP and wallhack visuals.
 */
export const R6_GAMEPLAY_SLIDES: CarouselSlide[] = [
  {
    src: '/media/carousel/r6-gameplay-01.webp',
    alt: 'Rainbow Six Siege cheat gameplay — Aimbot and ESP hitbox markers on a shooting-range dummy with a teal-scoped rifle',
    title: 'R6 Aimbot ESP shooting range',
    caption: 'Aimbot and ESP overlays on a training dummy in the Rainbow Six Siege shooting range.',
    width: 1024,
    height: 576,
  },
  {
    src: '/media/carousel/r6-gameplay-02.webp',
    alt: 'Rainbow Six Siege ESP wallhack cheat — enemy operator boxes and distance labels through walls on a snowy map',
    title: 'R6 ESP wallhack snowy map',
    caption: 'Player ESP and wallhack boxes showing operators and distances through walls outdoors.',
    width: 1024,
    height: 576,
  },
  {
    src: '/media/carousel/r6-gameplay-03.webp',
    alt: 'Rainbow Six Siege cheat ESP — skeleton and box wallhack on a range dummy with pink custom weapon skin',
    title: 'R6 ESP skeleton wallhack',
    caption: 'Box ESP, skeleton ESP and distance text on range targets in Rainbow Six Siege.',
    width: 1024,
    height: 576,
  },
  {
    src: '/media/carousel/r6-gameplay-04.webp',
    alt: 'Rainbow Six Siege wallhack ESP cheat — red enemy boxes, skeletons and snap lines in 1F Lounge',
    title: 'R6 ESP lounge wallhack',
    caption: 'Red box ESP, skeletons and tracer lines locating enemies through walls indoors.',
    width: 1024,
    height: 576,
  },
  {
    src: '/media/carousel/r6-gameplay-05.webp',
    alt: 'Rainbow Six Siege cheat gameplay — green and red ESP boxes with distance tracking inside a Chalet interior',
    title: 'R6 ESP Chalet interior',
    caption: 'ESP wallhack overlays with enemy names and meter distances during a live Siege round.',
    width: 1024,
    height: 576,
  },
  {
    src: '/media/carousel/r6-gameplay-06.webp',
    alt: 'Rainbow Six Siege ESP wallhack cheat — skeleton and box overlays through walls in 1F Bike Repair garage',
    title: 'R6 ESP wallhack garage',
    caption: 'Skeleton ESP and green box wallhack through walls during a live Siege round in Bike Repair.',
    width: 1280,
    height: 720,
  },
] as const
