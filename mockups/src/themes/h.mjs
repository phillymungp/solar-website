import { marks, indexList, indexCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'h', name: 'Stone & Green', group: 'premium',
  summary: 'Stone neutrals, deep green type, one big photograph and a lot of air. The Scandinavian premium look.',
  persona: 'Hotels, head offices, private schools and premium brands who judge a supplier by how considered everything looks.',
  why: 'Aira sells heat pumps with the restraint of a furniture brand: a single photograph, a quiet palette and large, light type. Buyers at the top of the market read that calm as competence. Solex can borrow the discipline (one photo, generous spacing, no badges shouting) and still state the offer plainly.',
  borrowed: 'Aira composition and neutrals; Geo Green Power calm hero; REC Group product photography treatment.',
  risk: 'Looks expensive. Fine for premium clients, wrong for a farm or a tyre depot. Needs one strong photograph at launch.',
  design: {
    palette: 'Warm stone (#F2EFE9) background, deep green (#1F3A2E) for all type and the single button, olive (#7C8C4D) for small details. No bright accent at all; the photograph supplies colour.',
    type: 'Instrument Sans at 500 for headlines up to 64px with slight negative tracking, 400 at 17px body with 1.65 line height. Medium weight instead of bold keeps it calm.',
    layout: 'Headline centred above one wide photo. Three plain text columns instead of cards. Rules, not boxes. Sections are tall with lots of white space.',
    eye: 'Feels established and unhurried. The visitor is not sold to; they are shown.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
  headerCta: 'Request a proposal',
  logo: (onDark = false) => `${marks.ring(onDark ? '#F2EFE9' : '#1F3A2E', '#7C8C4D')}<span style="font-weight:500;letter-spacing:.02em">Solex Solar</span>`,
  css: `
:root{--bg:#F2EFE9;--surface:#FBFAF7;--surface-2:#E8E4DB;--ink:#1F3A2E;--ink-2:#3B5248;--muted:#6B7D73;--line:#D8D3C8;--line-strong:#BDB6A8;--brand:#1F3A2E;--brand-ink:#F2EFE9;--accent:#1F3A2E;--accent-ink:#F2EFE9;--accent-text:#1F3A2E;--radius:6px;--radius-lg:12px;--font-display:"Instrument Sans","Segoe UI",Arial,sans-serif;--font-body:"Instrument Sans","Segoe UI",Arial,sans-serif;--display-weight:500;--display-tracking:-0.03em;--mock-bg:#2b3a33;--footer-bg:#1F3A2E;color-scheme:light}
body{line-height:1.65}
.section{padding-block:clamp(64px,9vw,120px)}
.site-header{background:var(--bg);border-bottom:1px solid var(--line)}
.btn{border-radius:4px;font-weight:600}
.btn-secondary{border-color:var(--ink)}
.hero-h{padding-block:clamp(48px,7vw,96px) 0}
.hero-h .container{display:grid;grid-template-columns:minmax(0,1fr);gap:28px;justify-items:center;text-align:center}
.hero-h h1{font-size:clamp(2.4rem,6vw,4.4rem);max-width:18ch;font-weight:500}
.hero-h .lede{font-size:1.2rem;max-width:54ch}
.hero-h .photo-frame{width:100%;aspect-ratio:21/9;border-radius:var(--radius-lg);margin-top:16px}
@media (max-width:700px){.hero-h .photo-frame{aspect-ratio:4/3}}
.cols3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(20px,4vw,48px);border-top:1px solid var(--line);padding-top:28px}
@media (max-width:760px){.cols3{grid-template-columns:minmax(0,1fr)}}
.cols3 div{display:grid;gap:6px}
.cols3 .n{font-size:1.5rem;font-weight:500;letter-spacing:-.02em}
.cols3 p{color:var(--ink-2);font-size:.98rem}
.routes-h{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(24px,4vw,56px)}
@media (max-width:760px){.routes-h{grid-template-columns:minmax(0,1fr)}}
.routes-h article{display:grid;gap:14px;border-top:2px solid var(--ink);padding-top:20px;align-content:start}
.routes-h h3{font-size:1.5rem;font-weight:500}
.routes-h ul{list-style:none;display:grid;gap:8px;color:var(--ink-2)}
.routes-h li::before{content:"—";margin-right:10px;color:var(--muted)}
.table-wrap{background:var(--surface)}
.step{background:transparent;border:0;border-top:1px solid var(--line);border-radius:0;padding:18px 0 0}
.sector-card{background:transparent;border:0;border-top:1px solid var(--line);border-radius:0;padding:18px 0 0}
.faq details{background:transparent;border:0;border-bottom:1px solid var(--line);border-radius:0;padding:0}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .eyebrow{color:var(--accent-text)}
.cta-band .lead-form{background:var(--surface);border:1px solid var(--line)}
.trust-item{background:transparent;border:0;border-top:1px solid var(--line);border-radius:0;padding:12px 0 0}
.page-hero{background:var(--bg)}
${indexCss}${pageHeroCss}
.site-footer .brand span{color:#F2EFE9}`,
  blocks: {
    pageHero: (t, o) => pageHeroPhoto(o),
    routes(t) { const C = t._C; const card = (r) => `<article><h3>${r.title}</h3><p class="lede" style="font-size:1rem">${r.lede}</p><ul>${r.points.map(p => `<li>${p}</li>`).join('')}</ul><a class="btn btn-secondary" href="${r.cta.href}" style="justify-self:start">${r.cta.label}</a></article>`; return `<div class="routes-h">${card(C.routes.buy)}${card(C.routes.ppa)}</div>`; },
    ppaSteps(t) { return indexList(t._C.ppa.steps.map(s => [s.t, s.d])); },
  },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-h"><div class="container"><span class="eyebrow">Commercial solar · 30 to 200 kW</span><h1>Quietly powerful. Commercial solar, owned by you or funded by us.</h1><p class="lede">Solex Solar designs, installs and, where it suits, funds rooftop systems for businesses across ${C.company.region}. Two directors, both electricians, on every job.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Request a proposal</a><a class="btn btn-secondary" href="ppa.html">The Solex PPA</a></div>${photoFrame(C.photos.heroRoof, 'Commercial roof with solar panels at sunset')}</div></section>
<section class="section"><div class="container cols3"><div><span class="n">30 to 200 kW</span><p>Steel, membrane and fibre-cement roofs. Designed to BS 7671 and BS EN 62446, G99 handled for you.</p></div><div><span class="n">Funded by us</span><p>A Solex PPA puts the system on your roof at our cost. You buy the power at a fixed price below the grid, and the system is yours at the end.</p></div><div><span class="n">Fitted by the directors</span><p>The people who quote are the people who install. No sales team, no subcontracted crews.</p></div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Two routes</span><h2>Buy outright, or let us fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container two-col"><div class="stack"><span class="eyebrow">The Solex PPA</span><h2>Four steps, no capital</h2>${B(this, 'ppaSteps')}</div><div class="stack"><span class="eyebrow">Who it suits</span><h2>Sites that use power during the day</h2><ul class="checklist">${C.ppa.eligibility.map(e => `<li>${e}</li>`).join('')}</ul></div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Scale, cost and return</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Sectors</span><h2>Where it works best</h2></div>${B(this, 'sectorsGrid', 6)}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Request a proposal', 'A survey takes about an hour. Within five working days you have a modelled proposal for buying and, where the site qualifies, the PPA rate.')}`;
  },
};
