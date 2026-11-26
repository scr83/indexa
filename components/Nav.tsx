import Link from 'next/link';
import type { Content } from '@/content/types';
import { requirePath, toggleTarget, type PageId } from '@/lib/routes';

/* The nav structure is unchanged from the approved design. What changed is
   that its links are now absolute, so the same bar works on every page:
   the section links point back at the home page's sections, Results points
   at the real index page, and #contact resolves on-page because every
   template ends with the contact section.

   The service pages are deliberately not in this bar. Five items is what
   was designed, and a crowded nav is worth less than the in-body links from
   the Services section and the sibling links at the foot of each service
   page. */
export default function Nav({ c, pageId }: { c: Content; pageId: PageId }) {
  const isEn = c.locale === 'en';
  const home = requirePath('home', c.locale);
  const at = (hash: string) => (pageId === 'home' ? hash : `${home}${hash}`);
  const toggle = toggleTarget(pageId, c.locale);

  return (
    <div className="nav">
      <div className="wrap nav-in">
        <Link className="logo" href={home}>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <rect x="0" y="12" width="3.6" height="7" fill="#4E6B6C" />
            <rect x="5.6" y="8" width="3.6" height="11" fill="#8FB6A4" />
            <rect x="11.2" y="3.5" width="3.6" height="15.5" fill="#DDA34A" />
            <circle cx="17.9" cy="2.1" r="2.1" fill="#DDA34A" />
          </svg>
          indexa
        </Link>
        <nav className="nav-links">
          <Link href={at('#services')}>{c.nav.services}</Link>
          <Link href={at('#multilingual')}>{c.nav.multilingual}</Link>
          <Link href={at('#machine')}>{c.nav.machine}</Link>
          <Link href={at('#work')}>{c.nav.work}</Link>
          <Link href={requirePath('results', c.locale)}>{c.nav.results}</Link>
        </nav>
        <div className="nav-right">
          <span className="lang mono">
            {isEn ? (
              <>
                <span className="on">EN</span>
                {' / '}
                <Link href={toggle.path} hrefLang="sr">
                  SR
                </Link>
              </>
            ) : (
              <>
                <Link href={toggle.path} hrefLang="en">
                  EN
                </Link>
                {' / '}
                <span className="on">SR</span>
              </>
            )}
          </span>
          <a className="btn btn-oncream btn-sm" href="#contact">
            {c.nav.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
