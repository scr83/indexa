import localFont from 'next/font/local';

/* Fonts are committed to the repo and served from our own origin.
   Deliberately not next/font/google: that makes every build depend on
   Google's CDN being reachable, and every page load depend on a
   third-party origin. Self-hosted means deterministic builds, one less
   DNS lookup, and no third-party font request to explain to a client.
   The latin-ext subset is required — Serbian needs č ć š đ ž. */

export const sans = localFont({
  src: [
    { path: '../app/fonts/plex-sans-400.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/plex-sans-500.woff2', weight: '500', style: 'normal' },
    { path: '../app/fonts/plex-sans-600.woff2', weight: '600', style: 'normal' },
    { path: '../app/fonts/plex-sans-700.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-sans',
  fallback: ['-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
  // keeps the fallback metrics close enough that the swap doesn't shift layout
  adjustFontFallback: 'Arial',
});

export const mono = localFont({
  src: [
    { path: '../app/fonts/plex-mono-400.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/plex-mono-500.woff2', weight: '500', style: 'normal' },
    { path: '../app/fonts/plex-mono-600.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-mono',
  fallback: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
});

export const fontVars = `${sans.variable} ${mono.variable}`;
