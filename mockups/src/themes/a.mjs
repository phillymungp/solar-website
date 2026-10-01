// Direction A — "Straight Talk": trades-honest, navy and amber, owner-manager audience.
const logo = (onDark = false) => `<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="6" fill="${onDark ? '#F2A900' : '#0E1E33'}"/><path d="M4 30a26 26 0 0 1 26-26v6a20 20 0 0 0-20 20z" fill="${onDark ? '#0E1E33' : '#F2A900'}"/><g fill="${onDark ? '#0E1E33' : '#fff'}" opacity=".92"><rect x="18" y="18" width="5" height="5"/><rect x="25" y="18" width="5" height="5"/><rect x="18" y="25" width="5" height="5"/><rect x="25" y="25" width="5" height="5"/></g></svg><span>SOLEX<span style="font-weight:500"> SOLAR</span></span>`;

export default {
  id: 'a',
  name: 'Straight Talk',
  summary: 'Navy and amber, blunt headlines, qualifications up front. The site of two tradesmen who own the company.',
  persona: 'Owner-managers and farm or factory bosses who distrust sales companies and want to know who is turning up.',
  why: 'Ecoaim and Fort Energy, the two most copyable small-firm sites in the research, win trust with a dense qualifications strip, a timed process and the founders in view, not with a portfolio. This direction leans fully into that: the founders are on the homepage, every badge is explained, and the two routes (buy or Solex PPA) sit side by side under the hero.',
  borrowed: 'Ecoaim utility bar and process page; Excel Energy page set and explained accreditations; Fort Energy trust block.',
  risk: 'The most conventional of the five. If Carbon 3 or local competitors use navy and yellow, it will need a different accent.',
  fonts: 'https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap',
  headerCta: 'Book a free site survey',
  logo,
  css: `
:root{--bg:#F4F6F8;--surface:#fff;--surface-2:#E9EEF3;--ink:#0E1E33;--ink-2:#2E3F55;--muted:#5B6B80;--line:#D7DEE7;--line-strong:#B4C0CF;--brand:#0E1E33;--brand-ink:#fff;--accent:#F2A900;--accent-ink:#141414;--accent-text:#9C6F00;--radius:8px;--radius-lg:14px;--font-display:"Archivo",Arial,sans-serif;--font-body:"Source Sans 3","Segoe UI",Arial,sans-serif;--display-weight:800;--display-tracking:-0.02em;--mock-bg:#1b2431;--footer-bg:#0A1627;--ph-border:currentColor;color-scheme:light}
.util{background:var(--brand);color:#fff;font-size:.85rem;font-weight:600}
.util .container{display:flex;justify-content:space-between;gap:16px;min-height:38px;align-items:center;flex-wrap:wrap}
.util ul{display:flex;gap:18px;list-style:none;flex-wrap:wrap}
.util li::before{content:"✓";color:var(--accent);margin-right:6px}
@media (max-width:760px){.util .right{display:none}}
.site-header{border-bottom:3px solid var(--accent)}
.hero-a{background:var(--brand);color:#fff;position:relative;overflow:hidden}
.hero-a .container{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-a .container{grid-template-columns:minmax(0,1fr)}}
.hero-a h1{color:#fff;max-width:14ch}
.hero-a h1 em{font-style:normal;color:var(--accent)}
.hero-a .lede{color:#D7DEE7;font-size:1.2rem}
.hero-a .bullets{list-style:none;display:grid;gap:8px;font-weight:600;color:#fff}
.hero-a .bullets li::before{content:"—";color:var(--accent);margin-right:10px}
.hero-a .visual{position:relative}
.hero-a .visual .photo-frame{aspect-ratio:4/3;border-radius:var(--radius-lg);box-shadow:0 30px 60px rgba(0,0,0,.35)}
.hero-a .who{position:absolute;left:-18px;bottom:-22px;background:#fff;color:var(--ink);border-radius:var(--radius);padding:14px 16px;display:grid;gap:4px;box-shadow:0 16px 40px rgba(0,0,0,.25);border-left:5px solid var(--accent);max-width:min(300px,85%)}
.hero-a .who .k{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700}
.hero-a .who .n{font-family:var(--font-display);font-weight:800;font-size:1.05rem;line-height:1.2}
@media (max-width:900px){.hero-a .who{position:static;margin-top:14px;max-width:none}}
.trust-overlap{margin-top:-28px;position:relative;z-index:2}
.trust-overlap .trust-item{box-shadow:0 10px 30px rgba(14,30,51,.08)}
.route-card{border-top:5px solid var(--line-strong)}
.route-card.featured{border-top-color:var(--accent)}
.route-card.featured li::before{background:var(--accent)}
.route-card.featured .lede{color:#D7DEE7}
.step{border-top:4px solid var(--accent)}
.step .num{color:var(--accent-text)}
.sector-card{border-left:4px solid var(--accent);border-radius:var(--radius)}
.cta-band .lead-form .btn{background:var(--accent);color:var(--accent-ink)}
.site-footer .brand span{color:#fff}
.page-hero{background:var(--brand);color:#fff}
.page-hero .eyebrow{color:var(--accent)}
.page-hero .lede{color:#D7DEE7}
.page-hero .btn-secondary{color:#fff;border-color:rgba(255,255,255,.5)}
.page-hero .container{grid-template-columns:1.1fr .9fr;align-items:center}
@media (max-width:900px){.page-hero .container{grid-template-columns:minmax(0,1fr)}}
.page-hero .photo-frame{aspect-ratio:16/10}
.quote-band{background:var(--surface-2)}
.quote-band blockquote{margin:0;font-family:var(--font-display);font-weight:700;font-size:clamp(1.3rem,2.6vw,2.1rem);line-height:1.25;letter-spacing:-.01em;max-width:34ch;border-left:6px solid var(--accent);padding-left:22px}
.quote-band cite{display:block;margin-top:14px;font-style:normal;font-size:.9rem;color:var(--muted);font-weight:600}
`,
  blocks: {
    pageHero(t, o) {
      return `<section class="page-hero"><div class="container"><div class="stack"><span class="eyebrow">${o.eyebrow}</span><h1>${o.title}</h1><p class="lede">${o.lede}</p>${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div>${o.photo ? `<div class="photo-frame"><img src="../assets/photos/${o.photo}" alt=""><span class="photo-caption">Placeholder photo</span></div>` : ''}</div></section>`;
    },
  },
  home({ B, C, photoFrame }) {
    return `
<div class="util"><div class="container"><ul><li>Qualified electricians</li><li>SMSTS · IPAF · PASMA</li><li>Fully insured</li></ul><span class="right">${C.company.phone} · ${C.company.email}</span></div></div>
<section class="hero-a"><div class="container"><div class="stack" style="gap:22px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Commercial solar, fitted by the people who <em>own the company.</em></h1><p class="lede">Rooftop systems from 30 to 200 kW for businesses across ${C.company.region}. Buy the system outright, or let us fund it and sell you the power at a fixed rate.</p><ul class="bullets"><li>Two directors, both electricians, both on every job</li><li>Fixed-price proposal within five working days</li><li>PPA funded by us, not a finance house</li></ul><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-ghost" href="ppa.html">How our PPA works</a></div></div><div class="visual">${photoFrame(C.photos.flatroof, 'Installer fixing panels on a flat commercial roof')}<div class="who"><span class="k">Who you will deal with</span><span class="n">Phil Murray &amp; ${C.ph('Brother')} Murray</span><span class="small muted">Directors and installers. No sales reps.</span></div></div></div></section>
<section class="section-tight"><div class="container trust-overlap">${B(this, 'trustStrip')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Two ways to go solar</span><h2>Buy it, or let us fund it</h2><p class="lede">Same panels, same installers, same aftercare. The difference is who pays for the system and who owns it.</p></div>${B(this, 'routes')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">The Solex PPA</span><h2>No capital. Cheaper power. The system is yours at the end.</h2><p class="lede">A Power Purchase Agreement with the installer itself. We put the system on your roof at our cost and you buy the electricity it makes at a fixed price per kWh.</p></div>${B(this, 'ppaSteps', true)}<div class="btn-row" style="margin-top:28px"><a class="btn btn-brand" href="ppa.html">See the sample terms and who qualifies</a></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What 30 to 200 kW looks like on a roof</h2><p class="lede">Modelled examples so you can see the scale before we survey your building.</p></div>${B(this, 'systemsTable')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Sectors</span><h2>Roofs that work hardest during the day</h2></div>${B(this, 'sectorsGrid', 6)}<div class="btn-row" style="margin-top:24px"><a class="btn btn-secondary" href="sectors.html">All sectors</a></div></div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Survey to switch-on in six steps</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section-tight quote-band"><div class="container"><blockquote>"That work was done under other companies' contracts, so we can't show it as ours. What we can show you is exactly how we work."<cite>Phil Murray, Director</cite></blockquote></div></section>
<section class="section"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><h2>Questions businesses ask us</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
