# Context

Shared vocabulary for this codebase. Glossary only — no implementation
details, no palette values. Colour values live in `src/index.css`.

## Theme tokens

The theme is expressed as CSS custom properties on `:root`, consumed through
Tailwind. Dark is the default; light overrides it under
`prefers-color-scheme: light`.

Token names describe **the role a colour plays**, not a brand hierarchy. This
matters: `on-surface` and `on-surface-raised` are not a primary/secondary pair,
they are two different foregrounds bound to two different surfaces. An earlier
naming scheme (`main` / `primary` / `secondary`) obscured that, and the light
theme broke because nothing in the name said a foreground was tied to a surface
that had to flip with it.

| Term                  | Meaning                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Surface**           | The page background. Everything else sits on it.                                                                                                             |
| **On-surface**        | Text and rules drawn directly on the page background.                                                                                                        |
| **Surface-raised**    | Cards, the nav bar, buttons. Deliberately translucent so the gradient field shows through.                                                                   |
| **On-surface-raised** | Text drawn on a raised surface.                                                                                                                              |
| **Surface-overlay**   | The opaque variant of a raised surface, for full-screen overlays such as the mobile drawer, where the page must not be readable through the menu.            |
| **Highlight**         | The single accent colour: links, buttons, hover states. One value per theme.                                                                                 |
| **Gradient field**    | The two rotating, blurred colour blobs behind all content. Its endpoints are `cool-from`/`cool-to` and `warm-from`/`warm-to`.                                |
| **Hero**              | The banner at the top of the page. A deliberately inverted region: it stays dark in **both** themes, so its colours are literals rather than surface tokens. |

## Rules that are not obvious from the code

- **The gradient field is the binding accessibility constraint, not the
  palette.** A blob at peak opacity darkens the effective background beneath
  text. Light-theme gradient lightness is set to the minimum value that keeps
  every foreground above WCAG AA; lowering it makes the animation more visible
  and the text less readable. That is the trade-off, and it is deliberate.

- **Contrast is measured against the composite, never a flat swatch.** Raised
  surfaces are translucent over a moving gradient, so a pairing must hold at
  the _worst_ rotation phase.

- **Do not place highlight-coloured text directly on `surface` in the dark
  theme.** It measures 2.05:1 there — the accent is squeezed between a dark
  ground and bright blobs, and no lightness value fixes it. Every accent today
  sits on a raised surface, an overlay, or the hero, all of which are safe.
  Keep it that way.

- **The accent is one token, used at full opacity.** Diluting it with an alpha
  modifier reduces contrast against an already-composited backdrop.
