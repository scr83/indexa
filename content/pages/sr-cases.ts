import type { CasePage } from '../types';

/* Serbian case pages. Same engagements, same verified figures, Serbian
   number formatting throughout: comma for the decimal mark and a full stop
   for thousands, so 1.472 and 7,79K and 94,7%.

   The CTR row is published here too, with the same explanation — it fell
   because impressions grew faster than clicks. Dropping the row in one
   language and keeping it in the other would make the two versions say
   different things about the same client. */

const FIG_HEAD: [string, string, string] = ['Metrika', 'Pre', 'Posle'];

const saas: CasePage = {
  locale: 'sr',
  meta: {
    title: 'B2B SaaS, više tržišta — vidljivost ponovo izgrađena | Indexa slučaj',
    description:
      'Impresije sa 584K na 885K kroz šestomesečne periode iste dužine na B2B SaaS sajtu sa više tržišta, nakon ponovne izgradnje hreflang klastera. Svaka cifra izvezena iz Google Search Console-a.',
    ogTitle: 'B2B SaaS, više tržišta — vidljivost ponovo izgrađena',
    ogDescription: 'Impresije 584K → 885K kroz periode iste dužine, sa ponovo izgrađenim hreflang klasterom.',
  },
  kicker: 'Slučaj 01 · B2B SaaS · Danska · više tržišta',
  h1: 'Vidljivost u pretrazi ponovo izgrađena na SaaS sajtu sa više tržišta.',
  lede:
    'Lokalizovane strane nisu bile prikazivane sopstvenom tržištu. Nevažeći kôd regiona i neusklađena kosa crta na kraju URL-a prekinuli su povratne veze kroz ceo hreflang klaster, pa je Google odbacivao odnose između osam tržišta umesto da ih poštuje.',
  headline: {
    from: '584K',
    to: '885K',
    label: 'Impresije, šest meseci naspram prethodnih šest',
    spark: 'M0 40 L40 41 L72 39 L100 36 L128 28 L156 20 L188 11 L240 4',
  },
  figuresLabel: 'brojevi',
  figuresHead: FIG_HEAD,
  figures: [
    { label: 'Impresije', before: '584K', after: '885K' },
    { label: 'Klikovi', before: '7,79K', after: '9,72K' },
    { label: 'Prosečna pozicija', before: '18,7', after: '15,2', inverted: true },
    { label: 'CTR', before: '1,3%', after: '1,1%', neutral: true },
  ],
  basis:
    'Google Search Console, šest meseci naspram neposredno prethodnih šest meseci. Isti sajt, iste zemlje, bez filtera. CTR je pao zato što su impresije rasle brže od klikova — sajt je počeo da se pojavljuje na mnogo širem skupu upita, od kojih su mnogi širi i na nižim pozicijama. To je očekivan oblik oporavka vidljivosti, a ne pad učinka.',
  sections: [
    {
      label: 'početno stanje',
      h2: 'Osam tržišta, i klaster koji pokazuje na pogrešne strane.',
      paras: [
        'Sajt je opsluživao osam jezičkih tržišta iz jednog koda, sa lokalizovanim sadržajem za svako. Sadržaj je postojao i strane su postojale; nije stajao skup signala koji Google-u govori koja strana pripada kom tržištu.',
        'Dve greške su napravile najveću štetu. Jedno tržište je prijavljivalo kôd regiona koji ne postoji, što obesmišljava hreflang oznaku za sve strane koje na njega pokazuju. Drugo je imalo kosu crtu na kraju URL-a na jednoj strani para, a bez nje na drugoj, pa se povratne veze nisu razrešavale. Hreflang se poštuje samo kada svaka strana u klasteru pokazuje na svaku drugu; klaster koji ne radi u jednom smeru odbacuje se u celosti, i to bez poruke.',
        'Vidljiv simptom bio je onaj koji klijenti obično i prijave: posetioci dolaze na pogrešnu jezičku verziju, a lokalizovane strane se ne rangiraju na tržištu za koje su napisane.',
      ],
    },
    {
      label: 'šta brojevi kažu',
      h2: 'Impresije +52%, pozicija bolja za 3,5 mesta, klikovi +25%.',
      paras: [
        'Kroz šestomesečne periode iste dužine, impresije su otišle sa 584K na 885K, a klikovi sa 7,79K na 9,72K. Prosečna pozicija popravljena je sa 18,7 na 15,2 — što je na većini upita još uvek druga strana rezultata, i to je iskreno čitanje: ovo je sajt pomerilo sa nevidljivog na konkurentan, ne na vrh rezultata.',
        'CTR je pao sa 1,3% na 1,1%. To stoji u tabeli, a ne izvan nje, jer objašnjenje ima značaj: impresije su porasle 52% a klikovi 25%, pa se sajt sada pojavljuje na daleko širem skupu upita, uključujući i šire upite na nižim pozicijama gde niko ne klikne. Rast CTR-a uz nepromenjene impresije bio bi drugačiji i manji rezultat.',
        'Ista saradnja je izvor panela o vidljivosti u AI odgovorima na početnoj strani: 74.202 impresije unutar Google AI odgovora između 25. maja i 24. novembra 2026., uz rast sa oko 180 dnevno u prvih trideset dana na oko 858 dnevno u poslednjih trideset, pri čemu je 94,7% tih pojavljivanja izvan domaćeg tržišta klijenta, u 207 zemalja.',
      ],
    },
    {
      label: 'šta ovo ne kaže',
      h2: 'Granice ovog slučaja.',
      paras: [
        'Ne izdvaja hreflang posao kao jedini uzrok. Klijent je u istom periodu objavljivao proizvod i sadržaj, a nijedna SEO saradnja na živom sajtu nije kontrolisani eksperiment. Može se reći da je klaster bio pokvaren, da je popravka sprovedena i da je oporavak došao posle toga.',
        'Ne govori ništa o prihodu. Search Console prikazuje impresije, klikove i poziciju; ne prikazuje koliko su ti klikovi vredeli, a komercijalne brojeve klijenta ne objavljujem.',
        'Klijent je anonimizovan na sopstveni zahtev, pa ove brojeve ne možete sami proveriti na živom sajtu. Ono što možete jeste da pitate za periode poređenja — navedeni su — i da proverite da li su iste dužine. Šest meseci upoređenih sa pet je način na koji se procenat proizvodi, i to je prva stvar koju vredi proveriti u svačijoj studiji slučaja.',
      ],
    },
  ],
  services: {
    h2: 'Posao koji stoji za ovim',
    intro: 'Dve usluge su nosile ovu saradnju.',
    ids: ['technical-seo', 'seo-consulting'],
  },
  others: { h2: 'Ostali slučajevi' },
  backToIndex: 'Rezultati',
};

const legal: CasePage = {
  locale: 'sr',
  meta: {
    title: 'Advokatska kancelarija — sa druge strane na prvu, 90% manje za oglase | Indexa slučaj',
    description:
      'Prosečna pozicija sa 19,8 na 8,5 kroz periode iste dužine za regulisanu advokatsku delatnost, uz 90% manji budžet za Google Ads i nepromenjen broj upita. Cifre izvezene iz Search Console-a.',
    ogTitle: 'Advokatska kancelarija — sa druge strane na prvu, 90% manje za oglase',
    ogDescription: 'Prosečna pozicija 19,8 → 8,5, impresije skoro udvostručene, 90% budžeta za oglase više nije potrebno.',
  },
  kicker: 'Slučaj 02 · Advokatska kancelarija · regulisana delatnost · Čile',
  h1: 'Sa druge strane rezultata na prvu — i 90% manje za oglase.',
  lede:
    'Regulisana advokatska praksa koja je plaćala Google Ads da pokrije upite na kojima sopstveni sajt nije mogao da se rangira. Zadatak nije bio „više saobraćaja” — bio je da se prestane sa iznajmljivanjem vidljivosti koju je sajt trebalo da poseduje.',
  headline: {
    from: '19,8',
    to: '8,5',
    label: 'Prosečna pozicija, šest meseci naspram prethodnih šest',
    inverted: true,
    spark: 'M0 6 L34 10 L62 9 L92 16 L124 22 L158 28 L198 33 L240 36',
  },
  figuresLabel: 'brojevi',
  figuresHead: FIG_HEAD,
  figures: [
    { label: 'Prosečna pozicija', before: '19,8', after: '8,5', inverted: true },
    { label: 'Impresije', before: '9,23K', after: '17,9K' },
    { label: 'CTR', before: '3,3%', after: '2,0%', neutral: true },
    { label: 'Budžet za Google Ads', before: '100%', after: '10%', inverted: true },
  ],
  basis:
    'Google Search Console, šest meseci naspram neposredno prethodnih šest meseci, isti sajt. Cifra o budžetu za oglase je klijentova: budžet smanjen za 90% uz nepromenjen broj upita. CTR je pao dok su se impresije skoro udvostručile — praksa je počela da se pojavljuje na mnogo širem skupu upita, uključujući informativne koji ne donose kontakt i na koje se ne klikne.',
  sections: [
    {
      label: 'početno stanje',
      h2: 'Plaćanje upita na kojima je sajt trebalo da se rangira.',
      paras: [
        'Prosečna pozicija 19,8 znači drugu stranu rezultata na većini upita — prisutan u indeksu, odsutan sa strane koju iko gleda. Praksa je tu prazninu pokrivala preko Google Ads-a, što radi i što košta svakog meseca, a ništa se ne nagomilava.',
        'Ovo je regulisana kategorija, što ograničava šta se može reći i kako. Takođe znači da je konkurencija uglavnom druge kancelarije koje kupuju iste klikove, pa cena oglasa po upitu vremenom raste, a ne pada.',
      ],
    },
    {
      label: 'šta brojevi kažu',
      h2: 'Pozicija sa 19,8 na 8,5, impresije skoro udvostručene.',
      paras: [
        'Prosečna pozicija pomerila se sa 19,8 na 8,5 kroz periode iste dužine, a impresije sa 9,23K na 17,9K. Pozicija 8,5 je prva strana na većini upita, ali ne njen vrh, i to je tačan način da se opiše.',
        'Cifra koja je klijentu najvažnija je treća: budžet za Google Ads smanjen za 90%, uz nepromenjen broj upita. To je njihov broj, ne Search Console-ov, i to je broj zbog kog se saradnja sama isplatila — organske pozicije sada pokrivaju ono što je budžet za oglase kupovao.',
        'CTR je pao sa 3,3% na 2,0%, i razlog je isti kao u svakom slučaju na ovom sajtu: impresije su porasle 94% jer se praksa počela pojavljivati na širim i informativnijim upitima koji donose impresije a ne klikove. Klikovi koji nose vrednost su oni na komercijalnim upitima, a to su pozicije koje su se pomerile.',
      ],
    },
    {
      label: 'šta ovo ne kaže',
      h2: 'Granice ovog slučaja.',
      paras: [
        'Smanjenje budžeta za oglase od 90% prijavio je klijent, nije ga izmerio neko sa strane. Mogu da pokažem organske pozicije koje su to omogućile; ne mogu nezavisno da proverim njihov nalog za oglase ni broj upita.',
        'Pozicija 8,5 je prosek kroz sve praćene upite, a ne rang za jedan termin. Neki upiti stoje više, neki znatno niže, a prosek je iskren način da se prikaže skup umesto da se izabere najbolji pojedinačni rezultat.',
        'Regulisana kategorija ograničava koliko se o strategiji sadržaja može javno opisati. Brojevi su brojevi; detalji onoga što je objavljeno su klijentovi.',
      ],
    },
  ],
  services: {
    h2: 'Posao koji stoji za ovim',
    intro: 'Tehnički temelji su nosili ovaj slučaj.',
    ids: ['technical-seo', 'seo-agencija-beograd'],
  },
  others: { h2: 'Ostali slučajevi' },
  backToIndex: 'Rezultati',
};

const food: CasePage = {
  locale: 'sr',
  meta: {
    title: 'Izvoznik hrane i nutricionizma — prvi upiti iz pretrage posle deset godina | Indexa slučaj',
    description:
      'Sajt deset godina na mreži bez jednog upita iz pretrage dao je prva četiri u tri meseca posle obnove. Prosečna pozicija sa 13,4 na 4,7, mesečne impresije sa 1.472 na 2.330.',
    ogTitle: 'Izvoznik hrane i nutricionizma — prvi upiti iz pretrage posle deset godina',
    ogDescription: 'Nula upita za deset godina na mreži, pa četiri u tri meseca. Prosečna pozicija 13,4 → 4,7.',
  },
  kicker: 'Slučaj 03 · Hrana i nutricionizam · 6 tržišta · 95% izvoz',
  h1: 'Prvi upiti iz pretrage u desetogodišnjoj istoriji sajta.',
  lede:
    'Izvoznik koji 95% prihoda ostvaruje izvan domaćeg tržišta, sa sajtom koji je deset godina bio na mreži i nikada nije doneo ni jedan upit kroz pretragu. Početno stanje nije bilo nisko. Bilo je nula.',
  headline: {
    from: '0',
    to: '4',
    label: 'Upiti preko sajta, prva tri meseca posle obnove',
    spark: 'M0 44 L48 44 L96 43 L132 38 L166 28 L196 18 L220 10 L240 4',
  },
  figuresLabel: 'brojevi',
  figuresHead: FIG_HEAD,
  figures: [
    { label: 'Upiti preko sajta', before: '0', after: '4' },
    { label: 'Prosečna pozicija', before: '13,4', after: '4,7', inverted: true },
    { label: 'Mesečne impresije', before: '1.472', after: '2.330' },
    { label: 'CTR', before: '4,9%', after: '3,6%', neutral: true },
  ],
  basis:
    'Upiti se računaju preko sajta u prva tri meseca posle obnove, naspram nule kroz deset godina na mreži; upiti se nastavljaju i posle toga. Cifre o poziciji i impresijama su iz Google Search Console-a — 13,4 na početku naspram 4,7 danas, i mesečne impresije a ne zbir perioda, zato što periodi nisu iste dužine i zbir bi precenio promenu.',
  sections: [
    {
      label: 'početno stanje',
      h2: 'Deset godina na mreži, nula upita iz pretrage.',
      paras: [
        'Firma nikada nije radila SEO. Sajt je postojao, bio je indeksiran i za deceniju nije doneo ni jedan upit kroz pretragu — što je korisnije početno stanje od procenta, jer o tome šta znači nula nema nejasnoće.',
        'Devedeset pet odsto prihoda dolazilo je iz izvoza na šest tržišta, pa je tražnja bila stvarna i zadovoljavana isključivo kroz kanale koji nisu sajt. To je situacija u kojoj posao u pretrazi ima najjasniji osnov: kupci postoje i traže, a sajta nema u rezultatima.',
      ],
    },
    {
      label: 'šta brojevi kažu',
      h2: 'Četiri upita u tri meseca, sa početnog stanja nula.',
      paras: [
        'Četiri upita je mali broj i prijavljen je kao četiri, a ne kao procenat, zato što je procentualni rast sa nule nedefinisan i svako ko ga prikaže krije početno stanje. Upiti su se nastavili i posle prva tri meseca.',
        'Prosečna pozicija otišla je sa 13,4 na početku na 4,7 danas, a mesečne impresije sa 1.472 na 2.330. Ovde se objavljuju mesečni prosеci a ne zbirovi perioda: periodi nisu iste dužine, a poređenje dužeg sa kraćim naduvava prividnu promenu. Mesečna cifra je poređenje koje stoji.',
        'CTR je pao sa 4,9% na 3,6%, uz mesečni rast impresija od 58%. Isti obrazac kao u ostalim slučajevima, isti razlog — šira pokrivenost upita donosi impresije koje se ne pretvaraju u klikove, a vrednost je u popravljenoj poziciji.',
      ],
    },
    {
      label: 'šta ovo ne kaže',
      h2: 'Granice ovog slučaja.',
      paras: [
        'Četiri upita kroz tri meseca nije dokaz da kanal radi. To je dokaz da kanal postoji, na sajtu na kom to nikada nije bilo pokazano. Predstaviti to kao više od toga bilo bi preprodavanje.',
        'Periodi poređenja ovde nisu iste dužine, i zato se cifre objavljuju kao mesečni prosеci. Zbirovi bi pokazali veći rast i bili bi obmanjujući. Ako vidite studiju slučaja koja navodi zbir perioda bez obe dužine perioda, to je ono što treba pitati.',
        'Broj upita je klijentov, zabeležen kroz njihov sajt. Search Console ne prikazuje upite kroz formu, a njihov CRM nije revidiran.',
      ],
    },
  ],
  services: {
    h2: 'Posao koji stoji za ovim',
    intro: 'Šest izvoznih tržišta, pa je ovaj slučaj nosio međunarodni posao.',
    ids: ['technical-seo', 'seo-consulting'],
  },
  others: { h2: 'Ostali slučajevi' },
  backToIndex: 'Rezultati',
};

export const srCases = {
  'case-saas': saas,
  'case-legal': legal,
  'case-food': food,
} as const;

export const srResultsIndex = {
  locale: 'sr' as const,
  meta: {
    title: 'SEO studije slučaja — svaki broj sa navedenim početnim stanjem | Indexa',
    description:
      'Tri saradnje sa ciframa izvezenim iz Google Search Console-a i periodima poređenja iste dužine: obnova B2B SaaS sajta sa više tržišta, regulisana advokatska praksa i izvoznik bez upita iz pretrage deset godina.',
    ogTitle: 'SEO studije slučaja — svaki broj sa navedenim početnim stanjem',
    ogDescription: 'Tri saradnje, izvezeni podaci iz Search Console-a, periodi iste dužine, granice navedene.',
  },
  kicker: 'Rezultati',
  h1: 'Svaki broj ovde počinje od navedenog početnog stanja.',
  lede:
    '„+400% organskog saobraćaja” nije rezultat. Četiri stotine odsto čega, kroz koji period, u odnosu na koje sezonsko poređenje — to je rezultat. Svaka saradnja ispod navodi odakle je počela, koji su periodi poređenja bili i šta cifre ne pokrivaju.',
  cardCta: 'Pročitajte ceo slučaj',
  note:
    'CTR je pao u sve tri saradnje. To stoji u svakom slučaju, a ne izvan njega: impresije su rasle brže od klikova zato što su sajtovi počeli da se pojavljuju na daleko širim skupovima upita, uključujući šire i informativne upite koji donose impresije a ne klikove. Studija slučaja koja prikazuje samo metrike koje su porasle nije prikaz.',
};
