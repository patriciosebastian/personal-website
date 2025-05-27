export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog',
          '/blog/*',
          '/freelance',
        ],
        disallow: [
          '/api/*',
          '/_next/*',
          '/*.json$',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blog',
          '/blog/*',
          '/freelance',
        ],
        disallow: [
          '/api/*',
        ],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: [
          '/',
          '/blog',
          '/blog/*',
          '/freelance',
        ],
        disallow: [
          '/api/*',
        ],
      },
    ],
    sitemap: 'https://patriciosalazar.dev/sitemap.xml',
    host: 'https://patriciosalazar.dev',
  }
}
