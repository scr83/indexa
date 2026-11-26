import { sr } from '@/content/sr';
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = sr.meta.ogTitle;

export default async function Image() {
  return ogImage({
    kicker: sr.hero.kicker,
    title: sr.hero.h1,
    sub: sr.hero.sub,
    locale: 'sr',
  });
}
