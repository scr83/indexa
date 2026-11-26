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

The red banner at the top of both pages is a deliberate guard rail. Remove
`components/Banner.tsx` and its two call sites in `components/Page.tsx` once:

- [ ] **Case-study figures are real.** All three cases in both `content/*.ts` are
      invented placeholders. Anything wrapped in `className="ph"` renders with a
      dashed red underline and must be replaced or removed.
- [ ] **AI-answer panel figures are real**, or the panel is cut.
- [ ] **Serbian copy reviewed by a native speaker.** See
      `indexa-sr-copy-za-pregled.md`. Apply edits to `content/sr.ts` only.
- [ ] **`lib/site.ts`**: confirm `reportrUrl`, add `linkedinUrl`.
- [ ] **Consulting hours** in the third lane — the figure of 16 is a placeholder.

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
