// Direction E — "Check Your Roof": product-like, assessment-first. The hero is a three-question checker.
const logo = (onDark = false) => `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#1F5EFF"/><path d="M18 5 8 18h7l-1 9 10-13h-7z" fill="#fff"/></svg><span>Solex<span style="font-weight:500;opacity:.8"> Solar</span></span>`;

export default {
  id: 'e',
  name: 'Check Your Roof',
  summary: 'Light, product-like and conversion-first. The homepage opens with a three-question checker that gives an indicative answer on the spot.',
  persona: 'Busy owners and managers who want a quick, honest answer before they talk to anyone.',
  why: 'The research found dedicated, one-decision pages convert several times better than brochure homepages, that cutting a form to three fields lifted completions by 145% in one solar case, and that Absolar’s address-only "Check my building" is the lowest-friction first step in the UK sample. Because Solex only wants 30 to 200 kW sites with daytime load, a checker that qualifies the lead is honest as well as effective, and it works with no portfolio at all.',
  borrowed: 'Absolar assessment-first hero; Solar X bill slider and stated assumptions; SunPeak navigation of writable pages; Smart Ease eligibility thresholds.',
  risk: 'A tool-like site can over-promise if the indicative figures are not clearly labelled, and the checker needs real tariff and yield assumptions behind it.',
  fonts: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
  headerCta: 'Check my roof',
  logo,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F2F5FA;--ink:#0E1B2E;--ink-2:#2B3B55;--muted:#5D6B82;--line:#DCE3EE;--line-strong:#C3CEDE;--brand:#0E1B2E;--brand-ink:#fff;--accent:#1F5EFF;--accent-ink:#fff;--accent-text:#1646C2;--radius:10px;--radius-lg:16px;--font-display:"Manrope","Segoe UI",Arial,sans-serif;--font-body:"Manrope","Segoe UI",Arial,sans-serif;--display-weight:800;--display-tracking:-0.03em;--mock-bg:#1a2437;--footer-bg:#0E1B2E;color-scheme:light}
.site-header .container{min-height:64px}
.nav a{font-size:.9rem}
.hero-e{background:var(--surface-2);border-bottom:1px solid var(--line)}
.hero-e .container{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,64px);align-items:center;padding-block:clamp(44px,6vw,88px)}
@media (max-width:900px){.hero-e .container{grid-template-columns:minmax(0,1fr)}}
.hero-e h1{max-width:15ch;font-size:clamp(2.1rem,4.8vw,3.6rem)}
.hero-e .lede{font-size:1.12rem}
.checker{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:clamp(20px,2.5vw,28px);display:grid;gap:14px;box-shadow:0 24px 60px rgba(14,27,46,.1)}
.checker h2{font-size:1.2rem}
.checker label{display:grid;gap:6px;font-size:.85rem;font-weight:700}
.checker input,.checker select{width:100%;padding:.75em .85em;border:1.5px solid var(--line-strong);border-radius:var(--radius);background:#fff;font-size:1rem}
.checker .seg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
.checker .seg label{position:relative}
.checker .seg input{position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;left:0;top:0;margin:0}
.checker .seg span{display:block;text-align:center;padding:.65em .4em;border:1.5px solid var(--line-strong);border-radius:var(--radius);font-weight:700;font-size:.85rem;cursor:pointer}
.checker .seg input:checked+span{background:var(--accent);color:#fff;border-color:var(--accent)}
.checker .seg input:focus-visible+span{outline:3px solid var(--accent);outline-offset:2px}
.result{display:grid;gap:10px;padding:16px;border-radius:var(--radius);background:var(--surface-2);border:1px dashed var(--line-strong)}
.result .r{display:flex;justify-content:space-between;gap:12px;font-size:.95rem}
.result .r b{font-variant-numeric:tabular-nums;text-align:right}
.result .verdict{font-weight:800;color:var(--accent-text)}
.result .fine{font-size:.76rem;color:var(--muted)}
.deliver{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:760px){.deliver{grid-template-columns:minmax(0,1fr)}}
.deliver div{display:grid;gap:8px;padding:22px;border-radius:var(--radius-lg);border:1px solid var(--line);background:var(--surface)}
.deliver .k{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-text);font-weight:800}
.deliver h3{font-size:1.1rem}
.deliver p{font-size:.93rem;color:var(--ink-2)}
.route-card{box-shadow:0 10px 30px rgba(14,27,46,.05)}
.route-card.featured{background:var(--accent);color:#fff;border-color:var(--accent)}
.route-card.featured .lede{color:#E3EBFF}
.route-card.featured li::before{background:#fff}
.route-card.featured .btn{background:#fff;color:var(--accent-text);border-color:#fff}
.step{border:1px solid var(--line)}
.step .num{color:var(--accent-text)}
.cards4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:960px){.cards4{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.cards4{grid-template-columns:minmax(0,1fr)}}
.syscard{display:grid;gap:10px;padding:22px;border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);align-content:start}
.syscard .kw{font-size:2rem;font-weight:800;letter-spacing:-.03em;line-height:1}
.syscard .kw small{font-size:1rem;color:var(--muted);letter-spacing:0;font-weight:700}
.syscard dl{display:grid;grid-template-columns:1fr auto;gap:6px 12px;margin:0;font-size:.9rem}
.syscard dt{color:var(--muted)}
.syscard dd{margin:0;font-weight:700;text-align:right;font-variant-numeric:tabular-nums}
.syscard .btn{margin-top:6px}
.chips{display:flex;flex-wrap:wrap;gap:10px;list-style:none}
.chips a{display:inline-block;padding:10px 16px;border-radius:999px;border:1px solid var(--line-strong);text-decoration:none;font-weight:700;font-size:.92rem;background:var(--surface)}
.chips a:hover{border-color:var(--accent);color:var(--accent-text)}
.page-hero{background:var(--surface-2);border-bottom:1px solid var(--line)}
.page-hero .container{grid-template-columns:1.1fr .9fr;align-items:center}
@media (max-width:900px){.page-hero .container{grid-template-columns:minmax(0,1fr)}}
.page-hero .photo-frame{aspect-ratio:16/10}
.cta-band{background:var(--brand)}
.cta-band .eyebrow{color:#9DB8FF}
.site-footer .brand span{color:#fff}
.trust-item{border-radius:var(--radius)}
`,
  js: `
(function(){
  var f=document.getElementById('checker');if(!f)return;
  var out={size:document.getElementById('r-size'),gen:document.getElementById('r-gen'),save:document.getElementById('r-save'),ppa:document.getElementById('r-ppa'),verdict:document.getElementById('r-verdict')};
  function fmt(n){return '£'+Math.round(n).toLocaleString('en-GB');}
  function run(){
    var spend=parseFloat(f.spend.value)||0; var roof=f.roof.value; var route=f.querySelector('input[name=route]:checked').value;
    var kwh=spend*12/0.25; var kw=Math.round(kwh*0.5/900/5)*5; if(kw<30)kw=30; if(kw>200)kw=200;
    var gen=kw*900, used=gen*0.7, saveBuy=used*0.25+ (gen-used)*0.05, savePpa=used*(0.25-0.12);
    var ok=kw>=50 && roof!=='tiled';
    out.size.textContent=kw+' kW ('+Math.round(kw*2.2)+' panels, ~'+Math.round(kw*5)+' m²)';
    out.gen.textContent='~'+Math.round(gen).toLocaleString('en-GB')+' kWh a year';
    out.save.textContent='~'+fmt(saveBuy)+' a year';
    out.ppa.textContent= ok ? '~'+fmt(savePpa)+' a year, £0 up front' : 'Below our 50 kW PPA minimum';
    if(spend<=0){out.verdict.textContent='Enter your monthly spend to see an indicative size.';return;}
    out.verdict.textContent= route==='ppa' ? (ok?'A Solex PPA looks possible. Book a survey to confirm.':'Buying looks the better route at this size.') : route==='buy' ? 'Buying looks viable. Payback is usually 4 to 6 years at this size.' : (ok?'Both routes are open to you. We will model both.':'Buying is the route at this size; we will model it for you.');
  }
  f.addEventListener('input',run);f.addEventListener('change',run);f.addEventListener('submit',function(e){e.preventDefault();run();});run();
})();`,
  blocks: {
    pageHero(t, o) {
      return `<section class="page-hero"><div class="container"><div class="stack"><span class="eyebrow">${o.eyebrow}</span><h1>${o.title}</h1><p class="lede">${o.lede}</p>${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div>${o.photo ? `<div class="photo-frame"><img src="../assets/photos/${o.photo}" alt=""><span class="photo-caption">Placeholder photo</span></div>` : ''}</div></section>`;
    },
    systemsTable(t) {
      const C = t._C; const f = (n) => n.toLocaleString('en-GB');
      return `<div class="cards4">${C.systems.rows.map(r => `<article class="syscard"><div class="kw">${r.kw}<small> kW</small></div><dl><dt>Panels</dt><dd>${r.panels}</dd><dt>Roof</dt><dd>~${f(r.area)} m²</dd><dt>Generation</dt><dd>~${f(r.gen)} kWh/yr</dd><dt>Saving if bought</dt><dd>~£${f(r.save)}/yr</dd><dt>Cost to buy</dt><dd>~£${f(r.cost)}</dd><dt>On a PPA</dt><dd>~£${f(r.ppa)}/yr</dd></dl><a class="btn btn-secondary" href="contact.html">Check my roof</a></article>`).join('')}</div><p class="note" style="margin-top:14px">${C.systems.note}</p>`;
    },
  },
  home({ B, C, photoFrame }) {
    this._C = C;
    return `
<section class="hero-e"><div class="container"><div class="stack" style="gap:20px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Could a 30 to 200 kW system pay for itself on your roof?</h1><p class="lede">Answer three questions for an indicative system size, saving, and whether a fully funded Solex PPA fits. No sales calls unless you ask for one.</p><ul class="inline-list"><li>Commercial only</li><li>Two directors, both electricians</li><li>PPA funded by us</li><li>Fully insured · SMSTS</li></ul></div>
<form class="checker" id="checker" novalidate><h2>Check your roof in 30 seconds</h2><label for="c-spend">Monthly electricity spend (£)<input id="c-spend" name="spend" type="number" inputmode="numeric" min="0" step="100" value="2500"></label><label for="c-roof">Roof type<select id="c-roof" name="roof"><option value="steel">Steel profile (warehouse, factory, barn)</option><option value="flat">Flat membrane</option><option value="fibre">Fibre cement</option><option value="tiled">Tiled</option></select></label><div><span style="display:block;font-size:.85rem;font-weight:700;margin-bottom:6px">What are you considering?</span><div class="seg"><label><input type="radio" name="route" value="unsure" checked><span>Not sure</span></label><label><input type="radio" name="route" value="buy"><span>Buying</span></label><label><input type="radio" name="route" value="ppa"><span>Solex PPA</span></label></div></div><div class="result" aria-live="polite"><div class="r"><span>Indicative system</span><b id="r-size">—</b></div><div class="r"><span>Generation</span><b id="r-gen">—</b></div><div class="r"><span>Saving if you buy</span><b id="r-save">—</b></div><div class="r"><span>Saving on a Solex PPA</span><b id="r-ppa">—</b></div><p class="verdict" id="r-verdict">—</p><p class="fine">Indicative only. Assumes a 25p grid rate, 900 kWh per kW per year and 70% on-site use. The survey uses your real half-hourly data.</p></div><a class="btn btn-primary" href="contact.html">Book a free site survey</a></form></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">What you get back</span><h2>A straight answer within five working days</h2></div><div class="deliver"><div><span class="k">Step 1</span><h3>Free site survey</h3><p>About an hour on site: roof, structure, intake and your half-hourly data. Phil or ${C.ph('Brother')} does it personally.</p></div><div><span class="k">Step 2</span><h3>Modelled proposal</h3><p>System size, generation, savings and payback for buying, with every assumption written down.</p></div><div><span class="k">Step 3</span><h3>PPA rate, if you qualify</h3><p>If the site suits a PPA, the fixed p/kWh rate and the term, funded by Solex Solar. If buying is better, we say so.</p></div></div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Two routes</span><h2>Buy it, or let us fund it</h2></div>${B(this, 'routes')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Four sizes, modelled</h2></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container two-col"><div class="stack"><span class="eyebrow">The Solex PPA</span><h2>No capital. Fixed price per kWh. Yours at the end.</h2><p class="lede">We fund a small number of systems a year from our own money and install them ourselves. You buy the power; we look after the roof for the whole term.</p><div class="btn-row"><a class="btn btn-primary" href="ppa.html">How it works and who qualifies</a></div></div>${B(this, 'ppaSteps', false)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Sectors</span><h2>Where solar pays back fastest</h2></div><ul class="chips">${C.sectors.map(s => `<li><a href="sectors.html">${s.t}</a></li>`).join('')}</ul></div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Qualifications</span><h2>Who is doing the work</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we get asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand', 'Book a free site survey', 'You get a modelled proposal for buying, and the PPA rate if your site qualifies, within five working days.')}`;
  },
};
