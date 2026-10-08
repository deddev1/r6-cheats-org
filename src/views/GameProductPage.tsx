import { Check, Shield } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import {
  GUIDE_FEATURES,
  getGame,
  guidePath,
  parseGuideSlug,
  type Game,
} from '../data/games'
import { PRODUCT_PAGE_FAQS } from '../data/faqs'
import { PRODUCT_PRICE_USD, SITE_HOST, SITE_NAME } from '../data/site'
import { FaqSection } from '../components/FaqSection'
import { CheckoutLink } from '../components/CheckoutLink'
import { NotFoundPage } from './NotFoundPage'
import { blogPath } from '../data/blogs'
import { R6_HOME_VIDEO } from '../data/media'
import { R6Preview } from '../components/R6Preview'
import { GameplayCarousel } from '../components/GameplayCarousel'
import { RelatedLinks } from '../components/RelatedLinks'

const CHECKOUT_STEPS = [
  {
    title: 'Check status',
    body: `Confirm live BattlEye status on ${SITE_HOST} before you buy.`,
  },
  {
    title: 'Load when clear',
    body: 'Only inject when status is clear — or accept Updating risk after a patch.',
  },
  {
    title: 'Checkout',
    body: 'Pay once for a digital license with worldwide delivery.',
  },
  {
    title: 'Follow setup',
    body: 'Use the complete setup guide after delivery so the first load is clean.',
    href: blogPath('complete-setup'),
    linkLabel: 'complete setup guide',
  },
] as const

function ProductPurchaseCard({ game }: { game: Game }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-z-soft/15 bg-[rgba(20,16,31,0.95)] sm:rounded-3xl">
      <GameplayCarousel variant="product" />
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="icon-well shrink-0 text-sm font-bold">R6</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">R6 Cheats</p>
            <p className="text-xs text-white/45">
              {game.status} · From ${PRODUCT_PRICE_USD}
            </p>
          </div>
        </div>

        <CheckoutLink className="cta-gradient mt-5 block w-full rounded-full py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Buy R6 Cheats
        </CheckoutLink>
        <p className="mt-3 text-center text-[11px] text-white/40">
          Instant delivery · Check BattlEye status first
        </p>
      </div>
    </div>
  )
}

type GameProductPageProps = {
  guideSlug: string
}

export function GameProductPage({ guideSlug }: GameProductPageProps) {
  const slug = parseGuideSlug(guideSlug)
  const game = getGame(slug)

  if (!guideSlug.toLowerCase().endsWith('-cheats')) {
    const maybe = getGame(guideSlug.toLowerCase())
    if (maybe) {
      if (typeof window !== 'undefined') {
        window.location.replace(guidePath(maybe.slug))
      }
      return null
    }
    return <NotFoundPage />
  }

  if (!game) return <NotFoundPage />

  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>

      <main>
        <section className="page-x py-8 sm:py-12">
          <div className="mx-auto max-w-6xl">
            <nav
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-white/40"
              aria-label="Breadcrumb"
            >
              <a href="/" className="shrink-0 hover:text-white/70">
                Home
              </a>
              <span className="shrink-0">/</span>
              <span className="min-w-0 text-white/70">Product details</span>
            </nav>

            <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-7">
                <p className="inline-flex items-center gap-1.5 text-xs text-z-soft">
                  <Shield className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  {game.status} · Rainbow Six Siege · BattlEye · {SITE_HOST}
                </p>

                <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  R6 Cheats — Aimbot, ESP & Wallhack
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-4 sm:text-base">
                  Silent aim Aimbot, player ESP, wallhack, gadget ESP and radar hack for Rainbow Six
                  Siege on Windows PC. Licenses from ${PRODUCT_PRICE_USD} with live BattlEye status
                  before you buy.
                </p>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Feature preview
                  </h2>
                  <p className="mt-2 text-sm text-white/45">{R6_HOME_VIDEO.caption}</p>
                  <R6Preview className="mt-4" wide />
                </div>

                <div className="mt-6 lg:hidden">
                  <ProductPurchaseCard game={game} />
                </div>

                <div className="mt-10">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Included features
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {GUIDE_FEATURES.map((f) => (
                      <li key={f.name} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-z-soft"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold leading-5 text-white">{f.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/50">{f.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Servers & BattlEye
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    Runs on official R6 servers and most common private mod setups. After a client
                    or BattlEye patch, status may show Updating until tested — {SITE_NAME} publishes
                    live status so you are not buying a dead loader. Status first, load second.
                  </p>
                </div>

                <div className="mt-10">
                  <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Checkout and delivery
                  </h2>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-white/55">
                    {CHECKOUT_STEPS.map((step) => (
                      <li key={step.title}>
                        {'href' in step && step.href ? (
                          <>
                            Follow the{' '}
                            <a
                              href={step.href}
                              className="text-white/80 underline-offset-2 hover:underline"
                            >
                              {step.linkLabel}
                            </a>{' '}
                            after delivery.
                          </>
                        ) : (
                          step.body
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <aside className="hidden lg:col-span-5 lg:block">
                <div className="sticky top-24">
                  <ProductPurchaseCard game={game} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FaqSection
          heading="R6 Cheats product FAQ"
          intro="Status, features, server support, delivery and load questions before checkout."
          items={PRODUCT_PAGE_FAQS}
        />

        <section className="page-x border-t border-z-soft/15 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <RelatedLinks page="product" />
          </div>
        </section>
      </main>

      <SiteFooter currentPath="/r6-cheats" />
    </div>
  )
}
