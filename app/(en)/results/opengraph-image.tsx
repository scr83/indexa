import { enResultsIndex } from '@/content/pages/en-cases';
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = enResultsIndex.meta.ogTitle ?? enResultsIndex.meta.title;

export default async function Image() {
  return ogImage({
    kicker: enResultsIndex.kicker,
    title: enResultsIndex.h1,
    locale: 'en',
  });
}
