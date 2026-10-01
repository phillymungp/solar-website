import { marks, chart20, chartCss, indexList, indexCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'k', name: 'Editorial Serif', group: 'trust',
  summary: 'Serif headlines, a 20-year cost chart in the hero, warm white paper. Reads like a well-made guide rather than an advert.',
  persona: 'Careful buyers who read before they call: finance directors, bursars, farm partnerships.',
  why: 'Sunsave sells solar subscriptions on an editorial site: serif headlines, long clear explanations and charts that show the money over time. Readers who distrust glossy sales pages trust a page that looks like it was written to inform. Solex’s PPA is a 20-year decision, which is exactly what a chart can explain and a slogan cannot.',
  borrowed: 'Sunsave’s plain-English subscription explanation and trust strip; Spirit Energy worked examples; Ecoaim PPA article; editorial serif from the Guardian-style long-read pattern.',
  risk: 'More reading on the first screen than any other direction. The chart must be labelled honestly as illustrative.',
  design: {
    palette: 'Warm paper (#FBF9F4) background, navy (#101F3A) type and buttons, a single sun-yellow (#F5B700) used in the chart and small highlights. Warm paper with cool navy avoids the beige-and-terracotta look.',
    type: 'Lora (a readable serif) at 600 for headlines, 40 to 60px; Work Sans 400 at 17px for body, 1.6 line height. Serif for authority, sans for legibility in tables and forms.',
    layout: 'Hero splits headline and a drawn-to-scale chart. Lists use rules instead of cards. Wide measure kept under 70 characters.',
    eye: 'Looks considered and honest. The chart does the persuading.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Work+Sans:wght@400;500;600;700&display=swap',
  headerCta: 'Request a proposal',
  logo: (onDark = false) => `${marks.ring(onDark ? '#FBF9F4' : '#101F3A', '#F5B700')}<span style="font-family:'Lora',Georgia,serif;font-weight:600;letter-spacing:0">Solex Solar</span>`,
  css: `
:root{--bg:#FBF9F4;--surface:#fff;--surface-2:#F1EEE6;--ink:#101F3A;--ink-2:#2E3D57;--muted:#5F6B80;--line:#E0DCD2;--line-strong:#C7C1B2;--brand:#101F3A;--brand-ink:#FBF9F4;--accent:#F5B700;--accent-ink:#101F3A;--accent-text:#8A6400;--radius:4px;--radius-lg:8px;--font-display:"Lora",Georgia,serif;--font-body:"Work Sans","Segoe UI",Arial,sans-serif;--display-weight:600;--display-tracking:-0.01em;--mock-bg:#1b2639;--footer-bg:#101F3A;color-scheme:light}
body{line-height:1.6}
.btn{border-radius:3px}
.btn-primary{background:var(--brand);color:var(--brand-ink);border-color:var(--brand)}
.site-header{background:var(--bg)}
.hero-k{padding-block:clamp(48px,7vw,96px);border-bottom:1px solid var(--line)}
.hero-k .container{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,56px);align-items:center}
@media (max-width:900px){.hero-k .container{grid-template-columns:minmax(0,1fr)}}
.hero-k h1{font-size:clamp(2.3rem,5.4vw,4rem);max-width:16ch}
.hero-k h1 em{font-style:italic;font-weight:500}
.hero-k .lede{font-size:1.15rem}
.hero-k .checklist li{font-size:.98rem}
.chartbox{display:grid;gap:10px}
.chartbox h3{font-size:1.05rem;font-family:var(--font-body);font-weight:700}
.route-card{border-radius:var(--radius-lg);border-top:3px solid var(--brand)}
.route-card.featured{background:var(--surface);color:var(--ink);border:1px solid var(--line);border-top:3px solid var(--accent)}
.route-card.featured .btn{background:var(--brand);color:var(--brand-ink);border-color:var(--brand)}
.route-card.featured .lede{color:var(--ink-2)}
.step{background:transparent;border:0;border-top:1px solid var(--line);border-radius:0;padding:18px 0 0}
.step .num{color:var(--accent-text)}
.sector-card{background:transparent;border:0;border-top:1px solid var(--line);border-radius:0;padding:16px 0 0}
.faq details{background:transparent;border:0;border-bottom:1px solid var(--line);border-radius:0;padding:0}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .eyebrow{color:var(--accent-text)}
.cta-band .lead-form{border:1px solid var(--line)}
.cta-band .lead-form .btn{background:var(--brand);color:var(--brand-ink)}
.page-hero{border-bottom:1px solid var(--line)}
${chartCss}${indexCss}${pageHeroCss}
.site-footer .brand span{color:#FBF9F4}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), ppaSteps: (t) => indexList(t._C.ppa.steps.map(s => [s.t, s.d])) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-k"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>The honest arithmetic of <em>putting solar on your roof.</em></h1><p class="lede">Buy a 30 to 200 kW system from the electricians who fit it, or let Solex Solar fund it and pay a fixed price per kWh for twenty years. Here is what each one does to your electricity bill.</p><ul class="checklist"><li>Fixed-price proposal within five working days of a free survey</li><li>Every figure modelled on your own half-hourly data, assumptions written down</li><li>Funded by Solex Solar directly on sites that qualify</li></ul><div class="btn-row"><a class="btn btn-primary" href="contact.html">Request a proposal</a><a class="btn btn-secondary" href="ppa.html">Read the PPA terms</a></div></div><div class="chartbox"><h3>What the same electricity costs each year, grid against a Solex PPA</h3>${chart20()}</div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two routes</span><h2>Buy outright, or a Solex PPA</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container two-col"><div class="stack"><span class="eyebrow">The Solex PPA</span><h2>Four steps, no capital</h2>${B(this, 'ppaSteps')}</div><div class="stack"><span class="eyebrow">Who it suits</span><h2>Sites that use power during the day</h2><ul class="checklist">${C.ppa.eligibility.map(e => `<li>${e}</li>`).join('')}</ul><p class="note">If buying is the better deal for your business, the proposal will say so.</p></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Scale, cost and return at four sizes</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">The process</span><h2>Survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Request a proposal', 'Send a recent bill or your half-hourly data. Within five working days you have the numbers for buying and, where the site qualifies, the PPA rate.')}`;
  },
};
