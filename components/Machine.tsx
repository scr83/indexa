import type { Content, LogLine } from '@/content/types';

/* The log lines carry inline markup as <v>, <ok>, <warn>, <err> so the copy
   files stay plain strings a translator can edit without touching JSX. */
function LogText({ text }: { text: string }) {
  const parts = text.split(/(<\/?(?:v|ok|warn|err)>)/g);
  const out: React.ReactNode[] = [];
  let cls: string | null = null;
  let key = 0;

  for (const part of parts) {
    const open = part.match(/^<(v|ok|warn|err)>$/);
    const close = part.match(/^<\/(v|ok|warn|err)>$/);
    if (open) {
      cls = open[1] === 'v' ? 'val' : open[1];
      continue;
    }
    if (close) {
      cls = null;
      continue;
    }
    if (!part) continue;
    out.push(
      cls ? (
        <span className={cls} key={key++}>
          {part}
        </span>
      ) : (
        <span key={key++}>{part}</span>
      ),
    );
  }
  return <>{out}</>;
}

export default function Machine({ c }: { c: Content }) {
  const d = c.machine.dagLabels;
  return (
    <section id="machine" className="ivory">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{c.machine.label}</div>
          <div>
            <h2>{c.machine.h2}</h2>
            <p className="sub">{c.machine.intro}</p>
          </div>
        </div>

        <div className="machine">
          <div className="dag">
            <div className="dag-bar mono">{c.machine.dagBar}</div>
            <svg
              viewBox="0 0 700 272"
              role="img"
              aria-label={
                c.locale === 'en'
                  ? 'Four-stage pipeline: inputs feed a model-assisted machine stage, which feeds a human review gate, which produces either a pull request or a documented change set.'
                  : 'Proces u četiri koraka: ulazi hrane mašinski korak uz pomoć modela, koji vodi do ljudskog pregleda, iz kojeg izlazi izmena u kodu ili dokumentovan skup izmena.'
              }
            >
              <defs>
                <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M0 0 L10 5 L0 10 z" fill="#A8A89D" />
                </marker>
              </defs>

              <g fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#8A8A7F" letterSpacing="1">
                <text x="16" y="16">{d.input}</text>
                <text x="222" y="16">{d.machine}</text>
                <text x="452" y="16">{d.gate}</text>
                <text x="588" y="16">{d.output}</text>
              </g>

              <g stroke="#CECEC4" strokeWidth="1.3" fill="none" markerEnd="url(#ar2)">
                <path d="M184 52 L214 52" />
                <path d="M184 118 L214 118" />
                <path d="M184 184 L214 184" />
                <path d="M414 52 L428 52 L428 118 L448 118" />
                <path d="M414 118 L448 118" />
                <path d="M414 184 L428 184 L428 118 L448 118" />
                <path d="M556 104 L584 104" />
                <path d="M556 132 L570 132 L570 178 L584 178" />
              </g>

              <g fontFamily="IBM Plex Mono, monospace">
                <g fontSize="12">
                  <rect x="16" y="34" width="168" height="36" fill="#F1F0EA" stroke="#CECEC4" />
                  <text x="30" y="57" fill="#4A5A5D">{d.crawl}</text>

                  <rect x="16" y="100" width="168" height="36" fill="#F1F0EA" stroke="#CECEC4" />
                  <text x="30" y="123" fill="#4A5A5D">{d.gsc}</text>

                  <rect x="16" y="166" width="168" height="36" fill="#F1F0EA" stroke="#CECEC4" />
                  <text x="30" y="189" fill="#4A5A5D">{d.logs}</text>

                  <rect x="214" y="34" width="200" height="36" fill="#FFF4E2" stroke="#DDA34A" />
                  <text x="228" y="57" fill="#8A5A14">{d.parse}</text>

                  <rect x="214" y="100" width="200" height="36" fill="#FFF4E2" stroke="#DDA34A" />
                  <text x="228" y="123" fill="#8A5A14">{d.diff}</text>

                  <rect x="214" y="166" width="200" height="36" fill="#FFF4E2" stroke="#DDA34A" />
                  <text x="228" y="189" fill="#8A5A14">{d.entities}</text>

                  <rect x="448" y="90" width="108" height="56" fill="#E8F0EB" stroke="#8FB6A4" strokeWidth="1.6" />
                  <text x="462" y="113" fill="#2F5F4C">{d.reviewA}</text>
                  <text x="462" y="130" fill="#2F5F4C">{d.reviewB}</text>

                  <rect x="584" y="86" width="104" height="36" fill="#102A2E" />
                  <text x="592" y="109" fill="#F4F1E9">{d.pr}</text>

                  <rect x="584" y="160" width="104" height="36" fill="#F1F0EA" stroke="#CECEC4" />
                  <text x="592" y="183" fill="#4A5A5D">{d.changeSet}</text>
                </g>
                <g fontSize="10" fill="#9A9A8F">
                  <text x="228" y="86">{d.modelAssisted}</text>
                  <text x="462" y="162">{d.everyChange}</text>
                  <text x="592" y="137">{d.withRepo}</text>
                  <text x="592" y="211">{d.withoutRepo}</text>
                </g>
              </g>

              <line x1="16" y1="242" x2="688" y2="242" stroke="#E3E3DB" />
              <text x="16" y="262" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#8A8A7F">
                {d.caption}
              </text>
            </svg>
            <div className="dag-foot">{c.machine.dagFoot}</div>
          </div>

          <div className="log">
            <div className="log-bar mono">
              <span>
                {c.machine.logRun} <span className="ph">#1184</span>
              </span>
              <span className="live">
                <i />
                {c.machine.logLive}
              </span>
              <span style={{ marginLeft: 'auto' }}>
                {c.locale === 'en' ? (
                  <>
                    <span className="ph">02:58</span> {c.machine.logElapsed}
                  </>
                ) : (
                  <>
                    {c.machine.logElapsed} <span className="ph">02:58</span>
                  </>
                )}
              </span>
            </div>
            <div className="log-body mono">
              {c.machine.logLines.map((l: LogLine) => (
                <span className="lg" key={l.ts + l.text}>
                  <span className="ts">{l.ts}</span>
                  <LogText text={l.text} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
