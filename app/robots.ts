import type { MetadataRoute } from 'next';
import { url } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Assistant crawlers, named explicitly. The page argues that being
      // readable by them matters, so the policy should be deliberate
      // rather than inherited from a default.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: url('/sitemap.xml'),
    host: url('/'),
  };
}

export const dynamic = 'force-static';
