// Direction B — "The Funder": calm, finance-first, serif display, forest green and gold.
const logo = (onDark = false) => `<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="13" fill="none" stroke="${onDark ? '#F3F6F2' : '#124734'}" stroke-width="2"/><path d="M6 19a9 9 0 0 1 18 0z" fill="#C8A24A"/><path d="M4 22h22" stroke="${onDark ? '#F3F6F2' : '#124734'}" stroke-width="2"/></svg><span style="font-family:'Newsreader',Georgia,serif;font-weight:500;font-size:1.35rem;letter-spacing:0">Solex Solar</span>`;

export default {
  id: 'b',
  name: 'The Funder',
  summary: 'Quiet, numbers-led and serif. Reads like a term sheet from a firm that funds its own systems.',
  persona: 'Finance directors and owners who will decide on the numbers, and who need to believe a two-person company can fund a PPA.',
  why: 'The self-funded PPA is the one thing no comparable small installer offers, and the research found the clearest PPA pages (Spirit Energy, Eden Sustainable, Solar X) win on worked examples and plain terms. This direction puts an illustrative term sheet in the hero and a comparison table on the homepage, so the financial offer is the design.',
  borrowed: 'Spirit Energy finance-page structure; Eden Sustainable PPA page order; Geo Green Power calm layout and tax-relief framing; Solar X worked example with stated assumptions.',
  risk: 'Can feel corporate for a two-brother firm. The about page and photography have to carry the human side.',
  group: 'trust',
  design: {
    palette: 'Paper white (#F7F8F6), forest green (#124734) for type and buttons, gold (#C8A24A) as a thin highlight. Green and gold read as banking and land, which suits a company funding its own systems.',
    type: 'Newsreader, a high-contrast serif, at 500 for headlines up to 70px with italic emphasis; Figtree 17px body. Serif for gravity, sans for forms and tables.',
    layout: 'Headline left, an illustrative term sheet right, a four-fact rule line beneath, then a comparison table instead of cards.',
    eye: 'Looks like a document a finance director would file. Calm, numerate, credible.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Figtree:wght@400;500;600;700&display=swap',
  headerCta: 'Request a proposal',
  logo,
  css: `
:root{--bg:#F7F8F6;--surface:#fff;--surface-2:#EEF1EC;--ink:#10221A;--ink-2:#2F4538;--muted:#5E6F66;--line:#D9DFD9;--line-strong:#B9C4BB;--brand:#124734;--brand-ink:#F3F6F2;--accent:#C8A24A;--accent-ink:#10221A;--accent-text:#7F6420;--radius:4px;--radius-lg:8px;--font-display:"Newsreader",Georgia,"Times New Roman",serif;--font-body:"Figtree","Segoe UI",Arial,sans-serif;--display-weight:500;--display-tracking:-0.015em;--mock-bg:#1f2a24;--footer-bg:#0D2E23;color-scheme:light}
h1,h2{font-weight:500}
h1 em,h2 em{font-style:italic;font-weight:400;color:var(--brand)}
.btn{border-radius:3px;font-weight:600}
.btn-primary{background:var(--brand);color:var(--brand-ink);border-color:var(--brand)}
.site-header{background:var(--bg);border-bottom:1px solid var(--line)}
.site-header .container{min-height:80px}
.header-cta{background:transparent;color:var(--brand);border-color:var(--brand)}
.hero-b{padding-block:clamp(56px,8vw,112px);border-bottom:1px solid var(--line)}
.hero-b .container{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(28px,5vw,72px);align-items:center}
@media (max-width:900px){.hero-b .container{grid-template-columns:minmax(0,1fr)}}
.hero-b h1{font-size:clamp(2.4rem,5.6vw,4.4rem);max-width:15ch;line-height:1.05}
.hero-b .lede{font-size:1.2rem}
.sheet{background:var(--surface);border:1px solid var(--line);border-top:4px solid var(--accent);padding:clamp(20px,2.5vw,28px);display:grid;gap:0;box-shadow:0 24px 50px rgba(16,34,26,.08)}
.sheet .t{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding-bottom:12px;border-bottom:1px solid var(--line);margin-bottom:6px}
.sheet .t strong{font-family:var(--font-display);font-size:1.3rem;font-weight:500}
.sheet .t span{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700}
.sheet .r{display:flex;justify-content:space-between;gap:16px;padding:10px 0;border-bottom:1px dotted var(--line);font-size:.95rem}
.sheet .r:last-of-type{border-bottom:0}
.sheet .r b{font-variant-numeric:tabular-nums;font-weight:700;color:var(--brand);text-align:right}
.sheet .r b.big{font-family:var(--font-display);font-size:1.5rem;font-weight:500;line-height:1}
.sheet .fine{font-size:.76rem;color:var(--muted);padding-top:12px;line-height:1.45}
.facts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-block:1px solid var(--line)}
@media (max-width:760px){.facts{grid-template-columns:repeat(2,minmax(0,1fr))}}
.facts div{padding:22px 18px;border-right:1px solid var(--line);display:grid;gap:4px}
.facts div:last-child{border-right:0}
@media (max-width:760px){.facts div:nth-child(2){border-right:0}.facts div:nth-child(-n+2){border-bottom:1px solid var(--line)}}
.facts .n{font-family:var(--font-display);font-size:1.7rem;font-weight:500;line-height:1.05}
.facts .l{font-size:.85rem;color:var(--muted)}
.compare-table th{background:transparent;color:var(--ink);font-family:var(--font-display);font-size:1.1rem;letter-spacing:0;text-transform:none;font-weight:500}
.compare-table th:nth-child(3){color:var(--brand)}
.compare-table td:nth-child(3){background:#F1F5EE}
.table-wrap{border-radius:var(--radius-lg)}
.steps-b{list-style:none;display:grid;gap:0;counter-reset:s;max-width:860px}
.steps-b li{display:grid;grid-template-columns:72px 1fr;gap:18px;padding:22px 0;border-top:1px solid var(--line);counter-increment:s}
.steps-b li:last-child{border-bottom:1px solid var(--line)}
.steps-b li::before{content:"0" counter(s);font-family:var(--font-display);font-size:2.4rem;line-height:1;color:var(--accent);font-weight:400}
.steps-b h3{font-size:1.25rem;font-weight:500;margin-bottom:6px}
.steps-b p{color:var(--ink-2)}
.sector-list{columns:3;column-gap:40px;list-style:none}
@media (max-width:860px){.sector-list{columns:2}}
@media (max-width:560px){.sector-list{columns:1}}
.sector-list li{break-inside:avoid;padding:14px 0;border-bottom:1px solid var(--line);display:grid;gap:4px}
.sector-list b{font-family:var(--font-display);font-size:1.15rem;font-weight:500}
.sector-list span{font-size:.85rem;color:var(--muted)}
.step{border:0;border-top:1px solid var(--line);border-radius:0;background:transparent;padding:18px 0 0}
.step .num{color:var(--accent-text)}
.route-card{border-radius:var(--radius-lg)}
.route-card.featured{background:var(--surface);color:var(--ink);border:1px solid var(--brand);border-top:4px solid var(--brand)}
.route-card.featured .btn{background:var(--brand);color:var(--brand-ink);border-color:var(--brand)}
.route-card.featured .lede{color:var(--ink-2)}
.page-hero{border-bottom:1px solid var(--line);background:var(--surface)}
.page-hero .container{grid-template-columns:1.1fr .9fr;align-items:end}
@media (max-width:900px){.page-hero .container{grid-template-columns:minmax(0,1fr)}}
.page-hero .photo-frame{aspect-ratio:3/2}
.cta-band{background:var(--surface-2);color:var(--ink)}
.cta-band .eyebrow{color:var(--accent-text)}
.cta-band .lead-form{border:1px solid var(--line)}
.pull{font-family:var(--font-display);font-size:clamp(1.4rem,2.6vw,2rem);font-weight:400;font-style:italic;line-height:1.3;max-width:30ch;color:var(--brand)}
`,
  blocks: {
    pageHero(t, o) {
      return `<section class="page-hero"><div class="container"><div class="stack"><span class="eyebrow">${o.eyebrow}</span><h1>${o.title}</h1><p class="lede">${o.lede}</p>${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div>${o.photo ? `<div class="photo-frame"><img src="../assets/photos/${o.photo}" alt=""><span class="photo-caption">Placeholder photo</span></div>` : ''}</div></section>`;
    },
    ppaSteps(t) {
      const C = t._C;
      return `<ol class="steps-b">${C.ppa.steps.map(s => `<li><div><h3>${s.t}</h3><p>${s.d}</p></div></li>`).join('')}</ol>`;
    },
    sectorsGrid(t, limit = 8) {
      const C = t._C;
      return `<ul class="sector-list">${C.sectors.slice(0, limit).map(s => `<li><b>${s.t}</b><span>Typical fit ${s.fit}</span></li>`).join('')}</ul>`;
    },
  },
  home({ B, C, photoFrame }) {
    this._C = C;
    const cmp = C.ppa.compare;
    return `
<section class="hero-b"><div class="container"><div class="stack" style="gap:24px"><span class="eyebrow">Commercial solar · 30 to 200 kW</span><h1>Commercial solar, <em>funded by the people who install it.</em></h1><p class="lede">Solex Solar designs, installs, owns and maintains rooftop systems between 30 and 200 kW. Pay nothing up front and buy the electricity at a fixed rate below your grid tariff, or buy the system and keep every kilowatt-hour.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Request a proposal</a><a class="btn btn-secondary" href="ppa.html">Read the PPA terms</a></div></div>
<aside class="sheet" aria-label="Illustrative PPA term sheet"><div class="t"><strong>Illustrative 100 kW PPA</strong><span>Sample terms</span></div><div class="r"><span>Your capital outlay</span><b class="big">£0</b></div><div class="r"><span>Price of solar power, year one</span><b>${C.ph('12p')} / kWh</b></div><div class="r"><span>Typical grid rate avoided</span><b>25p / kWh</b></div><div class="r"><span>Saving, year one</span><b>≈ £8,200</b></div><div class="r"><span>Term</span><b>${C.ph('20 years')}</b></div><div class="r"><span>Maintenance, monitoring, insurance</span><b>Included</b></div><div class="r"><span>At the end of the term</span><b>System is yours</b></div><p class="fine">Modelled example, not an installed project. Assumes 900 kWh per kW per year and 70% on-site use. Your proposal is modelled on your own half-hourly data.</p></aside></div></section>
<div class="container"><div class="facts"><div><span class="n">30–200 kW</span><span class="l">commercial rooftop systems</span></div><div><span class="n">Fixed p/kWh</span><span class="l">for the whole term</span></div><div><span class="n">Own funds</span><span class="l">we are the installer and the funder</span></div><div><span class="n">Yours at the end</span><span class="l">system transfers to you</span></div></div></div>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two routes</span><h2>Buy outright, or a Solex PPA</h2><p class="lede">The same system and the same installers either way. This is how the two routes compare for a typical 100 kW site.</p></div><div class="table-wrap compare-table"><table><thead><tr>${cmp[0].map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${cmp.slice(1).map(r => `<tr>${r.map((c, i) => i === 0 ? `<td><strong>${c}</strong></td>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="btn-row" style="margin-top:22px"><a class="btn btn-secondary" href="commercial-solar.html">What is included when you buy</a><a class="btn btn-primary" href="ppa.html">How the PPA works</a></div></div></section>
<section class="section band"><div class="container two-col"><div class="stack"><span class="eyebrow">The Solex PPA</span><h2>Four steps, <em>no capital.</em></h2><p class="lede">We fund a small number of systems each year from our own money and install them ourselves. You buy the power; we look after the roof.</p>${B(this, 'ppaSteps')}</div><div class="stack"><span class="eyebrow">Who it suits</span><h2>Sites that use power during the day</h2><ul class="checklist">${C.ppa.eligibility.map(e => `<li>${e}</li>`).join('')}</ul><p class="pull">"If buying is the better deal for your business, we will tell you so in the proposal."</p></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Scale, cost and return at four sizes</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Sectors</span><h2>Where the numbers work best</h2></div>${B(this, 'sectorsGrid', 8)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">The process</span><h2>Survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Request a proposal', 'Send us a recent bill or your half-hourly data. Within five working days you will have a modelled proposal for buying, and the PPA rate if the site qualifies, with every assumption written down.')}`;
  },
};
