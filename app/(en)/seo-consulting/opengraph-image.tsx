import { enServices } from '@/content/pages/en-services';
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

const p = enServices['seo-consulting'];

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = p.meta.ogTitle ?? p.meta.title;

export default async function Image() {
  return ogImage({ kicker: p.kicker, title: p.h1, sub: p.sub, locale: 'en' });
}
