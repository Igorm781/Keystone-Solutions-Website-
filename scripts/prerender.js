import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { routes, SITE_URL } from '../src/seo/routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js')

async function prerender() {
  console.log('[prerender] Starting SSG prerender build...')

  const templatePath = path.resolve(distDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run "vite build" first.')
  }
  const template = fs.readFileSync(templatePath, 'utf-8')

  const { render } = await import(pathToFileURL(ssrEntryPath).href)

  const today = new Date().toISOString().split('T')[0]

  for (const route of routes) {
    console.log(`[prerender] Rendering ${route.path} -> ${route.file}...`)
    const appHtml = render(route.path)

    const canonicalUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`

    const headLines = [
      `<title>${escapeHtml(route.title)}</title>`,
      `<meta name="description" content="${escapeHtml(route.description)}">`,
      `<link rel="canonical" href="${canonicalUrl}">`,
      `<meta property="og:type" content="${route.ogType || 'website'}">`,
      `<meta property="og:site_name" content="Keystone Solution">`,
      `<meta property="og:title" content="${escapeHtml(route.title)}">`,
      `<meta property="og:description" content="${escapeHtml(route.description)}">`,
      `<meta property="og:url" content="${canonicalUrl}">`,
      `<meta property="og:image" content="${SITE_URL}/og-image.jpg">`,
      `<meta property="og:image:width" content="1200">`,
      `<meta property="og:image:height" content="630">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}">`,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}">`,
      `<meta name="twitter:image" content="${SITE_URL}/og-image.jpg">`
    ]

    if (route.noindex) {
      headLines.push(`<meta name="robots" content="noindex">`)
    }

    if (route.jsonLd && Array.isArray(route.jsonLd)) {
      for (const schema of route.jsonLd) {
        headLines.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
      }
    }

    const headContent = headLines.join('\n    ')

    // Inject head tags
    let html = template
    if (html.includes('<!--app-head-->')) {
      html = html.replace('<!--app-head-->', headContent)
    } else {
      html = html.replace('</head>', `    ${headContent}\n  </head>`)
    }

    // Inject prerendered body
    if (html.includes('<div id="root"><!--app-html--></div>')) {
      html = html.replace('<div id="root"><!--app-html--></div>', `<div id="root">${appHtml}</div>`)
    } else if (html.includes('<div id="root"></div>')) {
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    } else {
      html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`)
    }

    const outputPath = path.resolve(distDir, route.file)
    fs.writeFileSync(outputPath, html, 'utf-8')
    console.log(`[prerender] Wrote ${outputPath} (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`)
  }

  // Generate sitemap.xml from routes (excluding noindex)
  console.log('[prerender] Generating sitemap.xml...')
  const sitemapEntries = routes
    .filter(route => !route.noindex)
    .map(route => {
      const loc = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
      const priority = route.path === '/' ? '1.0' : route.path === '/case-study' ? '0.9' : '0.7'
      const changefreq = route.path === '/' ? 'weekly' : 'monthly'
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>
`

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8')
  fs.writeFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf-8')
  console.log('[prerender] sitemap.xml generated with', sitemapEntries.length, 'entries.')

  console.log('[prerender] Done!')
}

function escapeHtml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

prerender().catch(err => {
  console.error('[prerender] Error:', err)
  process.exit(1)
})
