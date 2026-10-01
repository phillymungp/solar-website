import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { baseCss, baseJs } from './base.mjs';
import * as C from './content.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const outRoot = path.resolve(here, '..');
const P = (name) => `../assets/photos/${name}`;

export const img = (name, alt, extra = '') => `<img src="${P(name)}" alt="${alt}" loading="lazy" ${extra}>`;
export const photoFrame = (name, alt, caption = 'Placeholder photo', cls = '') => `<div class="photo-frame ${cls}">${img(name, alt)}<span class="photo-caption">${caption}</span></div>`;

const esc = (s) => s;

// ---------- shared blocks (themes can override any by name) ----------
export const blocks = {
  trustStrip(t) {
    return `<ul class="trust-strip">${C.trust.map(x => `<li class="trust-item${x.pending ? ' pending' : ''}"><span class="k">${x.k}</span><span class="v">${x.v}</span></li>`).join('')}</ul>`;
  },
  routeCard(r, featured = false) {
    return `<article class="route-card${featured ? ' featured' : ''}"><div class="stack" style="gap:8px"><h3>${r.title}</h3><p class="lede" style="font-size:1.02rem">${r.lede}</p></div><ul>${r.points.map(p => `<li>${p}</li>`).join('')}</ul><a class="btn ${featured ? 'btn-primary' : 'btn-secondary'}" href="${r.cta.href}">${r.cta.label}</a></article>`;
  },
  routes(t) {
    return `<div class="routes">${blocks.routeCard(C.routes.buy)}${blocks.routeCard(C.routes.ppa, true)}</div>`;
  },
  ppaSteps(t, horizontal = true) {
    return `<ol class="steps${horizontal ? ' horizontal n4' : ''}">${C.ppa.steps.map(s => `<li class="step"><span class="num"></span><h3>${s.t}</h3><p>${s.d}</p></li>`).join('')}</ol>`;
  },
  processSteps(t, horizontal = true) {
    return `<ol class="steps${horizontal ? ' horizontal n6' : ''}">${C.process.map(s => `<li class="step"><span class="num"></span><h3>${s.t}</h3><span class="meta">${s.m}</span><p>${s.d}</p></li>`).join('')}</ol>`;
  },
  sectorsGrid(t, limit = 8) {
    return `<div class="sectors-grid n${limit}">${C.sectors.slice(0, limit).map(s => `<a class="sector-card" href="sectors.html"><span class="fit">Typical fit · ${s.fit}</span><h3>${s.t}</h3><p>${s.d}</p></a>`).join('')}</div>`;
  },
  systemsTable(t) {
    const f = (n) => n.toLocaleString('en-GB');
    return `<div class="table-wrap"><table><thead><tr><th>System</th><th class="num">Panels</th><th class="num">Roof area</th><th class="num">Generation / yr</th><th class="num">Saving / yr if bought</th><th class="num">Indicative cost</th><th class="num">Payback</th><th class="num">Saving / yr on a PPA</th></tr></thead><tbody>${C.systems.rows.map(r => `<tr><td><strong>${r.kw} kW</strong></td><td class="num">${r.panels}</td><td class="num">~${f(r.area)} m²</td><td class="num">~${f(r.gen)} kWh</td><td class="num">~£${f(r.save)}</td><td class="num">~£${f(r.cost)}</td><td class="num">${r.payback} yrs</td><td class="num">~£${f(r.ppa)}</td></tr>`).join('')}</tbody></table></div><p class="note" style="margin-top:12px">${C.systems.note}</p>`;
  },
  faq(t, items = C.faq) {
    return `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
  },
  leadForm(t, compact = false) {
    const f = C.form.fields;
    const field = (x) => x.type === 'select'
      ? `<label for="f-${x.id}">${x.label}<select id="f-${x.id}" name="${x.id}">${x.options.map(o => `<option>${o}</option>`).join('')}</select></label>`
      : `<label for="f-${x.id}">${x.label}<input id="f-${x.id}" name="${x.id}" type="${x.type}" autocomplete="off"></label>`;
    return `<form class="lead-form" novalidate>
      <div class="row">${field(f[0])}${field(f[1])}</div>
      <div class="row">${field(f[2])}${field(f[3])}</div>
      <div class="row">${field(f[4])}${field(f[5])}</div>
      ${field(f[6])}
      ${compact ? '' : `<label for="f-msg">Anything else?<textarea id="f-msg" name="message" rows="3"></textarea></label>`}
      <button class="btn btn-primary" type="submit">Book a free site survey</button>
      <p class="fine">We reply within one working day. No sales calls unless you ask for one.</p>
      <div class="form-done" role="status"></div>
    </form>`;
  },
  ctaBand(t, title = 'Find out what your roof could do', lede = 'A free site survey takes about an hour. You get a modelled proposal for buying, and the PPA rate if your site qualifies, within five working days.') {
    return `<section class="section cta-band" id="survey"><div class="container"><div class="stack"><span class="eyebrow">Free site survey</span><h2>${title}</h2><p class="lede">${lede}</p><ul class="checklist" style="margin-top:8px"><li>Survey, roof check and half-hourly data review</li><li>Fixed-price proposal within five working days</li><li>Buy or PPA, whichever suits your business</li></ul></div>${blocks.leadForm(t)}</div></section>`;
  },
  pageHero(t, o) {
    return `<section class="page-hero"><div class="container">${o.eyebrow ? `<span class="eyebrow">${o.eyebrow}</span>` : ''}<h1>${o.title}</h1>${o.lede ? `<p class="lede">${o.lede}</p>` : ''}${o.cta ? `<div class="btn-row">${o.cta}</div>` : ''}</div></section>`;
  },
  aboutTeaser(t) {
    return `<div class="about-split"><div class="stack"><span class="eyebrow">Who you will deal with</span><h2>${C.about.headline}</h2><p class="lede">${C.about.story[0]}</p><p class="lede" style="font-size:1.02rem">${C.about.story[1]}</p><div class="btn-row"><a class="btn btn-secondary" href="about.html">Meet Phil and ${C.ph('Brother')}</a></div></div>${photoFrame(C.photos.team, 'Installers working on a commercial roof')}</div>`;
  },
};

const B = (t, name, ...args) => ((t.blocks && t.blocks[name]) || blocks[name])(t, ...args);

// ---------- chrome ----------
function header(t, page) {
  return `<header class="site-header"><div class="container"><a class="brand" href="index.html" aria-label="Solex Solar home">${t.logo()}</a><button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button><nav class="nav" id="nav"><ul>${C.nav.map(n => `<li><a href="${n.href}"${n.href === page ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('')}</ul><a class="btn btn-primary header-cta" href="contact.html">${t.headerCta || 'Book a free site survey'}</a></nav></div></header>`;
}
function footer(t) {
  return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html" style="color:inherit">${t.logo(true)}</a><p style="margin-top:14px;max-width:34ch;opacity:.85">Commercial rooftop solar, 30 to 200 kW, installed and funded by the people who fit it. Serving businesses across ${C.company.region}.</p></div><div><h4>Services</h4><ul><li><a href="commercial-solar.html">Commercial solar installation</a></li><li><a href="ppa.html">Solex solar PPA</a></li><li><a href="sectors.html">Sectors</a></li><li><a href="commercial-solar.html#aftercare">Monitoring and aftercare</a></li></ul></div><div><h4>Company</h4><ul><li><a href="about.html">About us</a></li><li><a href="about.html#accreditations">Qualifications and insurance</a></li><li><a href="contact.html">Contact</a></li></ul></div><div><h4>Contact</h4><ul><li>${C.company.phone}</li><li>${C.company.email}</li><li>${C.company.town}, ${C.company.region}</li></ul></div></div><div class="footer-legal"><span>© <span data-year>2026</span> ${C.company.legal}. Registered in England and Wales, ${C.company.companyNo}. Registered office: ${C.company.regOffice}. ${C.company.vat}.</span><span>Privacy notice · Cookies · Terms · Photographs on this mockup are licensed placeholders, not Solex Solar installations.</span></div></div></footer>`;
}
function mockBar(t, page) {
  const others = THEMES.filter(x => x.id !== t.id).map(x => `<a href="../${x.id}/${page}">${x.id.toUpperCase()}</a>`).join(' ');
  return `<div class="mock-bar"><span><span class="tag">Mockup ${t.id.toUpperCase()}</span>${t.name} · sample figures and placeholder photos</span><span>Switch: ${others} · <a href="../index.html">All five</a></span></div>`;
}

export function doc(t, page, title, main, extraHead = '') {
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title} · Solex Solar · Mockup ${t.id.toUpperCase()}</title>
<meta name="description" content="Design mockup for Solex Solar, commercial solar installation and PPA, 30 to 200 kW.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${t.fonts}">
<style>${baseCss}${t.css}</style>${extraHead}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${mockBar(t, page)}
${header(t, page)}
<main id="main">
${main}
</main>
${footer(t)}
<script>${baseJs}${t.js || ''}</script>
</body>
</html>`;
}

// ---------- pages ----------
const pages = {
  'index.html': (t) => doc(t, 'index.html', 'Commercial solar and PPA', t.home({ B, C, img, photoFrame })),

  'commercial-solar.html': (t) => doc(t, 'commercial-solar.html', 'Commercial solar installation', `
    ${B(t, 'pageHero', { eyebrow: 'Commercial solar installation', title: 'Rooftop solar, 30 to 200 kW, fitted by the people who quote it', lede: 'Fixed-price design and installation on steel, membrane and fibre-cement roofs. You own the system from day one and keep every kilowatt-hour it makes.', cta: `<a class="btn btn-primary" href="#survey">Book a free site survey</a><a class="btn btn-secondary" href="ppa.html">Prefer no capital outlay? See the PPA</a>`, photo: C.photos.heroDusk })}
    <section class="section"><div class="container two-col"><div class="stack"><span class="eyebrow">What is included</span><h2>Everything from the first survey to the test certificates</h2><ul class="checklist"><li>Structural and electrical survey, with your half-hourly data modelled</li><li>Design to BS 7671 and BS EN 62446, with shading and string layout drawings</li><li>G99 grid application and liaison with your network operator</li><li>Tier-one panels, inverters and the mounting system specified for your roof profile</li><li>Installation by our own team under SMSTS site management</li><li>Commissioning, test certificates, O&amp;M pack and monitoring on your phone</li><li>Warranty registration and a ${C.ph('5')}-year workmanship warranty</li></ul></div>${photoFrame(C.photos.harness, 'Installer working on a roof with a safety harness')}</div></section>
    <section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">Example systems</span><h2>What 30, 50, 100 and 200 kW look like</h2><p class="lede">Modelled examples so you can see the scale before we survey your roof.</p></div>${B(t, 'systemsTable')}</div></section>
    <section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Survey to switch-on in six steps</h2><p class="lede">Usually 8 to 16 weeks end to end. The grid application is the slowest step, so we submit it the day you approve the design.</p></div>${B(t, 'processSteps', false)}</div></section>
    <section class="section band" id="aftercare"><div class="container two-col"><div class="stack"><span class="eyebrow">Standards and aftercare</span><h2>Installed to the standard, tested string by string</h2><p class="lede">Every system is tested to BS EN 62446-1 and handed over with the certificates, the as-built drawings and the monitoring login. We come back for an annual inspection and we are the number you call if anything on the roof changes.</p><ul class="inline-list"><li>BS 7671 (18th Edition)</li><li>BS EN 62446-1</li><li>G99 / ENA</li><li>SMSTS</li><li>IPAF · PASMA</li><li>MCS (systems up to 50 kW, once certified)</li></ul></div>${photoFrame(C.photos.hands, 'Connecting panel cables')}</div></section>
    <section class="section"><div class="container"><div class="section-head"><h2>Questions businesses ask us</h2></div>${B(t, 'faq')}</div></section>
    ${B(t, 'ctaBand')}`),

  'ppa.html': (t) => doc(t, 'ppa.html', 'Solar PPA', `
    ${B(t, 'pageHero', { eyebrow: 'Solex solar PPA', title: 'We fund it. We fit it. You just buy the power.', lede: `A Power Purchase Agreement with the installer itself. Solex Solar pays for the system on your roof, owns and maintains it, and sells you the electricity it makes at a fixed price per kWh below your grid rate. At the end of the term, the system is yours.`, cta: `<a class="btn btn-primary" href="#survey">Check if your site qualifies</a><a class="btn btn-secondary" href="#compare">Compare with buying</a>`, photo: C.photos.heroRoof })}
    <section class="section"><div class="container"><div class="section-head"><span class="eyebrow">How it works</span><h2>Four steps, no capital</h2></div>${B(t, 'ppaSteps', true)}</div></section>
    <section class="section band"><div class="container two-col"><div class="stack"><span class="eyebrow">The terms, in plain English</span><h2>What a Solex PPA looks like</h2><p class="lede">Sample terms. The exact rate and term are set out in your proposal, modelled on your own data.</p><div class="kv">${C.ppa.terms.map(([k, v]) => `<div>${k}</div><div>${v}</div>`).join('')}</div></div><div class="stack"><span class="eyebrow">Does your site qualify?</span><h2>A PPA suits sites that use power during the day</h2><ul class="checklist">${C.ppa.eligibility.map(e => `<li>${e}</li>`).join('')}</ul><p class="note">Not sure? Book a survey and we will tell you straight. If buying is the better deal for you, we will say so.</p></div></div></section>
    <section class="section" id="compare"><div class="container"><div class="section-head"><span class="eyebrow">Buy or PPA</span><h2>Side by side</h2></div><div class="table-wrap"><table><thead><tr>${C.ppa.compare[0].map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${C.ppa.compare.slice(1).map(r => `<tr>${r.map((c, i) => i === 0 ? `<td><strong>${c}</strong></td>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></section>
    <section class="section band"><div class="container two-col"><div class="stack"><span class="eyebrow">Worked example</span><h2>${C.ppa.example.title}</h2><div class="kv">${C.ppa.example.rows.map(([k, v]) => `<div>${k}</div><div>${v}</div>`).join('')}</div><p class="note">${C.ppa.example.note}</p></div><div class="stack"><span class="eyebrow">Questions about PPAs</span>${B(t, 'faq', C.ppa.faq)}</div></div></section>
    ${B(t, 'ctaBand', 'See if a Solex PPA fits your site', 'Send us a recent electricity bill or your half-hourly data and we will tell you within five working days whether a PPA works, what the rate would be, and what buying would cost instead.')}`),

  'sectors.html': (t) => doc(t, 'sectors.html', 'Sectors', `
    ${B(t, 'pageHero', { eyebrow: 'Sectors', title: 'Roofs that work hardest during the day', lede: 'Solar pays back fastest where the electricity is used as it is generated. These are the businesses we design for most, with the system sizes that usually fit.', photo: C.photos.aerial })}
    <section class="section"><div class="container">${B(t, 'sectorsGrid', 8)}</div></section>
    <section class="section band"><div class="container two-col"><div class="stack"><span class="eyebrow">Not on the list?</span><h2>If your building has a roof and a daytime bill, it is worth a survey</h2><p class="lede">We size every system from your own half-hourly data, so the sector matters less than the load profile. The survey is free and takes about an hour.</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Book a free site survey</a></div></div>${photoFrame(C.photos.survey, 'Engineers reviewing a solar design on a tablet')}</div></section>`),

  'about.html': (t) => doc(t, 'about.html', 'About us', `
    ${B(t, 'pageHero', { eyebrow: 'About Solex Solar', title: C.about.headline, lede: 'A commercial solar company set up by two electricians who have spent three years fitting commercial rooftop PV, and who now put their own name and their own money behind it.', photo: C.photos.two })}
    <section class="section"><div class="container about-split"><div class="stack">${C.about.story.map(p => `<p class="lede">${p}</p>`).join('')}</div><div class="stack">${photoFrame(C.photos.team, 'Installation team on a factory roof')}<div class="stat-row"><div class="stat"><span class="n">3+</span><span class="l">years on commercial roofs</span></div><div class="stat"><span class="n">${C.ph('X')}</span><span class="l">sites installed as a subcontract team</span></div><div class="stat"><span class="n">${C.ph('Y')} kWp</span><span class="l">of panels fitted</span></div><div class="stat"><span class="n">2</span><span class="l">directors, both on the tools</span></div></div></div></div></section>
    <section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">The directors</span><h2>The people who quote are the people who fit</h2></div><div class="founders">${C.company.founders.map(f => `<article class="founder"><div class="photo">${img(f.photo, 'Placeholder portrait')}</div><h3>${f.name}</h3><span class="role">${f.role}</span><p class="small muted">${C.ph('Short bio: years on the tools, what they look after on a job, one line about them.')}</p></article>`).join('')}</div></div></section>
    <section class="section" id="accreditations"><div class="container two-col"><div class="stack"><span class="eyebrow">Qualifications</span><h2>What we hold</h2><ul class="checklist">${C.about.quals.map(q => `<li>${q}</li>`).join('')}</ul></div><div class="stack"><span class="eyebrow">Insurance</span><h2>Covered, with certificates on request</h2><ul class="checklist">${C.about.insurance.map(q => `<li>${q}</li>`).join('')}</ul><p class="note">We send insurance certificates and RAMS with every proposal, before you are asked to sign anything.</p></div></div></section>
    <section class="section band"><div class="container"><div class="section-head"><span class="eyebrow">How we work</span><h2>Four things you can hold us to</h2></div><div class="promises">${C.about.promises.map(([h, p]) => `<article class="promise"><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></div></section>
    ${B(t, 'ctaBand')}`),

  'contact.html': (t) => doc(t, 'contact.html', 'Contact', `
    ${B(t, 'pageHero', { eyebrow: 'Contact', title: 'Book a free site survey', lede: 'Tell us a little about the site and we will come back within one working day to arrange a visit. Phil or ' + C.ph('Brother') + ' will do the survey personally.', photo: C.photos.drill })}
    <section class="section"><div class="container contact-grid"><div class="stack"><ul class="contact-list"><li><span class="k">Phone</span><span class="v">${C.company.phone}</span></li><li><span class="k">Email</span><span class="v">${C.company.email}</span></li><li><span class="k">Based in</span><span class="v">${C.company.town}, ${C.company.region}</span></li><li><span class="k">Hours</span><span class="v">Monday to Friday, 7.30am to 5.30pm</span></li></ul><div class="stack" style="gap:10px"><h3>What happens next</h3><ol class="steps" style="gap:10px"><li class="step" style="padding:14px 16px"><span class="num"></span><h3 style="font-size:1rem">We call you back within one working day</h3></li><li class="step" style="padding:14px 16px"><span class="num"></span><h3 style="font-size:1rem">Free site survey, about an hour</h3></li><li class="step" style="padding:14px 16px"><span class="num"></span><h3 style="font-size:1rem">Fixed-price proposal within five working days</h3></li></ol></div></div>${B(t, 'leadForm')}</div></section>`),
};

// ---------- build ----------
export let THEMES = [];
export async function build() {
  const ids = ['a', 'b', 'c', 'd', 'e'];
  THEMES = [];
  for (const id of ids) THEMES.push((await import(`./themes/${id}.mjs`)).default);
  for (const t of THEMES) {
    t._blocks = blocks; t._C = C;
    const dir = path.join(outRoot, t.id);
    fs.mkdirSync(dir, { recursive: true });
    for (const [file, fn] of Object.entries(pages)) fs.writeFileSync(path.join(dir, file), fn(t));
    console.log('built', t.id, Object.keys(pages).length, 'pages');
  }
  fs.writeFileSync(path.join(outRoot, 'directions.json'), JSON.stringify(THEMES.map(t => ({ id: t.id, name: t.name, summary: t.summary, why: t.why, persona: t.persona, borrowed: t.borrowed, risk: t.risk })), null, 2));
}
if (process.argv[1] === fileURLToPath(import.meta.url)) build();
