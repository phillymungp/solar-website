// Direction D — "Sunline": friendly, rounded, sun-yellow and deep blue, with a recurring arc device. Family business, SMEs and farms.
const logo = (onDark = false) => `<svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true"><path d="M4 24a14 14 0 0 1 28 0z" fill="#FFC83D"/><rect x="2" y="26" width="32" height="4" rx="2" fill="${onDark ? '#fff' : '#15346B'}"/><g stroke="#FFC83D" stroke-width="3" stroke-linecap="round"><path d="M18 3v4M7 8l3 3M29 8l-3 3"/></g></svg><span style="text-transform:lowercase;letter-spacing:-.02em;font-weight:700">solex solar</span>`;

const arc = (cls = '') => `<svg class="arc ${cls}" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 220 C 300 40, 900 40, 1220 220" fill="none" stroke="#FFC83D" stroke-width="34" stroke-linecap="round"/></svg>`;

export default {
  id: 'd',
  name: 'Sunline',
  summary: 'Warm, rounded and recognisable: a yellow sunline arc runs through every page. The family-business direction.',
  persona: 'SME owners, farmers, sports clubs and schools: people who want a local firm they can picture, not a corporate.',
  why: 'Eden Sustainable is the only UK site in the research with a brand device strong enough to be recognised without photography, and Mouthy Marketing’s UK critique is that solar sites are all drone shots with no people. This direction gives Solex a shape it owns before it has a single project photo, puts the two brothers at the centre, and keeps the PPA simple: we fit it, we own it, you pay less per kWh.',
  borrowed: 'Eden Sustainable brand arc and PPA explainer; Zenergi arch device; Select Electrical PPA page with FAQs; Todae feasibility-check CTA.',
  risk: 'The friendliest direction can read as domestic. The commercial-only line and the 30 to 200 kW range must stay prominent.',
  group: 'approachable',
  design: {
    palette: 'White with sky tint (#F1F6FC) bands, deep blue (#15346B) type, sun yellow (#FFC83D) for the arc device and the primary button with dark text.',
    type: 'Sora 700 headlines at 40 to 60px with a yellow highlight stroke, Nunito Sans 17px body. Geometric headline over a soft, rounded body face.',
    layout: 'A yellow arc sweeps under the hero and recurs as a divider and in the footer; photo in an organic blob; three-tile PPA strip.',
    eye: 'Warm and recognisable. The arc is memorable before a single project photo exists.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;1,6..12,400&display=swap',
  headerCta: 'Book a free roof check',
  logo,
  css: `
:root{--bg:#FFFFFF;--surface:#fff;--surface-2:#F1F6FC;--ink:#132B4F;--ink-2:#2F4A75;--muted:#5F7390;--line:#D8E3F0;--line-strong:#B9CBE2;--brand:#15346B;--brand-ink:#fff;--accent:#FFC83D;--accent-ink:#132B4F;--accent-text:#8A6200;--radius:14px;--radius-lg:24px;--font-display:"Sora","Segoe UI",Arial,sans-serif;--font-body:"Nunito Sans","Segoe UI",Arial,sans-serif;--display-weight:700;--display-tracking:-0.025em;--mock-bg:#1d2d4a;--footer-bg:#15346B;color-scheme:light}
.btn{border-radius:999px;padding:.9em 1.5em}
.btn-primary{box-shadow:0 8px 20px rgba(255,200,61,.35)}
.site-header{border-bottom:0;box-shadow:0 1px 0 var(--line)}
.hero-d{position:relative;overflow:hidden;background:var(--surface-2)}
.hero-d .arc{position:absolute;left:0;right:0;bottom:-20px;width:100%;height:clamp(120px,22vw,260px);opacity:.95}
.hero-d .container{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-d .container{grid-template-columns:minmax(0,1fr)}}
.hero-d h1{max-width:13ch}
.hero-d h1 mark{background:linear-gradient(transparent 60%,var(--accent) 60%);color:inherit;padding:0 .08em}
.hero-d .lede{font-size:1.2rem}
.hero-d .visual{position:relative;max-width:520px;margin-inline:auto;width:100%}
.hero-d .blob{aspect-ratio:1;border-radius:46% 54% 52% 48% / 44% 46% 54% 56%;overflow:hidden;position:relative;box-shadow:0 30px 60px rgba(19,43,79,.18)}
.hero-d .blob img{width:100%;height:100%;object-fit:cover}
.hero-d .badge{position:absolute;right:-6px;bottom:2%;background:var(--accent);color:var(--accent-ink);border-radius:999px;width:124px;height:124px;display:grid;place-items:center;text-align:center;font-family:var(--font-display);font-weight:800;font-size:.8rem;line-height:1.15;padding:12px;transform:rotate(-8deg);box-shadow:0 12px 30px rgba(19,43,79,.2)}
.hero-d .badge small{display:block;font-weight:600;font-size:.7rem;opacity:.85}
.strip3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:760px){.strip3{grid-template-columns:minmax(0,1fr)}}
.strip3 div{display:grid;gap:8px;padding:22px;border-radius:var(--radius-lg);background:var(--surface);border:2px solid var(--line);text-align:center;justify-items:center}
.strip3 .ic{width:56px;height:56px;border-radius:50%;background:var(--accent);display:grid;place-items:center;font-family:var(--font-display);font-weight:800;color:var(--accent-ink);font-size:1.3rem}
.strip3 h3{font-size:1.1rem}
.strip3 p{font-size:.93rem;color:var(--ink-2)}
.route-card{border:2px solid var(--line)}
.route-card.featured{background:var(--brand)}
.route-card.featured .lede{color:#D9E4F5}
.route-card.featured li::before{background:var(--accent)}
.steps.horizontal{position:relative}
.step{border:2px solid var(--line);border-radius:var(--radius-lg)}
.step .num{display:inline-grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--accent);color:var(--accent-ink);font-family:var(--font-display);font-weight:800;font-size:.95rem;letter-spacing:0}
.step .num::before{content:counter(step)}
.sector-card{background:var(--surface-2);border:0;border-radius:var(--radius-lg)}
.sector-card .fit{color:var(--accent-text)}
.cards4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:960px){.cards4{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.cards4{grid-template-columns:minmax(0,1fr)}}
.syscard{display:grid;gap:10px;padding:22px;border-radius:var(--radius-lg);background:var(--surface);border:2px solid var(--line);align-content:start}
.syscard .kw{font-family:var(--font-display);font-size:2.2rem;font-weight:800;letter-spacing:-.03em;line-height:1;color:var(--brand)}
.syscard .kw small{font-size:1rem;font-weight:700;color:var(--muted);letter-spacing:0}
.syscard dl{display:grid;grid-template-columns:1fr auto;gap:6px 12px;margin:0;font-size:.92rem}
.syscard dt{color:var(--muted)}
.syscard dd{margin:0;font-weight:700;text-align:right;font-variant-numeric:tabular-nums}
.syscard .ppa{margin-top:6px;padding:10px 12px;border-radius:12px;background:var(--surface-2);font-size:.9rem}
.syscard .ppa b{color:var(--accent-text)}
.arc-divider{height:70px;position:relative;overflow:hidden}
.arc-divider .arc{position:absolute;inset:0;width:100%;height:100%;opacity:.35}
.founders .photo{border-radius:var(--radius-lg)}
.family{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,56px);align-items:center}
@media (max-width:900px){.family{grid-template-columns:minmax(0,1fr)}}
.family .pair{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.family .pair .photo-frame{aspect-ratio:3/4;border-radius:var(--radius-lg)}
.family .pair .photo-frame:last-child{transform:translateY(28px)}
.faq details{border:2px solid var(--line);border-radius:var(--radius)}
.cta-band{background:var(--brand)}
.cta-band .lead-form{border-radius:var(--radius-lg)}
.page-hero{background:var(--surface-2);position:relative;overflow:hidden}
.page-hero .arc{position:absolute;left:0;right:0;bottom:-30px;width:100%;height:140px;opacity:.8}
.page-hero .container{position:relative;grid-template-columns:1.1fr .9fr;align-items:center}
@media (max-width:900px){.page-hero .container{grid-template-columns:minmax(0,1fr)}}
.page-hero .photo-frame{aspect-ratio:4/3;border-radius:var(--radius-lg)}
.site-footer{position:relative;overflow:hidden}
.site-footer .arc{position:absolute;left:0;right:0;top:-120px;width:100%;height:220px;opacity:.25;pointer-events:none}
.site-footer .container{position:relative}
.site-footer .brand span{color:#fff}
.trust-item{border:2px solid var(--line);border-radius:var(--radius)}
`,
  blocks: {
    pageHero(t, o) {
      return `<section class="page-hero">${arc()}<div class="container"><div class="stack"><span class="eyebrow">${o.eyebrow}</span><h1>${o.title}</h1><p class="lede">${o.lede}</p>${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div>${o.photo ? `<div class="photo-frame"><img src="../assets/photos/${o.photo}" alt=""><span class="photo-caption">Placeholder photo</span></div>` : ''}</div></section>`;
    },
    systemsTable(t) {
      const C = t._C; const f = (n) => n.toLocaleString('en-GB');
      return `<div class="cards4">${C.systems.rows.map(r => `<article class="syscard"><div class="kw">${r.kw}<small> kW</small></div><dl><dt>Panels</dt><dd>${r.panels}</dd><dt>Roof needed</dt><dd>~${f(r.area)} m²</dd><dt>Generates</dt><dd>~${f(r.gen)} kWh/yr</dd><dt>Saves if bought</dt><dd>~£${f(r.save)}/yr</dd><dt>Cost to buy</dt><dd>~£${f(r.cost)}</dd><dt>Payback</dt><dd>${r.payback} yrs</dd></dl><div class="ppa">On a Solex PPA: <b>£0 up front</b>, saves ~£${f(r.ppa)} a year</div></article>`).join('')}</div><p class="note" style="margin-top:14px">${C.systems.note}</p>`;
    },
  },
  home({ B, C, photoFrame }) {
    this._C = C;
    return `
<section class="hero-d">${arc()}<div class="container"><div class="stack" style="gap:22px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Your roof could be <mark>paying your electricity bill.</mark></h1><p class="lede">We are two brothers who fit commercial solar for a living. Buy a system from us, or let us fund it and simply buy the power it makes at a fixed rate.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free roof check</a><a class="btn btn-secondary" href="ppa.html">How the PPA works</a></div><ul class="inline-list"><li>Commercial only</li><li>Qualified electricians</li><li>SMSTS · IPAF · PASMA</li><li>Fully insured</li></ul></div><div class="visual"><div class="blob">${photoFrame(C.photos.carry, 'Installer carrying a solar panel on a roof', 'Placeholder photo')}</div><div class="badge">We fund it<small>no capital outlay</small></div></div></div></section>
<section class="section"><div class="container"><div class="section-head center"><span class="eyebrow">The Solex PPA, in one line</span><h2>We fit it. We own it. You pay less per kWh.</h2></div><div class="strip3"><div><span class="ic">1</span><h3>We fit it</h3><p>Our own two-man team designs and installs the system on your roof, at our cost.</p></div><div><span class="ic">2</span><h3>We own it</h3><p>Solex Solar owns, insures, monitors and maintains it for the whole term.</p></div><div><span class="ic">3</span><h3>You pay less per kWh</h3><p>You buy the solar power at a fixed price below your grid rate. At the end, the system is yours.</p></div></div><div class="btn-row" style="justify-content:center;margin-top:26px"><a class="btn btn-brand" href="ppa.html">See the sample terms</a></div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Or buy it outright</span><h2>Two ways to go solar</h2><p class="lede">Same panels, same brothers, same aftercare. The difference is who pays for the system and who owns it.</p></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What fits on a roof like yours</h2></div>${B(this, 'systemsTable')}</div></section>
<div class="arc-divider">${arc()}</div>
<section class="section"><div class="container family"><div class="stack"><span class="eyebrow">A family business</span><h2>${C.about.headline}</h2><p class="lede">${C.about.story[0]}</p><p class="lede" style="font-size:1.02rem">${C.about.story[1]}</p><div class="btn-row"><a class="btn btn-secondary" href="about.html">Meet Phil and ${C.ph('Brother')}</a></div></div><div class="pair">${photoFrame(C.photos.portrait, 'Placeholder portrait')}${photoFrame(C.photos.flatroof, 'Placeholder portrait')}</div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Six steps from survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Sectors</span><h2>Roofs that work hardest during the day</h2></div>${B(this, 'sectorsGrid', 6)}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">What we hold</span><h2>Qualified, insured, on site ourselves</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Questions we get asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Book a free roof check', 'About an hour on site. You get a modelled proposal for buying, and the PPA rate if your site qualifies, within five working days.')}`;
  },
};
