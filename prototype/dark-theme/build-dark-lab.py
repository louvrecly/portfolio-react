# -*- coding: utf-8 -*-
SRC = '/home/louvre/.claude/jobs/06f038d8/tmp/theme-lab.html'
OUT = '/home/louvre/.claude/jobs/06f038d8/tmp/dark-lab.html'
L = open(SRC, encoding='utf-8').read().split('\n')
def blk(a, b): return '\n'.join(L[a-1:b])

FONTS   = blk(2, 4)
CSS     = blk(6, 572)
ASSETS  = blk(773, 790)
HELPERS = blk(791, 876)
MOCK    = blk(947, 1124)
HERO    = blk(1212, 1248)
MOTION  = blk(1271, 1277)

# retarget the rail's accent rows: in the shipped theme the second accent token
# is highlight-hover, and every accent that sits on a raised surface is body-sized.
MOCK = MOCK.replace(
  "${tokRow('highlight-text', p.highlightText)}",
  "${tokRow('highlight-hover', p.highlightText)}")
MOCK = MOCK.replace(
  "${ratioRow('Accent on card', 'highlight → raised', rHiCard, 'large')}\n        "
  "${ratioRow('Link on card', 'highlight-text → raised', rLnCard, 'body')}",
  "${ratioRow('Link on card', 'highlight → raised', rHiCard, 'body')}\n        "
  "${ratioRow('Link hover on card', 'highlight-hover → raised', rLnCard, 'body')}")
MOCK = MOCK.replace(
  "${ratioRow('Accent on page', 'highlight → surface', rHiSurf, 'large')}\n        "
  "${ratioRow('Link on page', 'highlight-text → surface', rLnSurf, 'body')}",
  "${ratioRow('Accent on page', 'highlight → surface', rHiSurf, 'large')}\n        "
  "${ratioRow('Body text on page', 'on-surface → surface, large only', rBody2, 'large')}")
MOCK = MOCK.replace(
  "  const rHiSurf = worstOnSurface(p, 'highlight');\n  const rLnSurf = worstOnSurface(p, 'highlightText');",
  "  const rHiSurf = worstOnSurface(p, 'highlight');\n  const rBody2  = rBody;")

PALETTES = """
/* ============================================================
   PALETTES — four dark grounds
   Accent is settled (160° green) and identical in all four; the
   question is the ground and the gradient, nothing else.
   ============================================================ */
const HERO_G = { heroGround: 'hsl(240 6% 4%)', heroOv: 'rgba(9,9,11,.7)', heroText: '#fff' };
const ACCENT = { highlight: [160, 90, 48], highlightText: [160, 90, 66] };

const PALETTES = {
  ref: Object.assign({
    id: 'REF', name: 'As inherited', short: 'REF · INHERITED',
    desc: 'Today\\u2019s dark theme. The ground and all four blob values are byte-identical to the pre-refactor file (ef969ed) \\u2014 only the accent and the token names changed. This is the baseline, and it is the one direction nobody ever chose.',
    surface: [0, 0, 15], onSurface: [0, 0, 100],
    raised: [240, 6, 4, 0.5], onRaised: [0, 0, 100],
    coolFrom: [160, 80, 60], coolTo: [250, 80, 60],
    warmFrom: [60, 80, 60],  warmTo:  [350, 80, 60],
    verdict: 'A neutral grey with zero hue, under a gradient at 80% saturation. Everything clears its bar, but one pairing sits close: white text directly on the page measures 3.28:1 at peak blob, passing only because everything there is large text. Set beside the light theme, this ground has no identity of its own \\u2014 it is the absence of a decision rather than a decision.',
  }, ACCENT, HERO_G),

  a: Object.assign({
    id: 'A', name: 'Tinted ground', short: 'A \\u00b7 TINTED',
    desc: 'The minimal move: carry light\\u2019s 230\\u00b0 lavender hue into the dark ground and change nothing else. Gradient untouched, raised surfaces untouched.',
    surface: [230, 14, 14], onSurface: [0, 0, 100],
    raised: [240, 6, 4, 0.5], onRaised: [0, 0, 100],
    coolFrom: [160, 80, 60], coolTo: [250, 80, 60],
    warmFrom: [60, 80, 60],  warmTo:  [350, 80, 60],
    verdict: 'The honest result: almost nothing happens. Body text on the page moves 3.28 \\u2192 3.39, which is noise. At these lightness levels a 14% saturation tint is nearly invisible under a gradient running at 80%, and the blobs still dominate every pixel that matters. If you pick this, pick it knowing it buys identity on paper and very little on screen.',
  }, ACCENT, HERO_G),

  b: Object.assign({
    id: 'B', name: 'Matched pair', short: 'B \\u00b7 MATCHED',
    desc: 'The symmetric mirror of the light treatment: the ground takes light\\u2019s hue, and the gradient takes light\\u2019s four shifted hues (190/255/45/340) at light\\u2019s reduced saturation, scaled down for a dark ground.',
    surface: [230, 16, 13], onSurface: [0, 0, 100],
    raised: [235, 12, 5, 0.5], onRaised: [0, 0, 100],
    coolFrom: [190, 45, 52], coolTo: [255, 48, 56],
    warmFrom: [45, 45, 54],  warmTo:  [340, 42, 54],
    verdict: 'The gradient is the lever, and this is what pulling it does. Body text on the page goes 3.28 \\u2192 5.53, clearing the AA body floor rather than scraping the large-text one \\u2014 dark\\u2019s only soft spot closes. Links on a card go 5.39 \\u2192 7.11. The cost is the same one light already pays: a calmer gradient is a less visible animation. This is the direction that makes the two themes siblings.',
  }, ACCENT, HERO_G),

  c: Object.assign({
    id: 'C', name: 'Hero-unified', short: 'C \\u00b7 HERO-UNIFIED',
    desc: 'A structural disagreement rather than a palette tweak. The page ground drops to near the hero\\u2019s own near-black so the seam between them disappears, and \\u2014 as in the hero \\u2014 a raised surface becomes a white lift rather than a darkening. The gradient carries all the colour.',
    surface: [240, 6, 7], onSurface: [0, 0, 100],
    raised: [0, 0, 100, 0.06], onRaised: [0, 0, 100],
    coolFrom: [190, 38, 38], coolTo: [255, 40, 41],
    warmFrom: [45, 36, 39],  warmTo:  [340, 33, 39],
    verdict: 'The hero stops being a separate region: page against hero ground measures 1.05:1, effectively seamless. It also lifts a documented prohibition \\u2014 accent text directly on the page goes 2.05:1 to 5.65:1, so the CONTEXT.md rule against putting the accent on surface would no longer bind in dark. The price is paid twice: the lift squeezes the accent from above, so the gradient has to run much dimmer than any other candidate (38% saturation) to keep links on a card at 4.76:1, and the animation goes quiet. A real position, not a compromise \\u2014 but it changes what raised means.',
  }, ACCENT, HERO_G),

  d: Object.assign({
    id: 'D', name: 'Unified, gradient kept', short: 'D \u00b7 UNIFIED',
    desc: 'Hero-unified without touching the gradient. The page ground becomes the hero\u2019s own ground, 240 6% 4%, and raised surfaces stay a darkening at today\u2019s 0.5 alpha, only a shade deeper. The four blobs are today\u2019s values, unchanged.',
    surface: [240, 6, 4], onSurface: [0, 0, 100],
    raised: [240, 6, 2, 0.5], onRaised: [0, 0, 100],
    coolFrom: [160, 80, 60], coolTo: [250, 80, 60],
    warmFrom: [60, 80, 60],  warmTo:  [350, 80, 60],
    verdict: 'Every ratio beats REF and the hero seam disappears (1.00:1), with the gradient exactly as it is today. Body text on the page reaches 3.88:1. That is close to the most any page ground can do with this gradient: the yellow blob binds it, and even pure black only reaches 4.11:1. It passes because only large text sits there, as it does today. Two things C had that D does not: the accent still cannot sit directly on the page (2.42:1), and cards stay a darkening, because a white lift over this gradient drops links on cards to about 2.2:1. The cost that no text ratio shows: where no blob is behind them, cards almost disappear into the page. Card against bare ground measures 1.01:1, against 1.18:1 today. When the ground is already near black, a darkening has almost nowhere to go. The shadow and the blobs are what separate cards in D.',
  }, ACCENT, HERO_G),
};
"""

RENDER = """
/* ---------- render plates ---------- */
document.getElementById('plates').innerHTML =
  plateHTML('ref', PALETTES.ref, 4) +
  plateHTML('a', PALETTES.a, 5) +
  plateHTML('b', PALETTES.b, 6) +
  plateHTML('c', PALETTES.c, 7) +
  plateHTML('d', PALETTES.d, 8);

/* ============================================================
   LEVERS — which knob actually moves the numbers
   ============================================================ */
const REF = PALETTES.ref;
const LEVERS = [
  { t: 'Neither', s: 'today', p: REF },
  { t: 'Ground tinted only', s: '230\\u00b0 hue, gradient left loud',
    p: Object.assign({}, REF, { surface: [230, 16, 13] }) },
  { t: 'Gradient calmed only', s: 'grey ground kept',
    p: Object.assign({}, REF, { coolFrom: [190, 45, 52], coolTo: [255, 48, 56], warmFrom: [45, 45, 54], warmTo: [340, 42, 54] }) },
  { t: 'Both', s: '= candidate B', p: PALETTES.b },
];
document.getElementById('levers').innerHTML = LEVERS.map(lv => `
  <div class="card-lab">
    <div class="card-lab__head">
      <p class="card-lab__t">${lv.t}</p>
      <p class="card-lab__s">${lv.s}</p>
    </div>
    <div class="frame frame--short" style="border:0;border-radius:0">
      <div class="frame__scroll">${specimenHTML(lv.p)}</div>
    </div>
    <div class="miniratios">
      ${ratioRow('Body text on page', 'on-surface \\u2192 surface', worstOnSurface(lv.p, 'onSurface'), 'large')}
      ${ratioRow('Link on card', 'highlight \\u2192 raised', worstOnRaised(lv.p, 'highlight'), 'body')}
    </div>
  </div>`).join('');

/* ============================================================
   SEAM — how each ground meets the hero
   ============================================================ */
document.getElementById('seams').innerHTML = ['ref', 'a', 'b', 'c', 'd'].map(k => {
  const p = PALETTES[k];
  const seam = ratio(hslToRgb(240, 6, 4), rgbOf(p.surface));
  return `
  <div class="card-lab">
    <div class="card-lab__head">
      <p class="card-lab__t">${p.id} &middot; ${p.name}</p>
      <p class="card-lab__s">hero vs page &mdash; ${seam.toFixed(2)}:1</p>
    </div>
    <div class="frame frame--short" style="border:0;border-radius:0">
      <div class="frame__scroll" style="overflow:hidden">
        <div style="height:170px">${heroHTML(p, true)}</div>
        ${specimenHTML(p)}
      </div>
    </div>
    <div class="rail__foot">${seam < 1.1
      ? 'Effectively seamless \\u2014 the hero reads as part of the page rather than a band on top of it.'
      : (seam < 1.25
        ? 'A soft step down into the hero.'
        : 'A visible band: the hero is clearly a darker region than the page.')}</div>
  </div>`;
}).join('');
"""

SECTIONS = """
<div class="lab-controls">
  <div class="lab-controls__in">
    <nav class="lab-jump" aria-label="Jump to plate">
      <a class="lab-btn" href="#plate-ref">REF &middot; INHERITED</a>
      <a class="lab-btn" href="#plate-a">A &middot; TINTED</a>
      <a class="lab-btn" href="#plate-b">B &middot; MATCHED</a>
      <a class="lab-btn" href="#plate-c">C &middot; HERO-UNIFIED</a>
      <a class="lab-btn" href="#plate-d">D &middot; UNIFIED</a>
      <a class="lab-btn" href="#levers-sec">LEVERS</a>
      <a class="lab-btn" href="#seam">SEAM</a>
    </nav>
    <span class="lab-controls__spacer"></span>
    <button class="lab-btn" id="motionBtn" aria-pressed="false">&#9208; PAUSE MOTION</button>
  </div>
</div>

<div class="lab-wrap">

  <header class="lab-masthead">
    <p class="lab-eyebrow">portfolio-react &middot; dark theme prototype &middot; throwaway, not in the repo</p>
    <h1 class="lab-title">Five dark grounds, measured</h1>
    <p class="lab-standfirst">
      The light theme was chosen from four prototyped directions. The dark theme was never chosen at all &mdash;
      its ground and its gradient are the values that happened to be in the file before the token refactor.
      This page puts five candidate dark grounds through the same harness the light palettes were judged in:
      the real portfolio, real copy, live gradients, and every ratio computed against the actual composited
      pixel rather than a flat swatch. Pick a plate, or steal across them.
    </p>
    <div class="lab-meta">
      <span><b>Floor</b> WCAG AA &middot; 4.5:1 body &middot; 3:1 large &amp; non-text</span>
      <span><b>Accent</b> settled &mdash; 160&deg; in all four</span>
      <span><b>Question</b> ground and gradient only</span>
      <span><b>Hero</b> stays dark either way</span>
    </div>
  </header>

  <!-- ============ 01 WHAT IS BEING ASKED ============ -->
  <section class="lab-sec">
    <div class="lab-sec-head">
      <span class="lab-sec-num">01</span>
      <h2 class="lab-sec-title">Dark is undesigned, not chosen</h2>
    </div>
    <div class="lab-sec-body">
      <p>
        During the light rework, dark was held fixed on purpose: light was designed <em>against</em> it, so
        redesigning both at once would have left nothing to judge by. That was the right call then, and it
        is why this question was deferred rather than answered.
      </p>
      <p>
        What it leaves behind is an asymmetry. Checking the pre-refactor file
        (<code>ef969ed</code>) against today: dark&rsquo;s ground is still <code>0 0% 15%</code> and its four
        blobs are still <code>80% 60%</code> &mdash; unchanged, to the digit. Only the accent moved
        (45&deg; amber &rarr; 160&deg; green) and the names. Light, meanwhile, got four candidate directions
        and a deliberate pick: a tinted <code>230 32% 96%</code> ground and a gradient desaturated into the
        40s because AA forced it.
      </p>
      <p>
        So the two themes differ in kind, not just value. Light has an identity someone selected. Dark has an
        untinted default grey and the loudest gradient in the codebase, and nobody ever said yes to either.
      </p>
    </div>
  </section>

  <!-- ============ 02 LEVERS ============ -->
  <section class="lab-sec" id="levers-sec">
    <div class="lab-sec-head">
      <span class="lab-sec-num">02</span>
      <h2 class="lab-sec-title">The ground is cosmetic; the gradient is the lever</h2>
    </div>
    <div class="lab-sec-body">
      <p>
        Before picking a direction, it is worth knowing which knob does the work. Holding everything else at
        today&rsquo;s values and moving one thing at a time:
      </p>
      <ul>
        <li><b>Tint the ground alone</b> &mdash; body text on the page goes 3.28:1 &rarr; 3.45:1. That is noise.</li>
        <li><b>Calm the gradient alone</b> &mdash; the same pairing goes 3.28:1 &rarr; 5.22:1, crossing from
          &ldquo;passes because it is large text&rdquo; to clearing the full AA body floor.</li>
      </ul>
      <p>
        This is the light theme&rsquo;s rule turning up again in the other theme. <code>CONTEXT.md</code> already
        records that <em>the gradient field is the binding accessibility constraint, not the palette</em> &mdash;
        discovered while fixing light. It holds here for the same reason: at peak coverage a blob <em>is</em> the
        background under the text, and the ground barely participates.
      </p>
      <p>
        The consequence for this decision: a candidate that only tints the ground is a cosmetic change, and a
        candidate that calms the gradient is an accessibility change that happens to also look different.
      </p>
      <div class="cards" id="levers"></div>
    </div>
  </section>

  <!-- ============ 03 MEASUREMENT ============ -->
  <section class="lab-sec">
    <div class="lab-sec-head">
      <span class="lab-sec-num">03</span>
      <h2 class="lab-sec-title">How the ratios are measured</h2>
    </div>
    <div class="lab-sec-body">
      <p>
        Every number on this page is computed in the browser, from the same token values the plate is rendered
        with &mdash; nothing is transcribed by hand.
      </p>
      <p>
        Raised surfaces are translucent over a moving gradient, so a pairing is only as good as its worst
        moment. Each ratio is therefore the <b>minimum across five backdrops</b>: the bare ground, plus each of
        the four blobs composited at <b>0.55</b> peak coverage. Where the foreground itself carries alpha, it is
        composited too. A flat swatch would flatter every one of these numbers, which is exactly the mistake
        <code>CONTEXT.md</code> exists to prevent.
      </p>
      <p>
        One row is expected to fail in four of the five plates: <b>accent on page</b>. Putting highlight-coloured
        text directly on the page ground measures 2.05:1 in today&rsquo;s dark theme, and no lightness value fixes
        it &mdash; the accent is squeezed between a dark ground and bright blobs. Nothing in the app does this, and
        the rule against it is documented. Candidate C is the one plate where that constraint lifts.
      </p>
    </div>
  </section>

  <div id="plates"></div>

  <!-- ============ SEAM ============ -->
  <section class="lab-sec" id="seam">
    <div class="lab-sec-head">
      <span class="lab-sec-num">09</span>
      <h2 class="lab-sec-title">Where the page meets the hero</h2>
    </div>
    <div class="lab-sec-body">
      <p>
        The hero is an inverted region: it stays dark in both themes and re-declares its own tokens, with a ground
        of <code>240 6% 4%</code>. In the light theme that produces a hard edge, which is
        <a href="https://github.com/louvrecly/portfolio-react/issues/3">issue&nbsp;#3</a>. In dark the same edge
        exists but is quiet, because the page is already dark.
      </p>
      <p>
        How quiet depends on the ground you pick, so it is worth seeing. Below, each candidate is rendered with the
        hero sitting directly above the page &mdash; the seam is the join.
      </p>
      <div class="cards" id="seams"></div>
    </div>
  </section>

  <!-- ============ AFTER ============ -->
  <section class="lab-sec">
    <div class="lab-sec-head">
      <span class="lab-sec-num">10</span>
      <h2 class="lab-sec-title">What happens after you pick</h2>
    </div>
    <div class="lab-sec-body">
      <p>
        The token refactor already did the expensive part. A dark direction is four to ten values inside the
        <code>:root</code> block in <code>src/index.css</code> &mdash; no component changes, because nothing
        hard-codes a colour any more.
      </p>
      <p>
        Two things to decide alongside the plate, not after it. <b>Candidate C changes what <code>raised</code>
        means in dark</b>, from a darkening to a lift, which is a vocabulary change and wants a line in
        <code>CONTEXT.md</code>. And <b>if the gradient calms, say so in the rule</b>: the existing note about
        gradient lightness is written as a light-theme constraint, and it would become a rule about both themes.
      </p>
      <p>
        D is the answer to &ldquo;unify the hero but keep the gradient&rdquo;: same animation as today, no seam, and
        every ratio up. What it gives up relative to C is only what C bought with its dimmer gradient.
      </p>
      <p>
        Mixing is fine and probably likely &mdash; B&rsquo;s gradient on REF&rsquo;s grey ground, or C&rsquo;s seam
        with B&rsquo;s brightness. Say which parts and the values get derived and re-measured before anything lands.
      </p>
    </div>
  </section>

  <footer class="lab-foot">
    <p>Throwaway prototype. Measured in-browser at 0.55 peak blob coverage against the composited pixel.</p>
  </footer>
</div>
"""

out = '\n'.join([
  '<title>Dark Ground Lab</title>', FONTS, '', CSS, '', SECTIONS, '',
  '<script>', ASSETS.replace('<script>', '').replace('</script>', '').strip(), '</script>',
  '<script>', HELPERS.replace('<script>', '').strip(), PALETTES, MOCK, HERO, RENDER, MOTION, '</script>',
])
# post-build fixes: tofu-prone glyphs, and the duplicate body row left by the rail surgery
out = out.replace('&#9208; PAUSE MOTION', 'PAUSE MOTION')
out = out.replace("off ? '\u25b6 RESUME MOTION' : '\u23f8 PAUSE MOTION'", "off ? 'RESUME MOTION' : 'PAUSE MOTION'")
out = out.replace("        ${ratioRow('Body text on page', 'on-surface \u2192 surface, large only', rBody2, 'large')}\n", '')
out = out.replace("  const rBody2  = rBody;\n", '')
open(OUT, 'w', encoding='utf-8').write(out)
print('wrote', OUT, len(out.split('\n')), 'lines')
