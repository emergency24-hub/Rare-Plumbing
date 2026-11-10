/* EDIT HERE: company details, services, areas and FAQs. All links and views use this data. */
const SITE = {
  company: 'RARE PLUMBING LONDON LTD',
  displayName: 'RARE Heating & Plumbing Services',
  phone: '07451268940',
  email: 'info@rareplumbing.uk',
  domain: 'rareplumbing.uk',
  address: '85 Great Portland Street, London, England, W1W 7LT',
  companyNumber: '08437753',
  intro: 'Plumbing, heating and boiler services for homes and commercial properties across London.',
  groups: [
    {name:'Heating', image:'heating services.jpg', intro:'Heating systems, controls and repairs.', services:[
      ['Central Heating','Repairs and installation','heating-system.webp','Heating system repairs, upgrades and installation, from radiators and pipework to controls.'],
      ['Underfloor Heating','Install, repair and controls','underfloor heating.webp','Wet underfloor heating installation, fault finding and control adjustments.'],
      ['Smart Thermostats','Heatmiser, Tado and more','heating-controls.webp','Smart thermostat installation and help with heating schedules and connectivity.'],
      ['Power Flushing','Restore heating performance','heating-system.webp','System cleaning to address sludge, cold radiators and poor circulation.'],
      ['Heatmiser Controls','NeoStat and NeoHub','boiler-controls.webp','Installation and troubleshooting for Heatmiser zoning and controls.'],
      ['Commercial Heating','Managed building systems','commerciial gas and heating services.jpg','Heating work for commercial buildings and managed properties.']
    ]},
    {name:'Plumbing', image:'plumbing services.jpg', intro:'Water, pipework and fixtures.', services:[
      ['Plumbing Repairs','Leaks, pipes and fixtures','plumber-working.webp','Repairs to leaks, damaged pipework and everyday plumbing fixtures.'],
      ['Shower & Tap Repairs','Dornbracht, THG Paris and more','bathroom-shower.webp','Diagnosis and repair of showers, taps and associated fittings.'],
      ['Hot Water Cylinders','Megaflo, OSO and unvented','hot-water-system.webp','Cylinder installation, repairs and hot water fault finding.'],
      ['Megaflo Servicing','Annual cylinder service','hot-water-system.webp','Inspection and service for Megaflo and similar unvented hot water cylinders.'],
      ['Water Softeners','BWT, Harvey and Hague','sink-pipework.webp','Water softener selection, installation and plumbing connections.'],
      ['Leak Detection','Find concealed leaks','pipework-detail.webp','Investigating leaks in pipework, fixtures and water systems.'],
      ['Tank Cleaning & Legionella','Water system maintenance','copper-pipework.webp','Cleaning and maintenance enquiries for stored water systems.'],
      ['Commercial Plumbing','Hotels, estates and buildings','commercial catering.webp','Plumbing maintenance and repairs for commercial premises.'],
      ['Hotel Plumbing Services','Hotel maintenance','bathroom-shower.webp','Plumbing support for hotel bathrooms, hot water and building systems.']
    ]},
    {name:'Boilers', image:'boiler-installation.webp', intro:'Repairs, installation and servicing.', services:[
      ['Boiler Repairs','Fault diagnosis and repair','boiler-service.webp','Diagnosis and repair of boiler faults, pressure problems and breakdowns.'],
      ['Combi Boiler Installation','For flats and smaller homes','boiler-installation.webp','Combi boiler replacement and installation tailored to the property.'],
      ['System Boiler Installation','For larger homes','boiler-installation.webp','System boiler installation with appropriate hot water storage and controls.'],
      ['Plant Room Installation','Design and build','commerciial gas and heating services.jpg','Installation enquiries for larger heating and hot water plant rooms.'],
      ['Heat Loss Assessment','Boiler sizing','heating-system.webp','Review the property’s heating needs before choosing a new boiler.'],
      ['Boiler Servicing','Routine service','boiler-service.webp','Routine boiler checks and servicing by an appropriately qualified engineer.'],
      ['Boiler Buying Advice','Compare options','boiler-installation.webp','Discuss boiler types, hot water demand and installation considerations.'],
      ['Commercial Boilers','Larger building systems','commerciial gas and heating services.jpg','Commercial boiler installation, repair and service enquiries.']
    ]}
  ],
  areas: {
    'Central London':['Mayfair','Marylebone','Belgravia','Pimlico','Knightsbridge','South Kensington','Westminster','Covent Garden','Holborn'],
    'North London':['Hampstead','Belsize Park','St John’s Wood','Primrose Hill','West Hampstead','Swiss Cottage','Camden','Islington','Highgate'],
    'West London':['Notting Hill','Paddington','Maida Vale','Holland Park']
  },
  faqs: [
    ['What areas do you cover?','We serve the London areas listed above. Call us to check your address.'],
    ['Can you help with a boiler breakdown?','Yes. Tell us the boiler make, model and the problem you are experiencing when you call.'],
    ['Do you provide quotes before planned work?','Contact us with the scope and property details so we can discuss a quote.'],
    ['Can you work on underfloor heating controls?','We handle underfloor heating and control enquiries, including Heatmiser systems.'],
    ['How do I arrange a visit?','Call us with the issue, your location and a convenient contact number.']
  ]
};
/* END EDIT BLOCK */

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = s => s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const img = s => 'assets/'+encodeURIComponent(s);
const phoneHref = 'tel:+44'+SITE.phone.replace(/^0/,'');
const serviceItems = SITE.groups.flatMap(g=>g.services.map(s=>({group:g.name,title:s[0],short:s[1],image:s[2],description:s[3],slug:slug(s[0])})));
function serviceList(g){return `<div class="service-group"><h3>${esc(g.name)}</h3><div class="service-list">${g.services.map(s=>`<a class="service-link" href="#service/${slug(s[0])}"><span><strong>${esc(s[0])}</strong><small>${esc(s[1])}</small></span></a>`).join('')}</div></div>`}
function home(){return `<section class="hero" id="home"><div class="hero-copy"><p class="eyebrow">Plumbing · Heating · Boilers / London</p><h1>Plumbing, heating &amp; boilers. <em>Handled with care.</em></h1><p class="lead">${esc(SITE.intro)} Tell us what needs attention, and we’ll discuss the next step.</p><div class="hero-actions"><a class="call-link" href="${phoneHref}">Call ${esc(SITE.phone)}</a><a class="btn" href="#services">Browse services</a></div><p class="hero-note">Practical advice for planned work and unexpected repairs.</p></div><div class="hero-image" role="img" aria-label="Plumbing work in a London property"></div></section>
<section class="section container" id="services"><div class="section-head"><div><p class="eyebrow">What we do</p><h2>Plumbing, heating<br>and boiler care.</h2></div><p class="section-intro">Explore our services below. Not sure which one fits? Call us and tell us what’s happening.</p></div><div class="category-grid">${SITE.groups.map((g,i)=>`<a class="category-card" href="#${slug(g.name)}"><img src="${img(g.image)}" alt="${esc(g.name)} service" loading="lazy"><span class="card-content"><small>0${i+1} / Services</small><strong>${esc(g.name)}</strong><span>${esc(g.intro)}</span></span></a>`).join('')}</div></section>
<section class="section muted-band"><div class="container"><div class="section-head"><div><p class="eyebrow">Find your service</p><h2>What do you need help with?</h2></div></div><div class="service-groups">${SITE.groups.map(g=>`<div id="${slug(g.name)}">${serviceList(g)}</div>`).join('')}</div></div></section>
<section class="section container" id="about"><div class="split"><div><p class="eyebrow">About RARE</p><h2>Practical solutions.<br>Thoughtful service.</h2><p>From a leaking tap to a larger heating installation, we work with London homeowners and commercial properties. We start by understanding what needs attention and the needs of the building.</p><p>Call us to discuss the job, your location and the next steps. For planned work, we can talk through the information needed for a quote.</p><a class="btn btn-outline" href="#contact">Contact RARE</a></div><img src="${img('copper-pipework.webp')}" alt="Copper pipework installation" loading="lazy"></div></section>
<section class="section muted-band" id="areas"><div class="container"><div class="section-head"><div><p class="eyebrow">Where we work</p><h2>London, locally.</h2></div><p class="section-intro">We cover the London neighbourhoods listed below. If you are nearby, contact us to check availability.</p></div><div class="area-columns">${Object.entries(SITE.areas).map(([region,places])=>`<div><h3>${esc(region)}</h3><p>${places.map(esc).join(' · ')}</p></div>`).join('')}</div></div></section>
<section class="section container" id="faq"><div class="section-head"><div><p class="eyebrow">Useful answers</p><h2>Your questions, answered.</h2></div></div><div class="faq-list">${SITE.faqs.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>
<section class="container section" id="contact"><div class="contact-panel"><div><p class="eyebrow">Get in touch</p><h2>Tell us what<br>needs attention.</h2><p>Tell us what needs doing and where the property is. Appliance details or photos can also be helpful.</p></div><div class="contact-details"><a href="${phoneHref}">${esc(SITE.phone)}</a><p>${esc(SITE.address)}</p></div></div></section>`}
function detail(s){const related=serviceItems.filter(x=>x.group===s.group&&x.slug!==s.slug).slice(0,5);return `<section class="detail-hero"><div class="detail-copy"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#services">Services</a> / ${esc(s.title)}</div><p class="eyebrow">${esc(s.group)} / London</p><h1 class="page-title">${esc(s.title)}</h1><p>${esc(s.description)}</p><a class="call-link" href="${phoneHref}">Call to discuss</a></div><img class="detail-img" src="${img(s.image)}" alt="${esc(s.title)}" loading="eager"></section><section class="section container detail-main"><div><p class="eyebrow">The service</p><h2>Let’s talk about the work</h2><p>Every property and system is different. Tell us what you are experiencing, where the property is and, if relevant, the appliance make or model. We can discuss the next step and what to prepare for a visit.</p><h2>Related ${esc(s.group.toLowerCase())} work</h2><div class="related">${related.map(x=>`<a href="#service/${x.slug}">${esc(x.title)}</a>`).join('')}</div></div><aside class="detail-aside"><h3>Need to talk it through?</h3><p>Call RARE with the details of your plumbing or heating enquiry.</p><a class="call-link" href="${phoneHref}">Call ${esc(SITE.phone)}</a></aside></section>`}
// Lightweight view transitions; no framework or additional dependencies.
let currentView = '';
let navigationTimer = null;
let revealObserver = null;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let hasRendered = false;

function prepareReveals() {
  if (revealObserver) revealObserver.disconnect();
  const app = $('#app');
  app.classList.remove('reveal-ready');
  if (motionPreference.matches || !('IntersectionObserver' in window)) return;
  const nodes = [...app.querySelectorAll(
    '.hero-copy > .eyebrow, .hero-copy > h1, .hero-copy > .lead, .hero-actions, ' +
    '.section-head, .category-card, .service-group, .split > div, .split > img, ' +
    '.area-columns > div, .faq-list details, .contact-panel, ' +
    '.detail-copy > .breadcrumbs, .detail-copy > .eyebrow, .detail-copy > h1, ' +
    '.detail-copy > p:not(.eyebrow), .detail-main > div, .detail-aside'
  )];
  nodes.forEach((node, i) => {
    node.classList.add('reveal');
    node.style.setProperty('--reveal-delay', `${Math.min(i % 5, 4) * 55}ms`);
  });
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold: .06, rootMargin: '0px 0px -24px 0px'});
  nodes.forEach(node => revealObserver.observe(node));
  requestAnimationFrame(() => app.classList.add('reveal-ready'));
}

function scrollForRoute(route, firstLoad = false) {
  const target = route && route !== 'home' && !route.startsWith('service/')
    ? document.getElementById(route) : null;
  const top = target ? target.getBoundingClientRect().top + window.scrollY - 12 : 0;
  window.scrollTo({top: Math.max(0, top), behavior: firstLoad || motionPreference.matches ? 'auto' : 'smooth'});
}

function render() {
  const route = decodeURIComponent(location.hash.slice(1));
  const service = route.startsWith('service/') ? serviceItems.find(x => x.slug === route.slice(8)) : null;
  const nextView = service ? `service/${service.slug}` : 'home';
  const changing = nextView !== currentView;
  const firstLoad = !hasRendered;
  document.title = service ? `${service.title} | RARE Plumbing London` : 'RARE Plumbing London | Plumbing, Heating & Boilers';
  const navServices = document.querySelector('#nav a[href="#services"]');
  if (service) navServices.setAttribute('aria-current', 'page');
  else navServices.removeAttribute('aria-current');
  clearTimeout(navigationTimer);
  if (!changing) {
    // A quick second click can cancel an outgoing transition. Restore the view.
    $('#app').classList.remove('is-leaving');
    requestAnimationFrame(() => scrollForRoute(route, firstLoad));
    return;
  }
  const app = $('#app');
  const replace = () => {
    app.classList.remove('is-leaving', 'is-entering', 'reveal-ready');
    app.innerHTML = service ? detail(service) : home();
    currentView = nextView;
    hasRendered = true;
    window.scrollTo({top: 0, behavior: 'auto'});
    // Give the DOM one frame to settle before bringing new content in.
    requestAnimationFrame(() => {
      prepareReveals();
      if (!firstLoad && !motionPreference.matches) app.classList.add('is-entering');
      if (!service && route && route !== 'home') scrollForRoute(route, true);
      if (!firstLoad && service) {
        const heading = app.querySelector('h1');
        if (heading) { heading.tabIndex = -1; heading.focus({preventScroll: true}); }
      }
    });
  };
  if (hasRendered && !motionPreference.matches) {
    app.classList.add('is-leaving');
    navigationTimer = setTimeout(replace, 150);
  } else replace();
}

document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-phone]').forEach(a=>{a.href=phoneHref;a.textContent=a.closest('.mobile-call')?'Call RARE · '+SITE.phone:a.classList.contains('nav-call')?'Call now':SITE.phone});document.querySelectorAll('[data-email]').forEach(a=>{a.href='mailto:'+SITE.email;a.textContent=SITE.email});document.querySelectorAll('[data-company]').forEach(e=>e.textContent=SITE.company);document.querySelectorAll('[data-address]').forEach(e=>e.textContent=SITE.address);document.querySelectorAll('[data-number]').forEach(e=>e.textContent=SITE.companyNumber);document.querySelectorAll('[data-domain]').forEach(a=>{a.href='https://'+SITE.domain;a.textContent=SITE.domain});$('#year').textContent=new Date().getFullYear();$('.menu-toggle').addEventListener('click',()=>{let n=$('#nav'),open=n.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(open));$('.menu-toggle').textContent=open?'Close':'Menu'});$('#nav').addEventListener('click',e=>{if(e.target.closest('a')){$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');$('.menu-toggle').textContent='Menu'}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#nav').classList.contains('open')){$('#nav').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');$('.menu-toggle').textContent='Menu';$('.menu-toggle').focus()}});document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||currentView!=='home')return;const section=a.getAttribute('href').slice(1);if(!section||section.startsWith('service/')||!document.getElementById(section))return;e.preventDefault();if(location.hash!=='#'+section){try{history.pushState(null,'','#'+section)}catch{location.hash=section}}scrollForRoute(section)});render()});window.addEventListener('hashchange',render);
