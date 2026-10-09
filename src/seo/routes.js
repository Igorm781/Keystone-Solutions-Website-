export const SITE_URL = 'https://keystonesolution.co'

export const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Keystone Solution | AI Integration & Architecture for Manufacturers',
    description: 'Custom AI-agent systems that automate manufacturing operations end-to-end. Built on your legacy physical and digital stack. Zero migrations, full code ownership.',
    ogType: 'website',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#organization`,
        name: 'Keystone Solution',
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og-image.jpg`,
        email: 'Architect@Keystonesolution.co',
        description: 'Custom AI-agent systems that automate manufacturing operations end-to-end. Built on your legacy physical and digital stack. Zero migrations, full code ownership.',
        areaServed: 'US',
        knowsAbout: [
          'AI Integration & Architecture',
          'AI Agents',
          'Manufacturing Operations',
          'Maintenance and ERP Integration',
          'Process Architecture'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Keystone Solution',
        publisher: {
          '@id': `${SITE_URL}/#organization`
        }
      }
    ]
  },
  {
    path: '/case-study',
    file: 'case-study.html',
    title: 'PM Asset Tracking & Maintenance Automation Case Study | Keystone',
    description: 'How a mid-market heavy manufacturer fixed labor-to-asset tracking and absorbed a $52K–$60K maintenance clerk workload with custom AI agents on its legacy stack.',
    ogType: 'article',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Maintenance Clerk & PM Asset Tracking Overhaul',
        description: 'How a mid-market heavy manufacturer fixed labor-to-asset tracking and absorbed a $52K–$60K maintenance clerk workload with custom AI agents on its legacy stack.',
        image: `${SITE_URL}/og-image.jpg`,
        author: {
          '@id': `${SITE_URL}/#organization`
        },
        publisher: {
          '@id': `${SITE_URL}/#organization`
        },
        mainEntityOfPage: `${SITE_URL}/case-study`,
        datePublished: '2026-10-09',
        dateModified: '2026-10-09'
      }
    ]
  },
  {
    path: '/privacy',
    file: 'privacy.html',
    title: 'Privacy Policy | Keystone Solution',
    description: 'Privacy policy and data protection protocol for Keystone Solution AI integration and architecture services for manufacturers.',
    ogType: 'website'
  },
  {
    path: '/terms',
    file: 'terms.html',
    title: 'Terms of Service | Keystone Solution',
    description: 'Terms of service and operational engagement protocol for Keystone Solution AI integration and architecture services for manufacturers.',
    ogType: 'website'
  },
  {
    path: '/404',
    file: '404.html',
    title: 'Page Not Found | Keystone Solution',
    description: 'The requested page could not be found. Return to Keystone Solution homepage.',
    noindex: true
  }
]

export function getRouteByPath(pathname) {
  // Normalize path by stripping trailing slash (except for '/')
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const match = routes.find(r => r.path === normalized)
  if (match) return match
  // 404 fallback
  return routes.find(r => r.path === '/404')
}
