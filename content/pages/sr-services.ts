import type { ServicePage } from '../types';

/* Serbian service pages.

   Terminology follows what is already settled in content/sr.ts — izmena u
   kodu, skup izmena, obilazak sajta, prosečna pozicija — so the whole site
   reads as one voice. Like the Serbian home page, these are written in the
   first person singular rather than the English "we": in this market the
   buyer is hiring a named person, and the existing copy already does that.

   /sr/seo-agencija-beograd has no English counterpart on purpose. It takes
   the local commercial term, while the Serbian home page keeps "SEO
   optimizacija" — two pages chasing one term would cannibalise the
   stronger one. */

const tehnickiSeo: ServicePage = {
  locale: 'sr',
  meta: {
    title: 'Tehnički SEO — revizija koja se završava izmenom | Indexa',
    description:
      'Tehnički SEO koji se završava sprovedenom izmenom, a ne listom preporuka. Indeksiranje, canonical oznake, Core Web Vitals, arhitektura sajta i migracije — sprovedeno u vašem kodu ili predato kao pregledan skup izmena.',
    ogTitle: 'Tehnički SEO — revizija koja se završava izmenom',
    ogDescription:
      'Indeksiranje, canonical oznake, Core Web Vitals i migracije — dijagnostika, a potom i sprovođenje.',
  },
  kicker: '01 · tehnički SEO',
  name: 'Tehnički SEO',
  h1: 'Tehnički SEO: popravka se piše u kodu.',
  sub: 'Indeksiranje, canonical oznake, arhitektura, Core Web Vitals i migracije — dijagnostikovano, pa sprovedeno.',
  lede: 'Većina tehničkih revizija završi se tabelom nalaza, a nalazi tu i ostanu, jer ni na jednoj strani niko ne preuzima sprovođenje.',
  ledeEmphasis: 'Ova se završava sprovedenom i proverenom izmenom.',
  ctaPrimary: 'Zatražite reviziju',
  ctaSecondary: 'Pogledajte kako to izgleda',
  panel: {
    file: 'app/[locale]/proizvodi/[slug]/page.tsx',
    fileNote: ' — canonical pokazuje na preusmerenje',
    chip: 'sprovedeno',
    lines: [
      { n: '18', g: ' ', t: 'export async function generateMetadata({ params }) {' },
      { n: '19', g: '−', t: '  const canonical = `/${params.locale}/proizvod/${params.slug}/`;', k: 'del' },
      { n: '19', g: '+', t: '  // /proizvod/ ide 301 na /proizvodi/ — canonical ne sme', k: 'add' },
      { n: '20', g: '+', t: '  // da pokazuje na preusmerenje, već na konačnu putanju.', k: 'add' },
      { n: '21', g: '+', t: '  const canonical = `/${params.locale}/proizvodi/${params.slug}`;', k: 'add' },
      { n: '22', g: ' ', t: '  return { alternates: { canonical } };' },
    ],
    foot: 'Canonical oznaka koja pokazuje na preusmerenje je signal koji Google tumači po sopstvenoj proceni, i to je najčešći nalaz na sajtu koji je prošao kroz promenu platforme.',
  },
  what: {
    label: 'šta je to',
    h2: 'Temelji, i red u kom moraju da se poprave.',
    paras: [
      'Tehnički SEO je pitanje da li pretraživač može da dođe do vaših strana, da razluči koja je verzija glavna, da razume o čemu je svaka od njih i da je prikaže bez čekanja na JavaScript koji neće sačekati. Dok to ne stoji, sadržaj i linkovi su ulaganje koje curi.',
      'Dijagnostika je jeftin deo. Obilazak sajta, Search Console, log fajlovi i prikazani DOM reći će vam šta ne radi u roku od nedelju dana. Vreme odlazi na odluku šta se popravlja prvo, jer nalazi utiču jedan na drugi: ako se interni linkovi urade pre canonical oznaka, interni linkovi se rade dva puta.',
      'Zato je rezultat poređan po redu. Prvo indeksiranje i integritet canonical oznaka, jer se sve nizvodno meri kroz njih. Onda arhitektura i interno povezivanje. Onda prikazivanje i Core Web Vitals. Onda ono što je zaista kozmetika, što se radi poslednje ili nikako.',
    ],
  },
  does: {
    label: 'obim',
    h2: 'Šta posao zaista pokriva.',
    intro:
      'Svaka saradnja uključuje sve ovo. Ništa od toga nije dodatna naplata i ništa od toga samo po sebi nije razlog da se bilo ko angažuje.',
    tiles: [
      { ix: '01.1', label: 'Dijagnostika indeksiranja i pokrivenosti' },
      { ix: '01.2', label: 'Canonical oznake i rešavanje duplikata' },
      { ix: '01.3', label: 'Budžet obilaska i analiza log fajlova' },
      { ix: '01.4', label: 'Arhitektura sajta i interno povezivanje' },
      { ix: '01.5', label: 'Prikazivanje i zavisnost od JavaScript-a' },
      { ix: '01.6', label: 'Otklanjanje problema sa Core Web Vitals' },
      { ix: '01.7', label: 'Strukturirani podaci i označavanje entiteta' },
      { ix: '01.8', label: 'Planiranje i sprovođenje migracija' },
    ],
  },
  deliver: {
    label: 'šta dobijate',
    h2: 'Skup izmena, a ne dokument.',
    paras: [
      'Ako imam pristup repozitorijumu, posao dolazi kao jedna izmena u kodu po popravci — svaka se pregleda zasebno i vraća zasebno. Vaš tim pročita razliku i spoji je, ili ne.',
      'Ako nema koda kom se može pristupiti — platforma u zakupu, agencija koja drži sajt, CMS bez kontrole verzija — isti posao dolazi kao skup izmena: svaka izmena ispisana tačno, u redu u kom se primenjuje, sa razlogom i načinom da se posle proveri. Ni na jednom mestu u tom dokumentu ne stoji „optimizovati”.',
      'U oba slučaja postoji stanje pre i posle, izmereno u Search Console-u, a poređenje koristi periode iste dužine. Šest meseci upoređenih sa pet je način na koji se procenat proizvodi, i to je prva stvar koju treba proveriti u tuđoj studiji slučaja — uključujući i moju.',
    ],
  },
  proof: {
    label: 'dokaz',
    h2: 'Gde je ovo već urađeno.',
    intro: 'Dve saradnje u kojima je tehnički posao bio cela intervencija.',
    caseIds: ['case-legal', 'case-saas'],
  },
  faq: {
    label: 'pitanja',
    h2: 'Pitanja koja se prva pojave.',
    items: [
      {
        q: 'Da li vam je potreban pristup našem kodu?',
        a: 'Ne. Posao je sa pristupom brži i jeftiniji, jer se popravka napisana kao izmena u kodu primeni jednom i odmah proveri. Bez pristupa, iste popravke dolaze kao dokumentovan skup izmena koji primenjuje vaš programer ili vaša platforma. Većina saradnji je ova druga vrsta.',
      },
      {
        q: 'Koliko treba da se nešto promeni u Search Console-u?',
        a: 'Problemi sa indeksiranjem i pokrivenošću pomere se dve do četiri nedelje nakon što izmena izađe, jer Google mora ponovo da obiđe sajt pre nego što bilo šta može da se promeni. Promene pozicija i saobraćaja idu posle toga, i na sajtu bilo koje veličine iskren odgovor je jedan do dva kvartala pre nego što poređenje ima smisla. Ko obećava rok kraći od jednog ciklusa obilaska, opisuje nešto drugo, a ne SEO.',
      },
      {
        q: 'Ima li smisla tehnička revizija ako nam je sadržaj mršav?',
        a: 'Obično da, ali ne nužno prva. Ako je sajt mali, indeksira se čisto i prosto nema šta da rangira, tehnički posao neće doneti saobraćaj i reći ću vam to, a ne prodati ga. Revizija se isplati kada postoji tražnja koju sajt ne hvata — strane koje postoje, stoje na trećoj strani rezultata, a nešto strukturno ih drži.',
      },
    ],
  },
  related: {
    h2: 'Povezano',
    items: [
      {
        id: 'seo-consulting',
        title: 'SEO konsultant',
        blurb: 'Kada imate programere, a potreban vam je smer, ne ruke.',
      },
      {
        id: 'seo-agencija-beograd',
        title: 'SEO agencija u Beogradu',
        blurb: 'Kako ovo izgleda za firmu koja posluje na domaćem tržištu.',
      },
    ],
  },
};

const seoKonsultant: ServicePage = {
  locale: 'sr',
  meta: {
    title: 'SEO konsultant za timove koji imaju programere | Indexa',
    description:
      'SEO konsalting za firme koje već imaju inženjere i potreban im je smer, a ne ruke. Plan po prioritetima, specifikacije koje vaš tim može da sprovede, i pregled onoga što je zaista izašlo.',
    ogTitle: 'SEO konsultant za timove koji imaju programere',
    ogDescription:
      'Plan po prioritetima, pregledane specifikacije, i neko u sobi dok vaš tim sprovodi izmene.',
  },
  kicker: '03 · konsalting',
  name: 'SEO konsultant',
  h1: 'SEO konsultant za timove koji već imaju programera.',
  sub: 'Plan, specifikacije i pregled — vaši inženjeri sprovode izmene.',
  lede: 'Ako imate inženjerski kapacitet a ipak ne rangirate, ono što najčešće nedostaje nije trud. Nedostaje odluka o tome šta se neće raditi.',
  ledeEmphasis: 'Ta odluka je ono što se ovde plaća.',
  ctaPrimary: 'Razgovarajmo o vašem timu',
  ctaSecondary: 'Pogledajte kako radi',
  panel: {
    file: '0003-sazimanje-paginiranih-arhiva.patch',
    fileNote: ' — predato vašem timu, ne spajam ja',
    chip: 'za pregled',
    lines: [
      { n: '01', g: ' ', t: 'Naslov: [PATCH 3/7] sažimanje paginiranih arhiva' },
      { n: '02', g: ' ', t: '' },
      { n: '03', g: ' ', t: 'Zašto: /blog/page/2..47 svaka nosi canonical na sebe, pa' },
      { n: '04', g: ' ', t: '46 skoro praznih strana konkuriše arhivi za isti upit.' },
      { n: '05', g: ' ', t: 'Provera: izveštaj o pokrivenosti, „Duplikat bez izabrane' },
      { n: '06', g: ' ', t: 'canonical oznake” pada za ~46 u dva ciklusa obilaska.' },
      { n: '07', g: ' ', t: 'Vraćanje: samo ovaj commit, ne zavisi od 1-2.' },
    ],
    foot: 'Svaka izmena se predaje sa razlogom, načinom da se proveri i informacijom da li može sama da se vrati. Specifikacija koja se ne može proveriti je mišljenje.',
  },
  what: {
    label: 'šta je to',
    h2: 'Odluke, ne pritisci na tastere.',
    paras: [
      'Ovo je saradnja za firmu koja ima programere, tim za proizvod i možda nekoga za sadržaj, gde je ograničenje smer a ne kapacitet. Rezultat je niz izmena poređan po prioritetu, svaka opisana dovoljno precizno da je vaš inženjer sprovede bez pitanja šta je mišljeno, i stalan termin za pregled onoga što je izašlo.',
      'Po satu je skuplje nego da posao odradim ja, i to ljude iznenadi. Razlog je što se plaćaju sami ti sati — procena primenjena na vašu konkretnu situaciju — a ne izvršenje koje se može rasporediti. Zamena je u tome što znanje i brzina ostaju u vašem timu.',
      'Nije dobra uloga ako nema koga da sprovede izmene. Plan predat firmi bez inženjerskog kapaciteta postaje isti onaj dokument sa nalazima u kakav tehničke revizije inače završe, i bolje je to reći na početku nego naplatiti.',
    ],
  },
  does: {
    label: 'obim',
    h2: 'Šta posao zaista pokriva.',
    intro: 'Šesnaest sati mesečno je uobičajen oblik. Čime se pune, određujete vi.',
    tiles: [
      { ix: '03.1', label: 'Plan po prioritetima, premešta se mesečno' },
      { ix: '03.2', label: 'Specifikacije koje vaši inženjeri mogu da sprovedu' },
      { ix: '03.3', label: 'Pregled onoga što je izašlo, prema specifikaciji' },
      { ix: '03.4', label: 'Odluke o arhitekturi i migracijama' },
      { ix: '03.5', label: 'Smer za sadržaj i uredničke odluke' },
      { ix: '03.6', label: 'Postavka merenja i iskreno izveštavanje' },
      { ix: '03.7', label: 'Obuka vašeg tima za posao koji se ponavlja' },
      { ix: '03.8', label: 'Drugo mišljenje o ponudi agencije ili dobavljača' },
    ],
  },
  deliver: {
    label: 'šta dobijate',
    h2: 'Niz izmena, i nekoga u sobi.',
    paras: [
      'Plan je niz, ne spisak želja. Svaka stavka kaže šta se menja, zašto ide pre sledeće, kako se posle proverava i koliko traje u inženjerskim satima. Stavke se izbacuju kada prestanu da vrede svoje mesto.',
      'Specifikacije dolaze kao patch fajlovi, skupovi izmena ili pisane specifikacije — kako već vaš tim radi. Pregledaju se i vraćaju jedna po jedna. Ne opisujem ništa što se posle ne može proveriti.',
      'Pregled je mesto gde najviše vrednosti i nastane. Sprovođenje odstupa od specifikacije u svakoj organizaciji, i to odstupanje je obično nevidljivo dok ne prođe kvartal. Pogled na to šta je zaista izašlo, u odnosu na ono što je traženo, uhvati ga u roku od nekoliko nedelja.',
    ],
  },
  proof: {
    label: 'dokaz',
    h2: 'Gde je ovo već urađeno.',
    intro: 'Saradnje u kojima je klijentov tim sam sprovodio izmene.',
    caseIds: ['case-saas', 'case-food'],
  },
  faq: {
    label: 'pitanja',
    h2: 'Pitanja koja se prva pojave.',
    items: [
      {
        q: 'Zašto je konsalting skuplji od toga da posao odradite vi?',
        a: 'Zato što su sati proizvod. Izvršenje se može grupisati, rasporediti i delom automatizovati; procena primenjena na vašu konkretnu situaciju ne može. Takođe kupujete ono što je najteže zameniti — znanje ostaje u vašem timu, što je kroz dve godine jeftinije od toga da se neprekidno iznajmljuje.',
      },
      {
        q: 'Šta ako se naši programeri ne slože sa predlogom?',
        a: 'Onda se o predlogu raspravlja, i ponekad predlog izgubi. Vaši inženjeri znaju ograničenja koja konsultant sa strane ne zna, a specifikacija koja ih ignoriše ne izađe. Ono što ne treba da se dogodi jeste da izmena tiho ispadne — zbog toga i postoji termin za pregled.',
      },
      {
        q: 'Može li ovo da preraste u to da vi sprovodite izmene?',
        a: 'Može, i često pređe za jedan konkretan deo — migraciju, ponovnu izgradnju hreflang klastera, nešto sa čvrstim rokom. To onda postaje projekat sa svojim početkom i krajem, umesto da se uvuče u konsultantske sate, da bi obe strane videle koliko je stvarno koštao.',
      },
    ],
  },
  related: {
    h2: 'Povezano',
    items: [
      {
        id: 'technical-seo',
        title: 'Tehnički SEO',
        blurb: 'Kada vam je draže da popravke dođu sprovedene, a ne opisane.',
      },
      {
        id: 'seo-agencija-beograd',
        title: 'SEO agencija u Beogradu',
        blurb: 'Šta ovo znači za firmu koja posluje na domaćem tržištu.',
      },
    ],
  },
};

const seoAgencijaBeograd: ServicePage = {
  locale: 'sr',
  meta: {
    title: 'SEO agencija u Beogradu — inženjerski pristup | Indexa',
    description:
      'SEO agencija u Beogradu koja radi kroz kôd, a ne kroz izveštaje. Tehnički SEO, višejezični SEO i automatizacija, za firme kojima saobraćaj iz pretrage nosi prodaju. Matični broj 68602106.',
    ogTitle: 'SEO agencija u Beogradu — inženjerski pristup',
    ogDescription: 'Tehnički i višejezični SEO iz Beograda, sprovedeno u kodu a ne predato kao lista preporuka.',
  },
  kicker: '02 · Beograd',
  name: 'SEO agencija u Beogradu',
  h1: 'SEO agencija u Beogradu koja radi kroz kôd.',
  sub: 'Registrovana u Srbiji, radi na engleskom, španskom i srpskom. Popravke izlaze kao izmene u kodu, a ne kao lista preporuka.',
  lede: 'Na ovom tržištu većina ponuda izgleda isto: paket, mesečni izveštaj i obećanje o pozicijama.',
  ledeEmphasis: 'Ovde se razlika vidi u tome šta na kraju izađe.',
  ctaPrimary: 'Zakažite razgovor',
  ctaSecondary: 'Pogledajte rezultate',
  panel: {
    file: 'app/layout.tsx',
    fileNote: ' — srpski sajt bez oznake jezika',
    chip: 'sprovedeno',
    lines: [
      { n: '06', g: ' ', t: 'export default function Layout({ children }) {' },
      { n: '07', g: '−', t: '  return <html lang="en">{children}</html>;', k: 'del' },
      { n: '08', g: '+', t: '  // Sajt je na srpskom, a prijavljivao se kao engleski.', k: 'add' },
      { n: '09', g: '+', t: '  // Oznaka jezika ulazi i u pretragu i u čitače ekrana.', k: 'add' },
      { n: '10', g: '+', t: '  return <html lang="sr-Latn">{children}</html>;', k: 'add' },
      { n: '11', g: ' ', t: '}' },
    ],
    foot: 'Ovo je nalaz koji se u Beogradu ponavlja na sajtovima izgrađenim na stranim šablonima: sadržaj je na srpskom, a sam dokument tvrdi da je na engleskom.',
  },
  what: {
    label: 'šta je drugačije',
    h2: 'Tri stvari koje se ovde ne naplaćuju posebno.',
    paras: [
      'Prvo, popravka se sprovodi. Tehnička revizija koja se završi tabelom nalaza nije posao koji je završen — nalazi ostanu na čekanju, jer niko ne preuzima sprovođenje. Ovde izmena izlazi kao kôd u vašem repozitorijumu ili kao dokumentovan skup izmena koji vaš programer primeni i proveri.',
      'Drugo, jezici se čitaju. Engleski, španski i srpski radim direktno, bez prevodilačke agencije u sredini. To je važno zato što namera u pretrazi ne prelazi iz jezika u jezik: termin sa najvećim obimom na španskom retko je prevod engleskog, a na srpskom su komercijalni i informativni upit često ista reč sa drugim dodatkom.',
      'Treće, brojevi su proverivi. Svaka cifra u studijama slučaja dolazi iz izvezenih podataka iz Search Console-a i upoređuje periode iste dužine. Šest meseci upoređenih sa pet je način na koji se procenat proizvodi — i to je prva stvar koju treba proveriti u svakoj ponudi, uključujući i ovu.',
    ],
  },
  does: {
    label: 'obim',
    h2: 'Šta ulazi u svaku saradnju.',
    intro:
      'Osnove su podrazumevane i uključene. Nisu razlog da se bilo ko angažuje, ali bez njih ništa drugo ne radi.',
    tiles: [
      { ix: '01.1', label: 'Tehnička revizija i dijagnostika obilaska' },
      { ix: '01.2', label: 'Istraživanje ključnih reči i namere' },
      { ix: '01.3', label: 'On-page: naslovi, struktura, interni linkovi' },
      { ix: '01.4', label: 'Smernice za sadržaj i urednički smer' },
      { ix: '01.5', label: 'Profil linkova i digitalni PR' },
      { ix: '01.6', label: 'Lokalni SEO i Google Business Profile' },
      { ix: '01.7', label: 'Brzina sajta i Core Web Vitals' },
      { ix: '01.8', label: 'Izveštavanje i atribucija' },
    ],
  },
  deliver: {
    label: 'kome ovo odgovara',
    h2: 'I kome ne odgovara.',
    paras: [
      'Odgovara firmi kojoj saobraćaj iz pretrage nosi prodaju, koja već plaća Google Ads da pokrije ono što organska pretraga ne hvata, i čije strane stoje na trećoj strani rezultata ili dalje. To je situacija u kojoj tražnja postoji i sajt je ne uzima.',
      'Ne odgovara ako tražite paket od 299 evra sa garancijom prvih deset pozicija u devedeset dana. Takva garancija nije moguća — Google ne prodaje pozicije i niko ne može da obeća ishod koji ne kontroliše — a obim posla koji se za tu cenu može odraditi ne menja ništa što se meri.',
      'Ne odgovara ni ako nema koga da sprovede izmene i nema volje da se one sprovedu. U tom slučaju i najbolja revizija završi u fascikli, i to je bolje reći unapred.',
    ],
  },
  proof: {
    label: 'dokaz',
    h2: 'Tri saradnje sa proverivim brojevima.',
    intro: 'Svaka cifra dolazi iz Search Console-a, sa periodima iste dužine.',
    caseIds: ['case-saas', 'case-legal', 'case-food'],
  },
  faq: {
    label: 'pitanja',
    h2: 'Pitanja koja se prva pojave.',
    items: [
      {
        q: 'Radite li samo sa firmama iz Srbije?',
        a: 'Ne. Indexa je registrovana u Beogradu, matični broj 68602106, i radi i na domaćem i na stranim tržištima. Veći deo posla je na engleskom, za klijente izvan Srbije, i upravo to iskustvo sa više tržišta ulazi i u domaće projekte.',
      },
      {
        q: 'Koliko košta i koliko traje?',
        a: 'Tri oblika saradnje: jedna konkretna stvar koja se reši i predaje, od 2.000 evra sa rokom; vođenje celog SEO-a, 1.300–1.800 evra mesečno sa minimumom od dvanaest meseci; i vođenje vašeg tima, 2.500 evra mesečno. Većina počne od prvog oblika, jer ima kraj i vidi se šta je dalo.',
      },
      {
        q: 'Garantujete li prvu stranu?',
        a: 'Ne, i nijedna agencija to ne može iskreno. Pozicija zavisi od konkurencije, Google-ovih promena i vašeg sajta — od toga kontrolišem samo treće. Ono što garantujem jeste da će izmene biti sprovedene, da će svaka imati način da se proveri, i da će poređenje pre i posle koristiti periode iste dužine.',
      },
    ],
  },
  related: {
    h2: 'Povezano',
    items: [
      {
        id: 'technical-seo',
        title: 'Tehnički SEO',
        blurb: 'Indeksiranje, canonical oznake, Core Web Vitals i migracije.',
      },
      {
        id: 'seo-consulting',
        title: 'SEO konsultant',
        blurb: 'Kada imate programere, a potreban vam je smer.',
      },
    ],
  },
};

export const srServices = {
  'technical-seo': tehnickiSeo,
  'seo-consulting': seoKonsultant,
  'seo-agencija-beograd': seoAgencijaBeograd,
} as const;
