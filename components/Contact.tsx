import type { Content } from '@/content/types';
import { SITE } from '@/lib/site';

export default function Contact({ c }: { c: Content }) {
  return (
    <section id="contact" className="close">
      <div className="wrap pad">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <div className="sec-label">{c.contact.label}</div>
          <div>
            <h2>{c.contact.h2}</h2>
            <p className="sub">{c.contact.body}</p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <a className="btn btn-amber" href={`mailto:${c.contact.email}`}>
                {c.contact.email}
              </a>
              <a className="btn btn-oncream" href={SITE.linkedinUrl} rel="noopener">
                {c.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
