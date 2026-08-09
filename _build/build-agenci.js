/* Generator podstron agentów.
   Uruchomienie:  node _build/build-agenci.js
   Wynik:         /agenci/<slug>/index.html  (8 plików)

   Treść siedzi w _build/agenci-content.js — tam się ją poprawia.
   Katalog /agenci/index.html jest pisany ręcznie i NIE jest nadpisywany. */

const fs = require('fs');
const path = require('path');
const agents = require('./agenci-content');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://aiforbusiness24.com';

const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const attr = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const li = arr => arr.map(x => `        <li>${esc(x)}</li>`).join('\n');

function page(a, others) {
  const url = `${SITE}/agenci/${a.slug}/`;

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map(([q, ans]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: ans }
    }))
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Agenci AI', item: SITE + '/agenci/' },
      { '@type': 'ListItem', position: 3, name: a.name, item: url }
    ]
  };

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(a.title)} | aiforbusiness24</title>
  <meta name="description" content="${attr(a.meta)}">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${attr(a.title)}">
  <meta property="og:description" content="${attr(a.meta)}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="article">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/agenci/agenci.css?v=2">
  <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>
  <script type="application/ld+json">${JSON.stringify(faqLd)}</script>
</head>
<body>

<nav class="nav">
  <a href="/" class="nav-logo">ai<span>for</span>business24</a>
  <ul class="nav-links">
    <li><a href="/agenci/" class="active">Agenci AI</a></li>
    <li><a href="/#services">Usługi</a></li>
    <li><a href="/#about">O nas</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="/#contact" class="nav-cta">Kontakt</a></li>
  </ul>
</nav>

<div class="shell">
  <p class="crumbs"><a href="/">Strona główna</a><span>›</span><a href="/agenci/">Agenci AI</a><span>›</span>${esc(a.name)}</p>
</div>

<header class="agent-hero">
  <div class="shell">
    <div class="label">${esc(a.cat)}</div>
    <h1>${esc(a.h1)}</h1>
    <p class="lede">${esc(a.lede)}</p>
    <div class="btns">
      <a href="/#contact" class="btn btn-primary">Umów bezpłatną konsultację</a>
      <a href="#flow" class="btn btn-secondary">Zobacz, jak pracuje</a>
    </div>
  </div>
</header>

<main>

  <section class="section">
    <div class="shell">
      <div class="demo-inline" id="flow" data-slug="${attr(a.slug)}">
        <div class="demo-head"><div>
          <h2>Jak wygląda jedno zadanie tego agenta</h2>
          <p>Od zdarzenia, które go uruchamia, do gotowego wyniku.</p>
        </div></div>
        <div class="demo-note">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="7.5" x2="12" y2="7.6"/></svg>
          <span><b>Przebieg poglądowy</b> — pokazuje kolejność pracy agenta, nie zapis prawdziwej sesji. Działanie na żywo pokazujemy na konsultacji.</span>
        </div>
        <div class="demo-body">
          <div class="flow-steps"></div>
          <div class="demo-actions">
            <button class="replay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.5 15a9 9 0 102.1-9.4L1 10"/></svg> Odtwórz ponownie <span class="kbd">R</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <h2>Jak to działa w praktyce</h2>
${a.how.map(p => `      <p>${esc(p)}</p>`).join('\n')}
${a.proof ? `      <p style="color:var(--white);border-left:2px solid var(--blue);padding-left:16px;margin-top:22px">${esc(a.proof)}</p>` : ''}
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <h2>Dla kogo i z czym się łączy</h2>
      <div class="cols">
        <div class="box">
          <h3>Sprawdza się w firmach takich jak</h3>
          <ul>
${li(a.who)}
          </ul>
        </div>
        <div class="box">
          <h3>Łączy się z</h3>
          <ul>
${li(a.with)}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <h2>Czego ten agent nie robi</h2>
      <p>Piszemy o tym wprost, bo granice wychodzą i tak — lepiej na początku niż po wdrożeniu.</p>
      <div class="cols" style="grid-template-columns:1fr">
        <div class="box limits">
          <ul>
${li(a.limits)}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <h2>Częste pytania</h2>
${a.faq.map(([q, ans]) => `      <div class="faq-item">
        <h3>${esc(q)}</h3>
        <p>${esc(ans)}</p>
      </div>`).join('\n')}
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <h2>Pozostali agenci</h2>
      <div class="cols">
${others.map(o => `        <a class="box" href="/agenci/${o.slug}/">
          <div class="agent-cat">${esc(o.cat)}</div>
          <h3 style="margin:4px 0 8px">${esc(o.name)}</h3>
          <p style="font-size:.9rem">${esc(o.lede)}</p>
        </a>`).join('\n')}
      </div>
      <p style="margin-top:24px"><a href="/agenci/" style="color:var(--blue);font-weight:600">Zobacz wszystkich ośmiu agentów →</a></p>
    </div>
  </section>

  <div class="shell">
    <div class="cta-band">
      <h2>Sprawdźmy to na Waszym procesie</h2>
      <p>Bezpłatna konsultacja: przechodzimy przez Wasz obieg pracy i mówimy wprost, czy ten agent ma u Was sens — także wtedy, gdy odpowiedź brzmi „nie”.</p>
      <a href="/#contact" class="btn btn-primary">Umów bezpłatną konsultację</a>
    </div>
  </div>

</main>

<footer class="foot">
  <p>© 2026 AI for Business 24 · <a href="/">Strona główna</a> · <a href="/agenci/">Agenci AI</a> · <a href="/blog/">Blog</a> · <a href="/#contact">Kontakt</a></p>
</footer>

<script src="/agenci/agenci.js?v=2"></script>
</body>
</html>
`;
}

/* ─── zapis ─── */
let written = 0;
agents.forEach((a, i) => {
  const others = [agents[(i + 1) % agents.length], agents[(i + 2) % agents.length], agents[(i + 3) % agents.length]];
  const dir = path.join(ROOT, 'agenci', a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(a, others), 'utf8');
  written++;
  console.log('  ✓ /agenci/' + a.slug + '/');
});

/* ─── wpisy do sitemapy (do wklejenia / porównania) ─── */
const today = new Date().toISOString().slice(0, 10);
const entries = ['/agenci/', ...agents.map(a => `/agenci/${a.slug}/`)]
  .map(p => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${p === '/agenci/' ? '0.9' : '0.8'}</priority>\n  </url>`)
  .join('\n');
fs.writeFileSync(path.join(__dirname, 'sitemap-agenci.xml'), entries + '\n', 'utf8');

console.log(`\n${written} podstron zbudowanych. Wpisy do sitemapy: _build/sitemap-agenci.xml`);
