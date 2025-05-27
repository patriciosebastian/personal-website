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
          '/secret-login',
          '/admin/*',
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
          '/secret-login',
          '/admin/*',
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
          '/secret-login',
          '/admin/*',
          '/api/*',
        ],
      },
    ],
    sitemap: 'https://patriciosalazar.dev/sitemap.xml',
    host: 'https://patriciosalazar.dev',
  }
}
