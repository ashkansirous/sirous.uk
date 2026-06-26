# sirous.uk — project guidance

Static **Astro** site (plain HTML + scoped CSS, no UI framework). It's the product portal for
`ashkan.sirous.uk`. A single page (`src/pages/index.astro`) recreated pixel-faithfully from the
design handoff in `Sirous.uk portal design/design_handoff_sirous_portal/README.md` — treat that
handoff as the source of truth for layout, colour, type and copy.

## Conventions

- **Design tokens live in `src/styles/tokens.css`.** Never hard-code a colour or font family in a
  component — reference a `--color-*` / `--font-*` variable. If a value isn't a token yet, add it.
- **Components are small and single-purpose**, each with its own scoped `<style>`. `index.astro`
  stays a thin shell that just composes sections.
- **Products are data, not markup.** Add/grow the catalogue in `src/data/products.ts`; toggle the
  placeholder slots with `showUpcoming` in `src/config.ts`. Don't hand-write new card markup.
- **The accent `#102a43` mirrors `ashkan.sirous.uk`'s brand** — keep them aligned.

## Workflow

- Trunk is `main`. Deploys are automatic on push to `main` via
  `.github/workflows/deploy.yml` (GitHub Pages, apex domain `sirous.uk` via `public/CNAME`).
- Before touching Astro APIs, config, or the deploy action, check current docs via context7
  (`/withastro/docs`) — don't rely on memory.
- Run `npm run build` before declaring UI work done; the build also optimises `src/assets/`.
