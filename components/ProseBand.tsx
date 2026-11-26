import type { Prose } from '@/content/types';

/* A labelled band of prose on the same 200px gutter as every section head,
   so the whole site shares one vertical rule. */
export default function ProseBand({
  p,
  tone = 'ivory',
  id,
}: {
  p: Prose;
  tone?: 'ivory' | 'stone' | 'dark';
  id?: string;
}) {
  const cls = tone === 'dark' ? 'dark dotted' : tone === 'stone' ? 'stone' : 'ivory';
  return (
    <section id={id} className={cls}>
      <div className="wrap pad">
        <div className="prose">
          <div className="sec-label">{p.label ?? ''}</div>
          <div>
            <h2>{p.h2}</h2>
            <div className="prose-body">
              {p.paras.map((t) => (
                <p key={t.slice(0, 40)}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
