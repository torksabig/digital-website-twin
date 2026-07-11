# AI Supply Clone — Deliverables

Multi-page clone of `aisupply.framer.website` → Next.js 15 (App Router) + Tailwind v4 + motion.

## Run
```bash
cd "aisupply-clone"
npm run dev    # http://localhost:3210
npm run build  # verified: all 10 routes compile, 0 type errors
```

## Route manifest (7 routes, all 200 OK)
| Route | File | Status |
|-------|------|--------|
| `/` | `app/page.tsx` | ✅ full home (11 sections) |
| `/use-cases` | `app/use-cases/page.tsx` | ✅ |
| `/about` | `app/about/page.tsx` | ✅ |
| `/careers` | `app/careers/page.tsx` | ✅ |
| `/contact` | `app/contact/page.tsx` | ✅ |
| `/legal/privacy-policy` | `app/legal/privacy-policy/page.tsx` | ✅ |
| `/legal/terms-conditions` | `app/legal/terms-conditions/page.tsx` | ✅ |

## Component inventory (`components/`)
Shared / reused:
- `Nav.tsx` — sticky glass pill nav + mobile hamburger menu (all pages)
- `Footer.tsx` — 4-col footer w/ bg image, legal + socials (all pages)
- `ui.tsx` — `Container`, `Eyebrow` (label pill), `Button` (4 variants)
- `Reveal.tsx` — `Reveal`, `Stagger`, `StaggerItem` (scroll entrance motion)
- `FAQ.tsx` — accordion (home, use-cases, about, careers, contact)
- `CTASection.tsx` — closing CTA band w/ bg image (home, use-cases, about)
- `Stats.tsx` — "Real Numbers" animated count-up band (use-cases, about)
- `LegalPage.tsx` — shared legal layout (both legal routes)
- `ContactForm.tsx` — contact form (stub submit)

Home-only (`components/home/`):
- `ProcessTabs.tsx` — Discovery/Develop/Optimize tabs + animated workflow diagram
- `ROICalculator.tsx` — live cost calculator (sliders → reclaimed $)
- `IndustryTabs.tsx` — 8 industry tabs w/ animated panel
- `Pricing.tsx` — Starter/Pro plans + monthly/yearly toggle (−20%)
- `Testimonials.tsx` — quote cards w/ stats

## Design tokens (see `.tasks/.../context.md`)
- ink `#0A1015`, paper `#F7F8FA`, blue-900 `#103E66`, blue-200 `#C5DFFB`
- radii: pills 100px, cards 28–40px · soft layered card shadow
- Fonts: body **Inter** (Google). Headings used **LT Remark** (paid Framer font) → **substituted with Inter + tight tracking** (`.font-display`). ⚠️ fidelity limitation.

## Assets (23 downloaded → `public/images/`)
logo, hero, badge-dot, client1–6, feature-data/workflow/execute, industry1/2, visual1/2, cta-bg, footer-bg, misc1/2, about-mission, team1/2.

## ⚠️ TODO — replace before publishing (all marked `// TODO: replace copy`)
**Copy (placeholder — competitor/template IP):**
- Home: hero headline+sub, 3 feature cards, process 3 steps, ROI labels, 8 industries, 6 benefits, compare lists, 2 testimonials, 2 pricing plans, 5 FAQs, CTA
- Use-cases: 4 case cards, manual-vs-AI lists, stats
- About: mission, 3 team members (names/roles/photos), hiring copy
- Careers: hero + 3 placeholder roles (original lists none)
- Contact: address/phone/email (`Trafalgar Blvd. 67, Hong Kong` etc.)
- Legal: both pages are placeholder section scaffolds — replace with real reviewed policy

**Assets to swap:**
- `logo.png` (currently AI Supply template logo) → your brand
- `team1/2.jpg` → real team photos (3rd member reuses team1)
- All `feature-*`, `industry*`, `hero.jpg`, `cta-bg`, `footer-bg` → your visuals

**Wire-ups:**
- `ContactForm` submit is a stub → connect to real endpoint
- Footer socials → real URLs (X currently → x.com/the0teo)
- Replace Inter heading substitute with licensed display font for exact match

## Known fidelity gaps vs original
- Heading font is Inter substitute (LT Remark is paid/unavailable).
- Process workflow diagram is a simplified node list (original is a styled Framer canvas).
- Testimonials are a static 2-up grid (original auto-scrolls); marquee util available in globals.css.
- Feature card images are the originals; some are light-on-white and look faint.
