import type { Metadata } from 'next';
import { sr } from '@/content/sr';
import { srCases } from '@/content/pages/sr-cases';
import { buildMetadata } from '@/lib/meta';
import CasePageView from '@/components/CasePageView';

const PAGE_ID = 'case-saas' as const;
const p = srCases[PAGE_ID];

export const metadata: Metadata = buildMetadata(PAGE_ID, 'sr', p.meta);

export default function Page() {
  return <CasePageView pageId={PAGE_ID} c={sr} p={p} />;
}
