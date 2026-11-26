# indexa.rs

Bilingual marketing site for Indexa — English at `/`, Serbian at `/sr`.
Next.js 15 App Router, statically prerendered, deployed on Vercel.

## Why it's built this way

- **All copy lives in `content/en.ts` and `content/sr.ts`.** Nothing user-facing is
  hard-coded in a component. Applying a translator's edits means editing one file.
  `content/types.ts` is the shared shape, so a missing Serbian string is a type
  error rather than English leaking onto the Serbian page.
- **Two root layouts in route groups** (`app/(en)` and `app/(sr)`) so `<html lang>`
  is correct per locale. App Router can't vary it from a single root layout.
- **Fonts are committed and self-hosted** (`app/fonts/*.woff2`, wired in
  `lib/fonts.ts`). Not `next/font/google`: that makes every build depend on
  Google's CDN. The `latin-ext` subset is required for Serbian diacritics.
- **Hand-written CSS, no framework.** `app/globals.css` is tokens first, then
  components in page order. It was designed and approved as plain CSS; porting
  it to a utility framework would churn a lot of code for an identical result.
- **Two animations, both hand-rolled.** `Scramble` freezes every character to its
  final width before animating, so the headline never reflows — verified at zero
  layout shift. `CountUp` counts from the stated baseline to the result, not from
  zero, because the delta is the argument. Both respect `prefers-reduced-motion`.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Deploying

Push to `main`; Vercel builds and promotes to production. Every other branch
gets a preview URL — use one for the Serbian copy review before it goes live.

Set in Vercel → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_ORIGIN` | `https://indexa.rs` |

It defaults to `https://indexa.rs` in `lib/site.ts`, so it is only needed if the
domain changes or a preview needs absolute URLs of its own.

## Before this goes live

The banner at the top of both pages is a deliberate guard rail. Remove
`components/Banner.tsx` and its two call sites in `components/Page.tsx` once
everything below is closed.

- [x] **Case-study figures are real.** All three were verified against the raw
      Search Console screenshots, not transcribed from a summary deck. See
      "Case-study provenance" below.
- [ ] **AI-answer panel figures are real**, or the panel is cut. This is the only
      fabricated data left on the page — everything still wrapped in
      `className="ph"` renders with a dashed red underline.
- [ ] **Serbian copy reviewed by a native speaker.** See
      `indexa-sr-copy-za-pregled.md`. Apply edits to `content/sr.ts` only.
- [ ] **`lib/site.ts`**: confirm `reportrUrl`, add `linkedinUrl`.
- [ ] **Consulting hours** in the third lane — the figure of 16 is a placeholder.

## Case-study provenance

Every figure on the page traces to a Google Search Console comparison with
**matched period lengths**, except where explicitly expressed as a monthly
average. This matters because the section's own headline attacks percentages
quoted without a period — the page has to survive its own standard.

| Case | Source comparison | Published figure |
|---|---|---|
| B2B SaaS, Denmark | GSC, 6 months vs previous 6 | Impressions 584K → 885K; clicks 7.79K → 9.72K; position 18.7 → 15.2 |
| DUI defence law firm, Chile | GSC, 6 months vs previous 6 | Position 19.8 → 8.5; impressions 9.23K → 17.9K |
| Food & nutrition, 6 markets | Leads: first 3 months vs 10 years prior. GSC windows unequal (5 mo vs 10 mo), so impressions are published **per month**, never as totals | 0 → 4 leads; position 13.4 → 9; impressions 1,472 → 2,330 per month |

Deliberately **not** published:

- **CTR.** It fell in all three cases (1.3→1.1%, 3.3→2.0%, 4.9→3.6%) because
  broader query coverage adds impressions at positions 8–20 and dilutes the
  average. That is a real and defensible explanation, but CTR is a ratio, not a
  result, and three cases all trending down invites a question better answered in
  conversation than in a card. Have the answer ready.
- **Percentage growth on the food & nutrition totals.** The underlying GSC
  windows are 5 months against 10, which would roughly double any total-based
  percentage. Monthly averages are used instead.
- **Heavy machinery (Chile).** Google Ads was switched off entirely with sales
  and organic sessions held, and position went 10.8 → 5.9 — but clicks fell 14%
  in the matched comparison, so it is held back as a conversation piece rather
  than a card.

## Structure

```
app/
  (en)/layout.tsx     <html lang="en">
  (en)/page.tsx       /
  (sr)/layout.tsx     <html lang="sr-Latn">
  (sr)/sr/page.tsx    /sr
  globals.css         design tokens + components
  fonts/              self-hosted woff2
  sitemap.ts robots.ts
components/           one per section, plus Scramble and CountUp
content/              en.ts, sr.ts, types.ts — all copy
lib/                  site.ts (constants), schema.ts (JSON-LD), fonts.ts
```
