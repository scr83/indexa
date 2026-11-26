import type { Content } from '@/content/types';

export default function Footer({ c }: { c: Content }) {
  return (
    <footer>
      <div className="wrap foot">
        <span>
          {c.footer.left}
          <span className="mono">{c.footer.regNumber}</span>
        </span>
        <span className="mono">
          <a href={`mailto:${c.footer.email}`}>{c.footer.email}</a>
        </span>
      </div>
    </footer>
  );
}
