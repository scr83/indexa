import Link from 'next/link';
import type { Content } from '@/content/types';
import { pathFor, type PageId } from '@/lib/routes';

/* Three bands, visually escalating: neutral top-border on the fundamentals,
   sage on the specialism, amber on the engineering. Naming the commodity
   AND calling it commodity is the positioning move.

   Each band head now links to the service page that argues it. This is the
   main in-body route into those pages — the nav deliberately stays at five
   items, so the cluster closes from the section that makes the case rather
   than from a crowded bar. A band whose page does not exist in this locale
   renders without a link. */
const BAND_CLASS = ['base', 'diff', 'eng'];
const TIER_CLASS = ['t-base', 't-diff', 't-eng'];

export default function Services({ c }: { c: Content }) {
  return (
    <section id="services" className="ivory">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{c.services.label}</div>
          <div>
            <h2>{c.services.h2}</h2>
            <p className="sub">{c.services.intro}</p>
          </div>
        </div>

        {c.services.bands.map((band, bi) => {
          const href = band.pageId ? pathFor(band.pageId as PageId, c.locale) : null;
          return (
            <div className={`band ${BAND_CLASS[bi]}`} key={band.tier}>
              <div className="band-head">
                <span className={`tier ${TIER_CLASS[bi]} mono`}>{band.tier}</span>
                <h3>{band.title}</h3>
                <p className="note">{band.note}</p>
                {href && (
                  <Link className="case-cta mono" href={href} style={{ color: 'var(--amber-deep)' }}>
                    {c.services.bandCta} →
                  </Link>
                )}
              </div>
              <div className="tiles">
                {band.tiles.map((t) => (
                  <div className="tile" key={t.ix}>
                    <span className="ix mono">{t.ix}</span>
                    <span className="lb">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
