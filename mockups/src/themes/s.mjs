import { marks, strip3, strip3Css, syscards, syscardsCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 's', name: 'Sunrise', group: 'bold',
  summary: 'A warm amber-to-orange hero, white cards, rounded corners. Optimistic and energetic, the colour of the product itself.',
  persona: 'Owners who want their solar decision to feel positive and visible, hospitality, leisure and retail.',
  why: 'Of the 2026 trends, the one that fits solar best is warmth: saturated, optimistic colour is back, and sunlight is the only gradient a solar company can use without it looking borrowed from a software start-up. Enphase and Sunrun both own orange; this uses amber to orange as a sunrise band and keeps everything else white and plain.',
  borrowed: 'Kensa and Monzo Business orange-gradient heroes; Enphase orange discipline; Fort Energy outcome stats.',
  risk: 'Gradients date quickly and can look consumer. Keep the gradient to the hero band only.',
  design: {
    palette: 'Hero gradient from amber (#F59E0B) to deep orange (#EA580C) with white type over the darker end, white body, warm tint (#FFF7ED) bands, amber button with dark text (about 8:1 contrast).',
    type: 'Plus Jakarta Sans: 800 headlines at 40 to 60px, 400 body at 17px. Rounded, contemporary, friendly without being soft.',
    layout: 'Gradient hero with a white card holding the three key numbers, then three tiles, cards for systems, and the standard sections on white.',
    eye: 'Warm and confident. The page feels like the product.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
  headerCta: 'Book a free site survey',
  logo: (onDark = false) => `${marks.sun('#F59E0B', onDark ? '#fff' : '#1F1A17')}<span style="text-transform:lowercase;letter-spacing:-.03em;font-weight:800">solex</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#FFF7ED;--ink:#1F1A17;--ink-2:#44403C;--muted:#6B6560;--line:#F3E3D3;--line-strong:#E7C9AE;--brand:#1F1A17;--brand-ink:#fff;--accent:#F59E0B;--accent-ink:#1F1A17;--accent-text:#B45309;--radius:14px;--radius-lg:22px;--font-display:"Plus Jakarta Sans","Segoe UI",Arial,sans-serif;--font-body:"Plus Jakarta Sans","Segoe UI",Arial,sans-serif;--display-weight:800;--display-tracking:-0.03em;--mock-bg:#3a2a1a;--footer-bg:#1F1A17;color-scheme:light}
.btn{border-radius:999px;font-weight:800}
.hero-s{background:linear-gradient(135deg,#F59E0B 0%,#F97316 55%,#EA580C 100%);color:#fff}
.hero-s .container{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-s .container{grid-template-columns:minmax(0,1fr)}}
.hero-s .eyebrow{color:#FFF1DB}
.hero-s h1{color:#fff;max-width:14ch;text-shadow:0 2px 12px rgba(120,50,0,.2)}
.hero-s .lede{color:#FFF4E6;font-size:1.18rem}
.hero-s .btn-primary{background:#1F1A17;color:#fff;border-color:#1F1A17}
.hero-s .btn-secondary{color:#fff;border-color:rgba(255,255,255,.7)}
.keycard{background:#fff;color:var(--ink);border-radius:var(--radius-lg);padding:clamp(20px,2.5vw,28px);display:grid;gap:14px;box-shadow:0 30px 60px rgba(120,50,0,.25)}
.keycard h2{font-size:1.15rem}
.keycard .row{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:center;padding:12px 0;border-top:1px solid var(--line)}
.keycard .n{font-family:var(--font-display);font-weight:800;font-size:1.9rem;letter-spacing:-.03em;color:var(--accent-text);min-width:4ch;line-height:1}
.keycard .l{font-weight:600;font-size:.95rem}
.keycard .l small{display:block;font-weight:400;color:var(--muted);font-size:.82rem}
.route-card{border:1px solid var(--line-strong)}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#D6D3D1}
.step{border:1px solid var(--line-strong)}
.step .num{color:var(--accent-text)}
.sector-card{background:var(--surface-2);border:0}
.faq details{border:1px solid var(--line-strong)}
.trust-item{border:1px solid var(--line-strong)}
.cta-band{background:var(--brand)}
.cta-band .eyebrow{color:var(--accent)}
.page-hero{background:var(--surface-2)}
${strip3Css}${syscardsCss}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), systemsTable: (t) => syscards(t._C) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-s"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Make the roof earn its keep.</h1><p class="lede">Commercial solar from two electricians who fit it themselves. Buy the system, or let Solex Solar fund it and pay a fixed price for the power it makes.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-secondary" href="ppa.html">How the PPA works</a></div></div><div class="keycard"><h2>The short version</h2><div class="row"><span class="n">£0</span><span class="l">up front on a Solex PPA<small>we fund, own and maintain it; you buy the power</small></span></div><div class="row"><span class="n">4–6</span><span class="l">years payback if you buy<small>on a site with daytime electricity use</small></span></div><div class="row"><span class="n">5</span><span class="l">working days to a fixed-price proposal<small>after a free one-hour survey</small></span></div></div></div></section>
<section class="section"><div class="container"><div class="section-head center"><h2>We fit it. We can fund it. We look after it.</h2></div>${strip3([{ ic: '1', t: 'We fit it', d: 'Design and installation of 30 to 200 kW systems by our own team, under SMSTS site management.' }, { ic: '2', t: 'We can fund it', d: 'A Solex PPA puts the system on your roof at our cost. You buy the solar power at a fixed price below the grid.' }, { ic: '3', t: 'We look after it', d: 'Monitoring, an annual inspection and warranty support. On a PPA, all of it is included.' }])}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Two ways to go solar</span><h2>Buy it, or let us fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What fits on a roof like yours</h2></div>${syscards(C)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Six steps from survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">What we hold</span><h2>Qualified, insured, on site ourselves</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Questions we get asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
