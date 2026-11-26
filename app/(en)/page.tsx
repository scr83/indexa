import type { Metadata } from 'next';
import { en } from '@/content/en';
import { SITE, url } from '@/lib/site';
import Page from '@/components/Page';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: url('/'),
    languages: { en: url('/'), sr: url('/sr'), 'x-default': url('/') },
  },
  openGraph: {
    type: 'website',
    title: en.meta.ogTitle,
    description: en.meta.ogDescription,
    url: url('/'),
    siteName: SITE.name,
    locale: en.meta.ogLocale,
    alternateLocale: [en.meta.ogLocaleAlt],
  },
  twitter: { card: 'summary_large_image' },
};

export default function Home() {
  return <Page c={en} />;
}
