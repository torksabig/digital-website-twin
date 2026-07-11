# digital-website-twin

Digital twin (mirror) of the [Aether Applied](https://aetherapplied.com) marketing website. Use this copy for experimentation, staging previews, backups, or development without touching production.

**Source of truth for live site:** `web-tools/aether-applied-website` in the MAIN AI workspace (or production deploy from that project).

## Quick start

```bash
npm install
npm run dev          # Next.js dev server (port 3210)
npm run dev:stable   # Static export preview on port 3210
npm run build
```

## Notes

- Functionality matches the source site; dependencies and scripts are unchanged aside from this package name.
- Not affiliated with production hosting unless you explicitly deploy this repo.
