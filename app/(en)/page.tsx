import type { Metadata } from 'next';
import { en } from '@/content/en';
import { buildMetadata } from '@/lib/meta';
import Page from '@/components/Page';

export const metadata: Metadata = buildMetadata('home', 'en', {
  title: en.meta.title,
  description: en.meta.description,
  ogTitle: en.meta.ogTitle,
  ogDescription: en.meta.ogDescription,
});

export default function Home() {
  return <Page c={en} />;
}
