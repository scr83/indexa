import type { CasePage } from '../types';

/* English case pages.

   Every figure here is exported Google Search Console data, verified
   against the raw screenshots, with matched comparison periods. Nothing on
   these pages is rounded up, extrapolated or inferred.

   The CTR row appears on these pages and not on the home cards, because
   there is room here for the reason it fell. CTR falling while impressions
   roughly double is the expected shape: the site starts appearing for a
   much wider set of queries, many of them broader and at lower positions,
   so impressions grow faster than clicks. Publishing the row with that
   explanation is worth more than omitting it and being asked. */

const FIG_HEAD: [string, string, string] = ['Metric', 'Before', 'After'];

const saas: CasePage = {
  locale: 'en',
  meta: {
    title: 'B2B SaaS, multi-market — search visibility rebuilt | Indexa case',
    description:
      'Impressions 584K to 885K over matched six-month periods on a multi-market B2B SaaS site, after an hreflang cluster rebuild. Every figure exported from Google Search Console.',
    ogTitle: 'B2B SaaS, multi-market — search visibility rebuilt',
    ogDescription:
      'Impressions 584K → 885K over matched six-month periods, with the hreflang cluster rebuilt.',
  },
  kicker: 'Case 01 · B2B SaaS · Denmark · multi-market',
  h1: 'Search visibility rebuilt across a multi-market SaaS site.',
  lede:
    'Localised pages were not being served to their own markets. An invalid region code and a trailing-slash mismatch had broken return links across the whole hreflang cluster, so Google was discarding the relationships between eight markets rather than honouring them.',
  headline: {
    from: '584K',
    to: '885K',
    label: 'Impressions, six months against the previous six',
    spark: 'M0 40 L40 41 L72 39 L100 36 L128 28 L156 20 L188 11 L240 4',
  },
  figuresLabel: 'the numbers',
  figuresHead: FIG_HEAD,
  figures: [
    { label: 'Impressions', before: '584K', after: '885K' },
    { label: 'Clicks', before: '7.79K', after: '9.72K' },
    { label: 'Average position', before: '18.7', after: '15.2', inverted: true },
    { label: 'CTR', before: '1.3%', after: '1.1%', neutral: true },
  ],
  basis:
    'Google Search Console, six months against the immediately preceding six months. Same property, same countries, no filters applied. CTR fell because impressions grew faster than clicks — the site began appearing for a much wider set of queries, many of them broader and at lower positions. That is the expected shape of a visibility recovery, not a decline in performance.',
  sections: [
    {
      label: 'the baseline',
      h2: 'Eight markets, and a cluster pointing at the wrong pages.',
      paras: [
        'The site served eight language markets from one codebase, with localised content for each. The content was there and the pages existed; what did not hold was the set of signals telling Google which page belonged to which market.',
        'Two faults did most of the damage. One locale declared a region code that is not valid, which invalidates the hreflang annotation for the pages pointing at it. The other had a trailing slash on one side of the pairing and not the other, so the return links did not resolve. hreflang is only honoured when every page in a cluster points at every other one; a cluster that fails in one direction is discarded whole, and silently.',
        'The visible symptom was the one clients usually report: visitors landing on the wrong language version, and localised pages not ranking in the market they were written for.',
      ],
    },
    {
      label: 'what the numbers say',
      h2: 'Impressions up 52%, position up 3.5 places, clicks up 25%.',
      paras: [
        'Over matched six-month periods, impressions went from 584K to 885K and clicks from 7.79K to 9.72K. Average position improved from 18.7 to 15.2 — which is still page two on most query sets, and that is the honest reading: this moved the site from invisible to competitive, not to the top of the results.',
        'CTR fell from 1.3% to 1.1%. That is in the table above rather than left out, because the explanation matters: impressions grew 52% while clicks grew 25%, so the site is now appearing for a far wider set of queries, including broader ones at lower positions where nobody clicks. A rising CTR alongside flat impressions would be a different and smaller result.',
        'The same engagement is the source of the AI-visibility panel on the home page: 74,202 impressions inside Google\'s AI answers between 25 May and 24 November 2026, rising from around 180 a day in the first thirty days to around 858 a day in the last thirty, with 94.7% of those appearances outside the client\'s home market across 207 countries.',
      ],
    },
    {
      label: 'what this does not say',
      h2: 'The limits of this case.',
      paras: [
        'It does not isolate the hreflang work as the sole cause. The client was shipping product and publishing content over the same period, and no SEO engagement on a live site is a controlled experiment. What can be said is that the cluster was broken, the fix was applied, and the recovery followed.',
        'It does not say anything about revenue. Search Console reports impressions, clicks and position; it does not report what those clicks were worth, and we do not have the client\'s commercial figures to publish.',
        'The client is anonymised at their request, so you cannot verify these numbers against the live site yourself. What you can do is ask for the comparison periods — which are stated — and check that they match. Six months compared against five is how a percentage gets manufactured, and it is the first thing worth checking in anyone\'s case study.',
      ],
    },
  ],
  services: {
    h2: 'The work behind it',
    intro: 'Two services carried this engagement.',
    ids: ['international-seo', 'technical-seo'],
  },
  others: { h2: 'Other cases' },
  backToIndex: 'Results',
};

const legal: CasePage = {
  locale: 'en',
  meta: {
    title: 'DUI defence law firm — off page two, 90% of ad spend cut | Indexa case',
    description:
      'Average position 19.8 to 8.5 over matched six-month periods for a regulated legal practice, with Google Ads spend cut by 90% while client volume held. Figures exported from Search Console.',
    ogTitle: 'DUI defence law firm — off page two, 90% of ad spend cut',
    ogDescription:
      'Average position 19.8 → 8.5, impressions nearly doubled, and 90% of the ad budget no longer needed.',
  },
  kicker: 'Case 02 · DUI defence law firm · regulated · Chile',
  h1: 'Off page two, onto page one — and 90% of the ad budget cut.',
  lede:
    'A regulated legal practice paying for Google Ads to cover the queries its own site could not rank for. The brief was not "more traffic" — it was to stop renting visibility the site should have owned.',
  headline: {
    from: '19.8',
    to: '8.5',
    label: 'Average position, six months against the previous six',
    inverted: true,
    spark: 'M0 6 L34 10 L62 9 L92 16 L124 22 L158 28 L198 33 L240 36',
  },
  figuresLabel: 'the numbers',
  figuresHead: FIG_HEAD,
  figures: [
    { label: 'Average position', before: '19.8', after: '8.5', inverted: true },
    { label: 'Impressions', before: '9.23K', after: '17.9K' },
    { label: 'CTR', before: '3.3%', after: '2.0%', neutral: true },
    { label: 'Google Ads spend', before: '100%', after: '10%', inverted: true },
  ],
  basis:
    'Google Search Console, six months against the immediately preceding six months, same property. The ad spend figure is the client\'s own: budget reduced by 90% with enquiry volume held. CTR fell as impressions nearly doubled — the practice began appearing for a much broader set of queries, including informational ones that do not convert and are not clicked.',
  sections: [
    {
      label: 'the baseline',
      h2: 'Paying for queries the site should have ranked for.',
      paras: [
        'Average position 19.8 means the second page of results on most queries — present in the index, absent from the page anyone looks at. The practice was covering that gap with Google Ads, which works and which costs money every month without ever accruing.',
        'This is a regulated category, which constrains what can be said and how. It also means the competition is largely other firms buying the same clicks, so the ad cost per enquiry rises over time rather than falling.',
      ],
    },
    {
      label: 'what the numbers say',
      h2: 'Position 19.8 to 8.5, impressions nearly doubled.',
      paras: [
        'Average position moved from 19.8 to 8.5 over matched six-month periods, and impressions went from 9.23K to 17.9K. Position 8.5 is page one on most query sets rather than the top of it, which is the accurate way to describe it.',
        'The figure the client cares about is the third one: Google Ads spend reduced by 90%, with enquiry volume held. That is their number rather than Search Console\'s, and it is the one that makes the engagement pay for itself — the organic positions now cover what the ad budget was buying.',
        'CTR fell from 3.3% to 2.0%, and the reason is the same as in every case on this site: impressions grew 94% while the practice began appearing for broader and more informational queries that attract impressions and not clicks. The clicks that matter are the ones on the commercial queries, and those are the positions that moved.',
      ],
    },
    {
      label: 'what this does not say',
      h2: 'The limits of this case.',
      paras: [
        'The 90% ad-spend reduction is reported by the client, not measured by us. We can show the organic positions that made it possible; we cannot independently verify their ad account or their enquiry volume.',
        'Position 8.5 is an average across all tracked queries, not a rank for one term. Some queries sit higher and some considerably lower, and an average is the honest way to report a set rather than cherry-picking the best one.',
        'A regulated category limits how much of the content strategy can be described publicly. The figures are the figures; the specifics of what was published are the client\'s.',
      ],
    },
  ],
  services: {
    h2: 'The work behind it',
    intro: 'The technical foundations carried this one.',
    ids: ['technical-seo', 'seo-consulting'],
  },
  others: { h2: 'Other cases' },
  backToIndex: 'Results',
};

const food: CasePage = {
  locale: 'en',
  meta: {
    title: 'Food & nutrition exporter — first leads from search in ten years | Indexa case',
    description:
      'A site live for ten years with zero enquiries from search produced its first four in three months after a rebuild. Average position 13.4 to 4.7, monthly impressions 1,472 to 2,330.',
    ogTitle: 'Food & nutrition exporter — first leads from search in ten years',
    ogDescription:
      'Zero enquiries in ten years online, then four in three months. Average position 13.4 → 4.7.',
  },
  kicker: 'Case 03 · Food & nutrition · 6 markets · 95% export revenue',
  h1: "First leads from search in the site's ten-year history.",
  lede:
    'An exporter earning 95% of its revenue outside its home market, with a website that had been live for ten years and had never produced a single enquiry through search. The baseline was not low. It was zero.',
  headline: {
    from: '0',
    to: '4',
    label: 'Enquiries through the site, first three months after the rebuild',
    spark: 'M0 44 L48 44 L96 43 L132 38 L166 28 L196 18 L220 10 L240 4',
  },
  figuresLabel: 'the numbers',
  figuresHead: FIG_HEAD,
  figures: [
    { label: 'Enquiries through the site', before: '0', after: '4' },
    { label: 'Average position', before: '13.4', after: '4.7', inverted: true },
    { label: 'Monthly impressions', before: '1,472', after: '2,330' },
    { label: 'CTR', before: '4.9%', after: '3.6%', neutral: true },
  ],
  basis:
    'Enquiries are counted through the site in the first three months after the rebuild, against a baseline of zero across ten years online; leads have continued since. Position and impression figures are from Google Search Console — 13.4 at the baseline against 4.7 today, and monthly impressions rather than a period total, because the periods are not of equal length and a total would overstate the change.',
  sections: [
    {
      label: 'the baseline',
      h2: 'Ten years online, zero enquiries from search.',
      paras: [
        'The company had never done SEO. The site existed, was indexed, and had produced no enquiries through search in a decade — which is a more useful baseline than a percentage, because there is no ambiguity about what zero means.',
        'Ninety-five percent of revenue came from export across six markets, so the demand was real and being met entirely through channels that were not the website. That is the situation where search work has the clearest case: the buyers exist and are looking, and the site is not in the results.',
      ],
    },
    {
      label: 'what the numbers say',
      h2: 'Four enquiries in three months, from a baseline of none.',
      paras: [
        'Four enquiries is a small number and it is reported as four rather than as a percentage, because a percentage increase from zero is undefined and anyone presenting one is hiding the baseline. Leads have continued since the first three months.',
        'Average position went from 13.4 at the baseline to 4.7 today, and monthly impressions from 1,472 to 2,330. Monthly averages are published here rather than period totals: the two periods are not the same length, and comparing a longer period against a shorter one inflates the apparent change. The monthly figure is the comparison that holds.',
        'CTR fell from 4.9% to 3.6%, with impressions up 58% a month. Same pattern as the other cases, same reason — broader query coverage brings impressions that do not convert into clicks, and the position improvement is where the value is.',
      ],
    },
    {
      label: 'what this does not say',
      h2: 'The limits of this case.',
      paras: [
        'Four enquiries over three months is not proof of a channel. It is proof that the channel exists, on a site where that had never been demonstrated. Treating it as more than that would be overselling it.',
        'The comparison periods here are not of equal length, which is why the figures are published as monthly averages. The totals would show a larger increase and would be misleading. If you see a case study quoting a period total without stating both period lengths, that is the thing to ask about.',
        'The enquiry count is the client\'s, recorded through their own site. Search Console does not report enquiries, and we have not audited their CRM.',
      ],
    },
  ],
  services: {
    h2: 'The work behind it',
    intro: 'Six export markets, so the international work carried this one.',
    ids: ['international-seo', 'seo-consulting'],
  },
  others: { h2: 'Other cases' },
  backToIndex: 'Results',
};

export const enCases = {
  'case-saas': saas,
  'case-legal': legal,
  'case-food': food,
} as const;

export const enResultsIndex = {
  locale: 'en' as const,
  meta: {
    title: 'SEO Case Studies — Every Number From a Stated Baseline | Indexa',
    description:
      'Three engagements with figures exported from Google Search Console and matched comparison periods: a multi-market B2B SaaS rebuild, a regulated legal practice, and an exporter with no search leads in ten years.',
    ogTitle: 'SEO Case Studies — Every Number From a Stated Baseline',
    ogDescription:
      'Three engagements, exported Search Console data, matched comparison periods, limits stated.',
  },
  kicker: 'Case results',
  h1: 'Every number here starts from a stated baseline.',
  lede:
    '"+400% organic traffic" is not a result. Four hundred percent of what, over what period, against what seasonal comparison — that is a result. Each engagement below states where it started, what the comparison periods were, and what the figures do not cover.',
  cardCta: 'Read the full case',
  note:
    'CTR fell in all three engagements. That is in each case page rather than left out: impressions grew faster than clicks because the sites began appearing for far wider query sets, including broad and informational queries that attract impressions and not clicks. A case study that reports only the metrics that went up is not reporting.',
};
