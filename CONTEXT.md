# Context

Shared vocabulary for this codebase, and the rules that go with it. No
palette values — those live in `src/index.css`. A mechanism is named only
where the rule cannot be stated without it.

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

| Term                     | Meaning                                                                                                                                                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Surface**              | The page background. Everything else sits on it.                                                                                                                                                                                                                                                                    |
| **On-surface**           | Text and rules drawn directly on the page background.                                                                                                                                                                                                                                                               |
| **Surface-raised**       | Anything lifted off its ground: cards, the nav bar, buttons, the mobile drawer. Translucent, so what sits behind it shows through — the gradient field on the page, the glow particles in the hero. On the page it is a dark wash; in the hero, where the ground is already near-black, it is a white lift instead. |
| **On-surface-raised**    | Text drawn on a raised surface.                                                                                                                                                                                                                                                                                     |
| **Surface-raised-hover** | The same raised surface at a higher alpha. The hover state of interactive raised surfaces: the nav bar and buttons.                                                                                                                                                                                                 |
| **Highlight**            | The single accent colour: links, buttons, hover states. One value per theme.                                                                                                                                                                                                                                        |
| **Gradient field**       | The two rotating, blurred colour blobs behind all content. Its endpoints are `cool-from`/`cool-to` and `warm-from`/`warm-to`.                                                                                                                                                                                       |
| **Hero**                 | The banner at the top of the page. A deliberately inverted region: it stays dark in **both** themes. It re-declares the theme tokens on its own container (`.o-hero` in `src/index.css`), so components rendered inside it use the ordinary tokens and resolve to dark values without knowing where they sit.       |

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
  sits on a raised surface or in the hero, both of which are safe.
  Keep it that way.

- **Full-screen overlays stay translucent, and use a backdrop blur rather
  than opacity.** The mobile drawer covers the page, but contrast is not what
  makes an unblurred translucent drawer unusable — measured against every
  backdrop the page can present, the raised alpha holds at 8.6:1 (dark) and
  13.7:1 (light) for text. What fails is legibility: page text shows through
  behind the nav links. A blur removes that without adding a third opaque
  surface level.

- **The hero's glow particles are exempt from the contrast floor, knowingly.**
  They are 1–8px dots, scaled to at most ~18px with a soft radial falloff,
  drifting across the hero over ~30s. At the instant one passes directly
  behind a glyph the local composite collapses — measured 1.15:1 against the
  white headline and 1.00:1 against the accent on the button. That is a point
  measurement on a few pixels of a moving dot, not a legibility failure, and
  it predates the token work. Dimming the glow would fix it and change the
  design; if that trade is ever made, make it deliberately.

- **The accent is one token, used at full opacity.** Diluting it with an alpha
  modifier reduces contrast against an already-composited backdrop.
