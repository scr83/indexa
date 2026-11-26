import { srResultsIndex } from '@/content/pages/sr-cases';
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = srResultsIndex.meta.ogTitle ?? srResultsIndex.meta.title;

export default async function Image() {
  return ogImage({
    kicker: srResultsIndex.kicker,
    title: srResultsIndex.h1,
    locale: 'sr',
  });
}
