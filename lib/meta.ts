/* One place that turns a page id plus its copy into Next metadata.

   Every page on the site goes through this, so canonical, hreflang and
   OpenGraph can never drift apart or be forgotten on a new route — the
   failure that is invisible locally and expensive in production. */

import type { Metadata } from 'next';
import { SITE, url } from './site';
import { alternatesFor, canonicalFor, pathFor, type Locale, type PageId } from './routes';

const OG_LOCALE: Record<Locale, string> = { en: 'en', sr: 'sr_RS' };

export interface PageMeta {
  title: string;
  description: string;
  /** Falls back to `title` with the brand suffix stripped by the caller. */
  ogTitle?: string;
  ogDescription?: string;
}

export function buildMetadata(id: PageId, locale: Locale, m: PageMeta): Metadata {
  const canonical = canonicalFor(id, locale);
  const languages = alternatesFor(id);
  const other: Locale = locale === 'en' ? 'sr' : 'en';
  const hasOther = pathFor(id, other) !== null;

  return {
    metadataBase: new URL(SITE.origin),
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: 'website',
      title: m.ogTitle ?? m.title,
      description: m.ogDescription ?? m.description,
      url: canonical,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      // Only claim an alternate locale when the page actually has one.
      ...(hasOther ? { alternateLocale: [OG_LOCALE[other]] } : {}),
    },
    twitter: { card: 'summary_large_image' },
  };
}

export { url };
