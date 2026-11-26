import type { Metadata } from 'next';
import { sr } from '@/content/sr';
import { SITE, url } from '@/lib/site';
import Page from '@/components/Page';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: sr.meta.title,
  description: sr.meta.description,
  alternates: {
    canonical: url('/sr'),
    languages: { en: url('/'), sr: url('/sr'), 'x-default': url('/') },
  },
  openGraph: {
    type: 'website',
    title: sr.meta.ogTitle,
    description: sr.meta.ogDescription,
    url: url('/sr'),
    siteName: SITE.name,
    locale: sr.meta.ogLocale,
    alternateLocale: [sr.meta.ogLocaleAlt],
  },
  twitter: { card: 'summary_large_image' },
};

export default function HomeSr() {
  return <Page c={sr} />;
}
