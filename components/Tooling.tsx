import type { Content } from '@/content/types';
import { SITE } from '@/lib/site';

export default function Tooling({ c }: { c: Content }) {
  return (
    <section id="tools" className="ivory">
      <div className="wrap pad">
        <div className="tool">
          <div>
            <div className="sec-label" style={{ marginBottom: 18 }}>
              {c.tools.label}
            </div>
            <h2>{c.tools.h2}</h2>
            {c.tools.paras.map((p, i) => (
              <p className="sub" key={i}>
                {p}
              </p>
            ))}
            <div className="cta-row" style={{ marginTop: 30 }}>
              <a className="btn btn-dark" href={SITE.reportrUrl} rel="noopener">
                {c.tools.cta}
              </a>
            </div>
          </div>

          <div>
            <div className="graph">
              <div className="graph-bar mono">{c.tools.graphBar}</div>
              <svg
                viewBox="0 0 460 230"
                role="img"
                aria-label={
                  c.locale === 'en'
                    ? 'Entity graph with Organization at the centre linked to Service, Person, FAQPage, Offer, Breadcrumb and sameAs nodes.'
                    : 'Graf entiteta sa Organization u središtu, povezanim sa Service, Person, FAQPage, Offer, Breadcrumb i sameAs čvorovima.'
                }
              >
                <g stroke="#C9C9BF" strokeWidth="1.2" fill="none">
                  <path d="M230 115 L96 48" />
                  <path d="M230 115 L368 48" />
                  <path d="M230 115 L62 128" />
                  <path d="M230 115 L398 128" />
                  <path d="M230 115 L140 196" />
                  <path d="M230 115 L326 196" />
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="10.5" textAnchor="middle">
                  <circle cx="230" cy="115" r="38" fill="#DDA34A" />
                  <text x="230" y="112" fill="#2A1C06" fontSize="10">Organization</text>
                  <text x="230" y="125" fill="#6B4A10" fontSize="8.5">@id</text>

                  <rect x="42" y="34" width="108" height="28" fill="#FBFAF6" stroke="#8FB6A4" />
                  <text x="96" y="52" fill="#2F5F4C">Service</text>

                  <rect x="314" y="34" width="108" height="28" fill="#FBFAF6" stroke="#8FB6A4" />
                  <text x="368" y="52" fill="#2F5F4C">Person</text>

                  <rect x="8" y="114" width="108" height="28" fill="#FBFAF6" stroke="#C9C9BF" />
                  <text x="62" y="132" fill="#4A5A5D">FAQPage</text>

                  <rect x="344" y="114" width="108" height="28" fill="#FBFAF6" stroke="#C9C9BF" />
                  <text x="398" y="132" fill="#4A5A5D">Offer</text>

                  <rect x="86" y="182" width="108" height="28" fill="#FBFAF6" stroke="#C9C9BF" />
                  <text x="140" y="200" fill="#4A5A5D">Breadcrumb</text>

                  <rect x="272" y="182" width="108" height="28" fill="#FFF4E2" stroke="#DDA34A" strokeDasharray="3 3" />
                  <text x="326" y="200" fill="#8A5A14">sameAs ×6</text>
                </g>
              </svg>
            </div>

            <dl className="caps">
              {c.tools.caps.map(([dt, dd]) => (
                <div className="cap" key={dt}>
                  <dt>{dt}</dt>
                  <dd>{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
