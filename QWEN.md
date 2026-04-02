# Yume Archive - Project Context

## Project Overview

**Yume Archive** is a creative community website for designers, artists, and AMV/GMV creators. Established in 2021, it provides a collaborative ecosystem where creative individuals can showcase their work, share resources, and connect with fellow creators.

### Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 6.2 |
| **Styling** | Tailwind CSS 4.1 |
| **Animations** | Motion (motion.dev) |
| **Icons** | Lucide React |
| **AI Integration** | Google Generative AI (`@google/genai`) |

### Architecture

- **Single-page application (SPA)** with smooth scroll navigation
- **Component-based structure** in `src/App.tsx` (currently monolithic)
- **Custom theme** with branded colors (yume-purple, yume-pink, yume-dark, yume-light)
- **Responsive design** with mobile-first approach
- **Animation-rich** UI using Framer Motion-like syntax via `motion/react`

### Key Sections

1. **Hero** - Landing section with animated illustration
2. **About** - Community introduction and stats
3. **Features** - Core offerings (Showcase, Collaboration, Resources, Interaction)
4. **Artists Preview** - Horizontal scrollable artist cards
5. **Gallery** - Masonry-style work showcase
6. **Why Join** - Benefits of community membership
7. **Community CTA** - Discord call-to-action

---

## Building and Running

### Prerequisites

- Node.js (version compatible with the project dependencies)
- npm

### Development

```bash
# Install dependencies
npm install

# Start development server (port 3000, accessible on all interfaces)
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Clean build artifacts
npm run clean
```

### Code Quality

```bash
# Type check (no emit)
npm run lint
```

### Environment Variables

Create a `.env.local` file with:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

---

## Development Conventions

### Code Style

- **TypeScript**: Strict typing with `noEmit` for type checking
- **React**: Functional components with hooks, JSX syntax
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Imports**: Organized with `@/` alias pointing to project root

### Styling

- **Tailwind CSS v4** with custom theme configuration in `index.css`
- **Custom utilities**: `.glass-card`, `.text-gradient`
- **Color palette**:
  - `--color-yume-purple`: `#8b5cf6`
  - `--color-yume-pink`: `#ec4899`
  - `--color-yume-dark`: `#0f172a`
  - `--color-yume-light`: `#f8fafc`

### Component Patterns

- Components are defined as functional components within `App.tsx`
- Motion animations use `motion` from `motion/react`
- Icons from `lucide-react` with consistent sizing
- Responsive classes use Tailwind's breakpoint prefixes (`md:`, `lg:`)

### File Structure

```
yumearchive/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles & Tailwind config
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── metadata.json        # Project metadata
```

### Git

- Standard `.gitignore` excludes `node_modules/`, `dist/`, `.env*`
- Keep `.env.example` tracked for environment variable documentation

---

## External Resources

- **Discord Community**: https://discord.gg/qHh7PpwW76
- **Images**: Uses Picsum for placeholders and external CDN for assets
- **Fonts**: Google Fonts (Inter, Outfit, JetBrains Mono)

---

## Notes

- HMR can be disabled via `DISABLE_HMR=true` environment variable (for AI Studio compatibility)
- Images use `referrerPolicy="no-referrer"` for external resources
- The app is configured to run on `0.0.0.0:3000` for network accessibility
