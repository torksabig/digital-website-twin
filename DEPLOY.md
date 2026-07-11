# Deploy — Cloudflare (Workers static assets)

This site is a **Next.js 15 app with static export** (`output: "export"` in `next.config.mjs`): it builds
to plain static files in `./out`, with no server runtime.

**Production twin URL:** https://digital.buildoutloud.net (after DNS + worker route setup)  
**Worker name:** `digital-website-twin`

For edge authentication, see [docs/CLOUDFLARE_ACCESS.md](docs/CLOUDFLARE_ACCESS.md).

## How it deploys (Workers static assets, configured in-repo)

The project **`digital-website-twin`** is a **Cloudflare Worker with static assets** (Workers & Pages →
Workers → digital-website-twin). Everything needed is in `wrangler.toml`, so no dashboard build-command change is required when
the Workers Build runs the default `npx wrangler deploy`:

- `[build].command = "npx next build"` — wrangler runs the Next build first (→ `./out` via
  `output: "export"`).
- `[assets].directory = "./out"` — wrangler serves the export as the Worker's static assets.
- `.node-version = 20` — Next 15 / React 19 need Node ≥ 18.18.

If the Workers Build has a non-default **deploy command**, set it to `npx wrangler deploy`. If it has a
separate **build command** field, `npx next build` works there too (output dir `out`).

## Deploy locally

```bash
npm ci
npm run build
npx wrangler deploy
```

Optional: set `NEXT_PUBLIC_DISABLE_AUTH_GATE=true` when [Cloudflare Access](docs/CLOUDFLARE_ACCESS.md) protects the hostname.

## Verification

`.github/workflows/build.yml` runs `npm ci && npm run build` on every push and uploads `out/` as an
artifact — a green run means the static export is valid (independent of Cloudflare).
