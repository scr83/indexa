import type { MetadataRoute } from 'next';
import { SITE, url } from '@/lib/site';

/* Both locales, each declaring the full alternates set. A sitemap that
   repeats the hreflang pairs is the belt-and-braces version Google
   actually recommends for small multilingual sites. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: url('/'), sr: url('/sr') };
  const lastModified = new Date();

  return [
    {
      url: url('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: url('/sr'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages },
    },
  ];
}

export const dynamic = 'force-static';
export const revalidate = false;
export const _origin = SITE.origin;
