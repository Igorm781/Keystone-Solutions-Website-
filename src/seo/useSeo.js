import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteByPath, SITE_URL } from './routes'

function setOrCreateMeta(selector, attributes) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function setOrCreateLink(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function useSeo(customPath) {
  const location = useLocation()
  const path = customPath || location.pathname

  useEffect(() => {
    if (typeof document === 'undefined') return

    const route = getRouteByPath(path)
    if (!route) return

    // 1. Title
    if (route.title) {
      document.title = route.title
    }

    // 2. Meta description
    if (route.description) {
      setOrCreateMeta('meta[name="description"]', {
        name: 'description',
        content: route.description
      })
    }

    // 3. Canonical link
    const canonicalUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
    setOrCreateLink('canonical', canonicalUrl)

    // 4. Open Graph tags
    setOrCreateMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: route.title
    })
    setOrCreateMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: route.description || ''
    })
    setOrCreateMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl
    })
    setOrCreateMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: route.ogType || 'website'
    })

    // 5. Twitter tags
    setOrCreateMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: route.title
    })
    setOrCreateMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: route.description || ''
    })

    // 6. Robots if noindex
    if (route.noindex) {
      setOrCreateMeta('meta[name="robots"]', {
        name: 'robots',
        content: 'noindex, follow'
      })
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]')
      if (robotsMeta) {
        robotsMeta.remove()
      }
    }
  }, [path])
}
