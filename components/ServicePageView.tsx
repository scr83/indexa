import type { Content, ServicePage } from '@/content/types';
import { requirePath, type PageId } from '@/lib/routes';
import { buildServiceGraph } from '@/lib/schema';
import Banner from './Banner';
import Nav from './Nav';
import SubpageHero from './SubpageHero';
import ProseBand from './ProseBand';
import CaseCards from './CaseCards';
import Faq from './Faq';
import Related from './Related';
import Contact from './Contact';
import Footer from './Footer';

/* One composition for every service page in either locale. The page is
   assembled from the home page's own vocabulary — petrol hero with a code
   panel, a labelled prose band, the tile grid, the case cards — so a new
   service page needs copy rather than design. */
export default function ServicePageView({
  pageId,
  c,
  p,
}: {
  pageId: PageId;
  c: Content;
  p: ServicePage;
}) {
  const proofCases = c.results.cases.filter((cs) => p.proof.caseIds.includes(cs.id));

  return (
    <>
      <Banner c={c} />
      <Nav c={c} pageId={pageId} />

      <SubpageHero
        kicker={p.kicker}
        h1={p.h1}
        sub={p.sub}
        lede={p.lede}
        ledeEmphasis={p.ledeEmphasis}
        ctaPrimary={p.ctaPrimary}
        ctaSecondary={p.ctaSecondary}
        secondaryHref="#scope"
        panel={p.panel}
      />

      <ProseBand p={p.what} tone="ivory" id="what" />

      <section id="scope" className="stone">
        <div className="wrap pad">
          <div className="sec-head">
            <div className="sec-label">{p.does.label}</div>
            <div>
              <h2>{p.does.h2}</h2>
              <p className="sub">{p.does.intro}</p>
            </div>
          </div>
          <div className="band eng">
            <div className="band-head">
              <span className="tier t-eng mono">{p.kicker}</span>
              <h3>{p.name}</h3>
            </div>
            <div className="tiles">
              {p.does.tiles.map((t) => (
                <div className="tile" key={t.ix}>
                  <span className="ix mono">{t.ix}</span>
                  <span className="lb">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProseBand p={p.deliver} tone="ivory" id="deliver" />

      {proofCases.length > 0 && (
        <section id="results" className="dark dotted">
          <div className="wrap pad">
            <div className="sec-head">
              <div className="sec-label">{p.proof.label}</div>
              <div>
                <h2>{p.proof.h2}</h2>
                <p className="sub">{p.proof.intro}</p>
              </div>
            </div>
            <CaseCards cases={proofCases} cta={c.results.caseCta} locale={c.locale} />
          </div>
        </section>
      )}

      <Faq label={p.faq.label} h2={p.faq.h2} items={p.faq.items} />
      <Related h2={p.related.h2} items={p.related.items} locale={c.locale} />

      <Contact c={c} />
      <Footer c={c} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceGraph(c, p, requirePath(pageId, c.locale))),
        }}
      />
    </>
  );
}
