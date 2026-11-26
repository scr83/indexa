'use client';

import { useEffect, useRef, useState } from 'react';

/** Handles both 1,240 (en) and 1.240 (sr) thousand grouping. */
function parseNum(s: string): number | null {
  let t = s.replace(/[^\d.,-]/g, '');
  if (/^-?\d{1,3}([.,]\d{3})+$/.test(t)) t = t.replace(/[.,]/g, '');
  else t = t.replace(/,/g, '');
  const m = t.match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

/** Rewrites the number inside a template, keeping its prefix, suffix and separator. */
function render(template: string, value: number): string {
  const sep = /\d\.\d{3}/.test(template) ? '.' : /\d,\d{3}/.test(template) ? ',' : '';
  let str = Math.round(value).toString();
  if (sep) str = str.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return template.replace(/[\d.,]+/, str);
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

interface Props {
  /** the stated baseline — the count starts here, not at zero */
  from: string;
  /** the result */
  to: string;
  duration?: number;
  className?: string;
  placeholder?: boolean;
}

/**
 * Counts from the stated baseline to the result when scrolled into view.
 * Starting at the baseline rather than zero is the point: the movement
 * is the delta the section is arguing about.
 */
export default function CountUp({ from, to, duration = 1200, className, placeholder }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(to); // SSR renders the final value
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const start = parseNum(from);
    const target = parseNum(to);
    if (start === null || target === null) return;

    setDisplay(render(to, start));

    const run = () => {
      if (done.current) return;
      done.current = true;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / duration, 1);
        setDisplay(render(to, start + (target - start) * easeOutCubic(p)));
        if (p < 1) requestAnimationFrame(step);
        else setDisplay(to);
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={placeholder ? 'ph' : undefined}>
      {display}
    </span>
  );
}
