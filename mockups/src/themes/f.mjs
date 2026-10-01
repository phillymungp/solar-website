import { marks, strip3, strip3Css, syscards, syscardsCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'f', name: 'Friendly Teal', group: 'approachable',
  summary: 'Rounded type, teal and coral, three honest numbers in the hero. The friendliest direction that still looks like a business.',
  persona: 'Owner-managers and office managers who are put off by corporate energy sites and sales-y solar sites alike.',
  why: 'Octopus Energy changed what a UK energy brand can look like: warm, rounded, plain-spoken, and trusted by businesses as well as households. This borrows that warmth without the pink and the illustrations, so it reads as a small firm you would call rather than a utility.',
  borrowed: 'Octopus Energy tone and rounded type; Fort Energy outcome stats; Ecoaim plain-English PPA line.',
  risk: 'Rounded type can read as consumer. The 30 to 200 kW line and the “commercial only” chip must stay in the hero.',
  design: {
    palette: 'Teal (#0F766E) as the brand colour on white, coral (#FF6B4A) reserved for the one primary button, mint-grey (#F3F8F7) bands. Dark teal text instead of black keeps it soft without losing contrast (about 11:1).',
    type: 'Nunito for everything: 800 for headlines at 44 to 60px with tight tracking, 400 at 17px for body with 1.6 line height. One rounded family keeps it friendly and consistent.',
    layout: 'Left-aligned hero with three number cards instead of a photo, so nothing depends on photography. Big radii (16 and 24px) and soft bands.',
    eye: 'A visitor sees a friendly company, a clear offer and three numbers that answer “what is in it for me” before scrolling.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&display=swap',
  headerCta: 'Book a free site survey',
  logo: (onDark = false) => `${marks.sun('#FF6B4A', onDark ? '#fff' : '#0F766E')}<span style="text-transform:lowercase;letter-spacing:-.02em;font-weight:900">solex solar</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F3F8F7;--ink:#10302C;--ink-2:#2E4B46;--muted:#5C7470;--line:#D5E3E0;--line-strong:#B6CDC8;--brand:#0F766E;--brand-ink:#fff;--accent:#FF6B4A;--accent-ink:#1A1A1A;--accent-text:#B8411F;--radius:16px;--radius-lg:24px;--font-display:"Nunito","Segoe UI",Arial,sans-serif;--font-body:"Nunito","Segoe UI",Arial,sans-serif;--display-weight:800;--display-tracking:-0.025em;--mock-bg:#1f3330;--footer-bg:#0F766E;color-scheme:light}
body{line-height:1.6}
.btn{border-radius:999px;padding:.9em 1.5em;font-weight:800}
.hero-f{padding-block:clamp(48px,7vw,96px)}
.hero-f .container{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(24px,4vw,56px);align-items:center}
@media (max-width:900px){.hero-f .container{grid-template-columns:minmax(0,1fr)}}
.hero-f h1{max-width:14ch;color:var(--brand)}
.hero-f .lede{font-size:1.2rem}
.nums{display:grid;gap:12px}
.nums div{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center;padding:18px 20px;border-radius:var(--radius-lg);background:var(--surface-2);border:2px solid var(--line)}
.nums .n{font-family:var(--font-display);font-weight:900;font-size:2rem;letter-spacing:-.03em;color:var(--brand);line-height:1;min-width:4.2ch}
.nums .l{font-weight:700;font-size:1rem;line-height:1.3}
.nums .l small{display:block;font-weight:400;color:var(--muted);font-size:.85rem}
.route-card{border:2px solid var(--line)}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#CFE8E4}
.step{border:2px solid var(--line)}
.step .num{color:var(--accent-text)}
.sector-card{background:var(--surface-2);border:0}
.faq details{border:2px solid var(--line)}
.trust-item{border:2px solid var(--line)}
.cta-band{background:var(--brand)}
.page-hero{background:var(--surface-2)}
${strip3Css}${syscardsCss}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), systemsTable: (t) => syscards(t._C) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-f"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Solar for your business, without the sales pitch.</h1><p class="lede">We are two electricians who fit commercial rooftop solar. Buy a system from us, or let us fund it and simply pay less for the power. Either way, you deal with the people doing the work.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-secondary" href="ppa.html">How the PPA works</a></div><ul class="inline-list"><li>Commercial only</li><li>Qualified electricians</li><li>Fully insured</li></ul></div><div class="nums"><div><span class="n">£0</span><span class="l">up front on a Solex PPA<small>we fund it, own it and maintain it; you buy the power at a fixed rate</small></span></div><div><span class="n">4–6</span><span class="l">years payback if you buy<small>on a site that uses its power during the day</small></span></div><div><span class="n">5</span><span class="l">working days to a fixed-price proposal<small>after a free one-hour survey</small></span></div></div></div></section>
<section class="section band"><div class="container"><div class="section-head center"><h2>Three things we do, nothing we don’t</h2></div>${strip3([{ ic: '1', t: 'We fit it', d: 'Design and installation of 30 to 200 kW systems by our own two-man team, under SMSTS site management.' }, { ic: '2', t: 'We fund it, if you want', d: 'A Solex PPA puts the system on your roof at our cost. You buy the solar power at a fixed price below the grid.' }, { ic: '3', t: 'We look after it', d: 'Monitoring, an annual inspection and warranty support. On a PPA, all of it is included.' }])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two ways to go solar</span><h2>Buy it, or let us fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What fits on a roof like yours</h2></div>${syscards(C)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Six steps from survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">What we hold</span><h2>Qualified, insured, on site ourselves</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we get asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
