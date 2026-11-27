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
    const wordSpans: HTMLSpanElement[] = [];

    /* Pass 1 — build the word boxes holding real, unsplit text, so each one
       can be measured as the browser actually shapes it. */
    el.textContent = '';
    words.forEach((word, wi) => {
      const wrap = document.createElement('span');
      wrap.style.display = 'inline-block';
      wrap.style.whiteSpace = 'nowrap';
      wrap.textContent = word;
      el.appendChild(wrap);
      wordSpans.push(wrap);
      if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    const naturalWordWidths = wordSpans.map((w) => w.getBoundingClientRect().width);

    /* Pass 2 — split each word into per-character cells. A random glyph is
       wider than the letter it replaces, so each character needs its own
       fixed-width box or the word grows mid-animation. */
    const charsByWord: HTMLSpanElement[][] = [];
    wordSpans.forEach((wrap, wi) => {
      wrap.textContent = '';
      const group: HTMLSpanElement[] = [];
      for (const ch of words[wi]) {
        const c = document.createElement('span');
        c.textContent = ch;
        c.style.display = 'inline-block';
        c.style.textAlign = 'center';
        wrap.appendChild(c);
        group.push(c);
        chars.push({ node: c, real: ch });
      }
      charsByWord.push(group);
    });
    const charWidths = chars.map((c) => c.node.getBoundingClientRect().width);

    /* Pass 3 — freeze, scaled back to the word's natural width.
       Per-character boxes lose the kerning and the letter-spacing that apply
       *between* glyphs in a normal text run, so their widths sum to slightly
       more than the word really occupies. Left uncorrected that pushed a word
       onto a new line the moment the animation started: the headline went
       from three lines to four, which is the exact layout shift the freezing
       exists to prevent. Scaling each cell by natural/sum keeps the word box
       identical to the unsplit text, so the line breaks cannot move. */
    let k = 0;
    charsByWord.forEach((group, wi) => {
      const sum = group.reduce((acc, _, i) => acc + charWidths[k + i], 0);
      const factor = sum > 0 ? naturalWordWidths[wi] / sum : 1;
      group.forEach((node, i) => {
        node.style.width = `${charWidths[k + i] * factor}px`;
      });
      wordSpans[wi].style.width = `${naturalWordWidths[wi]}px`;
      k += group.length;
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
