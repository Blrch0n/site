# Sys&CoTech Landing Page

Premium Web3-inspired single landing page for Sys&CoTech student technology club, inspired by ChainGPT's aesthetic.

## Features

- ✨ **ChainGPT-Inspired Design**: Dark web3 premium aesthetic with spectral neon accents
- 🎭 **3D Hero Scene**: Interactive Three.js scene with mouse parallax and scroll effects
- 📱 **Mobile-First**: Fully responsive with mobile fallback for 3D (static poster + parallax)
- ⚡ **Performance Optimized**:
  - Lazy-loaded 3D canvas (desktop only)
  - Adaptive quality based on device capabilities
  - Framer Motion for smooth animations
- ♿ **Accessible**: Keyboard navigation, focus states, reduced motion support
- 🎨 **Components**:
  - Sticky navigation with backdrop blur
  - Animated hero with Framer Motion stagger
  - Reusable card components (Value, Pillar, Program, Event)
  - Animated FAQ accordion
  - Footer with social links

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS v4** (CSS-first)
- **Framer Motion** (animations)
- **Three.js + React Three Fiber** (3D scene)
- **Lucide React** (icons)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── globals.css          # Global styles with design tokens
├── layout.tsx           # Root layout
└── page.tsx             # Main landing page

components/
├── Navigation.tsx       # Sticky nav with mobile menu
├── Hero.tsx             # Hero section with 3D canvas
├── Scene3D.tsx          # Three.js R3F scene
├── Cards.tsx            # Reusable card components
├── FAQ.tsx              # Accordion + SectionHeader
└── Footer.tsx           # Contact + footer
```

## Design Tokens

All design tokens are defined as CSS variables in `app/globals.css`:

- **Colors**: Dark gradients, spectral accents (#00D4FF → #5B5FFF → #9B4FFF → #E94FFF → #FFAA00)
- **Typography**: Inter font, responsive scale (64px → 38px on mobile for H1)
- **Spacing**: Section padding 120px desktop, 64px mobile
- **Effects**: Glass morphism, grid backgrounds, noise texture

## Performance

- **3D Scene**: Only loads on desktop/high-power devices
- **Mobile Fallback**: Static gradient poster with CSS animations
- **Lazy Loading**: Dynamic import for Scene3D component
- **Pixel Ratio Capping**: Max 2x for canvas rendering
- **Pause Rendering**: When tab hidden or hero offscreen
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## Customization

### Update Content

Edit content directly in `app/page.tsx`:

- Section headlines and descriptions
- Card content (programs, events, FAQ)
- Contact information in `components/Footer.tsx`

### Modify 3D Scene

Edit `components/Scene3D.tsx`:

- Change geometric shapes in `Model` component
- Adjust colors, lighting, camera position
- Modify mouse parallax sensitivity

### Adjust Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --accent-cyan: #00d4ff;
  --accent-blue: #5b5fff;
  /* ... */
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+

## License

MIT License - feel free to use for your own projects.

## Credits

- Design inspiration: ChainGPT.org (aesthetic only, no assets copied)
- Built for: Sys&CoTech Student Technology Club
- University: SHUTIS-MHTS, Mongolia
- Established: 2009
