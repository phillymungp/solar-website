import { marks, indexList, indexCss, statBand, statBandCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 't', name: 'Swiss Grid', group: 'bold',
  summary: 'Black, white and grey on a strict grid, with safety yellow as a marker. The architect’s version of a solar site.',
  persona: 'Architects, property developers and professional clients who respect precision and dislike decoration.',
  why: 'The Swiss style (strict grid, one sans, big numbers, one accent) is what engineering consultancies like Arup and Hoare Lea reach for when they want to look exact. Solex’s offer is unusually simple (two routes, four sizes, six steps), and a grid layout makes that simplicity visible. Yellow is used the way it is used on site: as a marker, not a colour scheme.',
  borrowed: 'Arup and Hoare Lea restraint; Spirit Energy numbered finance structure; Onyx typographic hierarchy.',
  risk: 'Austere. Some owner-managers will find it cold. It depends on copy and numbers being exactly right.',
  design: {
    palette: 'White, black (#0A0A0A) and greys, with safety yellow (#FFD500) used only as a highlight bar and on the primary button with black text. Nothing else is coloured.',
    type: 'Public Sans only: 700 headlines at 40 to 68px with tight tracking, 400 body at 17px, small uppercase labels with wide tracking. Tabular numerals everywhere.',
    layout: 'Hero split between a headline and a numbered index of the offer (01 install, 02 PPA, 03 aftercare). Sections separated by single rules. Numbers lined up in columns.',
    eye: 'Exact, serious, uncluttered. The eye goes straight to the numbers.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
  headerCta: 'Book a survey',
  logo: (onDark = false) => `${marks.square(onDark ? '#fff' : '#0A0A0A', onDark ? '#0A0A0A' : '#FFD500')}<span style="font-weight:800;letter-spacing:.04em">SOLEX</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F4F4F4;--ink:#0A0A0A;--ink-2:#333;--muted:#666;--line:#E0E0E0;--line-strong:#BDBDBD;--brand:#0A0A0A;--brand-ink:#fff;--accent:#FFD500;--accent-ink:#0A0A0A;--accent-text:#0A0A0A;--radius:0;--radius-lg:0;--font-display:"Public Sans","Segoe UI",Arial,sans-serif;--font-body:"Public Sans","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.035em;--mock-bg:#222;--footer-bg:#0A0A0A;color-scheme:light}
.btn{border-radius:0;font-weight:700}
.eyebrow{color:var(--ink);font-weight:700}
.eyebrow::before{content:"";display:inline-block;width:18px;height:10px;background:var(--accent);margin-right:10px;vertical-align:middle}
.site-header{border-bottom:2px solid var(--ink)}
.hero-t{border-bottom:2px solid var(--ink)}
.hero-t .container{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(24px,5vw,72px);align-items:start;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-t .container{grid-template-columns:minmax(0,1fr)}}
.hero-t h1{font-size:clamp(2.6rem,6.4vw,4.6rem);line-height:.98;max-width:13ch}
.hero-t h1 mark{background:linear-gradient(transparent 70%,var(--accent) 70%);color:inherit}
.hero-t .lede{font-size:1.15rem;max-width:50ch}
.hero-t .p-index li:first-child{border-top:2px solid var(--ink)}
.route-card{border:2px solid var(--ink);border-radius:0}
.route-card.featured{background:var(--ink)}
.route-card.featured .lede{color:#ccc}
.route-card.featured .btn{background:var(--accent);color:var(--ink);border-color:var(--accent)}
.route-card li::before{background:var(--ink)}
.route-card.featured li::before{background:var(--accent)}
.step{border:0;border-top:2px solid var(--ink);border-radius:0;background:transparent;padding:16px 0 0}
.step .num{color:var(--ink)}
.sector-card{border:0;border-top:1px solid var(--ink);border-radius:0;background:transparent;padding:16px 0 0}
.sector-card .fit{color:var(--muted)}
.faq details{border:0;border-bottom:1px solid var(--ink);border-radius:0;padding:0}
.trust-item{border:0;border-top:1px solid var(--ink);border-radius:0;background:transparent;padding:12px 0 0}
.table-wrap{border-radius:0;border-color:var(--ink)}
th{background:var(--ink);color:#fff}
.p-stats{border-radius:0;border-color:var(--ink);background:var(--ink)}
.cta-band{background:var(--ink)}
.cta-band .eyebrow{color:#fff}
.cta-band .lead-form{border-radius:0}
.cta-band .lead-form .btn{background:var(--accent);color:var(--ink)}
.page-hero{border-bottom:2px solid var(--ink)}
${indexCss}${statBandCss}${pageHeroCss}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), ppaSteps: (t) => indexList(t._C.ppa.steps.map(s => [s.t, s.d])) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-t"><div class="container"><div class="stack" style="gap:22px"><span class="eyebrow">Commercial solar · ${C.company.region}</span><h1>Commercial solar. <mark>30–200 kW.</mark> Bought, or funded by us.</h1><p class="lede">Two directors, both electricians, three years on commercial roofs. Fixed-price installation, or a Power Purchase Agreement funded by Solex Solar on sites that qualify.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-secondary" href="ppa.html">PPA terms</a></div></div>${indexList([['Install', 'Design, G99, installation and commissioning to BS 7671 and BS EN 62446. Fixed price after a free survey.'], ['Solex PPA', 'We fund, own, insure and maintain the system. You buy the power at a fixed p/kWh. Yours at the end of the term.'], ['Aftercare', 'Monitoring, annual inspection and warranty support for the life of the system.']])}</div></section>
<section class="section-tight"><div class="container">${statBand([['30–200', 'kW system range'], ['0', 'pounds up front on a PPA'], ['4–6', 'years payback if bought'], ['5', 'working days to a proposal']])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two routes</span><h2>Buy outright, or a Solex PPA</h2></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container two-col" style="border-top:1px solid var(--ink);padding-top:40px"><div class="stack"><span class="eyebrow">The PPA</span><h2>Four steps, no capital</h2>${B(this, 'ppaSteps')}</div><div class="stack"><span class="eyebrow">Eligibility</span><h2>Sites that use power in daylight</h2><ul class="checklist">${C.ppa.eligibility.map(e => `<li>${e}</li>`).join('')}</ul></div></div></section>
<section class="section"><div class="container" style="border-top:1px solid var(--ink);padding-top:40px"><div class="section-head"><span class="eyebrow">Reference designs</span><h2>30 · 50 · 100 · 200 kW</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section"><div class="container" style="border-top:1px solid var(--ink);padding-top:40px"><div class="section-head"><span class="eyebrow">Delivery</span><h2>Six steps</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section"><div class="container" style="border-top:1px solid var(--ink);padding-top:40px">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container" style="border-top:1px solid var(--ink);padding-top:40px"><div class="section-head"><span class="eyebrow">Qualifications</span><h2>What we hold</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section"><div class="container" style="border-top:1px solid var(--ink);padding-top:40px"><div class="section-head"><span class="eyebrow">Questions</span><h2>Asked and answered</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
