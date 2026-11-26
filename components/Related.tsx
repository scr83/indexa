import Link from 'next/link';
import type { RelatedItem } from '@/content/types';
import { pathFor, type Locale, type PageId } from '@/lib/routes';

/* Sibling links at the foot of each service page. This is where the cluster
   actually closes: the nav carries five items by design, so without these a
   visitor on one service page would have to go home to reach another.

   An item whose page does not exist in this locale is dropped rather than
   rendered as a dead link — the Serbian side has three service pages, not
   four, and the content files list what each page relates to without
   knowing which locale is rendering. */
export default function Related({
  h2,
  items,
  locale,
}: {
  h2: string;
  items: RelatedItem[];
  locale: Locale;
}) {
  const live = items
    .map((it) => ({ it, href: pathFor(it.id as PageId, locale) }))
    .filter((x): x is { it: RelatedItem; href: string } => x.href !== null);

  if (live.length === 0) return null;

  return (
    <section className="ivory">
      <div className="wrap pad">
        <h2>{h2}</h2>
        <div className="rel">
          {live.map(({ it, href }) => (
            <Link href={href} key={it.id}>
              <span className="t">{it.title}</span>
              <span className="b">{it.blurb}</span>
              <span className="go mono">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
