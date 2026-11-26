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
}

export interface CaseStudy {
  sector: string;
  from: string;
  to: string;
  title: string;
  basis: string;
  /** descending metric — a fall is the win, so it renders in sage */
  inverted?: boolean;
  spark: string;
}

export interface AnswerEngine {
  name: string;
  share: string;
  prior: string;
  pct: number;
  sage?: boolean;
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

  services: { label: string; h2: string; intro: string; bands: ServiceBand[] };

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

  work: { label: string; h2: string; intro: string; lanes: Lane[] };

  results: {
    label: string;
    h2: string;
    intro: string;
    cases: CaseStudy[];
    promptLabel: string;
    promptText: string;
    promptTag: string;
    fromWord: string;
    engines: AnswerEngine[];
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
