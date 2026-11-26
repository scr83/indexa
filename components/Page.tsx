import type { Content } from '@/content/types';
import { buildGraph } from '@/lib/schema';
import Banner from './Banner';
import Nav from './Nav';
import Hero from './Hero';
import Approach from './Approach';
import Services from './Services';
import Multilingual from './Multilingual';
import Machine from './Machine';
import Engagements from './Engagements';
import Results from './Results';
import Tooling from './Tooling';
import Contact from './Contact';
import Footer from './Footer';

/** One page composition, driven entirely by the locale's content file. */
export default function Page({ c }: { c: Content }) {
  return (
    <>
      <Banner c={c} />
      <Nav c={c} pageId="home" />
      <Hero c={c} />
      <Approach c={c} />
      <Services c={c} />
      <Multilingual c={c} />
      <Machine c={c} />
      <Engagements c={c} />
      <Results c={c} />
      <Tooling c={c} />
      <Contact c={c} />
      <Footer c={c} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph(c)) }}
      />
    </>
  );
}
