import { R6_HERO_VIDEO } from '../data/media'

type VideoBgProps = {
  /** Full-bleed hero video (purple-tinted clip). */
  video?: string
  /** Poster / fallback still shown before video paints. */
  poster?: string
  imageAlt?: string
}

/** Full-bleed looping R6 hero video with purple grade + soft overlays. */
export function VideoBg({
  video = R6_HERO_VIDEO.src,
  poster = R6_HERO_VIDEO.poster,
  imageAlt = 'R6 cheats Aimbot and ESP gameplay',
}: VideoBgProps) {
  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <video
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={imageAlt}
      >
        <source src={video} type="video/mp4" />
      </video>
      <img
        src={poster}
        alt={imageAlt}
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-0"
      />
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
    </div>
  )
}
