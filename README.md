# Eavestrough Installation Guelph — Site

Static HTML/CSS/JS site. No build step, no dependencies — Vercel will
detect it as a static project automatically.

## Before going live — replace these placeholders

Search each `.html` file for `[PLACEHOLDER` and `555-0142` to find:

- Real phone number (header, hero, CTA bands, footer, JSON-LD schema in `index.html`)
- Real street address / postal code (JSON-LD schema in `index.html`)
- Real jobsite photos (currently: line-art SVG hero graphic + dashed
  placeholder tiles in the "Recent Work" gallery on each service page)
- Real testimonials (currently marked placeholder text on `index.html`)
- GA4 measurement ID + Google Ads conversion ID (commented block in
  `index.html`'s `<head>`, and the `gtag('event', 'conversion', ...)`
  line inside `script.js`, which is inlined into every page)
- Form destination — right now the quote forms just show a client-side
  "thanks" message. Wire the `quote-form` submit handler (inside each
  page's inline `<script>`, or centrally in the original `script.js`)
  to a real endpoint: Formspree, a Wix Forms element, a webhook into
  your CRM, etc.
- WSIB / insurance / licence number in the footer, if you want it shown

## Deploy — GitHub + Vercel (recommended path)

1. **Create a new repo on GitHub** (github.com → New repository).
   Name it something like `eavestrough-installation-guelph`. Leave it
   empty — no README/license/gitignore (this folder already has one).

2. **Push this folder to it.** From this project folder, run:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```
   GitHub will prompt you to sign in / authenticate the first time —
   use your GitHub account directly (browser sign-in or a personal
   access token you generate yourself in GitHub's settings). Don't
   paste tokens into a chat with anyone, including an AI assistant.

3. **Import the repo into Vercel:**
   - Go to vercel.com → New Project → Import Git Repository
   - Select the repo you just pushed
   - Framework preset: "Other" (it's plain static HTML — no build
     command needed, leave build/output settings blank)
   - Click Deploy. You'll get a live `*.vercel.app` URL within a minute.

4. **Point your real domain at it** (once you've registered
   `eavestroughinstallationguelph.ca` or similar):
   - In Vercel: Project → Settings → Domains → add your domain
   - Vercel gives you the exact DNS records to add
   - **If your domain's DNS is managed through Cloudflare:** add
     those same records in the Cloudflare dashboard (DNS tab), and
     initially set the DNS-only "grey cloud" (not proxied) so Vercel
     can issue its SSL certificate — you can switch it to proxied
     ("orange cloud") after the domain verifies in Vercel if you want
     Cloudflare's CDN/caching in front of it.

## Local preview

No server needed — just open `index.html` directly in a browser, or
run a tiny local server from this folder if you prefer clean URLs
while testing:
```
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.
