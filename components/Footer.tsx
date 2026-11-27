import type { Content } from '@/content/types';
import { SITE } from '@/lib/site';
import EmailLink from './EmailLink';

/* Icons are inline SVG rather than a sprite or an icon font: two glyphs do
   not justify a request, and a font would land in the critical path for
   decoration. Each link keeps an accessible name, since the icon alone
   gives a screen reader nothing. */
function LinkedInMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V21H2.4V9.5Zm7.74 0h4.95v1.57h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.21 3.3 6.21 7.59V21h-5.16v-4.82c0-1.15-.02-2.63-1.67-2.63-1.67 0-1.93 1.25-1.93 2.55V21h-5.15V9.5Z" />
    </svg>
  );
}

function GitHubMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export default function Footer({ c }: { c: Content }) {
  return (
    <footer>
      <div className="wrap foot">
        <span>
          {c.footer.left}
          <span className="mono">{c.footer.regNumber}</span>
        </span>
        <span className="foot-right">
          <span className="mono">
            <EmailLink email={c.footer.email} copiedLabel={c.contact.copied}>
              {c.footer.email}
            </EmailLink>
          </span>
          <span className="foot-social">
            <a href={SITE.linkedinUrl} rel="noopener" aria-label="LinkedIn">
              <LinkedInMark />
            </a>
            <a href={SITE.githubUrl} rel="noopener" aria-label="GitHub">
              <GitHubMark />
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}
