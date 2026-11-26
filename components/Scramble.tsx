'use client';

import { useEffect, useRef } from 'react';

const GLYPHS = '0123456789<>/\\{}[]#$%&*+=_|~^';

interface Props {
  text: string;
  /** ms between frames — higher is a slower churn */
  tick?: number;
  /** frames of delay added per character — higher is a slower sweep */
  stagger?: number;
  className?: string;
}

/**
 * Resolves a headline out of random glyphs.
 *
 * Every character is measured and frozen to its final rendered width before
 * the animation starts, grouped per word so line breaks never move. Verified
 * at zero layout shift — which matters on a page selling technical SEO.
 *
 * The real text is server-rendered, so crawlers and no-JS visitors see the
 * headline, never the scrambled state.
 */
export default function Scramble({ text, tick = 48, stagger = 1.25, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const words = text.split(' ');
    const chars: { node: HTMLSpanElement; real: string }[] = [];

    el.textContent = '';
    words.forEach((word, wi) => {
      const wrap = document.createElement('span');
      wrap.style.display = 'inline-block';
      wrap.style.whiteSpace = 'nowrap';
      for (const ch of word) {
        const c = document.createElement('span');
        c.textContent = ch;
        c.style.display = 'inline-block';
        c.style.textAlign = 'center';
        wrap.appendChild(c);
        chars.push({ node: c, real: ch });
      }
      el.appendChild(wrap);
      if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
    });

    // measure first, then freeze — two passes avoids layout thrash
    const widths = chars.map((c) => c.node.getBoundingClientRect().width);
    chars.forEach((c, i) => {
      c.node.style.width = `${widths[i]}px`;
    });

    const settleAt = chars.map((_, i) => Math.round(i * stagger) + Math.floor(Math.random() * 6));
    const total = Math.max(...settleAt) + 4;
    let frame = 0;

    const timer = window.setInterval(() => {
      for (let i = 0; i < chars.length; i++) {
        if (frame >= settleAt[i]) {
          if (chars[i].node.textContent !== chars[i].real) chars[i].node.textContent = chars[i].real;
        } else {
          chars[i].node.textContent = GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
        }
      }
      frame++;
      if (frame > total) {
        window.clearInterval(timer);
        el.textContent = text; // back to a single clean text node
      }
    }, tick);

    return () => {
      window.clearInterval(timer);
      el.textContent = text;
    };
  }, [text, tick, stagger]);

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  );
}
