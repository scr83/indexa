import { srCases } from '@/content/pages/sr-cases';
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

const p = srCases['case-legal'];

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = p.meta.ogTitle ?? p.meta.title;

export default async function Image() {
  return ogImage({
    kicker: p.kicker,
    title: p.h1,
    figure: {
      from: p.headline.from,
      to: p.headline.to,
      label: p.headline.label,
      inverted: p.headline.inverted,
    },
    locale: 'sr',
  });
}
