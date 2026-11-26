import { en } from '@/content/en';
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = en.meta.ogTitle;

export default async function Image() {
  return ogImage({
    kicker: en.hero.kicker,
    title: en.hero.h1,
    sub: en.hero.sub,
    locale: 'en',
  });
}
