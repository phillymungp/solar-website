import { marks, reviewsStrip, reviewsCss, strip3, strip3Css, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'm', name: 'Local Trades', group: 'approachable',
  summary: 'Green and white, phone number in the header, big tap targets, plain words. The best version of the local trade website.',
  persona: 'Owner-managers, farmers and site managers who want a straight answer and a number to ring.',
  why: 'The trade sites that win locally (the better Checkatrade-era plumbers, electricians and roofers) share one thing: they make it effortless to call. Phone number top right, who you are speaking to, what it costs, when you can come. Nothing clever. This direction applies that to commercial solar with bigger type and clearer spacing than most trade sites manage.',
  borrowed: 'Checkatrade category chips and badge row; Hometree reviews strip; Ecoaim utility bar; Actismart (three electrician brothers) credibility stack.',
  risk: 'Can look like every other trade site. The difference has to be the writing and the PPA.',
  design: {
    palette: 'Green (#157A4A) as the brand colour on white, orange (#F08A24) for the one primary button with dark text, mint band (#F2F7F3). Green reads as safe and electrical (NICEIC-adjacent); orange is the call to action.',
    type: 'Rubik, 700 headlines at 38 to 52px, body 18px at 400 with 1.6 line height: a size up from most sites, because the readers are often on a phone in a van or a yard.',
    layout: 'Phone number and “Call Phil” in the header on every screen. Hero with a photo of the team, trust strip directly beneath, then the two routes. Buttons are 48px tall.',
    eye: 'Instantly familiar: a local firm that looks competent and is easy to ring.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
  headerCta: 'Call us',
  logo: (onDark = false) => `${marks.panel(onDark ? '#fff' : '#157A4A', onDark ? '#157A4A' : '#fff')}<span style="font-weight:800">Solex Solar</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F2F7F3;--ink:#1B2A24;--ink-2:#34463E;--muted:#5E7066;--line:#D6E2DA;--line-strong:#B7CBBF;--brand:#157A4A;--brand-ink:#fff;--accent:#F08A24;--accent-ink:#1B1B1B;--accent-text:#A8560C;--radius:8px;--radius-lg:12px;--font-display:"Rubik","Segoe UI",Arial,sans-serif;--font-body:"Rubik","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.02em;--mock-bg:#213a2e;--footer-bg:#0F4D30;color-scheme:light}
body{font-size:18px;line-height:1.6}
.btn{min-height:48px;font-weight:700}
.site-header{border-bottom:4px solid var(--brand)}
.site-header .container{min-height:78px}
.phone{display:none;align-items:center;gap:10px;font-weight:800;font-size:1.25rem;color:var(--brand);text-decoration:none;white-space:nowrap}
@media (min-width:961px){.phone{display:inline-flex}.header-cta{display:none}}
.hero-m{background:var(--surface-2)}
.hero-m .container{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(40px,6vw,80px)}
@media (max-width:900px){.hero-m .container{grid-template-columns:minmax(0,1fr)}}
.hero-m h1{max-width:15ch;color:var(--brand)}
.hero-m .lede{font-size:1.2rem}
.hero-m .ticks{list-style:none;display:grid;gap:10px;font-weight:600}
.hero-m .ticks li::before{content:"✓";display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--brand);color:#fff;font-size:.85rem;margin-right:10px}
.hero-m .photo-frame{aspect-ratio:4/3;border:6px solid #fff;box-shadow:0 16px 40px rgba(27,42,36,.15)}
.route-card{border:2px solid var(--line)}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#D6EBDF}
.step{border:2px solid var(--line)}
.step .num{color:var(--brand)}
.sector-card{border:2px solid var(--line)}
.faq details{border:2px solid var(--line)}
.faq summary{font-size:1.05rem}
.trust-item{border:2px solid var(--line)}
.cta-band{background:var(--brand)}
.page-hero{background:var(--surface-2)}
${reviewsCss}${strip3Css}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-m"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar installers · ${C.company.region}</span><h1>Commercial solar, fitted properly, by the two blokes you spoke to.</h1><p class="lede">30 to 200 kW rooftop systems for farms, factories, warehouses and offices. Buy it outright, or let us fund it and just pay less for your power.</p><ul class="ticks"><li>Qualified electricians · SMSTS · IPAF · PASMA · fully insured</li><li>Free survey, fixed-price proposal in five working days</li><li>Solex PPA: £0 up front on sites that qualify</li></ul><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-brand" href="contact.html">Call ${C.company.phone}</a></div></div>${photoFrame(C.photos.two, 'Two installers on a commercial roof')}</div></section>
<section class="section-tight"><div class="container stack" style="gap:14px">${B(this, 'trustStrip')}${reviewsStrip(C)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two ways to go solar</span><h2>Buy it, or we fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head center"><h2>How a job goes</h2></div>${strip3([{ t: 'We come and look', d: 'Free survey, about an hour. Roof, structure, intake, and your half-hourly data.' }, { t: 'You get a fixed price', d: 'Within five working days: size, generation, savings, payback, and the PPA rate if you qualify.' }, { t: 'We fit it and switch it on', d: 'One to three weeks on site. Tested, certified, monitoring on your phone.' }])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What 30 to 200 kW looks like</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Who we work for</span><h2>Roofs that work hardest during the day</h2></div>${B(this, 'sectorsGrid', 6)}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we get asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
