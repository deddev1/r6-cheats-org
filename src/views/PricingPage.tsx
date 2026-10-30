import { Check, Shield } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { CheckoutLink } from '../components/CheckoutLink'
import { RelatedLinks } from '../components/RelatedLinks'
import {
  CHECKOUT_FLOW,
  PRICING_INCLUDES,
  PRICING_PLANS,
} from '../data/pricing'
import {
  PRODUCT_LIFETIME_PRICE_USD,
  PRODUCT_PRICE_USD,
  SITE_HOST,
  SITE_NAME,
} from '../data/site'
import { getGame } from '../data/games'
import { blogPath } from '../data/blogs'

export function PricingPage() {
  const game = getGame('r6')
  const status = game?.status ?? 'Updating'

  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>

      <main>
        <section className="page-x pt-12 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <p className="inline-flex items-center gap-1.5 text-xs text-z-soft">
              <Shield className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
              {status} · ${PRODUCT_PRICE_USD}/mo · ${PRODUCT_LIFETIME_PRICE_USD} lifetime ·{' '}
              {SITE_HOST}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Buy R6 Cheats — Pricing & Checkout
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Buy R6 cheats and R6 hacks for Rainbow Six Siege on Windows PC. Confirm live BattlEye
              status, pick a plan, then checkout for instant digital delivery.
            </p>
          </div>
        </section>

        <section
          id="plans"
          className="page-x py-10 sm:py-12"
          aria-labelledby="plans-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="plans-heading"
              className="text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              License plans
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/45">
              Two licenses only — Monthly ${PRODUCT_PRICE_USD} or Lifetime $
              {PRODUCT_LIFETIME_PRICE_USD}. Both unlock the full menu.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:max-w-3xl">
              {PRICING_PLANS.map((plan) => (
                <li
                  key={plan.id}
                  className={`page-card flex h-full flex-col rounded-2xl p-5 sm:p-6 ${
                    plan.featured ? 'border-z-soft/35 ring-1 ring-z-soft/25' : ''
                  }`}
                >
                  {plan.featured ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-z-soft">
                      Most popular
                    </p>
                  ) : (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
                      Best value
                    </p>
                  )}
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    ${plan.priceUsd}
                    <span className="text-base font-medium text-white/45">{plan.period}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{plan.blurb}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-z-soft"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <CheckoutLink
                    className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                      plan.featured
                        ? 'cta-gradient text-white'
                        : 'border border-z-soft/35 bg-white/[0.06] text-white backdrop-blur-xl hover:border-z-soft/50 hover:bg-white/[0.1]'
                    }`}
                  >
                    {plan.cta}
                  </CheckoutLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="includes"
          className="page-x border-t border-z-soft/15 py-10 sm:py-12"
          aria-labelledby="includes-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="includes-heading"
              className="text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              Included with every license
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PRICING_INCLUDES.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                  <Check className="h-4 w-4 shrink-0 text-z-soft" strokeWidth={2.25} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/45">
              Full module list on the{' '}
              <a href="/r6-cheats" className="text-white/75 underline-offset-2 hover:underline">
                product page
              </a>
              .
            </p>
          </div>
        </section>

        <section
          id="checkout"
          className="page-x border-t border-z-soft/15 py-10 sm:py-12"
          aria-labelledby="checkout-heading"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="checkout-heading"
              className="text-lg font-semibold tracking-tight text-white sm:text-xl"
            >
              How checkout works
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {CHECKOUT_FLOW.map((step, i) => (
                <li key={step.title} className="page-card rounded-2xl p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-white/45">
              After delivery, use the{' '}
              <a
                href={blogPath('complete-setup')}
                className="text-white/75 underline-offset-2 hover:underline"
              >
                complete setup guide
              </a>
              . Refund rules are on the{' '}
              <a href="/refunds" className="text-white/75 underline-offset-2 hover:underline">
                refunds page
              </a>
              .
            </p>
          </div>
        </section>

        <section className="page-x border-t border-z-soft/15 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <RelatedLinks page="pricing" />
          </div>
        </section>

        <section className="page-x border-t border-white/10 py-14 sm:py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Ready to buy {SITE_NAME}?
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/50">
                Monthly ${PRODUCT_PRICE_USD} or Lifetime ${PRODUCT_LIFETIME_PRICE_USD}. Check status
                first, then checkout for digital delivery.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <a
                href="/r6-cheats"
                className="inline-flex h-11 items-center justify-center rounded-full border border-z-soft/35 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-z-soft/50 hover:bg-white/[0.1]"
              >
                Product details
              </a>
              <CheckoutLink className="cta-gradient inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-white">
                Go to checkout
              </CheckoutLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter currentPath="/pricing" />
    </div>
  )
}
