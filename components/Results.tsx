import type { Content } from '@/content/types';
import CountUp from './CountUp';

const AMBER = '#DDA34A';
const SAGE = '#8FB6A4';

export default function Results({ c }: { c: Content }) {
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

        <div className="cases">
          {c.results.cases.map((cs) => {
            const stroke = cs.inverted ? SAGE : AMBER;
            return (
              <div className="case" key={cs.title}>
                <p className="sector">
                  <span className="ph">{cs.sector}</span>
                </p>
                <svg className="spark" viewBox="0 0 240 46" preserveAspectRatio="none" aria-hidden="true">
                  <line x1="0" y1="45" x2="240" y2="45" stroke="rgba(244,241,233,.18)" strokeWidth="1" />
                  <path className="trace" d={cs.spark} fill="none" stroke={stroke} strokeWidth="2" />
                </svg>
                <div className="delta">
                  <span className="from mono">
                    <span className="ph">{cs.from}</span>
                  </span>
                  <span className="arw mono">→</span>
                  <span className="to mono" style={cs.inverted ? { color: SAGE } : undefined}>
                    <CountUp from={cs.from} to={cs.to} placeholder />
                  </span>
                </div>
                <h3>
                  <span className="ph">{cs.title}</span>
                </h3>
                <p className="basis">
                  <span className="ph">{cs.basis}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="aep">
          <div className="aep-bar">
            <span className="q mono">
              {c.results.promptLabel}
              <b>
                <span className="ph">{c.results.promptText}</span>
              </b>
            </span>
            <span className="tag mono">
              {c.results.promptTag}
              <span className="ph">{c.locale === 'en' ? '90 days' : '90 dana'}</span>
            </span>
          </div>
          <div className="aep-rows">
            {c.results.engines.map((e) => (
              <div className="aep-row" key={e.name}>
                <div className="eng mono">{e.name}</div>
                <div className="bar">
                  <i className={e.sage ? 'sg' : undefined} style={{ ['--w' as string]: `${e.pct}%` }} />
                </div>
                <div className="fig mono">
                  <CountUp from={e.prior} to={e.share} placeholder />{' '}
                  <small>
                    {c.results.fromWord} <span className="ph">{e.prior}</span>
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
