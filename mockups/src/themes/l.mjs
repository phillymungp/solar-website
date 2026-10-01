import { statBand, statBandCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'l', name: 'Minimal Photo', group: 'premium',
  summary: 'Full-width photograph, light centred headline, two equal buttons. The Tesla approach: almost nothing on the page but the product.',
  persona: 'Visitors who already know they want solar and are choosing an installer on confidence and finish.',
  why: 'Tesla’s solar pages are the most imitated energy design in the world because they remove everything except a photograph, one line and two choices. It works when the photograph is excellent. For Solex it is the direction to grow into once the first installs are photographed; the placeholder shows the composition.',
  borrowed: 'Tesla solar layout and restraint; Photon Energy person-on-roof hero; REC photography treatment.',
  risk: 'Entirely dependent on photography and says little about the people. Weakest at launch, strongest after the first three projects.',
  design: {
    palette: 'White and near-black (#171A20) only, with Tesla’s restrained blue (#3E6AE1) for the single primary button. Photography provides all colour.',
    type: 'Figtree at 500 for headlines (not bold) at 40 to 64px, 400 at 16px body. Small uppercase navigation. Light weights signal confidence.',
    layout: 'Edge-to-edge photo with the headline overlaid and two side-by-side buttons. Below, alternating photo and text rows, each with one message.',
    eye: 'Calm, expensive, product-like. The visitor feels they are looking at a finished thing, not a pitch.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap',
  headerCta: 'Book a survey',
  logo: (onDark = false) => `<span style="font-weight:600;letter-spacing:.22em;font-size:1rem">SOLEX</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F4F4F4;--ink:#171A20;--ink-2:#393C41;--muted:#5C5E62;--line:#E5E5E5;--line-strong:#CFCFCF;--brand:#171A20;--brand-ink:#fff;--accent:#3E6AE1;--accent-ink:#fff;--accent-text:#2C52C4;--radius:4px;--radius-lg:8px;--font-display:"Figtree","Segoe UI",Arial,sans-serif;--font-body:"Figtree","Segoe UI",Arial,sans-serif;--display-weight:500;--display-tracking:-0.01em;--mock-bg:#222;--footer-bg:#171A20;color-scheme:light}
body{font-size:16px}
.nav a{font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;font-weight:500}
.btn{border-radius:4px;font-weight:500;padding:.8em 2em;min-width:160px}
.btn-secondary{background:rgba(255,255,255,.75);color:var(--ink);border-color:transparent;backdrop-filter:blur(6px)}
.hero-l{position:relative;overflow:hidden;background:#111}
.hero-l .photo-frame{aspect-ratio:16/8;border-radius:0}
@media (max-width:700px){.hero-l .photo-frame{aspect-ratio:3/4}}
.hero-l .photo-frame::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.05) 40%,rgba(0,0,0,.45))}
.hero-l .over{position:absolute;inset:0;display:grid;align-content:space-between;justify-items:center;text-align:center;padding:clamp(28px,5vw,56px) 16px;color:#fff;z-index:2}
.hero-l h1{color:#fff;font-size:clamp(2.2rem,5.4vw,4rem);letter-spacing:-.01em}
.hero-l .lede{color:#F1F1F1;font-size:1.05rem;margin-top:6px}
.hero-l .btn-row{justify-content:center}
.rows article{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:clamp(24px,5vw,72px);padding-block:clamp(40px,7vw,96px);border-top:1px solid var(--line)}
@media (max-width:860px){.rows article{grid-template-columns:minmax(0,1fr)}}
.rows article:nth-child(even) .photo-frame{order:-1}
@media (max-width:860px){.rows article:nth-child(even) .photo-frame{order:0}}
.rows .photo-frame{aspect-ratio:4/3}
.rows h2{font-size:clamp(1.8rem,3.6vw,2.6rem);font-weight:500}
.rows p{color:var(--ink-2);font-size:1.05rem;max-width:48ch}
.route-card{border:1px solid var(--line)}
.route-card.featured{background:var(--ink)}
.route-card.featured .lede{color:#ccc}
.route-card.featured .btn{background:#fff;color:var(--ink);border-color:#fff}
.p-stats{border-radius:0;border-left:0;border-right:0}
.p-stats .n{font-weight:500}
.step{border:0;border-top:1px solid var(--line);border-radius:0;background:transparent;padding:16px 0 0}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .eyebrow{color:var(--accent-text)}
.cta-band .lead-form{border:1px solid var(--line)}
${statBandCss}${pageHeroCss}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-l">${photoFrame(C.photos.heroRoof, 'Commercial roof with solar panels at sunset')}<div class="over"><div><h1>Commercial Solar</h1><p class="lede">30 to 200 kW. Buy it, or let us fund it.</p></div><div class="btn-row"><a class="btn btn-primary" href="commercial-solar.html">Buy a system</a><a class="btn btn-secondary" href="ppa.html">Solex PPA</a></div></div></section>
<section class="section-tight"><div class="container">${statBand([['30–200 kW', 'rooftop systems'], ['£0', 'up front on a Solex PPA'], ['4–6 yrs', 'payback if you buy'], ['2', 'directors on every job']])}</div></section>
<section class="rows"><div class="container"><article><div class="stack"><h2>Fitted by the electricians who quoted it</h2><p>Two directors, both qualified electricians with three years on commercial roofs. No sales reps, no subcontracted crews. Survey, design, install and handover by the same two people.</p><a class="btn btn-secondary" style="background:transparent;border-color:var(--line-strong);justify-self:start" href="about.html">About us</a></div>${photoFrame(C.photos.two, 'Two installers on a roof')}</article><article><div class="stack"><h2>Funded by us, if you would rather not spend the capital</h2><p>A Solex PPA puts the system on your roof at our cost. You buy the solar power at a fixed price per kWh below the grid for the term, and the system is yours at the end.</p><a class="btn btn-secondary" style="background:transparent;border-color:var(--line-strong);justify-self:start" href="ppa.html">How the PPA works</a></div>${photoFrame(C.photos.panels, 'Solar panels against a clear sky')}</article><article><div class="stack"><h2>Installed to the standard, tested string by string</h2><p>BS 7671, BS EN 62446 and the G99 grid connection, handled for you. Certificates, drawings and monitoring at handover; an annual inspection afterwards.</p><a class="btn btn-secondary" style="background:transparent;border-color:var(--line-strong);justify-self:start" href="commercial-solar.html">What is included</a></div>${photoFrame(C.photos.hands, 'Connecting panel cables')}</article></div></section>
<section class="section band"><div class="container"><div class="section-head center"><h2>Two ways to do it</h2></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container"><div class="section-head center"><h2>Four sizes, modelled</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head center"><h2>Questions</h2></div><div style="display:grid;justify-items:center">${B(this, 'faq')}</div></div></section>
${B(this, 'ctaBand', 'Book a free site survey', 'One hour on site. A modelled proposal within five working days.')}`;
  },
};
