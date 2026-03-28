# MOUNTY INK — Software Requirements Document (SRD)

> **Version:** 1.0
> **Date:** 2026-03-28
> **Project:** Mounty Ink Bali — Dual Landing Page Website

---

## 1. System Overview

A statically-generated Next.js website consisting of two landing pages served from a single codebase, sharing a unified component library and design system.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    VERCEL (Hosting)                      │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │  CDN Edge   │  │  SSL/TLS    │  │  Analytics     │  │
│  └──────┬──────┘  └─────────────┘  └────────────────┘  │
│         │                                               │
│  ┌──────┴──────────────────────────────────────────┐    │
│  │              NEXT.JS 15 (App Router)             │    │
│  │                                                  │    │
│  │  ┌────────────┐    ┌─────────────────────────┐  │    │
│  │  │  /  (Sales) │    │  /company (Profile)     │  │    │
│  │  │  SSG Page   │    │  SSG Page               │  │    │
│  │  └──────┬─────┘    └───────────┬─────────────┘  │    │
│  │         │                      │                 │    │
│  │  ┌──────┴──────────────────────┴──────────────┐ │    │
│  │  │        SHARED COMPONENT LIBRARY            │ │    │
│  │  │  Navbar · Footer · ScrollReveal · etc.     │ │    │
│  │  └──────────────────┬─────────────────────────┘ │    │
│  │                     │                            │    │
│  │  ┌──────────────────┴─────────────────────────┐ │    │
│  │  │           DESIGN SYSTEM (CSS)              │ │    │
│  │  │  Tailwind v4 · @theme tokens · Utilities   │ │    │
│  │  └────────────────────────────────────────────┘ │    │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
│  External Services:                                     │
│  ┌──────────┐  ┌─────────────┐  ┌───────────────────┐  │
│  │ WhatsApp │  │ Google Maps │  │  Google Analytics  │  │
│  └──────────┘  └─────────────┘  └───────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js | 15.x | App Router, SSG, Image optimization |
| **Language** | TypeScript | 5.7+ | Type safety |
| **UI Library** | React | 19.x | Component model |
| **Styling** | Tailwind CSS | 4.x | Utility-first CSS, `@theme` design tokens |
| **Animation** | Framer Motion | 11.x | Scroll-triggered animations, layout transitions |
| **Icons** | Lucide React | 0.468+ | Consistent icon set |
| **Fonts** | Google Fonts (next/font) | — | Cormorant Garamond + Inter, self-hosted |
| **Hosting** | Vercel | — | Edge CDN, auto SSL, preview deploys |
| **Package Manager** | npm | 10.x | Dependency management |

---

## 3. Project Structure

```
mountyInk/
├── public/
│   ├── logo.png                    # Approved brand logo
│   ├── images/                     # AI-generated images (Phase 2)
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── artists/
│   │   ├── studio/
│   │   ├── testimonials/
│   │   └── styles/
│   ├── favicon.ico
│   └── og-image.jpg                # Open Graph social sharing image
│
├── src/
│   └── app/
│       ├── layout.tsx              # Root layout (fonts, metadata, body)
│       ├── page.tsx                # Sales Landing Page (/)
│       ├── globals.css             # Design system + Tailwind config
│       │
│       ├── company/
│       │   └── page.tsx            # Company Profile Page (/company)
│       │
│       └── components/
│           ├── Navbar.tsx          # SHARED — Sticky glass nav
│           ├── Footer.tsx          # SHARED — Site footer
│           ├── ScrollReveal.tsx    # SHARED — Scroll animation wrapper
│           ├── SectionHeading.tsx  # SHARED — Section title pattern
│           ├── WhatsAppFloat.tsx   # SHARED — Floating WhatsApp button
│           │
│           ├── HeroSales.tsx       # SALES — Full-viewport hero
│           ├── TrustBar.tsx        # SALES — Stats ribbon
│           ├── Portfolio.tsx       # SHARED — Filterable gallery
│           ├── StylesPricing.tsx   # SALES — Style cards with pricing
│           ├── ArtistSpotlight.tsx # SALES — Artist preview cards
│           ├── Testimonials.tsx    # SHARED — Client reviews
│           ├── HowItWorks.tsx      # SALES — 3-step process
│           ├── BookingCTA.tsx      # SALES — Full-width booking section
│           ├── FAQ.tsx             # SALES — Accordion FAQ
│           │
│           ├── HeroCompany.tsx     # COMPANY — Cinematic logo reveal
│           ├── BrandStory.tsx      # COMPANY — Editorial story section
│           ├── VisionMission.tsx   # COMPANY — Values + vision quote
│           ├── StatsCounter.tsx    # COMPANY — Animated counters
│           ├── StudioGallery.tsx   # COMPANY — Bento studio photos
│           ├── TeamFull.tsx        # COMPANY — Full artist bios
│           ├── HygieneStandards.tsx# COMPANY — Safety standards
│           └── ContactSection.tsx  # COMPANY — Map + contact info
│
├── docs/
│   ├── PRD.md                      # Product Requirements Document
│   ├── SRD.md                      # Software Requirements Document (this file)
│   ├── SOP.md                      # Standard Operating Procedure
│   └── GUIDE.md                    # Comprehensive Development Guide
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 4. Design System Specification

### 4.1 Color Tokens

```css
/* Backgrounds */
--color-bg-primary:    #050507     /* Velvet black — main page bg */
--color-bg-secondary:  #0A0F1A    /* Dark navy tint — alternating sections */
--color-bg-card:       #111827    /* Elevated card surface */
--color-bg-elevated:   #1E293B    /* Highest elevation (dropdowns, modals) */

/* Brand Blues */
--color-blue-deep:     #1A3A6B    /* Primary brand blue — headings, accents */
--color-blue-electric: #2E7BFF    /* CTA blue — buttons, links, interactive */
--color-blue-glow:     #2E7BFF33  /* Glow/shadow — hover states */
--color-blue-mist:     #2E7BFF15  /* Subtle bg tint — highlights */

/* Text */
--color-text-primary:  #F5F5F7    /* Headings, primary content */
--color-text-secondary:#C8D0DC    /* Body text, descriptions */
--color-text-muted:    #8A9BB0    /* Captions, labels, secondary info */

/* Structural */
--color-divider:       #1E293B    /* Borders, separators, rules */
```

### 4.2 Typography Scale

```
Font Families:
  Heading: "Cormorant Garamond" (serif) — weights 300-700
  Body:    "Inter" (sans-serif) — weights 300-700

Scale (Desktop):
  Hero H1:       clamp(3rem, 5vw, 5rem)    / line-height 0.95
  Section H2:    clamp(2.5rem, 4vw, 3.75rem) / line-height 1.1
  Card H3:       1.5rem                     / line-height 1.3
  Body:          1rem (16px)                / line-height 1.6
  Body Large:    1.125rem (18px)            / line-height 1.7
  Caption:       0.75rem (12px)             / line-height 1.5
  Label:         0.875rem (14px)            / tracking 0.25em uppercase

Scale (Mobile):
  Hero H1:       2.5rem–3rem
  Section H2:    2rem–2.5rem
  All others:    Same as desktop
```

### 4.3 Spacing System

```
Section padding (vertical):  py-24 (96px) → py-32 (128px) on md+
Section padding (horizontal): px-6 (24px) consistently
Max content width:           max-w-7xl (1280px)
Component gap:               gap-6 (24px) base, gap-8 (32px) larger, gap-12 (48px) sections
Card padding:                p-8 (32px) standard, p-10 (40px) featured
```

### 4.4 Component Patterns

**Buttons:**
```
Primary:   bg-blue-electric text-white px-10 py-4 tracking-wider uppercase text-sm
Secondary: border border-divider text-text-primary px-10 py-4 tracking-wider uppercase text-sm
Ghost:     text-blue-electric tracking-wider uppercase text-sm (hover: underline)
```

**Cards:**
```
Background:  bg-gradient-card (linear-gradient #111827 → #0A0F1A)
Border:      border border-divider
Hover:       hover:border-blue-electric/50 or hover:border-blue-electric/30
Transition:  transition-all duration-500
```

**Image Placeholders:**
```
Class:       img-placeholder
Background:  linear-gradient(135deg, #111827, #1A3A6B22, #111827)
Border:      1px solid #1E293B (via ::after pseudo-element)
Label:       text-muted, 0.75rem, uppercase, tracking 0.1em, centered
```

### 4.5 Animation Specifications

| Animation | Trigger | Duration | Easing | Properties |
|---|---|---|---|---|
| `fade-up` | Scroll into view | 0.7s | `[0.25, 0.46, 0.45, 0.94]` | opacity 0→1, translateY 40→0 |
| `fade-in` | Scroll into view | 0.6s | ease-out | opacity 0→1 |
| `scale-in` | Page load | 0.5s | ease-out | opacity 0→1, scale 0.9→1 |
| `slide-right` | Scroll into view | 0.8s | ease-out | opacity 0→1, translateX -40→0 |
| `glow-pulse` | Always (CTA) | 3s infinite | ease-in-out | box-shadow intensity |
| `hero-reveal` | Page load | 1.2s | custom cubic | opacity + scale |
| `accordion` | Click toggle | 0.3s | ease | height 0→auto, opacity |
| `scroll-bounce` | Always (indicator) | 2s infinite | ease | translateY 0→8→0 |

**Performance Rules:**
- All scroll animations use `viewport: { once: true }` — trigger only once
- Use `margin: "-80px"` on viewport to trigger slightly before element enters view
- Stagger sibling animations by 0.1s–0.2s delay increments
- Respect `prefers-reduced-motion` — disable all motion for users who request it

---

## 5. Component Specifications

### 5.1 Navbar

```
Behavior:
  - Fixed position, z-50
  - Transparent on load → Glass blur after 50px scroll
  - Glass: bg-opacity-70, backdrop-blur-20px, border-bottom 1px divider
  - Mobile: Hamburger menu → Full-screen overlay with centered links

Props:
  variant: "sales" | "company"
    - sales: Gallery, Artists, Styles, FAQ → Book Now
    - company: Our Story, Vision, Team, Studio, Contact → Inquire

Desktop: Logo left, links center-right, CTA button far-right
Mobile:  Logo left, hamburger right → overlay with stacked links + CTA
```

### 5.2 ScrollReveal (Utility Wrapper)

```
Props:
  children: ReactNode
  delay: number (default 0)
  direction: "up" | "left" | "right" | "none" (default "up")
  className: string

Behavior:
  Wraps any content in a Framer Motion div that animates on scroll-into-view.
  Uses IntersectionObserver via framer-motion whileInView.
  Triggers once, cannot re-trigger.
```

### 5.3 Portfolio (Shared Component)

```
State:
  activeFilter: string (default "All")

Filters: ["All", "Realism", "Fine Line", "Balinese", "Black & Grey", "Color"]

Layout: CSS columns (masonry)
  - 1 column on mobile
  - 2 columns on sm (640px+)
  - 3 columns on lg (1024px+)

Items: 8 portfolio entries
  - Variable aspect ratios (3:4, 4:3, 1:1) for masonry variety
  - Hover overlay: dark bg + category label + artist name
  - Click: lightbox (Phase 3 enhancement)

Filter behavior:
  - Instant filtering, no animation between states
  - Active filter: blue bg + white text
  - Inactive: border + muted text
```

### 5.4 FAQ Accordion

```
State:
  openIndex: number | null (default null)

Behavior:
  - Only one item open at a time
  - Click open item to close it
  - AnimatePresence for smooth height + opacity animation
  - Plus icon when closed, Minus icon when open
  - Icon color: muted when closed, blue-electric when open

Accessibility:
  - Button role on toggle
  - aria-expanded on button
  - aria-controls linking button to panel
  - Focus visible styling
```

---

## 6. Routing

| Route | Page | Rendering | Description |
|---|---|---|---|
| `/` | `src/app/page.tsx` | SSG (Static) | Sales Landing Page |
| `/company` | `src/app/company/page.tsx` | SSG (Static) | Company Profile Page |
| `/*` (404) | Next.js default | SSG | Not Found page |

Both pages are statically generated at build time — no server-side rendering needed. This ensures maximum performance and CDN cacheability.

---

## 7. SEO Requirements

### 7.1 Metadata per Page

**Sales Page (`/`):**
```
title: "Mounty Ink — Premium Tattoo Studio · Bali"
description: "Where Balinese artistry meets luxury tattoo craftsmanship. Book your session at Mounty Ink, Bali's premier tattoo atelier."
keywords: tattoo studio bali, premium tattoo bali, mounty ink, bali tattoo artist, luxury tattoo experience
```

**Company Profile (`/company`):**
```
title: "About Mounty Ink — Company Profile · Bali's Premier Tattoo Atelier"
description: "Discover the story behind Mounty Ink — Bali's premier tattoo atelier. Meet our artists, explore our studio, and learn what makes us different."
keywords: mounty ink bali about, tattoo studio company profile, bali tattoo artists team
```

### 7.2 Structured Data (Phase 3)

```json
{
  "@type": "TattooParlor",
  "name": "Mounty Ink",
  "address": { "addressLocality": "Seminyak", "addressRegion": "Bali" },
  "aggregateRating": { "ratingValue": "5.0", "reviewCount": "500" },
  "priceRange": "$$"
}
```

### 7.3 Technical SEO Checklist

- [ ] Semantic HTML (h1-h6 hierarchy, section, article, nav, footer)
- [ ] Single `<h1>` per page
- [ ] Alt text on all images
- [ ] Open Graph + Twitter Card meta tags
- [ ] Canonical URLs
- [ ] Sitemap.xml (auto-generated by Next.js)
- [ ] robots.txt
- [ ] Favicon + Apple touch icon
- [ ] Preconnect to Google Fonts CDN
- [ ] No render-blocking resources

---

## 8. Accessibility Requirements (WCAG 2.1 AA)

| Requirement | Implementation |
|---|---|
| Color contrast | All text meets 4.5:1 ratio (verified: #F5F5F7 on #050507 = 18.3:1) |
| Keyboard navigation | All interactive elements focusable, visible focus rings |
| Screen reader | Semantic HTML, ARIA labels on icon-only buttons |
| Reduced motion | `prefers-reduced-motion: reduce` disables all animation |
| Focus management | Mobile menu traps focus, escape closes |
| Alt text | All images have descriptive alt text |
| Link purpose | No "click here" — descriptive link text always |
| Heading hierarchy | h1 → h2 → h3 in strict order per page |
| Touch targets | Minimum 44x44px on all interactive elements |
| Language | `lang="en"` on html element |

---

## 9. Performance Budget

| Asset | Budget | Strategy |
|---|---|---|
| First Load JS (total) | < 170kB gzipped | Tree-shaking, code splitting per route |
| Per-route JS | < 10kB gzipped | Current: 5.05kB (sales), 3.25kB (company) |
| Hero image | < 200kB | WebP/AVIF, responsive srcset, priority loading |
| Portfolio images | < 80kB each | WebP, lazy loading, blur placeholder |
| Total page weight | < 1.5MB | Aggressive image optimization |
| Time to Interactive | < 3s on 3G | Static generation + CDN |
| Fonts | < 100kB | Subset, display: swap, self-hosted via next/font |

---

## 10. External Integrations

| Service | Integration Method | Purpose |
|---|---|---|
| **WhatsApp** | `https://wa.me/{number}?text={message}` | Primary booking channel |
| **Google Maps** | Embed iframe or Maps JS API | Studio location on Contact section |
| **Google Analytics 4** | `gtag.js` via next/script | Page views, events, conversions |
| **Google Search Console** | Meta verification tag | SEO monitoring |
| **Instagram** | Link-out only (v1.0) | Social proof, portfolio extension |

---

## 11. Deployment Specification

```
Platform:       Vercel
Build command:  next build
Output:         Static (SSG)
Node version:   20.x
Environment:    Production

Domain setup:
  Primary:      mountyink.com (or configured domain)
  Redirect:     www → non-www (canonical)

Headers:
  Cache-Control: public, max-age=31536000, immutable (static assets)
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## 12. Testing Requirements

| Test Type | Tool | Scope |
|---|---|---|
| Visual regression | Manual / Percy | All sections at 3 breakpoints (375, 768, 1440) |
| Lighthouse | Chrome DevTools | Performance, Accessibility, SEO, Best Practices > 90 |
| Cross-browser | BrowserStack | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| Mobile devices | Real devices | iPhone 14/15, Samsung S23/S24, iPad |
| Accessibility | axe-core + manual | Full WCAG 2.1 AA compliance |
| Link validation | Manual | All CTAs, nav links, external links functional |
| SEO | Google Rich Results Test | Structured data validation |

---

*SRD v1.0 — Created 2026-03-28*
