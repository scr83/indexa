import Link from 'next/link';
import type { CaseStudy } from '@/content/types';
import { requirePath, type Locale, type PageId } from '@/lib/routes';
import CountUp from './CountUp';

const AMBER = '#DDA34A';
const SAGE = '#8FB6A4';

/* The case card, shared by the home page's Results section, the service
   pages' proof band and the results index — one component so a correction
   to a figure's presentation lands everywhere at once. */
export default function CaseCards({
  cases,
  cta,
  locale,
}: {
  cases: CaseStudy[];
  cta: string;
  locale: Locale;
}) {
  /* Fewer than three cards: size the track explicitly and let the container
     shrink to it, so no background is painted past the last card. */
  const n = cases.length;
  const fit =
    n < 3
      ? { gridTemplateColumns: `repeat(${n}, minmax(0, 420px))`, width: 'fit-content' as const }
      : undefined;

  return (
    <div className="cases" style={fit}>
      {cases.map((cs) => {
        const stroke = cs.inverted ? SAGE : AMBER;
        return (
          <div className="case" key={cs.id}>
            <p className="sector">{cs.sector}</p>
            <svg className="spark" viewBox="0 0 240 46" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="45" x2="240" y2="45" stroke="rgba(244,241,233,.18)" strokeWidth="1" />
              <path className="trace" d={cs.spark} fill="none" stroke={stroke} strokeWidth="2" />
            </svg>
            <div className="delta">
              <span className="from mono">{cs.from}</span>
              <span className="arw mono">→</span>
              <span className="to mono" style={cs.inverted ? { color: SAGE } : undefined}>
                <CountUp from={cs.from} to={cs.to} />
              </span>
            </div>
            <h3>{cs.title}</h3>
            <p className="basis">{cs.basis}</p>
            <Link className="case-cta mono" href={requirePath(cs.id as PageId, locale)}>
              {cta} →
            </Link>
          </div>
        );
      })}
    </div>
  );
}
