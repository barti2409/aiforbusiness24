/* Treść podstron agentów. Jedno źródło prawdy — po zmianie
   uruchom: node _build/build-agenci.js
   Kroki przebiegu (demo) mieszkają osobno, w /agenci/agenci.js */

module.exports = [
{
  slug: 'recepcjonistka-ai',
  name: 'Recepcjonistka AI',
  cat: 'Obsługa klienta',
  title: 'Recepcjonistka AI — agent, który odbiera telefony 24/7',
  meta: 'Głosowy agent AI odbierający telefony poza godzinami pracy: prowadzi rozmowę po polsku, umawia wizyty w kalendarzu i wysyła potwierdzenie SMS. Wdrożenia dla salonów, gabinetów i warsztatów.',
  h1: 'Recepcjonistka AI — telefon odebrany zawsze, także o 19:42',
  lede: 'Głosowy agent, który prowadzi normalną rozmowę po polsku, zna Waszą ofertę i grafik, a rozmowę kończy wpisem w kalendarzu. Nie odsyła na pocztę głosową i nie obiecuje, że ktoś oddzwoni.',
  how: [
    'Nieodebrany telefon jest najdroższą stratą w małej firmie usługowej, bo nie zostawia po sobie żadnego śladu. Nie widać go w statystykach ani w CRM — klient po prostu dzwoni do następnej firmy z listy i nikt się o tym nie dowiaduje. Recepcjonistka AI odbiera każde połączenie: wieczorem, w weekend, w trakcie zabiegu i wtedy, gdy dwie linie dzwonią jednocześnie.',
    'Agent rozmawia głosem, po polsku, w tempie zwykłej rozmowy. Zna Wasze usługi, czasy ich trwania i grafik pracowników, więc nie zaproponuje terminu, którego nie ma. Po rozmowie wizyta trafia do kalendarza, dane klienta do systemu, a klient dostaje SMS z potwierdzeniem i linkiem do odwołania — to ostatnie zmniejsza liczbę nieodwołanych nieobecności, bo odwołanie przestaje wymagać kolejnego telefonu.'
  ],
  who: ['Salony fryzjerskie i kosmetyczne', 'Gabinety, kliniki, fizjoterapia', 'Warsztaty i serwisy', 'Restauracje przyjmujące rezerwacje', 'Firmy usługowe pracujące w terenie', 'Biura, w których telefon obsługuje jedna osoba'],
  with: ['Kalendarz Google i Outlook', 'Systemy rezerwacyjne udostępniające API', 'CRM i karty klientów', 'SMS oraz e-mail', 'Przekierowanie na numer stacjonarny lub komórkowy', 'Podsumowania rozmów na Slacku lub mailem'],
  limits: [
    'Nie udaje człowieka — zapytany wprost odpowiada, że jest asystentem AI',
    'Nie negocjuje cen i nie składa wiążących zobowiązań w imieniu firmy',
    'Nie udziela porad medycznych ani specjalistycznych — takie tematy przekazuje dalej',
    'Sprawy nietypowe przełącza na człowieka, zamiast improwizować',
    'Nie prowadzi sprzedaży wychodzącej ani windykacji telefonicznej bez osobnych ustaleń — obowiązują tam inne przepisy'
  ],
  faq: [
    ['Czy klient pozna, że rozmawia z AI?', 'Zwykle po chwili tak — i to jest w porządku. Zapytany wprost, agent odpowiada, że jest asystentem. Nie budujemy rozwiązań, które celowo podszywają się pod człowieka: prawda i tak wychodzi, tylko w gorszym momencie.'],
    ['Co, jeśli agent czegoś nie wie?', 'Przekazuje rozmowę do człowieka albo zapisuje sprawę i mówi, kiedy ktoś oddzwoni. Zasada jest twarda — lepiej przyznać się do braku informacji niż zmyślić odpowiedź, za którą potem odpowiada firma.'],
    ['Czy rozmowy są nagrywane?', 'Tak, jeśli sobie tego życzycie i pod warunkiem poinformowania rozmówcy na początku połączenia. To wymóg, nie opcja. Transkrypcje bywają zresztą najciekawszą częścią wdrożenia — pokazują, o co klienci naprawdę pytają.'],
    ['Ile trwa wdrożenie?', 'Zależy od liczby systemów do połączenia. Sam agent telefoniczny z kalendarzem to kwestia dni; integracja z nietypowym systemem rezerwacyjnym potrafi zająć dłużej. Termin podajemy po rozmowie, w której zobaczymy Wasz proces — nie wcześniej.']
  ]
},

{
  slug: 'agent-pierwszej-odpowiedzi',
  name: 'Agent pierwszej odpowiedzi',
  cat: 'Sprzedaż',
  title: 'Agent pierwszej odpowiedzi — reakcja na zapytanie w minutę',
  meta: 'Agent AI, który odpowiada na zapytania z formularza, WhatsAppa i Messengera w minutę o każdej porze, zadaje pytania kwalifikujące i umawia rozmowę w kalendarzu handlowca.',
  h1: 'Agent pierwszej odpowiedzi — o zleceniu często decyduje ten, kto odpisał pierwszy',
  lede: 'Reaguje na zapytanie natychmiast, niezależnie od pory, zadaje pytania kwalifikujące i umawia rozmowę. Handlowiec dostaje gotowy kontekst zamiast surowego formularza.',
  how: [
    'Klient szukający wykonawcy wysyła zwykle zapytanie do kilku firm naraz — i przestaje szukać, gdy pierwsza z nich odpowie konkretnie. Jeśli zapytanie wpada w piątek po siedemnastej, a Wy odpisujecie w poniedziałek rano, rozmawiacie z kimś, kto zdążył już podjąć decyzję. Agent skraca ten dystans do minuty, o każdej porze.',
    'To nie jest autoresponder. Agent czyta treść zapytania, odnosi się do niego konkretnie i zadaje kilka pytań, które i tak musielibyście zadać: zakres, termin, orientacyjny budżet. Na tej podstawie ocenia zapytanie — albo od razu proponuje termin rozmowy z wolnych okien w kalendarzu, albo uprzejmie kończy temat, jeśli sprawa nie mieści się w Waszej ofercie. Do CRM trafia notatka z rozmowy, a nie surowe zgłoszenie do przeczytania od zera.'
  ],
  who: ['Firmy remontowe i budowlane', 'Nieruchomości', 'Fotografia i wideo', 'Medycyna estetyczna i usługi premium', 'Agencje i usługi B2B', 'Każdy, kto dostaje zapytania wieczorami i w weekendy'],
  with: ['Formularz na stronie', 'WhatsApp Business', 'Messenger i Instagram DM', 'Skrzynka e-mail', 'CRM', 'Kalendarz handlowca'],
  limits: [
    'Nie sprzedaje i nie negocjuje ceny — jego zadaniem jest doprowadzić do rozmowy z człowiekiem',
    'Nie składa ofert; od tego jest agent ofertowy',
    'Nie kontaktuje się z osobami, które same nie napisały — to nie jest narzędzie do zimnego kontaktu',
    'Nie ocenia klienta na podstawie danych, których ten nie podał'
  ],
  faq: [
    ['Czym to się różni od autorespondera?', 'Autoresponder wysyła jedną, zawsze tę samą wiadomość. Ten agent odnosi się do treści zapytania, dopytuje o brakujące rzeczy i podejmuje decyzję, co dalej. Różnicę widać najprościej po tym, że klient odpisuje.'],
    ['Co, jeśli klient od razu chce człowieka?', 'Dostaje człowieka. Agent nie przytrzymuje rozmowy na siłę — prośba o kontakt z pracownikiem kończy jego rolę i przekazuje sprawę dalej.'],
    ['Czy agent może odstraszyć klienta?', 'Może, w dwóch przypadkach: gdy udaje człowieka i zostanie na tym przyłapany, albo gdy zadaje pięć pytań pod rząd jak formularz. Dlatego pytania są maksymalnie trzy i wynikają z treści zapytania.'],
    ['Skąd agent wie, które zapytanie jest dobre?', 'Z kryteriów ustalonych z Wami na wdrożeniu: zakres usług, obsługiwany teren, minimalna wartość zlecenia, realne terminy. Nie z własnego przeczucia.']
  ]
},

{
  slug: 'agent-ofertowy',
  name: 'Agent ofertowy',
  cat: 'Sprzedaż',
  title: 'Agent ofertowy — gotowa wycena w Twoim szablonie tego samego dnia',
  meta: 'Agent AI, który z zapytania lub notatki z rozmowy składa ofertę w firmowym szablonie: dobiera pozycje z Waszego cennika, wysyła PDF i przypomina o niej klientowi.',
  h1: 'Agent ofertowy — wyceny przestają czekać na Twój wolny wieczór',
  lede: 'Zbiera dane z zapytania albo notatki z rozmowy, dobiera pozycje z Waszego cennika i składa gotową ofertę w firmowym szablonie. Wy zatwierdzacie, on wysyła i przypomina.',
  how: [
    'Wycena to w większości małych firm wąskie gardło jednej osoby — najczęściej właściciela. W ciągu dnia nie ma na nią czasu, więc ląduje na wieczór albo na niedzielę, a klient w tym czasie czeka. Im dłużej czeka, tym mniejsza szansa, że oferta trafi w moment, w którym rzeczywiście podejmuje decyzję.',
    'Agent przejmuje mechaniczną część tej pracy: dopytuje o brakujące dane, dobiera pozycje i stawki z Waszego cennika, składa dokument w Waszym szablonie i wysyła go razem z warunkami i terminem ważności. Cennik jest Wasz, więc agent nie zgaduje kwot — a tam, gdzie musiałby zgadywać, zatrzymuje się i przekazuje sprawę człowiekowi. Trzy dni później przypomina klientowi o ofercie, bo to właśnie ten krok najczęściej wypada z procesu.'
  ],
  who: ['Wykończenia i budowlanka', 'Transport i spedycja', 'Produkcja na zamówienie', 'Poligrafia i reklama', 'Agencje i usługi B2B', 'Wszędzie tam, gdzie cennik jest powtarzalny'],
  with: ['Formularz i skrzynka e-mail', 'CRM', 'Cennik w arkuszu lub systemie', 'Wasz szablon oferty (PDF lub DOCX)', 'Dysk Google, OneDrive', 'Podpis elektroniczny'],
  limits: [
    'Nie ustala cen samodzielnie — korzysta wyłącznie z Waszego cennika i reguł',
    'Nie negocjuje rabatów',
    'Domyślnie nie wysyła nietypowych wycen bez akceptacji człowieka',
    'Zlecenia nieszablonowe rozpoznaje i przekazuje dalej, zamiast je wyceniać — to cecha, nie brak'
  ],
  faq: [
    ['Czy agent może wysłać złą wycenę?', 'Może, jeśli dostanie błędne dane albo cennik jest wewnętrznie niespójny. Dlatego wyceny odbiegające od schematu domyślnie idą do akceptacji, każda wysłana oferta ma kopię w archiwum, a progi akceptacji ustalacie Wy — nie my.'],
    ['Co z ofertami, których nie da się policzyć z cennika?', 'Agent je rozpoznaje i przekazuje dalej razem z zebranymi danymi i pytaniami, które już zadał. Nie próbuje ich wycenić na wyczucie.'],
    ['Czy oferta wygląda jak nasza?', 'Tak — pracujemy na Waszym szablonie: logo, układ, warunki, terminy ważności. Klient nie powinien poznać, że dokument powstał automatycznie.'],
    ['Czy agent przypomina o ofercie?', 'Tak, w rytmie, który ustalimy. Follow-up jest częścią wdrożenia, bo w praktyce to on najczęściej ginie — nie samo wystawienie oferty.']
  ]
},

{
  slug: 'agent-od-platnosci',
  name: 'Agent od płatności',
  cat: 'Back-office',
  title: 'Agent od płatności — przypomnienia o fakturach bez niezręcznych telefonów',
  meta: 'Agent AI, który codziennie sprawdza przeterminowane faktury, wysyła przypomnienia dopasowane do stopnia opóźnienia, odnotowuje deklaracje zapłaty i eskaluje tylko to, co wymaga Waszej decyzji.',
  h1: 'Agent od płatności — przeterminowane faktury przestają czekać na Twoją odwagę',
  lede: 'Codziennie przegląda należności, wysyła przypomnienia dopasowane do stopnia opóźnienia i odnotowuje odpowiedzi. Do Was trafiają wyłącznie sprawy wymagające decyzji.',
  how: [
    'Przypominanie o płatnościach wypada z kalendarza szybciej niż jakiekolwiek inne zadanie, bo jest zwyczajnie niewdzięczne. Właściciel odkłada telefon do stałego klienta na później, faktura leży trzydzieści dni, a firma przez ten czas kredytuje kontrahenta z własnych pieniędzy — najczęściej nie zdając sobie sprawy, jaka to suma.',
    'Agent robi dokładnie to, czego ludzie nie lubią: działa konsekwentnie i bez emocji. Wiadomość przy trzech dniach opóźnienia jest uprzejmym przypomnieniem, przy trzydziestu — stanowczym wezwaniem. Jeśli klient odpisze, że zapłaci w piątek, agent odnotowuje deklarację i wraca do sprawy w piątek, a nie „kiedyś". Wy widzicie krótką listę spraw do decyzji zamiast całego rejestru należności.'
  ],
  who: ['Firmy sprzedające z odroczonym terminem płatności', 'Transport i spedycja', 'Hurt i dystrybucja', 'Agencje i usługi B2B', 'Biura rachunkowe — w imieniu klientów'],
  with: ['System księgowy lub fakturowy', 'Arkusz z należnościami', 'E-mail i SMS', 'Link do płatności', 'Slack lub Teams do eskalacji'],
  limits: [
    'To nie jest windykacja — agent nie prowadzi postępowań i nie grozi sądem',
    'Nie wysyła wezwań do zapłaty wywołujących skutki prawne; takie pisma zatwierdza człowiek',
    'Nie nalicza odsetek z własnej inicjatywy',
    'Częstotliwość i treść wiadomości ustalamy tak, by mieściły się w granicach przepisów — zwłaszcza wobec konsumentów',
    'Nie ocenia wiarygodności finansowej kontrahenta'
  ],
  faq: [
    ['Czy to nie zepsuje relacji z klientem?', 'Ton ustalacie Wy i jest on zwykle łagodniejszy niż to, co firmy wysyłają po miesiącu ciszy. W praktyce bywa odwrotnie, niż podpowiada intuicja: regularne, uprzejme przypomnienie od pierwszych dni jest mniej konfliktowe niż nagły telefon po czterdziestu pięciu dniach.'],
    ['Czy agent może upomnieć się o zapłaconą fakturę?', 'Ryzyko istnieje wtedy, gdy płatność nie została jeszcze zaksięgowana. Dlatego agent pracuje na danych z Waszego systemu i można ustawić karencję liczoną od daty wpływu — to pierwsza rzecz, którą kalibrujemy przy uruchomieniu.'],
    ['Czy to zgodne z przepisami?', 'Przypomnienie o wymagalnej płatności jest zwykłą korespondencją handlową. Granicę wyznacza nękanie i wprowadzanie w błąd — dlatego treści są ustalone z góry i zatwierdzone przez Was, a nie generowane swobodnie przy każdej wiadomości.'],
    ['Kto decyduje o dalszych krokach?', 'Zawsze człowiek. Agent przygotowuje sprawę, pokazuje historię kontaktu i sygnalizuje próg, ale decyzja o krokach prawnych nie jest i nie powinna być zautomatyzowana.']
  ]
},

{
  slug: 'agent-rekrutacyjny',
  name: 'Agent rekrutacyjny',
  cat: 'Back-office',
  title: 'Agent rekrutacyjny — przesiew zgłoszeń i kontakt z kandydatem w kwadrans',
  meta: 'Agent AI, który zbiera zgłoszenia ze wszystkich źródeł, weryfikuje twarde wymagania stanowiska, odpisuje odrzuconym i umawia rozmowy z pasującymi kandydatami.',
  h1: 'Agent rekrutacyjny — kandydat kontaktowany w kwadrans, nie po tygodniu',
  lede: 'Zbiera zgłoszenia z portali, formularza i maila, weryfikuje twarde wymagania, odpisuje odrzuconym i umawia rozmowy z tymi, którzy pasują.',
  how: [
    'Tam, gdzie rekrutacja trwa cały rok — w transporcie, produkcji, magazynach i gastronomii — o obsadzeniu etatu decyduje szybkość pierwszego kontaktu. Kandydat wysyła kilkanaście zgłoszeń w jeden wieczór i podejmuje pracę tam, gdzie ktoś odezwał się pierwszy i konkretnie. Zgłoszenie przeczytane po tygodniu jest zwykle bezwartościowe, niezależnie od tego, jak dobry był kandydat.',
    'Agent zbiera zgłoszenia z wszystkich źródeł w jedno miejsce, sprawdza je pod kątem wymagań, które ustalicie, i kontaktuje się z pasującymi w kilkanaście minut. Odrzuconym odpisuje — drobiazg, który realnie wpływa na to, jak firma jest opisywana w branży, a kosztuje zero. Rekruter zaczyna dzień od rozmów, a nie od przeglądania stu załączników.'
  ],
  who: ['Transport i logistyka', 'Produkcja i magazyny', 'Gastronomia i hotelarstwo', 'Handel detaliczny', 'Agencje pracy', 'Każda firma z ciągłą rotacją'],
  with: ['Portale ogłoszeniowe (przez skrzynkę lub eksport)', 'Formularz na stronie', 'E-mail', 'SMS i WhatsApp', 'Kalendarz rekrutera', 'System ATS lub arkusz'],
  limits: [
    'Nie podejmuje decyzji o zatrudnieniu — przygotowuje krótką listę, wybiera człowiek',
    'Nie prowadzi rozmowy kwalifikacyjnej',
    'Przesiewa wyłącznie po jawnych wymaganiach stanowiska, nie po swobodnej ocenie sylwetki kandydata',
    'Nie przetwarza danych kandydatów szerzej, niż pozwala na to zgoda i podstawa prawna'
  ],
  faq: [
    ['Czy to jest zgodne z RODO?', 'Administratorem danych kandydatów pozostajecie Wy, na tej samej podstawie co dotąd — agent jest narzędziem w tym procesie. Na wdrożeniu ustalamy zakres zbieranych danych, czas przechowywania i treść klauzul. To rozmowa, którą trzeba odbyć przed uruchomieniem, nie po nim.'],
    ['Czy AI może dyskryminować kandydatów?', 'Może, jeśli kryteria ustawi się nieostrożnie albo da modelowi swobodę oceny człowieka. Dlatego przesiew działa na twardych, jawnych wymaganiach stanowiska — uprawnienia, doświadczenie, dyspozycyjność, lokalizacja — a nie na ogólnym wrażeniu z CV. Kryteria są spisane i możecie je w każdej chwili sprawdzić.'],
    ['Co z kandydatami, którzy nie mają CV?', 'Wystarczy krótki formularz albo rozmowa na WhatsAppie. W wielu zawodach fizycznych CV i tak jest formalnością, która nic nie wnosi.'],
    ['Czy kandydat wie, że pisze do systemu?', 'Tak, informujemy o tym w pierwszej wiadomości. Kandydat w każdej chwili może poprosić o kontakt z rekruterem.']
  ]
},

{
  slug: 'agent-od-dokumentow',
  name: 'Agent od dokumentów',
  cat: 'Back-office',
  title: 'Agent od dokumentów — faktury odczytane, sprawdzone i opisane',
  meta: 'Agent AI, który odbiera faktury z maila, zdjęć i folderów, odczytuje dane, porównuje je z zamówieniami, nadaje kategorie kosztów i zgłasza wyłącznie wyjątki.',
  h1: 'Agent od dokumentów — koniec przepisywania faktur z maila do systemu',
  lede: 'Odbiera dokumenty z maila, zdjęć i folderów, odczytuje dane, porównuje z zamówieniami, nadaje kategorie i zapisuje w systemie. Zgłasza tylko to, co odbiega od normy.',
  how: [
    'Sam odczyt tekstu z faktury nie jest dziś żadną przewagą — ma go każdy program księgowy i nie warto za to płacić osobno. Problem leży gdzie indziej: dokumenty przychodzą z pięciu stron i w pięciu formatach, część jako zdjęcie zrobione telefonem w trasie, i ktoś musi to wszystko posortować, sprawdzić i wprowadzić we właściwe miejsce.',
    'Agent obsługuje cały ten obieg, a nie tylko jego środek. Odbiera dokument, wyciąga dane, porównuje kwotę z zamówieniem albo umową, nadaje kategorię kosztu według Waszego układu i zapisuje w miejscu docelowym pod nazwą zgodną ze schematem. Jeśli coś się nie zgadza — duplikat, brakujący NIP, kwota odbiegająca od normy — sprawa trafia na listę wyjątków. Zamiast przeglądać wszystko, przeglądacie to, co naprawdę wymaga uwagi.'
  ],
  who: ['Firmy z dużą liczbą faktur kosztowych', 'Transport i budowlanka', 'Handel i dystrybucja', 'Biura rachunkowe', 'Firmy z pracownikami w terenie'],
  with: ['Skrzynka e-mail', 'Folder na dysku współdzielonym', 'System księgowy lub fakturowy', 'Arkusz', 'Komunikator (zdjęcia z telefonu)', 'Archiwum dokumentów'],
  limits: [
    'Nie księguje w sensie decyzji księgowej — przygotowuje dane, odpowiedzialność zostaje po stronie księgowości',
    'Nie interpretuje przepisów podatkowych',
    'Przy dokumentach nieczytelnych nie zgaduje, tylko oznacza je do ręcznego sprawdzenia',
    'Nie ocenia zasadności kosztu — to decyzja człowieka'
  ],
  faq: [
    ['Co z fakturami w postaci zdjęcia?', 'Obsługiwane, o ile są czytelne. Jakość zdjęcia jest tu jedynym realnym ograniczeniem — przy nieczytelnym dokumencie agent oznacza go do sprawdzenia, zamiast zgadywać kwoty. To ustawienie celowo ostrożne: błędna kwota kosztuje więcej niż ręczne wpisanie.'],
    ['Czy to zastąpi księgową?', 'Nie i nie taki jest cel. Zdejmuje z niej przepisywanie i sortowanie, czyli tę część pracy, która nie wymaga jej kompetencji. Decyzje księgowe zostają u człowieka.'],
    ['Skąd agent wie, jak kategoryzować koszty?', 'Z Waszego układu kont i z przykładów z przeszłości. Koszty nowe i nietypowe trafiają do wyjątków, zamiast być wciskane na siłę do istniejącej kategorii.'],
    ['Czy dane są bezpieczne?', 'To pierwsza rzecz, którą ustalamy przy tym agencie, bo dotyczy dokumentów finansowych: gdzie dane są przetwarzane, gdzie przechowywane i kto ma do nich dostęp. Bez tych ustaleń nie zaczynamy wdrożenia.']
  ]
},

{
  slug: 'agent-marketingowy',
  name: 'Agent marketingowy',
  cat: 'Marketing',
  proof: 'Ten agent działa w naszej platformie app.aiforbusiness24 — możemy pokazać go na żywo, na Waszej marce, w trakcie konsultacji.',
  title: 'Agent marketingowy — posty i kreacje oparte na faktach o marce',
  meta: 'Agent AI piszący posty, karuzele i kreacje reklamowe na podstawie bazy wiedzy marki, z warstwą sprawdzającą, czy każdy konkret ma pokrycie w faktach.',
  h1: 'Agent marketingowy — treści, które nie zmyślają o Twojej firmie',
  lede: 'Pisze posty, karuzele i kreacje reklamowe na podstawie bazy wiedzy Waszej marki, a każdy konkret przepuszcza przez sprawdzenie pokrycia w faktach.',
  how: [
    'Największym problemem treści pisanych przez AI nie jest styl, tylko zmyślanie. Model, który dostaje trzy zdania o firmie i polecenie napisania ośmiu slajdów, musi resztę wymyślić — i wymyśli. Tak powstają posty z liczbami, których nikt nie liczył, i obietnicami, których firma nigdy nie składała. Problem w tym, że wyłapuje je dopiero klient, na spotkaniu.',
    'Dlatego ten agent zaczyna od bazy wiedzy marki: co robicie, dla kogo i jakim językiem — a osobno, czego NIE robicie. Ta druga lista jest ważniejsza od pierwszej, bo zamyka kierunki, w które model sam by poszedł. Potem powstaje narracja, a przed publikacją każda liczba, nazwa i deklaracja zakresu usług przechodzi sprawdzenie pokrycia w materiale. To, co pokrycia nie ma, wraca do poprawki albo do Waszej decyzji.',
    'Grafiki powstają osobno od tekstu — typografia jest nakładana już po wygenerowaniu obrazu, ponieważ modele graficzne psują polskie znaki diakrytyczne. Widać to dopiero na powiększeniu, ale to jest różnica między materiałem firmowym a materiałem zrobionym naprędce.'
  ],
  who: ['Firmy prowadzące własne social media', 'Agencje obsługujące kilka marek', 'E-commerce', 'Marki lokalne i usługowe', 'Freelancerzy od treści'],
  with: ['Baza wiedzy marki', 'Wasze zdjęcia i logo', 'Kalendarz treści', 'Eksport materiałów do publikacji'],
  limits: [
    'Nie wie o Waszej firmie nic ponad to, co jest w bazie wiedzy — jej uzupełnienie jest częścią wdrożenia',
    'Nie sprawdza, czy zdanie jest prawdziwe w świecie; sprawdza, czy ma pokrycie w Waszych materiałach. Ostatnie słowo ma człowiek',
    'Nie zastępuje strategii marketingowej',
    'Nie publikuje niczego bez akceptacji'
  ],
  faq: [
    ['Czy to nie będzie brzmiało jak każdy inny post z AI?', 'Różnica bierze się z wsadu, nie z modelu. Treść pisana na podstawie konkretów o firmie brzmi inaczej niż treść pisana z niczego. Jeśli baza wiedzy jest pusta, wynik faktycznie będzie generyczny — i to jest uczciwa odpowiedź, a nie wykręt.'],
    ['Skąd pewność, że agent nie napisze nieprawdy?', 'Pewności nie ma i nie będziemy jej obiecywać. Jest natomiast warstwa sprawdzająca, która wyłapuje twierdzenia bez pokrycia i pokazuje je do decyzji przed publikacją. Materiał wychodzi z akceptacją człowieka — to jest realna gwarancja, a nie deklaracja o nieomylności modelu.'],
    ['Czy mogę poprawić jeden slajd?', 'Tak. Pojedynczy slajd przepisuje się osobno, z uwagą od Was, bez regenerowania całości i tracenia tego, co było już dobre.'],
    ['Czy zobaczę to na żywo?', 'Tak. Ten agent działa u nas na produkcji i pokazujemy go na konsultacji — na Waszej marce, nie na przykładowej.']
  ]
},

{
  slug: 'agent-zwiadowczy',
  name: 'Agent zwiadowczy',
  cat: 'Marketing',
  proof: 'Ten agent działa u nas na produkcji, na oficjalnym API biblioteki reklam Meta — raport z Waszej branży możemy przygotować jeszcze przed rozpoczęciem współpracy.',
  title: 'Agent zwiadowczy — reklamy konkurencji z biblioteki Meta',
  meta: 'Agent AI, który wyszukuje reklamy konkurencji w oficjalnej bibliotece reklam Meta, usuwa duplikaty, analizuje kąty perswazji i wskazuje luki niewykorzystane w branży.',
  h1: 'Agent zwiadowczy — zobacz, na co konkurencja wydaje budżet reklamowy',
  lede: 'Wyszukuje reklamy konkurentów w oficjalnej bibliotece Meta, odsiewa duplikaty, analizuje, czym przekonują — i pokazuje argumenty, których nie używa nikt w branży.',
  how: [
    'Reklamy konkurencji są jawne: Meta udostępnia je w publicznej bibliotece, między innymi w związku z unijnymi przepisami o przejrzystości reklamy. Problem polega na tym, że przejrzenie ich ręcznie zajmuje godziny, a wyniki są zaśmiecone — jedna reklama wraca jako kilkanaście wariantów tej samej kreacji, a wyszukiwanie po pojedynczych słowach zwraca firmy z zupełnie innej branży.',
    'Agent wykonuje tę pracę porządnie: szuka dokładną frazą, pobiera aktywne reklamy razem z raportowanymi zasięgami i datami startu, usuwa duplikaty, a następnie grupuje przekazy według tego, czym przekonują — ceną, obawą, prestiżem, wygodą. Najbardziej użyteczna jest ostatnia część raportu: argumenty, których nie używa nikt. To zwykle najtańsze miejsce na wejście, bo nie trzeba przelicytowywać konkurencji w tym, co już robi.'
  ],
  who: ['Firmy reklamujące się na Facebooku i Instagramie', 'Agencje prowadzące kampanie klientów', 'E-commerce', 'Marki wchodzące na nowy rynek lub do nowej branży'],
  with: ['Oficjalne API biblioteki reklam Meta', 'Raport mailem lub na Slacku', 'Arkusz z zestawieniem', 'Nasza platforma app.aiforbusiness24'],
  limits: [
    'Pokazuje wyłącznie dane publiczne — nie ma dostępu do kont reklamowych, budżetów ani wyników konkurencji',
    'Raportowane zasięgi dotyczą emisji w UE i nie są pełnym obrazem kampanii',
    'Nie obejmuje reklam spoza ekosystemu Meta — Google i TikTok to osobne źródła',
    'Nie kopiuje cudzych kreacji; analizuje przekaz, nie dostarcza materiału do przepisania'
  ],
  faq: [
    ['Czy to jest legalne?', 'Tak. Biblioteka reklam Meta jest publicznym, oficjalnym źródłem, udostępnionym między innymi ze względu na unijne przepisy o przejrzystości reklamy. Korzystamy z oficjalnego API, a nie z pobierania treści ze strony wbrew regulaminowi.'],
    ['Czy zobaczę budżety konkurencji?', 'Nie — i nikt uczciwie tego nie obieca. Publicznie dostępne są treści reklam, daty emisji i zasięgi raportowane dla Unii Europejskiej. Budżety i wyniki kampanii nie są jawne.'],
    ['Co, jeśli konkurencja się nie reklamuje?', 'To również jest wynik i bywa najciekawszy z możliwych — oznacza rynek, na którym reklama jest przewagą, a nie kosztem wejścia. Taką informację też dostajecie wprost.'],
    ['Jak często przychodzi raport?', 'W ustalonym rytmie, zwykle tygodniowym. Częściej nie ma sensu, bo kampanie nie zmieniają się z dnia na dzień, a codzienny raport przestaje być czytany po tygodniu.']
  ]
}
];
