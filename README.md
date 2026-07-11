# digital-website-twin

Digital twin (mirror) of the [Aether Applied](https://aetherapplied.com) marketing website. Use this copy for experimentation, staging previews, backups, or development without touching production.

**Twin URL (pending route setup):** https://digital.buildoutloud.net  
**Source of truth for live site:** `web-tools/aether-applied-website` in the MAIN AI workspace (or production deploy from that project).

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — set twin password
npm run dev                    # Next.js dev server (port 3210)
npm run dev:stable             # Static export preview on port 3210
npm run build
```

## Login (twin access)

The twin is protected by a simple email + password gate. Unauthenticated visitors are redirected to `/login`.

| Setting | Value |
|--------|--------|
| Email env var | `NEXT_PUBLIC_SITE_EMAIL` |
| Password env var | `NEXT_PUBLIC_SITE_PASSWORD` |
| Default email | `admin@admin.com` |
| Default password | `1234567890` |
| Remember me | 30-day cookie + sessionStorage |

```bash
# Custom credentials (rebuild required for static export)
echo 'NEXT_PUBLIC_SITE_EMAIL=admin@admin.com' >> .env.local
echo 'NEXT_PUBLIC_SITE_PASSWORD=1234567890' >> .env.local
npm run build
```

**Security note:** With `output: "export"`, credentials are embedded in the client bundle at build time. This is suitable for local demos only — not production security. For the deployed twin at `digital.buildoutloud.net`, use [Cloudflare Access](docs/CLOUDFLARE_ACCESS.md) and disable the client gate:

```bash
NEXT_PUBLIC_DISABLE_AUTH_GATE=true npm run build
```

See [docs/CLOUDFLARE_ACCESS.md](docs/CLOUDFLARE_ACCESS.md) for DNS, worker route, and Zero Trust setup.

## Notes

- Functionality matches the source site; dependencies and scripts are unchanged aside from this package name.
- Not affiliated with production hosting unless you explicitly deploy this repo.
