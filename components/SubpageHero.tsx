import type { CodePanel } from '@/content/types';
import Scramble from './Scramble';

interface Props {
  kicker: string;
  h1: string;
  sub: string;
  lede: string;
  ledeEmphasis: string;
  ctaPrimary: string;
  ctaSecondary: string;
  secondaryHref: string;
  panel: CodePanel;
  /** Rendered above the kicker when the page sits under an index. */
  crumb?: { label: string; href: string };
}

/* The same petrol band and code panel as the home hero, at a smaller
   headline size. Reusing the panel is deliberate: it is the element that
   carries the positioning, and it should appear wherever the argument is
   being made rather than only on the landing page. */
export default function SubpageHero(p: Props) {
  return (
    <div className="phero dotted">
      <div className="wrap">
        <div className="phero-grid">
          <div>
            {p.crumb && (
              <a className="crumb mono" href={p.crumb.href}>
                ← {p.crumb.label}
              </a>
            )}
            <span className="kicker">{p.kicker}</span>
            <Scramble text={p.h1} />
            <p className="h1-sub">{p.sub}</p>
            <p className="lede">
              {p.lede} <b>{p.ledeEmphasis}</b>
            </p>
            <div className="cta-row">
              <a className="btn btn-amber" href="#contact">
                {p.ctaPrimary}
              </a>
              <a className="btn btn-oncream" href={p.secondaryHref}>
                {p.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="panel">
            <div className="panel-bar">
              <span className="file mono">
                <b>{p.panel.file}</b>
                {p.panel.fileNote}
              </span>
              <span className="chip mono">{p.panel.chip}</span>
            </div>
            <div className="code mono">
              {p.panel.lines.map((l, i) => (
                <div className={`ln${l.k ? ' ' + l.k : ''}`} key={i}>
                  <span className="n">{l.n}</span>
                  <span className="g">{l.g}</span>
                  <span className="t">{l.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The note sits under the panel it explains rather than spanning
              the band, which also fills the right column instead of leaving
              it empty below a short panel. */}
          <p className="phero-foot mono" style={{ gridColumn: 2, marginTop: 20 }}>
            {p.panel.foot}
          </p>
        </div>
      </div>
    </div>
  );
}
