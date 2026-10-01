// Shared base CSS and JS for every direction. Themes override tokens and signature components.
export const baseCss = `
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--font-body);font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased}
img,svg{max-width:100%;display:block}
img{height:auto}
a{color:inherit}
h1,h2,h3,h4{font-family:var(--font-display);line-height:1.1;margin:0;text-wrap:balance;letter-spacing:var(--display-tracking,-0.01em);font-weight:var(--display-weight,700)}
h1{font-size:clamp(2.1rem,5.2vw,3.9rem)}
h2{font-size:clamp(1.7rem,3.4vw,2.6rem)}
h3{font-size:clamp(1.15rem,1.8vw,1.35rem)}
p{margin:0}
ul,ol{margin:0;padding:0}
button,input,select,textarea{font:inherit;color:inherit}
:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.container{width:100%;max-width:var(--max,1180px);margin-inline:auto;padding-inline:clamp(16px,4vw,32px)}
.section{padding-block:clamp(56px,8vw,104px)}
.section-tight{padding-block:clamp(36px,5vw,64px)}
.section-head{max-width:720px;display:grid;gap:14px;margin-bottom:clamp(28px,4vw,48px)}
.section-head.center{margin-inline:auto;text-align:center}
.eyebrow{font-family:var(--font-mono,var(--font-body));font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-text,var(--accent));font-weight:600}
.lede{font-size:1.15rem;color:var(--ink-2);max-width:62ch}
.muted{color:var(--muted)}
.small{font-size:.9rem}
.note{font-size:.88rem;color:var(--muted);max-width:70ch;line-height:1.5}
.stack{display:grid;gap:18px}
.grid{display:grid;gap:clamp(16px,2.5vw,28px)}
.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
@media (max-width:900px){.cols-3,.cols-4{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:600px){.cols-2,.cols-3,.cols-4{grid-template-columns:minmax(0,1fr)}}
.grid>*{min-width:0}
.ph{display:inline;padding:0 .35em;border:1.5px dashed var(--ph-border,currentColor);border-radius:.35em;opacity:.85;font-style:normal;line-height:1.3;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5em;padding:.85em 1.35em;border-radius:var(--radius);font-weight:650;text-decoration:none;border:2px solid transparent;cursor:pointer;line-height:1.1;transition:transform .15s ease,background .15s ease,color .15s ease}
.btn:hover{transform:translateY(-1px)}
.btn-primary{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.btn-secondary{background:transparent;color:var(--ink);border-color:var(--line-strong,var(--line))}
.btn-ghost{background:transparent;color:inherit;border-color:currentColor;opacity:.9}
.btn-brand{background:var(--brand);color:var(--brand-ink);border-color:var(--brand)}
.btn-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.mock-bar{background:var(--mock-bg,#2b2f36);color:#fff;font:600 12px/1.4 var(--font-body);letter-spacing:.02em;padding:6px clamp(16px,4vw,32px);display:flex;gap:14px;flex-wrap:wrap;justify-content:space-between;align-items:center}
.mock-bar a{color:#fff;opacity:.8}
.mock-bar .tag{display:inline-block;padding:1px 7px;border-radius:4px;background:rgba(255,255,255,.14);margin-right:8px}
.site-header{position:sticky;top:0;z-index:50;background:var(--header-bg,var(--surface));color:var(--header-ink,var(--ink));border-bottom:1px solid var(--header-line,var(--line))}
.site-header .container{display:flex;align-items:center;justify-content:space-between;gap:18px;min-height:72px}
.brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-family:var(--font-display);font-weight:800;letter-spacing:-.01em;font-size:1.2rem;color:inherit}
.brand svg{flex:none}
.nav{display:flex;align-items:center;gap:6px}
.nav ul{display:flex;gap:2px;list-style:none}
.nav a{display:block;padding:.55em .8em;border-radius:var(--radius);text-decoration:none;font-weight:600;font-size:.95rem;opacity:.9}
.nav a:hover,.nav a[aria-current=page]{background:var(--nav-hover,rgba(0,0,0,.06));opacity:1}
.nav-toggle{display:none;background:transparent;border:2px solid currentColor;border-radius:var(--radius);padding:.45em .7em;font-weight:700;cursor:pointer}
.header-cta{margin-left:8px}
@media (max-width:960px){
  .nav-toggle{display:inline-flex}
  .site-header .nav{display:none;position:absolute;left:0;right:0;top:100%;background:var(--header-bg,var(--surface));color:var(--header-ink,var(--ink));border-bottom:1px solid var(--header-line,var(--line));padding:12px clamp(16px,4vw,32px) 20px;flex-direction:column;align-items:stretch;gap:10px;box-shadow:0 20px 40px rgba(0,0,0,.12)}
  .site-header.open .nav{display:flex}
  .nav ul{flex-direction:column;gap:0}
  .nav a{padding:.8em .6em;font-size:1.05rem;border-bottom:1px solid var(--header-line,var(--line));border-radius:0}
  .header-cta{margin:6px 0 0;width:100%}
}
.page-hero{padding-block:clamp(44px,7vw,88px)}
.page-hero .container{display:grid;gap:18px;max-width:var(--max,1180px)}
.page-hero h1{max-width:18ch}
.trust-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(138px,1fr));gap:12px;list-style:none}
.trust-item{display:grid;gap:4px;padding:14px 16px;border:1px solid var(--line);border-radius:var(--radius);background:var(--surface)}
.trust-item .k{font-weight:700;font-size:.95rem;line-height:1.2}
.trust-item .v{font-size:.82rem;color:var(--muted);line-height:1.35}
.trust-item.pending{opacity:.6;border-style:dashed}
.routes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(16px,2.5vw,28px)}
@media (max-width:760px){.routes{grid-template-columns:minmax(0,1fr)}}
.route-card{display:grid;gap:16px;padding:clamp(22px,3vw,34px);border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);align-content:start}
.route-card.featured{background:var(--brand);color:var(--brand-ink);border-color:var(--brand)}
.route-card ul{list-style:none;display:grid;gap:9px}
.route-card li{display:flex;gap:10px;align-items:flex-start;font-size:.98rem}
.route-card li::before{content:"";flex:none;width:9px;height:9px;border-radius:50%;background:var(--accent);margin-top:.5em}
.route-card .btn{justify-self:start}
.steps{display:grid;gap:clamp(16px,2.5vw,24px);list-style:none;counter-reset:step}
.steps.horizontal{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.steps.horizontal.n4{grid-template-columns:repeat(4,minmax(0,1fr))}
.steps.horizontal.n6{grid-template-columns:repeat(3,minmax(0,1fr))}
@media (max-width:960px){.steps.horizontal.n4,.steps.horizontal.n6{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:600px){.steps.horizontal.n4,.steps.horizontal.n6{grid-template-columns:minmax(0,1fr)}}
.step{display:grid;gap:8px;padding:20px 20px 22px;border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);counter-increment:step;position:relative}
.step .num{font-family:var(--font-mono,var(--font-display));font-weight:700;color:var(--accent-text,var(--accent));font-size:.9rem;letter-spacing:.06em}
.step .num::before{content:"0" counter(step)}
.step h3{font-size:1.1rem}
.step .meta{font-size:.82rem;color:var(--muted);font-weight:600}
.step p{font-size:.95rem;color:var(--ink-2)}
.sectors-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:clamp(14px,2vw,22px)}
.sectors-grid.n6{grid-template-columns:repeat(3,minmax(0,1fr))}
.sectors-grid.n8{grid-template-columns:repeat(4,minmax(0,1fr))}
@media (max-width:960px){.sectors-grid.n6,.sectors-grid.n8{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.sectors-grid.n6,.sectors-grid.n8{grid-template-columns:minmax(0,1fr)}}
.sector-card{display:grid;gap:10px;padding:22px;border-radius:var(--radius-lg);background:var(--surface);border:1px solid var(--line);align-content:start;text-decoration:none;color:inherit}
.sector-card h3{font-size:1.08rem}
.sector-card p{font-size:.93rem;color:var(--ink-2)}
.sector-card .fit{font-size:.8rem;font-weight:700;color:var(--accent-text,var(--accent));letter-spacing:.04em;text-transform:uppercase}
.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--radius-lg);background:var(--surface)}
table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums;min-width:640px}
th,td{padding:13px 14px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top;font-size:.95rem}
th{font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700;background:var(--surface-2)}
tbody tr:last-child td{border-bottom:0}
td.num,th.num{text-align:right}
.kv{display:grid;grid-template-columns:minmax(140px,.9fr) 2fr;gap:0;border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;background:var(--surface)}
.kv>div{padding:13px 16px;border-bottom:1px solid var(--line);font-size:.95rem}
.kv>div:nth-child(odd){font-weight:700;background:var(--surface-2)}
.kv>div:nth-last-child(-n+2){border-bottom:0}
@media (max-width:520px){.kv{grid-template-columns:minmax(0,1fr)}.kv>div:nth-child(odd){border-bottom:0;padding-bottom:4px}.kv>div:nth-last-child(-n+2){border-bottom:1px solid var(--line)}.kv>div:last-child{border-bottom:0}}
.checklist{list-style:none;display:grid;gap:12px}
.checklist li{display:flex;gap:12px;align-items:flex-start}
.checklist li::before{content:"";flex:none;width:22px;height:22px;border-radius:50%;background:var(--accent);margin-top:.1em;-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23000'/%3E%3Cpath d='M7 12.5l3.2 3.2L17 9' stroke='%23fff' stroke-width='2.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23000'/%3E%3Cpath d='M7 12.5l3.2 3.2L17 9' stroke='%23fff' stroke-width='2.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/contain no-repeat}
.founders{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(16px,2.5vw,28px)}
@media (max-width:600px){.founders{grid-template-columns:minmax(0,1fr)}}
.founder{display:grid;gap:12px}
.founder .photo{aspect-ratio:4/3;border-radius:var(--radius-lg);overflow:hidden;background:var(--surface-2)}
.founder .photo img{width:100%;height:100%;object-fit:cover}
.founder h3{font-size:1.15rem}
.founder .role{font-size:.9rem;color:var(--muted);font-weight:600}
.photo-frame{border-radius:var(--radius-lg);overflow:hidden;background:var(--surface-2);position:relative}
.photo-frame img{width:100%;height:100%;object-fit:cover}
.photo-caption{position:absolute;left:12px;bottom:12px;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;background:rgba(0,0,0,.6);color:#fff;padding:5px 9px;border-radius:6px}
.faq{display:grid;gap:10px;max-width:820px}
.faq details{border:1px solid var(--line);border-radius:var(--radius);background:var(--surface);padding:0 18px}
.faq summary{cursor:pointer;padding:16px 0;font-weight:700;list-style:none;display:flex;justify-content:space-between;gap:16px;align-items:center}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-size:1.4rem;line-height:1;color:var(--accent-text,var(--accent));flex:none}
.faq details[open] summary::after{content:"–"}
.faq details p{padding:0 0 18px;color:var(--ink-2);font-size:.97rem}
.cta-band{background:var(--brand);color:var(--brand-ink)}
.cta-band .container{display:grid;grid-template-columns:1.05fr 1fr;gap:clamp(28px,5vw,64px);align-items:start}
@media (max-width:860px){.cta-band .container{grid-template-columns:minmax(0,1fr)}}
.cta-band .eyebrow{color:var(--accent)}
.cta-band .lede{color:inherit;opacity:.9}
.lead-form{display:grid;gap:14px;background:var(--surface);color:var(--ink);padding:clamp(20px,3vw,30px);border-radius:var(--radius-lg)}
.lead-form .row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
@media (max-width:520px){.lead-form .row{grid-template-columns:minmax(0,1fr)}}
.lead-form label{display:grid;gap:6px;font-size:.85rem;font-weight:700}
.lead-form input,.lead-form select,.lead-form textarea{width:100%;padding:.75em .85em;border:1.5px solid var(--line-strong,var(--line));border-radius:var(--radius);background:var(--bg);font-size:1rem}
.lead-form .btn{width:100%}
.lead-form .fine{font-size:.78rem;color:var(--muted)}
.form-done{display:none;padding:14px 16px;border-radius:var(--radius);background:var(--surface-2);font-weight:600}
.lead-form.sent .form-done{display:block}
.contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(28px,5vw,64px);align-items:start}
@media (max-width:860px){.contact-grid{grid-template-columns:minmax(0,1fr)}}
.contact-list{list-style:none;display:grid;gap:14px}
.contact-list li{display:grid;gap:3px}
.contact-list .k{font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700}
.contact-list .v{font-size:1.15rem;font-weight:600}
.site-footer{background:var(--footer-bg,var(--ink));color:var(--footer-ink,#fff);padding-block:clamp(40px,6vw,64px) 28px;font-size:.92rem}
.site-footer .container{display:grid;gap:28px}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:28px}
@media (max-width:860px){.footer-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.footer-grid{grid-template-columns:minmax(0,1fr)}}
.site-footer h4{font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;opacity:.7;margin-bottom:12px;font-family:var(--font-body)}
.site-footer ul{list-style:none;display:grid;gap:8px}
.site-footer a{text-decoration:none;opacity:.9}
.site-footer a:hover{opacity:1;text-decoration:underline}
.footer-legal{border-top:1px solid rgba(255,255,255,.14);padding-top:18px;display:grid;gap:8px;font-size:.8rem;opacity:.8}
.about-split{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(28px,5vw,64px);align-items:center}
@media (max-width:860px){.about-split{grid-template-columns:minmax(0,1fr)}}
.stat-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px}
.stat{display:grid;gap:4px;padding:16px 18px;border-radius:var(--radius);background:var(--surface);border:1px solid var(--line)}
.stat .n{font-family:var(--font-display);font-size:1.8rem;font-weight:800;letter-spacing:-.02em;line-height:1;font-variant-numeric:tabular-nums}
.stat .l{font-size:.82rem;color:var(--muted);font-weight:600}
.promises{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,2vw,22px)}
@media (max-width:640px){.promises{grid-template-columns:minmax(0,1fr)}}
.promise{display:grid;gap:8px;padding:20px;border-left:4px solid var(--accent);background:var(--surface);border-radius:0 var(--radius) var(--radius) 0}
.promise h3{font-size:1.05rem}
.promise p{font-size:.93rem;color:var(--ink-2)}
.band{background:var(--surface-2)}
.band-dark{background:var(--ink);color:#fff}
.inline-list{display:flex;flex-wrap:wrap;gap:8px;list-style:none}
.inline-list li{padding:6px 12px;border-radius:999px;background:var(--surface-2);font-size:.85rem;font-weight:600;border:1px solid var(--line)}
.two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(24px,4vw,56px);align-items:start}
@media (max-width:860px){.two-col{grid-template-columns:minmax(0,1fr)}}
.skip{position:absolute;left:-999px;top:0}
.skip:focus{left:16px;top:16px;background:#fff;color:#000;padding:8px 12px;z-index:100}
`;

export const baseJs = `
(function(){
  var h=document.querySelector('.site-header');var t=document.querySelector('.nav-toggle');
  if(t&&h){t.addEventListener('click',function(){var open=h.classList.toggle('open');t.setAttribute('aria-expanded',open?'true':'false');});}
  document.querySelectorAll('form.lead-form').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();f.classList.add('sent');var d=f.querySelector('.form-done');if(d){d.textContent='Thanks. This is a design mockup, so nothing was sent. On the live site this enquiry goes straight to Phil and the team, with a reply within one working day.';}});});
  var y=document.querySelector('[data-year]');if(y){y.textContent=new Date().getFullYear();}
})();
`;
