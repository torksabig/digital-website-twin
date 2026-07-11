# Cloudflare Access — digital.buildoutloud.net

Protect the digital website twin with **Cloudflare Access (Zero Trust)** instead of relying on the client-side login gate. Access runs at the edge before any static assets are served, so credentials never ship in the JS bundle.

**Target URL:** https://digital.buildoutloud.net  
**Worker name:** `digital-website-twin`  
**Cloudflare account:** [2386aea6a82c84fa00f3eda8bf4129a1](https://dash.cloudflare.com/2386aea6a82c84fa00f3eda8bf4129a1)

---

## Prerequisites

- Worker `digital-website-twin` deployed (see [DEPLOY.md](../DEPLOY.md))
- DNS zone `buildoutloud.net` on the same Cloudflare account
- Zero Trust enabled on the account ([Zero Trust dashboard](https://one.dash.cloudflare.com/))

---

## Step 1 — DNS (CNAME)

In **DNS** for `buildoutloud.net`:

| Type  | Name     | Target / content              | Proxy |
|-------|----------|-------------------------------|-------|
| CNAME | `digital` | `digital-website-twin.<account-subdomain>.workers.dev` **or** route via Workers custom domain | Proxied (orange cloud) |

**Option A — Workers custom domain (recommended):**  
[Workers & Pages → digital-website-twin → Settings → Domains & Routes → Add custom domain](https://dash.cloudflare.com/2386aea6a82c84fa00f3eda8bf4129a1/workers/services/view/digital-website-twin/settings) → enter `digital.buildoutloud.net`. Cloudflare creates/updates DNS automatically.

**Option B — Manual CNAME:** Point `digital` at the worker’s `*.workers.dev` hostname if you prefer manual DNS.

Verify: `dig digital.buildoutloud.net` resolves and is proxied through Cloudflare.

---

## Step 2 — Worker route

Ensure traffic for `digital.buildoutloud.net/*` hits this worker.

1. Open [digital-website-twin → Settings → Domains & Routes](https://dash.cloudflare.com/2386aea6a82c84fa00f3eda8bf4129a1/workers/services/view/digital-website-twin/settings)
2. Confirm custom domain **digital.buildoutloud.net** or route pattern `digital.buildoutloud.net/*` on zone `buildoutloud.net`

Alternatively, uncomment the `[[routes]]` block in [`wrangler.toml`](../wrangler.toml) and deploy:

```toml
[[routes]]
pattern = "digital.buildoutloud.net/*"
zone_name = "buildoutloud.net"
```

---

## Step 3 — Access application (Self-hosted)

1. Go to [Zero Trust → Access → Applications](https://one.dash.cloudflare.com/?to=/:account/access/applications)
2. **Add an application** → **Self-hosted**
3. **Application name:** `Digital Website Twin` (any label)
4. **Session Duration:** e.g. 24 hours
5. **Application domain:**
   - **Subdomain:** `digital`
   - **Domain:** `buildoutloud.net`
   - Or full hostname: `digital.buildoutloud.net`
6. Save — note the application ID if you automate policies later

---

## Step 4 — Access policy

1. On the new application, **Add a policy**
2. **Policy name:** e.g. `BuildOutLoud team`
3. **Action:** Allow
4. **Include** (pick one or combine):
   - **Emails** — specific addresses: `you@buildoutloud.net`, …
   - **Emails ending in** — `@buildoutloud.net`
   - **Login methods** — Google, GitHub, etc. (optional)
5. **Require** (optional): MFA, device posture
6. Save and move policy to the top if you add a deny rule later

Test in a private window: visiting https://digital.buildoutloud.net should show the Cloudflare Access login, not the twin’s `/login` page.

---

## Step 5 — Deploy

From the repo root:

```bash
npm ci
npm run build
npx wrangler deploy
```

Or rely on Workers Builds if connected to Git — ensure deploy command is `npx wrangler deploy` and build command is `npx next build` (see `wrangler.toml`).

---

## Disable client-side AuthGate (recommended with Access)

The twin still ships a client-side password gate by default. When Access is active, disable it so users are not prompted twice:

```bash
# .env.local or Workers Build environment variable
NEXT_PUBLIC_DISABLE_AUTH_GATE=true
npm run build
npx wrangler deploy
```

Set `NEXT_PUBLIC_DISABLE_AUTH_GATE=true` in the Cloudflare Workers **Settings → Variables** (production) before the build step if using CI.

---

## Why Access instead of client-side login?

| | Client-side AuthGate | Cloudflare Access |
|---|---------------------|-------------------|
| Credential location | Embedded in static JS at build time | Cloudflare identity provider |
| Bypass risk | Anyone can inspect bundle | Edge-enforced; no asset served until allowed |
| Suitable for | Local demos, quick staging | Production twin on `digital.buildoutloud.net` |

See also [README](../README.md) (Login section) and [DEPLOY.md](../DEPLOY.md).

---

## Quick links

| Resource | URL |
|----------|-----|
| Account overview | https://dash.cloudflare.com/2386aea6a82c84fa00f3eda8bf4129a1 |
| Worker service | https://dash.cloudflare.com/2386aea6a82c84fa00f3eda8bf4129a1/workers/services/view/digital-website-twin |
| DNS (buildoutloud.net) | https://dash.cloudflare.com/2386aea6a82c84fa00f3eda8bf4129a1/buildoutloud.net/dns |
| Zero Trust Access apps | https://one.dash.cloudflare.com/?to=/:account/access/applications |
| Access docs | https://developers.cloudflare.com/cloudflare-one/policies/access/ |
