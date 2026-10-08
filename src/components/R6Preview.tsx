import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { R6_GAMEPLAY_VIDEO } from '../data/media'

type R6PreviewProps = {
  className?: string
  /** Wider crop on product page */
  wide?: boolean
}

/** Self-hosted R6 cheat gameplay preview (clean cut, no purple tint). Click play/pause in the center. */
export function R6Preview({ className = '', wide = false }: R6PreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  const syncPlaying = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    setPlaying(!el.paused)
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const onPlay = () => {
      setPlaying(true)
      setStarted(true)
    }
    const onPause = () => setPlaying(false)
    const onEnded = () => setPlaying(false)
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('ended', onEnded)
    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('ended', onEnded)
    }
  }, [])

  async function togglePlay() {
    const el = videoRef.current
    if (!el) return
    try {
      if (el.paused) {
        await el.play()
      } else {
        el.pause()
      }
    } catch {
      syncPlaying()
    }
  }

  return (
    <div className={`video-brand-mask border border-z-soft/20 ${className}`.trim()}>
      <div
        className={`relative w-full overflow-hidden ${wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          poster={R6_GAMEPLAY_VIDEO.poster}
          aria-label={R6_GAMEPLAY_VIDEO.title}
        >
          <source src={R6_GAMEPLAY_VIDEO.src} type="video/mp4" />
        </video>

        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-z-bg/50 via-transparent to-z-bg/20 transition-opacity ${
            playing ? 'opacity-40' : 'opacity-100'
          }`}
        />

        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? 'Pause feature preview' : 'Play feature preview'}
          className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-z-soft sm:h-16 sm:w-16"
        >
          {playing ? (
            <Pause className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" strokeWidth={0} />
          ) : (
            <Play className="ml-0.5 h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" strokeWidth={0} />
          )}
        </button>

        {!started && (
          <p className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[11px] font-medium tracking-wide text-white/70 sm:bottom-4 sm:text-xs">
            Tap play to preview gameplay
          </p>
        )}
      </div>
      <p className="sr-only">{R6_GAMEPLAY_VIDEO.title}</p>
    </div>
  )
}
