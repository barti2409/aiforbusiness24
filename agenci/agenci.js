/* ─────────────────────────────────────────────────────────────
   Katalog agentów AI — dane przebiegów + silnik demo
   Używany przez /agenci/ (modal) i podstrony agentów (inline).

   UWAGA: przebiegi są POGLĄDOWE — pokazują kolejność pracy
   agenta, a nie zapis prawdziwej sesji. Plakietka informująca
   o tym jest wstawiana z kodu i nie da się jej wyłączyć
   parametrem, żeby nie dało się jej przypadkiem zgubić.
   ───────────────────────────────────────────────────────────── */

const ICONS = {
  phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12 19.79 19.79 0 01.88 3.4 2 2 0 012.86 1.22h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.05-1.05a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
  bolt: '<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  doc: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5A3.5 3.5 0 0011.5 8h-.75A2.75 2.75 0 0011.5 13.5h1A2.75 2.75 0 0113 19h-1.5A3.5 3.5 0 019 16.5"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="19" x2="12" y2="21"/>',
  users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
  scan: '<path d="M3 7V5a2 2 0 012-2h2"/><path d="M17 3h2a2 2 0 012 2v2"/><path d="M21 17v2a2 2 0 01-2 2h-2"/><path d="M7 21H5a2 2 0 01-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5 10.1 11.9 4.5 10l5.6-1.4z"/><path d="M18.5 16l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  radar: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="12" x2="19" y2="6.5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>'
};

const AGENTS = {
  'recepcjonistka-ai': {
    name: 'Recepcjonistka AI',
    cat: 'Obsługa klienta',
    icon: 'phone',
    lede: 'Odbiera telefon wtedy, kiedy Ty nie możesz — i kończy rozmowę rezerwacją, nie obietnicą oddzwonienia.',
    steps: [
      { t: 'Odbiera połączenie', d: 'Wtorek, 19:42 — salon zamknięty od godziny', ms: 900 },
      { t: 'Rozpoznaje, o co chodzi', d: '„Chciałabym umówić się na strzyżenie i koloryzację”', ms: 1100 },
      { t: 'Sprawdza wolne terminy', d: 'Kalendarz — trzy wolne okna w tym tygodniu', ms: 1000 },
      { t: 'Proponuje i potwierdza', d: 'Czwartek 16:30, stylistka Ania, ok. 2 godziny', ms: 1100 },
      { t: 'Zapisuje rezerwację', d: 'Wpis w kalendarzu + karta klientki w systemie', ms: 900 },
      { t: 'Wysyła SMS z potwierdzeniem', d: 'Termin, adres, link do odwołania', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Rezerwacja domknięta bez udziału pracownika',
      sub: 'Ten telefon o 19:42 trafiłby normalnie na pocztę głosową. Część takich klientów nie dzwoni drugi raz — dzwoni do konkurencji.'
    }
  },

  'agent-pierwszej-odpowiedzi': {
    name: 'Agent pierwszej odpowiedzi',
    cat: 'Sprzedaż',
    icon: 'bolt',
    lede: 'Odpowiada na zapytanie w minutę od jego wysłania, kwalifikuje klienta i umawia rozmowę w Twoim kalendarzu.',
    steps: [
      { t: 'Wychwytuje zapytanie', d: 'Formularz na stronie, 22:15 w niedzielę', ms: 800 },
      { t: 'Odpowiada w niecałą minutę', d: 'WhatsApp — z imieniem i konkretem z zapytania', ms: 1000 },
      { t: 'Zadaje trzy pytania', d: 'Zakres, termin realizacji, orientacyjny budżet', ms: 1200 },
      { t: 'Ocenia zapytanie', d: 'Termin w tym miesiącu, budżet w widełkach → gorący lead', ms: 900 },
      { t: 'Proponuje termin rozmowy', d: 'Tylko wolne sloty z Twojego kalendarza', ms: 1000 },
      { t: 'Przekazuje handlowcowi', d: 'Notatka z rozmowy i ocena trafiają do CRM', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'W poniedziałek rano masz umówioną rozmowę, nie zimne zapytanie',
      sub: 'W usługach o wyborze wykonawcy bardzo często decyduje ten, kto odezwał się pierwszy — reszta odpowiada już do klienta, który podjął decyzję.'
    }
  },

  'agent-ofertowy': {
    name: 'Agent ofertowy',
    cat: 'Sprzedaż',
    icon: 'doc',
    lede: 'Z zapytania albo notatki z rozmowy składa gotową ofertę w Twoim szablonie i wysyła ją tego samego dnia.',
    steps: [
      { t: 'Przyjmuje dane wejściowe', d: 'Formularz, mail albo notatka głosowa z rozmowy', ms: 900 },
      { t: 'Dopytuje o braki', d: 'Metraż, termin, zakres prac — zanim policzy', ms: 1100 },
      { t: 'Dobiera pozycje z cennika', d: 'Z Twojego cennika — bez zgadywania stawek', ms: 1100 },
      { t: 'Składa ofertę', d: 'PDF w Twoim szablonie: logo, warunki, termin ważności', ms: 1000 },
      { t: 'Wysyła i archiwizuje', d: 'Mail do klienta, kopia w folderze firmowym', ms: 800 },
      { t: 'Przypomina po trzech dniach', d: 'Jeśli klient nie odpisał', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Oferta u klienta tego samego dnia — a nie w niedzielę wieczorem',
      sub: 'To agent, którego właściciel firmy kupuje dla siebie: wyceny są tą częścią pracy, która najczęściej zostaje na po godzinach.'
    }
  },

  'agent-od-platnosci': {
    name: 'Agent od płatności',
    cat: 'Back-office',
    icon: 'coin',
    lede: 'Pilnuje przeterminowanych faktur i wysyła przypomnienia co do dnia — uprzejmie, ale konsekwentnie.',
    steps: [
      { t: 'Przegląda faktury', d: 'Codziennie rano, dane z systemu księgowego', ms: 900 },
      { t: 'Wyłapuje przeterminowane', d: 'Progi: 3, 14 i 30 dni po terminie', ms: 900 },
      { t: 'Dobiera ton wiadomości', d: 'Inny przy trzech dniach, inny przy trzydziestu', ms: 1100 },
      { t: 'Wysyła przypomnienie', d: 'Mail lub SMS z numerem faktury i kwotą', ms: 900 },
      { t: 'Odnotowuje odpowiedź', d: '„Zapłacę w piątek” → kolejne sprawdzenie w piątek', ms: 1000 },
      { t: 'Eskaluje do Ciebie', d: 'Tylko te sprawy, które wymagają Twojej decyzji', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Przypomnienia wychodzą zawsze — bez odkładania niezręcznego telefonu',
      sub: 'Jedyny agent na tej liście, którego opłacalność klient policzy sam, w kilka sekund: wystarczy, że spojrzy na saldo przeterminowanych należności.'
    }
  },

  'agent-rekrutacyjny': {
    name: 'Agent rekrutacyjny',
    cat: 'Back-office',
    icon: 'users',
    lede: 'Zbiera zgłoszenia z wszystkich źródeł, odsiewa niepasujące i umawia rozmowy tylko z kandydatami spełniającymi wymagania.',
    steps: [
      { t: 'Zbiera zgłoszenia', d: 'Portale ogłoszeniowe, formularz, mail — w jednym miejscu', ms: 900 },
      { t: 'Czyta CV', d: 'Uprawnienia, doświadczenie, lokalizacja, dyspozycyjność', ms: 1100 },
      { t: 'Odpisuje odrzuconym', d: 'Kandydat dostaje informację zwrotną, nie ciszę', ms: 900 },
      { t: 'Kontaktuje się z pasującymi', d: 'SMS w kilkanaście minut od zgłoszenia', ms: 1000 },
      { t: 'Weryfikuje twarde wymagania', d: 'Np. kategoria C+E i aktualne badania', ms: 1000 },
      { t: 'Umawia rozmowę', d: 'Z wolnych terminów rekrutera', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Na rozmowę wchodzą wyłącznie kandydaci, którzy spełniają wymagania',
      sub: 'Wdraża się tam, gdzie rekrutacja nigdy się nie kończy: transport, logistyka, produkcja, gastronomia.'
    }
  },

  'agent-od-dokumentow': {
    name: 'Agent od dokumentów',
    cat: 'Back-office',
    icon: 'scan',
    lede: 'Odczytuje faktury i dokumenty, sprawdza je z zamówieniami i wrzuca tam, gdzie mają trafić — zgłaszając tylko wyjątki.',
    steps: [
      { t: 'Odbiera dokument', d: 'Mail, zdjęcie z telefonu albo folder współdzielony', ms: 800 },
      { t: 'Odczytuje dane', d: 'Sprzedawca, NIP, kwota netto, VAT, termin płatności', ms: 1100 },
      { t: 'Porównuje z zamówieniem', d: 'Kwota niezgodna z zamówieniem → wstrzymanie', ms: 1000 },
      { t: 'Nadaje kategorię kosztu', d: 'Według Twojego układu kont', ms: 900 },
      { t: 'Zapisuje w systemie', d: 'Księgowość plus archiwum z nazwą wg schematu', ms: 900 },
      { t: 'Zgłasza wyjątki', d: 'Duplikat, brak NIP, kwota odbiegająca od normy', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Zamiast segregatora faktur — krótka lista spraw do sprawdzenia',
      sub: 'Tu wartość nie leży w samym odczycie tekstu, tylko w wpięciu go w Twój obieg dokumentów. Sam OCR ma dziś każdy program księgowy.'
    }
  },

  'agent-marketingowy': {
    name: 'Agent marketingowy',
    cat: 'Marketing',
    icon: 'spark',
    proof: true,
    lede: 'Pisze posty, karuzele i kreacje reklamowe na podstawie bazy wiedzy Twojej marki — i sprawdza, czy każdy konkret ma pokrycie.',
    steps: [
      { t: 'Czyta bazę wiedzy marki', d: 'Oferta, ton, grupa docelowa oraz to, czego NIE robicie', ms: 1000 },
      { t: 'Proponuje tematy', d: 'Z pytań i obaw, które mają Wasi klienci', ms: 1000 },
      { t: 'Pisze narrację', d: 'Hook → problem → rozwiązanie → dowód → wezwanie do działania', ms: 1200 },
      { t: 'Sprawdza fakty', d: 'Liczby i nazwy bez pokrycia w bazie idą do poprawki', ms: 1100 },
      { t: 'Generuje grafiki', d: 'Typografia nakładana osobno — polskie znaki bez usterek', ms: 1100 },
      { t: 'Oddaje do akceptacji', d: 'Poprawiasz pojedynczy slajd, nie całość od nowa', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Gotowa karuzela albo kreacja — oparta na faktach, nie na domysłach modelu',
      sub: 'To nie jest zapowiedź: ten agent działa w naszej platformie app.aiforbusiness24 i możemy pokazać go na żywo.'
    }
  },

  'agent-zwiadowczy': {
    name: 'Agent zwiadowczy',
    cat: 'Marketing',
    icon: 'radar',
    proof: true,
    lede: 'Pokazuje, jakie reklamy prowadzi Twoja konkurencja, na czym gra — i czego nie mówi nikt w Waszej branży.',
    steps: [
      { t: 'Wyszukuje reklamodawców', d: 'Biblioteka reklam Meta, dopasowanie dokładną frazą', ms: 1000 },
      { t: 'Pobiera aktywne reklamy', d: 'Treść, zasięg w UE, data uruchomienia', ms: 1000 },
      { t: 'Usuwa duplikaty', d: 'Jedna reklama wraca jako kilka wariantów kreacji', ms: 900 },
      { t: 'Analizuje kąty perswazji', d: 'Cena, strach, prestiż, wygoda — czym kto przekonuje', ms: 1200 },
      { t: 'Szuka luk', d: 'Argumenty, których nie używa nikt w branży', ms: 1000 },
      { t: 'Wysyła raport', d: 'Mailem albo na Slacka, w stałym rytmie', ms: 800 }
    ],
    result: {
      label: 'Efekt',
      value: 'Wiesz, na co konkurencja wydaje budżet — i gdzie zostawiła Ci miejsce',
      sub: 'Też działa u nas na produkcji, na oficjalnym API Meta. Dane pochodzą z publicznej biblioteki reklam, nie z kont reklamowych konkurencji.'
    }
  }
};

/* ─── SILNIK PRZEBIEGU ─────────────────────────────────────── */

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* ── SCHEMAT WĘZŁOWY ────────────────────────────────────────
   Układ „wężykiem": trzy węzły w rzędzie, kolejny rząd w drugą
   stronę. Dzięki temu sześć kroków mieści się w kadrze pionowym,
   zamiast uciekać w bok jak przy jednym długim rzędzie.
   ───────────────────────────────────────────────────────── */

const G = {
  W: 280, H: 104,           // węzeł
  COLS: [60, 390, 720],     // lewe krawędzie kolumn
  ROW_Y: r => 60 + r * 172,
  VB_W: 1060,
  EDGE_MS: 420
};

function nodePos(i) {
  const row = Math.floor(i / 3);
  const inRow = i % 3;
  const col = row % 2 === 0 ? inRow : 2 - inRow; // parzysty rząd w prawo, nieparzysty w lewo
  return { x: G.COLS[col], y: G.ROW_Y(row), row, dirRight: row % 2 === 0 };
}

/** Łamie etykietę na maks. dwie linie — węzeł ma stałą szerokość. */
function wrap(text, maxChars, maxLines) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  words.forEach(w => {
    if (!line.length) line = w;
    else if ((line + ' ' + w).length <= maxChars) line += ' ' + w;
    else { lines.push(line); line = w; }
  });
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/[,.;]$/, '') + '…';
    return kept;
  }
  return lines;
}

function edgePath(i, n) {
  const A = nodePos(i);
  const last = i === n - 1;
  const B = last ? null : nodePos(i + 1);

  if (last) {
    // ostatni węzeł → kafel z wynikiem
    const rows = Math.ceil(n / 3);
    const x1 = A.x + G.W / 2, y1 = A.y + G.H;
    const x2 = 180 + 700 / 2, y2 = G.ROW_Y(rows) - 20;
    return `M${x1},${y1} C${x1},${y1 + 62} ${x2},${y2 - 62} ${x2},${y2}`;
  }
  if (B.row !== A.row) {
    // zejście do niższego rzędu — po tej samej kolumnie
    const x = A.x + G.W / 2;
    return `M${x},${A.y + G.H} C${x},${A.y + G.H + 46} ${x},${B.y - 46} ${x},${B.y}`;
  }
  const y = A.y + G.H / 2;
  if (A.dirRight) {
    const x1 = A.x + G.W, x2 = B.x;
    return `M${x1},${y} C${x1 + 46},${y} ${x2 - 46},${y} ${x2},${y}`;
  }
  const x1 = A.x, x2 = B.x + G.W;
  return `M${x1},${y} C${x1 - 46},${y} ${x2 + 46},${y} ${x2},${y}`;
}

function graphSvg(agent) {
  const n = agent.steps.length;
  const rows = Math.ceil(n / 3);
  const resY = G.ROW_Y(rows) - 20;
  const vbH = resY + 130 + 40;

  const nodes = agent.steps.map((s, i) => {
    const p = nodePos(i);
    const lines = wrap(s.t, 19, 2);
    const startY = p.y + G.H / 2 + (lines.length === 1 ? 7 : -3);
    const tspans = lines.map((l, k) =>
      `<tspan x="${p.x + 74}" dy="${k === 0 ? 0 : 24}">${esc(l)}</tspan>`).join('');
    return `<g class="gnode" data-n="${i}">
      <rect class="gbody" x="${p.x}" y="${p.y}" width="${G.W}" height="${G.H}" rx="16"/>
      <rect class="gaccent" x="${p.x}" y="${p.y + 18}" width="3.5" height="${G.H - 36}" rx="2"/>
      <rect class="gbadge" x="${p.x + 22}" y="${p.y + G.H / 2 - 19}" width="38" height="38" rx="11"/>
      <text class="gnum" x="${p.x + 41}" y="${p.y + G.H / 2 + 7}" text-anchor="middle">${i + 1}</text>
      <path class="gcheck" transform="translate(${p.x + 29},${p.y + G.H / 2 - 8})" d="M0,8 L6,14 L16,2"/>
      <text class="gt" y="${startY}">${tspans}</text>
    </g>`;
  }).join('');

  const edges = agent.steps.map((s, i) =>
    `<path class="gedge-base" d="${edgePath(i, n)}" marker-end="url(#arw)"/>
     <path class="gedge-on" data-e="${i}" d="${edgePath(i, n)}" marker-end="url(#arwOn)"/>`
  ).join('');

  const rLines = wrap(agent.result.value, 44, 2);
  const rTspans = rLines.map((l, k) =>
    `<tspan x="530" dy="${k === 0 ? 0 : 30}">${esc(l)}</tspan>`).join('');

  return `<svg class="graph" viewBox="0 0 ${G.VB_W} ${vbH}" role="img"
       aria-label="Schemat przebiegu: ${esc(agent.steps.map(s => s.t).join(' → '))}">
    <defs>
      <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
        <circle cx="1.6" cy="1.6" r="1.6" fill="rgba(255,255,255,.055)"/>
      </pattern>
      <marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
        <path d="M0,1 L9,5 L0,9 z" fill="rgba(255,255,255,.16)"/>
      </marker>
      <marker id="arwOn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
        <path d="M0,1 L9,5 L0,9 z" fill="#0066FF"/>
      </marker>
      <filter id="gl" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="7" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <rect x="0" y="0" width="${G.VB_W}" height="${vbH}" fill="url(#dots)"/>
    <text class="gstart" x="${G.COLS[0]}" y="${G.ROW_Y(0) - 16}">WYZWALACZ</text>

    ${edges}
    ${nodes}
    <circle class="gpulse" r="7" cx="-100" cy="-100"/>

    <g class="gresult">
      <rect class="gres-body" x="180" y="${resY}" width="700" height="112" rx="18"/>
      <text class="gres-l" x="530" y="${resY + 36}" text-anchor="middle">${esc(agent.result.label.toUpperCase())}</text>
      <text class="gres-v" y="${resY + 72}" text-anchor="middle">${rTspans}</text>
    </g>
  </svg>`;
}

/**
 * Buduje schemat + listę kroków i zwraca play()/reset().
 * Obie warstwy chodzą z JEDNEJ osi czasu — impuls dociera do węzła
 * dokładnie wtedy, gdy odhacza się odpowiadający mu krok na liście.
 * Przebieg jest deterministyczny: każde odtworzenie wygląda tak samo,
 * co ma znaczenie przy nagrywaniu kilku dubli.
 */
function buildFlow(host, agent) {
  host.classList.add('has-graph');
  host.innerHTML =
    '<div class="graph-wrap">' + graphSvg(agent) + '</div>' +
    '<ul class="steps">' +
    agent.steps.map(s =>
      '<li class="step"><span class="step-mark">' + CHECK + '</span>' +
      '<span class="step-txt"><span class="step-t">' + esc(s.t) + '</span>' +
      '<span class="step-d">' + esc(s.d) + '</span></span></li>'
    ).join('') +
    '</ul>' +
    '<div class="result"><div class="result-l">' + esc(agent.result.label) + '</div>' +
    '<div class="result-v">' + esc(agent.result.value) + '</div>' +
    '<div class="result-s">' + esc(agent.result.sub) + '</div></div>';

  const steps = [...host.querySelectorAll('.step')];
  const gnodes = [...host.querySelectorAll('.gnode')];
  const gedges = [...host.querySelectorAll('.gedge-on')];
  const pulse = host.querySelector('.gpulse');
  const gres = host.querySelector('.gresult');
  const result = host.querySelector('.result');
  const n = agent.steps.length;

  /* Długości ścieżek liczymy raz — po wstawieniu SVG do dokumentu. */
  const lens = gedges.map(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; return L; });

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* oś czasu */
  const marks = [];
  let t = 320;
  for (let i = 0; i < n; i++) {
    marks.push({ at: t, fn: () => setNode(i, 'run') });
    t += agent.steps[i].ms;
    marks.push({ at: t, fn: () => setNode(i, 'done') });
    marks.push({ at: t, fn: () => startEdge(i, t) });
    t += G.EDGE_MS;
    marks.push({ at: t, fn: () => endEdge(i) });
  }
  marks.push({ at: t + 140, fn: () => { gres.classList.add('in'); result.classList.add('in'); } });
  const total = t + 400;

  let raf = 0, t0 = 0, fired = 0, active = null;

  function setNode(i, state) {
    gnodes[i].classList.remove('run', 'done');
    gnodes[i].classList.add(state);
    steps[i].classList.add('in');
    steps[i].classList.toggle('busy', state === 'run');
    steps[i].classList.toggle('done', state === 'done');
  }
  function startEdge(i, at) { active = { i, at }; }
  function endEdge(i) {
    gedges[i].style.strokeDashoffset = 0;
    if (active && active.i === i) { active = null; pulse.setAttribute('cx', -100); pulse.setAttribute('cy', -100); }
  }

  function reset() {
    cancelAnimationFrame(raf);
    fired = 0; active = null;
    gnodes.forEach(g => g.classList.remove('run', 'done'));
    gedges.forEach((p, i) => { p.style.strokeDashoffset = lens[i]; });
    steps.forEach(s => s.className = 'step');
    pulse.setAttribute('cx', -100); pulse.setAttribute('cy', -100);
    gres.classList.remove('in');
    result.classList.remove('in');
  }

  function frame(now) {
    const e = now - t0;
    while (fired < marks.length && marks[fired].at <= e) marks[fired++].fn();
    if (active) {
      const p = Math.min(1, (e - active.at) / G.EDGE_MS);
      const L = lens[active.i];
      gedges[active.i].style.strokeDashoffset = L * (1 - p);
      const pt = gedges[active.i].getPointAtLength(L * p);
      pulse.setAttribute('cx', pt.x); pulse.setAttribute('cy', pt.y);
    }
    if (e < total) raf = requestAnimationFrame(frame);
  }

  function play() {
    reset();
    if (still) { // użytkownik prosi o brak animacji — pokazujemy stan końcowy
      gnodes.forEach((g, i) => setNode(i, 'done'));
      gedges.forEach(p => p.style.strokeDashoffset = 0);
      gres.classList.add('in'); result.classList.add('in');
      return;
    }
    t0 = performance.now();
    raf = requestAnimationFrame(frame);
  }

  return { play, reset };
}

/** Wspólny nagłówek panelu: plakietka o poglądowości przebiegu. */
function flowNote() {
  return '<div class="demo-note">' +
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="7.5" x2="12" y2="7.6"/></svg>' +
    '<span><b>Przebieg poglądowy</b> — pokazuje kolejność pracy agenta, nie zapis prawdziwej sesji. ' +
    'Działanie na żywo pokazujemy na konsultacji.</span></div>';
}

/* ─── KATALOG: modal + filtry ──────────────────────────────── */

function initCatalog() {
  const grid = document.getElementById('agents');
  if (!grid) return;

  /* --- modal --- */
  const overlay = document.createElement('div');
  overlay.className = 'demo-overlay';
  overlay.innerHTML =
    '<div class="demo" role="dialog" aria-modal="true" aria-labelledby="demo-title">' +
    '<button class="demo-close" aria-label="Zamknij">&times;</button>' +
    '<div class="demo-head"><div><h2 id="demo-title"></h2><p></p></div></div>' +
    flowNote() +
    '<div class="demo-body"><div class="flow"></div>' +
    '<div class="demo-actions">' +
    '<button class="replay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.5 15a9 9 0 102.1-9.4L1 10"/></svg> Odtwórz ponownie <span class="kbd">R</span></button>' +
    '<a class="btn btn-primary detail" href="#">Zobacz pełny opis</a>' +
    '</div></div></div>';
  document.body.appendChild(overlay);

  const elTitle = overlay.querySelector('#demo-title');
  const elLede = overlay.querySelector('.demo-head p');
  const elFlow = overlay.querySelector('.flow');
  const elDetail = overlay.querySelector('.detail');
  let flow = null;

  function open(slug) {
    const agent = AGENTS[slug];
    if (!agent) return;
    elTitle.textContent = agent.name;
    elLede.textContent = agent.lede;
    elDetail.href = '/agenci/' + slug + '/';
    flow = buildFlow(elFlow, agent);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    flow.play();
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (flow) flow.reset();
  }

  overlay.querySelector('.demo-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelector('.replay').addEventListener('click', () => flow && flow.play());

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'r' || e.key === 'R') flow && flow.play();
  });

  /* Klik w kartę otwiera przebieg; link „pełny opis” działa normalnie. */
  grid.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const card = e.target.closest('.agent-card');
    if (card) open(card.dataset.slug);
  });
  grid.addEventListener('keydown', e => {
    const card = e.target.closest('.agent-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(card.dataset.slug); }
  });

  /* --- filtry --- */
  const cards = [...grid.querySelectorAll('.agent-card')];
  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      document.querySelectorAll('.filter').forEach(b => b.classList.toggle('on', b === btn));
      cards.forEach(c => { c.hidden = cat !== 'all' && c.dataset.cat !== cat; });
    });
  });
}

/* ─── PODSTRONA: przebieg wbudowany w treść ────────────────── */

function initDetail() {
  const host = document.getElementById('flow');
  if (!host) return;
  const agent = AGENTS[host.dataset.slug];
  if (!agent) return;

  const flow = buildFlow(host.querySelector('.flow-steps'), agent);
  const replay = host.querySelector('.replay');
  if (replay) replay.addEventListener('click', () => flow.play());

  document.addEventListener('keydown', e => {
    if (e.key === 'r' || e.key === 'R') flow.play();
  });

  /* Odtwarzamy dopiero, gdy panel wejdzie w kadr — inaczej przy
     nagrywaniu przebieg kończy się, zanim doscrollujesz. */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { flow.play(); io.disconnect(); } });
    }, { threshold: .4 });
    io.observe(host);
  } else {
    flow.play();
  }
}

/* ─── TRYB PREZENTACJI + animacje wejścia ──────────────────── */

function initShell() {
  /* ?tv=1 — układ pod nagranie ekranu; Shift+T przełącza w locie */
  if (new URLSearchParams(location.search).get('tv') === '1') {
    document.documentElement.classList.add('tv');
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'T' && e.shiftKey) document.documentElement.classList.toggle('tv');
  });

  const flag = document.createElement('div');
  flag.className = 'tv-flag';
  flag.textContent = 'tryb prezentacji · Shift+T wyjście · R odtwórz';
  document.body.appendChild(flag);

  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('on'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initShell();
  initCatalog();
  initDetail();
});
