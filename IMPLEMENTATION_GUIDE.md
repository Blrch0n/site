# Sys&CoTech Landing Page - Complete Implementation Guide

## Overview

This is a premium Web3-inspired single landing page built with Next.js, React, TypeScript, and Framer Motion. The design is inspired by ChainGPT's aesthetic (dark premium, neon spectral accents, 3D hero) while using original Sys&CoTech content and branding.

---

## 🎨 DESIGN TOKENS

All tokens are implemented as CSS variables in `app/globals.css`:

### Colors

```css
--bg-base: #07080b --bg-surface: rgba(255, 255, 255, 0.04)
  --border-default: rgba(255, 255, 255, 0.08) --text-primary: #ffffff
  --text-secondary: rgba(255, 255, 255, 0.72)
  --text-muted: rgba(255, 255, 255, 0.48) /* Spectral Gradient */
  --accent-cyan: #00d4ff --accent-blue: #5b5fff --accent-violet: #9b4fff
  --accent-pink: #e94fff --accent-amber: #ffaa00;
```

### Typography (Inter Font)

- **H1**: 64px desktop / 38px mobile, weight 700, -0.02em tracking
- **H2**: 48px desktop / 32px mobile, weight 600, -0.015em tracking
- **H3**: 32px desktop / 24px mobile, weight 600, -0.01em tracking
- **Body**: 17px desktop / 16px mobile, weight 400, 1.65 line-height

### Spacing

- **Section padding**: 120px desktop / 64px mobile
- **Container max-width**: 1200px
- **Grid gaps**: 24px (cards), 16px (buttons)

### Effects

- **Border radius**: 20-24px for cards, 12px for buttons
- **Shadows**: `0 8px 32px rgba(0,0,0,0.24)` on hover
- **Glass**: `backdrop-filter: blur(16px)` + `bg: rgba(255,255,255,0.04)`
- **Grid**: 64px spacing, 6% opacity
- **Noise**: 3% opacity overlay

---

## 📐 SINGLE-PAGE ARCHITECTURE

### Section Order (Anchor Links)

1. **#top** (Hero) - Value proposition + 3D canvas
2. **#about** (About) - Mission + core values + stats
3. **#pillars** (Core Pillars) - 6 guiding principles
4. **#programs** (Training) - 4 training programs
5. **#events** (Activities) - Annual competitions + events
6. **#faq** (FAQ) - 4 common questions
7. **#contact** (Footer) - Contact info + social links

### Navigation

- **Desktop**: Horizontal links in header
- **Mobile**: Hamburger menu with full-screen overlay
- **Sticky**: Scrolls into view with backdrop blur transition

---

## 🧩 COMPONENT LIBRARY

### Components Overview

| Component  | File                        | Purpose                             |
| ---------- | --------------------------- | ----------------------------------- |
| Navigation | `components/Navigation.tsx` | Sticky nav with mobile menu         |
| Hero       | `components/Hero.tsx`       | Hero section with 3D/fallback       |
| Scene3D    | `components/Scene3D.tsx`    | Three.js R3F scene                  |
| Cards      | `components/Cards.tsx`      | Value, Pillar, Program, Event cards |
| FAQ        | `components/FAQ.tsx`        | Accordion + SectionHeader           |
| Footer     | `components/Footer.tsx`     | Contact + social links              |

### Navigation Component

**File**: `components/Navigation.tsx`

**Features**:

- Sticky positioning with scroll-triggered backdrop blur
- Smooth anchor link navigation
- Mobile hamburger menu with Framer Motion overlay
- Active section highlighting (optional enhancement)

**States**:

- `isScrolled`: Adds background when scrollY > 80px
- `isMobileMenuOpen`: Toggles mobile menu

**Animations**:

- Entry: Slide down from top (y: -100 → 0)
- Mobile menu: Fade in with stagger (60ms per link)

### Hero Component

**File**: `components/Hero.tsx`

**Features**:

- Responsive grid (2 columns desktop, stacked mobile)
- Device detection for 3D vs static poster
- Framer Motion stagger reveal
- Scroll indicator with pulse animation

**Layout**:

- **Left**: Eyebrow, H1, subtitle, 2 CTAs
- **Right**: 3D canvas (desktop) or static poster (mobile)

**Animations**:

- Stagger children: 80ms delay
- Items: opacity 0→1, y 20→0, duration 500ms
- Poster: Continuous float animation (4s sine wave)

### Scene3D Component

**File**: `components/Scene3D.tsx`

**Features**:

- Three.js + React Three Fiber
- Mouse parallax (±12° rotation on Y, ±8° on X)
- Idle float animation (sin wave)
- Scroll-linked transform (first viewport only)
- Performance optimizations (pixel ratio cap, visibility pause)

**Geometry**:

- Main: Icosahedron (metallic, emissive)
- Inner: Smaller icosahedron (transparent cyan)
- Ring: Torus (pink, emissive)
- Particles: 12 spheres in circle formation

**Lights**:

- Ambient: 0.3 intensity
- Point lights: Cyan (#00D4FF), Pink (#E94FFF)
- Spot light: Blue (#5B5FFF)

### Card Components

**File**: `components/Cards.tsx`

**Variants**:

1. **ValueCard**: Icon + title + description (3 columns)
2. **PillarCard**: Smaller, 6 total (3 columns, 2 rows)
3. **ProgramCard**: Numbered (01-04), 2 columns, with "Learn More" link
4. **EventCard**: Year badge + icon + title + description

**Shared Features**:

- Glass morphism background
- Hover lift (-1px transform)
- Border brightness on hover
- Scroll reveal with IntersectionObserver

### FAQ Component

**File**: `components/FAQ.tsx`

**Features**:

- Accordion with AnimatePresence
- Chevron icon rotation (0° → 180°)
- Smooth height animation (0 → auto)
- 4 FAQ items with stagger reveal

**Accessibility**:

- `aria-expanded` on buttons
- Keyboard navigation (Enter/Space)
- Focus visible states

### Footer Component

**File**: `components/Footer.tsx`

**Layout**:

- 3 columns: Contact | Quick Links | Policies
- Social icons (Facebook, Location)
- Bottom bar with copyright

**Features**:

- Phone numbers with tel: links
- Google Maps location link
- Stagger reveal animation

---

## 🎬 MOTION & INTERACTION SPEC

### Hero Headline Reveal

- **Trigger**: Page load
- **Stagger**: 80ms per element
- **Duration**: 500ms each
- **Properties**: opacity 0→1, y 20→0
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)
- **Sequence**: Eyebrow → H1 → Subtitle → CTAs

### 3D Mouse Parallax

- **Trigger**: mousemove on hero section
- **Lerp factor**: 0.08 (smooth follow)
- **Range**: ±12° Y rotation, ±8° X rotation
- **Reduced motion**: Disabled

### 3D Idle Float

- **Duration**: 4000ms sine wave
- **Range**: ±0.15 units on Y axis
- **Continuous**: Infinite loop via requestAnimationFrame

### 3D Scroll Transform

- **Trigger**: Scroll 0-100vh
- **Properties**:
  - Camera Y: 0 → +0.4
  - Camera rotation Y: 0 → +0.2
- **Only active**: When hero in viewport

### Card Scroll Reveal

- **Trigger**: IntersectionObserver (threshold 0.15)
- **Stagger**: 80ms per card
- **Duration**: 500ms
- **Properties**: opacity 0→1, y 30→0
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

### Card Hover Lift

- **Duration**: 300ms
- **Properties**:
  - translateY(0 → -1px)
  - border-color: rgba(255,255,255,0.08) → rgba(255,255,255,0.14)
  - shadow: md → lg
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

### Nav Sticky Transition

- **Trigger**: scroll > 80px
- **Duration**: 200ms
- **Properties**:
  - bg: transparent → rgba(7,8,11,0.9)
  - backdrop-blur: 0 → 16px
  - border-bottom: transparent → rgba(255,255,255,0.08)

### FAQ Accordion

- **Duration**: 300ms
- **Properties**:
  - height: 0 → auto
  - opacity: 0 → 1
  - chevron rotation: 0° → 180°
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

### Mobile Menu

- **Duration**: 300ms
- **Properties**:
  - Overlay opacity: 0 → 1
  - Menu items stagger: 50ms per item
  - Items: x -20→0, opacity 0→1

### Scroll Indicator

- **Duration**: 1500ms infinite
- **Properties**: opacity 0.4 → 1 → 0.4
- **Animation**: Keyframes pulse

### Reduced Motion

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ⚡ PERFORMANCE PLAN

### Targets

- **Lighthouse Performance (Mobile)**: 85+
- **LCP**: ≤2.8s
- **FID**: ≤100ms
- **CLS**: ≤0.1
- **Total JS (initial)**: ≤180 KB gzipped

### Optimizations Implemented

#### 3D Canvas Adaptive Loading

```tsx
// Only load on desktop/high-power devices
const isMobile = window.innerWidth < 768;
const lowPower =
  navigator.deviceMemory < 4 || navigator.hardwareConcurrency < 4;
setIsMobile(mobile || lowPower);

// Lazy load with dynamic import
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });
```

#### Intersection Observer

```tsx
// Only load 3D when hero visible
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !isMobile) {
      setShouldLoad3D(true);
    }
  },
  { threshold: 0.1 },
);
```

#### Pixel Ratio Capping

```tsx
// In Scene3D.tsx
const pixelRatio = Math.min(2, window.devicePixelRatio);
<Canvas dpr={pixelRatio} />;
```

#### Pause When Hidden

```tsx
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // R3F automatically pauses frameloop: "always"
  }
});
```

#### Mobile Fallback

Static gradient poster with CSS-only float animation instead of Three.js:

```tsx
<motion.div
  animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  {/* SVG gradient circles */}
</motion.div>
```

#### Font Loading

```tsx
// layout.tsx - Using next/font with display: swap
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
```

#### Image Optimization

- No heavy images in initial viewport (3D handles visuals)
- Poster uses inline SVG data URI (no network request)

---

## 🎯 ACCESSIBILITY

### Keyboard Navigation

- All interactive elements focusable (Tab order)
- Focus visible states with 2px spectral outline
- Skip-to-content link (optional enhancement)

### ARIA Labels

- `aria-label` on icon-only buttons (hamburger, social)
- `aria-expanded` on FAQ accordion buttons
- `aria-controls` linking questions to answers

### Color Contrast

- Text on dark: WCAG AA compliant
- Spectral gradient: Used for accents only, not primary text
- Focus indicators: High contrast

### Reduced Motion

- Respects `prefers-reduced-motion` media query
- Disables all transforms/animations
- 3D scene disabled entirely

### Semantic HTML

- `<nav>`, `<main>`, `<section>`, `<footer>`
- Heading hierarchy (H1 → H2 → H3 → H4)
- `<button>` for interactive elements, `<a>` for links

---

## 🚀 DEPLOYMENT & USAGE

### Development

```bash
npm run dev
```

Visit http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

Or connect GitHub repo to Vercel for auto-deploy.

---

## 📝 CONTENT UPDATES

### Update Section Content

Edit `app/page.tsx`:

```tsx
<ValueCard
  icon={<YourIcon />}
  title="Your Title"
  description="Your description"
/>
```

### Update FAQ

Edit `components/FAQ.tsx`:

```tsx
const faqData = [
  {
    question: "Your question?",
    answer: "Your answer.",
  },
];
```

### Update Contact Info

Edit `components/Footer.tsx`:

```tsx
<a href="tel:+97694945798">+976 9494 5798</a>
```

### Update Colors

Edit `app/globals.css`:

```css
:root {
  --accent-cyan: #YourColor;
}
```

Then use in components:

```tsx
className = "text-[#00D4FF]"; // Direct Tailwind
className = "spectral-text"; // Utility class for gradient
```

---

## 🎨 CUSTOMIZING 3D SCENE

### Change Geometry

Edit `components/Scene3D.tsx`:

```tsx
// Replace icosahedron with your shape
<icosahedronGeometry args={[1.2, 1]} />
// to
<torusKnotGeometry args={[1, 0.3, 100, 16]} />
```

### Adjust Colors

```tsx
<meshStandardMaterial
  color="#YourColor"
  emissive="#YourColor"
  emissiveIntensity={0.4}
/>
```

### Mouse Sensitivity

```tsx
targetRotation.current = {
  x: y * 0.15, // Change 0.15 to adjust X sensitivity
  y: x * 0.2, // Change 0.2 to adjust Y sensitivity
};
```

### Add Your GLTF Model

```tsx
import { useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/your-model.glb");
  return <primitive object={scene} />;
}
```

---

## 🔧 TROUBLESHOOTING

### 3D Scene Not Loading

- Check browser console for Three.js errors
- Verify device is not mobile/low-power
- Check IntersectionObserver is triggering

### Performance Issues

- Increase pixel ratio cap: `Math.min(1.5, window.devicePixelRatio)`
- Reduce geometry complexity
- Disable post-processing effects

### Animation Not Working

- Check Framer Motion is installed: `npm list framer-motion`
- Verify `useInView` hook is in viewport
- Check `prefers-reduced-motion` setting

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

---

## 📦 DEPENDENCIES

```json
{
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.5.0",
  "framer-motion": "^12.29.2",
  "lucide-react": "^0.563.0",
  "next": "16.1.4",
  "react": "19.2.3",
  "three": "^0.182.0"
}
```

---

## 📄 LICENSE & CREDITS

- **License**: MIT
- **Design Inspiration**: ChainGPT.org (aesthetic only)
- **Original Content**: Sys&CoTech Student Technology Club
- **University**: SHUTIS-MHTS, Mongolia
- **Established**: 2009
- **Tech Stack**: Next.js + React + Three.js + Framer Motion

---

## 🎓 LEARNING RESOURCES

### Framer Motion

- [Official Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

### React Three Fiber

- [Official Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)

### Three.js

- [Official Docs](https://threejs.org/docs/)
- [Examples](https://threejs.org/examples/)

### Tailwind CSS v4

- [Official Docs](https://tailwindcss.com/)
- [CSS-first approach](https://tailwindcss.com/blog/tailwindcss-v4-alpha)

---

**Built with 💙 for Sys&CoTech by the community**
