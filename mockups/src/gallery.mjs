import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url)); const root = path.resolve(here, '..');
const dirs = JSON.parse(fs.readFileSync(path.join(root, 'directions.json'), 'utf8'));
const refs = JSON.parse(fs.readFileSync(path.join(root, 'gallery/refs.json'), 'utf8'));
const refs2 = JSON.parse(fs.readFileSync(path.join(root, 'gallery/refs2/refs2.json'), 'utf8'));
const pages = [['index.html','Home'],['commercial-solar.html','Commercial solar'],['ppa.html','Solar PPA'],['sectors.html','Sectors'],['about.html','About'],['contact.html','Contact']];
const host = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const groups = { approachable: 'Approachable', trust: 'Trust and numbers', premium: 'Premium', conversion: 'Conversion-first', bold: 'Bold', technical: 'Technical', sector: 'Sector-specific' };
const notes2 = {
  'boxt': 'Dark navy hero, a white card with one coral button, and the Trustpilot score right under the fold. The clearest “get a fixed price” pattern in UK home services. Borrowed in G.',
  'heatable': 'Pale green hero with six product tiles, each showing “From £…”. Prices on the first screen remove the biggest reason not to enquire. Borrowed in G.',
  'sunsave': 'Mint-to-white gradient, one centred headline, a yellow pill button, a row of trust logos. Calm and confident; nothing to decode.',
  'octopus-business': 'Deep purple, a postcode box and one button. A friendly consumer brand whose business page still asks for one thing. Tone borrowed in F.',
  'enpal': 'Full-bleed photo with three ticks along the bottom edge (0 € up front, save, independent). Germany’s largest installer sells on three promises.',
  'otovo': 'A saving in the headline, a postcode box, a diagonal photo crop. Note that “up to 90%” claims need substantiation under UK advertising rules.',
  'enphase': 'Photo with centred white type and two buttons. The lesson is restraint and one orange action. Borrowed in I and S.',
  'starling-business': 'Dark aubergine, the product centred, one teal button, trust badges in a row at the bottom. One accent and nothing else. Discipline borrowed in N.',
  'monzo-business': 'Hot orange-to-coral gradient with a photo cut-out and one teal button. Warm gradients work for business audiences when everything else stays plain. Borrowed in S.',
  'eo-charging': 'Dense B2B layout: stats, service tiles and a package card all in the hero. Too busy for Solex, but a fair example of showing scope.',
  'checkatrade': 'Red hero, category chips, three trust badges beneath. The visual language UK customers associate with vetted trades. Borrowed in M.',
  'hometree': 'Yellow hero with a Trustpilot strip and four guarantee tiles immediately under it. Reviews and guarantees before anything else. Borrowed in M.',
  'kensa': 'Orange gradient over a product photo, one line, one button. The warm, product-led heat pump look. Borrowed in S.',
  'hoarelea': 'An engineering consultancy with illustration and a single headline; the body of the site is strict and technical. Restraint borrowed in O and T.',
  'willmottdixon': 'Full-bleed aerial photo, yellow headline, white sub-line. The construction-firm pattern: let the work speak. The target for P.',
  'sunrun': 'Cream background, a product mock-up, three ticks. The US residential leader; clean, if unremarkable.',
  'zolar': 'Photo hero with three icon tiles beneath: experienced trades, local expertise, tailored offers. A German installer marketplace.',
  'inspired': 'Dark photographic hero, a one-line promise, a quiet button. The energy-consultancy look corporate buyers expect. Borrowed in J.',
  'zenergi': 'Dark green with an orange arch framing a person. A brand device plus a human face, in the same family as Eden Sustainable. Borrowed in D.',
  'tide': 'Saturated blue, a real customer with a quote, Trustpilot and badges in one row. Challenger-bank clarity for small businesses.',
  'gocardless': 'White, centred headline, two buttons, a photo beneath. The cleanest B2B hero in the set. Borrowed in I and N.',
  'wise-business': 'Dark green with a huge uppercase condensed headline and one pale button. Bold type as the whole design. Borrowed in J.',
  'mcs': 'The certification body’s own site: a big photo and black panels for each audience. Its badge is what Solex adds after the November assessment.',
  'vaillant': 'Conventional manufacturer layout: headline, product photo, three task tiles. Familiar to facilities buyers. Borrowed in R.',
  'segen': 'Diagonal photo crop, bold headline, two coloured buttons. A UK distributor showing the trade vernacular.',
  'naked-energy': 'A near-empty hero, “Solar Redefined”, one link, then a photograph. Minimalism from a UK solar manufacturer. Borrowed in L.',
};
const shortlist = [
  ['G', 'Price Up Front', 'The clearest answer to “what will it cost me?”, the question every commercial visitor arrives with. The price guide, reviews strip and three steps mirror what made BOXT and Heatable market leaders.'],
  ['N', 'Bank Clean', 'The Buy / PPA toggle answers the second question (“which route?”) without reading. Very legible, one accent, nothing to learn.'],
  ['A', 'Straight Talk', 'The best fit for owner-managers: the people are visible first, the qualifications second, the price third.'],
  ['B', 'The Funder', 'The one a finance director forwards to the board. The term sheet in the hero makes the self-funded PPA the story.'],
  ['M', 'Local Trades', 'The easiest to ring. Bigger type, a phone number on every screen, and nothing that needs explaining.'],
];
const holdBack = 'L (Minimal Photo) and P (Photo Premium) need real photographs and should wait for the first installs. C (Engineering Grid) and J (Black & Signal) read as serious but dark body text tires older readers; O keeps the engineering story on white. T (Swiss Grid) is handsome and austere, better for architects than farmers. Q (Farm & Rural) is a sector landing page rather than a company look.';

const card = (d) => `
<section class="dir" id="dir-${d.id}">
  <div class="dir-head">
    <div class="dir-title"><span class="letter">${d.id.toUpperCase()}</span><div><h2>${esc(d.name)} <span class="tag">${groups[d.group] || ''}</span></h2><p class="sum">${esc(d.summary)}</p></div></div>
    <div class="dir-actions"><a class="btn primary" href="${d.id}/index.html">Open the full site</a></div>
  </div>
  <div class="preview" data-dir="${d.id}">
    <div class="seg" role="tablist" aria-label="Preview mode for ${d.id.toUpperCase()}"><button class="on" data-mode="shot" role="tab" aria-selected="true">Screenshots</button><button data-mode="phone" role="tab" aria-selected="false">Live phone</button><button data-mode="desktop" role="tab" aria-selected="false">Live desktop</button></div>
    <div class="stage">
      <div class="shots" data-pane="shot">
        <figure><img src="gallery/${d.id}-fold-desktop.jpg" alt="${esc(d.name)} homepage on desktop, first screen" loading="lazy"><figcaption>Desktop, first screen · <a href="gallery/${d.id}-index-desktop.jpg">full page</a></figcaption></figure>
        <figure class="ph-shot"><img src="gallery/${d.id}-fold-mobile.jpg" alt="${esc(d.name)} homepage on a phone, first screen" loading="lazy"><figcaption>Phone · <a href="gallery/${d.id}-index-mobile.jpg">full page</a></figcaption></figure>
      </div>
      <div class="device phone" data-pane="phone" hidden><div class="frame"><iframe title="${esc(d.name)} on a phone" data-src="${d.id}/index.html" loading="lazy"></iframe></div></div>
      <div class="device desktop" data-pane="desktop" hidden><div class="frame"><iframe title="${esc(d.name)} on a desktop" data-src="${d.id}/index.html" loading="lazy"></iframe></div></div>
    </div>
    <ul class="pages">${pages.map(([h, l]) => `<li><a href="${d.id}/${h}">${l}</a></li>`).join('')}</ul>
  </div>
  <dl class="design">
    <div><dt>Colour</dt><dd>${esc(d.design.palette)}</dd></div>
    <div><dt>Type and sizes</dt><dd>${esc(d.design.type)}</dd></div>
    <div><dt>Layout</dt><dd>${esc(d.design.layout)}</dd></div>
    <div><dt>Through a customer’s eyes</dt><dd>${esc(d.design.eye)}</dd></div>
  </dl>
  <details class="more"><summary>Why it is in the set, what it borrows, and the risk</summary><div class="meta"><div><b>Who it is for.</b> ${esc(d.persona)}</div><div><b>Why.</b> ${esc(d.why)}</div><div><b>Borrowed from.</b> ${esc(d.borrowed)}</div><div><b>Risk.</b> ${esc(d.risk)}</div></div></details>
</section>`;

const html = `<title>Solex Solar Mockups</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap">
<style>
/* Layout: a single-column review board. Twenty treatment cards, each with a device stage and design notes, then the shortlist and two reference walls. */
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
.top .lede{font-size:1.1rem;color:var(--ink-2);max-width:70ch}
.chips{display:flex;flex-wrap:wrap;gap:8px;list-style:none;padding:0;margin:0}
.chips a{display:inline-block;padding:7px 12px;border-radius:999px;border:1px solid var(--line);background:var(--surface);text-decoration:none;color:var(--ink);font-weight:600;font-size:.86rem}
.chips a:hover{border-color:var(--accent)}
.notice{display:grid;gap:6px;padding:14px 16px;border-radius:var(--radius);background:var(--surface-2);font-size:.92rem;color:var(--ink-2);max-width:72ch}
.rules{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:6px}
@media (max-width:760px){.rules{grid-template-columns:minmax(0,1fr)}}
.rules div{padding:14px 16px;border:1px solid var(--line);border-radius:var(--radius);background:var(--surface);font-size:.9rem;color:var(--ink-2);min-width:0}
.rules b{display:block;color:var(--ink);margin-bottom:4px}
.dir{display:grid;gap:18px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:clamp(16px,2.5vw,28px);margin-top:22px}
.dir>*,.preview>*,.stage>*{min-width:0}
.dir-head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:flex-start}
.dir-title{display:flex;gap:14px;align-items:flex-start;min-width:0}
.letter{flex:none;width:48px;height:48px;border-radius:12px;background:var(--accent);color:var(--accent-ink);display:grid;place-items:center;font-family:var(--font-display);font-weight:800;font-size:1.4rem}
.tag{display:inline-block;font-family:var(--font-body);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700;vertical-align:middle;margin-left:6px}
.sum{color:var(--ink-2);margin-top:4px;max-width:64ch}
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
.shots img{width:100%;height:auto;border:1px solid var(--line);border-radius:8px;display:block}
.shots figcaption{font-size:.82rem;color:var(--muted)}
.device{width:100%;min-width:0;max-width:100%;overflow:hidden}
.device .frame{position:relative;overflow:hidden;border:1px solid var(--line);border-radius:12px;background:#fff;margin-inline:auto}
.device iframe{border:0;transform-origin:top left;display:block;background:#fff}
.device.desktop .frame{width:100%}
.device.phone .frame{width:min(100%,390px);border-radius:28px;border:6px solid #1a1a1a;box-shadow:0 20px 50px rgba(0,0,0,.2)}
.pages{display:flex;flex-wrap:wrap;gap:6px;list-style:none;padding:0;margin:0}
.pages li a{display:inline-block;padding:6px 11px;border-radius:999px;background:var(--surface-2);text-decoration:none;color:var(--ink);font-size:.85rem;font-weight:600}
.design{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 22px;margin:0;border-top:1px solid var(--line);padding-top:16px}
@media (max-width:720px){.design{grid-template-columns:minmax(0,1fr)}}
.design div{display:grid;gap:4px;min-width:0}
.design dt{font-size:.74rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-ink);background:var(--accent);display:inline-block;padding:2px 8px;border-radius:4px;font-weight:800;width:max-content}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .design dt{color:var(--accent-ink)}}
.design dd{margin:0;color:var(--ink-2);font-size:.95rem}
details.more{border:1px solid var(--line);border-radius:var(--radius);background:var(--surface-2);padding:0 16px}
details.more summary{cursor:pointer;padding:12px 0;font-weight:700;font-size:.95rem}
details.more .meta{display:grid;gap:10px;padding-bottom:14px;font-size:.93rem;color:var(--ink-2)}
.block{margin-top:40px;display:grid;gap:14px}
.block .lede{color:var(--ink-2);max-width:72ch}
.short{display:grid;gap:10px;list-style:none;padding:0;margin:0}
.short li{display:grid;grid-template-columns:48px minmax(0,1fr);gap:14px;padding:14px 16px;border:1px solid var(--line);border-radius:var(--radius);background:var(--surface);align-items:start}
.short .l{width:40px;height:40px;border-radius:10px;background:var(--ink);color:var(--bg);display:grid;place-items:center;font-family:var(--font-display);font-weight:800;font-size:1.1rem}
.short b{font-family:var(--font-display);font-size:1.05rem}
.short p{color:var(--ink-2);font-size:.93rem;margin-top:2px}
.rec{padding:18px 20px;border-radius:var(--radius-lg);background:var(--surface-2);display:grid;gap:8px;border-left:5px solid var(--accent)}
.refs{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.ref{display:grid;gap:6px;min-width:0;text-decoration:none;color:inherit}
.ref img{width:100%;height:auto;border:1px solid var(--line);border-radius:8px;display:block;aspect-ratio:16/10;object-fit:cover;object-position:top}
.ref .t{font-size:.9rem;font-weight:700}
.ref .u{font-size:.78rem;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ref .n{font-size:.86rem;color:var(--ink-2)}
.refs-head{display:flex;justify-content:space-between;gap:12px;align-items:baseline;flex-wrap:wrap}
.small{font-size:.85rem;color:var(--muted)}
details.wall{border:1px solid var(--line);border-radius:var(--radius-lg);background:var(--surface);padding:0 16px}
details.wall summary{cursor:pointer;padding:14px 0;font-weight:700}
details.wall>div{padding-bottom:16px;display:grid;gap:14px}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
</style>
<main class="wrap">
  <header class="top">
    <h1>Solex Solar Mockups</h1>
    <p class="lede">Twenty homepage treatments for Solex Solar, each a working six-page site. The first five are the original directions; the fifteen that follow explore colour, type and layout more widely, borrowing from the best energy, trades and finance sites rather than only solar ones. Open any site and tap through, or use the live phone and desktop previews.</p>
    <ul class="chips">${dirs.map(d => `<li><a href="#dir-${d.id}">${d.id.toUpperCase()} · ${esc(d.name)}</a></li>`).join('')}<li><a href="#shortlist">Designer’s shortlist</a></li><li><a href="#refs2">What is working out there</a></li><li><a href="#refs">Solar reference sites</a></li></ul>
    <div class="notice"><strong>How every treatment was judged.</strong><span>Through the eyes of a commercial customer arriving cold: can they tell who you are, what you do (30 to 200 kW, buy or PPA), whether to trust you, and what to do next, inside five seconds, on a phone. Dashed boxes mark details still to confirm. Photos are licensed stock standing in for Solex Solar’s own. Figures are modelled examples with the assumptions stated.</span></div>
    <div class="rules"><div><b>Colour</b>One brand colour, one action colour, neutrals for everything else. Body text at 4.5:1 contrast or better; buttons checked for contrast with their own text.</div><div><b>Type</b>At most two families. Body 16 to 18px with 1.5 to 1.65 line height; headlines 36 to 90px depending on the direction; 44px or taller tap targets.</div><div><b>Layout</b>One headline, one primary button, the offer in the first screen, trust signals in the second, and no carousels or autoplay.</div></div>
  </header>
  ${dirs.map(card).join('')}
  <section class="block" id="shortlist">
    <h2>Designer’s shortlist</h2>
    <p class="lede">All twenty do the job. Judged purely on how easily a commercial customer understands the offer and feels able to make contact, these five lead, and the rest are explained in each card.</p>
    <ol class="short">${shortlist.map(([l, n, r]) => `<li><span class="l">${l}</span><div><b>${n}</b><p>${esc(r)}</p></div></li>`).join('')}</ol>
    <div class="rec"><h3>If one has to be built first</h3><p>Take G’s structure (price guide, reviews strip, three steps) and drop N’s Buy / PPA toggle into its hero. Palette is then a brand decision: A’s navy and amber if you want to look like a firm of tradesmen, B’s green and gold if you want to look like the funder. Both pass contrast and both work with no photographs.</p><p class="small">${esc(holdBack)}</p></div>
  </section>
  <section class="block" id="refs2">
    <div class="refs-head"><h2>What is already working out there</h2><span class="small">${refs2.length} sites captured 1 October 2026, desktop first screen. Tap for the live site.</span></div>
    <p class="lede">Energy, trades, construction and finance brands whose homepages are easy on the eye and clear about the offer. Each note says what it does well and which Solex treatment borrows the idea. Their words, photos and code are theirs; only the patterns are reused.</p>
    <div class="refs">${refs2.map(r => `<a class="ref" href="${esc(r.url)}" target="_blank" rel="noopener"><img src="gallery/refs2/${r.slug}.jpg" alt="" loading="lazy"><span class="t">${esc(host(r.url))}</span><span class="n">${esc(notes2[r.slug] || '')}</span></a>`).join('')}</div>
    <p class="small">Blocked or unavailable when captured: 1KOMMA5°, Aira, Arup, Heat Geek, Tesla Solar, SolarEdge, Pod Point and IKEA Solar. Their patterns are described from earlier visits where a treatment cites them.</p>
  </section>
  <section class="block" id="refs">
    <details class="wall"><summary>Solar reference sites from the research (${refs.length} pages)</summary><div>
    <p class="lede">The UK and international solar pages the original five directions borrow from, captured 28 September to 1 October 2026.</p>
    <div class="refs">${refs.map(r => `<a class="ref" href="${esc(r.url)}" target="_blank" rel="noopener"><img src="gallery/refs/${r.slug}.jpg" alt="" loading="lazy"><span class="t">${esc(r.slug.replace(/-/g, ' · '))}</span><span class="u">${esc(host(r.url))}</span></a>`).join('')}</div>
    <p class="small">A few pages served a bot-check or error screen when captured (Harvest Green, Mypower, Perfect Sense, Solarsense); their thumbnails show that rather than the site.</p>
    </div></details>
  </section>
</main>
<script>
(function(){
  function fit(dev){var fr=dev.querySelector('.frame'),ifr=dev.querySelector('iframe');if(!fr||!ifr)return;var w=dev.classList.contains('phone')?390:1440,h=dev.classList.contains('phone')?844:900;var avail=fr.clientWidth;if(!avail)return;var s=Math.min(1,avail/w);ifr.style.width=w+'px';ifr.style.height=h+'px';ifr.style.transform='scale('+s+')';fr.style.height=(h*s)+'px';}
  document.querySelectorAll('.preview').forEach(function(p){var btns=p.querySelectorAll('.seg button'),panes=p.querySelectorAll('[data-pane]');btns.forEach(function(b){b.addEventListener('click',function(){btns.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b?'true':'false');});panes.forEach(function(pn){var on=pn.getAttribute('data-pane')===b.getAttribute('data-mode');pn.hidden=!on;if(on&&pn.classList.contains('device')){var ifr=pn.querySelector('iframe');if(ifr&&!ifr.src){ifr.src=ifr.getAttribute('data-src');}fit(pn);}});});});});
  var ro=('ResizeObserver' in window)?new ResizeObserver(function(es){es.forEach(function(e){fit(e.target);});}):null;
  document.querySelectorAll('.device').forEach(function(d){if(ro)ro.observe(d);});
  window.addEventListener('resize',function(){document.querySelectorAll('.device').forEach(fit);});
})();
</script>`;
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('gallery written', (html.length / 1024).toFixed(0), 'KB');
