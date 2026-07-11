# Blog authoring guide

Teammates add blog posts as Markdown files in this repo. The site reads them automatically at build time — no TypeScript or React edits required.

## Where posts live

```
content/blog/
  _template.md          ← copy this to start a new post
  your-post-slug.md     ← one file per published post
```

Files starting with `_` are ignored (templates only).

## Quick start (non-developers)

1. **Copy the template**  
   Duplicate `content/blog/_template.md` and rename it to your slug, e.g. `when-to-turn-automation-back-on.md`.

2. **Fill in the top block (frontmatter)**  
   Edit the fields between the `---` lines:

   | Field | Required | Example |
   |-------|----------|---------|
   | `title` | Yes | `"Why we wait instead of guessing"` |
   | `slug` | Yes | `why-we-wait-instead-of-guessing` (URL: `/blog/why-we-wait-instead-of-guessing/`) |
   | `date` | Yes | `2026-07-01` |
   | `category` | Yes | `"Safer automation"`, `"Testing"`, or `"Operators"` |
   | `excerpt` | Yes | Short summary for cards and article header |
   | `description` | **Recommended for SEO** | Meta description for search engines and social previews (150–160 chars). Defaults to `excerpt` if omitted, but a dedicated line reads better in Google results. |
   | `author` | No | `"Aether Applied team"` |
   | `readMinutes` | No | Auto-calculated from word count if omitted |
   | `image` | No | `/blog/your-banner.png` (add image to `public/blog/`) |
   | `imageAlt` | No | Accessible description of the banner |

3. **Write the body**  
   - Opening paragraphs: no heading — just text separated by blank lines.  
   - Sections: use `## Section title` on its own line, then paragraphs below.  
   - Keep paragraphs short; one idea per paragraph.

4. **Add a banner image (optional)**  
   Place a wide image in `public/blog/` and reference it in frontmatter as `/blog/filename.png`.

5. **Publish**  
   Commit the new `.md` file and push. Whoever deploys the site runs `npm run build` (or CI does this). New posts appear after the next deploy.

## Example frontmatter

```yaml
---
title: "What a shadow test actually shows you"
slug: what-a-shadow-test-shows-you
date: 2026-07-08
category: "Testing"
excerpt: "A shadow test runs new decision logic alongside what you already use, without touching live controls."
description: "Shadow tests explained for operators: read-only comparison of new automation against your current setup, without risking live systems."
author: "Aether Applied team"
image: /blog/shadow-test-banner.png
imageAlt: "Circular dot waveform visualization"
---
```

## Preview locally (developers)

```bash
cd web-tools/aether-applied-website
npm run dev
```

Open `http://127.0.0.1:3210/blog/` and your post URL.

Production build:

```bash
npm run build
```

Static output goes to `out/` for Cloudflare Pages.

## Connecting a shared “data room”

We did not find an existing “data room” integration in the MAIN AI workspace. This repo uses **Markdown in Git** as the source of truth — a good fit if your data room is a shared folder or GitHub repo.

### Option A — GitHub (recommended)

1. Give teammates write access to the website repo (or a `content/blog` fork).  
2. Teammates edit or upload `.md` files under `content/blog/`.  
3. Open a pull request for review, merge, deploy.

### Option B — Shared cloud folder → Git

If your data room is Google Drive, Dropbox, or Notion exports:

1. Create a folder sync (e.g. Drive desktop sync or `rclone`) from the shared folder to `content/blog/` on a maintainer machine.  
2. Only sync `*.md` files; keep images in `public/blog/`.  
3. Maintainer commits synced files and deploys.

### Option C — Notion (future)

Notion MCP is available in Cursor but not wired to this site. To use Notion later: export pages as Markdown into `content/blog/` or add a build script that pulls from the Notion API.

## Placeholder (“coming soon”) cards

Upcoming titles without full posts are listed in `lib/blog/posts.ts` under `PLACEHOLDER_POSTS`. Ask a developer to remove a placeholder when the real `.md` file is published.

## Checklist before you publish

- [ ] Slug is lowercase with hyphens (matches filename)  
- [ ] Date is `YYYY-MM-DD`  
- [ ] Excerpt reads well on the blog index  
- [ ] `description` is filled (150–160 chars) for SEO and social previews  
- [ ] Every `##` section has at least one paragraph  
- [ ] Banner image exists in `public/blog/` if referenced  
- [ ] `npm run build` passes (developer or CI)

## Automated daily posts (CLI + GitHub Action)

Developers can generate a draft post from merged keyword CSV research:

```bash
cd web-tools/aether-applied-website
npm run blog:generate              # write content/blog/{slug}.md
npm run blog:generate -- --dry-run   # preview without writing files
```

### How topic selection works

1. Reads keyword CSVs from `scripts/data/keyword-csv/` (CI) or `~/Downloads/` (local default).
2. Filters out trading/scam/investment noise and low-fit consumer terms.
3. Picks the next item from `content/blog/.topic-queue.json`, or falls back to a date hash over relevant keywords.
4. Skips if the slug already exists.

### Content providers (first match wins)

| Priority | Env var | Notes |
|----------|---------|-------|
| 1 | `OPENAI_API_KEY` | Default model `gpt-4o-mini` (`OPENAI_MODEL` to override) |
| 2 | `ANTHROPIC_API_KEY` | Default `claude-sonnet-4-20250514` (`ANTHROPIC_MODEL` to override) |
| 3 | Template fallback | No API key required; operator-focused scaffold |

Generated copy is validated: no em/en dashes, `docs/words-to-avoid.md` replacements applied.

### Banner images

| Priority | Env var | Notes |
|----------|---------|-------|
| 1 | `PEXELS_API_KEY` | Free Pexels API |
| 2 | `UNSPLASH_ACCESS_KEY` | Unsplash random photo |
| 3 | Local fallback | Copies an existing abstract image from `public/blog/` |

Output: `public/blog/{slug}-banner.jpg` referenced in frontmatter.

### GitHub Action secrets

Workflow: `.github/workflows/daily-blog.yml` (08:00 UTC daily + manual dispatch).

Add these repository secrets in GitHub → Settings → Secrets and variables → Actions:

| Secret | Required | Purpose |
|--------|----------|---------|
| `OPENAI_API_KEY` | Recommended | AI post generation |
| `ANTHROPIC_API_KEY` | Optional | Fallback if OpenAI unavailable |
| `PEXELS_API_KEY` | Optional | Topic-relevant banner images |
| `UNSPLASH_ACCESS_KEY` | Optional | Banner fallback |

The workflow opens a **pull request** (does not push directly to `main`). Review copy, then merge to deploy via Cloudflare.

Optional env vars:

- `KEYWORD_CSV_DIR` — override CSV folder path
- `OPENAI_MODEL` / `ANTHROPIC_MODEL` — model overrides

Keyword cache written to `scripts/data/keywords-merged.json` on each run for auditing.

## Need help?

Contact whoever manages deploys for `aether-applied-website`. Share your draft `.md` file even if you cannot push to Git yourself.
