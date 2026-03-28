# MOUNTY INK — Product Requirements Document (PRD)

> **Version:** 1.0
> **Date:** 2026-03-28
> **Project:** Mounty Ink Bali — Dual Landing Page Website
> **Owner:** Six Zenith

---

## 1. Executive Summary

Mounty Ink is a premium tattoo atelier based in Bali, Indonesia, targeting international tourists seeking a luxury tattoo experience. This project delivers **two purpose-built landing pages**:

1. **Sales Landing Page** (`/`) — Conversion-focused. Drive tattoo session bookings from tourists visiting or planning to visit Bali.
2. **Company Profile Landing Page** (`/company`) — Brand-focused. Establish credibility, tell the brand story, attract press, partnerships, and discerning clients.

Both pages share a unified design system but differ in tone, content depth, and primary call-to-action.

---

## 2. Target Audience

### Primary Persona: "The Traveling Ink Seeker"
- **Demographics:** 22-45 years old, international tourists (AU, US, UK, EU, JP, KR)
- **Behavior:** Researching "tattoo studio bali" on mobile while traveling or planning a trip
- **Motivation:** Wants a meaningful, high-quality tattoo as a permanent Bali souvenir
- **Pain points:** Worried about hygiene, quality, communication barriers, pricing transparency
- **Device:** 65% mobile, 25% desktop, 10% tablet

### Secondary Persona: "The Brand Explorer"
- **Demographics:** 25-50, travel journalists, collaboration scouts, event planners
- **Behavior:** Evaluating studio credibility for features, partnerships, or premium referrals
- **Motivation:** Looking for a photogenic, story-rich studio to feature or partner with
- **Device:** 55% desktop, 35% mobile, 10% tablet

---

## 3. Product Goals & Success Metrics

### Sales Page Goals
| Goal | Metric | Target |
|---|---|---|
| Drive bookings | Click-through rate on "Book Now" CTAs | > 8% |
| Capture leads | WhatsApp message initiations | > 5% of visitors |
| Showcase quality | Time on page (portfolio section) | > 45 seconds |
| Build trust | Scroll depth past testimonials | > 60% of visitors |
| Mobile conversion | Mobile booking CTR | > 6% |

### Company Profile Goals
| Goal | Metric | Target |
|---|---|---|
| Brand storytelling | Average time on page | > 3 minutes |
| Credibility | Scroll depth to contact section | > 50% |
| Inquiry generation | Contact form / email clicks | > 3% |
| SEO authority | Organic ranking for "tattoo studio bali" | Top 10 |
| Social proof | Outbound clicks to Instagram | > 4% |

---

## 4. Feature Requirements

### 4.1 Sales Landing Page — Feature Map

| Priority | Feature | Description | Acceptance Criteria |
|---|---|---|---|
| P0 | Hero with CTA | Full-viewport hero, animated headline, "Book Your Session" + "View Gallery" buttons | Loads in < 1s, CTA visible without scroll, video/image bg |
| P0 | Portfolio Gallery | Masonry grid, filterable by style (6 categories), hover overlay with artist name | Filters work instantly, images lazy-load, lightbox on click |
| P0 | Booking CTA | Full-width gradient section with primary + WhatsApp CTAs | Links to WhatsApp with pre-filled message, sticky mobile bar |
| P0 | Mobile Responsive | Full mobile-first responsive design | Passes Google Mobile-Friendly test, no horizontal scroll |
| P1 | Trust Bar | Animated stats: clients, rating, artists, hygiene | Numbers visible above the fold on scroll |
| P1 | Artist Cards | 4 artist spotlight cards with photo, specialty, "Book with X" CTA | Each card links to booking with artist name pre-filled |
| P1 | Styles & Pricing | 6 style cards with image, description, "Starting from" price | Clicking "Get a Quote" scrolls to booking section |
| P1 | Testimonials | 3 client stories with healed tattoo photo, star rating | Real client data when available, placeholder structure ready |
| P1 | FAQ Accordion | 6 common questions, animated expand/collapse | Smooth animation, only one open at a time, keyboard accessible |
| P1 | How It Works | 3-step process: Consult → Design → Ink | Scroll-triggered icon animations |
| P2 | WhatsApp Float | Fixed bottom-right green button, links to WhatsApp | Appears after 2s delay, doesn't cover content on mobile |
| P2 | Sticky Nav | Glass-blur navbar, auto-hides on scroll down, shows on scroll up | Smooth transition, doesn't jump, logo always visible |
| P2 | Scroll Animations | Framer Motion scroll-triggered reveals on all sections | 60fps, no jank, respects prefers-reduced-motion |

### 4.2 Company Profile Page — Feature Map

| Priority | Feature | Description | Acceptance Criteria |
|---|---|---|---|
| P0 | Cinematic Hero | Logo reveal animation, tagline, atmospheric dark gradient | Logo scales in smoothly, parallax scroll hint line |
| P0 | Brand Story | 2-row editorial layout: origin story + philosophy | Text left/image right alternating, scroll-triggered reveals |
| P0 | Team Profiles | Full artist bios with portrait, specialty, portfolio link | Alternating layout (photo left/right), Instagram links |
| P0 | Contact Section | Map embed + address + email + phone + social + inquiry CTA | All links functional, map interactive |
| P1 | Vision & Values | 3 value pillars + vision statement blockquote | Hover glow on cards, italic vision quote |
| P1 | Stats Counter | 5 animated counters (years, tattoos, artists, countries, rating) | Count animation triggers on scroll into view, once |
| P1 | Studio Gallery | Bento grid layout of studio interior photos | Grid layout works on all breakpoints, 5 image slots |
| P1 | Hygiene Standards | 4 safety standard cards with icons | Clear trust communication, professional tone |
| P1 | Portfolio (shared) | Reuses sales page Portfolio component | Same filtering, same interactions |
| P1 | Testimonials (shared) | Reuses sales page Testimonials component | Consistent presentation |
| P2 | Press Section | "As featured in" logo row (future enhancement) | Placeholder structure for when press coverage exists |

---

## 5. Content Requirements

### 5.1 Copy Tone & Voice

| Attribute | Sales Page | Company Profile |
|---|---|---|
| **Tone** | Confident, inviting, action-oriented | Editorial, storytelling, authoritative |
| **Voice** | "We create art on your skin" | "This is who we are and why we exist" |
| **Sentence length** | Short, punchy, scannable | Longer, narrative, immersive |
| **CTA language** | "Book Now", "Get a Quote", "WhatsApp Us" | "Learn More", "Send an Inquiry", "View Portfolio" |
| **Pronoun** | "You" focused (your story, your vision) | "We" focused (our journey, our craft) |

### 5.2 Image Requirements

All images are AI-generated. Each slot has specific requirements:

| Slot | Dimensions | Style | Content |
|---|---|---|---|
| Hero BG (Sales) | 1920x1080 min | Dark, moody, atmospheric | Artist tattooing client in premium studio |
| Portfolio items (8) | 800x1000 / 1000x800 / 800x800 | Photorealistic | Healed tattoos: realism, fine line, Balinese, B&W, color, watercolor, Japanese, sacred geometry |
| Style cards (6) | 800x500 | Photorealistic | Close-up of each tattoo style on skin |
| Artist portraits (4) | 600x800 | Professional, moody lighting | Headshots/half-body, dark bg, blue accent lighting |
| Testimonial tattoos (3) | 800x400 | Natural, healed | Healed tattoos on real-looking skin |
| Studio interior (5) | Various (bento grid) | Architectural, luxurious | Reception, station, sterilization room, consult area, exterior |
| Founder story (1) | 600x750 | Editorial portrait | Founder in studio environment |
| Studio interior wide (1) | 1000x750 | Atmospheric | Wide shot of studio interior |
| Logo | Already exists | — | `logo/approved/logo.png` |

### 5.3 AI Image Generation Prompts Spec

Every AI-generated image MUST follow this DNA:

```
[VISUAL DNA]
Setting: Premium tattoo studio in Bali. Modern luxury meets Balinese architecture.
Lighting: Moody, directional — warm tungsten key light, cool blue fill.
          Never flat. Always cinematic.
Color grade: Deep shadows, lifted blacks with blue undertone,
             selective warm highlights on skin/wood.
Palette: Matches brand — deep navy (#1A3A6B), matte black, warm skin tones,
         touches of electric blue (#2E7BFF) in accent lighting.
Quality: Photorealistic, 4K detail, shallow depth of field where appropriate.
Mood: Luxury editorial — as if shot for Cereal Magazine or Kinfolk.

[AVOID]
Stock photo feel, overly bright/flat lighting, clinical white environments,
cartoonish tattoos, low-resolution, blurry, visible AI artifacts,
inconsistent skin tones, western-centric studio aesthetics.
```

---

## 6. User Flows

### 6.1 Sales Page — Primary Flow (Tourist Booking)

```
Land on Hero
  → Impressed by atmosphere, reads headline
  → Scrolls past Trust Bar (builds confidence)
  → Browses Portfolio (filters by preferred style)
  → Explores Artist cards (finds preferred artist)
  → Reads Testimonials (social proof)
  → Understands process via How It Works
  → Hits Booking CTA → Clicks "Book a Session" or "WhatsApp Us"
  → Initiates conversation on WhatsApp with pre-filled message
```

### 6.2 Sales Page — Secondary Flow (Quick Booker)

```
Land on Hero
  → Clicks "Book Your Session" immediately
  → Scrolls to Booking CTA section
  → Clicks WhatsApp → Conversation started
```

### 6.3 Company Profile — Primary Flow (Brand Explorer)

```
Land on Hero (logo reveal creates premium first impression)
  → Reads Brand Story (understands origin + philosophy)
  → Absorbs Values (artistry, hygiene, culture)
  → Sees Stats (quantified credibility)
  → Explores Studio Gallery (visual trust)
  → Deep-dives Team profiles (human connection)
  → Browses Portfolio highlights (quality evidence)
  → Reviews Hygiene Standards (safety assurance)
  → Reads Testimonials (third-party validation)
  → Reaches Contact → Sends inquiry email or follows on Instagram
```

---

## 7. Non-Functional Requirements

| Requirement | Target | Measurement |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Lighthouse / PageSpeed Insights |
| **INP** (Interaction to Next Paint) | < 200ms | Chrome UX Report |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| **First Load JS** | < 170kB (gzipped) | Next.js build output |
| **Accessibility** | WCAG 2.1 AA | axe-core / Lighthouse |
| **SEO Score** | > 90 | Lighthouse |
| **Mobile Score** | > 90 | PageSpeed Insights |
| **Browser Support** | Chrome, Safari, Firefox, Edge (last 2 versions) | Manual + BrowserStack |
| **Image Format** | WebP / AVIF with fallback | Next.js Image component |
| **SSL** | Required | HTTPS only |
| **Uptime** | 99.9% | Hosting provider SLA |

---

## 8. Out of Scope (v1.0)

- Online booking system / calendar integration (v2.0 — Calendly or custom)
- E-commerce / merchandise shop (v2.0)
- Blog / content section (v2.0)
- Multi-language support (v2.0 — EN, ID, JP, KR, ZH)
- User accounts / client portal (v3.0)
- Live Instagram feed embed (v2.0)
- CMS for content management (v2.0 — Sanity or Payload)
- Analytics dashboard (set up GA4 + Hotjar in deployment phase)
- Email capture / newsletter (v2.0)

---

## 9. Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| AI images look inconsistent | Brand credibility damaged | Medium | Use consistent prompts with shared DNA block, batch generate, curate |
| Slow load on mobile in Bali | High bounce rate | Medium | Aggressive image optimization, CDN, lazy loading, static generation |
| Content not in client's voice | Inauthentic brand | Medium | Review all copy with brand owner, iterate on tone |
| WhatsApp as sole booking method | Lost conversions | Low | Add email fallback, plan booking system for v2.0 |
| Competitors copy design | Diluted brand | Low | Unique brand elements (slash logo, blue palette) are distinctive enough |

---

## 10. Timeline & Milestones

| Phase | Deliverable | Status |
|---|---|---|
| Phase 1: Skeleton | Project scaffold, all components, design system | COMPLETE |
| Phase 2: Content & Images | AI-generated images, final copy, real data | NEXT |
| Phase 3: Polish | Animations, micro-interactions, responsive QA | — |
| Phase 4: Performance | Lighthouse optimization, image compression, SEO | — |
| Phase 5: Deploy | Vercel deployment, domain, SSL, analytics | — |
| Phase 6: QA | Cross-browser, mobile testing, accessibility audit | — |
| Phase 7: Launch | Go-live, social media update, Google Business link | — |

---

*PRD v1.0 — Created 2026-03-28*
