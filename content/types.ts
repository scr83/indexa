/* Shape of the site copy. Both locales must satisfy this, so a missing
   Serbian string is a type error rather than an English string leaking
   into the Serbian page. */

export type Locale = 'en' | 'sr';

export interface Tile {
  ix: string;
  label: string;
}

export interface ServiceBand {
  tier: string;
  title: string;
  note: string;
  tiles: Tile[];
  /** PageId of the service page this band argues for, when one exists in
      this locale. The band head renders a link to it; a band whose page is
      absent in this locale simply renders without one. */
  pageId?: string;
}

export interface DirectionCard {
  from: string;
  to: string;
  title: string;
  body: string;
}

export interface Lane {
  title: string;
  who: string;
  entryBadge?: string;
  shape: string;
  shapeFinite?: boolean;
  barSelf: number;
  barClient: number;
  barFade?: boolean;
  keyLeft: string;
  keyRight: string;
  keyRightSage?: boolean;
  desc: string;
  descEmphasis?: string;
  chips: string[];
  price: string;
  unit: string;
  unitPlaceholder?: boolean;
  /** PageId of the service page this lane maps onto, when one exists. */
  pageId?: string;
}

export interface CaseStudy {
  /** PageId of the full case page this card links to. */
  id: string;
  sector: string;
  from: string;
  to: string;
  title: string;
  basis: string;
  /** descending metric — a fall is the win, so it renders in sage */
  inverted?: boolean;
  spark: string;
}

/* The AI-visibility panel reports exported Search Console data for one
   engagement. It deliberately states what it does not measure — Search
   Console sees Google's AI Overviews and AI Mode and nothing else — which
   is why the panel is credible where a three-engine bar chart would not be. */
export interface AiPanel {
  source: string;
  sourceBold: string;
  beta: string;
  who: string;
  stats: { big: string; unit: string }[];
  chartLabel: string;
  axis: [string, string, string];
  foot: string;
}

export interface LogLine {
  ts: string;
  text: string;
}

export interface Content {
  locale: Locale;
  htmlLang: string;
  path: string;
  altPath: string;

  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
    ogLocaleAlt: string;
  };

  banner: string;

  nav: { services: string; multilingual: string; machine: string; work: string; results: string; cta: string };

  hero: {
    kicker: string;
    h1: string;
    sub: string;
    lede: string;
    ledeEmphasis: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metaLine: string;
    metaLineBold: string;
    panelFile: string;
    panelFileNote: string;
    panelChip: string;
    panelStat: string;
    panelFoot: string;
  };

  pipeline: string[];

  approach: {
    label: string;
    h2: string;
    paras: string[];
    tableHeadLeft: string;
    tableHeadRight: string;
    rows: [string, string][];
  };

  services: { label: string; h2: string; intro: string; bands: ServiceBand[]; bandCta: string };

  multilingual: {
    label: string;
    h2: string;
    paras: string[];
    matrixBar: string;
    legend: [string, string, string];
    langs: string[];
    langsSecondary: string;
    directions: DirectionCard[];
  };

  machine: {
    label: string;
    h2: string;
    intro: string;
    dagBar: string;
    dagFoot: string;
    dagLabels: {
      input: string; machine: string; gate: string; output: string;
      crawl: string; gsc: string; logs: string;
      parse: string; diff: string; entities: string;
      reviewA: string; reviewB: string;
      pr: string; changeSet: string;
      modelAssisted: string; everyChange: string; withRepo: string; withoutRepo: string;
      caption: string;
    };
    logRun: string;
    logLive: string;
    logElapsed: string;
    logLines: LogLine[];
  };

  work: { label: string; h2: string; intro: string; lanes: Lane[]; laneCta: string };

  results: {
    label: string;
    h2: string;
    intro: string;
    cases: CaseStudy[];
    /** Link text on each case card through to its full case page. */
    caseCta: string;
    ai: AiPanel;
  };

  tools: {
    label: string;
    h2: string;
    paras: string[];
    cta: string;
    graphBar: string;
    caps: [string, string][];
  };

  contact: { label: string; h2: string; body: string; email: string; linkedin: string };

  footer: { left: string; regNumber: string; email: string };
}

/* ───────────────────────── subpages ─────────────────────────
   Service and case pages share the home page's visual vocabulary — the
   diff panel, the tiles, the case cards, the engagement lanes — so these
   types describe content for components that already exist rather than
   introducing a second design language. */

export interface PageMetaCopy {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface Prose {
  label?: string;
  h2: string;
  paras: string[];
}

export interface DiffLine {
  n: string;
  g: ' ' | '−' | '+';
  t: string;
  k?: 'add' | 'del';
}

export interface CodePanel {
  file: string;
  fileNote: string;
  chip: string;
  lines: DiffLine[];
  foot: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface RelatedItem {
  /** PageId, kept as a string here so content files don't import lib/. */
  id: string;
  title: string;
  blurb: string;
}

export interface ServicePage {
  locale: Locale;
  meta: PageMetaCopy;
  kicker: string;
  /** Short service name for band heads and cross-links — not the H1, which
      is a sentence and reads as duplication when repeated mid-page. */
  name: string;
  h1: string;
  sub: string;
  lede: string;
  ledeEmphasis: string;
  ctaPrimary: string;
  ctaSecondary: string;
  panel: CodePanel;
  what: Prose;
  does: { label: string; h2: string; intro: string; tiles: Tile[] };
  deliver: Prose;
  proof: { label: string; h2: string; intro: string; caseIds: string[] };
  faq: { label: string; h2: string; items: Faq[] };
  related: { h2: string; items: RelatedItem[] };
}

export interface CaseFigure {
  label: string;
  before: string;
  after: string;
  /** A fall that is the win — average position, ad spend. Renders in sage. */
  inverted?: boolean;
  /** A figure that moved but is neither a win nor a loss on its own, such as
      CTR falling because impressions grew faster than clicks. Renders in
      plain cream: colouring it sage would read as a win it is not, and amber
      would read as growth. */
  neutral?: boolean;
}

export interface CasePage {
  locale: Locale;
  meta: PageMetaCopy;
  kicker: string;
  h1: string;
  lede: string;
  headline: { from: string; to: string; label: string; inverted?: boolean; spark: string };
  figuresLabel: string;
  figures: CaseFigure[];
  figuresHead: [string, string, string];
  basis: string;
  sections: Prose[];
  services: { h2: string; intro: string; ids: string[] };
  others: { h2: string };
  backToIndex: string;
}

export interface ResultsIndexPage {
  locale: Locale;
  meta: PageMetaCopy;
  kicker: string;
  h1: string;
  lede: string;
  cardCta: string;
  note: string;
}
