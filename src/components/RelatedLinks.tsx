import type { RelatedLink, RelatedPageKey } from '../data/related'
import { RELATED_BY_PAGE } from '../data/related'

type RelatedLinksProps = {
  page: RelatedPageKey
  heading?: string
  className?: string
  links?: readonly RelatedLink[]
}

export function RelatedLinks({
  page,
  heading = 'Related pages',
  className = '',
  links,
}: RelatedLinksProps) {
  const items = links ?? RELATED_BY_PAGE[page]
  if (!items.length) return null

  return (
    <nav className={className.trim()} aria-labelledby={`related-${page}-heading`}>
      <h2
        id={`related-${page}-heading`}
        className="text-lg font-semibold tracking-tight text-white sm:text-xl"
      >
        {heading}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((link) => (
          <li key={link.to}>
            <a
              href={link.to}
              className="page-card group flex h-full flex-col rounded-xl p-4 transition-colors"
            >
              <span className="text-sm font-semibold text-white group-hover:text-white/90">
                {link.label}
              </span>
              {link.description ? (
                <span className="mt-1 text-xs leading-relaxed text-white/45">
                  {link.description}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
