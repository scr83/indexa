/* Browser verification for indexaseo.dev.
 *
 *   npm run build && npx next start -p 3100
 *   npm run verify
 *
 * Every check here exists because the thing it tests broke at least once.
 * The H1 height sampling catches layout shift during the scramble; the
 * counter assertions catch a locale-aware number parser reading Serbian
 * "1.240" as 1.24; the SVG bounds check catches labels overflowing their
 * boxes when font metrics change; the og:image check exists because the
 * pages declared twitter:card=summary_large_image with no image at all.
 */
/* Playwright is intentionally not a dependency of this project: adding it
   would make every Vercel build download browser binaries it never uses. It
   is resolved at run time through createRequire — ESM's own resolver ignores
   NODE_PATH, so a globally installed Playwright would not be found without
   it — and reports an instruction rather than a stack trace when missing. */
import { createRequire } from 'node:module';

let chromium;
try {
  ({ chromium } = createRequire(import.meta.url)('playwright'));
} catch {
  console.error(
    'This script needs Playwright, which is not a dependency of this project.\n' +
      '  npm i -D playwright && npx playwright install chromium\n' +
      'then: npm run build && npx next start -p 3100 && npm run verify',
  );
  process.exit(1);
}

const BASE = 'http://127.0.0.1:3100';

const ROUTES = [
  ['/', 'en'],
  ['/technical-seo', 'en'],
  ['/international-seo', 'en'],
  ['/seo-consulting', 'en'],
  ['/programmatic-seo', 'en'],
  ['/results', 'en'],
  ['/results/b2b-saas-multi-market', 'en'],
  ['/results/dui-defence-law-firm', 'en'],
  ['/results/food-and-nutrition-export', 'en'],
  ['/sr', 'sr-Latn'],
  ['/sr/tehnicki-seo', 'sr-Latn'],
  ['/sr/seo-konsultant', 'sr-Latn'],
  ['/sr/seo-agencija-beograd', 'sr-Latn'],
  ['/sr/rezultati', 'sr-Latn'],
  ['/sr/rezultati/b2b-saas-vise-trzista', 'sr-Latn'],
  ['/sr/rezultati/advokatska-kancelarija', 'sr-Latn'],
  ['/sr/rezultati/hrana-i-nutricija', 'sr-Latn'],
];

// pages that must have NO hreflang alternates (single-locale)
const SINGLE = new Set(['/international-seo', '/programmatic-seo', '/sr/seo-agencija-beograd']);

const fail = [];
const note = (ok, msg) => { if (!ok) fail.push(msg); };

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  const allLinks = new Set();

  for (const [route, lang] of ROUTES) {
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

    const resp = await page.goto(BASE + route, { waitUntil: 'networkidle' });
    note(resp.status() === 200, `${route}: status ${resp.status()}`);

    const got = await page.getAttribute('html', 'lang');
    note(got === lang, `${route}: html lang = ${got}, expected ${lang}`);

    const canonical = await page.getAttribute('link[rel=canonical]', 'href').catch(() => null);
    const expected = 'https://indexaseo.dev' + (route === '/' ? '' : route);
    note(canonical === expected, `${route}: canonical = ${canonical}, expected ${expected}`);

    const alts = await page.$$eval('link[rel=alternate][hreflang]', (ls) =>
      ls.map((l) => `${l.getAttribute('hreflang')}=${l.getAttribute('href')}`).sort());
    if (SINGLE.has(route)) {
      note(alts.length === 0, `${route}: expected NO hreflang, got ${JSON.stringify(alts)}`);
    } else {
      note(alts.length === 3, `${route}: expected 3 hreflang, got ${JSON.stringify(alts)}`);
    }

    const og = await page.getAttribute('meta[property="og:locale"]', 'content').catch(() => null);
    note(!!og, `${route}: missing og:locale`);

    const desc = await page.getAttribute('meta[name=description]', 'content').catch(() => null);
    note(!!desc && desc.length > 60, `${route}: description missing or too short`);

    // twitter:card promises a large image; make sure one actually exists.
    const ogImg = await page.getAttribute('meta[property="og:image"]', 'content').catch(() => null);
    note(!!ogImg, `${route}: declares twitter:card but has no og:image`);
    if (ogImg) {
      const local = ogImg.replace('https://indexaseo.dev', BASE);
      const ir = await ctx.request.get(local);
      note(ir.status() === 200, `${route}: og:image ${local} -> ${ir.status()}`);
      note((ir.headers()['content-type'] || '').includes('image/'),
        `${route}: og:image is not an image (${ir.headers()['content-type']})`);
    }
    const ogLoc = await page.getAttribute('meta[property="og:locale"]', 'content').catch(() => null);
    note(/^[a-z]{2}(_[A-Z]{2})?$/.test(ogLoc || '') && (ogLoc || '').includes('_'),
      `${route}: og:locale "${ogLoc}" is not language_TERRITORY`);

    const icon = await page.getAttribute('link[rel=icon]', 'href').catch(() => null);
    note(!!icon, `${route}: no favicon declared`);

    // JSON-LD
    const blocks = await page.$$eval('script[type="application/ld+json"]', (ss) => ss.map((s) => s.textContent));
    note(blocks.length === 1, `${route}: expected 1 JSON-LD block, got ${blocks.length}`);
    try {
      const g = JSON.parse(blocks[0]);
      note(Array.isArray(g['@graph']) && g['@graph'].length >= 2,
        `${route}: @graph too small (${g['@graph'] && g['@graph'].length})`);
      const types = g['@graph'].map((n) => n['@type']);
      if (route.includes('seo') && !route.startsWith('/results') && route !== '/' && route !== '/sr'
          && !route.includes('rezultati')) {
        note(types.includes('FAQPage'), `${route}: no FAQPage in graph (${types})`);
        note(types.includes('Service'), `${route}: no Service in graph (${types})`);
        note(types.includes('BreadcrumbList'), `${route}: no BreadcrumbList in graph (${types})`);
      }
    } catch (e) {
      note(false, `${route}: JSON-LD parse failed: ${e.message}`);
    }

    // exactly one h1
    const h1s = await page.$$eval('h1', (hs) => hs.map((h) => h.textContent.trim()));
    note(h1s.length === 1, `${route}: ${h1s.length} h1 elements`);

    // collect internal links for the dead-link sweep
    const hrefs = await page.$$eval('a[href^="/"]', (as) => as.map((a) => a.getAttribute('href')));
    hrefs.forEach((h) => allLinks.add(h.split('#')[0] || '/'));

    // horizontal overflow at several widths
    for (const w of [1440, 1024, 768, 375]) {
      await page.setViewportSize({ width: w, height: 900 });
      const over = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      note(!over, `${route}: horizontal scroll at ${w}px`);
    }
    await page.setViewportSize({ width: 1440, height: 900 });

    note(errors.length === 0, `${route}: console errors ${JSON.stringify(errors.slice(0, 3))}`);
    await page.close();
  }

  // ---- dead internal links ----
  for (const href of [...allLinks].sort()) {
    if (!href.startsWith('/')) continue;
    const r = await ctx.request.get(BASE + href);
    note(r.status() === 200, `dead link: ${href} -> ${r.status()}`);
  }

  // ---- H1 zero-CLS during scramble, both locales ----
  for (const route of ['/', '/sr', '/technical-seo', '/sr/tehnicki-seo']) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: 'domcontentloaded' });
    const samples = [];
    for (let i = 0; i < 28; i++) {
      samples.push(await page.evaluate(() => {
        const h = document.querySelector('h1');
        return h ? Math.round(h.getBoundingClientRect().height) : -1;
      }));
      await page.waitForTimeout(100);
    }
    const uniq = [...new Set(samples)];
    note(uniq.length === 1, `${route}: H1 height varied during scramble: ${JSON.stringify(uniq)}`);
    console.log(`  H1 height ${route}: ${uniq.join(',')}px across ${samples.length} samples`);
    await page.close();
  }

  // ---- counters settle on the exact figures ----
  const COUNTERS = {
    '/': ['885K', '8.5', '4'],
    '/sr': ['885K', '8,5', '4'],
    '/results': ['885K', '8.5', '4'],
    '/sr/rezultati': ['885K', '8,5', '4'],
    '/results/b2b-saas-multi-market': ['885K'],
    '/results/dui-defence-law-firm': ['8.5'],
    '/results/food-and-nutrition-export': ['4'],
    '/sr/rezultati/advokatska-kancelarija': ['8,5'],
  };
  for (const [route, expect] of Object.entries(COUNTERS)) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2600);
    const got = await page.$$eval('.delta .to', (ns) => ns.map((n) => n.textContent.trim()));
    const ok = expect.every((e) => got.includes(e));
    note(ok, `${route}: counters = ${JSON.stringify(got)}, expected to include ${JSON.stringify(expect)}`);
    console.log(`  counters ${route}: ${JSON.stringify(got)}`);
    await page.close();
  }

  // ---- AI panel figures static and exact ----
  for (const [route, want] of [['/', ['74,202', '180 → 858', '94.7%']], ['/sr', ['74.202', '180 → 858', '94,7%']]]) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: 'networkidle' });
    const got = await page.$$eval('.ai-stat .big', (ns) => ns.map((n) => n.textContent.trim()));
    note(JSON.stringify(got) === JSON.stringify(want),
      `${route}: ai stats = ${JSON.stringify(got)}, expected ${JSON.stringify(want)}`);
    const pts = await page.$eval('.ai-chart path.trace', (p) => p.getAttribute('d').split('L').length);
    note(pts === 184, `${route}: AI chart has ${pts} points, expected 184`);
    await page.close();
  }

  // ---- SVG labels inside their boxes (pipeline diagram) ----
  for (const route of ['/', '/sr']) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: 'networkidle' });
    const bad = await page.evaluate(() => {
      const svg = document.querySelector('#machine svg');
      if (!svg) return ['no #machine svg'];
      const boxes = [[16, 184], [214, 414], [448, 556], [584, 688]];
      const out = [];
      svg.querySelectorAll('text').forEach((t) => {
        const b = t.getBBox();
        if (b.y > 230) return; // the full-width caption is expected to span
        const box = boxes.find((bx) => b.x >= bx[0] - 1 && b.x <= bx[1]);
        if (!box) return;
        if (b.x + b.width > box[1] + 1) {
          out.push(`${t.textContent} ends at ${Math.round(b.x + b.width)} vs box ${box[1]}`);
        }
      });
      return out;
    });
    note(bad.length === 0, `${route}: SVG overflow ${JSON.stringify(bad)}`);
    await page.close();
  }

  // ---- sitemap & robots ----
  const sm = await (await ctx.request.get(BASE + '/sitemap.xml')).text();
  for (const [route] of ROUTES) {
    const u = 'https://indexaseo.dev' + (route === '/' ? '' : route);
    note(sm.includes(`<loc>${u}</loc>`), `sitemap missing ${u}`);
  }
  note((sm.match(/<url>/g) || []).length === ROUTES.length,
    `sitemap has ${(sm.match(/<url>/g) || []).length} urls, expected ${ROUTES.length}`);
  const lastmods = [...new Set(sm.match(/<lastmod>[^<]+<\/lastmod>/g) || [])];
  note(lastmods.every((l) => /^<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>$/.test(l)),
    `sitemap lastmod is a build timestamp, not a date: ${JSON.stringify(lastmods)}`);

  const llms = await ctx.request.get(BASE + '/llms.txt');
  note(llms.status() === 200, `llms.txt -> ${llms.status()}`);
  const llmsBody = await llms.text();
  note(llmsBody.includes('indexaseo.dev/technical-seo'), 'llms.txt does not list the service pages');

  const rb = await (await ctx.request.get(BASE + '/robots.txt')).text();
  for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityOrBust']) {
    if (bot === 'PerplexityOrBust') continue;
    note(rb.includes(bot), `robots.txt missing ${bot}`);
  }
  note(rb.includes('Sitemap:'), 'robots.txt missing Sitemap');

  await browser.close();

  console.log('\n' + '='.repeat(60));
  if (fail.length === 0) {
    console.log(`PASS — ${ROUTES.length} routes, ${allLinks.size} internal links, all checks clean.`);
  } else {
    console.log(`FAIL — ${fail.length} problem(s):`);
    fail.forEach((f) => console.log('  ✗ ' + f));
    process.exitCode = 1;
  }
})();
