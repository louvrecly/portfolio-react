# Prototype — dark theme variations

**Throwaway.** This directory exists only on the `prototype/dark-theme-variations`
branch and must never be merged to `main`. It is kept as a primary source for the
decision it was built to settle.

## The question

Dark's ground (`0 0% 15%`) and gradient (`80% 60%`) are byte-identical to the
pre-refactor file (`ef969ed`) — inherited, never chosen. Light was picked from four
prototyped directions. Should dark get the same treatment?

## What's here

| File | What it is |
| --- | --- |
| `dark-lab.html` | The comparison page. Four candidate grounds rendered on the real portfolio mock, ratios measured in-browser against the composited pixel. Open it directly in a browser — no build step. |
| `contrast.py` | The compositing + WCAG engine (`hsl`, `over`, `lum`, `ratio`), shared with the light-theme work. |
| `dark-candidates.py` | Candidate sweep: lever isolation, and the grid that proved candidate C needs a much dimmer gradient. |
| `dark-final.py` | Final measurement table for the four candidates. |
| `unify-sweep.py` | Sweep for plate D: unify the hero with the gradient unchanged. Includes the ceiling check (pure black only reaches 4.11:1) and the white-lift failure. |
| `build-dark-lab.py` | Assembles `dark-lab.html` by reusing the light lab's harness. Needs the light lab, which lives only in the job scratch dir — kept for provenance, not expected to re-run. |

## The candidates

| | ground | gradient | raised |
| --- | --- | --- | --- |
| **REF** As inherited | `0 0% 15%` | `80% 60%` | darkening |
| **A** Tinted ground | `230 14% 14%` | `80% 60%` unchanged | darkening |
| **B** Matched pair | `230 16% 13%` | light's hues, ~45% sat | darkening |
| **C** Hero-unified | `240 6% 7%` | ~38% sat | **lift** (white at low alpha) |
| **D** Unified, gradient kept | `240 6% 4%` (= hero) | unchanged | darkening, `240 6% 2% / 0.5` |

## The finding that matters

Isolating the two levers against today's values:

- Tinting the ground alone: body text on page `3.28 → 3.45`. Noise.
- Calming the gradient alone: `3.28 → 5.22`. Crosses from "passes because it's
  large text" to clearing the AA body floor outright.

This is `CONTEXT.md`'s existing rule — *the gradient field is the binding
accessibility constraint, not the palette* — showing up in the other theme. It was
discovered while fixing light; it holds in dark for the same reason.

Two consequences worth deciding alongside the palette:

- **C changes what `raised` means in dark**, from a darkening to a lift. That's a
  vocabulary change and needs a `CONTEXT.md` line.
- **C lifts a documented prohibition**: accent text directly on the page goes
  `2.05:1 → 5.65:1`, so the rule against accent-on-surface would stop binding in dark.

## Plate D — unified with the gradient unchanged

Added after the user said they would rather keep the gradient. Feasible: every ratio
beats REF (body 3.88, card text 9.90, link 6.19, hover 7.28) and page vs hero is
1.00:1. Limits:

- Body text on the page can't reach 4.5 without touching the gradient. The yellow
  blob binds it, and pure black only reaches 4.11.
- A white lift fails over this gradient (links on cards ~2.2:1), so cards stay a
  darkening.
- Cards nearly vanish on bare ground: 1.01:1 card vs page, against 1.18:1 today.

## Status

Awaiting a pick. Nothing folded into `main`.
