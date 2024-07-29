/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://rdcvithana.com',
  generateIndexSitemap: true, // Generate a sitemap index file
  sitemapSize: 5000, // Maximum number of URLs per sitemap file
  changefreq: 'daily', // How often the pages are updated
  priority: 0.7, // Default priority for pages
  exclude: ['/admin/**', '/private/**'], // Exclude specific paths from the sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://rdcvithana.com/sitemap.xml',
    ],
  },
};

module.exports = config;
