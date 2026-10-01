// Direction C — "Engineering Grid": dark slate, amber, Plex type, schematic hero. Facilities and engineering buyers.
const logo = (onDark = true) => `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="3" fill="none" stroke="#FFB300" stroke-width="2"/><g fill="#FFB300"><rect x="6" y="6" width="8" height="8"/><rect x="18" y="6" width="8" height="8"/><rect x="6" y="18" width="8" height="8"/><rect x="18" y="18" width="8" height="8" opacity=".45"/></g></svg><span style="font-family:'IBM Plex Mono',monospace;font-weight:600;letter-spacing:.04em;font-size:1.05rem">SOLEX_SOLAR</span>`;

const schematic = `<svg class="schem" viewBox="0 0 560 420" role="img" aria-label="System schematic: roof array to inverter to distribution board to grid"><defs><pattern id="pv" width="14" height="10" patternUnits="userSpaceOnUse"><rect width="13" height="9" fill="#1E3A5F" stroke="#FFB300" stroke-width=".8"/></pattern></defs>
<g font-family="IBM Plex Mono, monospace" font-size="13" fill="#FFC547">
<polygon points="30,170 300,60 540,130 270,240" fill="url(#pv)" stroke="#FFB300" stroke-width="1.5"/>
<text x="30" y="270">ARRAY · 100 kW · 222 × 450 W</text>
<text x="30" y="290" fill="#8696AA">~500 m² · 900 kWh/kW/yr</text>
<rect x="300" y="300" width="100" height="56" rx="4" fill="#111C2B" stroke="#FFB300" stroke-width="1.5"/><text x="311" y="324">INVERTER</text><text x="311" y="344" fill="#8696AA">3-ph · G99</text>
<rect x="420" y="300" width="120" height="56" rx="4" fill="#111C2B" stroke="#8696AA" stroke-width="1.5"/><text x="430" y="324" fill="#E8EEF5">DIST. BOARD</text><text x="430" y="344" fill="#8696AA">BS 7671</text>
<rect x="420" y="372" width="120" height="34" rx="4" fill="#111C2B" stroke="#8696AA" stroke-width="1.5"/><text x="445" y="394" fill="#E8EEF5">GRID / DNO</text>
<path d="M270 240 L350 300" fill="none" stroke="#FFB300" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M400 328 L420 328" fill="none" stroke="#FFB300" stroke-width="1.5"/>
<path d="M480 356 L480 372" fill="none" stroke="#8696AA" stroke-width="1.5"/>
<text x="290" y="282" fill="#8696AA">DC</text><text x="404" y="320" fill="#8696AA" font-size="11">AC</text>
<text x="30" y="334" fill="#E8EEF5" font-size="14">FIXED p/kWh ON A SOLEX PPA</text><text x="30" y="354" fill="#8696AA" font-size="12">or owned outright · tested to BS EN 62446-1</text>
</g></svg>`;

export default {
  id: 'c',
  name: 'Engineering Grid',
  summary: 'Dark slate, amber, monospace data and a schematic in the hero. The electrician\u2019s answer to the sales-company solar site.',
  persona: 'Facilities, engineering and operations managers who buy on competence, standards and numbers.',
  why: 'Buyer guides in the research say post-commissioning support and technical rigour are the most predictive signals of installer quality, and SurgePV argues facilities buyers want an operating place, not an empty roof polygon. Both GB NRG and EvoEnergy prove a dark, technical look reads as serious in the UK. This direction turns the founders’ trade knowledge (G99, BS 7671, string testing) into the brand, which is credibility a new firm can show on day one.',
  borrowed: 'GB NRG dark palette and education-first nav; EvoEnergy dark hero; Solar X engineering byline and stated assumptions; Spirit Energy PPA flow diagram.',
  risk: 'Dark sites can read as cold to older owner-managers, and body text needs care. Keep inner pages lighter if it tests badly.',
  group: 'technical',
  design: {
    palette: 'Deep slate (#0B1420) background with faint amber graph-paper lines, amber (#FFB300) for the button and labels, light grey text (#E8EEF5) for about 14:1 contrast.',
    type: 'IBM Plex Sans Condensed 700 uppercase headlines at 40 to 70px, IBM Plex Sans 17px body, IBM Plex Mono for labels and data. An engineering family with a mono for numbers.',
    layout: 'Schematic in the hero, spec strip beneath, a four-step PPA flow with arrows, mono-numbered tables.',
    eye: 'Serious and technical. It tells an engineer that the people behind it read standards.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  headerCta: 'Book a site survey',
  logo,
  css: `
:root{--bg:#0B1420;--surface:#111C2B;--surface-2:#172538;--ink:#E8EEF5;--ink-2:#B8C4D3;--muted:#8696AA;--line:#223349;--line-strong:#33496A;--brand:#172538;--brand-ink:#E8EEF5;--accent:#FFB300;--accent-ink:#0B1420;--accent-text:#FFC547;--radius:4px;--radius-lg:8px;--font-display:"IBM Plex Sans Condensed","Arial Narrow",Arial,sans-serif;--font-body:"IBM Plex Sans","Segoe UI",Arial,sans-serif;--font-mono:"IBM Plex Mono",Consolas,monospace;--display-weight:700;--display-tracking:-0.01em;--mock-bg:#070D16;--footer-bg:#070D16;--header-bg:#0B1420;--header-ink:#E8EEF5;--header-line:#223349;--nav-hover:rgba(255,255,255,.08);color-scheme:dark}
h1,h2{text-transform:uppercase;letter-spacing:.005em}
h1{font-size:clamp(2.3rem,5.6vw,4.4rem);line-height:.98}
.lead-form input,.lead-form select,.lead-form textarea{background:var(--bg);border-color:var(--line-strong)}
.btn-secondary{border-color:var(--line-strong);color:var(--ink)}
.grid-bg{background-color:var(--bg);background-image:linear-gradient(rgba(255,179,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,179,0,.07) 1px,transparent 1px);background-size:40px 40px}
.hero-c{border-bottom:1px solid var(--line)}
.hero-c .container{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-c .container{grid-template-columns:minmax(0,1fr)}}
.hero-c h1 span{color:var(--accent)}
.hero-c .lede{font-size:1.15rem}
.schem{width:100%;height:auto;background:#0E1A2A;border:1px solid var(--line);border-radius:var(--radius-lg);padding:10px}
.spec-strip{border-block:1px solid var(--line);background:var(--surface)}
.spec-strip ul{display:flex;flex-wrap:wrap;gap:0;list-style:none}
.spec-strip li{font-family:var(--font-mono);font-size:.82rem;letter-spacing:.04em;padding:14px 18px;border-right:1px solid var(--line);color:var(--ink-2)}
.spec-strip li b{color:var(--accent-text);font-weight:600}
.mono{font-family:var(--font-mono)}
.route-card{border:1px solid var(--line);border-radius:var(--radius-lg);position:relative}
.route-card::before{content:attr(data-code);position:absolute;top:14px;right:16px;font-family:var(--font-mono);font-size:.75rem;color:var(--muted);letter-spacing:.08em}
.route-card.featured{background:var(--surface);color:var(--ink);border-color:var(--accent)}
.route-card.featured .lede{color:var(--ink-2)}
.route-card.featured .btn{background:var(--accent);color:var(--accent-ink)}
.route-card.featured::before{color:var(--accent-text)}
.step{background:var(--surface);border-color:var(--line)}
.step .num{color:var(--accent-text);font-family:var(--font-mono)}
.trust-item{background:var(--surface)}
.trust-item .k{font-family:var(--font-mono);font-size:.85rem;letter-spacing:.03em}
td,th{font-variant-numeric:tabular-nums}
td.num{font-family:var(--font-mono);font-size:.9rem;color:var(--accent-text)}
th{background:var(--surface-2);color:var(--muted)}
.flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;list-style:none;counter-reset:f;border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden}
@media (max-width:860px){.flow{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.flow{grid-template-columns:minmax(0,1fr)}}
.flow li{padding:22px 20px;border-right:1px solid var(--line);background:var(--surface);counter-increment:f;display:grid;gap:8px;align-content:start;position:relative}
.flow li:last-child{border-right:0}
.flow li::before{content:"STEP 0" counter(f);font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;color:var(--accent-text)}
.flow li::after{content:"→";position:absolute;right:-9px;top:22px;color:var(--accent);font-size:1.1rem;background:var(--bg);line-height:1;z-index:1}
.flow li:last-child::after{display:none}
@media (max-width:860px){.flow li::after{display:none}.flow li:nth-child(2){border-right:0}.flow li:nth-child(-n+2){border-bottom:1px solid var(--line)}}
@media (max-width:520px){.flow li{border-right:0;border-bottom:1px solid var(--line)}.flow li:last-child{border-bottom:0}}
.flow h3{font-size:1.1rem;text-transform:none}
.flow p{font-size:.93rem;color:var(--ink-2)}
.photo-frame img{filter:saturate(.75) contrast(1.05)}
.photo-frame::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,20,32,0) 40%,rgba(11,20,32,.55));pointer-events:none}
.sector-card{background:var(--surface);border-color:var(--line)}
.sector-card .fit{font-family:var(--font-mono);color:var(--accent-text)}
.faq details{background:var(--surface)}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .lead-form{background:var(--surface);border:1px solid var(--line)}
.page-hero{border-bottom:1px solid var(--line)}
.page-hero .container{grid-template-columns:1.1fr .9fr;align-items:center}
@media (max-width:900px){.page-hero .container{grid-template-columns:minmax(0,1fr)}}
.page-hero .photo-frame{aspect-ratio:16/10}
.site-footer{border-top:1px solid var(--line)}
.site-footer .brand span{color:#fff}
.band{background:var(--surface)}
.stat .n{font-family:var(--font-mono);font-weight:600;color:var(--accent-text)}
.kv>div:nth-child(odd){background:var(--surface-2)}
.lede{color:var(--ink-2)}
.route-card li::before{background:var(--accent)}
`,
  blocks: {
    pageHero(t, o) {
      return `<section class="page-hero grid-bg"><div class="container"><div class="stack"><span class="eyebrow mono">// ${o.eyebrow}</span><h1>${o.title}</h1><p class="lede">${o.lede}</p>${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div>${o.photo ? `<div class="photo-frame"><img src="../assets/photos/${o.photo}" alt=""><span class="photo-caption">Placeholder photo</span></div>` : ''}</div></section>`;
    },
    ppaSteps(t) {
      const C = t._C;
      return `<ol class="flow">${C.ppa.steps.map(s => `<li><h3>${s.t}</h3><p>${s.d}</p></li>`).join('')}</ol>`;
    },
    routes(t) {
      const C = t._C; const base = t._blocks;
      const card = (r, f, code) => base.routeCard(r, f).replace('<article class="route-card', `<article data-code="${code}" class="route-card`);
      return `<div class="routes">${card(C.routes.buy, false, 'ROUTE 01 · CAPEX')}${card(C.routes.ppa, true, 'ROUTE 02 · SOLEX PPA')}</div>`;
    },
  },
  home({ B, C, photoFrame }) {
    this._C = C;
    return `
<section class="hero-c grid-bg"><div class="container"><div class="stack" style="gap:22px"><span class="eyebrow mono">// commercial PV · 30–200 kW · ${C.company.region}</span><h1>Rooftop PV, <span>engineered and installed</span> by electricians.</h1><p class="lede">30 to 200 kW commercial systems, designed to BS 7671 and BS EN 62446, G99-approved, commissioned and handed over by the two people who quoted it. Buy the system, or take it on a PPA that we fund ourselves.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a site survey</a><a class="btn btn-secondary" href="ppa.html">PPA mechanism</a></div></div>${schematic}</div></section>
<div class="spec-strip"><div class="container" style="padding-inline:0"><ul><li><b>SIZE</b> 30–200 kW</li><li><b>WIRING</b> BS 7671:2018+A2</li><li><b>TEST</b> BS EN 62446-1</li><li><b>GRID</b> G99 / ENA</li><li><b>SITE</b> SMSTS · IPAF · PASMA</li><li><b>FUNDING</b> CAPEX or SOLEX PPA</li><li><b>MCS</b> pending · Nov 2026</li></ul></div></div>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// funding routes</span><h2>Two ways to run it</h2><p class="lede">Same hardware, same installers, same test certificates. The difference is who pays for the system and who owns it.</p></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow mono">// PPA mechanism</span><h2>Solex funds it. You buy the output.</h2><p class="lede">A Power Purchase Agreement with the installer itself. We pay for the system, own and maintain it, and sell you the electricity at a fixed price per kWh for the term. Then it is yours.</p></div>${B(this, 'ppaSteps')}<div class="btn-row" style="margin-top:24px"><a class="btn btn-primary" href="ppa.html">Sample terms and eligibility</a></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// reference designs</span><h2>30 · 50 · 100 · 200 kW</h2><p class="lede">Modelled reference designs so you can see the scale before the survey.</p></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow mono">// qualifications</span><h2>What we hold</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// delivery</span><h2>Survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow mono">// sectors</span><h2>Daytime loads</h2></div>${B(this, 'sectorsGrid', 6)}</div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow mono">// FAQ</span><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
