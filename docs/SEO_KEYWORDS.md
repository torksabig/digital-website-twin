# SEO keyword strategy — Aether Applied / Qorina

**Research date:** 10 July 2026 (updated with six new CSV exports)  
**Source files:**

- **Legacy:** Three Semrush-style exports (`all categories-quantum ai-en-us-10-07-2026.xlsx` and duplicates). Seeded on "Quantum AI"; heavy trading/scam noise.
- **New (Jul 2026):** Six CSV exports in `scripts/data/keyword-csv/` (`Keyword Research (1).csv` through `(6).csv`). Topics: autonomous AI, EV charging AI, physics AI, electricity grid, energy optimization. **Much better operator fit.**

---

## Data summary (new CSV merge)

| Metric | Value |
|--------|-------|
| Total unique keywords (6 CSV files, deduped) | 287 |
| Files | Autonomous AI (50), EV charging (1), EV AI (37), Physics AI (50), Electricity grid (50), Energy optimization (50) |

### Relevance split (after filtering)

| Bucket | Count | Notes |
|--------|-------|-------|
| **Skip** | 9 | Trading/scam/stock (`quantum ai stock`, `quantum ai trading`, etc.) plus consumer noise (desks, tutors, grid maps) |
| **Operator fit** | ~120 | Energy optimization, autonomous AI systems, EV charging AI, power grid automation language |
| **Quantum bridge** | ~50 | Residual quantum AI terms from legacy overlap in file (6) |
| **Other** | ~108 | Generic grid geography, homework-style physics AI, unrelated brands |

**Verdict:** New exports are **stronger than the quantum scam export** for Aether positioning. They align with buildings/grids/fleets/energy. Keep quantum terms in blog-only thought leadership; lead with operator keywords in daily generator queue (`content/blog/.topic-queue.json`).

### Top operator-fit keywords (new exports)

| Keyword | Vol | Suggested use |
|---------|-----|----------------|
| energy optimization | 320 | Daily blog queue P1; buildings/EMS angle |
| autonomous ai systems | 210 | Blog: physical autonomy vs agent hype |
| ai in ev charging | 10 | Blog: fleet/charging depot operators |
| ev ai | 40 | Secondary fleet keyword |
| power grid electricity / electricity power grid | 390 | Grid stress-test narrative on `/use-cases/` |
| quantum computing vs ai | 590 | Already published blog post |
| quantum ai software | 210 | Honest Qorina clarification footnote |
| what is autonomous ai | 90 | Educational blog; disambiguate from trading agents |

**Still missing (separate research):** `building automation`, `HVAC AI`, `BMS integration`, `demand response automation`, `microgrid control`. Add when a facilities-focused export lands.

### Top categories in the export (by modifier)

- **Related** — broad quantum AI associations (many trading/investment intents)
- **Alphabeticals** — long-tail variants
- **Comparisons** — `quantum computing vs ai`, `quantum and ai` (best honest blog fit)
- **Questions** — informational; mostly scam-related (`is quantum ai legit`) — skip

### Highest-volume keywords we intentionally skip

| Keyword | Vol | Why skip |
|---------|-----|----------|
| quantum ai invest / investment | 590 / 320 | Financial product intent |
| quantum ai stock / trading | 480+ | Not our product |
| quantum ai app / download | 140+ | Consumer app intent |
| quantum ai scam / review | 90–210 | Reputation noise |
| elon musk quantum ai | 90–110 | Celebrity spam |

---

## Strategy principles

1. **Homepage and product pages = operator language.** Buildings, grids, fleets, decision software, shadow testing. No quantum sales claims.
2. **Blog = thought leadership.** Quantum vs classical AI, governance, safety — honest R&D context, not "buy quantum."
3. **Never keyword-stuff.** One primary phrase per page title; support in description and one H2 where natural.
4. **Plain language.** Follow `docs/words-to-avoid.md` and `COPY-PLAIN.md`.

---

## Target keywords by page (top 30)

### Tier 1 — Quick wins (existing pages, operator intent)

| Priority | Keyword / phrase | Page | Current action |
|----------|------------------|------|----------------|
| P1 | safer automation buildings grids fleets | `/` | Title + description (done) |
| P1 | decision software physical systems | `/`, `/about/` | Metadata + body copy |
| P1 | building automation safety | `/use-cases/` | Description + Helsinki case H2 |
| P1 | HVAC building control testing | `/use-cases/` | Case tag + metadata |
| P1 | power grid automation stress test | `/use-cases/` | Grid case section |
| P1 | shadow test automation | `/blog/what-a-shadow-test-shows-you/` | Existing post; index metadata |
| P1 | when to wait instead of guessing | `/blog/why-we-wait-instead-of-guessing/` | Existing post |
| P2 | EV fleet charging automation | `/` Industry tabs | Hero subcopy (already mentions charging) |
| P2 | energy management automation | `/` | Metadata description |
| P2 | automation trust operators | `/blog/` | Blog index description |

### Tier 2 — From keyword export (blog / long-term)

| Priority | Keyword | Vol | Page | Notes |
|----------|---------|-----|------|-------|
| P2 | quantum computing vs ai | 480 | **New blog:** `quantum-computing-vs-ai-for-operators` | Comparison intent; honest operator framing |
| P2 | ai vs quantum computing | 170 | Same post | Secondary H2 |
| P2 | quantum ai software | 210 | Same post (footnote) | Clarify Qorina is classical decision software today |
| P2 | quantum and ai | 90 | Same post | Natural section heading |
| P2 | quantum computing versus ai | 70 | Same post | Synonym coverage |
| P3 | quantum ai safety | 0* | **New blog:** `ai-governance-for-physical-automation` | Export volume 0; strong thematic fit |
| P3 | quantum ai governance | 0* | Same post | Map to operator governance language |
| P3 | when quantum meets ai | 0 | Future blog idea | R&D roadmap piece |
| P3 | why quantum matters for ai | 0 | Future blog idea | Research lab angle |
| P3 | can quantum computers run ai | 10 | Future FAQ/blog | Low vol, educational |

\*Google shows 0 in export; Bing may differ. Still worth owning the safety/governance narrative for brand alignment.

### Tier 3 — Operator targets (not in this export; separate research needed)

| Keyword | Suggested page |
|---------|----------------|
| building automation system | `/use-cases/` |
| BMS integration AI | `/` + future integration page |
| smart building energy management | `/` |
| demand response automation | `/use-cases/` |
| microgrid control software | `/use-cases/` |
| fleet charging load management | `/` |
| predictive maintenance HVAC | Blog (future) |
| SCADA AI safety | `/use-cases/` cyber case |
| human in the loop automation | `/about/`, blog |
| operational technology AI | `/about/` |

---

## Suggested title and description updates

| Page | Title | Meta description |
|------|-------|------------------|
| `/` | Qorina: Safer Automation for Buildings, Grids & Fleets \| Aether Applied | Qorina is decision software for building automation, energy, and fleet operations. Act when safe, wait when unsure, call a human when needed. Helsinki deep tech. |
| `/about/` | About Aether Applied \| Decision Software for Physical Systems | Helsinki team building Qorina: safer automation for buildings, grids, and fleets. Built for operators who cannot afford silent mistakes. |
| `/use-cases/` | Use Cases \| Building, Grid & Automation Safety Tests | Real stress tests: HVAC and building automation, power grid control, and cyber scenarios. See where guarded automation blocked unsafe actions. |
| `/blog/` | Blog \| Safer Automation, Shadow Testing & Operator Notes | Plain-language notes on automation trust, shadow testing, and AI governance for buildings, grids, and fleets. |
| `/blog/quantum-computing-vs-ai-for-operators/` | Quantum Computing vs AI: What Operators Should Know \| Aether Applied | Quantum and classical AI solve different problems. Plain-language guide for building, grid, and fleet teams evaluating automation. |
| `/blog/energy-optimization-for-operators/` | Energy Optimization for Operators \| Aether Applied | How to evaluate energy optimization for buildings, grids, and fleets without unsafe automatic action. Shadow tests, limits, and governance. |

---

## Content calendar (next posts from placeholders + keyword gaps)

1. ~~Shadow testing~~ — published
2. ~~Why we wait~~ — published
3. **Quantum computing vs AI for operators** — published (this sprint)
4. **AI governance for physical automation** — published (this sprint)
5. **Energy optimization for operators** — daily generator seed (Jul 2026)
6. When to turn automation back on — placeholder (`lib/blog/posts.ts`)
6. Reading a shadow test report — placeholder
7. What operators ask before a pilot — placeholder; target "automation pilot checklist"
8. Future: separate Semrush project for **building automation** + **energy management** keywords

---

## Quantum vs operator balance (honest)

| Audience | Where | Message |
|----------|-------|---------|
| Operators (buyers) | Home, use cases, contact | Classical decision software, shadow tests, act/wait/call human |
| Technical readers | Blog, about footnotes | Quantum R&D exists; not required to use Qorina |
| Avoid | Homepage hero, product claims | "Quantum AI platform," trading, stock, app download language |

Rough split for new content: **80% operator / physical systems**, **20% quantum thought leadership** in blog only.

---

## Measurement

- Track impressions/clicks in Google Search Console for updated URLs after deploy
- Run a **dedicated** keyword export for: `building automation`, `HVAC AI`, `grid automation`, `fleet charging optimization`
- Revisit this doc when that export lands
