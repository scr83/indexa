import type { Content } from './types';

/* All Serbian copy lives here.
   PENDING: native-speaker review — see indexa-sr-copy-za-pregled.md.
   Apply the reviewer's edits in this file only; nothing else needs touching. */

export const sr: Content = {
  locale: 'sr',
  htmlLang: 'sr-Latn',
  path: '/sr',
  altPath: '/',

  meta: {
    title: 'SEO optimizacija i tehnički SEO | Indexa Beograd',
    description:
      'Tehnička i višejezična SEO optimizacija na engleskom, španskom i srpskom. Međunarodna SEO arhitektura, migracije i indeksiranje — implementirano u vašem kodu, a ne predato kao lista preporuka.',
    ogTitle: 'SEO optimizacija i tehnički SEO | Indexa Beograd',
    ogDescription: 'Tehnička i višejezična SEO optimizacija, implementirana u vašem kodu.',
    ogLocale: 'sr_RS',
    ogLocaleAlt: 'en',
  },

  banner:
    'Pre objave — brojevi u studijama slučaja su stvarni i proverivi u Search Console-u. Panel sa AI odgovorima ispod je još uvek demonstracija sa izmišljenim brojevima (isprekidana linija) i mora biti zamenjen stvarnim podacima ili uklonjen. Srpski tekst takođe čeka pregled izvornog govornika.',

  nav: {
    services: 'Usluge',
    multilingual: 'Višejezični SEO',
    machine: 'Automatizacija',
    work: 'Saradnja',
    results: 'Rezultati',
    cta: 'Kontakt',
  },

  hero: {
    kicker: 'EN / ES / SR · Beograd',
    h1: 'SEO optimizacija koja se piše u kodu.',
    sub: 'Tehnički i višejezični SEO za kompanije čiji prihod zavisi od pretrage.',
    lede:
      'Većina problema sa vidljivošću u pretrazi ne rešava se objavljivanjem još sadržaja. Oni leže u tome kako je sajt napravljen, kako barata jezicima i šta Google i AI asistenti zaista mogu da pročitaju sa njega. Te probleme pronalazim alatima koje sam sâm napravio, a onda ih rešavam — umesto da vam pošaljem izveštaj i poželim sreću.',
    ledeEmphasis: 'Razgovarate sa osobom koja radi posao, od početka do kraja.',
    ctaPrimary: 'Zakažite tehničku analizu',
    ctaSecondary: 'Šta je uključeno',
    metaLineBold: 'Beograd',
    metaLine: ' · radimo za Evropu i Latinsku Ameriku',
    panelFile: 'app/layout.tsx',
    panelFileNote: ' — hreflang cluster',
    panelChip: '8 tržišta',
    panelStat: '14/23',
    panelFoot:
      'lokalizovanih stranica nije bilo prikazano sopstvenom tržištu. Nevažeći kôd regiona i neusklađena kosa crta na kraju URL-a prekinuli su povratne veze kroz ceo klaster.',
  },

  pipeline: [
    'obilazak sajta',
    'obrada + klasifikacija',
    'poređenje sa osnovom',
    'ispravka',
    'pregled',
    'objava',
  ],

  approach: {
    label: 'Pristup',
    h2: 'Većina agencija ume da kaže šta ne valja. Mnogo manje njih ume to da popravi.',
    paras: [
      'Tehnički audit se obično završava tamo gde počinje teži deo — lista nalaza predata development timu koji ima sopstveni plan, sopstvene prioritete i nijedan poseban razlog da veruje onome ko je tu listu napisao. Šest meseci kasnije polovina je i dalje nerešena.',
      'Ja radim obrnuto. Čitam kôd, pokrećem obilaske sajta, pišem skripte za migraciju i sprovodim izmene. Kada je način na koji je sajt napravljen razlog zašto stranice nisu indeksirane, to je ispravka, a ne preporuka.',
    ],
    tableHeadLeft: 'Šta obično dobijate',
    tableHeadRight: 'Šta dobijate ovde',
    rows: [
      ['Dokument sa nalazima i mesečni poziv', 'Nalaze, i izmenu koja ih rešava'],
      [
        'Account menadžera koji prosleđuje pitanja stručnjaku kojeg nikada ne upoznate',
        'Jednu osobu na pozivu, koja je ujedno i osoba koja radi na kodu',
      ],
      ['Implementacija je vaš problem', 'Posao stiže u vaš sistem, uz pregled vašeg tima'],
      [
        'Izveštaj sastavljen od onoga što alat izveze',
        'Izveštaj napravljen prema pitanjima koja ste zaista postavili',
      ],
    ],
  },

  services: {
    label: 'SEO usluge',
    h2: 'SEO osnove su minimum, a ne ponuda.',
    intro:
      'Svaka agencija na ovom tržištu prodaje prvi blok ispod. Neophodan je, uključen je u svaku saradnju, i ništa u njemu nije razlog da izaberete bilo koga. Dva bloka ispod njega su mesto gde se posao zaista razlikuje.',
    bands: [
      {
        tier: '01 · minimum',
        title: 'SEO osnove',
        note:
          'Uključeno u svaku saradnju. Urađeno kako treba, mereno pošteno, i nikada predstavljeno kao razlog da nekoga angažujete.',
        tiles: [
          { ix: '01.1', label: 'Tehnički audit i dijagnostika obilaska' },
          { ix: '01.2', label: 'Istraživanje ključnih reči i namere pretrage' },
          { ix: '01.3', label: 'On-page: naslovi, struktura, interni linkovi' },
          { ix: '01.4', label: 'Brifovi za sadržaj i uređivački pravac' },
          { ix: '01.5', label: 'Profil linkova i digitalni PR' },
          { ix: '01.6', label: 'Lokalni SEO i Google Business Profile' },
          { ix: '01.7', label: 'Brzina sajta i Core Web Vitals' },
          { ix: '01.8', label: 'Izveštavanje i atribucija' },
        ],
      },
      {
        tier: '02 · specijalnost',
        title: 'Pretraga na više jezičkih tržišta',
        note:
          'Engleski, španski i srpski rade se direktno — ne prevode se uz nadu da će proći. Deo posla koji većina agencija tiho odbija.',
        tiles: [
          { ix: '02.1', label: 'hreflang arhitektura i integritet' },
          { ix: '02.2', label: 'Istraživanje namere po tržištu' },
          { ix: '02.3', label: 'Strategija međunarodnih URL-ova i domena' },
          { ix: '02.4', label: 'Lokalizacija umesto prevoda' },
          { ix: '02.5', label: 'Analiza kanibalizacije između tržišta' },
          { ix: '02.6', label: 'Mapiranje SERP-a i konkurencije po tržištu' },
          { ix: '02.7', label: 'Migracija kroz više lokalizacija' },
          { ix: '02.8', label: 'Pregled izvornog govornika van ta tri jezika' },
        ],
      },
      {
        tier: '03 · inženjering',
        title: 'Automatizacija i alati',
        note:
          'Posao za koji je potreban neko ko ume i da dijagnostikuje problem i da napravi ono što ga rešava.',
        tiles: [
          { ix: '03.1', label: 'Izmene sprovedene, a ne samo opisane' },
          { ix: '03.2', label: 'Noćni obilazak i praćenje regresija' },
          { ix: '03.3', label: 'Strukturirani podaci i graf entiteta' },
          { ix: '03.4', label: 'Planiranje i sprovođenje migracije' },
          { ix: '03.5', label: 'Analiza uz pomoć AI na velikoj količini podataka' },
          { ix: '03.6', label: 'Praćenje vidljivosti u AI odgovorima' },
          { ix: '03.7', label: 'Prilagođeni izveštaji na platformi Reportr' },
          { ix: '03.8', label: 'Analiza log fajlova i podataka preko API-ja' },
        ],
      },
    ],
  },

  multilingual: {
    label: 'Višejezični SEO',
    h2: 'Višejezični SEO koji vodi jedna osoba koja govori te jezike.',
    paras: [
      'Međunarodni SEO pada na instalacijama, ne na tekstu. Povratne veze koje ne uzvraćaju, nevažeći kodovi regiona, dve lokalizacije koje se takmiče za isti upit, migracija koja tiho ostavi pola tržišta bez veze. To su inženjerske greške i nevidljive su u izveštaju o pozicijama.',
      'Radim direktno na engleskom, španskom i srpskom, što znači da istraživanje tržišta i odluke o lokalizaciji ne prolaze kroz prevodioca koji nikada nije video SERP.',
    ],
    matrixBar: 'matrica hreflang povratnih veza — ',
    legend: ['povratna veza važeća', 'nedostaje ili nevažeća', 'sama na sebe'],
    langs: ['Engleski — direktno', 'Španski — direktno', 'Srpski — direktno'],
    langsSecondary: 'Nemački, francuski, nordijski — uz izvornog govornika',
    directions: [
      {
        from: 'SR',
        to: 'EU',
        title: 'Srpske kompanije koje prodaju u Evropi',
        body:
          'Izvozna proizvodnja, IT usluge, regionalni ecommerce. Problem sa pretragom je na nemačkom, engleskom i francuskom — ne na srpskom.',
      },
      {
        from: 'EU',
        to: 'ES / LATAM',
        title: 'Evropske kompanije koje ulaze na španska tržišta',
        body:
          'Španija i Latinska Amerika nisu jedno tržište. Tretirati ih kao jedno je najčešći način na koji ovo pukne.',
      },
      {
        from: 'ES / LATAM',
        to: 'EU',
        title: 'Kompanije sa španskog govornog područja koje ulaze u Evropu',
        body: 'Pravac u kojem sam najviše radio — pravo, teška mehanizacija, obrazovanje i nutricionizam.',
      },
    ],
  },

  machine: {
    label: 'Automatizacija',
    h2: 'Najveći deo ovoga radi bez mene. To je i poenta.',
    intro:
      'Obilazak sajta, obrada, klasifikacija i poređenje su mašinski posao i rade svake noći, bez obzira na to da li neko gleda. Modeli preuzimaju delove kojima treba jezik — klasifikaciju namere, grupisanje entiteta, pripremu strukturiranih podataka — a svaki rezultat prolazi kroz pregled pre nego što stigne na vaš sajt. Procena ostaje ljudska. Količina ne.',
    dagBar: 'noćni proces',
    dagFoot:
      'Proces je isti bez obzira na to da li imam pristup kodu. Sa pristupom, rezultat je izmena koju sprovodim sâm. Bez njega, dokumentovan skup izmena koji vaši programeri mogu da primene i provere.',
    dagLabels: {
      input: 'ULAZ',
      machine: 'MAŠINA',
      gate: 'PREGLED',
      output: 'IZLAZ',
      crawl: 'obilazak sajta',
      gsc: 'Search Console API',
      logs: 'log fajlovi servera',
      parse: 'obrada + namera',
      diff: 'poređenje sa osnovom',
      entities: 'entiteti + schema',
      reviewA: 'ljudski',
      reviewB: 'pregled',
      pr: 'izmena u kodu',
      changeSet: 'skup izmena',
      modelAssisted: 'uz pomoć modela',
      everyChange: 'svaka izmena',
      withRepo: 'sa pristupom',
      withoutRepo: 'bez pristupa',
      caption: 'pokreće se u 03:00 UTC · ništa ne stiže na sajt bez pregleda',
    },
    logRun: 'izvršavanje',
    logLive: 'UŽIVO',
    logElapsed: 'proteklo',
    logLines: [
      { ts: '03:00:02', text: 'početak obilaska <v>2.148</v> url · <v>6</v> lokalizacija' },
      { ts: '03:04:19', text: 'red za renderovanje ispražnjen <ok>ok</ok>' },
      { ts: '03:04:51', text: 'klasifikacija namere → <v>6</v> grupa' },
      { ts: '03:05:30', text: 'provera schema <warn>31 upozorenje</warn>' },
      { ts: '03:06:11', text: 'sukob canonical oznaka <err>4</err> šablona' },
      { ts: '03:06:44', text: 'hreflang povratne veze <err>prekinute</err> <v>de↔nb</v>' },
      { ts: '03:07:02', text: 'poređenje sa osnovom <v>+18 −6</v>' },
      { ts: '03:07:40', text: 'nacrt ispravke <ok>spreman</ok>' },
      { ts: '08:12:05', text: 'pregled <v>sebastian</v> <ok>odobreno</ok>' },
      { ts: '08:12:31', text: 'izmena <v>#412</v> → <ok>čeka objavu</ok>' },
    ],
  },

  work: {
    label: 'Kako sarađujemo',
    h2: 'Tri načina da počnemo. Prvim kreće većina.',
    intro:
      'Dve stvari ih razdvajaju: da li posao ima rok završetka i na čijem stolu završava implementacija. Većina klijenata kreće od jednog jasno definisanog problema — to je najjeftiniji način da proverite da li valjam — pa pređe na stalnu saradnju kada dobiju odgovor.',
    lanes: [
      {
        title: 'Rešavamo jednu stvar',
        who: 'Nešto konkretno je pokvareno, ili će biti',
        entryBadge: 'VEĆINA KLIJENATA KREĆE ODAVDE',
        shape: 'OGRANIČENO · IMA ROK',
        shapeFinite: true,
        barSelf: 100,
        barClient: 0,
        keyLeft: 'Indexa radi posao',
        keyRight: 'pa ga predaje',
        keyRightSage: true,
        desc:
          'Jedan definisan problem, jedna fiksna cena, jedan rok isporuke. Migracija koja je pokvarila sajt, stranice koje su prestale da se indeksiraju, međunarodna postavka koja nikada nije radila — ili migracija koju tek treba da uradite i ne želite da pogrešite.',
        chips: ['Fiksni obim', 'Fiksna cena', 'Fiksni rok', 'Sa dokazima'],
        price: 'od 2.000 €',
        unit: 'cena nakon procene obima',
      },
      {
        title: 'Vodimo ceo SEO',
        who: 'Nemate nikoga ko radi pretragu',
        shape: 'STALNO · BEZ ROKA',
        barSelf: 88,
        barClient: 12,
        barFade: true,
        keyLeft: 'Indexa radi posao',
        keyRight: 'vi odobravate',
        desc:
          'Preuzimamo organsku pretragu i nastavljamo da je vodimo — strategija, tehnički posao, pravac sadržaja i sama implementacija, iz meseca u mesec. Nema predaje, jer nema ni kraja.',
        chips: ['Blokovi 01–03', 'Noćno praćenje', 'Više tržišta', 'Izveštaj o prihodu'],
        price: '1.300–1.800 €',
        unit: 'mesečno · minimum dvanaest meseci',
      },
      {
        title: 'Vodimo vaš tim',
        who: 'Imate ljude, treba vam pravac',
        shape: 'STALNO · OBNAVLJA SE MESEČNO',
        barSelf: 28,
        barClient: 72,
        keyLeft: 'Indexa odlučuje',
        keyRight: 'vaš tim radi posao',
        desc:
          'Za interne timove i agencije koje rade uz njih. Vaši ljudi izvršavaju; ja odlučujem šta vredi izvršiti i pregledam šta ide u objavu.',
        descEmphasis:
          'Košta više od opcije u kojoj radim sve, jer se savetovanje ne može automatizovati ni delegirati — to je jedina stvar koja ograničava koliko klijenata mogu da primim.',
        chips: ['Prioriteti plana', 'Pregled pre migracije', 'Nezavisni audit', 'Direktan pristup'],
        price: '2.500 €',
        unit: 'mesečno · 16 konsultantskih sati',
        unitPlaceholder: true,
      },
    ],
  },

  results: {
    label: 'Rezultati',
    h2: 'Svaki broj ovde polazi od navedene početne vrednosti.',
    intro:
      '„+400% organskog saobraćaja“ nije rezultat. Četiristo posto od čega, u kom periodu, u poređenju sa kojom sezonom — to je rezultat. Svaka saradnja ispod pokazuje odakle je krenula.',
    cases: [
      {
        sector: 'B2B SaaS · Danska · više tržišta',
        from: '584K',
        to: '885K',
        title: 'Vidljivost u pretrazi ponovo izgrađena na SaaS sajtu sa više tržišta',
        basis:
          'Impresije, šest meseci naspram prethodnih šest u Search Console-u. Klikovi 7,79K → 9,72K u istom poređenju. Prosečna pozicija 18,7 → 15,2.',
        spark: 'M0 40 L40 41 L72 39 L100 36 L128 28 L156 20 L188 11 L240 4',
      },
      {
        sector: 'Advokatska kancelarija · regulisana delatnost · Čile',
        from: '19,8',
        to: '8,5',
        title: 'Sa druge na prvu stranu — uz 90% manji budžet za oglase',
        basis:
          'Prosečna pozicija, šest meseci naspram prethodnih šest u Search Console-u. Impresije 9,23K → 17,9K. Budžet za Google oglase smanjen za 90%, uz nepromenjen broj klijenata.',
        inverted: true,
        spark: 'M0 6 L34 10 L62 9 L92 16 L124 22 L158 28 L198 33 L240 36',
      },
      {
        sector: 'Hrana i nutricionizam · 6 tržišta · 95% izvoz',
        from: '0',
        to: '4',
        title: 'Prvi upiti iz pretrage za deset godina postojanja sajta',
        basis:
          'Upiti preko sajta u prva tri meseca nakon preuređenja, naspram osnove od nula upita za deset godina na internetu. Upiti i dalje stižu. Prosečna pozicija 13,4 → 9; mesečne impresije 1.472 → 2.330.',
        spark: 'M0 44 L48 44 L96 43 L132 38 L166 28 L196 18 L220 10 L240 4',
      },
    ],
    promptLabel: 'praćeni upit — ',
    promptText: '„najbolji dobavljač za <kategoriju> u EU“',
    promptTag: 'udeo odgovora koji citiraju klijenta · ',
    fromWord: 'sa',
    engines: [
      { name: 'ChatGPT', share: '68%', prior: '11%', pct: 68 },
      { name: 'Google AI Overviews', share: '52%', prior: '0%', pct: 52 },
      { name: 'Perplexity', share: '81%', prior: '24%', pct: 81, sage: true },
    ],
  },

  tools: {
    label: 'SEO alati',
    h2: 'Sâm pravim alate koje koristim na vašem nalogu.',
    paras: [
      'Reportr je platforma za izveštavanje koju sam napravio i koju održavam. Postoji zato što me je izveštavanje po klijentu ranije koštalo radnog dana, a gotova rešenja su odgovarala na pitanja koja niko nije postavio.',
      'Na tome stoji reč „inženjering“ na ovoj stranici. Nije tvrdnja o metodologiji — to je proizvod na koji možete da se prijavite i koristite ga, bez obzira na to da li me ikada angažujete.',
    ],
    cta: 'Pogledajte Reportr',
    graphBar: 'graf entiteta — šta asistenti čitaju pre nego što vas citiraju',
    caps: [
      ['U vašem kodu', 'Next.js, WordPress, Shopify, HubSpot. Grana, izmena, vaš proces pregleda.'],
      [
        'U vašim podacima',
        'Search Console i GA4 preko API-ja, a ne preko interfejsa. Log fajlovi kada pitanje to zahteva.',
      ],
      [
        'U vašem procesu',
        'Zakazani obilasci, provera strukturiranih podataka, provera regresija pri svakoj objavi.',
      ],
      [
        'Na vašim tržištima',
        'Engleski, španski i srpski direktno. Sve ostalo uz izvornog govornika, nikada samo mašinski prevod.',
      ],
    ],
  },

  contact: {
    label: 'Kontakt',
    h2: 'Pošaljite mi sajt i problem.',
    body:
      'Dobićete iskrenu procenu da li je u pitanju tehnički problem, problem sadržaja, problem konkurencije ili problem koji ne vredi rešavati. Ako je ovo poslednje, reći ću vam — taj odgovor vas ne košta ništa i obojici štedi jednu ponudu.',
    email: 'hello@indexa.rs',
    linkedin: 'LinkedIn',
  },

  footer: {
    left: 'Indexa · Beograd, RS · ',
    regNumber: 'Matični broj 68602106',
    email: 'hello@indexa.rs',
  },
};
