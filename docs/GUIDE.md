# MOUNTY INK — Comprehensive Development Guide

> **Version:** 1.0
> **Date:** 2026-03-28
> **Purpose:** Master reference for building both Mounty Ink landing pages to production quality

---

## Table of Contents

1. [Project Philosophy](#1-project-philosophy)
2. [Brand DNA Quick Reference](#2-brand-dna-quick-reference)
3. [Design System Deep Dive](#3-design-system-deep-dive)
4. [Page Architecture](#4-page-architecture)
5. [Component-by-Component Build Guide](#5-component-by-component-build-guide)
6. [Image Integration Guide](#6-image-integration-guide)
7. [Animation & Interaction Playbook](#7-animation--interaction-playbook)
8. [Responsive Design Strategy](#8-responsive-design-strategy)
9. [Performance Optimization Playbook](#9-performance-optimization-playbook)
10. [SEO Implementation Guide](#10-seo-implementation-guide)
11. [Accessibility Checklist](#11-accessibility-checklist)
12. [Copy & Content Writing Guide](#12-copy--content-writing-guide)
13. [Quality Gates](#13-quality-gates)
14. [Phase-by-Phase Execution Plan](#14-phase-by-phase-execution-plan)

---

## 1. Project Philosophy

### The Three Rules

**Rule 1: The tattoo art is the hero.**
Every design decision exists to make the portfolio images look their absolute best. Dark backgrounds, generous spacing, subtle UI — nothing competes with the artwork.

**Rule 2: Luxury is restraint.**
This is an atelier, not a street shop. No gradients-on-gradients, no busy textures, no visual noise. Every element earns its place. When in doubt, remove.

**Rule 3: The website IS the first tattoo session.**
The user's experience browsing the site should feel like being in the studio — immersive, confident, premium. If a section doesn't build trust or drive a booking, it doesn't belong.

### Design Principles (in priority order)

1. **Clarity** — Every section has one job. One message. One action.
2. **Elegance** — Sophisticated typography, generous whitespace, dark luxury palette.
3. **Trust** — Social proof, hygiene standards, professional presentation.
4. **Performance** — Fast loads, smooth animations, zero jank.
5. **Conversion** — Every scroll moves the user closer to booking.

---

## 2. Brand DNA Quick Reference

```
Brand:       MOUNTY INK
Tagline:     "Where Art Meets Skin"
Type:        Premium Tattoo Atelier
Location:    Seminyak, Bali, Indonesia
Audience:    International tourists (22-45)
Positioning: Luxury tattoo experience in paradise
Spirit:      Balinese artistry × editorial elegance × tattoo craft
```

### Logo Usage Rules

The approved logo (`logo/approved/logo.png`) features:
- "MOUNTY" in white, "INK" in deep blue (#1A3A6B)
- Diagonal slash line between the words
- "BALI" below in small spaced caps
- Always on dark/black background

**Do:**
- Use on dark backgrounds only
- Maintain clear space around the logo (minimum: height of "B" in BALI on all sides)
- Use as the primary brand mark in navbar and hero

**Don't:**
- Place on light backgrounds without inverting
- Stretch, rotate, or modify proportions
- Add effects (drop shadow, glow, outline)
- Crop any part of the logo

### Color Usage Rules

| Color | Use For | Never For |
|---|---|---|
| `#050507` (Velvet Black) | Page backgrounds | Text color |
| `#0A0F1A` (Dark Navy) | Alternating section bg | Primary actions |
| `#111827` (Card Surface) | Cards, elevated surfaces | Text, icons |
| `#1A3A6B` (Deep Blue) | Secondary headings, brand accents | Body text, backgrounds |
| `#2E7BFF` (Electric Blue) | CTAs, links, interactive elements, icons | Large background fills |
| `#F5F5F7` (Near White) | Primary headings, primary text | Backgrounds |
| `#C8D0DC` (Silver) | Body text, descriptions | Headings, CTAs |
| `#8A9BB0` (Blue Grey) | Captions, labels, muted text | Headings, CTAs, icons |
| `#1E293B` (Slate) | Borders, dividers, rules | Text, backgrounds, CTAs |

### Typography Rules

**Headings** — Cormorant Garamond (serif)
- Always used for: H1, H2, H3, stat numbers, blockquotes
- Weight: 600 (semibold) for H1/H2, 400 (regular) for H3
- Color: `text-primary` (#F5F5F7) or `blue-deep` (#1A3A6B) for emphasis

**Body** — Inter (sans-serif)
- Used for: Paragraphs, descriptions, labels, buttons, navigation
- Weight: 400 (regular) for body, 600 (semibold) for buttons/labels
- Color: `text-secondary` (#C8D0DC) for body, `text-muted` (#8A9BB0) for captions

**Labels/Subtitles** — Inter uppercase
- Always uppercase with tracking `[0.25em]`
- Color: `blue-electric` (#2E7BFF) for section labels
- Size: `text-sm` (14px) or `text-xs` (12px)

---

## 3. Design System Deep Dive

### Spacing Philosophy

The site uses a **rhythm-based spacing system** where vertical section padding creates consistent breathing room:

```
Section padding:     py-24 (96px mobile) → py-32 (128px desktop)
Inner section gap:   mb-16 (64px) between heading and content
Card grid gap:       gap-6 (24px)
Card internal:       p-8 (32px)
Text paragraph gap:  mt-6 (24px)
```

### The Slash Motif

The diagonal slash from the logo is echoed throughout the site as a design motif:

```css
.line-slash {
  width: 60px;
  height: 1px;
  background: #2E7BFF;
  transform: rotate(-45deg);
}
```

Used in: SectionHeading divider, Brand Story section breaks, Hero Company reveal.

### Card Pattern

Every card in the system follows this exact pattern:

```tsx
<div className="
  bg-gradient-card          /* Linear gradient bg */
  border border-divider     /* 1px subtle border */
  p-8                       /* 32px internal padding */
  hover:border-blue-electric/50  /* Blue border on hover */
  transition-all duration-500     /* Smooth 500ms transition */
  h-full                    /* Full height in grid */
  flex flex-col             /* Flex column for content alignment */
">
```

### Glass Navigation Pattern

```tsx
// Transparent by default, glass on scroll
className={scrolled
  ? "glass py-3"      // Blurred, compact
  : "py-5"            // Transparent, spacious
}

// glass utility:
.glass {
  background: rgba(5, 5, 7, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
}
```

---

## 4. Page Architecture

### Sales Page — Section Flow & Logic

```
HERO (Emotional hook — "I want this")
  ↓ Scroll
TRUST BAR (Logical reassurance — "They're legit")
  ↓ Scroll
PORTFOLIO (Visual evidence — "They're talented")
  ↓ Scroll
STYLES & PRICING (Practical info — "It's affordable")
  ↓ Scroll
ARTISTS (Personal connection — "I want THEM to do it")
  ↓ Scroll
TESTIMONIALS (Social proof — "Others love it")
  ↓ Scroll
HOW IT WORKS (Process clarity — "It's easy")
  ↓ Scroll
BOOKING CTA (Conversion — "Let's do this")
  ↓ Scroll
FAQ (Objection handling — "My concerns are addressed")
  ↓
FOOTER (Navigation + contact fallback)
```

**Conversion psychology:** The page follows the AIDA model:
- **Attention:** Hero (emotional imagery + bold headline)
- **Interest:** Portfolio + Styles (visual proof of capability)
- **Desire:** Artists + Testimonials (personal connection + social proof)
- **Action:** Booking CTA + FAQ (remove friction, drive action)

### Company Profile — Section Flow & Logic

```
HERO (Brand presence — cinematic logo moment)
  ↓
BRAND STORY (Who we are — origin, philosophy)
  ↓
VALUES (What we believe — artistry, hygiene, culture)
  ↓
STATS (What we've achieved — numbers speak)
  ↓
STUDIO (Where we create — physical space)
  ↓
TEAM (Who creates — full artist backgrounds)
  ↓
PORTFOLIO (What we create — best work showcase)
  ↓
HYGIENE (How we protect you — safety standards)
  ↓
TESTIMONIALS (What others say — third-party validation)
  ↓
CONTACT (How to reach us — all channels)
  ↓
FOOTER
```

**Narrative arc:** Introduction → Credentials → Evidence → Contact. Like a brand pitch deck.

---

## 5. Component-by-Component Build Guide

### Phase 2 Upgrade: Replacing Placeholders with Real Content

When AI images are generated, upgrade each component following this pattern:

**Before (placeholder):**
```tsx
<div className="img-placeholder aspect-[3/4]">
  <span>Artist portrait</span>
</div>
```

**After (production):**
```tsx
import Image from "next/image";

<div className="relative aspect-[3/4] overflow-hidden">
  <Image
    src="/images/artists/artist-monty.webp"
    alt="Monty — Founder and Lead Artist at Mounty Ink Bali"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-cover"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
    loading="lazy"
  />
</div>
```

**Key rules for Image replacement:**
- Always use `next/image` for automatic optimization
- Always include descriptive `alt` text
- Always set `sizes` prop for responsive loading
- Use `priority` only for above-the-fold images (hero, logo)
- Use `placeholder="blur"` with a base64 blurDataURL for smooth loading
- Use `fill` + `object-cover` for responsive containers
- Use `loading="lazy"` for below-fold (default, but be explicit)

### Generating blur placeholders

```bash
# Install plaiceholder for blur data URLs
npm install plaiceholder sharp

# Generate blur placeholder for an image
# (Create a script or use at build time)
```

Alternatively, use a tiny 10x10 pixel version as a manual blurDataURL.

### Component Upgrade Priority

Upgrade in this order for maximum visual impact:

1. **HeroSales** — First thing users see
2. **Portfolio** — Core content
3. **ArtistSpotlight / TeamFull** — Human connection
4. **StylesPricing** — Style card images
5. **StudioGallery** — Environment shots
6. **Testimonials** — Healed tattoo photos
7. **BrandStory** — Editorial images
8. **HeroCompany** — Logo already present, lowest priority

---

## 6. Image Integration Guide

### Directory Structure

```
public/images/
├── hero/
│   └── hero-sales.webp          (1920x1080, < 200kB)
├── portfolio/
│   ├── portfolio-realism-01.webp    (800x1000, < 80kB)
│   ├── portfolio-fineline-01.webp   (1000x800, < 80kB)
│   ├── portfolio-balinese-01.webp   (800x800, < 80kB)
│   ├── portfolio-blackgrey-01.webp  (800x1000, < 80kB)
│   ├── portfolio-color-01.webp      (1000x800, < 80kB)
│   ├── portfolio-japanese-01.webp   (800x800, < 80kB)
│   ├── portfolio-sacredgeo-01.webp  (800x1000, < 80kB)
│   └── portfolio-fineline-02.webp   (1000x800, < 80kB)
├── artists/
│   ├── artist-monty.webp        (600x800, < 60kB)
│   ├── artist-ari.webp          (600x800, < 60kB)
│   ├── artist-dewa.webp         (600x800, < 60kB)
│   └── artist-yuki.webp         (600x800, < 60kB)
├── studio/
│   ├── studio-reception.webp    (1200x600, < 100kB)
│   ├── studio-station.webp      (600x600, < 100kB)
│   ├── studio-sterilization.webp(600x600, < 100kB)
│   ├── studio-consult.webp      (600x600, < 100kB)
│   └── studio-exterior.webp     (600x600, < 100kB)
├── styles/
│   ├── style-fineline.webp      (800x500, < 80kB)
│   ├── style-realism.webp       (800x500, < 80kB)
│   ├── style-balinese.webp      (800x500, < 80kB)
│   ├── style-blackgrey.webp     (800x500, < 80kB)
│   ├── style-watercolor.webp    (800x500, < 80kB)
│   └── style-japanese.webp      (800x500, < 80kB)
├── testimonials/
│   ├── testimonial-realism.webp     (800x400, < 80kB)
│   ├── testimonial-sacredgeo.webp   (800x400, < 80kB)
│   └── testimonial-fineline.webp    (800x400, < 80kB)
└── story/
    ├── story-founder.webp       (600x750, < 80kB)
    └── story-interior.webp      (1000x750, < 100kB)
```

### Image Optimization Pipeline

```bash
# If images are PNG/JPG from AI generators, convert to WebP:

# Option 1: Using sharp (Node.js)
npx sharp-cli --input "*.png" --output "{name}.webp" --quality 80

# Option 2: Using cwebp (Google)
for f in *.png; do cwebp -q 80 "$f" -o "${f%.png}.webp"; done

# Option 3: Using squoosh-cli
npx @squoosh/cli --webp '{"quality":80}' *.png
```

### Next.js Image Configuration

The `next.config.ts` is already configured:
```ts
images: {
  formats: ["image/avif", "image/webp"],
}
```

This tells Next.js to serve AVIF (smallest) first, then WebP fallback.

---

## 7. Animation & Interaction Playbook

### Scroll Animation System

All scroll animations use the `ScrollReveal` wrapper component. Here's how to apply them consistently:

**Section headings:**
```tsx
<ScrollReveal>  {/* Default: fade-up, no delay */}
  <SectionHeading ... />
</ScrollReveal>
```

**Grid items (staggered):**
```tsx
{items.map((item, i) => (
  <ScrollReveal key={item.id} delay={i * 0.1}>  {/* 100ms stagger */}
    <Card ... />
  </ScrollReveal>
))}
```

**Side-by-side layouts:**
```tsx
<ScrollReveal direction="left">   {/* Left content slides in from left */}
  <TextContent />
</ScrollReveal>
<ScrollReveal direction="right">  {/* Right content slides in from right */}
  <ImageContent />
</ScrollReveal>
```

### Hover Interactions

**Portfolio items:**
```
Default:  Image visible, no overlay
Hover:    Dark overlay (bg-primary/70) fades in (opacity transition)
          Category label + artist name appear centered
          Image stays static (no zoom in v1 — add in Phase 3 if needed)
```

**Cards:**
```
Default:  border-divider (subtle grey border)
Hover:    border-blue-electric/50 (blue border at 50% opacity)
          Transition: 500ms all
```

**Buttons:**
```
Primary:  bg-blue-electric → bg-blue-deep on hover
Secondary: border-divider → border-blue-electric, text → blue-electric
Ghost:    text-blue-electric → underline on hover
```

### Phase 3 Animation Enhancements (Future)

These can be added after the core skeleton is complete:

1. **Hero parallax** — Background image moves at 50% scroll speed
2. **Portfolio lightbox** — Click to open full-screen image viewer with swipe
3. **Stats count-up** — Numbers animate from 0 to final value
4. **Smooth page transitions** — Framer Motion `AnimatePresence` between routes
5. **Cursor effects** — Custom cursor that changes over interactive elements
6. **Navbar scroll direction** — Hide on scroll down, show on scroll up

---

## 8. Responsive Design Strategy

### Breakpoint System (Tailwind defaults)

```
sm:    640px    (large phones, landscape)
md:    768px    (tablets)
lg:    1024px   (laptops)
xl:    1280px   (desktops)
2xl:   1536px   (large monitors)
```

### Layout Shifts per Breakpoint

| Component | Mobile (< 640px) | Tablet (768px) | Desktop (1024px+) |
|---|---|---|---|
| **Navbar** | Logo + hamburger | Logo + links + CTA | Same as tablet |
| **Hero** | Stacked, text-5xl | text-7xl | text-8xl |
| **Trust Bar** | 2-column grid | 4-column grid | Same |
| **Portfolio** | 1 column | 2 columns | 3 columns |
| **Styles** | 1 column | 2 columns | 3 columns |
| **Artists** | 1 column | 2 columns | 4 columns |
| **Testimonials** | 1 column | 2 columns | 3 columns |
| **How It Works** | Stacked vertical | 3 columns | Same |
| **FAQ** | Full width | Max-w-3xl centered | Same |
| **Brand Story** | Stacked (text → image) | Same | Side-by-side |
| **Team** | Stacked (image → text) | Same | Side-by-side alternating |
| **Studio Gallery** | 2-col, auto rows | 4-col bento | Same |
| **Contact** | Stacked (map → info) | Same | Side-by-side |

### Mobile-Specific Considerations

1. **Tap targets:** Minimum 44x44px for all interactive elements
2. **Font sizes:** Never below 14px for readable text
3. **Thumb zone:** Primary CTAs in bottom half of screen
4. **WhatsApp float:** Position `bottom-6 right-6`, doesn't overlap content
5. **Navigation:** Full-screen overlay menu, large link text (text-3xl)
6. **Portfolio:** Single column on mobile — no masonry, just vertical stack
7. **Images:** Load smaller variants via `sizes` prop
8. **Animations:** Keep but simplify — no parallax on mobile

### Testing Devices

| Device | Viewport | Priority |
|---|---|---|
| iPhone 14 / 15 | 390x844 | P0 |
| iPhone SE | 375x667 | P1 |
| Samsung Galaxy S23 | 360x780 | P1 |
| iPad Air | 820x1180 | P1 |
| MacBook Pro 14" | 1512x982 | P0 |
| 1080p Monitor | 1920x1080 | P1 |
| 1440p Monitor | 2560x1440 | P2 |

---

## 9. Performance Optimization Playbook

### Image Strategy (Biggest Impact)

1. **Format:** WebP primary, AVIF where supported (auto via Next.js)
2. **Sizing:** Generate at 2x display size max (e.g., 600px display = 1200px source)
3. **Lazy loading:** All images below the fold use `loading="lazy"` (default in Next.js)
4. **Priority:** Only hero image and logo use `priority` prop
5. **Blur placeholders:** Use `placeholder="blur"` with base64 tiny preview
6. **Responsive sizes:** Always set `sizes` prop to avoid loading oversized images:
   ```tsx
   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
   ```

### JavaScript Bundle

Current state (already excellent):
```
/          — 5.05kB first-load JS (route-specific)
/company   — 3.25kB first-load JS (route-specific)
Shared     — 102kB (React + Framer Motion + shared components)
```

To maintain this:
- Don't add heavy libraries without justification
- Keep client components ("use client") minimal — only where state/effects are needed
- Server components (default) render to zero client JS

### Font Loading

Already optimized via `next/font/google`:
- Self-hosted (no external request to Google Fonts CDN)
- Font files preloaded
- `display: "swap"` prevents render blocking
- Only requested weights are loaded (300-700)

### CSS

Tailwind CSS v4 with PostCSS:
- Automatic tree-shaking of unused classes
- No runtime CSS-in-JS overhead
- Single CSS file output

### Core Web Vitals Targets

```
LCP  (Largest Contentful Paint):  < 2.5s
  → Achieved via: SSG, priority hero image, font preload

INP  (Interaction to Next Paint):  < 200ms
  → Achieved via: No heavy JS on interaction, CSS transitions, requestAnimationFrame via Framer Motion

CLS  (Cumulative Layout Shift):   < 0.1
  → Achieved via: Explicit aspect ratios on images, font display swap, no dynamic content insertion
```

---

## 10. SEO Implementation Guide

### Meta Tags (already in layout.tsx and company/page.tsx)

Each page has unique `title` and `description`. Ensure:
- Title: < 60 characters, includes primary keyword + brand
- Description: < 160 characters, includes CTA language

### Open Graph Tags (add in Phase 4)

```tsx
// In layout.tsx or per-page metadata
export const metadata: Metadata = {
  openGraph: {
    title: "Mounty Ink — Premium Tattoo Studio · Bali",
    description: "Where Balinese artistry meets luxury tattoo craftsmanship.",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
    siteName: "Mounty Ink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mounty Ink — Premium Tattoo Studio · Bali",
    description: "Where Balinese artistry meets luxury tattoo craftsmanship.",
    images: ["/images/og-image.webp"],
  },
};
```

### Semantic HTML Checklist

```
<header>   → Navbar
<main>     → Page content (wraps all sections)
<section>  → Each content section with id attribute
<footer>   → Footer
<h1>       → One per page (Hero headline)
<h2>       → Section titles
<h3>       → Card titles, sub-sections
<nav>      → Navigation links
<article>  → Testimonial cards (optional)
<figure>   → Images with captions (optional)
```

### Heading Hierarchy Audit

**Sales Page:**
```
h1: "Your Story, Inked in Paradise"
  h2: "Portfolio"
  h2: "Styles & Pricing"
    h3: "Fine Line" / "Realism" / etc.
  h2: "Masters of Their Craft"
    h3: "Monty" / "Ari" / etc.
  h2: "Words That Stay"
  h2: "How It Works"
    h3: "Consult" / "Design" / "Ink"
  h2: "Get Inked in Bali"
  h2: "FAQ"
```

**Company Page:**
```
h1: "MOUNTY INK" (visually in logo, add sr-only h1)
  h2: "Born in Bali, Crafted for the World"
    h3: "Not a Shop. An Atelier."
  h2: "Our Values"
    h3: "Artistry First" / "Uncompromising Hygiene" / "Rooted in Culture"
  h2: "Our Studio"
  h2: "Our Artists"
    h3: "Monty" / "Ari" / etc.
  h2: "Portfolio"
  h2: "Hygiene & Standards"
    h3: "Single-Use Everything" / etc.
  h2: "Words That Stay"
  h2: "Visit Us"
```

### Sitemap & Robots

Next.js auto-generates these. Verify after deployment:
- `mountyink.com/sitemap.xml` — should list both pages
- `mountyink.com/robots.txt` — should allow all crawlers

---

## 11. Accessibility Checklist

### WCAG 2.1 AA Compliance

**Perceivable:**
- [x] Color contrast ratios meet 4.5:1 (text) and 3:1 (large text)
  - #F5F5F7 on #050507 = **18.3:1** (excellent)
  - #C8D0DC on #050507 = **12.3:1** (excellent)
  - #8A9BB0 on #050507 = **6.8:1** (passes AA)
  - #2E7BFF on #050507 = **5.2:1** (passes AA)
- [ ] All images have descriptive alt text (Phase 2)
- [x] Content doesn't rely on color alone to convey meaning
- [x] Text can be resized up to 200% without loss of function

**Operable:**
- [x] All functionality available via keyboard
- [ ] Visible focus indicators on all interactive elements (verify)
- [x] No keyboard traps (mobile menu has escape)
- [x] Skip-to-content link (add in Phase 3)
- [ ] Respect `prefers-reduced-motion` (add in Phase 3)

**Understandable:**
- [x] Language declared (`lang="en"`)
- [x] Consistent navigation across pages
- [x] Error identification (for future forms)

**Robust:**
- [x] Valid HTML (Next.js enforces)
- [x] ARIA where needed (buttons, accordion)
- [x] Works without JavaScript (SSG = HTML/CSS core works)

### Quick Implementation: prefers-reduced-motion

Add to `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Quick Implementation: Skip-to-content

Add as first child in `layout.tsx` body:
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-electric focus:text-white"
>
  Skip to content
</a>
```

---

## 12. Copy & Content Writing Guide

### Voice & Tone Matrix

| Context | Voice | Example |
|---|---|---|
| Hero headline | Bold, poetic, aspirational | "Your Story, Inked in Paradise" |
| Section subtitle | Confident, measured | "Masters of Their Craft" |
| Body description | Warm, informative, concise | "Our world-class team brings decades..." |
| CTA button | Direct, action-oriented | "Book Your Session" |
| Artist bio | Personal, passionate, credible | "Born and raised in Bali, Monty trained under master realism artists..." |
| FAQ answer | Clear, reassuring, professional | "Absolutely. Mounty Ink meets international health and safety standards..." |
| Testimonial | Authentic, emotional, specific | "The fine line work is pristine..." |

### Writing Rules

1. **No exclamation marks** in headings or body. Let the work speak.
2. **Use · (middot) as separator**, not | or — in labels: "TATTOO STUDIO · BALI"
3. **Capitalize** all button text: "BOOK YOUR SESSION" (tracking-wider uppercase)
4. **Numbers** are spelled out under 10 in body text, numerals in stats: "We've inked travelers from over 40 countries"
5. **Bali references** should be specific: "Seminyak", "Ubud", "Indian Ocean" — not generic "tropical"
6. **No jargon** that tourists wouldn't understand. "Fine line" yes, "liner needle grouping" no.
7. **Price format:** "IDR 1.500K" (Indonesian Rupiah with dot thousands separator + K suffix)

### Key Messages to Reinforce

| Message | Where to Reinforce |
|---|---|
| "Premium, not expensive" | Styles section, FAQ |
| "Safe and sterile" | Trust bar, Hygiene section, FAQ |
| "Custom art, not flash" | Brand story, How It Works |
| "International standard" | Trust bar, Hygiene, About |
| "Bali as inspiration" | Throughout — cultural references |
| "Easy booking process" | How It Works, CTA, FAQ |

---

## 13. Quality Gates

### Gate 1: Skeleton Complete (CURRENT)
- [x] All components created
- [x] Both pages render
- [x] Build passes with zero errors
- [x] Design system tokens defined
- [x] Responsive grid layouts work
- [x] Placeholder content in place

### Gate 2: Content & Images
- [ ] All AI images generated, optimized, and placed
- [ ] All placeholder divs replaced with `<Image>` components
- [ ] Copy reviewed and finalized
- [ ] Alt text on every image
- [ ] Artist/pricing data accurate

### Gate 3: Polish & Interactions
- [ ] All scroll animations smooth (60fps)
- [ ] Hover states on all interactive elements
- [ ] Mobile menu fully functional
- [ ] FAQ accordion accessible
- [ ] Portfolio filter instant and smooth
- [ ] WhatsApp link pre-fills correct message
- [ ] All internal anchor links scroll correctly

### Gate 4: Performance
- [ ] Lighthouse Performance > 90 (mobile)
- [ ] Lighthouse Performance > 95 (desktop)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] All images optimized (WebP, correct sizes)
- [ ] Total page weight < 1.5MB

### Gate 5: Accessibility & SEO
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] WCAG 2.1 AA color contrast passes
- [ ] Keyboard navigation works end-to-end
- [ ] Open Graph + Twitter Card meta tags
- [ ] Semantic heading hierarchy
- [ ] prefers-reduced-motion respected

### Gate 6: Cross-Browser & Device
- [ ] Chrome (Mac/Windows) — no issues
- [ ] Safari (Mac/iOS) — no issues
- [ ] Firefox — no issues
- [ ] Edge — no issues
- [ ] iPhone 14/15 — no issues
- [ ] Samsung Galaxy S23 — no issues
- [ ] iPad Air — no issues

### Gate 7: Launch Ready
- [ ] Domain connected
- [ ] SSL active
- [ ] Analytics installed (GA4)
- [ ] Google Search Console verified
- [ ] All links tested (WhatsApp, email, Instagram, map)
- [ ] 404 page styled
- [ ] Favicon + apple-touch-icon
- [ ] OG image generated and linked
- [ ] Final client review approved

---

## 14. Phase-by-Phase Execution Plan

### Phase 1: Skeleton (COMPLETE)
**Delivered:** Project scaffold, all 23 components, design system, both pages, build passing.

### Phase 2: Content & Images
**Tasks:**
1. Generate all AI images following SOP-002 prompts
2. Optimize images (WebP, target file sizes)
3. Place images in `public/images/` directory structure
4. Replace all `img-placeholder` divs with `<Image>` components
5. Review and finalize all copy
6. Update artist data if real names/details available
7. Verify build passes

### Phase 3: Polish & Interactions
**Tasks:**
1. Add `prefers-reduced-motion` support
2. Add skip-to-content link
3. Fine-tune animation timings and stagger
4. Add portfolio lightbox (click to expand)
5. Add hero parallax effect
6. Implement smooth navbar hide-on-scroll-down
7. Add subtle hover zoom on portfolio images
8. Test all interactions on mobile

### Phase 4: Performance & SEO
**Tasks:**
1. Run Lighthouse audit, fix any issues below 90
2. Implement Open Graph + Twitter Card tags
3. Add JSON-LD structured data (TattooParlor schema)
4. Generate and verify sitemap.xml
5. Create robots.txt
6. Add favicon + apple-touch-icon
7. Optimize bundle size if needed
8. Verify Core Web Vitals

### Phase 5: Deployment
**Tasks:**
1. Initialize git repo, push to GitHub
2. Connect to Vercel, deploy
3. Configure custom domain + SSL
4. Install GA4 tracking
5. Register with Google Search Console
6. Submit sitemap
7. Verify production build works correctly

### Phase 6: QA & Testing
**Tasks:**
1. Cross-browser testing (Chrome, Safari, Firefox, Edge)
2. Device testing (iPhone, Samsung, iPad)
3. Full accessibility audit (axe-core)
4. Link validation (all CTAs, external links)
5. Performance audit on production URL
6. Client review and feedback cycle

### Phase 7: Launch
**Tasks:**
1. Final client sign-off
2. Update Google Business profile with website URL
3. Update Instagram bio link
4. Share on social channels
5. Monitor analytics for first 48 hours
6. Address any post-launch issues

---

*Comprehensive Development Guide v1.0 — Created 2026-03-28*
*Total components: 23 | Total pages: 2 | Quality gates: 7 | Phases: 7*
