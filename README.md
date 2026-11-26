# indexaseo.dev

Source for the Indexa site — a technical and multilingual SEO consultancy in
Belgrade. English at `/`, Serbian at `/sr`. Next.js 15 App Router, seventeen
routes, all statically prerendered, deployed on Vercel.

The repository is public because the site argues that this kind of work is
engineering rather than marketing, and a claim like that is worth more with the
source attached than without it. What follows is the reasoning behind the
decisions, including the ones that were wrong first.

## Why it's built this way

**One route map, nothing derived twice.** `lib/routes.ts` declares every page
once with its slug per locale. Canonical URLs, hreflang sets, the sitemap, the
language toggle and the breadcrumb trails are all computed from that table.
Adding page eighteen must not mean editing the seventeen before it.

**hreflang is deliberately asymmetric.** `/international-seo`,
`/programmatic-seo` and `/sr/seo-agencija-beograd` exist in one language only;
each carries a self-referencing canonical and no alternates. hreflang describes
a cluster of equivalents, and a page with no equivalent is not a cluster.
Serbia's entire commercial SEO market is roughly 1,200–1,500 searches a month,
so mirroring every English page into it would buy near-duplicate pages and
crawl waste rather than traffic.

**No page targets `SEO optimizacija`** even though it is the largest Serbian
term, because the Serbian home page's own H1 and title already target it. A
second page chasing the same query would cannibalise the stronger one.

**Two root layouts in route groups** (`app/(en)` and `app/(sr)`) so `<html lang>`
is correct per locale. App Router cannot vary it from a single root layout, and
a Serbian page declaring `lang="en"` is an obvious fault on a site that sells
technical SEO.

**Copy lives in `content/`, never in a component.** `content/types.ts` is the
shared shape, so a missing Serbian string is a type error rather than English
leaking onto the Serbian page.

**Fonts are committed and self-hosted**, not loaded from Google. Each weight is
the `latin` and `latin-ext` subsets merged into one file — around 424 glyphs and
20KB for mono. See the font bug below for why that merge matters.

**Hand-written CSS, no framework.** `app/globals.css` is design tokens first,
then components in page order.

**Two animations, both vanilla.** `Scramble` measures every character, freezes
each to its final width, then animates — so the headline never reflows. `CountUp`
counts from the stated baseline to the result rather than from zero, because the
delta is the argument the section is making. Both respect
`prefers-reduced-motion` by rendering the final state and doing nothing.

## Four bugs worth reading about

These are in the commit history in full. They are listed here because the
diagnosis is the interesting part, not the fix.

**The fonts contained no basic Latin at all.** All seven woff2 files held about
203 glyphs and not one of `A–Z`, `a–z` or `0–9`. They were the `latin-ext`
subset, which carries only accented characters — č, ć, š, đ, ž — on the
assumption that "latin-ext is the one Serbian needs". It is the one Serbian
needs *in addition to* `latin`. So the whole site rendered in the browser's
fallback face while still downloading seven font files per page load to supply
diacritics alone. Caught by checking glyph coverage directly rather than by
looking at the page, because the fallback looked plausible.

**The canonical pointed at a redirect.** The apex 308-redirected to `www` while
every canonical, hreflang and JSON-LD `@id` named the apex — so Google would
have followed a canonical into a redirect that came back. Which is the exact
defect the hero's code panel on `/technical-seo` illustrates.

**The count-up animation had silently stopped running.** Its selector targeted
`.delta .to .ph`, where `.ph` was the wrapper marking a figure as placeholder
data. Replacing the placeholder figures with real client data removed the
wrapper, and with it the animation's only hook. Nothing errored; it just stopped.

**Serbian had horizontal scroll on a phone.** Grid items default to
`min-width: auto`, so the Serbian run-log lines — longer than the English ones —
set a 419px floor inside a 375px viewport. The per-element `overflow` rules
could not take effect until the track was allowed to shrink.

## Verification

```bash
npm run build && npx next start -p 3100
npm run verify          # needs playwright + chromium available
```

`scripts/verify.mjs` drives a real browser across all seventeen routes. Playwright
is intentionally not a dependency, so Vercel builds don't pull browser binaries —
install it yourself with `npx playwright install chromium`.

It checks `<html lang>`, canonical, the hreflang trio (and its deliberate absence
on single-locale pages), OpenGraph including a fetchable `og:image`, parsed
JSON-LD, the favicon, every internal link for a 404, zero H1 height variance
across the whole scramble, the exact value each counter settles on in both number
formats, SVG labels against their container bounds with `getBBox`, no horizontal
scroll at 1440/1024/768/375, console errors, and `lastmod` being a date rather
than a build timestamp.

Every assertion in it exists because that thing broke at least once.

## Case-study provenance

Every figure traces to a Google Search Console comparison with **matched period
lengths**, except where explicitly published as a monthly average. The section's
own headline attacks percentages quoted without a period, so the page has to
survive its own standard.

| Case | Comparison | Published |
|---|---|---|
| B2B SaaS, multi-market | GSC, 6 months vs previous 6 | Impressions 584K → 885K; clicks 7.79K → 9.72K; position 18.7 → 15.2 |
| DUI defence law firm | GSC, 6 months vs previous 6 | Position 19.8 → 8.5; impressions 9.23K → 17.9K; ad spend −90% (client-reported) |
| Food & nutrition export | Leads: first 3 months against 10 years prior. GSC windows unequal (5 vs 10 months), so impressions are published **per month**, never as totals | 0 → 4 leads; position 13.4 → 4.7; impressions 1,472 → 2,330 per month |

**CTR fell in all three** — 1.3→1.1%, 3.3→2.0%, 4.9→3.6% — and is published on
each case page with the reason, rather than omitted: impressions grew faster than
clicks because the sites began appearing for far wider query sets, including
broad and informational queries that attract impressions and not clicks. A case
study that reports only the metrics that went up is not reporting.

**Held back deliberately:** a heavy-machinery engagement where Google Ads was
switched off entirely with sales held and position went 10.8 → 5.9, because
clicks fell 14% in the matched comparison. It is a conversation, not a card.

The AI-visibility panel is 184 days of exported Search Console data for the
same engagement as case 01. It states what Search Console does not cover —
AI Overviews and AI Mode only, nothing about ChatGPT or Perplexity — because
that limit is what makes the rest of it worth reading.

## Structure

```
app/
  (en)/…                English routes; (en)/layout.tsx sets lang="en"
  (sr)/sr/…             Serbian routes; (sr)/layout.tsx sets lang="sr-Latn"
  */opengraph-image.tsx per-page OG cards, generated at build
  globals.css  icon.svg  sitemap.ts  robots.ts  llms.txt/
  fonts/                merged latin + latin-ext woff2, plus TTF for OG rendering
components/             one per section, plus the page-type compositions
content/                all copy; pages/ holds the service and case pages
lib/
  routes.ts             the route map everything else derives from
  meta.ts               page id + copy → Next metadata
  schema.ts             JSON-LD graph
  og.tsx                OG card renderer
  site.ts  fonts.ts
scripts/verify.mjs      the browser suite
```

## Deploying

Push to `main`; Vercel builds and promotes to production. Other branches get a
preview URL — use one for Serbian copy review before it goes live.

`NEXT_PUBLIC_SITE_ORIGIN` defaults to `https://indexaseo.dev` in `lib/site.ts`,
so it is only needed if the domain changes.

## Still open

- Serbian copy for the seven subpages has not been through a native reviewer.
- Each case page states the baseline, what the numbers say and what they do not
  say, but not what was actually changed. That paragraph needs the owner.
- The third engagement lane's "16 consulting hours" is a placeholder.
- The hero pipeline panel and the run log carry illustrative values, marked with
  a dashed underline. They demonstrate how the pipeline works and are not a
  client result.
