import { marks, compareTable, compareCss, syscards, syscardsCss, pageHeroPhoto, pageHeroCss } from './parts.mjs';
export default {
  id: 'j', name: 'Black & Signal', group: 'premium',
  summary: 'Black hero with a photograph, white body, signal orange. The 1KOMMA5° look: a solar brand that feels like a tech brand.',
  persona: 'Younger owners and directors who buy from brands, and businesses that want their sustainability story to look modern.',
  why: '1KOMMA5° built a pan-European solar brand in four years on a split layout: a dark, photographic hero that feels premium, then a light, factual body. The research found dark heroes read as serious in the UK (GB NRG, EvoEnergy) but dark body text tires readers, so this uses dark only where it sets the mood.',
  borrowed: '1KOMMA5° dark-to-light structure; Wise Business and Inspired dark photographic heroes; EvoEnergy hero; Solar X comparison table.',
  risk: 'Needs a good photograph in the hero. Placeholder for now; replace it first.',
  design: {
    palette: 'Near-black (#0D0D0D) hero and footer, white body, signal orange (#FF4F1F) for the primary button with black text, light grey (#F4F4F2) bands.',
    type: 'Schibsted Grotesk, a newspaper grotesk: 800 for headlines at 44 to 72px, 400 at 17px body. Crisp and slightly editorial.',
    layout: 'Dark hero split 55/45 between headline and photo, with a standards ticker along the bottom edge. Light body uses a comparison table and simple cards.',
    eye: 'Premium and current. The first screen feels like a brand film; the second screen gets down to numbers.',
  },
  fonts: 'https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
  headerCta: 'Book a survey',
  logo: (onDark = true) => `${marks.grid('#FF4F1F')}<span style="font-weight:800;letter-spacing:-.02em">SOLEX SOLAR</span>`,
  css: `
:root{--bg:#fff;--surface:#fff;--surface-2:#F4F4F2;--ink:#111;--ink-2:#333;--muted:#6A6A66;--line:#E2E2DE;--line-strong:#C6C6C0;--brand:#0D0D0D;--brand-ink:#fff;--accent:#FF4F1F;--accent-ink:#0D0D0D;--accent-text:#C73A12;--radius:4px;--radius-lg:8px;--font-display:"Schibsted Grotesk","Segoe UI",Arial,sans-serif;--font-body:"Schibsted Grotesk","Segoe UI",Arial,sans-serif;--display-weight:800;--display-tracking:-0.03em;--mock-bg:#000;--footer-bg:#0D0D0D;--header-bg:#0D0D0D;--header-ink:#fff;--header-line:#262626;--nav-hover:rgba(255,255,255,.1);color-scheme:light}
.hero-j{background:#0D0D0D;color:#fff;position:relative}
.hero-j .container{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(24px,4vw,56px);align-items:center;padding-block:clamp(48px,7vw,96px)}
@media (max-width:900px){.hero-j .container{grid-template-columns:minmax(0,1fr)}}
.hero-j h1{color:#fff;font-size:clamp(2.4rem,6vw,4.6rem);max-width:13ch}
.hero-j h1 span{color:var(--accent)}
.hero-j .lede{color:#CFCFCA;font-size:1.15rem}
.hero-j .photo-frame{aspect-ratio:4/5;max-height:560px}
.hero-j .btn-secondary{color:#fff;border-color:rgba(255,255,255,.5)}
.ticker{background:#0D0D0D;color:#9A9A95;border-top:1px solid #262626;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase}
.ticker ul{display:flex;flex-wrap:wrap;list-style:none;gap:0}
.ticker li{padding:12px 18px;border-right:1px solid #262626}
.ticker b{color:var(--accent);font-weight:700}
.route-card{border:1px solid var(--line-strong)}
.route-card.featured{background:#0D0D0D}
.route-card.featured .lede{color:#CFCFCA}
.step{border:1px solid var(--line-strong)}
.step .num{color:var(--accent-text)}
.cta-band{background:#0D0D0D}
.page-hero{background:#0D0D0D;color:#fff}
.page-hero .lede{color:#CFCFCA}
.page-hero .btn-secondary{color:#fff;border-color:rgba(255,255,255,.5)}
${compareCss}${syscardsCss}${pageHeroCss}
.site-footer{border-top:1px solid #262626}`,
  blocks: { pageHero: (t, o) => pageHeroPhoto(o), systemsTable: (t) => syscards(t._C) },
  home({ B, C, photoFrame }) {
    return `
<section class="hero-j"><div class="container"><div class="stack" style="gap:22px"><span class="eyebrow">Commercial solar · 30 to 200 kW · ${C.company.region}</span><h1>Your roof, <span>our capital.</span> Or your capital, our hands.</h1><p class="lede">Solex Solar installs 30 to 200 kW rooftop systems and, on sites that qualify, funds them under a Power Purchase Agreement. Two directors, both electricians, on every job.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a><a class="btn btn-secondary" href="ppa.html">The Solex PPA</a></div></div>${photoFrame(C.photos.harness, 'Installer on a roof with a harness')}</div></section>
<div class="ticker"><div class="container" style="padding-inline:0"><ul><li><b>Install</b> 30–200 kW</li><li><b>Standards</b> BS 7671 · BS EN 62446</li><li><b>Grid</b> G99</li><li><b>Site</b> SMSTS · IPAF · PASMA</li><li><b>Funding</b> Buy or Solex PPA</li></ul></div></div>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Buy or PPA</span><h2>Side by side</h2><p class="lede">Same hardware, same installers. The difference is who pays for the system and who owns it.</p></div>${compareTable(C)}<div class="btn-row" style="margin-top:22px"><a class="btn btn-primary" href="ppa.html">How the PPA works</a><a class="btn btn-secondary" href="commercial-solar.html">What is included when you buy</a></div></div></section>
<section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>Four sizes, modelled</h2></div>${syscards(C)}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Survey to switch-on</h2></div>${B(this, 'processSteps', true)}</div></section>
<section class="section band"><div class="container">${B(this, 'aboutTeaser')}</div></section>
<section class="section"><div class="container"><div class="section-head"><span class="eyebrow">Qualifications</span><h2>Who is doing the work</h2></div>${B(this, 'trustStrip')}</div></section>
<section class="section band"><div class="container"><div class="section-head"><h2>Questions we are asked</h2></div>${B(this, 'faq')}</div></section>
${B(this, 'ctaBand')}`;
  },
};
