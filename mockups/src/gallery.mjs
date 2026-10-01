import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url)); const root = path.resolve(here, '..');
const dirs = JSON.parse(fs.readFileSync(path.join(root, 'directions.json'), 'utf8'));
const refs = JSON.parse(fs.readFileSync(path.join(root, 'gallery/refs.json'), 'utf8'));
const pages = [['index.html','Home'],['commercial-solar.html','Commercial solar'],['ppa.html','Solar PPA'],['sectors.html','Sectors'],['about.html','About'],['contact.html','Contact']];
const ukSlugs = new Set(['excel','ecoaim','spirit','photon','absolar','eden','geogreen','harvestgreen','evoenergy','perfectsense','gbnrg','olympus','joju','customsolar','solarsense','mypower','nakedsolar','sungift']);
const criteria = [
  ['Works today with no project photos or case studies', ['Founders, badges and process carry it', 'Term sheet and tables carry it', 'Schematic, standards and data carry it', 'Brand arc and the brothers carry it', 'The checker carries it']],
  ['Makes the self-funded PPA unmistakable', ['Two-route cards under the hero', 'The hero is the PPA term sheet', 'PPA mechanism flow on the homepage', 'One-line PPA strip: fit it, own it, pay less', 'Checker reports PPA fit on the spot']],
  ['Different from the other four in structure, not just colour', ['Utility bar, photo hero with founder card', 'Serif, term sheet, comparison table', 'Dark grid, schematic, spec strip', 'Arc device, blob photo, 3-step strip', 'Form-first hero with live result']],
  ['Aimed at a named buyer', ['Owner-managers, farms, factories', 'Finance directors', 'Facilities and engineering managers', 'SMEs, clubs, schools, family firms', 'Busy owners who want a quick answer']],
  ['Honest: placeholders visible, modelled figures labelled', ['Yes', 'Yes', 'Yes', 'Yes', 'Yes, with assumptions under the result']],
  ['Buildable as a fast static site', ['Yes', 'Yes', 'Yes', 'Yes', 'Yes, checker is 40 lines of script']],
];
const dropped = [
  ['Photo-led premium (Photon, Joju)', 'A full-bleed drone shot of a 5 MW roof is the whole design. Solex has no photos it can use, so it would launch on stock imagery, which UK critics and buyer guides both flag as the main trust-killer. Revisit after the first three projects.'],
  ['Editorial knowledge bank (Spirit Energy)', 'Credibility from dozens of guides and calculators. A two-person firm cannot feed it for months, and an empty resources section reads worse than none.'],
  ['County-first local (“Your county’s commercial solar installers”)', 'Useful for search, but it is a service-area line and a set of location pages, not a design direction. It is folded into every direction as the region placeholder.'],
];
const host = (u) => u.replace(/^https?:\/\/(www\.)?/, '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const dirCard = (d, i) => `
<section class="dir" id="dir-${d.id}">
  <div class="dir-head">
    <div class="dir-title"><span class="letter">${d.id.toUpperCase()}</span><div><h2>${esc(d.name)}</h2><p class="sum">${esc(d.summary)}</p></div></div>
    <div class="dir-actions"><a class="btn primary" href="${d.id}/index.html">Open the full site</a></div>
  </div>
  <div class="preview" data-dir="${d.id}">
    <div class="seg" role="tablist" aria-label="Preview mode for direction ${d.id.toUpperCase()}">
      <button class="on" data-mode="shot" role="tab" aria-selected="true">Screenshots</button>
      <button data-mode="phone" role="tab" aria-selected="false">Live phone</button>
      <button data-mode="desktop" role="tab" aria-selected="false">Live desktop</button>
    </div>
    <div class="stage">
      <div class="shots" data-pane="shot">
        <figure><img src="gallery/${d.id}-fold-desktop.jpg" alt="Direction ${d.id.toUpperCase()} homepage on desktop, first screen" loading="lazy"><figcaption>Desktop, first screen · <a href="gallery/${d.id}-index-desktop.jpg">full page</a></figcaption></figure>
        <figure class="ph-shot"><img src="gallery/${d.id}-fold-mobile.jpg" alt="Direction ${d.id.toUpperCase()} homepage on a phone, first screen" loading="lazy"><figcaption>Phone · <a href="gallery/${d.id}-index-mobile.jpg">full page</a></figcaption></figure>
      </div>
      <div class="device phone" data-pane="phone" hidden><div class="frame"><iframe title="Direction ${d.id.toUpperCase()} on a phone" data-src="${d.id}/index.html" loading="lazy"></iframe></div></div>
      <div class="device desktop" data-pane="desktop" hidden><div class="frame"><iframe title="Direction ${d.id.toUpperCase()} on a desktop" data-src="${d.id}/index.html" loading="lazy"></iframe></div></div>
    </div>
    <ul class="pages">${pages.map(([h, l]) => `<li><a href="${d.id}/${h}">${l}</a></li>`).join('')}</ul>
  </div>
  <dl class="meta">
    <div><dt>Who it is for</dt><dd>${esc(d.persona)}</dd></div>
    <div><dt>Why it is on the list</dt><dd>${esc(d.why)}</dd></div>
    <div><dt>Borrowed from the research</dt><dd>${esc(d.borrowed)}</dd></div>
    <div><dt>Risk to watch</dt><dd>${esc(d.risk)}</dd></div>
  </dl>
</section>`;

const html = `<title>Solex Solar Mockups</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap">
<style>
/* Layout: a single column review board. Each direction is a card with a device stage, then the reasoning and the reference wall. */
:root{--bg:#F6F7F4;--surface:#FFFFFF;--surface-2:#ECEFE8;--ink:#17201B;--ink-2:#3E4A43;--muted:#6B766F;--line:#D8DED6;--accent:#D98E04;--accent-ink:#17201B;--link:#1E5A3A;--font-display:"Bricolage Grotesque","Segoe UI",Arial,sans-serif;--font-body:"Albert Sans","Segoe UI",Arial,sans-serif;--radius:10px;--radius-lg:16px}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#121613;--surface:#1B211D;--surface-2:#232B26;--ink:#ECEFE9;--ink-2:#C5CCC6;--muted:#8F9A92;--line:#2E3732;--accent:#F2B13A;--accent-ink:#121613;--link:#8CD1A8;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#121613;--surface:#1B211D;--surface-2:#232B26;--ink:#ECEFE9;--ink-2:#C5CCC6;--muted:#8F9A92;--line:#2E3732;--accent:#F2B13A;--accent-ink:#121613;--link:#8CD1A8;color-scheme:dark}
*,*::before,*::after{box-sizing:border-box}
[hidden]{display:none!important}
img{max-width:100%}
body{background:var(--bg);color:var(--ink);font-family:var(--font-body);font-size:16px;line-height:1.55;margin:0;padding-block:0 48px}
.wrap{max-width:1180px;margin-inline:auto;padding-inline:clamp(16px,4vw,32px)}
h1,h2,h3{font-family:var(--font-display);line-height:1.1;margin:0;text-wrap:balance;letter-spacing:-.02em}
h1{font-size:clamp(2rem,5vw,3.4rem);font-weight:800}
h2{font-size:clamp(1.4rem,2.6vw,1.9rem);font-weight:700}
h3{font-size:1.1rem;font-weight:700}
p{margin:0}
a{color:var(--link)}
.top{padding-block:clamp(28px,5vw,56px) 18px;display:grid;gap:14px}
.top .lede{font-size:1.1rem;color:var(--ink-2);max-width:68ch}
.chips{display:flex;flex-wrap:wrap;gap:8px;list-style:none;padding:0;margin:0}
.chips a{display:inline-block;padding:8px 14px;border-radius:999px;border:1px solid var(--line);background:var(--surface);text-decoration:none;color:var(--ink);font-weight:600;font-size:.9rem}
.chips a:hover{border-color:var(--accent)}
.notice{display:grid;gap:6px;padding:14px 16px;border-radius:var(--radius);background:var(--surface-2);font-size:.92rem;color:var(--ink-2);max-width:70ch}
.dir{display:grid;gap:18px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:clamp(16px,2.5vw,28px);margin-top:22px}
.dir-head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:flex-start}
.dir-title{display:flex;gap:14px;align-items:flex-start;min-width:0}
.letter{flex:none;width:48px;height:48px;border-radius:12px;background:var(--accent);color:var(--accent-ink);display:grid;place-items:center;font-family:var(--font-display);font-weight:800;font-size:1.4rem}
.sum{color:var(--ink-2);margin-top:4px;max-width:60ch}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border-radius:999px;font-weight:700;text-decoration:none;border:1.5px solid var(--line);color:var(--ink);background:var(--surface);cursor:pointer;font:inherit;font-weight:700}
.btn.primary{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.preview{display:grid;gap:12px}
.seg{display:inline-flex;gap:4px;padding:4px;border-radius:999px;background:var(--surface-2);width:max-content;max-width:100%;overflow-x:auto}
.seg button{border:0;background:transparent;padding:8px 14px;border-radius:999px;font:inherit;font-weight:700;font-size:.9rem;color:var(--ink-2);cursor:pointer;white-space:nowrap}
.seg button.on{background:var(--surface);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.12)}
.seg button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.stage{display:grid;gap:12px}
.shots{display:grid;grid-template-columns:3fr 1fr;gap:12px;align-items:start}
@media (max-width:720px){.shots{grid-template-columns:minmax(0,1fr)}.ph-shot{max-width:280px}}
.shots figure{margin:0;display:grid;gap:6px;min-width:0}
.shots img{width:100%;height:auto;border:1px solid var(--line);border-radius:8px;display:block;max-width:100%}
.shots figcaption{font-size:.82rem;color:var(--muted)}
.dir>*,.preview>*,.stage>*{min-width:0}
.device{width:100%;min-width:0;max-width:100%;overflow:hidden}
.device .frame{position:relative;overflow:hidden;border:1px solid var(--line);border-radius:12px;background:#fff;margin-inline:auto}
.device iframe{border:0;transform-origin:top left;display:block;background:#fff}
.device.desktop .frame{width:100%}
.device.phone .frame{width:min(100%,390px);border-radius:28px;border:6px solid #1a1a1a;box-shadow:0 20px 50px rgba(0,0,0,.2)}
.pages{display:flex;flex-wrap:wrap;gap:6px;list-style:none;padding:0;margin:0}
.pages li a{display:inline-block;padding:6px 11px;border-radius:999px;background:var(--surface-2);text-decoration:none;color:var(--ink);font-size:.85rem;font-weight:600}
.meta{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 24px;margin:0;border-top:1px solid var(--line);padding-top:16px}
@media (max-width:720px){.meta{grid-template-columns:minmax(0,1fr)}}
.meta div{display:grid;gap:4px;min-width:0}
.meta dt{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700}
.meta dd{margin:0;color:var(--ink-2);font-size:.95rem}
.block{margin-top:40px;display:grid;gap:14px}
.block .lede{color:var(--ink-2);max-width:70ch}
.tbl{overflow-x:auto;border:1px solid var(--line);border-radius:var(--radius-lg);background:var(--surface)}
table{border-collapse:collapse;width:100%;min-width:760px;font-size:.9rem}
th,td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top}
th{background:var(--surface-2);font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
tbody tr:last-child td{border-bottom:0}
td:first-child{font-weight:700;min-width:200px}
.dropped{display:grid;gap:10px;list-style:none;padding:0;margin:0}
.dropped li{padding:14px 16px;border-left:4px solid var(--line);background:var(--surface);border-radius:0 var(--radius) var(--radius) 0;display:grid;gap:4px}
.dropped b{font-family:var(--font-display)}
.dropped span{color:var(--ink-2);font-size:.93rem}
.rec{padding:18px 20px;border-radius:var(--radius-lg);background:var(--surface-2);display:grid;gap:8px;border-left:5px solid var(--accent)}
.refs{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}
.ref{display:grid;gap:6px;min-width:0}
.ref img{width:100%;height:auto;border:1px solid var(--line);border-radius:8px;display:block;aspect-ratio:16/10;object-fit:cover;object-position:top}
.ref .t{font-size:.85rem;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ref .u{font-size:.78rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.refs-head{display:flex;justify-content:space-between;gap:12px;align-items:baseline;flex-wrap:wrap}
.small{font-size:.85rem;color:var(--muted)}
details.more{border:1px solid var(--line);border-radius:var(--radius);background:var(--surface);padding:0 16px}
details.more summary{cursor:pointer;padding:12px 0;font-weight:700}
details.more > div{padding-bottom:14px}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
</style>
<main class="wrap">
  <header class="top">
    <h1>Solex Solar Mockups</h1>
    <p class="lede">Five complete website directions for Solex Solar: commercial rooftop solar from 30 to 200 kW, bought outright or on a PPA funded by Solex itself. Each one is a working six-page site. Open it and tap around, or switch to a live phone or desktop preview below.</p>
    <ul class="chips">${dirs.map(d => `<li><a href="#dir-${d.id}">${d.id.toUpperCase()} · ${esc(d.name)}</a></li>`).join('')}<li><a href="#why">Why these five</a></li><li><a href="#refs">Reference sites</a></li></ul>
    <div class="notice"><strong>What is placeholder.</strong><span>Dashed boxes mark details still to confirm: region, phone, email, the second director’s name, PPA term and rate, company number. Photos are licensed stock standing in for Solex Solar’s own. Savings, costs and payback are modelled examples with the assumptions stated, not quotes.</span></div>
  </header>
  ${dirs.map(dirCard).join('')}
  <section class="block" id="why">
    <h2>Why these five, and how the choice was tested</h2>
    <p class="lede">The research report ranked twenty solar sites and found that the most copyable small-firm sites win trust through process, explained qualifications, named funding and honest numbers, not through a portfolio. Solex has three things to build on today: two electricians who own the company, a PPA it funds itself, and a tight 30 to 200 kW focus. Eight directions were sketched, each tested against six questions, and three were dropped.</p>
    <div class="tbl"><table><thead><tr><th>Test</th>${dirs.map(d => `<th>${d.id.toUpperCase()} ${esc(d.name)}</th>`).join('')}</tr></thead><tbody>${criteria.map(([c, cells]) => `<tr><td>${esc(c)}</td>${cells.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <h3>Three directions that were dropped</h3>
    <ul class="dropped">${dropped.map(([t, r]) => `<li><b>${esc(t)}</b><span>${esc(r)}</span></li>`).join('')}</ul>
    <div class="rec"><h3>A recommendation, if you want one</h3><p>B, The Funder, is the strongest match for what makes Solex different: a finance director takes a term sheet seriously, and no comparable small installer can put “funded by the people who install it” in a headline. Its one weakness, feeling corporate, is fixed by borrowing A’s “who you will deal with” card into the hero. If you would rather qualify leads before you speak to anyone, E does that best. A is the safest if most of your customers are owner-managers who buy on the person, not the paperwork.</p><p class="small">None of this is final. Pick one, or name the pieces you like from each, and the real site gets built from that.</p></div>
  </section>
  <section class="block" id="refs">
    <div class="refs-head"><h2>Reference sites, captured 28 September to 1 October 2026</h2><span class="small">${refs.length} pages, desktop first screen. Tap a thumbnail for the live site.</span></div>
    <p class="lede">These are the UK and international pages the directions borrow from. They are here for comparison only: their words, photos and code belong to their owners and nothing from them is copied into the Solex mockups.</p>
    <h3>United Kingdom</h3>
    <div class="refs">${refs.filter(r => ukSlugs.has(r.slug.split('-')[0])).map(r => `<a class="ref" href="${esc(r.url)}" target="_blank" rel="noopener"><img src="gallery/refs/${r.slug}.jpg" alt="" loading="lazy"><span class="t">${esc(r.slug.replace(/-/g, ' · '))}</span><span class="u">${esc(host(r.url))}</span></a>`).join('')}</div>
    <h3>Ireland, Australia, North America and Europe</h3>
    <div class="refs">${refs.filter(r => !ukSlugs.has(r.slug.split('-')[0])).map(r => `<a class="ref" href="${esc(r.url)}" target="_blank" rel="noopener"><img src="gallery/refs/${r.slug}.jpg" alt="" loading="lazy"><span class="t">${esc(r.slug.replace(/-/g, ' · '))}</span><span class="u">${esc(host(r.url))}</span></a>`).join('')}</div>
    <p class="small">A few pages served a bot-check or error screen when captured (Harvest Green, Mypower, Perfect Sense, Solarsense); their thumbnails show that rather than the site.</p>
  </section>
</main>
<script>
(function(){
  function fit(dev){
    var fr=dev.querySelector('.frame'), ifr=dev.querySelector('iframe'); if(!fr||!ifr)return;
    var w=dev.classList.contains('phone')?390:1440, h=dev.classList.contains('phone')?844:900;
    var avail=fr.clientWidth; if(!avail)return; var s=Math.min(1,avail/w);
    ifr.style.width=w+'px'; ifr.style.height=h+'px'; ifr.style.transform='scale('+s+')'; fr.style.height=(h*s)+'px';
  }
  document.querySelectorAll('.preview').forEach(function(p){
    var btns=p.querySelectorAll('.seg button'), panes=p.querySelectorAll('[data-pane]');
    btns.forEach(function(b){b.addEventListener('click',function(){
      btns.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b?'true':'false');});
      panes.forEach(function(pn){var on=pn.getAttribute('data-pane')===b.getAttribute('data-mode');pn.hidden=!on;if(on&&pn.classList.contains('device')){var ifr=pn.querySelector('iframe');if(ifr&&!ifr.src){ifr.src=ifr.getAttribute('data-src');}fit(pn);}});
    });});
  });
  var ro=('ResizeObserver' in window)?new ResizeObserver(function(es){es.forEach(function(e){fit(e.target);});}):null;
  document.querySelectorAll('.device').forEach(function(d){if(ro)ro.observe(d);});
  window.addEventListener('resize',function(){document.querySelectorAll('.device').forEach(fit);});
})();
</script>`;
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('gallery written', (html.length / 1024).toFixed(0), 'KB');
