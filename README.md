# digital-website-twin

Digital twin (mirror) of the [Aether Applied](https://aetherapplied.com) marketing website. Use this copy for experimentation, staging previews, backups, or development without touching production.

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

**Security note:** With `output: "export"`, credentials are embedded in the client bundle at build time. This is suitable for staging/twin demos only — not production security. For stronger protection on Cloudflare Pages, use [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/policies/access/) in front of the deployment.

## Notes

- Functionality matches the source site; dependencies and scripts are unchanged aside from this package name.
- Not affiliated with production hosting unless you explicitly deploy this repo.
