import { marks, strip3, strip3Css, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'q', name: 'Farm & Rural', group: 'sector',
  summary: 'Olive, straw and soil, a slab-serif headline and barn roofs. A sector-specific version aimed squarely at farms and rural businesses.',
  persona: 'Farmers, dairies, food processors, equestrian and rural estates with big shed roofs and daytime loads.',
  why: 'Agriculture is the sector where 30 to 200 kW fits most naturally (barns, grain stores, milking parlours) and where buyers respond to vernacular, not corporate polish. Agricultural suppliers and rural insurers use earthy palettes and slab serifs for exactly that reason. A sector homepage can also be the template for other sector landing pages later.',
  borrowed: 'Veep Energy niche sector pages; Spirit Energy sector menu; NFU-style rural visual language.',
  risk: 'It is a sector page, not a whole-company look, unless farms are going to be most of the business.',
  design: {
    palette: 'Straw (#F4EFDF) background, soil (#2F2A1F) text, olive (#5F6F3A) brand colour, harvest gold (#D98E04) on the primary button with dark text. Earthy but still high contrast.',
    type: 'Bitter (a slab serif) at 700 for headlines at 38 to 56px, Source Sans 3 at 17px body. Slab serifs read as sturdy and practical.',
    layout: 'Hero with a wide barn-roof photograph and a bullet list of rural loads, then a three-tile strip of farm-specific benefits, then the standard sections.',
    eye: 'Feels like it was made for a farm, not adapted for one. The visitor sees their own building type immediately.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,500;0,600;0,700;0,800;1,500&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap',
  headerCta: 'Book a free farm survey',
  logo: (onDark = false) => `${marks.leaf(onDark ? '#F4EFDF' : '#5F6F3A', '#D98E04')}<span style="font-family:'Bitter',Georgia,serif;font-weight:700">Solex Solar</span>`,
  css: `
:root{--bg:#F4EFDF;--surface:#fff;--surface-2:#EAE3CF;--ink:#2F2A1F;--ink-2:#4A4435;--muted:#6E6756;--line:#E0D8C2;--line-strong:#C9BF9F;--brand:#5F6F3A;--brand-ink:#fff;--accent:#D98E04;--accent-ink:#1a1a1a;--accent-text:#8A5A00;--radius:6px;--radius-lg:10px;--font-display:"Bitter",Georgia,serif;--font-body:"Source Sans 3","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.01em;--mock-bg:#3f3a2b;--footer-bg:#2F2A1F;color-scheme:light}
.site-header{background:var(--bg);border-bottom:2px solid var(--brand)}
.hero-q{padding-block:clamp(40px,6vw,80px)}
.hero-q .container{display:grid;grid-template-columns:1fr 1.05fr;gap:clamp(24px,4vw,56px);align-items:center}
@media (max-width:900px){.hero-q .container{grid-template-columns:minmax(0,1fr)}}
.hero-q h1{max-width:15ch;color:var(--brand)}
.hero-q .lede{font-size:1.18rem}
.hero-q .photo-frame{aspect-ratio:4/3;border:8px solid #fff;box-shadow:0 20px 50px rgba(47,42,31,.18)}
.loads{list-style:none;display:grid;gap:8px;font-weight:600}
.loads li::before{content:"•";color:var(--accent-text);margin-right:10px;font-size:1.3em;line-height:0}
.route-card{border:1px solid var(--line-strong)}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#E4EAD3}
.step{border:1px solid var(--line-strong)}
.step .num{color:var(--accent-text)}
.sector-card{border:1px solid var(--line-strong)}
.faq details{border:1px solid var(--line-strong)}
.trust-item{border:1px solid var(--line-strong)}
.cta-band{background:var(--brand)}
.band{background:var(--surface-2)}
.page-hero{background:var(--bg)}
${strip3Css}${pageHeroCss}
.site-footer .brand span{color:#F4EFDF}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-q"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Solar for farms and rural businesses · ${C.company.region}</span><h1>Put the barn roof to work.</h1><p class="lede">30 to 200 kW solar on sheds, grain stores, dairies and packhouses, fitted by two electricians who have spent three years on commercial roofs. Buy it outright, or let us fund it and pay a fixed price for the power.</p><ul class="loads"><li>Milking, cooling, drying, ventilation and processing loads all run in daylight</li><li>Steel and fibre-cement roofs with the fixings the manufacturer specifies</li><li>Capital allowances if you buy; £0 up front on a Solex PPA</li></ul><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free farm survey</a><a class="btn btn-secondary" href="ppa.html">How the PPA works</a></div></div>${photoFrame(C.photos.rows, 'Solar array in a rural setting')}</div></section>
<section class="section band"><div class="container"><div class="section-head center"><h2>Why solar pays on a farm</h2></div>${strip3([{ ic: '☀', t: 'Daytime loads', d: 'Cooling, milking and drying run when the sun is up, so most of the power is used on site rather than exported.' }, { ic: '▭', t: 'Big, simple roofs', d: 'A 100 kW system needs about 500 m² of roof. Most modern sheds have it, with no planning needed in most cases.' }, { ic: '£', t: 'Two ways to pay', d: 'Buy and claim capital allowances, or a Solex PPA with nothing up front and a fixed price per kWh.' }])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two ways to go solar</span><h2>Buy it, or let us fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What fits on a shed roof</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How a job goes</span><h2>Six steps from survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">What we hold</span><h2>Qualified, insured, on site ourselves</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions farmers ask us</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Book a free farm survey', 'About an hour on site. A modelled proposal within five working days, for buying and for a PPA if the site qualifies.')}`;
  },
};
