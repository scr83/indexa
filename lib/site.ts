/* Single source of truth for anything that is neither copy nor layout. */

export const SITE = {
  /** No trailing slash. Override per environment if the domain changes. */
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://indexa.rs',
  name: 'Indexa',
  email: 'hello@indexa.rs',
  /** TODO: confirm the live Reportr URL before launch. */
  reportrUrl: 'https://reportr.agency',
  /** TODO: add the LinkedIn company page. */
  linkedinUrl: '#',
  registrationNumber: '68602106',
  locality: 'Beograd',
  country: 'RS',
} as const;

export const url = (path: string) => `${SITE.origin}${path === '/' ? '/' : path}`;
