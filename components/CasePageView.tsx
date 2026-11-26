import Link from 'next/link';
import type { CasePage, Content } from '@/content/types';
import { pathFor, requirePath, type PageId } from '@/lib/routes';
import { buildCaseGraph } from '@/lib/schema';
import { enServices } from '@/content/pages/en-services';
import { srServices } from '@/content/pages/sr-services';
import Nav from './Nav';
import ProseBand from './ProseBand';
import CaseCards from './CaseCards';
import Related from './Related';
import Contact from './Contact';
import Footer from './Footer';
import CountUp from './CountUp';

const AMBER = '#DDA34A';
const SAGE = '#8FB6A4';

/* A case page carries more than the home card can: the full figure table,
   including the metrics that went the wrong way, and a section on what the
   case does not prove. That section is the reason these pages are worth
   having beyond the extra URLs — there is no room for it on a card. */
export default function CasePageView({
  pageId,
  c,
  p,
}: {
  pageId: PageId;
  c: Content;
  p: CasePage;
}) {
  const others = c.results.cases.filter((cs) => cs.id !== pageId);
  // Drop any service that does not exist in this locale — the Serbian side
  // has three service pages, not four, and the case content is locale-agnostic.
  const serviceItems = p.services.ids.filter((id) => pathFor(id as PageId, c.locale) !== null);

  return (
    <>
      <Nav c={c} pageId={pageId} />

      <div className="phero dotted">
        <div className="wrap">
          <Link className="crumb mono" href={requirePath('results', c.locale)}>
            ← {p.backToIndex}
          </Link>
          <div className="phero-grid">
            <div>
              <span className="kicker">{p.kicker}</span>
              <h1>{p.h1}</h1>
              <p className="lede">{p.lede}</p>
              <div className="cta-row">
                <a className="btn btn-amber" href="#contact">
                  {c.nav.cta}
                </a>
              </div>
            </div>

            <div>
              <svg
                className="spark"
                viewBox="0 0 240 46"
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              >
                <line x1="0" y1="45" x2="240" y2="45" stroke="rgba(244,241,233,.18)" strokeWidth="1" />
                <path
                  className="trace"
                  d={p.headline.spark}
                  fill="none"
                  stroke={p.headline.inverted ? SAGE : AMBER}
                  strokeWidth="2"
                />
              </svg>
              <div className="delta">
                <span className="from mono">{p.headline.from}</span>
                <span className="arw mono">→</span>
                <span
                  className="to mono"
                  style={p.headline.inverted ? { color: SAGE } : undefined}
                >
                  <CountUp from={p.headline.from} to={p.headline.to} />
                </span>
              </div>
              <p className="basis">{p.headline.label}</p>

              <table className="figs" style={{ marginTop: 26 }}>
                <caption className="sec-label mono" style={{ textAlign: 'left', paddingBottom: 10 }}>
                  {p.figuresLabel}
                </caption>
                <thead>
                  <tr>
                    {p.figuresHead.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {p.figures.map((f) => (
                    <tr key={f.label}>
                      <td className="m">{f.label}</td>
                      <td className="mono">{f.before}</td>
                      <td
                        className={`mono v${f.neutral ? '' : f.inverted ? ' dn' : ' up'}`}
                      >
                        {f.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="phero-foot">{p.basis}</p>
        </div>
      </div>

      {p.sections.map((s, i) => (
        <ProseBand key={s.h2} p={s} tone={i % 2 === 0 ? 'ivory' : 'stone'} />
      ))}

      <Related
        h2={p.services.h2}
        locale={c.locale}
        items={serviceItems.map((id) => ({
          id,
          title: SERVICE_LABEL[c.locale][id] ?? id,
          blurb: p.services.intro,
        }))}
      />

      <section className="dark dotted">
        <div className="wrap pad">
          <h2>{p.others.h2}</h2>
          <div style={{ marginTop: 28 }}>
            <CaseCards cases={others} cta={c.results.caseCta} locale={c.locale} />
          </div>
        </div>
      </section>

      <Contact c={c} />
      <Footer c={c} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCaseGraph(c, p, pageId)) }}
      />
    </>
  );
}

/* Short labels for the "work behind it" links, read from each service
   page's own `name`. Pulling them from the service content rather than a
   second hard-coded list means a rename is one edit, not four. */
const SERVICE_LABEL: Record<'en' | 'sr', Record<string, string>> = {
  en: Object.fromEntries(Object.entries(enServices).map(([id, p]) => [id, p.name])),
  sr: Object.fromEntries(Object.entries(srServices).map(([id, p]) => [id, p.name])),
};
