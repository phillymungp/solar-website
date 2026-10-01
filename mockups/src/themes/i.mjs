import { marks, statBand, statBandCss, flow, flowCss, syscards, syscardsCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'i', name: 'Big Type', group: 'bold',
  summary: 'One giant headline, black on white, orange only on the button. The Enphase approach: say one thing, very large.',
  persona: 'Anyone skimming on a phone. Decision-makers who want the point in three seconds.',
  why: 'Enphase, a component manufacturer, outsells rivals partly because its site says one thing at a time in enormous type with a single orange action. Oversized typography is the dominant 2026 trend precisely because it reads instantly on phones. For a small firm it also costs nothing: no photography, no illustration, just words set well.',
  borrowed: 'GoCardless and Wise oversized centred headlines; Enphase single-orange-action discipline; the “one decision per page” rule from the research.',
  risk: 'Big type leaves less room for nuance. The PPA details must be one scroll away, not three.',
  design: {
    palette: 'White, near-black (#111) and one orange (#F26B1D) used only on the primary button and a few highlights, with dark text on the orange for contrast (about 7:1).',
    type: 'Hanken Grotesk 800 headlines from 44px on phones to 90px on desktop, tracking tightened to -0.04em; body 18px for easy reading. Two sizes do most of the work.',
    layout: 'Centred hero with one button, then a full-width photo strip, then a four-stat band. Everything below is wide, simple rows.',
    eye: 'The visitor cannot miss the message. It feels confident, modern and uncluttered.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
  headerCta: 'Book a survey',
  logo: (onDark = false) => `${marks.square(onDark ? '#fff' : '#111', onDark ? '#111' : '#F26B1D')}<span style="font-weight:800;letter-spacing:-.03em">SOLEX</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F6F6F4;--ink:#111;--ink-2:#333;--muted:#6B6B68;--line:#E3E3E0;--line-strong:#C9C9C4;--brand:#111;--brand-ink:#fff;--accent:#F26B1D;--accent-ink:#111;--accent-text:#B8460A;--radius:6px;--radius-lg:10px;--font-display:"Hanken Grotesk","Segoe UI",Arial,sans-serif;--font-body:"Hanken Grotesk","Segoe UI",Arial,sans-serif;--display-weight:800;--display-tracking:-0.04em;--mock-bg:#222;--footer-bg:#111;color-scheme:light}
body{font-size:18px}
.hero-i{padding-block:clamp(56px,9vw,120px) 0}
.hero-i .container{display:grid;grid-template-columns:minmax(0,1fr);gap:26px;justify-items:center;text-align:center}
.hero-i h1{font-size:clamp(2.8rem,8vw,5.8rem);line-height:.95;max-width:16ch}
.hero-i h1 span{color:var(--accent)}
.hero-i .lede{font-size:1.25rem;max-width:52ch}
.hero-i .strip{width:100%;max-width:100%;min-width:0;justify-self:stretch;margin-top:30px}
.hero-i .strip .photo-frame{aspect-ratio:3/1;border-radius:var(--radius-lg)}
@media (max-width:700px){.hero-i .strip .photo-frame{aspect-ratio:4/3}}
.btn{border-radius:6px;font-weight:800;font-size:1.05rem}
h2{font-size:clamp(2rem,4.6vw,3.4rem);letter-spacing:-.035em}
.route-card{border:2px solid var(--ink)}
.route-card.featured{background:var(--ink)}
.route-card.featured .lede{color:#ccc}
.step{border:0;border-top:3px solid var(--ink);border-radius:0;background:transparent;padding:16px 0 0}
.step .num{color:var(--accent-text)}
.p-stats{border-radius:0}
.p-stats .n{font-size:2.4rem}
.sector-card{border:0;border-top:3px solid var(--ink);border-radius:0;background:transparent;padding:16px 0 0}
.faq details{border:0;border-bottom:2px solid var(--ink);border-radius:0;padding:0}
.faq summary{font-size:1.15rem}
.cta-band{background:var(--ink)}
.page-hero h1{font-size:clamp(2.4rem,6vw,4.4rem)}
${statBandCss}${flowCss}${syscardsCss}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), systemsTable: (t) => syscards(t._C), ppaSteps: (t) => flow(t._C) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-i"><div class="container"><span class="eyebrow">Commercial solar · 30 to 200 kW</span><h1>Solar that pays for itself. <span>Or costs nothing to start.</span></h1><p class="lede">Buy a rooftop system from the electricians who fit it, or let Solex Solar fund it and buy the power at a fixed price. Businesses across ${C.company.region}.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a></div><div class="strip">${photoFrame(C.photos.heroDusk, 'Commercial building with rooftop solar at dusk')}</div></div></section>
<section class="section-tight"><div class="container">${statBand([['30–200 kW', 'commercial rooftop systems'], ['£0', 'up front on a Solex PPA'], ['4–6 yrs', 'typical payback if you buy'], ['2', 'directors, both electricians, on every job']])}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Two ways to do it.</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>The PPA, in four steps.</h2><p class="lede">We fund it, we own it, you buy the power. At the end it is yours.</p></div>${flow(C)}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Four sizes.</h2></div>${syscards(C)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Six steps.</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions.</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Book a free site survey.', 'One hour on site. A fixed-price proposal within five working days.')}`;
  },
};
