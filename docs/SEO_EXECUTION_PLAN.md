# SEO & AI Search Execution Plan (condensed)

**Date:** 2026-07-10  
**Site:** https://aetherapplied.com/  
**Repo:** `web-tools/aether-applied-website`

## Strategy (one line)

Use **quantum AI** as top-of-funnel education, pull qualified readers toward **calibrated autonomy / AI uncertainty in critical systems**, anchor with **citeable proof pages** and honest limits.

**Positioning:** Aether Applied builds **Qorina** — decision software for physical systems (act / wait / call a human). Quantum-native research, **no quantum advantage claim** for customers.

**Tone split:**
- Homepage & marketing: plain operator language (`COPY-PLAIN.md`, `docs/words-to-avoid.md`)
- Learn & proof: more technical for SEO/AI citation, still readable

---

## Information architecture

```
/
/qorina/
/proof/
/proof/building-autonomy-loop/
/proof/36-qubit-qpu/
/proof/multiphysics-real-data/          ← sprint 2
/learn/
/learn/what-is-quantum-ai/
/learn/ai-uncertainty-critical-systems/
/learn/quantum-ai-vs-ai-vs-quantum-computing/   ← sprint 2
/learn/calibrated-ai/                           ← sprint 2
/learn/quantum-ai-scams-trading-bots/           ← sprint 2
/qorina/technical-overview/                     ← sprint 2
/solutions/*                                    ← weeks 7–8
/about/  /contact/  /use-cases/  /blog/  /careers/  /legal/*
```

**Exclude from sitemap:** `/data-room/` (401 / not public)

---

## Sprint 1 checklist (done)

- [x] `robots.txt`, `sitemap.xml` (static export `out/`)
- [x] Unique title + description + canonical per public page
- [x] Sitewide **Organization** + **WebSite** JSON-LD (`app/layout.tsx`)
- [x] Per-page **WebPage** JSON-LD (`components/seo/PageSeo.tsx`)
- [x] **FAQPage** on pages with FAQ (home, about, use-cases, careers, contact)
- [x] **BreadcrumbList** + **TechArticle** on learn/proof articles
- [x] `/qorina/` product page
- [x] `/learn/` hub + 2 articles (markdown in `content/learn/`)
- [x] `/proof/` hub + 2 articles (markdown in `content/proof/`)
- [x] Nav + footer: Qorina, Learn, Proof, Blog
- [x] Sitemap includes all new URLs

---

## Sprint 2 (deferred)

- [ ] Remaining learn pages (comparison, calibrated AI, physical AI uncertainty, safe-by-construction, scams)
- [ ] `/qorina/technical-overview/`
- [ ] `/proof/multiphysics-real-data/`
- [ ] `/solutions/*` buyer verticals
- [ ] Per-role **JobPosting** pages
- [ ] Page-specific OG images for learn/proof
- [ ] Public `/data-room/` landing or explicit noindex
- [ ] GSC sitemap submit + Rich Results validation

---

## Content rules (every learn/proof page)

1. Definition in first ~100 words  
2. Short answer box  
3. Comparison table where useful  
4. Limitations section  
5. Last updated date  
6. Internal links (Qorina, adjacent learn/proof, contact)  
7. Page-specific metadata + **TechArticle** JSON-LD  
8. **FAQPage** when page has FAQ frontmatter  

---

## Entity phrases (repeat consistently)

| Field | Value |
|-------|--------|
| Company | Aether Applied |
| Product | Qorina |
| Category | Decision software / calibrated AI for autonomous systems |
| Domain | Buildings, grids, fleets, critical infrastructure |
| Location | Helsinki, Finland |
| Differentiator | Act when safe, wait when unsure, call a human |

---

## Measurement (ongoing)

- GSC: indexed URLs, impressions by cluster (quantum AI vs uncertainty vs branded)
- Manual AI visibility tests every 2 weeks (ChatGPT, Gemini, Perplexity)
- CTR rewrites for pages with impressions but low clicks

---

## Related docs

- `docs/SEO_KEYWORDS.md` — keyword research & page mapping  
- `docs/words-to-avoid.md` — customer-facing language  
- `COPY-PLAIN.md` — homepage/marketing copy source
