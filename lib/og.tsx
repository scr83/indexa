import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { SITE } from './site';

/* Open Graph cards, generated at build time from the site's own palette and
   typeface rather than a stock template.

   Satori — the renderer behind ImageResponse — does not read woff2, which is
   what the site itself is served with. app/fonts/og-*.ttf are the same two
   faces converted for this one purpose; they are never sent to a browser. */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const PETROL = '#102A2E';
const AMBER = '#DDA34A';
const CREAM = '#F4F1E9';
const CREAM_2 = '#B6C4C3';
const CREAM_3 = '#7E9293';
const SAGE = '#8FB6A4';

async function font(file: string) {
  return readFile(path.join(process.cwd(), 'app', 'fonts', file));
}

interface Props {
  /** Small uppercase line above the title — the page's own kicker. */
  kicker: string;
  /** The page headline. Kept verbatim so the card and the page agree. */
  title: string;
  /** One supporting line. */
  sub?: string;
  /** Optional figure shown on the right, for case pages. */
  figure?: { from: string; to: string; label: string; inverted?: boolean };
  locale: 'en' | 'sr';
}

export async function ogImage({ kicker, title, sub, figure, locale }: Props) {
  const [sans, mono] = await Promise.all([font('og-sans-600.ttf'), font('og-mono-500.ttf')]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: PETROL,
          padding: '64px 72px',
          fontFamily: 'sans',
          position: 'relative',
        }}
      >
        {/* The amber rule is the one brand element that reads at thumbnail size. */}
        <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0, height: 8, width: 1200, background: AMBER }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="34" height="34" viewBox="0 0 20 20">
            <rect x="0" y="12" width="3.6" height="7" fill="#4E6B6C" />
            <rect x="5.6" y="8" width="3.6" height="11" fill={SAGE} />
            <rect x="11.2" y="3.5" width="3.6" height="15.5" fill={AMBER} />
            <circle cx="17.9" cy="2.1" r="2.1" fill={AMBER} />
          </svg>
          <span style={{ fontSize: 30, color: CREAM, letterSpacing: -1 }}>indexa</span>
          <span style={{ fontSize: 18, color: CREAM_3, fontFamily: 'mono', marginLeft: 10 }}>
            {SITE.origin.replace('https://', '')}
          </span>
        </div>

        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span
              style={{
                fontSize: 19,
                letterSpacing: 2.4,
                color: AMBER,
                fontFamily: 'mono',
                textTransform: 'uppercase',
                marginBottom: 22,
              }}
            >
              {kicker}
            </span>
            <span style={{ fontSize: title.length > 58 ? 54 : 64, lineHeight: 1.06, color: '#FCFAF4', letterSpacing: -2.4 }}>
              {title}
            </span>
            {sub && (
              <span style={{ fontSize: 25, lineHeight: 1.35, color: CREAM_2, marginTop: 24 }}>{sub}</span>
            )}
          </div>

          {figure && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: `1px solid rgba(244,241,233,.16)`,
                paddingLeft: 40,
                width: 330,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'mono' }}>
                <span style={{ fontSize: 38, color: CREAM_3 }}>{figure.from}</span>
                {/* Drawn, not typed: IBM Plex's latin subsets carry no U+2192,
                    and a missing glyph sends Satori to Google Fonts mid-build. */}
                <svg width="30" height="14" viewBox="0 0 30 14">
                  <path d="M0 7 H24" stroke={CREAM_3} strokeWidth="2" />
                  <path d="M22 1 L29 7 L22 13 Z" fill={CREAM_3} />
                </svg>
                <span style={{ fontSize: 64, color: figure.inverted ? SAGE : AMBER, letterSpacing: -2 }}>
                  {figure.to}
                </span>
              </div>
              <span style={{ fontSize: 19, color: CREAM_2, marginTop: 16, lineHeight: 1.4 }}>
                {figure.label}
              </span>
            </div>
          )}
        </div>

        <span style={{ fontSize: 19, color: CREAM_3, fontFamily: 'mono' }}>
          {locale === 'en'
            ? 'Technical and multilingual SEO · English · Español · Srpski'
            : 'Tehnički i višejezični SEO · engleski · španski · srpski'}
        </span>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'sans', data: sans, style: 'normal', weight: 600 },
        { name: 'mono', data: mono, style: 'normal', weight: 500 },
      ],
    },
  );
}
