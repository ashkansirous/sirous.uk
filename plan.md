# Plan — sirous.uk portal (Astro build + GitHub Pages)

Recreate the design handoff (`Sirous.uk portal design/design_handoff_sirous_portal/`) as a
production Astro site and ship it to GitHub Pages on the apex domain `sirous.uk`.

## Decisions (from RefineScope)

- **Target:** fresh Astro project at the repo root (latest stable, Astro 7.0.3). Static output.
- **Stack:** plain HTML + scoped CSS, no UI framework — matches the handoff's intent.
- **Flagship link:** `https://readthestupidtext.sirous.uk/` (the product web page).
- **Upcoming cards:** rendered (`showUpcoming: true`).
- **Accent:** brand navy `#102a43` (mirrors `ashkan.sirous.uk`).
- **Maker photo:** local copy in `src/assets/ashkan.jpg`, optimised at build (no hotlink).
- **Products:** modelled as a typed data array for one-line growth.
- **Deploy:** GitHub repo + GitHub Pages via GitHub Actions, custom apex domain. User sets DNS.

## Slices

- [x] **1. Scaffold** — `package.json`, `astro.config.mjs` (`site: https://sirous.uk`, no `base`),
      `tsconfig`, `.gitignore`, `public/CNAME`, favicon.
- [x] **2. Portal page** — `tokens.css`, `Base` layout (fonts/head), components
      (`Header`, `Hero`, `MakerCard`, `Products`, `ProductCard`, `UpcomingCard`, `Footer`),
      typed `products.ts`, `config.ts`. Responsive collapse at ≤760px. `npm run build` passes.
- [x] **3. Deploy + docs** — `.github/workflows/deploy.yml` (`withastro/action@v6` +
      `actions/deploy-pages@v5`), `README.md`, `CLAUDE.md`, `AGENTS.md`.
- [x] **4. Ship** — `git init -b main`, initial commit, create GitHub repo, push, enable Pages
      (Actions source). Report the apex DNS records for the user to add.

## Out of scope

- DNS changes (user does this manually in their registrar).
- Additional products beyond the live flagship (placeholders stand in).
- Any backend / analytics / CMS — this is a static brochure page.

## Follow-ups (post-merge, for the user)

- Settings → Pages → Source = **GitHub Actions** (if not already).
- Add the four apex `A` records (see `README.md`), then enable **Enforce HTTPS**.
