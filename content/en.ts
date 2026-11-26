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
    'Pre-launch \u2014 every case-study figure and the AI-answer panel are real: exported from Google Search Console with matched comparison periods. The run log and the pipeline panel carry illustrative values (dashed underline), which demonstrate how the pipeline works rather than claiming a client result.',

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
        pageId: 'technical-seo',
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
        pageId: 'international-seo',
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
        pageId: 'programmatic-seo',
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
    bandCta: 'Read about this',
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
        price: '€1,300–1,800',
        unit: 'per month · twelve-month minimum',
      },
      {
        title: 'We guide your team',
        pageId: 'seo-consulting',
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
    laneCta: 'More on consulting',
  },

  results: {
    label: 'Case results',
    h2: 'Every number here starts from a stated baseline.',
    intro:
      '"+400% organic traffic" isn\'t a result. Four hundred percent of what, over what period, against what seasonal comparison — that\'s a result. Each engagement below shows where it started.',
    cases: [
      {
        id: 'case-saas',
        sector: 'B2B SaaS · Denmark · multi-market',
        from: '584K',
        to: '885K',
        title: 'Search visibility rebuilt across a multi-market SaaS site',
        basis:
          'Impressions, six months against the previous six in Search Console. Clicks 7.79K → 9.72K over the same comparison. Average position 18.7 → 15.2.',
        spark: 'M0 40 L40 41 L72 39 L100 36 L128 28 L156 20 L188 11 L240 4',
      },
      {
        id: 'case-legal',
        sector: 'DUI defence law firm · regulated · Chile',
        from: '19.8',
        to: '8.5',
        title: 'Off page two, onto page one — and 90% of the ad budget cut',
        basis:
          'Average position, six months against the previous six in Search Console. Impressions 9.23K → 17.9K. Google Ads spend reduced by 90% with client volume held.',
        inverted: true,
        spark: 'M0 6 L34 10 L62 9 L92 16 L124 22 L158 28 L198 33 L240 36',
      },
      {
        id: 'case-food',
        sector: 'Food & nutrition · 6 markets · 95% export revenue',
        from: '0',
        to: '4',
        title: 'First leads from search in the site\'s ten-year history',
        basis:
          'Enquiries through the site in the first three months after the rebuild, against a baseline of zero in ten years online. Leads have continued since. Average position 13.4 at baseline, 4.7 today; monthly impressions 1,472 → 2,330.',
        spark: 'M0 44 L48 44 L96 43 L132 38 L166 28 L196 18 L220 10 L240 4',
      },
    ],
    caseCta: 'Read the full case',
    ai: {
      sourceBold: 'Google Search Console',
      source: ' — generative AI features',
      beta: 'BETA',
      who: 'same engagement as case 01 · client anonymised',
      stats: [
        { big: '74,202', unit: "impressions inside Google's AI answers, 25 May – 24 Nov 2026" },
        { big: '180 \u2192 858', unit: 'per day, first thirty days against the last thirty' },
        {
          big: '94.7%',
          unit: "of those appearances outside the client's home market, across 207 countries",
        },
      ],
      chartLabel:
        "Daily impressions in Google's generative AI features across 184 days: around 180 a day through the summer, rising from late September to around 858 a day by late November.",
      axis: ['25 May', 'late Sept \u2014 the shift', '24 Nov 2026'],
      foot: "Search Console reports appearances in Google's AI Overviews and AI Mode only \u2014 it says nothing about ChatGPT or Perplexity, and neither does this chart. Every point above is one day of exported Search Console data, not an estimate.",
    },
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
