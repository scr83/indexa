import type { CasePage, Content, ServicePage } from '@/content/types';
import { SITE, url } from './site';
import { requirePath, type Locale, type PageId } from './routes';

const ORG_ID = `${SITE.origin}/#organization`;
const PERSON_ID = `${SITE.origin}/#sebastian`;

/* JSON-LD graph. Kept in one place so the EN and SR pages can't drift apart,
   and so the @id values stay stable across locales — the Organization and
   Person are the same entities whichever page you land on. */

export function buildGraph(c: Content) {
  const orgId = ORG_ID;
  const personId = PERSON_ID;

  const services =
    c.locale === 'en'
      ? [
          'Technical SEO',
          'International and multilingual SEO',
          'SEO consulting for in-house teams',
          'SEO migration and indexation recovery',
        ]
      : [
          'Tehnički SEO',
          'Međunarodni i višejezični SEO',
          'SEO konsultacije za interne timove',
          'SEO migracije i oporavak indeksiranja',
        ];

  const knowsAbout =
    c.locale === 'en'
      ? ['Technical SEO', 'International SEO', 'Multilingual SEO', 'Site migrations', 'Structured data']
      : ['Tehnički SEO', 'Međunarodni SEO', 'Višejezični SEO', 'Migracije sajtova', 'Strukturirani podaci'];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: SITE.name,
        description: c.meta.description,
        url: url('/'),
        email: SITE.email,
        founder: { '@id': personId },
        knowsLanguage: ['en', 'es', 'sr'],
        areaServed: [
          { '@type': 'Place', name: 'Europe' },
          { '@type': 'Place', name: 'Latin America' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE.locality,
          addressCountry: SITE.country,
        },
        identifier: [
          { '@type': 'PropertyValue', name: 'Matični broj', value: SITE.registrationNumber },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: c.services.label,
          itemListElement: services.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Sebastián Contreras Ríos',
        jobTitle: c.locale === 'en' ? 'SEO consultant' : 'SEO konsultant',
        worksFor: { '@id': orgId },
        knowsLanguage: ['en', 'es', 'sr'],
        knowsAbout,
      },
      {
        '@type': 'WebSite',
        '@id': `${url(c.path)}#website`,
        url: url(c.path),
        name: SITE.name,
        inLanguage: c.htmlLang,
        publisher: { '@id': orgId },
      },
    ],
  };
}

/* ───────────────────── subpage graphs ─────────────────────
   Both reuse the organization and person by @id rather than restating them,
   so there is exactly one Organization entity across the whole site however
   many pages get added. */

const orgRef = { '@id': ORG_ID };

function breadcrumb(locale: Locale, trail: { name: string; id: PageId }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: url(requirePath(t.id, locale)),
    })),
  };
}

export function buildServiceGraph(c: Content, p: ServicePage, path: string) {
  const pageUrl = url(path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: p.meta.title,
        description: p.meta.description,
        inLanguage: c.htmlLang,
        isPartOf: { '@id': `${url(requirePath('home', c.locale))}#website` },
        publisher: orgRef,
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: p.h1,
        description: p.meta.description,
        serviceType: p.kicker.replace(/^[\d\s·]+/, ''),
        provider: orgRef,
        areaServed: [
          { '@type': 'Place', name: 'Europe' },
          { '@type': 'Place', name: 'Latin America' },
        ],
        availableLanguage: ['en', 'es', 'sr'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: p.does.h2,
          itemListElement: p.does.tiles.map((t) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: t.label },
          })),
        },
      },
      /* Every answer is already in the DOM, so this marks up what the page
         actually shows rather than content hidden behind an accordion. */
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: p.faq.items.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
    ],
  };
}

export function buildCaseGraph(c: Content, p: CasePage, pageId: PageId) {
  const pageUrl = url(requirePath(pageId, c.locale));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: p.meta.title,
        description: p.meta.description,
        inLanguage: c.htmlLang,
        isPartOf: { '@id': `${url(requirePath('home', c.locale))}#website` },
        publisher: orgRef,
        /* No Review or AggregateRating here. The client is anonymised and
           nobody has given a testimonial, so marking this up as a review
           would be a fabricated entity for a rich result. */
        about: orgRef,
      },
      breadcrumb(c.locale, [
        { name: SITE.name, id: 'home' },
        { name: p.backToIndex, id: 'results' },
        { name: p.h1, id: pageId },
      ]),
    ],
  };
}

export function buildResultsIndexGraph(c: Content, title: string, description: string) {
  const pageUrl = url(requirePath('results', c.locale));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: c.htmlLang,
        isPartOf: { '@id': `${url(requirePath('home', c.locale))}#website` },
        publisher: orgRef,
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#list`,
        itemListElement: c.results.cases.map((cs, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cs.title,
          url: url(requirePath(cs.id as PageId, c.locale)),
        })),
      },
    ],
  };
}
