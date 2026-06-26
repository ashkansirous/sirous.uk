# sirous.uk

The portal / landing page for the software [Ashkan Sirous](https://ashkan.sirous.uk) builds.
One live product today (**Read the Stupid Text**); the grid grows as each new tool ships.

Built with [Astro](https://astro.build) (static output) — plain HTML + scoped CSS, no UI
framework. Recreated pixel-faithfully from the design handoff in
`Sirous.uk portal design/design_handoff_sirous_portal/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built dist/ locally
```

## Project shape

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Thin page shell — composes the sections |
| `src/layouts/Base.astro` | `<head>`, fonts, global tokens, container |
| `src/components/` | `Header`, `Hero`, `MakerCard`, `Products`, `ProductCard`, `UpcomingCard`, `Footer` |
| `src/data/products.ts` | Typed product catalogue (flagship + placeholder slots) |
| `src/config.ts` | `showUpcoming` flag and shared brand links |
| `src/styles/tokens.css` | Design tokens (colour, type, radii) |
| `src/assets/ashkan.jpg` | Maker headshot (local copy, optimised at build) |

### Adding a product

Append an entry to `src/data/products.ts`. When the grid fills up, remove an `upcoming`
placeholder — or set `showUpcoming: false` in `src/config.ts` to hide the placeholder slots
entirely.

### Brand accent

The accent (`#102a43`, deep navy) is taken from `ashkan.sirous.uk`'s theme colour so the two
sites read as one brand. Change `--color-accent` in `src/styles/tokens.css` if that ever moves.

## Deployment — GitHub Pages + custom domain

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes via `actions/deploy-pages`. The site is served at the apex
domain **sirous.uk** (held in `public/CNAME`); `astro.config.mjs` sets
`site: 'https://sirous.uk'` with no `base`.

### One-time setup

1. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. Point DNS for the apex `sirous.uk` at GitHub Pages by adding these four `A` records:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |

   (Optionally add `AAAA` records `2606:50c0:8000::153` … `8003::153`, and a `CNAME` for
   `www` → `ashkansirous.github.io` if you also want the `www` subdomain.)
3. Once DNS resolves, tick **Enforce HTTPS** in Settings → Pages.
