// Shared content for all five Solex Solar mockup directions.
// Anything in ph('…') is a placeholder the brothers still need to confirm.
export const ph = (t) => `<span class="ph" title="Placeholder — to be confirmed">${t}</span>`;

export const company = {
  name: 'Solex Solar',
  legal: 'Solex Solar Ltd',
  region: ph('Your region'),
  town: ph('Your town'),
  phone: ph('01234 567 890'),
  email: ph('hello@solexsolar.co.uk'),
  companyNo: ph('Company No.'),
  regOffice: ph('Registered office address'),
  vat: ph('VAT No.'),
  founders: [
    { name: 'Phil Murray', role: 'Director · Electrician', photo: 'installer-portrait.jpg' },
    { name: `${ph('Brother')} Murray`, role: 'Director · Electrician', photo: 'install-flatroof.jpg' },
  ],
};

export const nav = [
  { href: 'index.html', label: 'Home' },
  { href: 'commercial-solar.html', label: 'Commercial solar' },
  { href: 'ppa.html', label: 'Solar PPA' },
  { href: 'sectors.html', label: 'Sectors' },
  { href: 'about.html', label: 'About us' },
  { href: 'contact.html', label: 'Contact' },
];

export const trust = [
  { k: 'Qualified electricians', v: '18th Edition · BS 7671' },
  { k: 'SMSTS', v: 'Site management safety' },
  { k: 'IPAF & PASMA', v: 'Working at height' },
  { k: 'Fully insured', v: `Public liability ${ph('£5m')}` },
  { k: ph('NICEIC / NAPIT'), v: 'Registered contractor' },
  { k: '3+ years commercial PV', v: `${ph('X')} sites · ${ph('Y')} kWp` },
  { k: 'MCS', v: 'Pending — assessment November 2026', pending: true },
];

export const routes = {
  buy: {
    title: 'Buy the system outright',
    lede: 'You own it from day one and keep every kilowatt-hour.',
    points: [
      'Fixed-price design and installation, 30 to 200 kW',
      'Typical payback of 4 to 6 years on a daytime-heavy site',
      'Capital allowances on the full cost',
      `25-year panel warranty · ${ph('5')}-year workmanship warranty`,
    ],
    cta: { href: 'commercial-solar.html', label: 'See what is included' },
  },
  ppa: {
    title: 'Let Solex Solar fund it',
    lede: 'No capital outlay. We own and maintain the system and sell you the power it makes at a fixed rate.',
    points: [
      'We design, install, own, insure and maintain the system',
      'You buy the solar electricity at a fixed price per kWh, below your grid tariff',
      `Agreed term of ${ph('e.g. 20')} years, then the system is yours`,
      'Funded by Solex Solar directly, not a third-party finance house',
    ],
    cta: { href: 'ppa.html', label: 'How a Solex PPA works' },
  },
};

export const ppa = {
  steps: [
    { t: 'Survey and data check', d: 'We survey the roof and look at your half-hourly electricity data to size a system that your site will actually use.' },
    { t: 'We fund and install it', d: 'Solex Solar pays for the design, equipment and installation. There is no cost to you and nothing on your balance sheet.' },
    { t: 'You buy the solar power', d: 'You pay only for the electricity the system generates, at a fixed price per kWh that is below what you pay the grid.' },
    { t: 'We maintain it, then it is yours', d: 'Monitoring, maintenance and insurance are on us for the whole term. At the end, the system transfers to you.' },
  ],
  terms: [
    ['Term', `${ph('e.g. 20 years')}`],
    ['Price of solar power', `${ph('e.g. 12p per kWh')} in year one, against a typical grid rate of 24 to 28p`],
    ['Annual price change', `${ph('e.g. fixed 2% a year')}, so you always know the rate`],
    ['Who pays for the system', 'Solex Solar, from our own funds'],
    ['Maintenance, monitoring, insurance', 'Included for the whole term'],
    ['System size', `${ph('50')} to 200 kW`],
    ['At the end of the term', `System transfers to you for ${ph('£1')}, or we extend, or we remove it`],
  ],
  eligibility: [
    `A roof of roughly 300 m² or more (enough for ${ph('50')} kW)`,
    'Electricity used during the day: manufacturing, cold storage, offices, farms, retail',
    'Freehold, or a lease with 15 or more years to run and landlord consent',
    'Two or more years of trading accounts',
    'A roof in sound condition with 20 or more years of life left',
  ],
  compare: [
    ['', 'Buy outright', 'Solex PPA'],
    ['Up-front cost', 'Full system cost', '£0'],
    ['Who owns the system', 'You, from day one', 'Solex Solar, until the end of the term'],
    ['Your electricity bill', 'Falls by the full value of the solar you use', 'Falls by the gap between the grid rate and the PPA rate'],
    ['Maintenance and insurance', 'Yours (we offer a service plan)', 'Included'],
    ['Capital allowances', 'Yes', 'No, the cost is an operating expense'],
    ['Typical saving, year one, 100 kW', 'About £17,000', 'About £8,000'],
    ['Best for', 'Cash-rich businesses wanting the highest return', 'Businesses that want the saving without the capital'],
  ],
  example: {
    title: 'Illustrative 100 kW PPA',
    rows: [
      ['System', '100 kW, about 222 panels, about 500 m² of roof'],
      ['Generation', 'About 90,000 kWh a year'],
      ['Used on site', 'About 63,000 kWh (70%)'],
      ['Grid price avoided', '25p per kWh'],
      ['PPA price', `${ph('12p')} per kWh`],
      ['Saving, year one', 'About £8,200'],
      ['Your capital outlay', '£0'],
    ],
    note: 'Modelled example, not an installed project. Figures assume 900 kWh per kW per year, a 25p grid rate and 70% on-site use. Your survey will use your own data.',
  },
  faq: [
    ['What if we sell the building or move?', 'The PPA can transfer to the new occupier, or you can buy the system at an agreed value. We set this out in the contract before you sign.'],
    ['Can we buy the system before the end of the term?', `Yes. The contract includes a buy-out price for each year of the term.`],
    ['Who is responsible if something fails?', 'We are. Monitoring, repairs, inverter replacement and insurance are included for the whole term.'],
    ['Does this show up on our balance sheet?', 'A PPA is a contract to buy electricity, not a loan or a lease of equipment. Your accountant should confirm the treatment for your business.'],
    ['Why can a two-person company fund this?', `Because we fund a small number of systems a year from our own money, and we install them ourselves. We are not a finance house; we are the installer.`],
  ],
};

export const systems = {
  note: 'Illustrative figures, not installed projects. Assumptions: 900 kWh per kW per year, a 25p per kWh grid rate, 70% of generation used on site, 5p per kWh export. Your proposal will be modelled on your own roof and your own half-hourly data.',
  rows: [
    { kw: 30, panels: 67, area: 150, gen: 27000, save: 5100, cost: 30000, payback: '5.8', ppa: 2450 },
    { kw: 50, panels: 111, area: 250, gen: 45000, save: 8550, cost: 45000, payback: '5.3', ppa: 4100 },
    { kw: 100, panels: 222, area: 500, gen: 90000, save: 17100, cost: 80000, payback: '4.7', ppa: 8200 },
    { kw: 200, panels: 444, area: 1000, gen: 180000, save: 34200, cost: 150000, payback: '4.4', ppa: 16400 },
  ],
};

export const process = [
  { t: 'Site survey', m: 'Free · about an hour on site', d: 'We measure the roof, check the structure and the electrical intake, and take your half-hourly data away with us.' },
  { t: 'Design and fixed-price proposal', m: 'Within 5 working days', d: 'A modelled design with generation, savings and payback for buying, and the PPA rate if the site qualifies.' },
  { t: 'Grid application', m: 'Typically 4 to 10 weeks', d: 'We make the G99 application to your network operator and handle any conditions they set.' },
  { t: 'Installation', m: '1 to 3 weeks on site', d: 'Our own team, with SMSTS site management, method statements and risk assessments agreed with you before we start.' },
  { t: 'Testing, commissioning and handover', m: '1 to 2 days', d: 'Tested to BS EN 62446. You get the test certificates, the handover pack and monitoring on your phone.' },
  { t: 'Aftercare', m: 'For the life of the system', d: 'Monitoring, an annual inspection and warranty support. On a PPA, all of this is included.' },
];

export const sectors = [
  { t: 'Manufacturing and engineering', d: 'Daytime machine loads are the best possible match for solar. Large steel roofs make 100 to 200 kW straightforward.', fit: '100 to 200 kW' },
  { t: 'Warehousing and logistics', d: 'Big roofs, lighting and charging loads, and tenants who want lower bills without capital.', fit: '100 to 200 kW' },
  { t: 'Agriculture and food processing', d: 'Cooling, drying, milking and processing loads run all day. Barn and shed roofs suit 30 to 100 kW.', fit: '30 to 100 kW' },
  { t: 'Cold storage and refrigeration', d: 'Compressors run hardest when the sun is strongest. Among the fastest paybacks we see.', fit: '50 to 200 kW' },
  { t: 'Offices and business parks', d: 'Air conditioning, IT and lighting during working hours. Flat roofs with ballasted mounting.', fit: '30 to 100 kW' },
  { t: 'Retail and car dealerships', d: 'Long opening hours, lighting and EV charging. A visible commitment customers notice.', fit: '30 to 100 kW' },
  { t: 'Leisure, schools and community buildings', d: 'Sports halls, pools and classrooms use power during the day. Often a good PPA fit.', fit: '30 to 100 kW' },
  { t: 'Hospitality', d: 'Kitchens, laundry and cooling. Hotels and pubs with large roofs can cut a big fixed cost.', fit: '30 to 100 kW' },
];

export const about = {
  headline: 'Two brothers, one trade.',
  story: [
    `Solex Solar was set up in 2026 by brothers Phil and ${ph('Brother')} Murray. We are qualified electricians, and for the last three years we have installed commercial rooftop solar as a subcontract team for a national installer: ${ph('X')} sites and ${ph('Y')} kWp of panels, on everything from trapezoidal warehouse roofs to flat-roof offices.`,
    'That work was carried out under other companies’ contracts, so we cannot show it as our own. What we can show you is exactly how we work, the standards we install to, and, as Solex Solar projects complete, the results.',
    'We set the company up to do two things well: install commercial systems between 30 and 200 kW to a standard we would put our own name on, and fund a number of those systems ourselves so that businesses who do not want to spend capital can still cut their bills.',
  ],
  quals: [
    'Level 3 electrical qualifications and 18th Edition (BS 7671)',
    'SMSTS (Site Management Safety Training Scheme)',
    'IPAF and PASMA working-at-height certificates',
    `${ph('Solar PV Level 3 award')} · ${ph('Battery storage (EESS)')}`,
    `${ph('CSCS / ECS cards')} · ${ph('First aid at work')} · ${ph('Asbestos awareness')}`,
    `MCS solar PV: assessment booked for ${ph('3 November 2026')}; badge added once certified`,
  ],
  insurance: [
    `Public liability ${ph('£5m')}`,
    `Employers’ liability ${ph('£10m')}`,
    `Professional indemnity ${ph('£1m')}`,
    'Contractors all-risks on every install',
  ],
  promises: [
    ['The people who quote are the people who fit', 'No sales reps, no subcontracted install teams. You deal with Phil or ' + ph('Brother') + ' from survey to handover.'],
    ['Fixed price, modelled honestly', 'Savings are modelled on your own data with the assumptions written down. We never present a model as a guarantee.'],
    ['Commercial only', 'We do not do domestic work. Everything we fit is 30 kW or more, on commercial roofs, to commercial standards.'],
    ['Nothing we cannot stand behind', 'Tier-one panels and inverters, fixings specified by the manufacturer for your roof type, and test certificates for every string.'],
  ],
};

export const faq = [
  ['Do you install systems over 50 kW?', 'Yes. MCS certification covers systems up to 50 kW; above that, the work is governed by BS 7671, BS EN 62446 and the G99 grid connection process, which we handle for every size we install.'],
  ['How long does the whole process take?', 'Survey to switch-on is usually 8 to 16 weeks. The grid application is the slowest step, and we submit it as soon as you approve the design.'],
  ['Is my roof suitable?', 'Most steel, membrane and fibre-cement commercial roofs are. We check the structure, the fixings the roof manufacturer allows, and shading. If a roof is not suitable we say so at the survey.'],
  ['Will the panels damage the roof?', 'Mounting systems are specified for your exact roof profile, with the manufacturer’s fixing method, so the roof warranty is protected. We confirm this with the roofing manufacturer where needed.'],
  ['What happens on a cloudy day?', 'The system generates less, and the shortfall comes from the grid as it does now. The savings in our proposals are modelled on real UK irradiance data for your postcode, cloudy days included.'],
  ['What does your workmanship warranty cover?', `Our installation work for ${ph('5')} years, on top of the panel and inverter manufacturers’ warranties, which we register for you.`],
];

export const form = {
  fields: [
    { id: 'name', label: 'Your name', type: 'text' },
    { id: 'company', label: 'Company', type: 'text' },
    { id: 'phone', label: 'Phone', type: 'tel' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'postcode', label: 'Site postcode', type: 'text' },
    { id: 'spend', label: 'Monthly electricity spend', type: 'select', options: ['Under £1,000', '£1,000 to £2,500', '£2,500 to £5,000', 'Over £5,000'] },
    { id: 'interest', label: 'I am interested in', type: 'select', options: ['Buying a system', 'A Solex PPA', 'Not sure yet'] },
  ],
};

export const photos = {
  heroRoof: 'hero-roof-sunset.jpg',
  heroDusk: 'hero-building-dusk.jpg',
  team: 'team-roof-factory.jpg',
  flatroof: 'install-flatroof.jpg',
  drill: 'install-drill.jpg',
  hands: 'install-hands.jpg',
  carry: 'install-carry.jpg',
  harness: 'install-harness.jpg',
  survey: 'survey-tablet.jpg',
  two: 'two-installers.jpg',
  portrait: 'installer-portrait.jpg',
  panels: 'panels-sky.jpg',
  rows: 'array-rows.jpg',
  aerial: 'aerial-rows.jpg',
};
