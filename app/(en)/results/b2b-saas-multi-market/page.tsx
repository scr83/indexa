import type { Metadata } from 'next';
import { en } from '@/content/en';
import { enCases } from '@/content/pages/en-cases';
import { buildMetadata } from '@/lib/meta';
import CasePageView from '@/components/CasePageView';

const PAGE_ID = 'case-saas' as const;
const p = enCases[PAGE_ID];

export const metadata: Metadata = buildMetadata(PAGE_ID, 'en', p.meta);

export default function Page() {
  return <CasePageView pageId={PAGE_ID} c={en} p={p} />;
}
