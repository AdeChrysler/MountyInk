# MOUNTY INK — Standard Operating Procedure (SOP)

> **Version:** 1.0
> **Date:** 2026-03-28
> **Purpose:** Step-by-step procedure for building, testing, deploying, and maintaining the Mounty Ink website

---

## SOP-001: Development Environment Setup

### Prerequisites
- Node.js 20.x+
- npm 10.x+
- Git
- VS Code (recommended) with extensions: Tailwind CSS IntelliSense, ESLint, Prettier

### Steps

1. **Clone / Open project**
   ```bash
   cd "D:/SIX ZENITH/mountyInk"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Verify pages load**
   - Sales page: `http://localhost:3000`
   - Company page: `http://localhost:3000/company`

5. **Verify build**
   ```bash
   npm run build
   ```
   Expected: zero errors, both routes listed as static (○).

---

## SOP-002: AI Image Generation Workflow

### Purpose
Generate all placeholder images to production quality using AI image generation tools (Midjourney, DALL-E 3, Flux, or equivalent).

### Batch 1: Portfolio Images (8 images)

For each image, use this base prompt template:

```
[BASE]
Photorealistic close-up photograph of a {STYLE} tattoo on {SKIN_TONE} skin.
Shot in a premium Bali tattoo studio. Moody cinematic lighting — warm tungsten
key light from the left, cool blue ambient fill. Shallow depth of field,
the tattoo is the focus. Dark background with hints of luxury studio interior.
No visible face. High detail, 4K quality.

[COLOR GRADE]
Deep blacks with blue undertone, lifted shadows, warm skin tones,
selective electric blue (#2E7BFF) accent in background lighting.

[AVOID]
Blurry, low-res, flat lighting, cartoon, stock photo feel, visible AI artifacts,
distorted anatomy, text on tattoo, overly saturated colors.
```

**Generate these 8 variations:**

| # | File Name | STYLE | SKIN_TONE | Aspect | Notes |
|---|---|---|---|---|---|
| 1 | `portfolio-realism-01.webp` | photorealistic black & grey portrait of a woman's face | medium tan | 3:4 (tall) | Stunning detail in eyes/hair |
| 2 | `portfolio-fineline-01.webp` | delicate fine line botanical on forearm — fern leaves and tiny flowers | light | 4:3 (wide) | Ultra-thin clean lines |
| 3 | `portfolio-balinese-01.webp` | Balinese Barong mask mandala on upper arm | warm brown | 1:1 | Sacred geometry + cultural motif |
| 4 | `portfolio-blackgrey-01.webp` | black and grey realistic lion on chest | medium | 3:4 (tall) | Heavy shading, dramatic |
| 5 | `portfolio-color-01.webp` | vibrant watercolor hummingbird on shoulder | light | 4:3 (wide) | Color splash effect |
| 6 | `portfolio-japanese-01.webp` | Japanese koi fish half-sleeve | light tan | 1:1 | Bold traditional Irezumi |
| 7 | `portfolio-sacredgeo-01.webp` | geometric mandala dotwork on back of hand | medium | 3:4 (tall) | Precise dotwork |
| 8 | `portfolio-fineline-02.webp` | minimalist single-line wave on inner wrist | tan | 4:3 (wide) | Ultra minimal |

### Batch 2: Artist Portraits (4 images)

```
Photorealistic portrait photograph of a {DESCRIPTION} tattoo artist
in a premium dark studio. Moody directional lighting — Rembrandt style,
warm key light on face, cool blue fill from the side. Dark background.
The artist looks confident, creative, approachable. Professional headshot quality.
Wearing black clothing. 3:4 vertical aspect ratio. 4K quality.
```

| # | File Name | DESCRIPTION |
|---|---|---|
| 1 | `artist-monty.webp` | Balinese male, early 30s, short styled hair, light stubble, tattooed forearms visible |
| 2 | `artist-ari.webp` | Indonesian male, late 20s, clean-cut, calm focused expression, fine tattoos on hands |
| 3 | `artist-dewa.webp` | Balinese male, mid 30s, longer hair tied back, spiritual calm expression, visible tattoos |
| 4 | `artist-yuki.webp` | Japanese female, late 20s, short creative hairstyle, vibrant artistic energy, arm tattoos |

### Batch 3: Studio Interiors (5 images)

```
Photorealistic interior photograph of a premium tattoo studio in Bali.
{SPECIFIC_SCENE}. Modern luxury design with Balinese architectural elements —
dark wood, volcanic stone, tropical plants. Moody atmospheric lighting —
warm tungsten pendants, cool blue accent LEDs. Immaculately clean.
Dark color palette with deep navy and black. No people visible.
Architectural photography style, 4K quality.
```

| # | File Name | SPECIFIC_SCENE | Aspect |
|---|---|---|---|
| 1 | `studio-reception.webp` | Reception and lounge area with low seating, art on dark walls | 2:1 (wide, col-span-2 row-span-2) |
| 2 | `studio-station.webp` | Tattoo station with adjustable chair, equipment, overhead light | 1:1 |
| 3 | `studio-sterilization.webp` | Sterilization room with autoclave, organized supplies | 1:1 |
| 4 | `studio-consult.webp` | Design consultation area with iPad, reference books, mood boards | 1:1 |
| 5 | `studio-exterior.webp` | Studio exterior entrance with Balinese gate and tropical plants at night | 1:1 |

### Batch 4: Hero & Supplementary (4 images)

| # | File Name | Prompt Notes | Aspect |
|---|---|---|---|
| 1 | `hero-sales.webp` | Wide cinematic shot of tattoo artist working on client in moody studio. Warm light on hands/tattoo area, blue ambient. Shot from behind the artist showing the work in progress. | 16:9 |
| 2 | `story-founder.webp` | Editorial portrait of the founder (Balinese male, early 30s) standing in his studio, arms crossed, confident but warm. Full environmental portrait. | 3:4 |
| 3 | `story-interior.webp` | Wide studio interior — showing the full space, luxurious atmosphere, Balinese design elements. | 4:3 |
| 4 | `og-image.webp` | Brand composition: dark bg, logo prominent, hint of tattoo art and blue lighting. 1200x630 for Open Graph. | 1200x630 |

### Batch 5: Style Cards (6 images)

```
Close-up photograph of a {STYLE} tattoo being created — the tattoo machine
needle on skin, ink being deposited, gloved hands visible. Shallow DOF.
Warm dramatic lighting on the work area, dark surroundings.
16:10 aspect ratio. 4K quality. Professional studio photography.
```

| # | File Name | STYLE |
|---|---|---|
| 1 | `style-fineline.webp` | fine line minimalist |
| 2 | `style-realism.webp` | photorealistic portrait |
| 3 | `style-balinese.webp` | traditional Balinese ornamental |
| 4 | `style-blackgrey.webp` | black and grey shading |
| 5 | `style-watercolor.webp` | watercolor splash |
| 6 | `style-japanese.webp` | Japanese traditional |

### Batch 6: Testimonial Tattoos (3 images)

```
Photograph of a healed {STYLE} tattoo on {LOCATION}. Natural daylight,
the tattoo has settled into the skin with natural coloring.
Clean background. The focus is on the quality of the healed work.
Wide aspect ratio (2:1). 4K quality.
```

| # | File Name | STYLE | LOCATION |
|---|---|---|---|
| 1 | `testimonial-realism.webp` | photorealistic portrait | upper arm |
| 2 | `testimonial-sacredgeo.webp` | sacred geometry mandala | forearm |
| 3 | `testimonial-fineline.webp` | fine line botanical | inner forearm |

### Post-Generation Processing

1. **Quality check** — Reject any images with:
   - Visible AI artifacts (extra fingers, distorted text, melted features)
   - Inconsistent lighting vs. brand mood
   - Wrong aspect ratio
   - Low detail / blurriness

2. **Optimize all images:**
   ```bash
   # Convert to WebP (if not already)
   # Target file sizes:
   #   Hero: < 200kB
   #   Portfolio: < 80kB each
   #   Artists: < 60kB each
   #   Studio: < 100kB each
   #   Others: < 80kB each
   ```

3. **File placement:**
   ```
   public/images/
   ├── hero/hero-sales.webp
   ├── portfolio/portfolio-realism-01.webp (... 8 files)
   ├── artists/artist-monty.webp (... 4 files)
   ├── studio/studio-reception.webp (... 5 files)
   ├── styles/style-fineline.webp (... 6 files)
   ├── testimonials/testimonial-realism.webp (... 3 files)
   └── story/story-founder.webp, story-interior.webp
   ```

4. **Update components** — Replace all `img-placeholder` divs with Next.js `<Image>` components pointing to the real files.

---

## SOP-003: Component Development Workflow

### Adding a New Component

1. **Create the file** in `src/app/components/ComponentName.tsx`

2. **Follow the component pattern:**
   ```tsx
   // Client components (with state/effects):
   "use client";
   import { useState } from "react";
   import { motion } from "framer-motion";

   // Server components (no state, no effects):
   // No "use client" directive needed
   import ScrollReveal from "./ScrollReveal";
   ```

3. **Use the design system** — Never use raw hex values. Always reference design tokens:
   ```
   ✅ text-text-primary, bg-bg-card, border-divider, text-blue-electric
   ❌ text-[#F5F5F7], bg-[#111827], border-[#1E293B]
   ```

4. **Wrap content in ScrollReveal** for scroll animations:
   ```tsx
   <ScrollReveal delay={0.1} direction="up">
     <div>Your content</div>
   </ScrollReveal>
   ```

5. **Use SectionHeading** for section titles:
   ```tsx
   <SectionHeading
     subtitle="Label"
     title="Main Title"
     description="Optional description text."
   />
   ```

6. **Test at 3 breakpoints**: 375px (mobile), 768px (tablet), 1440px (desktop)

### Modifying an Existing Component

1. **Read the current file** before making changes
2. **Preserve the existing design patterns** — spacing, colors, typography
3. **Test both pages** after changes to shared components
4. **Run `npm run build`** to verify no type errors

---

## SOP-004: Content Update Procedure

### Updating Text Content

1. Content lives directly in component files (no CMS in v1.0)
2. Locate the component file for the section you want to update
3. Edit the text/data arrays directly
4. Verify build: `npm run build`

### Updating Artist Data

All artist data lives in two components:
- `ArtistSpotlight.tsx` — Sales page (short cards)
- `TeamFull.tsx` — Company page (full bios)

**Both must be updated simultaneously** when artist data changes.

### Adding a Portfolio Item

In `Portfolio.tsx`, add to the `portfolioItems` array:
```tsx
{
  id: 9,           // Next sequential ID
  category: "Realism",  // Must match one of the filter strings
  artist: "Monty",
  aspect: "tall",  // "tall" (3:4), "wide" (4:3), or "square" (1:1)
}
```

### Updating FAQ

In `FAQ.tsx`, add/edit items in the `faqs` array:
```tsx
{ q: "Question text", a: "Answer text" }
```

---

## SOP-005: Build & Quality Assurance

### Pre-Deployment Checklist

Run all checks sequentially:

```bash
# 1. Build check — must pass with zero errors
npm run build

# 2. Start production server locally
npm run start

# 3. Manual checks at http://localhost:3000 and /company
```

### Visual QA Checklist

For EACH page (/ and /company), verify at THREE breakpoints (375px, 768px, 1440px):

**Layout:**
- [ ] No horizontal scrollbar on any viewport
- [ ] No content overflow or clipping
- [ ] Consistent spacing between sections
- [ ] Grid layouts collapse properly on mobile
- [ ] Images maintain aspect ratios

**Navigation:**
- [ ] Logo visible and clickable at all times
- [ ] Glass blur activates on scroll (desktop)
- [ ] Mobile hamburger menu opens/closes
- [ ] All nav links scroll to correct sections
- [ ] CTA button visible and clickable

**Typography:**
- [ ] Cormorant Garamond loads for headings
- [ ] Inter loads for body text
- [ ] No FOUT (flash of unstyled text) — fonts use display: swap
- [ ] Text is readable at all sizes
- [ ] No orphaned words in headings (minor)

**Interactions:**
- [ ] Scroll animations trigger correctly (once only)
- [ ] Portfolio filter buttons work and filter instantly
- [ ] FAQ accordion opens/closes one at a time
- [ ] Hover states on all buttons and cards
- [ ] WhatsApp float button visible (Sales page)

**Images (after Phase 2):**
- [ ] All images load without errors
- [ ] Lazy loading works (below-fold images defer)
- [ ] Hero image loads with priority
- [ ] No broken image icons
- [ ] Blur placeholders show while images load

**Performance:**
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Lighthouse Best Practices > 90

### Lighthouse Audit Procedure

```bash
# Run in Chrome DevTools > Lighthouse tab
# Test both pages in:
# - Mobile mode
# - Desktop mode
# Record scores, fix any issues below 90
```

---

## SOP-006: Deployment to Vercel

### First-Time Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Mounty Ink skeleton"
   git remote add origin <github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com → New Project
   - Import from GitHub
   - Framework: Next.js (auto-detected)
   - Build Command: `next build`
   - Output Directory: `.next`
   - Click Deploy

3. **Configure domain** (when ready)
   - Vercel Dashboard → Project → Domains
   - Add custom domain
   - Update DNS records as instructed
   - Verify SSL certificate auto-provisions

### Subsequent Deployments

```bash
# Every push to main triggers auto-deploy
git add .
git commit -m "Description of changes"
git push origin main
# Vercel auto-deploys within ~60 seconds
```

### Preview Deployments

```bash
# Create a branch for changes
git checkout -b feature/update-portfolio
# Make changes, commit, push
git push origin feature/update-portfolio
# Vercel creates a preview URL automatically
# Review at preview URL before merging to main
```

---

## SOP-007: Post-Launch Maintenance

### Weekly Tasks

- [ ] Check Google Search Console for crawl errors
- [ ] Review Google Analytics for traffic patterns
- [ ] Verify all external links still work (WhatsApp, Instagram, email)

### Monthly Tasks

- [ ] Run Lighthouse audit on both pages
- [ ] Check for npm dependency security vulnerabilities: `npm audit`
- [ ] Update dependencies if security patches available
- [ ] Review and update FAQ content if needed

### Content Updates (As Needed)

- New portfolio pieces → Follow SOP-004
- Artist changes → Update both ArtistSpotlight + TeamFull
- Pricing changes → Update StylesPricing
- Contact info changes → Update Footer + ContactSection

---

## SOP-008: Emergency Procedures

### Site is Down

1. Check Vercel status page: `status.vercel.com`
2. Check deployment logs in Vercel dashboard
3. If bad deploy: Vercel → Deployments → Click previous working deploy → "Promote to Production"
4. Investigate and fix in a branch before re-deploying

### Broken Layout/Feature After Deploy

1. Immediately roll back: Vercel → previous deployment → Promote
2. Reproduce locally: `npm run build && npm run start`
3. Fix in a branch, test thoroughly
4. Deploy fix via normal git push

### Performance Degradation

1. Run Lighthouse to identify regression
2. Check image sizes (did someone add unoptimized images?)
3. Check for new third-party scripts
4. Verify CDN cache is working (check response headers)

---

*SOP v1.0 — Created 2026-03-28*
