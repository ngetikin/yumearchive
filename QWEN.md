# Yume Archive

## Project Overview

**Yume Archive** is a single-page marketing/portfolio website for a creative digital community hub established in 2021. It serves as a landing page for an Indonesian-based creative collective of designers, digital artists, and video editors (AMV/GMV creators). The site showcases their gallery, community artists, commission pricing, and provides links to their Discord and Instagram.

### Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **Runtime:** Node.js

## Project Structure

```
yumearchive/
├── src/
│   ├── App.tsx          # Main application component (entire landing page)
│   ├── constants.ts     # Asset URLs (logo, artists, gallery) and pricing data
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
├── public/              # Static assets (artist avatars, art images)
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration with React + Tailwind plugins
├── tsconfig.json        # TypeScript config (ES2022, no emit, path aliases)
├── package.json         # Dependencies and scripts
└── .env.example         # Environment variable template
```

## Building and Running

### Prerequisites

- Node.js
- A Gemini API key (set via `GEMINI_API_KEY` in `.env.local`) — though the current app does not appear to actively use Gemini AI features.

### Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server on `http://localhost:3000` |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove `dist/` directory |
| `npm run lint` | Type-check with TypeScript (`tsc --noEmit`) |

### Environment Variables

- `GEMINI_API_KEY` — Gemini API key (injected by AI Studio at runtime)
- `APP_URL` — The hosted URL of the app (injected by AI Studio at runtime)

Configure these in a `.env.local` file for local development.

## Key Features

- **Hero Section** — Animated landing section with floating moon/cloud elements and CTA buttons
- **About Section** — Vision/mission cards with image gallery grid
- **Core Focus** — Three pillars: Graphic Design, Digital Art, AMV/GMV
- **Gallery** — Masonry-style image grid with hover overlays (24 artworks loaded from GitHub)
- **Artists** — Grid of community artist avatars with names
- **What We Do** — Activity cards (Showcase, Collaboration, Resources, Community, Events)
- **Commission** — Pricing cards for art commissions (Headshot, Bust-up, Half Body, Full Body, Chibi) with Terms of Service
- **CTA Section** — Discord and Instagram join/follow links
- **Footer** — Navigation links and copyright

## Development Conventions

- **Path Aliases:** `@/*` maps to the project root (configured in `tsconfig.json` and `vite.config.ts`)
- **Module System:** ES Modules (`"type": "module"`)
- **JSX:** `react-jsx` transform
- **Animations:** Uses Framer Motion's `motion` components with `whileInView` and `viewport={{ once: true }}` for scroll-triggered animations
- **Styling:** Tailwind CSS utility classes with custom design tokens (e.g., `glass`, `gradient-bg`, `dreamy-glow` — likely defined in `index.css`)
- **External Assets:** Gallery images and artist avatars are loaded from a GitHub repository (`github.com/ngetikin/yumearchive`)

## Notes

- This project was scaffolded via **Google AI Studio** (as indicated by the README and Vite config comments about AI Studio-specific behavior like `DISABLE_HMR`).
- The app is primarily a static landing page — all data (assets, pricing) is hardcoded in `constants.ts`.
- HMR is conditionally disabled when `DISABLE_HMR=true` to prevent flickering during AI agent edits.
