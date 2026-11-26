import type { Content, ResultsIndexPage } from '@/content/types';
import { buildResultsIndexGraph } from '@/lib/schema';
import Nav from './Nav';
import CaseCards from './CaseCards';
import Contact from './Contact';
import Footer from './Footer';

/* The index earns its own URL rather than redirecting to the home page's
   results section: it is the natural landing page for "SEO case studies",
   and it is where the note about CTR belongs — once, rather than repeated
   on every card. */
export default function ResultsIndexView({ c, p }: { c: Content; p: ResultsIndexPage }) {
  return (
    <>
      <Nav c={c} pageId="results" />

      <div className="phero dotted">
        <div className="wrap" style={{ paddingBottom: 58 }}>
          <span className="kicker">{p.kicker}</span>
          <h1>{p.h1}</h1>
          <p className="lede" style={{ maxWidth: '62ch' }}>
            {p.lede}
          </p>
        </div>
      </div>

      <section id="results" className="dark dotted">
        <div className="wrap" style={{ paddingBottom: 92 }}>
          <CaseCards cases={c.results.cases} cta={p.cardCta} locale={c.locale} />
          <p className="figs-foot" style={{ marginTop: 22 }}>
            {p.note}
          </p>
        </div>
      </section>

      <Contact c={c} />
      <Footer c={c} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildResultsIndexGraph(c, p.meta.title, p.meta.description)),
        }}
      />
    </>
  );
}
