import type { Metadata } from 'next';
import { en } from '@/content/en';
import { enServices } from '@/content/pages/en-services';
import { buildMetadata } from '@/lib/meta';
import ServicePageView from '@/components/ServicePageView';

const PAGE_ID = 'programmatic-seo' as const;
const p = enServices[PAGE_ID];

export const metadata: Metadata = buildMetadata(PAGE_ID, 'en', p.meta);

export default function Page() {
  return <ServicePageView pageId={PAGE_ID} c={en} p={p} />;
}
