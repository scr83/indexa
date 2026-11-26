import type { Content } from '@/content/types';
import Scramble from './Scramble';

/* The diff is deliberately a real one: two invalid hreflang values and a
   trailing-slash mismatch, resolved. It is the one element on the page a
   marketing-led agency could not produce. */
const DIFF = [
  { n: '41', g: ' ', t: '<link rel="alternate" hreflang="en" href="/en/pricing" />', k: '' },
  { n: '42', g: '−', t: '<link rel="alternate" hreflang="es-ES" href="/es/precios/" />', k: 'del' },
  { n: '43', g: '−', t: '<link rel="alternate" hreflang="no"    href="/no/priser"  />', k: 'del' },
  { n: '42', g: '+', t: '<link rel="alternate" hreflang="es"    href="/es/precios"  />', k: 'add' },
  { n: '43', g: '+', t: '<link rel="alternate" hreflang="nb"    href="/no/priser"   />', k: 'add' },
  { n: '44', g: ' ', t: '<link rel="alternate" hreflang="x-default" href="/en/" />', k: '' },
];

export default function Hero({ c }: { c: Content }) {
  return (
    <div className="hero dotted">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="kicker">{c.hero.kicker}</span>
            <Scramble text={c.hero.h1} />
            <p className="h1-sub">{c.hero.sub}</p>
            <p className="lede">
              {c.hero.lede} <b>{c.hero.ledeEmphasis}</b>
            </p>
            <div className="cta-row">
              <a className="btn btn-amber" href="#contact">
                {c.hero.ctaPrimary}
              </a>
              <a className="btn btn-oncream" href="#services">
                {c.hero.ctaSecondary}
              </a>
            </div>
            <div className="hero-meta mono">
              <span>
                <b>{c.hero.metaLineBold}</b>
                {c.hero.metaLine}
              </span>
            </div>
          </div>

          <div className="panel">
            <div className="panel-bar">
              <span className="file mono">
                <b>{c.hero.panelFile}</b>
                {c.hero.panelFileNote}
              </span>
              <span className="chip mono">{c.hero.panelChip}</span>
            </div>
            <div className="code mono">
              {DIFF.map((l, i) => (
                <div className={`ln${l.k ? ' ' + l.k : ''}`} key={i}>
                  <span className="n">{l.n}</span>
                  <span className="g">{l.g}</span>
                  <span className="t">{l.t}</span>
                </div>
              ))}
            </div>
            <div className="panel-foot">
              <span className="big mono">
                <span className="ph">{c.hero.panelStat}</span>
              </span>
              <p>{c.hero.panelFoot}</p>
            </div>
          </div>
        </div>

        <div className="strip mono">
          {c.pipeline.map((step, i) => {
            const state = i < 2 ? '' : i === 2 ? ' run' : ' idle';
            return (
              <span key={step} style={{ display: 'contents' }}>
                <span className={`node${state}`}>
                  <i className="dot" />
                  {step}
                </span>
                {i < c.pipeline.length - 1 && <span className="link" />}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
