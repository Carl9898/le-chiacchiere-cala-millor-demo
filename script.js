/* ------------------------------------------------------------------
   Le Chiacchiere — Cala Millor
   Data verified from Facebook (Ristorantelechiacchiere), Google Maps,
   Google Reviews, menu-world.com.
   Menu items: only those mentioned in user reviews — nothing invented.
------------------------------------------------------------------- */

// ---------- EMPFEHLUNGEN (aus Google-Reviews verifizierte Gerichte, OHNE Preise) ----------
const RECS = [
  { de:{n:"Burrata",                          d:"Cremiger Frischkäse, perfekter Start für jeden Abend."}, en:{n:"Burrata",                          d:"Creamy fresh cheese — the perfect way to start the evening."}, es:{n:"Burrata",                          d:"Queso cremoso fresco, el comienzo perfecto."} },
  { de:{n:"Hausgemachte Ravioli",             d:"Spinat oder Lachs — die Pasta wird täglich frisch von Hand gemacht."}, en:{n:"Home-made Ravioli",                d:"Spinach or salmon — pasta made fresh by hand every day."}, es:{n:"Ravioli caseros",                  d:"Espinacas o salmón — pasta hecha a mano cada día."} },
  { de:{n:"Pesto Pasta",                      d:"Klassisch, aromatisch. Ein Liebling der Stammgäste."}, en:{n:"Pesto Pasta",                      d:"Classic, aromatic — a regular favourite."}, es:{n:"Pasta al Pesto",                   d:"Clásica y aromática, la favorita de los habituales."} },
  { de:{n:"Carbonara",                        d:"Wie in Rom — Ei, Pecorino, Guanciale. Keine Sahne."}, en:{n:"Carbonara",                        d:"Roman style — egg, Pecorino, guanciale. No cream."}, es:{n:"Carbonara",                        d:"Estilo romano — huevo, pecorino, guanciale. Sin nata."} },
  { de:{n:"Pizza Ziegenkäse · Honig · Zwiebel", d:"Unser Signature — taucht in fast jeder Bewertung auf."}, en:{n:"Pizza Goat-Cheese · Honey · Onion", d:"Our signature — mentioned in almost every review."}, es:{n:"Pizza Queso de Cabra · Miel · Cebolla", d:"Nuestra estrella — aparece en casi todas las reseñas."} },
  { de:{n:"Tagesgerichte",                    d:"Wechselnde Specials, persönlich am Tisch vorgelesen."}, en:{n:"Daily Specials",                   d:"Rotating specials, read to you at the table."}, es:{n:"Platos del día",                   d:"Especiales rotativos, leídos en la mesa."} },
  { de:{n:"Hausgemachte Desserts",            d:"Tarten und Süßspeisen aus eigener Küche."}, en:{n:"Home-made Desserts",                d:"Tarts and sweets made in-house."}, es:{n:"Postres caseros",                  d:"Tartas y dulces hechos en casa."} },
  { de:{n:"Italienische Weine",               d:"Sorgfältig ausgewählt. Der Inhaber empfiehlt persönlich."}, en:{n:"Italian Wines",                     d:"Carefully curated. The owner recommends personally."}, es:{n:"Vinos italianos",                  d:"Cuidadosamente seleccionados. El dueño recomienda en persona."} }
];

// ---------- I18N ----------
const I18N = {
  de: {
    "nav.menu":"Empfehlungen","nav.gallery":"Eindrücke","nav.story":"Über uns","nav.visit":"Besuch",
    "cta.reserve":"Reservieren",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Familienbetrieb. Italienisch. Mit Liebe.",
    "hero.sub":"Handgemachte Pasta, ausgewählte Weine und persönlicher Service in einer Seitenstraße von Cala Millor.",
    "hero.reserve":"Tisch reservieren",
    "hero.hours":"Do – Di · 19:00 – 22:30  ·  So auch 13:00 – 15:00  ·  Mi Ruhetag",
    "hero.rating":"★ 4,7 · 676 Bewertungen",
    "gallery.kicker":"Eindrücke",
    "gallery.title":"Wie es bei uns aussieht.",
    "gallery.note":"Symbolbilder – auf Anfrage tauschen wir gegen echte Fotos eurer Gerichte und eures Lokals.",
    "story.kicker":"Über uns",
    "story.title":"Ein Hidden Gem in Cala Millor.",
    "story.p1":"Le Chiacchiere ist ein familiengeführter Italiener — geleitet von einem italienischen Wirt, der seine Gäste persönlich kennt und Wein wie ein Connaisseur empfiehlt.",
    "story.p2":"Pasta wird täglich von Hand gemacht, die Tagesgerichte werden persönlich am Tisch vorgelesen, die Weinkarte ist sorgfältig ausgewählt. Drinnen warmes Licht, draußen Sitzplätze unter freiem Himmel.",
    "story.statRating":"676 Google-Bewertungen",
    "story.statFb":"Empfehlungen auf Facebook",
    "story.statPrice":"pro Person",
    "menu.kicker":"Empfehlungen",
    "menu.title":"Was unsere Gäste lieben.",
    "menu.note":"Wechselnde Tagesgerichte trägt der Wirt persönlich am Tisch vor. Die komplette Karte und Weinliste gibt es vor Ort.",
    "visit.kicker":"Besuch",
    "visit.title":"Carrer na Llambies, 21 — Cala Millor",
    "visit.hoursLabel":"Öffnungszeiten",
    "visit.hoursMain":"Donnerstag – Dienstag · 19:00 – 22:30",
    "visit.hoursSunday":"Sonntag zusätzlich · 13:00 – 15:00",
    "visit.hoursClosed":"Mittwoch geschlossen",
    "visit.addressLabel":"Adresse",
    "visit.contactLabel":"Kontakt",
    "visit.callCta":"Anrufen zum Reservieren",
    "footer.tag":"Italienisch. Familiengeführt. Mit Liebe.",
    "footer.findUs":"Wo wir sind",
    "footer.hours":"Öffnungszeiten",
    "footer.hoursLine":"Do – Di · 19:00 – 22:30",
    "footer.hoursSunday":"So zusätzlich · 13:00 – 15:00",
    "footer.closed":"Mi geschlossen",
    "footer.contact":"Kontakt"
  },
  en: {
    "nav.menu":"Recommendations","nav.gallery":"Impressions","nav.story":"About","nav.visit":"Visit",
    "cta.reserve":"Book",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Family-run. Italian. With love.",
    "hero.sub":"Handmade pasta, hand-picked wines and personal service in a small side street of Cala Millor.",
    "hero.reserve":"Book a table",
    "hero.hours":"Thu – Tue · 19:00 – 22:30  ·  Sun also 13:00 – 15:00  ·  Wed closed",
    "hero.rating":"★ 4.7 · 676 reviews",
    "gallery.kicker":"Impressions",
    "gallery.title":"What it looks like inside.",
    "gallery.note":"Sample photos — happy to swap for real photos of your dishes and restaurant on request.",
    "story.kicker":"About",
    "story.title":"A hidden gem in Cala Millor.",
    "story.p1":"Le Chiacchiere is a family-run Italian — led by an Italian host who knows his guests personally and recommends wine like a true connoisseur.",
    "story.p2":"Pasta is made by hand every day, daily specials are read to you at the table, and the wine list is carefully curated. Warm light inside, open-air seating outside.",
    "story.statRating":"676 Google reviews",
    "story.statFb":"Facebook recommendations",
    "story.statPrice":"per person",
    "menu.kicker":"Recommendations",
    "menu.title":"What our guests love.",
    "menu.note":"Daily specials are read to you at the table. The full menu and wine list are available at the restaurant.",
    "visit.kicker":"Visit",
    "visit.title":"Carrer na Llambies, 21 — Cala Millor",
    "visit.hoursLabel":"Hours",
    "visit.hoursMain":"Thursday – Tuesday · 19:00 – 22:30",
    "visit.hoursSunday":"Sunday lunch · 13:00 – 15:00",
    "visit.hoursClosed":"Wednesday closed",
    "visit.addressLabel":"Address",
    "visit.contactLabel":"Contact",
    "visit.callCta":"Call to book",
    "footer.tag":"Italian. Family-run. With love.",
    "footer.findUs":"Find us",
    "footer.hours":"Hours",
    "footer.hoursLine":"Thu – Tue · 19:00 – 22:30",
    "footer.hoursSunday":"Sun lunch · 13:00 – 15:00",
    "footer.closed":"Wed closed",
    "footer.contact":"Contact"
  },
  es: {
    "nav.menu":"Recomendaciones","nav.gallery":"Imágenes","nav.story":"Sobre nosotros","nav.visit":"Visita",
    "cta.reserve":"Reservar",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Familiar. Italiano. Con cariño.",
    "hero.sub":"Pasta hecha a mano, vinos seleccionados y servicio personal en una callejuela de Cala Millor.",
    "hero.reserve":"Reservar mesa",
    "hero.hours":"Jue – Mar · 19:00 – 22:30  ·  Dom también 13:00 – 15:00  ·  Mié cerrado",
    "hero.rating":"★ 4,7 · 676 reseñas",
    "gallery.kicker":"Imágenes",
    "gallery.title":"Así somos por dentro.",
    "gallery.note":"Imágenes de muestra — las cambiamos por fotos reales de vuestros platos y del local a petición.",
    "story.kicker":"Sobre nosotros",
    "story.title":"Un rincón con encanto en Cala Millor.",
    "story.p1":"Le Chiacchiere es un italiano familiar — dirigido por un anfitrión italiano que conoce a sus clientes personalmente y recomienda vino como un verdadero conocedor.",
    "story.p2":"La pasta se hace a mano cada día, los platos del día se leen en la mesa, la carta de vinos está cuidadosamente seleccionada. Dentro, luz cálida; fuera, mesas al aire libre.",
    "story.statRating":"676 reseñas Google",
    "story.statFb":"Recomendado en Facebook",
    "story.statPrice":"por persona",
    "menu.kicker":"Recomendaciones",
    "menu.title":"Lo que más gusta a nuestros clientes.",
    "menu.note":"Los platos del día se leen en la mesa. La carta completa y la lista de vinos están en el restaurante.",
    "visit.kicker":"Visita",
    "visit.title":"Carrer na Llambies, 21 — Cala Millor",
    "visit.hoursLabel":"Horario",
    "visit.hoursMain":"Jueves – martes · 19:00 – 22:30",
    "visit.hoursSunday":"Domingo mediodía · 13:00 – 15:00",
    "visit.hoursClosed":"Miércoles cerrado",
    "visit.addressLabel":"Dirección",
    "visit.contactLabel":"Contacto",
    "visit.callCta":"Llamar para reservar",
    "footer.tag":"Italiano. Familiar. Con cariño.",
    "footer.findUs":"Dónde estamos",
    "footer.hours":"Horario",
    "footer.hoursLine":"Jue – Mar · 19:00 – 22:30",
    "footer.hoursSunday":"Dom mediodía · 13:00 – 15:00",
    "footer.closed":"Mié cerrado",
    "footer.contact":"Contacto"
  }
};

let currentLang = 'de';

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang] && I18N[lang][key];
    if (val) el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
  renderRecs();
}

function renderRecs(){
  const grid = document.getElementById('recGrid');
  if (!grid) return;
  grid.innerHTML = RECS.map(r => {
    const t = r[currentLang] || r.de;
    return `<article class="rec-card"><h3>${t.n}</h3><p>${t.d}</p></article>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyI18n(b.dataset.lang));
  });

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <a href="#empfehlungen" data-i18n="nav.menu">Empfehlungen</a>
    <a href="#eindruecke" data-i18n="nav.gallery">Eindrücke</a>
    <a href="#historia" data-i18n="nav.story">Über uns</a>
    <a href="#visitanos" data-i18n="nav.visit">Besuch</a>
    <a href="tel:+34971586523" class="btn btn-primary" data-i18n="cta.reserve">Reservieren</a>
  `;
  document.body.appendChild(nav);
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }));

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyI18n('de');
});
