import type { ServicePage } from '../types';

/* English service pages. Each one owns a distinct commercial term and
   argues it with the same voice as the home page: declarative, specific,
   and explicit about what the work does not include.

   The code panels are real and different per page on purpose. A marketing
   agency can write the prose on these pages; it cannot produce the panels. */

const technicalSeo: ServicePage = {
  locale: 'en',
  meta: {
    title: 'Technical SEO Audit — Findings That Get Implemented | Indexa',
    description:
      'A technical SEO audit whose findings get implemented, not filed. Crawl and indexation diagnostics, canonical integrity, architecture, Core Web Vitals and migrations — applied in your codebase or handed over as a reviewed change set.',
    ogTitle: 'Technical SEO Audit — Findings That Get Implemented',
    ogDescription:
      'Indexation, canonicals, Core Web Vitals and migrations — diagnosed and then actually implemented.',
  },
  kicker: '01 · technical SEO',
  name: 'Technical SEO',
  h1: 'A technical SEO audit that ends in a merged change.',
  sub: 'Crawl, indexation, canonicals, architecture and Core Web Vitals — diagnosed in a week, then fixed.',
  lede: 'Most technical audits end at a spreadsheet of findings, and the findings sit there because nobody on either side owns the implementation.',
  ledeEmphasis: 'This one ends with the change applied and verified.',
  ctaPrimary: 'Scope an audit',
  ctaSecondary: 'See what that looks like',
  panel: {
    file: 'app/[locale]/products/[slug]/page.tsx',
    fileNote: ' · canonical pointing into a redirect chain',
    chip: 'applied',
    lines: [
      { n: '18', g: ' ', t: 'export async function generateMetadata({ params }) {' },
      { n: '19', g: '−', t: '  const canonical = `/${params.locale}/product/${params.slug}/`;', k: 'del' },
      { n: '19', g: '+', t: '  // /product/ 301s to /products/ — a canonical must not', k: 'add' },
      { n: '20', g: '+', t: '  // point at a redirect, so target the resolved path.', k: 'add' },
      { n: '21', g: '+', t: '  const canonical = `/${params.locale}/products/${params.slug}`;', k: 'add' },
      { n: '22', g: ' ', t: '  return { alternates: { canonical } };' },
    ],
    foot: 'A canonical that points at a redirect is a signal Google resolves at its own discretion, and it is the single most common finding on a site that has been through a replatform.',
  },
  what: {
    label: 'what it is',
    h2: 'The foundations, and the order they have to be fixed in.',
    paras: [
      'Technical SEO is whether a search engine can reach your pages, resolve which version is canonical, understand what each one is about, and render it without waiting on JavaScript it will not wait for. Until that holds, content and links are investment poured through a leak.',
      'The diagnosis is the cheap part. A crawl, Search Console, log files and the rendered DOM will tell you what is wrong in a week. What takes the time is deciding what to fix first, because the findings interact: fixing internal links before fixing the canonicals means doing the internal links twice.',
      'So the output is sequenced. Indexation and canonical integrity first, because everything downstream is measured through them. Then architecture and internal linking. Then rendering and Core Web Vitals. Then the things that are genuinely cosmetic, which get fixed last or not at all.',
    ],
  },
  does: {
    label: 'scope',
    h2: 'What the work actually covers.',
    intro:
      'Every engagement includes all of this. None of it is an upsell, and none of it is a reason on its own to hire anyone.',
    tiles: [
      { ix: '01.1', label: 'Indexation and coverage diagnosis' },
      { ix: '01.2', label: 'Canonical and duplicate resolution' },
      { ix: '01.3', label: 'Crawl budget and log-file analysis' },
      { ix: '01.4', label: 'Site architecture and internal linking' },
      { ix: '01.5', label: 'Rendering and JavaScript dependency' },
      { ix: '01.6', label: 'Core Web Vitals remediation' },
      { ix: '01.7', label: 'Structured data and entity markup' },
      { ix: '01.8', label: 'Migration planning and execution' },
    ],
  },
  deliver: {
    label: 'what you get',
    h2: 'A change set, not a document.',
    paras: [
      'If we have access to the repository, the work arrives as a pull request per fix, each one reviewable on its own and revertible on its own. Your team reads the diff and merges it, or does not.',
      'If there is no repository to touch — a hosted platform, an agency that owns the build, a CMS with no version control — the same work arrives as a change set: every change written out exactly, in the order it has to be applied, with the reason and the way to verify it afterwards. Nothing in that document says "optimise" or "improve".',
      'Either way there is a before and an after measured in Search Console, and the comparison uses matched periods. A six-month period compared against five months is how agencies manufacture a percentage, and it is the first thing to check in anyone else\'s case study, including ours.',
    ],
  },
  proof: {
    label: 'proof',
    h2: 'Where this has been done.',
    intro: 'Two engagements where the technical work was the whole intervention.',
    caseIds: ['case-legal', 'case-saas'],
  },
  faq: {
    label: 'questions',
    h2: 'The questions that come up first.',
    items: [
      {
        q: 'Do you need access to our codebase?',
        a: 'No. It makes the work faster and cheaper, because a fix written as a diff is applied once and verified immediately. Without it, the same fixes arrive as a documented change set your own developer or platform applies. Most engagements are the second kind.',
      },
      {
        q: 'How long before anything changes in Search Console?',
        a: 'Indexation and coverage problems move within two to four weeks of the fix shipping, because Google has to recrawl before anything can change. Ranking and traffic changes follow that, and on a site of any size the honest answer is one to two quarters before the comparison is worth making. Anyone promising a timeline shorter than a recrawl cycle is describing something other than SEO.',
      },
      {
        q: 'Is a technical audit worth it if our content is thin?',
        a: 'Usually yes, but not always first. If the site is small, indexes cleanly and simply has nothing worth ranking, the technical work will not produce traffic and we will say so rather than sell it. The audit is worth it when there is demand the site is failing to capture — pages that exist, rank on page three, and are being held back by something structural.',
      },
    ],
  },
  related: {
    h2: 'Related',
    items: [
      {
        id: 'international-seo',
        title: 'International SEO',
        blurb: 'When the same technical work has to hold across several language markets at once.',
      },
      {
        id: 'seo-consulting',
        title: 'SEO consulting',
        blurb: 'When you have the developers and need the direction rather than the hands.',
      },
      {
        id: 'programmatic-seo',
        title: 'Programmatic SEO',
        blurb: 'When there is a dataset and real demand, and the pages can be generated.',
      },
    ],
  },
};

const internationalSeo: ServicePage = {
  locale: 'en',
  meta: {
    title: 'International SEO Consultant — Multilingual SEO | Indexa',
    description:
      'International and multilingual SEO across English, Spanish and Serbian, handled directly rather than translated and hoped for. hreflang architecture, per-market intent research, cross-market cannibalisation and locale migrations.',
    ogTitle: 'International SEO Consultant — Multilingual SEO',
    ogDescription:
      'hreflang architecture, per-market intent, cannibalisation audits and locale migrations across three languages.',
  },
  kicker: '02 · international SEO',
  name: 'International SEO',
  h1: 'International SEO across English, Spanish and Serbian.',
  sub: 'hreflang architecture, per-market intent, cannibalisation and locale migrations — in languages that are read, not run through a translator.',
  lede: 'Most multilingual SEO fails in one of two places: an hreflang set that does not validate, or market research done in one language and assumed to transfer.',
  ledeEmphasis: 'Both are avoidable, and both are extremely common.',
  ctaPrimary: 'Talk about your markets',
  ctaSecondary: 'See the matrix',
  panel: {
    file: 'app/sitemap.ts',
    fileNote: ' · alternates missing on half the cluster',
    chip: 'applied',
    lines: [
      { n: '12', g: ' ', t: 'return routes.map((r) => ({' },
      { n: '13', g: '−', t: '  url: url(r.path),', k: 'del' },
      { n: '14', g: '−', t: '  // alternates only emitted for the default locale', k: 'del' },
      { n: '13', g: '+', t: '  url: url(r.path),', k: 'add' },
      { n: '14', g: '+', t: '  // every locale repeats the full set, or the cluster', k: 'add' },
      { n: '15', g: '+', t: '  // is one-directional and Google discards it.', k: 'add' },
      { n: '16', g: '+', t: '  alternates: { languages: alternatesFor(r.id) },', k: 'add' },
      { n: '17', g: ' ', t: '}));' },
    ],
    foot: 'hreflang is only honoured when every page in a cluster points at every other one, including itself. A set that is declared on the English page and missing on the Spanish one is discarded entirely, silently.',
  },
  what: {
    label: 'what it is',
    h2: 'Three languages, read by someone who reads them.',
    paras: [
      'International SEO is two problems wearing one name. The first is technical: URL and domain strategy, an hreflang cluster that validates in both directions, canonicals that do not fight the locale, and migrations that do not strand a market. That part is engineering and it either holds or it does not.',
      'The second is that search intent does not translate. The highest-volume Spanish term for a product is frequently not the translation of the English one, and in Serbian the commercial term and the informational term are often the same word with a different modifier. Research done in one language and translated outward produces pages that are grammatically correct and commercially pointless.',
      'English, Spanish and Serbian are handled here directly. Beyond those three the work is still possible, with a native reviewer in the loop for the copy — but the limit is stated rather than hidden, because an agency claiming twelve languages is claiming a translation vendor.',
    ],
  },
  does: {
    label: 'scope',
    h2: 'What the work actually covers.',
    intro:
      'The part most agencies in this market quietly decline, which is why it is the one worth asking about.',
    tiles: [
      { ix: '02.1', label: 'hreflang architecture and integrity' },
      { ix: '02.2', label: 'Market-by-market intent research' },
      { ix: '02.3', label: 'International URL and domain strategy' },
      { ix: '02.4', label: 'Localisation rather than translation' },
      { ix: '02.5', label: 'Cross-market cannibalisation audits' },
      { ix: '02.6', label: 'Per-market SERP and competitor mapping' },
      { ix: '02.7', label: 'Migration across locales' },
      { ix: '02.8', label: 'Native review beyond the three languages' },
    ],
  },
  deliver: {
    label: 'what you get',
    h2: 'A cluster that validates, and research per market.',
    paras: [
      'The technical half is delivered the same way as any other technical work: a pull request per change, or a documented change set if there is no repository. The hreflang cluster is verified after the change, not assumed — which means fetching every page in the cluster and confirming the set is complete and reciprocal.',
      'The research half is delivered per market, not per keyword list. Each market gets the terms that carry commercial intent in that language, the pages that should own them, and the places where two of your own locales are already competing for the same query.',
      'Where a market is outside the three languages, the structure and research are still ours; the copy goes through a native reviewer before it ships. That is slower and it is said upfront.',
    ],
  },
  proof: {
    label: 'proof',
    h2: 'Where this has been done.',
    intro: 'A multi-market SaaS rebuild, and an export business selling into six markets.',
    caseIds: ['case-saas', 'case-food'],
  },
  faq: {
    label: 'questions',
    h2: 'The questions that come up first.',
    items: [
      {
        q: 'Subdirectories, subdomains or separate domains?',
        a: 'Subdirectories for almost everyone, because authority is shared across the whole site rather than split. Separate country domains make sense when there is a real legal or operational separation per market, and they cost you a fresh start in each one. Subdomains are usually the worst of both. The answer depends on what already exists, and migrating between them is a project in its own right.',
      },
      {
        q: 'Do we need a page in every language for every page we have?',
        a: 'No, and symmetry for its own sake is a common mistake. hreflang describes a cluster of equivalents; a page with no equivalent simply has no cluster and a self-referencing canonical. Mirroring a page into a market with no search demand produces a near-duplicate and crawl waste rather than traffic. This site does exactly that — several pages here exist in one language only.',
      },
      {
        q: 'Can you work in languages beyond those three?',
        a: 'Yes, with a native reviewer on the copy. The architecture, research and implementation are the same work in any language; what changes is that nuance in the copy has to be checked by someone who speaks it. We say which part of the work was reviewed by whom.',
      },
    ],
  },
  related: {
    h2: 'Related',
    items: [
      {
        id: 'technical-seo',
        title: 'Technical SEO',
        blurb: 'The foundations an international cluster has to sit on before it can hold.',
      },
      {
        id: 'seo-consulting',
        title: 'SEO consulting',
        blurb: 'Direction for a team that will implement the international work themselves.',
      },
      {
        id: 'programmatic-seo',
        title: 'Programmatic SEO',
        blurb: 'Generating per-market pages from a dataset, where the demand is there.',
      },
    ],
  },
};

const seoConsulting: ServicePage = {
  locale: 'en',
  meta: {
    title: 'SEO Consulting — Direction for Teams With Developers | Indexa',
    description:
      'SEO consulting for companies that already have engineers and need the direction rather than the hands. Prioritised roadmap, reviewed specifications, and sitting in on the implementation until it ships correctly.',
    ogTitle: 'SEO Consulting — Direction for Teams With Developers',
    ogDescription:
      'A prioritised roadmap, reviewed specs, and someone in the room while your own team implements it.',
  },
  kicker: '03 · consulting',
  name: 'SEO consulting',
  h1: 'SEO consulting for teams that already have a developer.',
  sub: 'The roadmap, the specifications and the review — your engineers do the shipping.',
  lede: 'If you have the engineering capacity and still are not ranking, the missing piece is usually not effort. It is that nobody is deciding what not to do.',
  ledeEmphasis: 'That decision is what this buys.',
  ctaPrimary: 'Talk about your team',
  ctaSecondary: 'See how it works',
  panel: {
    file: '0003-collapse-paginated-archives.patch',
    fileNote: ' · handed to your team, not merged by us',
    chip: 'for review',
    lines: [
      { n: '01', g: ' ', t: 'Subject: [PATCH 3/7] collapse paginated archives to view-all' },
      { n: '02', g: ' ', t: '' },
      { n: '03', g: ' ', t: 'Why: /blog/page/2..47 each carry a self-canonical, so 46' },
      { n: '04', g: ' ', t: 'near-empty pages compete with the archive for the same term.' },
      { n: '05', g: ' ', t: 'Verify: coverage report, "Duplicate without user-selected' },
      { n: '06', g: ' ', t: 'canonical" should fall by ~46 within two crawl cycles.' },
      { n: '07', g: ' ', t: 'Revert: this commit alone, no dependencies on 1-2.' },
    ],
    foot: 'Every change is handed over with the reason, the way to verify it, and whether it can be reverted on its own. A specification that cannot be verified is an opinion.',
  },
  what: {
    label: 'what it is',
    h2: 'The decisions, not the keystrokes.',
    paras: [
      'This is the engagement for a company with developers, a product team and possibly a content function, where the constraint is direction rather than capacity. The deliverable is a prioritised sequence of changes, each one specified precisely enough for your own engineer to implement without asking what was meant, and a standing slot to review what shipped.',
      'It costs more per hour than having the work done for you, and that surprises people. The reason is that it is the hours themselves being bought — judgment applied to your specific situation — rather than execution that can be scheduled around. The trade is that your team keeps the knowledge and the velocity.',
      'It is the wrong fit if there is nobody to implement. A roadmap handed to a company with no engineering capacity becomes the same findings document that technical audits usually become, and it is better to say that at the start than to bill for it.',
    ],
  },
  does: {
    label: 'scope',
    h2: 'What the work actually covers.',
    intro: 'Sixteen hours a month is the usual shape. What fills them is yours to direct.',
    tiles: [
      { ix: '03.1', label: 'Prioritised roadmap, resequenced monthly' },
      { ix: '03.2', label: 'Specifications your engineers can implement' },
      { ix: '03.3', label: 'Review of what shipped, against the spec' },
      { ix: '03.4', label: 'Architecture and migration decisions' },
      { ix: '03.5', label: 'Content and editorial direction' },
      { ix: '03.6', label: 'Measurement setup and honest reporting' },
      { ix: '03.7', label: 'Training your team on the recurring work' },
      { ix: '03.8', label: 'Second opinion on agency or vendor proposals' },
    ],
  },
  deliver: {
    label: 'what you get',
    h2: 'A sequence, and someone in the room.',
    paras: [
      'The roadmap is a sequence, not a backlog. Each item states what to change, why it comes before the next one, how to verify it afterwards, and what it costs in engineering time. Items get dropped when they stop being worth their place.',
      'Specifications come as patches, change sets or written specs, whichever your team works from. They are reviewable and revertible one at a time. Nothing is specified that cannot be verified after it ships.',
      'Review is where most of the value lands. Implementation drifts from specification in every organisation, and the drift is usually invisible until a quarter has passed. Looking at what actually shipped, against what was asked for, catches it in weeks.',
    ],
  },
  proof: {
    label: 'proof',
    h2: 'Where this has been done.',
    intro: 'Engagements where the client\'s own team did the shipping.',
    caseIds: ['case-saas', 'case-food'],
  },
  faq: {
    label: 'questions',
    h2: 'The questions that come up first.',
    items: [
      {
        q: 'Why is consulting more expensive than having you do the work?',
        a: 'Because the hours are the product. Execution can be batched, scheduled and partly automated; judgment applied to your particular situation cannot. You are also buying the thing that is hardest to replace — your team keeps the knowledge, which is cheaper over two years than renting it indefinitely.',
      },
      {
        q: 'What if our developers disagree with the recommendation?',
        a: 'Then the recommendation gets argued, and sometimes it loses. Your engineers know constraints that an outside consultant does not, and a specification that ignores them does not ship. What should not happen is a change being quietly dropped — that is what the review slot is for.',
      },
      {
        q: 'Can this turn into you doing the implementation?',
        a: 'Yes, and it often does for a specific piece — a migration, an hreflang rebuild, something with a hard deadline. That becomes a scoped project with its own start and end rather than being absorbed into the consulting hours, so both sides can see what it cost.',
      },
    ],
  },
  related: {
    h2: 'Related',
    items: [
      {
        id: 'technical-seo',
        title: 'Technical SEO',
        blurb: 'When you would rather the fixes arrived applied than specified.',
      },
      {
        id: 'international-seo',
        title: 'International SEO',
        blurb: 'Direction for a team taking the site into more than one language market.',
      },
      {
        id: 'programmatic-seo',
        title: 'Programmatic SEO',
        blurb: 'Deciding whether your dataset justifies generated pages at all.',
      },
    ],
  },
};

const programmaticSeo: ServicePage = {
  locale: 'en',
  meta: {
    title: 'Programmatic SEO — Pages Generated From Your Own Data | Indexa',
    description:
      'Programmatic SEO built from a dataset you already own, where real search demand exists for it. Template and data model design, indexation control at volume, and an honest answer about when it does not apply.',
    ogTitle: 'Programmatic SEO — Pages Generated From Your Own Data',
    ogDescription:
      'Template and data model design, indexation control at volume, and when not to do it at all.',
  },
  kicker: '04 · programmatic SEO',
  name: 'Programmatic SEO',
  h1: 'Programmatic SEO, built from your own data.',
  sub: 'Hundreds of pages from one template and a dataset — where the demand is real and the authority exists to index them.',
  lede: 'Programmatic SEO works when three things are true at once: you own a dataset, there is search demand mapped to its shape, and the domain has enough authority for Google to index the volume.',
  ledeEmphasis: 'When one of those is missing it produces a penalty, not traffic.',
  ctaPrimary: 'Check whether it applies',
  ctaSecondary: 'See the honest version',
  panel: {
    file: 'app/[category]/[city]/page.tsx',
    fileNote: ' · generating 2,400 pages, indexing 190',
    chip: 'diagnosed',
    lines: [
      { n: '08', g: ' ', t: 'export async function generateStaticParams() {' },
      { n: '09', g: '−', t: '  return cross(categories, cities); // 2,400 combinations', k: 'del' },
      { n: '10', g: '+', t: '  // Only emit a page where the dataset actually has rows:', k: 'add' },
      { n: '11', g: '+', t: '  // 2,210 of these had zero listings and were thin by', k: 'add' },
      { n: '12', g: '+', t: '  // construction. Thin pages at volume suppress the rest.', k: 'add' },
      { n: '13', g: '+', t: '  return cross(categories, cities).filter(hasListings);', k: 'add' },
      { n: '14', g: ' ', t: '}' },
    ],
    foot: 'The usual failure is not generating too few pages. It is generating every combination the data permits, most of which have nothing on them, and pulling the whole template down with them.',
  },
  what: {
    label: 'what it is',
    h2: 'One template, a dataset, and a reason to believe it.',
    paras: [
      'Programmatic SEO generates pages from a template bound to structured data: a product catalogue, a listings database, a comparison matrix, an entity graph. Where the dataset maps onto how people actually search, it is the fastest way to cover an entire category of demand.',
      'It is also the easiest thing on this list to get badly wrong, because the failure mode scales. Generate every combination the data allows and most of the resulting pages have almost nothing on them; a large volume of thin pages does not simply fail to rank, it suppresses the pages that would have.',
      'So the first deliverable is usually an answer about whether to do it at all. We have said no to this more often than yes, including on sites where the dataset existed and the demand did not.',
    ],
  },
  does: {
    label: 'scope',
    h2: 'What the work actually covers.',
    intro: 'Starting with whether your dataset and the demand actually meet.',
    tiles: [
      { ix: '04.1', label: 'Demand mapping against your data shape' },
      { ix: '04.2', label: 'Go or no-go, with the reasoning' },
      { ix: '04.3', label: 'Data model and template design' },
      { ix: '04.4', label: 'Thin-page thresholds and exclusion rules' },
      { ix: '04.5', label: 'Indexation control and crawl budgeting' },
      { ix: '04.6', label: 'Internal linking at generated volume' },
      { ix: '04.7', label: 'Structured data on generated pages' },
      { ix: '04.8', label: 'Monitoring for index bloat and decay' },
    ],
  },
  deliver: {
    label: 'what you get',
    h2: 'A template, the rules around it, and a kill switch.',
    paras: [
      'The template and data binding are built and handed over as code. The rules that decide which combinations get a page — and which are excluded for being thin — are part of the deliverable and explicit, because they are the thing that will need tuning once real data arrives.',
      'Indexation is controlled from the start rather than cleaned up later. That means the generated set is released in tranches with coverage monitored between them, so a problem shows up at a hundred pages rather than at two thousand.',
    ],
  },
  /* Deliberately empty, and it should stay empty until there is a client
     engagement that actually used generated pages. The band renders only
     when caseIds has entries.

     The obvious filler was our own product: Reportr runs several generated
     sets. Six months of Search Console says 33 generated URLs took 174,968
     impressions and 4 clicks, with the largest set — fifteen white-label
     pages — on 95,965 impressions, zero clicks and an average position of
     55.6. That is the failure mode this page describes, not evidence for
     the service, and dressing it up as proof is the exact move the rest of
     the site exists to argue against. The page stands on the go/no-go
     reasoning instead. */
  proof: {
    label: 'proof',
    h2: '',
    intro: '',
    caseIds: [],
  },
  faq: {
    label: 'questions',
    h2: 'The questions that come up first.',
    items: [
      {
        q: 'How many pages is worth doing this for?',
        a: 'If the answer is under about fifty, write them by hand — the template, the data model and the monitoring cost more than the pages save. Above a few hundred it starts to pay for itself, assuming each page has something genuinely different on it. The number that matters is not how many you can generate but how many have real content and real demand.',
      },
      {
        q: 'Will Google treat generated pages as spam?',
        a: 'Google\'s stated position is about whether a page is useful, not about how it was produced. A generated page with real data, real differentiation and real demand behind it is fine. A generated page that exists because the template permitted the combination is the thing that gets filtered, and at volume it drags the rest of the set with it. The exclusion rules are the whole difference.',
      },
      {
        q: 'Can you tell us it is not worth doing?',
        a: 'That is the most common outcome. The go/no-go comes before any build, and it is a small piece of work on its own. Saying no to this is cheaper for both sides than discovering it after two thousand pages are indexed and the rest of the site has slipped.',
      },
    ],
  },
  related: {
    h2: 'Related',
    items: [
      {
        id: 'technical-seo',
        title: 'Technical SEO',
        blurb: 'Indexation control at volume is the technical problem underneath this one.',
      },
      {
        id: 'international-seo',
        title: 'International SEO',
        blurb: 'Generated pages multiply fast across locales, in both directions.',
      },
      {
        id: 'seo-consulting',
        title: 'SEO consulting',
        blurb: 'Direction for a team that will build the generated set themselves.',
      },
    ],
  },
};

export const enServices = {
  'technical-seo': technicalSeo,
  'international-seo': internationalSeo,
  'seo-consulting': seoConsulting,
  'programmatic-seo': programmaticSeo,
} as const;
