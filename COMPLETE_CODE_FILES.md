# Complete Code Files - Sys&CoTech Landing Page

**Last Updated:** January 27, 2026  
**Version:** V3 - ChainGPT-Inspired Refinements

## 🎯 Latest Updates (V3)

### Critical Technical Fixes ✅

- **Scene3D.tsx**: Removed robot.glb dependency, now uses premium GeometricModel
  - Fixed: Invalid hooks usage (removed try/catch around useGLTF)
  - Fixed: Unified DPR state management with onDprChange callback
  - Fixed: Changed frameloop to "always" for continuous animation
  - Enhanced: Animated energy core with pulsing emissive intensity

### New Components 🆕

- **HUDFrame.tsx**: Reusable corner bracket component (default & compact variants)
- **Button.tsx**: Standardized button system (primary gradient & secondary glass variants)

### Dependencies ➕

- Added `react-error-boundary@^4.0.11` for error handling

---

This document contains all the complete code files for the Sys&CoTech landing page. You can copy and paste each file directly into your project.

---

## Table of Contents

1. [Configuration Files](#configuration-files)
   - [package.json](#packagejson)
   - [tsconfig.json](#tsconfigjson)
   - [next.config.ts](#nextconfigts)
2. [App Files](#app-files)
   - [app/layout.tsx](#applayouttsx)
   - [app/page.tsx](#apppagetsx)
   - [app/globals.css](#appglobalscss)
3. [Component Files](#component-files)
   - [components/Navigation.tsx](#componentsnavigationtsx)
   - [components/Hero.tsx](#componentsherotsx)
   - [components/Scene3D.tsx](#componentsscene3dtsx) ⭐ **Updated**
   - [components/Cards.tsx](#componentscardstsx)
   - [components/FAQ.tsx](#componentsfaqtsx)
   - [components/HUDFrame.tsx](#componentshudframetsx) 🆕 **New**
   - [components/Button.tsx](#componentsbuttontsx) 🆕 **New**
   - [components/Footer.tsx](#componentsfootertsx)

---

## Configuration Files

### package.json

**File Path:** `/package.json`

```json
{
  "name": "club_web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@react-three/postprocessing": "^3.0.4",
    "framer-motion": "^12.29.2",
    "geist": "^1.5.1",
    "lucide-react": "^0.563.0",
    "next": "16.1.4",
    "next-themes": "^0.4.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-error-boundary": "^4.0.11",
    "three": "^0.182.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

### tsconfig.json

**File Path:** `/tsconfig.json`

```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next",
      },
    ],
    "paths": {
      "@/*": ["./*"],
    },
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
  ],
  "exclude": ["node_modules"],
}
```

---

### next.config.ts

**File Path:** `/next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

---

## App Files

### app/layout.tsx

**File Path:** `/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

---

### app/page.tsx

**File Path:** `/app/page.tsx`

```tsx
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { SectionHeader } from "@/components/FAQ";
import {
  ValueCard,
  PillarCard,
  ProgramCard,
  EventCard,
} from "@/components/Cards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  Layers,
  Palette,
  Code2,
  Users,
  GraduationCap,
  Zap,
  BookOpen,
  Lightbulb,
  Trophy,
  Calendar,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF] opacity-[0.08] blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B4FFF] opacity-[0.08] blur-[120px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="WHO WE ARE"
              title="United by Passion, Driven by Innovation"
              subtitle="Since 2009, Sys&CoTech has been empowering students to master cutting-edge technologies and shape the future."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <ValueCard
                icon={<Layers className="w-6 h-6 text-[#00D4FF]" />}
                title="Learn Together"
                description="Master new technologies through hands-on collaboration and peer-to-peer teaching."
                delay={0}
              />
              <ValueCard
                icon={<Palette className="w-6 h-6 text-[#5B5FFF]" />}
                title="Design Excellence"
                description="Awaken inner creativity through digital design and visual innovation."
                delay={0.08}
              />
              <ValueCard
                icon={<Code2 className="w-6 h-6 text-[#E94FFF]" />}
                title="Engineer Mindset"
                description="Solve complex problems with competitive programming and algorithmic thinking."
                delay={0.16}
              />
            </div>

            {/* Stats Strip */}
            <div className="relative group flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 md:p-12 rounded-2xl bg-white/4 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#5B5FFF]/5 to-[#E94FFF]/5 opacity-50" />
              <div className="absolute inset-0 border border-[#5B5FFF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                  13+
                </div>
                <div className="text-white/70">Active Members</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                  36+
                </div>
                <div className="text-white/70">Total Members</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                  36+
                </div>
                <div className="text-white/70">Projects Built</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section
          id="pillars"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#5B5FFF] opacity-[0.06] blur-[150px] rounded-full" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E94FFF] opacity-[0.06] blur-[150px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="OUR CORE"
              title="Six Pillars of Excellence"
              subtitle="Principles that guide every project, event, and lesson we create."
            />

            <div className="grid md:grid-cols-3 gap-6">
              <PillarCard
                icon={<BookOpen className="w-6 h-6 text-[#00D4FF]" />}
                title="Learning New Technologies"
                description="Master emerging tools and frameworks to stay ahead of the curve."
                delay={0}
              />
              <PillarCard
                icon={<Palette className="w-6 h-6 text-[#5B5FFF]" />}
                title="Design Creation"
                description="Awaken inner artistry through digital design and visual excellence."
                delay={0.08}
              />
              <PillarCard
                icon={<Code2 className="w-6 h-6 text-[#9B4FFF]" />}
                title="Engineering Mindset"
                description="Solve complex problems with competitive programming expertise."
                delay={0.16}
              />
              <PillarCard
                icon={<Users className="w-6 h-6 text-[#E94FFF]" />}
                title="Leadership & Responsibility"
                description="Mentor peers and lead by example in all initiatives."
                delay={0.24}
              />
              <PillarCard
                icon={<GraduationCap className="w-6 h-6 text-[#FFAA00]" />}
                title="Education"
                description="Share knowledge within the club and beyond our community."
                delay={0.32}
              />
              <PillarCard
                icon={<Zap className="w-6 h-6 text-[#00D4FF]" />}
                title="Innovation"
                description="Always think, always create, always evolve forward."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section
          id="programs"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Centered Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-[#00D4FF] opacity-[0.05] blur-[180px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="TRAINING"
              title="Master the Fundamentals"
              subtitle="Student-led training programs designed for real-world impact."
            />

            <div className="grid md:grid-cols-2 gap-6">
              <ProgramCard
                number="01"
                title="Programming Fundamentals"
                description="Build problem-solving foundations with C language. Learn core concepts through hands-on practice."
                delay={0}
              />
              <ProgramCard
                number="02"
                title="Object-Oriented Programming"
                description="Master OOP patterns with Java. Practical implementation of real-world design principles."
                delay={0.08}
              />
              <ProgramCard
                number="03"
                title="UI/UX Design"
                description="Design theory and tools for digital products. Master Figma, principles, and user-centered design."
                delay={0.16}
              />
              <ProgramCard
                number="04"
                title="Web Development"
                description="Full-stack technologies from client to server. HTML, CSS, JavaScript, Node.js, and modern frameworks."
                delay={0.24}
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section
          id="events"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Diagonal Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#9B4FFF] opacity-[0.08] blur-[140px] rounded-full" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#FFAA00] opacity-[0.06] blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="ACTIVITIES"
              title="We Build Together"
              subtitle="Annual competitions and community events that define us."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <EventCard
                year="17 Years"
                icon={<Trophy className="w-10 h-10 text-[#00D4FF]" />}
                title="Competitive Programming Contest"
                description="Annual algorithm competition testing problem-solving skills."
                delay={0}
              />
              <EventCard
                year="10 Years"
                icon={<Lightbulb className="w-10 h-10 text-[#5B5FFF]" />}
                title="Dev Hackathon"
                description="48-hour innovation sprint to build the next big idea."
                delay={0.08}
              />
              <EventCard
                year="Ongoing"
                icon={<Calendar className="w-10 h-10 text-[#9B4FFF]" />}
                title="Training Sessions"
                description="Weekly workshops for students and club members."
                delay={0.16}
              />
              <EventCard
                year="Ongoing"
                icon={<Clock className="w-10 h-10 text-[#E94FFF]" />}
                title="Collaborative Events"
                description="Partnerships with clubs and sponsors like Golomt Bank."
                delay={0.24}
              />
            </div>
          </div>
        </section>

        <FAQ />
        <Footer />
      </main>
    </>
  );
}
```

---

### app/globals.css

**File Path:** `/app/globals.css`

```css
@import "tailwindcss";

@layer base {
  :root {
    /* ChainGPT-inspired Web3 Premium Tokens */
    --bg-base: #07080b;
    --bg-surface: rgba(255, 255, 255, 0.04);
    --bg-surface-hover: rgba(255, 255, 255, 0.06);
    --bg-surface-active: rgba(255, 255, 255, 0.08);

    --border-default: rgba(255, 255, 255, 0.08);
    --border-accent: rgba(91, 95, 255, 0.3);
    --border-glow: rgba(91, 95, 255, 0.5);

    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.72);
    --text-muted: rgba(255, 255, 255, 0.48);

    --accent-cyan: #00d4ff;
    --accent-blue: #5b5fff;
    --accent-violet: #9b4fff;
    --accent-pink: #e94fff;
    --accent-amber: #ffaa00;

    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.16);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.24);
    --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.32);
    --shadow-glow: 0 0 24px rgba(91, 95, 255, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #07080b;
    color: var(--text-primary);
    font-family:
      Inter,
      system-ui,
      -apple-system,
      sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  /* Film grain overlay */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.025;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: overlay;
  }

  /* Vignette effect */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 50%,
      rgba(7, 8, 11, 0.4) 100%
    );
    pointer-events: none;
    z-index: 9998;
  }

  * {
    border-color: var(--border-default);
  }

  /* Typography Scale (Premium Web3) */
  h1 {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.015em;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.375rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  /* Spectral gradient text */
  .spectral-text {
    background: linear-gradient(
      90deg,
      #00d4ff 0%,
      #5b5fff 25%,
      #9b4fff 50%,
      #e94fff 75%,
      #ffaa00 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Grid background with subtle lines */
  .grid-bg {
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* Gradient mask (fade to bottom) */
  .mask-gradient-to-b {
    mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  }

  /* Radial gradient from center */
  .bg-radial-gradient {
    background: radial-gradient(
      ellipse at center,
      var(--tw-gradient-from) 0%,
      var(--tw-gradient-via) 50%,
      var(--tw-gradient-to) 100%
    );
  }

  /* Premium glass panel */
  .glass-panel {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.05),
      0 8px 32px rgba(0, 0, 0, 0.3);
  }

  /* HUD border glow effect */
  .hud-border {
    position: relative;
  }

  .hud-border::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(0, 212, 255, 0.5),
      rgba(91, 95, 255, 0.5),
      rgba(155, 79, 255, 0.3)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .hud-border:hover::before {
    opacity: 1;
  }

  /* Corner brackets (for HUD frames) */
  .corner-brackets {
    position: relative;
  }

  .corner-brackets::before,
  .corner-brackets::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(91, 95, 255, 0.4);
  }

  .corner-brackets::before {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .corner-brackets::after {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }

  /* Glow utilities */
  .glow-cyan {
    box-shadow:
      0 0 40px rgba(0, 212, 255, 0.3),
      0 0 80px rgba(0, 212, 255, 0.15);
  }

  .glow-blue {
    box-shadow:
      0 0 40px rgba(91, 95, 255, 0.3),
      0 0 80px rgba(91, 95, 255, 0.15);
  }

  .glow-violet {
    box-shadow:
      0 0 40px rgba(155, 79, 255, 0.3),
      0 0 80px rgba(155, 79, 255, 0.15);
  }

  .glow-pink {
    box-shadow:
      0 0 40px rgba(233, 79, 255, 0.3),
      0 0 80px rgba(233, 79, 255, 0.15);
  }

  /* Inset glow for cards */
  .inset-glow {
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);
  }

  /* Hover lift animation */
  .hover-lift {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hover-lift:hover {
    transform: translateY(-4px);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  body::before,
  body::after {
    display: none;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.02);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
```

---

## Component Files

### components/Navigation.tsx

**File Path:** `/components/Navigation.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Pillars" },
  { href: "#programs", label: "Programs" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[rgba(7,8,11,0.9)] backdrop-blur-2xl border-b border-white/8 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo with HUD accent */}
            <a
              href="#top"
              className="flex items-center gap-2 text-lg font-semibold text-white hover:opacity-80 transition-opacity group"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#5B5FFF] group-hover:animate-pulse" />
              <span>Sys&CoTech</span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group py-2"
                  >
                    {link.label}
                    <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#E94FFF] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(91,95,255,0.6)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Join Us
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-[#07080B]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-20 mx-6 p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block py-3 text-lg font-medium text-white hover:text-[#00D4FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-6 block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold"
              >
                Join Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### components/Hero.tsx

**File Path:** `/components/Hero.tsx`

```tsx
"use client";

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      const lowPower =
        (navigator as any).deviceMemory < 4 ||
        navigator.hardwareConcurrency < 4;
      setIsMobile(mobile || lowPower);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Lazy load 3D only when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isMobile) {
          setShouldLoad3D(true);
        }
      },
      { threshold: 0.1 },
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#07080B]" />
        <div className="absolute inset-0 grid-bg opacity-40 mask-gradient-to-b" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            {/* Badge Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#5B5FFF] animate-pulse" />
              <span className="spectral-text">Est. 2009</span>
            </motion.div>

            {/* Headline with gradient underline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Where Innovation
              <br />
              Meets{" "}
              <span className="relative inline-block">
                <span className="spectral-text">Community</span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] rounded-full opacity-60" />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
            >
              Join Mongolia&apos;s premier technology student club. Learn,
              build, and lead the next generation of digital innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(91,95,255,0.6)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Join the Club</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>
              <a
                href="#programs"
                className="px-8 py-4 rounded-2xl glass-panel text-white font-semibold text-base hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 group relative"
              >
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-300" />
              </a>
            </motion.div>

            {/* HUD Line Separator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#5B5FFF] to-transparent" />
              <div className="text-xs text-white/40 font-mono uppercase tracking-wider">
                SCROLL TO EXPLORE
              </div>
            </motion.div>
          </motion.div>

          {/* Right: HUD-Framed 3D Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00D4FF]/10 via-[#5B5FFF]/10 to-[#E94FFF]/10 blur-3xl" />

            {/* Main panel with corner brackets */}
            <div className="relative aspect-square w-full max-w-lg mx-auto corner-brackets">
              {/* HUD Frame Lines */}
              <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-[#5B5FFF] to-transparent" />
              <div className="absolute top-0 left-0 w-[2px] h-20 bg-gradient-to-b from-[#5B5FFF] to-transparent" />
              <div className="absolute bottom-0 right-0 w-20 h-[2px] bg-gradient-to-l from-[#5B5FFF] to-transparent" />
              <div className="absolute bottom-0 right-0 w-[2px] h-20 bg-gradient-to-t from-[#5B5FFF] to-transparent" />

              {/* Glass panel container */}
              <div className="relative rounded-3xl glass-panel inset-glow overflow-hidden shadow-2xl h-full">
                {isMobile ? (
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#5B5FFF] opacity-40 blur-3xl" />
                          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#5B5FFF] to-[#9B4FFF] opacity-50 blur-2xl" />
                          <div className="absolute inset-16 rounded-full bg-[#00D4FF] opacity-80" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* Desktop: 3D Scene */
                  shouldLoad3D && (
                    <Suspense
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 border-4 border-[#5B5FFF] border-t-transparent rounded-full animate-spin" />
                        </div>
                      }
                    >
                      <Scene3D />
                    </Suspense>
                  )
                )}

                {/* Overlay UI Card (Tooltip) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 border-l-2 border-l-[#00D4FF]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00D4FF] mt-1.5 animate-pulse" />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">
                        Interactive 3D Experience
                      </div>
                      <div className="text-xs text-white/60">
                        Move your mouse to explore
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-mono uppercase tracking-wider">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

---

### components/Scene3D.tsx

**File Path:** `/components/Scene3D.tsx`

```tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  AdaptiveDpr,
  PerformanceMonitor,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// Premium geometric model with animated "energy core" shader effect
function GeometricModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      // Pulsing emissive intensity
      const material = coreRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity =
        0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <>
      {/* Main geometric shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#5B5FFF"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
          emissive="#5B5FFF"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Animated energy core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#00D4FF"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
          emissive="#00D4FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#E94FFF"
          metalness={1}
          roughness={0}
          emissive="#E94FFF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Accent particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.2;
        const colors = ["#00D4FF", "#5B5FFF", "#9B4FFF"];
        const color = colors[i % colors.length];
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.2,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={1.2}
            />
          </mesh>
        );
      })}
    </>
  );
}

function Model() {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("hero");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotation.current = {
        x: y * 0.1,
        y: x * 0.15,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smooth lerp for mouse parallax
    currentRotation.current.x +=
      (targetRotation.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y +=
      (targetRotation.current.y - currentRotation.current.y) * 0.05;

    groupRef.current.rotation.x = currentRotation.current.x;
    groupRef.current.rotation.y =
      currentRotation.current.y + state.clock.elapsedTime * 0.08;

    // Idle float animation (breathing)
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <GeometricModel />
    </group>
  );
}

function Scene({ onDprChange }: { onDprChange: (dpr: number) => void }) {
  const { camera } = useThree();

  useEffect(() => {
    // Minimal scroll interaction
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      if (camera && progress < 0.3) {
        camera.position.y = progress * 0.2;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

      {/* Lighting setup optimized for rim lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#E94FFF" />

      {/* Rim/back light for neon edge effect */}
      <pointLight position={[0, 0, -5]} intensity={2} color="#5B5FFF" />
      <spotLight
        position={[0, 5, 0]}
        intensity={1}
        color="#5B5FFF"
        angle={0.6}
        penumbra={1}
      />

      <Model />
      <Environment preset="city" />

      {/* Postprocessing effects */}
      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>

      {/* Performance monitoring - unified DPR state */}
      <PerformanceMonitor
        onIncline={() => onDprChange(2)}
        onDecline={() => onDprChange(1)}
      />
      <AdaptiveDpr pixelated />
    </>
  );
}

export default function Scene3D() {
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    // Cap DPR based on device
    const maxDpr = Math.min(2, window.devicePixelRatio);
    setDpr(window.innerWidth < 768 ? 1 : maxDpr);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={false}
        frameloop="always" // Changed to always for continuous animation
      >
        <Scene onDprChange={setDpr} />
      </Canvas>
    </div>
  );
}
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false, // Disable for performance
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={false} // Disable shadows for performance
        frameloop="demand" // Only render when needed
      >
        <Scene />
      </Canvas>
    </div>
  );
}
```

---

### components/Cards.tsx

**File Path:** `/components/Cards.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl glass-panel inset-glow p-8 hover-lift hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_80px_rgba(91,95,255,0.2)] ${className}`}
    >
      {/* Gradient border overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#00D4FF]/30 via-[#5B5FFF]/30 to-[#9B4FFF]/20 bg-clip-border"
          style={{ WebkitMaskComposite: "xor", maskComposite: "exclude" }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ValueCard({
  icon,
  title,
  description,
  delay = 0,
}: ValueCardProps) {
  return (
    <Card delay={delay}>
      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF]/10 to-[#5B5FFF]/10 border border-[#00D4FF]/20 mb-6 group-hover:border-[#00D4FF]/40 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300">
        <div className="absolute inset-0 bg-[#00D4FF]/5 rounded-xl blur-sm" />
        <div className="relative">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00D4FF] transition-colors">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </Card>
  );
}

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function PillarCard({
  icon,
  title,
  description,
  delay = 0,
}: PillarCardProps) {
  return (
    <Card delay={delay}>
      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B5FFF]/10 to-[#9B4FFF]/10 border border-[#5B5FFF]/20 mb-5 group-hover:scale-110 group-hover:border-[#5B5FFF]/40 group-hover:shadow-[0_0_20px_rgba(91,95,255,0.3)] transition-all duration-300">
        <div className="absolute inset-0 bg-[#5B5FFF]/5 rounded-xl blur-sm" />
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-[#5B5FFF] transition-colors">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProgramCard({
  number,
  title,
  description,
  delay = 0,
}: ProgramCardProps) {
  return (
    <Card delay={delay} className="relative overflow-hidden min-h-[280px]">
      {/* Glowing number background */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-full blur-2xl group-hover:from-[#00D4FF]/20 transition-all duration-500" />

      <div className="absolute top-8 right-8 text-7xl font-bold spectral-text opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-4 pr-16 group-hover:text-[#00D4FF] transition-colors">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed mb-6">{description}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] font-medium hover:bg-[#00D4FF]/20 hover:gap-3 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
        >
          Learn More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}

interface EventCardProps {
  year: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function EventCard({
  year,
  icon,
  title,
  description,
  delay = 0,
}: EventCardProps) {
  return (
    <Card delay={delay}>
      <div className="inline-block px-4 py-1.5 rounded-lg bg-linear-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 border border-[#5B5FFF]/30 text-sm font-semibold spectral-text mb-5 group-hover:border-[#5B5FFF]/50 group-hover:shadow-[0_0_15px_rgba(91,95,255,0.3)] transition-all">
        {year}
      </div>
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#9B4FFF]/10 to-[#E94FFF]/10 border border-[#9B4FFF]/20 mb-5 group-hover:scale-110 group-hover:border-[#9B4FFF]/40 group-hover:shadow-[0_0_25px_rgba(155,79,255,0.4)] transition-all duration-300">
        <div className="absolute inset-0 bg-[#9B4FFF]/5 rounded-xl blur-sm" />
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-xl font-semibold mb-3 group-hover:text-[#9B4FFF] transition-colors">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
```

---

### components/FAQ.tsx

**File Path:** `/components/FAQ.tsx`

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg md:text-xl font-semibold pr-4 group-hover:text-[#00D4FF] transition-colors">
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/70 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const faqData = [
    {
      question: "How do I join the club?",
      answer:
        "Simply attend one of our open events or contact us directly through Facebook or phone. We welcome all students interested in technology, regardless of skill level.",
    },
    {
      question: "Are there requirements (year, major, age)?",
      answer:
        "No strict requirements! We welcome students from all years and majors. Passion for learning technology is the only prerequisite.",
    },
    {
      question: "What are the benefits of membership?",
      answer:
        "Access to training programs, mentorship opportunities, networking with industry professionals, participation in competitions, and hands-on project experience.",
    },
    {
      question: "How do I enroll in training programs?",
      answer:
        "Training enrollment opens at the start of each semester. Follow our Facebook page or contact us to get notified when registration begins.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining Sys&CoTech."
        />

        <div className="mt-16 rounded-2xl bg-white/4 border border-white/8 p-6 md:p-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {eyebrow && (
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium spectral-text mb-4 uppercase tracking-wider">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-white/70 leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
```

---

### components/HUDFrame.tsx

**File Path:** `/components/HUDFrame.tsx`

```tsx
"use client";

import { ReactNode } from "react";

interface HUDFrameProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "compact";
}

export function HUDFrame({
  children,
  className = "",
  variant = "default",
}: HUDFrameProps) {
  const lineLength = variant === "compact" ? "w-12 h-12" : "w-20 h-20";
  const thickness =
    variant === "compact" ? "h-[1px] w-[1px]" : "h-[2px] w-[2px]";

  return (
    <div className={`relative ${className}`}>
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <div
          className={`absolute top-0 left-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-r from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute top-0 left-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-b from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute top-0 right-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-l from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute top-0 right-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-b from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none">
        <div
          className={`absolute bottom-0 left-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-r from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute bottom-0 left-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-t from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div
          className={`absolute bottom-0 right-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-gradient-to-l from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute bottom-0 right-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-gradient-to-t from-[#5B5FFF] to-transparent`}
        />
      </div>

      {children}
    </div>
  );
}
```

---

### components/Button.tsx

**File Path:** `/components/Button.tsx`

```tsx
"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B]";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(91,95,255,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "glass-panel text-white border border-white/10 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {variant === "secondary" && (
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === "secondary" && (
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
```

---

### components/Footer.tsx

**File Path:** `/components/Footer.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./FAQ";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title="Join Our Community"
          subtitle="Reach out with questions or come visit us on campus."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+97694945798"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+976 9494 5798</span>
              </a>
              <a
                href="tel:+97694351314"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+976 9435 1314</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={18} />
                </div>
                <span>SHUTIS-MHTS Room 400</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/SysAndCoTech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-1 hover:border-[#00D4FF] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://goo.gl/maps/Qwv3RYvybs8YqJsS8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-1 hover:border-[#00D4FF] transition-all"
                aria-label="Location"
              >
                <MapPin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#programs", label: "Programs" },
                { href: "#events", label: "Events" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">
              Club Policies
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Member Rights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Club Rules
                </a>
              </li>
              <li>
                <a
                  href="https://hackathon.syscotech.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Dev Hackathon
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50"
        >
          <p>&copy; 2026 Sys&CoTech. All rights reserved.</p>
          <p>Built with passion by the community.</p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Installation & Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Access the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **Three.js + React Three Fiber** - 3D graphics
- **Lucide React** - Icon library

---

## Features

✅ **ChainGPT-inspired premium Web3 aesthetic**  
✅ HUD framing with corner brackets and accent lines  
✅ Premium glass panels with inset glow effects  
✅ Postprocessing effects (Bloom + Vignette for neon aesthetic)  
✅ Film grain overlay and vignette for cinematic feel  
✅ Responsive design (mobile-first with adaptive performance)  
✅ Interactive 3D hero scene with mouse parallax and rim lighting  
✅ Smooth scroll animations with Framer Motion  
✅ Performance-optimized (lazy loading, device detection, AdaptiveDpr, PerformanceMonitor)  
✅ Fully TypeScript-typed components  
✅ Accessible navigation with mobile menu  
✅ Gradient underlines and pulsing indicators  
✅ FAQ accordion with animations  
✅ Contact section with social links  
✅ Custom utility classes: `.glass-panel`, `.hud-border`, `.corner-brackets`, `.inset-glow`, `.hover-lift`

---

## Project Structure

```
club_web/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with premium utilities
├── components/
│   ├── Navigation.tsx      # Sticky header with pulsing logo dot (h-16)
│   ├── Hero.tsx            # Hero with HUD framing, corner brackets, overlay UI card
│   ├── Scene3D.tsx         # Three.js scene with Bloom + Vignette postprocessing
│   ├── Cards.tsx           # Glass panel cards with inset glows
│   ├── FAQ.tsx             # FAQ accordion + SectionHeader
│   └── Footer.tsx          # Contact footer
├── package.json            # Dependencies (includes @react-three/postprocessing)
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

---

**Created:** January 27, 2026  
**Updated:** January 27, 2026 (ChainGPT Aesthetic Upgrade)  
**Version:** 2.0.0  
**Author:** GitHub Copilot (Claude Sonnet 4.5)
