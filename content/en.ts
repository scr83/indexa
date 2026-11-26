import type { Content } from './types';

/* All English copy lives here. Edit this file to change the English site —
   nothing user-facing is hard-coded in the components. */

export const en: Content = {
  locale: 'en',
  htmlLang: 'en',
  path: '/',
  altPath: '/sr',

  meta: {
    title: 'International SEO Consultant — Technical & Multilingual SEO | Indexa',
    description:
      'Technical and multilingual SEO across English, Spanish and Serbian. International SEO architecture, migrations and indexation, implemented in your codebase — not handed over as a list of findings.',
    ogTitle: 'International SEO Consultant — Technical & Multilingual SEO',
    ogDescription:
      'Technical and multilingual SEO across English, Spanish and Serbian, implemented in your codebase.',
    ogLocale: 'en',
    ogLocaleAlt: 'sr_RS',
  },

  banner:
    'Mockup — prices are final; dashed-underlined figures in the case studies and demo panels are still placeholders and must be replaced with real, verifiable numbers before launch.',

  nav: {
    services: 'Services',
    multilingual: 'Multilingual',
    machine: 'The machine',
    work: 'Engagements',
    results: 'Results',
    cta: 'Get in touch',
  },

  hero: {
    kicker: 'EN / ES / SR · Belgrade',
    h1: 'International SEO, built in code.',
    sub: 'Technical and multilingual SEO consulting across English, Spanish and Serbian.',
    lede:
      "Most search problems don't get solved by publishing more. They sit in how a site is built, how it handles different languages, and what Google and AI assistants can actually read from it. I find those problems with tools I built myself, and then I fix them — rather than sending you a report and wishing you luck.",
    ledeEmphasis: 'You deal with the person doing the work, start to finish.',
    ctaPrimary: 'Book a technical review',
    ctaSecondary: "What's included",
    metaLineBold: 'Belgrade',
    metaLine: ' · working across Europe and Latin America',
    panelFile: 'app/layout.tsx',
    panelFileNote: ' — hreflang cluster',
    panelChip: '8 markets',
    panelStat: '14/23',
    panelFoot:
      "localised pages weren't being served to their own market. An invalid region code and a trailing-slash mismatch had broken return links across the cluster.",
  },

  pipeline: ['crawl', 'parse + classify', 'diff against baseline', 'patch', 'review', 'ship'],

  approach: {
    label: 'Approach',
    h2: "Most agencies can tell you what's broken. Far fewer can fix it.",
    paras: [
      'A technical audit usually ends where the hard part begins — a list of findings handed to a development team with its own roadmap, its own priorities, and no particular reason to trust whoever wrote the list. Six months later half of it is still open.',
      "I work the other way round. I read the codebase, run the crawls, write the migration scripts and open the pull requests. When the build is the reason your pages aren't indexed, that's a fix rather than a recommendation.",
    ],
    tableHeadLeft: 'What you usually get',
    tableHeadRight: 'What you get here',
    rows: [
      ['A findings document and a monthly call', 'Findings, and the change that resolves them'],
      [
        'An account manager relaying questions to a specialist you never meet',
        'One person on the call, who is also the person in the repository',
      ],
      ['Implementation is your problem', 'Work lands in your stack, reviewed by your team'],
      [
        'Reporting assembled from whatever the tool exports',
        'Reporting built against the questions you actually asked',
      ],
    ],
  },

  services: {
    label: 'SEO services',
    h2: 'The SEO fundamentals are the floor, not the pitch.',
    intro:
      "Every agency in this market sells the first block below. It's necessary, it's included in every engagement, and none of it is a reason to choose anyone. The two blocks under it are where the work actually differs.",
    bands: [
      {
        tier: '01 · the floor',
        title: 'SEO fundamentals',
        note:
          'Included in every engagement. Done properly, measured honestly, and never presented as the reason to hire anyone.',
        tiles: [
          { ix: '01.1', label: 'Technical audit and crawl diagnostics' },
          { ix: '01.2', label: 'Keyword and search-intent research' },
          { ix: '01.3', label: 'On-page: titles, structure, internal links' },
          { ix: '01.4', label: 'Content briefs and editorial direction' },
          { ix: '01.5', label: 'Link profile and digital PR' },
          { ix: '01.6', label: 'Local SEO and Google Business Profile' },
          { ix: '01.7', label: 'Page speed and Core Web Vitals' },
          { ix: '01.8', label: 'Reporting and attribution' },
        ],
      },
      {
        tier: '02 · the specialism',
        title: 'Search across language markets',
        note:
          'English, Spanish and Serbian handled directly — not translated and hoped for. The part most agencies quietly decline.',
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
      {
        tier: '03 · the engineering',
        title: 'Automation and tooling',
        note:
          'The work that needs someone who can both diagnose the problem and build the thing that fixes it.',
        tiles: [
          { ix: '03.1', label: 'Changes implemented, not just specified' },
          { ix: '03.2', label: 'Nightly crawl and regression monitoring' },
          { ix: '03.3', label: 'Structured data and entity graph' },
          { ix: '03.4', label: 'Migration planning and execution' },
          { ix: '03.5', label: 'AI-assisted analysis at volume' },
          { ix: '03.6', label: 'Visibility tracking inside AI answers' },
          { ix: '03.7', label: 'Custom reporting built on Reportr' },
          { ix: '03.8', label: 'Log-file and API-level analysis' },
        ],
      },
    ],
  },

  multilingual: {
    label: 'Multilingual SEO',
    h2: 'Multilingual SEO, run by one person who speaks the languages.',
    paras: [
      "International SEO fails in the plumbing, not the prose. Return links that don't reciprocate, region codes that aren't valid, two locales competing for the same query, a migration that quietly orphans half a market. These are engineering faults, and they're invisible in a rankings report.",
      "I work in English, Spanish and Serbian directly, which means market research and localisation decisions don't pass through a translator who has never seen a SERP.",
    ],
    matrixBar: 'hreflang return-link matrix — ',
    legend: ['return link valid', 'missing or invalid', 'self'],
    langs: ['English — direct', 'Español — direct', 'Srpski — direct'],
    langsSecondary: 'German, French, Nordics — native review',
    directions: [
      {
        from: 'SR',
        to: 'EU',
        title: 'Serbian companies selling into Europe',
        body:
          'Export manufacturing, IT services, regional ecommerce. The search problem is in German, English and French — not in Serbian.',
      },
      {
        from: 'EU',
        to: 'ES / LATAM',
        title: 'European companies entering Spanish markets',
        body:
          'Spain and Latin America are not one market. Treating them as one is the single most common way this breaks.',
      },
      {
        from: 'ES / LATAM',
        to: 'EU',
        title: 'Spanish-speaking companies entering Europe',
        body: "The direction I've worked most, across law, heavy machinery, education and nutrition.",
      },
    ],
  },

  machine: {
    label: 'Automation',
    h2: "Most of this runs without me. That's the point.",
    intro:
      'Crawling, parsing, classifying and diffing are machine work, and they run nightly whether or not anyone is watching. Models handle the parts that need language — classifying intent, clustering entities, drafting schema — and every output is reviewed before it reaches your site. Judgement stays human. Volume does not.',
    dagBar: 'nightly pipeline',
    dagFoot:
      'The pipeline is the same whether or not I have repository access. With it, the output is a pull request. Without it, a documented change set your developers can apply and verify.',
    dagLabels: {
      input: 'INPUT',
      machine: 'MACHINE',
      gate: 'GATE',
      output: 'OUTPUT',
      crawl: 'site crawl',
      gsc: 'Search Console API',
      logs: 'server logs',
      parse: 'parse + classify intent',
      diff: 'diff vs. last known good',
      entities: 'cluster entities + schema',
      reviewA: 'human',
      reviewB: 'review',
      pr: 'pull request',
      changeSet: 'change set',
      modelAssisted: 'model-assisted',
      everyChange: 'every change',
      withRepo: 'repo access',
      withoutRepo: 'no repo access',
      caption: 'runs 03:00 UTC · nothing reaches your site unreviewed',
    },
    logRun: 'run',
    logLive: 'LIVE',
    logElapsed: 'elapsed',
    logLines: [
      { ts: '03:00:02', text: 'crawl start <v>2,148</v> urls · <v>6</v> locales' },
      { ts: '03:04:19', text: 'render queue drained <ok>ok</ok>' },
      { ts: '03:04:51', text: 'classify intent → <v>6</v> clusters' },
      { ts: '03:05:30', text: 'schema validate <warn>31 warnings</warn>' },
      { ts: '03:06:11', text: 'canonical conflict <err>4</err> templates' },
      { ts: '03:06:44', text: 'hreflang return links <err>broken</err> <v>de↔nb</v>' },
      { ts: '03:07:02', text: 'diff vs baseline <v>+18 −6</v>' },
      { ts: '03:07:40', text: 'draft patch <ok>ready</ok>' },
      { ts: '08:12:05', text: 'review by <v>sebastian</v> <ok>approved</ok>' },
      { ts: '08:12:31', text: 'opened PR <v>#412</v> → <ok>awaiting merge</ok>' },
    ],
  },

  work: {
    label: 'How we work together',
    h2: 'Three ways in. The first one is how most people start.',
    intro:
      "Two things separate these: whether the work has an end date, and whose desk the implementation lands on. Most clients begin with one scoped problem — it's the cheapest way to find out whether I'm any good — and move to an ongoing engagement once that's answered.",
    lanes: [
      {
        title: 'We fix one thing',
        who: 'Something specific is broken, or about to be',
        entryBadge: 'MOST CLIENTS START HERE',
        shape: 'FINITE · HAS AN END DATE',
        shapeFinite: true,
        barSelf: 100,
        barClient: 0,
        keyLeft: 'Indexa does the work',
        keyRight: 'then hands it over',
        keyRightSage: true,
        desc:
          "One defined problem, one fixed price, one delivery date. A migration that broke the site, pages that stopped being indexed, an international setup that never worked — or a migration you haven't done yet and don't want to get wrong.",
        chips: ['Fixed scope', 'Fixed fee', 'Fixed date', 'Evidence attached'],
        price: 'from €2,000',
        unit: "quoted once we've sized it",
      },
      {
        title: 'We run it',
        who: 'You have nobody doing search',
        shape: 'ONGOING · NO END DATE',
        barSelf: 88,
        barClient: 12,
        barFade: true,
        keyLeft: 'Indexa does the work',
        keyRight: 'you approve',
        desc:
          "We own organic search and keep owning it — strategy, technical work, content direction and the implementation itself, month after month. No handover, because there's no end.",
        chips: ['Blocks 01–03', 'Nightly monitoring', 'Multi-market', 'Revenue reporting'],
        price: 'from €1,300',
        unit: 'per month · six-month minimum',
      },
      {
        title: 'We guide your team',
        who: 'You have people, you need direction',
        shape: 'ONGOING · RENEWS MONTHLY',
        barSelf: 28,
        barClient: 72,
        keyLeft: 'Indexa decides',
        keyRight: 'your team does the work',
        desc:
          "For in-house teams and the agencies working alongside them. Your people execute; I decide what's worth executing and review what ships.",
        descEmphasis:
          "It costs more than the lane where I do everything, because advisory can't be automated or delegated — it's the one thing that caps how many clients I can take.",
        chips: ['Roadmap priorities', 'Pre-migration review', 'Independent audit', 'Direct access'],
        price: '€2,500',
        unit: 'per month · 16 consulting hours',
        unitPlaceholder: true,
      },
    ],
  },

  results: {
    label: 'Case results',
    h2: 'Every number here starts from a stated baseline.',
    intro:
      '"+400% organic traffic" isn\'t a result. Four hundred percent of what, over what period, against what seasonal comparison — that\'s a result. Each engagement below shows where it started.',
    cases: [
      {
        sector: 'B2B SaaS · 8 language markets',
        from: '1,240',
        to: '9,850',
        title: 'International architecture rebuilt after an hreflang collapse',
        basis: 'Non-English sessions per month, months 0–11. Baseline is the same period a year earlier.',
        spark: 'M0 40 L40 41 L72 39 L100 36 L128 28 L156 20 L188 11 L240 4',
      },
      {
        sector: 'Regulated manufacturing · export',
        from: '18%',
        to: '94%',
        title: 'Indexation recovered after a platform migration',
        basis: 'Share of URLs indexed in Search Console across 2,100 product pages, weeks 0–7.',
        spark: 'M0 38 L34 39 L58 37 L80 22 L108 14 L150 8 L196 5 L240 3',
      },
      {
        sector: 'Financial services · single market',
        from: '€4,100',
        to: '€1,350',
        title: 'Paid spend displaced by organic on core commercial terms',
        basis: 'Monthly ad spend on the target keyword set, months 0–9. Lead volume held flat.',
        inverted: true,
        spark: 'M0 8 L38 9 L70 13 L104 18 L140 26 L176 31 L210 35 L240 37',
      },
    ],
    promptLabel: 'tracked prompt — ',
    promptText: '"best supplier for <category> in the EU"',
    promptTag: 'share of answers citing the client · ',
    fromWord: 'from',
    engines: [
      { name: 'ChatGPT', share: '68%', prior: '11%', pct: 68 },
      { name: 'Google AI Overviews', share: '52%', prior: '0%', pct: 52 },
      { name: 'Perplexity', share: '81%', prior: '24%', pct: 81, sage: true },
    ],
  },

  tools: {
    label: 'SEO tooling',
    h2: 'I build the tools I use on your account.',
    paras: [
      'Reportr is a reporting platform I built and run. It exists because client reporting used to cost me a working day per account, and the off-the-shelf options answered questions nobody had asked.',
      'That\'s what the word "engineering" on this page rests on. Not a claim about methodology — a product you can sign up for and use, whether or not you ever hire me.',
    ],
    cta: 'Look at Reportr',
    graphBar: 'entity graph — what assistants read before they cite you',
    caps: [
      ['In your repository', 'Next.js, WordPress, Shopify, HubSpot. Branch, pull request, your review process.'],
      [
        'In your data',
        'Search Console and GA4 through the API rather than the interface. Log files when the question needs them.',
      ],
      ['In your pipeline', 'Scheduled crawls, schema validation, regression checks on every deploy.'],
      [
        'In your markets',
        'English, Spanish and Serbian directly. Everything else through native review, never machine translation alone.',
      ],
    ],
  },

  contact: {
    label: 'Contact',
    h2: 'Send me the site and the problem.',
    body:
      "You'll get an honest read on whether it's a technical problem, a content problem, a competitive problem, or not a problem worth solving. If it's the last one I'll say so — that answer costs you nothing and saves us both a proposal.",
    email: 'hello@indexa.rs',
    linkedin: 'LinkedIn',
  },

  footer: {
    left: 'Indexa · Beograd, RS · ',
    regNumber: 'Matični broj 68602106',
    email: 'hello@indexa.rs',
  },
};
