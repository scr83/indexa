import type { Faq as FaqItem } from '@/content/types';

/* Plain markup, no accordion. Every answer is in the DOM on load, which is
   what makes the block useful to an answer engine as well as to a reader —
   and this site argues that being readable by one matters. */
export default function Faq({
  label,
  h2,
  items,
}: {
  label: string;
  h2: string;
  items: FaqItem[];
}) {
  return (
    <section id="faq" className="stone">
      <div className="wrap pad">
        <div className="sec-head">
          <div className="sec-label">{label}</div>
          <div>
            <h2>{h2}</h2>
          </div>
        </div>
        <div className="faq">
          {items.map((it) => (
            <div className="faq-item" key={it.q}>
              <h3>{it.q}</h3>
              <p>{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
