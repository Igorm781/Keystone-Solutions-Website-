# Keystone Solution (keystonesolution.co)

Production website for **Keystone Solution** — AI Integration & Architecture for Manufacturers.

## Overview

Keystone Solution builds custom, model-agnostic agentic operating layers on top of existing industrial databases, ERPs, and floor logs.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 3 (Industrial Brutalist theme)
- **Icons**: Lucide React
- **Animations**: GSAP
- **Routing**: React Router 7
- **SSG / Prerendering**: Custom SSR build script generating static HTML per route (`scripts/prerender.js`)
- **Linter**: Oxlint

## Development Scripts

- `npm run dev` — Start Vite local dev server
- `npm run build` — Build client bundle, SSR bundle, and prerender all routes into `dist/`
- `npm run preview` — Preview the production `dist/` build locally
- `npm run lint` — Run Oxlint
