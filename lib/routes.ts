/* The route map. Every page on the site is declared here once, with its
   path in each locale it exists in.

   Canonical URLs, hreflang alternates, the sitemap and the language toggle
   are all derived from this table rather than written out per route. Adding
   page nine must not require editing the eight before it — that is the whole
   reason this file exists.

   Asymmetry is deliberate and valid. A page that exists in only one locale
   gets a self-referencing canonical and no hreflang set at all; hreflang
   describes a cluster of equivalents, and a page with no equivalent is not
   a cluster. Serbian search volume for the whole commercial SEO market is
   around 1,200-1,500 a month, so mirroring every English page into Serbian
   would buy near-duplicate pages and crawl waste rather than traffic. */

import { url } from './site';

export type Locale = 'en' | 'sr';

export const LOCALES: readonly Locale[] = ['en', 'sr'] as const;

/** English is the site's default language and lives at the root. */
export const DEFAULT_LOCALE: Locale = 'en';

export type PageId =
  | 'home'
  // service pages
  | 'technical-seo'
  | 'international-seo'
  | 'seo-consulting'
  | 'programmatic-seo'
  | 'seo-agencija-beograd'
  // case studies
  | 'results'
  | 'case-saas'
  | 'case-legal'
  | 'case-food';

type ChangeFrequency = 'monthly' | 'yearly';

interface RouteDef {
  /** Absolute path per locale. A missing locale means the page does not
      exist there — not that it falls back to another language. */
  readonly path: Partial<Record<Locale, string>>;
  readonly priority: number;
  readonly changeFrequency: ChangeFrequency;
}

export const ROUTES: Record<PageId, RouteDef> = {
  home: {
    path: { en: '/', sr: '/sr' },
    priority: 1,
    changeFrequency: 'monthly',
  },

  'technical-seo': {
    path: { en: '/technical-seo', sr: '/sr/tehnicki-seo' },
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  'seo-consulting': {
    path: { en: '/seo-consulting', sr: '/sr/seo-konsultant' },
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  'international-seo': {
    // English only: there is no Serbian demand for international SEO.
    path: { en: '/international-seo' },
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  'programmatic-seo': {
    // English only, same reason.
    path: { en: '/programmatic-seo' },
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  'seo-agencija-beograd': {
    // Serbian only, and deliberately NOT a page for "SEO optimizacija":
    // the Serbian home page's own H1 and title target that term, so a
    // second page chasing it would cannibalise the stronger page. This one
    // takes the local commercial term instead, with local-intent content.
    path: { sr: '/sr/seo-agencija-beograd' },
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  results: {
    path: { en: '/results', sr: '/sr/rezultati' },
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  'case-saas': {
    path: { en: '/results/b2b-saas-multi-market', sr: '/sr/rezultati/b2b-saas-vise-trzista' },
    priority: 0.6,
    changeFrequency: 'yearly',
  },
  'case-legal': {
    path: { en: '/results/dui-defence-law-firm', sr: '/sr/rezultati/advokatska-kancelarija' },
    priority: 0.6,
    changeFrequency: 'yearly',
  },
  'case-food': {
    path: { en: '/results/food-and-nutrition-export', sr: '/sr/rezultati/hrana-i-nutricija' },
    priority: 0.6,
    changeFrequency: 'yearly',
  },
};

/** The path for a page in a locale, or null if it does not exist there. */
export function pathFor(id: PageId, locale: Locale): string | null {
  return ROUTES[id].path[locale] ?? null;
}

/** The path for a page in a locale. Throws if absent — use this only where
    the page is known to exist, so a typo fails the build instead of
    silently emitting a wrong URL. */
export function requirePath(id: PageId, locale: Locale): string {
  const p = pathFor(id, locale);
  if (!p) throw new Error(`routes: "${id}" has no path for locale "${locale}"`);
  return p;
}

export const canonicalFor = (id: PageId, locale: Locale) => url(requirePath(id, locale));

/** The locales a page actually exists in. */
export const localesFor = (id: PageId): Locale[] =>
  LOCALES.filter((l) => ROUTES[id].path[l] !== undefined);

/**
 * The hreflang set for a page, shaped for Next's `alternates.languages`.
 *
 * Returns undefined for a single-locale page, which leaves the page with a
 * self-referencing canonical and no alternates — the correct signal when
 * there is no equivalent in another language. x-default is emitted only when
 * an English version exists, because x-default names the page to serve a
 * visitor whose language matches nothing.
 */
export function alternatesFor(id: PageId): Record<string, string> | undefined {
  const locales = localesFor(id);
  if (locales.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = canonicalFor(id, l);

  const en = pathFor(id, 'en');
  if (en) languages['x-default'] = url(en);

  return languages;
}

/**
 * Where the language toggle should point from a given page.
 *
 * If the same page exists in the other locale, go there. If it does not,
 * fall back to that locale's home page rather than rendering a dead link —
 * a visitor switching language on an English-only page wants the Serbian
 * site, not a 404. `exact` says which happened, so the UI can mark the
 * difference if it ever needs to.
 */
export function toggleTarget(id: PageId, from: Locale): { path: string; exact: boolean } {
  const to: Locale = from === 'en' ? 'sr' : 'en';
  const direct = pathFor(id, to);
  if (direct) return { path: direct, exact: true };
  return { path: requirePath('home', to), exact: false };
}

/** Every (page, locale) pair that exists, for the sitemap. */
export function allRoutes(): { id: PageId; locale: Locale; path: string; def: RouteDef }[] {
  const out: { id: PageId; locale: Locale; path: string; def: RouteDef }[] = [];
  for (const id of Object.keys(ROUTES) as PageId[]) {
    for (const locale of localesFor(id)) {
      out.push({ id, locale, path: requirePath(id, locale), def: ROUTES[id] });
    }
  }
  return out;
}

/** Service pages in nav order, per locale. Drives the nav and the home
    page's service links, so a locale only ever shows pages it has. */
export const SERVICE_IDS: readonly PageId[] = [
  'technical-seo',
  'international-seo',
  'seo-consulting',
  'programmatic-seo',
  'seo-agencija-beograd',
] as const;

export const CASE_IDS: readonly PageId[] = ['case-saas', 'case-legal', 'case-food'] as const;

export const servicesFor = (locale: Locale): PageId[] =>
  SERVICE_IDS.filter((id) => pathFor(id, locale) !== null);
