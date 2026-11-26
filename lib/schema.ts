import type { Content } from '@/content/types';
import { SITE, url } from './site';

/* JSON-LD graph. Kept in one place so the EN and SR pages can't drift apart,
   and so the @id values stay stable across locales — the Organization and
   Person are the same entities whichever page you land on. */

export function buildGraph(c: Content) {
  const orgId = `${SITE.origin}/#organization`;
  const personId = `${SITE.origin}/#sebastian`;

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
