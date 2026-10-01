import { marks, strip3, strip3Css, priceCards, priceCardsCss, reviewsStrip, reviewsCss, compareTable, compareCss, syscards, syscardsCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'g', name: 'Price Up Front', group: 'conversion',
  summary: 'Navy and green, prices in the hero, three steps and a reviews strip. The BOXT and Heatable model applied to commercial solar.',
  persona: 'Owners who hate being quoted “call us for a price”. They want to know roughly what it costs before they pick up the phone.',
  why: 'Heatable and BOXT took a trade (boiler installation) that used to hide its prices and built market leaders on “see your price now, fixed, no surveyor visit”. Commercial solar cannot be priced online exactly, but publishing indicative prices for 30, 50, 100 and 200 kW, and £0 on a PPA, removes the biggest reason people do not enquire.',
  borrowed: 'BOXT navy hero with white card and Trustpilot line; Heatable “from £” product tiles; Excel Energy calculator; Smart Ease eligibility thresholds.',
  risk: 'Published prices must be kept current and clearly labelled “from”, or they become a complaint.',
  design: {
    palette: 'Navy (#0B2545) for type and headers, green (#1E8A5B) only on buttons, cool grey (#F5F7FA) background. Green signals “go” and money; navy keeps it serious. Both pass AA contrast on white.',
    type: 'Outfit throughout: 700 headlines at 40 to 56px, body 17px at 400. Geometric but not childish; numbers line up cleanly in price cards.',
    layout: 'Hero carries a four-card price guide. Reviews strip (placeholder until real reviews exist) and a three-step strip directly under it, the pattern that converts on trades sites.',
    eye: 'A visitor sees prices immediately, understands the process in three steps, and the enquiry no longer feels like a commitment.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap',
  headerCta: 'See example prices',
  logo: (onDark = false) => `${marks.bolt('#1E8A5B')}<span>Solex<span style="font-weight:500;opacity:.8"> Solar</span></span>`,
  css: `
:root{--bg:#F5F7FA;--surface:#fff;--surface-2:#EAF0F7;--ink:#0B2545;--ink-2:#2C4668;--muted:#5E7290;--line:#D9E1EC;--line-strong:#B9C7D9;--brand:#0B2545;--brand-ink:#fff;--accent:#1E8A5B;--accent-ink:#fff;--accent-text:#15774C;--radius:10px;--radius-lg:16px;--font-display:"Outfit","Segoe UI",Arial,sans-serif;--font-body:"Outfit","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.02em;--mock-bg:#152c4f;--footer-bg:#0B2545;color-scheme:light}
.site-header{background:#fff}
.hero-g{background:#fff;border-bottom:1px solid var(--line)}
.hero-g .container{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(44px,6vw,88px)}
@media (max-width:900px){.hero-g .container{grid-template-columns:minmax(0,1fr)}}
.hero-g h1{max-width:14ch}
.hero-g h1 b{color:var(--accent-text)}
.hero-g .lede{font-size:1.15rem}
.hero-g .ticks{list-style:none;display:grid;gap:8px;font-weight:600}
.hero-g .ticks li::before{content:"✓";color:var(--accent-text);font-weight:800;margin-right:10px}
.guide{display:grid;gap:12px;padding:clamp(18px,2.5vw,26px);border-radius:var(--radius-lg);background:var(--surface-2);border:1px solid var(--line)}
.guide h2{font-size:1.2rem}
.guide .p-prices{grid-template-columns:repeat(2,minmax(0,1fr))}
.guide .p-prices article{padding:14px}
.guide .p-prices .from b{font-size:1.3rem}
.guide .fine{font-size:.78rem;color:var(--muted)}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#C9D6EA}
.step .num{color:var(--accent-text)}
.cta-band{background:var(--brand)}
.page-hero{background:#fff;border-bottom:1px solid var(--line)}
${strip3Css}${priceCardsCss}${reviewsCss}${compareCss}${syscardsCss}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), systemsTable: (t) => syscards(t._C) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-g"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Fixed-price commercial solar, <b>with the price up front.</b></h1><p class="lede">Indicative prices for four system sizes, a fixed-price proposal within five working days, and a £0 option where we fund the system and you buy the power.</p><ul class="ticks"><li>No sales reps: the directors survey, quote and install</li><li>Fixed price once we have surveyed; no scope creep</li><li>Solex PPA: £0 up front on sites that qualify</li></ul><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-secondary" href="commercial-solar.html">What is included</a></div></div><aside class="guide"><h2>Price guide, fitted</h2>${priceCards(C)}<p class="fine">Indicative “from” prices for a straightforward steel or membrane roof, excluding VAT. Your fixed price follows the survey.</p></aside></div></section>
<section class="section-tight"><div class="container stack" style="gap:14px">${reviewsStrip(C)}${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container"><div class="section-head center"><h2>Three steps to a fixed price</h2></div>${strip3([{ t: 'Free survey', d: 'About an hour on site. We measure the roof, check the intake and take your half-hourly data.' }, { t: 'Fixed-price proposal', d: 'Within five working days: system size, generation, savings and payback, plus the PPA rate if you qualify.' }, { t: 'Install and switch on', d: 'One to three weeks on site, tested to BS EN 62446, handed over with certificates and monitoring.' }])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Buy or PPA</span><h2>Side by side, for a typical 100 kW site</h2></div>${compareTable(C)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Four sizes, modelled</h2></div>${syscards(C)}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we get asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
