import { marks, statBand, statBandCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'r', name: 'Corporate Blue', group: 'trust',
  summary: 'Royal blue, white and grey, service tiles with icons, stats and an accreditations strip. The conventional corporate layout, done cleanly.',
  persona: 'Facilities managers and procurement teams at larger companies who expect a supplier site to look like the ones they already deal with.',
  why: 'Custom Solar (Mitie), Vaillant and most facilities suppliers use the same blue-and-white template because procurement buyers trust what is familiar. The research found no design award here, only a lot of business. Including the conventional look lets the brothers compare “safe and familiar” against the more distinctive directions with their own eyes.',
  borrowed: 'Custom Solar / Mitie structure; Vaillant service tiles; Excel Energy accreditations page.',
  risk: 'Forgettable. It will not be remembered after the tab is closed, but it will not be mistrusted either.',
  design: {
    palette: 'Royal blue (#0B4F9E) for headers and buttons, light blue (#00A3E0) for icons only, dark grey (#1F2933) text, light grey (#F2F5F9) bands. The most common B2B scheme in the UK.',
    type: 'Open Sans throughout: 700 headlines at 34 to 48px, 16px body. Deliberately ordinary and highly readable.',
    layout: 'Photo hero with overlaid headline, four service tiles with icons, a stat band, sectors, accreditations, FAQ, contact form. The order procurement teams expect.',
    eye: 'Looks like an established supplier. Nothing surprises the visitor, which for some buyers is the point.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap',
  headerCta: 'Contact us',
  logo: (onDark = false) => `${marks.tile(onDark ? '#fff' : '#0B4F9E', '#00A3E0', onDark ? '#0B4F9E' : '#fff')}<span style="font-weight:800">Solex Solar</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F2F5F9;--ink:#1F2933;--ink-2:#3E4C59;--muted:#616E7C;--line:#D9E0E8;--line-strong:#B8C4D1;--brand:#0B4F9E;--brand-ink:#fff;--accent:#0B4F9E;--accent-ink:#fff;--accent-text:#0B4F9E;--radius:4px;--radius-lg:6px;--font-display:"Open Sans","Segoe UI",Arial,sans-serif;--font-body:"Open Sans","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.01em;--mock-bg:#1f3f6a;--footer-bg:#0A2E5C;color-scheme:light}
body{font-size:16px}
h1{font-size:clamp(2rem,4.6vw,3.2rem)}
h2{font-size:clamp(1.5rem,3vw,2.2rem)}
.util{background:var(--brand);color:#fff;font-size:.85rem}
.util .container{display:flex;justify-content:flex-end;gap:18px;min-height:34px;align-items:center}
.hero-r{position:relative;background:#0A2E5C;color:#fff}
.hero-r .photo-frame{aspect-ratio:16/7;border-radius:0}
.hero-r .photo-frame::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,46,92,.9),rgba(10,46,92,.55) 55%,rgba(10,46,92,.2))}
.hero-r .over{position:absolute;inset:0;display:grid;align-content:center;z-index:2}
@media (max-width:760px){.hero-r .photo-frame{aspect-ratio:16/9}.hero-r .photo-frame::after{background:rgba(10,46,92,.35)}.hero-r .over{position:static;padding-block:28px 36px;background:#0A2E5C}}
.hero-r h1{color:#fff;max-width:18ch}
.hero-r .lede{color:#E3ECF7;max-width:52ch}
.hero-r .btn-secondary{color:#fff;border-color:rgba(255,255,255,.6)}
.tiles{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
@media (max-width:960px){.tiles{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.tiles{grid-template-columns:minmax(0,1fr)}}
.tiles a{display:grid;gap:10px;padding:22px;border:1px solid var(--line);border-top:4px solid #00A3E0;background:var(--surface);text-decoration:none;color:inherit;align-content:start}
.tiles .ic{width:44px;height:44px;border-radius:50%;background:#E3F3FB;display:grid;place-items:center;color:#0B4F9E;font-weight:800}
.tiles h3{font-size:1.05rem}
.tiles p{font-size:.92rem;color:var(--ink-2)}
.tiles span.more{color:var(--brand);font-weight:700;font-size:.9rem}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#D6E4F5}
.step .num{color:var(--brand)}
.p-stats{border-radius:0}
.p-stats .n{color:var(--brand)}
.cta-band{background:var(--brand)}
.cta-band .eyebrow{color:#9CCBF2}
.page-hero{background:var(--surface-2)}
${statBandCss}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o) },
  home({ B, C, photoFrame }) {
    return `
<div class="util"><div class="container"><span>${C.company.phone}</span><span>${C.company.email}</span></div></div>
<section class="hero-r">${photoFrame(C.photos.aerial, 'Aerial view of solar arrays')}<div class="over"><div class="container"><div class="stack" style="gap:16px"><span class="eyebrow" style="color:#9CCBF2">Commercial solar PV · 30 to 200 kW</span><h1>Commercial solar installation and funded PPA solutions</h1><p class="lede">Design, installation, commissioning and aftercare for businesses across ${C.company.region}, by qualified electricians, with the option of a Power Purchase Agreement funded by Solex Solar.</p><div class="btn-row"><a class="btn btn-primary" style="background:#00A3E0;border-color:#00A3E0;color:#0A2E5C" href="contact.html">Request a quotation</a><a class="btn btn-secondary" href="ppa.html">Funded solar (PPA)</a></div></div></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Our services</span><h2>What we do</h2></div><div class="tiles"><a href="commercial-solar.html"><span class="ic">PV</span><h3>Commercial solar installation</h3><p>30 to 200 kW rooftop systems designed, installed and commissioned to BS 7671 and BS EN 62446.</p><span class="more">Find out more →</span></a><a href="ppa.html"><span class="ic">£0</span><h3>Funded solar (PPA)</h3><p>Solex Solar funds, owns and maintains the system; you buy the power at a fixed rate below the grid.</p><span class="more">Find out more →</span></a><a href="commercial-solar.html#aftercare"><span class="ic">O&amp;M</span><h3>Monitoring and maintenance</h3><p>Monitoring, annual inspection, warranty support and performance reporting for the life of the system.</p><span class="more">Find out more →</span></a><a href="sectors.html"><span class="ic">G99</span><h3>Grid connection</h3><p>G99 applications and liaison with your network operator, handled from application to approval.</p><span class="more">Find out more →</span></a></div></div></section>
<section class="section-tight band"><div class="container">${statBand([['30–200 kW', 'system range'], ['5 days', 'to a fixed-price proposal'], ['£0', 'up front on a Solex PPA'], ['3+ yrs', 'commercial PV experience, directors on every job']])}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Funding options</span><h2>Purchase or Power Purchase Agreement</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Sectors</span><h2>Industries we serve</h2></div>${B(this, 'sectorsGrid', 8)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Accreditations</span><h2>Qualifications and insurance</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Frequently asked questions</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Request a quotation', 'Complete the form and a director will contact you within one working day to arrange a free site survey.')}`;
  },
};
