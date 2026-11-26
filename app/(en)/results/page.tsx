import type { Metadata } from 'next';
import { en } from '@/content/en';
import { enResultsIndex } from '@/content/pages/en-cases';
import { buildMetadata } from '@/lib/meta';
import ResultsIndexView from '@/components/ResultsIndexView';

export const metadata: Metadata = buildMetadata('results', 'en', enResultsIndex.meta);

export default function Page() {
  return <ResultsIndexView c={en} p={enResultsIndex} />;
}
