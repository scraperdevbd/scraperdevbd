import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://scraperdevbd.fun/sitemap.xml',
    host: 'https://scraperdevbd.fun',
  };
}
