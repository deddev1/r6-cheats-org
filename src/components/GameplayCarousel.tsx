import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { R6_GAMEPLAY_SLIDES, type CarouselSlide } from '../data/carousel'

type GameplayCarouselProps = {
  className?: string
  /** Compact square crop for product purchase card */
  variant?: 'home' | 'product'
  /** Auto-advance interval in ms (0 = off) */
  autoPlayMs?: number
  slides?: CarouselSlide[]
}

export function GameplayCarousel({
  className = '',
  variant = 'home',
  autoPlayMs = 0,
  slides = R6_GAMEPLAY_SLIDES,
}: GameplayCarouselProps) {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const slide = slides[index] ?? slides[0]

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (!autoPlayMs || total < 2) return
    const id = window.setInterval(() => go(1), autoPlayMs)
    return () => window.clearInterval(id)
  }, [autoPlayMs, go, total])

  if (!slide) return null

  const isProduct = variant === 'product'

  if (isProduct) {
    return (
      <figure
        className={`relative overflow-hidden border border-z-soft/20 bg-black ${className}`.trim()}
        aria-roledescription="carousel"
        aria-label="Rainbow Six Siege cheat gameplay screenshots"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              title={s.title}
              width={s.width}
              height={s.height}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'auto'}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={i === index ? undefined : true}
            />
          ))}

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous cheat gameplay screenshot"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next cheat gameplay screenshot"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-[1] flex items-center justify-center gap-1.5 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-3 pb-3 pt-8">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show screenshot ${i + 1}: ${s.title}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
        <figcaption className="sr-only">
          {slide.caption} Image {index + 1} of {total}.
        </figcaption>
      </figure>
    )
  }

  /* Home — compact strip, not a full-bleed hero */
  return (
    <div className={`mx-auto w-full max-w-3xl ${className}`.trim()}>
      <figure
        className="relative overflow-hidden rounded-xl border border-z-soft/20 bg-black sm:rounded-2xl"
        aria-roledescription="carousel"
        aria-label="Rainbow Six Siege cheat gameplay screenshots"
      >
        <div className="relative mx-auto aspect-[16/9] max-h-[220px] w-full overflow-hidden sm:max-h-[280px]">
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              title={s.title}
              width={s.width}
              height={s.height}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover object-[center_42%] transition-opacity duration-300 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={i === index ? undefined : true}
            />
          ))}

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous cheat gameplay screenshot"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75 sm:left-2.5"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next cheat gameplay screenshot"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75 sm:right-2.5"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </figure>

      <div className="mt-3 flex items-center justify-between gap-3 px-0.5">
        <p className="min-w-0 truncate text-xs text-white/45 sm:text-sm">{slide.caption}</p>
        <div className="flex shrink-0 items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show screenshot ${i + 1}: ${s.title}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-4 bg-white/90' : 'w-1.5 bg-white/30 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
