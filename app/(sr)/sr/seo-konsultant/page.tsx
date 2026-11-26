import type { Metadata } from 'next';
import { sr } from '@/content/sr';
import { srServices } from '@/content/pages/sr-services';
import { buildMetadata } from '@/lib/meta';
import ServicePageView from '@/components/ServicePageView';

const PAGE_ID = 'seo-consulting' as const;
const p = srServices[PAGE_ID];

export const metadata: Metadata = buildMetadata(PAGE_ID, 'sr', p.meta);

export default function Page() {
  return <ServicePageView pageId={PAGE_ID} c={sr} p={p} />;
}
