/*
 * Agent AI na aiforbusiness24.com (22.11.2026) — okienko czatu w rogu strony.
 * Rozmowa idzie do panelu AB24 (/api/strona/czat → Claude), historia i limity są po stronie serwera.
 * Kontakty zostawione w rozmowie trafiają do panelu (AI for Business 24 → Leady) i mailem do Bartka.
 * Rozmowa głosowa: gdy AGENT_GLOSOWY ma id agenta ElevenLabs, w okienku pojawia się przycisk „Porozmawiaj głosowo”.
 */
(function () {
  if (window.__ab24Czat) return;
  window.__ab24Czat = true;

  var API = "https://panel-ab24.vercel.app/api/strona/czat";
  var AGENT_GLOSOWY = "agent_5201m818br4xemc8j7fmt8p4nx49"; // agent ElevenLabs „Agent strony — AI for Business 24”; puste = bez przycisku głosu
  var POWITANIE = "Cześć! 👋 Tu Magda, asystentka AI for Business 24. Napisz, czym zajmuje się Twoja firma i co zabiera Wam najwięcej czasu, a sprawdzimy, czy możemy pomóc.";
  var PODPOWIEDZI = ["Mam salon beauty", "Prowadzę sklep internetowy", "Mam biuro nieruchomości", "Nie odbieramy telefonów po godzinach"];

  var sesja;
  try { sesja = localStorage.getItem("ab24-czat-sesja"); } catch (e) {}
  if (!sesja) {
    sesja = "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
    try { localStorage.setItem("ab24-czat-sesja", sesja); } catch (e) {}
  }
  var historia = [];
  try { historia = JSON.parse(sessionStorage.getItem("ab24-czat-historia") || "[]"); } catch (e) {}

  var css = "\
.ab24c-btn{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:2147483000;display:flex;align-items:center;gap:10px;padding:12px 18px 12px 12px;border:0;border-radius:999px;background:#0a0a0a;color:#fff;font:600 15px/1.2 Inter,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 14px 40px rgba(0,0,0,.28);cursor:pointer;transition:transform .2s}\
.ab24c-btn:hover{transform:translateY(-2px)}\
.ab24c-btn svg{width:30px;height:30px;flex:none}\
.ab24c-btn i{width:9px;height:9px;border-radius:9px;background:#34c759;box-shadow:0 0 0 4px rgba(52,199,89,.25)}\
.ab24c-okno{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:2147483001;width:380px;max-width:calc(100vw - 24px);height:min(620px,calc(100vh - 36px));display:flex;flex-direction:column;background:#fff;color:#0a0a0a;border-radius:26px;box-shadow:0 30px 90px rgba(0,0,0,.3),0 0 0 1px rgba(0,0,0,.05);font:400 15px/1.45 Inter,-apple-system,'Segoe UI',Roboto,sans-serif;overflow:hidden;animation:ab24c-in .25s ease}\
@keyframes ab24c-in{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}\
@media (max-width:480px){.ab24c-okno{right:0;bottom:0;width:100vw;max-width:100vw;height:100%;border-radius:0}}\
.ab24c-glowa{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid #eee}\
.ab24c-glowa svg{width:38px;height:38px;flex:none}\
.ab24c-glowa b{display:block;font-weight:700;font-size:15px}\
.ab24c-glowa small{display:flex;align-items:center;gap:6px;color:#737373;font-size:12px}\
.ab24c-glowa small i{width:7px;height:7px;border-radius:7px;background:#34c759}\
.ab24c-zamknij{margin-left:auto;width:34px;height:34px;border:0;border-radius:34px;background:#f2f2f4;color:#0a0a0a;font-size:18px;cursor:pointer}\
.ab24c-lista{flex:1;overflow-y:auto;padding:16px 16px 8px;display:flex;flex-direction:column;gap:10px;background:#fafafa}\
.ab24c-m{max-width:86%;padding:10px 14px;border-radius:18px 18px 18px 6px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.06);white-space:pre-wrap;overflow-wrap:anywhere}\
.ab24c-m a{color:#0a84ff}\
.ab24c-m.ja{align-self:flex-end;background:#0a0a0a;color:#fff;border-radius:18px 18px 6px 18px}\
.ab24c-pisze{display:inline-flex;gap:4px}.ab24c-pisze span{width:7px;height:7px;border-radius:7px;background:#b5b5bb;animation:ab24c-k 1s infinite}.ab24c-pisze span:nth-child(2){animation-delay:.15s}.ab24c-pisze span:nth-child(3){animation-delay:.3s}\
@keyframes ab24c-k{0%,100%{opacity:.3}50%{opacity:1}}\
.ab24c-podp{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 10px;background:#fafafa}\
.ab24c-podp button{border:1px solid #e3e3e8;background:#fff;color:#0a0a0a;border-radius:999px;padding:7px 12px;font:600 12.5px Inter,-apple-system,sans-serif;cursor:pointer}\
.ab24c-glos{margin:0 16px 10px;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border:0;border-radius:14px;background:linear-gradient(90deg,#0A84FF,#5E5CE6 40%,#BF5AF2 75%,#FF375F);color:#fff;font:700 14px Inter,-apple-system,sans-serif;cursor:pointer}\
.ab24c-form{display:flex;gap:8px;padding:12px;border-top:1px solid #eee;background:#fff}\
.ab24c-form input{flex:1;min-width:0;border:0;border-radius:14px;background:#f2f2f4;padding:12px 14px;font:500 15px Inter,-apple-system,sans-serif;color:#0a0a0a;outline:none}\
.ab24c-form button{border:0;border-radius:14px;background:#0a0a0a;color:#fff;padding:0 16px;font:700 14px Inter,-apple-system,sans-serif;cursor:pointer}\
.ab24c-form button:disabled{opacity:.4}\
.ab24c-stopka{padding:0 12px 10px;background:#fff;color:#a3a3a3;font-size:11px;text-align:center}\
@media (prefers-reduced-motion:reduce){.ab24c-okno,.ab24c-pisze span{animation:none}}";
  var styl = document.createElement("style");
  styl.textContent = css;
  document.head.appendChild(styl);

  var LOGO = '<svg viewBox="0 0 512 512" aria-hidden="true"><rect width="512" height="512" rx="116" fill="#0a0a0a"/><circle cx="203" cy="296" r="76" fill="none" stroke="#fff" stroke-width="42"/><rect x="258" y="220" width="42" height="152" rx="21" fill="#fff"/><rect x="336" y="232" width="42" height="140" rx="21" fill="#fff"/><path d="M357 118 C 360.5 149, 374 162.5, 405 166 C 374 169.5, 360.5 183, 357 214 C 353.5 183, 340 169.5, 309 166 C 340 162.5, 353.5 149, 357 118 Z" fill="#fff"/></svg>';
  var LOGO_JASNE = LOGO.replace('fill="#0a0a0a"', 'fill="#ffffff" stroke="#3a3a3a" stroke-width="10"').replace(/fill="#fff"/g, 'fill="#0a0a0a"').replace('stroke="#fff"', 'stroke="#0a0a0a"');

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function formatuj(t) {
    var h = esc(t);
    h = h.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    h = h.replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    return h;
  }

  var btn = document.createElement("button");
  btn.className = "ab24c-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Porozmawiaj z Magdą, asystentką AI");
  btn.innerHTML = LOGO_JASNE + "<span>Porozmawiaj z Magdą (AI)</span><i></i>";
  document.body.appendChild(btn);

  var okno, lista, pole, wyslij, podp;
  function zapiszHistorie() { try { sessionStorage.setItem("ab24-czat-historia", JSON.stringify(historia.slice(-40))); } catch (e) {} }
  function dodaj(tekst, ja) {
    var d = document.createElement("div");
    d.className = "ab24c-m" + (ja ? " ja" : "");
    d.innerHTML = ja ? esc(tekst) : formatuj(tekst);
    lista.appendChild(d);
    lista.scrollTop = lista.scrollHeight;
    return d;
  }

  function otworz() {
    btn.style.display = "none";
    if (okno) { okno.style.display = "flex"; pole.focus(); return; }
    okno = document.createElement("div");
    okno.className = "ab24c-okno";
    okno.setAttribute("role", "dialog");
    okno.setAttribute("aria-label", "Czat z agentem AI for Business 24");
    okno.innerHTML = '<div class="ab24c-glowa">' + LOGO + '<div><b>Magda · asystentka AI</b><small><i></i>odpowiada od razu</small></div><button class="ab24c-zamknij" type="button" aria-label="Zamknij">×</button></div>' +
      '<div class="ab24c-lista" aria-live="polite"></div><div class="ab24c-podp"></div>' +
      (AGENT_GLOSOWY ? '<button class="ab24c-glos" type="button">🎙️ Porozmawiaj głosowo</button>' : "") +
      '<form class="ab24c-form"><input id="ab24c-pole" type="text" autocomplete="off" maxlength="1000" placeholder="Napisz wiadomość…" aria-label="Wiadomość"><button type="submit">Wyślij</button></form>' +
      '<div class="ab24c-stopka">Asystent AI. Odpowiedzi mogą zawierać błędy, szczegóły potwierdzimy na konsultacji.</div>';
    document.body.appendChild(okno);
    lista = okno.querySelector(".ab24c-lista");
    pole = okno.querySelector("input");
    wyslij = okno.querySelector(".ab24c-form button");
    podp = okno.querySelector(".ab24c-podp");
    okno.querySelector(".ab24c-zamknij").onclick = function () { okno.style.display = "none"; btn.style.display = "flex"; };
    dodaj(POWITANIE, false);
    historia.forEach(function (w) { dodaj(w.t, w.ja); });
    if (!historia.length) {
      PODPOWIEDZI.forEach(function (p) {
        var b = document.createElement("button");
        b.type = "button"; b.textContent = p;
        b.onclick = function () { wyslijWiadomosc(p); };
        podp.appendChild(b);
      });
    }
    var glos = okno.querySelector(".ab24c-glos");
    if (glos) glos.onclick = otworzGlos;
    okno.querySelector("form").onsubmit = function (e) { e.preventDefault(); wyslijWiadomosc(pole.value); };
    pole.focus();
  }

  var zajete = false;
  function wyslijWiadomosc(t) {
    t = (t || "").trim();
    if (!t || zajete) return;
    zajete = true; wyslij.disabled = true; pole.value = ""; podp.innerHTML = "";
    dodaj(t, true); historia.push({ t: t, ja: true }); zapiszHistorie();
    var p = dodaj("", false); p.innerHTML = '<span class="ab24c-pisze"><span></span><span></span><span></span></span>';
    fetch(API, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ sesja: sesja, wiadomosc: t }) })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var odp = d.odpowiedz || "Przepraszam, coś poszło nie tak. Napisz do nas: bartek@aiforbusiness24.com";
        p.innerHTML = formatuj(odp); historia.push({ t: odp, ja: false }); zapiszHistorie();
        if (d.koniec) { pole.disabled = true; pole.placeholder = "Rozmowa zakończona"; }
      })
      .catch(function () { p.innerHTML = formatuj("Nie mogę się teraz połączyć. Napisz do nas: bartek@aiforbusiness24.com albo zadzwoń: +48 696 460 590."); })
      .then(function () { zajete = false; wyslij.disabled = false; lista.scrollTop = lista.scrollHeight; if (!pole.disabled) pole.focus(); });
  }

  // Rozmowa głosowa: widżet ElevenLabs Conversational AI (ładowany dopiero po kliknięciu).
  function otworzGlos() {
    if (!AGENT_GLOSOWY) return;
    if (!document.querySelector("elevenlabs-convai")) {
      var el = document.createElement("elevenlabs-convai");
      el.setAttribute("agent-id", AGENT_GLOSOWY);
      document.body.appendChild(el);
      var s = document.createElement("script");
      s.src = "https://unpkg.com/@elevenlabs/convai-widget-embed@0.25.1/dist/index.js"; s.async = true; s.type = "text/javascript";
      document.body.appendChild(s);
    }
    // Widżet ElevenLabs ma własny pływający przycisk w rogu — nasz chowamy, żeby się nie nakładały.
    okno.style.display = "none"; btn.style.display = "none";
  }

  btn.onclick = otworz;
  // Linki „Umów bezpłatną konsultację” mogą otwierać czat: <a href="#czat">…</a>
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href="#czat"]');
    if (a) { e.preventDefault(); otworz(); }
  });
})();
