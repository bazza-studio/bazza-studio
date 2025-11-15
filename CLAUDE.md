# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bazza Studio landing page - a Next.js 15 application showcasing two upcoming products: BAZZA (Restaurant Management Suite) and PANORAMA (Interactive City Explorer). The site features a full-screen image background with animated text overlays and a custom cursor implementation.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

The dev server runs on http://localhost:3000

## Architecture

### Tech Stack
- **Framework**: Next.js 15.1.6 with App Router and React Server Components
- **Styling**: Tailwind CSS with custom Zinc color scheme
- **Animations**: Framer Motion for page transitions and element animations
- **UI Components**: shadcn/ui (New York style, configured with path aliases)
- **Fonts**: Geist Sans and Geist Mono via next/font

### Directory Structure

```
src/
├── app/
│   ├── components/       # Page-specific components
│   │   ├── clock.tsx     # CLT timezone clock display
│   │   └── cursor.tsx    # Custom dot cursor wrapper
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Landing page with animated hero
│   └── globals.css       # Global styles and CSS variables
├── components/
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # cn() utility for class merging
```

### Key Design Patterns

**Custom Cursor**: The entire app hides the default cursor (`cursor: none !important` in globals.css) and uses `react-dot-cursor` for a custom implementation. The Cursor component is mounted in the root layout and handles client-side mounting to avoid hydration issues.

**Animation Sequence**: The landing page uses a carefully orchestrated animation sequence with staggered delays:
1. Background image fade-in + scale (0-2s)
2. Gradient overlay (0.5-1.5s)
3. Heading (0.6-1.4s)
4. Description (0.8-1.6s)
5. Products list (0.9-1.7s)
6. Contact link (1.0-1.8s)
7. Clock (1.0-1.8s)

**Responsive Layout**: Uses a gradient overlay approach that changes direction based on screen size:
- Mobile/Tablet: `bg-gradient-to-b` with backdrop blur
- Desktop: `bg-gradient-to-r` without backdrop blur

**Timezone Display**: Clock component displays Chile time (America/Santiago) formatted as 24-hour with "CLT" suffix, visible only on large screens.

### Styling Conventions

- Uses CSS variables for theming (`--background`, `--foreground`)
- Custom font family utilities: `font-geist`, `font-geistMono`
- Base color scheme: Zinc with custom shades
- All components use `cn()` utility from `@/lib/utils` for conditional class merging

### Path Aliases

Configured in components.json and tsconfig.json:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/ui` → `src/components/ui`

### Client-Side Considerations

Components requiring browser APIs must:
1. Use `"use client"` directive
2. Implement mounting state checks to avoid hydration mismatches (see cursor.tsx)
3. Handle cleanup for intervals/timers (see clock.tsx)
