import { marks, toggle, toggleCss, toggleJs, compareTable, compareCss, strip3, strip3Css, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'n', name: 'Bank Clean', group: 'trust',
  summary: 'White, very legible, one teal accent and a Buy / PPA toggle in the hero. The clarity of a challenger bank applied to solar.',
  persona: 'Finance directors and owners who want to compare the two routes in ten seconds without reading.',
  why: 'Starling and Monzo made financial products feel simple by showing one comparison, in plain type, with lots of white space and one accent colour. A commercial solar decision is also a financial comparison: buy or PPA. Putting that comparison in the hero as a toggle turns the homepage into the decision tool.',
  borrowed: 'GoCardless white, centred two-button hero; Starling’s single-accent discipline; Solar X comparison table; Smart Ease eligibility thresholds.',
  risk: 'Very clean designs can feel generic. The toggle and the copy have to carry the personality.',
  design: {
    palette: 'White, slate (#1C2B36) type, a single teal (#0B7F72) for buttons and highlights, pale grey-blue (#F5F7F9) bands. Teal passes AA with white text.',
    type: 'DM Sans throughout: 700 headlines at 36 to 52px, body 16px at 400 with 1.6 line height. Smaller body than other directions, bank-style, but with more space around it.',
    layout: 'Left headline, right toggle card. A sticky “Book a free site survey” bar on phones. Three plain columns, a comparison table, then cards.',
    eye: 'Clear, trustworthy, modern. The visitor can answer “which route?” before scrolling.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap',
  headerCta: 'Book a free site survey',
  logo: (onDark = false) => `${marks.dot('#0B7F72')}<span style="font-weight:700;letter-spacing:-.02em">Solex</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F5F7F9;--ink:#1C2B36;--ink-2:#3A4B58;--muted:#5F7180;--line:#DCE3E9;--line-strong:#C0CCD6;--brand:#1C2B36;--brand-ink:#fff;--accent:#0B7F72;--accent-ink:#fff;--accent-text:#0B6B60;--radius:10px;--radius-lg:16px;--font-display:"DM Sans","Segoe UI",Arial,sans-serif;--font-body:"DM Sans","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.03em;--mock-bg:#223542;--footer-bg:#1C2B36;color-scheme:light}
body{font-size:16px;line-height:1.6}
.btn{border-radius:999px}
.hero-n{padding-block:clamp(48px,7vw,96px)}
.hero-n .container{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,4vw,64px);align-items:center}
@media (max-width:900px){.hero-n .container{grid-template-columns:minmax(0,1fr)}}
.hero-n h1{max-width:14ch}
.hero-n .lede{font-size:1.15rem}
.p-toggle{--hl:var(--surface-2)}
.route-card{border:1px solid var(--line)}
.route-card.featured{background:var(--accent)}
.route-card.featured .lede{color:#D8F0EC}
.route-card.featured li::before{background:#fff}
.route-card.featured .btn{background:#fff;color:var(--accent-text);border-color:#fff}
.step{border:1px solid var(--line)}
.step .num{color:var(--accent-text)}
.cta-band{background:var(--brand)}
.cta-band .eyebrow{color:#7FD1C6}
.sticky-cta{display:none}
@media (max-width:760px){.sticky-cta{display:block;position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:60}.sticky-cta .btn{width:100%;box-shadow:0 10px 30px rgba(0,0,0,.2)}body{padding-bottom:80px}}
.page-hero{background:var(--surface-2)}
${toggleCss}${compareCss}${strip3Css}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  js: toggleJs,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-n"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Two ways to cut your electricity bill. Pick one.</h1><p class="lede">Buy a rooftop system from the electricians who install it, or let Solex Solar fund it and pay a fixed price per kWh. Compare them here, then book a free survey and we will model both on your own data.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-secondary" href="ppa.html">PPA terms</a></div><ul class="inline-list"><li>Commercial only</li><li>Directors on every job</li><li>Fully insured</li></ul></div>${toggle(C)}</div></section>
<section class="section band"><div class="container">${strip3([{ ic: '1', t: 'Free survey', d: 'About an hour on site. Roof, structure, intake and your half-hourly data.' }, { ic: '2', t: 'Modelled proposal', d: 'Within five working days, with every assumption written down.' }, { ic: '3', t: 'Install and aftercare', d: 'One to three weeks on site, then monitoring and an annual inspection.' }])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Buy or PPA</span><h2>Side by side</h2></div>${compareTable(C)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Four sizes, modelled</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Qualifications</span><h2>Who is doing the work</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}
<div class="sticky-cta"><a class="btn btn-primary" href="contact.html">Book a free site survey</a></div>`;
  },
};
