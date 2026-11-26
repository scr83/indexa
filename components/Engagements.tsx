import Link from 'next/link';
import type { Content } from '@/content/types';
import { pathFor, type PageId } from '@/lib/routes';

/* The execution bar is the point of this section: it encodes who does the
   work and whether the engagement has an end date — the two axes that
   actually separate the three lanes.

   The consulting lane links to its own service page. That page is not
   reachable from the Services bands above — consulting is an engagement
   shape rather than one of the three service blocks — so this is where it
   gets its in-body link. */
export default function Engagements({ c }: { c: Content }) {
  return (
    <section id="work" className="stone">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{c.work.label}</div>
          <div>
            <h2>{c.work.h2}</h2>
            <p className="sub">{c.work.intro}</p>
          </div>
        </div>

        <div className="lanes">
          {c.work.lanes.map((lane) => (
            <div className="lane" key={lane.title}>
              <h3>{lane.title}</h3>
              <p className="who">{lane.who}</p>
              {lane.entryBadge && <span className="entry mono">{lane.entryBadge}</span>}

              <div className="own">
                <div className="own-head mono">
                  <span>{c.locale === 'en' ? 'EXECUTION' : 'IZVRŠENJE'}</span>
                  <span className={`shape${lane.shapeFinite ? ' finite' : ''} mono`}>{lane.shape}</span>
                </div>
                <div className="own-bar">
                  <i className={lane.barFade ? 'fade' : 'me'} style={{ width: `${lane.barSelf}%` }} />
                  {lane.barClient > 0 && <i className="you" style={{ width: `${lane.barClient}%` }} />}
                </div>
                <div className="own-key mono">
                  <span>
                    <b>{lane.keyLeft}</b>
                  </span>
                  <span>
                    {lane.keyRightSage ? <b className="sg">{lane.keyRight}</b> : lane.keyRight}
                  </span>
                </div>
              </div>

              <p className="desc">
                {lane.desc}
                {lane.descEmphasis && (
                  <>
                    {' '}
                    <b>{lane.descEmphasis}</b>
                  </>
                )}
              </p>

              <div className="chips">
                {lane.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>

              {(() => {
                const href = lane.pageId ? pathFor(lane.pageId as PageId, c.locale) : null;
                return href ? (
                  <Link
                    className="case-cta mono"
                    href={href}
                    style={{ color: 'var(--amber-deep)', marginTop: 0, marginBottom: 18 }}
                  >
                    {c.work.laneCta} →
                  </Link>
                ) : null;
              })()}

              <div className="pricing">
                <span className="fig">{lane.price}</span>
                <span className="unit mono">
                  {lane.unitPlaceholder ? <span className="ph">{lane.unit}</span> : lane.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
