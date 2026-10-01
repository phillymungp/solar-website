// Reusable building blocks for the homepage directions F–T. Each part returns HTML; its CSS is appended by the theme.
const f = (n) => n.toLocaleString('en-GB');

// ---------- logo marks ----------
export const marks = {
  tile: (a, b, c = '#fff') => `<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="7" fill="${a}"/><path d="M4 30a26 26 0 0 1 26-26v6a20 20 0 0 0-20 20z" fill="${b}"/><g fill="${c}" opacity=".92"><rect x="18" y="18" width="5" height="5"/><rect x="25" y="18" width="5" height="5"/><rect x="18" y="25" width="5" height="5"/><rect x="25" y="25" width="5" height="5"/></g></svg>`,
  sun: (a, b) => `<svg width="34" height="34" viewBox="0 0 36 36" aria-hidden="true"><path d="M4 24a14 14 0 0 1 28 0z" fill="${a}"/><rect x="2" y="26" width="32" height="4" rx="2" fill="${b}"/><g stroke="${a}" stroke-width="3" stroke-linecap="round"><path d="M18 3v4M7 8l3 3M29 8l-3 3"/></g></svg>`,
  grid: (a, b) => `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="3" fill="none" stroke="${a}" stroke-width="2"/><g fill="${a}"><rect x="6" y="6" width="8" height="8"/><rect x="18" y="6" width="8" height="8"/><rect x="6" y="18" width="8" height="8"/><rect x="18" y="18" width="8" height="8" opacity=".45"/></g></svg>`,
  bolt: (a, b = '#fff') => `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="${a}"/><path d="M18 5 8 18h7l-1 9 10-13h-7z" fill="${b}"/></svg>`,
  ring: (a, b) => `<svg width="32" height="32" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="13" fill="none" stroke="${a}" stroke-width="2"/><path d="M6 19a9 9 0 0 1 18 0z" fill="${b}"/><path d="M4 22h22" stroke="${a}" stroke-width="2"/></svg>`,
  dot: (a) => `<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="14" fill="${a}"/><circle cx="15" cy="15" r="6" fill="#fff"/></svg>`,
  leaf: (a, b) => `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 28C4 12 14 4 28 4c0 14-8 24-24 24z" fill="${a}"/><path d="M6 26 26 6" stroke="${b}" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  panel: (a, b) => `<svg width="38" height="30" viewBox="0 0 38 30" aria-hidden="true"><rect x="1" y="1" width="36" height="22" rx="2" fill="${a}" stroke="${b}" stroke-width="1.5"/><g stroke="${b}" stroke-width="1.2"><path d="M13 1v22M25 1v22M1 12h36"/></g><path d="M19 23v6M12 29h14" stroke="${b}" stroke-width="2" stroke-linecap="round"/></svg>`,
  square: (a, b = '#fff') => `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" fill="${a}"/><path d="M8 22a10 10 0 0 1 16-8" fill="none" stroke="${b}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="14" r="3" fill="${b}"/></svg>`,
};
export const word = (text, extra = '') => `<span style="${extra}">${text}</span>`;

// ---------- system size cards ----------
export const syscards = (C, cta = null) => `<div class="p-cards4">${C.systems.rows.map(r => `<article class="p-syscard"><div class="kw">${r.kw}<small> kW</small></div><dl><dt>Panels</dt><dd>${r.panels}</dd><dt>Roof needed</dt><dd>~${f(r.area)} m²</dd><dt>Generates</dt><dd>~${f(r.gen)} kWh/yr</dd><dt>Saves if bought</dt><dd>~£${f(r.save)}/yr</dd><dt>Cost to buy</dt><dd>~£${f(r.cost)}</dd><dt>Payback</dt><dd>${r.payback} yrs</dd></dl><div class="ppa">Solex PPA: <b>£0 up front</b>, ~£${f(r.ppa)}/yr saved</div>${cta ? `<a class="btn btn-secondary" href="${cta.href}">${cta.label}</a>` : ''}</article>`).join('')}</div><p class="note" style="margin-top:14px">${C.systems.note}</p>`;
export const syscardsCss = `
.p-cards4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:960px){.p-cards4{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.p-cards4{grid-template-columns:minmax(0,1fr)}}
.p-syscard{display:grid;gap:10px;padding:22px;border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);align-content:start}
.p-syscard .kw{font-family:var(--font-display);font-size:2.1rem;font-weight:800;letter-spacing:-.03em;line-height:1}
.p-syscard .kw small{font-size:1rem;font-weight:700;color:var(--muted);letter-spacing:0}
.p-syscard dl{display:grid;grid-template-columns:1fr auto;gap:6px 12px;margin:0;font-size:.92rem}
.p-syscard dt{color:var(--muted)}
.p-syscard dd{margin:0;font-weight:700;text-align:right;font-variant-numeric:tabular-nums}
.p-syscard .ppa{margin-top:4px;padding:10px 12px;border-radius:var(--radius);background:var(--surface-2);font-size:.9rem}
.p-syscard .ppa b{color:var(--accent-text,var(--accent))}
.p-syscard .btn{margin-top:4px}`;

// ---------- buy vs PPA comparison table ----------
export const compareTable = (C) => { const cmp = C.ppa.compare; return `<div class="table-wrap p-compare"><table><thead><tr>${cmp[0].map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${cmp.slice(1).map(r => `<tr>${r.map((c, i) => i === 0 ? `<td><strong>${c}</strong></td>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; };
export const compareCss = `.p-compare th{font-family:var(--font-display);font-size:1.05rem;letter-spacing:0;text-transform:none;color:var(--ink);background:var(--surface-2)}
.p-compare th:nth-child(3),.p-compare td:nth-child(3){background:var(--hl,var(--surface-2))}`;

// ---------- three-tile strip ----------
export const strip3 = (items) => `<div class="p-strip3">${items.map((it, i) => `<div><span class="ic">${it.ic || (i + 1)}</span><h3>${it.t}</h3><p>${it.d}</p></div>`).join('')}</div>`;
export const strip3Css = `.p-strip3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:760px){.p-strip3{grid-template-columns:minmax(0,1fr)}}
.p-strip3>div{display:grid;gap:8px;padding:22px;border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);align-content:start}
.p-strip3 .ic{width:46px;height:46px;border-radius:50%;background:var(--accent);display:grid;place-items:center;font-family:var(--font-display);font-weight:800;color:var(--accent-ink);font-size:1.1rem}
.p-strip3 h3{font-size:1.1rem}.p-strip3 p{font-size:.93rem;color:var(--ink-2)}`;

// ---------- numbered flow (PPA steps) ----------
export const flow = (C) => `<ol class="p-flow">${C.ppa.steps.map(s => `<li><h3>${s.t}</h3><p>${s.d}</p></li>`).join('')}</ol>`;
export const flowCss = `.p-flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;list-style:none;counter-reset:f;border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden}
@media (max-width:860px){.p-flow{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.p-flow{grid-template-columns:minmax(0,1fr)}}
.p-flow li{padding:22px 20px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--surface);counter-increment:f;display:grid;gap:8px;align-content:start}
.p-flow li::before{content:"Step " counter(f);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-text,var(--accent));font-weight:800}
.p-flow h3{font-size:1.1rem}.p-flow p{font-size:.93rem;color:var(--ink-2)}`;

// ---------- stat band ----------
export const statBand = (items) => `<div class="p-stats">${items.map(([n, l]) => `<div><span class="n">${n}</span><span class="l">${l}</span></div>`).join('')}</div>`;
export const statBandCss = `.p-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden}
@media (max-width:760px){.p-stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
.p-stats div{padding:20px 18px;background:var(--surface);display:grid;gap:4px}
.p-stats .n{font-family:var(--font-display);font-size:1.7rem;font-weight:800;letter-spacing:-.02em;line-height:1.05}
.p-stats .l{font-size:.85rem;color:var(--muted)}`;

// ---------- price-from cards ----------
export const priceCards = (C) => `<div class="p-prices">${C.systems.rows.map(r => `<article><span class="kw">${r.kw} kW</span><span class="from">from <b>£${f(r.cost)}</b></span><span class="or">or <b>£0</b> on a Solex PPA</span><span class="sv">saves ~£${f(r.save)} a year if bought</span></article>`).join('')}</div>`;
export const priceCardsCss = `.p-prices{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media (max-width:960px){.p-prices{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.p-prices{grid-template-columns:minmax(0,1fr)}}
.p-prices article{display:grid;gap:6px;padding:18px;border-radius:var(--radius-lg);background:var(--surface);border:2px solid var(--line);text-align:center}
.p-prices .kw{font-family:var(--font-display);font-weight:800;font-size:1.3rem}
.p-prices .from{font-size:1rem}.p-prices .from b{font-size:1.5rem;font-family:var(--font-display);letter-spacing:-.02em}
.p-prices .or{font-size:.9rem;color:var(--accent-text,var(--accent));font-weight:700}
.p-prices .sv{font-size:.82rem;color:var(--muted)}`;

// ---------- reviews placeholder (honest) ----------
export const reviewsStrip = (C) => `<div class="p-reviews"><div class="stars" aria-hidden="true">★★★★★</div><p><strong>Reviews appear here as Solex Solar projects complete.</strong> Until then: ${C.ph('references from site managers who have supervised our work, available on request')}.</p></div>`;
export const reviewsCss = `.p-reviews{display:flex;gap:16px;align-items:center;padding:14px 18px;border-radius:var(--radius);border:1px dashed var(--line-strong,var(--line));background:var(--surface);flex-wrap:wrap}
.p-reviews .stars{color:var(--accent);letter-spacing:.1em;font-size:1.2rem}.p-reviews p{font-size:.92rem;color:var(--ink-2)}`;

// ---------- 20-year cost chart (SVG, to scale) ----------
export const chart20 = () => {
  // grid cost rises 3%/yr from £17.1k (100 kW site's solar share), PPA fixed 2% escalator from £8.9k, bought = 0 after year 0.
  const years = [0, 5, 10, 15, 20]; const w = 520, h = 240, pad = 40;
  const grid = (y) => 17100 * Math.pow(1.03, y); const ppa = (y) => 8900 * Math.pow(1.02, y);
  const max = 32000; const x = (y) => pad + (y / 20) * (w - pad - 10); const yy = (v) => h - 30 - (v / max) * (h - 50);
  const path = (fn) => Array.from({ length: 21 }, (_, y) => `${y ? 'L' : 'M'}${x(y).toFixed(1)} ${yy(fn(y)).toFixed(1)}`).join(' ');
  return `<svg class="p-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Annual cost of the same electricity over 20 years: grid rising, Solex PPA fixed with a 2% escalator"><g font-size="11" fill="var(--muted)" font-family="var(--font-body)">${[0, 8000, 16000, 24000, 32000].map(v => `<line x1="${pad}" x2="${w - 10}" y1="${yy(v)}" y2="${yy(v)}" stroke="var(--line)"/><text x="${pad - 6}" y="${yy(v) + 4}" text-anchor="end">£${v / 1000}k</text>`).join('')}${years.map(y => `<text x="${x(y)}" y="${h - 12}" text-anchor="middle">Yr ${y}</text>`).join('')}</g><path d="${path(grid)}" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4"/><path d="${path(ppa)}" fill="none" stroke="var(--accent)" stroke-width="3"/><g font-size="12" font-weight="700" font-family="var(--font-body)"><text x="${x(20) - 4}" y="${yy(grid(20)) - 8}" text-anchor="end" fill="var(--muted)">Grid, rising 3%/yr</text><text x="${x(20) - 4}" y="${yy(ppa(20)) + 18}" text-anchor="end" fill="var(--accent-text,var(--accent))">Solex PPA, fixed +2%/yr</text></g></svg><p class="note">Illustrative: the solar share of a 100 kW site's electricity, about 63,000 kWh a year. Grid at 25p rising 3% a year against a PPA at ${'12p'} rising 2% a year. Your proposal uses your own tariff and data.</p>`;
};
export const chartCss = `.p-chart{width:100%;height:auto;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:12px}`;

// ---------- buy / PPA toggle ----------
export const toggle = (C) => `<div class="p-toggle" data-toggle><div class="seg" role="tablist"><button class="on" data-k="buy" role="tab" aria-selected="true">Buy outright</button><button data-k="ppa" role="tab" aria-selected="false">Solex PPA</button></div><div class="pane" data-k="buy"><div class="big">~£17,100 <small>saved a year</small></div><ul><li>100 kW, about £80,000 to buy</li><li>Payback about 4.7 years</li><li>You own it, capital allowances apply</li><li>25-year panels, ${C.ph('5')}-year workmanship warranty</li></ul></div><div class="pane" data-k="ppa" hidden><div class="big">£0 <small>up front · ~£8,200 saved a year</small></div><ul><li>100 kW, funded and owned by Solex Solar</li><li>Fixed ${C.ph('12p')}/kWh against ~25p from the grid</li><li>Maintenance, monitoring and insurance included</li><li>Yours at the end of the ${C.ph('20')}-year term</li></ul></div><p class="note">Illustrative 100 kW example; assumptions on the PPA page.</p></div>`;
export const toggleCss = `.p-toggle{display:grid;gap:14px;padding:clamp(18px,2.5vw,26px);border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);box-shadow:0 20px 50px rgba(0,0,0,.08)}
.p-toggle .seg{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;border-radius:999px;background:var(--surface-2)}
.p-toggle .seg button{border:0;background:transparent;padding:10px;border-radius:999px;font:inherit;font-weight:800;cursor:pointer;color:var(--ink-2)}
.p-toggle .seg button.on{background:var(--accent);color:var(--accent-ink)}
.p-toggle .big{font-family:var(--font-display);font-size:2.2rem;font-weight:800;letter-spacing:-.03em;line-height:1}
.p-toggle .big small{font-size:1rem;font-weight:600;color:var(--muted);letter-spacing:0}
.p-toggle ul{list-style:none;display:grid;gap:8px;margin-top:12px;font-size:.95rem}
.p-toggle li::before{content:"✓";color:var(--accent-text,var(--accent));font-weight:800;margin-right:8px}`;
export const toggleJs = `document.querySelectorAll('[data-toggle]').forEach(function(t){var bs=t.querySelectorAll('.seg button'),ps=t.querySelectorAll('.pane');bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b?'true':'false');});ps.forEach(function(p){p.hidden=p.getAttribute('data-k')!==b.getAttribute('data-k');});});});});`;

// ---------- index list (Swiss) ----------
export const indexList = (items) => `<ol class="p-index">${items.map(([t, d]) => `<li><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>`;
export const indexCss = `.p-index{list-style:none;counter-reset:i;display:grid}
.p-index li{display:grid;grid-template-columns:56px minmax(0,1fr);gap:12px;padding:18px 0;border-top:1px solid var(--line);counter-increment:i;align-items:start}
.p-index li>div{min-width:0}
.p-index li::before{content:"0" counter(i);font-family:var(--font-mono,var(--font-display));font-weight:700;color:var(--accent-text,var(--accent));font-size:1rem;padding-top:4px}
.p-index h3{font-size:1.2rem}.p-index p{color:var(--ink-2);font-size:.95rem;margin-top:4px}`;

// ---------- generic page hero (photo right) ----------
export const pageHeroPhoto = (o) => `<section class="page-hero"><div class="container"><div class="stack"><span class="eyebrow">${o.eyebrow}</span><h1>${o.title}</h1><p class="lede">${o.lede}</p>${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div>${o.photo ? `<div class="photo-frame"><img src="../assets/photos/${o.photo}" alt=""><span class="photo-caption">Placeholder photo</span></div>` : ''}</div></section>`;
export const pageHeroCss = `.page-hero .container{grid-template-columns:1.1fr .9fr;align-items:center}
@media (max-width:900px){.page-hero .container{grid-template-columns:minmax(0,1fr)}}
.page-hero .photo-frame{aspect-ratio:16/10}`;
