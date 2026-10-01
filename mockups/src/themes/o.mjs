import { marks, flow, flowCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
const schematic = `<svg class="schem" viewBox="0 0 560 420" role="img" aria-label="System schematic: roof array to inverter to distribution board to grid"><defs><pattern id="pvl" width="14" height="10" patternUnits="userSpaceOnUse"><rect width="13" height="9" fill="#DCE6FA" stroke="#1E4ED8" stroke-width=".8"/></pattern></defs>
<g font-family="IBM Plex Mono, monospace" font-size="13" fill="#1A43B8">
<polygon points="30,170 300,60 540,130 270,240" fill="url(#pvl)" stroke="#1E4ED8" stroke-width="1.5"/>
<text x="30" y="270">ARRAY · 100 kW · 222 × 450 W</text><text x="30" y="290" fill="#5B6B86">~500 m² · 900 kWh/kW/yr</text>
<rect x="300" y="300" width="100" height="56" rx="4" fill="#fff" stroke="#1E4ED8" stroke-width="1.5"/><text x="311" y="324">INVERTER</text><text x="311" y="344" fill="#5B6B86">3-ph · G99</text>
<rect x="420" y="300" width="120" height="56" rx="4" fill="#fff" stroke="#5B6B86" stroke-width="1.5"/><text x="430" y="324" fill="#0F172A">DIST. BOARD</text><text x="430" y="344" fill="#5B6B86">BS 7671</text>
<rect x="420" y="372" width="120" height="34" rx="4" fill="#fff" stroke="#5B6B86" stroke-width="1.5"/><text x="445" y="394" fill="#0F172A">GRID / DNO</text>
<path d="M270 240 L350 300" fill="none" stroke="#1E4ED8" stroke-width="1.5" stroke-dasharray="4 4"/><path d="M400 328 L420 328" fill="none" stroke="#1E4ED8" stroke-width="1.5"/><path d="M480 356 L480 372" fill="none" stroke="#5B6B86" stroke-width="1.5"/>
<text x="290" y="282" fill="#5B6B86">DC</text><text x="404" y="320" fill="#5B6B86" font-size="11">AC</text>
<text x="30" y="334" fill="#0F172A" font-size="14">FIXED p/kWh ON A SOLEX PPA</text><text x="30" y="354" fill="#5B6B86" font-size="12">or owned outright · tested to BS EN 62446-1</text>
</g></svg>`;
export default {
  id: 'o', name: 'Blueprint', group: 'technical',
  summary: 'The engineering direction in daylight: white, blueprint blue, graph paper and the schematic, with easier reading than the dark version.',
  persona: 'Facilities, engineering and operations managers, including the older ones who find dark sites hard to read.',
  why: 'Direction C proved the technical story works, but dark backgrounds reduce reading comfort for longer text and some buyers associate them with gaming or crypto. A blueprint treatment keeps the schematic, the monospace labels and the standards, on white, so the same competence reads as calm rather than edgy.',
  borrowed: 'Direction C structure; SunPeak process-led navigation; Hoare Lea engineering-consultancy restraint.',
  risk: 'Blue-on-white is the most common corporate scheme. The graph paper and schematic are what keep it distinctive.',
  design: {
    palette: 'White with faint blue graph-paper lines, blueprint blue (#1E4ED8) for buttons, labels and the schematic, slate (#0F172A) text, pale blue (#F3F6FB) bands.',
    type: 'IBM Plex Sans Condensed 700 for uppercase headlines at 40 to 64px, IBM Plex Sans 17px body, IBM Plex Mono for labels and numbers. An engineering family with a mono for data.',
    layout: 'Hero on graph paper with the schematic at right, spec strip beneath, four-step PPA flow, mono-numbered tables.',
    eye: 'Precise and legible. It looks like it was made by people who read standards, which is the point.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  headerCta: 'Book a site survey',
  logo: (onDark = false) => `${marks.grid(onDark ? '#9DB8FF' : '#1E4ED8')}<span style="font-family:'IBM Plex Mono',monospace;font-weight:600;letter-spacing:.04em;font-size:1.05rem">SOLEX_SOLAR</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F3F6FB;--ink:#0F172A;--ink-2:#2B3A52;--muted:#5B6B86;--line:#D6DEEB;--line-strong:#B5C2D8;--brand:#1E4ED8;--brand-ink:#fff;--accent:#1E4ED8;--accent-ink:#fff;--accent-text:#1A43B8;--radius:4px;--radius-lg:8px;--font-display:"IBM Plex Sans Condensed","Arial Narrow",Arial,sans-serif;--font-body:"IBM Plex Sans","Segoe UI",Arial,sans-serif;--font-mono:"IBM Plex Mono",Consolas,monospace;--display-weight:700;--display-tracking:0;--mock-bg:#1b2a4a;--footer-bg:#0F172A;color-scheme:light}
h1,h2{text-transform:uppercase}
h1{font-size:clamp(2.3rem,5.6vw,4.2rem);line-height:.98}
.grid-bg{background-color:#fff;background-image:linear-gradient(rgba(30,78,216,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(30,78,216,.09) 1px,transparent 1px);background-size:40px 40px}
.hero-o{border-bottom:1px solid var(--line)}
.hero-o .container{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-o .container{grid-template-columns:minmax(0,1fr)}}
.hero-o h1 span{color:var(--accent)}
.schem{width:100%;height:auto;background:#fff;border:1px solid var(--line);border-radius:var(--radius-lg);padding:10px}
.spec-strip{border-bottom:1px solid var(--line);background:var(--surface-2)}
.spec-strip ul{display:flex;flex-wrap:wrap;list-style:none}
.spec-strip li{font-family:var(--font-mono);font-size:.82rem;letter-spacing:.04em;padding:14px 18px;border-right:1px solid var(--line);color:var(--ink-2)}
.spec-strip li b{color:var(--accent-text);font-weight:600}
.mono{font-family:var(--font-mono)}
.route-card{border:1px solid var(--line-strong)}
.route-card.featured{background:var(--surface);color:var(--ink);border:2px solid var(--accent)}
.route-card.featured .lede{color:var(--ink-2)}
.step .num{font-family:var(--font-mono);color:var(--accent-text)}
.trust-item .k{font-family:var(--font-mono);font-size:.85rem}
td.num{font-family:var(--font-mono);font-size:.9rem;color:var(--accent-text)}
.p-flow li::before{font-family:var(--font-mono)}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .eyebrow{color:var(--accent-text)}
.cta-band .lead-form{border:1px solid var(--line)}
.page-hero{border-bottom:1px solid var(--line)}
${flowCss}${pageHeroCss}
.site-footer .brand span{color:#fff}`,
  blocks: { pageHero: (t, o) => `<section class="page-hero grid-bg">${pageHeroPhoto(o).replace('<section class="page-hero">', '').replace(/<\/section>$/, '')}</section>`, ppaSteps: (t) => flow(t._C) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-o grid-bg"><div class="container"><div class="stack" style="gap:22px"><span class="eyebrow mono">// commercial PV · 30–200 kW · ${C.company.region}</span><h1>Rooftop PV, <span>engineered and installed</span> by electricians.</h1><p class="lede">30 to 200 kW commercial systems, designed to BS 7671 and BS EN 62446, G99-approved, commissioned and handed over by the two people who quoted it. Buy the system, or take it on a PPA that we fund ourselves.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a site survey</a><a class="btn btn-secondary" href="ppa.html">PPA mechanism</a></div></div>${schematic}</div></section>
<div class="spec-strip"><div class="container" style="padding-inline:0"><ul><li><b>SIZE</b> 30–200 kW</li><li><b>WIRING</b> BS 7671:2018+A2</li><li><b>TEST</b> BS EN 62446-1</li><li><b>GRID</b> G99 / ENA</li><li><b>SITE</b> SMSTS · IPAF · PASMA</li><li><b>FUNDING</b> CAPEX or SOLEX PPA</li></ul></div></div>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// funding routes</span><h2>Two ways to run it</h2></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow mono">// PPA mechanism</span><h2>Solex funds it. You buy the output.</h2></div>${flow(C)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// reference designs</span><h2>30 · 50 · 100 · 200 kW</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow mono">// delivery</span><h2>Survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// qualifications</span><h2>What we hold</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow mono">// FAQ</span><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
