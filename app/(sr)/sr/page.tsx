import type { Metadata } from 'next';
import { sr } from '@/content/sr';
import { buildMetadata } from '@/lib/meta';
import Page from '@/components/Page';

export const metadata: Metadata = buildMetadata('home', 'sr', {
  title: sr.meta.title,
  description: sr.meta.description,
  ogTitle: sr.meta.ogTitle,
  ogDescription: sr.meta.ogDescription,
});

export default function HomeSr() {
  return <Page c={sr} />;
}
