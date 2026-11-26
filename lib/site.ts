/* Single source of truth for anything that is neither copy nor layout. */

export const SITE = {
  /** No trailing slash. Override per environment if the domain changes. */
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://indexaseo.dev',
  name: 'Indexa',
  email: 'hello@indexaseo.dev',
  /** TODO: confirm the live Reportr URL before launch. */
  reportrUrl: 'https://reportr.agency',
  /** TODO: add the LinkedIn company page. */
  linkedinUrl: '#',
  registrationNumber: '68602106',
  /* Google Search Console site verification. This is the token's value only —
     the "google-site-verification=" prefix belongs to the DNS TXT form of the
     same check, not to the meta tag. */
  googleSiteVerification: 'eJlWI93qBEmhutJu2qRKMWOVItJkzufqBl-oWlIiZ1E',
  locality: 'Beograd',
  country: 'RS',
} as const;

/* No trailing slash, the root included, because Next normalises the head
   tags that way under `trailingSlash: false` and a sitemap that disagreed
   with the canonical would be two URL strings for one page. */
export const url = (path: string) => (path === '/' ? SITE.origin : `${SITE.origin}${path}`);
