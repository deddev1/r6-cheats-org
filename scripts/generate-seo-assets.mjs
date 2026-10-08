/**
 * Auto-generate 1200x630 JPEG Open Graph images for every indexed URL.
 * Google SERP / social crawlers fetch these for right-side thumbnails.
 * Never overwrites battlelog-sourced /media assets.
 */
import { access, mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const ogDir = join(root, 'public', 'og')
const mediaDir = join(root, 'public', 'media')
const blogsPath = join(root, 'src', 'data', 'blogs.ts')

await mkdir(ogDir, { recursive: true })
await mkdir(mediaDir, { recursive: true })

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const requiredBattlelog = [
  join(mediaDir, 'r6-hero-full.webp'),
  join(mediaDir, 'r6-cover.webp'),
  join(mediaDir, 'r6-box.jpg'),
  join(mediaDir, 'r6-menu.webp'),
  join(mediaDir, 'r6-esp-gameplay.webp'),
  join(mediaDir, 'r6-video-thumb.jpg'),
]

for (const path of requiredBattlelog) {
  if (!(await exists(path))) {
    throw new Error(`Missing R6 media asset (do not regenerate): ${path}`)
  }
}

function overlaySvg(width, height, eyebrow, title, subtitle) {
  const titleSize = Math.min(54, Math.round(width * 0.042))
  const lines = String(title).match(/.{1,28}(\s|$)/g)?.map((s) => s.trim()).filter(Boolean) || [
    title,
  ]
  const titleLines = lines.slice(0, 2)
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#08060f" stop-opacity="0.55"/>
          <stop offset="0.45" stop-color="#08060f" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#14081f" stop-opacity="0.88"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shade)"/>
      <text x="64" y="210" fill="#c084fc" font-size="22" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${escapeXml(eyebrow)}</text>
      ${titleLines
        .map(
          (line, i) =>
            `<text x="64" y="${290 + i * 64}" fill="#ffffff" font-size="${titleSize}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(line)}</text>`,
        )
        .join('\n')}
      <text x="64" y="480" fill="#c9bdd2" font-size="26" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="64" y="560" fill="#9299a3" font-size="20" font-family="Arial, sans-serif">r6cheats.org</text>
    </svg>
  `)
}

async function writeOgJpeg(outPath, sourcePath, eyebrow, title, subtitle) {
  const base = sharp(sourcePath).resize(1200, 630, { fit: 'cover', position: 'centre' })
  const overlay = sharp(overlaySvg(1200, 630, eyebrow, title, subtitle))
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#08060f' },
  })
    .composite([
      { input: await base.toBuffer(), top: 0, left: 0 },
      { input: await overlay.png().toBuffer(), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

function loadForumSlugs(src) {
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
}

function loadForumMeta(src) {
  const pattern =
    /slug:\s*['"]([^'"]+)['"],[\s\S]*?metaTitle:\s*['"]([^'"]+)['"],[\s\S]*?metaDescription:\s*['"]([^'"]+)['"]/g
  return [...src.matchAll(pattern)].map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
  }))
}

const heroFull = join(mediaDir, 'r6-hero-full.webp')
const coverArt = join(mediaDir, 'r6-cover.webp')
const espStill = join(mediaDir, 'r6-esp-gameplay.webp')
const menuStill = join(mediaDir, 'r6-menu.webp')
const videoThumb = join(mediaDir, 'r6-video-thumb.jpg')

const staticOg = [
  {
    file: 'home.jpg',
    source: heroFull,
    eyebrow: 'R6 CHEATS',
    title: 'R6 Aimbot, ESP & Radar Hack',
    subtitle: 'R6 cheats from $35 · live BattlEye status',
  },
  {
    file: 'r6-cheats.jpg',
    source: coverArt,
    eyebrow: 'PRODUCT DETAILS',
    title: 'R6 Aimbot, ESP & Radar',
    subtitle: 'Features, BattlEye status and price',
  },
  {
    file: 'forums.jpg',
    source: menuStill,
    eyebrow: 'FORUMS',
    title: 'R6 Cheats Setup Forums',
    subtitle: 'Aimbot, ESP, loader and BattlEye guides',
  },
  {
    file: 'reviews.jpg',
    source: espStill,
    eyebrow: 'REVIEWS',
    title: 'R6 Cheats Buyer Reviews',
    subtitle: 'Real R6 Aimbot and ESP feedback',
  },
  {
    file: 'faq.jpg',
    source: menuStill,
    eyebrow: 'FAQ',
    title: 'R6 Cheats FAQ',
    subtitle: 'Price, BattlEye status and setup answers',
  },
  {
    file: 'support.jpg',
    source: videoThumb,
    eyebrow: 'SUPPORT',
    title: 'R6 Cheats Support',
    subtitle: 'Loader, delivery and Windows help',
  },
  {
    file: 'pricing.jpg',
    source: coverArt,
    eyebrow: 'PRICING',
    title: 'R6 Cheats Pricing',
    subtitle: 'Licenses from $35 · checkout & delivery',
  },
  {
    file: 'privacy.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Privacy Policy',
    subtitle: 'How r6cheats.org handles order data',
  },
  {
    file: 'terms.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Terms of Use',
    subtitle: 'License rules for R6 Cheats',
  },
  {
    file: 'refunds.jpg',
    source: coverArt,
    eyebrow: 'POLICY',
    title: 'Refund Policy',
    subtitle: 'Digital license refund rules',
  },
]

const created = []

for (const item of staticOg) {
  const out = join(ogDir, item.file)
  await writeOgJpeg(out, item.source, item.eyebrow, item.title, item.subtitle)
  created.push(item.file)
}

const blogsSrc = await readFile(blogsPath, 'utf8')
const forums = loadForumMeta(blogsSrc)
if (!forums.length) {
  // Fallback if regex misses — at least create from slugs
  for (const slug of loadForumSlugs(blogsSrc)) {
    forums.push({
      slug,
      title: `R6 Cheats ${slug}`,
      description: 'R6 cheats guide on r6cheats.org',
    })
  }
}

for (const forum of forums) {
  const file = `forums-${forum.slug}.jpg`
  const out = join(ogDir, file)
  const source =
    /esp|wallhack|radar|raid/i.test(forum.slug)
      ? espStill
      : /aimbot|features|hotkeys|setup|windows|antivirus|loader|stream/i.test(forum.slug)
        ? menuStill
        : coverArt
  await writeOgJpeg(
    out,
    source,
    'R6 GUIDE',
    forum.title.replace(/\s*\|\s*.*$/, '').slice(0, 48),
    'R6 cheats · r6cheats.org',
  )
  created.push(file)
}

// Auxiliary on-page art (only if missing)
async function writeIfMissing(path, factory) {
  if (await exists(path)) return false
  await factory(path)
  return true
}

function fillerSvg(width, height, eyebrow, title, subtitle) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#08060f"/>
      <text x="${width * 0.075}" y="${height * 0.47}" fill="#c084fc" font-size="${width * 0.022}" font-family="Arial, sans-serif" font-weight="700" letter-spacing="6">${escapeXml(eyebrow)}</text>
      <text x="${width * 0.075}" y="${height * 0.64}" fill="#ffffff" font-size="${width * 0.05}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(title)}</text>
      <text x="${width * 0.075}" y="${height * 0.75}" fill="#c9bdd2" font-size="${width * 0.026}" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
    </svg>
  `)
}

for (const [name, eyebrow, title, subtitle] of [
  ['r6-tactical-art.jpg', 'R6 STANDALONE', 'R6 Cheats', 'Aimbot · ESP · Gadget ESP · BattlEye'],
  ['r6-control-art.jpg', 'R6 · WINDOWS PC', 'R6 ESP & Radar', 'Built for R6 survival runs'],
  ['r6-home-art.jpg', 'r6cheats.org', 'R6 Cheats', 'Aimbot, ESP, wallhack and radar hack'],
]) {
  const path = join(mediaDir, name)
  if (
    await writeIfMissing(path, (p) =>
      sharp(fillerSvg(1200, 675, eyebrow, title, subtitle))
        .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
        .toFile(p),
    )
  ) {
    created.push(name)
  }
}

console.log(`SEO OG images ready (${created.length}): ${created.slice(0, 8).join(', ')}…`)
