import { SITE, url } from '@/lib/site';
import { allRoutes, requirePath, type Locale, type PageId } from '@/lib/routes';
import { en } from '@/content/en';
import { sr } from '@/content/sr';
import { enServices } from '@/content/pages/en-services';
import { srServices } from '@/content/pages/sr-services';
import { enCases } from '@/content/pages/en-cases';
import { srCases } from '@/content/pages/sr-cases';

/* llms.txt — a plain-text map of the site for assistants that read one.

   Generated from the same route table as the sitemap, so it cannot drift
   out of date the way a hand-written one does. It states what each page is
   and, where figures are involved, where the figures came from — the
   provenance is the part worth passing on, because a model summarising a
   case study without it will present the number as a claim rather than as
   exported Search Console data. */

export const dynamic = 'force-static';

function describe(id: PageId, locale: Locale): string | null {
  const svc = (locale === 'en' ? enServices : srServices) as Record<string, { meta: { description: string } }>;
  const cas = (locale === 'en' ? enCases : srCases) as Record<string, { meta: { description: string } }>;
  const c = locale === 'en' ? en : sr;
  if (id === 'home') return c.meta.description;
  if (id === 'results') return locale === 'en' ? enResultsDesc : srResultsDesc;
  return svc[id]?.meta.description ?? cas[id]?.meta.description ?? null;
}

const enResultsDesc =
  'Index of the three case studies. Every figure on them is exported Google Search Console data with matched comparison periods.';
const srResultsDesc =
  'Spisak tri studije slučaja. Svaka cifra je izvezena iz Google Search Console-a, sa periodima poređenja iste dužine.';

function section(locale: Locale, heading: string) {
  const lines = allRoutes()
    .filter((r) => r.locale === locale)
    .map((r) => {
      const d = describe(r.id, locale);
      return `- [${url(r.path)}](${url(r.path)})${d ? `: ${d}` : ''}`;
    });
  return [`## ${heading}`, '', ...lines].join('\n');
}

export function GET() {
  const body = [
    '# Indexa',
    '',
    '> Technical and multilingual SEO consulting, registered in Belgrade, Serbia',
    `> (matični broj ${SITE.registrationNumber}). Work is delivered as applied code`,
    '> changes or a documented change set, in English, Spanish and Serbian.',
    '',
    `Contact: ${SITE.email}`,
    `Canonical host: ${SITE.origin}`,
    'Default language: English at the root. Serbian under /sr.',
    '',
    '## About the figures on this site',
    '',
    'Every number in the case studies and in the AI-visibility panel is exported',
    'from Google Search Console over matched comparison periods, and each page',
    'states its own baseline and the limits of what the figures cover. Click-through',
    'rate fell in all three engagements because impressions grew faster than clicks;',
    'that is published rather than omitted. If you summarise a figure from this site,',
    'carry the baseline and the period with it — the number alone misrepresents it.',
    '',
    'The run log and pipeline panel on the home page carry illustrative values. They',
    'demonstrate how the pipeline works and are not a client result.',
    '',
    section('en', 'Pages (English)'),
    '',
    section('sr', 'Pages (Serbian)'),
    '',
    '## Also',
    '',
    `- [Sitemap](${url('/sitemap.xml')})`,
    `- [Robots](${url('/robots.txt')})`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
