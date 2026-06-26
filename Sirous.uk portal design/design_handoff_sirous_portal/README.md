# Handoff: sirous.uk — Software Portal Home Page

## Overview
`sirous.uk` is a portal / landing page that presents the software products built by Ashkan Sirous. It currently features one live product (**Read the Stupid Text**) and is designed to grow: future products slot in as cards in an index grid. The maker (Ashkan) has a deliberately small presence — a compact card beside the hero — so the products lead. The visual style is warm-editorial: cream paper background, navy brand accent, strong typographic hierarchy.

## About the Design Files
The file in this bundle (`sirous.uk.dc.html`) is a **design reference created in HTML** — a prototype showing intended look and behavior, **not production code to copy directly**. It is authored as a "Design Component" with a small runtime wrapper (`support.js`) and an `<image-slot>` web component for the avatar; **none of that runtime should be carried into production**.

The task is to **recreate this design in the target environment**. `sirous.uk` is built with **Astro** (the personal site at `ashkan.sirous.uk` reports `Astro v6.4.8`), so the natural target is an Astro page/component using plain HTML + scoped CSS. If implementing elsewhere, use that project's established patterns. Treat the HTML below as the source of truth for layout, color, type, and copy.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are specified. Recreate the UI pixel-faithfully. The only intentionally swappable value is the accent color (see Design Tokens / "tweakable").

## Brand Alignment
The accent (`#102a43`, deep navy) is taken directly from the personal site's `meta-theme-color`, so the portal reads as one brand with `ashkan.sirous.uk`. Keep them consistent — if the personal site's brand color changes, change this accent to match.

---

## Screens / Views

### Single screen: Portal Home
A single, vertically-scrolling page. Max content width **1180px**, centered, with horizontal padding `clamp(20px, 4vw, 40px)`.

**Page background:** `#F4EFE7` (warm cream) with a subtle dot grid: `background-image: radial-gradient(#1a161308 1px, transparent 1px); background-size: 22px 22px;`

Sections top → bottom: Header → Hero (two columns) → Products → Footer.

---

### 1. Header
- **Layout:** flex row, `space-between`, vertically centered. Padding `26px 0`. Bottom border `1px solid #E4DCD0`.
- **Wordmark (left):** `sirous` in ink + `.uk` in accent. Font Bricolage Grotesque, weight 700, 21px, `letter-spacing: -0.02em`. Links to `#top`.
- **Nav (right):** flex row, `gap: 26px`. Font Space Mono, 12.5px, `letter-spacing: 0.04em`.
  - `PRODUCTS` → `#products`, color `#6F665B`.
  - `ASHKAN ↗` → `https://ashkan.sirous.uk`, color `#1A1613`, the `↗` glyph in accent.

---

### 2. Hero
- **Layout:** CSS grid, two columns `minmax(0,1fr) 280px`, `gap: clamp(28px, 5vw, 64px)`, `align-items: end`. Vertical padding `clamp(56px,9vw,108px) 0 clamp(40px,6vw,72px)`.

**Left column (main):**
- **Eyebrow row:** flex, `gap: 14px`, Space Mono 12px, `letter-spacing: 0.14em`, uppercase, color `#6F665B`. Reads: `Independent software` · (28px-wide 1px rule `#C9BFB1`) · `Built & shipped in the UK`.
- **H1:** Bricolage Grotesque, weight 600, `font-size: clamp(40px,6.6vw,88px)`, `line-height: 0.98`, `letter-spacing: -0.025em`, `max-width: 15ch`. Text: "A growing home for the software I build" with the final period `.` in accent.
- **Lead paragraph:** Hanken Grotesk, `clamp(16px,1.6vw,20px)`, `line-height: 1.55`, color `#5D544A`, `max-width: 52ch`. Text: "sirous.uk is where my projects live — independent, useful, and made one at a time. It starts with a single tool, and grows as each new one ships."
- **Status chips:** flex row, `gap: 10px`, `margin-top: 32px`. Each chip: white bg, `1px solid #E4DCD0`, `border-radius: 999px`, padding `8px 14px`, Space Mono 12px.
  - "1 live" — leading dot 7px solid `#1F8A5B` with `box-shadow: 0 0 0 3px #1f8a5b22`; text `#1A1613`.
  - "more in the works" — leading dot 7px, `1.5px solid #C9BFB1` ring (hollow); text `#6F665B`.

**Right column (maker card — keep small, on the side):**
- **Container:** `1px solid #E4DCD0`, `border-radius: 18px`, bg `#FCFAF6`, padding `22px`.
- **Kicker:** "THE MAKER" — Space Mono 10.5px, `letter-spacing: 0.16em`, uppercase, color `#9A9082`.
- **Identity row** (`margin-top: 16px`, flex, `gap: 13px`):
  - **Avatar:** 48px circle, photo of Ashkan, `object-fit: cover`, `1px solid #E4DCD0`. Source image: `https://ashkan.sirous.uk/_astro/ashkan.yV5DY7GG_ZLpmtx.jpg` (in production, serve a local copy from this project's assets — see Assets).
  - **Name block:** "Ashkan Sirous" — Bricolage Grotesque 600, 17px. Subtitle "Designs & builds it all" — 12.5px, `#9A9082`.
- **Bio:** 13.5px, `line-height: 1.5`, color `#6F665B`. Text: "One person, quietly shipping software that's actually useful."
- **Link:** "ashkan.sirous.uk ↗" → `https://ashkan.sirous.uk`. Space Mono 12px, color `#1A1613`, `↗` in accent pushed right (`margin-left: auto`). Top border `1px solid #EDE6DB`, `padding-top: 14px`, full width.

---

### 3. Products (`id="products"`)
- **Section header:** flex row, `space-between`, `align-items: flex-end`. Bottom border `1px solid #E4DCD0`, `padding-bottom: 22px`, `margin-bottom: 28px`.
  - Left: "Products" — Space Mono 13px, `letter-spacing: 0.16em`, uppercase, `#1A1613`.
  - Right: "/ index" — Space Mono 12px, `#9A9082`.

**Flagship card — Read the Stupid Text** (an `<a>`):
- **Container:** block link, `1px solid #E4DCD0`, `border-radius: 18px`, `overflow: hidden`, bg `#FCFAF6`.
  - **Transition:** `transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease`.
  - **Hover:** `transform: translateY(-4px); box-shadow: 0 26px 50px -28px rgba(26,22,19,.4); border-color: #1A1613;`
- **Inner grid:** two columns `1.45fr 0.9fr`, `min-height: 340px`.
- **Left text panel** (padding `clamp(26px,3.4vw,44px)`, flex column):
  - **Meta row:** "LIVE" pill — flex, `gap: 8px`, padding `6px 12px`, `border-radius: 999px`, bg `#1f8a5b14`, Space Mono 11px, `letter-spacing: 0.08em`, color `#1F7A50`; leading 7px green dot `#1F8A5B` with **pulse animation** (see Interactions). Next to it the index "01" — Space Mono 12px, `#9A9082`.
  - **Title (pushed to bottom via `margin: auto 0 0` + `padding-top: 28px`):** "Read the Stupid Text" — Bricolage Grotesque 600, `clamp(30px,3.6vw,46px)`, `line-height: 1.02`, `letter-spacing: -0.02em`.
  - **Description** (`margin-top: 16px`): 16.5px, `line-height: 1.55`, `#5D544A`, `max-width: 42ch`. Text: "Select any text on Windows and it reads it aloud — at whatever speed you like. A tiny desktop tool for getting through text by listening instead of squinting."
  - **URL line** (`margin-top: 22px`): Space Mono 12.5px, `#6F665B`. Text: "readthestupidtext.sirous.uk".
- **Right accent panel** (bg = accent `#102a43`, `position: relative`, flex row `align-items: flex-end` / `space-between`, padding `clamp(22px,2.6vw,34px)`, text `#F8EFE9`, `overflow: hidden`):
  - **Watermark arrow:** absolutely positioned `↗`, Bricolage Grotesque 700, 200px, color `rgba(255,255,255,0.13)`, `top: -18px; right: 8px;`, `pointer-events: none`.
  - **Label:** "OPEN THE APP" — Space Mono 12px, `letter-spacing: 0.1em`, `opacity: .85` (non-breaking spaces between words).
  - **CTA dot:** 54px white circle, accent-colored `→`, font-size 22px, centered.
- **Link target:** currently `https://readthestupidtext.sirous.uk/`. NOTE: the product is a Windows desktop app (GitHub: `ashkansirous/ReadTheStupidText`) — confirm with the owner whether this should point to the web page, the GitHub repo, or a download.

**Upcoming slots** (two placeholder cards; conditionally rendered — see State):
- **Grid:** two columns `1fr 1fr`, `gap: 20px`, `margin-top: 20px`.
- **Each card:** `1.5px dashed #D2C8B9`, `border-radius: 18px`, `min-height: 188px`, padding `26px`, transparent bg, flex column `space-between`.
  - **Top meta:** a pill with `1px solid #D2C8B9`, `border-radius: 999px`, padding `5px 11px`, Space Mono 11px, `letter-spacing: 0.08em`, color `#9A9082` — text "IN THE WORKS" (card 1) / "RESERVED" (card 2). Index "02" / "03" in Space Mono 12px, `#B6AC9D`.
  - **Bottom:** title Bricolage Grotesque 600, 23px, color `#A99F90` — "Next product" / "This space grows". Sub-line 14px, `#A99F90` — "In development." / "Each release lands here."

> These two cards are intentional empty "slots" signaling the grid will grow — not real products. When a new product ships, replace one slot with a real flagship-style (or smaller) card.

---

### 4. Footer
- **Layout:** flex row, wrap, `space-between`, `align-items: center`, `gap: 18px`. Padding `30px 0 44px`, `margin-top: 36px`. Top border `1px solid #E4DCD0`.
- **Left:** "sirous.uk · © 2026" — Space Mono 12px, `#9A9082`, with `.uk` in accent.
- **Right:** "Built by Ashkan Sirous ↗" → `https://ashkan.sirous.uk`. 14px, `#1A1613`, `↗` in accent.

---

## Interactions & Behavior
- **Flagship hover:** lifts 4px, gains a soft shadow, border darkens to `#1A1613`. Transition `.35s`, easing `cubic-bezier(.2,.7,.2,1)` for transform.
- **LIVE pulse:** the green status dot animates infinitely:
  ```css
  @keyframes pulseDot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.35; transform:scale(.6); } }
  /* animation: pulseDot 1.8s ease-in-out infinite; */
  ```
- **In-page anchors:** wordmark → `#top`, nav "PRODUCTS" → `#products`.
- **No entrance/scroll animations.** (An earlier fade-up was removed because opacity-0 start states risked leaving content hidden — keep resting states fully visible.)
- **Responsive:** designed at ~1180px. For narrow viewports, collapse the hero grid to a single column (maker card below the hero text), and collapse both the flagship inner grid and the upcoming 2-col grid to single column. Implement with the target stack's normal responsive approach.

## State Management
- **`showUpcoming` (boolean, default `true`):** toggles whether the two upcoming placeholder cards render. In production this can simply be a config/feature flag, or removed once real products fill the grid.
- The flagship and product list are otherwise static content — good candidates for a small data array (`{ index, status, name, description, url }`) mapped into cards, so adding future products is a one-line data change.

## Design Tokens

**Colors**
- Paper / page bg: `#F4EFE7`
- Dot-grid dot: `#1a161308` (ink at ~3% alpha)
- Ink / primary text: `#1A1613`
- Body text: `#5D544A`
- Muted text: `#6F665B`
- Faint / meta text: `#9A9082`
- Placeholder text (upcoming cards): `#A99F90`
- Card surface: `#FCFAF6`
- Chip surface: `#FFFFFF`
- Hairline border: `#E4DCD0`
- Secondary hairline: `#EDE6DB`
- Dashed placeholder border: `#D2C8B9`
- Placeholder index text: `#B6AC9D`
- Rule (eyebrow / hollow dot): `#C9BFB1`
- **Accent (brand navy, tweakable):** `#102a43` — alternates offered: `#1F6FEB`, `#D8431A`, `#1F8A5B`
- Accent panel text: `#F8EFE9`
- Live green: `#1F8A5B`; live pill bg `#1f8a5b14`; live pill text `#1F7A50`
- Selection: bg `#1A1613`, text `#F4EFE7`

**Typography**
- Display / headings: **Bricolage Grotesque** (weights 600, 700)
- Body / UI: **Hanken Grotesk** (400, 500, 600, 700)
- Mono / labels / meta: **Space Mono** (400, 700)
- Google Fonts import:
  `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap`

**Radii:** cards & panels `18px`; pills/chips `999px`.

**Shadow:** flagship hover `0 26px 50px -28px rgba(26,22,19,.4)`.

**Spacing:** container max-width `1180px`; horizontal pad `clamp(20px,4vw,40px)`; section rhythm via the clamp values noted per-section above.

## Assets
- **Maker photo:** `https://ashkan.sirous.uk/_astro/ashkan.yV5DY7GG_ZLpmtx.jpg` — Ashkan's headshot. In production, store a local copy in the project's asset pipeline rather than hotlinking the hashed Astro build URL (it changes on each build).
- **No icon library** — the only glyphs are Unicode `↗` and `→`. Substitute with the codebase's icon set if preferred.
- **No raster/SVG graphics** beyond the photo; the CSS dot-grid is generated.

## Files
- `sirous.uk.dc.html` — the full design reference (this bundle). Open it in a browser to see the live design. Ignore `support.js` / `<x-dc>` / `<image-slot>` wrappers — they are prototyping runtime, not part of the design. The avatar's `<image-slot>` corresponds to a plain `<img>` in production.
