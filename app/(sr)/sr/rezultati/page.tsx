import type { Metadata } from 'next';
import { sr } from '@/content/sr';
import { srResultsIndex } from '@/content/pages/sr-cases';
import { buildMetadata } from '@/lib/meta';
import ResultsIndexView from '@/components/ResultsIndexView';

export const metadata: Metadata = buildMetadata('results', 'sr', srResultsIndex.meta);

export default function Page() {
  return <ResultsIndexView c={sr} p={srResultsIndex} />;
}
