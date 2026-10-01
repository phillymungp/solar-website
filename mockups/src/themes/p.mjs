import { pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'p', name: 'Photo Premium', group: 'premium',
  summary: 'Full-bleed photograph, serif headline, black and white, and a projects grid. What the site becomes once the first three installs are photographed.',
  persona: 'Larger clients and architects who choose on evidence of finished work.',
  why: 'The research dropped the photo-led direction for launch because Solex has no usable photos. It belongs in the set anyway, as the target: the best installer sites (Photon, Joju, Onyx) are photo-led, and a site that is designed to receive real project photography from day one avoids a redesign later. The placeholders show the composition; the project tiles are labelled honestly.',
  borrowed: 'Photon Energy person-on-roof hero; Onyx Renewables project grid; DM Serif editorial headline.',
  risk: 'Launching this with stock imagery would be a mistake. Build it, hold it until the first projects exist.',
  design: {
    palette: 'Black and white only. No accent colour; the photographs and a thin underline carry emphasis. Buttons are solid black.',
    type: 'DM Serif Display for headlines at 44 to 76px (a high-contrast serif that holds up over photographs), Albert Sans 17px body. The pairing signals craft.',
    layout: 'Edge-to-edge photo with the headline bottom-left over a gradient, then a three-tile projects grid, then text sections with wide margins.',
    eye: 'Looks like an established firm with work to show. Which is exactly why it has to wait for real photographs.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
  headerCta: 'Enquire',
  logo: (onDark = false) => `<span style="font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:1.5rem;letter-spacing:-.01em">Solex</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F5F5F3;--ink:#0B0B0B;--ink-2:#333;--muted:#6B6B6B;--line:#E6E6E6;--line-strong:#CFCFCF;--brand:#0B0B0B;--brand-ink:#fff;--accent:#0B0B0B;--accent-ink:#fff;--accent-text:#0B0B0B;--radius:0;--radius-lg:0;--font-display:"DM Serif Display",Georgia,serif;--font-body:"Albert Sans","Segoe UI",Arial,sans-serif;--display-weight:400;--display-tracking:-0.01em;--mock-bg:#222;--footer-bg:#0B0B0B;color-scheme:light}
.btn{border-radius:0;font-weight:600}
.hero-p{position:relative;background:#111;color:#fff}
.hero-p .photo-frame{aspect-ratio:16/8;border-radius:0}
@media (max-width:700px){.hero-p .photo-frame{aspect-ratio:3/4}}
.hero-p .photo-frame::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.7))}
.hero-p .over{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:clamp(24px,4vw,48px) clamp(16px,4vw,32px);display:grid;gap:14px}
.hero-p h1{color:#fff;font-size:clamp(2.4rem,6.4vw,4.8rem);max-width:16ch;line-height:1}
.hero-p .lede{color:#E8E8E8;max-width:52ch}
.hero-p .btn-secondary{color:#fff;border-color:rgba(255,255,255,.6)}
.projects{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2px;background:var(--line)}
@media (max-width:760px){.projects{grid-template-columns:minmax(0,1fr)}}
.projects a{display:grid;gap:0;background:var(--surface);text-decoration:none;color:inherit}
.projects .ph{display:grid;place-items:center;aspect-ratio:4/3;background:var(--surface-2);border:0;color:var(--muted);font-size:.9rem;text-align:center;padding:16px;opacity:1}
.projects .cap{padding:14px 16px 18px;display:grid;gap:2px}
.projects .cap b{font-family:var(--font-display);font-size:1.2rem;font-weight:400}
.projects .cap span{font-size:.85rem;color:var(--muted)}
h2{font-size:clamp(1.9rem,4vw,3rem)}
.route-card{border:1px solid var(--ink)}
.route-card.featured{background:var(--ink)}
.route-card.featured .lede{color:#ccc}
.route-card.featured .btn{background:#fff;color:var(--ink);border-color:#fff}
.route-card li::before{background:var(--ink)}
.step{border:0;border-top:1px solid var(--ink);border-radius:0;background:transparent;padding:16px 0 0}
.faq details{border:0;border-bottom:1px solid var(--ink);border-radius:0;padding:0}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .lead-form{border:1px solid var(--ink)}
.trust-item{border:0;border-top:1px solid var(--ink);border-radius:0;padding:12px 0 0;background:transparent}
${pageHeroCss}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-p">${photoFrame(C.photos.team, 'Installers on a factory roof')}<div class="over"><div class="container" style="padding:0"><span class="eyebrow" style="color:#fff">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Commercial solar, by the people who climb the roof.</h1><p class="lede">Buy a system from the directors who install it, or let Solex Solar fund it and buy the power at a fixed price.</p><div class="btn-row"><a class="btn btn-primary" style="background:#fff;color:#0B0B0B;border-color:#fff" href="contact.html">Enquire</a><a class="btn btn-secondary" href="ppa.html">The Solex PPA</a></div></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Projects</span><h2>Recent work</h2><p class="lede">Three tiles reserved for the first three Solex Solar installations, with kWp, generation and the client’s own words. Until then this section stays honest and empty.</p></div><div class="projects">${[['Project one', 'kWp · sector · year'], ['Project two', 'kWp · sector · year'], ['Project three', 'kWp · sector · year']].map(([a, b]) => `<a href="about.html"><div class="ph">Your first project photo here</div><div class="cap"><b>${a}</b><span>${b}</span></div></a>`).join('')}</div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Two routes</span><h2>Buy it, or let us fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container two-col"><div class="stack"><span class="eyebrow">The Solex PPA</span><h2>No capital. Fixed price per kWh. Yours at the end.</h2><p class="lede">We fund a small number of systems each year from our own money and install them ourselves. You buy the power; we look after the roof.</p><div class="btn-row"><a class="btn btn-primary" href="ppa.html">How it works</a></div></div>${B(this, 'ppaSteps', false)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Four sizes, modelled</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Qualifications</span><h2>What we hold</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Questions</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Enquire', 'A free survey, then a modelled proposal within five working days.')}`;
  },
};
