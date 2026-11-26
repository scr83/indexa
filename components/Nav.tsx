import Link from 'next/link';
import type { Content } from '@/content/types';

export default function Nav({ c }: { c: Content }) {
  const isEn = c.locale === 'en';
  return (
    <div className="nav">
      <div className="wrap nav-in">
        <Link className="logo" href={c.path}>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <rect x="0" y="12" width="3.6" height="7" fill="#4E6B6C" />
            <rect x="5.6" y="8" width="3.6" height="11" fill="#8FB6A4" />
            <rect x="11.2" y="3.5" width="3.6" height="15.5" fill="#DDA34A" />
            <circle cx="17.9" cy="2.1" r="2.1" fill="#DDA34A" />
          </svg>
          indexa
        </Link>
        <nav className="nav-links">
          <a href="#services">{c.nav.services}</a>
          <a href="#multilingual">{c.nav.multilingual}</a>
          <a href="#machine">{c.nav.machine}</a>
          <a href="#work">{c.nav.work}</a>
          <a href="#results">{c.nav.results}</a>
        </nav>
        <div className="nav-right">
          <span className="lang mono">
            <Link href="/" className={isEn ? 'on' : undefined} hrefLang="en">
              EN
            </Link>
            {' / '}
            <Link href="/sr" className={!isEn ? 'on' : undefined} hrefLang="sr">
              SR
            </Link>
          </span>
          <a className="btn btn-oncream btn-sm" href="#contact">
            {c.nav.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
