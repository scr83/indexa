import type { Content } from '@/content/types';

const LOCALES = ['en', 'es', 'sr', 'de', 'nb', 'fr'];

/* Which return links are valid. true = reciprocated, false = broken,
   null = the diagonal (a locale referencing itself).
   Row = source locale, column = target locale. */
const MATRIX: (boolean | null)[][] = [
  [null, true, true, true, true, true],
  [true, null, true, true, true, true],
  [true, true, null, true, true, true],
  [true, true, true, null, false, true],
  [true, true, true, false, null, false],
  [true, true, true, true, false, null],
];

const FILL = { valid: '#DDA34A', broken: '#C2402F', self: '#1D4A51' };
const CELL_W = 40;
const CELL_H = 28;
const X0 = 98;
const Y0 = 42;
const STEP_X = 48;
const STEP_Y = 48;

export default function Multilingual({ c }: { c: Content }) {
  return (
    <section id="multilingual" className="dark dotted">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{c.multilingual.label}</div>
          <div>
            <h2>{c.multilingual.h2}</h2>
            {c.multilingual.paras.map((p, i) => (
              <p className="sub" key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="ml">
          <div className="matrix">
            <div className="matrix-bar mono">
              {c.multilingual.matrixBar}
              <span className="ph">{c.locale === 'en' ? 'example cluster' : 'primer klastera'}</span>
            </div>
            <svg
              viewBox="0 0 440 320"
              role="img"
              aria-label={
                c.locale === 'en'
                  ? 'Matrix of six locales showing which hreflang return links are valid, which are missing and which are self-referencing.'
                  : 'Matrica šest lokalizacija koja pokazuje koje su hreflang povratne veze važeće, koje nedostaju i koje upućuju same na sebe.'
              }
            >
              <g fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#B6C4C3">
                {LOCALES.map((l, i) => (
                  <text key={`c${l}`} x={X0 + i * STEP_X + CELL_W / 2} y={30} textAnchor="middle">
                    {l}
                  </text>
                ))}
                {LOCALES.map((l, i) => (
                  <text key={`r${l}`} x={86} y={Y0 + i * STEP_Y + 20} textAnchor="end">
                    {l}
                  </text>
                ))}
              </g>
              <g>
                {MATRIX.map((row, ri) =>
                  row.map((v, ci) => (
                    <rect
                      key={`${ri}-${ci}`}
                      x={X0 + ci * STEP_X}
                      y={Y0 + ri * STEP_Y}
                      width={CELL_W}
                      height={CELL_H}
                      fill={v === null ? FILL.self : v ? FILL.valid : FILL.broken}
                    />
                  )),
                )}
              </g>
            </svg>
            <div className="legend mono">
              <span>
                <i style={{ background: FILL.valid }} />
                {c.multilingual.legend[0]}
              </span>
              <span>
                <i style={{ background: FILL.broken }} />
                {c.multilingual.legend[1]}
              </span>
              <span>
                <i style={{ background: FILL.self }} />
                {c.multilingual.legend[2]}
              </span>
            </div>
          </div>

          <div>
            <div className="langs mono" style={{ margin: '0 0 22px' }}>
              {c.multilingual.langs.map((l) => (
                <span className="lg2" key={l}>
                  {l}
                </span>
              ))}
              <span className="lg2 sec">{c.multilingual.langsSecondary}</span>
            </div>
            <div className="dirs">
              {c.multilingual.directions.map((d) => (
                <div className="dir" key={d.title}>
                  <div className="route mono">
                    <span className="cc">{d.from}</span>
                    <span className="ar">→</span>
                    <span className="cc dim">{d.to}</span>
                  </div>
                  <h4>{d.title}</h4>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
