import type { MetadataRoute } from 'next';
import { SITE, url } from '@/lib/site';
import { allRoutes, alternatesFor } from '@/lib/routes';

/* Derived entirely from lib/routes.ts, so a new page appears here the moment
   it is declared there. Each entry repeats its hreflang pairs — the
   belt-and-braces version Google recommends for small multilingual sites —
   and a single-locale page correctly carries none. */
export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map(({ id, path, def }) => {
    const languages = alternatesFor(id);
    return {
      url: url(path),
      /* The page's own date from the route table, not the build time. A
         sitemap where every entry changed at the same instant on every
         deploy is noise a crawler learns to discount. */
      lastModified: def.lastModified,
      changeFrequency: def.changeFrequency,
      priority: def.priority,
      ...(languages ? { alternates: { languages } } : {}),
    };
  });
}

export const dynamic = 'force-static';
export const revalidate = false;
export const _origin = SITE.origin;
