import type { Content } from '@/content/types';
import { AI_CHART_PATH } from '@/content/aiChart';
import CaseCards from './CaseCards';

const AMBER = '#DDA34A';

export default function Results({ c }: { c: Content }) {
  const ai = c.results.ai;

  return (
    <section id="results" className="dark dotted">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{c.results.label}</div>
          <div>
            <h2>{c.results.h2}</h2>
            <p className="sub">{c.results.intro}</p>
          </div>
        </div>

        <CaseCards cases={c.results.cases} cta={c.results.caseCta} locale={c.locale} />

        {/* Exported Search Console data for one engagement. The footnote
            stating what Search Console does not cover is load-bearing: it is
            the reason this panel is worth more than a bar chart of guesses. */}
        <div className="ai">
          <div className="ai-bar">
            <span className="src mono">
              <b>{ai.sourceBold}</b>
              {ai.source}
            </span>
            <span className="beta mono">{ai.beta}</span>
            <span className="who mono">{ai.who}</span>
          </div>
          <div className="ai-grid">
            {/* These figures are static on purpose. "180 → 858" is two
                numbers in one string, and a counter that animates only the
                first reads as a bug. The case cards carry the movement. */}
            <div className="ai-stat">
              {ai.stats.map((s) => (
                <div className="row" key={s.big}>
                  <span className="big mono">{s.big}</span>
                  <span className="unit">{s.unit}</span>
                </div>
              ))}
            </div>
            <div className="ai-chart">
              <svg viewBox="0 0 600 118" preserveAspectRatio="none" role="img" aria-label={ai.chartLabel}>
                <line x1="0" y1="108" x2="600" y2="108" stroke="rgba(244,241,233,.18)" strokeWidth="1" />
                <path
                  className="trace"
                  d={AI_CHART_PATH}
                  fill="none"
                  stroke={AMBER}
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="xs mono">
                {ai.axis.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="ai-foot">{ai.foot}</div>
        </div>
      </div>
    </section>
  );
}
